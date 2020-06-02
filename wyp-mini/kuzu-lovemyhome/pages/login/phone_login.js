var e = getApp(), t = require("../../sdk/dingxiang.js"), a = require("../../utils/md5.js"), o = require("../../utils/gio-minp/index.js").default, n = require("../../sdk/gioConfig.js").default;

o("setConfig", n), Page({
    data: {
        loginname: null,
        scode: null,
        iscode: null,
        time: "发送验证码",
        secend: 60,
        isSend: !1,
        checkCode: null,
        tuxingcode: null,
        codeStr: ""
    },
    onLoad: function(a) {
        var o = this;
        console.log("phone_login---", a);
        var n = this;
        a.maidian && n.setData({
            returnMain: a.maidian
        }), a.d_url && n.setData({
            returnD_url: a.d_url
        }), a.jjrMain && n.setData({
            returnjjrMain: a.jjrMain
        }), 4 != a.ret_type && 5 != a.ret_type || n.setData({
            ret_type: a.ret_type
        }), new t({
            appId: e.globalData.dxAppId
        }, function(e, t) {
            e ? console.log(e) : (o.setData({
                dxDeviceId: t
            }), void 0 === a.url ? (console.log("--------1111022", a.ret_type), 4 == a.ret_type ? (o.setData({
                return_url: "/pages/sellHouse/sellHouse?cityId=" + a.cityId
            }), console.log("卖房---", "/pages/sellHouse/sellHouse?cityId=" + a.cityId)) : 5 == a.ret_type ? (o.setData({
                return_url: "/pages/rentOut/rentOut?cityId=" + a.cityId
            }), console.log("...---", "/pages/rentOut/rentOut?cityId=" + a.cityId)) : o.setData({
                return_url: "/pages/user/user"
            })) : 1 == a.resume_type ? o.setData({
                return_url: "/pages/" + a.url + "?cityName=" + a.cityName + "&cityId=" + a.cityId + "&userName=" + a.userName + "&userPhone=" + a.userPhone + "&storesTxt=" + a.storesTxt + "&storesName=" + a.storesName + "&rangekey=" + a.rangekey + "&recommenderuid=" + a.recommenderuid
            }) : 3 == a.ret_type ? (console.log("ret_type---", a.ret_type), o.setData({
                return_url: "/pages/siqing/siqing?cityId=" + a.cityId + "&ret_type=3&isLing=1&activityid=" + a.activityid
            }), console.log("链接--", o.data.return_url, a.cityId, a.activityid)) : o.setData({
                return_url: "/pages/" + a.url + "?houseId=" + a.houseId + "&cityId=" + a.cityId
            }));
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    getPhoneNumber: function(e) {
        var t = this, a = e.detail.value;
        t.setData({
            loginname: a
        });
    },
    shuru: function(e) {
        var t = this, a = e.detail.value;
        console.log("hqyzm----", a), t.setData({
            srYzm: a
        });
    },
    codebtn: function() {
        this.setData({
            isRuleTrue: !0
        });
    },
    sendCode: function() {
        var t = this, a = e.globalData.url_host, o = /^[1][3,4,5,6,7,8,9][0-9]{9}$/, n = t.data.loginname;
        if (null != n) return o.test(n) ? (console.log(n), t.checkCode = a + "/appapi/user/v1/appcaptcha?mobile=" + n + "&type=2", 
        console.log(t.checkCode), t.setData({
            checkCode: t.checkCode
        }), void t.codebtn()) : (wx.showToast({
            title: "手机号输入错误",
            icon: "none"
        }), void t.setData({
            loginname: ""
        }));
        wx.showToast({
            title: "手机号不能为空",
            icon: "none"
        });
    },
    uptCode: function() {
        var t = this, a = e.globalData.url_host;
        console.log(t.data.loginname), t.codeStr = t.getRanNum(), t.checkCode = a + "/appapi/user/v1/appcaptcha?mobile=" + t.data.loginname + "&type=2", 
        console.log(t.checkCode), t.setData({
            checkCode: t.checkCode + t.codeStr
        });
    },
    formSubmit: function(t) {
        var a = this, n = /^[1][3,4,5,6,7,8,9][0-9]{9}$/, s = e.globalData.url_host;
        if (console.log("手机号登陆的按钮"), null == a.data.loginname) return wx.showToast({
            title: "手机号不能为空",
            icon: "none"
        }), !1;
        if (!n.test(a.data.loginname)) return wx.showToast({
            title: "手机号输入错误",
            icon: "none"
        }), !1;
        if (null == a.data.loginname) return wx.showToast({
            title: "手机号不能为空",
            icon: "none"
        }), !1;
        if (null == a.data.srYzm) return wx.showToast({
            title: "验证码不能为空",
            icon: "none"
        }), !1;
        var l = a.data.loginname, i = wx.getSystemInfoSync().brand;
        console.log(i);
        var d = a.data.loginname + "==" + a.getNow(), c = t.detail.value.scode;
        console.log(a.data.scode), wx.request({
            url: s + "/appapi/user/v1/loginbysms",
            method: "POST",
            data: {
                loginname: l,
                phone_brand: i,
                regdevicenumber: d,
                regplatform: 6,
                scode: c
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                if (console.log(t), 200 == t.data.status) {
                    if (wx.setStorageSync("loginStatus", 1), wx.setStorageSync("userInfo", t.data.data), 
                    o("setUserId", t.data.data.uid), e.linksocket(), a.data.returnMain) {
                        n = e.tdsdk;
                        console.log("sdk", n), n.appEvent.eventId({
                            eventLabel: 1
                        }), n.appEvent.eventId({
                            eventLabel: 3
                        }), 2 == a.data.returnD_url && n.appEvent.eventId({
                            eventLabel: 9
                        }), a.data.returnjjrMain ? n.appEvent.eventId({
                            eventLabel: 10
                        }) : n.appEvent.eventId({
                            eventLabel: 8
                        }), wx.request({
                            url: s + "/wxim/wxcallback",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                                deviceSource: 3,
                                dxdeviceId: this.data.dxDeviceId
                            },
                            data: {
                                click_id: e.globalData.click_id,
                                action_type: "RESERVATION",
                                value: 40,
                                user_action_set_id: 1110064786
                            },
                            method: "post",
                            success: function(e) {
                                console.log("成功666:", e);
                            }
                        });
                    }
                    wx.showToast({
                        title: "登录成功！",
                        success: function() {
                            setTimeout(function() {
                                wx.reLaunch({
                                    url: a.data.return_url
                                });
                            }, 1200);
                        }
                    });
                    var n = e.tdsdk;
                    console.log("sdk", n), n.account.login({
                        accountId: t.data.data.uid,
                        name: t.data.data.loginname,
                        age: null,
                        gender: t.data.data.gender,
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
    codeSubmit: function(t) {
        var o = this, n = t.detail.value.tuxingcode, s = e.globalData.url_host;
        if (null != n && "" != n) {
            var l = {
                mobile: o.data.loginname,
                code: n,
                type: 2,
                is_new: 1
            }, i = e.globalData.SMSdk.getDeviceId();
            console.log("deviceId", i), wx.request({
                url: s + "/appapi/user/v1/checkappcaptcha",
                method: "POST",
                data: l,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                success: function(e) {
                    if (console.log("-------"), console.log(e.data.status), console.log("-------"), 
                    200 != e.data.status) return wx.showToast({
                        title: "验证码输入错误",
                        icon: "none"
                    }), console.log(n), o.setData({
                        tuxingcode: ""
                    }), o.uptCode(), !1;
                    if (1 == e.data.data.result) {
                        o.setData({
                            isRuleTrue: !1
                        });
                        var t = o.getYmdH();
                        console.log("----------"), console.log(o.data.curData), console.log("----------");
                        var l = o.data.loginname + "Di6HPnxL" + t;
                        console.log(o.data.loginname), console.log("uGe64BEd"), console.log(t), console.log("extra_code" + l), 
                        l = a.hexMD5(l), console.log("extra_code---md5:" + l), console.log(n);
                        var d = {
                            mobile: o.data.loginname,
                            type: 2,
                            flag: 1,
                            code: n,
                            extra_code: l
                        };
                        wx.request({
                            url: s + "/appapi/user/v1/sendsms",
                            method: "POST",
                            data: d,
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                                smdeviceId: i,
                                deviceSource: 3,
                                dxdeviceId: this.data.dxDeviceId
                            },
                            success: function(e) {
                                console.log(e), wx.showToast({
                                    title: "发送成功",
                                    icon: "none"
                                });
                                var t = o.data.secend;
                                console.log("-------"), console.log(t), o.setData({
                                    isSend: !0,
                                    secend: t
                                });
                                var a = setInterval(function() {
                                    t--, o.setData({
                                        secend: t
                                    }), 0 == t && (clearInterval(a), o.setData({
                                        secend: 60,
                                        time: "重新发送",
                                        isSend: !1
                                    }));
                                }, 1e3);
                            }
                        });
                    }
                }
            });
        } else wx.showToast({
            title: "验证码不能为空",
            icon: "none"
        });
    },
    getRanNum: function() {
        for (var e = "", t = 0; t < 4; t++) Math.random() < 48 && (e += "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678".charAt(48 * Math.random() - 1));
        return e;
    },
    getNow: function() {
        var e = new Date(), t = e.getFullYear(), a = e.getMonth() + 1, o = e.getDate(), n = e.getHours(), s = e.getMinutes(), l = e.getSeconds();
        return a < 10 && (a = "0" + a), o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), 
        s < 10 && (s = "0" + s), l < 10 && (l = "0" + l), t + "-" + a + "-" + o + " " + n + ":" + s + ":" + l;
    },
    getYmdH: function() {
        var e = new Date(), t = e.getFullYear(), a = e.getMonth() + 1, o = e.getDate(), n = e.getHours();
        a < 10 && (a = "0" + a), o < 10 && (o = "0" + o), n < 10 && (n = "0" + n);
        var s = String(t) + String(a) + String(o) + String(n);
        return console.log("time", s), s;
    },
    sendMessage: function() {
        var t = this, o = e.globalData.url_host, n = e.globalData.SMSdk.getDeviceId();
        console.log("deviceId", n);
        var s = t.getYmdH();
        console.log("----------"), console.log(t.data.curData), console.log("----------");
        var l = t.data.loginname + "Di6HPnxL" + s;
        console.log(t.data.loginname), console.log("uGe64BEd"), console.log(s), console.log("extra_code" + l), 
        l = a.hexMD5(l), console.log("extra_code---md5:" + l);
        var i = {
            mobile: t.data.loginname,
            type: 2,
            flag: 1,
            extra_code: l
        };
        wx.request({
            url: o + "/appapi/user/v1/sendsms",
            method: "POST",
            data: i,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                smdeviceId: n,
                apiversion: 20190813,
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(e) {
                if (console.log(e), 200 == e.data.status) {
                    wx.showToast({
                        title: "发送成功",
                        icon: "success"
                    });
                    var a = t.data.secend;
                    console.log("-------"), console.log(a), t.setData({
                        isSend: !0,
                        secend: a
                    });
                    var o = setInterval(function() {
                        a--, t.setData({
                            secend: a
                        }), 0 == a && (clearInterval(o), t.setData({
                            secend: 60,
                            time: "重新发送",
                            isSend: !1
                        }));
                    }, 1e3);
                } else wx.showToast({
                    title: e.data.msg,
                    icon: "none"
                });
            }
        });
    }
});