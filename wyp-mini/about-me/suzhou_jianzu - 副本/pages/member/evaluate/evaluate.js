var t = require("../../../utils/server"), e = 0, a = "-1";

Page({
    tabClick: function(t) {
        var s = t.currentTarget.dataset.index, o = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        o[s] = "text-select", this.setData({
            tabClasss: o,
            tab: s
        }), e = 0, a = [ "-1", "0", "1" ][s], this.data.comments = [], this.getEvaluateLists(a, e);
    },
    onReachBottom: function() {
        this.getEvaluateLists(a, ++e), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        e = 0, this.data.orders = [], this.getEvaluateLists(a, e);
    },
    data: {
        comments: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
    },
    getEvaluateLists: function(e, a) {
        var s = this, o = getApp().globalData.userInfo.user_id;
        t.getJSON("/User/comments/user_id/" + o + "/page/" + a + "/status/" + e, function(t) {
            var e = t.data.result, a = s.data.comments;
            for (var o in e) a.push(e[o]);
            wx.stopPullDownRefresh(), s.setData({
                comments: a
            });
        });
    },
    details: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.comments[e];
        wx.navigateTo({
            url: "../../order/details/index?order_id=" + a.order_id
        });
    },
    addevaluate: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.comments[e];
        wx.navigateTo({
            url: "addevaluate/index?goods_name=" + a.goods_name + "&image=" + a.image + "&spec=" + a.spec_key_name + "&goods_id=" + a.goods_id + "&order_id=" + a.order_id
        });
    },
    onLoad: function() {
        e = 0, this.getEvaluateLists("-1", e);
    }
});