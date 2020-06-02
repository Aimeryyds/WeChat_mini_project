var n = require("../../../../utils/https.js").imgurl;

Page({
    data: {
        img01: n + "111.png",
        img02: n + "22.png",
        img03: n + "12.png",
        myHight: ""
    },
    myEventListener: function(n) {
        console.log(1212), console.log(n.detail), this.setData({
            myHight: n.detail
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