(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/shop/brand" ], {
    "0391": function(t, e, n) {
        "use strict";
        var i = n("3fdc"), a = n.n(i);
        a.a;
    },
    "22ca": function(t, e, n) {
        "use strict";
        n("6cdc");
        var i = c(n("9f5e")), a = c(n("3749"));
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, i.default)(a.default));
    },
    3749: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("b818"), a = n("857d");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("0391");
        var r = n("17cc"), s = Object(r["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
        e["default"] = s.exports;
    },
    "3fdc": function(t, e, n) {},
    4477: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n("f2de"), a = r(n("1f2b")), c = r(n("c3c5"));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), i.forEach(function(e) {
                    o(t, e, n[e]);
                });
            }
            return t;
        }
        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var d = {
            components: {
                listCollection: a.default,
                mgImage: c.default
            },
            onLoad: function(t) {
                var e = this;
                this.option = t, this.brandId = t.brandId, this.getBrandInfo({
                    cityId: this.cityId,
                    brandId: this.brandId
                }).then(function(t) {
                    e.info = t;
                });
            },
            data: function() {
                return {
                    brandId: void 0,
                    info: {},
                    descriptionExpand: !1,
                    option: {}
                };
            },
            computed: s({}, (0, i.mapGetters)([ "cityId" ])),
            methods: s({}, (0, i.mapActions)([ "getBrandInfo" ]), {
                toggleDescriptionExpand: function() {
                    this.descriptionExpand = !this.descriptionExpand;
                },
                checkLicense: function() {
                    wx.previewImage({
                        current: "",
                        urls: [ this.info.businessLicenseUrl ]
                    });
                }
            }),
            onShareAppMessage: function() {
                return {
                    title: "蘑菇租房-" + this.info.title
                };
            }
        };
        e.default = d;
    },
    "857d": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("4477"), a = n.n(i);
        for (var c in i) "default" !== c && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        e["default"] = a.a;
    },
    b818: function(t, e, n) {
        "use strict";
        var i = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("view", [ n("image", {
                staticClass: "banner",
                attrs: {
                    src: t.info.banner
                }
            }), n("view", {
                staticClass: "content-brand"
            }, [ n("image", {
                staticClass: "brand-page-img",
                attrs: {
                    src: t.info.img
                }
            }), n("view", {
                staticClass: "title"
            }, [ n("view", {
                staticClass: "h1"
            }, [ t._v(t._s(t.info.title)), t.info.businessLicenseUrl ? n("image", {
                staticStyle: {
                    width: "44rpx",
                    height: "30rpx",
                    "margin-left": "20rpx",
                    "vertical-align": "middle"
                },
                attrs: {
                    src: "https://assets.mgzf.com/appimg/2da049077ddd7c6bef39de5360e60ad6.png",
                    eventid: "1fadf9dc-0"
                },
                on: {
                    click: t.checkLicense
                }
            }) : t._e() ]), n("view", {
                staticClass: "iconfont icon-perfect"
            }) ]), n("view", {
                staticClass: "brand-page-button",
                attrs: {
                    eventid: "1fadf9dc-1"
                },
                on: {
                    click: t.toggleDescriptionExpand
                }
            }, [ t._v("品牌介绍") ]) ]), t.descriptionExpand ? n("view", {
                staticClass: "description-expand"
            }, [ n("view", {
                staticClass: "brand-page-title1"
            }, [ t._v(t._s(t.info.title)) ]), n("view", {
                staticClass: "brand-page-desc"
            }, [ t._v(t._s(t.info.description)) ]), n("view", {
                staticClass: "iconfont mgic-chahao",
                attrs: {
                    eventid: "1fadf9dc-2"
                },
                on: {
                    click: t.toggleDescriptionExpand
                }
            }) ]) : t._e(), n("listCollection", {
                attrs: {
                    option: t.option,
                    mpcomid: "1fadf9dc-0"
                }
            }) ], 1);
        }, a = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return a;
        });
    }
}, [ [ "22ca", "common/runtime", "common/vendor" ] ] ]);