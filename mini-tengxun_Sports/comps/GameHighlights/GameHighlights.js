(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/GameHighlights/GameHighlights" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameHighlights/GameHighlights.vue?vue&type=script&lang=js&": function(e, s, i) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.default = {
            props: {
                videoList: Object,
                videoOnPlayIdx: Object,
                videoTabClass: Array,
                curVid: String,
                videoListContainerWidth: String,
                videoListWidth: String
            },
            data: function() {
                return {};
            },
            computed: {},
            methods: {
                changeVideoTab: function(e) {
                    this.$emit("changeVideoTab", e);
                },
                playNewVideo: function(e) {
                    this.$emit("playNewVideo", e);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameHighlights/GameHighlights.vue?vue&type=custom&index=0&blockType=config": function(e, s, i) {
        e.exports = i.p + "comps/GameHighlights/GameHighlights.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameHighlights/GameHighlights.vue?vue&type=style&index=0&lang=scss&": function(e, s, i) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameHighlights/GameHighlights.vue?vue&type=template&id=1fff31fb&lang=wxml&": function(e, s, i) {
        i.r(s), i.d(s, "render", function() {
            return t;
        }), i.d(s, "staticRenderFns", function() {
            return l;
        });
        var t = function() {}, l = [];
        t._withStripped = !0;
    },
    "./src/comps/GameHighlights/GameHighlights.vue": function(e, s, i) {
        i.r(s);
        var t = i("./src/comps/GameHighlights/GameHighlights.vue?vue&type=template&id=1fff31fb&lang=wxml&"), l = i("./src/comps/GameHighlights/GameHighlights.vue?vue&type=script&lang=js&");
        for (var o in l) "default" !== o && function(e) {
            i.d(s, e, function() {
                return l[e];
            });
        }(o);
        i("./src/comps/GameHighlights/GameHighlights.vue?vue&type=style&index=0&lang=scss&");
        var n = i("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), d = i("./src/comps/GameHighlights/GameHighlights.vue?vue&type=custom&index=0&blockType=config"), a = Object(n.default)(l.default, t.render, t.staticRenderFns, !1, null, null, null);
        "function" == typeof d.default && Object(d.default)(a);
        a.options.__file = "src/comps/GameHighlights/GameHighlights.vue", s.default = a.exports;
    },
    "./src/comps/GameHighlights/GameHighlights.vue?vue&type=custom&index=0&blockType=config": function(e, s, i) {
        i.r(s);
        var t = i("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameHighlights/GameHighlights.vue?vue&type=custom&index=0&blockType=config"), l = i.n(t);
        for (var o in t) "default" !== o && function(e) {
            i.d(s, e, function() {
                return t[e];
            });
        }(o);
        s.default = l.a;
    },
    "./src/comps/GameHighlights/GameHighlights.vue?vue&type=script&lang=js&": function(e, s, i) {
        i.r(s);
        var t = i("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameHighlights/GameHighlights.vue?vue&type=script&lang=js&"), l = i.n(t);
        for (var o in t) "default" !== o && function(e) {
            i.d(s, e, function() {
                return t[e];
            });
        }(o);
        s.default = l.a;
    },
    "./src/comps/GameHighlights/GameHighlights.vue?vue&type=style&index=0&lang=scss&": function(e, s, i) {
        i.r(s);
        var t = i("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameHighlights/GameHighlights.vue?vue&type=style&index=0&lang=scss&"), l = i.n(t);
        for (var o in t) "default" !== o && function(e) {
            i.d(s, e, function() {
                return t[e];
            });
        }(o);
        s.default = l.a;
    },
    "./src/comps/GameHighlights/GameHighlights.vue?vue&type=template&id=1fff31fb&lang=wxml&": function(e, s, i) {
        i.r(s);
        var t = i("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameHighlights/GameHighlights.vue?vue&type=template&id=1fff31fb&lang=wxml&");
        i.d(s, "render", function() {
            return t.render;
        }), i.d(s, "staticRenderFns", function() {
            return t.staticRenderFns;
        });
    },
    "./src/comps/GameHighlights/index.js": function(e, s, i) {
        var t = i("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(i("./src/comps/GameHighlights/GameHighlights.vue"));
        (0, t.TuaComp)(l.default);
    },
    38: function(e, s, i) {
        e.exports = i("./src/comps/GameHighlights/index.js");
    }
}, [ [ 38, "chunks/runtime", "chunks/vendors" ] ] ]);