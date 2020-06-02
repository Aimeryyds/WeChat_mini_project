var t = getApp(), a = t.requirejs("core"), e = t.requirejs("api/kjb");

Page({
    data: {
        show: !1,
        loaded: !1,
        page: 1,
        list: []
    },
    onLoad: function(t) {
        a.setting(), this.setData(t), this.getList();
    },
    getList: function() {
        var t = this, a = t.data.page;
        e.MyBargain(a, t, function(a) {
            t.setData(a);
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1
        }), this.getList(), wx.stopPullDownRefresh();
    },
    url: function(t) {
        var e = a.pdata(t);
        1 == e.goods_type ? wx.navigateTo({
            url: "/yb_shop/pages/kanjia/discount_info/index?id=" + e.id + "&kj_stu=1"
        }) : a.alert("活动已结束");
    },
    onReachBottom: function() {
        this.data.loaded || this.getList();
    }
});