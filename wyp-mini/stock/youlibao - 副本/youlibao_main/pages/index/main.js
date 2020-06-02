require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 1 ], {
    24: function(t, i, n) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var e = n(1), a = n.n(e), s = n(25);
        new a.a(s.a).$mount();
    },
    25: function(t, i, n) {
        var e = n(27), a = n(63), s = !1, o = n(0)(e.a, a.a, function(t) {
            s || n(26);
        }, "data-v-1a475e3b", null);
        o.options.__file = "src\\pages\\index\\index.vue", o.esModule && Object.keys(o.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        i.a = o.exports;
    },
    26: function(t, i) {},
    27: function(t, i, n) {
        var e = n(28), a = n.n(e), s = n(56), o = n(12);
        i.a = {
            name: "index",
            data: function() {
                return {
                    imgList: [ {
                        url: "https://static.xyzq.cn/activity/mp-images/mp-home/banner.png"
                    }, {
                        url: "https://static.xyzq.cn/activity/mp-images/mp-home/banner.png"
                    } ],
                    list: [ {
                        index: 0,
                        src: "https://static.xyzq.cn/activity/mp-images/mp-home/foundation.png",
                        title: "基金超市",
                        detail: "实时估值，追踪净值走势"
                    }, {
                        index: 1,
                        src: "https://static.xyzq.cn/activity/mp-images/mp-home/information.png",
                        title: "资讯",
                        detail: "投资参考及时触达"
                    }, {
                        index: 2,
                        src: "https://static.xyzq.cn/activity/mp-images/mp-home/tool.png",
                        title: "机智猫",
                        detail: "您的智能投资助手"
                    }, {
                        index: 3,
                        src: "https://static.xyzq.cn/activity/mp-images/mp-home/strategy.png",
                        title: "攻略",
                        detail: "玩转优理宝"
                    }, {
                        index: 4,
                        src: "https://static.xyzq.cn/activity/mp-images/mp-home/game.png",
                        title: "游戏",
                        detail: "休闲娱乐"
                    }, {
                        index: 5,
                        src: "https://static.xyzq.cn/activity/mp-images/mp-home/img_hq.png",
                        title: "行情&自选",
                        detail: "实时掌握市场动态"
                    } ],
                    cardlist: [ {
                        index: 0,
                        src: "https://static.xyzq.cn/activity/mp-images/mp-home/strategy.png",
                        title: "攻略",
                        detail: "玩转优理宝"
                    }, {
                        index: 1,
                        src: "https://static.xyzq.cn/activity/mp-images/mp-home/game.png",
                        title: "游戏",
                        detail: "休闲娱乐"
                    } ],
                    isShow: !1,
                    isIos: !1,
                    downLoad: !0
                };
            },
            components: {
                container: s.a,
                card: o.a
            },
            created: function() {},
            mounted: function() {
                this.downLoad = !0, console.info("index页面");
            },
            methods: {
                xuyang: function() {
                    var t = wx.getStorageSync("token");
                    console.info("token=>" + t), wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/activity/xuyang-test/xcx.html@token*" + t
                    });
                },
                clickGuotie: function() {
                    wx.navigateTo({
                        url: "/pages/guotie/main"
                    });
                },
                goBanner: function() {
                    wx.reportAnalytics("click_banner_playulb", {}), wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/activity/test/play/index.html"
                    });
                },
                listenClick: function(t) {
                    console.info(t), 0 === t ? wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/upc/prod/root/index.html$/list/public-fund/"
                    }) : 1 === t ? (wx.reportAnalytics("click_info", {}), wx.navigateTo({
                        url: "/pages/jump/main?link=https://alliance.xuangubao.cn/xingye/jinrijihuiH5"
                    })) : 2 === t ? (wx.reportAnalytics("click_tools", {}), wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/activity/quote-tool/index.html$/"
                    })) : 3 === t ? (wx.reportAnalytics("click_playulb", {}), wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/h5help/index.html"
                    })) : 4 === t ? (console.info("game"), wx.reportAnalytics("click_game", {}), wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/wechat/mini-apps/k-line-ai/index.html$drawing"
                    })) : 5 === t && (wx.reportAnalytics("click_quote", {}), wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/activity/mini-quote/index.html$/"
                    }));
                },
                clickCard: function(t) {
                    console.info(t), 0 === t ? wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/mhall/main.html@accesschnl*mp$/serv/help/tradeapp"
                    }) : 1 === t && wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/wechat/mini-apps/k-line-ai/index.html$drawing"
                    });
                },
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
                    wx.reportAnalytics("click_download", {
                        download_num: ""
                    });
                    var i = this;
                    wx.getSystemInfo({
                        success: function(t) {
                            console.log(t.platform), "ios" === t.platform ? (i.isShow = !1, i.isIos = !0) : (t.platform, 
                            i.isShow = !1, i.isIos = !0);
                        }
                    });
                },
                cancel: function(t) {
                    this.isShow = !1;
                },
                toApp: function(t) {
                    var i = this;
                    wx.getSystemInfo({
                        success: function(t) {
                            console.log(t.platform), "ios" === t.platform ? (i.isShow = !1, i.isIos = !0) : (t.platform, 
                            i.isShow = !1, i.isIos = !0);
                        }
                    });
                },
                close: function() {
                    this.isIos = !1;
                },
                preventTouchMove: function(t) {}
            },
            onShareAppMessage: function(t) {
                return wx.showShareMenu({
                    withShareTicket: !0
                }), {
                    title: "优理宝，懂投资，更懂你",
                    path: "/pages/index/main",
                    success: function(t) {
                        console.log(t), wx.showShareMenu({
                            withShareTicket: !0
                        });
                    }
                };
            },
            onLoad: function() {
                a()(this.$data, this.$options.data());
            },
            onShow: function() {}
        };
    },
    56: function(t, i, n) {
        var e = n(58), a = n(59), s = !1, o = n(0)(e.a, a.a, function(t) {
            s || n(57);
        }, "data-v-2ce9f3a7", null);
        o.options.__file = "src\\components\\container.vue", o.esModule && Object.keys(o.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] container.vue: functional components are not supported with templates, they should use render functions."), 
        i.a = o.exports;
    },
    57: function(t, i) {},
    58: function(t, i, n) {
        i.a = {
            props: [ "data" ],
            methods: {
                handleClick: function() {
                    this.$emit("listenClick", this.data.index);
                }
            }
        };
    },
    59: function(t, i, n) {
        var e = function() {
            var t = this, i = t.$createElement, n = t._self._c || i;
            return n("div", {
                staticClass: "content",
                attrs: {
                    eventid: "0_0"
                },
                on: {
                    click: t.handleClick
                }
            }, [ t.data.src ? n("img", {
                attrs: {
                    src: t.data.src,
                    alt: ""
                }
            }) : t._e(), t._v(" "), n("h3", {
                class: t.data.title.length > 2 ? "long" : ""
            }, [ t._v(t._s(t.data.title)) ]), t._v(" "), n("div"), t._v(" "), n("text", [ t._v(t._s(t.data.detail)) ]) ], 1);
        }, a = [];
        e._withStripped = !0;
        var s = {
            render: e,
            staticRenderFns: a
        };
        i.a = s;
    },
    63: function(t, i, n) {
        var e = function() {
            var t = this, i = t.$createElement, n = t._self._c || i;
            return n("div", {
                staticClass: "container"
            }, [ n("div", {
                staticClass: "banner",
                attrs: {
                    id: "banner",
                    eventid: "1_0"
                },
                on: {
                    click: t.goBanner
                }
            }, [ n("img", {
                attrs: {
                    src: "https://static.xyzq.cn/activity/mp-images/mp-home/banner.png",
                    alt: ""
                }
            }) ]), t._v(" "), n("div", {
                staticClass: "card-src"
            }, [ n("div", {
                attrs: {
                    id: "quote"
                }
            }, [ n("container", {
                attrs: {
                    data: t.list[5],
                    eventid: "3_1",
                    mpcomid: "0"
                },
                on: {
                    listenClick: t.listenClick
                }
            }) ], 1), t._v(" "), n("div", {
                attrs: {
                    id: "tools"
                }
            }, [ n("container", {
                attrs: {
                    data: t.list[2],
                    eventid: "3_2",
                    mpcomid: "1"
                },
                on: {
                    listenClick: t.listenClick
                }
            }) ], 1), t._v(" "), n("div", {
                attrs: {
                    id: "info"
                }
            }, [ n("container", {
                attrs: {
                    data: t.list[1],
                    eventid: "3_3",
                    mpcomid: "2"
                },
                on: {
                    listenClick: t.listenClick
                }
            }) ], 1), t._v(" "), n("div", {
                attrs: {
                    id: "playulb"
                }
            }, [ n("container", {
                attrs: {
                    data: t.list[3],
                    eventid: "3_4",
                    mpcomid: "3"
                },
                on: {
                    listenClick: t.listenClick
                }
            }) ], 1), t._v(" "), n("div", {
                attrs: {
                    id: "game"
                }
            }, [ n("container", {
                attrs: {
                    data: t.list[4],
                    eventid: "3_5",
                    mpcomid: "4"
                },
                on: {
                    listenClick: t.listenClick
                }
            }) ], 1) ]), t._v(" "), t.downLoad ? n("div", {
                staticClass: "download"
            }, [ n("div", {
                staticClass: "down",
                attrs: {
                    id: "download",
                    eventid: "2_6"
                },
                on: {
                    click: t.launchAppError
                }
            }) ]) : t._e(), t._v(" "), t.isShow ? n("div", {
                staticClass: "musk-box"
            }, [ n("div", {
                staticClass: "pop-up"
            }, [ n("div", {
                staticClass: "musk-p"
            }, [ n("p", [ t._v("系统检测到您未安装优理宝APP，"), n("br"), t._v("是否要下载并安装?") ], 1) ], 1), t._v(" "), n("div", {
                staticClass: "musk-click musk-click1",
                attrs: {
                    eventid: "3_7"
                },
                on: {
                    click: t.cancel
                }
            }, [ t._v("取消") ]), t._v(" "), n("div", {
                staticClass: "musk-click musk-click2",
                attrs: {
                    eventid: "3_8"
                },
                on: {
                    click: t.toApp
                }
            }, [ t._v("下载并安装") ]) ]) ]) : t._e(), t._v(" "), t.isIos ? n("div", {
                staticClass: "musk-box"
            }, [ n("div", {
                staticClass: "pop-up-ios"
            }, [ n("div", {
                staticClass: "closeMusk",
                attrs: {
                    eventid: "3_9"
                },
                on: {
                    click: t.close
                }
            }), t._v(" "), n("p", [ t._v("如需下载,请长按网址复制后使用"), n("br"), t._v("浏览器访问") ], 1), t._v(" "), n("h4", [ n("text", {
                attrs: {
                    selectable: "true",
                    eventid: "4_10"
                },
                on: {
                    click: t.copyAddr
                }
            }, [ t._v("https://wap.xyzq.com.cn/") ]) ]) ], 1) ]) : t._e() ]);
        }, a = [];
        e._withStripped = !0;
        var s = {
            render: e,
            staticRenderFns: a
        };
        i.a = s;
    }
}, [ 24 ]);