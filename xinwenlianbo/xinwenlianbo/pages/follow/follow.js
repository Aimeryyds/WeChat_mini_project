function o(o, a, t) {
    return a in o ? Object.defineProperty(o, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[a] = t, o;
}

var a, t, e = getApp(), l = wx.getBackgroundAudioManager(), n = require("../../utils/audioStorage.js");

Page((a = {
    data: {
        netInfo: {},
        followData: "",
        followStorageArray: [],
        followStorageArraylength: 0,
        exceed: !1,
        sWidth: "",
        sHeight: "",
        scrollHeight: "",
        audioIsHide: !0,
        value: 0,
        percent: 0,
        max: 0,
        pass_time: "00:00",
        total_time: "00:00",
        isPlaying: !1,
        dataAudio: {
            audiotitle: "",
            audiostate: "",
            audioztime: ""
        }
    },
    getFollowData: function() {
        wx.request({
            url: "https://m.cctv.com/wxapplianbo/guanzhu/index.json",
            success: function(o) {
                t.setData({
                    followData: o.data.data
                }), t.Contrast();
            }
        });
    },
    Contrast: function() {
        for (var o = 0; o < t.data.followStorageArray.length; o++) for (var a = 0; a < t.data.followData.length; a++) t.data.followData[a].title == t.data.followStorageArray[o].follow && (t.data.followData[a].followindex = t.data.followStorageArray[o].follow);
        t.setData({
            followData: t.data.followData,
            followStorageArraylength: t.data.followStorageArray.length
        }), wx.hideToast();
    },
    cancelContrast: function(o) {
        t.data.followStorageArray.length < 7 && t.setData({
            exceed: !1
        }), t.data.followData[o].followindex = "", t.setData({
            followData: t.data.followData,
            followStorageArraylength: t.data.followStorageArray.length
        });
    },
    clickfollow: function(o) {
        if (t.data.followStorageArray.length < 7) {
            var a = o.currentTarget.dataset;
            t.data.followStorageArray.unshift({
                follow: a.key
            }), wx.setStorage({
                key: "followStorage",
                data: t.data.followStorageArray
            }), t.Contrast();
        } else t.setData({
            exceed: !0
        });
    },
    clickCancelFollow: function(o) {
        for (var a = o.currentTarget.dataset, e = 0; e < t.data.followStorageArray.length; e++) t.data.followStorageArray[e].follow == a.key && t.data.followStorageArray.splice(e, 1);
        wx.setStorage({
            key: "followStorage",
            data: t.data.followStorageArray
        }), t.cancelContrast(a.index);
    },
    closeexceed: function() {
        t.setData({
            exceed: !1
        });
    },
    clickClearStorage: function() {
        wx.clearStorage(), console.log("清除缓存");
    },
    getPageData: function() {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), t.getFollowData(), wx.getStorage({
            key: "followStorage",
            success: function(o) {
                t.setData({
                    followStorageArray: o.data
                });
            }
        });
    },
    onLoad: function() {
        (t = this).wxzxSlider = t.selectComponent("#wxzxSlider"), wx.getSystemInfo({
            success: function(o) {
                o.model.indexOf("iPhone X"), t.setData({
                    sWidth: o.windowWidth,
                    sHeight: o.windowHeight,
                    scrollHeight: o.windowHeight - 124 - 54,
                    marginbottom: 0,
                    _marginbottom: 54
                }), t.setData({
                    sWidth: o.windowWidth,
                    sHeight: o.windowHeight,
                    scrollHeight: o.windowHeight - 124 - 54
                });
            }
        }), t.setData({
            windowinfo: e.globalData.windowinfo
        }), e.getNetInfo(t);
    },
    onReady: function() {
        t.data.netInfo.status && t.getPageData();
    },
    onShow: function() {
        t.getPageData();
    },
    rushPage: function() {
        e.getNetInfo(t);
        setTimeout(function() {
            t.data.netInfo.status && t.getPageData();
        }, 500);
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新"), t.rushPage();
        setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    gotoonegzpage: function(o) {
        var a = o.currentTarget.dataset.val;
        wx.navigateTo({
            url: "../onegzpage/onegzpage?tag=" + a
        });
    },
    sliderTap: function(o) {
        n.seek(t, l);
    },
    sliderStart: function(o) {
        console.log("sliderStart");
    },
    sliderChange: function(o) {
        console.log("sliderChange");
    },
    sliderEnd: function(o) {
        console.log("sliderEnd"), n.seek(t, l);
    },
    sliderCancel: function(o) {
        console.log("sliderCancel"), n.seek(t, l);
    },
    songToggle: function() {
        n.songToggle(t, l);
    }
}, o(a, "onShow", function() {
    n.readAudio("storageAudio", t), n.audioEvent(t, l);
}), o(a, "onUnload", function() {
    1 == t.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), n.saveAudio("storageAudio", t.data.dataAudio, t)) : (console.log("暂停音频跳出，清理音频缓存"), 
    n.removeAudio("storageAudio"));
}), a));