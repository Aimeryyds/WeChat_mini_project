Component({
    properties: {
        titleText: {
            type: String,
            value: "百度网盘"
        },
        isBatch: {
            type: Boolean,
            value: !1
        },
        showBack: {
            type: Boolean,
            value: !0
        },
        isShowBarBtn: {
            type: Boolean,
            value: !0
        },
        homeUrl: {
            type: String,
            value: "/pages/index/index"
        },
        homeIcon: {
            type: String,
            value: "https://staticwx.cdn.bcebos.com/mini-program/images/ic_home.png"
        },
        backIcon: {
            type: String,
            value: "https://staticwx.cdn.bcebos.com/mini-program/images/ic_back.png"
        }
    },
    data: {
        statusBarHeight: 20,
        totalHeight: 68,
        navHeight: 68
    },
    options: {
        addGlobalClass: !0
    },
    ready: function() {
        this.__computeNavigateBarHeight(), console.log(this);
    },
    methods: {
        navigateBack: function() {
            this.data.isBatch ? this.triggerEvent("back") : wx.navigateBack();
        },
        home: function() {
            wx.reLaunch({
                url: this.data.homeUrl
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
        },
        __computeNavigateBarHeight: function() {
            try {
                var t = wx.getSystemInfoSync(), e = 72;
                /iPhone X|MI 8|PAAM00|COR-AL00/.test(t.model) ? e = 88 : /iPhone/.test(t.model) && (e = 62, 
                t.screenHeight > 800 && (e = 88)), t.ratio = (750 / t.windowWidth).toFixed(2), t.visualHeightRpx = (t.windowHeight - e) * t.ratio;
                var a = e - t.statusBarHeight;
                this.setData({
                    statusBarHeight: t.statusBarHeight,
                    totalHeight: a,
                    navHeight: e
                });
            } catch (t) {
                throw new Error("getSystemInfoSync failed");
            }
        }
    }
});