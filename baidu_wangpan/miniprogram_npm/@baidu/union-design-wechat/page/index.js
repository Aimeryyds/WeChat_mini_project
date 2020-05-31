Component({
    externalClasses: [ "u-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        mode: {
            type: String,
            value: "button"
        },
        current: {
            type: Number,
            value: 1
        },
        total: {
            type: Number,
            value: 0
        },
        simple: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        handleChange: function(e) {
            this.triggerEvent("change", {
                type: e
            });
        },
        handlePrev: function() {
            this.properties.current > 1 && this.handleChange("prev");
        },
        handleNext: function() {
            this.properties.current < this.properties.total && this.handleChange("next");
        }
    }
});