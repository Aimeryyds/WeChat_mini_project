getApp(), require("../../utils/util");

Page({
    data: {
        drawRules: null
    },
    onLoad: function(t) {
        this.setData({
            drawRules: t.drawRules
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        return {
            title: "幸运大抽奖",
            path: "/pages/lottery/lottery"
        };
    }
});