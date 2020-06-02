(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/fibaAid/fibaAid" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaAid/fibaAid.vue?vue&type=script&lang=js&": function(e, t, i) {
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(i("./node_modules/babel-runtime/core-js/json/stringify.js"));
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = i("./src/scripts/constants/index.js"), n = i("./src/scripts/utils/index.js"), o = i("./src/apis/index.js");
        getApp().globalConf;
        t.default = {
            data: function() {
                return {
                    banner: {},
                    showRules: !0,
                    content: "",
                    showTextArea: !0,
                    countTextArea: 0,
                    fileType: "",
                    images: [],
                    video: null,
                    topics: {
                        name: "",
                        id: 0
                    },
                    city: {
                        name: "",
                        id: 0
                    },
                    location: "",
                    citycomps: !1,
                    textareaColor: "#999",
                    userInfo: wx.getStorageSync("wxUserInfo") || "",
                    windowHeight: wx.getSystemInfoSync().windowHeight,
                    adClass: ""
                };
            },
            onLoad: function(e) {
                var t = this;
                this.city = {
                    name: e.city || "",
                    id: e.cityId || 0
                }, e.discussName && (this.content = "#" + e.discussName + "#"), (0, n.getBannerData)().then(function(e) {
                    0 === e.code && (t.setAdPos(), t.banner = e.data || {});
                });
            },
            methods: {
                setAdPos: function() {
                    var e = this, t = wx.createSelectorQuery();
                    t.select("#content").boundingClientRect(), t.exec(function(t) {
                        var i = t && t[0].height;
                        parseInt(i) + 144 > e.windowHeight ? e.adClass = "adrelative" : e.adClass = "adfixed";
                    });
                },
                closeRulesTips: function() {
                    this.showRules = !1;
                },
                setTextAreaVal: function(e) {
                    this.content = e.detail.value || "", this.countTextArea = this.content.length, this.content.length ? this.textareaColor = "#333" : this.textareaColor = "#999";
                },
                del: function(e) {
                    var t = e.currentTarget.dataset || {};
                    "image" === t.type ? (this.images.splice(t.index, 1), this.fileType = this.images.length ? this.fileType : "") : (this.video = null, 
                    this.fileType = "");
                },
                chooseImageFile: function() {
                    var e = this;
                    wx.chooseImage({
                        count: s.MAX_UPLOAD_IMAG - (parseInt(this.images.length) || 0),
                        sizeType: [ "original" ],
                        success: function(t) {
                            "chooseImage:ok" === t.errMsg && (t.tempFiles && t.tempFiles.forEach(function(t) {
                                t.size <= s.MAX_IMAG_SIZE && (t.isUpload = !1, e.images.push(t));
                            }), e.images && e.images.length && (e.fileType = "image"));
                        }
                    });
                },
                chooseVideoFile: function() {
                    var e = this;
                    wx.chooseVideo({
                        maxDuration: 10,
                        compressed: !1,
                        success: function(t) {
                            "chooseVideo:ok" === t.errMsg && (t.size <= s.MAX_VIDEO_SIZE ? (e.fileType = "video", 
                            e.video = t) : wx.showToast({
                                title: "视频超过64M，请重新上传",
                                icon: "none"
                            }));
                        }
                    });
                },
                getCity: function() {
                    this.citycomps = !0, this.showTextArea = !1;
                },
                closeCityComps: function() {
                    this.citycomps = !1, this.showTextArea = !0;
                },
                choiceCityComps: function(e) {
                    var t = e.detail.item || {};
                    this.city.name = t.name || "", this.city.id = t.id || 0, this.closeCityComps();
                },
                getLocation: function() {
                    var e = this;
                    (0, n.getUserLocation)().then(function(t) {
                        (0, n.reverseGeocoder)(t).then(function(t) {
                            wx.hideLoading(), e.location = t.city + "-" + (t.formatted_addresses && t.formatted_addresses.recommend || "");
                        }).catch(function() {
                            wx.hideLoading();
                        });
                    }).catch(function(e) {
                        "boolean" == typeof e && wx.showModal({
                            title: "地理位置未授权",
                            content: "如需正常使用本平台，请按确定并在授权管理中选中“位置信息”，然后点击确定。即可正常使用。",
                            showCancel: !1,
                            success: function(e) {
                                wx.openSetting();
                            }
                        });
                    });
                },
                delLocation: function() {
                    this.location = "";
                },
                uploadVideo: function(e) {
                    var t = this;
                    (0, n.getHeader)().then(function(i) {
                        wx.uploadFile({
                            url: s.RESOURCE_VIDEO_SERVER + "sptvideo/video/upload",
                            filePath: t.video.tempFilePath,
                            name: "media",
                            header: {
                                "Content-Type": "multipart/form-data",
                                accept: "application/json",
                                cookie: i.header.cookie
                            },
                            success: function(i) {
                                try {
                                    var a = JSON.parse(i.data);
                                    if (0 == a.code) {
                                        var s = t.video.tempFilePath;
                                        t.video = a.data, t.video.tempFilePath = s, "function" == typeof e && e();
                                    } else 5 == a.code ? (wx.hideLoading(), wx.showToast({
                                        mask: !0,
                                        title: "每天只能发5个视频帖哦～",
                                        icon: "none"
                                    })) : (wx.hideLoading(), wx.showToast({
                                        mask: !0,
                                        title: "发布失败",
                                        icon: "none"
                                    }));
                                } catch (e) {
                                    wx.hideLoading(), wx.showToast({
                                        mask: !0,
                                        title: "发布失败",
                                        icon: "none"
                                    });
                                }
                            },
                            fail: function(e) {
                                wx.hideLoading(), wx.showToast({
                                    mask: !0,
                                    title: "发布失败",
                                    icon: "none"
                                });
                            }
                        });
                    });
                },
                uploadImg: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = this;
                    if (t !== this.images.length) {
                        var a = !1;
                        this.images.forEach(function(e) {
                            e.isUpload || (a = !0);
                        }), a ? (0, n.getHeader)().then(function(a) {
                            i.images[t].isUpload || wx.uploadFile({
                                url: s.RESOURCE_SERVER + "imgUpload/userMultiUpload",
                                filePath: i.images[t].path,
                                name: "picture" + t,
                                header: {
                                    "Content-Type": "multipart/form-data",
                                    accept: "application/json",
                                    cookie: a.header.cookie
                                },
                                formData: {
                                    channel: "shequ"
                                },
                                success: function(a) {
                                    try {
                                        var s = JSON.parse(a.data);
                                        0 == s.code ? (s.data.picture[0].isUpload = !0, i.images[t] = s.data.picture[0], 
                                        i.uploadImg(e, ++t)) : (wx.hideLoading(), wx.showToast({
                                            mask: !0,
                                            title: "发布失败",
                                            icon: "none"
                                        }));
                                    } catch (e) {
                                        wx.hideLoading(), wx.showToast({
                                            mask: !0,
                                            title: "发布失败",
                                            icon: "none"
                                        });
                                    }
                                },
                                fail: function(e) {
                                    wx.hideLoading(), wx.showToast({
                                        mask: !0,
                                        title: "发布失败",
                                        icon: "none"
                                    });
                                }
                            });
                        }) : "function" == typeof e && e();
                    } else "function" == typeof e && e();
                },
                submit: function() {
                    var e = this;
                    if (this.content = this.content && this.content.trim(), !this.content && !this.images.length && !this.video) return wx.showToast({
                        title: "发布内容为空，发布失败",
                        icon: "none",
                        mask: !0
                    }), !1;
                    if (this.content && this.content.length < 20) return wx.showToast({
                        title: "发布内容长度不能少于20字哦~",
                        icon: "none",
                        mask: !0
                    }), !1;
                    var t = {
                        platform: "miniprogram",
                        mid: 247,
                        content: this.content
                    };
                    this.images && this.images.length ? t.images = this.images : this.video && (t.video = this.video), 
                    this.city.id && (t.cityId = this.city.id), this.location && (t.location = this.location), 
                    wx.showLoading({
                        title: "发布中",
                        mask: !0
                    }), this.images && this.images.length ? this.uploadImg(function() {
                        t.images = e.images, e.sendMsg(t);
                    }) : this.video ? this.uploadVideo(function() {
                        t.vid = e.video.vid, t.videoUrl = e.video.videoUrl, delete t.video, e.sendMsg(t);
                    }) : this.sendMsg(t);
                },
                sendMsg: function(e) {
                    var t = this;
                    if (e.images && e.images.length) {
                        var i = [];
                        e.images.forEach(function(e) {
                            e.url && i.push({
                                url: e.url,
                                width: parseInt(e.width),
                                height: parseInt(e.height),
                                size: parseInt(e.size),
                                type: e.type
                            });
                        }), e.images = i, e.images = (0, a.default)(e.images);
                    }
                    o.communityApi.createTopic(e).then(function(i) {
                        if (wx.hideLoading(), 0 == i.code) {
                            var a = "发布成功";
                            if (1 == (i.data && i.data.topic && i.data.topic.isDisabled)) a = "发布成功，内容等待审核！"; else {
                                var s = getCurrentPages(), o = s[s.length - 2];
                                o.reloadListData && o.reloadListData();
                            }
                            wx.showToast({
                                title: a,
                                mask: !0,
                                icon: "none",
                                success: function() {
                                    e.cityId ? (0, n.syncGetUserCookieFn)().then(function(a) {
                                        var s = {
                                            userId: a.sig || "",
                                            type: 1,
                                            timestamp: new Date().getTime(),
                                            code: e.cityId,
                                            recordId: i.data.id
                                        }, o = "/server/statistic/city?userId=" + s.userId + "&type=" + s.type + "&timestamp=" + s.timestamp + "&code=" + s.code + "&recordId=" + s.recordId;
                                        s.signature = (0, n.getFibaSig)(o), (0, n.getEightCityData)().then(function(i) {
                                            i.forEach(function(i) {
                                                if (i.code == e.cityId) {
                                                    var a = getCurrentPages(), s = a[a.length - 2];
                                                    s.setShowRedHeart && s.setShowRedHeart(i.showGifUrl, i.timeDelay), t.showTextArea = !1, 
                                                    wx.navigateBack({
                                                        delta: 1
                                                    });
                                                }
                                            });
                                        }).catch(function() {
                                            setTimeout(function() {
                                                wx.navigateBack({
                                                    delta: 1
                                                });
                                            }, 2e3);
                                        });
                                    }) : setTimeout(function() {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 2e3);
                                }
                            });
                        } else 4 == i.code ? wx.showToast({
                            mask: !0,
                            title: i.msg || "发布失败",
                            icon: "none"
                        }) : wx.showToast({
                            mask: !0,
                            title: "发布失败",
                            icon: "none"
                        });
                    }).catch(function(e) {
                        wx.hideLoading();
                    });
                },
                handleVideoScreen: function(e) {
                    e.detail.fullScreen ? this.showTextArea = !1 : this.showTextArea = !0;
                },
                updateContent: function(e) {
                    this.content = this.content + "#" + e.content + "#";
                }
            }
        };
    },
    "./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaAid/fibaAid.vue?vue&type=custom&index=0&blockType=config": function(e, t, i) {
        e.exports = i.p + "pages/fibaAid/fibaAid.json";
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaAid/fibaAid.vue?vue&type=style&index=0&lang=scss&": function(e, t, i) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaAid/fibaAid.vue?vue&type=template&id=4fc6e2d1&lang=wxml&": function(e, t, i) {
        i.r(t), i.d(t, "render", function() {
            return a;
        }), i.d(t, "staticRenderFns", function() {
            return s;
        });
        var a = function() {}, s = [];
        a._withStripped = !0;
    },
    "./package.json": function(e) {
        e.exports = JSON.parse('{"name":"sportsplus","version":"2.14.9","description":"","scripts":{"start":"tua-mp-service serve","build":"npm run clean && tua-mp-service build","wd":"cd src/searchWidget && wdcompile","clean":"rimraf dist/*"},"author":"omgweb","dependencies":{"js-md5":"^0.7.3","qqmap-wx-jssdk":"^1.0.0","tua-api":"^1.4.0","tua-mp":"^0.8.3","tua-storage":"^1.8.1"},"devDependencies":{"@tua-mp/service":"0.1.6","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-stage-0":"^6.24.1","miniprogram-api-typings":"^2.8.3-1","rimraf":"^3.0.0"}}');
    },
    "./src/app/app.json": function(e) {
        e.exports = JSON.parse('{"pages":["pages/index/index","game","pages/fiba/fiba","pages/news/news","pages/game/game","pages/team/team","pages/video/video","pages/login/login","pages/center/center","pages/player/player","pages/fibaAid/fibaAid","pages/webview/webview","pages/calendar/calendar","pages/fibaRcon/fibaRcon","pages/allmatch/allmatch","pages/fibaPost/fibaPost","pages/fibaRules/fibaRules","pages/fibaTopic/fibaTopic","pages/fibaDetail/fibaDetail","pages/attendList/attendList","pages/fibapublish/fibapublish","pages/vipexchange/vipexchange","pages/searchResult/searchResult","pages/worldCupSchedule/worldCupSchedule"],"tabBar":{"list":[{"text":"热门","pagePath":"pages/index/index","iconPath":"assets/tabbar/tab_hot_normal@3x.png","selectedIconPath":"assets/tabbar/tab_hot_press@3x.png"},{"text":"赛事","pagePath":"pages/allmatch/allmatch","iconPath":"assets/tabbar/tab_match_normal@3x.png","selectedIconPath":"assets/tabbar/tab_match_press@3x.png"},{"text":"社区","pagePath":"pages/fiba/fiba","iconPath":"assets/tabbar/tab_fiba_normal@3x.png","selectedIconPath":"assets/tabbar/tab_fiba_select@3x.png"},{"text":"我的","pagePath":"pages/center/center","iconPath":"assets/tabbar/tab_me_normal@3x.png","selectedIconPath":"assets/tabbar/tab_me_press@3x.png"}],"color":"#666666","selectedColor":"#2b7ffb","backgroundColor":"#ffffff"},"window":{"navigationBarBackgroundColor":"#0061B8","navigationBarTitleText":"腾讯体育+","backgroundColor":"#f3f3f7","backgroundTextStyle":"dark","enablePullDownRefresh":true},"widgets":[{"type":"search","path":"searchWidget"}],"debug":true,"navigateToMiniProgramAppIdList":["wxc5df8e3b60d4b4a2"],"permission":{"scope.userLocation":{"desc":"我们需要您的位置信息喲~"}},"networkTimeout":{"uploadFile":3000000}}');
    },
    "./src/pages/fibaAid/fibaAid.vue": function(e, t, i) {
        i.r(t);
        var a = i("./src/pages/fibaAid/fibaAid.vue?vue&type=template&id=4fc6e2d1&lang=wxml&"), s = i("./src/pages/fibaAid/fibaAid.vue?vue&type=script&lang=js&");
        for (var n in s) "default" !== n && function(e) {
            i.d(t, e, function() {
                return s[e];
            });
        }(n);
        i("./src/pages/fibaAid/fibaAid.vue?vue&type=style&index=0&lang=scss&");
        var o = i("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), d = i("./src/pages/fibaAid/fibaAid.vue?vue&type=custom&index=0&blockType=config"), c = Object(o.default)(s.default, a.render, a.staticRenderFns, !1, null, null, null);
        "function" == typeof d.default && Object(d.default)(c);
        c.options.__file = "src/pages/fibaAid/fibaAid.vue", t.default = c.exports;
    },
    "./src/pages/fibaAid/fibaAid.vue?vue&type=custom&index=0&blockType=config": function(e, t, i) {
        i.r(t);
        var a = i("./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaAid/fibaAid.vue?vue&type=custom&index=0&blockType=config"), s = i.n(a);
        for (var n in a) "default" !== n && function(e) {
            i.d(t, e, function() {
                return a[e];
            });
        }(n);
        t.default = s.a;
    },
    "./src/pages/fibaAid/fibaAid.vue?vue&type=script&lang=js&": function(e, t, i) {
        i.r(t);
        var a = i("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaAid/fibaAid.vue?vue&type=script&lang=js&"), s = i.n(a);
        for (var n in a) "default" !== n && function(e) {
            i.d(t, e, function() {
                return a[e];
            });
        }(n);
        t.default = s.a;
    },
    "./src/pages/fibaAid/fibaAid.vue?vue&type=style&index=0&lang=scss&": function(e, t, i) {
        i.r(t);
        var a = i("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaAid/fibaAid.vue?vue&type=style&index=0&lang=scss&"), s = i.n(a);
        for (var n in a) "default" !== n && function(e) {
            i.d(t, e, function() {
                return a[e];
            });
        }(n);
        t.default = s.a;
    },
    "./src/pages/fibaAid/fibaAid.vue?vue&type=template&id=4fc6e2d1&lang=wxml&": function(e, t, i) {
        i.r(t);
        var a = i("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/file-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/fibaAid/fibaAid.vue?vue&type=template&id=4fc6e2d1&lang=wxml&");
        i.d(t, "render", function() {
            return a.render;
        }), i.d(t, "staticRenderFns", function() {
            return a.staticRenderFns;
        });
    },
    "./src/pages/fibaAid/index.js": function(e, t, i) {
        var a = i("./node_modules/tua-mp/examples/basic/utils/tua-mp.esm.js"), s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(i("./src/pages/fibaAid/fibaAid.vue"));
        (0, a.TuaPage)(s.default);
    },
    5: function(e, t, i) {
        e.exports = i("./src/pages/fibaAid/index.js");
    }
}, [ [ 5, "chunks/runtime", "chunks/vendors", "chunks/scripts" ] ] ]);