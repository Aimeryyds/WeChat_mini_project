Component({
    properties: {
        module: {
            type: Object,
            observer: function(t, e) {
                if (this.setData({
                    scrollLeft: NaN,
                    group: t,
                    checkindex: 0
                }), e && e.options) {
                    clearInterval(this.interval);
                    var i = this;
                    setTimeout(function() {
                        i.setNotice();
                    }, 500);
                }
            }
        }
    },
    data: {
        animationData: {},
        velocity: 16
    },
    ready: function() {
        this.setNotice();
    },
    detached: function() {
        clearInterval(this.interval);
    },
    methods: {
        start: function() {
            var t = this.data, e = t.width, i = t.duration, n = this;
            n.animation.translate(682 / 750 * wx.getSystemInfoSync().screenWidth).step({
                duration: 100,
                timingFunction: "step-start"
            }), n.animation.translate(-e).step({
                duration: i
            }), n.setData({
                animationData: n.animation.export()
            });
        },
        setNotice: function() {
            var t = this.data, e = (t.fontSize, t.text, t.velocity), i = this;
            wx.createSelectorQuery().in(this).select("#text").boundingClientRect(function(t) {
                var n = t.width, a = 500 * (n + 682 / 750 * wx.getSystemInfoSync().screenWidth) / e;
                i.setData({
                    width: n,
                    duration: a
                });
                var o = wx.createAnimation({
                    duration: a
                });
                i.animation = o, i.start(), i.interval = setInterval(i.start.bind(i), a);
            }).exec();
        },
        updateText: function(t, e) {}
    }
});