(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaAd/FibaAd" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAd/FibaAd.vue?vue&type=script&lang=js&": function(e, d, n) {
        Object.defineProperty(d, "__esModule", {
            value: !0
        }), d.default = {
            props: {
                styleStr: String,
                bannerInfo: Object,
                defaultPicUrl: {
                    type: String,
                    default: ""
                },
                imageStr: String
            },
            data: function() {
                return {
                    defaultSrc: "/assets/FIBA/pic_default_banner@3x.png"
                };
            },
            computed: {},
            watch: {},
            methods: {
                handleAdEvent: function() {
                    this.bannerInfo && this.bannerInfo.appId ? wx.navigateToMiniProgram({
                        appId: this.bannerInfo.appId,
                        path: this.bannerInfo.path,
                        extraData: this.bannerInfo.extraData
                    }) : this.bannerInfo && this.bannerInfo.path && wx.navigateTo({
                        url: "/pages/webview/webview?url=" + this.bannerInfo.path
                    });
                },
                onSrcError: function() {
                    this.defaultPicUrl = this.defaultSrc;
                }
            },
            created: function() {}
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAd/FibaAd.vue?vue&type=custom&index=0&blockType=config": function(e, d, n) {
        e.exports = n.p + "comps/FibaAd/FibaAd.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAd/FibaAd.vue?vue&type=style&index=0&lang=scss&": function(e, d, n) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAd/FibaAd.vue?vue&type=template&id=dbce150a&lang=wxml&": function(e, d, n) {
        n.r(d), n.d(d, "render", function() {
            return s;
        }), n.d(d, "staticRenderFns", function() {
            return a;
        });
        var s = function() {}, a = [];
        s._withStripped = !0;
    },
    "./src/comps/FibaAd/FibaAd.vue": function(e, d, n) {
        n.r(d);
        var s = n("./src/comps/FibaAd/FibaAd.vue?vue&type=template&id=dbce150a&lang=wxml&"), a = n("./src/comps/FibaAd/FibaAd.vue?vue&type=script&lang=js&");
        for (var o in a) "default" !== o && function(e) {
            n.d(d, e, function() {
                return a[e];
            });
        }(o);
        n("./src/comps/FibaAd/FibaAd.vue?vue&type=style&index=0&lang=scss&");
        var i = n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), t = n("./src/comps/FibaAd/FibaAd.vue?vue&type=custom&index=0&blockType=config"), u = Object(i.default)(a.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof t.default && Object(t.default)(u);
        u.options.__file = "src/comps/FibaAd/FibaAd.vue", d.default = u.exports;
    },
    "./src/comps/FibaAd/FibaAd.vue?vue&type=custom&index=0&blockType=config": function(e, d, n) {
        n.r(d);
        var s = n("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAd/FibaAd.vue?vue&type=custom&index=0&blockType=config"), a = n.n(s);
        for (var o in s) "default" !== o && function(e) {
            n.d(d, e, function() {
                return s[e];
            });
        }(o);
        d.default = a.a;
    },
    "./src/comps/FibaAd/FibaAd.vue?vue&type=script&lang=js&": function(e, d, n) {
        n.r(d);
        var s = n("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAd/FibaAd.vue?vue&type=script&lang=js&"), a = n.n(s);
        for (var o in s) "default" !== o && function(e) {
            n.d(d, e, function() {
                return s[e];
            });
        }(o);
        d.default = a.a;
    },
    "./src/comps/FibaAd/FibaAd.vue?vue&type=style&index=0&lang=scss&": function(e, d, n) {
        n.r(d);
        var s = n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAd/FibaAd.vue?vue&type=style&index=0&lang=scss&"), a = n.n(s);
        for (var o in s) "default" !== o && function(e) {
            n.d(d, e, function() {
                return s[e];
            });
        }(o);
        d.default = a.a;
    },
    "./src/comps/FibaAd/FibaAd.vue?vue&type=template&id=dbce150a&lang=wxml&": function(e, d, n) {
        n.r(d);
        var s = n("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaAd/FibaAd.vue?vue&type=template&id=dbce150a&lang=wxml&");
        n.d(d, "render", function() {
            return s.render;
        }), n.d(d, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/comps/FibaAd/index.js": function(e, d, n) {
        var s = n("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("./src/comps/FibaAd/FibaAd.vue"));
        (0, s.TuaComp)(a.default);
    },
    24: function(e, d, n) {
        e.exports = n("./src/comps/FibaAd/index.js");
    }
}, [ [ 24, "chunks/runtime", "chunks/vendors" ] ] ]);