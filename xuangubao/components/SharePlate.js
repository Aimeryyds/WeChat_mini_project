(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/SharePlate" ], {
    "0567": function(t, e, n) {
        n.r(e);
        var o = n("4e78"), i = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = i.a;
    },
    "4e78": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("4be4"), i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("70f2"));
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var r = {
            components: {
                CanvasMeasureText: function() {
                    return n.e("components/CanvasMeasureText").then(n.bind(null, "2537"));
                }
            },
            props: {
                plateInfo: Object,
                stocks: Array
            },
            data: function() {
                return {
                    painting: null,
                    cardJson: {
                        width: 420,
                        height: 336
                    },
                    views: [],
                    drawing: !1
                };
            },
            onUnload: function() {
                this.painting = null, this.views = [], this.drawing = !1;
            },
            watch: {
                stocks: function() {
                    this.startDrawCard();
                }
            },
            methods: {
                eventGetImage: function(t) {
                    this.$emit("finishDrawCard", t.target.tempFilePath);
                },
                startDrawCard: function() {
                    var t = this;
                    if (this.plateInfo && this.stocks && this.stocks.length && !this.drawing) {
                        if (this.drawing = !0, this.painting = null, this.views = [], this.views.push({
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
                        }), this.views.push({
                            type: "text",
                            textAlign: "center",
                            content: this.plateInfo.plateName,
                            color: "#ffffff",
                            fontSize: 28,
                            fontType: "PingFangSC-Semibold",
                            top: 40,
                            left: 210,
                            bolder: !0
                        }), this.plateInfo.limitUpCount) {
                            var e = this.$refs.measure.measureWidth({
                                content: " · ".concat(this.plateInfo.limitUpCount),
                                fontSize: 26
                            });
                            this.views.push({
                                type: "text",
                                textAlign: "right",
                                content: (0, o.numberToPercentage)(100 * this.plateInfo.coreAvgPcp),
                                color: this.plateInfo.coreAvgPcp >= 0 ? "#e22d48" : "#14b29f",
                                fontSize: 26,
                                fontType: "PingFangSC-Medium",
                                top: 80,
                                left: 210
                            }, {
                                type: "text",
                                textAlign: "left",
                                content: " · ".concat(this.plateInfo.limitUpCount),
                                color: "#e22d48",
                                fontSize: 26,
                                fontType: "PingFangSC-Medium",
                                top: 80,
                                left: 210,
                                bolder: !0
                            }, {
                                type: "text",
                                textAlign: "left",
                                content: "涨停",
                                color: "#e22d48",
                                fontSize: 18,
                                fontType: "PingFangSC-Medium",
                                top: 86,
                                left: 214 + e,
                                bolder: !0
                            });
                        } else this.views.push({
                            type: "text",
                            textAlign: "center",
                            content: (0, o.numberToPercentage)(100 * this.plateInfo.coreAvgPcp),
                            color: this.plateInfo.coreAvgPcp >= 0 ? "#e22d48" : "#14b29f",
                            fontSize: 26,
                            fontType: "PingFangSC-Medium",
                            top: 80,
                            left: 210
                        });
                        this.stocks.forEach(function(e, n) {
                            if (t.views.push({
                                type: "text",
                                textAlign: "left",
                                content: e.stockChiName,
                                color: "#ffffff",
                                fontSize: 22,
                                fontType: "PingFangSC-Regular",
                                top: 142 + 108 * n,
                                left: 23
                            }), 1 === e.limitStatus ? t.views.push({
                                type: "text",
                                textAlign: "center",
                                content: (0, o.numberToPercentage)(100 * e.changePercent),
                                color: e.changePercent >= 0 ? "#e22d48" : "#14b29f",
                                fontSize: 20,
                                fontType: "PingFangSC-Regular",
                                top: 143 + 108 * n,
                                left: 210
                            }, {
                                type: "text",
                                textAlign: "right",
                                content: "".concat((0, i.default)(1e3 * e.lastLimitUp, "HH:mm"), " 涨停"),
                                color: "rgb(176,176,204)",
                                fontSize: 20,
                                fontType: "PingFangSC-Regular",
                                top: 143 + 108 * n,
                                left: 397
                            }) : t.views.push({
                                type: "text",
                                textAlign: "right",
                                content: (0, o.numberToPercentage)(100 * e.changePercent),
                                color: e.changePercent >= 0 ? "#e22d48" : "#14b29f",
                                fontSize: 20,
                                fontType: "PingFangSC-Regular",
                                top: 143 + 108 * n,
                                left: 397
                            }), e.mDaysNBoardsDays && e.mDaysNBoardsBoards) {
                                var a = t.$refs.measure.measureWidth({
                                    content: "".concat(e.mDaysNBoardsDays, "天").concat(e.mDaysNBoardsBoards, "板"),
                                    fontSize: 15
                                });
                                t.views.push({
                                    type: "rect",
                                    background: "#e22d48",
                                    top: 185 + 108 * n,
                                    left: 23,
                                    width: a + 6,
                                    height: 21,
                                    roundCorner: 3
                                }, {
                                    type: "text",
                                    textAlign: "left",
                                    content: "".concat(e.mDaysNBoardsDays, "天").concat(e.mDaysNBoardsBoards, "板"),
                                    color: "#ffffff",
                                    fontSize: 15,
                                    fontType: "PingFangSC-Regular",
                                    top: 187 + 108 * n,
                                    left: 26
                                }, {
                                    type: "text",
                                    textAlign: "left",
                                    content: e.desc || "",
                                    color: "rgb(155,155,178)",
                                    fontSize: 18,
                                    fontType: "PingFangSC-Regular",
                                    top: 186 + 108 * n,
                                    left: a + 33,
                                    width: 341 - a,
                                    breakWord: !0,
                                    MaxLineNumber: 1
                                });
                            } else t.views.push({
                                type: "text",
                                textAlign: "left",
                                content: e.desc || "",
                                color: "rgb(155,155,178)",
                                fontSize: 18,
                                fontType: "PingFangSC-Regular",
                                top: 186 + 108 * n,
                                left: 23,
                                width: 374,
                                breakWord: !0,
                                MaxLineNumber: 1
                            });
                        }), this.views.push({
                            type: "rect",
                            background: "rgb(71,70,81)",
                            top: 227,
                            left: 23,
                            width: 374,
                            height: 1
                        }), this.painting = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {}, o = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }))), o.forEach(function(e) {
                                    a(t, e, n[e]);
                                });
                            }
                            return t;
                        }({}, this.cardJson, {
                            views: this.views
                        }), this.drawing = !1;
                    }
                }
            }
        };
        e.default = r;
    },
    b6e3: function(t, e, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return i;
        });
    },
    e482: function(t, e, n) {
        n.r(e);
        var o = n("b6e3"), i = n("0567");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        var r = n("2877"), c = Object(r.a)(i.default, o.a, o.b, !1, null, null, null);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/SharePlate-create-component", {
    "components/SharePlate-create-component": function(t, e, n) {
        n("543d").createComponent(n("e482"));
    }
}, [ [ "components/SharePlate-create-component" ] ] ]);