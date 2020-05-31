Component({
    properties: {
        isOnError: {
            type: Boolean,
            value: !1
        },
        msg: {
            type: String,
            value: "网络异常，点击重试"
        },
        height: {
            type: String,
            value: "100%"
        }
    },
    data: {},
    methods: {
        show: function() {
            this.setData({
                isOnError: !0
            });
        },
        hide: function() {
            this.setData({
                isOnError: !1
            });
        },
        retry: function() {
            var t = this;
            this.triggerEvent("retry"), wx.wetoast({
                content: "加载中...",
                loading: !0,
                duration: 1e3
            }), wx.getNetworkType({
                success: function(e) {
                    t.setData({
                        isOnError: "none" === e.networkType
                    });
                }
            });
        }
    }
});