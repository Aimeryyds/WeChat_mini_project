(0, require("../common/component").VantComponent)({
    relation: {
        name: "row",
        type: "ancestor",
        current: "col"
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        viewStyle: ""
    },
    methods: {
        setGutter: function(t) {
            var e = "".concat(t / 2, "px"), n = t ? "padding-left: ".concat(e, "; padding-right: ").concat(e, ";") : "";
            n !== this.data.viewStyle && this.setData({
                viewStyle: n
            });
        }
    }
});