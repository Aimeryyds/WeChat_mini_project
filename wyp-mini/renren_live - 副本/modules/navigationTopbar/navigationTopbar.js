Component({
    properties: {
        navtype: {
            type: Number,
            value: 2
        },
        showWhiteBackground: {
            type: Boolean,
            value: !1
        },
        navBackUrl: {
            type: String,
            value: "../../images/navigation_back_default.png"
        },
        navTxt: {
            type: String,
            value: ""
        },
        navImage: {
            type: String
        },
        backgroundColor: {
            type: String,
            value: "#fff"
        },
        borderBottom: {
            type: String,
            value: "1px solid #E5E5E5"
        }
    },
    data: {
        navigationBarHeight: 20
    },
    ready: function() {
        var a = getApp().globalData.navStatusbarHeight;
        this.setData({
            navigationBarHeight: a,
            showWhiteBackground: this.properties.showWhiteBackground
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