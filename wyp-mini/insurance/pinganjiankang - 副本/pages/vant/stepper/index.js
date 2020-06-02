var t = require("../common/component"), e = require("../common/utils");

function a(t, e) {
    return String(t) === String(e);
}

(0, t.VantComponent)({
    field: !0,
    classes: [ "input-class", "plus-class", "minus-class" ],
    props: {
        value: {
            type: null,
            observer: function(t) {
                a(t, this.data.currentValue) || this.setData({
                    currentValue: this.format(t)
                });
            }
        },
        integer: {
            type: Boolean,
            observer: "check"
        },
        disabled: Boolean,
        inputWidth: null,
        buttonSize: null,
        asyncChange: Boolean,
        disableInput: Boolean,
        decimalLength: {
            type: Number,
            value: null,
            observer: "check"
        },
        min: {
            type: null,
            value: 1,
            observer: "check"
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER,
            observer: "check"
        },
        step: {
            type: null,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: !0
        },
        showMinus: {
            type: Boolean,
            value: !0
        },
        disablePlus: Boolean,
        disableMinus: Boolean,
        longPress: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        currentValue: ""
    },
    created: function() {
        this.setData({
            currentValue: this.format(this.data.value)
        });
    },
    methods: {
        check: function() {
            var t = this.format(this.data.currentValue);
            a(t, this.data.currentValue) || this.setData({
                currentValue: t
            });
        },
        isDisabled: function(t) {
            return "plus" === t ? this.data.disabled || this.data.disablePlus || this.data.currentValue >= this.data.max : this.data.disabled || this.data.disableMinus || this.data.currentValue <= this.data.min;
        },
        onFocus: function(t) {
            this.$emit("focus", t.detail);
        },
        onBlur: function(t) {
            var e = this.format(t.detail.value);
            this.emitChange(e), this.$emit("blur", Object.assign(Object.assign({}, t.detail), {
                value: e
            }));
        },
        filter: function(t) {
            return t = String(t).replace(/[^0-9.-]/g, ""), this.data.integer && -1 !== t.indexOf(".") && (t = t.split(".")[0]), 
            t;
        },
        format: function(t) {
            return t = "" === (t = this.filter(t)) ? 0 : +t, t = Math.max(Math.min(this.data.max, t), this.data.min), 
            (0, e.isDef)(this.data.decimalLength) && (t = t.toFixed(this.data.decimalLength)), 
            t;
        },
        onInput: function(t) {
            var a = (t.detail || {}).value, i = void 0 === a ? "" : a;
            if ("" !== i) {
                var s = this.filter(i);
                if ((0, e.isDef)(this.data.decimalLength) && -1 !== s.indexOf(".")) {
                    var n = s.split(".");
                    s = "".concat(n[0], ".").concat(n[1].slice(0, this.data.decimalLength));
                }
                this.emitChange(s);
            }
        },
        emitChange: function(t) {
            this.data.asyncChange || this.setData({
                currentValue: t
            }), this.$emit("change", t);
        },
        onChange: function() {
            var t = this.type;
            if (this.isDisabled(t)) this.$emit("overlimit", t); else {
                var e, a, i, s = "minus" === t ? -this.data.step : +this.data.step, n = this.format((e = +this.data.currentValue, 
                a = s, i = Math.pow(10, 10), Math.round((e + a) * i) / i));
                this.emitChange(n), this.$emit(t);
            }
        },
        longPressStep: function() {
            var t = this;
            this.longPressTimer = setTimeout(function() {
                t.onChange(), t.longPressStep();
            }, 200);
        },
        onTap: function(t) {
            var e = t.currentTarget.dataset.type;
            this.type = e, this.onChange();
        },
        onTouchStart: function(t) {
            var e = this;
            if (this.data.longPress) {
                clearTimeout(this.longPressTimer);
                var a = t.currentTarget.dataset.type;
                this.type = a, this.isLongPress = !1, this.longPressTimer = setTimeout(function() {
                    e.isLongPress = !0, e.onChange(), e.longPressStep();
                }, 600);
            }
        },
        onTouchEnd: function() {
            this.data.longPress && clearTimeout(this.longPressTimer);
        }
    }
});