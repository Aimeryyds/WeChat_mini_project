Page({
    data: {
        currentTab: 0
    },
    swichNav: function(t) {
        var n = this;
        if (this.data.currentTab === t.target.dataset.current) return !1;
        n.setData({
            currentTab: t.target.dataset.current
        });
    },
    swiperChange: function(t) {
        this.setData({
            currentTab: t.detail.current
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "title",
            desc: "desc",
            path: "path"
        };
    }
});