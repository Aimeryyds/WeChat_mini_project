getApp();

var a, t = require("../../utils/functions"), e = require("../../utils/util");

Page({
    data: {
        actId: 0,
        tags: [ "优惠券", "实物奖品", "现金红包" ],
        selected: 0,
        coupon_awards: [],
        cash_awards: [],
        goods_awards: []
    },
    onLoad: function(t) {
        (a = this).data.actId = t.actId ? t.actId : 0;
    },
    onShow: function() {
        a.getAwardList();
    },
    getAwardList: function() {
        e.loading();
        var a = this, s = [], r = [], i = [];
        t.getLotteryAwards(a.data.actId, {
            isMine: 1
        }, function(t) {
            null != t.page.list && (t.page.list = t.page.list.map(function(a) {
                return a.createTime = a.createTime.split(" ")[0], a.overTime = a.overTime.split(" ")[0], 
                1 == a.awardType ? s.push(a) : 2 == a.awardType ? i.push(a) : 3 == a.awardType && r.push(a), 
                a;
            }), a.setData({
                coupon_awards: s,
                goods_awards: r,
                cash_awards: i
            }), wx.hideToast());
        });
    },
    clickTag: function(a) {
        var t = parseInt(a.currentTarget.id);
        this.setData({
            selected: t,
            current: t
        });
    },
    scrollContent: function(a) {
        console.log(a);
        var t = a.detail.current;
        this.setData({
            selected: t
        });
    },
    onShareAppMessage: function() {}
});