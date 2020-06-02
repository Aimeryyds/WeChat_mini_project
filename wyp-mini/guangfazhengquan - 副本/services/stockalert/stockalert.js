function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = n();
    r.command = r.command || i.ALERT;
    var a = r.showLoading, d = void 0 !== a && a;
    return new Promise(function(n, a) {
        (0, c.default)({
            url: "" + u.default.API_V2_HOST + u.default.API_V2_PREFIX + "portfolio?command=" + r.command + "&subcommand=" + (r.subcommand || 0) + "&accountType=" + o,
            data: e,
            method: "POST"
        }, t, d).then(function(e) {
            200 === e.statusCode ? e.data && 0 === e.data.errcode ? n(e.data.data) : a(e.errmsg || "请求失败") : a("请求失败");
        });
    });
}

function n() {
    return i.ACCOUNT_WX;
}

function r(e, t) {
    var n = e.type, r = e.value;
    return Object.keys(d).forEach(function(e) {
        d[e] == n && (n = e);
    }), r /= Math.pow(10, t), {
        type: n,
        value: r
    };
}

function o(e) {
    return a({}, e, {
        stock: e.id,
        conditions: (e.conditions || []).map(function(t) {
            return r(t, e.priceBase);
        })
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
}, c = e(require("../../components/http")), u = e(require("../../config")), i = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}(require("./constant")), d = {
    priceGE: i.CON_TYPE_PGE,
    priceLE: i.CON_TYPE_PLE,
    dayGainGE: i.CON_TYPE_PPGE,
    bigCost: i.CON_TYPE_BCA
}, s = {
    setAlert: function(e, n, r) {
        return e.priceBase ? n && 0 !== n.length ? (n = n.map(function(t) {
            return {
                type: d[t.type],
                value: Math.round(t.value * Math.pow(10, e.priceBase))
            };
        }), t({
            id: {
                code: e.code,
                exchange: e.exchange
            },
            type: i.ALERT_TYPE_SET,
            conditions: n,
            priceBase: e.priceBase,
            gid: [ "0" ]
        }, r)) : Promise.reject("请设置告警条件") : (console.error("请根据行情接口返回的priceBase传stock.priceBase"), 
        Promise.reject("参数不完整"));
    },
    delAlert: function(e, n) {
        return t({
            id: {
                code: e.code,
                exchange: e.exchange
            },
            type: i.ALERT_TYPE_DEL
        }, n);
    },
    getAlert: function(e, n, r) {
        return null === e ? t({}, n, a({
            command: i.GET_USER_ALERT
        }, r)).then(function(e) {
            return (e.alerts || []).map(function(e) {
                return o(e);
            });
        }) : t({
            id: {
                code: e.code,
                exchange: e.exchange
            },
            type: i.ALERT_TYPE_GET
        }, n, r).then(function(e) {
            return o(e);
        });
    }
};

exports.default = s;