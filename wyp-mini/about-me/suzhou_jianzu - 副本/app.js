function i(i, e, t) {
    return e in i ? Object.defineProperty(i, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[e] = t, i;
}

var e = require("./utils/server"), t = (require("./utils/md5.js"), require("/WxEmojiView/WxEmojiView.js"));

App({
    onLaunch: function() {
        var g, n = this, o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o), t.init(":_/", (g = {
            "00": "00.gif",
            "01": "01.gif",
            "02": "02.gif",
            "03": "03.gif",
            "04": "04.gif",
            "05": "05.gif",
            "06": "06.gif",
            "07": "07.gif",
            "08": "08.gif",
            "09": "09.gif"
        }, i(g, "09", "09.gif"), i(g, "10", "10.gif"), i(g, "11", "11.gif"), i(g, "12", "12.gif"), 
        i(g, "13", "13.gif"), i(g, "14", "14.gif"), i(g, "15", "15.gif"), i(g, "16", "16.gif"), 
        i(g, "17", "17.gif"), i(g, "18", "18.gif"), i(g, "19", "19.gif"), g));
        var f = wx.getStorageSync("utoken");
        console.log(wx.getStorageSync("utoken"));
        var a = (wx.getExtConfigSync ? wx.getExtConfigSync() : {}).new;
        this.globalData.news = a, this.globalData.utoken = f, e.setLog(f), wx.getSystemInfo({
            success: function(i) {
                n.screenWidth = i.windowWidth, n.pixelRatio = i.pixelRatio;
            }
        });
    },
    globalData: {}
});