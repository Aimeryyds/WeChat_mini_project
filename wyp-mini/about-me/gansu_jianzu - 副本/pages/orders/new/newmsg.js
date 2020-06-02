function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/util"));

Page({
    data: {
        item: {}
    },
    onLoad: function(t) {
        t.item && this.setData({
            item: e.default.parse(t.item)
        });
    },
    clearvalue: function() {
        this.setData(t({}, "item.value", ""));
    },
    onchagevalue: function(e) {
        this.setData(t({}, "item.value", e.detail.value));
    },
    jumporder: function() {
        var t = this.data.item;
        1 != t.required || 1 != t.verification || t.value && 0 != t.value.length ? 1 != t.required || 2 != t.verification || /^1[0-9]{10}$/.test(t.value) ? 1 != t.required || 4 != t.verification || /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t.value) ? (getApp().setFlash("item", t), 
        wx.navigateBack({
            delta: 1
        })) : this.showToast("请输入正确的邮箱地址") : this.showToast("请输入正确的手机号码") : this.showToast("请输入" + t.fieldname + "的留言信息");
    },
    showToast: function(t) {
        var e = this;
        this.setData({
            toast: {
                show: !0,
                title: t
            }
        });
        var a = setTimeout(function() {
            e.clearToast();
        }, 2e3);
        this.setData({
            "toast.timer": a
        });
    },
    clearToast: function() {
        clearTimeout(this.data.toast.timer), this.setData({
            "toast.show": !1
        });
    }
});