Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getStreaming = exports.streamingAPI = exports.videocheck = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), t = "";

exports.videocheck = function(t, r, i) {
    return (0, e.wxReq)("api/wechat/videocheck?path=" + r + "&type=M3U8_FLV_264_480&fromuk=" + i, {}, "GET", null, t);
}, exports.streamingAPI = function(r, i) {
    return i ? (t = i, (0, e.wxReq)("api/wechat/videostream.m3u8?audiotoken=" + i, {}, "POST", null, r)) : Promise.reject();
}, exports.getStreaming = function() {
    return "https://pan.baidu.com/api/wechat/videostream.m3u8?audiotoken=" + t + "&clienttype=25";
};