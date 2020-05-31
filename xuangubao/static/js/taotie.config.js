var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = e(require("./appVersion")), a = {
    debug: !1,
    trackerHost: (process.env.NODE_ENV, "https://dashuju-mini-wscn.xuangubao.cn"),
    commonData: {
        backend: "baoer",
        appId: "mini.market",
        channel: "weixin",
        uid: 0,
        environment: "production" === process.env.NODE_ENV ? "prod" : "test",
        deviceInfo: {
            appName: "选股宝行情",
            appVersion: r.default
        }
    }
};

exports.default = a;