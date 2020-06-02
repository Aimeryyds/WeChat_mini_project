Page({
    onShow: function() {
        var a = wx.getStorageSync("selected_tabbar_path");
        "/pages/mall/mall" != a && (wx.navigateToMiniProgram({
            appId: "wx09c9b765670e9f53",
            path: "",
            extraData: {},
            envVersion: "release",
            complete: function(e) {
                wx.switchTab({
                    url: a
                });
            }
        }), wx.setStorageSync("selected_tabbar_path", "/pages/mall/mall"));
    }
});