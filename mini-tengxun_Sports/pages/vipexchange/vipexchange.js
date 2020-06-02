(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/vipexchange/vipexchange" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/vipexchange/VipExchange.vue?vue&type=script&lang=js&": function(e, a, n) {
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("./node_modules/babel-runtime/core-js/object/assign.js"));
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t = s.default || function(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = arguments[a];
                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
            }
            return e;
        }, i = n("./src/scripts/utils/index.js"), o = n("./src/apis/index.js"), r = {
            force_pwd: !1,
            tickets: [ {
                name: "access_token",
                appid: "1101098715",
                domain: ""
            } ]
        }, c = {
            nickName: "腾讯网友",
            avatarUrl: "/assets/avatar-default.png"
        }, d = getApp().globalConf;
        a.default = {
            data: function() {
                return t({}, c, {
                    isLogin: !1,
                    isGotoQQ: !1,
                    loginType: "",
                    extraData: r,
                    defaultAvatarUrl: "/assets/avatar-default.png",
                    cardParams: {},
                    isUsed: !1,
                    loaded: !1,
                    receiverNickName: "腾讯网友",
                    receiverLoginType: ""
                });
            },
            computed: {},
            watch: {},
            methods: {
                onGotUserInfo: function(e) {
                    var a = e.detail;
                    if (console.log("detail", a), "getUserInfo:ok" === a.errMsg) {
                        var n = getApp().globalConf;
                        n.currentMainLoginType = "wx", n.storage.saveSync({
                            fullKey: "currentMainLoginType",
                            data: "wx",
                            expires: null
                        }), this.loginType = "微信", this.nickName = a.userInfo.nickName, this.avatarUrl = a.userInfo.avatarUrl, 
                        this.isLogin = !0;
                    }
                },
                onClickGotoQQ: function() {
                    this.isGotoQQ = !0;
                },
                onClickSwitchAccount: function() {
                    (0, i.gotoLogin)({
                        showToast: !1
                    });
                },
                refreshUserInfo: function() {
                    var e = this;
                    return (0, i.getUserInfo)({
                        isAutoAuth: !1
                    }).then(function(a) {
                        var n = a.nickName, s = a.avatarUrl, t = void 0 === s ? c.avatarUrl : s;
                        n = n.length >= 15 ? n.slice(0, 13) + "..." : n, wx.setStorageSync("wxUserInfo", {
                            nickName: n,
                            avatarUrl: t
                        }), e.loginType = "qq" === getApp().globalConf.currentMainLoginType ? "QQ" : "微信", 
                        e.nickName = n, e.avatarUrl = t, e.isLogin = !0;
                    }).catch(function() {
                        e.isLogin = !1;
                        var a = c.nickName, n = c.avatarUrl;
                        e.nickName = a, e.avatarUrl = n;
                    });
                },
                onClickRedeem: function() {
                    var e = this;
                    if (!this.isUsed) return wx.showLoading({
                        mask: !0
                    }), d.storage.load({
                        key: o.redeemApi.wxVipCardUse.key,
                        syncParams: t({}, this.cardParams, {
                            timestamp: +Date.now()
                        }),
                        expires: 0,
                        isAutoSave: !1,
                        isEnableCache: !1
                    }).then(function(a) {
                        var n = a.code, s = a.data, t = a.msg;
                        console.log(1, n, s, t), 2 === n ? (wx.hideLoading(), (0, i.gotoLogin)()) : 0 === n ? (wx.showToast({
                            title: "兑换成功",
                            duration: 4e3
                        }), e.checkRedeemCode()) : (wx.hideLoading(), wx.showToast({
                            title: t,
                            icon: "none",
                            duration: 4e3
                        }));
                    }).catch(function(e) {
                        console.log(4, e), wx.hideLoading(), e.errMsg;
                    });
                },
                checkRedeemCode: function() {
                    var e = this;
                    return d.storage.load({
                        key: o.redeemApi.wxVipCardInfo.key,
                        syncParams: t({}, this.cardParams, {
                            timestamp: +Date.now()
                        }),
                        expires: 0,
                        isAutoSave: !1,
                        isEnableCache: !1
                    }).then(function(a) {
                        var n = a.code, s = a.data, t = a.msg;
                        if (console.log(1, n, s, t), e.loaded = !0, wx.hideLoading(), 4 === n) wx.showToast({
                            title: t,
                            icon: "none",
                            duration: 4e3
                        }); else if (0 === n) e.isUsed = s.isUsed, e.receiverNickName = s.nick, e.receiverLoginType = "1" === s.userType ? "QQ" : "微信"; else {
                            if (2 === n) return;
                            wx.showToast({
                                title: t,
                                icon: "none",
                                duration: 4e3
                            });
                        }
                    }).catch(function(a) {
                        console.log(2, a), e.loaded = !0, wx.hideLoading(), a.errMsg;
                    });
                }
            },
            onLoad: function(e) {
                this.cardParams = {
                    encrypt_code: decodeURIComponent(e.encrypt_code),
                    card_id: e.card_id
                }, wx.showLoading(), console.log(this.cardParams);
            },
            onShow: function() {
                if (this.isGotoQQ) {
                    if (!("qq" === getApp().globalConf.currentMainLoginType)) return;
                    this.loaded = !1, wx.showLoading(), this.isGotoQQ = !1;
                }
                this.refreshUserInfo(), this.checkRedeemCode();
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/vipexchange/VipExchange.vue?vue&type=custom&index=0&blockType=config": function(e, a, n) {
        e.exports = n.p + "pages/vipexchange/vipexchange.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/vipexchange/VipExchange.vue?vue&type=style&index=0&lang=scss&": function(e, a, n) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/vipexchange/VipExchange.vue?vue&type=template&id=24c3059d&lang=wxml&": function(e, a, n) {
        n.r(a), n.d(a, "render", function() {
            return s;
        }), n.d(a, "staticRenderFns", function() {
            return t;
        });
        var s = function() {}, t = [];
        s._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/vipexchange/VipExchange.vue": function(e, a, n) {
        n.r(a);
        var s = n("./src/pages/vipexchange/VipExchange.vue?vue&type=template&id=24c3059d&lang=wxml&"), t = n("./src/pages/vipexchange/VipExchange.vue?vue&type=script&lang=js&");
        for (var i in t) "default" !== i && function(e) {
            n.d(a, e, function() {
                return t[e];
            });
        }(i);
        n("./src/pages/vipexchange/VipExchange.vue?vue&type=style&index=0&lang=scss&");
        var o = n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = n("./src/pages/vipexchange/VipExchange.vue?vue&type=custom&index=0&blockType=config"), c = Object(o.default)(t.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(c);
        c.options.__file = "src/pages/vipexchange/VipExchange.vue", a.default = c.exports;
    },
    "./src/pages/vipexchange/VipExchange.vue?vue&type=custom&index=0&blockType=config": function(e, a, n) {
        n.r(a);
        var s = n("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/vipexchange/VipExchange.vue?vue&type=custom&index=0&blockType=config"), t = n.n(s);
        for (var i in s) "default" !== i && function(e) {
            n.d(a, e, function() {
                return s[e];
            });
        }(i);
        a.default = t.a;
    },
    "./src/pages/vipexchange/VipExchange.vue?vue&type=script&lang=js&": function(e, a, n) {
        n.r(a);
        var s = n("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/vipexchange/VipExchange.vue?vue&type=script&lang=js&"), t = n.n(s);
        for (var i in s) "default" !== i && function(e) {
            n.d(a, e, function() {
                return s[e];
            });
        }(i);
        a.default = t.a;
    },
    "./src/pages/vipexchange/VipExchange.vue?vue&type=style&index=0&lang=scss&": function(e, a, n) {
        n.r(a);
        var s = n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/vipexchange/VipExchange.vue?vue&type=style&index=0&lang=scss&"), t = n.n(s);
        for (var i in s) "default" !== i && function(e) {
            n.d(a, e, function() {
                return s[e];
            });
        }(i);
        a.default = t.a;
    },
    "./src/pages/vipexchange/VipExchange.vue?vue&type=template&id=24c3059d&lang=wxml&": function(e, a, n) {
        n.r(a);
        var s = n("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/vipexchange/VipExchange.vue?vue&type=template&id=24c3059d&lang=wxml&");
        n.d(a, "render", function() {
            return s.render;
        }), n.d(a, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/pages/vipexchange/index.js": function(e, a, n) {
        var s = n("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), t = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("./src/pages/vipexchange/VipExchange.vue"));
        (0, s.TuaPage)(t.default);
    },
    20: function(e, a, n) {
        e.exports = n("./src/pages/vipexchange/index.js");
    }
}, [ [ 20, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);