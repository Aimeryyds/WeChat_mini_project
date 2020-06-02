(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaReply/FibaReply" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReply/FibaReply.vue?vue&type=script&lang=js&": function(e, a, s) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t = s("./src/scripts/utils/index.js");
        a.default = {
            props: {
                info: Object
            },
            data: function() {
                return {
                    defaultSrc: "/assets/FIBA/pic_default_fatie@3x.png"
                };
            },
            computed: {
                rcon: function() {
                    var e = {}, a = this.info.user || {};
                    return e.user = {
                        name: a.name,
                        avatar: a.avatar,
                        vipType: a.vipType || 0
                    }, e.createTime = (0, t.timeFormat)(this.info.createTime), e.title = "", e.images = [], 
                    this.info.content && this.info.content.forEach(function(a) {
                        0 == a.type && (e.title += a.info), 1 == a.type && e.images.push({
                            url: a.info
                        });
                    }), this.info.parentReply && (e.parentReply = {
                        user: {
                            name: this.info.parentReply.user.name,
                            avatar: this.info.parentReply.user.avatar,
                            vipType: this.info.parentReply.user.vipType
                        }
                    }), e;
                }
            },
            watch: {},
            methods: {
                viewImg: function(e) {
                    var a = e.currentTarget.dataset.src || "";
                    if (!a) return !1;
                    var s = [];
                    this.rcon.images && this.rcon.images.forEach(function(e) {
                        s.push(e.url);
                    }), wx.previewImage({
                        current: a,
                        urls: s
                    });
                }
            },
            created: function() {}
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReply/FibaReply.vue?vue&type=custom&index=0&blockType=config": function(e, a, s) {
        e.exports = s.p + "comps/FibaReply/FibaReply.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReply/FibaReply.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReply/FibaReply.vue?vue&type=template&id=c4b91ba6&lang=wxml&": function(e, a, s) {
        s.r(a), s.d(a, "render", function() {
            return t;
        }), s.d(a, "staticRenderFns", function() {
            return i;
        });
        var t = function() {}, i = [];
        t._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/comps/FibaReply/FibaReply.vue": function(e, a, s) {
        s.r(a);
        var t = s("./src/comps/FibaReply/FibaReply.vue?vue&type=template&id=c4b91ba6&lang=wxml&"), i = s("./src/comps/FibaReply/FibaReply.vue?vue&type=script&lang=js&");
        for (var n in i) "default" !== n && function(e) {
            s.d(a, e, function() {
                return i[e];
            });
        }(n);
        s("./src/comps/FibaReply/FibaReply.vue?vue&type=style&index=0&lang=scss&");
        var o = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), l = s("./src/comps/FibaReply/FibaReply.vue?vue&type=custom&index=0&blockType=config"), r = Object(o.default)(i.default, t.render, t.staticRenderFns, !1, null, null, null);
        "function" == typeof l.default && Object(l.default)(r);
        r.options.__file = "src/comps/FibaReply/FibaReply.vue", a.default = r.exports;
    },
    "./src/comps/FibaReply/FibaReply.vue?vue&type=custom&index=0&blockType=config": function(e, a, s) {
        s.r(a);
        var t = s("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReply/FibaReply.vue?vue&type=custom&index=0&blockType=config"), i = s.n(t);
        for (var n in t) "default" !== n && function(e) {
            s.d(a, e, function() {
                return t[e];
            });
        }(n);
        a.default = i.a;
    },
    "./src/comps/FibaReply/FibaReply.vue?vue&type=script&lang=js&": function(e, a, s) {
        s.r(a);
        var t = s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReply/FibaReply.vue?vue&type=script&lang=js&"), i = s.n(t);
        for (var n in t) "default" !== n && function(e) {
            s.d(a, e, function() {
                return t[e];
            });
        }(n);
        a.default = i.a;
    },
    "./src/comps/FibaReply/FibaReply.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {
        s.r(a);
        var t = s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReply/FibaReply.vue?vue&type=style&index=0&lang=scss&"), i = s.n(t);
        for (var n in t) "default" !== n && function(e) {
            s.d(a, e, function() {
                return t[e];
            });
        }(n);
        a.default = i.a;
    },
    "./src/comps/FibaReply/FibaReply.vue?vue&type=template&id=c4b91ba6&lang=wxml&": function(e, a, s) {
        s.r(a);
        var t = s("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReply/FibaReply.vue?vue&type=template&id=c4b91ba6&lang=wxml&");
        s.d(a, "render", function() {
            return t.render;
        }), s.d(a, "staticRenderFns", function() {
            return t.staticRenderFns;
        });
    },
    "./src/comps/FibaReply/index.js": function(e, a, s) {
        var t = s("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/comps/FibaReply/FibaReply.vue"));
        (0, t.TuaComp)(i.default);
    },
    34: function(e, a, s) {
        e.exports = s("./src/comps/FibaReply/index.js");
    }
}, [ [ 34, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);