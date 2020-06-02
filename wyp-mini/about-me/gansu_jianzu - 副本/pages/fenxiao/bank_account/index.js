function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (a[o] = n[o]);
    }
    return a;
}, n = a(require("../../../network/api")), o = a(require("../../../dist/index"));

Page(Object.assign({}, o.default.Toast, {
    data: {
        index: 0
    },
    onLoad: function(a) {
        var t = this;
        console.log(a.data), a && a.data && this.setData({
            data: JSON.parse(a.data)
        }), n.default.setBankSave().then(function(a) {
            t.setData({
                bankData: a.data,
                isShow: !0
            }), t.data.bankData.map(function(a, n) {
                a.bankName == t.data.data.bankName && t.setData({
                    index: n,
                    bankName: t.data.bankData[n]
                });
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    formSubmit: function(a) {
        var o = this, e = a.detail.value;
        console.log(e, "uuuuuuuuuuuuu");
        var i = void 0;
        e.accountName && 0 != e.accountName.trim().length ? e.cardNo && 0 != e.cardNo.trim().length ? this.data.bankName || (i = "请选择银行") : i = "请输入卡号" : i = "请输入用户名", 
        i ? (this.showToast(i), console.log(i, "err")) : (console.log(e, "for"), n.default.setAccountSave(t({}, e, {
            bankCode: this.data.bankName.bankCode
        })).then(function(a) {
            o.setData({
                isShow: !0
            }), o.showToast("保存成功"), wx.navigateBack();
        }).catch(function(a) {
            return console.log(a);
        }));
    },
    bindPickerChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value);
        var t = a.detail.value;
        this.setData({
            index: t,
            bankName: this.data.bankData[a.detail.value]
        });
    },
    showToast: function(a) {
        this.showZanToast(a);
    }
}));