function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = require("../../../../components/utils"), a = require("../../../../components/bridge"), n = (t(require("../../../../components/http")), 
t(require("../../../../config"))), o = t(require("../../../../services/quote/quote"));

getApp().View({
    beacon: {
        name: "排行榜"
    },
    data: {
        stocks: [],
        pagination: {
            page: 0,
            size: 20
        },
        loadings: {
            stocks: {
                status: "loading"
            }
        }
    },
    events: {
        moreRanks: {
            name: "更多热门板块",
            handler: function() {
                (0, e.setData)(this, "pagination.page", (0, e.getData)(this, "pagination.page") - 0 + 1), 
                this.loadRanks();
            }
        },
        reloadRanks: {
            name: "重新加载板块",
            handler: function() {
                this.loadRanks();
            }
        },
        goStock: {
            name: "个股详情",
            handler: function(t) {
                var e = t.currentTarget, n = e.dataset.market, o = e.dataset.code, s = e.dataset.name;
                (0, a.navigateTo)({
                    url: "/pages/quote/timeseries/timeseries?market=" + n + "&code=" + o + "&name=" + encodeURIComponent(s)
                });
            }
        }
    },
    onLoad: function(t) {
        var n = this.beacon.name = t.name = decodeURIComponent(t.name || "");
        (0, e.setData)(this, "options", t), (0, a.setNavigationBarTitle)({
            title: n
        });
    },
    onShow: function() {
        var t = this, e = function() {
            t.loadRanks();
        };
        e(), (this.intervals = []).push(this.interval(e, n.default.REFRESH_INTERVAL));
    },
    onHide: function() {
        this.intervals.forEach(function(t) {
            t();
        });
    },
    loadRanks: function() {
        var t = this, a = (0, e.getData)(this, "pagination.page"), n = (0, e.getData)(this, "pagination.size");
        this.reqRanks({
            page: a,
            size: n
        }).done(function(o) {
            t.setRanks(o), ((0, e.getProp)(o, "data.data") || []).length < (a + 1) * n ? (0, 
            e.setData)(t, "loadings.stocks.status", "done") : (0, e.setData)(t, "loadings.stocks.status", "more");
        }).fail(function() {
            (0, e.setData)(t, "loadings.stocks.status", "fail");
        });
    },
    reqRanks: function(t) {
        var a = t.page, n = t.size, s = (0, e.getData)(this, "options"), i = s.code, r = s.sort, c = s.sd;
        return o.default.rank({
            data: {
                exchange: 903,
                code: i,
                form: 0,
                count: (a + 1) * n,
                sort: Number(r),
                sd: Number(c)
            },
            timeout: 1e4
        });
    },
    setRanks: function(t) {
        var a = (0, e.getData)(this, "options");
        (0, e.setData)(this, "stocks", ((0, e.getProp)(t, "data.data") || []).map(function(t) {
            var n = t.id, o = t.info, s = t.quote, i = t.price_base, r = (0, e.getColor)(s.change), c = Math.pow(10, i), d = i;
            return {
                id: (0, e.getUnique)(),
                market: (0, e.toMarket)(n.exchange),
                code: n.code,
                name: o.name,
                now: {
                    text: (s.now / c).toFixed(d),
                    color: r
                },
                sort: a.sort - 0 == 10 ? {
                    text: ((s.stock.turnover_rate - 0) / 100).toFixed(2) + "%",
                    color: "#666666"
                } : {
                    text: "" + (0, e.getSign)(s.change) + ((s.roc - 0) / 100).toFixed(2) + "%",
                    color: r
                }
            };
        }));
    }
});