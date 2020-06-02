function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), n = require("../../../utils/qqmap-wx-jssdk.js"), o = require("../../../utils/https.js"), i = new n({
    key: "2MRBZ-HLZK2-XI3UA-CEIP5-HWINT-LZFQD"
}), s = 60, c = function t(a) {
    if (0 == s) return a.setData({
        is_show: !0
    }), void (s = 60);
    a.setData({
        is_show: !1,
        last_time: s
    }), s--, setTimeout(function() {
        t(a);
    }, 1e3);
};

Page((a = {
    data: {
        tit: "请输入验证码",
        titcode: "验证码已发送至手机",
        Length: 6,
        isFocus: !0,
        Value: "",
        ispassword: !1,
        phone: "",
        lat: "",
        lng: "",
        city: "",
        province: "",
        adcode: "",
        last_time: "",
        is_show: !0,
        is_logining: !1
    },
    onShow: function() {},
    onLoad: function(t) {
        var a = this;
        c(a), a.setData({
            phone: t.phone
        }), a.GetMyLocation();
    },
    losinput: function(t) {
        var a = this, e = t.detail.value;
        a.setData({
            Value: e
        }), e.length;
    },
    loginbtn: function() {
        var t = this;
        6 === this.data.Value.length && t.Login();
    },
    Login: function() {
        if (e.globalData.vs = !1, !this.is_logining) {
            var t = this;
            this.is_logining = !0, setTimeout(function() {
                t.is_logining = !1;
            }, 4e3), wx.login({
                success: function(a) {
                    if (a.code) {
                        wx.setStorageSync("code", a.code);
                        var n = {
                            account: t.data.phone,
                            code: t.data.Value,
                            phone: "",
                            lat: t.data.lat ? t.data.lat : 0,
                            lng: t.data.lng ? t.data.lng : 0,
                            province: t.data.province ? t.data.province : "",
                            city: t.data.city ? t.data.city : "",
                            adcode: t.data.adcode ? t.data.adcode : "",
                            wxcode: a.code,
                            client_type: 3
                        };
                        o.req11("MenberUser/UserLogin", n, function(a, n) {
                            t.is_logining = !1, 0 == n.data.code ? (e.globalData.exitlogin = !1, wx.showToast({
                                title: "登录成功",
                                icon: "success",
                                mask: !0,
                                duration: 5e3
                            }), wx.setStorageSync("uid", n.data.data.uid), wx.setStorageSync("vid", n.data.data.vid), 
                            wx.setStorageSync("account", n.data.data.account), wx.setStorageSync("token", n.data.data.token), 
                            wx.setStorageSync("ip", n.data.data.ip), wx.setStorageSync("port", n.data.data.port), 
                            wx.setStorageSync("depositstate", n.data.data.deposit), wx.setStorageSync("certify", n.data.data.certify), 
                            wx.setStorageSync("hasridingcard", n.data.data.hasridingcard), wx.setStorageSync("zhimacreditstate", n.data.data.zhimacreditstate), 
                            wx.setStorageSync("wxpayscorestate", n.data.data.wxpayscorestate), t.DefaultNum(), 
                            setTimeout(function() {
                                wx.hideToast(), wx.reLaunch({
                                    url: "../../index/index?adcode=" + t.data.adcode
                                });
                            }, 2e3)) : wx.showModal({
                                title: "",
                                content: n.data.retmsg,
                                showCancel: !1,
                                success: function(t) {
                                    t.confirm ? wx.navigateBack() : t.cancel;
                                }
                            });
                        });
                    } else console.log(a.errMsg);
                }
            });
        }
    },
    GetMyLocation: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                var n = a.latitude, o = a.longitude;
                i.reverseGeocoder({
                    location: {
                        latitude: n,
                        longitude: o
                    },
                    success: function(a) {
                        var n = a.result.ad_info.location.lat, o = a.result.ad_info.location.lng, i = a.result.address_component.city + a.result.address_component.district, s = a.result.address_component.province;
                        a.result.ad_info.adcode;
                        t.setData({
                            lat: n,
                            lng: o,
                            city: i,
                            province: s,
                            adcode: e.globalData.myAreaid
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    },
                    complete: function(t) {}
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    bindKeyInput: function(t) {
        this.setData({
            code: t.detail.value
        });
    },
    Focus: function(t) {
        var a = this, e = t.detail.value;
        a.setData({
            Value: e
        });
    },
    Focusinput: function(t) {
        this.setData({
            Value: ""
        }), this.Tap();
    },
    Tap: function() {
        this.setData({
            isFocus: !0
        });
    },
    aginCode: function() {
        var t = this;
        c(t);
        var a = {
            account: t.data.phone,
            type: 4
        };
        o.req("User/GetCode", a, function(t, a) {
            0 == a.data.code ? wx.showToast({
                title: "发送成功",
                icon: "success",
                duration: 2e3
            }) : wx.showModal({
                title: "操作失败",
                content: a.data.retmsg,
                showCancel: !1
            });
        });
    },
    DefaultNum: function() {
        var t = this, a = {
            uid: wx.getStorageSync("uid"),
            lat: t.data.lat,
            lng: t.data.lng
        };
        o.req("User/AppParm", a, function(t, a) {
            if (0 == a.data.code) wx.setStorageSync("deposit", a.data.data.deposit), wx.setStorageSync("startprice", a.data.data.startprice), 
            wx.setStorageSync("startmin", a.data.data.startmin), wx.setStorageSync("everymin", a.data.data.everymin), 
            wx.setStorageSync("everyprice", a.data.data.everyprice);
        });
    },
    onReady: function() {}
}, t(a, "onShow", function() {
    this.Tap();
}), t(a, "onHide", function() {}), t(a, "onUnload", function() {}), t(a, "onPullDownRefresh", function() {}), 
t(a, "onReachBottom", function() {}), t(a, "onShareAppMessage", function() {}), 
a));