require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 14 ], {
    "6adk": function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = a("5nAL"), r = a.n(s), n = a("JY1/");
        new r.a(n.a).$mount();
    },
    "JY1/": function(t, e, a) {
        "use strict";
        var s = a("ptSE"), r = a("QGu1");
        var n = function(t) {
            a("krdj");
        }, i = a("ybqe")(s.a, r.a, n, "data-v-30d386a0", null);
        e.a = i.exports;
    },
    QGu1: function(t, e, a) {
        "use strict";
        var s = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "container"
                }, [ t.isDataReady ? a("div", {
                    staticClass: "loading"
                }, [ t.isSaved ? a("div", {
                    staticClass: "save-success"
                }, [ t._v("图片已经保存，快去相册分享海报吧~") ]) : t._e(), t._v(" "), t.isAuthError ? a("button", {
                    staticClass: "notice",
                    attrs: {
                        "open-type": "openSetting"
                    }
                }, [ t._v("保存失败，点击开启保存权限") ]) : t._e(), t._v(" "), t.isSystemError ? a("button", {
                    staticClass: "notice"
                }, [ t._v("请在手机系统设置选项中，允许微信访问你的相册") ]) : t._e() ], 1) : t._e(), t._v(" "), "article" === t.type ? a("img", {
                    staticClass: "article",
                    attrs: {
                        src: t.url
                    }
                }) : "knowledge" === t.type ? a("img", {
                    staticClass: "knowledge",
                    attrs: {
                        src: t.url,
                        mode: "widthFix"
                    }
                }) : "plan-poster" === t.type ? a("img", {
                    staticClass: "plan-poster",
                    class: {
                        long: 753 === t.height,
                        short: 577 === t.height
                    },
                    attrs: {
                        src: t.url
                    }
                }) : a("img", {
                    staticClass: "book",
                    attrs: {
                        src: t.url
                    }
                }) ]);
            },
            staticRenderFns: []
        };
        e.a = s;
    },
    krdj: function(t, e) {},
    ptSE: function(t, e, a) {
        "use strict";
        var s = a("Xxa5"), r = a.n(s), n = a("exGp"), i = a.n(n), o = a("EwJx"), c = a.n(o);
        e.a = {
            data: function() {
                return {
                    type: "article",
                    url: "",
                    isSaved: !1,
                    isDataReady: !1,
                    isAuthError: !1,
                    isSystemError: !1,
                    height: 0
                };
            },
            methods: {
                saveImageToAlbum: function(t) {
                    var e = this;
                    return i()(r.a.mark(function a() {
                        return r.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.prev = 0, a.next = 3, c.a.saveImageToPhotosAlbum({
                                    filePath: t
                                });

                              case 3:
                                e.isSaved = !0, e.isDataReady = !0, e.isAuthError = !1, e.isSystemError = !1, a.next = 15;
                                break;

                              case 9:
                                a.prev = 9, a.t0 = a.catch(0), e.isSaved = !1, e.isDataReady = !0, -1 !== a.t0.errMsg.indexOf("auth") && (wx.showToast({
                                    title: "请点击底部按钮授权",
                                    icon: "none"
                                }), e.isAuthError = !0), "saveImageToPhotosAlbum:fail system deny" === a.t0.errMsg && (wx.showToast({
                                    title: "海报保存到相册失败",
                                    icon: "none"
                                }), e.isSystemError = !0);

                              case 15:
                              case "end":
                                return a.stop();
                            }
                        }, a, e, [ [ 0, 9 ] ]);
                    }))();
                },
                handleWXSaveImage: function() {
                    var t = this;
                    return i()(r.a.mark(function e() {
                        var a, s, n;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, c.a.downloadFile({
                                    url: t.url
                                });

                              case 3:
                                a = e.sent, s = a.statusCode, n = a.tempFilePath, 200 === s && t.saveImageToAlbum(n), 
                                e.next = 12;
                                break;

                              case 9:
                                e.prev = 9, e.t0 = e.catch(0), wx.showToast({
                                    icon: "none",
                                    title: e.t0.errMsg
                                });

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, t, [ [ 0, 9 ] ]);
                    }))();
                }
            },
            onLoad: function() {
                var t = this.$route.query, e = t.type, a = t.url, s = t.height;
                this.type = e, this.url = a, this.height = +s;
            },
            onShow: function() {
                this.handleWXSaveImage();
            }
        };
    }
}, [ "6adk" ]);