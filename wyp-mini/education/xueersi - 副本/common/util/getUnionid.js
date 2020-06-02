function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function checkSession() {
    return new Promise(function(e, n) {
        wx.checkSession({
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}

function updateSessionKey() {
    return new Promise(function(e, n) {
        wx.login({
            success: function(t) {
                t.code ? _wepy2.default.request({
                    url: _path2.default.getOpenid,
                    data: {
                        jscode: t.code
                    }
                }).then(function(n) {
                    openid = n.data.data.open_id, wx.setStorage({
                        key: "openid",
                        data: openid
                    }), e(n);
                }) : n(t);
            },
            fail: function(e) {
                n(e);
            }
        });
    });
}

function getUserInfo() {
    return new Promise(function(e, n) {
        app.sensors.track("enter_wechat_sqpage", {
            enter_wechat_sqpage: "进入微信授权页面"
        }), wx.getUserInfo({
            success: function(n) {
                app.sensors.track("allow_sq", {
                    allow_sq: "允许授权"
                }), e(n);
            },
            fail: function(e) {
                app.sensors.track("refuse_sq", {
                    refuse_sq: "不允许授权"
                }), wx.showModal({
                    content: "如需正常使用训练营功能，请按确定并在设置中选中“用户信息”，然后按返回",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && wx.openSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] && getUserInfo();
                            }
                        });
                    }
                });
            }
        });
    });
}

function getUnionid(e) {
    return new Promise(function(n, t) {
        getUserInfo().then(function(t) {
            if (!(t && t.iv && t.encryptedData && e)) return !1;
            _wepy2.default.request({
                url: _path2.default.getUnionid,
                data: {
                    iv: t.iv,
                    encryptedData: t.encryptedData,
                    open_id: e
                },
                method: "post"
            }).then(function(e) {
                app.sensors.track("applet_user", {
                    applet_union_id: "获取微信union_id"
                }), wx.setStorage({
                    key: "unid",
                    data: e.data.data.union_id
                }), n(e.data.data.union_id);
            });
        });
    });
}

function getLoginStatus() {
    return checkSession().then(function() {
        return updateSessionKey();
    }).then(function(e) {
        return getUnionid(e.data.data.open_id);
    }).then(function(e) {
        return e;
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getLoginStatus = getLoginStatus;

var _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../axios/path.js"), _path2 = _interopRequireDefault(_path), app = getApp(), openid = "";