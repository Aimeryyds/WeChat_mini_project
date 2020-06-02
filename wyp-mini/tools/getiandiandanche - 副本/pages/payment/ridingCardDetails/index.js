var t = require("../../../utils/https.js");

Page({
    data: {
        obj: {},
        options: {},
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    navBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    GetRidingcardDetail: function(e) {
        var i = this;
        t.req11("RidingCard/GetRidingcardDetail", {
            id: e
        }, function(t, e) {
            if (0 == e.data.code) {
                var n = e.data.data;
                n.typeName = 2 == n.type || 3 == n.type || 4 == n.type || 5 == n.type || 6 == n.type ? "畅骑卡" : 1 == n.type ? "免押金卡" : "次卡", 
                n.createtime = n.createtime.replace(/\-/g, "/"), i.setData({
                    obj: n
                });
            } else console.log(e);
        });
    },
    onLoad: function(t) {
        (t = JSON.parse(t.item)).expiretimeTmp = t.expiretimeTmp.replace(/\-/g, "/"), this.setData({
            options: t
        }), this.GetRidingcardDetail(t.ridingcardid);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});