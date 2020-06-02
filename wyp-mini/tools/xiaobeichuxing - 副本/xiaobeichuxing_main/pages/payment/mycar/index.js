var t = require("../../../utils/https.js");

Page({
    data: {
        carList: []
    },
    onLoad: function(t) {
        this.MyCard();
    },
    MyCard: function() {
        var n = this, o = {
            uid: wx.getStorageSync("uid")
        };
        t.req("User/MyCard", o, function(t, o) {
            console.log(o), 0 == o.data.code ? n.setData({
                carList: o.data.data
            }) : wx.showModal({
                title: "",
                content: o.data.retmsg
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});