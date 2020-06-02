var e = require("../common/component"), t = require("../common/version");

(0, e.VantComponent)({
    field: !0,
    classes: [ "icon-class" ],
    props: {
        value: {
            type: Number,
            observer: function(e) {
                e !== this.data.innerValue && this.setData({
                    innerValue: e
                });
            }
        },
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: null,
        icon: {
            type: String,
            value: "star"
        },
        voidIcon: {
            type: String,
            value: "star-o"
        },
        color: {
            type: String,
            value: "#ffd21e"
        },
        voidColor: {
            type: String,
            value: "#c7c7c7"
        },
        disabledColor: {
            type: String,
            value: "#bdbdbd"
        },
        count: {
            type: Number,
            value: 5,
            observer: function(e) {
                this.setData({
                    innerCountArray: Array.from({
                        length: e
                    })
                });
            }
        },
        gutter: null,
        touchable: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        innerValue: 0,
        innerCountArray: Array.from({
            length: 5
        })
    },
    methods: {
        onSelect: function(e) {
            var n = this, a = this.data, r = e.currentTarget.dataset.score;
            a.disabled || a.readonly || (this.setData({
                innerValue: r + 1
            }), (0, t.canIUseModel)() && this.setData({
                value: r + 1
            }), wx.nextTick(function() {
                n.$emit("input", r + 1), n.$emit("change", r + 1);
            }));
        },
        onTouchMove: function(e) {
            var t = this;
            if (this.data.touchable) {
                var n = e.touches[0].clientX;
                this.getRect(".van-rate__icon", !0).then(function(a) {
                    var r = a.sort(function(e) {
                        return e.right - e.left;
                    }).find(function(e) {
                        return n >= e.left && n <= e.right;
                    });
                    null != r && t.onSelect(Object.assign(Object.assign({}, e), {
                        currentTarget: r
                    }));
                });
            }
        }
    }
});