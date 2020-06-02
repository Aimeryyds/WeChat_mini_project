(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/player/player" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/player/Player.vue?vue&type=script&lang=js&": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = t("./src/apis/index.js"), r = t("./src/scripts/utils/index.js"), n = !1;
        a.default = {
            data: function() {
                return {
                    playerId: "",
                    playerName: "",
                    competitionId: ""
                };
            },
            computed: {
                url: function() {
                    return "https://sports.qq.com/kbsweb/mobile/player.htm#/" + this.competitionId + "/" + this.playerId + "/info";
                },
                syncParams: function() {
                    return {
                        playerId: this.playerId,
                        competitionId: this.competitionId
                    };
                }
            },
            onLoad: function(e) {
                var a = e.playerId, t = void 0 === a ? "" : a, s = e.playerName, o = void 0 === s ? "" : s, i = e.competitionId, l = void 0 === i ? "" : i;
                n = !1, this.playerId = t, this.playerName = (0, r.decodeUntilEqual)(o), this.competitionId = l;
            },
            onShow: function() {
                this.setNavBarColor();
            },
            onUnload: function() {
                n = !0, wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: "#0061B8"
                });
            },
            onShareAppMessage: function() {
                var e = this.playerName + "个人主页";
                return (0, r.getShareAppMessage)({
                    title: e
                });
            },
            methods: {
                setNavBarColor: function() {
                    var e = {
                        key: s.playerUnionApi.baseInfo.key,
                        expires: 60,
                        syncParams: this.syncParams
                    };
                    (0, r.fetchDataByStorage)(e).then(function(e) {
                        var a = e.teamInfo.teamColor4H5;
                        n || wx.setNavigationBarColor({
                            frontColor: "#ffffff",
                            backgroundColor: a
                        });
                    }).catch(console.error);
                }
            }
        };
    },
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/player/Player.vue?vue&type=template&id=78fee29b&lang=wxml&": function(e, a, t) {
        t.r(a), t.d(a, "render", function() {
            return s;
        }), t.d(a, "staticRenderFns", function() {
            return r;
        });
        var s = function() {}, r = [];
        s._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/player/Player.vue": function(e, a, t) {
        t.r(a);
        var s = t("./src/pages/player/Player.vue?vue&type=template&id=78fee29b&lang=wxml&"), r = t("./src/pages/player/Player.vue?vue&type=script&lang=js&");
        for (var n in r) "default" !== n && function(e) {
            t.d(a, e, function() {
                return r[e];
            });
        }(n);
        var o = t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), i = Object(o.default)(r.default, s.render, s.staticRenderFns, !1, null, null, null);
        i.options.__file = "src/pages/player/Player.vue", a.default = i.exports;
    },
    "./src/pages/player/Player.vue?vue&type=script&lang=js&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/player/Player.vue?vue&type=script&lang=js&"), r = t.n(s);
        for (var n in s) "default" !== n && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(n);
        a.default = r.a;
    },
    "./src/pages/player/Player.vue?vue&type=template&id=78fee29b&lang=wxml&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/player/Player.vue?vue&type=template&id=78fee29b&lang=wxml&");
        t.d(a, "render", function() {
            return s.render;
        }), t.d(a, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/pages/player/index.js": function(e, a, t) {
        var s = t("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("./src/pages/player/Player.vue"));
        (0, s.TuaPage)(r.default);
    },
    16: function(e, a, t) {
        e.exports = t("./src/pages/player/index.js");
    }
}, [ [ 16, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);