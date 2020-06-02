(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaComment/FibaComment" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaComment/FibaComment.vue?vue&type=script&lang=js&": function(e, t, s) {
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./node_modules/babel-runtime/core-js/json/stringify.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = s("./src/apis/index.js"), i = s("./src/scripts/utils/index.js");
        getApp().globalConf;
        t.default = {
            props: {
                info: Object,
                tid: String,
                islist: {
                    type: Boolean,
                    default: !1
                },
                convered: {
                    type: Boolean,
                    default: !1
                },
                supportCity: Object,
                userInfo: Object
            },
            data: function() {
                return {
                    defaultSrc: "/assets/FIBA/pic_default_fatie@3x.png",
                    cacheParisedCid: wx.getStorageSync("cacheParisedCid")
                };
            },
            computed: {
                comment: function() {
                    if (!this.info) return !1;
                    if (this.convered) return this.info;
                    var e = {}, t = this.info.user || {};
                    return e.id = this.info.id, e.user = {
                        id: t.id,
                        name: t.name,
                        avatar: t.avatar,
                        vipType: t.vipType || 0
                    }, e.createTime = (0, i.timeFormat)(this.info.createTime), e.subReplyNum = this.info.subReplyNum || 0, 
                    e.subReplys = this.info.subReplys, e.supported = this.info.supported || !1, this.cacheParisedCid && this.cacheParisedCid.indexOf(e.id) > -1 && (e.supported = !0), 
                    e.supportNum = this.info.supportNum || 0, e.floorNum = this.info.floorNum || 0, 
                    e.title = "", e.images = [], this.info.content && this.info.content.forEach(function(t) {
                        0 == t.type ? e.title += t.info : 1 == t.type && e.images.push({
                            url: t.info
                        });
                    }), e.parentReply = {
                        title: ""
                    }, e.pid = this.info.pid || 0, this.info.pid && this.info.parentReply && (e.parentReply.floorNum = this.info.parentReply.floorNum, 
                    e.parentReply.userName = this.info.parentReply.user.name, e.parentReply.vipType = this.info.parentReply.user.vipType, 
                    this.info.parentReply.content.forEach(function(t) {
                        0 == t.type && (e.parentReply.title += t.info);
                    }), e.parentReply.title = (0, i.emojiStrLength)(e.parentReply.title) > 45 ? (0, 
                    i.truncated)(e.parentReply.title, 45) + "…" : e.parentReply.title), e;
                }
            },
            methods: {
                getCommentDetail: function(e) {
                    if (!this.islist) return !1;
                    var t = "/pages/fibaRcon/fibaRcon?tid=" + this.tid + "&rid=" + this.comment.id + "&supportCity=" + (0, 
                    a.default)(this.supportCity) + "&comment=" + encodeURIComponent((0, a.default)(this.comment));
                    if (e.currentTarget.dataset.rcon) t += "&rcon=true"; else if (!parseInt(this.subReplyNum)) return !1;
                    wx.navigateTo({
                        url: t
                    });
                },
                parised: function(e) {
                    var t = this, s = this.comment.id;
                    return !!s && (!this.comment.supported && void n.communityApi.supportReply({
                        tid: this.tid,
                        rid: this.comment.id
                    }).then(function(e) {
                        if (0 == e.code) {
                            var a = wx.getStorageSync("cacheParisedCid");
                            a ? a += "," + t.comment.id : a = t.comment.id, wx.setStorageSync("cacheParisedCid", a), 
                            t.triggerEvent("onParisedSuccess", {
                                id: s,
                                type: "comment"
                            });
                        }
                    }));
                },
                viewImg: function(e) {
                    var t = e.currentTarget.dataset.src || "";
                    if (!t) return !1;
                    var s = [];
                    this.comment.images && this.comment.images.forEach(function(e) {
                        s.push(e.url);
                    }), wx.previewImage({
                        current: t,
                        urls: s
                    });
                },
                onLoginEvent: function(e) {
                    this.triggerEvent("loginevent", e.detail);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaComment/FibaComment.vue?vue&type=custom&index=0&blockType=config": function(e, t, s) {
        e.exports = s.p + "comps/FibaComment/FibaComment.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaComment/FibaComment.vue?vue&type=style&index=0&lang=scss&": function(e, t, s) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaComment/FibaComment.vue?vue&type=template&id=7d31f157&lang=wxml&": function(e, t, s) {
        s.r(t), s.d(t, "render", function() {
            return a;
        }), s.d(t, "staticRenderFns", function() {
            return n;
        });
        var a = function() {}, n = [];
        a._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/comps/FibaComment/FibaComment.vue": function(e, t, s) {
        s.r(t);
        var a = s("./src/comps/FibaComment/FibaComment.vue?vue&type=template&id=7d31f157&lang=wxml&"), n = s("./src/comps/FibaComment/FibaComment.vue?vue&type=script&lang=js&");
        for (var i in n) "default" !== i && function(e) {
            s.d(t, e, function() {
                return n[e];
            });
        }(i);
        s("./src/comps/FibaComment/FibaComment.vue?vue&type=style&index=0&lang=scss&");
        var o = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), r = s("./src/comps/FibaComment/FibaComment.vue?vue&type=custom&index=0&blockType=config"), d = Object(o.default)(n.default, a.render, a.staticRenderFns, !1, null, null, null);
        "function" == typeof r.default && Object(r.default)(d);
        d.options.__file = "src/comps/FibaComment/FibaComment.vue", t.default = d.exports;
    },
    "./src/comps/FibaComment/FibaComment.vue?vue&type=custom&index=0&blockType=config": function(e, t, s) {
        s.r(t);
        var a = s("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaComment/FibaComment.vue?vue&type=custom&index=0&blockType=config"), n = s.n(a);
        for (var i in a) "default" !== i && function(e) {
            s.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = n.a;
    },
    "./src/comps/FibaComment/FibaComment.vue?vue&type=script&lang=js&": function(e, t, s) {
        s.r(t);
        var a = s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaComment/FibaComment.vue?vue&type=script&lang=js&"), n = s.n(a);
        for (var i in a) "default" !== i && function(e) {
            s.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = n.a;
    },
    "./src/comps/FibaComment/FibaComment.vue?vue&type=style&index=0&lang=scss&": function(e, t, s) {
        s.r(t);
        var a = s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaComment/FibaComment.vue?vue&type=style&index=0&lang=scss&"), n = s.n(a);
        for (var i in a) "default" !== i && function(e) {
            s.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = n.a;
    },
    "./src/comps/FibaComment/FibaComment.vue?vue&type=template&id=7d31f157&lang=wxml&": function(e, t, s) {
        s.r(t);
        var a = s("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaComment/FibaComment.vue?vue&type=template&id=7d31f157&lang=wxml&");
        s.d(t, "render", function() {
            return a.render;
        }), s.d(t, "staticRenderFns", function() {
            return a.staticRenderFns;
        });
    },
    "./src/comps/FibaComment/index.js": function(e, t, s) {
        var a = s("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s("./src/comps/FibaComment/FibaComment.vue"));
        (0, a.TuaComp)(n.default);
    },
    27: function(e, t, s) {
        e.exports = s("./src/comps/FibaComment/index.js");
    }
}, [ [ 27, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);