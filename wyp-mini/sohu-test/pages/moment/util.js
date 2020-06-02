getApp();

module.exports = {
    monitorNetState: function() {
        wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(t) {
            t.isConnected || wx.showToast({
                title: "哎呀，没网络了",
                icon: "success",
                duration: 2e3
            });
        });
    }
};