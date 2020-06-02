var o = function() {
    function o(o, e) {
        var t = [], n = !0, a = !1, i = void 0;
        try {
            for (var l, c = o[Symbol.iterator](); !(n = (l = c.next()).done) && (t.push(l.value), 
            !e || t.length !== e); n = !0) ;
        } catch (o) {
            a = !0, i = o;
        } finally {
            try {
                !n && c.return && c.return();
            } finally {
                if (a) throw i;
            }
        }
        return t;
    }
    return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return o(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = getApp(), t = require("../util.js");

module.exports = function() {
    var n = this, a = null, i = null, l = 0;
    this.returnBike = function(o, n, a) {
        wx.showToast({
            title: "正在还车",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), e.checkToken(function(i) {
            if (i.length > 0) {
                var r = e.globalData.baseUrl + "machine/returnBike.do", u = {
                    token: i,
                    dispatchType: n,
                    orderSource: 3
                };
                "" !== o && void 0 !== o.latitude && (u.la = o.latitude, u.lo = o.longitude), console.log(u), 
                t.request(r, u, function(o) {
                    o.ret ? c(10, function(o) {
                        o ? (e.lockAudio(), wx.hideToast(), a && a("success")) : (wx.hideToast(), a && a("timeout"));
                    }) : "-3008" === o.code ? l >= 2 ? (l = 0, wx.hideToast(), a("-3008")) : (l++, setTimeout(function() {
                        wx.hideToast(), wx.showModal({
                            title: "",
                            content: "车辆不在站点，请骑到站点内还车哦!如果已经在站点，请重试!",
                            confirmText: "导航",
                            confirmColor: "#65ae56",
                            showCancel: !1
                        });
                    }, 2e3)) : "-3006" == o.code ? a("-3006") : "-3004" === o.code && (wx.hideToast(), 
                    a("-3004", o.data));
                });
            }
        });
    }, this.getOrderStatus = function(o) {
        c(10, function(t) {
            t ? (e.lockAudio(), wx.hideToast(), o && o("success")) : (wx.hideToast(), o && o("timeout"));
        });
    }, this.tempPark = function(o) {
        wx.showToast({
            title: "正在停车",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), e.checkToken(function(n) {
            if (n.length > 0) {
                var a = e.globalData.baseUrl + "park/parkRide.do", i = {
                    token: n,
                    orderSource: 3
                };
                t.request(a, i, function(t) {
                    t.ret && r(10, "lock", function(t) {
                        t ? (e.lockAudio(), wx.hideToast(), o && o(!0)) : (wx.hideToast(), o && o(!1));
                    });
                });
            }
        });
    }, this.continueRide = function(o) {
        wx.showToast({
            title: "请稍候",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), e.checkToken(function(n) {
            if (n.length > 0) {
                var a = e.globalData.baseUrl + "park/continueRide.do", i = {
                    token: n,
                    orderSource: 3
                };
                t.request(a, i, function(t) {
                    t.ret && r(10, "unlock", function(t) {
                        t ? (wx.hideToast(), o && o(!0)) : (e.unlockAudio(), wx.hideToast(), o && o(!1));
                    });
                });
            }
        });
    };
    var c = function(o, n) {
        e.checkToken(function(a) {
            if (a.length > 0) {
                i && (clearInterval(i), i = null);
                var l = !0, c = 0;
                i = setInterval(function() {
                    if (l) {
                        l = !1;
                        var r = e.globalData.baseUrl + "machine/getBorrowing.do", u = {
                            token: a
                        };
                        t.request(r, u, function(e) {
                            void 0 != e.data && 0 != e.data.length ? ++c > o && (clearInterval(i), n && n(!1)) : (clearInterval(i), 
                            n && n(!0)), l = !0;
                        }, function() {
                            l = !0;
                        });
                    }
                }, 1024);
            }
        });
    }, r = function(o, n, i) {
        e.checkToken(function(l) {
            if (l.length > 0) {
                a && (clearInterval(a), a = null);
                var c = !0, r = 0;
                a = setInterval(function() {
                    if (c) {
                        c = !1;
                        var u = e.globalData.baseUrl + "park/getByUserId.do", s = {
                            token: l
                        };
                        t.request(u, s, function(e) {
                            "lock" == n ? e.data && 0 != e.data.length ? (clearInterval(a), i && i(!0)) : ++r > o && (clearInterval(a), 
                            i && i(!1)) : "unlock" == n && (e.data && 0 != e.data.length ? ++r > o && (clearInterval(a), 
                            i && i(!0)) : (clearInterval(a), i && i(!1))), c = !0;
                        }, function() {
                            c = !0;
                        });
                    }
                }, 1024);
            }
        });
    };
    this.openLock = function(a, i, l) {
        console.log("1、蓝牙临时停车 2、蓝牙继续骑行 3、蓝牙还车---", a), 1 == a ? (wx.showToast({
            title: "上锁中",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), e.checkToken(function(o) {
            o.length > 0 && e.operateBluetooth("close", e.globalData.machineNO, function(n) {
                if (n) {
                    var a = e.globalData.baseUrl + "park/parkRide.do", l = {
                        token: o,
                        ble: !0,
                        orderSource: 3
                    };
                    t.request(a, l, function(o) {
                        o.ret && (wx.hideToast(), e.lockAudio(), i && i());
                    });
                } else t.showModal_nocancel("蓝牙操作失败，请重试！");
            });
        })) : 2 == a ? (wx.showToast({
            title: "开锁中",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), e.checkToken(function(o) {
            o.length > 0 && e.operateBluetooth("open", e.globalData.machineNO, function(n) {
                if (n) {
                    var a = e.globalData.baseUrl + "park/continueRide.do", l = {
                        token: o,
                        ble: !0,
                        orderSource: 3
                    };
                    t.request(a, l, function(o) {
                        o.ret && (wx.hideToast(), e.unlockAudio(), i && i());
                    });
                } else t.showModal_nocancel("蓝牙操作失败，请重试！");
            });
        })) : 3 == a && (wx.showToast({
            title: "上锁中",
            icon: "loading",
            mask: !0,
            duration: 1e5
        }), console.log("执行蓝牙还车"), n.judgePhoneLocation().then(function(n) {
            var a = o(n, 2), l = a[0], c = a[1];
            e.operateBluetooth("close", e.globalData.machineNO, function(o) {
                o ? (console.log(c), u(l, i, c)) : t.showModal_nocancel("蓝牙操作失败，请重试！");
            });
        }));
    }, this.judgePhoneLocation = function() {
        return new Promise(function(o, n) {
            e.getLocationInfo("gcj02", function(n) {
                console.log("位置:" + JSON.stringify(n)), e.checkToken(function(a) {
                    if (a.length > 0) {
                        var i = e.globalData.baseUrl + "dispatch/check.do", l = {
                            token: a,
                            userCode: e.globalData.machineNO,
                            lo: n.longitude,
                            la: n.latitude,
                            mapType: 2
                        };
                        t.request(i, l, function(e) {
                            if (e.ret) {
                                var t = e.data.type;
                                2 == t ? wx.showModal({
                                    title: "",
                                    content: "手机不在站点，请确认后重试",
                                    confirmText: "导航",
                                    confirmColor: "#65ae56",
                                    showCancel: !1
                                }) : o([ n, t ]);
                            }
                        });
                    }
                });
            });
        });
    };
    var u = function(o, n, a) {
        console.log("BleReturnBike"), e.checkToken(function(i) {
            if (i.length > 0) {
                var l = e.globalData.baseUrl + "machine/returnBike.do", c = {
                    lo: o.longitude,
                    la: o.latitude,
                    token: i,
                    ble: !0,
                    orderSource: 3
                };
                void 0 != a && (c.dispatchType = a), console.log(c), t.request(l, c, function(o) {
                    o.ret ? (wx.hideLoading(), e.lockAudio(), n && n()) : "-3008" == o.code ? wx.showModal({
                        title: "温馨提示",
                        content: "请在停车点内还车"
                    }) : "-3004" == o.code ? wx.showModal({
                        title: "温馨提示",
                        content: o.msg
                    }) : console.log(o);
                });
            }
        });
    };
};