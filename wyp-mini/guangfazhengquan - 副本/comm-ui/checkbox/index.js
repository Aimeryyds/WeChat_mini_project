Component({
    properties: {
        items: {
            type: Array,
            value: []
        },
        value: {
            type: String,
            value: ""
        },
        label: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        checked: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        onChange: function(e) {
            if (this.data.items.length) {
                var t = this.data.items.map(function(t) {
                    return t.checked = e.detail.value.indexOf(String(t.value)) > -1, t;
                });
                this.setData({
                    items: t
                }), this.triggerEvent("change", {
                    items: t
                });
            } else {
                var a = e.detail.value && e.detail.value.length > 0;
                this.setData({
                    checked: a
                }), this.triggerEvent("change", {
                    checked: a,
                    value: e.detail.value[0]
                });
            }
        }
    }
});