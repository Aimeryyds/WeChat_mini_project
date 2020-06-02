getApp();

var t = {
    monitorNetState: function(a) {
        wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(e) {
            e.isConnected ? t.switchPlayState(a, e) : wx.showToast({
                title: "哎呀，没网络了",
                icon: "none",
                duration: 2e3
            });
        });
    },
    checkIsWifi: function(a) {
        wx.getNetworkType({
            success: function(e) {
                t.switchPlayState(a, e);
            }
        });
    },
    switchPlayState: function(a, e) {
        if ("wifi" == e.networkType) a.setData({
            "playState.isWifi": !0
        }), t.startPlay(a); else {
            if (a.setData({
                "playState.isWifi": !1
            }), a.data.playState.allowNoWifiPlay) return;
            a.data.playState.paused || t.pausePlay(a);
        }
    },
    startPlay: function(t) {
        var a = wx.createVideoContext("page-video-top", t);
        t.setData({
            "playState.paused": !1,
            "playState.done": !1
        }), a && a.play();
    },
    pausePlay: function(t) {
        var a = wx.createVideoContext("page-video-top", t);
        t.setData({
            "playState.paused": !0
        }), a && a.pause();
    }
};

module.exports = t;