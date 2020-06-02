(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/fibaTopic/fibaTopic" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaTopic/fibaTopic.vue?vue&type=script&lang=js&": function(e, a, s) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = s("./src/apis/index.js"), t = s("./src/scripts/utils/index.js");
        getApp().globalConf;
        a.default = {
            data: function() {
                return {
                    from: "",
                    lists: [],
                    requested: !1,
                    userInfo: wx.getStorageSync("wxUserInfo")
                };
            },
            onLoad: function(e) {
                this.from = e.from || "index";
            },
            onReady: function() {
                this.getLists();
            },
            methods: {
                getLists: function() {
                    var e = this;
                    wx.showLoading({
                        title: "加载中",
                        mask: !0
                    }), i.communityApi.recmdDiscussList().then(function(a) {
                        if (e.requested = !0, wx.hideLoading(), 0 == a.code) {
                            var s = [];
                            (a.data || []).forEach(function(e) {
                                e.followNum = (0, t.numberFormat)(e.followNum), e.createTime = new Date(e.createTime.replace(/-/g, "/")).Format("yy/MM/dd"), 
                                s.push(e);
                            }), e.lists = s;
                        }
                    }).catch(function(a) {
                        e.requested = !0, wx.hideLoading();
                    });
                },
                choosed: function(e) {
                    if ("index" === this.from) wx.navigateTo({
                        url: "/pages/fibaPost/fibaPost?discussId=" + e.currentTarget.dataset.item.discussId
                    }); else if ("aid" === this.from) {
                        var a = e.currentTarget.dataset.item || {}, s = getCurrentPages(), i = s[s.length - 2];
                        i.updateContent && i.updateContent(a), wx.navigateBack({
                            delta: 1
                        });
                    }
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaTopic/fibaTopic.vue?vue&type=custom&index=0&blockType=config": function(e, a, s) {
        e.exports = s.p + "pages/fibaTopic/fibaTopic.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaTopic/fibaTopic.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaTopic/fibaTopic.vue?vue&type=template&id=52119437&lang=wxml&": function(e, a, s) {
        s.r(a), s.d(a, "render", function() {
            return i;
        }), s.d(a, "staticRenderFns", function() {
            return t;
        });
        var i = function() {}, t = [];
        i._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/fibaTopic/fibaTopic.vue": function(e, a, s) {
        s.r(a);
        var i = s("./src/pages/fibaTopic/fibaTopic.vue?vue&type=template&id=52119437&lang=wxml&"), t = s("./src/pages/fibaTopic/fibaTopic.vue?vue&type=script&lang=js&");
        for (var o in t) "default" !== o && function(e) {
            s.d(a, e, function() {
                return t[e];
            });
        }(o);
        s("./src/pages/fibaTopic/fibaTopic.vue?vue&type=style&index=0&lang=scss&");
        var n = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = s("./src/pages/fibaTopic/fibaTopic.vue?vue&type=custom&index=0&blockType=config"), d = Object(n.default)(t.default, i.render, i.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(d);
        d.options.__file = "src/pages/fibaTopic/fibaTopic.vue", a.default = d.exports;
    },
    "./src/pages/fibaTopic/fibaTopic.vue?vue&type=custom&index=0&blockType=config": function(e, a, s) {
        s.r(a);
        var i = s("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaTopic/fibaTopic.vue?vue&type=custom&index=0&blockType=config"), t = s.n(i);
        for (var o in i) "default" !== o && function(e) {
            s.d(a, e, function() {
                return i[e];
            });
        }(o);
        a.default = t.a;
    },
    "./src/pages/fibaTopic/fibaTopic.vue?vue&type=script&lang=js&": function(e, a, s) {
        s.r(a);
        var i = s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaTopic/fibaTopic.vue?vue&type=script&lang=js&"), t = s.n(i);
        for (var o in i) "default" !== o && function(e) {
            s.d(a, e, function() {
                return i[e];
            });
        }(o);
        a.default = t.a;
    },
    "./src/pages/fibaTopic/fibaTopic.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {
        s.r(a);
        var i = s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaTopic/fibaTopic.vue?vue&type=style&index=0&lang=scss&"), t = s.n(i);
        for (var o in i) "default" !== o && function(e) {
            s.d(a, e, function() {
                return i[e];
            });
        }(o);
        a.default = t.a;
    },
    "./src/pages/fibaTopic/fibaTopic.vue?vue&type=template&id=52119437&lang=wxml&": function(e, a, s) {
        s.r(a);
        var i = s("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaTopic/fibaTopic.vue?vue&type=template&id=52119437&lang=wxml&");
        s.d(a, "render", function() {
            return i.render;
        }), s.d(a, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    "./src/pages/fibaTopic/index.js": function(e, a, s) {
        var i = s("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), t = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/pages/fibaTopic/fibaTopic.vue"));
        (0, i.TuaPage)(t.default);
    },
    10: function(e, a, s) {
        e.exports = s("./src/pages/fibaTopic/index.js");
    }
}, [ [ 10, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);