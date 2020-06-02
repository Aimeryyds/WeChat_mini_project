var a = require("utils/api"), e = (require("utils/gio-minp/index.js").default, require("utils/network.js")), o = new a.api();

App({
    onLaunch: function() {
        var a = this;
        wx.getSystemInfo({
            success: function(e) {
                var o = e.model;
                -1 != o.search("iPhone X") && (a.globalData.isIpx = !0), -1 != o.search("iPhone 11") && (a.globalData.isIpx = !0);
            }
        });
        try {
            wx.removeStorageSync("purchased");
        } catch (a) {}
    },
    onShow: function(a) {
        var o = this, t = wx.getStorageSync("union_id"), n = wx.getStorageSync("third_session_key");
        void 0 != t && t.length > 0 && void 0 != n && n.length > 0 && e.initSessionParams(t, n), 
        o.globalData.ivFromShareInfo = "", o.globalData.encryptedDataFromShareInfo = "", 
        o.globalData.shareTicket = "", console.log(a.scene), 1044 == a.scene && (o.globalData.shareTicket = a.shareTicket, 
        void 0 != n && n.length > 0 && wx.getShareInfo({
            shareTicket: a.shareTicket,
            success: function(a) {
                var e = a.iv, t = a.encryptedData;
                o.globalData.ivFromShareInfo = e, o.globalData.encryptedDataFromShareInfo = t, console.log("onAppLoad: getShareInfo ===>data = " + t + " iv = " + e);
            }
        })), 1036 == a.scene ? o.globalData.appScene = !0 : o.globalData.appScene = !1, 
        console.log("appScene == " + o.globalData.appScene), wx.getStorageSync("user") && wx.checkSession({
            success: function() {},
            fail: function() {
                try {
                    wx.removeStorageSync("user");
                } catch (a) {}
            }
        });
    },
    onHide: function() {},
    onError: function(a) {},
    shouldRequestShareInfo: function() {
        return void 0 != this.globalData.shareTicket && this.globalData.shareTicket.length >= 0 && (void 0 == this.globalData.encryptedDataFromShareInfo || 0 == this.globalData.encryptedDataFromShareInfo.length);
    },
    globalData: {
        isIpx: !1,
        foo: "bar",
        shareTicket: "",
        ivFromShareInfo: "",
        encryptedDataFromShareInfo: "",
        appScene: !1
    },
    API: o
});