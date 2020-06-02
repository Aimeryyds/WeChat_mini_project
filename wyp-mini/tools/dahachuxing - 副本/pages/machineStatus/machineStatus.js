var e = getApp(), a = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        latitude: "22.550114",
        longitude: "113.949354",
        scale: "14",
        polygons: "",
        mode: "scaleToFill",
        machineNO: ".",
        socPercent: "0%",
        surplusMileage: 0,
        socNumber: 0,
        mainColor: "",
        textColor: "",
        baseTime_A: "计费规则",
        dispatchConfig: null,
        baseTime_C: null,
        guideDialog: !1,
        boundImage: []
    },
    onLoad: function(a) {
        e.globalData.autoAction = null, this.setData({
            mainColor: e.globalData.mainColor,
            textColor: e.globalData.textColor,
            boundImage: e.globalData.boundImage
        }), this.mapCtx = wx.createMapContext("statusMap");
        var o = a.machineNO;
        console.log("车辆状态页面车辆编号：" + o), this.data.machineNO = o, e.globalData.machineNO = o, 
        this.alreadySendLocation = !1, this.alreadyUnlock = !1, e.globalData.boundImage.length > 0 && e.globalData.isScanCode && (e.globalData.isScanCode = !1, 
        this.setData({
            guideDialog: !0
        }));
    },
    onShow: function() {
        this.alreadyUnlock && this.unlock();
    },
    onReady: function() {
        var o = this;
        e.checkToken(function(t) {
            if (t.length > 0) {
                wx.showToast({
                    title: "正在加载",
                    icon: "loading",
                    mask: !0,
                    duration: 1e5
                });
                var n = e.globalData.baseUrl + "machineStatus/getByMachineNO.do", i = {
                    userCode: o.data.machineNO,
                    token: t
                };
                a.request(n, i, function(e) {
                    wx.hideToast(), console.log("1，扫描获取最新状态:" + JSON.stringify(e)), void 0 === e.data ? a.showModal_nocancel("故障车，请扫描其它车辆", function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }) : (o.setData({
                        machineNO: e.data.machineNO,
                        socPercent: e.data.socPercent + "%",
                        surplusMileage: e.data.surplusMileage,
                        socNumber: e.data.socPercent
                    }), o.getGeoByMachine(o.data.machineNO), o.sendLocation());
                });
            }
        });
    },
    sendLocation: function(o) {
        var t = this;
        this.alreadySendLocation ? o && o() : wx.getLocation({
            type: "gcj02",
            success: function(n) {
                e.checkToken(function(i) {
                    if (i.length > 0) {
                        var l = e.globalData.baseUrl + "machine/lastUse.do", s = {
                            mapType: 2,
                            lo: n.longitude,
                            la: n.latitude,
                            userCode: t.data.machineNO,
                            token: i
                        };
                        a.request(l, s, function(e) {
                            t.alreadySendLocation = !0, e.ret && o ? o() : wx.hideToast();
                        });
                    }
                });
            },
            fail: function(e) {
                t.alreadySendLocation = !1, wx.hideToast(), console.log("位置错误：", e), e.errMsg.indexOf("fail auth deny") > -1 || e.errMsg.indexOf("fail authorize no") > -1 ? (console.log("拒绝授权定位"), 
                wx.showToast({
                    title: "请在小程序设置中开打位置授权。",
                    icon: "none"
                })) : 2 == e.errCode || e.errMsg.indexOf("ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF") > -1 ? (console.log("没有开启定位服务"), 
                wx.showToast({
                    title: "请打开手机定位。",
                    icon: "none"
                })) : (e.errMsg.indexOf("fail:system permission") > -1 || e.errMsg.indexOf("fail system permission") > -1) && (console.log("系统禁止定位获取"), 
                wx.showToast({
                    title: "微信地理位置访问权限被禁用。",
                    icon: "none"
                }));
            }
        });
    },
    getRule: function(e) {
        this.rechargeBase = (Number(e.rechargeBase) / 100).toFixed(2);
        var a = e.baseTime, o = (Number(e.baseTimeFee) / 100).toFixed(2), t = e.overTime, n = (Number(e.overTimeFee) / 100).toFixed(2), i = e.freeTime, l = null, s = "计费规则", c = null;
        0 != a ? (void 0 != i && 0 != i && (c = "前" + i + "分钟内免费"), s = a + "分钟内" + o + "元，超出" + n + "元/" + t + "分钟") : s = "按" + n + "元/" + t + "分钟", 
        e.dispatchSwitch && (l = {
            parkPointFee: (Number(e.parkPointMoney) / 100).toFixed(2),
            areaFee: (Number(e.areaMoney) / 100).toFixed(2)
        }), this.setData({
            baseTime_A: s,
            baseTime_C: c,
            dispatchConfig: l
        });
    },
    getGeoByMachine: function(o) {
        var t = this, n = e.globalData.baseUrl + "geo/getByMachineNO.do";
        e.checkToken(function(e) {
            if (e.length > 0) {
                var i = {
                    token: e,
                    machineNO: o
                };
                a.request(n, i, function(e) {
                    if (e.ret) {
                        var a = [];
                        if (e.geo) {
                            console.log("has geo");
                            for (var o = e.geo.points.split(";"), n = [], i = 0; i < o.length; i++) {
                                var l = {};
                                l.longitude = o[i].split(",")[0], l.latitude = o[i].split(",")[1], n.push(l);
                            }
                            a = [ {
                                points: n,
                                strokeWidth: 5,
                                strokeColor: "#FF0000DD",
                                fillColor: "#FF000011",
                                zIndex: -9
                            } ], t.mapCtx.includePoints({
                                padding: [ 20 ],
                                points: n
                            });
                        } else console.log("none geo"), wx.showToast({
                            title: "运营区域未设置",
                            icon: "none",
                            duration: 2e3
                        });
                        t.setData({
                            polygons: a
                        }), t.getRule(e.adAccountFee);
                    }
                });
            }
        });
    },
    exchange: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    unlock: function() {
        var o = this;
        e.checkToken(function(t) {
            t.length > 0 && (wx.showToast({
                title: "请稍候",
                icon: "loading",
                mask: !0,
                duration: 1e5
            }), o.sendLocation(function() {
                var n = e.globalData.baseUrl + "machine/borrowBike.do", i = {
                    userCode: o.data.machineNO,
                    token: t,
                    orderSource: 3
                };
                o.alreadyUnlock = !0, a.request(n, i, function(e) {
                    e.ret ? (wx.hideToast(), wx.redirectTo({
                        url: "../openLock/openLock?machineNO=" + o.data.machineNO
                    })) : "-3004" == e.code ? (wx.hideLoading(), wx.hideToast(), wx.showModal({
                        title: "温馨提示",
                        content: "骑行最低充值金额为" + o.rechargeBase + "元，请前往充值！",
                        confirmText: "前往充值",
                        success: function(e) {
                            e.confirm && wx.navigateTo({
                                url: "../recharge/recharge"
                            });
                        }
                    })) : (wx.hideLoading(), wx.hideToast(), wx.showModal({
                        title: "温馨提示",
                        content: res.msg,
                        success: function(e) {}
                    }));
                });
            }));
        });
    },
    valuationRule: function() {
        var e = this;
        wx.navigateTo({
            url: "../valuationRule/valuationRule?machineNO=" + e.data.machineNO,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    knownTap: function() {
        this.setData({
            guideDialog: !1
        });
    }
});