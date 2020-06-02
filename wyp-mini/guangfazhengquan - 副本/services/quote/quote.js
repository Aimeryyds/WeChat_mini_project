function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = t(require("../../components/http")), a = t(require("../../config")), o = require("../../components/utils");

exports.default = {
    search: function(t) {
        var o = t.data, u = t.timeout, r = void 0 === u ? 3e3 : u;
        return (0, e.default)({
            method: "post",
            url: a.default.QUOTE_URL + "/searchcodelist",
            data: o,
            timeout: r
        });
    },
    quote: function(t) {
        var u = t.data, r = t.timeout, d = void 0 === r ? 3e4 : r;
        return u = (0, o.stockCvrt)(u), (0, e.default)({
            method: "post",
            url: a.default.QUOTE_URL + "/realtime",
            data: u,
            timeout: d
        });
    },
    batch: function(t, u) {
        var r = t.data.stocks, d = t.timeout, n = void 0 === d ? 3e4 : d, i = t.convertMarket, l = void 0 === i || i, c = t.scene, f = void 0 === c ? 0 : c, s = t.showLoading, m = void 0 !== s && s, p = void 0;
        return p = !1 === l ? {
            ids: r
        } : {
            ids: r.map(function(t) {
                return (0, o.stockCvrtId)(t);
            })
        }, 1 === f && (p.scene = 1), (0, e.default)({
            method: "post",
            url: a.default.QUOTE_URL + "/realtimebatch",
            data: p,
            timeout: n
        }, u, m);
    },
    rank: function(t) {
        var o = t.data, u = t.timeout, r = void 0 === u ? 3e4 : u, d = o.exchange, n = o.code;
        return o.id = {
            exchange: d,
            code: String(n)
        }, delete o.exchange, delete o.code, (0, e.default)({
            method: "post",
            url: a.default.QUOTE_URL + "/rank",
            data: o,
            timeout: r
        });
    },
    tick: function(t) {
        var u = t.data, r = t.timeout, d = void 0 === r ? 3e4 : r;
        return u = (0, o.stockCvrt)(u), (0, e.default)({
            method: "post",
            url: a.default.QUOTE_URL + "/tick",
            data: u,
            timeout: d
        });
    },
    cap: function(t) {
        var u = t.data, r = t.timeout, d = void 0 === r ? 3e4 : r;
        return u = (0, o.stockCvrt)(u), (0, e.default)({
            method: "post",
            url: a.default.QUOTE_URL + "/capflowng",
            data: u,
            timeout: d
        });
    },
    timeseries: function(t) {
        var u = t.data, r = t.timeout, d = void 0 === r ? 3e4 : r;
        return u = (0, o.stockCvrt)(u), (0, e.default)({
            method: "post",
            url: a.default.QUOTE_URL + "/timeseries",
            data: u,
            timeout: d
        });
    },
    kline: function(t) {
        var u = t.data, r = t.timeout, d = void 0 === r ? 3e4 : r;
        return u = (0, o.stockCvrt)(u), (0, e.default)({
            method: "post",
            url: a.default.QUOTE_URL + "/kline",
            data: u,
            timeout: d
        });
    },
    getTopSet: function(t) {
        return (0, e.default)({
            url: a.default.SER_URL + "/api/wechat/applet/1.0.0/user/top-banner",
            method: "get",
            data: t
        });
    },
    saveTopSet: function(t) {
        return (0, e.default)({
            url: a.default.SER_URL + "/api/wechat/applet/1.0.0/user/top-banner",
            method: "post",
            data: t
        });
    },
    newshares: function(t) {
        return (0, e.default)({
            url: a.default.SER_URL + "/api/wechat/info/1.0.0/stock/ipo",
            method: "get",
            data: t
        });
    },
    querymeta: function(t) {
        return (0, e.default)({
            url: a.default.META_URL + "/querymeta",
            method: "post",
            data: t
        });
    },
    changeChart: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, e.default)({
            url: a.default.QUOTE_URL + "/changechart",
            method: "post",
            data: t
        });
    }
};