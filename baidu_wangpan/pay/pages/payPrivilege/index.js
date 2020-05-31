var e = getApp();

Page({
    data: {
        height: e.globalData.navHeight,
        identity: "normal",
        type: "svip"
    },
    onReady: function() {
        wx.setNavigationBarColor && wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#ffffff"
        }), wx.hideShareMenu(), wx.log.send({
            type: "wx_pay_privilege_show",
            value: "会员中心-特权页-展示"
        });
    },
    onLoad: function(e) {
        Object.keys(e).length > 0 && this.setData({
            identity: e.userVipStatus,
            type: e.chooseType
        });
    },
    goBack: function() {
        var e = decodeURIComponent(this.data.backurl);
        wx.reLaunch({
            url: /^\//.test(e) ? e : "/" + e
        });
    },
    onChangeTab: function(e) {
        var a = e.detail && e.detail.type;
        this.setData({
            type: a
        });
    },
    clickPrivilegeButton: function() {
        e.globalData.payScene = "privilege_" + this.data.type, e.globalData.goCashierFromPrivilegePage = !0, 
        wx.log.send({
            type: "wx_pay_privilege_gobuy_" + this.data.type + "_click",
            value: "会员中心-特权页-购买按钮-会员类型-点击"
        }), wx.navigateBack();
    }
});