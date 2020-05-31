Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDiffallInfo = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.getDiffallInfo = function() {
    return (0, e.wxReq)("api/diffall", {
        message: 2
    }, "GET");
};