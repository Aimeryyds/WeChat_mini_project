var a = require("../../wxParse/tua-mp"), t = getApp();

(0, a.TuaPage)({
    data: function() {
        return {
            acc: 0,
            num: 0,
            act: 0,
            aindex: 0,
            accounts: [ "支付宝", "中国银行", "工商银行", "建设银行", "农业银行", "招商银行", "中国邮政" ],
            accinfo: [],
            id: 0,
            isalipay: wx.canIUse("alert")
        };
    },
    onLoad: function(a) {
        var c = this, n = 0;
        a.id && (n = a.id), n && (c.id = n, t.apiRequest("user", "mydis_account_list", {
            data: {
                id: n
            },
            success: function(a) {
                if ("OK" == a.data.result) {
                    var t = [];
                    t = a.data.tixian_accounts[0], c.accinfo = t, Object.keys(t).length > 0 && (c.aindex = t.account_type - 1, 
                    c.act = 2, c.acc = 1, c.num = 1);
                } else wx.showToast({
                    title: "参数错误"
                }), wx.navigateBack();
            }
        }));
    },
    computed: {},
    watch: {},
    methods: {
        submitAccount: function(a) {
            var c = a.detail.value, n = this.accounts[this.aindex], i = this.id;
            if (c.account_no ? c.account_info ? n || "请选择收款方式" : "请填写收款人" : "请填写收款帐号", 2 != this.act) return !1;
            var e = {
                id: i,
                account_type: parseInt(this.aindex) + 1,
                account_name: n,
                account_no: c.account_no,
                account_info: c.account_info
            };
            this.data.isalipay && (e = JSON.stringify(e)), t.apiRequest("user", "mydis_accounts_save", {
                data: {
                    param: e
                },
                success: function(a) {
                    if ("OK" == a.data.result) wx.showModal({
                        title: "提交成功",
                        content: "",
                        showCancel: !1,
                        success: function() {
                            wx.navigateBack();
                        }
                    }); else {
                        var t = a.data.errmsg || "请求失败";
                        wx.showModal({
                            title: t,
                            content: "",
                            showCancel: !1
                        });
                    }
                }
            });
        },
        accountsChange: function(a) {
            var t = a.detail.value;
            t && (this.aindex = t, this.data.isalipay && this.setData({
                aindex: t
            }));
        },
        chesta: function(a) {
            var t = this;
            0 == a.detail.value.length ? t.acc = 0 : t.acc = 1, t.act = 1 * t.acc + 1 * t.num, 
            t.data.isalipay && t.setData({
                acc: t.acc,
                act: t.act
            });
        },
        chestb: function(a) {
            var t = this;
            0 == a.detail.value.length ? t.num = 0 : t.num = 1, t.act = 1 * t.acc + 1 * t.num, 
            t.data.isalipay && t.setData({
                num: t.num,
                act: t.act
            });
        }
    }
});