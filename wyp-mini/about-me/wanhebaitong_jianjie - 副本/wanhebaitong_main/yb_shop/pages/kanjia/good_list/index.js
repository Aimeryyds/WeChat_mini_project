var t = getApp(), a = t.requirejs("core"), e = t.requirejs("api/kjb");

Page({
    data: {
        status: [ "正在进行", "即将开始", "全部活动" ],
        kj_type: 1,
        cate_info: [],
        page: 1,
        cate_index: 0,
        show: !1,
        loaded: !1,
        list: []
    },
    onLoad: function(t) {
        a.setting();
        var i = this;
        i.setData(t), i.getList(), e.BarIndex(function(a) {
            a.cate_info.forEach(function(a, e) {
                a.id == t.cate_id && i.setData({
                    cate_index: e
                });
            }), i.setData(a);
        });
    },
    getList: function() {
        var t = this, a = t.data.page, i = t.data.kj_type, s = t.data.cate_id;
        wx.setNavigationBarTitle({
            title: t.data.class_name || "活动列表"
        }), e.kj_list(s, i, a, t, function(a) {
            t.setData(a);
        });
    },
    status: function(t) {
        var a = parseInt(t.detail.value) + 1;
        this.setData({
            kj_type: a,
            list: [],
            page: 1,
            loaded: !1
        }), this.getList();
    },
    cate: function(t) {
        var a = this, e = t.detail.value;
        a.data.cate_info.forEach(function(t, i) {
            i == e && (a.setData({
                cate_index: e,
                cate_id: t.id,
                list: [],
                page: 1,
                loaded: !1,
                class_name: t.class_name
            }), a.getList());
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1
        }), this.getList(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        this.data.loaded || this.getList();
    },
    url: function(t) {
        var e = a.pdata(t);
        2 == e.goods_type && wx.navigateTo({
            url: "/yb_shop/pages/kanjia/goods_info/index?id=" + e.id
        });
    },
    onShareAppMessage: function() {}
});