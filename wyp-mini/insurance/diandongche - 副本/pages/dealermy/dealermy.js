var e = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        TabCur: 0,
        scrollLeft: 0
    },
    tabSelect: function(e) {
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: 60 * (e.currentTarget.dataset.id - 1)
        });
    },
    onLoad: function(t) {
        var r = t.id;
        this.setData({
            id: r
        });
        var o = wx.getStorageSync("token");
        null != o && "" != o && e.GetToken();
    },
    goRegister: function(e) {
        var t = e.currentTarget.dataset.registertype;
        console.log("registerType:" + t), wx.navigateTo({
            url: "../register/register?registerType=" + t
        });
    },
    goDealerAddrList: function(t) {
        var r = wx.getStorageSync("userToken");
        if (null == r || "" == r) e.GetUserToken(); else {
            var o = this.data.id;
            wx.redirectTo({
                url: "../dealeraddrlist/dealeraddrlist?id=" + o
            });
        }
    },
    goLogout: function() {
        wx.showModal({
            title: "系统提示",
            content: "是否确认退出？",
            success: function(r) {
                if (r.confirm) {
                    var o = wx.getStorageSync("userToken");
                    wx.setStorageSync("userToken", ""), wx.setStorageSync("deptid", ""), e.Requests_json(t.globalData.authenticationUrl + "/authentication/" + o + "/logout", {}).then(function(e) {
                        console.info(e), wx.redirectTo({
                            url: "../login/login"
                        });
                    }), console.log("用户点击确定");
                } else r.cancel && console.log("用户点击取消");
            }
        });
    }
});