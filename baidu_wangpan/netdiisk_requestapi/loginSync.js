Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.loginSync = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.loginSync = function() {
    return (0, e.wxReq)("act/api/certificate", {}, "GET");
};