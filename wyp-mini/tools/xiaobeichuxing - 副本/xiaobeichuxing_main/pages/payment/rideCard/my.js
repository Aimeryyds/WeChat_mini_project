require("../../../utils/util.js");

var t = require("../../../utils/https.js");

Page({
    data: {
        cardList: []
    },
    riqi: function(t) {
        if (!t) return "";
        var i = t.substr(t.indexOf(" ") + 1), n = t.length - i.length;
        return t.substring(0, n);
    },
    MyRidingCard: function() {
        var i = this, n = this;
        t.req11("RidingCard/MyRidingCard", {}, function(t, e) {
            if (0 == e.data.code) {
                var a = e.data.data;
                if (!a) return;
                for (var r = 0; r < a.length; r++) a[r].type = 0 == a[r].type ? "次数卡" : "免押金卡", 
                a[r].buytime = n.riqi(a[r].buytime), a[r].expiretime = n.riqi(a[r].expiretime);
                i.setData({
                    cardList: a
                });
            } else wx.showModal({
                title: "",
                content: e.data.retmsg
            });
        });
    },
    navBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onLoad: function(t) {
        this.MyRidingCard();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});