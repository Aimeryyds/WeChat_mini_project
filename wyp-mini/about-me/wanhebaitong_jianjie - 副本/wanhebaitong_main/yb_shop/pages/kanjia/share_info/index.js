var a = getApp(), t = a.requirejs("core"), n = a.requirejs("api/kjb");

Page({
    data: {
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        popup: !1,
        countDownDay: 0,
        countDownHour: 0,
        countDownMinute: 0,
        countDownSecond: 0,
        show_time: !0,
        display: !0
    },
    onGotUserInfo: function(t) {
        var n = this, i = a.getCache("userinfo");
        n.setData({
            display: !1
        }), i || a.getUserInfo(t.detail.userInfo, function(a) {
            1e3 != a || n.setData({
                display: !0
            });
        });
    },
    onLoad: function(t) {
        console.log(t), t.bargain_id, a.getCache("userinfo") && this.setData({
            display: !1
        }), this.setData(t), this.detail();
    },
    detail: function() {
        var a = this, t = a.data.uid, i = a.data.bargain_id;
        n.kj_info(i, t, a, function(t) {
            if (a.setData(t), t.bargain_info.end_time) {
                var i = t.bargain_info.end_time;
                n.Countdown(i, function(t) {
                    a.setData(t);
                });
            }
        });
    },
    tankuang: function() {
        this.setData({
            popup: !1
        });
    },
    bargain_help: function(a) {
        var i = this, o = i.data.id, e = i.data.uid;
        i.data.show_time ? i.data.bargain_info.bargain_inventory < 1 ? t.alert("库存不足") : n.BargainHelp(o, e, function(a) {
            console.log(a), i.setData(a), i.detail();
        }) : t.alert("该活动已经结束");
    },
    shoping: function(a) {
        var n = t.pdata(a).id;
        return this.data.show_time ? this.data.bargain_info.bargain_inventory < 1 ? (t.alert("库存不足"), 
        !1) : void wx.navigateTo({
            url: "/yb_shop/pages/kanjia/discount_info/index?id=" + n
        }) : (t.alert("该活动已经结束"), !1);
    },
    onPullDownRefresh: function() {
        this.detail(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});