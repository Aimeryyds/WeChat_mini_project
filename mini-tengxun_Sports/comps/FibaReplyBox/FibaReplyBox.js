(global.webpackJsonp = global.webpackJsonp || []).push([ [ "comps/FibaReplyBox/FibaReplyBox" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=script&lang=js&": function(e, t, a) {
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./node_modules/babel-runtime/core-js/json/stringify.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("./src/scripts/constants/index.js"), i = a("./src/scripts/utils/index.js"), n = a("./src/apis/index.js");
        getApp().globalConf;
        t.default = {
            props: {
                tid: {
                    type: String,
                    default: 0
                },
                pid: {
                    type: String,
                    default: 0
                },
                autoFocus: {
                    type: Boolean,
                    default: !1
                },
                supportCity: Object,
                userInfo: Object,
                showTextarea: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    image: null,
                    content: "",
                    styleStr: "padding-left:55rpx;width:500rpx;height:40rpx",
                    btnBoxStr: "bottom: 15rpx",
                    showMessageIcon: !0,
                    boxBottom: 0,
                    textareaColor: "#999"
                };
            },
            computed: {},
            watch: {},
            methods: {
                handleTextareaFocus: function() {
                    this.showMessageIcon = !1, this.styleStr = "padding-left:0; width:550rpx;", this.boxBottom = "25rpx";
                },
                handleTextareaBlur: function() {
                    this.showMessageIcon = !0, this.styleStr = "padding-left:55rpx;width:500rpx;", this.boxBottom = "0";
                },
                chooseImageFile: function() {
                    var e = this;
                    wx.chooseImage({
                        count: 1,
                        sizeType: [ "original" ],
                        success: function(t) {
                            "chooseImage:ok" === t.errMsg && (t.tempFiles[0].size <= o.MAX_IMAG_SIZE && (t.tempFiles[0].isUpload = !1, 
                            e.image = t.tempFiles[0], e.btnBoxStr = "bottom: 20rpx"), console.log(e.image));
                        }
                    });
                },
                viewImg: function() {
                    wx.previewImage({
                        current: this.image.path,
                        urls: [ this.image.path ]
                    });
                },
                del: function() {
                    this.image = null, _this.btnBoxStr = "bottom: 15rpx";
                },
                setInputVal: function(e) {
                    this.content = e.detail.value || "", this.content.length ? this.textareaColor = "#333" : this.textareaColor = "#999";
                },
                submitComment: function(e) {
                    var t = this, a = this.content && this.content.trim();
                    return a ? a.length < 5 || a.length > 500 ? (wx.showToast({
                        title: "回复内容的长度必须在5-500个字符之间",
                        icon: "none",
                        mask: !0
                    }), !1) : (wx.showLoading({
                        title: "请稍后",
                        mask: !0
                    }), void (this.image ? this.uploadImg(function() {
                        t.image.width = parseInt(t.image.width), t.image.height = parseInt(t.image.height), 
                        t.image.size = parseInt(t.image.size), t.sendComment({
                            images: (0, s.default)([ t.image ])
                        });
                    }) : this.sendComment())) : (wx.showToast({
                        title: "请输入内容",
                        icon: "none",
                        mask: !0
                    }), !1);
                },
                sendComment: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = this;
                    t.content = this.content.trim(), t.tid = this.tid, this.pid && (t.pid = this.pid), 
                    n.communityApi.createReply(t).then(function(s) {
                        wx.hideLoading(), 0 == s.code ? (a.content = "", a.image = null, wx.showToast({
                            mask: !0,
                            title: "回复成功"
                        }), !t.pid && t.tid && e.statistics(t.tid), e.triggerEvent("onSuccess", {
                            reply: s.data.reply
                        })) : 2e3 == s.code || 2001 == s.code || 3001 == s.code || 4001 == s.code ? wx.showToast({
                            mask: !0,
                            title: s.msg || "回复失败",
                            icon: "none"
                        }) : wx.showToast({
                            mask: !0,
                            title: "回复失败",
                            icon: "none"
                        });
                    }).catch(function(e) {
                        wx.hideLoading();
                    });
                },
                uploadImg: function(e) {
                    var t = this;
                    this.image.isUpload ? "function" == typeof e && e() : (0, i.getHeader)().then(function(a) {
                        t.image.isUpload || wx.uploadFile({
                            url: o.RESOURCE_SERVER + "imgUpload/userMultiUpload",
                            filePath: t.image.path,
                            name: "picture0",
                            header: {
                                "Content-Type": "multipart/form-data",
                                accept: "application/json",
                                cookie: a.header.cookie
                            },
                            formData: {
                                channel: "shequ"
                            },
                            success: function(a) {
                                var s = JSON.parse(a.data);
                                0 == s.code ? (t.image.isUpload = !0, t.image = s.data.picture[0], "function" == typeof e && e()) : (wx.hideLoading(), 
                                wx.showToast({
                                    mask: !0,
                                    title: "评论失败",
                                    icon: "none"
                                }));
                            },
                            fail: function(e) {
                                wx.hideLoading(), wx.showToast({
                                    mask: !0,
                                    title: "评论失败",
                                    icon: "none"
                                });
                            }
                        });
                    });
                },
                statistics: function(e) {
                    var t = this;
                    this.supportCity && this.supportCity.cityId && (0, i.syncGetUserCookieFn)().then(function(a) {
                        var s = {
                            userId: a.sig || "",
                            type: 2,
                            timestamp: new Date().getTime(),
                            code: t.supportCity.cityId,
                            recordId: e
                        }, o = "/server/statistic/city?userId=" + s.userId + "&type=" + s.type + "&timestamp=" + s.timestamp + "&code=" + s.code + "&recordId=" + s.recordId;
                        s.signature = (0, i.getFibaSig)(o), n.communityApi.city(s).then(function(e) {});
                    });
                },
                onLoginEvent: function(e) {
                    this.triggerEvent("loginevent", e.detail);
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        e.exports = a.p + "comps/FibaReplyBox/FibaReplyBox.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=style&index=0&lang=scss&": function(e, t, a) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=template&id=d464ae8a&lang=wxml&": function(e, t, a) {
        a.r(t), a.d(t, "render", function() {
            return s;
        }), a.d(t, "staticRenderFns", function() {
            return o;
        });
        var s = function() {}, o = [];
        s._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/comps/FibaReplyBox/FibaReplyBox.vue": function(e, t, a) {
        a.r(t);
        var s = a("./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=template&id=d464ae8a&lang=wxml&"), o = a("./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=script&lang=js&");
        for (var i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        a("./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=style&index=0&lang=scss&");
        var n = a("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), l = a("./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=custom&index=0&blockType=config"), r = Object(n.default)(o.default, s.render, s.staticRenderFns, !1, null, null, null);
        "function" == typeof l.default && Object(l.default)(r);
        r.options.__file = "src/comps/FibaReplyBox/FibaReplyBox.vue", t.default = r.exports;
    },
    "./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=custom&index=0&blockType=config": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=custom&index=0&blockType=config"), o = a.n(s);
        for (var i in s) "default" !== i && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(i);
        t.default = o.a;
    },
    "./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=script&lang=js&": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=script&lang=js&"), o = a.n(s);
        for (var i in s) "default" !== i && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(i);
        t.default = o.a;
    },
    "./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=style&index=0&lang=scss&": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=style&index=0&lang=scss&"), o = a.n(s);
        for (var i in s) "default" !== i && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(i);
        t.default = o.a;
    },
    "./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=template&id=d464ae8a&lang=wxml&": function(e, t, a) {
        a.r(t);
        var s = a("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/comps/FibaReplyBox/FibaReplyBox.vue?vue&type=template&id=d464ae8a&lang=wxml&");
        a.d(t, "render", function() {
            return s.render;
        }), a.d(t, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    "./src/comps/FibaReplyBox/index.js": function(e, t, a) {
        var s = a("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("./src/comps/FibaReplyBox/FibaReplyBox.vue"));
        (0, s.TuaComp)(o.default);
    },
    35: function(e, t, a) {
        e.exports = a("./src/comps/FibaReplyBox/index.js");
    }
}, [ [ 35, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);