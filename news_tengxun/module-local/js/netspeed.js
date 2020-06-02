var n, e, t, o, r, i = {
    LOW: {
        SPOT: 600,
        TYPE: 0,
        MSG: "网络差"
    },
    MIDDLE: {
        SPOT: 400,
        TYPE: 1,
        MSG: "网络一般"
    },
    HIGH: {
        TYPE: 2,
        MSG: "网络良好"
    },
    NONE: {
        TYPE: 3,
        MSG: "没有网络，请检查网络连接"
    },
    UNKNOWN: {
        TYPE: 4,
        MSG: "获取网络状态失败"
    }
}, w = {
    NET_SPEED: i,
    startNetwork: function() {
        var n = this;
        return new Promise(function(e, t) {
            wx.getNetworkType({
                success: function(t) {
                    "none" != t.networkType && (r = !0), n.network().then(function(n) {
                        n.type = t.networkType, e(n);
                    });
                },
                fail: function() {
                    e({
                        type: "unknown",
                        networkType: i.UNKNOWN.TYPE,
                        networkContent: i.UNKNOWN.MSG
                    });
                }
            });
        });
    },
    network: function() {
        return e = new Date().getTime(), new Promise(function(w, T) {
            r ? (n = wx.downloadFile({
                url: "https://p.qpic.cn/ruop/0/1535341034/0",
                success: function(n) {
                    n = {};
                    t = new Date().getTime(), n = (o = t - e) > i.LOW.SPOT ? {
                        duration: o,
                        networkType: i.LOW.TYPE,
                        networkContent: i.LOW.MSG
                    } : o > i.MIDDLE.SPOT ? {
                        duration: o,
                        networkType: i.MIDDLE.TYPE,
                        networkContent: i.MIDDLE.MSG
                    } : {
                        duration: o,
                        networkType: i.HIGH.TYPE,
                        networkContent: i.HIGH.MSG
                    }, w(n);
                },
                fail: function(n) {
                    w({
                        networkType: i.LOW.TYPE,
                        networkContent: i.LOW.MSG
                    });
                }
            })).onProgressUpdate(function(n) {
                n.progress < 100 && (t = new Date().getTime(), o > i.LOW.SPOT && w({
                    duration: o,
                    networkType: i.LOW.TYPE,
                    networkContent: i.LOW.MSG
                }));
            }) : w({
                networkType: i.NONE.TYPE,
                networkContent: i.NONE.MSG
            });
        });
    },
    stopNetwork: function() {
        clearTimeout(void 0), n.abort();
    },
    usenet: function() {
        return new Promise(function(n, e) {
            wx.getNetworkType({
                success: function(t) {
                    "none" == t.networkType ? (wx.showToast({
                        icon: "none",
                        title: "请检查您的网络"
                    }), e()) : n();
                },
                fail: function() {
                    e();
                }
            });
        });
    }
};

module.exports = w;