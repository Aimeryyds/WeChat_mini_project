var e = require("../../utils/network.js"), t = require("../../utils/util.js");

getApp();

Page({
    data: {
        colors: [ "#7ac873", "#ff8265", "#66bfdf", "#ff9332", "#6bceb5" ],
        primaryTags: [],
        selectedIndex: -1
    },
    onShow: function() {
        wx.setStorageSync("selected_tabbar_path", "/pages/catalogue/catalogue"), this.request();
    },
    request: function() {
        var a = this;
        e.request("https://m.douguo.com/wxn/recipecates", {}, function(e) {
            if (0 != t.isArray(e.catalogs)) {
                var r = e.catalogs;
                a.setData({
                    primaryTags: r
                });
            }
        }, function(e) {
            wx.showModal({
                title: "",
                content: "别着急，网有点慢，再试试",
                showCancel: !1
            });
        });
    },
    minorItemDidPress: function(e) {
        var t = e.currentTarget.dataset.name;
        t.length <= 0 || wx.navigateTo({
            url: "../search/search?keyword=" + t
        });
    },
    onShareAppMessage: function() {
        return {
            title: "豆果美食 - \b精选菜谱 厨房必备",
            desc: "豆果美食 开启美味生活",
            path: "/pages/catalogue/catalogue"
        };
    }
});