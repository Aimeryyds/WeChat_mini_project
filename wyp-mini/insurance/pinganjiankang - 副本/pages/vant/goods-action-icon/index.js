var i = require("../common/component"), n = require("../mixins/link"), e = require("../mixins/button"), o = require("../mixins/open-type");

(0, i.VantComponent)({
    classes: [ "icon-class", "text-class" ],
    mixins: [ n.link, e.button, o.openType ],
    props: {
        text: String,
        dot: Boolean,
        info: String,
        icon: String,
        disabled: Boolean,
        loading: Boolean
    },
    methods: {
        onClick: function(i) {
            this.$emit("click", i.detail), this.jumpLink();
        }
    }
});