Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.withdraw = exports.getSendDetail = exports.getSendList = exports.saveTransfer = exports.getMyCollectionList = exports.sendFile = exports.verifyTrans = exports.createTrans = exports.getTransInfo = exports.getTransAssistantParam = exports.sendFailNavNoMap = exports.errMap = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), t = "rest/2.0/xpan/trans/v1";

exports.errMap = {
    42900: "不能向自己发送文件",
    42901: "发送失败，参与人数已达上限",
    42902: "该文件收集任务已结束",
    42903: "发送失败，请稍后再试",
    42904: "已有重名任务，请修改后再试",
    42314: "包含限制分享的文件，请检查后再试",
    42204: "文件数量超限，请选择部分发送",
    31171: "其他任务正在进行中，请稍后再试",
    31075: "文件数量超限，请选择部分发送",
    42918: "该文件已被撤回，请查看其它文件",
    42919: "撤回失败，请重新尝试",
    31066: "文件已不存在"
}, exports.sendFailNavNoMap = {
    42900: !0,
    42901: !0,
    42902: !0,
    42904: !0
}, exports.getTransAssistantParam = function(e) {
    return "surl=" + e.surl + "&title=" + e.title + "&expire_time=" + e.expire_time + "&username=" + e.username;
}, exports.getTransInfo = function() {
    return (0, e.wxReq)(t + "/info", {}, "GET", "");
}, exports.createTrans = function(r) {
    return (0, e.wxReq)(t + "/create", r, "POST", "");
}, exports.verifyTrans = function(r) {
    return (0, e.wxReq)(t + "/verify", {
        surl: r
    }, "POST", "");
}, exports.sendFile = function(r) {
    return (0, e.wxReq)(t + "/sendfile", r, "POST", "");
}, exports.getMyCollectionList = function(r) {
    var s = r.start, n = void 0 === s ? 0 : s, i = r.limit, o = void 0 === i ? 15 : i;
    return (0, e.wxReq)(t + "/list?start=" + n + "&limit=" + o, {}, "GET", "");
}, exports.saveTransfer = function(r) {
    return (0, e.wxReq)(t + "/transfer", r, "POST", "");
}, exports.getSendList = function(r) {
    return (0, e.wxReq)(t + "/listdetail", r);
}, exports.getSendDetail = function(r) {
    return (0, e.wxReq)(t + "/senddetail", r);
}, exports.withdraw = function(r) {
    return (0, e.wxReq)(t + "/withdraw", r, "POST");
};