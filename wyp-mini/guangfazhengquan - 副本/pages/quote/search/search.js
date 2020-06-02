function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
    }
    return e;
}, a = require("../../../components/utils"), s = require("../../../components/bridge"), o = e(require("../../../components/circus/toast/toast")), n = e(require("../../../services/quote/favourite")), r = e(require("../../../services/quote/history")), i = e(require("../../../services/quote/quote")), c = e(require("../../../services/stockgroup/stockgroup")), u = require("../../../components/zxgroup-selector/index");

getApp().View({
    beacon: {
        name: "搜索",
        canShare: !0,
        shareOptions: {
            title: "广发证券行情",
            desc: "方便、快捷、及时、准确的证券市场行情和自选股服务",
            path: "/pages/quote/favourite/favourite"
        }
    },
    data: {
        keyword: "",
        history: {
            show: !0,
            data: []
        },
        fuzzy: {
            show: !1,
            keyinfo: "",
            data: []
        },
        clearSeach: "",
        loadingTimeHistory: "",
        moreFuzzy: {
            noMore: !0,
            page: 0,
            length: ""
        },
        stocks: {
            gid: "",
            name: ""
        },
        ids: {
            code: "",
            exchange: "",
            market: "",
            name: "",
            sector: ""
        }
    },
    events: {
        goStock: {
            name: "个股行情",
            handler: function(e) {
                var t = e.currentTarget, o = t.dataset.code, n = t.dataset.name, r = t.dataset.exchange, i = t.dataset.sector, c = "/pages/quote/timeseries/timeseries?exchange=" + r + "&code=" + o + "&name=" + encodeURIComponent(n);
                (0, a.setData)(this, "ids.code", o), (0, a.setData)(this, "ids.exchange", r), (0, 
                a.setData)(this, "ids.name", n), (0, a.setData)(this, "ids.sector", i), this.getGroupMeta(), 
                "1" == this.reserve ? (0, s.navigateTo)({
                    url: c
                }) : (0, s.redirectTo)({
                    url: c
                });
            }
        },
        addFav: {
            name: "添加自选",
            handler: function(e) {
                var t = e.currentTarget, s = (t.dataset.source, t.dataset.code), o = t.dataset.name, n = t.dataset.exchange;
                (0, a.setData)(this, "ids.code", s), (0, a.setData)(this, "ids.exchange", n), (0, 
                a.setData)(this, "ids.name", o), this.selectGroup(s, n, o);
            }
        },
        clearHistory: {
            name: "清除搜索历史",
            handler: function() {
                r.default.clear(), this.setHistory(), o.default.show(this, "已完成");
            }
        },
        goToProgram: {
            name: "跳转鉴股师小程序",
            handler: function() {
                wx.navigateToMiniProgram({
                    appId: "wx3260235569ce413f",
                    path: "pages/ocr/Home/index",
                    success: function(e) {
                        console.log("跳转鉴股师", e);
                    }
                });
            }
        },
        seachCancel: {
            name: "取消搜索",
            handler: function() {
                (0, s.navigateBack)();
            }
        },
        clearSearch: {
            name: "清除搜索内容",
            handler: function() {
                (0, a.setData)(this, "clearSeach", !1), (0, a.setData)(this, "keyword", ""), (0, 
                a.setData)(this, "fuzzy.show", !1), (0, a.setData)(this, "history.show", !0), (0, 
                a.setData)(this, "fuzzy.data", "");
            }
        },
        showMore: {
            name: "展示更多搜索结果",
            handler: function() {
                this.reqMoreFuzzy();
            }
        }
    },
    onLoad: function(e) {
        (0, s.setNavigationBarTitle)({
            title: "搜索"
        }), this.reserve = e.reserve;
    },
    onShow: function() {
        this.setHistory(), this.updateHistory();
    },
    setHistory: function() {
        var e = r.default.all().slice(0, 10);
        (0, a.setData)(this, "history.data", e.map(function(e) {
            return (0, a.assign)({
                id: (0, a.getUnique)()
            }, e);
        }));
    },
    inputFuzzy: function(e) {
        var t = this, s = e ? e.detail.value.trim() : "";
        if ((0, a.setData)(this, "keyword", s), null == s || "" == s) return this.setHistory(), 
        (0, a.setData)(this, "history.show", !0), (0, a.setData)(this, "fuzzy.show", !1), 
        (0, a.setData)(this, "clearSeach", !1), void (0, a.setData)(this, "fuzzy.data", "");
        (0, a.setData)(this, "history.show", !1), (0, a.setData)(this, "fuzzy.show", !0), 
        (0, a.setData)(this, "clearSeach", !0), (0, a.setData)(this, "moreFuzzy.noMore", !1), 
        this.reqFuzzy({
            keyword: s,
            secu_type: [ 10, 11, 12, 13 ],
            exchange: [ 101, 105, 111, 161, 302, 303 ],
            count: 5,
            from: 0
        }).then(function(e) {
            t.data.keyword === e.data.keyword && t.setFuzzy(e);
        });
    },
    reqFuzzy: function(e) {
        return i.default.search({
            data: e
        });
    },
    setFuzzy: function(e) {
        var t = this;
        (0, a.setData)(this, "fuzzy.data", function(e) {
            return (0, a.setData)(t, "moreFuzzy.page", e.data.offset), (0, a.setData)(t, "moreFuzzy.noMore", !0), 
            e.data.results ? ((0, a.setData)(t, "moreFuzzy.length", e.data.results.length), 
            e.data.results.map(function(e) {
                var s = e.id, o = e.info, n = (0, a.toMarket)(s.exchange);
                return t.matchKey(t.data.keyword, s, o, n);
            })) : ((0, a.setData)(t, "moreFuzzy.noMore", !1), {});
        }(e));
    },
    matchKey: function(e, s, o, r) {
        var i = e.replace(/\*+|\(+|\)+/g, ""), c = new RegExp("^(.*)(" + i + ")(.*)$"), u = new RegExp("^[A-Za-z0-9]+(.[A-Za-z0-9]{1,4})?$").exec(e), d = o.stock && o.stock.sector, h = this.getTagList(d, s.exchange), f = {
            id: (0, a.getUnique)(),
            market: r,
            exchange: s.exchange,
            name: o.name,
            code: s.code,
            done: !!n.default.find({
                market: r,
                code: s.code
            }),
            sector: d,
            tagList: h
        };
        if (u) {
            var g = c.exec(s.code);
            return g ? ((0, a.setData)(this, "fuzzy.keyinfo", "num"), t({}, f, {
                code1: g[1],
                code2: g[2],
                code3: g[3]
            })) : ((0, a.setData)(this, "fuzzy.keyinfo", "py"), f);
        }
        (0, a.setData)(this, "fuzzy.keyinfo", "hz");
        var l = c.exec(o.name.replace(/\s+/g, "")), m = "", y = "", z = "";
        return l ? (m = l[1] ? l[1] : "", y = l[2] ? l[2] : "", z = l[3] ? l[3] : "") : (m = o.name, 
        y = "", z = ""), t({}, f, {
            name1: m,
            name2: y,
            name3: z
        });
    },
    reqMoreFuzzy: function() {
        var e = this, t = this.data.moreFuzzy.page;
        this.reqFuzzy({
            keyword: this.data.keyword,
            secu_type: [ 10, 11, 12, 13 ],
            exchange: [ 101, 105, 111, 161, 302, 303 ],
            from: t
        }).done(function(t) {
            (0, a.setData)(e, "moreFuzzy.page", t.data.offset), t.data.results ? (0, a.setData)(e, "moreFuzzy.length", t.data.results.length) : (0, 
            a.setData)(e, "moreFuzzy.noMore", !1);
            var s = e.data.fuzzy.data;
            if (!t.data.results) return (0, a.setData)(e, "moreFuzzy.noMore", !1), {};
            var o = t.data.results.map(function(t) {
                var s = t.id, o = t.info, n = (0, a.toMarket)(s.exchange);
                return e.matchKey(e.data.keyword, s, o, n);
            }), n = s.concat(o);
            (0, a.setData)(e, "fuzzy.data", n);
        });
    },
    getGroupMeta: function() {
        var e = this;
        c.default.fillStockWithGroups([ {
            code: this.data.ids.code,
            exchange: this.data.ids.exchange
        } ], this).then(function(t) {
            if (t) {
                var a = t[0].groups.map(function(e) {
                    return {
                        cname: e.cname,
                        gid: e.gid
                    };
                }), s = e.data.ids.code, o = e.data.ids.name, n = e.data.ids.exchange, i = e.data.ids.sector, c = e.getTagList(i, n), u = +new Date();
                r.default.find({
                    exchange: n,
                    code: s
                }) && !a.length || r.default.unshift({
                    code: s,
                    name: o,
                    exchange: n,
                    groupname: a || "",
                    time: u,
                    sector: i,
                    tagList: c
                }), e.setHistory();
            }
        }).catch(function(e) {
            console.log(e);
        });
    },
    addCreatedGroup: function(e, t, a) {
        var s = this, n = e.map(function(e) {
            return {
                gid: e.gid,
                name: e.name,
                stocks: [ {
                    code: t,
                    exchange: a
                } ]
            };
        });
        c.default.addStocks(n, this).then(function() {
            s.getGroupMeta(), o.default.show(s, "添加成功");
        }).catch(function(e) {
            console.log(e);
        });
    },
    selectGroup: function(e, t, a) {
        var s = this;
        u({
            selector: "#selector",
            stocks: [ {
                exchange: t,
                code: e
            } ],
            onConfirm: function(a) {
                s.addCreatedGroup(a, e, t);
            },
            onCancel: function() {
                console.log("取消");
            }
        });
    },
    fillStockWithGroups: function(e) {
        var t = this;
        c.default.fillStockWithGroups([ e ], this).then(function(a) {
            var s = a[0].groups.map(function(e) {
                return {
                    cname: e.cname,
                    gid: e.gid
                };
            }), o = e.code, n = e.name, i = e.exchange, c = e.sector, u = t.getTagList(c, i), d = +new Date(), h = r.default.find({
                exchange: i,
                code: o
            });
            h && r.default.update({
                code: o,
                name: n,
                exchange: i,
                groupname: s || "",
                time: h.time || d,
                sector: c,
                tagList: u
            }), t.setHistory();
        }).catch(function(e) {
            console.log(e);
        });
    },
    updateHistory: function() {
        var e = this;
        this.data.history.data.map(function(t) {
            e.fillStockWithGroups(t);
        });
    },
    getTagList: function(e, t) {
        var s = [];
        if (12 === e) s.push(a.TAG_OPTIONS.ke); else switch (t) {
          case a.MARKETS.sh:
            s.push(a.TAG_OPTIONS.sh);
            break;

          case a.MARKETS.sz:
            s.push(a.TAG_OPTIONS.sz);
            break;

          case a.MARKETS.neeq:
            s.push(a.TAG_OPTIONS.neeq);
            break;

          case a.MARKETS.hk:
            s.push(a.TAG_OPTIONS.hk);
            break;

          case a.MARKETS.nyse:
          case a.MARKETS.nasdaq:
            s.push(a.TAG_OPTIONS.us);
        }
        return s;
    }
});