var t = require("./qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js"), e = require("./util.js"), o = new t({
    key: "ABSBZ-SVDLG-X5BQR-I7EUL-4JQZT-S6BCM"
});

module.exports = {
    getQQWalkingRoute: function(t, i) {
        wx.getLocation({
            type: "gcj02",
            success: function(n) {
                o.direction({
                    mode: "walking",
                    to: {
                        longitude: t.longitude,
                        latitude: t.latitude
                    },
                    success: function(o) {
                        var l = o;
                        if (console.log(l), l.result.routes[0].distance <= 5e4) {
                            for (var u = l.result.routes[0].polyline, a = [], d = 2; d < u.length; d++) u[d] = Number(u[d - 2]) + Number(u[d]) / 1e6;
                            for (var s = 0; s < u.length; s += 2) a.push({
                                latitude: u[s],
                                longitude: u[s + 1]
                            });
                            var c = [];
                            1e3 * e.getDistance(n.longitude, n.latitude, a[0].longitude, a[0].latitude) > 5 && c.push({
                                points: [ {
                                    longitude: n.longitude,
                                    latitude: n.latitude
                                }, {
                                    longitude: a[0].longitude,
                                    latitude: a[0].latitude
                                } ],
                                color: "#a0a0a0DD",
                                width: 6,
                                dottedLine: !0
                            }), 1e3 * e.getDistance(a[a.length - 1].longitude, a[a.length - 1].latitude, t.longitude, t.latitude) > 5 && c.push({
                                points: [ {
                                    longitude: t.longitude,
                                    latitude: t.latitude
                                }, {
                                    longitude: a[a.length - 1].longitude,
                                    latitude: a[a.length - 1].latitude
                                } ],
                                color: "#a0a0a0DD",
                                width: 6,
                                dottedLine: !0
                            }), i && i([ {
                                points: a,
                                color: "#3629CCDD",
                                width: 6,
                                arrowLine: !0
                            } ].concat(c));
                        } else wx.showToast({
                            title: "路线规划失败！",
                            icon: "none"
                        });
                    },
                    fail: function(t) {
                        console.error(t), 373 == t.status && wx.showToast({
                            title: "路线规划失败！",
                            icon: "none"
                        });
                    },
                    complete: function(t) {}
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "请打开手机定位信息！",
                    icon: "none"
                });
            }
        });
    },
    getSuggest: function(t, e, i) {
        o.getSuggestion({
            keyword: t,
            region: i || "",
            success: function(t) {
                for (var o = [], i = 0; i < t.data.length; i++) o.push({
                    title: t.data[i].title,
                    id: t.data[i].id,
                    addr: t.data[i].address,
                    city: t.data[i].city,
                    district: t.data[i].district,
                    latitude: t.data[i].location.lat,
                    longitude: t.data[i].location.lng
                });
                e && e(o);
            },
            fail: function(t) {
                console.error(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    getCity: function(t, e) {
        o.reverseGeocoder({
            location: t || "",
            success: function(t) {
                console.log(t);
                var t = t.result;
                e && e(t);
            },
            fail: function(t) {
                console.error(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    }
};