function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = require("../../../components/utils"), a = require("../../../components/bridge"), o = t(require("../components/indexs/indexs")), n = t(require("../../../config")), r = t(require("../../../services/quote/quote")), s = getApp(), i = {
    rises: {
        name: "涨幅榜",
        sort: 1,
        sd: 1
    },
    drops: {
        name: "跌幅榜",
        sort: 1,
        sd: 0
    },
    handovers: {
        name: "换手率榜",
        sort: 10,
        sd: 1
    }
}, c = (0, e.getColor)(-1), d = (0, e.getColor)(1), u = [ {
    text: "跌停",
    color: c
}, {
    text: ">7",
    color: c
}, {
    text: "7-5",
    color: c
}, {
    text: "5-2",
    color: c
}, {
    text: "2-0",
    color: c
}, {
    text: "0",
    color: (0, e.getColor)(0)
}, {
    text: "0-2",
    color: d
}, {
    text: "2-5",
    color: d
}, {
    text: "5-7",
    color: d
}, {
    text: "7<",
    color: d
}, {
    text: "涨停",
    color: d
} ];

s.View(Object.assign({
    beacon: {
        name: "行情",
        canShare: !0,
        shareOptions: {
            title: "行情小程序"
        }
    },
    events: {
        moreBoards: {
            name: "热门板块",
            handler: function() {
                (0, a.navigateTo)({
                    url: "/pages/quote/explore/board/board"
                });
            }
        },
        reloadBoards: {
            name: "重新加载板块",
            handler: function() {
                (0, e.setData)(this, "loadings.boards.status", "loading"), this.loadBoards();
            }
        },
        goRanks: {
            name: "",
            handler: function(t) {
                var e = t.currentTarget, o = e.dataset.code, n = e.dataset.name;
                this._dot({
                    props: {
                        buttonNameSuffix: n
                    }
                }), (0, a.navigateTo)({
                    url: "/pages/quote/explore/rank/rank?code=" + o + "&sort=1&sd=1&name=" + encodeURIComponent(n)
                });
            }
        },
        moreRanks: {
            name: "",
            handler: function(t) {
                var e = t.currentTarget.dataset.prop, o = i[e];
                this._dot({
                    props: {
                        buttonNameSuffix: o.name
                    }
                }), (0, a.navigateTo)({
                    url: "/pages/quote/explore/rank/rank?code=990001&sort=" + o.sort + "&sd=" + o.sd + "&name=" + encodeURIComponent(o.name)
                });
            }
        },
        reloadRanks: {
            name: "重新加载排行榜",
            handler: function(t) {
                (0, e.setData)(this, "loadings." + a + ".status", "loading");
                var a = t.currentTarget.dataset.prop;
                this.loadRanks(a);
            }
        },
        goStock: {
            name: "",
            handler: function(t) {
                var e = t.currentTarget, o = e.dataset.market, n = e.dataset.code, r = e.dataset.name;
                [ "000001", "399001", "399006" ].includes(n) ? this._dot({
                    props: {
                        buttonNameSuffix: "指数"
                    }
                }) : this._dot({
                    props: {
                        buttonNameSuffix: "个股行情"
                    }
                }), (0, a.navigateTo)({
                    url: "/pages/quote/timeseries/timeseries?market=" + o + "&code=" + n + "&name=" + encodeURIComponent(r)
                });
            }
        },
        moreNewShares: {
            name: "新股",
            handler: function(t) {
                wx.navigateToMiniProgram({
                    appId: "wx1d9bf5abae39be87"
                });
            }
        }
    },
    data: {
        boards: [],
        rises: [],
        drops: [],
        handovers: [],
        loadings: {
            boards: {
                status: "loading"
            },
            rises: {
                status: "loading"
            },
            drops: {
                status: "loading"
            },
            handovers: {
                status: "loading"
            }
        },
        newShareTips: ""
    },
    onLoad: function() {
        (0, a.setNavigationBarTitle)({
            title: this.beacon.name
        });
    },
    onShow: function() {
        var t = this, e = function() {
            t.timeout(t.loadIdxs, 10), t.timeout(t.loadBoards, 10), t.timeout(t.getChangeChart, 10), 
            t.timeout(function() {
                t.loadRanks("rises");
            }, 10), t.timeout(function() {
                t.loadRanks("drops");
            }, 10), t.timeout(function() {
                t.loadRanks("handovers");
            }, 10);
        };
        e(), this.intervals = [], this.intervals.push(this.interval(e, n.default.REFRESH_INTERVAL)), 
        this.loadNewShares();
    },
    onHide: function() {
        this.intervals.forEach(function(t) {
            t();
        });
    },
    onUnload: function() {
        this.onHide();
    },
    getChangeChart: function() {
        var t = this;
        r.default.changeChart({
            type: 1
        }).done(function(a) {
            var o = a.data.riseFallStat, n = o.fallData, r = o.riseData, s = o.riseFallStat, i = s.reduce(function(t, e) {
                return e.count > t ? e.count : t;
            }, 0), c = 0, d = 0, l = s.map(function(t, e) {
                var a = Math.ceil(t.count / i * 130);
                return d += t.count, "0%" === t.name && (c = t.count), t.text = u[e].text, t.color = u[e].color, 
                t.top = 130 - a + "rpx", t.scale = "scaleY(" + t.count / i + ")", t;
            }, 0), h = {
                fall: {
                    count: n.count,
                    color: (0, e.getColor)(-1),
                    width: n.count / d * 100 + "%"
                },
                unchanged: {
                    count: c,
                    color: (0, e.getColor)(0),
                    width: c / d * 100 + "%"
                },
                rise: {
                    count: r.count,
                    color: (0, e.getColor)(1),
                    width: r.count / d * 100 + "%"
                },
                riseFall: l
            };
            (0, e.setData)(t, "charts", h);
        });
    },
    loadBoards: function() {
        var t = this;
        this.reqBoards().done(function(a) {
            var o = t.setBoards(a);
            t.reqTops(o).done(function(a) {
                t.setTops(a, o), (0, e.setData)(t, "boards", o), (0, e.setData)(t, "loadings.boards.status", "done");
            }).fail(function(a) {
                (0, e.setData)(t, "loadings.boards.status", "fail");
            });
        }).fail(function(a) {
            (0, e.setData)(t, "loadings.boards.status", "fail");
        });
    },
    reqBoards: function() {
        return r.default.rank({
            data: {
                exchange: 903,
                code: 991002,
                form: 0,
                count: 6,
                sort: 1,
                sd: 1
            },
            timeout: 1e4
        });
    },
    setBoards: function(t) {
        return ((0, e.getProp)(t, "data.data") || []).map(function(t) {
            var a = t.id, o = t.info, n = t.quote, r = (0, e.getProp)(n, "sector.leads")[0];
            return {
                id: (0, e.getUnique)(),
                board: {
                    exchange: a.exchange,
                    code: a.code,
                    name: o.name,
                    rise: {
                        text: "" + (0, e.getSign)(n.change) + (n.roc / 100).toFixed(2) + "%",
                        color: (0, e.getColor)(n.change)
                    }
                },
                stock: {
                    exchange: r.id.exchange,
                    market: (0, e.toMarket)(r.id.exchange),
                    code: r.id.code,
                    name: r.info.name
                }
            };
        });
    },
    reqTops: function(t) {
        return r.default.batch({
            data: {
                stocks: t.map(function(t) {
                    var e = t.stock;
                    return {
                        market: e.market,
                        code: e.code
                    };
                })
            },
            timeout: 1e4
        });
    },
    setTops: function(t, a) {
        var o = this, n = ((0, e.getProp)(t, "data.quotes") || []).reduce(function(t, a) {
            var o = a.id, n = a.data, r = a.price_base;
            return n.price_base = r, t[(0, e.toMarket)(o.exchange) + "_" + o.code] = n, t;
        }, {});
        a.forEach(function(t, a) {
            var r = t.stock, s = n[r.market + "_" + r.code], i = (0, e.getColor)(s.change), c = s.price_base, d = Math.pow(10, c), u = c;
            (0, e.setData)(o, "boards[" + a + "].stock", Object.assign(r, {
                now: {
                    text: "" + ((s.now - 0) / d).toFixed(u),
                    color: i
                },
                rise: {
                    text: "" + (0, e.getSign)(s.change) + ((s.roc - 0) / 100).toFixed(2) + "%",
                    color: i
                }
            }));
        });
    },
    loadRanks: function(t) {
        var a = this;
        this.reqRanks(t).done(function(o) {
            a.setRanks(o, t), (0, e.setData)(a, "loadings." + t + ".status", "done");
        }).fail(function(o) {
            (0, e.setData)(a, "loadings." + t + ".status", "fail");
        });
    },
    reqRanks: function(t) {
        return r.default.rank({
            data: Object.assign({
                exchange: 903,
                code: 990001,
                form: 0,
                count: 6
            }, i[t]),
            timeout: 1e4
        });
    },
    setRanks: function(t, a) {
        (0, e.setData)(this, a, ((0, e.getProp)(t, "data.data") || []).map(function(t) {
            var a = t.id, o = t.info, n = t.quote, r = t.price_base, s = (0, e.getColor)(n.change), i = Math.pow(10, r), c = r;
            return {
                id: (0, e.getUnique)(),
                market: (0, e.toMarket)(a.exchange),
                code: a.code,
                name: o.name,
                now: {
                    text: ((n.now - 0) / i).toFixed(c),
                    color: s
                },
                rise: {
                    text: "" + (0, e.getSign)(n.change) + ((n.roc - 0) / 100).toFixed(2) + "%",
                    color: s
                },
                handover: {
                    text: (n.stock.turnover_rate / 100).toFixed(2) + "%"
                }
            };
        }));
    },
    reqNewShares: function() {
        return r.default.newshares({
            onlyTodayBook: 1
        });
    },
    loadNewShares: function() {
        var t = this;
        this.reqNewShares().done(function(a) {
            var o = {
                newShareTips: "",
                stocks: []
            };
            if (a.data && a.data.length > 0) {
                a.data.forEach(function(t) {
                    "stock" == t.type && o.stocks.push(t);
                });
                var n = o.stocks.length;
                0 == n ? o.newShareTips = "今日暂无新股" : (o.newShareTips = "今日可申购新股", n > 7 && o.stocks.splice(7, n - 7));
            } else o.newShareTips = "今日暂无新股";
            (0, e.setData)(t, "newshare", o);
        }).fail(function(t) {});
    }
}, o.default));