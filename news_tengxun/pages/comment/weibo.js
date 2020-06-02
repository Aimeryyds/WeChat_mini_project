var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/slicedToArray")), i = e(require("../../utils/mlodash")), n = e(require("../../utils/logger")), a = require("../../store/index"), r = require("../../services/comment"), o = require("../../services/report"), c = require("../../services/share"), s = require("../topic/service");

Page({
    data: {
        articleId: "",
        commentId: "",
        atype: "",
        fromPage: o.FROM_PAGE.weibo_detail_page,
        commentHeight: "",
        commentList: [],
        commentIsForbidden: !1,
        commentBnext: 0,
        commentLastReplyId: "",
        scrollTop: 0,
        weiboInfo: {},
        shareTitle: "",
        commentLoading: !0,
        ready: !1,
        showPushGuide: !0
    },
    onLoad: function(e) {
        this.setData({
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
            n.default.error("拉取评论列表出错: ", e);
        }), Promise.all([ this.weiboReq, this.commentReq ]).then(function() {
            if ("1" === e.query.inputPanel && 0 === e.data.commentList.length && !e.data.commentIsForbidden) {
                var t = {
                    articleId: e.data.articleId,
                    commentId: e.data.commentId,
                    pubType: 1
                }, i = a.article.getSyncFn(e.data.syncId);
                i && (t.callback = i, a.article.showInputPanel(t));
            }
        });
    },
    onShow: function(e) {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function(e) {
        var t = {
            fromPage: this.data.fromPage
        };
        "button" === e.from ? t.pageArea = i.default.get(e, "target.dataset.pageArea", o.PAGE_AREA.cell) : "menu" === e.from && (t.pageArea = o.PAGE_AREA.menu);
        var n = this.data.weiboInfo, a = (n.card, n.content, n.articleId), r = n.atype, s = n.imageList;
        return (0, c.genArticleShareMsg)({
            title: this.data.shareTitle,
            id: a,
            atype: r,
            imageUrl: s.length ? null : "http://mat1.gtimg.com/www/images/newsapp/wxapp/news/bg_huati.png"
        }, t);
    },
    init: function() {
        var e = this;
        this.weiboReq = (0, s.getWeibo)(this.query.id).then(function(t) {
            e.setGuideStatus();
            var i = t.content ? "的动态:" + t.content : "发布了一条新动态";
            e.setData({
                weiboInfo: t,
                shareTitle: t.card.chlname + i,
                atype: t.atype,
                showType: 1,
                commentId: t.commentId,
                articleId: t.articleId,
                ready: !0
            }), e.calcRect();
        }).catch(function(e) {
            n.default.error("获取微博信息失败: ", e);
        }), this.commentReq = (0, r.getComment)(this.query.id);
    },
    calcRect: function() {
        var e = this;
        this.$domQuery = this.createSelectorQuery().selectViewport().boundingClientRect().select(".comment-bar").boundingClientRect(), 
        this.$domQuery.exec(function(i) {
            var n = (0, t.default)(i, 2), a = n[0], r = n[1];
            e.setData({
                commentHeight: a.height - r.height
            });
        });
    },
    setGuideStatus: function() {
        wx.getStorageSync("weiboPushGuide") ? this.setData({
            showPushGuide: !1
        }) : wx.setStorageSync("weiboPushGuide", 1);
    }
});