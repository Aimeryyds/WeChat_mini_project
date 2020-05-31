Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.queryTransfer = exports.transferFiles = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.transferFiles = function() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/我的资源", s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, i = getApp().globalData.shareInfo, n = i.shareid, a = i.uk, o = i.fsidlist, f = "from=" + a + "&type=" + s + "&async=" + t + "&shareid=" + n + "&ondup=newcopy";
    return (0, e.wxReq)("share/transfer?" + f, {
        path: r,
        fsidlist: JSON.stringify(o)
    }, "POST");
}, exports.queryTransfer = function(r) {
    return (0, e.wxReq)("share/taskquery", {
        taskid: r,
        from: "transfer"
    });
};