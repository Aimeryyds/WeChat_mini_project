var e = require("../../../../external/mta_analysis.js"), t = {
    success: "https://pub.idqqimg.com/pc/misc/files/20190718/c03de8005b52b42edb551cd68ad9ac9f.png",
    fail: "https://pub.idqqimg.com/pc/misc/files/20190718/34b71398bf0e6a8ce2b648175f48da5e.png",
    progress: "https://pub.idqqimg.com/pc/misc/files/20190718/617e4e537c99d2a5bd8a0e46bae4e73e.png"
};

Component({
    properties: {},
    data: {
        isShow: !1,
        icon: "",
        title: "",
        message: "",
        retryButtonVisibility: !1,
        okButtonVisibility: !1,
        finishButtonVisibility: !1,
        type: "progress",
        buttonText: "完成"
    },
    methods: {
        hideSaveResult: function() {
            this.setData({
                isShow: !1
            });
        },
        completeSave: function() {
            this.setData({
                isShow: !1
            }), e.Event.stat("fenxiangsavecomplete", {}), wx.reLaunch({
                url: "../index/index?save_share=true"
            });
        },
        saveBackground: function() {
            this.setData({
                isShow: !1
            }), this.triggerEvent("saveBackground");
        },
        retrySave: function() {
            this.setData({
                isShow: !1
            }), this.triggerEvent("saveRetry");
        },
        showSaveResult: function(e) {
            var i = t[e.type], s = "", a = void 0, o = void 0, n = void 0;
            "progress" === e.type && e.times < 10 ? (a = !1, o = !1, n = !1, s = e.message) : "progress" === e.type && e.times >= 10 ? (a = !0, 
            o = !1, n = !1, s = "耗时可能较长，无需在当前状态继续等待") : "success" === e.type ? (a = !1, o = !1, 
            n = !0, s = e.message) : "fail" === e.type && (a = !1, o = !0, n = !1, s = e.message), 
            this.setData({
                isShow: !0,
                icon: i,
                title: e.title,
                message: s,
                type: e.type,
                okButtonVisibility: a,
                retryButtonVisibility: o,
                finishButtonVisibility: n
            });
        }
    }
});