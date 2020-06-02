function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = require("../../../utils/https.js"), n = (require("../../../utils/vehsocket.js"), 
a.imgurl), o = getApp();

Page({
    data: (t = {
        dcimg: n + "dc.png",
        carimg: n + "car.png",
        img00: n + "40pre.jpg",
        img01: n + "111.png",
        img02: n + "22.png",
        img03: n + "12.png",
        km: "0",
        carno: "",
        orderno: "",
        spicer: "计费规则:葛天出行更划算",
        unlockType: !0,
        progress: "",
        data: "",
        lat: "",
        lng: ""
    }, e(t, "data", {}), e(t, "startmin", ""), e(t, "startmile", ""), e(t, "startprice", ""), 
    e(t, "everymin", ""), e(t, "everyprice", ""), e(t, "maxprice", ""), e(t, "SureUnlockFirst", !1), 
    e(t, "trafficfare", ""), e(t, "outwardfee", ""), e(t, "vehRule", {}), e(t, "myHight", ""), 
    t),
    myEventListener: function(e) {
        this.setData({
            myHight: e.detail
        });
    },
    onLoad: function(e) {},
    onUnload: function() {
        wx.removeStorage({
            key: "myVeh",
            success: function(e) {
                console.log(e);
            }
        }), wx.removeStorage({
            key: "isSao",
            success: function(e) {
                console.log(e);
            }
        });
    },
    Order: function() {
        var e = this, t = wx.getStorageSync("uid");
        if ("" != t) {
            var o = {
                uid: t,
                vid: e.data.carno,
                lat: e.data.lat,
                lng: e.data.lng
            };
            a.req("Veh/Scan", o, function(t, o) {
                if (0 == o.data.code) {
                    wx.setStorageSync("mile", o.data.data.mile), wx.setStorageSync("orderno", o.data.data.orderno), 
                    wx.setStorageSync("vid", o.data.data.vid);
                    var r = "";
                    r = o.data.data.batperc < 40 || 40 == o.data.data.batperc ? n + "dcred.png" : n + "dc.png", 
                    e.setData({
                        km: o.data.data.mile,
                        batperc: o.data.data.batperc,
                        dcimg: r
                    }), a.req("User/AppParm", {
                        vid: o.data.data.vid
                    }, function(t, a) {
                        0 == a.data.code && e.setData({
                            vehRule: a.data.data
                        });
                    }), a.req11("V2.0/Area/GetDefinedAreaByVid", {
                        vid: o.data.data.vid
                    }, function(t, a) {
                        0 == a.data.code && e.setData({
                            trafficfare: a.data.data.trafficfare,
                            outwardfee: a.data.data.outwardfee,
                            mode: a.data.data.mode
                        });
                    });
                } else 1 == o.data.code ? wx.showModal({
                    title: "提示",
                    content: o.data.retmsg,
                    showCancel: !0,
                    success: function(e) {
                        console.log("1233"), e.confirm && wx.navigateTo({
                            url: "/pages/payment/recharge/index"
                        });
                    }
                }) : (e.setData({
                    scaveSeccess: !1,
                    secCatLoading: !0
                }), wx.showModal({
                    title: "",
                    content: o.data.retmsg,
                    showCancel: !1,
                    success: function(e) {
                        if (e.confirm) try {
                            wx.removeStorageSync("myVeh"), wx.navigateBack({
                                url: "pages/index/index"
                            });
                        } catch (e) {}
                    }
                }));
            }, function(t) {
                var a = wx.getStorageSync("startprice"), n = wx.getStorageSync("everyprice"), o = wx.getStorageSync("startmin"), r = wx.getStorageSync("everymin"), r = wx.getStorageSync("everymin"), c = wx.getStorageSync("maxprice"), i = wx.getStorageSync("startmile");
                e.setData({
                    startmin: o,
                    startprice: a,
                    everymin: r,
                    everyprice: n,
                    maxprice: c,
                    startmile: i
                });
            });
        } else wx.showModal({
            title: "提示",
            content: "用车请先登录注册...",
            showCancel: !1,
            success: function(e) {
                e.confirm && wx.redirectTo({
                    url: "../../login/phoneLogin"
                });
            }
        });
    },
    SureUnlockFirstFn2: function() {
        var e = this, t = this;
        wx.showToast({
            title: "开锁中...",
            icon: "none",
            duration: 5e4,
            mask: !0
        });
        var n = {
            cmd: 0,
            order_id: wx.getStorageSync("orderno")
        };
        a.req11("V2.0/UserVehCmd/UserSendCmdOpenLock", n, function(a, n) {
            0 == n.data.code ? (wx.showToast({
                title: "开锁成功",
                icon: "success",
                mask: !0
            }), wx.setStorageSync("mytype", "2"), wx.setStorageSync("doshow", "1"), t.setData({
                secCatLoading: !0,
                unlockType: !1
            }), wx.redirectTo({
                url: "../index"
            })) : 2 == n.data.code ? e.UserGetCmd(n.data.data.id, n.data.data.wait, function(e) {
                0 === e && (wx.setStorageSync("mytype", "2"), wx.setStorageSync("doshow", "1"), 
                t.setData({
                    secCatLoading: !0,
                    unlockType: !1
                }), wx.redirectTo({
                    url: "../index"
                }));
            }) : wx.showToast({
                title: n.data.retmsg,
                duration: 2e3,
                icon: "none",
                mask: !0
            });
        });
    },
    UserGetCmd: function(e, t, n) {
        var o = 1e3 * t, r = setInterval(function() {
            if (t > 15) return wx.showToast({
                title: "开锁超时",
                icon: "none",
                mask: !0
            }), clearInterval(r), void n(-2);
            var t = t + 1;
            a.req11("V2.0/UserVehCmd/UserGetCmd", {
                id: e
            }, function(e, t) {
                if (e) return wx.showToast({
                    title: e.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(r), void n(-100);
                0 == t.data.code ? (wx.showToast({
                    title: "开锁成功",
                    icon: "success",
                    mask: !0
                }), clearInterval(r), n(0)) : 2 == t.data.code || (t.data.code, wx.showToast({
                    title: t.data.retmsg,
                    icon: "none",
                    mask: !0
                }), clearInterval(r), n(-1));
            });
        }, o);
    },
    onReady: function() {},
    onShow: function() {
        var e = o.globalData.myVeh;
        console.log(o.globalData.myVeh), 0 != e.lat && 0 != e.lng || wx.getLocation({
            type: "gcj02",
            success: function(t) {
                var a = t.latitude, n = t.longitude;
                e.lat = a, e.lng = n;
            },
            fail: function(e) {
                wx.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userLocation"] || wx.showToast({
                            title: "请授权使用地理位置",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                });
            }
        }), (t = this).setData({
            carno: e.vCarId,
            lat: e.lat,
            lng: e.lng
        });
        var t = this;
        wx.setStorageSync("mytype", "1");
        t.Order();
    }
});