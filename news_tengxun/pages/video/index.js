var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/slicedToArray")), i = e(require("../../utils/mlodash")), a = e(require("../../utils/logger")), o = require("./service.js"), n = require("../../services/share"), r = require("../../services/report"), s = require("../../store/index"), d = require("../../services/appScheme"), c = require("../../utils/common"), u = s.constant.pageStatus;

Page({
    data: {
        videoList: [],
        fromPage: r.FROM_PAGE.video_detail_page,
        pageArea: r.PAGE_AREA.cell,
        activeIndex: 0,
        showMore: !1,
        appParameter: "",
        reportParams: {
            successOpType: r.OP_TYPE.open_speed_click,
            failOpType: r.OP_TYPE.open_speed_failure,
            fromPage: r.FROM_PAGE.video_detail_page
        },
        OP_TYPE: r.OP_TYPE,
        coverAnimation: [],
        autoPlayNext: !1,
        navigateBackHome: !1,
        infiniteLoad: !0,
        isFromApp: !1,
        isIphoneX: !1,
        status: s.constant.pageStatus,
        pageStatus: u.loading
    },
    onLoad: function(e) {
        Object.assign(this, {
            query: e,
            videoCount: 0,
            $domQuery: {},
            videoIndexMap: new Map(),
            scrollTop: 0,
            nextActiveIndex: null,
            playing: !1,
            showCoverTimer: null,
            coverIsHide: !0,
            coverAnimation: wx.createAnimation(),
            barHeight: 0,
            nextIndex: -1,
            preRenderHomeTimer: null
        });
        try {
            var t = s.systemInfo.menuButtonRect;
            ("devtools" === s.systemInfo.platform || (0, c.versionGte)(s.systemInfo.version, "7.0.0")) && (this.barHeight = t.bottom + t.height / 4);
        } catch (e) {
            a.default.error("读取systemInfo.menuButtonRect失败", e, s.systemInfo.menuButtonRect);
        }
        this.init(), "1" === this.query.fromApp && (0, r.report)({
            opType: r.OP_TYPE.open_speed_exposure,
            fromPage: this.data.fromPage,
            articleId: this.query.id
        });
    },
    onReady: function() {
        var e = this;
        this.getRecommendPending = !0, (0, o.getRecommend)(this.query, !0).then(function(t) {
            e.getRecommendPending = !1, e.setRecommendData(t);
        }).catch(function(t) {
            e.getRecommendPending = !1, a.default.error("获取视频相关推荐失败：", t);
        }).then(function() {
            e.preRenderHomeTimer = setTimeout(function() {
                s.home.emit(s.home.event.renderRecommendPage);
            }, 5e3);
        });
    },
    onShow: function(e) {},
    onHide: function() {
        clearTimeout(this.preRenderHomeTimer);
    },
    onUnload: function() {
        clearTimeout(this.preRenderHomeTimer);
    },
    onPageScroll: function(e) {
        var t = this;
        if (this.scrollTop = e && e.scrollTop, this.hideCover(), -1 !== this.nextIndex) this.nextActiveIndex = this.nextIndex; else if (i.default.forEach(this.rects, function(e) {
            if (e.scrollTop + e.height / 2 > t.scrollTop) return t.nextActiveIndex = e.index, 
            !1;
        }), this.data.infiniteLoad && this.nextActiveIndex + 5 >= this.videoCount) {
            if (this.getRecommendPending) return;
            this.getRecommendPending = !0, (0, o.getRecommend)(this.query).then(function(e) {
                t.getRecommendPending = !1, t.setRecommendData(e);
            }).catch(function(e) {
                a.default.error("获取视频相关推荐失败：", e), t.getRecommendPending = !1;
            });
        }
        this.playNextActive(this.nextActiveIndex);
    },
    onShareAppMessage: function(e) {
        if ("button" === e.from) {
            var t = {
                fromPage: this.data.fromPage,
                pageArea: r.PAGE_AREA.cell
            }, a = i.default.get(e, "target.dataset", {});
            return a.isCollection ? (0, n.genArticleShareMsg)({
                id: this.query.id,
                activeId: a.articleId,
                cur_vid: a.vid,
                atype: this.query.atype,
                title: a.title
            }, t) : (0, n.genArticleShareMsg)({
                id: a.articleId,
                atype: a.atype,
                title: a.title
            }, t);
        }
        if ("menu" === e.from) {
            var s = i.default.get(this.data.videoList, "0.0", {}), d = {
                title: s.title,
                atype: this.query.atype,
                id: this.query.id
            };
            return this.query.atype === o.ARTICLE_TYPE.COLLECTION && (d.useScreenShot = !0, 
            d.cur_vid = s.vid), (0, n.genArticleShareMsg)(d, {
                fromPage: this.data.fromPage,
                pageArea: r.PAGE_AREA.menu
            });
        }
    },
    onVideoPlay: function(e) {
        this.videoIndexMap.get(this.data.activeIndex);
        this.playing = !0, this.setData({
            autoPlayNext: !0
        }), this.showCover();
    },
    onVideoPause: function(e) {},
    onVideoEnded: function(e) {
        var t = i.default.get(e, "currentTarget.dataset.index"), a = i.default.findIndex(this.rects, function(e) {
            return e.index === t;
        }), o = this.rects[a + 1];
        o && (this.nextIndex = o.index, this.nextActiveIndex = o.index, this.hideCover(), 
        this.playNextActive(this.nextActiveIndex), wx.pageScrollTo({
            scrollTop: o.scrollTop
        }));
    },
    tapActiveArea: function(e) {
        var t = i.default.get(e, "currentTarget.dataset.index"), a = this.videoIndexMap.get(t);
        a && (0, r.report)({
            opType: r.OP_TYPE.cell_click,
            fromPage: this.data.fromPage,
            articleId: a.articleId,
            articleType: a.atype,
            vid: a.vid
        });
    },
    tapCover: function(e) {
        var t = i.default.get(e, "currentTarget.dataset.index"), o = i.default.find(this.rects, function(e) {
            return e.index === t;
        });
        o ? a.default.info("点击cover区域：index=".concat(t, ", rect="), o) : (a.default.error("FIXME: rect not found", o, t, e, this.rects, this.videoIndexMap.get(t)), 
        o = {}), this.nextIndex = t, this.nextActiveIndex = t, this.hideCover(), this.playNextActive(this.nextActiveIndex), 
        wx.pageScrollTo({
            scrollTop: o.scrollTop
        });
        var n = this.videoIndexMap.get(t);
        n && (0, r.report)({
            opType: r.OP_TYPE.cell_click,
            fromPage: this.data.fromPage,
            articleId: n.articleId,
            articleType: n.atype,
            vid: n.vid
        });
    },
    tapMoreBtn: function() {
        var e = this;
        this.setData({
            showMore: !0
        }, function() {
            e.$domQuery.exec(function(i) {
                var a = (0, t.default)(i, 2), o = a[0], n = a[1];
                e.formatItemRect(o, n);
            });
        }), (0, r.report)({
            opType: r.OP_TYPE.video_album_click,
            fromPage: this.data.fromPage
        });
    },
    tapNextVideoBtn: function() {},
    init: function() {
        var e, n = this, c = {};
        return this.query.atype === o.ARTICLE_TYPE.COLLECTION ? (c.fromPage = r.FROM_PAGE.videotopic_page, 
        e = o.getCollection) : (c.fromPage = r.FROM_PAGE.video_detail_page, e = o.getSingle), 
        "1" === this.query.fromApp && (c.isFromApp = !0, this.query.atype === o.ARTICLE_TYPE.COLLECTION ? c.fromPage = r.FROM_PAGE.videotopic_share_detail_page : c.fromPage = r.FROM_PAGE.video_share_detail_page, 
        c.appParameter = (0, d.getScheme)({
            fromPage: c.fromPage,
            bossName: "speed",
            options: {
                nm: this.query.id
            }
        })), "1" === this.query.fromJump && (c.navigateBackHome = !0, s.home.backFromShare = !0), 
        c.isIphoneX = s.systemInfo.isIphoneX, c.articleId = this.query.id, this.setData(c), 
        this.$domQuery = this.createSelectorQuery().selectAll(".video-wrapper").boundingClientRect().selectViewport().fields({
            scrollOffset: !0,
            size: !0
        }), e(this.query.id, this.query.cur_vid).then(function(e) {
            var a = [ e.list, e.moreList ].concat(n.data.videoList);
            i.default.forEach(a, function(e) {
                i.default.forEach(e, function(e) {
                    e.index = n.videoCount, n.videoCount += 1, n.videoIndexMap.set(e.index, e);
                });
            });
            var r = {
                videoList: a,
                pageStatus: u.ready
            };
            n.data.isFromApp && n.query.atype === o.ARTICLE_TYPE.COLLECTION && (r.fixList = e.fixList);
            var d = i.default.get(a, "0.0");
            r.scopeData = {
                type: "video",
                uniq_id: d.articleId,
                title: d.title,
                cover: d.snapshot || d.posterShareImg || "http://mat1.gtimg.com/www/images/news_minipro/news_default_poster.png"
            }, n.setData(r), n.$domQuery.exec(function(e) {
                var i = (0, t.default)(e, 2), a = i[0], o = i[1];
                n.formatItemRect(a, o);
            }), "wifi" === s.systemInfo.networkType && n.play(0);
        }).catch(function(e) {
            a.default.error("视频底层页初始化出现错误：", e), e && 1 === e.ret ? n.setData({
                pageStatus: u.delete
            }) : n.setData({
                pageStatus: u.error
            });
        });
    },
    setRecommendData: function(e) {
        var a = this, n = {};
        this.data.videoList.length && i.default.forEach(e.recommendList, function(e) {
            e.index = a.videoCount, a.videoCount += 1, a.videoIndexMap.set(e.index, e);
        }), this.query.fromApp && this.query.atype !== o.ARTICLE_TYPE.COLLECTION && (n.fixList = e.fixList), 
        "1" === this.query.fromApp && (n.infiniteLoad = !1), n["videoList[".concat(this.data.videoList.length, "]")] = e.recommendList, 
        this.setData(n, function() {
            a.$domQuery.exec(function(e) {
                var i = (0, t.default)(e, 2), o = i[0], n = i[1];
                a.formatItemRect(o, n);
            });
        });
    },
    formatItemRect: function(e, t) {
        var a = this;
        this.rects = i.default.map(e, function(e) {
            return {
                index: i.default.get(e, "dataset.index", -1),
                scrollTop: e.top + t.scrollTop - a.barHeight - 3,
                height: e.height
            };
        });
    },
    play: function(e) {
        this.playing = !0;
        var t = this.videoIndexMap.get(e) || {};
        t._uid && (a.default.info("开始播放：", e, t.vid, t.title), s.video.play(t._uid));
    },
    playNextActive: function(e) {
        var t = this;
        this.playing = !1, clearTimeout(this.playTimer), this.playTimer = setTimeout(function() {
            if ((e || 0 === e) && -1 !== e && e !== t.data.activeIndex) {
                t.setData({
                    activeIndex: e
                }), t.nextActiveIndex = null;
                var i = t.videoIndexMap.get(t.data.activeIndex) || {};
                a.default.info("切换activeIndex", t.data.activeIndex, i.vid, i.title);
            }
            (t.data.autoPlayNext || -1 !== t.nextIndex) && t.play(t.data.activeIndex), t.nextIndex = -1, 
            t.showCover();
        }, 300);
    },
    showCover: function() {
        var e = this;
        clearTimeout(this.showCoverTimer), this.playing && (this.showCoverTimer = setTimeout(function() {
            e.coverIsHide = !1, e.coverAnimation.opacity(1).step({
                duration: 500,
                timingFunction: "ease"
            }), e.setData({
                coverAnimation: e.coverAnimation.export()
            });
        }, 1e3));
    },
    hideCover: function() {
        this.coverIsHide || (this.coverIsHide = !0, this.coverAnimation.opacity(0).step({
            duration: 100
        }), this.setData({
            coverAnimation: this.coverAnimation.export()
        }));
    }
});