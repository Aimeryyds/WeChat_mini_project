var e = require("../../14E98D478A740DDF728FE5401BCCC841.js"), t = getApp(), r = !0;

Page({
    data: {
        navTxtStr: "领取礼包",
        navTopBackShow: !0,
        navHeight: t.globalData.navStatusbarHeight + t.globalData.navTopHeight,
        imgUrl: "",
        userId: t.currentUser.uid,
        userName: t.currentUser.user_name,
        userHead: t.currentUser.head_url,
        huodongStr: "",
        huodongnickStr: "活动"
    },
    onLoad: function(e) {
        var a = this;
        a.setData({
            userId: t.currentUser.uid,
            userName: t.currentUser.user_name,
            userHead: t.currentUser.head_url
        }), e.template ? (a.zhiboRegistorYesterday(), r = !0) : wx.switchTab({
            url: "./../home/home"
        });
    },
    onReady: function() {},
    onShow: function() {
        r || wx.switchTab({
            url: "./../home/home"
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    MethodComponent: function() {
        wx.switchTab({
            url: "./../home/home"
        });
    },
    giveGiftPacket: function() {
        r = !1;
        var a = {
            api_key: t.opApiKey,
            v: "1.0",
            call_id: Date.parse(new Date()),
            session_key: t.currentUser.session_key
        };
        a.sig = e.getsign(a), wx.request({
            url: t.apiurl + "whisper/giveGiftPacket",
            data: a,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {},
            fail: function() {}
        });
    },
    zhiboRegistorYesterday: function() {
        var r = this, a = {
            api_key: t.opApiKey,
            v: "1.0",
            call_id: Date.parse(new Date()),
            session_key: t.currentUser.session_key
        };
        a.sig = e.getsign(a), wx.request({
            url: t.apiurl + "whisper/zhiboRegistorYesterday",
            data: a,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                var a = e.data;
                1 == a.result || 3 == a.result ? (t.globalData.huodongStr = "礼包活动", r.setData({
                    imgUrl: a.imgUrl,
                    huodongnickStr: "新用户"
                })) : (t.globalData.huodongStr = "", wx.switchTab({
                    url: "./../home/home"
                }));
            },
            fail: function() {
                wx.switchTab({
                    url: "./../home/home"
                });
            }
        });
    }
});