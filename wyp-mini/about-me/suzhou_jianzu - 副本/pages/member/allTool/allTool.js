var n = require("../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0
    },
    onLoad: function() {
        var i = this, t = wx.getStorageSync("utoken");
        n.sendRequest({
            url: "?r=member.tool&utoken=" + t,
            showToast: !1,
            data: {
                utoken: t
            },
            method: "GET",
            success: function(n) {
                i.setData({
                    loading: !1,
                    toolList: n.data.result
                });
            }
        });
    },
    navigateToCollect: function() {
        wx.navigateTo({
            url: "../collect/collect"
        });
    },
    navigateToAddress: function() {
        wx.navigateTo({
            url: "../../address/list/list"
        });
    },
    navigateToCoupon: function() {
        wx.navigateTo({
            url: "../coupon/myCoupon/myCoupon"
        });
    },
    yu_list: function() {
        wx.navigateTo({
            url: "../../services/list/index"
        });
    },
    navigateRegister: function() {
        wx.reLaunch({
            url: "../../commission/register/index"
        });
    },
    navigateToList: function() {
        wx.navigateTo({
            url: "/pages/member/jump/jump"
        });
    },
    groupsbuy: function(n) {
        wx.navigateTo({
            url: "groupbuy/index?id=0"
        });
    },
    groupsbuyDetail: function(n) {
        wx.navigateTo({
            url: "../../groupbuy/groupList/index"
        });
    },
    loginbtn: function() {
        wx.navigateTo({
            url: "../registered/index",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    joinMemberCar: function() {
        wx.navigateTo({
            url: "../activeCard/activeCard"
        });
    },
    joinUs: function() {
        wx.navigateTo({
            url: "../aboutus/aboutus"
        });
    },
    joinIntegral: function() {
        wx.navigateTo({
            url: "../integral/home/index"
        });
    },
    joinVIPCard: function() {
        wx.navigateTo({
            url: "../membership/index"
        });
    },
    joinSign: function() {
        wx.navigateTo({
            url: "../sign/sign"
        });
    },
    joinCreateActivity: function() {
        wx.navigateTo({
            url: "../groupActivity/groupActivity"
        });
    },
    joinMyActivity: function() {
        wx.navigateTo({
            url: "../groupActivity/channel/channel"
        });
    },
    joinsupdem: function() {
        wx.navigateTo({
            url: "../../supdem/supdem"
        });
    },
    joinexihibit: function() {
        wx.navigateTo({
            url: "../../supdem/myexhibit/myexhibit"
        });
    },
    joincustomerForm: function() {
        wx.navigateTo({
            url: "../../customerForm/formSuccess/formSuccess"
        });
    }
});