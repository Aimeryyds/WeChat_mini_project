function a(a, t, o) {
    return t in a ? Object.defineProperty(a, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = o, a;
}

require("../../../utils/config.js").appColor;

var t = require("../../../utils/util.js"), o = getApp();

Page({
    data: {
        polygons: [ {
            points: [],
            strokeWidth: 5,
            strokeColor: "#FF0000DD",
            fillColor: "#FF000009",
            zIndex: -9
        } ],
        markers: [ {
            id: 0,
            iconPath: "../../../images/map/pin.png",
            latitude: "",
            longitude: "",
            width: 20,
            height: 35
        } ],
        textColor: "",
        mainColor: "",
        notInArea: !1,
        name: "位置",
        parkPointCount: 0,
        sample: "" + o.globalData.imagesUrl + o.globalData.accountId + "/map/park/huanchedian.png"
    },
    onLoad: function(t) {
        var e = this;
        this.mapCtx = wx.createMapContext("targetMap"), this.setData({
            mainColor: o.globalData.mainColor,
            textColor: o.globalData.textColor
        });
        var n = t.aim;
        n && (n = JSON.parse(n), console.log(n), this.geoForm(), this.checkInGeo(n.longitude, n.latitude, function() {
            console.log("call back");
            var t = {
                id: 0,
                iconPath: "../../../images/map/pin.png",
                latitude: n.latitude,
                longitude: n.longitude,
                width: 20,
                height: 35
            };
            e.setData(a({}, "markers[0]", t));
            var o = e.data.polygons[0];
            e.data.notInArea && o.points.length > 0 ? e.mapCtx.includePoints({
                padding: [ 20 ],
                points: [ t ].concat(o.points)
            }) : e.mapCtx.includePoints({
                padding: [ 20 ],
                points: e.data.markers
            });
        }), this.setData({
            name: n.name
        }));
    },
    geoForm: function() {
        if (console.log(o.globalData.areaPolygon), o.globalData.areaPolygon) {
            for (var t = o.globalData.areaPolygon.points.split(";"), e = [], n = 0; n < t.length; n++) {
                var l = {};
                l.longitude = t[n].split(",")[0], l.latitude = t[n].split(",")[1], e.push(l);
            }
            this.setData(a({}, "polygons[0].points", e));
        } else wx.showToast({
            title: "电子围栏未获取",
            icon: "none"
        });
    },
    onReady: function() {},
    onShow: function() {},
    toMap: function() {
        wx.navigateBack({});
    },
    checkInGeo: function(a, e, n) {
        var l = this, i = o.globalData.baseUrl + "geo/getInGeo.do", r = {
            lo: a,
            la: e,
            mapType: 2,
            accountId: o.globalData.accountId
        };
        t.request(i, r, function(t) {
            t.ret && (console.log(t), t.data ? o.globalData.areaPolygon ? t.data.geoId == o.globalData.areaPolygon.geoId ? l.getNearParkPoint(a, e, n) : (l.setData({
                notInArea: !0
            }), n && n()) : n && n() : (l.setData({
                notInArea: !0
            }), n && n()));
        });
    },
    getNearParkPoint: function(a, e, n) {
        var l = this;
        o.checkToken(function(i) {
            var r = o.globalData.baseUrl + "parkPoint/getNear.do", s = {
                accountId: o.globalData.accountId,
                radius: 200,
                mapType: 2,
                lo: a,
                la: e
            };
            i.length > 0 && (s.token = i), t.request(r, s, function(a) {
                if (a.ret) if (a.data.length > 0) {
                    var t = [], e = [], i = [];
                    a.data.forEach(function(a, n) {
                        var l = "";
                        l = "" + o.globalData.imagesUrl + o.globalData.accountId + "/map/park/huanchedian.png";
                        var r = {
                            id: n + 1,
                            accountId: a.accountId,
                            iconPath: l,
                            latitude: a.laC ? a.laC : a.la,
                            longitude: a.loC ? a.loC : a.lo,
                            width: 26,
                            height: 36
                        };
                        if (t.push(r), a.pointsC && 1 == a.parkPointType) {
                            for (var s = a.pointsC.split(";"), g = s.length, c = [], u = 0; u < g; u++) {
                                var d = s[u].split(","), p = {
                                    latitude: d[1],
                                    longitude: d[0]
                                };
                                c.push(p);
                            }
                            var h = {
                                points: c,
                                fillColor: "#00a2e933",
                                strokeColor: "#00a2e955",
                                strokeWidth: 2,
                                zIndex: -9
                            };
                            i.push(h);
                        } else {
                            var m = {
                                latitude: a.laC,
                                longitude: a.loC,
                                radius: a.allowRange,
                                color: "#00a2e955",
                                fillColor: "#00a2e933"
                            };
                            e.push(m);
                        }
                    }), l.setData({
                        parkPointCount: a.data.length,
                        markers: [ l.data.markers[0] ].concat(t),
                        polygons: [ l.data.polygons[0] ].concat(i)
                    }), n && n();
                } else n && n(), l.setData({
                    parkPointCount: 0
                });
            });
        });
    }
});