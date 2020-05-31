(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ShareCard" ], {
    "19ce": function(t, e, n) {
        function i(t) {
            for (var e = 1; e < arguments.length; e++) if (e % 2) {
                var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), i.forEach(function(e) {
                    r(t, e, n[e]);
                });
            } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]));
            return t;
        }
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("642b")), a = n("ed08"), c = {
            name: "ShareCard",
            components: {
                CanvasMeasureText: function() {
                    return n.e("components/CanvasMeasureText").then(n.bind(null, "2537"));
                }
            },
            props: {
                article: Object
            },
            data: function() {
                return {
                    painting: {},
                    cardJson: {
                        width: 420,
                        height: 336
                    },
                    views: []
                };
            },
            onUnload: function() {
                this.painting = {}, this.views = [];
            },
            methods: {
                eventGetImage: function(t) {
                    this.$emit("finishDrawCard", t.target.tempFilePath);
                },
                startDrawCard: function() {
                    var t, e, n = this.article.fromSubject;
                    this.views.push({
                        type: "rect",
                        background: "#ffffff",
                        top: 0,
                        left: 0,
                        width: 420,
                        height: 336
                    }), 2 === n.type ? (e = this.views).push.apply(e, [ {
                        type: "image",
                        url: (0, a.replaceImgHost)((0, o.default)(n.image, 36, 36)),
                        top: 0,
                        left: 0,
                        width: 36,
                        height: 36
                    }, {
                        type: "image",
                        url: "/static/images/border-radius.png",
                        top: 0,
                        left: 0,
                        width: 36,
                        height: 36
                    }, {
                        type: "text",
                        content: this.splitTitle(n.title),
                        color: "#333333",
                        fontSize: 24,
                        top: 3,
                        left: 46
                    } ]) : this.views.push({
                        type: "text",
                        content: "#".concat(this.splitTitle(n.title)),
                        color: "#333333",
                        fontSize: 24,
                        top: 0,
                        left: 14,
                        textDecoration: "backgroundColor"
                    });
                    var r = this.$refs.measure.multLineText({
                        content: this.article.title,
                        fontSize: 28,
                        lineHeight: 42,
                        width: 360,
                        MaxLineNumber: 5
                    });
                    (t = this.views).push.apply(t, [ {
                        type: "image",
                        url: (0, a.replaceImgHost)((0, o.default)(n.image, 420, 276)),
                        top: 60,
                        left: 0,
                        width: 420,
                        height: 276
                    }, {
                        type: "rect",
                        background: "#3E3951",
                        top: 60,
                        left: 0,
                        width: 420,
                        height: 276,
                        globalAlpha: .7
                    }, {
                        type: "text",
                        content: this.article.title,
                        color: "#ffffff",
                        fontSize: 28,
                        lineHeight: 42,
                        textAlign: r.lineNum > 1 ? "left" : "center",
                        top: (276 - r.fillTop) / 2 + 60,
                        left: r.lineNum > 1 ? 25 : 210,
                        bolder: !0,
                        breakWord: !0,
                        width: 360,
                        MaxLineNumber: 5
                    } ]), this.painting = JSON.parse(JSON.stringify(i({}, this.cardJson, {
                        views: this.views
                    })));
                },
                splitTitle: function(t) {
                    return t.length > 8 ? t.slice(0, 8).concat("...") : t;
                },
                filterQuery: function(t) {
                    return t.split("?")[0];
                },
                formatText: function(t) {
                    return t ? t.replace(/[\r\n]/g, " ") : "";
                }
            }
        };
        e.default = c;
    },
    "7cc2": function(t, e, n) {
        n.r(e);
        var i = n("19ce"), r = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = r.a;
    },
    "81fce": function(t, e, n) {
        n.r(e);
        var i = n("d9af"), r = n("7cc2");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        var a = n("2877"), c = Object(a.a)(r.default, i.a, i.b, !1, null, null, null);
        e.default = c.exports;
    },
    d9af: function(t, e, n) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return r;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ShareCard-create-component", {
    "components/ShareCard-create-component": function(t, e, n) {
        n("543d").createComponent(n("81fce"));
    }
}, [ [ "components/ShareCard-create-component" ] ] ]);