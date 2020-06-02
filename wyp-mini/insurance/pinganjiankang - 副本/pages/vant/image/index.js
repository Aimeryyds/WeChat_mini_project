var e = require("../common/utils"), t = require("../common/component"), i = require("../mixins/button"), o = require("../mixins/open-type"), n = {
    none: "center",
    fill: "scaleToFill",
    cover: "aspectFill",
    contain: "aspectFit",
    widthFix: "widthFix",
    heightFix: "heightFix"
};

(0, t.VantComponent)({
    mixins: [ i.button, o.openType ],
    classes: [ "custom-class", "loading-class", "error-class", "image-class" ],
    props: {
        src: {
            type: String,
            observer: function() {
                this.setData({
                    error: !1,
                    loading: !0
                });
            }
        },
        round: Boolean,
        width: {
            type: null,
            observer: "setStyle"
        },
        height: {
            type: null,
            observer: "setStyle"
        },
        radius: null,
        lazyLoad: Boolean,
        useErrorSlot: Boolean,
        useLoadingSlot: Boolean,
        showMenuByLongpress: Boolean,
        fit: {
            type: String,
            value: "fill",
            observer: "setMode"
        },
        showError: {
            type: Boolean,
            value: !0
        },
        showLoading: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        error: !1,
        loading: !0,
        viewStyle: ""
    },
    mounted: function() {
        this.setMode(), this.setStyle();
    },
    methods: {
        setMode: function() {
            this.setData({
                mode: n[this.data.fit]
            });
        },
        setStyle: function() {
            var t = this.data, i = t.width, o = t.height, n = t.radius, s = "";
            (0, e.isDef)(i) && (s += "width: ".concat((0, e.addUnit)(i), ";")), (0, e.isDef)(o) && (s += "height: ".concat((0, 
            e.addUnit)(o), ";")), (0, e.isDef)(n) && (s += "overflow: hidden;", s += "border-radius: ".concat((0, 
            e.addUnit)(n), ";")), this.setData({
                viewStyle: s
            });
        },
        onLoad: function(e) {
            this.setData({
                loading: !1
            }), this.$emit("load", e.detail);
        },
        onError: function(e) {
            this.setData({
                loading: !1,
                error: !0
            }), this.$emit("error", e.detail);
        },
        onClick: function(e) {
            this.$emit("click", e.detail);
        }
    }
});