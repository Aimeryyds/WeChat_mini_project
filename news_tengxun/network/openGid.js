var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    n.default.info("调用getOpenGid, shareTicket:", e), "devtools" === o.systemInfo.platform && (o.shareInfo.openGId = "GalP50O5vt40XezSekW6iKjATIQs");
    if (r) return r;
    if (!e) return Promise.resolve(o.shareInfo.openGId);
    return r = d(e).then(function(e) {
        return i.default.getOpenGId(wx.cloud.CloudID(e.cloudID)).then(function(e) {
            return n.default.info("调用云函数getOpenGId: ", e), t.default.get(e, "data.openGId") ? e : Promise.reject(e);
        });
    }).catch(function(r) {
        return n.default.error("调用云函数getOpenGId失败, 开始调用后端API：", r), a(e).catch(function(r) {
            return r && r.ret <= -4e4 ? (n.default.info("重新调用getGId:", r), a(e, !0)) : Promise.reject(r);
        });
    }).then(function(e) {
        return (e = e.data).openGId ? o.shareInfo.openGId = e.openGId : (o.shareInfo.openGId = "", 
        n.default.error("换取openGId返回非法值:", e)), r = null, o.shareInfo.openGId;
    }).catch(function(e) {
        return n.default.error("换取openGId发生错误：", e), o.shareInfo.openGId = "", r = null, 
        o.shareInfo.openGId;
    });
};

var r, t = e(require("../utils/mlodash")), n = e(require("../utils/logger")), o = require("../store/index"), u = require("./request"), i = e(require("./cloud")), f = e(require("./url"));

function d(e) {
    return new Promise(function(r, t) {
        wx.getShareInfo({
            shareTicket: e,
            success: function(e) {
                n.default.info("wx.getShareInfo：", e), r(e);
            },
            fail: function(e) {
                n.default.error("wx.getShareInfo 出错：", e), t(e);
            }
        });
    });
}

function a(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return o.userInfo.getCode(r).then(function(r) {
        return d(e).then(function(e) {
            var t = {
                encryptedData: e.encryptedData,
                iv: e.iv
            };
            return r.code && (t.code = r.code), u.request.post(f.default.getGid, t);
        });
    }).then(function(e) {
        return n.default.info("调用getGid结果:", e), e && 0 === e.ret ? e : Promise.reject(e);
    });
}