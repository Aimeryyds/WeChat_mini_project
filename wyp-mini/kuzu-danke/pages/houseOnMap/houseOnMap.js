(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/houseOnMap/houseOnMap" ], {
    "0965": function(t, e, o) {},
    2160: function(t, e, o) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, n = [];
        o.d(e, "b", function() {
            return i;
        }), o.d(e, "c", function() {
            return n;
        }), o.d(e, "a", function() {});
    },
    "2c56": function(t, e, o) {
        o.r(e);
        var i = o("5f8b"), n = o.n(i);
        for (var a in i) "default" !== a && function(t) {
            o.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = n.a;
    },
    3658: function(t, e, o) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("e027"), e(o("66fd")), t(e(o("eb2a")).default);
        }).call(this, o("543d").createPage);
    },
    "43c5": function(t, e, o) {
        var i = o("0965");
        o.n(i).a;
    },
    "5f8b": function(t, e, o) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o("8b71"), a = i(o("d487")), r = (i(o("2b68")), i(o("733e"))), c = i(o("5f18")), s = i(o("ba34")), d = getApp(), u = {
                data: function() {
                    return {
                        latitude: 0,
                        longitude: 0,
                        preLatitude: 0,
                        preLongitude: 0,
                        showList: !1,
                        city: "",
                        roomNum: 0,
                        first: !0,
                        mapAddress: "",
                        roomList: [],
                        circles: [],
                        markers: [],
                        listData: "",
                        rentTypes: {
                            1: "整租",
                            2: "合租",
                            3: "月租"
                        },
                        cityId: {
                            "北京": 1,
                            "深圳": 178,
                            "上海": 540,
                            "杭州": 600,
                            "天津": 1207,
                            "武汉": 1366,
                            "南京": 1622,
                            "广州": 1781,
                            "成都": 2232,
                            "苏州": 3043,
                            "无锡": 3323,
                            "重庆": 3324,
                            "西安": 3328
                        },
                        cityCenter: {
                            "北京": "朝阳区",
                            "深圳": "福田区",
                            "上海": "静安区",
                            "杭州": "拱墅区",
                            "天津": "河北区",
                            "武汉": "江汉区",
                            "南京": "江宁区",
                            "广州": "海珠区",
                            "成都": "锦江区",
                            "苏州": "吴江区",
                            "无锡": "滨湖区",
                            "重庆": "渝中区",
                            "西安": "雁塔区"
                        }
                    };
                },
                onShow: function() {
                    var t = d.$vm.$options.globalData.houseOnMapFirst, e = this;
                    if (this.first && t) {
                        var o = d.$vm.currentCityName.replace("市", ""), i = d.$vm.$options.globalData.houseOnMapCity;
                        i ? (e.city = i, e.getLocation(i), d.$vm.$options.globalData.houseOnMapCity = "") : (e.city = o, 
                        e.getLocation(o));
                    } else e.first = !0, d.$vm.$options.globalData.houseOnMapFirst = !0;
                },
                onLoad: function(t) {},
                components: {},
                props: {},
                methods: {
                    getMapCenter: function() {
                        var t = this;
                        t.mapCtx.getCenterLocation({
                            success: function(e) {
                                var o = t.preLatitude, i = t.preLongitude, n = e.latitude, a = e.longitude;
                                o === n && i === a || (t.preLatitude = n, t.preLongitude = a, t.describingCircle(n, a), 
                                t.reverseGeocoder(n, a, !0));
                            }
                        });
                    },
                    regionChange: function(t) {
                        this.showList = !1, "end" === t.type && this.getMapCenter();
                    },
                    moveToLoaction: function() {
                        this.mapCtx.moveToLocation(), this.mapCtx.moveToLocation();
                    },
                    chooseLocation: function() {
                        var e = this;
                        this.first = !1, t.chooseLocation({
                            success: function(o) {
                                var i = o.latitude, n = o.longitude;
                                e.latitude = i, e.longitude = n, e.reverseGeocoder(i, n, !1), t.getSystemInfo({
                                    success: function(t) {
                                        "android" === t.platform && (e.describingCircle(i, n), e.reverseGeocoder(i, n, !0));
                                    }
                                }), d.sensors.track("Xcx_map", {
                                    Xcx_map_search_room: o.address
                                });
                            }
                        });
                    },
                    describingCircle: function(t, e) {
                        this.circles = [ {
                            latitude: t,
                            longitude: e,
                            color: "#ffffff00",
                            fillColor: "#3dbcc64C",
                            radius: 4e3
                        } ];
                    },
                    clickCallout: function(t) {
                        this.getRoomList(t.markerId);
                    },
                    chooseCity: function() {
                        t.navigateTo({
                            url: "../choseCity/choseCity"
                        });
                    },
                    toIndex: function() {
                        t.reLaunch({
                            url: "../index/index"
                        });
                    },
                    toDetail: function(e) {
                        this.first = !1;
                        var o = e.currentTarget.id.split("&");
                        console.log(o), t.navigateTo({
                            url: "../detail/detail?id=".concat(o[0], "&rent_type=").concat(o[1], "&isMonth=false&from_app=")
                        });
                    },
                    hideList: function() {
                        this.showList = !1;
                    },
                    getNearbyRooms: function(e, o) {
                        var i = this;
                        t.showLoading({
                            title: "寻找房源中"
                        });
                        var n = this, a = n.cityId, d = n.city;
                        (0, s.default)(c.default.new_url + "/leads", {
                            pageReferrer: "1",
                            platform: "3",
                            userId: t.getStorageSync("userId"),
                            mobile: t.getStorageSync("userMobile"),
                            name: t.getStorageSync("userNickname"),
                            roomId: this.response.roomId,
                            price: this.response.price,
                            rentType: leads_rentType,
                            city: t.getStorageSync("cityStorageName"),
                            blockId: this.response.blockId,
                            xiaoquId: this.response.communityId,
                            roomCode: this.response.roomCode
                        }, "POST", !1).then(function(t) {
                            console.log(t);
                        }), (0, r.default)(c.default.url + "/web-api/wechat-applets/map-room", {
                            app_id: "wx024695259e1a68cb",
                            city_id: a[d],
                            level: 3,
                            center_lat: e,
                            center_lng: o,
                            radius: 4e3
                        }, "GET", !0, {
                            app_id: "wx024695259e1a68cb",
                            city_id: a[d]
                        }).then(function(e) {
                            t.hideLoading(), e.data.success ? 0 === e.data.data.length ? (i.markers = [], t.showToast({
                                icon: "none",
                                title: "该区域暂无房源"
                            })) : n.createMarkers(e.data.data) : n.markers = [];
                        }).catch(function(e) {
                            console.log(e), t.hideLoading(), t.showToast({
                                icon: "none",
                                title: "获取失败，请检查网络"
                            });
                        });
                    },
                    getRoomList: function(e) {
                        t.showLoading({
                            title: "加载中"
                        });
                        var o = this, i = o.cityId, n = o.city;
                        (0, r.default)(c.default.url + "/web-api/wechat-applets/list", {
                            app_id: "wx024695259e1a68cb",
                            city_id: i[n],
                            xiaoqu_id: e
                        }, "GET", !0, {
                            app_id: "wx024695259e1a68cb",
                            city_id: i[n]
                        }).then(function(e) {
                            var i = e.data[0].data, n = i ? i.length : 0, a = e.data[0].data[0].map_address;
                            o.roomList = i, o.roomNum = n, o.mapAddress = a, o.showList = !0, t.hideLoading();
                        }).catch(function(e) {
                            console.log(e), t.hideLoading(), t.showToast({
                                icon: "none",
                                title: "获取失败，请检查网络"
                            });
                        });
                    },
                    createMarkers: function(e) {
                        var o = this, i = e.map(function(t, e) {
                            return {
                                id: t.id,
                                latitude: o.transformPosition(t.lat, t.lng, 1),
                                longitude: o.transformPosition(t.lat, t.lng, 0),
                                width: 1,
                                height: 1,
                                iconPath: "../../static/zhanwei.png",
                                callout: {
                                    content: " ￥" + t.min_price + "起  ",
                                    color: "#394344",
                                    fontSize: 16,
                                    borderRadius: 14.5,
                                    bgColor: "#ffffff",
                                    padding: 5,
                                    display: "ALWAYS",
                                    textAlign: "center"
                                }
                            };
                        });
                        this.markers = i, t.hideLoading();
                    },
                    transformPosition: function(t, e, o) {
                        return (0, n.transform)([ e, t ], n.BD09, n.GCJ02)[o];
                    },
                    getLocation: function(e) {
                        var o = this;
                        t.getLocation({
                            type: "gcj02",
                            success: function(i) {
                                var n = i.latitude, r = i.longitude;
                                o.describingCircle(n, r), a.default.reverseGeocoder({
                                    location: {
                                        latitude: n,
                                        longitude: r
                                    },
                                    success: function(i) {
                                        i.result.address_component.city.replace("市", "") === e ? (o.latitude = n, o.longitude = r, 
                                        o.preLatitude = n, o.preLongitude = r, o.mapCtx = t.createMapContext("map", o), 
                                        o.getNearbyRooms(n, r)) : o.geocoder(e);
                                    },
                                    fail: function(t) {
                                        console.log(t);
                                    }
                                });
                            },
                            fail: function() {
                                t.showToast({
                                    icon: "none",
                                    title: "请检查是否开启定位或网络"
                                });
                            }
                        });
                    },
                    reverseGeocoder: function(t, e, o) {
                        var i = this;
                        a.default.reverseGeocoder({
                            location: {
                                latitude: t,
                                longitude: e
                            },
                            success: function(n) {
                                var a = n.result.address_component.city.replace("市", "");
                                i.city != a ? (i.city = a, o && i.getNearbyRooms(t, e)) : o && i.getNearbyRooms(t, e);
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    geocoder: function(e) {
                        var o = this, i = o.cityCenter;
                        a.default.geocoder({
                            address: e + "市" + i[e],
                            success: function(e) {
                                var i = e.result.location, n = i.lat, a = i.lng;
                                o.describingCircle(n, a), o.latitude = n, o.longitude = a, o.preLatitude = n, o.preLongitude = a, 
                                o.mapCtx = t.createMapContext("map", o), o.getNearbyRooms(n, a);
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    }
                },
                computed: {},
                watch: {}
            };
            e.default = u;
        }).call(this, o("543d").default);
    },
    eb2a: function(t, e, o) {
        o.r(e);
        var i = o("2160"), n = o("2c56");
        for (var a in n) "default" !== a && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(a);
        o("43c5");
        var r = o("f0c5"), c = Object(r.a)(n.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = c.exports;
    }
}, [ [ "3658", "common/runtime", "common/vendor" ] ] ]);