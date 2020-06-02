(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/cities" ], {
    "5d08": function(t, i, e) {
        "use strict";
        var c = function() {
            var t = this, i = t.$createElement, e = t._self._c || i;
            return e("view", {
                staticClass: "cityList-container"
            }, [ e("scroll-view", {
                staticClass: "cityList-scroll",
                attrs: {
                    "scroll-y": "true"
                }
            }, [ e("view", {
                staticClass: "location-view"
            }, [ t._v("当前定位城市："), e("view", {
                staticClass: "currentCityByIpBox"
            }, [ 1 === t.type || 2 === t.type ? e("text", {
                staticClass: "currentCityByIp",
                class: t.locationCity && t.currentCity.cityId == t.locationCity.cityId ? "active" : "",
                attrs: {
                    eventid: "424e15a6-0"
                },
                on: {
                    click: t.locationClick
                }
            }, [ t._v(t._s(1 === t.type ? t.locationCity.cityName : "定位失败，点击重新定位")) ]) : e("text", {
                staticClass: "currentCityByIp"
            }, [ t._v(t._s(0 === t.type ? "定位中..." : "您当前所在城市暂未开通服务")) ]) ]) ]), e("view", t._l(t.cityList, function(i, c) {
                return e("view", {
                    key: c,
                    staticClass: "list-group"
                }, [ e("view", {
                    staticClass: "list-group-title"
                }, [ t._v(t._s(i.letter)) ]), e("view", {
                    staticStyle: {
                        padding: "0"
                    }
                }, t._l(i.list, function(i, n) {
                    return e("view", {
                        key: n,
                        staticClass: "list-group-item",
                        attrs: {
                            eventid: "424e15a6-1-" + c + "-" + n
                        },
                        on: {
                            click: function(e) {
                                t.selectCity(i);
                            }
                        }
                    }, [ e("text", {
                        staticClass: "name",
                        class: t.currentCity.cityId == i.cityId ? "active" : ""
                    }, [ t._v(t._s(i.cityName)) ]) ]);
                })) ]);
            })) ]) ], 1);
        }, n = [];
        e.d(i, "a", function() {
            return c;
        }), e.d(i, "b", function() {
            return n;
        });
    },
    "6cf8": function(t, i, e) {
        "use strict";
        var c = e("b88d"), n = e.n(c);
        n.a;
    },
    a251: function(t, i, e) {
        "use strict";
        e("6cdc");
        var c = s(e("9f5e")), n = s(e("a601"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, c.default)(n.default));
    },
    a601: function(t, i, e) {
        "use strict";
        e.r(i);
        var c = e("5d08"), n = e("ceea");
        for (var s in n) "default" !== s && function(t) {
            e.d(i, t, function() {
                return n[t];
            });
        }(s);
        e("6cf8");
        var a = e("17cc"), r = Object(a["a"])(n["default"], c["a"], c["b"], !1, null, null, null);
        i["default"] = r.exports;
    },
    b88d: function(t, i, e) {},
    ceea: function(t, i, e) {
        "use strict";
        e.r(i);
        var c = e("cf83"), n = e.n(c);
        for (var s in c) "default" !== s && function(t) {
            e.d(i, t, function() {
                return c[t];
            });
        }(s);
        i["default"] = n.a;
    },
    cf83: function(t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var c = e("f2de"), n = e("34fa");
        function s(t) {
            for (var i = 1; i < arguments.length; i++) {
                var e = null != arguments[i] ? arguments[i] : {}, c = Object.keys(e);
                "function" === typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), c.forEach(function(i) {
                    a(t, i, e[i]);
                });
            }
            return t;
        }
        function a(t, i, e) {
            return i in t ? Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[i] = e, t;
        }
        var r = {
            name: "cities",
            data: function() {
                return {
                    cityList: [],
                    type: 0
                };
            },
            onLoad: function() {
                var t = this, i = this.$store.state.cityList;
                i && i.length > 0 ? this.formatCityList() : this.$store.dispatch("getCityList").then(function(i) {
                    t.formatCityList();
                }), this.getLocal();
            },
            computed: s({}, (0, c.mapState)([ "currentCity", "locationCity" ])),
            methods: {
                getLocal: function() {
                    var t = this, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.$store.dispatch("getLocationCity", {
                        enforce: i
                    }).then(function(i) {
                        i && i.cityId ? t.type = 1 : i && !i.cityId ? t.type = 3 : t.type = 2;
                    });
                },
                formatCityList: function() {
                    var t = this.$store.state.cityList, i = {};
                    t.forEach(function(t) {
                        var e = t.shortSpell.substr(0, 1).toUpperCase();
                        i[e] || (i[e] = {
                            letter: e,
                            list: []
                        }), i[e].list.push(t);
                    }), this.cityList = Object.keys(i).sort().map(function(t) {
                        return i[t];
                    });
                },
                selectCity: function(t) {
                    this.$store.commit(n.SET_CURRENT_CITY, t), this.$mgRouter.reLaunch("/pages/home");
                },
                locationClick: function() {
                    var t = this.type, i = this.locationCity, e = this.currentCity;
                    1 === t && i.cityId !== e.cityId ? this.selectCity(this.locationCity) : 1 === t && i.cityId == e.cityId ? this.$mgRouter.navigateBack() : 2 === t && this.getLocal(!0);
                }
            }
        };
        i.default = r;
    }
}, [ [ "a251", "common/runtime", "common/vendor" ] ] ]);