var a = require("../../../utils/server"), t = wx.getStorageSync("utoken");

Page({
    data: {
        objectArray: [ "提现到余额", "提现到微信钱包" ],
        index: 0,
        commission_ok: ""
    },
    bindPickerChange: function(a) {
        console.log(a.detail.value);
        var t = a.detail.value;
        this.setData({
            index: t
        });
    },
    onLoad: function(e) {
        t = wx.getStorageSync("utoken");
        var s = this;
        a.sendRequest({
            url: "?r=wxapp.commission.apply&utoken=" + t,
            data: {},
            success: function(a) {
                var t = a.data.result;
                s.setData({
                    commission_ok: t
                });
            }
        });
    },
    clickNav: function(e) {
        var s = this;
        console.log(s.data.index), "0" == s.data.index ? (a.sendRequest({
            url: "?r=wxapp.commission.apply",
            data: {
                utoken: t,
                type: s.data.index
            },
            method: "POST",
            success: function(a) {
                console.log(a.data.result);
                var t = a.data.result;
                s.setData({
                    commission_ok: t
                });
            }
        }), wx.showToast({
            title: "已提交,请等待审核!",
            icon: "success",
            duration: 2e3
        })) : "1" == s.data.index && a.sendRequest({
            url: "?r=wxapp.commission.apply",
            data: {
                utoken: t,
                type: s.data.index
            },
            method: "POST",
            success: function(a) {
                console.log(a.data.result);
                var t = a.data.result;
                s.setData({
                    commission_ok: t
                }), s.data.commission_ok.length > 0 ? wx.showToast({
                    title: "已提交,请等待审核!",
                    icon: "success",
                    duration: 2e3
                }) : wx.showModal({
                    title: "提示",
                    content: a.data.msg,
                    success: function(a) {
                        a.confirm ? wx.navigateBack({
                            delta: 1
                        }) : a.cancel && wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    }
});