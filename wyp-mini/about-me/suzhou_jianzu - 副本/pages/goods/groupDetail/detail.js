var t = require("../../../utils/server");

Page({
    data: {
        loading: !0,
        goods: {},
        current: 0,
        tabStates: [ !0, !1, !1 ],
        tabClasss: [ "text-select", "text-normal", "text-normal" ],
        galleryHeight: getApp().screenWidth,
        tab: 0,
        goods_num: 1,
        textStates: [ "view-btns-text-normal", "view-btns-text-select" ]
    },
    propClick: function(t) {
        for (var o = t.currentTarget.dataset.pos, s = t.currentTarget.dataset.index, a = this.data.goods, e = 0; e < a.goods.goods_spec_list[s].length; e++) e == o ? a.goods.goods_spec_list[s][o].isClick = 1 : a.goods.goods_spec_list[s][e].isClick = 0;
        this.setData({
            goods: a
        }), this.checkPrice();
    },
    addCollect: function(o) {
        var s = o.currentTarget.dataset.id;
        console.log(s);
        var a = getApp().globalData.userInfo.user_id;
        t.getJSON("/Goods/collectGoods/user_id/" + a + "/goods_id/" + s + "/type/0", function(t) {
            wx.showToast({
                title: t.data.msg,
                icon: "success",
                duration: 2e3
            });
        });
    },
    bindMinus: function(t) {
        var o = this.data.goods_num;
        o > 1 && o--, this.setData({
            goods_num: o
        });
    },
    bindManual: function(t) {
        parseInt(t.currentTarget.dataset.index);
        var o = t.detail.value;
        this.setData({
            goods_num: o
        });
    },
    bindPlus: function(t) {
        var o = this.data.goods_num;
        o++, this.setData({
            goods_num: o
        });
    },
    onLoad: function(t) {
        var o = t.objectId;
        this.getGoodsById(o);
    },
    tabClick: function(t) {
        var o = t.currentTarget.dataset.index, s = [ "text-normal", "text-normal", "text-normal" ];
        s[o] = "text-select", this.setData({
            tabClasss: s,
            tab: o
        });
    },
    getGoodsById: function(o) {
        var s = this;
        t.getJSON("/Activity/group/id/" + o, function(t) {
            var o = t.data.result;
            s.setData({
                loading: !1,
                groupInfo: t.data.groupInfo,
                goods: o
            }), s.checkPrice();
        });
    },
    checkPrice: function() {
        return void this.setData({
            price: this.data.groupInfo.price
        });
    },
    bug: function() {
        var o = this.data.goods, s = "";
        if (null != o.goods.goods_spec_list) for (var a = 0; a < o.goods.goods_spec_list.length; a++) for (var e = 0; e < o.goods.goods_spec_list[a].length; e++) 1 == o.goods.goods_spec_list[a][e].isClick && (s = "" == s ? o.goods.goods_spec_list[a][e].item_id : s + "_" + o.goods.goods_spec_list[a][e].item_id);
        var i = getApp(), d = this, r = d.data.goods.goods.goods_id, g = s, n = i.globalData.openid, c = d.data.goods_num, l = "0";
        i.globalData.login && (l = i.globalData.userInfo.user_id), t.getJSON("/Cart/addCart", {
            goods_id: r,
            goods_spec: g,
            session_id: n,
            goods_num: c,
            user_id: l
        }, function(t) {
            1 == t.data.status ? (wx.showToast({
                title: "已加入购物车",
                icon: "success",
                duration: 2e3
            }), wx.switchTab({
                url: "../../cart/cart"
            })) : wx.showToast({
                title: t.data.msg,
                icon: "error",
                duration: 2e3
            });
        });
    },
    addCart: function() {
        var o = this.data.goods, s = "";
        if (null != o.goods.goods_spec_list) for (var a = 0; a < o.goods.goods_spec_list.length; a++) for (var e = 0; e < o.goods.goods_spec_list[a].length; e++) 1 == o.goods.goods_spec_list[a][e].isClick && (s = "" == s ? o.goods.goods_spec_list[a][e].item_id : s + "_" + o.goods.goods_spec_list[a][e].item_id);
        var i = getApp(), d = this, r = d.data.goods.goods.goods_id, g = s, n = i.globalData.openid, c = d.data.goods_num, l = "0";
        i.globalData.login && (l = i.globalData.userInfo.user_id), t.getJSON("/Cart/addCart", {
            goods_id: r,
            goods_spec: g,
            session_id: n,
            goods_num: c,
            user_id: l
        }, function(t) {
            1 == t.data.status ? wx.showToast({
                title: "已加入购物车",
                icon: "success",
                duration: 1e3
            }) : wx.showToast({
                title: t.data.msg,
                icon: "error",
                duration: 1e3
            });
        });
    },
    showCartToast: function() {
        wx.showToast({
            title: "已加入购物车",
            icon: "success",
            duration: 1e3
        }), wx.navigateTo({
            url: "../../../../../../cart/cart"
        });
    },
    previewImage: function(t) {
        wx.previewImage({
            current: this.data.goods.get("images")[parseInt(t.currentTarget.dataset.current)],
            urls: this.data.goods.get("images")
        });
    }
});