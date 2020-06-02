var n = require("../../network/index"), e = require("../../store/index"), o = require("../../services/report"), t = getApp().global;

function s() {
    return new Promise(function(n, e) {
        wx.login({
            success: function(e) {
                n(e);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}

function i(n) {
    var e = t.comPostInfo;
    return new Promise(function(o, t) {
        return function(n, e) {
            return new Promise(function(o, t) {
                wx.request({
                    url: n,
                    data: e,
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(n) {
                        o(n);
                    },
                    fail: function(n) {
                        t(n);
                    }
                });
            });
        }("https://wxapp.inews.qq.com/login?1=1", Object.assign({}, e, n)).then(function(n) {
            o(n);
        }, function(n) {
            t(n), wx.showToast({
                title: "网络错误",
                icon: "success",
                duration: 2e3
            });
        });
    });
}

function r() {
    var n = t.comPostInfo, e = {};
    return new Promise(function(o, r) {
        s().then(function(s) {
            Object.assign(e, s), new Promise(function(n, e) {
                wx.getUserInfo({
                    lang: "zh_CN",
                    success: function(e) {
                        wx.setStorage({
                            key: "userInfo",
                            data: e.userInfo
                        }), n(e);
                    },
                    fail: function(n) {
                        e(n);
                    }
                });
            }).then(function(s) {
                Object.assign(e, s), t.userInfo = s.userInfo, t.mta.Data.userInfo = s.userInfo, 
                i(e).then(function(s) {
                    Object.assign(n, s.data.userInfo), t.mta.Data.userInfo.open_id = s.data && s.data.userInfo ? s.data.userInfo.openid : "", 
                    s.data.userInfo.rawData = e.rawData, s.data.userInfo.avatarUrl = e.userInfo.avatarUrl, 
                    s.data.userInfo.nickName = e.userInfo.nickName, function(n) {
                        var e = t.comPostInfo;
                        if (n) {
                            var o = n;
                            e.cmnid = o.cmnid, e.unionid = o.unionid, e.rawData = o.rawData;
                        }
                    }(s.data.userInfo), o(s);
                }, function(n) {
                    r(n);
                });
            }, function(n) {
                r(n);
            });
        }, function(n) {
            r(n);
        });
    });
}

function c() {
    return e.userInfo.openid && e.userInfo.cmnid && e.userInfo.rawData;
}

module.exports = {
    checkLogin: function(s, i, r, c) {
        (0, n.login)().then(function(n) {
            t.comPostInfo || (t.comPostInfo = {}), t.userInfo || (t.userInfo = {}), t.comPostInfo = Object.assign(t.comPostInfo, e.userInfo), 
            t.userInfo = Object.assign(t.userInfo, e.userInfo.userInfo), r(s, i), (0, o.report)({
                opType: "login_success_event"
            });
        }).catch(function(n) {
            (0, o.report)({
                opType: "login_fail_event"
            }), c && c(s, i);
        });
    },
    getLoginCode: s,
    hasLogin: c,
    isMe: function(n) {
        return c() && n && n.replace("cmn:", "") == t.comPostInfo.cmnid;
    },
    checkLoginSessionKey: function() {
        c() && wx.checkSession({
            success: function(n) {
                (0, o.report)({
                    opType: "check_session_ok_event"
                });
            },
            fail: function(n) {
                (0, o.report)({
                    opType: "check_session_outdate_event"
                }), wx.getSetting({
                    success: function(n) {
                        n.authSetting["scope.userInfo"] && r().then(function(n) {
                            (0, o.report)({
                                opType: "login_success_event"
                            });
                        }, function(n) {
                            (0, o.report)({
                                opType: "login_fail_event"
                            });
                        });
                    },
                    fail: function(n) {}
                });
            }
        });
    }
};