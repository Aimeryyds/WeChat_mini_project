var e = require("../../14E98D478A740DDF728FE5401BCCC841.js"), o = getApp(), n = void 0;

Component({
    properties: {
        loginPop: {
            vaule: !1,
            type: Boolean
        },
        dengluShow: {
            vaule: !1,
            type: Boolean
        },
        phoneShow: {
            value: !1,
            type: Boolean
        }
    },
    data: {
        dengluW: 580,
        phoneW: 540
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    methods: {
        closeDenglu: function() {
            this.setData({
                dengluW: 0
            });
        },
        closePhone: function() {
            this.setData({
                phoneW: 0
            });
        },
        showPhone: function() {
            this.setData({
                phoneShow: !0,
                dengluShow: !1,
                phoneW: 540,
                loginPop: !0
            });
        },
        showDenglu: function() {
            this.setData({
                dengluShow: !0,
                phoneShow: !1,
                dengluW: 580,
                loginPop: !0
            });
        },
        closeLogin: function() {
            this.setData({
                loginPop: !1
            });
        },
        onformSubmit: function(e) {
            var o = this;
            void 0 !== e.detail.formId && (n = e.detail.formId), o.closeDenglu();
        },
        ongetAuthor: function(t) {
            var i = this;
            try {
                wx.clearStorageSync();
            } catch (t) {}
            if ("getUserInfo:ok" != t.detail.errMsg) return o.aldstat.sendEvent("首页一键登录微信授权点击否", "不授权"), 
            i.closeLogin(), !1;
            o.aldstat.sendEvent("首页一键登录微信授权点击是", "授权");
            try {
                wx.setStorageSync("wxGetUserInfoAuth", !0);
            } catch (t) {}
            e.wxLogin(t), e.loginSuccess = function(t) {
                t && (o.globalData.isBindMobile ? (wx.setStorageSync("wxPhoneAuth", !0), i.triggerEvent("getUserInfo", {
                    formId: n
                }), i.closeLogin()) : (e.isBindMobile(), e.isBindMobileCallBack = function(e) {
                    e.data.is_bind_mobile ? (wx.setStorageSync("wxPhoneAuth", !0), o.globalData.isBindMobile = !0, 
                    i.triggerEvent("getUserInfo", {
                        formId: n
                    }), i.closeLogin()) : (o.globalData.isBindMobile = !1, i.showPhone());
                }), i.uploadFormid(n));
            };
        },
        getPhoneNumber: function(t) {
            var i = this;
            o.aldstat.sendEvent("所有提示用户是否绑定手机号", "是否绑定手机号"), wx.login({
                success: function(a) {
                    if (a.code) if ("getPhoneNumber:fail user deny" == t.detail.errMsg) o.aldstat.sendEvent("所有用户手机号绑定点击否", "手机号绑定点击否"), 
                    i.closeLogin(); else {
                        var s = t.detail.encryptedData, l = t.detail.iv;
                        o.aldstat.sendEvent("所有用户手机号绑定点击是", "手机号绑定点击是"), e.uploadMobilePhone(a.code, s, l, ""), 
                        e.uploadMobilePhoneCallBack = function(e) {
                            1 === e.data.result ? (wx.showToast({
                                title: "手机号绑定成功",
                                icon: "none",
                                duration: 2e3
                            }), wx.setStorageSync("wxPhoneAuth", !0), o.globalData.isBindMobile = !0, i.setData({
                                loginPop: !1
                            }), i.triggerEvent("getUserInfo", {
                                formId: n
                            })) : i.closeLogin();
                        };
                    } else i.closeLogin();
                },
                fail: function() {
                    i.closeLogin();
                }
            });
        },
        uploadFormid: function(n) {
            if (!n) return !1;
            if (o.currentUser.session_key) {
                var t = Date.parse(new Date()), i = {
                    api_key: o.opApiKey,
                    v: "1",
                    client_info: o.client_info,
                    session_key: o.currentUser.session_key,
                    call_id: t,
                    openId: o.wxpersonInfo.openid,
                    formIdList: n,
                    type: 1
                }, a = e.getsign(i);
                i.sig = a, wx.request({
                    url: o.apiurl + "whisper/saveFormId",
                    data: i,
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                    },
                    success: function(e) {},
                    fail: function(e) {}
                });
            }
        }
    }
});