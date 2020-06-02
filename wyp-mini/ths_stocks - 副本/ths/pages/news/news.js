(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/news/news" ], {
    "0726": function(e, t, n) {
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    5032: function(e, t, n) {
        var a = n("ee09");
        n.n(a).a;
    },
    "5c0c": function(e, t, n) {
        (function(e) {
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        r(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n("0c82"), c = n("6f5d"), s = 1, l = "", u = "1.4.5", f = {
                data: function() {
                    return {
                        list: [],
                        loading: !1,
                        nomore: !1,
                        readBefore: [],
                        reGet: !1,
                        onShareAppMessage: function(e) {
                            return {
                                path: "/pages/news/news"
                            };
                        },
                        onLoad: function() {
                            s = 1, wx.showShareMenu();
                            var e = wx.getStorageSync("readBefore") || [];
                            this.setData({
                                readBefore: e
                            }), this.methods.getReqUrl.call(this, u);
                        },
                        methods: {
                            getReqUrl: function(e) {
                                var t = this;
                                i._get({
                                    url: c.getReqUrl(e)
                                }).then(function(e) {
                                    var n = e.data;
                                    n.headline && (l = n.headline, t.methods.getData.call(t, s));
                                }).catch(function(e) {
                                    console.error(e), t.reGet = !0;
                                });
                            },
                            getData: function(e, t) {
                                var n = this;
                                this.nomore || (this.setData({
                                    loading: !0
                                }), i._get({
                                    url: c.newsList(e, l)
                                }).then(function(a) {
                                    a.data && !a.data.more && n.setData({
                                        nomore: !0
                                    }), 0 === a.status_code ? (n.loading = !1, 1 === e ? n.setData({
                                        loading: !1,
                                        list: n.methods.formatData.call(n, a.data.list)
                                    }) : n.setData({
                                        loading: !1,
                                        list: n.list.concat(n.methods.formatData.call(n, a.data.list))
                                    }), s++) : n.setData({
                                        loading: !1,
                                        nomore: !0
                                    }), t && t();
                                }).catch(function(e) {
                                    console.log("获取数据失败了"), n.setData({
                                        loading: !1,
                                        nomore: !0
                                    }), console.error(e);
                                }));
                            },
                            formatData: function(e) {
                                var t = this, n = [];
                                return e.map(function(e) {
                                    n.push(o({}, e, {
                                        readBefore: t.readBefore.indexOf(e.seq) >= 0,
                                        ctime: i._timeAgo(1e3 * e.ctime)
                                    }));
                                }), n;
                            }
                        }
                    };
                },
                props: {},
                onPullDownRefresh: function() {
                    this.loading || (this.setData({
                        nomore: !1
                    }), s = 1, this.methods.getData.call(this, s, function() {
                        wx.stopPullDownRefresh();
                    }));
                },
                onReachBottom: function() {
                    this.loading || this.methods.getData.call(this, s);
                },
                onLoad: function() {
                    s = 1, wx.showShareMenu();
                    var e = wx.getStorageSync("readBefore") || [];
                    this.setData({
                        readBefore: e
                    }), this.methods.getReqUrl.call(this, u);
                },
                methods: {
                    reGetData: function() {
                        var e = this;
                        this.reGet = !1, setTimeout(function() {
                            e.methods.getReqUrl.call(e, u);
                        }, 1e3);
                    },
                    handleShowArticle: function(t) {
                        var n = t.currentTarget.dataset.seq;
                        if (n) {
                            e.navigateTo({
                                url: "/pages/article/article?seq=".concat(n)
                            });
                            var a = this.readBefore || [];
                            a.unshift(n);
                            var o = this.list;
                            o.map(function(e) {
                                e.seq === n && (e.readBefore = !0);
                            }), this.setData({
                                readBefore: a,
                                list: o
                            }), wx.setStorageSync("readBefore", a);
                        }
                    }
                }
            };
            t.default = f;
        }).call(this, n("543d").default);
    },
    6385: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("efb7"), n("921b"), t(n("66fd")), e(t(n("cbac")).default);
        }).call(this, n("543d").createPage);
    },
    "715e": function(e, t, n) {
        n.r(t);
        var a = n("5c0c"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    cbac: function(e, t, n) {
        n.r(t);
        var a = n("0726"), o = n("715e");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("5032");
        var i = n("f0c5"), c = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = c.exports;
    },
    ee09: function(e, t, n) {}
}, [ [ "6385", "common/runtime", "common/vendor" ] ] ]);