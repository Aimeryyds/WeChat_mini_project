var t = require("../common/component"), n = require("../mixins/link"), i = require("../mixins/button"), e = require("../mixins/open-type");

(0, t.VantComponent)({
    mixins: [ n.link, i.button, e.openType ],
    relation: {
        type: "ancestor",
        name: "goods-action",
        current: "goods-action-button"
    },
    props: {
        text: String,
        color: String,
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        type: {
            type: String,
            value: "danger"
        }
    },
    mounted: function() {
        this.updateStyle();
    },
    methods: {
        onClick: function(t) {
            this.$emit("click", t.detail), this.jumpLink();
        },
        updateStyle: function() {
            var t = this.parent.children, n = void 0 === t ? [] : t, i = n.length, e = n.indexOf(this);
            this.setData({
                isFirst: 0 === e,
                isLast: e === i - 1
            });
        }
    }
});