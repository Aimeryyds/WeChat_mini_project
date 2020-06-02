require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 3 ], {
    90: function(t, s, e) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var o = e(1), n = e.n(o), c = e(91);
        new n.a(c.a).$mount();
    },
    91: function(t, s, e) {
        var o = e(93), n = e(94), c = !1, i = e(0)(o.a, n.a, function(t) {
            c || e(92);
        }, "data-v-575a560f", null);
        i.options.__file = "src\\pages\\toAPP\\index.vue", i.esModule && Object.keys(i.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), i.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        s.a = i.exports;
    },
    92: function(t, s) {},
    93: function(t, s, e) {
        s.a = {
            name: "toAPP",
            data: function() {
                return {
                    msg: "toAPP",
                    isShow: !1,
                    isIos: !1
                };
            },
            onLoad: function(t) {
                console.log(t);
            },
            methods: {
                copyAddr: function(t) {
                    wx.getSystemInfo({
                        success: function(t) {
                            wx.setClipboardData({
                                data: "https://wap.xyzq.com.cn",
                                success: function(t) {
                                    wx.getClipboardData({
                                        success: function(t) {
                                            console.log(t.data);
                                        }
                                    });
                                }
                            });
                        }
                    });
                },
                launchAppError: function(t) {
                    console.log(t), t.mp.detail.errMsg && (this.isShow = !0);
                },
                cancel: function(t) {
                    this.isShow = !1;
                },
                toApp: function(t) {
                    var s = this;
                    wx.getSystemInfo({
                        success: function(t) {
                            console.log(t.platform), "ios" === t.platform ? (s.isShow = !1, s.isIos = !0) : (t.platform, 
                            s.isShow = !1, s.isIos = !0);
                        }
                    });
                },
                close: function() {
                    this.isIos = !1;
                },
                backIndex: function(t) {
                    wx.navigateTo({
                        url: "/pages/index/main"
                    });
                }
            },
            created: function() {}
        };
    },
    94: function(t, s, e) {
        var o = function() {
            var t = this, s = t.$createElement, e = t._self._c || s;
            return e("div", {
                staticClass: "container"
            }, [ e("button", {
                staticClass: "toApp",
                attrs: {
                    "open-type": "launchApp",
                    "app-parameter": "wechat",
                    eventid: "1_0"
                },
                on: {
                    error: t.launchAppError
                }
            }), t._v(" "), e("div", {
                staticClass: "back",
                attrs: {
                    eventid: "1_1"
                },
                on: {
                    click: t.backIndex
                }
            }, [ e("img", {
                attrs: {
                    src: "https://static.xyzq.cn/activity/mp-images/mp-home/back2.png",
                    alt: ""
                }
            }) ]), t._v(" "), t.isShow ? e("div", {
                staticClass: "musk-box"
            }, [ e("div", {
                staticClass: "pop-up"
            }, [ e("div", {
                staticClass: "musk-p"
            }, [ e("p", [ t._v("系统检测到您未安装优理宝APP，"), e("br"), t._v("是否要下载并安装?") ], 1) ], 1), t._v(" "), e("div", {
                staticClass: "musk-click musk-click1",
                attrs: {
                    eventid: "3_2"
                },
                on: {
                    click: t.cancel
                }
            }, [ t._v("取消") ]), t._v(" "), e("div", {
                staticClass: "musk-click musk-click2",
                attrs: {
                    eventid: "3_3"
                },
                on: {
                    click: t.toApp
                }
            }, [ t._v("下载并安装") ]) ]) ]) : t._e(), t._v(" "), t.isIos ? e("div", {
                staticClass: "musk-box"
            }, [ e("div", {
                staticClass: "pop-up-ios"
            }, [ e("div", {
                staticClass: "closeMusk",
                attrs: {
                    eventid: "3_4"
                },
                on: {
                    click: t.close
                }
            }), t._v(" "), e("p", [ t._v("如需下载,请长按网址复制后使用"), e("br"), t._v("浏览器访问") ], 1), t._v(" "), e("h4", [ e("text", {
                attrs: {
                    selectable: "true",
                    eventid: "4_5"
                },
                on: {
                    click: t.copyAddr
                }
            }, [ t._v("https://wap.xyzq.com.cn/") ]) ]) ], 1) ]) : t._e() ], 1);
        }, n = [];
        o._withStripped = !0;
        var c = {
            render: o,
            staticRenderFns: n
        };
        s.a = c;
    }
}, [ 90 ]);