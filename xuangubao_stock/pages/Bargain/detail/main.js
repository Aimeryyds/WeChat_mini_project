(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/detail/main" ], {
    "1b81": function(n, a, e) {
        e.r(a);
        var r = e("3cf4"), i = e("7212");
        for (var o in i) "default" !== o && function(n) {
            e.d(a, n, function() {
                return i[n];
            });
        }(o);
        e("a9dc");
        var t = e("2877"), u = Object(t.a)(i.default, r.a, r.b, !1, null, "dbd0716c", null);
        a.default = u.exports;
    },
    "3cf4": function(n, a, e) {
        var r = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
        e.d(a, "a", function() {
            return r;
        }), e.d(a, "b", function() {
            return i;
        });
    },
    7212: function(n, a, e) {
        e.r(a);
        var r = e("ee5e"), i = e.n(r);
        for (var o in r) "default" !== o && function(n) {
            e.d(a, n, function() {
                return r[n];
            });
        }(o);
        a.default = i.a;
    },
    a9dc: function(n, a, e) {
        var r = e("ee28");
        e.n(r).a;
    },
    e59f: function(n, a, e) {
        (function(n) {
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), e("921b"), a(e("66fd")), n(a(e("1b81")).default);
        }).call(this, e("543d").createPage);
    },
    ee28: function(n, a, e) {},
    ee5e: function(n, a, e) {
        function r(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = r(e("4360")), o = e("f8c8"), t = e("ed08"), u = {
            components: {
                TitleBar: function() {
                    return e.e("components/TitleBar").then(e.bind(null, "1e1d"));
                },
                Countdown: function() {
                    return e.e("pages/Bargain/components/Countdown").then(e.bind(null, "846a"));
                },
                GoodsInfo: function() {
                    return e.e("pages/Bargain/detail/GoodsInfo").then(e.bind(null, "9387"));
                },
                BargainCard: function() {
                    return e.e("pages/Bargain/detail/BargainCard").then(e.bind(null, "913f"));
                },
                BargainHistory: function() {
                    return e.e("pages/Bargain/BargainHistory").then(e.bind(null, "8a9f"));
                },
                HelpBargainShare: function() {
                    return e.e("pages/Bargain/Modal/HelpBargainShare").then(e.bind(null, "b7c6"));
                },
                HelpBargainBuy: function() {
                    return e.e("pages/Bargain/Modal/HelpBargainBuy").then(e.bind(null, "1ac8"));
                }
            },
            mixins: [ r(e("c2d7")).default ],
            data: function() {
                return {
                    showHelpBargainShare: !1,
                    helpBargainPrice: 0,
                    showHelpBargainBuy: wx.getStorageSync("_showHelpBargainBuy") && "true" !== wx.getStorageSync("_showHelpBargainBuy")
                };
            },
            computed: {
                userInfo: function() {
                    return i.default.state.user.user;
                }
            },
            watch: {
                bargainInfo: function() {
                    this.bargainInfo && this.userInfo && String(this.bargainInfo.owner) === String(this.userInfo.id) && this.jumpToBargainMain(this.bargainInfo.orderNo);
                },
                userInfo: function() {
                    this.bargainInfo && this.userInfo && String(this.bargainInfo.owner) === String(this.userInfo.id) && this.jumpToBargainMain(this.bargainInfo.orderNo);
                }
            },
            methods: {
                helpBargain: function() {
                    var n = this;
                    this.bargainInfo && ((0, t.ifLogin)() ? ((0, t.dataAnalytic)("bargain_wx_bargain_click"), 
                    (0, o.helpBargain)({
                        bargainOrderNo: this.bargainInfo.orderNo,
                        userId: this.userInfo.id
                    }).then(function(a) {
                        a.bargainMoney && (n.showHelpBargainShare = !0, n.helpBargainPrice = a.bargainMoney / 100), 
                        n.bargainInfo && i.default.dispatch("bargainInfo/getBargainOrderInfo", n.bargainInfo.orderNo);
                    }).catch(function(n) {
                        n.code && n.message && wx.showToast({
                            title: n.message,
                            icon: "none",
                            duration: 1e3
                        }), console.log("helpBargain error", n);
                    })) : (0, t.goToLogin)());
                },
                createBargainOrder: function() {
                    var n = this;
                    if ((0, t.ifLogin)()) {
                        (0, t.dataAnalytic)("bargain_wx_createorder_click");
                        try {
                            if (this.activityInfo.userBargainActivity.lastPayableBargainOrder) return void this.jumpToBargainMain(this.activityInfo.userBargainActivity.lastPayableBargainOrder);
                        } catch (n) {
                            console.error(n);
                        }
                        wx.showLoading({
                            title: "创建砍价单中...",
                            mask: !0
                        }), (0, o.createBargainOrder)().then(function(a) {
                            a.orderNo && (wx.hideLoading(), n.jumpToBargainMain(a.orderNo));
                        }).catch(function(n) {
                            wx.hideLoading(), console.error("createBargainOrder error", n), n.message && wx.showToast({
                                title: n.message,
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    } else (0, t.goToLogin)();
                },
                jumpToBargainMain: function(n) {
                    this.showHelpBargainShare = !1, this.closeHelpBargainBuy(), n || (n = this.bargainInfo.orderNo), 
                    wx.redirectTo({
                        url: "/pages/Bargain/main?bargainOrderNo=".concat(n)
                    });
                },
                closeHelpBargainBuy: function() {
                    this.showHelpBargainBuy = !1, wx.setStorageSync("_showHelpBargainBuy", "true");
                },
                closeShare: function() {
                    this.showHelpBargainShare = !1, wx.setStorageSync("_showHelpBargainBuy", "false");
                }
            },
            onUnload: function() {
                i.default.commit("bargainInfo/updateBargainInfo", null);
            }
        };
        a.default = u;
    }
}, [ [ "e59f", "common/runtime", "common/vendor" ] ] ]);