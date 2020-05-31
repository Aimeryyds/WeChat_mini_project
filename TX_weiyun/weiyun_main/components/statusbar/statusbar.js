var t = wx.getSystemInfoSync();

Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: ""
        },
        delta: {
            type: Number,
            value: 1
        },
        customBack: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        barHeight: 0,
        statusHeight: 0,
        titleHeight: 0
    },
    attached: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.initStatusBar(a);
            },
            fail: function(a) {
                t.initStatusBar();
            }
        });
    },
    methods: {
        initStatusBar: function(a) {
            var e = (a = Object.assign({
                statusBarHeight: 20
            }, a)).statusBarHeight, i = "android" === a.platform ? 48 : 44, n = i + e, s = getCurrentPages();
            this.setData({
                barHeight: n,
                statusHeight: e,
                titleHeight: i,
                textBack: "qq" === t.AppPlatform && 1 === s.length ? "我的文件" : "",
                showDirectoryBack: 1 !== s.length,
                showMainBack: 1 === s.length && ("qq" !== t.AppPlatform || "qq" === t.AppPlatform && "android" === t.platform && t.version < "8.0.0")
            }), this.triggerEvent("inited", {
                height: n
            });
        },
        back: function() {
            this.data.customBack ? this.triggerEvent("back") : wx.navigateBack();
        }
    }
});