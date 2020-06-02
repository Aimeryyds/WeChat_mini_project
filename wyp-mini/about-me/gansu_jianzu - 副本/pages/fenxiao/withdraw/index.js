function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var e = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, o = t(require("../../../dist/index")), n = t(require("../../../network/api"));

Page(Object.assign({}, o.default.Toast, {
    data: {
        withdrawData: {},
        checkAll: !1,
        minCard: "",
        total: "0.00",
        orderList: []
    },
    onLoad: function(t) {
        console.log(t.balance, "oooooooooooo"), t && t.balance && this.setData({
            balance: t.balance,
            inputValue: t.balance
        });
    },
    onShow: function() {
        this.centerToWithdraw();
    },
    centerToWithdraw: function() {
        var t = this;
        console.log("44444444444444444444444"), n.default.centerToWithdraw().then(function(a) {
            console.log(a, "++++"), wx.hideLoading(), a.data && a.data.cardNo ? t.setData({
                withdrawData: a.data,
                minCard: a.data.cardNo.substr(-4),
                isShow: !0,
                orderList: a.data.orderList.map(function(t) {
                    return e({}, t, {
                        isChecked: !1
                    });
                })
            }) : t.setData({
                withdrawData: a.data,
                isShow: !0
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    saveInputValue: function(t) {
        var a = t.detail.value;
        this.setData({
            inputValue: a
        });
    },
    checkMoney: function() {
        var t = this;
        console.log("++++++++++++++++++++++++");
        var a = this.data, e = a.orderList, o = a.withdrawData, i = a.total, r = [];
        e.map(function(t) {
            t.isChecked && r.push(t.id);
        }), i < o.minWithdrawCash ? this.showToast("提现金额不能少于" + o.minWithdrawCash + "元") : n.default.queryWithdraw({
            ids: r.join(",")
        }).then(function(a) {
            console.log(a, "++++"), wx.hideLoading(), 0 == a.status && (t.showToast("申请提现成功，请等待审核"), 
            setTimeout(function() {
                return wx.navigateBack({
                    delta: 1
                });
            }, 1e3)), console.log(a, "++++++++++++");
        }).catch(function(t) {
            return console.log(t);
        });
    },
    bankAccount: function() {
        console.log("++++++++++++++++"), this.data.withdrawData ? wx.navigateTo({
            url: "/pages/fenxiao/bank_account/index?data=" + JSON.stringify(this.data.withdrawData)
        }) : (console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>"), wx.navigateTo({
            url: "/pages/fenxiao/bank_account/index"
        }));
    },
    showToast: function(t) {
        this.showZanToast(t);
    },
    checkOrder: function(t) {
        console.log(t, "eee");
        var e = t.currentTarget.dataset.index;
        this.setData(a({}, "orderList[" + e + "].isChecked", !this.data.orderList[e].isChecked)), 
        this.checkAllOrder();
    },
    checkAllOrder: function() {
        console.log("list");
        var t = this.data, a = t.orderList, e = t.checkAll;
        e && a.some(function(t) {
            return !t.isChecked;
        }) && this.setData({
            checkAll: !1
        }), e || a.some(function(t) {
            return !t.isChecked;
        }) || this.setData({
            checkAll: !0
        }), this.handleUpdateNumTotal();
    },
    checkAll: function() {
        var t = this, e = this.data, o = e.orderList, n = e.checkAll;
        o.forEach(function(e, o) {
            t.setData(a({}, "orderList[" + o + "].isChecked", !n));
        }), this.setData({
            checkAll: !n
        }), this.handleUpdateNumTotal();
    },
    handleUpdateNumTotal: function() {
        var t = 0, a = this.data.orderList;
        a && a.forEach(function(a) {
            a.isChecked && (t += a.amount);
        }), this.setData({
            total: t.toFixed(2)
        });
    }
}));