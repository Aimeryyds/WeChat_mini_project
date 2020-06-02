var e = require("../common/component"), a = require("../common/color");

(0, e.VantComponent)({
    field: !0,
    classes: [ "node-class" ],
    props: {
        checked: {
            type: null,
            observer: function(e) {
                var a = this.getLoadingColor(e);
                this.setData({
                    value: e,
                    loadingColor: a
                });
            }
        },
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: "30px"
        },
        activeValue: {
            type: null,
            value: !0
        },
        inactiveValue: {
            type: null,
            value: !1
        }
    },
    created: function() {
        var e = this.data.checked, a = this.getLoadingColor(e);
        this.setData({
            value: e,
            loadingColor: a
        });
    },
    methods: {
        getLoadingColor: function(e) {
            var t = this.data, i = t.activeColor, o = t.inactiveColor;
            return e ? i || a.BLUE : o || a.GRAY_DARK;
        },
        onClick: function() {
            var e = this.data, a = e.activeValue, t = e.inactiveValue;
            if (!this.data.disabled && !this.data.loading) {
                var i = this.data.checked === a ? t : a;
                this.$emit("input", i), this.$emit("change", i);
            }
        }
    }
});