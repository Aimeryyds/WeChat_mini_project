(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/center/center" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/center/Center.vue?vue&type=script&lang=js&": function(e, a, t) {
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = s.default || function(e) {
            for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
        }, r = (t("./src/scripts/constants/index.js"), t("./src/scripts/utils/index.js")), o = (getApp().globalConf, 
        {
            nickName: "登录",
            avatarUrl: "/assets/avatar-default.png"
        });
        a.default = {
            data: function() {
                return n({}, o, {
                    showActionSheet: !1,
                    defaultAvatarUrl: o.avatarUrl
                });
            },
            onShow: function() {
                this.refreshUserInfo();
            },
            onPullDownRefresh: function() {
                this.refreshUserInfo().catch(console.error).then(wx.stopPullDownRefresh);
            },
            methods: {
                onClickHeader: function() {
                    (0, r.gotoLogin)({
                        showToast: !1
                    });
                },
                onGotUserInfo: function(e) {
                    var a = e.detail;
                    console.log("detail", a), this.refreshUserInfo();
                },
                refreshUserInfo: function() {
                    var e = this;
                    return (0, r.getUserInfo)({
                        isAutoAuth: !1
                    }).then(function(a) {
                        var t = a.nickName, s = a.avatarUrl, n = void 0 === s ? o.avatarUrl : s;
                        e.nickName = t, e.avatarUrl = n, t = t.length >= 10 ? t.slice(0, 8) + "..." : t, 
                        wx.setStorageSync("wxUserInfo", {
                            nickName: t,
                            avatarUrl: n
                        });
                    }).catch(function() {
                        var a = o.nickName, t = o.avatarUrl;
                        e.nickName = a, e.avatarUrl = t;
                    });
                },
                navigateToAttendList: function() {
                    wx.navigateTo({
                        url: "/pages/attendList/attendList"
                    });
                },
                myFibaPublish: function() {
                    wx.navigateTo({
                        url: "/pages/fibapublish/fibapublish"
                    });
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/center/Center.vue?vue&type=custom&index=0&blockType=config": function(e, a, t) {
        e.exports = t.p + "pages/center/center.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/center/Center.vue?vue&type=style&index=0&lang=scss&": function(e, a, t) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/center/Center.vue?vue&type=template&id=2487581b&lang=wxml&": function(e, a, t) {
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
    "./src/pages/center/Center.vue": function(e, a, t) {
        t.r(a);
        var s = t("./src/pages/center/Center.vue?vue&type=template&id=2487581b&lang=wxml&"), n = t("./src/pages/center/Center.vue?vue&type=script&lang=js&");
        for (var r in n) "default" !== r && function(e) {
            t.d(a, e, function() {
                return n[e];
            });
        }(r);
        t("./src/pages/center/Center.vue?vue&type=style&index=0&lang=scss&");
        var o = t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), i = t("./src/pages/center/Center.vue?vue&type=custom&index=0&blockType=config"), l = Object(o.default)(n.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof i.default && Object(i.default)(l);
        l.options.__file = "src/pages/center/Center.vue", a.default = l.exports;
    },
    "./src/pages/center/Center.vue?vue&type=custom&index=0&blockType=config": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/center/Center.vue?vue&type=custom&index=0&blockType=config"), n = t.n(s);
        for (var r in s) "default" !== r && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(r);
        a.default = n.a;
    },
    "./src/pages/center/Center.vue?vue&type=script&lang=js&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/center/Center.vue?vue&type=script&lang=js&"), n = t.n(s);
        for (var r in s) "default" !== r && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(r);
        a.default = n.a;
    },
    "./src/pages/center/Center.vue?vue&type=style&index=0&lang=scss&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/center/Center.vue?vue&type=style&index=0&lang=scss&"), n = t.n(s);
        for (var r in s) "default" !== r && function(e) {
            t.d(a, e, function() {
                return s[e];
            });
        }(r);
        a.default = n.a;
    },
    "./src/pages/center/Center.vue?vue&type=template&id=2487581b&lang=wxml&": function(e, a, t) {
        t.r(a);
        var s = t("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/center/Center.vue?vue&type=template&id=2487581b&lang=wxml&");
        t.d(a, "render", function() {
            return s.render;
        }), t.d(a, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/pages/center/index.js": function(e, a, t) {
        var s = t("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("./src/pages/center/Center.vue"));
        (0, s.TuaPage)(n.default);
    },
    3: function(e, a, t) {
        e.exports = t("./src/pages/center/index.js");
    }
}, [ [ 3, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);