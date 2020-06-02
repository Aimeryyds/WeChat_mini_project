var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getGuideInfo = function() {
    return i.request.post(i.URL.guideInfo).then(function(e) {
        if (!e || 0 !== e.ret) return Promise.reject(e);
        var i = t.default.get(e, "info[0]");
        if (i) {
            var u = new Date(1e3 * i.ts_pub_time), n = u.getHours() < 10 ? "0".concat(u.getHours()) : u.getHours(), o = u.getMinutes() < 10 ? "0".concat(u.getMinutes()) : u.getMinutes();
            return {
                isNewsflash: !0,
                time: "".concat(n, ":").concat(o),
                title: i.title,
                id: i.id
            };
        }
        return r.default.error("API未返回info[0]", e), Promise.reject(e);
    });
};

var t = e(require("../../utils/mlodash")), r = e(require("../../utils/logger")), i = require("../../network/index.js");