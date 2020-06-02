getApp();

var t, a = require("../../utils/functions"), e = require("../../utils/util");

Page({
    data: {
        list: null,
        invalid_list: null,
        totalPrice: 0,
        deliveryFee: 0,
        is_all_choose: !1
    },
    onLoad: function() {
        t = this;
    },
    onShow: function() {
        t.getCartList();
    },
    getCartList: function() {
        a.getCartList(function(a) {
            if (null != a.list) {
                var e = a.list.filter(function(t) {
                    return 1 == t.goods.frozen;
                }), i = a.list.filter(function(t) {
                    return 0 == t.goods.frozen;
                });
                e.forEach(function(t) {
                    t.selected = !1, null != t.attrs && "undefined" != t.attrs && (t.attrs = JSON.parse(t.attrs), 
                    t.attrsStr = t.attrs.join(" & "));
                }), t.setData({
                    is_all_choose: !1,
                    list: e,
                    invalid_list: i
                }), wx.setNavigationBarTitle({
                    title: "购物车（" + a.list.length + "）"
                });
            }
        });
    },
    bindPlus: function(e) {
        var i = e.currentTarget.dataset.idx, s = t.data.list[i];
        s.number >= s.goods.stock || a.changeCart(s.id, 1, function() {
            t.data.list[i].number++, t.setData({
                list: t.data.list
            });
        });
    },
    bindMinus: function(e) {
        var i = e.currentTarget.dataset.idx;
        1 != t.data.list[i].number && a.changeCart(t.data.list[i].id, -1, function() {
            t.data.list[i].number--, t.setData({
                list: t.data.list
            });
        });
    },
    bindKeyInput: function(e) {
        if (e.detail.value) {
            var i = e.currentTarget.dataset.idx, s = t.data.list[i], l = parseFloat(e.detail.value);
            l >= s.goods.stock && (l = s.goods.stock), l <= 0 && (l = 1), a.updateCartNumber(t.data.list[i].id, l, function() {
                t.data.list[i].number = l, t.setData({
                    list: t.data.list
                }), t.computeTotalPrice();
            });
        }
    },
    delCartItem: function(i) {
        var s = i.currentTarget.id, l = i.currentTarget.dataset.idx;
        e.confirm("是否确认将该商品从购物车中删除", "", function() {
            a.delCartItem(s, function(a) {
                t.data.list.splice(l, 1), t.setData({
                    list: t.data.list
                });
            });
        });
    },
    clearInvalid: function() {
        e.confirm("确认清空失效宝贝吗？", "", function() {
            a.clearInvalid(function(a) {
                t.setData({
                    invalid_list: null
                });
            });
        });
    },
    chooseAll: function() {
        var a = !t.data.is_all_choose;
        t.data.list.forEach(function(t) {
            t.selected = a;
        }), t.setData({
            is_all_choose: a,
            list: t.data.list
        }), t.computeTotalPrice();
    },
    chooseItem: function(t) {
        var a = parseInt(t.currentTarget.dataset.idx);
        this.data.list[a].selected = !this.data.list[a].selected, this.setData({
            list: this.data.list
        });
        var e = !1;
        e = this.data.list.filter(function(t) {
            return t.selected;
        }).length == this.data.list.length, this.setData({
            is_all_choose: e
        }), this.computeTotalPrice();
    },
    computeTotalPrice: function() {
        var a = 0, i = [];
        t.data.list.forEach(function(t) {
            t.selected && (t.goods.carriage > 0 && i.push(t.goods.carriage), a += parseFloat(t.goods.price) * t.number);
        });
        var s = 0 == i.length ? 0 : e.getArrayMax(i);
        this.setData({
            deliveryFee: s.toFixed(2),
            totalPrice: (a + s).toFixed(2)
        });
    },
    settle: function() {
        var a = this.data.list.filter(function(t) {
            return t.selected;
        });
        if (0 != a.length) {
            var i = {
                totalPrice: t.data.totalPrice,
                deliveryFee: t.data.deliveryFee,
                list: a
            };
            wx.navigateTo({
                url: "../settle/settle?orders=" + encodeURIComponent(JSON.stringify(i))
            });
        } else e.toast("请至少选择一件商品");
    },
    go2GoodsDetail: function(t) {
        wx.navigateTo({
            url: "/pages/shopdetail/shopdetail?goodsSn=" + t.currentTarget.id
        });
    }
});