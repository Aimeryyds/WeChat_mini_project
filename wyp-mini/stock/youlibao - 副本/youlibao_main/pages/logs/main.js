require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 2 ], {
    84: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t(1), r = t.n(o), a = t(85);
        new r.a(a.a).$mount();
    },
    85: function(e, n, t) {
        var o = t(87), r = t(89), a = !1, u = t(0)(o.a, r.a, function(e) {
            a || t(86);
        }, null, null);
        u.options.__file = "src\\pages\\logs\\index.vue", u.esModule && Object.keys(u.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), u.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        n.a = u.exports;
    },
    86: function(e, n) {},
    87: function(e, n, t) {
        var o = t(88), r = t(12);
        n.a = {
            components: {
                card: r.a
            },
            data: function() {
                return {
                    logs: []
                };
            },
            methods: {
                jump: function() {
                    wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/activity/pjm-test/downloadAPP/file/xyzq_mobile.apk"
                    });
                }
            },
            created: function() {
                var e = wx.getStorageSync("logs") || [];
                this.logs = e.map(function(e) {
                    return Object(o.a)(new Date(e));
                });
            }
        };
    },
    88: function(e, n, t) {
        function o(e) {
            var n = e.toString();
            return n[1] ? n : "0" + n;
        }
        function r(e) {
            var n = e.getFullYear(), t = e.getMonth() + 1, r = e.getDate(), a = e.getHours(), u = e.getMinutes(), i = e.getSeconds();
            return [ n, t, r ].map(o).join("/") + " " + [ a, u, i ].map(o).join(":");
        }
        n.a = r;
    },
    89: function(e, n, t) {
        var o = function() {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("div", [ t("button", {
                attrs: {
                    eventid: "1_0"
                },
                on: {
                    click: e.jump
                }
            }, [ e._v("跳转") ]) ], 1);
        }, r = [];
        o._withStripped = !0;
        var a = {
            render: o,
            staticRenderFns: r
        };
        n.a = a;
    }
}, [ 84 ]);