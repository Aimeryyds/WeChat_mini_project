Component({
    externalClasses: [ "u-class" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        closable: {
            type: Boolean,
            value: !1
        },
        icon: {
            type: String,
            value: ""
        },
        loop: {
            type: Boolean,
            value: !1
        },
        backgroundcolor: {
            type: String,
            value: "#ecf5ff"
        },
        color: {
            type: String,
            value: "#06A7FF"
        },
        speed: {
            type: Number,
            value: 1e3
        }
    },
    data: {
        show: !0,
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null
    },
    detached: function() {
        this.destroyTimer();
    },
    ready: function() {
        this.data.loop && this.initAnimation();
    },
    methods: {
        initAnimation: function() {
            var t = this;
            wx.createSelectorQuery().in(this).select(".u-noticebar-content-wrap").boundingClientRect(function(i) {
                wx.createSelectorQuery().in(t).select(".u-noticebar-content").boundingClientRect(function(a) {
                    var n = a.width / 40 * t.data.speed, e = wx.createAnimation({
                        duration: n,
                        timingFunction: "linear"
                    });
                    t.setData({
                        wrapWidth: i.width,
                        width: a.width,
                        duration: n,
                        animation: e
                    }, function() {
                        t.startAnimation();
                    });
                }).exec();
            }).exec();
        },
        startAnimation: function() {
            var t = this;
            if (0 !== this.data.animation.option.transition.duration) {
                this.data.animation.option.transition.duration = 0;
                var i = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: i.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            var a = this.data.animation.translateX(-this.data.width).step();
            setTimeout(function() {
                t.setData({
                    animationData: a.export()
                });
            }, 100);
            var n = setTimeout(function() {
                t.initAnimation();
            }, this.data.duration);
            this.setData({
                timer: n
            });
        },
        destroyTimer: function() {
            this.data.timer && clearTimeout(this.data.timer);
        },
        handleClose: function() {
            this.destroyTimer(), this.setData({
                show: !1,
                timer: null
            });
        }
    }
});