Component({
    properties: {
        navigationType: {
            type: Number,
            value: 0
        },
        navigationColor: {
            type: String,
            value: "white"
        },
        titleTextColor: {
            type: String,
            value: "black"
        },
        navigationBackUrl: {
            type: String,
            value: "../../images/navigation_back_default.png"
        },
        navigationTitleText: {
            type: String,
            value: ""
        },
        navigationLiveInfo: {
            type: Object,
            value: ""
        }
    },
    data: {
        navigationBarHeight: 20,
        windowWidth: 500,
        navigationBackColor: "",
        titleTextColor: "",
        showWhiteBackground: !0
    },
    ready: function() {
        var t = getApp().globalData.navStatusbarHeight, i = wx.getSystemInfoSync().windowWidth;
        this.setData({
            navigationBarHeight: t,
            windowWidth: i,
            navigationBackColor: this.properties.navigationColor,
            titleTextColor: this.properties.titleTextColor,
            navigationBackUrl: 2 === this.properties.navigationType ? "../../images/home_recommend_close.png" : this.properties.navigationBackUrl,
            showWhiteBackground: 2 !== this.properties.navigationType
        });
    },
    methods: {
        ClickBack: function() {
            wx.navigateBack({
                delta: 1
            });
        }
    }
});