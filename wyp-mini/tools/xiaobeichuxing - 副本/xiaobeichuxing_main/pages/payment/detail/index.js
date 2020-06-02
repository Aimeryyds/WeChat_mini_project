function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = require("../../../utils/util.js"), e = require("../../../utils/https.js");

Page({
    data: {
        hidden: !0,
        time: "",
        detailist: [],
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    onLoad: function(t) {
        var e = a.formatTime(new Date());
        this.setData({
            time: e
        }), this.detailList();
    },
    detailList: function() {
        var a = this, i = {
            uid: wx.getStorageSync("uid"),
            etime: this.data.time
        };
        e.req("User/RechargeDetail", i, function(e, i) {
            if (0 == i.data.code) for (var s = 0; s < i.data.data.length; s++) {
                var r = i.data.data[s].rechargetime.replace(/T/, " "), d = i.data.data[s].recharge, n = i.data.data[s].paytype, l = "detailist[" + s + "].rechargetime", o = "detailist[" + s + "].amount", c = "detailist[" + s + "].paytype", u = "detailist[" + s + "].recharge";
                if (1 == d ? a.setData(t({}, u, "押金充值")) : 0 == d ? a.setData(t({}, u, "余额充值")) : 2 == d ? a.setData(t({}, u, "充值券发放")) : 3 == d ? a.setData(t({}, u, "押金退款")) : 12 == d ? a.setData(t({}, u, "购买骑行卡畅骑卡")) : 13 == d ? a.setData(t({}, u, "购买骑行卡次卡")) : 7 == d && a.setData(t({}, u, "购买免押金骑行卡")), 
                1 == n ? a.setData(t({}, c, "微信充值")) : 2 == n ? a.setData(t({}, c, "支付宝充值")) : 3 == n ? a.setData(t({}, c, "人工充值")) : 4 == n ? a.setData(t({}, c, "微信充值")) : 5 == n ? a.setData(t({}, c, "微信退款")) : 6 == n ? a.setData(t({}, c, "支付宝退款")) : 7 == n && a.setData(t({}, c, "违章扣费")), 
                3 == d || 12 == d || 13 == d || 7 == d) {
                    var D;
                    a.setData((D = {}, t(D, o, i.data.data[s].amount), t(D, l, r), D));
                } else {
                    var h;
                    a.setData((h = {}, t(h, o, "+" + i.data.data[s].amount), t(h, l, r), h));
                }
            } else wx.showModal({
                title: "",
                content: i.data.retmsg,
                showCancel: !1,
                success: function(t) {
                    t.confirm;
                }
            });
        });
    }
});