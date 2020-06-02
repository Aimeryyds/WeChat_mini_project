require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 6 ], {
    69: function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var t = o(1), a = o.n(t), i = o(70);
        new a.a(i.a).$mount();
    },
    70: function(e, n, o) {
        var t = o(72), a = o(73), i = !1, r = o(0)(t.a, a.a, function(e) {
            i || o(71);
        }, "data-v-155dc2b6", null);
        r.options.__file = "src\\pages\\loading\\index.vue", r.esModule && Object.keys(r.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        n.a = r.exports;
    },
    71: function(e, n) {},
    72: function(e, n, o) {
        n.a = {
            name: "index",
            data: function() {
                return {
                    hidden: !1
                };
            },
            components: {},
            mounted: function() {
                var e = wx.getStorageSync("token");
                console.info("loading页面==token=>" + e), e ? wx.navigateTo({
                    url: "/pages/index/main"
                }) : wx.navigateTo({
                    url: "/pages/login_button/main"
                });
            },
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
            onLoad: function(e) {}
        };
    },
    73: function(e, n, o) {
        var t = function() {
            var e = this, n = e.$createElement, o = e._self._c || n;
            return o("div", {
                staticClass: "container"
            }, [ o("loading", {
                attrs: {
                    hidden: e.hidden,
                    mpcomid: "0"
                }
            }, [ e._v("加载中") ]) ]);
        }, a = [];
        t._withStripped = !0;
        var i = {
            render: t,
            staticRenderFns: a
        };
        n.a = i;
    }
}, [ 69 ]);