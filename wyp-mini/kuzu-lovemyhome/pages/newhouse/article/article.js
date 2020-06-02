Page({
    data: {
        articledata: ""
    },
    onLoad: function(t) {
        console.log(t), this.getArticleList(t);
    },
    getArticleList: function(t) {
        var e = this;
        wx.request({
            url: "https://appapi.5i5j.com/article/estate",
            method: "POST",
            data: {
                estateID: t.estateid,
                propertyTypeID: t.propertyTypeID
            },
            success: function(t) {
                console.log(t), e.setData({
                    articledata: t.data.data.results
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});