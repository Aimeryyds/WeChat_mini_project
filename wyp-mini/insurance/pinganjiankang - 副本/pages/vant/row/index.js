(0, require("../common/component").VantComponent)({
    relation: {
        name: "col",
        type: "descendant",
        current: "row",
        linked: function(t) {
            this.data.gutter && t.setGutter(this.data.gutter);
        }
    },
    props: {
        gutter: {
            type: Number,
            observer: "setGutter"
        }
    },
    data: {
        viewStyle: ""
    },
    mounted: function() {
        this.data.gutter && this.setGutter();
    },
    methods: {
        setGutter: function() {
            var t = this, e = this.data.gutter, n = "-".concat(Number(e) / 2, "px"), r = e ? "margin-right: ".concat(n, "; margin-left: ").concat(n, ";") : "";
            this.setData({
                viewStyle: r
            }), this.getRelationNodes("../col/index").forEach(function(e) {
                e.setGutter(t.data.gutter);
            });
        }
    }
});