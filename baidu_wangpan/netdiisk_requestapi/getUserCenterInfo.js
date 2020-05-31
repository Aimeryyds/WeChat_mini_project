Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.userCenter = void 0;

var e = require("../netdisk_utils/wxRequestApi.js");

exports.userCenter = {
    getUserBaseInfo: function() {
        return (0, e.wxReq)("api/wechat/userinfo", {}, "GET");
    },
    getUserInfo: function() {
        return (0, e.wxReq)("rest/2.0/membership/user/info?method=query", {}, "GET");
    },
    getUser: function() {
        return (0, e.wxReq)("rest/2.0/membership/user?method=query", {}, "GET");
    },
    getUserQuota: function() {
        return (0, e.wxReq)("api/quota", {}, "GET");
    }
};