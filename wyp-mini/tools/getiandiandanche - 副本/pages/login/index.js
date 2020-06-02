var t = require("../../utils/https.js"), e = new (require("../../utils/qqmap-wx-jssdk.js"))({
    key: "BHIBZ-3BMR3-6BV3E-YSEFY-7KS4Z-4GBVE"
});

Page({
    data: {
        loginReg: "注册/登录",
        phoneTit: "手机号",
        btnName: "下一步",
        username: "",
        lat: "",
        lng: "",
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    onLoad: function(t) {
        var e = this, a = wx.getStorageSync("username");
        e.setData({
            username: a
        }), wx.setStorageSync("uid", ""), wx.setStorageSync("mytype", "3");
    },
    bindKeyInput: function(t) {
        this.setData({});
    },
    gotoSetting: function() {
        wx.openSetting({
            success: function(t) {
                console.log(t);
            }
        });
    },
    getUserLocation: function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                void 0 != e.authSetting["scope.userLocation"] && 1 != e.authSetting["scope.userLocation"] ? wx.showModal({
                    title: "请求授权当前位置",
                    content: "需要获取您的地理位置，请确认授权",
                    success: function(e) {
                        e.cancel ? wx.showToast({
                            title: "拒绝授权",
                            icon: "none",
                            duration: 1e3
                        }) : e.confirm && wx.openSetting({
                            success: function(e) {
                                1 == e.authSetting["scope.userLocation"] ? (wx.showToast({
                                    title: "授权成功",
                                    icon: "success",
                                    duration: 1e3
                                }), t.geo()) : wx.showToast({
                                    title: "授权失败",
                                    icon: "none",
                                    duration: 1e3
                                });
                            }
                        });
                    }
                }) : void 0 == e.authSetting["scope.userLocation"] ? t.geo() : (console.log("授权成功"), 
                t.geo());
            }
        });
    },
    geo: function() {
        var t = this, a = this;
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                var n = t.latitude, o = t.longitude;
                a.setData({
                    lat: n,
                    lng: o
                }), e.reverseGeocoder({
                    location: {
                        latitude: n,
                        longitude: o
                    },
                    success: function(t) {
                        wx.setStorageSync("adcode", t.result.ad_info.adcode);
                    },
                    fail: function(t) {},
                    complete: function(t) {}
                });
            },
            fail: function(e) {
                wx.showToast({
                    icon: "none",
                    title: "获取不到定位",
                    duration: 2e3
                }), t.setData({
                    lat: 0,
                    lng: 0
                });
            }
        });
    },
    NextStepTrue: function(t) {
        var e = this;
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userLocation"] ? e.data.lat ? e.NextStep(t) : (wx.showToast({
                    icon: "none",
                    title: "获取不到定位",
                    duration: 2e3
                }), e.NextStep(t)) : e.getUserLocation();
            }
        });
    },
    NextStep: function(e) {
        var a = this, n = e.detail.value.username;
        if (/^1[3456789]\d{9}$/.test(n)) {
            var o = {
                account: n,
                type: 4
            };
            t.req("User/GetCode", o, function(t, e) {
                0 == e.data.code ? (wx.showToast({
                    title: "发送成功",
                    icon: "success",
                    duration: 2e3
                }), wx.navigateTo({
                    url: "Code/index?phone=" + n
                })) : wx.showModal({
                    title: "操作失败",
                    content: e.data.retmsg,
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && a.setData({
                            value: ""
                        });
                    }
                });
            });
        } else wx.showToast({
            title: "请正确填写手机号码",
            icon: "none",
            duration: 2e3
        });
    },
    formSubmit: function(e) {
        var a = this;
        if ("" != e.detail.value.username && "" != e.detail.value.password) {
            wx.setStorageSync("username", e.detail.value.username), wx.setStorageSync("password", e.detail.value.password);
            var n = {
                account: e.detail.value.username,
                pwd: e.detail.value.password,
                client_type: 3
            };
            t.req("User/UserLogin", n, function(t, e) {
                var n = e.data.retmsg;
                0 == e.data.code ? (a.DefaultNum(), wx.showToast({
                    title: "登录成功",
                    icon: "success",
                    duration: 2e3
                }), wx.setStorageSync("uid", e.data.data.uid), wx.setStorageSync("vid", e.data.data.vid), 
                wx.setStorageSync("account", e.data.data.account), wx.setStorageSync("token", e.data.data.token), 
                wx.setStorageSync("ip", e.data.data.ip), wx.setStorageSync("port", e.data.data.port), 
                wx.setStorageSync("certify", e.data.data.certify), wx.navigateTo({
                    url: "../index/index"
                })) : wx.showModal({
                    title: "",
                    content: n,
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && a.setData({
                            value: ""
                        });
                    }
                });
            });
        } else wx.showToast({
            title: "请输入账号密码！",
            icon: "none",
            duration: 2e3
        });
    },
    DefaultNum: function() {
        var e = this, a = {
            uid: wx.getStorageSync("uid"),
            lat: e.data.lat,
            lng: e.data.lng
        };
        t.req("User/AppParm", a, function(t, e) {
            if (0 == e.data.code) wx.setStorageSync("deposit", e.data.data.deposit), wx.setStorageSync("startprice", e.data.data.startprice), 
            wx.setStorageSync("startmin", e.data.data.startmin), wx.setStorageSync("everymin", e.data.data.everymin), 
            wx.setStorageSync("everyprice", e.data.data.everyprice);
        });
    },
    registered: function() {
        wx.navigateTo({
            url: "../registered/index"
        });
    },
    forgetpwd: function() {
        wx.navigateTo({
            url: "../forgetPwd/index"
        });
    },
    userP: function() {
        wx.navigateTo({
            url: "userP/index"
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getUserLocation();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});