require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 5 ], {
    79: function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1), a = o.n(n), i = o(80);
        new a.a(i.a).$mount();
    },
    80: function(e, t, o) {
        var n = o(82), a = o(83), i = !1, s = o(0)(n.a, a.a, function(e) {
            i || o(81);
        }, "data-v-23181412", null);
        s.options.__file = "src\\pages\\login\\index.vue", s.esModule && Object.keys(s.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), s.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        t.a = s.exports;
    },
    81: function(e, t) {},
    82: function(e, t, o) {
        t.a = {
            name: "index",
            data: function() {
                return {
                    phone: "",
                    code: "",
                    codeStr: "发送验证码",
                    intervalTime: null,
                    codeDisabled: !1
                };
            },
            components: {},
            destroyed: function() {
                this.intervalTime && clearInterval(this.intervalTime);
            },
            mounted: function() {
                console.log(this.$root.$mp.query), this.phone = this.$root.$mp.query.phone;
            },
            methods: {
                sendCode: function() {
                    var e = this;
                    wx.request({
                        url: "https://wechat.xyzq.cn/wechat/mp/home/unifyAccount",
                        method: "POST",
                        data: {
                            act: "sendPhoneCode",
                            mobile: e.phone
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            if (console.info(t), 0 === t.data.code) {
                                var o = 60;
                                e.codeDisabled = !0, e.codeStr = o + "s重新发送", e.intervalTime = setInterval(function() {
                                    o ? (o--, e.codeStr = o + "s重新发送") : (clearInterval(e.intervalTime), e.codeDisabled = !1, 
                                    e.codeStr = "获取验证码");
                                }, 1e3);
                            } else console.info(t.data.message);
                        },
                        fail: function(e) {
                            console.info(e);
                        }
                    });
                },
                goLogin: function() {
                    wx.showToast({
                        title: "加载中",
                        icon: "loading",
                        duration: 1e4
                    });
                    var e = this;
                    wx.request({
                        url: "https://xyzq.mynatapp.cc/sm/phone/login",
                        method: "POST",
                        data: {
                            phone: e.phone,
                            code: e.code
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            if (wx.hideToast(), console.info(e), 0 == e.data.meta.code) {
                                wx.setStorageSync("token", e.data.data);
                                var t = wx.getStorageSync("token");
                                console.info("token=>" + t), wx.navigateTo({
                                    url: "/pages/index/main"
                                });
                            }
                        },
                        fail: function(e) {
                            console.info(e);
                        },
                        complete: function() {}
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
    83: function(e, t, o) {
        var n = function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {
                staticClass: "container"
            }, [ e._m(0), e._v(" "), o("h3", [ e._v("兴业证券优理宝") ]), e._v(" "), o("div", {
                staticClass: "phone"
            }, [ o("img", {
                attrs: {
                    src: "https://static.xyzq.cn/activity/mp-images/mp-home/icon_phone.svg",
                    alt: ""
                }
            }), e._v(" "), o("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: e.phone,
                    expression: "phone"
                } ],
                attrs: {
                    type: "tel",
                    placeholder: "手机号",
                    disabled: "",
                    eventid: "2_0"
                },
                domProps: {
                    value: e.phone
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.phone = t.target.value);
                    }
                }
            }) ]), e._v(" "), o("div", {
                staticClass: "code"
            }, [ o("div", [ o("img", {
                attrs: {
                    src: "https://static.xyzq.cn/activity/mp-images/mp-home/icon_code.svg",
                    alt: ""
                }
            }), e._v(" "), o("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: e.code,
                    expression: "code"
                } ],
                ref: "code",
                attrs: {
                    type: "tel",
                    placeholder: "验证码",
                    eventid: "3_1"
                },
                domProps: {
                    value: e.code
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.code = t.target.value);
                    }
                }
            }) ]), e._v(" "), o("button", {
                staticClass: "sendcode",
                class: {
                    disabled: e.codeDisabled
                },
                attrs: {
                    disabled: e.codeDisabled,
                    eventid: "2_2"
                },
                on: {
                    click: e.sendCode
                }
            }, [ e._v(e._s(e.codeStr)) ]) ], 1), e._v(" "), o("button", {
                staticClass: "wx-login",
                attrs: {
                    eventid: "1_3"
                },
                on: {
                    click: e.goLogin
                }
            }, [ e._v("登录") ]), e._v(" "), o("section", [ e._v("\n    注册即表示您已同意"), o("span", {
                attrs: {
                    eventid: "2_4"
                },
                on: {
                    click: e.goClause
                }
            }, [ e._v("《兴业证券互联网平台服务协议及隐私条款》") ]), e._v("，未注册手机号码将自动注册登录。\n  ") ]) ], 1);
        }, a = [ function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {
                staticClass: "logo"
            }, [ o("img", {
                attrs: {
                    src: "https://static.xyzq.cn/activity/mp-images/mp-home/login_logo_small.png",
                    alt: ""
                }
            }) ]);
        } ];
        n._withStripped = !0;
        var i = {
            render: n,
            staticRenderFns: a
        };
        t.a = i;
    }
}, [ 79 ]);