getApp();

var t = [ function(t) {
    t.loadInitData();
} ];

module.exports = {
    offlineTaskList: [],
    monitorNetState: function(n) {
        wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(o) {
            o.isConnected ? t.forEach(function(t) {
                t(n);
            }) : wx.showToast({
                title: "哎呀，没网络了",
                icon: "none",
                duration: 2e3
            });
        });
    }
};