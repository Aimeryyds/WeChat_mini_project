(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/GameMax/GameMax" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameMax/GameMax.vue?vue&type=script&lang=js&": function(e, a, s) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = {
            props: {
                teamInfo: null,
                maxPlayers: Array
            },
            data: function() {
                return {};
            },
            methods: {}
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameMax/GameMax.vue?vue&type=custom&index=0&blockType=config": function(e, a, s) {
        e.exports = s.p + "comps/GameMax/GameMax.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameMax/GameMax.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameMax/GameMax.vue?vue&type=template&id=6401d301&lang=wxml&": function(e, a, s) {
        s.r(a), s.d(a, "render", function() {
            return o;
        }), s.d(a, "staticRenderFns", function() {
            return n;
        });
        var o = function() {}, n = [];
        o._withStripped = !0;
    },
    "./src/comps/GameMax/GameMax.vue": function(e, a, s) {
        s.r(a);
        var o = s("./src/comps/GameMax/GameMax.vue?vue&type=template&id=6401d301&lang=wxml&"), n = s("./src/comps/GameMax/GameMax.vue?vue&type=script&lang=js&");
        for (var d in n) "default" !== d && function(e) {
            s.d(a, e, function() {
                return n[e];
            });
        }(d);
        s("./src/comps/GameMax/GameMax.vue?vue&type=style&index=0&lang=scss&");
        var u = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), l = s("./src/comps/GameMax/GameMax.vue?vue&type=custom&index=0&blockType=config"), t = Object(u.default)(n.default, o.render, o.staticRenderFns, !1, null, null, null);
        "function" == typeof l.default && Object(l.default)(t);
        t.options.__file = "src/comps/GameMax/GameMax.vue", a.default = t.exports;
    },
    "./src/comps/GameMax/GameMax.vue?vue&type=custom&index=0&blockType=config": function(e, a, s) {
        s.r(a);
        var o = s("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameMax/GameMax.vue?vue&type=custom&index=0&blockType=config"), n = s.n(o);
        for (var d in o) "default" !== d && function(e) {
            s.d(a, e, function() {
                return o[e];
            });
        }(d);
        a.default = n.a;
    },
    "./src/comps/GameMax/GameMax.vue?vue&type=script&lang=js&": function(e, a, s) {
        s.r(a);
        var o = s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameMax/GameMax.vue?vue&type=script&lang=js&"), n = s.n(o);
        for (var d in o) "default" !== d && function(e) {
            s.d(a, e, function() {
                return o[e];
            });
        }(d);
        a.default = n.a;
    },
    "./src/comps/GameMax/GameMax.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {
        s.r(a);
        var o = s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameMax/GameMax.vue?vue&type=style&index=0&lang=scss&"), n = s.n(o);
        for (var d in o) "default" !== d && function(e) {
            s.d(a, e, function() {
                return o[e];
            });
        }(d);
        a.default = n.a;
    },
    "./src/comps/GameMax/GameMax.vue?vue&type=template&id=6401d301&lang=wxml&": function(e, a, s) {
        s.r(a);
        var o = s("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameMax/GameMax.vue?vue&type=template&id=6401d301&lang=wxml&");
        s.d(a, "render", function() {
            return o.render;
        }), s.d(a, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    "./src/comps/GameMax/index.js": function(e, a, s) {
        var o = s("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/comps/GameMax/GameMax.vue"));
        (0, o.TuaComp)(n.default);
    },
    39: function(e, a, s) {
        e.exports = s("./src/comps/GameMax/index.js");
    }
}, [ [ 39, "chunks/runtime", "chunks/vendors" ] ] ]);