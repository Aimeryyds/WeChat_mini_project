Component({
    externalClasses: [ "u-class", "u-class-alone" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        count: {
            type: Number,
            value: 0,
            observer: "finalCount"
        },
        overflowCount: {
            type: Number,
            value: 99
        },
        dot: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        finalCount: 0
    },
    methods: {
        finalCount: function() {
            this.setData({
                finalCount: parseInt(this.data.count) >= parseInt(this.data.overflowCount) ? this.data.overflowCount + "+" : this.data.count
            });
        }
    }
});