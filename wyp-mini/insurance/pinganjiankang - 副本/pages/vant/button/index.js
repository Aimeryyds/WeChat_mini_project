var e = require("../common/component"), o = require("../mixins/button"), n = require("../mixins/open-type");

(0, e.VantComponent)({
    mixins: [ o.button, n.openType ],
    classes: [ "hover-class", "loading-class" ],
    data: {
        baseStyle: ""
    },
    props: {
        icon: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        customStyle: String,
        loadingType: {
            type: String,
            value: "circular"
        },
        type: {
            type: String,
            value: "default"
        },
        dataset: null,
        size: {
            type: String,
            value: "normal"
        },
        loadingSize: {
            type: String,
            value: "20px"
        },
        color: {
            type: String,
            observer: function(e) {
                var o = "";
                e && (o += "color: ".concat(this.data.plain ? e : "white", ";"), this.data.plain || (o += "background: ".concat(e, ";")), 
                -1 !== e.indexOf("gradient") ? o += "border: 0;" : o += "border-color: ".concat(e, ";")), 
                o !== this.data.baseStyle && this.setData({
                    baseStyle: o
                });
            }
        }
    },
    methods: {
        onClick: function() {
            this.data.loading || this.$emit("click");
        },
        noop: function() {}
    }
});