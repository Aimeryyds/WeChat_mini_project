var e = getApp(), o = require("../../sdk/dingxiang.js");

require("../../utils/md5.js");

Page({
    data: {
        uid: null,
        cityId: null,
        recommenderuid: null,
        erpName: null,
        erpPwd: null
    },
    onLoad: function(t) {
        var n = this;
        new o({
            appId: e.globalData.dxAppId
        }, function(e, o) {
            e ? console.log(e) : (console.log("认证页面的值：", t), n.setData({
                dxDeviceId: o,
                cityId: t.cityId,
                recommenderuid: t.recommenderuid
            }));
        });
    },
    getErpName: function(e) {
        var o = this, t = e.detail.value;
        console.log("ERP名称----", t), o.setData({
            erpName: t
        });
    },
    getErpPwd: function(e) {
        var o = this, t = e.detail.value;
        console.log("ERP密码----", t), o.setData({
            erpPwd: t
        });
    },
    formSubmit: function(o) {
        var t = this, n = e.globalData.url_host;
        if (null == t.data.erpName) return wx.showToast({
            title: "请输入账号",
            icon: "none"
        }), !1;
        if (null == t.data.erpPwd) return wx.showToast({
            title: "请输入密码",
            icon: "none"
        }), !1;
        var a = {
            userid: t.data.erpName,
            psw: t.data.erpPwd
        };
        t.showLoading("提交中..."), wx.request({
            url: n + "/recruitment/checking",
            method: "POST",
            data: a,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: t.data.dxDeviceId
            },
            success: function(e) {
                console.log(e), 200 == e.data.status ? wx.showToast({
                    title: "提交成功",
                    success: function() {
                        t.setData({
                            uname: e.data.data.name
                        }), setTimeout(function() {
                            wx.redirectTo({
                                url: "../recruit/posters?cityId=" + t.data.cityId + "&recommenderuid=" + t.data.recommenderuid + "&uid=" + t.data.erpName + "&uname=" + t.data.uname
                            });
                        }, 1200);
                    }
                }) : wx.showToast({
                    title: e.data.msg,
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "认证失败，请稍后再试！",
                    icon: "none"
                }), console.log("error", e);
            },
            complete: function(e) {}
        });
    },
    showLoading: function(e) {
        wx.showLoading ? wx.showLoading({
            title: e,
            mask: !0
        }) : wx.showToast({
            title: e,
            icon: "loading",
            mask: !0,
            duration: 1200
        });
    },
    hideLoading: function() {
        wx.hideLoading ? wx.hideLoading() : wx.hideToast();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});