var e, a = require("../../../utils/server.js"), t = wx.getStorageSync("utoken");

Page({
    data: {
        operationType: 2,
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
        inputValue: "",
        editAddressId: null
    },
    onLoad: function(a) {
        t = wx.getStorageSync("utoken"), e = void 0 != a.addr ? a.addr : "", this.getList();
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
    inputName: function(e) {
        var a = this, t = a.data.addressInfo;
        t.realname = e.detail.value, a.setData({
            addressInfo: t
        });
    },
    inputMobile: function(e) {
        var a = this, t = a.data.addressInfo;
        t.mobile = e.detail.value, a.setData({
            addressInfo: t
        });
    },
    inputDoorplate: function(e) {
        var a = this, t = a.data.addressInfo;
        t.address = e.detail.value, a.setData({
            addressInfo: t
        });
    },
    saveAddress: function() {
        var s = this, d = this.data.addressInfo;
        return "" == d.realname ? (wx.showModal({
            title: "请填写真实姓名",
            content: "",
            showCancel: !1
        }), !1) : /^1[345789]\d{9}$/.test(d.mobile) ? "" == d.city ? (wx.showModal({
            title: "请选择城市",
            content: "",
            showCancel: !1
        }), !1) : "" == d.address ? (wx.showModal({
            title: "请输入详细地址",
            content: "",
            showCancel: !1
        }), !1) : void (0 == this.data.operationType || e ? a.sendRequest({
            url: "?r=wxapp.member.address.submit",
            data: {
                utoken: t,
                sex: d.sex,
                province: d.province,
                areas: d.areas,
                city: d.city,
                address: d.address,
                consignee: d.realname,
                mobile: d.mobile,
                is_default: d.isdefault
            },
            success: function(e) {
                1 == e.data.status && wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 800,
                    success: function() {
                        s.getList();
                    }
                });
            }
        }) : 1 == this.data.operationType ? a.sendRequest({
            url: "?r=wxapp.member.address.submit",
            data: {
                utoken: t,
                sex: d.sex,
                address: d.address,
                consignee: d.realname,
                mobile: d.mobile,
                province: d.province,
                areas: d.areas,
                city: d.city,
                is_default: d.isdefault,
                id: d.id
            },
            success: function(e) {
                1 == e.data.status && wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 800,
                    success: function() {
                        s.getList();
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
    getList: function() {
        var e = this;
        a.sendRequest({
            url: "?r=wxapp.member.address",
            data: {
                utoken: t
            },
            success: function(a) {
                e.setData({
                    addressList: a.data.result,
                    operationType: 2
                });
            }
        });
    },
    addtap: function(e) {
        this.setData({
            operationType: 0,
            addressInfo: {
                sex: 1,
                address: "",
                doorplate: "",
                realname: "",
                mobile: "",
                addressTitle: "",
                id: "",
                isdefault: "0"
            }
        });
    },
    edittap: function(e) {
        var s = this, d = e.currentTarget.dataset.id, n = s.data.addressInfo;
        a.sendRequest({
            url: "?r=wxapp.member.address.post",
            data: {
                utoken: t,
                id: d
            },
            success: function(e) {
                var a = e.data.result;
                n.id = a.id, n.sex = a.sex, n.realname = a.realname, n.address = a.address, n.province = a.province, 
                n.areas = a.area, n.city = a.city, n.mobile = a.mobile, n.isdefault = a.isdefault, 
                s.setData({
                    addressInfo: n,
                    operationType: 1
                });
            }
        });
    },
    setdefult: function(a) {
        var t = this, s = {
            id: a.currentTarget.dataset.id,
            addressInfo: t.data.addressList[a.currentTarget.dataset.index]
        };
        if (console.log(a.currentTarget.dataset.index), console.log(t.data.addressList), 
        console.log(t.data.addressInfo), void 0 != e && "" != e ? (console.log(111), wx.setStorageSync("addrdata", s), 
        wx.navigateBack({
            delta: 1
        })) : (console.log(222), wx.setStorageSync("addrdata", s), wx.navigateBack({
            delta: 1
        })), 1 == a.currentTarget.dataset.isdefault) return !1;
    },
    bindRegionChange: function(e) {
        var a = this, t = e.detail.value, s = a.data.addressInfo;
        s.areas = t[2], s.city = t[1], s.province = t[0], a.setData({
            addressInfo: s
        });
    }
});