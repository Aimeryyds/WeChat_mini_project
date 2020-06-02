var t = getApp(), a = require("../../../utils/util");

Page({
    data: {
        scale: 16,
        longitude: "113.949702",
        latitude: "22.55011",
        polyline: [ {
            points: [],
            color: "#dd52ac",
            width: 2
        } ],
        markers: [],
        item: {},
        polygons: [],
        circles: [],
        mainColor: "",
        textColor: "",
        faultDialog: !1
    },
    onLoad: function(a) {
        this.setData({
            mainColor: t.globalData.mainColor,
            textColor: t.globalData.textColor
        }), this.action = a.action, this.mapCtx = wx.createMapContext("historyMap");
        var e = t.globalData.historyItem, o = 0;
        if (e.endTime) {
            var i = new Date(e.startTime.replace(/-/g, "/")).getTime(), n = new Date(e.endTime.replace(/-/g, "/")).getTime();
            n >= i && (o = Math.ceil((n - i) / 6e4)), e.time = o;
        }
        "order" == this.action && o <= 2 && this.setData({
            faultDialog: !0
        }), this.getHistory(e.startTime, e.endTime, e.machineId), this.setData({
            item: e
        });
    },
    onReady: function() {},
    onShow: function() {},
    getHistory: function(e, o, i) {
        var n = this;
        t.checkToken(function(l) {
            if (l.length > 0) {
                var r = t.globalData.baseUrl + "history/query.do", s = {
                    mapType: 2,
                    machineId: i,
                    startTime: e,
                    endTime: o,
                    token: l
                };
                a.request(r, s, function(a) {
                    if (a.ret) if (console.log(a), 0 == a.data.length) t.getLocationInfo("gcj02", function(a) {
                        n.setData({
                            longitude: t.globalData.locationInfo.longitude,
                            latitude: t.globalData.locationInfo.latitude
                        });
                    }); else {
                        var e = [], o = [];
                        a.data.forEach(function(t, i) {
                            var n = t.latC ? t.latC : t.lat, l = t.lonC ? t.lonC : t.lon, r = {
                                latitude: n,
                                longitude: l
                            };
                            if (o.push(r), 0 == i) {
                                var s = {
                                    id: "start",
                                    latitude: n,
                                    longitude: l,
                                    iconPath: "/images/map/start.png",
                                    width: 35,
                                    height: 35
                                };
                                e.push(s);
                            } else if (i == a.data.length - 1) {
                                var c = {
                                    id: "end",
                                    latitude: n,
                                    longitude: l,
                                    iconPath: "/images/map/end.png",
                                    width: 35,
                                    height: 35
                                };
                                e.push(c);
                            }
                        }), n.setData({
                            markers: e.concat(n.data.markers),
                            polyline: [ {
                                points: o,
                                color: "#dd5255",
                                width: 4
                            } ]
                        }), n.mapCtx.includePoints({
                            points: o,
                            padding: [ 20, 20, 20, 20 ]
                        });
                    }
                });
            }
        });
    },
    getParks: function(e, o) {
        var i = this, n = t.globalData.baseUrl + "parkPoint/getNear.do", l = {
            accountId: t.globalData.accountId,
            radius: 200,
            mapType: 2,
            lo: e,
            la: o
        };
        t.checkToken(function(e) {
            e.length > 0 && (l.token = e), a.request(n, l, function(a) {
                if (a.data.length > 0) {
                    var e = [], o = [], n = [];
                    a.data.forEach(function(a, i) {
                        var l = "";
                        l = "" + t.globalData.imagesUrl + t.globalData.accountId + "/map/park/huanchedian.png";
                        var r = {
                            id: i,
                            accountId: a.accountId,
                            iconPath: l,
                            latitude: a.laC ? a.laC : a.la,
                            longitude: a.loC ? a.loC : a.lo,
                            width: 26,
                            height: 36
                        };
                        if (e.push(r), a.pointsC && 1 == a.parkPointType) {
                            for (var s = a.pointsC.split(";"), c = s.length, d = [], u = 0; u < c; u++) {
                                var g = s[u].split(","), h = {
                                    latitude: g[1],
                                    longitude: g[0]
                                };
                                d.push(h);
                            }
                            var p = {
                                points: d,
                                fillColor: "#00a2e933",
                                strokeColor: "#00a2e955",
                                strokeWidth: 2,
                                zIndex: -9
                            };
                            n.push(p);
                        } else {
                            var m = {
                                latitude: a.laC,
                                longitude: a.loC,
                                radius: a.allowRange,
                                color: "#00a2e955",
                                fillColor: "#00a2e933"
                            };
                            o.push(m);
                        }
                    }), i.setData({
                        markers: e.concat(i.data.markers),
                        polygons: n.concat(i.data.polygons),
                        circles: o.concat(i.data.circles)
                    }), console.log("站点和区域点个数:", i.data.polygon.length);
                }
            });
        });
    },
    sendReport: function(e) {
        var o = this, i = e.currentTarget.dataset.item;
        t.checkToken(function(e) {
            e.length > 0 && t.getLocationInfo("gcj02", function(n) {
                var l = t.globalData.baseUrl + "suggestion/add.do", r = {
                    token: e,
                    title: "两分钟内结束订单",
                    content: i + o.data.item.userCode,
                    accountId: t.globalData.accountId,
                    lo: n.longitude,
                    la: n.latitude,
                    mapType: 2
                };
                a.request(l, r, function(t) {
                    t.ret;
                });
            }), o.setData({
                faultDialog: !1
            });
        });
        var n = e.currentTarget.dataset.jump;
        n && "toFault" == n && this.toAdvice();
    },
    toAdvice: function() {
        wx.navigateTo({
            url: "../../advice/advice?userCode=" + this.data.item.userCode
        });
    },
    showDetail: function() {
        wx.showModal({
            title: "",
            content: this.data.item.remark,
            showCancel: !1
        });
    },
    toFault: function() {
        wx.navigateTo({
            url: "../../fault/fault?userCode=" + this.data.item.userCode
        });
    },
    activeSheet: function() {
        var t = this;
        wx.showActionSheet({
            itemList: [ "计费规则", "费用申诉", "故障上报" ],
            success: function(a) {
                0 == a.tapIndex ? wx.navigateTo({
                    url: "/pages/valuationRule/valuationRule?machineNO=" + t.data.item.userCode
                }) : 1 == a.tapIndex ? wx.navigateTo({
                    url: "/pages/advice/advice"
                }) : t.toFault();
            }
        });
    }
});