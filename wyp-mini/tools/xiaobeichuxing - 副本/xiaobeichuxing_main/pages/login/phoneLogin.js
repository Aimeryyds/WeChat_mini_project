var t = getApp(), a = require("../../utils/https.js"), e = new (require("../../utils/qqmap-wx-jssdk.js"))({
    key: "2MRBZ-HLZK2-XI3UA-CEIP5-HWINT-LZFQD"
});

Page({
    data: {
        code: "",
        lat: "",
        lng: "",
        province: "",
        city: "",
        adcode: "",
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    getPhoneNumber: function(e) {
        if (t.globalData.vs = !1, void 0 != e.detail.iv) {
            var o = this, n = {
                wxcode: this.data.code,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv,
                client_type: 3,
                lat: o.data.lat ? o.data.lat : 0,
                lng: o.data.lng ? o.data.lng : 0,
                province: o.data.province ? o.data.province : "",
                city: o.data.city ? o.data.city : "",
                adcode: o.data.adcode ? o.data.adcode : ""
            };
            a.req11("V2.0/UserLogin/UserWXLogin", n, function(a, e) {
                0 == e.data.code ? (t.globalData.exitlogin = !1, wx.showToast({
                    title: "登录成功",
                    icon: "success",
                    mask: !0,
                    duration: 5e3
                }), wx.setStorageSync("uid", e.data.data.uid), wx.setStorageSync("account", e.data.data.account), 
                wx.setStorageSync("token", e.data.data.token), wx.setStorageSync("ip", e.data.data.ip), 
                wx.setStorageSync("port", e.data.data.port), wx.setStorageSync("depositstate", e.data.data.deposit), 
                wx.setStorageSync("certify", e.data.data.certify), wx.setStorageSync("hasridingcard", e.data.data.hasridingcard), 
                wx.setStorageSync("zhimacreditstate", e.data.data.zhimacreditstate), wx.setStorageSync("wxpayscorestate", e.data.data.wxpayscorestate), 
                o.DefaultNum(), setTimeout(function() {
                    wx.hideToast(), wx.reLaunch({
                        url: "../index/index?adcode=" + o.data.adcode
                    });
                }, 2e3)) : (wx.login({
                    success: function(t) {
                        t.code ? o.setData({
                            code: t.code
                        }) : console.log("获取第三方登录code失败" + t.errMsg);
                    }
                }), wx.showModal({
                    title: "",
                    content: e.data.retmsg,
                    showCancel: !1,
                    success: function(t) {
                        t.confirm ? wx.navigateBack() : t.cancel;
                    }
                }));
            });
        }
    },
    nologin: function() {
        t.globalData.vs = !0, wx.reLaunch({
            url: "../index/index"
        }), wx.clearStorage(), t.globalData.exitlogin = !0;
    },
    tologin: function() {
        wx.navigateTo({
            url: "./index"
        });
    },
    DefaultNum: function() {
        var t = this, e = {
            uid: wx.getStorageSync("uid"),
            lat: t.data.lat,
            lng: t.data.lng
        };
        a.req("User/AppParm", e, function(t, a) {
            if (0 == a.data.code) wx.setStorageSync("deposit", a.data.data.deposit), wx.setStorageSync("startprice", a.data.data.startprice), 
            wx.setStorageSync("startmin", a.data.data.startmin), wx.setStorageSync("everymin", a.data.data.everymin), 
            wx.setStorageSync("everyprice", a.data.data.everyprice);
        });
    },
    GetMyLocation: function() {
        var a = this;
        wx.getLocation({
            type: "wgs84",
            success: function(o) {
                var n = o.latitude, c = o.longitude;
                e.reverseGeocoder({
                    location: {
                        latitude: n,
                        longitude: c
                    },
                    success: function(e) {
                        var o = e.result.ad_info.location.lat, n = e.result.ad_info.location.lng, c = e.result.address_component.city + e.result.address_component.district, i = e.result.address_component.province;
                        e.result.ad_info.adcode;
                        a.setData({
                            lat: o,
                            lng: n,
                            city: c,
                            province: i,
                            adcode: t.globalData.myAreaid
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
    onLoad: function(t) {
        var a = this;
        wx.login({
            success: function(t) {
                t.code ? a.setData({
                    code: t.code
                }) : console.log("获取第三方登录code失败" + t.errMsg);
            }
        }), this.GetMyLocation();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});