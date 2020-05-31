Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setPcode = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), t = (exports.setPcode = function(i) {
    return (0, e.wxReq)("api/mg/pcode/set", {
        mg_appid: 10010,
        mg_ak: "weixin",
        mg_type: t(i),
        pdata: i,
        need_uk: 0,
        pdata_format: "schema"
    }, "GET");
}, function(e) {
    return e.includes("AUDIO") ? 2 : e.includes("MYPLAY") ? 3 : e.includes("DOC") ? 4 : e.includes("MYFILE") ? 5 : void 0;
});