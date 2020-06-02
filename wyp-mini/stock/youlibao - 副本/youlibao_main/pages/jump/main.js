require("../../common/manifest.js"), require("../../common/vendor.js"), global.webpackJsonpMpvue([ 7 ], {
    64: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(1), n = i.n(a), c = i(65);
        new n.a(c.a).$mount();
    },
    65: function(t, e, i) {
        var a = i(67), n = i(68), c = !1, s = i(0)(a.a, n.a, function(t) {
            c || i(66);
        }, "data-v-7db1098a", null);
        s.options.__file = "src\\pages\\jump\\index.vue", s.esModule && Object.keys(s.esModule).some(function(t) {
            return "default" !== t && "__" !== t.substr(0, 2);
        }) && console.error("named exports are not supported in *.vue files."), s.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), 
        e.a = s.exports;
    },
    66: function(t, e) {},
    67: function(t, e, i) {
        e.a = {
            name: "jump",
            data: function() {
                return {
                    isLogin: !1,
                    link: "",
                    link2: "",
                    code: "",
                    shareData: {
                        title: "兴业证券极速行情",
                        desc: " ",
                        intoUrl: "https://static.xyzq.cn/activity/quotes/index.html#/",
                        outUrl: "https://static.xyzq.cn/activity/quotes/index.html#/",
                        imgUrl: "https://static.xyzq.cn/activity/quotes/static/images/share_icon.jpg"
                    },
                    userInfo: {}
                };
            },
            onLoad: function(t) {
                console.log(t);
                var e = t.link;
                e ? ((e.indexOf("@") > -1 || e.indexOf("$") > -1) && (e = e.replace(/@/g, "?").replace(/\^/g, "&").replace(/\*/g, "=").replace(/\$/g, "#")), 
                console.log(e), this.link = e) : this.link = "https://static.xyzq.cn/activity/pjm-test/quotes/index.html#/";
            },
            onShareAppMessage: function(t) {
                var e = this;
                wx.showShareMenu({
                    withShareTicket: !0
                }), console.log(t), console.log(1, e.link2);
                var i = "";
                e.link2 && t.webViewUrl.indexOf(e.link2) > -1 ? i = e.link2 : (i = t.webViewUrl, 
                e.shareData.title = "优理宝，懂投资，更懂你"), (i.indexOf("?") > -1 || i.indexOf("#") > -1) && (i = i.replace(/\?/g, "@").replace(/&/g, "^").replace(/=/g, "*").replace(/#/g, "$")), 
                console.log(i);
                var a = e.code ? "(" + e.code + ")" : "", n = "";
                switch (t.webViewUrl) {
                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./scan":
                    n = "期权纵览";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./reserveMore":
                    n = "备兑策略";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./insuranceMore":
                    n = "保险策略";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./leverMore":
                    n = "杠杆策略";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./lotteryMore":
                    n = "彩票策略";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./bottomFishing":
                    n = "抄底策略";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./financialProducts":
                    n = "理财产品+买入期权";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./vestingDate":
                    n = "行权日买入认沽期权策略";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./tool":
                    n = "维持保证金监控";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./computeCounter":
                    n = "期权义务仓保证金计算器";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./riskOpeningTrading":
                    n = "期权实时风险度调整（开市交易时段）";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./riskDayEnd":
                    n = "期权风险度调整（日终清算时段）";
                    break;

                  case "https://static.xyzq.cn/activity/MF-calculator2/index.html#/credit":
                    n = "信用账户可取现金计算";
                    break;

                  case "https://static.xyzq.cn/activity/MF-calculator2/index.html#/maintenance":
                    n = "追保到位计算";
                    break;

                  case "https://static.xyzq.cn/activity/MF-calculator2/index.html#/position":
                    n = "维保比例计算";
                    break;

                  case "https://static.xyzq.cn/activity/MF-calculator2/index.html#/risk":
                    n = "两融账户风险计算";
                    break;

                  case "https://static.xyzq.cn/activity/MF-calculator2/index.html#/marginParam":
                    n = "融资融券业务参数";
                    break;

                  case "https://static.xyzq.cn/activity/MF-calculator2/index.html#/subjectInfo":
                    n = "标的信息";
                    break;

                  case "https://static.xyzq.cn/activity/smart-option3/index.html#/./optionStraddleStrategy":
                    n = "期权跨式策略";
                    break;

                  case "https://static.xyzq.cn/activity/financial-tool/index.html#/./daysCalculate":
                    n = "天数计算";
                    break;

                  case "https://static.xyzq.cn/activity/financial-tool/index.html#/./interestCompare":
                    n = "利息计算";
                    break;

                  default:
                    n = "";
                }
                return console.log("xxx" + n), n && (console.log("yyy" + n), wx.request({
                    url: "https://estock.xyzq.com.cn/activity2/quote/memberMarketing/addEvent",
                    data: {
                        event: "转发数|" + n
                    },
                    success: function(t) {
                        console.info(t);
                    },
                    fail: function(t) {
                        console.info(t);
                    }
                })), {
                    title: e.shareData.title + a,
                    path: "/pages/jump/main?link=" + i,
                    success: function(t) {
                        console.log(t), wx.showShareMenu({
                            withShareTicket: !0
                        });
                    },
                    fail: function(t) {
                        console.info(t);
                    }
                };
            },
            methods: {
                bindmessage: function(t) {
                    console.log("webview返回的信息"), console.log(t);
                    var e = t.mp.detail.data;
                    this.link2 = e[e.length - 1].link, this.code = e[e.length - 1].code || "", this.shareData.title = e[e.length - 1].title || "兴业证券极速行情";
                }
            },
            created: function() {}
        };
    },
    68: function(t, e, i) {
        var a = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "container"
            }, [ i("web-view", {
                attrs: {
                    src: t.link,
                    eventid: "1_0",
                    mpcomid: "0"
                },
                on: {
                    message: t.bindmessage
                }
            }) ], 1);
        }, n = [];
        a._withStripped = !0;
        var c = {
            render: a,
            staticRenderFns: n
        };
        e.a = c;
    }
}, [ 64 ]);