function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    for (var t = 1; t < arguments.length; t++) if (t % 2) {
        var n = null != arguments[t] ? arguments[t] : {}, a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
        }))), a.forEach(function(t) {
            i(e, t, n[t]);
        });
    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
    return e;
}

function i(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "#wux-picker", h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : c;
    return Behavior({
        behaviors: [ (0, a.default)({
            defaultEvents: u
        }) ],
        properties: {
            toolbar: {
                type: Object,
                value: s
            },
            trigger: {
                type: String,
                value: l
            },
            defaultVisible: {
                type: Boolean,
                value: !1
            },
            visible: {
                type: Boolean,
                value: !1
            },
            controlled: {
                type: Boolean,
                value: !1
            },
            disabled: {
                type: Boolean,
                value: !1
            }
        },
        data: {
            mounted: !1,
            popupVisible: !1,
            inputValue: []
        },
        methods: {
            setVisibleState: function(e, t) {
                var i = this, n = 1 < arguments.length && void 0 !== t ? t : function() {};
                if (this.data.popupVisible !== e) {
                    var a = {
                        mounted: !0,
                        inputValue: this.data.value,
                        popupVisible: e
                    };
                    this.setData(e ? a : {
                        popupVisible: e
                    }, function() {
                        if (e && i.hasFieldDecorator) {
                            var t = i.getFieldElem();
                            t && t.changeValue(t.data.value);
                        }
                        n();
                    });
                }
            },
            fireVisibleChange: function(e) {
                this.data.popupVisible !== e && (this.data.controlled || this.setVisibleState(e), 
                this.setScrollValue(void 0), this.triggerEvent("visibleChange", {
                    visible: e
                }));
            },
            open: function() {
                this.fireVisibleChange(!0);
            },
            close: function(e) {
                if ("function" == typeof e) {
                    var t = this.getPickerValue(this.scrollValue || this.data.inputValue);
                    e.call(this, this.formatPickerValue(t));
                }
                this.fireVisibleChange(!1);
            },
            onClosed: function() {
                this.picker = null, this.setData({
                    mounted: !1,
                    inputValue: null
                });
            },
            onConfirm: function() {
                var e = this;
                this.close(function(t) {
                    e.triggerEvent("change", t), e.triggerEvent("confirm", t);
                });
            },
            onCancel: function() {
                var e = this;
                this.close(function(t) {
                    return e.triggerEvent("cancel", t);
                });
            },
            onValueChange: function(e) {
                if (this.data.mounted) {
                    var t = e.detail.value;
                    this.data.cascade ? this.setCasecadeScrollValue(t) : this.setScrollValue(t), this.updated(t, !0), 
                    this.triggerEvent("valueChange", this.formatPickerValue(e.detail));
                }
            },
            getPickerValue: function(t) {
                var i = 0 < arguments.length && void 0 !== t ? t : this.data.inputValue;
                return this.picker = this.picker || this.selectComponent(e), this.picker && this.picker.getValue(i);
            },
            formatPickerValue: function(e) {
                return t({}, e, i({}, h.labelPropName, h.format(e, this.data)));
            },
            getFieldElem: function() {
                return this.field = this.field || this.getRelationNodes(r)[0];
            },
            setChildProps: function() {
                var e = this;
                if (!this.data.disabled) {
                    var i = this.getRelationNodes(o), n = this.data.trigger, a = void 0 === n ? l : n;
                    0 < i.length && i.forEach(function(i) {
                        var n = i.data.inputEvents, l = i.data.oriInputEvents || t({}, n);
                        n[a] = function() {
                            l && l[a] && l[a].apply(l, arguments), e.onTriggerClick();
                        }, i.setData({
                            oriInputEvents: l,
                            inputEvents: n
                        });
                    });
                }
            },
            onTriggerClick: function() {
                this.fireVisibleChange(!this.data.popupVisible);
            },
            noop: function() {},
            updated: function(e, t) {
                this.hasFieldDecorator && !t || this.data.inputValue !== e && this.setData({
                    inputValue: e
                });
            },
            setScrollValue: function(e) {
                this.scrollValue = e;
            },
            setCasecadeScrollValue: function(e) {
                if (e && this.scrollValue) {
                    var t = this.scrollValue.length;
                    if (t === e.length && this.scrollValue[t - 1] === e[t - 1]) return;
                }
                this.setScrollValue(e);
            }
        },
        lifetimes: {
            ready: function() {
                var e = this.data, t = e.defaultVisible, i = e.visible, n = e.controlled, a = (e.value, 
                n ? i : t);
                this.mounted = !0, this.scrollValue = void 0, this.setVisibleState(a), this.setChildProps();
            },
            detached: function() {
                this.mounted = !1;
            }
        },
        definitionFilter: function(e) {
            var t;
            Object.assign(e.relations = e.relations || {}, (i(t = {}, o, {
                type: "child",
                observer: function() {
                    this.setChildProps();
                }
            }), i(t, r, {
                type: "ancestor"
            }), t)), Object.assign(e.computed = e.computed || {}, {
                classes: [ "prefixCls", function(e) {
                    return {
                        wrap: (0, n.default)(e),
                        toolbar: "".concat(e, "__toolbar"),
                        inner: "".concat(e, "__inner"),
                        cancel: (0, n.default)("".concat(e, "__button"), i({}, "".concat(e, "__button--cancel"), !0)),
                        confirm: (0, n.default)("".concat(e, "__button"), i({}, "".concat(e, "__button--confirm"), !0)),
                        hover: "".concat(e, "__button--hover"),
                        title: "".concat(e, "__title")
                    };
                } ]
            }), Object.assign(e.observers = e.observers || {}, {
                visible: function(e) {
                    this.data.controlled && this.setVisibleState(e);
                },
                value: function(e) {
                    this.updated(e);
                }
            });
        }
    });
};

var n = e(require("E4EFCB17480303CF8289A3108C01F6C0.js")), a = e(require("D47DEE46480303CFB21B86413C51F6C0.js")), l = "onClick", o = "../cell/index", r = "../field/index", s = {
    title: "请选择",
    cancelText: "取消",
    confirmText: "确定"
}, u = {
    onChange: function() {},
    onConfirm: function() {},
    onCancel: function() {},
    onVisibleChange: function() {},
    onValueChange: function() {}
}, c = {
    labelPropName: "label",
    format: function(e, t) {
        return Array.isArray(e.displayValue) ? e.displayValue.join(",") : e.displayValue;
    }
};