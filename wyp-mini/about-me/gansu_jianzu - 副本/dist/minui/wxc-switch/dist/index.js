Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        checked: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        activeColor: {
            type: String,
            value: "#ff5777"
        }
    },
    data: {},
    methods: {
        switch: function() {
            var e = this.data, t = e.checked, a = e.loading, i = e.disabled;
            if (a || i) return !1;
            this.setData({
                checked: !t
            }), this.triggerEvent("switch", {
                checked: this.data.checked
            });
        }
    }
});