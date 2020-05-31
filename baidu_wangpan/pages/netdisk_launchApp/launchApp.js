var a = getApp();

Page({
    data: {
        height: 0,
        content: "https://pan.baidu.com/download#pan"
    },
    onLoad: function(t) {
        this.setData({
            height: a.globalData.navHeight
        }), wx.log.common.launchApp.send();
    },
    launchBtn: function() {
        wx.setClipboardData({
            data: this.data.content
        }), wx.log.common.launchAppCopy.send();
    }
});