function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp();

Page({
    data: {
        expr: "",
        expr_val: "",
        phone: "",
        yzcode: ""
    },
    _createExpr: function() {
        var e = Math.floor(9 * Math.random() + 1), t = Math.floor(9 * Math.random() + 1);
        this.setData({
            expr: e + " + " + t,
            expr_val: e + t
        });
    },
    tapResetExpr: function() {
        this._createExpr();
    },
    resetInput: function(t) {
        var a = t.currentTarget.dataset.itype;
        this.setData(e({}, a, t.detail.value));
    },
    tapGetPhone: function() {
        var e = this.data.phone, a = this.data.yzcode;
        if (!/^[1-9]{1}\d{10}$/.test(e)) return wx.showModal({
            title: "请输入正确的手机号码",
            content: "",
            showCancel: !1
        }), !1;
        if (a != this.data.expr_val) return wx.showModal({
            title: "请输入正确的计算值",
            content: "",
            showCancel: !1
        }), !1;
        var r = wx.getStorageSync("openid");
        t.apiRequest("meal", "setphone", {
            data: {
                openid: r,
                phone: e
            },
            method: "POST",
            success: function(t) {
                var a = t.data || {};
                "OK" == a.result ? (wx.setStorageSync(r + "_mealphone", e), wx.redirectTo({
                    url: "../meal_list/meal_list"
                })) : wx.showModal({
                    title: a.errmsg || "请求失败",
                    content: "",
                    showCancel: !1
                });
            }
        });
    },
    onShow: function() {
        this._createExpr();
    }
});