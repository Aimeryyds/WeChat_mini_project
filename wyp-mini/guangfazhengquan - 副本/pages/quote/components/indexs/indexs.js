function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../../../components/utils"), o = (e(require("../../../../config")), 
e(require("../../../../services/quote/quote"))), r = {
    loadIdxs: function() {
        this.reqIdxs().done(this.setIdxs.bind(this));
    },
    reqIdxs: function() {
        return o.default.batch({
            data: {
                stocks: [ {
                    market: "sh",
                    code: "000001"
                }, {
                    market: "sz",
                    code: "399001"
                }, {
                    market: "sz",
                    code: "399006"
                } ]
            }
        });
    },
    setIdxs: function(e) {
        var o = this;
        ((0, t.getProp)(e, "data.quotes") || []).forEach(function(e) {
            var r = e.id, a = e.data, s = e.price_base, c = Math.pow(10, s), n = s;
            (0, t.setData)(o, "kpis." + (0, t.toMarket)(r.exchange) + "_" + r.code, {
                now: {
                    text: ((a.now || 0) / c).toFixed(n),
                    color: (0, t.getColor)(a.change)
                },
                change: {
                    text: ((a.change || 0) / 100).toFixed(2),
                    color: (0, t.getColor)(a.change)
                },
                rise: {
                    text: "" + (0, t.getSign)(a.change) + (a.roc / 100).toFixed(2) + "%",
                    color: (0, t.getColor)(a.change)
                }
            });
        });
    }
};

exports.default = r;