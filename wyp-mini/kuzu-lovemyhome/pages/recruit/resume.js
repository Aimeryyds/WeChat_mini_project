var e = getApp(), t = require("../../sdk/dingxiang.js");

require("../../utils/md5.js");

Page({
    data: {
        cityId: null,
        cityName: null,
        rangekey: null,
        cityArray: [],
        cityKeyArray: [],
        userName: null,
        userPhone: null,
        storesTxt: null,
        storesVal: null,
        storesHide: !0,
        storesName: null,
        recommenderuid: null,
        loginStatus: 0,
        userid: null,
        loadinghide: !1,
        cityOrHide: !0,
        loginSuccessStatus: 1
    },
    onLoad: function(a) {
        var s = this;
        new t({
            appId: e.globalData.dxAppId
        }, function(e, t) {
            if (e) console.log(e); else {
                s.cityArrayChange(), console.log("++++++++++++++++++++++++:", a), 1 == a.loginSuccessStatus && s.setData({
                    loginSuccessStatus: a.loginSuccessStatus,
                    cityOrHide: !1
                }), s.setData({
                    dxDeviceId: t,
                    recommenderuid: a.recommenderuid,
                    rangekey: void 0 !== a.rangekey ? a.rangekey : -1,
                    cityId: void 0 !== a.cityId ? a.cityId : "",
                    cityName: void 0 !== a.cityName ? a.cityName : "",
                    userName: void 0 !== a.userName ? a.userName : "",
                    userPhone: void 0 !== a.userPhone ? a.userPhone : "",
                    storesTxt: void 0 !== a.storesTxt ? a.storesTxt : "",
                    storesName: void 0 !== a.storesName ? a.storesName : "",
                    storesHide: a.storesHide
                }), console.log("++++++++++城市索引++++++++++++++:", s.data.rangekey), console.log("++++++++++城市id:::++++++++++++++:", s.data.cityId), 
                a.searchType && s.setData({
                    storesName: a.storesName
                });
                var o = wx.getStorageSync("loginStatus");
                console.log("登录状态：", o);
                var n = wx.getStorageSync("userInfo");
                console.log("userInfo----", n), s.setData({
                    loginStatus: o,
                    userid: n.uid
                }), console.log("登录状态 onload--sssssssssssssssssssssssssssssssssss-", o), 1 == o && s.setData({
                    cityOrHide: !1
                });
            }
        });
    },
    cityArrayChange: function() {
        var t = e.globalData.url_host, a = this;
        a.setData({
            loadinghide: !1
        }), wx.request({
            url: t + "/appapi/home/switchweb",
            method: "POST",
            data: {},
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: a.data.dxDeviceId
            },
            success: function(e) {
                if (200 == e.data.status) {
                    a.setData({
                        cityArray: e.data.data,
                        loadinghide: !0
                    });
                    for (var t = 0; t < a.data.cityArray.length; t++) if (a.data.cityId == a.data.cityArray[t].id) {
                        a.setData({
                            rangekey: [ t ],
                            cityId: a.data.cityArray[t].id,
                            cityName: a.data.cityArray[t].name
                        }), console.log("that.data.rangekey-----扫码进来所带城市id的索引", a.data.rangekey), console.log("that.data.rangekey-----扫码进来所带城市id的索引", a.data.cityId);
                        break;
                    }
                }
            },
            fail: function(e) {
                console.log("error", e);
            },
            complete: function(e) {}
        });
    },
    bindPickerChange: function(e) {
        var t = this;
        console.log("城市索引值", e.detail.value), t.setData({
            rangekey: e.detail.value,
            cityId: t.data.cityArray[e.detail.value].id,
            cityName: t.data.cityArray[e.detail.value].name
        }), console.log("城市id", t.data.cityId), console.log("城市id", t.data.cityName);
    },
    storesChange: function(e) {
        var t = this;
        console.log("that.data.cityIdthat.data.cityIdthat.data.cityIdthat.data.cityId", t.data.cityId), 
        wx.navigateTo({
            url: "../recruit/stores?cityId=" + t.data.cityId
        });
    },
    getPhoneNumber: function(e) {
        var t = this, a = e.detail.value;
        t.setData({
            userPhone: a
        });
    },
    storesTap: function() {
        var e = this;
        console.log("that.data.loginStatus=-=-=-=-=-==-=-=-=", e.data.loginStatus), 1 == e.data.loginStatus && (console.log(e.data.storesHide), 
        e.setData({
            storesHide: !1
        }));
    },
    ynStores: function() {
        this.setData({
            storesHide: !0
        });
    },
    ynStoresTap: function(e) {
        var t = this, a = e.currentTarget.dataset;
        console.log(a), t.setData({
            storesVal: a.val,
            storesTxt: a.name
        });
    },
    getJobName: function(e) {
        var t = this, a = e.detail.value;
        console.log("姓名---", a), t.setData({
            userName: a
        });
    },
    getStoresName: function(e) {
        console.log("门店名称----", e);
    },
    submitInfo: function(t) {
        var a = this, s = e.globalData.url_host, o = t.detail.value;
        if ("" == o.cityName) return wx.showToast({
            title: "请选择城市",
            icon: "none"
        }), !1;
        if ("" == o.userName) return wx.showToast({
            title: "请输入您的姓名",
            icon: "none"
        }), !1;
        var n = /^[1][3,4,5,7,8][0-9]{9}$/;
        if ("" == o.userPhone) return wx.showToast({
            title: "请输入您的手机号",
            icon: "none"
        }), !1;
        if (!n.test(o.userPhone)) return wx.showToast({
            title: "手机号输入错误",
            icon: "none"
        }), !1;
        if (null == a.data.storesVal) return wx.showToast({
            title: "请选择有无意向门店",
            icon: "none"
        }), !1;
        if (1 == a.data.storesVal) {
            if (console.log("------------------提交的时候----", a.data.storesHide), console.log("self.data.storesName=====================", a.data.storesVal), 
            null == a.data.storesName || void 0 == a.data.storesName || "" == a.data.storesName) return wx.showToast({
                title: "请选择意向门店",
                icon: "none"
            }), !1;
        } else a.data.storesName;
        var i = {
            cityid: a.data.cityId,
            username: o.userName,
            telephone: o.userPhone,
            whether: a.data.storesVal,
            shopname: o.storesName,
            uid: a.data.userid,
            recommenderuid: a.data.recommenderuid
        };
        wx.request({
            url: s + "/recruitment/saveinfo",
            method: "POST",
            data: i,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: a.data.dxDeviceId
            },
            success: function(e) {
                console.log(e), 200 == e.data.status ? (wx.showToast({
                    title: "投递成功",
                    icon: "none"
                }), a.setData({
                    cityId: null,
                    cityName: null,
                    rangekey: null,
                    userName: null,
                    userPhone: null,
                    storesTxt: null,
                    storesVal: null,
                    storesHide: !0,
                    storesName: null
                }), setTimeout(function() {
                    wx.navigateTo({
                        url: "../index"
                    });
                }, 1500)) : wx.showToast({
                    title: "投递失败了。。。。",
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "投递失败，请稍后再试！",
                    icon: "none"
                }), console.log("error", e);
            },
            complete: function(e) {}
        });
    },
    ynLoginChange: function() {
        var e = this;
        if (console.log("登录状态 ynLoginChange--sssssssssssssssssss-", e.data.loginStatus), 
        1 != e.data.loginStatus) {
            var t = "recruit/resume";
            console.log("=========url==============", t), wx.showToast({
                title: "请先授权登录",
                icon: "none"
            });
            return setTimeout(function() {
                wx.navigateTo({
                    url: "../login/login?url=" + t + "&cityName=" + e.data.cityName + "&cityId=" + e.data.cityId + "&userName=" + e.data.userName + "&resume_type=1&userPhone=" + e.data.userPhone + "&storesTxt=" + e.data.storesTxt + "&storesVal=" + e.data.storesVal + "&storesName=" + e.data.storesName + "&rangekey=" + e.data.rangekey + "&recommenderuid=" + e.data.recommenderuid + "&storesHide=" + e.data.storesHide + "&loginSuccessStatus=" + e.data.loginSuccessStatus
                });
            }, 1500), !1;
        }
        e.setData({
            cityOrHide: !1
        }), console.log("cityOrHide---sssssssssssssssssssssssssssssssssss-", e.data.cityOrHide);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});