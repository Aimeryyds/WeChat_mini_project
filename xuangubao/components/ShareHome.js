(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ShareHome" ], {
    "8a87": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n("4be4"), o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("70f2"));
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), i.forEach(function(e) {
                    a(t, e, n[e]);
                });
            }
            return t;
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var f = {
            components: {
                CanvasMeasureText: function() {
                    return n.e("components/CanvasMeasureText").then(n.bind(null, "2537"));
                }
            },
            props: {
                tags: Array
            },
            data: function() {
                return {
                    painting: null,
                    cardJson: {
                        width: 420,
                        height: 336
                    },
                    views: []
                };
            },
            onUnload: function() {
                this.painting = null, this.views = [], this.drawing = !1;
            },
            watch: {
                tags: function() {
                    this.startDrawCard();
                }
            },
            methods: {
                eventGetImage: function(t) {
                    this.$emit("finishDrawCard", t.target.tempFilePath);
                },
                startDrawCard: function() {
                    var t = this;
                    if (this.tags && this.tags.length && !this.drawing) {
                        this.drawing = !0, this.painting = null, this.views = [], this.views.push({
                            type: "rect",
                            background: "#ffffff",
                            top: 0,
                            left: 0,
                            width: 420,
                            height: 336
                        }, {
                            type: "image",
                            url: "/static/image/sharebg.png",
                            top: 0,
                            left: 0,
                            width: 420,
                            height: 336
                        }), this.tags.forEach(function(e, n) {
                            t.views.push({
                                type: "text",
                                textAlign: "center",
                                content: t.splitTitle(e.name),
                                color: "#ffffff",
                                fontSize: 20,
                                fontType: "PingFangSC-Medium",
                                top: 27,
                                left: 140 * n + 70
                            }, {
                                type: "text",
                                textAlign: "right",
                                content: e.stocks.length,
                                color: "rgb(226,45,72)",
                                fontSize: 22,
                                fontType: "PingFangSC-Medium",
                                top: 57,
                                left: 140 * n + 70
                            }, {
                                type: "text",
                                textAlign: "left",
                                content: "家",
                                color: "rgb(155,155,178)",
                                fontSize: 16,
                                fontType: "PingFangSC-Medium",
                                top: 61,
                                left: 140 * n + 75
                            }, {
                                type: "rect",
                                background: "rgb(71,70,81)",
                                top: 38,
                                left: 140 * (n + 1),
                                width: 1,
                                height: 34
                            });
                        }), this.views.push({
                            type: "rect",
                            background: "#ffffff",
                            top: 106,
                            left: 16,
                            width: 388,
                            height: 214,
                            roundCorner: 4
                        });
                        var e = this.tags[0], n = e.Stocks[0];
                        if (null != e.pcp) {
                            var a = (0, i.numberToPercentage)(100 * e.pcp), f = this.$refs.measure.measureWidth({
                                content: a,
                                fontSize: 17
                            });
                            if (this.views.push({
                                type: "text",
                                textAlign: "left",
                                content: e.name,
                                color: "rgb(51,51,51)",
                                fontSize: 24,
                                fontType: "PingFangSC-Medium",
                                top: 125,
                                left: 32,
                                bolder: !0
                            }, {
                                type: "rect",
                                background: e.pcp >= 0 ? "#e22d48" : "#14b29f",
                                top: 128,
                                left: 380 - f,
                                width: f + 8,
                                height: 24,
                                roundCorner: 2
                            }, {
                                type: "text",
                                textAlign: "left",
                                content: a,
                                color: "#ffffff",
                                fontSize: 17,
                                fontType: "PingFangSC-Medium",
                                top: 130,
                                left: 384 - f
                            }, {
                                type: "text",
                                textAlign: "left",
                                content: e.description,
                                color: "rgb(102,102,102)",
                                fontSize: 18,
                                fontType: "PingFangSC-Medium",
                                top: 160,
                                left: 32,
                                width: 356,
                                breakWord: !0,
                                MaxLineNumber: 1
                            }, {
                                type: "rect",
                                background: "rgb(216,216,216)",
                                top: 194,
                                left: 32,
                                width: 356,
                                height: 1
                            }), n) {
                                var s = (0, i.numberToPercentage)(100 * n.pxChangeRate);
                                if (this.views.push({
                                    type: "text",
                                    textAlign: "left",
                                    content: n.prodName,
                                    color: "rgb(51,51,51)",
                                    fontSize: 18,
                                    fontType: "PingFangSC-Medium",
                                    top: 218,
                                    left: 32,
                                    bolder: !0
                                }), n.upLimit ? this.views.push({
                                    type: "text",
                                    textAlign: "center",
                                    content: s,
                                    color: n.pxChangeRate >= 0 ? "#e22d48" : "#14b29f",
                                    fontSize: 18,
                                    fontType: "PingFangSC-Medium",
                                    top: 218,
                                    left: 210
                                }, {
                                    type: "text",
                                    textAlign: "right",
                                    content: "".concat((0, o.default)(1e3 * n.enterTime, "HH:mm:ss"), " 涨停"),
                                    color: "rgb(102,102,102)",
                                    fontSize: 18,
                                    fontType: "PingFangSC-Medium",
                                    top: 218,
                                    left: 388
                                }) : this.views.push({
                                    type: "text",
                                    textAlign: "right",
                                    content: s,
                                    color: n.pxChangeRate >= 0 ? "#e22d48" : "#14b29f",
                                    fontSize: 18,
                                    fontType: "PingFangSC-Medium",
                                    top: 218,
                                    left: 388
                                }), n.mDaysNBoards) {
                                    var c = this.$refs.measure.measureWidth({
                                        content: n.mDaysNBoards,
                                        fontSize: 13
                                    });
                                    this.views.push({
                                        type: "rect",
                                        background: "#ffffff",
                                        strokeStyle: "rgb(226,45,72)",
                                        top: 258,
                                        left: 32,
                                        width: c + 8,
                                        height: 18,
                                        roundCorner: 2
                                    }, {
                                        type: "text",
                                        textAlign: "left",
                                        content: n.mDaysNBoards,
                                        color: "rgb(226,45,72)",
                                        fontSize: 13,
                                        fontType: "PingFangSC-Regular",
                                        top: 260,
                                        left: 36
                                    });
                                    var l = this.$refs.measure.multLineText({
                                        content: n.description,
                                        fontSize: 18,
                                        lineHeight: 26,
                                        width: 356 - c - 12,
                                        MaxLineNumber: 1
                                    }).index;
                                    this.views.push({
                                        type: "text",
                                        textAlign: "left",
                                        content: n.description.slice(0, l),
                                        color: "rgb(153,153,153)",
                                        fontSize: 18,
                                        fontType: "PingFangSC-Regular",
                                        top: 256,
                                        left: 32 + c + 12
                                    }), n.description.length > l + 1 && this.views.push({
                                        type: "text",
                                        textAlign: "left",
                                        content: n.description.slice(l),
                                        color: "rgb(153,153,153)",
                                        fontSize: 18,
                                        fontType: "PingFangSC-Regular",
                                        top: 283,
                                        left: 32,
                                        width: 350,
                                        breakWord: !0,
                                        MaxLineNumber: 1
                                    });
                                } else this.views.push({
                                    type: "text",
                                    textAlign: "left",
                                    content: n.description,
                                    color: "rgb(153,153,153)",
                                    fontSize: 18,
                                    lineHeight: 28,
                                    fontType: "PingFangSC-Regular",
                                    top: 255,
                                    left: 32,
                                    width: 348,
                                    breakWord: !0,
                                    MaxLineNumber: 2
                                });
                                this.painting = JSON.parse(JSON.stringify(r({}, this.cardJson, {
                                    views: this.views
                                }))), this.drawing = !1;
                            }
                        }
                    }
                },
                splitTitle: function(t) {
                    return t.length > 5 ? "".concat(t.slice(0, 4), "...") : t;
                }
            }
        };
        e.default = f;
    },
    "9e84": function(t, e, n) {
        n.r(e);
        var i = n("8a87"), o = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    ca85: function(t, e, n) {
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return o;
        });
    },
    cc77: function(t, e, n) {
        n.r(e);
        var i = n("ca85"), o = n("9e84");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        var a = n("2877"), f = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
        e.default = f.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ShareHome-create-component", {
    "components/ShareHome-create-component": function(t, e, n) {
        n("543d").createComponent(n("cc77"));
    }
}, [ [ "components/ShareHome-create-component" ] ] ]);