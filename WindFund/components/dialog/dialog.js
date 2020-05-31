function t(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../component"));

exports.default = {
    setDefaults: function() {
        return {
            title: void 0,
            content: void 0,
            buttons: [],
            verticalButtons: !1
        };
    },
    data: function() {
        return {
            onCancel: function() {},
            cancelText: "取消",
            cancelType: "wux-dialog__btn--default",
            onConfirm: function() {},
            confirmText: "确定",
            confirmType: "wux-dialog__btn--primary"
        };
    },
    open: function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = Object.assign({
            animateCss: void 0,
            visible: !1
        }, this.setDefaults(), n), i = new e.default({
            scope: "$wux.dialog",
            data: o,
            methods: {
                hide: function(t) {
                    if (this.removed) return !1;
                    this.removed = !0, this.setHidden(), setTimeout(function() {
                        return "function" == typeof t && t();
                    }, 300);
                },
                show: function() {
                    if (this.removed) return !1;
                    this.setVisible();
                },
                buttonTapped: function(t) {
                    var e = t.currentTarget.dataset.index, n = o.buttons[e];
                    this.hide(function() {
                        return "function" == typeof n.onTap && n.onTap(t);
                    });
                },
                bindinput: function(e) {
                    this.setData(t({}, "$wux.dialog.prompt.response", e.detail.value));
                }
            }
        });
        return i.show(), i.hide;
    },
    alert: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.open(Object.assign({
            buttons: [ {
                text: t.confirmText || this.data().confirmText,
                type: t.confirmType || this.data().confirmType,
                onTap: function(e) {
                    "function" == typeof t.onConfirm && t.onConfirm(e);
                }
            } ]
        }, t));
    },
    confirm: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.open(Object.assign({
            buttons: [ {
                text: t.cancelText || this.data().cancelText,
                type: t.cancelType || this.data().cancelType,
                onTap: function(e) {
                    "function" == typeof t.onCancel && t.onCancel(e);
                }
            }, {
                text: t.confirmText || this.data().confirmText,
                type: t.confirmType || this.data().confirmType,
                onTap: function(e) {
                    "function" == typeof t.onConfirm && t.onConfirm(e);
                }
            } ]
        }, t));
    },
    prompt: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = {
            fieldtype: t.fieldtype ? t.fieldtype : "text",
            password: !!t.password,
            response: t.defaultText ? t.defaultText : "",
            placeholder: t.placeholder ? t.placeholder : "",
            maxlength: t.maxlength ? parseInt(t.maxlength) : ""
        };
        return this.open(Object.assign({
            prompt: e,
            buttons: [ {
                text: t.cancelText || this.data().cancelText,
                type: t.cancelType || this.data().cancelType,
                onTap: function(e) {
                    "function" == typeof t.onCancel && t.onCancel(e);
                }
            }, {
                text: t.confirmText || this.data().confirmText,
                type: t.confirmType || this.data().confirmType,
                onTap: function(e) {
                    "function" == typeof t.onConfirm && t.onConfirm(e);
                }
            } ]
        }, t));
    }
};