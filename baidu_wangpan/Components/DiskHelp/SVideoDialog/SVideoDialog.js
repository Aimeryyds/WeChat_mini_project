Component({
    properties: {
        video: {
            type: String,
            value: ""
        },
        autoplay: {
            type: Boolean,
            value: !0
        },
        shareType: {
            type: Number,
            value: 1
        }
    },
    ready: function() {},
    methods: {
        palyEnd: function() {
            this.triggerEvent("closeVideo");
        },
        palyStart: function() {
            this.setFullscreen(), 1 === this.data.shareType ? wx.log.share.viewNoShareDirHelpVideo.send() : wx.log.share.viewShareDirHelpVideo.send();
        },
        chagefullscreen: function(e) {
            e.detail.fullScreen || this.triggerEvent("closeVideo");
        },
        setFullscreen: function() {
            wx.createVideoContext("helpVideo", this).requestFullScreen({
                direction: 0
            });
        }
    }
});