function e(e, a) {
    return e = parseFloat(e), (a = parseFloat(a)) < e ? a : e;
}

var a = getApp(), t = a.requirejs("core"), i = !1;

Page({
    data: {
        cash_max_day: -1,
        selected: -1
    },
    onLoad: function(e) {},
    onShow: function() {
        var e = this, i = e.data.cash_max_day, n = a.getCache("shareSetting");
        t.get("Distribe/userinfo", {
            uid: a.getCache("userinfo").uid
        }, function(a) {
            0 == a.code ? (n.max_money && 0 != n.max_money && (i = parseFloat(n.max_money) - parseFloat(a.info.today_price)), 
            e.setData({
                user_info: a.info,
                share_setting: n,
                cash_max_day: i,
                show: !0
            })) : t.alert(a.msg, function() {
                t.jump("", 5);
            });
        }, !0);
    },
    onPullDownRefresh: function() {},
    formSubmit: function(n) {
        var s = this, r = parseFloat(parseFloat(n.detail.value.cash).toFixed(2)), o = s.data.user_info.price;
        if (-1 != s.data.cash_max_day && (o = e(o, s.data.cash_max_day)), r) if (o < r) t.alert("提现金额不能超过" + o + "元"); else if (r < parseFloat(s.data.share_setting.min_money)) t.alert("提现金额不能低于" + s.data.share_setting.min_money + "元"); else {
            var d = s.data.selected;
            if (0 == d || 1 == d || 2 == d || 3 == d) {
                if (0 == d || 1 == d || 2 == d) {
                    if (!(c = n.detail.value.name) || null == c) return void t.warning("姓名不能为空");
                    if (!(u = n.detail.value.mobile) || null == u) return void t.warning("账号不能为空");
                }
                if (2 == d) {
                    if (!(l = t.detail.value.bank_name) || null == l) return void t.warning("开户行不能为空");
                } else var l = "";
                if (3 == d) var u = l = "", c = "";
                if (i) return;
                i = !0, t.loading("正在提交"), t.get("Distribe/addCash", {
                    price: r,
                    name: c,
                    mobile: u,
                    bank_name: l,
                    pay_type: d,
                    user_id: a.getCache("userinfo").uid
                }, function(e) {
                    t.hideLoading(), i = !1, 0 == e.code ? (t.success("申请成功"), setTimeout(function() {
                        t.jump("../index/index", 2);
                    }, 1e3)) : t.alert(e.msg);
                });
            } else t.warning("请选择提现方式");
        } else t.warning("请输入提现金额");
    },
    showCashMaxDetail: function() {
        wx.showModal({
            title: "提示",
            content: "今日剩余提现金额=平台每日可提现金额-今日所有用户提现金额"
        });
    },
    select: function(e) {
        var a = e.currentTarget.dataset.index;
        a != this.data.check && this.setData({
            name: "",
            mobile: "",
            bank_name: ""
        }), this.setData({
            selected: a
        });
    }
});