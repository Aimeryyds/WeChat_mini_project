(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaRankItem/FibaRankItem" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=script&lang=js&": function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = t("./src/apis/index.js");
        getApp().globalConf;
        a.default = {
            props: {
                info: Object,
                idx: Number,
                userInfo: Object,
                noborderbottom: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    supportNum: 0
                };
            },
            computed: {
                rank: function() {
                    if (!this.info) return !1;
                    var e = {}, a = this.info.user || {};
                    return e.id = this.info.id, e.user = {
                        id: a.id,
                        name: a.name,
                        avatar: a.avatar,
                        vipType: a.vipType
                    }, e.createTime = this.info.createTime, e.replyNum = this.info.replyNum || 0, e.supported = this.info.supported || !1, 
                    e.supportNum = this.info.supportNum || 0, e.location = this.info.location && this.info.location.split("-")[1] || "", 
                    e.supportCity = this.info.supportCity || {}, e.discussList = this.info.discussList || [], 
                    e.title = this.info.summary || "", e.title.length > 40 && (e.title = e.title.slice(0, 40) + "…"), 
                    e.discussList.forEach(function(a) {
                        e.title = e.title.replace("#" + a.content + "#", "");
                    }), e;
                },
                serial: function() {
                    return "0" + (parseInt(this.idx) + 1) + ".";
                },
                numbg: function() {
                    var e = "";
                    switch (parseInt(this.idx)) {
                      case 0:
                        e = "/assets/FIBA/icon_red.png";
                        break;

                      case 1:
                        e = "/assets/FIBA/icon_orange.png";
                        break;

                      case 2:
                        e = "/assets/FIBA/icon_yellow.png";
                        break;

                      default:
                        e = "/assets/FIBA/icon_blue.png";
                    }
                    return e;
                }
            },
            methods: {
                parised: function(e) {
                    var a = this, t = e.currentTarget.dataset.id;
                    return !!t && (!this.rank.supported && void s.communityApi.supportTopic({
                        tid: t
                    }).then(function(e) {
                        0 == e.code && a.triggerEvent("onParisedSuccess", {
                            id: t,
                            type: "rank",
                            supportCity: a.rank.supportCity
                        });
                    }));
                },
                getToDetail: function() {
                    wx.navigateTo({
                        url: "/pages/fibaDetail/fibaDetail?id=" + this.rank.id
                    });
                },
                goPostList: function(e) {
                    if (e.currentTarget.dataset.discussid) wx.navigateTo({
                        url: "/pages/fibaPost/fibaPost?discussId=" + e.currentTarget.dataset.discussid
                    }); else if (e.currentTarget.dataset.cityid) {
                        var a = e.currentTarget.dataset.city, t = e.currentTarget.dataset.cityid;
                        wx.navigateTo({
                            url: "/pages/fibaPost/fibaPost?city=" + a + "&cityId=" + t
                        });
                    }
                },
                onLoginEvent: function(e) {
                    this.triggerEvent("loginevent", e.detail);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=custom&index=0&blockType=config": function(e, a, t) {
        e.exports = t.p + "comps/FibaRankItem/FibaRankItem.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=style&index=0&lang=scss&": function(e, a, t) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=template&id=2ced3d0a&lang=wxml&": function(e, a, t) {
        t.r(a), t.d(a, "render", function() {
            return s;
        }), t.d(a, "staticRenderFns", function() {
            return n;
        });
        var s = function() {}, n = [];
        s._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/comps/FibaRankItem/FibaRankItem.vue": function(e, a, t) {
        t.r(a);
        var s = t("./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=template&id=2ced3d0a&lang=wxml&"), n = t("./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=script&lang=js&");
        for (var i in n) "default" !== i && function(e) {
            t.d(a, e, function() {
                return n[e];
            });
        }(i);
        t("./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=style&index=0&lang=scss&");
        var o = t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = t("./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=custom&index=0&blockType=config"), d = Object(o.default)(n.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(d);
        d.options.__file = "src/comps/FibaRankItem/FibaRankItem.vue", a.default = d.exports;
    },
    "./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=custom&index=0&blockType=config": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=custom&index=0&blockType=config"), n = t.n(s);
        for (var i in s) "default" !== i && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(i);
        a.default = n.a;
    },
    "./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=script&lang=js&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=script&lang=js&"), n = t.n(s);
        for (var i in s) "default" !== i && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(i);
        a.default = n.a;
    },
    "./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=style&index=0&lang=scss&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=style&index=0&lang=scss&"), n = t.n(s);
        for (var i in s) "default" !== i && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(i);
        a.default = n.a;
    },
    "./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=template&id=2ced3d0a&lang=wxml&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaRankItem/FibaRankItem.vue?vue&type=template&id=2ced3d0a&lang=wxml&");
        t.d(a, "render", function() {
            return s.render;
        }), t.d(a, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/comps/FibaRankItem/index.js": function(e, a, t) {
        var s = t("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("./src/comps/FibaRankItem/FibaRankItem.vue"));
        (0, s.TuaComp)(n.default);
    },
    33: function(e, a, t) {
        e.exports = t("./src/comps/FibaRankItem/index.js");
    }
}, [ [ 33, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);