function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("./utils/bomPolyfill.js"));

var t = require("./network/api.js"), o = e(require("./utils/const.js")), a = e(require("./utils/notification"));

App({
    globalData: {},
    flash: {},
    setFlash: function(e, t) {
        this.flash[e] = t;
    },
    getFlash: function(e) {
        var t = this.flash[e];
        return delete this.flash[e], t;
    },
    logs: [],
    log: function(e) {
        o.default.log && console.log(e);
    },
    onLaunch: function(e) {
        var t = this;
        a.default.register(o.default.action.LOGIN, this, function(e) {
            console.log(e), t.globalData.accessToken = e.data.accessToken, t.globalData.userinfo = e.data.userInfo, 
            wx.setStorage({
                key: "accessToken",
                data: e.data.accessToken
            }), wx.setStorage({
                key: "userinfo",
                data: e.data.userInfo
            });
        }), this.init();
    },
    onShow: function(e) {
        this.globalData.scene = e.scene;
        var t = e.query.shareCode;
        this.checkShareCode(t);
    },
    checkShareCode: function(e) {
        e && new Promise(function(t, o) {
            wx.getStorage({
                key: "shareCode",
                success: function(o) {
                    t(o.data != e);
                },
                fail: function(e) {
                    t(!0);
                }
            });
        }).then(function(o) {
            return o ? (0, t.updateShareCode)({
                code: e
            }) : Promise.reject("no need to update shareCode");
        }).then(function(t) {
            wx.setStorage({
                key: "shareCode",
                data: e
            }), console.log("yes need to update shareCode---------save to local");
        }).catch(function(e) {
            console.log(e);
        });
    },
    getConfig: function() {
        var e = this;
        (0, t.getSysConfig)().then(function(t) {
            e.globalData.color = t.data.color, e.globalConfig = t.data, wx.setStorage({
                key: "config",
                data: t.data
            }), a.default.post(o.default.action.QUERY_CONFIG_SUCCESS, t.data);
        });
    },
    init: function() {
        var e = wx.getStorageSync("accessToken");
        e && (this.globalData.accessToken = e, this.globalData.userinfo = wx.getStorageSync("userinfo"));
        var o = wx.getExtConfigSync();
        o && o.compToken && (wx.setStorage({
            key: "token",
            data: o.compToken
        }), this.globalData.token = o.compToken), new Promise(function(e, t) {
            wx.checkSession({
                success: function() {
                    e(!0);
                },
                fail: function() {
                    e(!1);
                }
            });
        }).then(function(e) {
            if (!e) return (0, t.loginWx)();
        }), this.getConfig();
    }
});