var e, a = require("../../../utils/server.js"), s = wx.getStorageSync("utoken");

Page({
    data: {
        operationType: 0,
        addressInfo: {
            sex: 1,
            address: "",
            realname: "",
            mobile: "",
            city: "",
            province: "",
            areas: "",
            id: "",
            isdefault: "0"
        },
        inputValue: ""
    },
    onLoad: function(t) {
        s = wx.getStorageSync("utoken");
        var d = this;
        if (void 0 != t.addr && (e = t.addr), void 0 != t.id && "" != t.id) {
            var i = d.data.addressInfo;
            a.sendRequest({
                url: "?r=wxapp.member.address.post",
                data: {
                    utoken: s,
                    id: t.id
                },
                success: function(e) {
                    var a = e.data.result;
                    i.id = a.id, i.sex = a.sex, i.realname = a.realname, i.address = a.address, i.province = a.province, 
                    i.areas = a.area, i.city = a.city, i.mobile = a.mobile, i.isdefault = a.isdefault, 
                    d.setData({
                        addressInfo: i,
                        operationType: 1
                    });
                }
            });
        }
    },
    checkSex: function(e) {
        var a = this.data.addressInfo;
        a.sex = e.currentTarget.dataset.sex, this.setData({
            addressInfo: a
        });
    },
    isdefault: function(e) {
        var a = this.data.addressInfo;
        a.isdefault = e.currentTarget.dataset.isdefault, this.setData({
            addressInfo: a
        });
    },
    searchAddress: function() {
        var e = this, a = e.data.addressInfo;
        wx.chooseLocation({
            success: function(s) {
                a.address = s.address, a.addressTitle = s.name, e.setData({
                    addressInfo: a
                });
            }
        });
    },
    setInputValue: function(e) {
        this.setData({
            inputValue: e.detail.value
        }), this.search(e);
    },
    clearInput: function() {
        this.setData({
            inputValue: ""
        });
    },
    searchBtn: function() {
        if ("" == this.data.inputValue) this.setData({
            search: 0
        }); else {
            var e = {
                detail: {
                    value: this.data.inputValue
                }
            };
            this.search(e);
        }
    },
    inputName: function(e) {
        var a = this, s = a.data.addressInfo;
        s.realname = e.detail.value, a.setData({
            addressInfo: s
        });
    },
    inputMobile: function(e) {
        var a = this, s = a.data.addressInfo;
        s.mobile = e.detail.value, a.setData({
            addressInfo: s
        });
    },
    inputDoorplate: function(e) {
        var a = this, s = a.data.addressInfo;
        s.address = e.detail.value, a.setData({
            addressInfo: s
        });
    },
    saveAddress: function() {
        var t = this.data.addressInfo;
        return "" == t.realname ? (wx.showModal({
            title: "请填写真实姓名",
            content: "",
            showCancel: !1
        }), !1) : /^1[345789]\d{9}$/.test(t.mobile) ? "" == t.city ? (wx.showModal({
            title: "请选择城市",
            content: "",
            showCancel: !1
        }), !1) : "" == t.address ? (wx.showModal({
            title: "请填写详细地址",
            content: "",
            showCancel: !1
        }), !1) : void (void 0 != e ? a.sendRequest({
            url: "?r=wxapp.member.address.submit",
            data: {
                utoken: s,
                sex: t.sex,
                province: t.province,
                areas: t.areas,
                city: t.city,
                address: t.address,
                consignee: t.realname,
                mobile: t.mobile,
                is_default: t.isdefault
            },
            success: function(e) {
                1 == e.data.status && wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 800,
                    success: function() {
                        wx.navigateTo({
                            url: "../select/index?addr=addr"
                        });
                    }
                });
            }
        }) : 0 == this.data.operationType ? a.sendRequest({
            url: "?r=wxapp.member.address.submit",
            data: {
                utoken: s,
                sex: t.sex,
                province: t.province,
                areas: t.areas,
                city: t.city,
                address: t.address,
                consignee: t.realname,
                mobile: t.mobile,
                is_default: t.isdefault
            },
            success: function(e) {
                1 == e.data.status && wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 800,
                    success: function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        }) : 1 == this.data.operationType ? a.sendRequest({
            url: "?r=wxapp.member.address.submit",
            data: {
                utoken: s,
                sex: t.sex,
                address: t.address,
                consignee: t.realname,
                mobile: t.mobile,
                province: t.province,
                areas: t.areas,
                city: t.city,
                is_default: t.isdefault,
                id: t.id
            },
            success: function(e) {
                1 == e.data.status && wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 800,
                    success: function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        }) : wx.showModal({
            title: "错误",
            content: "操作异常",
            showCancel: !1
        })) : (wx.showModal({
            title: "请填写正确手机号码",
            content: "",
            showCancel: !1
        }), !1);
    },
    bindRegionChange: function(e) {
        var a = this, s = e.detail.value, t = a.data.addressInfo;
        t.areas = s[2], t.city = s[1], t.province = s[0], a.setData({
            addressInfo: t
        });
    }
});