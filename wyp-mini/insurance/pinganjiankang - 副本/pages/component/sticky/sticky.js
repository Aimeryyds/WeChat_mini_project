Component({
    externalClasses: [ "pa-class" ],
    options: {
        multipleSlots: !0
    },
    properties: {
        scroll: {
            type: Number,
            value: 0
        }
    },
    methods: {
        getScrollTop: function(e) {
            console.log(e), this.triggerEvent("stickyscroll", {
                current: e
            }, {});
        }
    }
});