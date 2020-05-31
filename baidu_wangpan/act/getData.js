Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSaleInfo = exports.pullNewApi = exports.getDataApi = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), t = "826311545794", n = (exports.getDataApi = function() {
    return (0, e.wxReq)("act/pullnew/mainpage?action=main&id=826311545794&ft=1", {}, "GET");
}, exports.pullNewApi = function(t) {
    return (0, e.wxReq)("act/pullnew/mainpage?action=play&playtype=invite&ft=1&id=826311545794", t, "GET");
}, function(n) {
    var r = n || "act/ts/dolink?action=generate&tid=" + t;
    return (0, e.wxReq)(r, {}, "GET");
});

exports.getSaleInfo = function(e) {
    return n(e).then(function(e) {
        var t = e.data;
        return 0 == +t.errno && t.data && t.data.dlink ? n(t.data.dlink) : Promise.reject(t);
    }).catch(function(e) {
        return Promise.reject(e);
    });
};