var n = require("../../utils/https.js").imgurl;

Page({
    data: {
        fun: n + "fun.png",
        funBtn: n + "fun_btn.png",
        StopImg: n + "stopImg.png",
        myHight: ""
    },
    myEventListener: function(n) {
        this.setData({
            myHight: n.detail
        });
    },
    coneLisrt: function() {
        wx.navigateTo({
            url: "../index/security/index"
        });
    },
    coneLisrt2: function() {
        wx.navigateTo({
            url: "stopcont/index"
        });
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});