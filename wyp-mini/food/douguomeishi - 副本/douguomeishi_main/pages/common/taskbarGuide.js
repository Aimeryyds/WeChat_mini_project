Component({
    pageLifetimes: {
        show: function() {
            this.setData({
                hidden: wx.getStorageSync("hidden_guide")
            });
        }
    },
    methods: {
        homeGuidePressed: function() {},
        homeGuideDismiss: function() {
            wx.setStorageSync("hidden_guide", !0), this.setData({
                hidden: !0
            });
        }
    }
});