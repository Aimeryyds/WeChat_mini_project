var e = require("../../js/event.js"), t = require("../../js/util.js"), o = require("../../js/const.js"), n = (getApp(), 
getApp().global), s = {
    "scope.userLocation": "此操作需要您允许获取地理位置",
    "scope.address": "此操作需要您允许获取通信地址",
    "scope.userInfo": "此操作需要您允许获取用户信息",
    "scope.writePhotosAlbum": "此操作需要您允许访问相册",
    getPhoneNumber: "此操作需要您允许获取手机号"
};

Component({
    properties: {},
    data: {
        show: !1,
        msg: "请求授权",
        type: ""
    },
    ready: function(e) {},
    methods: {
        authorize: function(e) {
            switch (this.data.type) {
              case "openSetting":
              default:
                this.setData({
                    show: !1
                });
            }
        },
        hide: function(t) {
            this.setData({
                show: !1
            }), e.emit("hide");
        },
        show: function(a, i, r) {
            var u = this, c = s[i] || s[a] || this.data.msg;
            return new Promise(function(s, h) {
                if (i) wx.getSetting({
                    success: function(t) {
                        var o = t.authSetting[i];
                        void 0 !== o && !o || r && !o ? (u.setData({
                            show: !0,
                            type: a,
                            msg: c
                        }), e.on("scope.userInfo", u, function(t) {
                            e.removeAll(u), t.rawData && s();
                        })) : s();
                    }
                }); else switch (a) {
                  case "getPhoneNumber":
                    t.login().then(function() {
                        t.fetch(o.api.getUserInfo, {}, {}, "GET").then(function(t) {
                            0 == (t = t.data).code && t.data.mobile && (n.userInfo.phoneNumber = t.data.mobile), 
                            n.userInfo.phoneNumber ? s() : (u.setData({
                                show: !0,
                                type: a,
                                msg: c
                            }), e.on("scope.phoneNumber", u, function(t) {
                                e.removeAll(u), t && s();
                            }));
                        });
                    });
                }
                e.on("hide", u, function(t) {
                    e.removeAll(u), h();
                });
            });
        },
        handleGetUserInfo: function(t) {
            if (t.detail.rawData) {
                var o = JSON.parse(t.detail.rawData);
                n.userInfo = Object.assign(n.userInfo, o);
            }
            e.emit("scope.userInfo", t.detail);
        },
        handleGetPhoneNumber: function(s) {
            if (s.detail.encryptedData) {
                var a = {
                    iv: s.detail.iv,
                    encrypted_data: s.detail.encryptedData
                };
                $auth.authLogin(function() {
                    t.postJson(o.api.getPhoneNumber, {}, a).then(function(t) {
                        if (0 === (t = t.data).code) {
                            var o = t.data.phone_number;
                            n.userInfo.phoneNumber = o, e.emit("scope.phoneNumber", !0);
                        } else wx.showToast({
                            icon: "none",
                            title: "获取手机号码失败"
                        }), e.emit("scope.phoneNumber", !1);
                    });
                });
            } else e.emit("scope.phoneNumber", !1);
        }
    }
});