(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaLogin/FibaLogin" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaLogin/FibaLogin.vue?vue&type=script&lang=js&": function(e, o, n) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = {
            props: {
                onlyauth: {
                    type: Boolean,
                    default: !0
                },
                userInfo: Object
            },
            data: function() {
                return {};
            },
            methods: {
                onGotUserInfo: function(e) {
                    if ("getUserInfo:ok" === e.detail.errMsg) {
                        var o = e.detail.userInfo, n = {
                            nickName: o.nickName.length >= 10 ? o.nickName.slice(0, 8) + "..." : o.nickName,
                            avatarUrl: o.avatarUrl
                        };
                        wx.setStorageSync("wxUserInfo", n), this.triggerEvent("loginevent", n);
                    }
                },
                stopPropagation: function() {}
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaLogin/FibaLogin.vue?vue&type=custom&index=0&blockType=config": function(e, o, n) {
        e.exports = n.p + "comps/FibaLogin/FibaLogin.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaLogin/FibaLogin.vue?vue&type=style&index=0&lang=scss&": function(e, o, n) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaLogin/FibaLogin.vue?vue&type=template&id=54c8ed2a&lang=wxml&": function(e, o, n) {
        n.r(o), n.d(o, "render", function() {
            return i;
        }), n.d(o, "staticRenderFns", function() {
            return s;
        });
        var i = function() {}, s = [];
        i._withStripped = !0;
    },
    "./src/comps/FibaLogin/FibaLogin.vue": function(e, o, n) {
        n.r(o);
        var i = n("./src/comps/FibaLogin/FibaLogin.vue?vue&type=template&id=54c8ed2a&lang=wxml&"), s = n("./src/comps/FibaLogin/FibaLogin.vue?vue&type=script&lang=js&");
        for (var a in s) "default" !== a && function(e) {
            n.d(o, e, function() {
                return s[e];
            });
        }(a);
        n("./src/comps/FibaLogin/FibaLogin.vue?vue&type=style&index=0&lang=scss&");
        var d = n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), t = n("./src/comps/FibaLogin/FibaLogin.vue?vue&type=custom&index=0&blockType=config"), u = Object(d.default)(s.default, i.render, i.staticRenderFns, !1, null, null, null);
        "function" == typeof t.default && Object(t.default)(u);
        u.options.__file = "src/comps/FibaLogin/FibaLogin.vue", o.default = u.exports;
    },
    "./src/comps/FibaLogin/FibaLogin.vue?vue&type=custom&index=0&blockType=config": function(e, o, n) {
        n.r(o);
        var i = n("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaLogin/FibaLogin.vue?vue&type=custom&index=0&blockType=config"), s = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(o, e, function() {
                return i[e];
            });
        }(a);
        o.default = s.a;
    },
    "./src/comps/FibaLogin/FibaLogin.vue?vue&type=script&lang=js&": function(e, o, n) {
        n.r(o);
        var i = n("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaLogin/FibaLogin.vue?vue&type=script&lang=js&"), s = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(o, e, function() {
                return i[e];
            });
        }(a);
        o.default = s.a;
    },
    "./src/comps/FibaLogin/FibaLogin.vue?vue&type=style&index=0&lang=scss&": function(e, o, n) {
        n.r(o);
        var i = n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaLogin/FibaLogin.vue?vue&type=style&index=0&lang=scss&"), s = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(o, e, function() {
                return i[e];
            });
        }(a);
        o.default = s.a;
    },
    "./src/comps/FibaLogin/FibaLogin.vue?vue&type=template&id=54c8ed2a&lang=wxml&": function(e, o, n) {
        n.r(o);
        var i = n("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaLogin/FibaLogin.vue?vue&type=template&id=54c8ed2a&lang=wxml&");
        n.d(o, "render", function() {
            return i.render;
        }), n.d(o, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    "./src/comps/FibaLogin/index.js": function(e, o, n) {
        var i = n("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("./src/comps/FibaLogin/FibaLogin.vue"));
        (0, i.TuaComp)(s.default);
    },
    29: function(e, o, n) {
        e.exports = n("./src/comps/FibaLogin/index.js");
    }
}, [ [ 29, "chunks/runtime", "chunks/vendors" ] ] ]);