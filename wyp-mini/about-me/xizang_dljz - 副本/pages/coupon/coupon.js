getApp();

var t, i = require("../../utils/functions");

require("../../utils/util");

Page({
    data: {
        tags: [ "未使用", "已使用", "已过期" ],
        selected: 0,
        list1: [],
        list2: [],
        list3: []
    },
    onLoad: function(i) {
        (t = this).getMyCoupons();
    },
    getMyCoupons: function() {
        i.getCouponList(function(i) {
            for (var e = [], s = [], n = [], o = 0; o < i.list.length; o++) {
                var u = i.list[o];
                u.coupon.beginTime = u.coupon.beginTime.split(" ")[0], u.coupon.endTime = u.coupon.endTime.split(" ")[0];
                var l = [];
                1 == u.coupon.openAmountLimit && l.push("满" + u.coupon.limitAmount + "元可用"), 1 == u.coupon.openOriginalLimit && l.push("仅限原价购买使用"), 
                0 == l.length ? u.limitStr = "无使用限制" : u.limitStr = l.join("、"), 1 == u.isUsed ? (u.status = "已使用", 
                s.push(u)) : u.hasDue ? (u.status = "已过期", n.push(u)) : e.push(u);
            }
            t.setData({
                list1: e,
                list2: s,
                list3: n
            });
        });
    },
    clickTag: function(t) {
        var i = parseInt(t.currentTarget.id);
        this.setData({
            selected: i
        });
    },
    scrollContent: function(t) {
        console.log(t);
        var i = t.detail.current;
        this.setData({
            selected: i
        });
    }
});