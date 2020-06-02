getApp();

Page({
    data: {
        motto: "Hello World",
        userInfo: {}
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        console.log(wx);
    },
    onShareAppMessage: function() {
        return {
            title: "慧择保险，一站式保险服务平台",
            desc: "慧择保险，一站式保险服务平台",
            path: "/pages/index/index"
        };
    }
});