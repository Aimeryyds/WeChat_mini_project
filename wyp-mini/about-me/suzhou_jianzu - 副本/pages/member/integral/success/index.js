Page({
    data: {},
    onLoad: function(o) {
        console.log(o.logid), this.setData({
            logid: o.logid
        });
    },
    toReceived: function() {
        var o = this;
        console.log(111), wx.reLaunch({
            url: "../received/index?id=" + o.data.logid
        });
    }
});