var a = require("../../wxParse/tua-mp"), t = getApp();

(0, a.TuaPage)({
    data: function() {
        return {
            msg: "msg",
            datas: [],
            apply: {
                value: 0,
                account: 0
            },
            accounts: [],
            aindex: -1,
            isalipay: wx.canIUse("alert")
        };
    },
    conLoad: function() {},
    onShow: function() {
        var a = this;
        t.globalData.userInfo ? t.apiRequest("user", "mydis_cashout", {
            data: [],
            success: function(t) {
                if ("OK" == t.data.result) {
                    if (a.datas = t.data, a.apply.value = t.data.minval, a.data.isalipay && a.setData({
                        datas: t.data,
                        "apply.value": t.data.minval
                    }), t.data.tixian_accounts) {
                        var i = t.data.tixian_accounts, n = [];
                        for (var e in i) n.push(i[e].account_name + " " + i[e].account_info);
                        a.accounts = n, a.data.isalipay && a.setData({
                            accounts: n
                        });
                    }
                    wx.getStorage({
                        key: "acount_index",
                        success: function(t) {
                            t.data ? a.aindex = t.data : a.aindex = 0;
                        },
                        fail: function() {
                            a.aindex = 0;
                        }
                    }), a.data.isalipay && a.setData({
                        aindex: a.aindex
                    });
                    var s = {
                        detail: {
                            value: a.aindex
                        }
                    };
                    a.accountsChange(s);
                } else {
                    var u = t.data.errmsg || "请求失败";
                    wx.showModal({
                        title: u,
                        content: "",
                        showCancel: !1,
                        success: function() {
                            wx.navigateBack();
                        }
                    });
                }
            }
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    computed: {
        applyValue: function() {
            return this.apply.value;
        }
    },
    watch: {},
    methods: {
        sliderChange: function(a) {
            var t = a.detail.value;
            this.apply.value = t, this.data.isalipay && this.setData({
                "apply.value": t
            });
        },
        submitApply: function(a) {
            var i = a.detail.formId, n = this.datas, e = a.detail.value;
            if (e["input-value"] > n.remaining || e["input-value"] < n.minval) return wx.showModal({
                title: "提交失败",
                content: "申请金额错误",
                showCancel: !1
            }), !1;
            var s = {
                amount: e["input-value"],
                remark: e["note-value"],
                pay_account: this.apply.account,
                formId: i
            };
            return this.data.isalipay && (s = JSON.stringify(s)), t.apiRequest("user", "mydis_cashout_save", {
                data: {
                    param: s
                },
                success: function(a) {
                    if ("OK" == a.data.result) wx.showModal({
                        title: "申请成功",
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
            }), !1;
        },
        changeValue: function(a) {
            var t = a.detail.value, i = this.datas;
            t > i.remaining ? t = i.remaining : t < i.minval && (t = i.minval), this.apply.value = t, 
            this.data.isalipay && this.setData({
                "apply.value": t
            }), console.log(this.apply);
        },
        accountsChange: function(a) {
            var t = a.detail.value;
            if (t >= 0) {
                var i = this.datas.tixian_accounts[t];
                i && (this.aindex = t, this.apply.account = i.id, this.data.isalipay && this.setData({
                    aindex: t,
                    "apply.account": i.id
                }));
            }
        }
    },
    selectaccount: function() {
        wx.navigateTo({
            url: "../mydis_account_list/mydis_account_list"
        });
    }
});