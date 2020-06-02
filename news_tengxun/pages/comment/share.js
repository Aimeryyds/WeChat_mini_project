var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/mlodash")), i = require("../../services/article"), n = require("../../services/comment"), a = require("../../services/jump"), r = require("../../services/report"), o = require("../../services/share"), c = require("../../store/index"), m = e(require("../../utils/logger"));

Page({
    data: {
        articleId: "",
        commentId: "",
        atype: "",
        title: "",
        articleBlock: !1,
        fromPage: r.FROM_PAGE.comment_landing_page,
        pageArea: r.PAGE_AREA.comment,
        commentList: [],
        commentIsForbidden: !1,
        commentBnext: 0,
        commentLastReplyId: "",
        recommendList: [],
        scrollTop: 0,
        ready: !1,
        commentLoading: !0,
        isIphoneX: c.systemInfo.isIphoneX
    },
    onLoad: function(e) {
        this.setData({
            articleId: e.id || "",
            commentId: e.commentId || "",
            atype: e.atype || "",
            title: e.title || "",
            syncId: "syncid_" + Math.random().toString(36).substr(2, 10)
        }), this.init();
    },
    onReady: function() {
        var e = this;
        this.getComment.then(function(t) {
            e.setData({
                commentList: t.list,
                commentIsForbidden: t.isForbidden || !1,
                commentBnext: t.bnext,
                commentLastReplyId: t.lastReplyId,
                commentLoading: !1
            });
        }).catch(function(e) {
            m.default.error("拉取评论列表出错: ", e);
        }), this.getShareRecommend.then(function(t) {
            e.setData({
                recommendList: t.slice(0, 10)
            });
        }).catch(function(e) {
            m.default.error("拉取推荐列表出错：", e);
        });
    },
    onShow: function(e) {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function(e) {
        var i = {
            title: this.data.title,
            atype: this.data.atype,
            id: this.data.articleId
        }, n = {
            fromPage: this.data.fromPage
        };
        if ("button" === e.from) {
            var a = t.default.get(e, "target.dataset", {});
            n.pageArea = a.pageArea;
        } else "menu" === e.from && (n.pageArea = r.PAGE_AREA.menu);
        return (0, o.genArticleShareMsg)(i, n);
    },
    init: function() {
        var e = this;
        (0, i.getNormal)(this.query.id).then(function(t) {
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
                ready: !0
            });
        }).catch(function(e) {
            m.default.error("拉取文章内容出错：", e);
        }), this.getComment = (0, n.getComment)(this.query.id), this.getShareRecommend = (0, 
        i.getShareRecommend)(this.query.id);
    },
    tapGoHome: function() {
        wx.switchTab({
            url: a.PAGE_PATH.HOME
        });
    }
});