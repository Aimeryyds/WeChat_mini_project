(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/news/news" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/news/News.vue?vue&type=script&lang=js&": function(e, t, s) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/scripts/WechatAppPlayer/index.js")), a = s("./src/apis/index.js"), o = s("./src/scripts/utils/index.js"), i = {
            0: "资讯",
            1: "图片"
        };
        t.default = {
            data: function() {
                return {
                    type: 0,
                    title: "",
                    newsId: "",
                    timeStr: "",
                    noNewsStr: "",
                    newsParams: [],
                    comments: [],
                    commentTotal: 0,
                    tvpUrl: "",
                    tvpIsAd: !1,
                    tvpState: "",
                    tvpErrStr: "",
                    isAutoPlay: !1,
                    windowWidth: 375,
                    windowHeight: 1e3
                };
            },
            computed: {},
            onLoad: function(e) {
                var t = e.detailid;
                this.newsId = t, this.getNewsDetail(t);
            },
            onShow: function() {
                var e = this;
                this.setIsAutoPlay(), (0, o.getWindowSize)().then(function(t) {
                    var s = t.width, n = t.height;
                    e.windowWidth = s, e.windowHeight = n;
                });
            },
            methods: {
                setIsAutoPlay: function() {
                    var e = this;
                    wx.getNetworkType({
                        success: function(t) {
                            "wifi" === t.networkType && (e.isAutoPlay = !0);
                        }
                    });
                },
                getNewsDetail: function(e) {
                    var t = this, s = {
                        key: a.newsApi.detail.key,
                        syncParams: {
                            id: e
                        }
                    };
                    return (0, o.fetchDataByStorage)(s).then(function(e) {
                        var s = e.atype, n = e.title, a = e.content, o = e.targetId, i = e.pub_time, r = 1 == s, d = 0 == s || 2 == s;
                        t.type = r ? 1 : 0, t.title = n, t.timeStr = i, t.targetId = o, t.getCommentsList(o);
                        var l = [];
                        a.forEach(function(e, s) {
                            var n = e.vid, a = e.img, o = e.type, i = e.info, u = "img" === o, c = "text" === o, p = "video" === o;
                            if (d) {
                                if (c && l.push({
                                    type: o,
                                    content: i,
                                    showimg: !1,
                                    showtext: !0,
                                    showvideo: !1
                                }), u) {
                                    var g = a.imgurl0 || a.imgurl640, m = t.windowWidth / g.width;
                                    l.push({
                                        type: o,
                                        height: m * g.height,
                                        content: g.imgurl,
                                        showimg: !0,
                                        showtext: !1,
                                        showvideo: !1
                                    });
                                }
                                p && (t.videoContext = wx.createVideoContext("tvp"), t.createVideo(n), l.push({
                                    type: o,
                                    showimg: !1,
                                    showtext: !1,
                                    showvideo: !0
                                }));
                            }
                            if (r) {
                                if (u) {
                                    var f = a.imgurl0 || a.imgurl640;
                                    l[Math.floor(s / 2)] = {
                                        img: f.imgurl,
                                        isVertical: +f.height > +f.width
                                    };
                                }
                                c && (l[Math.floor(s / 2)].content = i);
                            }
                        }), t.newsParams = l;
                    }).catch(function(e) {
                        var s = e.message;
                        console.error(s), wx.showToast({
                            title: "出错啦",
                            icon: "loading"
                        }), t.noNewsStr = "资讯不存在或已删除";
                    });
                },
                getCommentsList: function(e) {
                    var t = this;
                    wx.request({
                        url: "https://kbs.coral.qq.com/article/" + e + "/comment?commentid=0&reqnum=20&source=5",
                        data: {},
                        method: "GET",
                        success: function(e) {
                            var s = e.data.data;
                            s && (t.comments = s.commentid, t.commentTotal = s.total);
                        }
                    });
                },
                createVideo: function(e) {
                    var t = this;
                    this.video && this.video.stop();
                    var s = this.video = (0, n.default)(e, {
                        from: "v4160",
                        getReportParam: function(e) {
                            e(null, {
                                hc_openid: "123",
                                rmd: "hehe"
                            });
                        }
                    });
                    s.on("error", function(e) {
                        console.log("直播错误", e), t.tvpErrStr = e.message || "您当前的环境无法播放，请在腾讯体育客户端中观看";
                    }), s.on("contentchange", function(e) {
                        e.currentContent && (console.log("contentchange", e), t.tvpUrl = e.currentContent.url, 
                        t.tvpIsAd = !!e.currentContent.isad);
                    });
                },
                __onTvpPlay: function() {
                    this.video && this.video.onContentPlay();
                },
                __onTvpPause: function() {
                    this.video && this.video.onContentPause();
                },
                __onTvpTimeupdate: function(e) {
                    this.video && this.video.onContentTimeupdate(null, e);
                },
                __onTvpEnded: function() {
                    this.video && this.video.onContentEnd();
                },
                onShareAppMessage: function() {
                    return (0, o.getShareAppMessage)({
                        title: i[this.type] + " | " + (this.title || "腾讯体育+"),
                        options: {
                            detailid: this.newsId
                        }
                    });
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/news/News.vue?vue&type=custom&index=0&blockType=config": function(e, t, s) {
        e.exports = s.p + "pages/news/news.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/news/News.vue?vue&type=style&index=0&lang=scss&": function(e, t, s) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/news/News.vue?vue&type=template&id=18ea014a&lang=wxml&": function(e, t, s) {
        s.r(t), s.d(t, "render", function() {
            return n;
        }), s.d(t, "staticRenderFns", function() {
            return a;
        });
        var n = function() {}, a = [];
        n._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/news/News.vue": function(e, t, s) {
        s.r(t);
        var n = s("./src/pages/news/News.vue?vue&type=template&id=18ea014a&lang=wxml&"), a = s("./src/pages/news/News.vue?vue&type=script&lang=js&");
        for (var o in a) "default" !== o && function(e) {
            s.d(t, e, function() {
                return a[e];
            });
        }(o);
        s("./src/pages/news/News.vue?vue&type=style&index=0&lang=scss&");
        var i = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = s("./src/pages/news/News.vue?vue&type=custom&index=0&blockType=config"), d = Object(i.default)(a.default, n.render, n.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(d);
        d.options.__file = "src/pages/news/News.vue", t.default = d.exports;
    },
    "./src/pages/news/News.vue?vue&type=custom&index=0&blockType=config": function(e, t, s) {
        s.r(t);
        var n = s("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/news/News.vue?vue&type=custom&index=0&blockType=config"), a = s.n(n);
        for (var o in n) "default" !== o && function(e) {
            s.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = a.a;
    },
    "./src/pages/news/News.vue?vue&type=script&lang=js&": function(e, t, s) {
        s.r(t);
        var n = s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/news/News.vue?vue&type=script&lang=js&"), a = s.n(n);
        for (var o in n) "default" !== o && function(e) {
            s.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = a.a;
    },
    "./src/pages/news/News.vue?vue&type=style&index=0&lang=scss&": function(e, t, s) {
        s.r(t);
        var n = s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/news/News.vue?vue&type=style&index=0&lang=scss&"), a = s.n(n);
        for (var o in n) "default" !== o && function(e) {
            s.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = a.a;
    },
    "./src/pages/news/News.vue?vue&type=template&id=18ea014a&lang=wxml&": function(e, t, s) {
        s.r(t);
        var n = s("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/news/News.vue?vue&type=template&id=18ea014a&lang=wxml&");
        s.d(t, "render", function() {
            return n.render;
        }), s.d(t, "staticRenderFns", function() {
            return n.staticRenderFns;
        });
    },
    "./src/pages/news/index.js": function(e, t, s) {
        var n = s("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/pages/news/News.vue"));
        (0, n.TuaPage)(a.default);
    },
    15: function(e, t, s) {
        e.exports = s("./src/pages/news/index.js");
    }
}, [ [ 15, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);