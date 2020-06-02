Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../config/url-config"), e = require("../../api/sh");

Component({
    properties: {
        type: {
            type: Number,
            value: 1
        },
        shareInfo: {
            type: Object,
            value: {
                url: t.default.host,
                title: ""
            },
            observer: function(t) {
                this.setupShareInfo(t);
            }
        }
    },
    data: {
        showSharePanel: !1,
        shareText: {
            leading: "",
            title: "",
            trailing: ""
        }
    },
    attached: function() {
        this.setupShareInfo(this.properties.shareInfo);
    },
    detached: function() {},
    methods: {
        setupShareInfo: function(t) {
            var e = !!t.title;
            this.setData({
                shareText: {
                    leading: e ? "我分享了一个搜狐新闻给你：【" : "我分享了【",
                    title: t.title || "搜狐网",
                    trailing: (e ? "】" : "】给你，") + "快来看看吧! " + (t.url || "")
                }
            });
        },
        shareButtonTap: function() {
            var t = this;
            e.sh.setClipboardData({
                data: this.data.shareText.leading + this.data.shareText.title + this.data.shareText.trailing,
                success: function() {
                    t.setData({
                        showSharePanel: !0
                    });
                },
                fail: function() {
                    e.sh.showToast({
                        title: "设置失败"
                    });
                }
            });
        },
        closePanel: function() {
            this.setData({
                showSharePanel: !1
            });
        },
        handleClick: function() {
            this.triggerEvent("handleClick"), this.shareButtonTap();
        }
    }
});