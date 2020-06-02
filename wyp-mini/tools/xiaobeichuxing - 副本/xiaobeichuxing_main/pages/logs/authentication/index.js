var e = require("../../../utils/https.js");

Page({
    data: {
        Explain1: "为了资金安全，请使用个人真实姓名与身份证号",
        listInpu: [ {
            callname: "真实姓名",
            name: "user_name",
            type: "text",
            placeholder: "请输入姓名"
        }, {
            callname: "身份证号",
            name: "idcard",
            type: "text",
            placeholder: "请输入身份证号"
        } ],
        myHight: ""
    },
    myEventListener: function(e) {
        console.log(1212), console.log(e.detail), this.setData({
            myHight: e.detail
        });
    },
    onLoad: function(e) {
        wx.getStorage({
            key: "veh",
            success: function(e) {
                console.log(e);
            }
        });
    },
    formSubmit: function(t) {
        if ("" == t.detail.value.user_name || "" == t.detail.value.idcard) return wx.showToast({
            title: "请填写内容",
            icon: "none",
            duration: 2e3
        }), !1;
        var n = {
            uid: wx.getStorageSync("uid"),
            user_name: t.detail.value.user_name,
            idcard: t.detail.value.idcard
        };
        wx.showLoading({
            title: "认证中...",
            mask: !0
        }), setTimeout(function() {
            wx.hideLoading();
        }, 5e3), e.req("User/Certify", n, function(e, t) {
            wx.hideLoading(), 0 == t.data.code ? (wx.showToast({
                title: "认证成功",
                icon: "success",
                duration: 2e3
            }), wx.setStorageSync("certify", 2), 1 == wx.getStorageSync("depositstate") || 2 == wx.getStorageSync("zhimacreditstate") || wx.getStorageSync("hasridingcard") || 1 == wx.getStorageSync("wxpayscorestate") ? setTimeout(function() {
                wx.redirectTo({
                    url: "../../index/index"
                });
            }, 2e3) : setTimeout(function() {
                wx.redirectTo({
                    url: "../../payment/depositRideCard/index"
                });
            }, 2e3)) : wx.showModal({
                title: "认证失败",
                content: t.data.retmsg,
                showCancel: !1,
                success: function(e) {
                    e.confirm;
                }
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});