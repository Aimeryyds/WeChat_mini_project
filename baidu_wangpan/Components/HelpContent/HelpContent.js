var e = getApp().globalData;

Component({
    properties: {
        questionData: {
            type: Array,
            value: []
        }
    },
    data: {},
    onShow: function() {
        this.toast = this.selectComponent("#toast");
    },
    methods: {
        clearMini: function() {
            wx.removeStorageSync("lsk"), wx.removeStorageSync("PANWX"), wx.removeStorageSync("uk"), 
            wx.removeStorageSync("passport_stoken"), wx.removeStorage({
                key: "userInfo",
                success: function(t) {
                    e.userWxInfo = null, e.userBdInfo = null, e.hasWxAuthor = !1, e.hasBdAuthor = !1, 
                    wx.wetoast({
                        content: "清理缓存成功",
                        duration: 2e3
                    });
                    setTimeout(function() {
                        wx.toasthide(), wx.reLaunch({
                            url: "/pages/netdisk_index/index"
                        });
                    }, 2400);
                }
            });
        }
    }
});