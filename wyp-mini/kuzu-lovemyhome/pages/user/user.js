var t = getApp(), o = require("../../utils/gio-minp/index.js").default, a = require("../../sdk/gioConfig.js").default;

o("setConfig", a), Page({
    data: {
        userInfo: [],
        phonenumber: "",
        cityId: 1,
        unReadNum: 0
    },
    onLoad: function(t) {
        void 0 !== t.cityId && this.setData({
            cityId: t.cityId
        }), this.loginChange();
    },
    loginChange: function() {
        var t = this;
        if (t.data.loginStatus = wx.getStorageSync("loginStatus"), console.log("loginStatus:" + t.data.loginStatus), 
        "1" == t.data.loginStatus) {
            t.setData({
                userInfo: wx.getStorageSync("userInfo"),
                loginStatus: t.data.loginStatus
            }), console.log(t.data.userInfo);
            var o = t.data.userInfo.loginname;
            null == o && (o = t.data.userInfo.nickname), t.data.phonenumber = o.substring(0, 3) + "****" + o.substring(8), 
            console.log("phonenumber", t.data.phonenumber), t.setData({
                phonenumber: t.data.phonenumber
            }), t.getUnreadNum(t.data.userInfo.uid), t.listenSocket(t.data.userInfo.uid);
        }
    },
    btnclick: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    toFocus: function() {
        var t = this;
        console.log("loginStatus:", t.data.loginStatus), "1" == t.data.loginStatus ? wx.navigateTo({
            url: "../myfocus/myfocus"
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    toBrowse: function() {
        var t = this;
        console.log("loginStatus:", t.data.loginStatus), "1" == t.data.loginStatus ? wx.navigateTo({
            url: "../browse/browse"
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    logout: function() {
        wx.removeStorageSync("userInfo"), wx.removeStorageSync("loginStatus"), o("clearUserId"), 
        this.setData({
            userInfo: [],
            loginStatus: 0
        }), wx.closeSocket();
    },
    toHome: function() {
        wx.reLaunch({
            url: "../index?city=" + this.data.cityId
        });
    },
    toMessage: function() {
        wx.navigateTo({
            url: "../message/message?cityId=" + this.data.cityId
        });
    },
    getUnreadNum: function(o) {
        var a = this, n = t.globalData.url_host;
        wx.request({
            url: n + "/wxim/messageunread",
            method: "POST",
            data: {
                user_id: o
            },
            success: function(t) {
                console.log(t.data);
                var o = t.data.count;
                o > 99 && (o = "99+"), a.setData({
                    unReadNum: o
                });
            }
        });
    },
    listenSocket: function(t) {
        var o = this;
        wx.onSocketMessage(function(a) {
            var n = JSON.parse(a.data);
            console.log(n), void 0 === n.type && o.getUnreadNum(t), console.log(JSON.parse(a.data));
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {}
});