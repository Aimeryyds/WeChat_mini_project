var t = require("../../../utils/server"), a = 0, e = "0";

Page({
    tabClick: function(t) {
        var s = t.currentTarget.dataset.index, o = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        o[s] = "text-select", this.setData({
            tabClasss: o,
            tab: s
        }), a = 0, e = [ "0", "1", "2" ][s], this.data.coupons = [], this.getEvaluateLists(e, a), 
        this.setData({
            types: e
        });
    },
    onReachBottom: function() {
        this.getEvaluateLists(e, ++a), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        a = 0, this.data.orders = [], this.getEvaluateLists(e, a);
    },
    data: {
        types: 0,
        coupons: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
    },
    onLoad: function(t) {
        this.getEvaluateLists(0, 0);
    },
    getEvaluateLists: function(a, e) {
        var s = this, o = getApp().globalData.userInfo.user_id;
        t.getJSON("/User/getCouponList/user_id/" + o + "/page/" + e + "/type/" + a, function(t) {
            var a = t.data.result, e = s.data.coupons;
            for (var o in a) e.push(a[o]);
            wx.stopPullDownRefresh(), s.setData({
                coupons: e
            });
        });
    }
});