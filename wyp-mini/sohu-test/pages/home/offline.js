getApp();

var t = [ function(t) {
    t.data.pullDownErr && (t.fetchNewsList({
        action: 1,
        mode: 2
    }), t.setData({
        pullDownErr: !1
    }));
} ];

module.exports = {
    offlineTaskList: [],
    monitorNetState: function(o) {
        wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(n) {
            n.isConnected ? t.forEach(function(t) {
                t(o);
            }) : wx.showToast({
                title: "哎呀，没网络了",
                icon: "none",
                duration: 2e3
            });
        });
    }
};