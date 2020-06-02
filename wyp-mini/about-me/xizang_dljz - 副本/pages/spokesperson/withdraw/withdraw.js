var a, t = getApp(), n = require("../../../utils/functions"), o = require("../../../utils/util");

Page({
    data: {
        account: null,
        payway: 0,
        paywayStrs: [ "请选择", "微信零钱", "支付宝", "银行卡" ],
        amount: null,
        balance: null
    },
    onLoad: function(n) {
        a = this, t.getUserInfo(function(t) {
            a.setData({
                payway: t.payway
            }), a.calWithdrawAmount();
        });
    },
    onShow: function() {},
    calWithdrawAmount: function() {
        n.calWithdrawAmount(function(n) {
            var o = parseFloat((n.balance - n.frozenAmount).toFixed(2));
            1 == a.data.payway && 1 != n.account.openWechat && (a.data.payway = 0), 2 == a.data.payway && 1 != n.account.openAlipay && (a.data.payway = 0), 
            3 == a.data.payway && 1 != n.account.openBank && (a.data.payway = 0), a.setData({
                account: n.account,
                balance: o,
                payway: a.data.payway
            }), t.globalData.userInfo.account = n.account;
        });
    },
    inputAmount: function(t) {
        a.setData({
            amount: t.detail.value
        });
    },
    withdrawAll: function() {
        a.setData({
            amount: a.data.balance
        });
    },
    choosePayway: function() {
        wx.navigateTo({
            url: "/pages/spokesperson/accountlist/accountlist?payway=" + a.data.payway
        });
    },
    confirm: function(t) {
        0 != a.data.payway ? 1 != a.data.payway || a.data.account.wxAuthname ? 2 != a.data.payway || a.data.account.alipayAccount ? 3 != a.data.payway || a.data.account.bankAccount ? a.data.amount ? a.data.amount > a.data.balance ? o.toast("提现金额不能超过" + a.data.balance) : n.applyWithdraw(a.data.payway, a.data.amount, function(a) {
            a.msg ? o.toast(a.msg) : o.toast("已成功提交申请，请耐心等候通知！", function() {
                setTimeout(function() {
                    wx.navigateBack();
                }, 1e3);
            });
        }) : o.toast("请输入提现金额") : o.toast("请先完善银行卡账号") : o.toast("请先完善支付宝账号") : o.toast("请先完善微信零钱账号") : o.toast("请选择提现账户");
    }
});