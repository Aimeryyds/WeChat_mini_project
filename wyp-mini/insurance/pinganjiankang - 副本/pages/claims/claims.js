Page({
    data: {},
    comeback: function() {
        wx.navigateBack({
            delta: 1,
            success: function(n) {},
            fail: function() {},
            complete: function() {}
        });
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});