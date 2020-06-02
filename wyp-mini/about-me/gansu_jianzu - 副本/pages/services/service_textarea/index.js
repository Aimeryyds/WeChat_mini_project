function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

!function(t) {
    t && t.__esModule;
}(require("../../../utils/util"));

Page({
    data: {
        item: {}
    },
    onLoad: function(t) {
        var a = getApp().getFlash("service_textarea_data"), e = a.data, i = a.index;
        e && this.setData({
            item: e,
            index: i
        });
    },
    clearvalue: function() {
        this.setData(t({}, "item.value", ""));
    },
    onchagevalue: function(a) {
        this.setData(t({}, "item.value", a.detail.value));
    },
    jumporder: function() {
        var t = this.data.item, a = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i, e = /^1[0-9]{10}$/, i = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        !t.required || t.value && 0 != t.value.length ? !t.required || "phone" != t.validate || e.test(t.value) ? !t.required || "email" != t.validate || a.test(t.value) ? !t.required || "idcard" != t.validate || i.test(t.value) ? (getApp().setFlash("textarea_obj", {
            index: this.data.index,
            value: t.value
        }), wx.navigateBack({
            delta: 1
        })) : this.showToast("请输入正确的身份证号") : this.showToast("请输入正确的邮箱地址") : this.showToast("请输入正确的手机号码") : this.showToast("请输入信息");
    },
    showToast: function(t) {
        var a = this;
        this.setData({
            toast: {
                show: !0,
                title: t
            }
        });
        var e = setTimeout(function() {
            a.clearToast();
        }, 2e3);
        this.setData({
            "toast.timer": e
        });
    },
    clearToast: function() {
        clearTimeout(this.data.toast.timer), this.setData({
            "toast.show": !1
        });
    }
});