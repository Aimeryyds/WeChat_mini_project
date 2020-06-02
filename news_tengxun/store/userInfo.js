var n = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = n(require("../utils/mlodash")), t = n(require("../utils/logger")), i = require("../services/authSetting");

function o() {
    return new Promise(function(n, e) {
        wx.login({
            success: function(e) {
                t.default.info("wx.login：", e), n(e);
            },
            fail: function(n) {
                t.default.error("wx.login 出错：", n), e(n);
            }
        });
    });
}

var r = {
    name: "userInfo",
    state: {
        authSetting: null,
        cloudID: null,
        encryptedData: null,
        iv: null,
        userInfo: {},
        rawData: null,
        signature: null,
        avatarUrl: null,
        city: null,
        country: null,
        gender: null,
        language: null,
        nickName: null,
        province: null,
        openid: null,
        unionid: null,
        news_token: null,
        cmnid: null,
        app_openid: null,
        coral_uid: null,
        uin: null,
        uuid: null,
        hasLogin: !1,
        initOver: !1,
        hasRefreshCodeOnce: !1
    },
    getter: {
        reqParams: function() {
            return {
                openid: this.openid,
                unionid: this.unionid,
                cmnid: this.cmnid,
                news_token: this.news_token,
                app_openid: this.app_openid,
                uuid: this.uuid
            };
        }
    },
    setter: {},
    method: {
        saveUserInfo: function(n) {
            t.default.info("缓存用户信息");
            try {
                wx.setStorageSync("userInfo", n.userInfo), wx.setStorageSync("rawData", n.rawData);
            } catch (n) {}
            this.rawData = n.rawData, this.userInfo = n.userInfo, this.avatarUrl = n.userInfo.avatarUrl, 
            this.city = n.userInfo.city, this.country = n.userInfo.country, this.gender = n.userInfo.gender, 
            this.language = n.userInfo.language, this.nickName = n.userInfo.nickName, this.province = n.userInfo.province;
        },
        getUserInfoWhenAuth: function() {
            var n = this;
            return (0, i.getAuthSetting)().then(function(e) {
                return e && e[i.scope.userInfo] ? (o = n._$store.systemInfo.language, new Promise(function(n, e) {
                    wx.getUserInfo({
                        lang: o,
                        success: function(e) {
                            t.default.info("wx.getUserInfo: ", e), n(e);
                        },
                        fail: function(n) {
                            t.default.error("wx.getUserInfo 出错：", n), e(n);
                        }
                    });
                })) : (t.default.info("用户未授权scope.userInfo, 不能直接读取用户信息"), Promise.reject(e));
                var o;
            });
        },
        refreshUserInfo: function() {
            var n = this;
            return this.getUserInfoWhenAuth().then(function(e) {
                n.saveUserInfo(e);
            }).catch(function(i) {
                if (e.default.isEmpty(n.userInfo)) try {
                    var o = wx.getStorageSync("userInfo");
                    o && o.nickName && (n.userInfo = o, n.avatarUrl = o.avatarUrl, n.city = o.city, 
                    n.country = o.country, n.gender = o.gender, n.language = o.language, n.nickName = o.nickName, 
                    n.province = o.province);
                } catch (n) {}
                if (!n.rawData) try {
                    var r = wx.getStorageSync("rawData");
                    r && (n.rawData = r);
                } catch (n) {}
                t.default.info("降级从storage缓存中读取userInfo", n.userInfo, n.rawData);
            });
        },
        auth: function() {
            var n = this;
            return this.getUserInfoWhenAuth().catch(function(e) {
                return new Promise(function(e, i) {
                    t.default.info("拉起授权框确认框"), n.emit(n.event.showAuthButton, e, i);
                });
            }).then(function(e) {
                return n.saveUserInfo(e), e;
            });
        },
        getCode: function() {
            var n = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return !this.hasRefreshCodeOnce || e ? (this.hasRefreshCodeOnce = !0, o()) : new Promise(function(n, e) {
                wx.checkSession({
                    success: function(e) {
                        t.default.info("wx.checkSession：", e), n(e);
                    },
                    fail: function(n) {
                        t.default.error("wx.checkSession 出错：", n), e(n);
                    }
                });
            }).then(function(e) {
                return n.openid ? {
                    openid: n.openid
                } : o();
            }).catch(function() {
                return t.default.info("session过期，调用wx.login刷新code"), o();
            });
        },
        saveToken: function(n) {
            this.app_openid = n.app_openid, this.cmnid = n.cmnid, this.news_token = n.news_token, 
            this.openid = n.openid, this.unionid = n.unionid, this.coral_uid = n.coral_uid, 
            this.uin = n.uin;
            try {
                t.default.info("持久化token，openid=", this.openid), wx.setStorageSync(this.openid, {
                    openid: this.openid,
                    news_token: this.news_token,
                    cmnid: this.cmnid,
                    unionid: this.unionid,
                    app_openid: this.app_openid,
                    coral_uid: this.coral_uid,
                    uin: this.uin
                });
            } catch (n) {
                t.default.error("持久化的token信息失败", n);
            }
        },
        getToken: function() {
            if (this.openid) try {
                var n = wx.getStorageSync(this.openid);
                t.default.info("持久化数据中的token信息, openid=".concat(this.openid, ", token="), n), e.default.isObject(n) && Object.assign(this, {
                    openid: n.openid,
                    news_token: n.news_token,
                    cmnid: n.cmnid,
                    unionid: n.unionid,
                    app_openid: n.app_openid,
                    coral_uid: n.coral_uid,
                    uin: n.uin
                });
            } catch (n) {
                t.default.error("持久化数据中未找到token信息, 出现错误：err=", n);
            } else t.default.error("无法读取持久化的token信息，无效的openid=", this.openid);
        }
    },
    event: [ "showAuthButton", "initOver" ]
};

exports.default = r;