(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/fibaDetail/fibaDetail" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaDetail/fibaDetail.vue?vue&type=script&lang=js&": function(e, t, a) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a("./src/apis/index.js");
        getApp().globalConf;
        t.default = {
            data: function() {
                return {
                    id: 0,
                    info: null,
                    lastId: 0,
                    eliteList: [],
                    list: [],
                    scrollToComment: !1,
                    requested: !1,
                    userInfo: wx.getStorageSync("wxUserInfo") || "",
                    autoplayVideo: !1,
                    appendList: [],
                    showTextarea: !0,
                    fibaParisedShow: !1,
                    fibaParisedCityId: 0,
                    share: !1
                };
            },
            onLoad: function(e) {
                e.share && (this.share = !!e.share), this.id = e.id, this.scrollToComment = e.scroll || !1, 
                this.autoplayVideo = e.autoplay || !1, this.getPostInfoById(), this.getComment();
            },
            onShow: function() {
                !this.userInfo && wx.getStorageSync("wxUserInfo") && this.requested && (this.userInfo = wx.getStorageSync("wxUserInfo"), 
                this.getPostInfoById(!0), this.getComment(!0));
            },
            onShareAppMessage: function() {
                return {
                    path: "/pages/fibaDetail/fibaDetail?id=" + this.id + "&share=true"
                };
            },
            onReachBottom: function() {
                this.getComment();
            },
            methods: {
                goHome: function() {
                    wx.switchTab({
                        url: "/pages/fiba/fiba"
                    });
                },
                handleParisedAnimationEnd: function() {
                    this.fibaParisedShow = !1;
                },
                getPostInfoById: function(e) {
                    var t = this, a = "topicDetail";
                    this.userInfo && (a = "topicDetailHeader"), s.communityApi[a]({
                        tid: this.id
                    }).then(function(a) {
                        0 == a.code && (t.info = a.data.topic || {}, e || t.scrollToComment && setTimeout(function() {
                            wx.createSelectorQuery().select("#post").fields({
                                dataset: !0,
                                size: !0,
                                scrollOffset: !0,
                                properties: [ "scrollX", "scrollY" ],
                                computedStyle: [ "margin", "backgroundColor" ],
                                context: !0
                            }, function(e) {
                                wx.pageScrollTo({
                                    scrollTop: e.height
                                });
                            }).exec();
                        }, 10));
                    });
                },
                getComment: function(e) {
                    var t = this;
                    e && (this.lastId = 0);
                    var a = "replyListByFloor";
                    this.userInfo && (a = "replyListByFloorHeader"), s.communityApi[a]({
                        tid: this.id,
                        lastId: this.lastId
                    }).then(function(a) {
                        if (e && (t.eliteList = [], t.list = [], t.appendList = []), 0 == a.code) {
                            var s = a.data || {};
                            t.eliteList.length || (t.eliteList = s.eliteList || []), t.appendList && t.appendList.length && s.list.forEach(function(e, a) {
                                t.appendList.forEach(function(a, s) {
                                    e.id == a.id && t.appendList.splice(s, 1);
                                });
                            }), t.list = t.list.concat(s.list || []), s.list && s.list.length && (t.lastId = s.lastId);
                        }
                        t.requested = !0;
                    }).catch(function(e) {
                        t.requested = !0;
                    });
                },
                replySuccess: function(e) {
                    var t = e.detail.reply || null;
                    if (!t) return !1;
                    var a = [];
                    this.appendList.forEach(function(e) {
                        a.push(e);
                    }), a.push(t), this.appendList = a;
                    var s = parseInt(this.info.replyNum) + 1;
                    this.setData({
                        "info.replyNum": s
                    });
                    var i = getCurrentPages(), n = i[i.length - 2];
                    n.updateList && n.updateList(this.id, {
                        replyNum: s
                    });
                },
                handleParisedSuccess: function(e) {
                    var t = e.detail.type, a = e.detail.id;
                    if ("post" == t) {
                        ++this.info.supportNum, this.info.supported = !0;
                        var s = e.detail.supportCity || {};
                        this.fibaParisedShow = !0, this.fibaParisedCityId = s.cityId || 0;
                    } else if ("comment" == t) {
                        this.list.concat(this.appendList).concat(this.eliteList).forEach(function(e) {
                            e.id == a && (++e.supportNum, e.supported = !0);
                        });
                    }
                    var i = getCurrentPages(), n = i[i.length - 2];
                    n.updateList && n.updateList(a, {
                        supportNum: this.info.supportNum
                    });
                },
                updateList: function(e, t) {
                    var a = [];
                    this.list.forEach(function(s) {
                        s.id == e && (t.supportNum ? (s.supportNum = t.supportNum, s.supported = !0) : s.subReplyNum = parseInt(s.subReplyNum) + 1), 
                        a.push(s);
                    }), this.list = a, this.info.replyNum = parseInt(this.info.replyNum) + 1;
                },
                onLoginEvent: function(e) {
                    this.userInfo = e.detail, this.getPostInfoById(!0), this.getComment(!0);
                },
                videoFullScreen: function(e) {
                    e.detail ? this.showTextarea = !1 : this.showTextarea = !0;
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaDetail/fibaDetail.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        e.exports = a.p + "pages/fibaDetail/fibaDetail.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaDetail/fibaDetail.vue?vue&type=style&index=0&lang=scss&": function(e, t, a) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaDetail/fibaDetail.vue?vue&type=template&id=26b4a43b&lang=wxml&": function(e, t, a) {
        a.r(t), a.d(t, "render", function() {
            return s;
        }), a.d(t, "staticRenderFns", function() {
            return i;
        });
        var s = function() {}, i = [];
        s._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/fibaDetail/fibaDetail.vue": function(e, t, a) {
        a.r(t);
        var s = a("./src/pages/fibaDetail/fibaDetail.vue?vue&type=template&id=26b4a43b&lang=wxml&"), i = a("./src/pages/fibaDetail/fibaDetail.vue?vue&type=script&lang=js&");
        for (var n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        a("./src/pages/fibaDetail/fibaDetail.vue?vue&type=style&index=0&lang=scss&");
        var o = a("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), l = a("./src/pages/fibaDetail/fibaDetail.vue?vue&type=custom&index=0&blockType=config"), r = Object(o.default)(i.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof l.default && Object(l.default)(r);
        r.options.__file = "src/pages/fibaDetail/fibaDetail.vue", t.default = r.exports;
    },
    "./src/pages/fibaDetail/fibaDetail.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaDetail/fibaDetail.vue?vue&type=custom&index=0&blockType=config"), i = a.n(s);
        for (var n in s) "default" !== n && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(n);
        t.default = i.a;
    },
    "./src/pages/fibaDetail/fibaDetail.vue?vue&type=script&lang=js&": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaDetail/fibaDetail.vue?vue&type=script&lang=js&"), i = a.n(s);
        for (var n in s) "default" !== n && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(n);
        t.default = i.a;
    },
    "./src/pages/fibaDetail/fibaDetail.vue?vue&type=style&index=0&lang=scss&": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaDetail/fibaDetail.vue?vue&type=style&index=0&lang=scss&"), i = a.n(s);
        for (var n in s) "default" !== n && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(n);
        t.default = i.a;
    },
    "./src/pages/fibaDetail/fibaDetail.vue?vue&type=template&id=26b4a43b&lang=wxml&": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaDetail/fibaDetail.vue?vue&type=template&id=26b4a43b&lang=wxml&");
        a.d(t, "render", function() {
            return s.render;
        }), a.d(t, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/pages/fibaDetail/index.js": function(e, t, a) {
        var s = a("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/pages/fibaDetail/fibaDetail.vue"));
        (0, s.TuaPage)(i.default);
    },
    6: function(e, t, a) {
        e.exports = a("./src/pages/fibaDetail/index.js");
    }
}, [ [ 6, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);