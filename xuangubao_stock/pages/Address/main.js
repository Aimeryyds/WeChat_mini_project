(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Address/main" ], {
    1392: function(e, t, d) {
        var n = d("d3ba");
        d.n(n).a;
    },
    "32cc": function(e, t, d) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            d("6cdc"), d("921b"), t(d("66fd")), e(t(d("57e2")).default);
        }).call(this, d("543d").createPage);
    },
    "57e2": function(e, t, d) {
        d.r(t);
        var n = d("d2d1"), r = d("9729");
        for (var s in r) "default" !== s && function(e) {
            d.d(t, e, function() {
                return r[e];
            });
        }(s);
        d("1392");
        var a = d("2877"), u = Object(a.a)(r.default, n.a, n.b, !1, null, "9796a0a0", null);
        t.default = u.exports;
    },
    "602a": function(e, t, d) {
        function n(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var d = null != arguments[t] ? arguments[t] : {}, n = Object.keys(d);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(d).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(d, e).enumerable;
                }))), n.forEach(function(t) {
                    r(e, t, d[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function r(e, t, d) {
            return t in e ? Object.defineProperty(e, t, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = d, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(d("4360"));
        d("f8c8");
        var a = {
            components: {
                TitleBar: function() {
                    return d.e("components/TitleBar").then(d.bind(null, "1e1d"));
                },
                AddressForm: function() {
                    return d.e("pages/Address/AddressForm").then(d.bind(null, "beba"));
                }
            },
            props: {
                selectedItem: Object,
                selectedSubItem: Object,
                bargainOrder: Object
            },
            data: function() {
                return {
                    selectedAddress: null,
                    showAddressDetail: !1
                };
            },
            computed: {
                addressList: function() {
                    return s.default.getters["address/addressList"] || [];
                }
            },
            mounted: function() {
                s.default.dispatch("address/init");
            },
            methods: {
                addNewAddress: function(e) {
                    s.default.dispatch("address/addAddress", e);
                },
                updateDefaultAddress: function(e) {
                    s.default.dispatch("address/updateAddress", {
                        id: e.id,
                        data: n({}, e, {
                            isDefault: !0
                        })
                    });
                },
                editAddress: function(e) {
                    this.selectedAddress = e, this.showAddressDetail = !0;
                },
                setActiveAddress: function(e) {
                    s.default.commit("address/UPDATE_ACTIVE_ADDRESS", e), wx.navigateBack({
                        delta: 1
                    });
                },
                updateAddress: function(e) {
                    e.id ? s.default.dispatch("address/updateAddress", {
                        id: e.id,
                        data: e
                    }) : this.addNewAddress(e), this.showAddressDetail = !1, this.selectedAddress = null;
                }
            }
        };
        t.default = a;
    },
    9729: function(e, t, d) {
        d.r(t);
        var n = d("602a"), r = d.n(n);
        for (var s in n) "default" !== s && function(e) {
            d.d(t, e, function() {
                return n[e];
            });
        }(s);
        t.default = r.a;
    },
    d2d1: function(e, t, d) {
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                e.showAddressDetail = !0;
            }, e.e1 = function(t) {
                e.showAddressDetail = !1;
            });
        }, r = [];
        d.d(t, "a", function() {
            return n;
        }), d.d(t, "b", function() {
            return r;
        });
    },
    d3ba: function(e, t, d) {}
}, [ [ "32cc", "common/runtime", "common/vendor" ] ] ]);