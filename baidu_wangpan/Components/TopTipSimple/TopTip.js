var t = wx.ENV.staticPath;

Component({
    properties: {
        text: {
            type: String,
            value: ""
        },
        showClose: {
            type: Boolean,
            value: !0
        },
        kind: {
            type: String,
            value: "normal"
        }
    },
    data: {
        staticName: wx.ENV.staticName,
        closeIcon: t + "/feed-close.png"
    },
    methods: {
        handleClose: function() {
            this.triggerEvent("close");
        },
        handleContainerClick: function() {
            this.triggerEvent("tap");
        }
    }
});