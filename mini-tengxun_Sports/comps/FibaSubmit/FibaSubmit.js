(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaSubmit/FibaSubmit" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=script&lang=js&": function(e, i, u) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = {
            props: {},
            data: function() {
                return {};
            },
            computed: {},
            watch: {},
            methods: {
                submit: function(e) {
                    this.$emit("onSubmit", e);
                }
            },
            created: function() {}
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=custom&index=0&blockType=config": function(e, i, u) {
        e.exports = u.p + "comps/FibaSubmit/FibaSubmit.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=style&index=0&lang=scss&": function(e, i, u) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=template&id=75e5115b&lang=wxml&": function(e, i, u) {
        u.r(i), u.d(i, "render", function() {
            return s;
        }), u.d(i, "staticRenderFns", function() {
            return t;
        });
        var s = function() {}, t = [];
        s._withStripped = !0;
    },
    "./src/comps/FibaSubmit/FibaSubmit.vue": function(e, i, u) {
        u.r(i);
        var s = u("./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=template&id=75e5115b&lang=wxml&"), t = u("./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=script&lang=js&");
        for (var o in t) "default" !== o && function(e) {
            u.d(i, e, function() {
                return t[e];
            });
        }(o);
        u("./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=style&index=0&lang=scss&");
        var n = u("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), d = u("./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=custom&index=0&blockType=config"), a = Object(n.default)(t.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof d.default && Object(d.default)(a);
        a.options.__file = "src/comps/FibaSubmit/FibaSubmit.vue", i.default = a.exports;
    },
    "./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=custom&index=0&blockType=config": function(e, i, u) {
        u.r(i);
        var s = u("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=custom&index=0&blockType=config"), t = u.n(s);
        for (var o in s) "default" !== o && function(e) {
            u.d(i, e, function() {
                return s[e];
            });
        }(o);
        i.default = t.a;
    },
    "./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=script&lang=js&": function(e, i, u) {
        u.r(i);
        var s = u("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=script&lang=js&"), t = u.n(s);
        for (var o in s) "default" !== o && function(e) {
            u.d(i, e, function() {
                return s[e];
            });
        }(o);
        i.default = t.a;
    },
    "./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=style&index=0&lang=scss&": function(e, i, u) {
        u.r(i);
        var s = u("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=style&index=0&lang=scss&"), t = u.n(s);
        for (var o in s) "default" !== o && function(e) {
            u.d(i, e, function() {
                return s[e];
            });
        }(o);
        i.default = t.a;
    },
    "./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=template&id=75e5115b&lang=wxml&": function(e, i, u) {
        u.r(i);
        var s = u("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaSubmit/FibaSubmit.vue?vue&type=template&id=75e5115b&lang=wxml&");
        u.d(i, "render", function() {
            return s.render;
        }), u.d(i, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/comps/FibaSubmit/index.js": function(e, i, u) {
        var s = u("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), t = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(u("./src/comps/FibaSubmit/FibaSubmit.vue"));
        (0, s.TuaComp)(t.default);
    },
    36: function(e, i, u) {
        e.exports = u("./src/comps/FibaSubmit/index.js");
    }
}, [ [ 36, "chunks/runtime", "chunks/vendors" ] ] ]);