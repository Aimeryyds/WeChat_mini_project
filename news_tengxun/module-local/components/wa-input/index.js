Component({
    config: {
        usingComponents: {}
    },
    behaviors: [],
    properties: {
        title: {
            type: String,
            value: ""
        },
        src: {
            type: String,
            value: ""
        },
        mode: {
            type: String,
            value: "normal"
        },
        right: {
            type: Boolean,
            value: !1
        },
        error: {
            type: Boolean,
            value: !1
        },
        value: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: "text"
        },
        password: {
            type: Boolean,
            value: !1
        },
        placeholder: {
            type: String,
            value: ""
        },
        placeholderStyle: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        maxlength: {
            type: [ Number, String ],
            value: 140
        },
        cursorSpacing: {
            type: [ Number, String ],
            value: 0
        },
        focus: {
            type: Boolean,
            value: !1
        },
        confirmType: {
            type: String,
            value: "done"
        },
        confirmHold: {
            type: Boolean,
            value: !1
        },
        cursor: {
            type: [ Number, String ],
            value: 0
        },
        selectionStart: {
            type: [ Number, String ],
            value: -1
        },
        selectionEnd: {
            type: [ Number, String ],
            value: -1
        },
        adjustPosition: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    methods: {
        onInput: function(e) {
            var t = e.detail;
            this.triggerEvent("input", t, {});
        },
        onFocus: function(e) {
            var t = e.detail;
            this.triggerEvent("focus", t, {});
        },
        onBlur: function(e) {
            var t = e.detail;
            this.triggerEvent("blur", t, {});
        },
        onConfirm: function(e) {
            var t = e.detail;
            this.triggerEvent("confirm", t, {});
        }
    }
});