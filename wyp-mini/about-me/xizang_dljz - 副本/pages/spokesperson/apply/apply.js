var e, t = getApp(), i = require("../../../utils/functions"), n = require("../../../utils/util"), o = require("../../../wxParse/wxParse.js");

Page({
    data: {
        phone: null,
        distribution: null,
        spokesman: null,
        show_wrap: 0
    },
    onLoad: function(t) {
        (e = this).getDistributionInfo();
    },
    onShow: function() {},
    getDistributionInfo: function() {
        i.getDistributionInfo(function(t) {
            e.setData({
                distribution: t.distribution
            }), t.distribution.remark && o.wxParse("description", "html", t.distribution.remark, e, 0), 
            wx.setNavigationBarTitle({
                title: t.distribution.alias + "申请"
            });
        });
    },
    getPhoneNumber: function(n) {
        e.openWrap(), t.getUserInfo(function(t) {
            i.getPhoneNumber({
                sessionKey: wx.getStorageSync("sessionKey"),
                encryptedData: n.detail.encryptedData,
                iv: n.detail.iv
            }, function(t) {
                t.wxPhoneNumber && e.setData({
                    phone: t.wxPhoneNumber.phoneNumber
                });
            });
        });
    },
    apply: function(o) {
        var s = e.data.distribution, a = o.detail.value, r = {
            formId: o.detail.formId
        };
        if (1 != s.phoneRequired || a.phone) if (!a.phone || n.phoneReg(a.phone)) {
            if (r.phone = a.phone, 1 == s.wechatRequired) {
                if (!a.wechat) return void n.toast("微信号不能为空");
                r.wechat = a.wechat;
            }
            if (1 == s.usernameRequired) {
                if (!a.username) return void n.toast("姓名不能为空");
                r.username = a.username;
            }
            if (1 == s.idCardRequired) {
                if (!a.idCard) return void n.toast("身份证号不能为空");
                if (!/^\d{17}(\d|x)$/i.test(a.idCard)) return void n.toast("身份证号格式不正确");
                r.idCard = a.idCard;
            }
            n.loading(), i.applySpokesman(r, function(e) {
                wx.hideToast(), e.msg ? n.toast(e.msg) : (t.globalData.userInfo.spokesman = e.spokesman, 
                n.toast("提交成功", function() {
                    setTimeout(function() {
                        1 == e.spokesman.status ? wx.redirectTo({
                            url: "/pages/spokesperson/check/check"
                        }) : 2 == e.spokesman.status && wx.redirectTo({
                            url: "/pages/spokesperson/center/center"
                        });
                    }, 1e3);
                }));
            });
        } else n.toast("手机号码格式不正确"); else n.toast("手机号不能为空");
    },
    openWrap: function() {
        this.setData({
            show_wrap: 1
        });
    },
    closeWrap: function() {
        this.setData({
            show_wrap: 0
        });
    }
});