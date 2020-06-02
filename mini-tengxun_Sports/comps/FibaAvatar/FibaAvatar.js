(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaAvatar/FibaAvatar" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=script&lang=js&": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = {
            props: {
                border: {
                    type: Boolean,
                    default: !1
                },
                width: {
                    type: String,
                    default: "100%"
                },
                height: {
                    type: String,
                    default: "100%"
                },
                styleStr: {
                    type: String,
                    default: ""
                },
                imgMode: {
                    type: String,
                    default: "scaleToFill"
                },
                src: {
                    type: String
                }
            },
            data: function() {
                return {
                    defaultSrc: "/assets/FIBA/pic_default_picture@3x.png"
                };
            },
            computed: {
                imgStyleStr: function() {
                    return "width: " + this.width + "; height: " + this.height + "; " + this.styleStr;
                }
            },
            watch: {},
            methods: {
                onSrcError: function() {
                    this.src = this.defaultSrc;
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=custom&index=0&blockType=config": function(e, a, t) {
        e.exports = t.p + "comps/FibaAvatar/FibaAvatar.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=style&index=0&lang=scss&": function(e, a, t) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=template&id=2867bebb&lang=wxml&": function(e, a, t) {
        t.r(a), t.d(a, "render", function() {
            return s;
        }), t.d(a, "staticRenderFns", function() {
            return r;
        });
        var s = function() {}, r = [];
        s._withStripped = !0;
    },
    "./src/comps/FibaAvatar/FibaAvatar.vue": function(e, a, t) {
        t.r(a);
        var s = t("./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=template&id=2867bebb&lang=wxml&"), r = t("./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=script&lang=js&");
        for (var o in r) "default" !== o && function(e) {
            t.d(a, e, function() {
                return r[e];
            });
        }(o);
        t("./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=style&index=0&lang=scss&");
        var i = t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), n = t("./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=custom&index=0&blockType=config"), d = Object(i.default)(r.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof n.default && Object(n.default)(d);
        d.options.__file = "src/comps/FibaAvatar/FibaAvatar.vue", a.default = d.exports;
    },
    "./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=custom&index=0&blockType=config": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=custom&index=0&blockType=config"), r = t.n(s);
        for (var o in s) "default" !== o && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(o);
        a.default = r.a;
    },
    "./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=script&lang=js&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=script&lang=js&"), r = t.n(s);
        for (var o in s) "default" !== o && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(o);
        a.default = r.a;
    },
    "./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=style&index=0&lang=scss&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=style&index=0&lang=scss&"), r = t.n(s);
        for (var o in s) "default" !== o && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(o);
        a.default = r.a;
    },
    "./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=template&id=2867bebb&lang=wxml&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAvatar/FibaAvatar.vue?vue&type=template&id=2867bebb&lang=wxml&");
        t.d(a, "render", function() {
            return s.render;
        }), t.d(a, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/comps/FibaAvatar/index.js": function(e, a, t) {
        var s = t("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("./src/comps/FibaAvatar/FibaAvatar.vue"));
        (0, s.TuaComp)(r.default);
    },
    25: function(e, a, t) {
        e.exports = t("./src/comps/FibaAvatar/index.js");
    }
}, [ [ 25, "chunks/runtime", "chunks/vendors" ] ] ]);