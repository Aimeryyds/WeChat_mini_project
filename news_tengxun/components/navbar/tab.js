var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/mlodash"));

Component({
    properties: {
        tabNames: {
            type: Array,
            value: []
        },
        activeIndex: {
            type: Number,
            value: 0
        },
        position: {
            type: String,
            value: "fixed"
        },
        top: {
            type: String,
            value: "0"
        },
        zIndex: {
            type: String,
            value: "1"
        }
    },
    methods: {
        tapTab: function(t) {
            var r = e.default.get(t, "currentTarget.dataset.index", 0);
            r !== this.data.activeIndex && this.triggerEvent("change", {
                current: r
            });
        }
    }
});