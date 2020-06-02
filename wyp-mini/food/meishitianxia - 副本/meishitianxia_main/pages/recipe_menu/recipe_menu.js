var e = require("data.js");

Page({
    data: {},
    onLoad: function(t) {
        var a = this;
        a.setData({
            menulist: e.menu_data
        }), wx.getSystemInfo({
            success: function(e) {
                a.setData({
                    height: e.windowHeight
                });
            }
        });
    },
    onReady: function() {},
    onShareAppMessage: function() {
        return {
            title: "家常菜",
            desc: "最常见的500道家常菜",
            path: "/pages/index/index?type=recipe_menu&inviteuid=" + app.globalData.uid
        };
    }
});