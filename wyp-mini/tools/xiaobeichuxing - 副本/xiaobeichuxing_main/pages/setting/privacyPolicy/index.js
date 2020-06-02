Page({
    data: {
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