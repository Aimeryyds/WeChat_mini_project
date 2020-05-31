var e = wx.ENV.staticPath;

Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        titleIcon: {
            type: String,
            value: ""
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        showClose: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        closeIcon: e + "/feed-close.png"
    },
    methods: {
        hide: function() {
            this.triggerEvent("hide");
        }
    }
});