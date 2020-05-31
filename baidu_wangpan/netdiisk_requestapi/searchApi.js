Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.doSearch = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.doSearch = function() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, o = arguments[2];
    return (0, e.wxReq)("api/search", {
        page: r,
        num: t,
        recursion: 1,
        order: "time",
        desc: 1,
        showempty: 0,
        key: o
    }, "GET");
};