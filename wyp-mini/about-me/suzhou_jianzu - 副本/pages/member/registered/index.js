var e, a = require("../../../utils/server");

getApp();

Page({
    data: {
        res: "",
        msg: "申请店铺成功",
        submit: "提交成功",
        checkbox: 1,
        arr: {},
        merchname: "",
        salecate: "",
        desc: "",
        realname: "",
        mobile: "",
        uname: "",
        upass: "",
        address: "",
        id: "",
        utoken: "",
        xieyi: 1
    },
    onLoad: function() {
        e = wx.getStorageSync("utoken");
    },
    onShow: function() {
        var a = this;
        e = wx.getStorageSync("utoken"), a.getRegidter();
    },
    getRegidter: function() {
        var t = this;
        a.sendRequest({
            url: "?r=wxapp.shop.register",
            data: {
                utoken: e
            },
            method: "GET",
            success: function(e) {
                t.setData({
                    data: e.data
                }), t.data.id = e.data.merchid, "" == e.data.msg ? e.data.msg = t.data.msg : e.data.msg = e.data.msg;
            }
        });
    },
    loadPageData: function() {
        var t = this;
        a.sendRequest({
            url: "?r=wxapp.shop.register",
            method: "POST",
            data: {
                merchname: t.data.merchname,
                salecate: t.data.salecate,
                desc: t.data.desc,
                realname: t.data.realname,
                mobile: t.data.mobile,
                uname: t.data.uname,
                upass: t.data.upass,
                address: t.data.address,
                utoken: e
            },
            success: function(e) {
                wx.showModal({
                    title: "消息",
                    content: e.data.msg,
                    showCancel: !1,
                    success: function() {
                        wx.switchTab({
                            url: "../index/index"
                        });
                    }
                });
            }
        });
    },
    xieyi: function() {
        var e = this;
        e.data.data.result.applycontent && e.setData({
            xieyi: 2
        });
    },
    tijiao: function() {
        var e = this;
        e.data.data.result.applycontent && e.setData({
            xieyi: 1
        });
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    formSubmit: function(e) {
        if (e.detail.value.merchname) if (e.detail.value.salecate) if (e.detail.value.realname) {
            if (!/^1[34578]\d{9}$/.test(e.detail.value.mobile)) return wx.showModal({
                title: "消息",
                content: "联系电话错误",
                showCancel: !1
            }), void (e.detail.value.mobile = "");
            if (e.detail.value.uname) if (e.detail.value.upass) if (e.detail.value.address) {
                this.setData({
                    merchname: e.detail.value.merchname,
                    salecate: e.detail.value.salecate,
                    desc: e.detail.value.desc,
                    realname: e.detail.value.realname,
                    mobile: e.detail.value.mobile,
                    uname: e.detail.value.uname,
                    upass: e.detail.value.upass,
                    address: e.detail.value.address
                });
                1 == this.data.checkbox ? this.loadPageData() : wx.showModal({
                    title: "消息",
                    content: "请阅读注册协议内容",
                    showCancel: !1
                });
            } else wx.showModal({
                title: "消息",
                content: "地址不能为空",
                showCancel: !1
            }); else wx.showModal({
                title: "消息",
                content: "密码不能为空",
                showCancel: !1
            }); else wx.showModal({
                title: "消息",
                content: "账号不能为空",
                showCancel: !1
            });
        } else wx.showModal({
            title: "消息",
            content: "联系人不能为空",
            showCancel: !1
        }); else wx.showModal({
            title: "消息",
            content: "项目名称不能为空",
            showCancel: !1
        }); else wx.showModal({
            title: "消息",
            content: "商户名称不能为空",
            showCancel: !1
        });
    },
    checked: function(e) {
        this.data.checkbox = e.detail.value.length, console.log(this.data.checkbox);
    }
});