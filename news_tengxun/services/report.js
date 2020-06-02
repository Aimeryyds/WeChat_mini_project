var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.flushReportQueue = l, exports.report = f;

var r = e(require("../@babel/runtime/helpers/defineProperty")), t = e(require("../utils/mlodash")), o = e(require("../utils/logger")), n = require("./reportConst"), u = require("../network/boss"), i = require("../store/index"), s = require("../network/abtest");

function p(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}

var c = {
    init: [],
    home: []
};

function a(e) {
    var t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(o), !0).forEach(function(t) {
                (0, r.default)(e, t, o[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
            });
        }
        return e;
    }({}, i.global.reportParams, {}, i.systemInfo.reportParams, {}, i.userInfo.reqParams, {}, e, {
        new_miniapp: "腾讯新闻小程序",
        _dc: Math.random()
    });
    return (0, s.getABTestExp)().then(function(e) {
        return t.expID = (0, s.getExpId)(e), (0, u.bossPost)(t);
    }).then(function(e) {
        o.default.info("数据上报(".concat(t.opType, ")"), t);
    }).catch(function(e) {
        o.default.error("数据上报发生错误", e, t);
    });
}

function l() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "init";
    if (c[e].length) {
        var r = c[e].slice();
        c[e].length = 0, t.default.forEach(r, function(e) {
            a(e);
        }), o.default.info("flushReportQueue", r);
    }
}

function f() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    "[object Object]" === Object.prototype.toString.call(e) && (i.userInfo.initOver ? e.intoQueue ? (delete e.intoQueue, 
    c.home.push(e)) : a(e) : c.init.push(e));
}

exports = module.exports = {
    PAGE_AREA: n.PAGE_AREA,
    FROM_PAGE: n.FROM_PAGE,
    OP_TYPE: n.OP_TYPE,
    RETENTION_TYPE: n.RETENTION_TYPE,
    report: f,
    flushReportQueue: l
};