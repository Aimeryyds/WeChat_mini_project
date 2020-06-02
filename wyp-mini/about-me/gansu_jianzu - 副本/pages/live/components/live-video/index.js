Component({
    properties: {
        srcs: {
            type: Array,
            value: []
        }
    },
    data: {
        showTips: !0,
        currentIndex: 0
    },
    ready: function(t) {
        this.videoCtx = wx.createVideoContext("myVideo", this);
    },
    methods: {
        playVideo: function() {
            var t = this;
            this.data.srcs;
            this.setData({
                autoplay: !0,
                currentIndex: 0,
                showTips: !1
            }, function() {
                t.videoCtx.play();
            });
        },
        handlePlay: function() {
            var t = this.data;
            t.currentIndex == t.srcs.length - 1 ? this.setData({
                autoplay: !1
            }) : this.setData({
                autoplay: !0
            }), this.triggerEvent("onplayvideo");
        },
        handleEnd: function() {
            console.log("on end");
            var t = this.data, e = t.srcs, a = this, s = t.currentIndex + 1;
            e[s] ? a.setData({
                currentIndex: s
            }) : this.setData({
                showTips: !0
            });
        }
    }
});