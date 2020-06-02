var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    if (i.userInfo.openid) return Promise.resolve(i.userInfo.openid);
    if (r) return r;
    return r = o.default.getOpenId().then(function(e) {
        return t.default.info("调用云函数getOpenId: ", e), e.openid ? e.openid : Promise.reject(e);
    }).catch(function(e) {
        return t.default.error("云函数getOpenId获取openid发生错误，调用后端code2openid", e), i.userInfo.getCode(!0).then(function(e) {
            return e && e.code ? (0, n.default)({
                method: "post",
                url: u.default.code2openid.url,
                data: {
                    code: e.code
                }
            }) : Promise.reject(e);
        }).then(function(e) {
            return t.default.info("后端code2openid返回值：", e), e && 0 === e.ret && e.openid ? e.openid : Promise.reject(e);
        });
    }).then(function(e) {
        r = null, i.userInfo.openid = e;
        try {
            t.default.info("openid写入storage中缓存的:", e), wx.setStorageSync("openid", e);
        } catch (e) {}
    }).catch(function(e) {
        r = null;
        try {
            var n = wx.getStorageSync("openid");
            t.default.info("降级使用storage中缓存的openid:", n), n && (i.userInfo.openid = n);
        } catch (e) {}
    });
};

e(require("../utils/mlodash"));

var r, t = e(require("../utils/logger")), n = e(require("./wxrequest")), o = e(require("./cloud")), u = e(require("./url")), i = require("../store/index");

(i.constant.reqStatus || {}).rejected;