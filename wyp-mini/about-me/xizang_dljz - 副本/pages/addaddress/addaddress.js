var e, t, i = require("../../component/selectarea/selectarea"), n = require("../../utils/functions"), a = require("../../utils/util"), o = getApp(), s = require("../../libs/qqmap-wx-jssdk.js");

Page({
    data: {
        provinces: [],
        citys: [],
        countys: [],
        province: "所在省",
        city: "所在市",
        county: "行政区",
        value: [ 0, 0, 0 ],
        values: [ 0, 0, 0 ],
        condition: !1,
        deliveryAddr: null
    },
    onLoad: function(n) {
        t = this;
        var a = null;
        a = n.deliveryAddr ? JSON.parse(n.deliveryAddr) : {
            isDefault: 0,
            username: o.globalData.userInfo.username,
            phone: o.globalData.userInfo.phone
        }, t.setData({
            deliveryAddr: a
        }), i.SA.load(this), e = new s({
            key: o.constants.mapKey
        });
    },
    bindChange: function(e) {
        i.SA.choose(e, this);
    },
    open: function() {
        this.setData({
            condition: !this.data.condition
        });
    },
    bindNameInput: function(e) {
        this.setData({
            "deliveryAddr.username": e.detail.value
        });
    },
    bindPhoneInput: function(e) {
        this.setData({
            "deliveryAddr.phone": e.detail.value
        });
    },
    bindAddrInput: function(e) {
        this.setData({
            "deliveryAddr.address": e.detail.value
        });
    },
    checkboxChange: function() {
        this.setData({
            "deliveryAddr.isDefault": 1 - t.data.deliveryAddr.isDefault
        });
    },
    getLocation: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(n) {
                wx.showToast({
                    title: "定位中...",
                    icon: "loading",
                    duration: 1e4
                });
                var a = n.latitude, o = n.longitude;
                e.reverseGeocoder({
                    location: {
                        latitude: a,
                        longitude: o
                    },
                    success: function(e) {
                        wx.hideToast();
                        var n = e.result.address_component;
                        t.setData({
                            "deliveryAddr.province": n.province,
                            "deliveryAddr.city": n.city,
                            "deliveryAddr.district": n.district
                        }), i.SA.setvalue(t);
                    },
                    fail: function(e) {
                        console.log(e);
                    },
                    complete: function(e) {
                        console.log(e);
                    }
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    saveAddress: function() {
        var e = t.data.deliveryAddr;
        a.isBlank(e.username) ? a.toast("联系人不能为空") : a.isBlank(e.phone) ? a.toast("联系电话不能为空") : a.phoneReg(e.phone) ? a.isBlank(e.address) ? a.toast("请填写地址") : n.saveAddr(e, function(e) {
            wx.showToast({
                title: "保存成功",
                icon: "",
                duration: 1e3,
                complete: function() {
                    setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 1e3);
                }
            });
        }) : a.toast("手机号码格式不正确");
    }
});