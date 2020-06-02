Page({
    data: {
        tips: "",
        jumpText: "",
        openUrl: "",
        appScene: !1
    },
    onLoad: function(e) {
        console.log(e);
        var p = e.tips ? e.tips : "", t = e.jumpText ? e.jumpText : "", o = e.openUrl ? e.openUrl : "";
        o && (o = decodeURIComponent(o));
        var n = {
            tips: p,
            jumpText: t,
            openUrl: o
        };
        this.setData(n);
    },
    launchAppError: function(e) {
        console.log(e);
    },
    onShow: function() {
        this.setData({
            appScene: getApp().globalData.appScene
        });
    }
});