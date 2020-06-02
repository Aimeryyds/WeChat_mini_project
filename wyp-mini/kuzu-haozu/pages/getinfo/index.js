var e = require("../template/index.js"), a = getApp(), t = {
    data: {
        msg_template: "检测到您的账号还未绑定手机，请绑定手机号",
        sure_template: "绑定手机号",
        hidden_msg: !1
    },
    userInfoHandler: function(e) {
        var t = a.getSecret();
        "getPhoneNumber:ok" == e.detail.errMsg && wx.getStorage({
            key: "code",
            success: function(n) {
                wx.showLoading({
                    mask: !0
                }), wx.request({
                    url: a.globalData.uchaozuBase + "/api/miniapps/login/wxlogin",
                    data: {
                        currtime: t.currtime,
                        sign: t.sign,
                        code: n.data,
                        iv: e.detail.iv,
                        data: e.detail.encryptedData
                    },
                    success: function(e) {
                        wx.hideLoading(), 200 == e.data.code ? (wx.setStorage({
                            key: "userInfo",
                            data: e.data.data
                        }), a.globalData.userInfo = e.data.data, wx.getStorage({
                            key: "browse",
                            success: function(e) {
                                wx.request({
                                    url: "https://uc.haozu.com/api/miniapps/view/add",
                                    data: {
                                        uid: a.globalData.userInfo.user_id,
                                        currtime: t.currtime,
                                        sign: t.sign,
                                        data: e.data
                                    },
                                    success: function(e) {
                                        wx.removeStorage({
                                            key: "browse",
                                            success: function(e) {}
                                        }), wx.removeStorage({
                                            key: "building",
                                            success: function(e) {}
                                        }), wx.removeStorage({
                                            key: "space",
                                            success: function(e) {}
                                        });
                                    }
                                });
                            },
                            fail: function(e) {}
                        }), wx.reLaunch({
                            url: "/pages/my/index?phone=" + e.data.data.mobile
                        })) : 300 == e.data.code ? wx.showModal({
                            content: "您的微信尚未绑定手机号，是否前往绑定",
                            success: function(e) {
                                e.confirm ? wx.navigateTo({
                                    url: "/pages/bind/index"
                                }) : e.cancel;
                            }
                        }) : wx.showToast({
                            icon: "none",
                            title: e.data.msg,
                            mask: !0
                        });
                    },
                    fail: function(e) {}
                });
            }
        });
    },
    refuse: function() {
        wx.redirectTo({
            url: "/pages/login/index"
        });
    },
    showFn: function() {
        this.setData({
            hidden_template: !0
        });
    },
    sureFn_template: function() {
        wx.redirectTo({
            url: "/pages/bind/index"
        });
    },
    backFn_template: function() {
        this.setData({
            hidden_template: !1
        });
    }
};

t.data.hidden_template = e.hidden_template, Page(t);