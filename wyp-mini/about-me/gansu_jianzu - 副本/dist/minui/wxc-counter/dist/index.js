Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        number: {
            type: [ Number, String ],
            value: 0,
            observer: function(t) {
                this.setData({
                    number: parseInt(t, 10)
                });
            }
        },
        max: {
            type: [ Number, String ],
            value: 1,
            observer: function(t) {
                this.setData({
                    max: parseInt(t, 10)
                });
            }
        },
        min: {
            type: [ Number, String ],
            value: 0,
            observer: function(t) {
                this.setData({
                    min: parseInt(t, 10)
                });
            }
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        color: {
            type: String,
            value: "#ff5777"
        }
    },
    data: {},
    attached: function() {},
    methods: {
        addHandler: function(t) {
            var e = this.data.min, a = this.data.max, n = this.data.disabled;
            a <= this.data.number || n || (this.setData({
                number: ++this.data.number
            }), this.triggerEvent("changenumber", {
                e: t,
                number: this.data.number,
                min: e,
                max: a,
                type: "add"
            }));
        },
        minusHandler: function(t) {
            var e = this.data.min, a = this.data.max, n = this.data.disabled;
            e >= this.data.number || n || (this.setData({
                number: --this.data.number
            }), this.triggerEvent("changenumber", {
                e: t,
                number: this.data.number,
                min: e,
                max: a,
                type: "minus"
            }));
        }
    }
});