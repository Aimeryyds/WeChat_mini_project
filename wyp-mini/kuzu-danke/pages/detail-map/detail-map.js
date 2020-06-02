(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/detail-map/detail-map" ], {
    "0275": function(t, a, e) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e027"), a(e("66fd")), t(a(e("3c7b")).default);
        }).call(this, e("543d").createPage);
    },
    2878: function(t, a, e) {
        var n = e("3e70");
        e.n(n).a;
    },
    "3c7b": function(t, a, e) {
        e.r(a);
        var n = e("db77"), i = e("ce94");
        for (var d in i) "default" !== d && function(t) {
            e.d(a, t, function() {
                return i[t];
            });
        }(d);
        e("2878");
        var o = e("f0c5"), r = Object(o.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = r.exports;
    },
    "3e70": function(t, a, e) {},
    "4f14": function(t, a, e) {
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("edb7")), i = {
                data: function() {
                    return {
                        aroundList: [ {
                            name: "交通",
                            key: "地铁",
                            id: "1",
                            img: "https://zhuanti.danke.com.cn/icon_transform.png",
                            selected: !1
                        }, {
                            name: "商超",
                            id: "2",
                            key: "商场",
                            img: "https://zhuanti.danke.com.cn/icon_market.png",
                            selected: !1
                        }, {
                            name: "金融",
                            id: "3",
                            key: "银行",
                            img: "https://zhuanti.danke.com.cn/icon_bank.png",
                            selected: !1
                        }, {
                            name: "餐饮",
                            id: "4",
                            key: "餐厅",
                            img: "https://zhuanti.danke.com.cn/icon_eat.png",
                            selected: !1
                        }, {
                            name: "医疗",
                            id: "5",
                            key: "医院",
                            img: "https://zhuanti.danke.com.cn/icon_hospital.png",
                            selected: !1
                        } ],
                        mapData: {
                            latitude: "",
                            longitude: "",
                            markers: []
                        },
                        mapHeight: 0,
                        markerId: 0,
                        status: null,
                        map_address: "",
                        listObj: {},
                        isActive: !1,
                        typeStatus: !1,
                        includePoints: null,
                        distanceText: {
                            1: "",
                            2: "",
                            3: "",
                            4: "",
                            5: "",
                            6: "",
                            7: "",
                            8: "",
                            9: "",
                            10: ""
                        }
                    };
                },
                onLoad: function(a) {
                    var e = JSON.parse(a.obj);
                    this.mapData.latitude = e.latitude, this.mapData.longitude = e.longitude, this.map_address = e.map_address, 
                    this.getMapHeight(), this.mapCtx = t.createMapContext("map"), console.log("mapCtx", this.mapCtx), 
                    this.aresMap = {
                        "地铁": [],
                        "商场": [],
                        "银行": [],
                        "餐厅": [],
                        "医院": []
                    }, this.getMapMarkers(this.aroundList[e.mapIndex].key), this.aroundList[e.mapIndex].selected = !0;
                },
                methods: {
                    getMapMarkers: function(t) {
                        var a = this, e = [];
                        if (a.aresMap[t].length) return a.mapData.markers = a.aresMap[t], console.log(a.mapCtx.includePoints({
                            points: a.aresMap[t],
                            padding: [ 20 ]
                        })), a.mapCtx.includePoints({
                            points: a.aresMap[t],
                            padding: [ 20 ]
                        }), !1;
                        (0, n.default)({
                            url: "https://api.map.baidu.com/place/v2/search?ak=YY5lVvoVmMSw7AHA11VQvw57GVdA6fLp",
                            data: {
                                page_size: 10,
                                page_num: 0,
                                coord_type: 2,
                                filter: "",
                                output: "json",
                                sn: "",
                                timestamp: "",
                                scope: 1,
                                radius: 5e3,
                                ret_coordtype: "gcj02ll",
                                query: t,
                                location: a.mapData.latitude + "," + a.mapData.longitude
                            }
                        }).then(function(n) {
                            var i = {
                                id: 0,
                                markerId: 0,
                                latitude: a.mapData.latitude,
                                longitude: a.mapData.longitude,
                                width: 50,
                                height: 50,
                                zIndex: 6,
                                markerLevel: 6,
                                iconPath: "https://public.danke.com.cn/public-20190808-Fi0MC4VarRZb_WYTMh63cDLtHKrO"
                            };
                            if (e.push(i), n.data.results && !n.data.results.length) return setTimeout(function() {
                                a.mapData.markers = e;
                            }, 10), !1;
                            for (var d = 0; d < n.data.results.length; d++) {
                                var o = {
                                    content: n.data.results[d].name,
                                    address: n.data.results[d].address,
                                    distance: "",
                                    padding: 8,
                                    display: "ALWAYS",
                                    textAlign: "center",
                                    borderRadius: 15,
                                    fontSize: 14,
                                    color: "#ffffff",
                                    bgColor: "#FFC543",
                                    borderColor: "#FFC543",
                                    borderWidth: 1
                                }, r = {
                                    id: d + 1,
                                    markerId: d + 1,
                                    latitude: n.data.results[d].location.lat,
                                    longitude: n.data.results[d].location.lng,
                                    iconPath: "https://public.danke.com.cn/public-20190808-FnRZsnbOMEJxWaE8sh8jti_6g13Y",
                                    width: 1,
                                    height: 1,
                                    callout: o
                                };
                                e.push(r);
                            }
                            a.mapData.markers = e, a.aresMap[t] = e, a.mapCtx.includePoints({
                                points: e,
                                padding: [ 30 ]
                            });
                        });
                    },
                    getAround: function(t) {
                        var a = t.currentTarget.dataset.index;
                        this.getMapMarkers(this.aroundList[a].key), this.aroundList.forEach(function(t) {
                            t.selected = !1;
                        }), this.aroundList[a].selected = !0, this.distanceText = {
                            1: "",
                            2: "",
                            3: "",
                            4: "",
                            5: "",
                            6: "",
                            7: "",
                            8: "",
                            9: "",
                            10: ""
                        }, this.typeStatus = !1;
                    },
                    getMapHeight: function() {
                        var a = this;
                        t.getSystemInfo({
                            success: function(t) {
                                a.mapHeight = t.windowHeight;
                            }
                        });
                    },
                    findWayRoute: function(a) {
                        var e = this, n = {};
                        a.currentTarget.dataset.name ? (console.log(123123), console.log(e.mapData), console.log(e.mapData.markers[e.markerId].callout.content), 
                        n.latitude = e.mapData.markers[e.markerId].latitude, n.longitude = e.mapData.markers[e.markerId].longitude, 
                        n.map_address = e.mapData.markers[e.markerId].callout.content) : (console.log(321321), 
                        console.log(this.map_address), n.latitude = this.mapData.latitude, n.longitude = this.mapData.longitude, 
                        n.map_address = this.map_address);
                        var i = JSON.stringify(n);
                        console.log(i), t.navigateTo({
                            url: "../detail-map-findway/detail-map-findway?obj=" + i
                        });
                    },
                    markertap: function(t) {
                        var a = this;
                        return console.log(t), !!t.markerId && (a.typeStatus = !0, a.markerId = t.markerId, 
                        "" == a.distanceText[a.markerId] && void this.getWalkingDistance());
                    },
                    getWalkingDistance: function() {
                        var t = this, a = t.mapData.markers[t.markerId];
                        (0, n.default)({
                            url: "https://api.map.baidu.com/routematrix/v2/walking?ak=YY5lVvoVmMSw7AHA11VQvw57GVdA6fLp",
                            noLoading: !0,
                            data: {
                                output: "json",
                                coord_type: "gcj02",
                                origins: t.mapData.latitude + "," + t.mapData.longitude,
                                destinations: a.latitude + "," + a.longitude
                            }
                        }).then(function(a) {
                            t.distanceText[t.markerId] = a.data.result[0].distance.text;
                        });
                    }
                }
            };
            a.default = i;
        }).call(this, e("543d").default);
    },
    ce94: function(t, a, e) {
        e.r(a);
        var n = e("4f14"), i = e.n(n);
        for (var d in n) "default" !== d && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(d);
        a.default = i.a;
    },
    db77: function(t, a, e) {
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        e.d(a, "b", function() {
            return n;
        }), e.d(a, "c", function() {
            return i;
        }), e.d(a, "a", function() {});
    }
}, [ [ "0275", "common/runtime", "common/vendor" ] ] ]);