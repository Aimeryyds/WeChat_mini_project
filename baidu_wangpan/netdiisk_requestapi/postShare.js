Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dismissSharedir = exports.signOutSharedir = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.signOutSharedir = function(r, t, i) {
    return wx.wetoast({
        content: "正在退出共享...",
        loading: !0,
        duration: !0
    }), (0, e.wxReq)("sharedir/member/leave", {
        fid: r,
        uk: t,
        delete_files: i
    }, "POST");
}, exports.dismissSharedir = function(r) {
    return wx.wetoast({
        content: "正在解散共享...",
        loading: !0,
        duration: !0
    }), (0, e.wxReq)("sharedir/cancel", {
        fid: r
    }, "POST");
};