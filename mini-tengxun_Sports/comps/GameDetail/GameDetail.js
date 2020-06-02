(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/GameDetail/GameDetail" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameDetail/GameDetail.vue?vue&type=script&lang=js&": function(e, a, s) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = {
            props: {
                matchType: null,
                scoreDetail: Array,
                scoreFirstCol: Array
            },
            data: function() {
                return {};
            },
            methods: {}
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameDetail/GameDetail.vue?vue&type=custom&index=0&blockType=config": function(e, a, s) {
        e.exports = s.p + "comps/GameDetail/GameDetail.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameDetail/GameDetail.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameDetail/GameDetail.vue?vue&type=template&id=987af48a&lang=wxml&": function(e, a, s) {
        s.r(a), s.d(a, "render", function() {
            return l;
        }), s.d(a, "staticRenderFns", function() {
            return t;
        });
        var l = function() {}, t = [];
        l._withStripped = !0;
    },
    "./src/comps/GameDetail/GameDetail.vue": function(e, a, s) {
        s.r(a);
        var l = s("./src/comps/GameDetail/GameDetail.vue?vue&type=template&id=987af48a&lang=wxml&"), t = s("./src/comps/GameDetail/GameDetail.vue?vue&type=script&lang=js&");
        for (var o in t) "default" !== o && function(e) {
            s.d(a, e, function() {
                return t[e];
            });
        }(o);
        s("./src/comps/GameDetail/GameDetail.vue?vue&type=style&index=0&lang=scss&");
        var n = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), i = s("./src/comps/GameDetail/GameDetail.vue?vue&type=custom&index=0&blockType=config"), d = Object(n.default)(t.default, l.render, l.staticRenderFns, !1, null, null, null);
        "function" == typeof i.default && Object(i.default)(d);
        d.options.__file = "src/comps/GameDetail/GameDetail.vue", a.default = d.exports;
    },
    "./src/comps/GameDetail/GameDetail.vue?vue&type=custom&index=0&blockType=config": function(e, a, s) {
        s.r(a);
        var l = s("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameDetail/GameDetail.vue?vue&type=custom&index=0&blockType=config"), t = s.n(l);
        for (var o in l) "default" !== o && function(e) {
            s.d(a, e, function() {
                return l[e];
            });
        }(o);
        a.default = t.a;
    },
    "./src/comps/GameDetail/GameDetail.vue?vue&type=script&lang=js&": function(e, a, s) {
        s.r(a);
        var l = s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameDetail/GameDetail.vue?vue&type=script&lang=js&"), t = s.n(l);
        for (var o in l) "default" !== o && function(e) {
            s.d(a, e, function() {
                return l[e];
            });
        }(o);
        a.default = t.a;
    },
    "./src/comps/GameDetail/GameDetail.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {
        s.r(a);
        var l = s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameDetail/GameDetail.vue?vue&type=style&index=0&lang=scss&"), t = s.n(l);
        for (var o in l) "default" !== o && function(e) {
            s.d(a, e, function() {
                return l[e];
            });
        }(o);
        a.default = t.a;
    },
    "./src/comps/GameDetail/GameDetail.vue?vue&type=template&id=987af48a&lang=wxml&": function(e, a, s) {
        s.r(a);
        var l = s("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameDetail/GameDetail.vue?vue&type=template&id=987af48a&lang=wxml&");
        s.d(a, "render", function() {
            return l.render;
        }), s.d(a, "staticRenderFns", function() {
            return l.staticRenderFns;
        });
    },
    "./src/comps/GameDetail/index.js": function(e, a, s) {
        var l = s("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), t = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/comps/GameDetail/GameDetail.vue"));
        (0, l.TuaComp)(t.default);
    },
    37: function(e, a, s) {
        e.exports = s("./src/comps/GameDetail/index.js");
    }
}, [ [ 37, "chunks/runtime", "chunks/vendors" ] ] ]);