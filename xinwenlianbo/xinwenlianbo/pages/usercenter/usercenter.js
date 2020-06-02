function e(e, o, n) {
    return o in e ? Object.defineProperty(e, o, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = n, e;
}

var o, n = "", t = getApp(), a = wx.getBackgroundAudioManager(), i = require("../../utils/audioStorage.js");

Page((o = {
    data: {
        usesrInfo: {
            nickName: "",
            avatarUrl: ""
        },
        isAuth: !1,
        ifok: "",
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
    onLoad: function(e) {
        (n = this).wxzxSlider = n.selectComponent("#wxzxSlider"), n.rushPage();
    },
    onReady: function() {},
    onHide: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getPageData: function() {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            mask: !0,
            duration: 2e3
        }), n.getFuqDate(), n.setyskpData(), n.setLookLianBo();
    },
    rushPage: function() {
        t.getNetInfo(n), t.getUserInfo({
            success: function(e) {
                var o = e.userInfo;
                n.setData({
                    usesrInfo: {
                        nickName: o.nickName,
                        avatarUrl: o.avatarUrl
                    },
                    isAuth: !0,
                    isok: !0
                });
            },
            fail: function(e) {
                n.setData({
                    usesrInfo: {
                        nickName: "游客",
                        avatarUrl: "http://tva4.sinaimg.cn/crop.6.5.171.171.180/75dda851jw8ev8xowav75j2050050aa5.jpg"
                    },
                    isAuth: !1,
                    isok: !1
                });
            }
        });
    },
    getUserInfo: function() {
        wx.getUserInfo({
            success: function(e) {
                var o = e.userInfo;
                n.setData({
                    usesrInfo: {
                        nickName: o.nickName,
                        avatarUrl: o.avatarUrl
                    },
                    isAuth: !0,
                    isok: !0
                });
            },
            fail: function(e) {}
        });
    },
    loginCCTV: function(e) {
        wx.request({
            url: "https://reg.cctv.com/OauthClientWeixin/OAuthMobileWeixinSmallServlet.do",
            data: {
                code: e,
                appid: t.globalData.APP_ID,
                from: encodeURIComponent("http://lianboplus.regclientuser.cntv.cn")
            },
            success: function(e) {
                var o = e.header["Set-Cookie"], n = {};
                n.uid = e.data.user_seq_id, function() {
                    var e = o.split("verifycode="), t = e[1].split(";")[0], a = e[1].split("Expires=")[1].split(";")[0];
                    n.expire = a, n.token = t, wx.setStorage({
                        key: "user",
                        data: n
                    });
                }();
            },
            fail: function() {
                console.log("访问接口失败");
            }
        });
    }
}, e(o, "onPullDownRefresh", function() {
    console.log("下拉刷新"), n.rushPage();
    setTimeout(function() {
        wx.stopPullDownRefresh();
    }, 1e3);
}), e(o, "sliderTap", function(e) {
    i.seek(n, a);
}), e(o, "sliderStart", function(e) {
    console.log("sliderStart");
}), e(o, "sliderChange", function(e) {
    console.log("sliderChange");
}), e(o, "sliderEnd", function(e) {
    console.log("sliderEnd"), i.seek(n, a);
}), e(o, "sliderCancel", function(e) {
    console.log("sliderCancel"), i.seek(n, a);
}), e(o, "songToggle", function() {
    i.songToggle(n, a);
}), e(o, "onShow", function() {
    1 == n.data.lb_show && 1 == n.data.list_show || n.rushPage(), i.readAudio("storageAudio", n), 
    i.audioEvent(n, a);
}), e(o, "onUnload", function() {
    1 == n.data.isPlaying ? (console.log("播放中跳出,缓存音频数据"), i.saveAudio("storageAudio", n.data.dataAudio, n)) : (console.log("暂停音频跳出，清理音频缓存"), 
    i.removeAudio("storageAudio"));
}), o));