(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/fibaPost/fibaPost" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaPost/fibaPost.vue?vue&type=script&lang=js&": function(e, s, t) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var a = t("./src/apis/index.js"), i = t("./src/scripts/utils/index.js");
        getApp().globalConf;
        s.default = {
            data: function() {
                return {
                    discussId: 0,
                    lastId: 0,
                    list: [],
                    discussDetail: null,
                    requested: !1,
                    cityId: 0,
                    city: "",
                    userInfo: wx.getStorageSync("wxUserInfo") || "",
                    showRedHeart: !1,
                    redHeartNum: 5,
                    redHeartSrc: "",
                    animatedredheart: !1,
                    fibaParisedShow: !1,
                    fibaParisedCityId: 0
                };
            },
            onLoad: function(e) {
                this.discussId = e.discussId || 0, this.discussId ? wx.setNavigationBarTitle({
                    title: "话题帖子"
                }) : wx.setNavigationBarTitle({
                    title: "同城话题"
                }), this.city = e.city || "", this.cityId = e.cityId || 0, this.getList();
            },
            onShow: function() {
                !this.userInfo && wx.getStorageSync("wxUserInfo") && this.requested && (this.userInfo = wx.getStorageSync("wxUserInfo"), 
                this.getList(!0));
            },
            onReachBottom: function() {
                this.getList();
            },
            onPullDownRefresh: function() {
                this.getList(!0);
            },
            methods: {
                handleParisedAnimationEnd: function() {
                    this.fibaParisedShow = !1;
                },
                handleParisedSuccess: function(e) {
                    var s = e.detail.id, t = e.detail.supportCity || {};
                    this.list.forEach(function(e) {
                        e.id == s && (++e.supportNum, e.supported = !0);
                    }), this.fibaParisedShow = !0, this.fibaParisedCityId = t.cityId || 0;
                },
                getList: function(e) {
                    var s = this;
                    if (e && (this.lastId = 0), this.discussId) {
                        var t = "discussTopicList";
                        this.userInfo && (t = "discussTopicListHeader"), a.communityApi[t]({
                            discussId: this.discussId,
                            lastId: this.lastId
                        }).then(function(t) {
                            if (e && (s.list = [], s.discussDetail = null), 0 == t.code) {
                                if (!s.discussDetail && t.data.discussDetail) {
                                    var a = t.data.discussDetail;
                                    a.followNum = a.followNum && (0, i.numberFormat)(a.followNum) || 0, a.createTime = a.createTime && new Date(a.createTime.replace(/-/g, "/")).Format("yy/MM/dd"), 
                                    s.discussDetail = a;
                                }
                                s.list = s.list.concat(t.data.topics || []), t.data.topics && t.data.topics.length && (s.lastId = t.data.lastId);
                            }
                            wx.stopPullDownRefresh(), s.requested = !0;
                        }).catch(function(e) {
                            wx.stopPullDownRefresh();
                        });
                    } else if (this.cityId) {
                        var o = "cityPool";
                        this.userInfo && (o = "cityPoolHeader"), a.communityApi[o]({
                            city: this.city,
                            cityId: this.cityId,
                            lastId: this.lastId
                        }).then(function(t) {
                            wx.stopPullDownRefresh(), e && (s.list = []), 0 == t.code && t.data && (s.requested = !0, 
                            s.list = s.list.concat(t.data.topics || []), t.data.topics && t.data.topics.length && (s.lastId = t.data.lastId));
                        }).catch(function(e) {
                            wx.stopPullDownRefresh();
                        });
                    }
                },
                getPublish: function() {
                    this.cityId && this.city ? wx.navigateTo({
                        url: "/pages/fibaAid/fibaAid?cityId=" + this.cityId + "&city=" + this.city
                    }) : this.discussId && this.discussDetail && this.discussDetail.content ? wx.navigateTo({
                        url: "/pages/fibaAid/fibaAid?discussId=" + this.discussId + "&discussName=" + this.discussDetail.content
                    }) : wx.navigateTo({
                        url: "/pages/fibaAid/fibaAid"
                    });
                },
                reloadListData: function() {
                    this.getList(!0);
                },
                updateList: function(e, s) {
                    var t = [];
                    this.list.forEach(function(a) {
                        a.id == e && (s.replyNum ? a.replyNum = s.replyNum : s.supportNum && (a.supportNum = s.supportNum, 
                        a.supported = !0)), t.push(a);
                    }), this.list = t;
                },
                onLoginEvent: function(e) {
                    this.userInfo = e.detail, this.getList(!0);
                },
                setShowRedHeart: function(e, s) {
                    var t = this;
                    console.log(e, s), this.showRedHeart = !0, this.animatedredheart = !1, this.redHeartSrc = e, 
                    setTimeout(function() {
                        t.animatedredheart = !0, setTimeout(function() {
                            t.showRedHeart = !1;
                        }, 300);
                    }, s);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaPost/fibaPost.vue?vue&type=custom&index=0&blockType=config": function(e, s, t) {
        e.exports = t.p + "pages/fibaPost/fibaPost.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaPost/fibaPost.vue?vue&type=style&index=0&lang=scss&": function(e, s, t) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaPost/fibaPost.vue?vue&type=template&id=71e17e1b&lang=wxml&": function(e, s, t) {
        t.r(s), t.d(s, "render", function() {
            return a;
        }), t.d(s, "staticRenderFns", function() {
            return i;
        });
        var a = function() {}, i = [];
        a._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/fibaPost/fibaPost.vue": function(e, s, t) {
        t.r(s);
        var a = t("./src/pages/fibaPost/fibaPost.vue?vue&type=template&id=71e17e1b&lang=wxml&"), i = t("./src/pages/fibaPost/fibaPost.vue?vue&type=script&lang=js&");
        for (var o in i) "default" !== o && function(e) {
            t.d(s, e, function() {
                return i[e];
            });
        }(o);
        t("./src/pages/fibaPost/fibaPost.vue?vue&type=style&index=0&lang=scss&");
        var n = t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), d = t("./src/pages/fibaPost/fibaPost.vue?vue&type=custom&index=0&blockType=config"), r = Object(n.default)(i.default, a.render, a.staticRenderFns, !1, null, null, null);
        "function" == typeof d.default && Object(d.default)(r);
        r.options.__file = "src/pages/fibaPost/fibaPost.vue", s.default = r.exports;
    },
    "./src/pages/fibaPost/fibaPost.vue?vue&type=custom&index=0&blockType=config": function(e, s, t) {
        t.r(s);
        var a = t("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaPost/fibaPost.vue?vue&type=custom&index=0&blockType=config"), i = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(s, e, function() {
                return a[e];
            });
        }(o);
        s.default = i.a;
    },
    "./src/pages/fibaPost/fibaPost.vue?vue&type=script&lang=js&": function(e, s, t) {
        t.r(s);
        var a = t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaPost/fibaPost.vue?vue&type=script&lang=js&"), i = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(s, e, function() {
                return a[e];
            });
        }(o);
        s.default = i.a;
    },
    "./src/pages/fibaPost/fibaPost.vue?vue&type=style&index=0&lang=scss&": function(e, s, t) {
        t.r(s);
        var a = t("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaPost/fibaPost.vue?vue&type=style&index=0&lang=scss&"), i = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(s, e, function() {
                return a[e];
            });
        }(o);
        s.default = i.a;
    },
    "./src/pages/fibaPost/fibaPost.vue?vue&type=template&id=71e17e1b&lang=wxml&": function(e, s, t) {
        t.r(s);
        var a = t("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaPost/fibaPost.vue?vue&type=template&id=71e17e1b&lang=wxml&");
        t.d(s, "render", function() {
            return a.render;
        }), t.d(s, "staticRenderFns", function() {
            return a.staticRenderFns;
        });
    },
    "./src/pages/fibaPost/index.js": function(e, s, t) {
        var a = t("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("./src/pages/fibaPost/fibaPost.vue"));
        (0, a.TuaPage)(i.default);
    },
    7: function(e, s, t) {
        e.exports = t("./src/pages/fibaPost/index.js");
    }
}, [ [ 7, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);