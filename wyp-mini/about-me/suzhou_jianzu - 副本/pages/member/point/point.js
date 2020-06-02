var t = require("../../../utils/server"), e = getApp(), a = 0;

Page({
    tabClick: function(t) {
        var e = t.currentTarget.dataset.index, a = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        a[e] = "text-select", this.setData({
            tabClasss: a,
            tab: e
        });
    },
    data: {
        accounts: [],
        orders: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
    },
    onReachBottom: function() {
        this.getMoneyInfoList(++a), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        a = 0, this.data.accounts = [], this.getMoneyInfoList(0);
    },
    getMoneyInfoList: function(a) {
        var o = this, n = getApp().globalData.userInfo.user_id, s = e.globalData.userInfo.pay_points;
        t.getJSON("/User/points/type/points/user_id/" + n + "/page/" + a, function(t) {
            var e = t.data.res, a = o.data.accounts;
            for (var n in e) a.push(e[n]);
            wx.stopPullDownRefresh(), o.setData({
                accounts: a,
                pay_point: s
            });
        });
    },
    onLoad: function() {
        return a = 0, void this.getMoneyInfoList(0);
    }
});