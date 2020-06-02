(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/shop/broker" ], {
    "0692": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n("f2de"), a = s(n("1f2b")), r = s(n("c3c5"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                    }))), i.forEach(function(e) {
                        c(t, e, n[e]);
                    });
                }
                return t;
            }
            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var l = {
                components: {
                    listCollection: a.default,
                    mgImage: r.default
                },
                onLoad: function(t) {
                    var e = this;
                    this.option = t, this.brokerId = t.brokerId, this.getBrokerByBrokerId({
                        cityId: this.cityId,
                        brokerId: this.brokerId
                    }).then(function(t) {
                        e.info = t;
                    });
                },
                data: function() {
                    return {
                        brokerId: void 0,
                        info: {},
                        option: {}
                    };
                },
                computed: o({}, (0, i.mapGetters)([ "cityId" ])),
                methods: o({}, (0, i.mapActions)([ "getBrokerByBrokerId" ]), {
                    brokerRegister: function() {
                        this.$mgRouter.navigateTo("/pages/viewPage/index", {
                            url: "https://h5.mgzf.com/minisite/brokerApp/?id=&inviteCode=P10031484&download=1"
                        });
                    },
                    phoneCall: function() {
                        this.info.phoneNum && t.makePhoneCall({
                            phoneNumber: this.info.phoneNum
                        });
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
                        title: "蘑菇租房-" + this.info.brokerName
                    };
                }
            };
            e.default = l;
        }).call(this, n("39c3")["default"]);
    },
    "2a71": function(t, e, n) {
        "use strict";
        var i = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("view", [ n("image", {
                staticClass: "banner",
                attrs: {
                    src: "https://assets.mgzf.com/appimg/1697a17a31ea9dd9d03f55cf21ab3970.png"
                }
            }), n("view", {
                staticClass: "content-brand"
            }, [ n("image", {
                staticClass: "brand-page-img",
                attrs: {
                    src: t.info.brokerIcon
                }
            }), n("view", {
                staticClass: "title"
            }, [ n("view", {
                staticClass: "h1"
            }, [ t._v(t._s(t.info.brokerName)), t.info.businessLicenseUrl ? n("image", {
                staticStyle: {
                    width: "44rpx",
                    height: "30rpx",
                    "margin-left": "20rpx",
                    "vertical-align": "middle"
                },
                attrs: {
                    src: "https://assets.mgzf.com/appimg/2da049077ddd7c6bef39de5360e60ad6.png",
                    eventid: "14fdb1ae-0"
                },
                on: {
                    click: t.checkLicense
                }
            }) : t._e() ]) ]) ]), n("view", {
                staticClass: "card"
            }, [ n("view", {
                staticClass: "broker-page-house"
            }, [ n("view", [ n("text", {
                staticClass: "text-gray-2"
            }, [ t._v("房源：") ]), n("text", {
                staticClass: "text-gray"
            }, [ t._v(t._s(t.info.roomTotalCount) + "套") ]) ]), t.info.joinYears ? n("view", {
                staticClass: "join"
            }, [ n("text", {
                staticClass: "text-gray-2"
            }, [ t._v("入住平台：") ]), n("text", {
                staticClass: "text-gray"
            }, [ t._v(t._s(t.info.joinYears) + "年") ]) ]) : t._e() ]), t.info.areas ? n("view", {
                staticClass: " broker-page-address"
            }, [ n("text", {
                staticClass: "text-gray-2"
            }, [ t._v("主营：") ]), n("text", {
                staticClass: "text-gray"
            }, [ t._v(t._s(t.info.areas)) ]) ]) : t._e() ]), n("listCollection", {
                attrs: {
                    option: t.option,
                    mpcomid: "14fdb1ae-0"
                }
            }), n("view", {
                staticClass: "footer"
            }, [ n("view", {
                staticClass: "first",
                attrs: {
                    eventid: "14fdb1ae-1"
                },
                on: {
                    click: t.brokerRegister
                }
            }, [ t._v("我想开店") ]), n("view", {
                class: "second " + (t.info.virtualNum ? "" : "disabled"),
                attrs: {
                    eventid: "14fdb1ae-2"
                },
                on: {
                    click: t.phoneCall
                }
            }, [ t._v("电话咨询") ]) ]) ], 1);
        }, a = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return a;
        });
    },
    "2ddb": function(t, e, n) {},
    "877b": function(t, e, n) {
        "use strict";
        n("6cdc");
        var i = r(n("9f5e")), a = r(n("95db"));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, i.default)(a.default));
    },
    "95db": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("2a71"), a = n("b6b0");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("bfb8");
        var s = n("17cc"), o = Object(s["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
        e["default"] = o.exports;
    },
    b6b0: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("0692"), a = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e["default"] = a.a;
    },
    bfb8: function(t, e, n) {
        "use strict";
        var i = n("2ddb"), a = n.n(i);
        a.a;
    }
}, [ [ "877b", "common/runtime", "common/vendor" ] ] ]);