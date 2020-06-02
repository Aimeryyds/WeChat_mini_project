Page({
    data: {},
    toReceived: function() {
        wx.reLaunch({
            url: "../../member/index/index"
        });
    }
});