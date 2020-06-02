var t = require("./native-button-behaviors");

Component({
    externalClasses: [ "custom-class", "theme-class" ],
    behaviors: [ t ],
    relations: {
        "../btn-group/index": {
            type: "parent",
            linked: function() {
                this.setData({
                    inGroup: !0
                });
            },
            unlinked: function() {
                this.setData({
                    inGroup: !1
                });
            }
        }
    },
    properties: {
        type: {
            type: String,
            value: ""
        },
        size: {
            type: String,
            value: ""
        },
        plain: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        loading: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        inGroup: !1,
        isLast: !1
    },
    methods: {
        handleTap: function() {
            this.data.disabled ? this.triggerEvent("disabledclick") : this.triggerEvent("btnclick");
        },
        switchLastButtonStatus: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.setData({
                isLast: t
            });
        }
    }
});