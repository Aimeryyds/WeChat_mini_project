function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = require("../../../../components/utils"), t = require("../../../../components/bridge"), o = (a(require("../../../../components/http")), 
a(require("../../../../config"))), n = a(require("../../../../services/quote/quote"));

getApp().View({
    beacon: {
        name: "板块"
    },
    data: {
        boards: [],
        pagination: {
            page: 0,
            size: 20
        },
        loadings: {
            boards: {
                status: "loading"
            }
        }
    },
    events: {
        moreBoards: {
            name: "更多热门板块",
            handler: function() {
                (0, e.setData)(this, "pagination.page", (0, e.getData)(this, "pagination.page") - 0 + 1), 
                this.loadBoards();
            }
        },
        reloadBoards: {
            name: "重新加载板块",
            handler: function() {
                this.loadBoards();
            }
        },
        goRanks: {
            name: "排行榜",
            handler: function(a) {
                var e = a.currentTarget, o = e.dataset.code, n = e.dataset.name;
                (0, t.navigateTo)({
                    url: "/pages/quote/explore/rank/rank?code=" + o + "&sort=1&sd=1&name=" + encodeURIComponent(n)
                });
            }
        }
    },
    onLoad: function() {
        (0, t.setNavigationBarTitle)({
            title: this.beacon.name
        });
    },
    onShow: function() {
        var a = this, e = function() {
            a.loadBoards();
        };
        e(), (this.intervals = []).push(this.interval(e, o.default.REFRESH_INTERVAL));
    },
    onHide: function() {
        this.intervals.forEach(function(a) {
            a();
        });
    },
    loadBoards: function() {
        var a = this, t = (0, e.getData)(this, "pagination.page"), o = (0, e.getData)(this, "pagination.size");
        this.reqBoards({
            page: t,
            size: o
        }).done(function(n) {
            a.setBoards(n), (0, e.getProp)(n, "data.data").length < (t + 1) * o ? (0, e.setData)(a, "loadings.boards.status", "done") : (0, 
            e.setData)(a, "loadings.boards.status", "more");
        }).fail(function() {
            (0, e.setData)(a, "loadings.boards.status", "fail");
        });
    },
    reqBoards: function(a) {
        var e = a.page, t = a.size;
        return n.default.rank({
            data: {
                exchange: 903,
                code: 991002,
                form: 0,
                count: (e + 1) * t,
                sort: 1,
                sd: 1
            },
            timeout: 1e4
        });
    },
    setBoards: function(a) {
        (0, e.setData)(this, "boards", ((0, e.getProp)(a, "data.data") || []).map(function(a) {
            var t = a.id, o = a.info, n = a.quote, i = ((0, e.getColor)(n.change), (0, e.getProp)(n, "sector.leads")[0]);
            return {
                id: (0, e.getUnique)(),
                board: {
                    exchange: t.exchange,
                    code: t.code,
                    name: o.name,
                    rise: {
                        text: "" + (0, e.getSign)(n.change) + ((n.roc - 0) / 100).toFixed(2) + "%",
                        color: (0, e.getColor)(n.change)
                    }
                },
                stock: {
                    name: i.info.name,
                    market: (0, e.toMarket)(i.id.exchange),
                    code: i.id.code
                }
            };
        }));
    }
});