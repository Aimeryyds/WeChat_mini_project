require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 4 ], {
    74: function(e, o, n) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var t = n(1), a = n.n(t), s = n(75);
        new a.a(s.a).$mount();
    },
    75: function(e, o, n) {
        var t = n(77), a = n(78), s = !1, i = n(0)(t.a, a.a, function(e) {
            s || n(76);
        }, "data-v-5ce43955", null);
        i.options.__file = "src\\pages\\login_button\\index.vue", i.esModule && Object.keys(i.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), i.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        o.a = i.exports;
    },
    76: function(e, o) {},
    77: function(e, o, n) {
        o.a = {
            name: "index",
            data: function() {
                return {
                    code: ""
                };
            },
            components: {},
            mounted: function() {
                var e = this;
                wx.login({
                    success: function(o) {
                        o.code && (console.info("res.code=>" + o.code), e.code = o.code);
                    }
                });
            },
            methods: {
                bindGetUserInfo: function(e) {
                    var o = this;
                    console.log(e.mp.detail), e.mp.detail.rawData ? (console.log("用户按了允许授权按钮"), wx.request({
                        url: "https://xyzq.mynatapp.cc/sm/getSessionKey",
                        data: {
                            js_code: o.code
                        },
                        success: function(e) {
                            console.info(e), wx.setStorageSync("token", e.data.data);
                            var o = wx.getStorageSync("token");
                            console.info("token=>" + o);
                        },
                        fail: function(e) {
                            console.info(e);
                        }
                    })) : console.log("用户按了拒绝按钮");
                },
                getPhoneNumber: function(e) {
                    var o = this;
                    console.log(e), "getPhoneNumber:fail user deny" == e.mp.detail.errMsg ? console.log("用户拒绝授权") : wx.request({
                        url: "https://xyzq.mynatapp.cc/sm/decode/mobilePhone",
                        method: "POST",
                        data: {
                            encrypted: e.mp.detail.encryptedData,
                            iv: e.mp.detail.iv,
                            code: o.code
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            console.info(e);
                            var o = e.data.data.phone;
                            console.info(o);
                            var n = "/pages/login/main?phone=" + o;
                            wx.navigateTo({
                                url: n
                            });
                        },
                        fail: function(e) {
                            console.info(e);
                        }
                    });
                },
                goClause: function() {
                    wx.navigateTo({
                        url: "/pages/jump/main?link=https://static.xyzq.cn/common/protocol/inetprivateprotocol/inet_private_protocol.html?tdsourcetag=s_pcqq_aiomsg"
                    });
                }
            },
            onShareAppMessage: function(e) {
                return wx.showShareMenu({
                    withShareTicket: !0
                }), {
                    title: "优理宝，懂投资，更懂你",
                    path: "/pages/index/main",
                    success: function(e) {
                        console.log(e), wx.showShareMenu({
                            withShareTicket: !0
                        });
                    }
                };
            },
            onLoad: function(e) {}
        };
    },
    78: function(e, o, n) {
        var t = function() {
            var e = this, o = e.$createElement, n = e._self._c || o;
            return n("div", {
                staticClass: "container"
            }, [ e._m(0), e._v(" "), n("h3", [ e._v("兴业证券优理宝") ]), e._v(" "), n("button", {
                staticClass: "wx-login2",
                attrs: {
                    "open-type": "getPhoneNumber",
                    eventid: "1_0"
                },
                on: {
                    getphonenumber: e.getPhoneNumber
                }
            }, [ e._v("手机号登录") ]), e._v(" "), n("section", [ e._v("\n    注册即表示您已同意"), n("span", {
                attrs: {
                    eventid: "2_1"
                },
                on: {
                    click: e.goClause
                }
            }, [ e._v("《兴业证券互联网平台服务协议及隐私条款》") ]), e._v("，未注册手机号码将自动注册登录。\n  ") ]) ], 1);
        }, a = [ function() {
            var e = this, o = e.$createElement, n = e._self._c || o;
            return n("div", {
                staticClass: "logo"
            }, [ n("img", {
                attrs: {
                    src: "https://static.xyzq.cn/activity/mp-images/mp-home/login_logo_small.png",
                    alt: ""
                }
            }) ]);
        } ];
        t._withStripped = !0;
        var s = {
            render: t,
            staticRenderFns: a
        };
        o.a = s;
    }
}, [ 74 ]);