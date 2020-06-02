Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.authLogin = s, exports.onAuthCancel = function(n) {
    p(n, !1);
}, exports.checkLoginAndUA = function(n, t, o, e) {
    s(function(n, t, o) {
        a = t, r = o, c().then(function(t) {
            t.authSetting["scope.userInfo"] ? s(d) : function(n) {
                p(n, !0);
            }(n);
        }, function(n) {});
    }.bind(this, t, function() {
        "function" == typeof o && o(n, t);
    }, function() {
        "function" == typeof e && e(n, t);
    }));
}, exports.bindAuthGetUserInfo = function(n, t) {
    t.detail && t.detail.userInfo ? (s(d), p(n, !1)) : p(n, !0);
}, exports.bindAuthGetPhoneNumber = function(n, t) {
    s(function() {
        t.detail && t.detail.encryptedData;
    });
};

var n = require("./const"), t = require("./promisify"), o = getApp().global, e = (0, 
t.promisify)(wx.checkSession), i = (0, t.promisify)(wx.login), f = (0, t.promisify)(wx.getUserInfo), u = (0, 
t.promisify)(wx.request), c = (0, t.promisify)(wx.getSetting), a = null, r = null;

function s(t) {
    e().then(function(n) {
        t && t();
    }, function(e) {
        !function(t) {
            if (t && "function" != typeof t) return new Error("callback 必须为函数");
            i().then(function(e) {
                if (e.code) {
                    var i = {
                        code: e.code
                    };
                    u({
                        url: n.config.login,
                        method: "POST",
                        data: i,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(n) {
                        n && n.data && 0 === n.data.ret ? (o.comPostInfo.cmnid = n.data.userInfo.cmnid, 
                        o.comPostInfo.unionid = n.data.userInfo.unionid, t && t()) : wx.showToast({
                            title: n.data.msg,
                            duration: 4e3
                        });
                    }, function(n) {
                        n && n.data && n.data.msg && wx.showToast({
                            title: n.data.msg,
                            duration: 2e3
                        });
                    });
                }
            });
        }(t);
    });
}

function d() {
    f().then(function(n) {
        o.userInfo = n.userInfo, o.comPostInfo.rawData = JSON.stringify(n.userInfo), "function" == typeof a && a(n);
    }, function(n) {
        "function" == typeof r && r(n);
    });
}

function p(n, t) {
    n.setData({
        showUserInfoAuthDialog: t
    });
}