(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/article/article" ], {
    "40f0": function(t, e, n) {
        var a = n("ff0e");
        n.n(a).a;
    },
    "83cd": function(t, e, n) {
        n.r(e);
        var a = n("c6d0"), o = n("a79b");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("40f0");
        var r = n("f0c5"), i = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    a79b: function(t, e, n) {
        n.r(e);
        var a = n("d5a5"), o = n.n(a);
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        e.default = o.a;
    },
    b698: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("efb7"), n("921b"), e(n("66fd")), t(e(n("83cd")).default);
        }).call(this, n("543d").createPage);
    },
    c6d0: function(t, e, n) {
        var a = {
            "jyf-parser": function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/jyf-parser/jyf-parser") ]).then(n.bind(null, "a744"));
            }
        }, o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, c = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {
            return a;
        });
    },
    d5a5: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, getApp().globalData;
        var a = n("0c82"), o = n("6f5d"), c = (n("6a98"), n("4a54")).$Toast, r = n("88cc").getShareImg, i = null, u = null, l = null, s = {
            data: function() {
                return {
                    seq: 0,
                    title: "",
                    from: "",
                    date: "",
                    wechat: {},
                    fromApp: !1,
                    backToAppShow: !0,
                    artCont: "",
                    loading: !0,
                    isX: !1,
                    article_article: ""
                };
            },
            components: {
                iToast: function() {
                    n.e("iview/toast/index").then(function() {
                        return resolve(n("576b"));
                    }.bind(null, n)).catch(n.oe);
                },
                PageWrap: function() {
                    n.e("components/pageWrap/index").then(function() {
                        return resolve(n("e1f4"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {},
            onShareAppMessage: function() {
                return {
                    title: this.title,
                    imageUrl: l,
                    path: "/pages/index/index?url=".concat("/pages/article/article", "&seq=").concat(this.seq, "&shareType=article"),
                    success: function(t) {},
                    fail: function(t) {}
                };
            },
            onLoad: function(t) {
                var e = this, n = wx.getLaunchOptionsSync();
                this.setData({
                    fromApp: a._isFromApp(n.scene)
                }), getApp().globalData.isX && this.setData({
                    isX: !0
                });
                var i = t.seq;
                this.seq = i, this.setData({
                    loading: !0
                }), a._get({
                    url: o.newsArticle(i)
                }).then(function(t) {
                    if (0 === t.status_code) {
                        e.setData({
                            loading: !1,
                            title: t.data.title || "",
                            from: t.data.source || "",
                            date: a.formatTime(new Date(1e3 * t.data.ctime)) || Date.parse(new Date()),
                            artCont: t.data.content || ""
                        }), setTimeout(function() {
                            e.article_article = t.data.content;
                        }, 200);
                        var n = t.data.content.replace(/\s/g, "").replace(/<(.*?)>/g, "");
                        r({
                            from: t.data.source || "",
                            cont: n,
                            ctx: wx.createCanvasContext("shareCanvas"),
                            success: function(t) {
                                l = t, wx.showShareMenu();
                            }
                        });
                    } else c({
                        content: "文章加载失败",
                        type: "error"
                    });
                }).catch(function(t) {
                    console.error(t);
                });
            },
            methods: {
                handleToIndex: function() {
                    getCurrentPages().length > 1 ? wx.navigateBack({
                        delta: getCurrentPages().length - 1
                    }) : wx.reLaunch({
                        url: "/pages/news/news"
                    });
                },
                launchAppError: function(t) {
                    console.log(t);
                },
                onPageScroll: function(t) {
                    var e = this;
                    this.fromApp && (this.backToAppShow && this.setData({
                        backToAppShow: !1
                    }), i && (clearTimeout(i), i = null), i || (i = setTimeout(function() {
                        clearTimeout(i), clearTimeout(u), i = null, u = setTimeout(function() {
                            e.backToAppShow || e.setData({
                                backToAppShow: !0
                            });
                        }, 800);
                    }, 50)));
                }
            }
        };
        e.default = s;
    },
    ff0e: function(t, e, n) {}
}, [ [ "b698", "common/runtime", "common/vendor" ] ] ]);