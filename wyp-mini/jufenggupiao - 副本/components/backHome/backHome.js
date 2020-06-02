Component({
    properties: {
        customStyle: {
            type: String
        }
    },
    data: {
        isShow: true
    },
    methods: {
        goHome: function goHome() {
            wx.redirectTo({
                url: "/pages/index"
            });
            wx.backHomeButtonIsClick = true;
            this.setData({
                isShow: false
            });
        }
    },
    created: function created() {},
    pageLifetimes: {},
    attached: function attached() {
        console.log("wx.isFromShareChannel->是否分享渠道", wx.isFromShareChannel);
        console.log("wx.ShareUrlIsIndex->是否首页", wx.ShareUrlIsIndex);
        console.log("wx.backHomeButtonIsClick->是否有点击态", wx.backHomeButtonIsClick);
        if (wx.isFromShareChannel && !wx.ShareUrlIsIndex && !wx.backHomeButtonIsClick) {
            console.log("分享按钮执行!");
            this.setData({
                isShow: true
            });
        }
    }
});