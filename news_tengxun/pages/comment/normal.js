var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/slicedToArray")), i = e(require("../../utils/mlodash")), a = e(require("../../utils/logger")), n = require("../../services/article"), r = require("../../services/comment"), o = require("../../store/index"), c = require("../../services/report"), m = require("../../services/share");

Page({
    data: {
        articleId: "",
        commentId: "",
        atype: "",
        title: "",
        articleBlock: !1,
        fromPage: c.FROM_PAGE.all_comment_page,
        commentHeight: "",
        commentList: [],
        commentIsForbidden: !1,
        commentBnext: 0,
        commentLastReplyId: "",
        scrollTop: 0,
        bgLoading: !0,
        commentLoading: !0,
        showOriginBtn: !0
    },
    onLoad: function(e) {
        "normal" === e.comeFrom && this.setData({
            showOriginBtn: !1
        }), this.setData({
            articleId: e.id || "",
            commentId: e.commentId || "",
            atype: e.atype || "",
            title: e.title || "",
            syncId: "syncid_" + Math.random().toString(36).substr(2, 10)
        }), this.init();
    },
    onReady: function() {
        var e = this;
        return this.commentReq.then(function(t) {
            e.setData({
                ready: !0,
                commentList: t.list,
                commentIsForbidden: t.isForbidden || !1,
                commentBnext: t.bnext,
                commentLastReplyId: t.lastReplyId,
                commentLoading: !1
            });
        }).catch(function(e) {
            a.default.error("拉取评论列表出错: ", e);
        }), Promise.all([ this.normalReq, this.commentReq ]).then(function() {
            if (0 === e.data.commentList.length && !e.data.commentIsForbidden) {
                var t = {
                    articleId: e.data.articleId,
                    commentId: e.data.commentId,
                    pubType: 1
                }, i = o.article.getSyncFn(e.data.syncId);
                i && (t.callback = i, o.article.showInputPanel(t));
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
        }, a = {
            fromPage: this.data.fromPage
        };
        if ("button" === e.from) {
            var n = i.default.get(e, "target.dataset", {});
            a.pageArea = n.pageArea;
        } else "menu" === e.from && (a.pageArea = c.PAGE_AREA.menu);
        return (0, m.genArticleShareMsg)(t, a);
    },
    init: function() {
        var e = this;
        this.calcRect(), this.normalReq = (0, n.getNormal)(this.query.id).then(function(t) {
            e.setData({
                articleId: t.articleId || "",
                commentId: t.commentId || "",
                atype: t.atype || "",
                title: t.title || "",
                timestamp: t.timestamp,
                chlid: t.chlid,
                chlname: t.chlname,
                chlicon: t.chlicon,
                articleBlock: t.articleBlock || !1,
                posterShareImg: t.posterShareImg,
                bgLoading: !1
            });
        }).catch(function(e) {
            a.default.error("拉取文章内容出错:", e);
        }), this.commentReq = (0, r.getComment)(this.query.id);
    },
    calcRect: function() {
        var e = this;
        this.$domQuery = this.createSelectorQuery().selectViewport().boundingClientRect(), 
        this.$domQuery.exec(function(i) {
            var a = (0, t.default)(i, 1)[0];
            e.setData({
                commentHeight: a.height - 50
            });
        });
    }
});