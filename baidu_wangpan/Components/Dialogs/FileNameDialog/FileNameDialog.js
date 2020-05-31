function t(t) {
    var i = t.detail.value, e = a.validation.TextValidationCheck(i);
    this.setData({
        errorText: "legal" === e ? null : e,
        inputText: i
    });
}

function i() {
    var t = this.data, i = t.value, e = t.inputText;
    return "" === i || i !== e && "" !== e;
}

var e = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i];
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
}, a = require("../../../netdisk_utils/validation.js"), n = {
    isShow: !1,
    title: "",
    selectionEnd: 0,
    placeholder: "",
    errorText: "",
    showExampleText: !1,
    exampleText: "",
    value: "",
    defaultText: "",
    showErrorText: !1,
    inputText: "",
    shareDir: !1,
    confirmFnName: "dialogConfirm"
};

Component({
    data: e({}, n),
    ready: function() {
        this.dialog = this.selectComponent("#dialog");
    },
    methods: {
        show: function(t) {
            this.setData(e({}, n, t, {
                isShow: !0
            })), this.dialog.show({
                isConfirmBtnFastHide: !1
            });
        },
        hide: function() {
            this.dialog.hide(), this.setData({
                isShow: !1
            });
        },
        getInputText: function() {
            return this.data.inputText;
        },
        bindKeyInput: function(i) {
            t.call(this, i);
        },
        bindInputBlur: function(i) {
            t.call(this, i);
        },
        handleClearInput: function() {
            this.setData({
                inputText: "",
                value: "",
                showErrorText: !1,
                errorText: a.validation.TextValidationCheck("")
            });
        },
        dialogConfirm: function(t) {
            var e = t.detail;
            if (i.call(this)) {
                var n = a.validation.TextValidationCheck(this.data.inputText), o = !1, r = "legal" === n ? null : n;
                if (r ? o = !0 : this.hide(), this.setData({
                    errorText: r,
                    showErrorText: o
                }), !r) {
                    var l = wx.getCurrentViewPage()[this.data.confirmFnName || "dialogConfirm"];
                    if (e.hide(), "function" != typeof l) throw new Error("当前页面缺少dialogConfirm函数，无法处理dialog的confirm事件");
                    l(this.data.inputText, "新建文件夹" === this.data.title, this.data.value, this.data.shareDir);
                }
            } else this.hide();
        }
    }
});