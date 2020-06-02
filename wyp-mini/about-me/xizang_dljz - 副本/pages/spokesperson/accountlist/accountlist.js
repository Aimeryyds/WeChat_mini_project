var a, t = getApp();

Page({
    data: {
        account: null,
        payway: 0,
        userInfo: null
    },
    onLoad: function(t) {
        (a = this).setData({
            payway: t.payway
        });
    },
    onShow: function() {
        t.getUserInfo(function(t) {
            a.setData({
                userInfo: t,
                account: t.account
            });
        });
    },
    choose: function(a) {
        var t = a.currentTarget.id, n = getCurrentPages();
        n[n.length - 2].setData({
            payway: t
        }), wx.navigateBack();
    },
    modify: function(a) {
        var t = a.currentTarget.id;
        wx.navigateTo({
            url: "/pages/spokesperson/accountadd/accountadd?payway=" + t
        });
    }
});