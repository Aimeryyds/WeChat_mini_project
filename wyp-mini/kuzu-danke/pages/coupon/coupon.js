(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/coupon/coupon" ], {
    "0317": function(t, e, n) {
        var o = n("3c17");
        n.n(o).a;
    },
    3512: function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "3c17": function(t, e, n) {},
    "43b2": function(t, e, n) {
        n.r(e);
        var o = n("3512"), a = n("a8d2");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("0317");
        var r = n("f0c5"), i = Object(r.a)(a.default, o.b, o.c, !1, null, "57b1dd72", null, !1, o.a, void 0);
        e.default = i.exports;
    },
    "94bd": function(t, e, n) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t) {
                return c(t) || i(t) || r(t) || u();
            }
            function u() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function r(t, e) {
                if (t) {
                    if ("string" == typeof t) return s(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0;
                }
            }
            function i(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }
            function c(t) {
                if (Array.isArray(t)) return s(t);
            }
            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var l = o(n("5f18")), d = o(n("ba34")), f = getApp();
            f.sensors || (f.sensors = f.globalData.sensors);
            var p = {
                data: function() {
                    return {
                        currentTab: 0,
                        userId: "254458",
                        type: "UNUSE",
                        page: 1,
                        size: 10,
                        all_list: [],
                        disable_con: !0,
                        coupon_code: "",
                        onoff: !1,
                        noCoupon: !1,
                        all_page: "",
                        onoff_quick: !0,
                        tabDatas: [ {
                            name: "未使用",
                            isSelected: !0,
                            useStatus: "UNUSE"
                        }, {
                            name: "已过期",
                            isSelected: !1,
                            useStatus: "EXPIRED"
                        }, {
                            name: "已使用",
                            isSelected: !1,
                            useStatus: "USED"
                        } ],
                        isServerError: !1
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    console.log(t.getStorageSync("userInfo")), t.getStorageSync("userInfo").user_id && (n.userId = t.getStorageSync("userInfo").user_id, 
                    n.couponList());
                },
                onReachBottom: function() {
                    this.loadmore();
                },
                components: {},
                props: {},
                methods: {
                    explain: function() {
                        f.sensors.track("Xcx_My_YouHuiQuan_shuoming_click", {
                            shiyongshuoming: "点击使用说明"
                        }), this.onoff = !0;
                    },
                    swichNav: function(t) {
                        var e = this;
                        this.onoff_quick && (this.onoff_quick = !1, this.currentTab === t.target.dataset.current ? this.onoff_quick = !0 : (this.all_list = [], 
                        this.page = 1, this.currentTab = t.target.dataset.current, this.tabDatas.forEach(function(t, n) {
                            e.currentTab === n ? (t.isSelected = !0, e.type = t.useStatus, e.couponList(), f.sensors.track("Xcx_My_YouHuiQuan_Tab_click", {
                                TabName: e.type
                            })) : t.isSelected = !1;
                        })));
                    },
                    coupon: function(t) {
                        this.coupon_code = t.detail.value;
                    },
                    exchange: function() {
                        var e = this, n = this;
                        f.sensors.track("Xcx_My_YouHuiQuan_duihuan_click", {
                            duihuan: "点击兑换按钮"
                        }), n.disable_con && (this.disable_con = !1, (0, d.default)(l.default.new_url + "/coupons/bindings", {
                            operateMode: 4,
                            couponCode: n.coupon_code,
                            userId: t.getStorageSync("userId")
                        }, "POST", !0).then(function(t) {
                            console.log(t), 0 === t.data.code ? (wx.showToast({
                                title: t.data.message,
                                icon: "none",
                                duration: 2e3
                            }), n.couponList(), e.disable_con = !0, f.sensors.track("Xcx_My_YouHuiQuan_duihuan_click", {
                                duihuan_success: "兑换成功"
                            })) : (wx.showToast({
                                title: t.data.message,
                                icon: "none",
                                duration: 2e3
                            }), e.disable_con = !0);
                        }));
                    },
                    couponList: function() {
                        var e = this, n = this;
                        (0, d.default)(l.default.new_url + "/coupons", {
                            operateMode: 1,
                            useStatus: n.type,
                            pageNumber: n.page,
                            pageSize: n.size,
                            userId: t.getStorageSync("userId")
                        }, "GET", !0).then(function(t) {
                            console.log(t), t.data || (e.isServerError = !0);
                            var o = t.data.result.content;
                            n.all_page = t.data.result.totalPages, o && Array.isArray(o) && o.length > 0 ? (n.noCoupon = !1, 
                            o.forEach(function(t) {
                                t.expend = !1;
                            }), n.all_list = [].concat(a(n.all_list), a(o))) : n.noCoupon = !0, e.onoff_quick = !0;
                        }).catch(function(t) {
                            console.log(t);
                        });
                    },
                    checkRules: function(t) {
                        f.sensors.track("Xcx_My_YouHuiQuan_guize_click", {
                            shiyongguize: "点击" + this.type + "下的使用规则"
                        }), this.all_list.forEach(function(e) {
                            e.id === t && (e.expend = !e.expend);
                        });
                    },
                    loadmore: function() {
                        this.all_page > this.page ? (this.page = this.page + 1, this.couponList()) : wx.showToast({
                            title: "已经没有更多优惠券了~",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                },
                computed: {
                    computedClass: function() {
                        return "UNUSE" === this.type ? "" : "disabledColor";
                    },
                    computedBorder: function() {
                        return "UNUSE" === this.type ? "" : "disabledBorColor";
                    },
                    isInputed: function() {
                        return "" === this.coupon_code ? "" : "changeColor";
                    }
                },
                watch: {}
            };
            e.default = p;
        }).call(this, n("543d").default);
    },
    "9c9f": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("e027"), e(n("66fd")), t(e(n("43b2")).default);
        }).call(this, n("543d").createPage);
    },
    a8d2: function(t, e, n) {
        n.r(e);
        var o = n("94bd"), a = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = a.a;
    }
}, [ [ "9c9f", "common/runtime", "common/vendor" ] ] ]);