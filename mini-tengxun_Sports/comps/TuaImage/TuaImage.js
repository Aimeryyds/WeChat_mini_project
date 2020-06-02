(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/TuaImage/TuaImage" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/TuaImage/TuaImage.vue?vue&type=script&lang=js&": function(e, a, u) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        a.default = {
            props: {
                src: String,
                errSrc: {
                    type: String,
                    default: "/assets/team-default.png"
                },
                width: {
                    type: String,
                    default: "48rpx"
                },
                height: {
                    type: String,
                    default: "48rpx"
                },
                styleStr: {
                    type: String,
                    default: ""
                },
                imgMode: {
                    type: String,
                    default: "scaleToFill"
                }
            },
            data: function() {
                return {
                    imgSrc: "",
                    isLoading: !0
                };
            },
            computed: {
                imgStyleStr: function() {
                    return "width: " + this.width + "; height: " + this.height + "; " + this.styleStr;
                }
            },
            methods: {
                _onImageError: function(e) {
                    this.imgSrc = this.errSrc, this.$emit("onImageError", e);
                },
                _onImageLoad: function(e) {
                    this.isLoading = !1, this.$emit("onImageLoad", e);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/TuaImage/TuaImage.vue?vue&type=custom&index=0&blockType=config": function(e, a, u) {
        e.exports = u.p + "comps/TuaImage/TuaImage.json";
    },
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/TuaImage/TuaImage.vue?vue&type=template&id=0876c5bb&lang=wxml&": function(e, a, u) {
        u.r(a), u.d(a, "render", function() {
            return t;
        }), u.d(a, "staticRenderFns", function() {
            return n;
        });
        var t = function() {}, n = [];
        t._withStripped = !0;
    },
    "./src/comps/TuaImage/TuaImage.vue": function(e, a, u) {
        u.r(a);
        var t = u("./src/comps/TuaImage/TuaImage.vue?vue&type=template&id=0876c5bb&lang=wxml&"), n = u("./src/comps/TuaImage/TuaImage.vue?vue&type=script&lang=js&");
        for (var o in n) "default" !== o && function(e) {
            u.d(a, e, function() {
                return n[e];
            });
        }(o);
        var s = u("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = u("./src/comps/TuaImage/TuaImage.vue?vue&type=custom&index=0&blockType=config"), d = Object(s.default)(n.default, t.render, t.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(d);
        d.options.__file = "src/comps/TuaImage/TuaImage.vue", a.default = d.exports;
    },
    "./src/comps/TuaImage/TuaImage.vue?vue&type=custom&index=0&blockType=config": function(e, a, u) {
        u.r(a);
        var t = u("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/TuaImage/TuaImage.vue?vue&type=custom&index=0&blockType=config"), n = u.n(t);
        for (var o in t) "default" !== o && function(e) {
            u.d(a, e, function() {
                return t[e];
            });
        }(o);
        a.default = n.a;
    },
    "./src/comps/TuaImage/TuaImage.vue?vue&type=script&lang=js&": function(e, a, u) {
        u.r(a);
        var t = u("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/TuaImage/TuaImage.vue?vue&type=script&lang=js&"), n = u.n(t);
        for (var o in t) "default" !== o && function(e) {
            u.d(a, e, function() {
                return t[e];
            });
        }(o);
        a.default = n.a;
    },
    "./src/comps/TuaImage/TuaImage.vue?vue&type=template&id=0876c5bb&lang=wxml&": function(e, a, u) {
        u.r(a);
        var t = u("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/TuaImage/TuaImage.vue?vue&type=template&id=0876c5bb&lang=wxml&");
        u.d(a, "render", function() {
            return t.render;
        }), u.d(a, "staticRenderFns", function() {
            return t.staticRenderFns;
        });
    },
    "./src/comps/TuaImage/index.js": function(e, a, u) {
        var t = u("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(u("./src/comps/TuaImage/TuaImage.vue"));
        (0, t.TuaComp)(n.default);
    },
    45: function(e, a, u) {
        e.exports = u("./src/comps/TuaImage/index.js");
    }
}, [ [ 45, "chunks/runtime", "chunks/vendors" ] ] ]);