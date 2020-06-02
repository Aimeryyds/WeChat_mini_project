var e = require("../common/component"), t = require("../common/version");

(0, e.VantComponent)({
    field: !0,
    classes: [ "field-class", "input-class", "cancel-class" ],
    props: {
        label: String,
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        useLeftIconSlot: Boolean,
        useRightIconSlot: Boolean,
        leftIcon: {
            type: String,
            value: "search"
        },
        rightIcon: String,
        placeholder: String,
        placeholderStyle: String,
        actionText: {
            type: String,
            value: "取消"
        },
        background: {
            type: String,
            value: "#ffffff"
        },
        maxlength: {
            type: Number,
            value: -1
        },
        shape: {
            type: String,
            value: "square"
        },
        clearable: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        onChange: function(e) {
            (0, t.canIUseModel)() && this.setData({
                value: e.detail
            }), this.$emit("change", e.detail);
        },
        onCancel: function() {
            var e = this;
            setTimeout(function() {
                (0, t.canIUseModel)() && e.setData({
                    value: ""
                }), e.$emit("cancel"), e.$emit("change", "");
            }, 200);
        },
        onSearch: function(e) {
            this.$emit("search", e.detail);
        },
        onFocus: function(e) {
            this.$emit("focus", e.detail);
        },
        onBlur: function(e) {
            this.$emit("blur", e.detail);
        },
        onClear: function(e) {
            this.$emit("clear", e.detail);
        }
    }
});