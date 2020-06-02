var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/slicedToArray")), i = e(require("../../utils/mlodash")), n = require("../../services/article"), a = require("../../services/comment"), r = require("../../store/index"), o = require("../../services/report"), s = require("../../services/share"), c = e(require("../../utils/logger"));

Page({
    data: {
        articleId: "",
        commentId: "",
        vid: "",
        snapshot: "",
        playCount: "",
        durationStr: "",
        atype: "",
        title: "",
        posterShareImg: "",
        fromPage: o.FROM_PAGE.video_comment_page,
        commentStr: "",
        commentHeight: "",
        commentList: [],
        commentIsForbidden: !1,
        commentBnext: 0,
        commentLastReplyId: "",
        commentLoading: !0
    },
    onLoad: function(e) {
        Object.assign(this, {
            $domQuery: null
        }), this.setData({
            _uid: "uid_" + Math.random().toString(36).substr(2, 10),
            syncId: "syncid_" + Math.random().toString(36).substr(2, 10)
        }), this.init();
    },
    onReady: function() {
        var e = this;
        return this.commentReq.then(function(t) {
            e.setData({
                commentList: t.list,
                commentIsForbidden: t.isForbidden || !1,
                commentBnext: t.bnext,
                commentLastReplyId: t.lastReplyId,
                commentLoading: !1
            });
        }).catch(function(e) {
            c.default.error("拉取评论列表出错: ", e);
        }), Promise.all([ this.videoReq, this.commentReq ]).then(function() {
            if (0 === e.data.commentList.length && !e.data.commentIsForbidden) {
                var t = {
                    articleId: e.data.articleId,
                    commentId: e.data.commentId,
                    pubType: 1
                }, i = r.article.getSyncFn(e.data.syncId);
                i && (t.callback = i, r.article.showInputPanel(t));
            }
        });
    },
    onShow: function(e) {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function(e) {
        var t = {
            title: this.data.title,
            atype: this.data.atype,
            id: this.data.articleId
        }, n = {
            fromPage: this.data.fromPage
        };
        if ("button" === e.from) {
            var a = i.default.get(e, "target.dataset", {});
            n.pageArea = a.pageArea;
        } else "menu" === e.from && (n.pageArea = o.PAGE_AREA.menu);
        return (0, s.genArticleShareMsg)(t, n);
    },
    init: function() {
        var e = this;
        this.calcRect(), this.videoReq = (0, n.getVideo)(this.query.id, this.query.vid).then(function(t) {
            var i = {
                vid: t.vid || "",
                snapshot: t.snapshot || "",
                playCount: t.playCount || "",
                durationStr: t.durationStr || "",
                articleId: t.articleId || "",
                commentId: t.commentId || "",
                atype: t.atype || "",
                title: t.title || "",
                posterShareImg: t.posterShareImg || ""
            };
            e.setData(i), "wifi" === r.systemInfo.networkType && r.video.play(e.data._uid), 
            e.query.playing;
        }).catch(function(e) {
            c.default.error("拉取视频信息出错：", e);
        }), this.commentReq = (0, a.getComment)(this.query.id);
    },
    calcRect: function() {
        var e = this;
        this.$domQuery = this.createSelectorQuery().selectViewport().boundingClientRect().select(".video-wrapper").boundingClientRect().select(".comment-bar-wrapper").boundingClientRect(), 
        this.$domQuery.exec(function(i) {
            var n = (0, t.default)(i, 3), a = n[0], r = n[1], o = n[2];
            e.setData({
                commentHeight: a.height - r.height - o.height
            });
        });
    }
});