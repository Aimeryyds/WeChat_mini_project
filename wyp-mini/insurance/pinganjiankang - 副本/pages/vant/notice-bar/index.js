var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/slicedToArray"));

(0, require("../common/component").VantComponent)({
    props: {
        text: {
            type: String,
            value: "",
            observer: function() {
                var t = this;
                wx.nextTick(function() {
                    t.init();
                });
            }
        },
        mode: {
            type: String,
            value: ""
        },
        url: {
            type: String,
            value: ""
        },
        openType: {
            type: String,
            value: "navigate"
        },
        delay: {
            type: Number,
            value: 1
        },
        speed: {
            type: Number,
            value: 50,
            observer: function() {
                var t = this;
                wx.nextTick(function() {
                    t.init();
                });
            }
        },
        scrollable: {
            type: Boolean,
            value: !0
        },
        leftIcon: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: "#ed6a0c"
        },
        backgroundColor: {
            type: String,
            value: "#fffbe8"
        },
        wrapable: Boolean
    },
    data: {
        show: !0
    },
    created: function() {
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: "linear"
        });
    },
    destroyed: function() {
        this.timer && clearTimeout(this.timer);
    },
    methods: {
        init: function() {
            var e = this;
            Promise.all([ this.getRect(".van-notice-bar__content"), this.getRect(".van-notice-bar__wrap") ]).then(function(i) {
                var n = (0, t.default)(i, 2), a = n[0], r = n[1];
                if (null != a && null != r && a.width && r.width) {
                    var o = e.data, l = o.speed, s = o.scrollable, u = o.delay;
                    if (s && r.width < a.width) {
                        var c = a.width / l * 1e3;
                        e.wrapWidth = r.width, e.contentWidth = a.width, e.duration = c, e.animation = wx.createAnimation({
                            duration: c,
                            timingFunction: "linear",
                            delay: u
                        }), e.scroll();
                    }
                }
            });
        },
        scroll: function() {
            var t = this;
            this.timer && clearTimeout(this.timer), this.timer = null, this.setData({
                animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
            }), setTimeout(function() {
                t.setData({
                    animationData: t.animation.translateX(-t.contentWidth).step().export()
                });
            }, 20), this.timer = setTimeout(function() {
                t.scroll();
            }, this.duration);
        },
        onClickIcon: function() {
            this.timer && clearTimeout(this.timer), this.timer = null, this.setData({
                show: !1
            });
        },
        onClick: function(t) {
            this.$emit("click", t);
        }
    }
});