getApp();

Page({
    data: {
        content: "信息已提交，请稍后查询保单"
    },
    goHome: function() {
        wx.redirectTo({
            url: "/pages/home/home"
        });
    }
});