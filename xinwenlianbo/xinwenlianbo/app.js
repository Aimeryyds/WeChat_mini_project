var n = "";

App({
    onLaunch: function() {
        var t = wx.getUpdateManager();
        t.onCheckForUpdate(function(n) {
            console.log(n.hasUpdate);
        }), t.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本已更新，是否重启应用？",
                success: function(n) {
                    n.confirm && t.applyUpdate();
                }
            });
        }), t.onUpdateFailed(function() {}), (n = this).getWidthAndHeight(), wx.removeStorage({
            key: "storageAudio",
            success: function(n) {
                console.log("重启小程序清楚之前的音频播放缓存"), console.log(n);
            }
        });
    },
    getUserInfo: function(t) {
        n.globalData.userInfo ? "function" == typeof t && t(n.globalData.userInfo) : wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(o) {
                        n.globalData.userInfo = o.userInfo, "function" == typeof t && t(n.globalData.userInfo);
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null,
        APP_ID: "wx0278ea548a3862b9"
    },
    getChangeNet: function(n) {
        wx.onNetworkStatusChange(function(t) {
            var o = {};
            o.status = t.isConnected, o.networkType = t.networkType, n.setData({
                changeNetInfo: o
            });
        });
    },
    getNetInfo: function(n) {
        wx.getNetworkType({
            success: function(t) {
                var o = {};
                o.netWorkType = t.networkType, "none" != t.networkType ? o.status = !0 : o.status = !1, 
                n.setData({
                    netInfo: o
                });
            }
        });
    },
    getWidthAndHeight: function() {
        wx.getSystemInfo({
            success: function(t) {
                var o = {};
                o.windowWidth = t.windowWidth, o.windowHeight = t.windowHeight, n.globalData.windowinfo = o;
            }
        });
    },
    onHide: function() {
        console.log("进入后台工作模式");
        wx.getBackgroundAudioManager(), getCurrentPages();
    },
    onShow: function() {}
});