var a, n = getApp(), t = require("../../../utils/functions"), c = require("../../../utils/util");

Page({
    data: {
        account: null,
        payway: 1,
        paywaylist: [ {
            name: "微信零钱",
            pic: "icon_wechat"
        }, {
            name: "支付宝",
            pic: "icon_alipay"
        }, {
            name: "银行卡",
            pic: "icon_card"
        } ],
        banks: null,
        bank_idx: null
    },
    onLoad: function(t) {
        a = this, t.payway && a.setData({
            payway: t.payway
        }), a.getBankList(), n.getUserInfo(function(n) {
            a.getWithdrawAccount();
        });
    },
    getWithdrawAccount: function() {
        t.getWithdrawAccount(function(n) {
            var t = a.data.banks.findIndex(function(a) {
                return a == n.account.bank;
            });
            a.setData({
                bank_idx: t,
                account: n.account
            });
        });
    },
    getBankList: function() {
        n.getBankList(function(n) {
            a.setData({
                banks: n
            });
        });
    },
    save: function(e) {
        var i = e.detail.value, o = a.data.payway;
        1 != o || i.wxAuthname ? 2 != o || i.alipayAccount && i.alipayAuthname ? (3 == o && (i.bank = a.data.banks[a.data.bank_idx], 
        i.bankAccount = i.bankAccount.replace(/ /g, "")), 3 != o || i.bank && i.bankAddress && i.bankName && i.bankUsername && i.bankAccount ? t.improveSpokesman(i, function(a) {
            1 == o ? n.globalData.userInfo.wxAuthname = i.wxAuthname : 2 == o ? n.globalData.userInfo.alipayAccount = i.alipayAccount : 3 == o && (n.globalData.userInfo.bankAccount = i.bankAccount), 
            c.toast("提交成功", function() {
                wx.navigateBack();
            });
        }) : c.toast("请先完善银行卡账号")) : c.toast("请先完善支付宝账号") : c.toast("请先完善微信零钱账号");
    },
    chooseWay: function(a) {
        var n = a.currentTarget.id;
        this.setData({
            payway: n
        });
    },
    bindPickerChange: function(a) {
        this.setData({
            bank_idx: a.detail.value
        });
    }
});