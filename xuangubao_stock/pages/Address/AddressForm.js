(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Address/AddressForm" ], {
    "2ac1": function(e, t, s) {
        s.r(t);
        var n = s("650e"), a = s.n(n);
        for (var d in n) "default" !== d && function(e) {
            s.d(t, e, function() {
                return n[e];
            });
        }(d);
        t.default = a.a;
    },
    4537: function(e, t, s) {
        var n = s("862d");
        s.n(n).a;
    },
    "650e": function(e, t, s) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = {
            components: {
                TitleBar: function() {
                    return s.e("components/TitleBar").then(s.bind(null, "1e1d"));
                }
            },
            props: {
                selectedAddress: Object
            },
            data: function() {
                return {
                    localAddress: null
                };
            },
            watch: {
                selectedAddress: {
                    handler: function() {
                        this.localAddress = this.selectedAddress || {
                            name: "",
                            city: "",
                            mobile: "",
                            address: "",
                            isDefault: !1
                        };
                    },
                    immediate: !0
                }
            },
            methods: {
                bindRegionChange: function(e) {
                    var t = e.detail;
                    t.value && (this.localAddress.city = t.value.join(""));
                },
                toggleSetDefault: function() {
                    this.localAddress.isDefault = !this.localAddress.isDefault;
                },
                save: function() {
                    this.localAddress.address && this.localAddress.city && this.localAddress.mobile && this.localAddress.name ? this.$emit("save", this.localAddress) : wx.showToast({
                        title: "请确认输入是否完整！",
                        icon: "none",
                        duration: 1e3
                    });
                },
                close: function() {
                    this.$emit("close");
                }
            }
        };
        t.default = n;
    },
    "862d": function(e, t, s) {},
    beba: function(e, t, s) {
        s.r(t);
        var n = s("f59e"), a = s("2ac1");
        for (var d in a) "default" !== d && function(e) {
            s.d(t, e, function() {
                return a[e];
            });
        }(d);
        s("4537");
        var o = s("2877"), l = Object(o.a)(a.default, n.a, n.b, !1, null, null, null);
        t.default = l.exports;
    },
    f59e: function(e, t, s) {
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        s.d(t, "a", function() {
            return n;
        }), s.d(t, "b", function() {
            return a;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Address/AddressForm-create-component", {
    "pages/Address/AddressForm-create-component": function(e, t, s) {
        s("543d").createComponent(s("beba"));
    }
}, [ [ "pages/Address/AddressForm-create-component" ] ] ]);