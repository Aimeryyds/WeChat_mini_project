(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/fiba/fiba" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fiba/fiba.vue?vue&type=script&lang=js&": function(e, t, a) {
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./node_modules/babel-runtime/core-js/promise.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a("./src/apis/index.js"), n = a("./src/scripts/utils/index.js"), o = a("./src/scripts/constants/index.js"), r = getApp().globalConf;
        t.default = {
            data: function() {
                return {
                    banner: {},
                    hasBannerData: !1,
                    currentNav: "",
                    locationCity: {
                        name: "",
                        id: 0
                    },
                    choosedCity: {
                        name: "",
                        id: 0
                    },
                    rankCityId: 1,
                    rankCityName: "北京",
                    rankCityList: [],
                    showRankCitybox: !1,
                    squareLastId: 0,
                    squareList: [],
                    squareLock: !1,
                    squareLoaded: !1,
                    squareNeedRefresh: !1,
                    sameCityLastId: 0,
                    sameCityList: [],
                    sameCityLock: !1,
                    sameCityLoaded: !1,
                    sameCityNeedRefresh: !1,
                    sameCityBanner: {},
                    authLocation: !1,
                    hotTopic: [],
                    fibaCity: [],
                    fixedFibaCity: o.FIBACITY,
                    citycomps: !1,
                    userInfo: null,
                    sameShow: !1,
                    showRedHeart: !1,
                    redHeartNum: 5,
                    redHeartSrc: "",
                    animatedredheart: !1,
                    fibaParisedShow: !1,
                    fibaParisedCityId: 0
                };
            },
            onLoad: function(e) {
                var t = this;
                this.getLocation().then(function(e) {
                    t.locationCity.name = e.city, t.locationCity.id = (0, n.getCityIdByName)(t.locationCity.name), 
                    t.rankCityId = t.locationCity.id || 1, t.locationCity.id ? (t.currentNav = "samecity", 
                    t.getSamecity()) : (t.currentNav = "square", t.getSquare());
                }).catch(function() {
                    t.currentNav = "square", t.getSquare();
                }), this.currentNav = "square", this.getSquare(), (0, n.getBannerData)().then(function(e) {
                    if (0 === e.code) {
                        var a = e.data || {};
                        t.banner = a, t.hasBannerData = !0, t.sameCityBanner = t.banner.c0, t.setSameCityBanner();
                    }
                }), this.getEightCityData();
            },
            onShow: function() {
                this.refreshUserInfo();
            },
            onShareAppMessage: function() {},
            onReachBottom: function() {
                "square" === this.currentNav ? this.getSquare() : "samecity" === this.currentNav && this.getSamecity();
            },
            onPullDownRefresh: function() {
                this.reloadPageInfo();
            },
            methods: {
                refreshUserInfo: function() {
                    var e = this;
                    return (0, n.getUserInfo)({
                        isAutoAuth: !1
                    }).then(function(t) {
                        var a = t.nickName, i = t.avatarUrl, s = void 0 === i ? isNotLoginStatus.avatarUrl : i;
                        a = a.length >= 10 ? a.slice(0, 8) + "..." : a, wx.setStorageSync("wxUserInfo", {
                            nickName: a,
                            avatarUrl: s
                        }), e.userInfo = wx.getStorageSync("wxUserInfo");
                    }).catch(function() {
                        wx.setStorageSync("wxUserInfo", "");
                    });
                },
                handleParisedAnimationEnd: function() {
                    this.fibaParisedShow = !1;
                },
                reloadPageInfo: function() {
                    "square" === this.currentNav ? (this.sameCityNeedRefresh = !0, this.getSquare(!0)) : "samecity" === this.currentNav ? (this.squareNeedRefresh = !0, 
                    this.getSamecity(!0)) : (this.sameCityNeedRefresh = !0, this.squareNeedRefresh = !0, 
                    this.getRank(!0), this.getEightCityData());
                },
                handleParisedSuccess: function(e) {
                    var t = e.detail.type, a = e.detail.id, i = e.detail.supportCity || {}, s = [];
                    "rank" == t ? s = this.rankCityList : "post" == t && (s = this.squareList.concat(this.sameCityList)), 
                    s.forEach(function(e) {
                        e.id == a && (++e.supportNum, e.supported = !0);
                    }), this.fibaParisedShow = !0, this.fibaParisedCityId = i.cityId || 0;
                },
                goWebView: function(e) {
                    var t = e.currentTarget.dataset.url;
                    if (!t) return !1;
                    wx.navigateTo({
                        url: "/pages/webview/webview?url=" + t
                    });
                },
                setSameCityBanner: function() {
                    var e = this.choosedCity.id || this.locationCity.id;
                    e && this.hasBannerData && (this.sameCityBanner = this.banner["c" + e]);
                },
                opensetting: function() {
                    var e = this;
                    wx.openSetting({
                        success: function(t) {
                            t.authSetting["scope.userLocation"] && (e.authLocation = !0, e.getLocation().then(function(t) {
                                e.locationCity.name = t.city, e.locationCity.id = (0, n.getCityIdByName)(t.city), 
                                e.rankCityId = e.locationCity.id || 1, e.choosedCity.id = 0, e.choosedCity.name = "", 
                                e.getSamecity(!0), e.closeCityComps();
                            }));
                        }
                    });
                },
                getLocation: function() {
                    var e = this;
                    return new i.default(function(t, a) {
                        (0, n.getUserLocation)().then(function(i) {
                            e.authLocation = !0, (0, n.reverseGeocoder)(i).then(t).catch(a);
                        }).catch(function(t) {
                            e.authLocation = !1, a();
                        });
                    });
                },
                chgNav: function(e) {
                    var t = e.currentTarget.dataset.nav || "";
                    "rank" === t ? (this.getRank(), this.getEightCityData()) : "square" === t ? this.squareList.length && !this.squareNeedRefresh || this.getSquare() : "samecity" === t && (this.sameShow = !0, 
                    this.sameCityList.length && !this.sameCityNeedRefresh || this.getSamecity()), this.currentNav = t;
                },
                getRank: function() {
                    this.getRankItemByCityId();
                },
                rankTab: function(e) {
                    var t = e.currentTarget.dataset.item;
                    this.rankCityId = t.id, this.rankCityName = t.name + "市", this.getRankItemByCityId();
                },
                getRankItemByCityId: function() {
                    var e = this, t = "cityTopicRank";
                    this.userInfo && (t = "cityTopicRankHeader"), s.communityApi[t]({
                        cityId: this.rankCityId,
                        count: 5
                    }).then(function(t) {
                        if (0 == t.code) {
                            var a = t.data.topics || [];
                            e.rankCityList = a;
                        }
                    });
                },
                getEightCityData: function() {
                    var e = this;
                    s.communityApi.cityList().then(function(t) {
                        e.showRankCitybox = !0, 0 == t.code && (e.fibaCity = t.data || [], e.fibaCity && e.fibaCity.forEach(function(e) {
                            e.showGifUrl += "?time=" + new Date().getTime();
                        }), r.storage.save({
                            fullKey: "fibacity",
                            data: t.data,
                            expires: null
                        })), wx.stopPullDownRefresh();
                    }).catch(function(t) {
                        e.showRankCitybox = !0, wx.stopPullDownRefresh();
                    });
                },
                getSquare: function(e) {
                    var t = this;
                    if ((e || this.squareNeedRefresh) && (this.squareLastId = 0), this.squareLock) return !1;
                    this.squareLock = !0;
                    var a = "contentPool";
                    this.userInfo && (a = "contentPoolHeader"), s.communityApi[a]({
                        lastId: this.squareLastId || 0
                    }).then(function(a) {
                        if (0 == a.code) {
                            (e || t.squareNeedRefresh) && (t.squareList = [], t.hotTopic = []);
                            var i = a.data || {};
                            t.hotTopic && t.hotTopic.length || (t.hotTopic = i.recmdDiscuss || [], t.hotTopic = t.hotTopic.slice(0, 4)), 
                            i.topics && i.topics.length && (t.squareList = t.squareList.concat(i.topics), t.squareLastId = i.lastId);
                        }
                        t.squareLock = !1, t.squareLoaded = !0, t.squareNeedRefresh = !1, wx.stopPullDownRefresh();
                    }).catch(function(e) {
                        t.squareLock = !1, t.squareLoaded = !0, t.squareNeedRefresh = !1, wx.stopPullDownRefresh();
                    });
                },
                getSamecity: function(e) {
                    var t = this;
                    (e || this.sameCityNeedRefresh) && (this.sameCityLastId = 0);
                    var a = {};
                    if (this.choosedCity.id ? a = {
                        city: this.choosedCity.name,
                        cityId: this.choosedCity.id,
                        lastId: this.sameCityLastId || 0
                    } : (a = {
                        city: this.choosedCity.name || this.locationCity.name,
                        lastId: this.sameCityLastId || 0
                    }, this.locationCity.id && (a.cityId = this.locationCity.id)), a.city) {
                        if (this.sameCityLock) return !1;
                        this.sameCityLock = !0, this.setSameCityBanner();
                        var i = "cityPool";
                        this.userInfo && (i = "cityPoolHeader"), s.communityApi[i](a).then(function(a) {
                            0 == a.code && ((e || t.sameCityNeedRefresh) && (t.sameCityList = []), t.sameCityList = t.sameCityList.concat(a.data.topics || []), 
                            a.data.topics && a.data.topics.length && (t.sameCityLastId = a.data.lastId)), t.sameCityLock = !1, 
                            t.sameCityLoaded = !0, t.sameCityNeedRefresh = !1, wx.stopPullDownRefresh();
                        }).catch(function(e) {
                            t.sameCityLock = !1, t.sameCityLoaded = !0, t.sameCityNeedRefresh = !1, wx.stopPullDownRefresh();
                        });
                    }
                },
                choiceCityComps: function(e) {
                    this.sameShow ? (this.choosedCity.name = e.detail.item.name, this.choosedCity.id = e.detail.item.id, 
                    this.getSamecity(!0), this.closeCityComps()) : (this.closeCityComps(), wx.navigateTo({
                        url: "/pages/fibaPost/fibaPost?city=" + e.detail.item.name + "&cityId=" + e.detail.item.id
                    }));
                },
                seeSameCityComps: function(e) {
                    this.authLocation ? (this.choosedCity.name = "", this.choosedCity.id = 0, this.sameCityBanner = this.banner.c0 || {}, 
                    this.getSamecity(!0), this.closeCityComps()) : this.opensetting();
                },
                getPublish: function() {
                    wx.navigateTo({
                        url: "/pages/fibaAid/fibaAid"
                    });
                },
                getCity: function() {
                    this.citycomps = !0;
                },
                closeCityComps: function() {
                    this.citycomps = !1;
                },
                onLoginEvent: function(e) {
                    this.userInfo = e.detail, this.reloadPageInfo();
                },
                updateList: function(e, t) {
                    var a = [];
                    this.rankCityList.forEach(function(i) {
                        i.id == e && t.supportNum && (i.supportNum = t.supportNum, i.supported = !0), a.push(i);
                    }), this.rankCityList = a;
                    var i = [];
                    this.squareList.forEach(function(a) {
                        a.id == e && (t.replyNum ? a.replyNum = parseInt(a.replyNum) + 1 : t.supportNum && (a.supportNum = t.supportNum, 
                        a.supported = !0)), i.push(a);
                    }), this.squareList = i;
                    var s = [];
                    this.sameCityList.forEach(function(a) {
                        a.id == e && (t.replyNum ? a.replyNum = parseInt(a.replyNum) + 1 : t.supportNum && (a.supportNum = t.supportNum, 
                        a.supported = !0)), s.push(a);
                    }), this.sameCityList = s;
                },
                reloadListData: function() {
                    this.getSamecity(!0), this.getSquare(!0);
                },
                setShowRedHeart: function(e, t) {
                    var a = this;
                    console.log(e, t), this.showRedHeart = !0, this.animatedredheart = !1, this.redHeartSrc = e, 
                    setTimeout(function() {
                        a.animatedredheart = !0, setTimeout(function() {
                            a.showRedHeart = !1;
                        }, 300);
                    }, t);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fiba/fiba.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        e.exports = a.p + "pages/fiba/fiba.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fiba/fiba.vue?vue&type=style&index=0&lang=scss&": function(e, t, a) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fiba/fiba.vue?vue&type=template&id=b3a30eca&lang=wxml&": function(e, t, a) {
        a.r(t), a.d(t, "render", function() {
            return i;
        }), a.d(t, "staticRenderFns", function() {
            return s;
        });
        var i = function() {}, s = [];
        i._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/fiba/fiba.vue": function(e, t, a) {
        a.r(t);
        var i = a("./src/pages/fiba/fiba.vue?vue&type=template&id=b3a30eca&lang=wxml&"), s = a("./src/pages/fiba/fiba.vue?vue&type=script&lang=js&");
        for (var n in s) "default" !== n && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(n);
        a("./src/pages/fiba/fiba.vue?vue&type=style&index=0&lang=scss&");
        var o = a("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = a("./src/pages/fiba/fiba.vue?vue&type=custom&index=0&blockType=config"), c = Object(o.default)(s.default, i.render, i.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(c);
        c.options.__file = "src/pages/fiba/fiba.vue", t.default = c.exports;
    },
    "./src/pages/fiba/fiba.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        a.r(t);
        var i = a("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fiba/fiba.vue?vue&type=custom&index=0&blockType=config"), s = a.n(i);
        for (var n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        t.default = s.a;
    },
    "./src/pages/fiba/fiba.vue?vue&type=script&lang=js&": function(e, t, a) {
        a.r(t);
        var i = a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fiba/fiba.vue?vue&type=script&lang=js&"), s = a.n(i);
        for (var n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        t.default = s.a;
    },
    "./src/pages/fiba/fiba.vue?vue&type=style&index=0&lang=scss&": function(e, t, a) {
        a.r(t);
        var i = a("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fiba/fiba.vue?vue&type=style&index=0&lang=scss&"), s = a.n(i);
        for (var n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        t.default = s.a;
    },
    "./src/pages/fiba/fiba.vue?vue&type=template&id=b3a30eca&lang=wxml&": function(e, t, a) {
        a.r(t);
        var i = a("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fiba/fiba.vue?vue&type=template&id=b3a30eca&lang=wxml&");
        a.d(t, "render", function() {
            return i.render;
        }), a.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    "./src/pages/fiba/index.js": function(e, t, a) {
        var i = a("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/pages/fiba/fiba.vue"));
        (0, i.TuaPage)(s.default);
    },
    4: function(e, t, a) {
        e.exports = a("./src/pages/fiba/index.js");
    }
}, [ [ 4, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);