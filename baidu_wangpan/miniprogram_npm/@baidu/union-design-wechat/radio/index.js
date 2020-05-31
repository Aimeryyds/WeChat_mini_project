Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    relations: {
        "../radio-group/index": {
            type: "parent"
        }
    },
    properties: {
        value: {
            type: String,
            value: ""
        },
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
            value: "#2d8cf0"
        },
        position: {
            type: String,
            value: "left",
            observer: "setPosition"
        }
    },
    data: {
        checked: !0,
        positionCls: "u-radio-radio-left"
    },
    attached: function() {
        this.setPosition();
    },
    methods: {
        changeCurrent: function(t) {
            this.setData({
                checked: t
            });
        },
        radioChange: function() {
            if (!this.data.disabled) {
                var t = {
                    current: !this.data.checked,
                    value: this.data.value
                }, e = this.getRelationNodes("../radio-group/index")[0];
                e ? e.emitEvent(t) : this.triggerEvent("change", t);
            }
        },
        setPosition: function() {
            this.setData({
                positionCls: -1 !== this.data.position.indexOf("left") ? "u-radio-radio-left" : "u-radio-radio-right"
            });
        }
    }
});