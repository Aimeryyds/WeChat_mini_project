(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/main" ], {
    5437: function(n, a, e) {
        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var o = t(e("4360")), i = e("f8c8"), r = e("ed08"), u = {
            components: {
                TitleBar: function() {
                    return e.e("components/TitleBar").then(e.bind(null, "1e1d"));
                },
                Countdown: function() {
                    return e.e("pages/Bargain/components/Countdown").then(e.bind(null, "846a"));
                },
                GoodsSwiper: function() {
                    return e.e("pages/Bargain/GoodsSwiper").then(e.bind(null, "6b20"));
                },
                BargainCard: function() {
                    return e.e("pages/Bargain/BargainCard").then(e.bind(null, "12e4"));
                },
                BargainHistory: function() {
                    return e.e("pages/Bargain/BargainHistory").then(e.bind(null, "8a9f"));
                },
                GoodsDetailImage: function() {
                    return e.e("pages/Bargain/GoodsDetailImage").then(e.bind(null, "3fa1"));
                },
                DownLoadAppModal: function() {
                    return e.e("pages/Bargain/Modal/DownLoadApp").then(e.bind(null, "ccfd"));
                },
                BargainDealModal: function() {
                    return e.e("pages/Bargain/Modal/BargainDeal").then(e.bind(null, "d84b"));
                },
                ChooseModelModal: function() {
                    return e.e("pages/Bargain/ChooseModelModal").then(e.bind(null, "a673"));
                },
                ConfirmOrder: function() {
                    return e.e("pages/Bargain/ConfirmOrder").then(e.bind(null, "3c01"));
                }
            },
            mixins: [ t(e("c2d7")).default ],
            computed: {
                userInfo: function() {
                    return o.default.state.user.wxInfo || o.default.state.user.user;
                }
            },
            data: function() {
                return {
                    showDownloadModal: !1,
                    showBargainDealModal: !1,
                    bargainDealModalPrice: 0,
                    productionsList: [],
                    selectedItem: null,
                    selectedSubItem: null,
                    confirmOrder: !1,
                    goodsDetailImages: [ "https://image.xuangubao.cn/FvXqmhAa80dzeVQCDzpytlkumzy4", "https://image.xuangubao.cn/FmZL3JDzcz3IBZIMYd2LNjQdOgwC", "https://image.xuangubao.cn/Fsy-l1ilv_A4RH1tNOYjyV_DueoZ", "https://image.xuangubao.cn/FteeZZLJvQ6RA1K1xYOgsGC6XO7R", "https://image.xuangubao.cn/FnSfwpO5oPQ50NePqGfJH65aoou2", "https://image.xuangubao.cn/FvAskbu85MO3U5KpX4ZbPhz4cqSG", "https://image.xuangubao.cn/FtvMSlNB7rzIpNGWfXZDe2FQAs3T", "https://image.xuangubao.cn/FpbM2l0p2b_D2uU1xYjweRpbSLna", "https://image.xuangubao.cn/FtA9FfCw8STUgmFJZEP3DR4yxv9D", "https://image.xuangubao.cn/FpBXuT6qXAHgAC4KhMRRxSa5irLI", "https://image.xuangubao.cn/FtK5aZb6IN2kgB4oLaIAI7enhc9B", "https://image.xuangubao.cn/FuOvXS6IS6DHJ-70W3-zhb9MGYoW", "https://image.xuangubao.cn/FtnILl32LoDZGok-Ljjd7whM9EBM", "https://image.xuangubao.cn/Fggr6Lk9ZpqJvbR1kKCZNJ2aBPjq" ]
                };
            },
            watch: {
                bargainInfo: function() {
                    var n = this;
                    this.bargainInfo && (this.bargainInfo.bargainLogs && this.bargainInfo.bargainLogs.length || (0, 
                    i.helpBargain)({
                        bargainOrderNo: this.bargainInfo.orderNo
                    }).then(function(a) {
                        n.bargainInfo && o.default.dispatch("bargainInfo/getBargainOrderInfo", n.bargainInfo.orderNo);
                    }).catch(function(n) {
                        console.log("helpBargain error", n);
                    }));
                },
                showDownloadModal: function() {
                    this.showDownloadModal;
                }
            },
            beforeMount: function() {
                var n = this;
                (0, i.getActivityProducts)(1).then(function(a) {
                    var e = a.items;
                    e && e.length && (n.productionsList = e, n.selectedItem = e[0]);
                });
            },
            onShow: function() {
                this.bargainInfo && (this.bargainInfo.minMoney < this.bargainInfo.remainMoneyToPay || (this.bargainDealModalPrice = (this.bargainInfo.totalMoney - this.bargainInfo.minMoney) / 100, 
                this.showBargainDealModal = !0));
            },
            onShareAppMessage: function() {
                return (0, r.dataAnalytic)("bargain_wx_share_click"), this.activityInfo ? {
                    title: this.activityInfo.shareText,
                    path: "/pages/Bargain/detail/main?bargainOrderNo=".concat(this.bargainInfo.orderNo),
                    imageUrl: this.activityInfo.wxMiniProgramSharePicture
                } : {
                    title: "砍砍砍价！",
                    path: "/pages/Bargain/detail/main?bargainOrderNo=".concat(this.bargainInfo.orderNo),
                    imageUrl: ""
                };
            },
            onUnload: function() {
                o.default.commit("bargainInfo/updateBargainInfo", null);
            },
            methods: {
                createBargainOrder: function() {
                    (0, r.dataAnalytic)("bargain_wx_recreateorder_click");
                    try {
                        if (this.activityInfo.userBargainActivity.lastPayableBargainOrder) return void wx.redirectTo({
                            url: "/pages/Bargain/main?bargainOrderNo=".concat(this.activityInfo.userBargainActivity.lastPayableBargainOrder)
                        });
                    } catch (n) {
                        console.error(n);
                    }
                    wx.showLoading({
                        title: "创建砍价单中...",
                        mask: !0
                    }), (0, i.createBargainOrder)().then(function(n) {
                        n.orderNo && (wx.hideLoading(), wx.redirectTo({
                            url: "/pages/Bargain/main?bargainOrderNo=".concat(n.orderNo)
                        }));
                    }).catch(function(n) {
                        wx.hideLoading(), console.error("createBargainOrder error", n), n.message && wx.showToast({
                            title: n.message,
                            icon: "none",
                            duration: 2e3
                        });
                    });
                },
                immediatelyBuy: function() {
                    this.showDownloadModal = !0, (0, r.dataAnalytic)("bargain_wx_buy_click");
                },
                confirm: function() {
                    this.showDownloadModal = !1, this.confirmOrder = !0;
                }
            }
        };
        a.default = u;
    },
    "89a4": function(n, a, e) {
        e.r(a);
        var t = e("5437"), o = e.n(t);
        for (var i in t) "default" !== i && function(n) {
            e.d(a, n, function() {
                return t[n];
            });
        }(i);
        a.default = o.a;
    },
    a784: function(n, a, e) {
        var t = e("df72");
        e.n(t).a;
    },
    df72: function(n, a, e) {},
    e503: function(n, a, e) {
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(a) {
                n.showBargainDealModal = !1, n.showDownloadModal = !0;
            }, n.e1 = function(a) {
                return n.selectedItem = a;
            }, n.e2 = function(a) {
                return n.selectedSubItem = a;
            }, n.e3 = function(a) {
                n.showDownloadModal = !1;
            }, n.e4 = function(a) {
                n.confirmOrder = !1;
            });
        }, o = [];
        e.d(a, "a", function() {
            return t;
        }), e.d(a, "b", function() {
            return o;
        });
    },
    e5cf: function(n, a, e) {
        e.r(a);
        var t = e("e503"), o = e("89a4");
        for (var i in o) "default" !== i && function(n) {
            e.d(a, n, function() {
                return o[n];
            });
        }(i);
        e("a784");
        var r = e("2877"), u = Object(r.a)(o.default, t.a, t.b, !1, null, "4257995f", null);
        a.default = u.exports;
    },
    edfd: function(n, a, e) {
        (function(n) {
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), e("921b"), a(e("66fd")), n(a(e("e5cf")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "edfd", "common/runtime", "common/vendor" ] ] ]);