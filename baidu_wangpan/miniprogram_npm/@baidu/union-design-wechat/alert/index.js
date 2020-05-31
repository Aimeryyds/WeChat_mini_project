Component({
    externalClasses: [ "u-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        type: {
            type: String,
            value: "info"
        },
        closable: {
            type: Boolean,
            value: !1
        },
        showIcon: {
            type: Boolean,
            default: !1
        },
        desc: {
            type: Boolean,
            default: !1
        }
    },
    data: {
        closed: !1
    },
    methods: {
        handleTap: function() {
            this.setData({
                closed: !this.data.closed
            }), this.triggerEvent("close");
        }
    }
});