var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (i.userInfo.hasLogin && !0 !== e) return Promise.resolve();
    if (o) return o;
    return o = function e() {
        var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return i.userInfo.getCode(r).then(function(r) {
            return i.userInfo.auth().then(function(i) {
                var a = {
                    signature: i.signature,
                    rawData: i.rawData,
                    encryptedData: i.encryptedData,
                    iv: i.iv
                };
                return r.code ? a.code = r.code : r.openid && (a.openid = r.openid), o && (a.reLogin = !0), 
                (0, t.default)({
                    method: "POST",
                    url: u.default.login.url,
                    data: a
                }).then(function(r) {
                    if (!r || 0 !== r.ret) return Promise.reject(r);
                    var t = r.userInfo || {};
                    return t.app_openid && t.cmnid && t.news_token && t.openid && t.unionid ? t : o ? Promise.reject(r) : (n.default.error("login返回值中部分关键字段出现空数据, 重新发起登录请求", t), 
                    e(!0, !0));
                });
            });
        });
    }(e).then(function(e) {
        return o = null, i.userInfo.saveToken(e), i.userInfo.hasLogin = !0, e;
    }).catch(function(e) {
        return o = null, r.default.isString(e) && -1 !== e.indexOf("cancelEvent") || wx.showToast({
            title: "登录失败",
            icon: "none"
        }), n.default.error("登录发生错误：", e), Promise.reject(e);
    });
};

var r = e(require("../utils/mlodash")), n = e(require("../utils/logger")), t = e(require("./wxrequest")), u = e(require("./url")), i = require("../store/index"), o = null;