Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAudiosUrls = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.getAudiosUrls = function(t, r) {
    return (0, e.wxReq)("api/wechat/audiodownload", {
        path: t,
        fromuk: r
    }, "POST", null);
};