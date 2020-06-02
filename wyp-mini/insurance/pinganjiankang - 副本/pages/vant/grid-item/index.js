var t = require("../mixins/link"), n = require("../common/component"), e = require("../common/utils");

(0, n.VantComponent)({
    relation: {
        name: "grid",
        type: "ancestor",
        current: "grid-item"
    },
    classes: [ "content-class", "icon-class", "text-class" ],
    mixins: [ t.link ],
    props: {
        icon: String,
        dot: Boolean,
        info: null,
        text: String,
        useSlot: Boolean
    },
    data: {
        viewStyle: ""
    },
    mounted: function() {
        this.updateStyle();
    },
    methods: {
        updateStyle: function() {
            if (this.parent) {
                var t = this.parent, n = t.data, i = t.children, o = n.columnNum, a = n.border, c = n.square, r = n.gutter, s = n.clickable, l = n.center, u = "".concat(100 / o, "%"), d = [];
                if (d.push("width: ".concat(u)), c && d.push("padding-top: ".concat(u)), r) {
                    var h = (0, e.addUnit)(r);
                    d.push("padding-right: ".concat(h)), i.indexOf(this) >= o && d.push("margin-top: ".concat(h));
                }
                var m = "";
                if (c && r) {
                    var p = (0, e.addUnit)(r);
                    m = "\n          right: ".concat(p, ";\n          bottom: ").concat(p, ";\n          height: auto;\n        ");
                }
                this.setData({
                    viewStyle: d.join("; "),
                    contentStyle: m,
                    center: l,
                    border: a,
                    square: c,
                    gutter: r,
                    clickable: s
                });
            }
        },
        onClick: function() {
            this.$emit("click"), this.jumpLink();
        }
    }
});