(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/SharePoster" ], {
    "1fcd": function(t, e, n) {
        n.r(e);
        var r = n("a2bc"), i = n("c70c");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        var o = n("2877"), c = Object(o.a)(i.default, r.a, r.b, !1, null, null, null);
        e.default = c.exports;
    },
    "460d": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t, e) {
            return c(t) || o(t, e) || a();
        }
        function a() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function o(t, e) {
            var n = [], r = !0, i = !1, a = void 0;
            try {
                for (var o, c = t[Symbol.iterator](); !(r = (o = c.next()).done) && (n.push(o.value), 
                !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, a = t;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (i) throw a;
                }
            }
            return n;
        }
        function c(t) {
            if (Array.isArray(t)) return t;
        }
        function l(t, e, n, r, i, a, o) {
            try {
                var c = t[a](o), l = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(l) : Promise.resolve(l).then(r, i);
        }
        function s(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(t) {
                        l(c, r, i, a, o, "next", t);
                    }
                    function o(t) {
                        l(c, r, i, a, o, "throw", t);
                    }
                    var c = t.apply(e, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = r(n("a34a")), h = n("f8c8"), f = r(n("642b")), p = r(n("2095")), d = n("ed08"), g = {
            name: "SharePoster",
            components: {
                CanvasMeasureText: function() {
                    return n.e("components/CanvasMeasureText").then(n.bind(null, "2537"));
                }
            },
            props: {
                article: Object,
                traceId: String,
                shareKey: String
            },
            data: function() {
                return {
                    painting: {}
                };
            },
            onUnload: function() {
                this.painting = {};
            },
            methods: {
                eventGetImage: function(t) {
                    wx.hideLoading(), this.$emit("finishDrawPoster", t.target.tempFilePath);
                },
                startDrawPoster: function() {
                    var t = s(u.default.mark(function t() {
                        var e, n, r, i, a, o, c, l, s, g, m, w, v, b, y, x;
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n = this.$refs.measure.multLineText, wx.showLoading({
                                    title: "绘制分享图片中",
                                    mask: !0
                                }), r = 122, i = n({
                                    content: this.article.title,
                                    fontSize: 42,
                                    lineHeight: 60,
                                    width: 580
                                }), r += i.fillTop, this.article.summary && (a = n({
                                    content: this.posterMain(this.article.summary),
                                    fontSize: 32,
                                    lineHeight: 50,
                                    width: 580
                                }), r += a.fillTop), !this.article.image) {
                                    t.next = 22;
                                    break;
                                }
                                return t.prev = 7, t.next = 10, d.wxp.getImageInfo({
                                    src: (0, d.replaceImgHost)(this.article.image)
                                });

                              case 10:
                                c = t.sent, l = c.height, s = c.width, g = c.path, r += (o = {
                                    width: 580,
                                    height: m = 580 * l / s,
                                    path: g
                                }).height, t.next = 22;
                                break;

                              case 19:
                                t.prev = 19, t.t0 = t.catch(7), console.error(t.t0);

                              case 22:
                                return r = Math.ceil(r), w = this.article.fromSubject, v = "", t.prev = 25, t.next = 28, 
                                (0, h.getQrCode)("pages/Article/main", JSON.stringify({
                                    articleId: this.article.id,
                                    subjectId: this.article.fromSubject.id,
                                    traceId: this.traceId || produceTraceId(),
                                    shareKey: this.shareKey
                                }), 120);

                              case 28:
                                return b = t.sent, y = b.qrcode, t.next = 32, this.base64ToTempFile(y);

                              case 32:
                                v = t.sent, t.next = 38;
                                break;

                              case 35:
                                t.prev = 35, t.t1 = t.catch(25), v = "/static/images/qrcode.jpg";

                              case 38:
                                x = {
                                    width: 750,
                                    height: 583 + r,
                                    views: [ {
                                        type: "rect",
                                        background: "#14141e",
                                        top: 0,
                                        left: 0,
                                        width: 750,
                                        height: 583 + r
                                    }, {
                                        type: "image",
                                        url: "/static/canvasImg/poster-header.png",
                                        top: 0,
                                        left: 0,
                                        width: 750,
                                        height: 218
                                    }, {
                                        type: "image",
                                        url: "/static/canvasImg/poster-body.png",
                                        top: 215,
                                        left: 0,
                                        width: 750,
                                        height: r + 5
                                    }, {
                                        type: "image",
                                        url: "/static/canvasImg/poster-tail.png",
                                        top: 218 + r,
                                        left: 0,
                                        width: 750,
                                        height: 365
                                    }, {
                                        type: "image",
                                        url: (0, d.replaceImgHost)((0, f.default)(w.image, 48, 48)),
                                        top: 230,
                                        left: 76,
                                        width: 48,
                                        height: 48
                                    }, {
                                        type: "image",
                                        url: "/static/images/border-radius.png",
                                        top: 230,
                                        left: 76,
                                        width: 48,
                                        height: 48
                                    }, {
                                        type: "text",
                                        content: "".concat(w.title, " · ").concat((0, p.default)(1e3 * this.article.updatedAt, "YYYY-MM-DD HH:mm")),
                                        color: "#666666",
                                        fontSize: 26,
                                        textAlign: "left",
                                        top: 240,
                                        left: 144
                                    }, {
                                        type: "text",
                                        content: this.article.title,
                                        color: "#000000",
                                        fontSize: 42,
                                        textAlign: "left",
                                        top: 304,
                                        left: 76,
                                        bolder: !0,
                                        lineHeight: 60,
                                        breakWord: !0,
                                        width: 580,
                                        MaxLineNumber: -1
                                    } ]
                                }, a && x.views.push({
                                    type: "text",
                                    content: this.posterMain(this.article.summary || ""),
                                    color: "#4c4c4c",
                                    fontSize: 32,
                                    textAlign: "left",
                                    top: 326 + i.fillTop,
                                    left: 76,
                                    lineHeight: 50,
                                    breakWord: !0,
                                    width: 580,
                                    MaxLineNumber: -1
                                }), o && x.views.push({
                                    type: "image",
                                    url: o.path,
                                    top: 330 + i.fillTop + (a ? a.fillTop : 0),
                                    left: 76,
                                    width: 580,
                                    height: o.height
                                }), (e = x.views).push.apply(e, [ {
                                    type: "image",
                                    url: v,
                                    top: 218 + r + 110,
                                    left: 152,
                                    width: 120,
                                    height: 120
                                }, {
                                    type: "text",
                                    content: "长按小程序二维码",
                                    color: "#333333",
                                    fontSize: 32,
                                    textAlign: "left",
                                    top: 218 + r + 130,
                                    left: 300
                                }, {
                                    type: "text",
                                    content: "进入选股宝 ，阅读全文",
                                    color: "#333333",
                                    fontSize: 28,
                                    textAlign: "left",
                                    top: 218 + r + 176,
                                    left: 300
                                } ]), this.painting = x;

                              case 43:
                              case "end":
                                return t.stop();
                            }
                        }, t, this, [ [ 7, 19 ], [ 25, 35 ] ]);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                posterMain: function(t) {
                    return t ? t.replace(/[\r\n]/g, " ") : "";
                },
                base64ToTempFile: function(t) {
                    var e = wx.getFileSystemManager();
                    return new Promise(function(n, r) {
                        var a = i(/data:image\/(\w+);base64,(.*)/.exec(t) || [], 3), o = a[1], c = a[2];
                        o || r(new Error("ERROR_BASE64SRC_PARSE"));
                        var l = "".concat(wx.env.USER_DATA_PATH, "/").concat("tmpbase64src", ".").concat(o), s = wx.base64ToArrayBuffer(c);
                        e.writeFile({
                            filePath: l,
                            data: s,
                            encoding: "binary",
                            success: function() {
                                n(l);
                            },
                            fail: function() {
                                r(new Error("ERROR_BASE64SRC_WRITE"));
                            }
                        });
                    });
                }
            }
        };
        e.default = g;
    },
    a2bc: function(t, e, n) {
        var r = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return i;
        });
    },
    c70c: function(t, e, n) {
        n.r(e);
        var r = n("460d"), i = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/SharePoster-create-component", {
    "components/SharePoster-create-component": function(t, e, n) {
        n("543d").createComponent(n("1fcd"));
    }
}, [ [ "components/SharePoster-create-component" ] ] ]);