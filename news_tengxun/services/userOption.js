var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUserOption = function() {
    if (n.userData.userOption && !r.default.isEmpty(n.userData.userOption)) return Promise.resolve(n.userData.userOption);
    return o();
}, exports.setUserOption = function(e) {
    return u.request.post(u.URL.setUserOption, e).then(function(e) {
        return e && 0 === e.ret ? o() : Promise.reject(e);
    });
};

var t, r = e(require("../utils/mlodash")), s = e(require("../utils/logger")), u = require("../network/index"), n = require("../store/index"), i = n.constant.reqStatus, a = i.fullfilled;

function o() {
    return a === i.pending ? t : (a = i.pending, t = u.request.post(u.URL.getUserOption, {
        type: "pushZWMsgStatus|pushStatus|wxappUserGray|zwbGuide|flashGuide"
    }).then(function(e) {
        var t = e && e.app_conf || {};
        if (n.userData.appConf = Object.assign({
            share_text: "海报"
        }, t), e && 0 === e.ret) {
            a = i.fullfilled;
            var r = e && e.option || {}, s = Object.assign({
                pushStatus: "0",
                pushZWMsgStatus: "0",
                wxappUserGray: "0",
                zwbGuide: "0",
                flashGuide: "0"
            }, r);
            return n.userData.userOption = s, s;
        }
        return Promise.reject(e);
    }).catch(function(e) {
        return a = i.rejected, s.default.error("调用getUserOption发生错误：err=", e), {};
    }));
}