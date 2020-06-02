(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaPost/FibaPost" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaPost/FibaPost.vue?vue&type=script&lang=js&": function(e, t, s) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = s("./src/apis/index.js"), a = s("./src/scripts/utils/index.js"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/scripts/WechatAppPlayer/index.js"));
        getApp().globalConf;
        t.default = {
            props: {
                info: {
                    type: Object
                },
                islist: {
                    type: Boolean,
                    default: !1
                },
                bannerInfo: {
                    type: Object
                },
                bannerShow: {
                    type: Boolean,
                    default: !1
                },
                redirect: {
                    type: Boolean,
                    default: !0
                },
                userInfo: Object,
                autoplay: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    images: [],
                    tvpUrl: "",
                    defaultSrc: "/assets/FIBA/pic_default_fatie@3x.png",
                    defaultVideoSrc: "/assets/FIBA/pic_default_vedio@3x.png"
                };
            },
            computed: {
                post: function() {
                    if (!this.info) return !1;
                    var e = {}, t = this.info.user || {};
                    return e.id = this.info.id, e.user = {
                        id: t.id,
                        name: t.name,
                        avatar: t.avatar,
                        vipType: t.vipType
                    }, e.createTime = this.info.createTime, e.replyNum = this.info.replyNum || 0, e.supported = this.info.supported || !1, 
                    e.supportNum = this.info.supportNum || 0, e.location = this.info.location && this.info.location.split("-")[1] || "", 
                    e.supportCity = this.info.supportCity || {}, e.discussList = this.info.discussList || [], 
                    e.vShow = 0 === parseInt(this.info.isDisabled) || 1 === parseInt(this.info.isDisabled), 
                    e.vShowTxt = 1 == parseInt(this.info.isDisabled) ? "审核中" : 2 == parseInt(this.info.isDisabled) ? "已删除" : "", 
                    e.vIsTop = !!((32 & this.info.status) > 0), e.title = "", e.images = [], e.videoInfo = {}, 
                    e.createTime = (0, a.timeFormat)(this.info.createTime), this.islist ? (e.title = this.info.summary || "", 
                    this.info.images && this.info.images.forEach(function(t) {
                        e.images.push({
                            url: t
                        });
                    }), e.videoInfo = this.info.videoInfo) : this.info.content && this.info.content.forEach(function(t) {
                        0 == t.type ? e.title += t.info : 1 == t.type ? e.images.push({
                            url: t.info
                        }) : 3 == t.type && (e.videoInfo = t.videoInfo);
                    }), e.discussList.forEach(function(t) {
                        e.title = e.title.replace("#" + t.content + "#", "");
                    }), e;
                }
            },
            ready: function() {
                this.islist || this.setVideoUrl();
            },
            methods: {
                setVideoUrl: function() {
                    var e = this;
                    this.post.videoInfo && this.post.videoInfo.vid && (0, o.default)(this.post.videoInfo.vid, {
                        from: "v4160",
                        getReportParam: function(e) {
                            e(null, {
                                hc_openid: "123",
                                rmd: "hehe"
                            });
                        }
                    }).on("contentchange", function(t) {
                        t.currentContent && (e.tvpUrl = t.currentContent.url);
                    });
                },
                getTopicDetail: function(e) {
                    if (!this.islist) return !1;
                    var t = this.post.id;
                    if (!t) return !1;
                    if (0 !== parseInt(this.info.isDisabled)) return !1;
                    var s = "/pages/fibaDetail/fibaDetail?id=" + t;
                    e.currentTarget.dataset.scroll && (s += "&scroll=true"), e.currentTarget.dataset.autoplay && (s += "&autoplay=true"), 
                    wx.navigateTo({
                        url: s
                    });
                },
                goPostList: function(e) {
                    if (e.currentTarget.dataset.discussid) wx.navigateTo({
                        url: "/pages/fibaPost/fibaPost?discussId=" + e.currentTarget.dataset.discussid
                    }); else if (e.currentTarget.dataset.cityid) {
                        var t = e.currentTarget.dataset.city, s = e.currentTarget.dataset.cityid;
                        wx.navigateTo({
                            url: "/pages/fibaPost/fibaPost?city=" + t + "&cityId=" + s
                        });
                    }
                },
                parised: function(e) {
                    var t = this, s = this.post.id;
                    return !!s && (!this.post.supported && (0 === parseInt(this.info.isDisabled) && void i.communityApi.supportTopic({
                        tid: s
                    }).then(function(e) {
                        0 == e.code && (t.statistics(), t.triggerEvent("onParisedSuccess", {
                            id: s,
                            type: "post",
                            supportCity: t.post.supportCity
                        }));
                    })));
                },
                statistics: function() {
                    var e = this;
                    this.post.supportCity && 0 != this.post.supportCity.cityId && (0, a.syncGetUserCookieFn)().then(function(t) {
                        var s = {
                            userId: t.sig || "",
                            type: 3,
                            timestamp: new Date().getTime(),
                            code: e.post.supportCity.cityId,
                            recordId: e.post.id
                        }, o = "/server/statistic/city?userId=" + s.userId + "&type=" + s.type + "&timestamp=" + s.timestamp + "&code=" + s.code + "&recordId=" + s.recordId;
                        s.signature = (0, a.getFibaSig)(o), i.communityApi.city(s).then(function(e) {});
                    });
                },
                viewImg: function(e) {
                    var t = e.currentTarget.dataset.src || "";
                    if (!t) return !1;
                    var s = [];
                    this.post.images && this.post.images.forEach(function(e) {
                        s.push(e.url);
                    }), wx.previewImage({
                        current: t,
                        urls: s
                    });
                },
                handleVideoScreen: function(e) {
                    e.detail.fullScreen ? this.triggerEvent("fullScreenEvent", !0) : this.triggerEvent("fullScreenEvent", !1);
                },
                stopPropagations: function(e) {},
                onLoginEvent: function(e) {
                    this.triggerEvent("loginevent", e.detail);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaPost/FibaPost.vue?vue&type=custom&index=0&blockType=config": function(e, t, s) {
        e.exports = s.p + "comps/FibaPost/FibaPost.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaPost/FibaPost.vue?vue&type=style&index=0&lang=scss&": function(e, t, s) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaPost/FibaPost.vue?vue&type=template&id=0685c59b&lang=wxml&": function(e, t, s) {
        s.r(t), s.d(t, "render", function() {
            return i;
        }), s.d(t, "staticRenderFns", function() {
            return a;
        });
        var i = function() {}, a = [];
        i._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/comps/FibaPost/FibaPost.vue": function(e, t, s) {
        s.r(t);
        var i = s("./src/comps/FibaPost/FibaPost.vue?vue&type=template&id=0685c59b&lang=wxml&"), a = s("./src/comps/FibaPost/FibaPost.vue?vue&type=script&lang=js&");
        for (var o in a) "default" !== o && function(e) {
            s.d(t, e, function() {
                return a[e];
            });
        }(o);
        s("./src/comps/FibaPost/FibaPost.vue?vue&type=style&index=0&lang=scss&");
        var n = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = s("./src/comps/FibaPost/FibaPost.vue?vue&type=custom&index=0&blockType=config"), d = Object(n.default)(a.default, i.render, i.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(d);
        d.options.__file = "src/comps/FibaPost/FibaPost.vue", t.default = d.exports;
    },
    "./src/comps/FibaPost/FibaPost.vue?vue&type=custom&index=0&blockType=config": function(e, t, s) {
        s.r(t);
        var i = s("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaPost/FibaPost.vue?vue&type=custom&index=0&blockType=config"), a = s.n(i);
        for (var o in i) "default" !== o && function(e) {
            s.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = a.a;
    },
    "./src/comps/FibaPost/FibaPost.vue?vue&type=script&lang=js&": function(e, t, s) {
        s.r(t);
        var i = s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaPost/FibaPost.vue?vue&type=script&lang=js&"), a = s.n(i);
        for (var o in i) "default" !== o && function(e) {
            s.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = a.a;
    },
    "./src/comps/FibaPost/FibaPost.vue?vue&type=style&index=0&lang=scss&": function(e, t, s) {
        s.r(t);
        var i = s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaPost/FibaPost.vue?vue&type=style&index=0&lang=scss&"), a = s.n(i);
        for (var o in i) "default" !== o && function(e) {
            s.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = a.a;
    },
    "./src/comps/FibaPost/FibaPost.vue?vue&type=template&id=0685c59b&lang=wxml&": function(e, t, s) {
        s.r(t);
        var i = s("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaPost/FibaPost.vue?vue&type=template&id=0685c59b&lang=wxml&");
        s.d(t, "render", function() {
            return i.render;
        }), s.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    "./src/comps/FibaPost/index.js": function(e, t, s) {
        var i = s("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/comps/FibaPost/FibaPost.vue"));
        (0, i.TuaComp)(a.default);
    },
    31: function(e, t, s) {
        e.exports = s("./src/comps/FibaPost/index.js");
    }
}, [ [ 31, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);