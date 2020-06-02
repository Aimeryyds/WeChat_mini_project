var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        route: "caregory",
        menu: t.tabBar,
        menu_show: !1,
        curHdIndex: 0,
        category: {},
        cate_type: 0,
        toView: "inToView0"
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onPullDownRefresh: function() {
        this.getCategory(), wx.stopPullDownRefresh();
    },
    tabFun: function(t) {
        console.log(t);
        var a = e.data(t).id;
        console.log(a), this.setData({
            curHdIndex: a,
            toView: "inToView" + a
        });
    },
    scroll: function(t) {
        for (var e = this, a = 0, o = t.detail.scrollTop, n = e.data.category, i = 0; i < n.length && (0 == e.data.cate_type ? n[i].num = Math.ceil(n[i].cate.length / 3) : n[i].num = Math.ceil(n[i].goods_list.length / 3), 
        !(o < (a += 40 + 80 * n[i].num))); i++) ;
        e.setData({
            scrollTop: o,
            curHdIndex: i
        });
    },
    scrollToViewFn: function(t) {
        var e = t.target.dataset.id;
        this.setData({
            toView: "inToView" + e
        });
    },
    getCategory: function() {
        var t = this, a = [];
        e.get("goods/GetCate", {}, function(o) {
            0 == o.code ? (o.info.forEach(function(t) {
                t.cate && 0 != t.cate.length && a.push(t.cate_id);
            }), t.setData({
                cate_type: 1
            }), e.get("goods/CateGoods", {}, function(a) {
                0 == a.code ? (console.log(22), t.setData({
                    category: a.info
                })) : e.alert(a.msg);
            })) : e.alert(o.msg);
        });
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), e.setting(), this.getCategory();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.onShareAppMessage();
    }
});