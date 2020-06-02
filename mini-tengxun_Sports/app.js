try {
    require("./chunks/runtime"), require("./chunks/vendors"), require("./chunks/scripts");
} catch (e) {}

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "app" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/app/App.vue?vue&type=script&lang=js&": function(e, a, s) {
        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var n = t(s("./node_modules/babel-runtime/core-js/promise.js")), o = t(s("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = o.default || function(e) {
            for (var a = 1; a < arguments.length; a++) {
                var s = arguments[a];
                for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
            }
            return e;
        }, i = t(s("./node_modules/tua-storage/dist/tua-storage.esm.js")), p = s("./node_modules/tua-api/dist/TuaApi.esm.js"), l = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e) for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (a[s] = e[s]);
            return a.default = e, a;
        }(s("./src/apis/index.js")), c = s("./src/scripts/utils/index.js"), d = s("./src/scripts/constants/index.js");
        s("./src/styles/font-icon.scss"), a.default = {
            onLaunch: function() {
                try {
                    var e = this.globalConf.storage.loadSync({
                        fullKey: "currentMainLoginType"
                    }) || "wx";
                    console.log("currentMainLoginType", e), this.globalConf.currentMainLoginType = e;
                } catch (e) {
                    console.error(e), this.globalConf.currentMainLoginType = "wx";
                }
            },
            onShow: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.referrerInfo, s = (a = void 0 === a ? {} : a).extraData, t = (s = void 0 === s ? {} : s).tickets, n = void 0 === t ? [] : t;
                if (console.log("data", e), n.length) {
                    console.log("tickets", n);
                    var o = n[0], r = o.appid, i = o.openid, p = o.ticket;
                    this.globalConf.currentMainLoginType = "qq", this.globalConf.storage.save([ {
                        key: "cookie",
                        syncParams: {
                            loginType: "qq"
                        },
                        data: {
                            data: (0, c.getCookieStr)({
                                appid: r,
                                openid: i,
                                main_login: d.MAIN_LOGIN_MAP.qq.str,
                                access_token: p
                            })
                        },
                        expires: 259200
                    }, {
                        fullKey: "currentMainLoginType",
                        data: "qq",
                        expires: null
                    } ]);
                }
            },
            globalConf: {
                matchDate: "",
                storage: new i.default({
                    syncFnMap: r({
                        cookie: function() {
                            return "wx" === getApp().globalConf.currentMainLoginType ? (0, c.syncWXCookieFn)() : n.default.reject({
                                msg: "QQ登录态失效"
                            });
                        }
                    }, (0, p.getSyncFnMapByApis)(l)),
                    whiteList: d.STORAGE_WHITELIST,
                    storageEngine: wx,
                    defaultExpires: d.DEFAULT_EXPIRE_TIME,
                    storageKeyPrefix: d.STORAGE_KEY_PREFIX
                }),
                currentMainLoginType: "wx"
            },
            dataCache: {}
        };
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/app/App.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {},
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/App.vue": function(e, a, s) {
        s.r(a);
        var t = s("./src/app/App.vue?vue&type=script&lang=js&");
        for (var n in t) "default" !== n && function(e) {
            s.d(a, e, function() {
                return t[e];
            });
        }(n);
        s("./src/app/App.vue?vue&type=style&index=0&lang=scss&");
        var o = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = Object(o.default)(t.default, void 0, void 0, !1, null, null, null);
        r.options.__file = "src/app/App.vue", a.default = r.exports;
    },
    "./src/app/App.vue?vue&type=script&lang=js&": function(e, a, s) {
        s.r(a);
        var t = s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/app/App.vue?vue&type=script&lang=js&"), n = s.n(t);
        for (var o in t) "default" !== o && function(e) {
            s.d(a, e, function() {
                return t[e];
            });
        }(o);
        a.default = n.a;
    },
    "./src/app/App.vue?vue&type=style&index=0&lang=scss&": function(e, a, s) {
        s.r(a);
        var t = s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/app/App.vue?vue&type=style&index=0&lang=scss&"), n = s.n(t);
        for (var o in t) "default" !== o && function(e) {
            s.d(a, e, function() {
                return t[e];
            });
        }(o);
        a.default = n.a;
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/app/index.js": function(e, a, s) {
        var t = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/app/App.vue"));
        App(t.default);
    },
    "./src/styles/font-icon.scss": function(e, a, s) {},
    46: function(e, a, s) {
        e.exports = s("./src/app/index.js");
    }
}, [ [ 46, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);