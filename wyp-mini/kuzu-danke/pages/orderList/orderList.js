(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/orderList/orderList" ], {
    "7dd7": function(t, e, a) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(a("5f18")), c = i(a("733e")), r = {
                data: function() {
                    return {
                        pageFlag: 0,
                        checkAllFlag: !1,
                        checkflagArr: [],
                        list: [],
                        list1: [],
                        allMoney: "0.00"
                    };
                },
                onLoad: function() {
                    var e = this;
                    e.checkflagArr = [], console.log("onLoad");
                    var a = t.getStorageSync("userId"), i = [];
                    (0, c.default)(n.default.url + "/web-api/applet-api/bill/list", {
                        app_id: "wx024695259e1a68cb",
                        city_id: t.getStorageSync("cityStorageNum"),
                        user_id: t.getStorageSync("userId"),
                        channel: "paid",
                        userid: a
                    }, "GET", !1, {
                        app_id: "wx024695259e1a68cb",
                        city_id: t.getStorageSync("cityStorageNum"),
                        user_id: t.getStorageSync("userId")
                    }).then(function(t) {
                        "0000" == t.data.code && (i = t.data.data, console.log(i), e.disposePaidList(i));
                    }), (0, c.default)(n.default.url + "/web-api/applet-api/bill/list", {
                        app_id: "wx024695259e1a68cb",
                        city_id: t.getStorageSync("cityStorageNum"),
                        user_id: t.getStorageSync("userId"),
                        channel: "unpaid",
                        userid: a
                    }, "GET", !1, {
                        app_id: "wx024695259e1a68cb",
                        city_id: t.getStorageSync("cityStorageNum"),
                        user_id: t.getStorageSync("userId")
                    }).then(function(t) {
                        "0000" == t.data.code && (e.list = t.data.data);
                    });
                },
                methods: {
                    disposePaidList: function(t) {
                        var e = this, a = [], i = [];
                        t.forEach(function(t) {
                            t.is_pay || -1 != i.indexOf(t.paid_at) ? !t.is_pay && i.indexOf(t.paid_at) > -1 && a[i.indexOf(t.paid_at)].data.push(t) : (a.push({
                                time: t.paid_at.slice(0, 4) + t.paid_at.slice(5, 7),
                                data: [ t ]
                            }), i.push(t.paid_at));
                        }), e.list1 = a.sort(function(t, e) {
                            return t.time - e.time;
                        });
                    },
                    tabswitch: function(t) {
                        this.pageFlag = t.currentTarget.dataset.flag;
                    },
                    checkListItem: function(t) {
                        var e = this, a = e.checkflagArr;
                        e.checkflagArr = e.isInCheckList(a, t.currentTarget.dataset.id);
                        var i = 0;
                        e.list.forEach(function(t) {
                            a.indexOf(t.id) > -1 && t.is_pay && (i += t.should_money);
                        }), e.allMoney = i, e.checkflagArr.length < e.list.length ? e.checkAllFlag = !1 : e.checkflagArr.length == e.list.length && (e.checkAllFlag = !0);
                    },
                    isInCheckList: function(t, e) {
                        return t.indexOf(e) > -1 ? t.splice(t.indexOf(e), 1) : t.push(e), t;
                    },
                    checkAll: function(t) {
                        var e = this;
                        if (e.checkAllFlag = !t.currentTarget.dataset.flag, e.checkAllFlag) {
                            var a = 0, i = [];
                            e.list.forEach(function(t) {
                                t.is_pay && (a += t.should_money, i.push(t.id));
                            }), e.allMoney = a, e.checkflagArr = i;
                        } else e.allMoney = 0, e.checkflagArr = [];
                    },
                    pay: function() {
                        var e = this;
                        t.navigateTo({
                            url: "../orderPay/orderPay?idList=" + e.checkflagArr
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, a("543d").default);
    },
    a38f: function(t, e, a) {},
    cb31: function(t, e, a) {
        a.r(e);
        var i = a("7dd7"), n = a.n(i);
        for (var c in i) "default" !== c && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(c);
        e.default = n.a;
    },
    cb81: function(t, e, a) {
        var i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.list, function(e, a) {
                var i = t.checkflagArr.indexOf(e.id);
                return {
                    $orig: t.__get_orig(e),
                    g0: i
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, n = [];
        a.d(e, "b", function() {
            return i;
        }), a.d(e, "c", function() {
            return n;
        }), a.d(e, "a", function() {});
    },
    d941: function(t, e, a) {
        var i = a("a38f");
        a.n(i).a;
    },
    dd3f: function(t, e, a) {
        a.r(e);
        var i = a("cb81"), n = a("cb31");
        for (var c in n) "default" !== c && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(c);
        a("d941");
        var r = a("f0c5"), l = Object(r.a)(n.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = l.exports;
    },
    e156: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("e027"), e(a("66fd")), t(e(a("dd3f")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "e156", "common/runtime", "common/vendor" ] ] ]);