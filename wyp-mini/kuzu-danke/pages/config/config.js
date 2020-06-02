(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/config/config" ], {
    "04ab": function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, function(n) {
                n && n.__esModule;
            }(t("0a9e")), getApp();
            var o = {
                data: function() {
                    return {
                        onoff: !1,
                        mobile: "",
                        userPrivacy: !1,
                        privacy_url: ""
                    };
                },
                onLoad: function(e) {
                    var t = this, o = n.getStorageSync("userMobile");
                    n.getStorageSync("userMobile") && (console.log(123), t.onoff = !0, t.mobile = o);
                },
                methods: {
                    toChange: function() {
                        n.navigateTo({
                            url: "../changePhone/changePhone"
                        });
                    },
                    onShareAppMessage: function() {
                        return {
                            title: "租的省心,住得舒心",
                            imageUrl: "../../images/share_img.png",
                            path: "pages/index/index"
                        };
                    },
                    toSecrecy: function() {
                        this.userPrivacy = !0, this.privacy_url = "https://www.danke.com/zhuanti/user-clause";
                    },
                    toProtect: function() {
                        this.userPrivacy = !0, this.privacy_url = "https://www.danke.com/zhuanti/user-privacy";
                    }
                },
                components: {},
                props: {},
                computed: {},
                watch: {}
            };
            e.default = o;
        }).call(this, t("543d").default);
    },
    "0f86": function(n, e, t) {
        t.r(e);
        var o = t("16dd"), a = t("e1c7");
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        t("baf1");
        var c = t("f0c5"), i = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    },
    "16dd": function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
    },
    "19d3": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("e027"), e(t("66fd")), n(e(t("0f86")).default);
        }).call(this, t("543d").createPage);
    },
    6072: function(n, e, t) {},
    baf1: function(n, e, t) {
        var o = t("6072");
        t.n(o).a;
    },
    e1c7: function(n, e, t) {
        t.r(e);
        var o = t("04ab"), a = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = a.a;
    }
}, [ [ "19d3", "common/runtime", "common/vendor" ] ] ]);