Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportLinkFeedback = exports.getLinkFeedback = exports.getShareData = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.getShareData = function(t, r, o, s, a, i) {
    var n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "time", u = Object.assign({
        shorturl: t,
        dir: r,
        root: o,
        page: s,
        num: a,
        order: n
    }, i ? {
        pwd: i
    } : {});
    return (0, e.wxReq)("share/wxlist", u, "POST");
}, exports.getLinkFeedback = function(t) {
    return (0, e.wxReq)("share/getfeedbackbutton", t, "GET");
}, exports.reportLinkFeedback = function(t) {
    return (0, e.wxReq)("share/linkfeedbackreport", t, "GET");
};