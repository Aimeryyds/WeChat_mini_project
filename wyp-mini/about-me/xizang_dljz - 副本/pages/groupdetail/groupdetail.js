function t(a) {
    var e = null;
    a <= 0 ? (clearTimeout(o), r.data.groupOrderId && r.getGroupNumberInfo(r.data.groupOrderId)) : (e = u.countdown(a), 
    o = setTimeout(function() {
        t(a - 1e3, r);
    }, 1e3)), r.setData({
        clock: e
    });
}

function a(t, a) {
    return t.sort().toString() == a.sort().toString();
}

var r, o, e = getApp(), u = require("../../utils/util"), s = require("../../utils/functions");

Page({
    data: {
        show_choose: !1,
        goods: null,
        groupOrderInfo: null,
        memberList: [],
        empty_list: [],
        userHasBuy: 0,
        userIsGroupMaster: 0,
        clock: null,
        attr_group: null,
        select_attr_arr: [],
        attrGroupMasterPrice: null,
        attrGroupPrice: null,
        attrPic: null,
        attrStock: 0,
        input_number: 1,
        orderNo: null,
        purchaseLimit: null,
        purchaseMax: null,
        autoBuidNumList: []
    },
    onLoad: function(t) {
        r = this, t.groupOrderId && (console.log(t.groupOrderId), this.data.groupOrderId = t.groupOrderId), 
        t.goodsSn && (this.data.goodsSn = t.goodsSn);
    },
    onShow: function() {
        e.getUserInfo(function(t) {
            r.getGroupGoodsList(), r.data.goodsSn && r.getShopInfo(r.data.goodsSn), r.data.groupOrderId && r.getGroupNumberInfo(r.data.groupOrderId);
        });
    },
    getPurchaseMax: function(t) {
        u.loading(), s.getPurchaseMax(t, function(t) {
            console.log(t), r.setData({
                purchaseLimit: t.purchaseLimit,
                purchaseMax: t.purchaseMax
            }), wx.hideToast();
        });
    },
    getGroupNumberInfo: function(a) {
        s.getGroupNumberInfo(a, function(a) {
            for (var o = [], e = 0; e < a.groupOrderInfo.attendNum - a.groupOrderInfo.nowNum; e++) o.push(e);
            for (var u = [], e = 0; e < a.groupOrderInfo.autoBuidNum; e++) u.push(e);
            for (var s = 0, n = 0, d = 0; d < a.memberList.length; d++) a.userId == a.memberList[d].member_id && (s = 1), 
            a.userId == a.memberList[d].group_master_id && (n = 1);
            4 != a.groupOrderInfo.status && a.groupOrderInfo.timerOver > 0 && t(a.groupOrderInfo.timerOver), 
            r.setData({
                groupOrderInfo: a.groupOrderInfo,
                memberList: a.memberList,
                orderNo: a.ordersNo,
                empty_list: o,
                autoBuidNumList: u,
                userHasBuy: s,
                userIsGroupMaster: n
            });
        });
    },
    getShopInfo: function(t) {
        s.getGoodsDetail(t, function(t) {
            null != t.goods && (null != t.goods.groupMarket ? (r.data.attrPic = t.goods.thumb, 
            null != t.goods.attrs && (r.data.attr_group = JSON.parse(t.goods.attrs), null != r.data.attr_group && r.data.attr_group.length > 0 && 0 == r.data.select_attr_arr.length && r.data.attr_group.forEach(function() {
                r.data.select_attr_arr.push(0);
            })), r.getPurchaseMax(t.goods.groupMarket.groupMarketId), r.setData({
                attrStock: t.goods.stock,
                attr_group: r.data.attr_group,
                select_attr_arr: r.data.select_attr_arr,
                goods: t.goods
            }), r.calAttrPrice()) : wx.showModal({
                title: "抱歉",
                content: "该商品拼团活动已结束",
                success: function(t) {
                    wx.navigateTo({
                        url: "/pages/shopdetail/shopdetail?goodsSn=" + r.data.goodsSn
                    });
                }
            }));
        });
    },
    bindAttrChange: function(t) {
        var a = t.currentTarget.id, o = parseInt(a.split(",")[0]), e = parseInt(a.split(",")[1]);
        r.data.select_attr_arr[o] = e, this.setData({
            select_attr_arr: r.data.select_attr_arr
        }), r.calAttrPrice();
    },
    calAttrPrice: function() {
        var t = r.data.attr_group, o = r.data.select_attr_arr;
        if (null != t && 0 != t.length) {
            var e = t[0].attrs[o[0]].pic;
            void 0 != e && null != e && "" != e || (e = r.data.goods.thumb), r.setData({
                attrPic: e
            }), r.data.attrs = [];
            for (var u = 0; u < o.length; u++) r.data.attrs.push(t[u].attrs[o[u]].value);
            var s = r.data.attrs.slice(), n = r.data.goods.skuList;
            if (null != n && n.length > 0) {
                var d = n.findIndex(function(t) {
                    return a(JSON.parse(t.attrs), s);
                });
                if (d >= 0) {
                    var i = n[d];
                    r.setData({
                        attrStock: i.stock,
                        attrGroupMasterPrice: i.groupMarketMasterPrice,
                        attrGroupPrice: i.groupMarketPrice
                    });
                }
            }
        } else r.setData({
            attrGroupPrice: r.data.goods.groupMarket.groupMarketPrice,
            attrStock: r.data.goods.stock,
            attrPic: r.data.goods.thumb
        });
    },
    showChoose: function(t) {
        r.setData({
            show_choose: !0
        });
    },
    closeChoose: function() {
        r.setData({
            show_choose: !1
        });
    },
    bindPlus: function(t) {
        r.data.input_number != r.data.attrStock && (r.data.input_number++, r.setData({
            input_number: r.data.input_number
        }));
    },
    bindMinus: function(t) {
        1 != r.data.input_number && (r.data.input_number--, r.setData({
            input_number: r.data.input_number
        }));
    },
    bindKeyInput: function(t) {
        var a = parseFloat(t.detail.value);
        a <= 0 ? a = 1 : a > r.data.attrStock && (a = r.data.attrStock), r.setData({
            input_number: a
        });
    },
    confirm: function() {
        if (r.data.purchaseLimit && 1 == r.data.purchaseLimit && r.data.purchaseLimit && 1 == r.data.purchaseLimit) {
            if (0 == r.data.purchaseMax) return void wx.showToast({
                title: "超过限购数量"
            });
            if (r.data.input_number > r.data.purchaseMax) return void wx.showToast({
                title: "已超过最大购买数, 还可再买" + r.data.purchaseMax + "件"
            });
        }
        var t = r.data.attrGroupPrice ? r.data.attrGroupPrice : r.data.attrGroupMasterPrice;
        r.buy(t, !1);
    },
    buy: function(t, a) {
        if (r.data.attrStock <= 0) u.toast("库存为0，不能购买"); else {
            var o = r.data.goods, e = {
                goodsId: o.id,
                goods: {
                    goodsSn: o.goodsSn,
                    name: o.name,
                    price: t
                },
                pic: r.data.attrPic,
                number: r.data.input_number
            };
            r.data.goods.rebateList && 0 != r.data.goods.rebateList.length && (e.activityId = r.data.goods.rebateList[0].activityId), 
            r.data.attrs && (e.attrs = r.data.attrs);
            var s = {
                totalPrice: t * r.data.input_number + r.data.goods.carriage,
                deliveryFee: r.data.goods.carriage,
                list: [ e ],
                enabled_coupon: a
            };
            r.data.goods.groupMarket && (s.masterReceive = r.data.goods.groupMarket.masterReceive, 
            s.isGroup = 2, s.groupOrderId = r.data.groupOrderInfo.groupOrderId, s.groupMarketId = r.data.groupOrderInfo.groupMarketId), 
            wx.navigateTo({
                url: "../settle/settle?orders=" + encodeURIComponent(JSON.stringify(s))
            });
        }
    },
    onShareAppMessage: function() {
        return {
            title: r.data.goods.name,
            path: "/pages/groupdetail/groupdetail?groupOrderId=" + this.data.groupOrderId + "&goodsSn=" + this.data.goodsSn,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    getGroupGoodsList: function() {
        r = this;
        s.getRecommendList(11, function(t) {
            var a = t.list;
            if (null != a && a.length > 0) for (var o = 0; o < a.length; o++) if (a[o].thumb = a[o].thumb + "?imageslim", 
            r.data.goodsSn == a[o].goodsSn) {
                a.splice(o, 1);
                break;
            }
            r.setData({
                module_list: a
            });
        });
    },
    onHide: function() {
        clearTimeout(o);
    },
    onUnload: function() {
        clearTimeout(o);
    }
});