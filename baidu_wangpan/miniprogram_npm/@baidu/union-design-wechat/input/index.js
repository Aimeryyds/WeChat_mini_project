Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        type: {
            type: String,
            value: "text"
        },
        value: {
            type: String,
            optionalTypes: [ String, Number ]
        },
        placeholder: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        maxlength: {
            type: Number,
            value: 140
        },
        title: {
            type: String,
            value: ""
        },
        borderRadius: {
            type: Number,
            value: 10
        },
        errorMessage: {
            type: String,
            value: ""
        },
        placeholderStyle: {
            type: String,
            value: ""
        },
        adjustPosition: {
            type: Boolean,
            value: !0
        },
        cursorSpacing: {
            type: Number,
            value: 0
        },
        autoHeight: {
            type: Boolean,
            default: !1
        },
        showConfirmBar: {
            type: Boolean,
            default: !0
        },
        backgroundColor: {
            type: String,
            default: ""
        }
    },
    data: {},
    methods: {
        handleInput: function(e) {
            this.triggerEvent("input", e.detail);
        },
        handleFocus: function(e) {
            this.triggerEvent("focus", e.detail);
        },
        handleBlur: function(e) {
            this.triggerEvent("blur", e.detail);
        },
        handleConfirm: function(e) {
            this.triggerEvent("confirm", e.detail);
        },
        handleKeyboardHeightChange: function(e) {
            this.triggerEvent("keyboardheightchange", e.detail);
        },
        handleLinechange: function(e) {
            this.triggerEvent("linechange", e.detail);
        }
    }
});