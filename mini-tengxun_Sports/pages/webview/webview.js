(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/webview/webview" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/webview/Webview.vue?vue&type=script&lang=js&": function(e, n, i) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = {
            data: function() {
                return {
                    url: ""
                };
            },
            onLoad: function(e) {
                this.url = e.url;
            },
            methods: {},
            created: function() {}
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/webview/Webview.vue?vue&type=custom&index=0&blockType=config": function(e, n, i) {
        e.exports = i.p + "pages/webview/webview.json";
    },
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/webview/Webview.vue?vue&type=template&id=531fed22&lang=wxml&": function(e, n, i) {
        i.r(n), i.d(n, "render", function() {
            return u;
        }), i.d(n, "staticRenderFns", function() {
            return s;
        });
        var u = function() {}, s = [];
        u._withStripped = !0;
    },
    "./src/pages/webview/Webview.vue": function(e, n, i) {
        i.r(n);
        var u = i("./src/pages/webview/Webview.vue?vue&type=template&id=531fed22&lang=wxml&"), s = i("./src/pages/webview/Webview.vue?vue&type=script&lang=js&");
        for (var d in s) "default" !== d && function(e) {
            i.d(n, e, function() {
                return s[e];
            });
        }(d);
        var t = i("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), o = i("./src/pages/webview/Webview.vue?vue&type=custom&index=0&blockType=config"), l = Object(t.default)(s.default, u.render, u.staticRenderFns, !1, null, null, null);
        "function" == typeof o.default && Object(o.default)(l);
        l.options.__file = "src/pages/webview/Webview.vue", n.default = l.exports;
    },
    "./src/pages/webview/Webview.vue?vue&type=custom&index=0&blockType=config": function(e, n, i) {
        i.r(n);
        var u = i("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/webview/Webview.vue?vue&type=custom&index=0&blockType=config"), s = i.n(u);
        for (var d in u) "default" !== d && function(e) {
            i.d(n, e, function() {
                return u[e];
            });
        }(d);
        n.default = s.a;
    },
    "./src/pages/webview/Webview.vue?vue&type=script&lang=js&": function(e, n, i) {
        i.r(n);
        var u = i("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/webview/Webview.vue?vue&type=script&lang=js&"), s = i.n(u);
        for (var d in u) "default" !== d && function(e) {
            i.d(n, e, function() {
                return u[e];
            });
        }(d);
        n.default = s.a;
    },
    "./src/pages/webview/Webview.vue?vue&type=template&id=531fed22&lang=wxml&": function(e, n, i) {
        i.r(n);
        var u = i("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/webview/Webview.vue?vue&type=template&id=531fed22&lang=wxml&");
        i.d(n, "render", function() {
            return u.render;
        }), i.d(n, "staticRenderFns", function() {
            return u.staticRenderFns;
        });
    },
    "./src/pages/webview/index.js": function(e, n, i) {
        var u = i("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(i("./src/pages/webview/Webview.vue"));
        (0, u.TuaPage)(s.default);
    },
    21: function(e, n, i) {
        e.exports = i("./src/pages/webview/index.js");
    }
}, [ [ 21, "chunks/runtime", "chunks/vendors" ] ] ]);