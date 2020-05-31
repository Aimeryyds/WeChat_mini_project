var t = getApp();

Component({
    properties: {
        theme: {
            type: String,
            value: "default"
        },
        titleText: {
            type: String,
            value: ""
        },
        isBatch: {
            type: Boolean,
            value: !1
        },
        showBack: {
            type: Boolean,
            value: !0
        },
        showHome: {
            type: Boolean,
            value: !0
        },
        isShowBarBtn: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        titleText: "百度网盘",
        statusBarHeight: 20,
        totalHeight: 68
    },
    ready: function() {
        var e = getCurrentPages().length || 0;
        this.setData({
            statusBarHeight: t.globalData.statusBarHeight,
            totalHeight: t.globalData.totalHeight
        }), e < 2 && this.setData({
            showBack: !1
        });
    },
    methods: {
        navigateBack: function() {
            this.data.isBatch ? this.triggerEvent("back") : wx.navigateBack();
        },
        home: function() {
            wx.reLaunch({
                url: "/pages/netdisk_index/index"
            });
        },
        setTitle: function(t) {
            t && this.setData({
                titleText: t
            });
        },
        setShowBack: function(t) {
            this.setData({
                showBack: !!t
            });
        }
    }
});