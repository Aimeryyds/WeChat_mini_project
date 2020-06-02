var t = getApp(), a = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        reason: "站点申请",
        la: "",
        lo: "",
        mainColor: "",
        textColor: "",
        longitude: "",
        latitude: "",
        polygons: [],
        markers: [ {
            id: 0,
            iconPath: "https://client.uqbike.com/shared_bike_mp/images/267/map/park/huanchedian.png",
            latitude: 22.549811,
            longitude: 113.949711,
            width: 26,
            height: 36
        } ],
        scale: "18",
        centerLatitude: "",
        centerLongitude: "",
        address: "未知",
        isLoading: !1
    },
    regionchange: function(t) {
        var e = this;
        "end" == t.type && "drag" == t.causedBy && this.mapCtx.getCenterLocation({
            success: function(t) {
                var o = e;
                e.setData({
                    longitude: t.longitude,
                    latitude: t.latitude
                }), e.getAddress(t.longitude, t.latitude);
                var n = {
                    latitude: o.data.centerLatitude,
                    longitude: o.data.centerLongitude
                }, i = {
                    latitude: t.latitude,
                    longitude: t.longitude
                }, l = 1e3 * a.getDistance(n.longitude, n.latitude, i.longitude, i.latitude);
                console.log("距离" + l + "米"), l >= 200 && o.getParks(t.longitude, t.latitude);
            }
        });
    },
    getParks: function(e, o) {
        var n = this;
        t.checkToken(function(i) {
            if (i.length > 0) {
                var l = {
                    accountId: t.globalData.accountId,
                    radius: 500,
                    mapType: 2,
                    lo: e,
                    la: o,
                    token: i
                }, d = [], s = t.globalData.baseUrl + "parkPoint/getNear.do";
                a.request(s, l, function(a) {
                    if (a.data.length > 0) {
                        for (var e = [], o = [], i = a.data, s = 0; s < i.length; s++) {
                            var u = "";
                            u = "" + t.globalData.imagesUrl + t.globalData.accountId + "/map/park/huanchedian.png";
                            var c = {
                                id: s,
                                accountId: i[s].accountId,
                                iconPath: u,
                                latitude: i[s].laC ? i[s].laC : i[s].la,
                                longitude: i[s].loC ? i[s].loC : i[s].lo,
                                width: 26,
                                height: 36,
                                zIndex: 100
                            };
                            if (i[s].pointsC && 1 == i[s].parkPointType) {
                                for (var r = i[s].pointsC.split(";"), g = r.length, h = [], p = 0; p < g; p++) {
                                    var f = {
                                        latitude: r[p].split(",")[1],
                                        longitude: r[p].split(",")[0]
                                    };
                                    h.push(f);
                                }
                                var k = {
                                    points: h,
                                    fillColor: "#00a2e933",
                                    strokeColor: "#00a2e955",
                                    strokeWidth: 2,
                                    zIndex: -9
                                };
                                d.push(k);
                            } else {
                                var v = {
                                    latitude: i[s].laC,
                                    longitude: i[s].loC,
                                    radius: i[s].allowRange,
                                    color: "#00a2e955",
                                    fillColor: "#00a2e933"
                                };
                                o.push(v);
                            }
                            e.push(c);
                        }
                        n.setData({
                            centerLongitude: l.lo,
                            centerLatitude: l.la,
                            markers: e,
                            polygons: d
                        }), console.log("站点和区域点个数:", n.data.markers.length);
                    }
                });
            }
        });
    },
    getAddress: function(e, o) {
        var n = this;
        this.setData({
            isLoading: !0
        }), t.checkToken(function(i) {
            if (i.length > 0) {
                var l = t.globalData.baseUrl + "map/getAddress.do", d = {
                    lo: e,
                    la: o,
                    token: i
                };
                a.request(l, d, function(t) {
                    t.ret ? (console.log(t.data), n.setData({
                        address: t.data,
                        isLoading: !1
                    })) : n.setData({
                        isLoading: !1
                    });
                });
            }
        });
    },
    inputReason: function(t) {
        this.setData({
            reason: t.detail.value
        });
    },
    commitPoint: function() {
        var e = this;
        if (this.data.isLoading) wx.showToast({
            title: "正在加载位置，请稍候重试！",
            icon: "none"
        }); else {
            wx.showToast({
                title: "正在上传...",
                icon: "loading",
                mask: !0,
                duration: 5e3
            });
            var o = this.data.reason;
            t.checkToken(function(n) {
                if (n.length > 0) {
                    var i = t.globalData.baseUrl + "parkPointApply/add.do", l = {
                        token: n,
                        lo: e.data.longitude,
                        la: e.data.latitude,
                        applyReason: o,
                        accountId: t.globalData.accountId
                    };
                    a.request(i, l, function(t) {
                        t.ret && (wx.hideToast(), a.showModal_nocancel("提交成功！", function() {
                            wx.navigateBack({});
                        }));
                    });
                }
            });
        }
    },
    onLoad: function(a) {
        this.mapCtx = wx.createMapContext("pointMap"), this.setData({
            mainColor: t.globalData.mainColor,
            textColor: t.globalData.textColor
        });
    },
    onReady: function() {
        this.getLocation();
    },
    getLocation: function() {
        var t = this;
        wx.getLocation({
            type: "gcj02",
            success: function(a) {
                t.setData({
                    longitude: a.longitude,
                    latitude: a.latitude,
                    centerLongitude: a.longitude,
                    centerLatitude: a.latitude
                }), t.getAddress(a.longitude, a.latitude), t.getParks(a.longitude, a.latitude);
            },
            fail: function(e) {
                console.log(e), a.showModal("请打开手机定位！", function() {
                    t.getLocation();
                }, function() {
                    wx.navigateBack({});
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});