getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4
    },
    onShareAppMessage: function(t) {
        return {
            title: this.data.articleDetail.title,
            path: "/pages/index/index?goArticle=" + this.data.articleId,
            imageUrl: this.data.articleDetail.cover_img.big + "?imageMogr2/gravity/Center/crop/328x262"
        };
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
    }
});