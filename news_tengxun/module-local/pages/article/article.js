var e = require("../../../@babel/runtime/helpers/interopRequireWildcard"), t = e(require("../../js/const")), a = e(require("../../js/util")), i = e(require("../../js/store/lc-article")), r = require("../../js/lc-common"), s = getApp().global;

Page({
    data: {
        articleData: {},
        showType: 0,
        queryData: {},
        relatedData: [],
        shareUserInfo: s.userInfo,
        shareArticleInfo: {},
        shareType: t.posterType.lcNormal,
        articleId: "",
        articleCommentId: ""
    },
    onLoad: function(e) {
        this.setData({
            showType: 1,
            queryData: {
                id: e.id
            },
            articleId: e.id
        }), this.getArticleData(), s.mta.Page.init();
    },
    onShareAppMessage: function() {
        return a.extend({}, t.shareDefaultInfo, this.shareInfo || {});
    },
    getArticleData: function() {
        i.getArticleDetail(this, this.data.queryData, function(e) {
            var t = {};
            t.id = e.id, t.title = e.title, t.headImgUrl = e.cover || "", t.pageUrl = a.getArticleUrl(e), 
            this.setShareData(t), this.setData({
                shareArticleInfo: t
            });
        }.bind(this));
    },
    setShareData: function(e) {
        this.shareInfo = {
            title: e.title,
            imageUrl: a.fetchImageUrl(e.id, this.data.shareType),
            path: e.pageUrl,
            success: function(e) {},
            fail: function(e) {}
        };
    },
    getRelatedData: function() {
        i.getRelatedArticles(this, this.data.queryData);
    },
    onReachBottom: function() {
        this.selectComponent("#lcComment").getMoreComments();
    },
    handleShareShow: function(e) {
        (0, r.showShareDialog)(this);
    }
});