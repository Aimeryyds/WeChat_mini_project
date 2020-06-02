require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 8 ], {
    19: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(1), o = n.n(a), r = n(20);
        new o.a(r.a).$mount();
    },
    20: function(e, t, n) {
        var a = n(22), o = n(23), r = !1, s = n(0)(a.a, o.a, function(e) {
            r || n(21);
        }, "data-v-02fc60fc", null);
        s.options.__file = "src\\pages\\guotie\\index.vue", s.esModule && Object.keys(s.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), s.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        t.a = s.exports;
    },
    21: function(e, t) {},
    22: function(e, t, n) {
        t.a = {
            name: "index",
            data: function() {
                return {};
            },
            components: {},
            methods: {},
            onShareAppMessage: function(e) {
                return wx.showShareMenu({
                    withShareTicket: !0
                }), {
                    title: "优理宝，懂投资，更懂你",
                    path: "/pages/index/main",
                    success: function(e) {
                        console.log(e), wx.showShareMenu({
                            withShareTicket: !0
                        });
                    }
                };
            },
            created: function() {}
        };
    },
    23: function(e, t, n) {
        var a = function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "container"
            }, [ n("navigator", {
                staticClass: "bottom",
                attrs: {
                    target: "miniProgram",
                    "open-type": "navigate",
                    "app-id": "wxf6076a6c59a2f14e",
                    path: "/pages/home-page/index?p=11",
                    "extra-data": "extraData",
                    version: "release"
                }
            }) ], 1);
        }, o = [];
        a._withStripped = !0;
        var r = {
            render: a,
            staticRenderFns: o
        };
        t.a = r;
    }
}, [ 19 ]);