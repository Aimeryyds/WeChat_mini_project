(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/GameTeamStat/GameTeamStat" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=script&lang=js&": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = {
            props: {
                teamInfo: Object,
                teamStats: Array
            },
            data: function() {
                return {};
            },
            methods: {
                onTapTeam: function(e) {
                    this.$emit("onTapTeam", e);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=custom&index=0&blockType=config": function(e, a, t) {
        e.exports = t.p + "comps/GameTeamStat/GameTeamStat.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=style&index=0&lang=scss&": function(e, a, t) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=template&id=c0534e8a&lang=wxml&": function(e, a, t) {
        t.r(a), t.d(a, "render", function() {
            return s;
        }), t.d(a, "staticRenderFns", function() {
            return o;
        });
        var s = function() {}, o = [];
        s._withStripped = !0;
    },
    "./src/comps/GameTeamStat/GameTeamStat.vue": function(e, a, t) {
        t.r(a);
        var s = t("./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=template&id=c0534e8a&lang=wxml&"), o = t("./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=script&lang=js&");
        for (var n in o) "default" !== n && function(e) {
            t.d(a, e, function() {
                return o[e];
            });
        }(n);
        t("./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=style&index=0&lang=scss&");
        var m = t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), d = t("./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=custom&index=0&blockType=config"), u = Object(m.default)(o.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof d.default && Object(d.default)(u);
        u.options.__file = "src/comps/GameTeamStat/GameTeamStat.vue", a.default = u.exports;
    },
    "./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=custom&index=0&blockType=config": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=custom&index=0&blockType=config"), o = t.n(s);
        for (var n in s) "default" !== n && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(n);
        a.default = o.a;
    },
    "./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=script&lang=js&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=script&lang=js&"), o = t.n(s);
        for (var n in s) "default" !== n && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(n);
        a.default = o.a;
    },
    "./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=style&index=0&lang=scss&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=style&index=0&lang=scss&"), o = t.n(s);
        for (var n in s) "default" !== n && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(n);
        a.default = o.a;
    },
    "./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=template&id=c0534e8a&lang=wxml&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/GameTeamStat/GameTeamStat.vue?vue&type=template&id=c0534e8a&lang=wxml&");
        t.d(a, "render", function() {
            return s.render;
        }), t.d(a, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/comps/GameTeamStat/index.js": function(e, a, t) {
        var s = t("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("./src/comps/GameTeamStat/GameTeamStat.vue"));
        (0, s.TuaComp)(o.default);
    },
    40: function(e, a, t) {
        e.exports = t("./src/comps/GameTeamStat/index.js");
    }
}, [ [ 40, "chunks/runtime", "chunks/vendors" ] ] ]);