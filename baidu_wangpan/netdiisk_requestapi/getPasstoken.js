Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPasstoken = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.getPasstoken = function() {
    return (0, e.wxReq)("api/wechat/getbdstoken", {}, "GET");
};