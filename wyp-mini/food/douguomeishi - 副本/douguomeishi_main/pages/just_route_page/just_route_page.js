Page({
    data: {
        title: "打开严选",
        content: "将要打开严选小程序"
    },
    onLoad: function(t) {
        var a = t.appId, e = decodeURIComponent(t.path), n = {};
        t.extraData && t.extraData.length > 0 && (n = JSON.parse(decodeURIComponent(t.extraData))), 
        t.title && (this.data.title = t.title), t.content && (this.data.content = t.content), 
        this.data.appId = a, this.data.path = e, this.data.extraData = n;
    },
    onShow: function() {
        var t = this;
        wx.showModal({
            title: t.data.title,
            content: t.data.content,
            showCancel: !0,
            confirmText: "确定",
            success: function(a) {
                a.confirm ? wx.navigateToMiniProgram({
                    appId: t.data.appId,
                    path: t.data.path,
                    extraData: t.data.extraData,
                    envVersion: "release",
                    complete: function(t) {
                        wx.navigateBack();
                    },
                    fail: function() {
                        wx.navigateBack();
                    }
                }) : wx.navigateBack();
            }
        });
    }
});