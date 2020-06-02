var t = getApp(), e = t.dataRUL, a = require("../../utils/gio-minp/index.js").default, o = require("../../sdk/gioConfig.js").default;

a("setConfig", o), console.log("url"), console.log(e), console.log("url"), Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        userInfo: []
    },
    onLoad: function(t) {
        console.log(t);
        var e = this;
        3 != t.ret_type && 4 != t.ret_type && 5 != t.ret_type || e.setData({
            ret_type: t.ret_type
        }), t.maidian && e.setData({
            returnMain: t.maidian
        }), t.d_url && e.setData({
            returnD_url: t.d_url
        }), t.jjrMain && e.setData({
            returnjjrMain: t.jjrMain
        }), void 0 === t.url ? 4 == t.ret_type ? (this.setData({
            return_url: "/pages/sellHouse/sellHouse?cityId=" + t.cityId,
            cityId: t.cityId
        }), console.log("卖房---", "/pages/sellHouse/sellHouse?cityId=" + t.cityId)) : 5 == t.ret_type ? (this.setData({
            return_url: "/pages/rentOut/rentOut?cityId=" + t.cityId,
            cityId: t.cityId
        }), console.log("。。。。。", "/pages/rentOut/rentOut?cityId=" + t.cityId)) : this.setData({
            return_url: "/pages/user/user"
        }) : void 0 !== t.ret_type && 1 == t.ret_type ? void 0 !== t.hid ? this.setData({
            return_url: "/pages/" + t.url + "?bid=" + t.bid + "&hid=" + t.hid + "&cityId=" + t.cityId + "&type=" + t.type
        }) : this.setData({
            return_url: "/pages/" + t.url + "?bid=" + t.bid
        }) : void 0 !== t.ret_type && 2 == t.ret_type ? this.setData({
            return_url: "/pages/" + t.url + "?cityId=" + t.cityId
        }) : void 0 !== t.ret_type && 3 == t.ret_type ? (this.setData({
            return_url: "/pages/siqing/siqing?cityId=" + t.cityId + "&isLing=1&activityid=" + t.activityid,
            cityId: t.cityId,
            isLing: 1,
            activityid: t.activityid
        }), console.log("链接---", t.url + "?cityId=" + t.cityId + "&isLing=1&activityid=" + t.activityid)) : 1 == t.resume_type ? this.setData({
            return_url: "/pages/" + t.url + "?cityName=" + t.cityName + "&cityId=" + t.cityId + "&userName=" + t.userName + "&userPhone=" + t.userPhone + "&storesTxt=" + t.storesTxt + "&storesVal=" + t.storesVal + "&storesName=" + t.storesName + "&recommenderuid=" + t.recommenderuid + "&rangekey=" + t.rangekey + "&storesHide=" + t.storesHide + "&loginSuccessStatus=" + t.loginSuccessStatus
        }) : this.setData({
            return_url: "/pages/" + t.url + "?houseId=" + t.houseId + "&cityId=" + t.cityId
        }), wx.login({
            success: function(t) {
                e.setData({
                    code: t.code
                });
            }
        });
    },
    bindGetUserInfo: function(t) {
        if (console.log(t.detail.userInfo), t.detail.userInfo) {
            var e = this;
            wx.login({
                success: function(t) {
                    console.log(t);
                    var a = t.code;
                    wx.getUserInfo({
                        success: function(t) {
                            var o = t.rawData, i = t.signature, n = t.encryptedData, s = t.iv;
                            console.log("===============11111111111"), console.log("code:" + a + "\nrawData:" + o + "\nsignature:" + i + "\nencryptedData:" + n + "\niv:" + s), 
                            console.log("===============11111111111"), wx.request({
                                url: "",
                                data: {
                                    code: a,
                                    rawData: o,
                                    signature: i,
                                    encryptedData: n,
                                    iv: s
                                },
                                method: "post",
                                success: function(t) {
                                    console.log("userInfo"), console.log(t), console.log("userInfo"), e.setData({
                                        userInfo: e.data.userInfo
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    },
    getPhoneNumber: function(e) {
        var o = this;
        console.log("res-", e);
        var i = e.timeStamp, n = e.detail.encryptedData, s = e.detail.iv, r = t.globalData.url_host;
        console.log("微信登陆"), console.log("weixin----", o.data.return_url), wx.request({
            url: r + "/user/wxxiaochengxulogin",
            data: {
                code: o.data.code,
                encryptedData: n,
                iv: s
            },
            method: "post",
            dataType: "json",
            success: function(e) {
                if (console.log("微信+++——---", e), 200 == e.data.status) {
                    wx.setStorageSync("loginStatus", 1), wx.setStorageSync("userInfo", e.data.data), 
                    console.log("res.timeStamp:", i, "---that.data.code:", o.data.code);
                    var n = {
                        timeStamp: i,
                        code: o.data.code
                    }, s = Object.assign(e.data.data, n);
                    if (wx.setStorageSync("kajuanArr", s), o.setData({
                        loginSuccessStatus: 2
                    }), t.linksocket(), a("identify", e.data.data.openid), a("setVisitor", e.data.data), 
                    a("setUserId", e.data.data.uid), a("setUser", {
                        id: e.data.data.uid,
                        name: e.data.data.nickname
                    }), o.data.returnMain) {
                        d = t.tdsdk;
                        console.log("sdk", d), d.appEvent.eventId({
                            eventLabel: 1
                        }), d.appEvent.eventId({
                            eventLabel: 3
                        }), 2 == o.data.returnD_url && d.appEvent.eventId({
                            eventLabel: 9
                        }), o.data.returnjjrMain ? d.appEvent.eventId({
                            eventLabel: 10
                        }) : d.appEvent.eventId({
                            eventLabel: 8
                        }), wx.request({
                            url: r + "/wxim/wxcallback",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                                deviceSource: 3,
                                dxdeviceId: o.data.dxDeviceId
                            },
                            data: {
                                click_id: t.globalData.click_id,
                                action_type: "RESERVATION",
                                value: 40,
                                user_action_set_id: 1110064786
                            },
                            method: "post",
                            success: function(t) {
                                console.log("成功666:", t);
                            }
                        });
                    }
                    wx.showToast({
                        title: "登录成功！",
                        success: function() {
                            setTimeout(function() {
                                console.log("that.data.url", o.data.return_url), wx.redirectTo({
                                    url: o.data.return_url
                                });
                            }, 1200);
                        }
                    });
                    var d = t.tdsdk;
                    console.log("sdk", d), d.account.login({
                        accountId: e.data.data.uid,
                        name: e.data.data.loginname,
                        age: null,
                        gender: e.data.data.gender,
                        type: null,
                        custom: null
                    });
                } else wx.showToast({
                    title: "登陆失败，请稍后再试！",
                    icon: "none"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    phoneLoginBtn: function() {
        console.log("========", this.data.ret_type), "undefined" == typeof return_url ? (console.log(1), 
        console.log("this.data.return_url--", this.data.return_url, this.data.cityId), 3 == this.data.ret_type ? (console.log(3), 
        console.log("this.data.return_url--", this.data.return_url, this.data.cityId), wx.redirectTo({
            url: "../login/phone_login?ret_type=3&cityId=" + this.data.cityId + "&activityid=" + this.data.activityid + "&url=" + this.data.return_url
        })) : 4 == this.data.ret_type ? (console.log("城市城市", this.data.cityId), wx.redirectTo({
            url: "../login/phone_login?cityId=" + this.data.cityId + "&ret_type=4"
        })) : 5 == this.data.ret_type ? (console.log("。。。", this.data.cityId), wx.redirectTo({
            url: "../login/phone_login?cityId=" + this.data.cityId + "&ret_type=5"
        })) : wx.redirectTo({
            url: "../login/phone_login"
        })) : (console.log(2), wx.redirectTo({
            url: "../login/phone_login?url=" + this.data.return_url
        }));
    }
});