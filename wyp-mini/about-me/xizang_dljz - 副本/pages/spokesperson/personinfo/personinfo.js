var n, o = getApp(), a = require("../../../utils/functions"), t = require("../../../utils/util");

Page({
    data: {
        userInfo: null
    },
    onLoad: function(o) {
        n = this;
    },
    onShow: function() {
        o.getUserInfo(function(o) {
            n.setData({
                userInfo: o
            });
        });
    },
    choose: function(e) {
        var u = e.currentTarget.id;
        t.confirm("提示", "是否确认将其设为默认提现方式？", function() {
            a.improveSpokesman({
                payway: u
            }, function(a) {
                n.setData({
                    "userInfo.payway": u
                }), o.globalData.userInfo.payway = u;
            });
        });
    },
    modify: function(n) {
        var o = n.currentTarget.id;
        wx.navigateTo({
            url: "/pages/spokesperson/accountadd/accountadd?payway=" + o
        });
    },
    onPullDownRefresh: function() {
        o.getUserInfo(function(o) {
            n.setData({
                userInfo: o
            });
        });
    }
});