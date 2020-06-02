var n, o = getApp(), e = require("../../utils/functions");

require("../../utils/util");

Page({
    data: {
        spokesAlias: null,
        spokesman: null,
        status_num: {},
        wxUserInfo: {},
        shop: null
    },
    onLoad: function(e) {
        n = this, o.getShopInfo(function(o) {
            n.setData({
                shop: o
            });
        }), o.getDistribution(function(o) {
            n.setData({
                isOpenDistribution: o.isOpen,
                spokesAlias: o.alias
            });
        });
    },
    onShow: function() {
        this.loadInfo();
    },
    onPullDownRefresh: function() {
        this.loadInfo();
    },
    loadInfo: function() {
        o.getUserInfo(function(o) {
            n.setData({
                wxUserInfo: o
            }), n.countOrders(), n.getSpokesmanInfo();
        });
    },
    getSpokesmanInfo: function() {
        e.getSpokesmanInfo(function(e) {
            o.globalData.userInfo.spokesman = e.spokesman, n.data.wxUserInfo.spokesman = e.spokesman;
        });
    },
    go2Spokesman: function() {
        var o = "/pages/spokesperson/center/center";
        n.data.wxUserInfo.spokesman ? 1 == n.data.wxUserInfo.spokesman.status && (o = "/pages/spokesperson/check/check") : o = "/pages/spokesperson/apply/apply", 
        wx.navigateTo({
            url: o
        });
    },
    chooseAddr: function() {
        wx.chooseAddress({
            success: function(n) {
                console.log(n);
            }
        });
    },
    countOrders: function() {
        e.countOrders(function(o) {
            n.setData({
                status_num: {
                    number1: o.number1,
                    number2: o.number2,
                    number3: o.number3,
                    number4: o.number4
                }
            });
        });
    },
    concat: function() {
        o.concat();
    },
    call: function(o) {
        wx.makePhoneCall({
            phoneNumber: n.data.shop.copyphone
        });
    },
    openSetting: function() {
        wx.openSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && o.getUserInfo(function(o) {
                    n.setData({
                        wxUserInfo: o
                    }), console.log(n.wxUserInfo), n.countOrders();
                });
            }
        });
    }
});