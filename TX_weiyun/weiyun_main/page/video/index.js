var e, o, i = require("../../common/md.js"), n = require("../../external/mta_analysis.js"), t = require("../../external/format.js").longTime;

Page({
    onLoad: function(o) {
        i.log("video onLoad"), n.Page.init(), o = o || {}, e = {
            videoSrc: decodeURIComponent(o.video_src),
            videoName: decodeURIComponent(o.video_name),
            videoCover: decodeURIComponent(o.video_cover),
            longTime: o.long_time
        }, this.getNavigationInfo();
    },
    onReady: function() {
        i.log("video onReady");
        var n = this, a = 300, d = "00:00";
        e.longTime && (d = t(e.longTime / 1e3)), wx.getSystemInfo({
            success: function(i) {
                o = i.windowWidth, a = parseInt(.75 * o), n.setData({
                    videoName: e.videoName,
                    videoCover: e.videoCover,
                    videoHeight: parseInt(.75 * o),
                    videoMargin: parseInt(-a / 2),
                    videoTimeDurning: d
                });
            },
            fail: function(e) {
                i.log("[main page]: wx.getSystemInfo fail: " + e), i.write();
            }
        });
    },
    onShow: function() {
        i.log("video onShow");
    },
    bindThumbTap: function() {
        var e = this;
        this.data.videoPlay || (i.log("[video page]: bindThumbTap"), wx.getNetworkType({
            success: function(o) {
                var n = o.networkType;
                i.log("[video page]: network: " + n), "wifi" != n ? wx.showModal({
                    title: "确定要在非wifi下播放吗？",
                    success: function(o) {
                        o.cancel || e.playVideo();
                    },
                    fail: function() {
                        e.playVideo();
                    }
                }) : e.playVideo();
            },
            fail: function() {
                e.playVideo();
            }
        }));
    },
    playVideo: function() {
        i.log("[video page]: playVideo: " + e.videoSrc), this.setData({
            videoPlay: !0,
            videoSrc: e.videoSrc
        });
    },
    bindVideoError: function() {},
    data: {
        videoSrc: "",
        videoCover: "",
        videoName: "",
        videoTimeDurning: "00:00",
        videoHeight: 300,
        videoMargin: 150,
        videoPlay: !1
    },
    getNavigationInfo: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(o) {
                console.log("getSystemInfo success res", o);
                var i = o.platform, n = o.statusBarHeight, t = "android" == i ? 48 : 44, a = "android" == i ? 48 + n : 44 + n;
                e.setData({
                    platform: i,
                    statusBarHeight: n,
                    navigationBarHeight: t,
                    navigationHeight: a
                });
            },
            fail: function(e) {
                console.log("getSystemInfo fail res", e);
            },
            complete: function(e) {
                console.log("getSystemInfo complete res", e);
            }
        });
    }
});