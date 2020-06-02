Page({
    data: {
        url: ""
    },
    onLoad: function(e) {
        var t = "";
        if (console.log(" 网页跳转的协议 options:  ", e), e && (e.miniUrl || e.url)) {
            t = e.miniUrl || e.url;
            var a = "";
            for (var r in e) "miniUrl" !== r && "subject" !== r && (a = a + r + "=" + encodeURIComponent(decodeURIComponent(e[r])) + "&");
            var i = "?";
            2 == e.param && (i = "#"), a && (t = t + i + a + "miniprogram=1");
            var o = getApp().golbalData.whiteList;
            for (var n in o) if (t && t.indexOf(n)) {
                !0;
                break;
            }
            -1 === t.indexOf("https") && t.replace("http", "https"), !0 ? (console.log("@@ webviewUrl：  " + t), 
            this.setData({
                url: t
            })) : wx.showToast({
                title: "小程序暂不支持该业务",
                duration: 3e3
            });
        } else wx.showToast({
            title: "小程序暂不支持该业务",
            duration: 3e3
        });
    },
    onShareAppMessage: function(e) {
        var t = this.data.url;
        return t = t.replace("?", "&"), {
            title: "同花顺问财",
            path: "/pages/webview/webview?url=" + getApp().golbalData.indexurl
        };
    }
});