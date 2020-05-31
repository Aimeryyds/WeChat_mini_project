var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = e(require("vue")), t = {
    projectId: "",
    appId: "wxd4fba725dc2331b7",
    version: e(require("../appVersion")).default,
    debug: !1,
    forceLogin: !1,
    followShare: !0,
    usePlugin: !1,
    getLocation: {
        autoGet: !1,
        type: "wgs84"
    },
    keepAlive: 3e5,
    vue: r.default,
    taro: !1,
    cml: !1
};

exports.default = t;