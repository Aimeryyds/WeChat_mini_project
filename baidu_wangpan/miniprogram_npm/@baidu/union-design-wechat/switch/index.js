Component({
    externalClasses: [ "u-switch-class" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        checked: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        color: {
            type: String,
            value: "#06A7FF"
        }
    },
    methods: {
        handleChange: function(e) {
            this.triggerEvent("change", e.detail);
        }
    }
});