var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        show: !1,
        total_price: 0,
        price: 0,
        cash_price: 0,
        total_cash: 0,
        team_count: 0,
        order_money: 0
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(t) {
        t.title = t.title ? t.title : "分销中心", e.ReName(t.title), e.setting(), null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), this.setData({
            menu: getApp().tabBar,
            class_id: t.id ? t.id : "",
            class_id1: t.id ? t.id : "",
            class_style: t.class_style ? t.class_style : 2
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.getInfo();
    },
    getInfo: function() {
        var i = this;
        e.get("Distribe/shareSetting", {}, function(e) {
            0 == e.code && (t.setCache("shareSetting", e.info), i.setData({
                shareSetting: e.info
            }));
        }), e.get("Distribe/userinfo", {
            uid: t.getCache("userinfo").uid
        }, function(n) {
            0 == n.code ? (t.setCache("share_userinfo", n.info), i.setData({
                user_info: n.info,
                show: !0
            })) : e.alert(n.msg, function() {
                e.jump("", 5);
            });
        }, !0);
    },
    onReady: function() {},
    onShow: function() {},
    onPullDownRefresh: function() {
        this.getInfo(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    apply: function(t) {
        e.jump("../add-share/index?title=申请" + this.data.shareSetting.other[13]);
    },
    home: function(t) {
        e.jump("/yb_shop/pages/index/index", 2);
    }
});