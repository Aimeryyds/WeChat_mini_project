(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "0ad5": function(t, a, e) {
        e.r(a);
        var o = e("872a"), n = e.n(o);
        for (var i in o) "default" !== i && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(i);
        a.default = n.a;
    },
    "5f7d": function(t, a, e) {},
    "872a": function(t, a, e) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = o(e("5f18")), i = o(e("733e"));
            getApp();
            var r = e("9cb3");
            r = r.default || r;
            var c = {
                globalData: {
                    cityName: [],
                    cityNum: [],
                    cityTelList: "",
                    config: n.default,
                    request_tool: i.default,
                    sensors: r,
                    longitude: "",
                    latitude: "",
                    currentCityName: "",
                    currentCityNum: "",
                    onLoadSwitch: !1,
                    houseOnMapCity: "",
                    houseOnMapFirst: !0,
                    index_leads: "",
                    utm_source: "",
                    utm_medium: "",
                    utm_campaign: "",
                    utm_content: "",
                    utm_term: "",
                    all_query: ""
                },
                onLaunch: function(t) {
                    var a = this;
                    a.city_info(), console.log("App Launch"), a.updateApp();
                },
                onShow: function(t) {
                    console.log("App Show");
                },
                onHide: function() {
                    console.log("App Hide");
                },
                methods: {
                    city_info: function() {
                        var a = this;
                        (0, i.default)(n.default.url_room + "/v1/room/cityId", {
                            app_id: "wx024695259e1a68cb",
                            city_id: ""
                        }, "GET", !1, "").then(function(e) {
                            var o = [], n = [], i = [];
                            for (var r in e.data.data) n.push(r), o.push(e.data.data[r]), i.push({
                                name: e.data.data[r],
                                id: r
                            });
                            a.$options.globalData.cityList = i, a.$options.globalData.cityNum = n, a.$options.globalData.cityName = o, 
                            t.setStorage({
                                key: "cityList",
                                data: i
                            }), t.setStorage({
                                key: "cityNum_arr",
                                data: n
                            }), t.setStorage({
                                key: "cityName_arr",
                                data: o
                            });
                        }), a.toGetLocation();
                    },
                    toGetLocation: function() {
                        var a = this;
                        t.getLocation({
                            type: "wgs84",
                            success: function(t) {
                                a.getBaiduLocal(t);
                            },
                            fail: function() {
                                t.setStorage({
                                    key: "cityStorageName",
                                    data: "北京市"
                                }), t.setStorage({
                                    key: "cityStorageNum",
                                    data: "1"
                                }), t.setStorage({
                                    key: "original_cityName",
                                    data: "北京市"
                                }), t.setStorage({
                                    key: "original_cityNum",
                                    data: "1"
                                }), a.$options.globalData.onLoadSwitch = !0, a.$options.globalData.currentCityName = "北京市", 
                                a.$options.globalData.currentCityNum = "1", a.city_tel("北京市");
                            }
                        });
                    },
                    getBaiduLocal: function(a) {
                        var e = this;
                        t.request({
                            url: "https://api.map.baidu.com/geoconv/v1/?coords=" + a.longitude + "," + a.latitude + "&from=1&to=5&ak=YY5lVvoVmMSw7AHA11VQvw57GVdA6fLp",
                            success: function(t) {
                                "0" == t.data.status && (e.$options.globalData.longitude = t.data.result[0].x, e.$options.globalData.latitude = t.data.result[0].y, 
                                e.reverse_geocoding(t));
                            }
                        });
                    },
                    reverse_geocoding: function(a) {
                        var e = this;
                        t.request({
                            url: "https://api.map.baidu.com/reverse_geocoding/v3/?ak=YY5lVvoVmMSw7AHA11VQvw57GVdA6fLp&output=json&coordtype=wgs84ll&location=" + a.data.result[0].y + "," + a.data.result[0].x,
                            success: function(o) {
                                var n = o.data.result.addressComponent.city, i = o.data.result.cityCode;
                                -1 != e.$options.globalData.cityName.indexOf(n) ? (t.setStorage({
                                    key: "cityLongitude",
                                    data: a.data.result[0].x
                                }), t.setStorage({
                                    key: "cityLatitude",
                                    data: a.data.result[0].y
                                }), t.setStorage({
                                    key: "cityStorageName",
                                    data: n
                                }), t.setStorage({
                                    key: "cityCode",
                                    data: i
                                }), t.setStorage({
                                    key: "cityStorageNum",
                                    data: e.$options.globalData.cityNum[e.$options.globalData.cityName.indexOf(n)]
                                }), t.setStorage({
                                    key: "original_cityName",
                                    data: n
                                }), t.setStorage({
                                    key: "original_cityNum",
                                    data: e.$options.globalData.cityNum[e.$options.globalData.cityName.indexOf(n)]
                                }), e.$options.globalData.currentCityName = n, e.$options.globalData.currentCityNum = e.$options.globalData.cityNum[e.$options.globalData.cityName.indexOf(n)], 
                                e.$options.globalData.onLoadSwitch = !0, e.city_tel(n)) : (t.setStorage({
                                    key: "cityStorageName",
                                    data: "北京市"
                                }), t.setStorage({
                                    key: "cityStorageNum",
                                    data: "1"
                                }), t.setStorage({
                                    key: "original_cityName",
                                    data: "北京市"
                                }), t.setStorage({
                                    key: "original_cityNum",
                                    data: "1"
                                }), e.$options.globalData.onLoadSwitch = !0, e.$options.globalData.currentCityName = "北京市", 
                                e.$options.globalData.currentCityNum = "1", e.city_tel("北京市"));
                            }
                        });
                    },
                    city_tel: function(a) {
                        var e = this;
                        (0, i.default)(n.default.url_room + "/v1/room/tel", {
                            app_id: "wx024695259e1a68cb",
                            city_id: "",
                            type: "weixin"
                        }, "GET", !1, "").then(function(o) {
                            "0000" == o.data.code && (e.cityTelList = o.data.data, e.$options.globalData.cityTelList = o.data.data, 
                            t.setStorage({
                                key: "cityTelNum",
                                data: e.cityTelList[a]
                            }));
                        });
                    },
                    appLoad: function(a) {
                        var e = this, o = setInterval(function() {
                            if (e.$options.globalData.onLoadSwitch) {
                                clearInterval(o);
                                try {
                                    var n = t.getStorageSync("cityStorageName"), i = t.getStorageSync("cityStorageNum");
                                    n && (e.currentCityName = n), i && (e.currentCityNum = i);
                                } catch (t) {}
                                a && a(e.currentCityName, e.currentCityNum);
                            }
                        }, 500);
                    },
                    merge: function() {
                        for (var t = "", a = 0; a < arguments.length; a++) t += JSON.stringify(arguments[a]).replace(/[{|}]/g, "") + ",";
                        return t = "{" + t.replace(/^,*|,*$/g, "").replace(/,,*/g, ",").replace(/\s*/g, "") + "}", 
                        JSON.parse(t);
                    },
                    updateApp: function() {
                        var a = t.getUpdateManager();
                        a.onCheckForUpdate(function(e) {
                            console.log("小程序是否有新版本", e.hasUpdate), e.hasUpdate && a.onUpdateReady(function(e) {
                                t.showModal({
                                    title: "更新提示",
                                    content: "新版本已经准备好，是否重启应用？",
                                    success: function(t) {
                                        t.confirm && a.applyUpdate();
                                    }
                                });
                            });
                        });
                    }
                }
            };
            a.default = c;
        }).call(this, e("543d").default);
    },
    "8e35": function(t, a, e) {
        e.r(a);
        var o = e("0ad5");
        for (var n in o) "default" !== n && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(n);
        e("e480");
        var i = e("f0c5"), r = Object(i.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        a.default = r.exports;
    },
    bae5: function(t, a, e) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, a) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    a && (o = o.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(t, a).enumerable;
                    })), e.push.apply(e, o);
                }
                return e;
            }
            function n(t, a, e) {
                return a in t ? Object.defineProperty(t, a, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[a] = e, t;
            }
            e("e027");
            var i = a(e("66fd")), r = a(e("8e35"));
            i.default.component("login-phone", function() {
                Promise.all([ e.e("common/vendor"), e.e("components/loginPhone/loginPhone") ]).then(function() {
                    return resolve(e("547b"));
                }.bind(null, e)).catch(e.oe);
            }), i.default.config.productionTip = !1, r.default.mpType = "app", t(new i.default(function(t) {
                for (var a = 1; a < arguments.length; a++) {
                    var e = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? o(Object(e), !0).forEach(function(a) {
                        n(t, a, e[a]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(a) {
                        Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
                    });
                }
                return t;
            }({}, r.default))).$mount();
        }).call(this, e("543d").createApp);
    },
    e480: function(t, a, e) {
        var o = e("5f7d");
        e.n(o).a;
    }
}, [ [ "bae5", "common/runtime", "common/vendor" ] ] ]);