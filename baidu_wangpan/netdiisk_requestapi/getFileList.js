Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fileListRequestApis = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.fileListRequestApis = {
    getNormalList: function(t, i, r, s, o) {
        return s || (s = getApp().globalData.listOrder || "time"), void 0 === o && (o = "time" === s ? 1 : 0), 
        (0, e.wxReq)("api/list", {
            dir: t,
            start: i,
            limit: r,
            order: s,
            desc: o
        }, "POST");
    },
    doSearch: function(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        return (0, e.wxReq)("api/search", {
            page: i,
            num: r,
            recursion: 1,
            order: "time",
            desc: 1,
            showempty: 0,
            key: t
        }, "GET");
    },
    getFileMeta: function(t) {
        return (0, e.wxReq)("api/filemetas", t);
    }
};