var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../utils/mlodash")), a = t(require("../../network/login")), i = require("../../services/jump"), o = require("../../utils/common"), n = require("../../services/report"), s = require("../../store/index"), r = require("./service"), u = require("../../utils/parser"), c = {
    1: "正常",
    2: "审核中",
    3: "删除",
    4: "审核未通过",
    5: "不推荐"
};

Component({
    properties: {
        articleId: {
            type: String,
            observer: function(t) {
                t && (this.updateCommentCount(s.comment.commentCountMap[t]), this.updatePushCount(s.weibo.pushCountMap[t]), 
                s.comment.watch("commentCountMap.".concat(t), this.updateCommentCount), s.weibo.watch("pushCountMap.".concat(t), this.updatePushCount), 
                this.setData({
                    isPushSend: Boolean(this.data.pushTimes)
                }));
            }
        },
        card: Object,
        time: String,
        content: {
            type: String,
            observer: function(t) {
                t && this.setData({
                    emojiContent: (0, u.emojiParser)(t)
                });
            }
        },
        videoInfo: Object,
        imageList: Array,
        pushInfo: String,
        commentId: String,
        atype: String,
        timestamp: Number,
        date: String,
        posterShareImg: String,
        relation: Object,
        topic: Object,
        isVideo: Boolean,
        fromPage: String,
        collapse: Boolean,
        hotComment: Object,
        syncId: String,
        showPushGuide: {
            type: Boolean,
            observer: function(t) {
                var e = this;
                t && setTimeout(function() {
                    e.setData({
                        showPushGuideDelay: !0
                    }), setTimeout(function() {
                        e.setData({
                            hidePushGuide: !0
                        });
                    }, 4e3);
                }, 4e3);
            }
        },
        isFirstArticle: {
            type: Boolean,
            value: !0
        },
        isSelf: Boolean,
        isFake: Boolean,
        status: {
            type: Number,
            observer: function(t) {
                2 !== t && 4 !== t || this.setData({
                    statusStr: c[t]
                });
            }
        },
        disableBottomBar: Boolean,
        disableGoDetail: Boolean,
        withDeleteBtn: Boolean,
        withFollowBtn: Boolean,
        withTopicName: Boolean,
        withStatus: Boolean,
        disableTapUser: Boolean
    },
    data: {
        showShareGuide: !1,
        shareText: "",
        aniCon: [],
        rocketScale: !1,
        pageArea: n.PAGE_AREA.window,
        hidePushGuide: !1,
        statusStr: "",
        FROM_PAGE: n.FROM_PAGE,
        isDeleted: !1
    },
    attached: function() {
        var t = this, a = e.default.get(s.userData, "appConf.share_text", "海报");
        this.setData({
            shareText: a,
            aniCon: this.getAniCon()
        }), this.debounceReport = e.default.debounce(function() {
            return t.reportPush();
        }, 3e3), this.debounceShowNum = e.default.debounce(function() {
            t.setData({
                isPushing: !1
            });
        }, 500), this.animation = wx.createAnimation();
    },
    created: function() {
        this.commentCount = 0, this.updateCommentCount = this.updateCommentCount.bind(this), 
        this.updatePushCount = this.updatePushCount.bind(this);
    },
    detached: function() {
        s.comment.unWatch("commentCountMap.".concat(this.data.articleId), this.updateCommentCount), 
        s.weibo.unWatch("pushCountMap.".concat(this.data.articleId), this.updatePushCount);
    },
    methods: {
        tapPoster: function() {
            if (!this.data.disableBottomBar) {
                var t = this.data, e = t.articleId, a = t.posterShareImg, i = t.isVideo, o = t.atype, r = t.content, u = t.card, c = t.fromPage, d = r ? "的动态:" + r : "发布了一条新动态";
                s.poster.genPoster(c, n.PAGE_AREA.cell, {
                    articleId: e,
                    imgUrl: a,
                    isVideo: i,
                    title: u.chlname + d,
                    atype: o
                });
            }
        },
        imgTap: function(t) {
            var e = t.currentTarget.id, a = this.data.imageList, i = a[e].url || a[e].origUrl, o = [];
            for (var n in a) o.push(a[n].url || a[n].origUrl);
            wx.previewImage({
                current: i,
                urls: o
            });
        },
        imgError: function(t) {
            var e = t.currentTarget.id, a = this.data.imageList;
            a[e].hide = !0, this.setData({
                imageList: a
            });
        },
        mediaTap: function() {
            if (this.data.disableTapUser) this.commentTap(); else {
                var t = this.data.card || {};
                t.isMedia && t.mediaId ? (0, i.navigateTo)(i.PAGE_PATH.USER, {
                    mediaId: t.mediaId
                }) : t.uin && t.coral_uid && (0, i.navigateTo)(i.PAGE_PATH.USER, {
                    uin: t.uin,
                    coral_uid: t.coral_uid
                });
            }
        },
        commentTap: function() {
            var t = this.data, e = t.articleId, a = t.commentId, o = t.atype, r = t.disableGoDetail;
            if (!t.disableBottomBar) {
                if (r) {
                    var u = {
                        articleId: e,
                        commentId: a,
                        pubType: 1
                    }, c = s.article.getSyncFn(this.data.syncId);
                    c && (u.callback = c, s.article.showInputPanel(u));
                } else (0, i.navigateTo)(i.PAGE_PATH.COMMENT_WEIBO, {
                    id: e,
                    atype: o,
                    inputPanel: 1
                });
                (0, n.report)({
                    opType: n.OP_TYPE.comment_icon_click,
                    fromPage: this.data.fromPage,
                    articleId: this.data.articleId,
                    topicId: this.data.topic && this.data.topic.tpid,
                    articleType: this.data.atype,
                    commentCount: this.commentCount
                });
            }
        },
        contentTap: function() {
            var t = this.data, e = t.articleId, a = t.atype, o = t.disableGoDetail;
            t.disableBottomBar || o || (0, i.navigateTo)(i.PAGE_PATH.COMMENT_WEIBO, {
                id: e,
                atype: a
            });
        },
        topicTap: function() {
            this.data.topic && this.data.topic.tpid && (0, i.navigateTo)(i.PAGE_PATH.TOPIC, {
                tpid: this.data.topic.tpid
            });
        },
        relationTap: function(t) {
            var e = this.data.relation;
            e.id && (0, i.navigateTo)((0, i.atypeToUrl)(e.atype, {
                id: e.id
            }));
        },
        updateCommentCount: function(t) {
            this.commentCount = t || 0, this.setData({
                comments: (0, o.formatCount)(t)
            });
        },
        updatePushCount: function(t) {
            var e = s.weibo.pushTimesMap[this.data.articleId] || 0, a = Boolean(e);
            0 === Number(t) && (a = !1, e = 0), this.setData({
                pushTimes: e,
                pushCount: t,
                pushCountStr: (0, o.formatCount)(t),
                isPushed: a
            });
        },
        tapPush: function() {
            var t = this;
            this.data.disableBottomBar || (0, a.default)().then(function() {
                var e = t.data, a = e.articleId, i = e.pushTimes, o = e.isPushSend, u = e.showPushGuide;
                if (i < 20 && !o) {
                    t.setData({
                        isPushed: !0,
                        isPushing: !0,
                        pushTimes: i + 1,
                        rocketScale: !0,
                        iconAnimation: t.animation.export()
                    }, function() {
                        setTimeout(function() {
                            t.setData({
                                rocketScale: !1
                            });
                        }, 80);
                    }), wx.vibrateShort({}), s.weibo.pushTimesMap[a] = i + 1;
                    var c = s.weibo.pushCountMap[a] || 0;
                    s.weibo.pushCountMap[a] = c + (0, r.getAddPushCount)(i + 1);
                } else t.animation.scale(.2).step(), t.setData({
                    showShareGuide: !0,
                    animation: t.animation.export()
                }, function() {
                    t.animation.scale(1).step({
                        duration: 200
                    }), t.setData({
                        animation: t.animation.export()
                    });
                }), (0, n.report)({
                    opType: n.OP_TYPE.push_share_exposure,
                    fromPage: t.data.fromPage,
                    articleId: t.data.articleId
                });
                t.debounceReport(), t.debounceShowNum(), u && t.setData({
                    hidePushGuide: !0
                });
            });
        },
        reportPush: function() {
            var t = this.data, e = t.articleId, a = t.pushTimes;
            t.isPushSend || ((0, r.reportInterest)(e, (0, r.getFinalPushCount)(a)), (0, n.report)({
                opType: n.OP_TYPE.pushWeiboClick,
                fromPage: this.data.fromPage,
                articleId: this.data.articleId,
                pushCount: (0, r.getFinalPushCount)(a)
            }), this.setData({
                isPushSend: !0
            }));
        },
        getAniCon: function() {
            for (var t = [], e = 0; e < 21; e++) {
                var a = 160 * (Math.random() - .6), i = .8 * Math.random() + 1, o = .1 * Math.random() + .9, n = e > 10 ? 0 : -54, s = (e - 1) % 10 * -264, r = {};
                r.angle = a, r.numStyle = "background-position: bottom ".concat(n, "rpx left ").concat(s, "rpx;"), 
                r.rocketStyle = "transform: rotate(".concat(a, "deg);\n          width: ").concat(500 * i, "rpx;\n          height: ").concat(250 * i, "rpx;\n          background-size: ").concat(6e3 * i, "rpx ").concat(250 * i, "rpx;\n          bottom: ").concat(30 * i, "rpx;\n          right: ").concat(-150 * i, "rpx;"), 
                r.opacity = o, t.push(r);
            }
            return t;
        },
        closeShareTap: function() {
            this.setData({
                showShareGuide: !1
            });
        },
        noJump: function() {},
        onDeleteItem: function(t) {
            var e = this;
            wx.showToast({
                title: "正在删除",
                icon: "loading"
            }), (0, r.deleteWeibo)({
                id: this.data.articleId
            }).then(function() {
                wx.showToast({
                    title: "删除成功",
                    icon: "success"
                }), e.setData({
                    isDeleted: !0
                }), e.triggerEvent("delete", {
                    articleId: e.data.articleId,
                    isFake: e.data.isFake,
                    success: !0
                });
            }).catch(function(t) {
                logger.error("删除微博失败：", t), wx.showToast({
                    title: "删除失败",
                    icon: "none"
                }), e.triggerEvent("delete", {
                    articleId: e.data.articleId,
                    isFake: e.data.isFake,
                    success: !1
                });
            });
        }
    }
});