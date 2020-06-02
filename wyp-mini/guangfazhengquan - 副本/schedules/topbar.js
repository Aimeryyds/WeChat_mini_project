function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t, a = e(require("../services/quote/quote")), o = require("../components/bridge"), r = require("../components/utils"), d = (e(require("../services/portal/login")), 
function() {
    a.default.getTopSet().done(function(e) {
        if ("favourite" == e.data.type) {
            var t = e.data.args.market, d = e.data.args.code;
            a.default.quote({
                data: {
                    market: t,
                    code: d
                },
                timeout: 1e4
            }).done(function(e) {
                var t = e.data.quote, a = t.info.name, r = ((t.data.roc - 0) / 100).toFixed(2) + "%", d = t.data.now / 100, n = t.data.change > 1e-5 ? "↑" : t.data.change < 1e-5 ? "↓" : "-";
                (0, o.setTopBarText)({
                    text: a + "      " + d + "      " + r + "      " + n
                });
            });
        }
        "index" != e.data.type && "default" != e.data.type || a.default.batch({
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
        }).done(function(e) {
            var t = ((0, r.getProp)(e, "data.quotes") || []).reduce(function(e, t) {
                var a = t.id, o = t.data, r = {
                    "000001": "沪",
                    399001: "深",
                    399006: "创"
                }[a.code], d = ((o.roc - 0) / 100).toFixed(2) + "%", n = o.change > 1e-5 ? "↑" : o.change < 1e-5 ? "↓" : "-";
                return e.push(r + " " + d + n), e;
            }, []);
            (0, o.setTopBarText)({
                text: t.join(" ")
            });
        });
    });
});

d(), t = setInterval(function() {
    d();
}, 1e4), exports.default = {
    defaultInterval: t
};