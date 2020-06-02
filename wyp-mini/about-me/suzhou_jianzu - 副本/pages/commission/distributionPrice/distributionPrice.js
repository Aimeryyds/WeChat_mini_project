var t = require("../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        data: "",
        show: !0,
        commission_ok: "",
        disabled: "true"
    },
    showOrhide: function() {
        this.setData({
            show: !this.data.show
        });
    },
    onLoad: function(o) {
        a = wx.getStorageSync("utoken");
        var e = this;
        t.sendRequest({
            url: "?r=wxapp.commission.withdraw&utoken=" + a,
            showToast: !1,
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                var a = t.data.result;
                console.log(t.data.result.commission_ok), e.setData({
                    loading: !1,
                    data: a
                }), t.data.result.commission_ok > 1 && e.setData({
                    disabled: !e.data.disabled
                });
            }
        });
    },
    tixian: function() {
        wx.navigateTo({
            url: "../WithdrawDetailMoney/WithdrawDetailMoney"
        });
    },
    priceClick: function() {
        wx.navigateTo({
            url: "../Withdraw/Withdraw"
        });
    }
});