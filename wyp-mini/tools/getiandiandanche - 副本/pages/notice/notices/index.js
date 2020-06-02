var t = require("../../../utils/https.js");

Page({
    data: {
        title: "",
        time: "",
        content: "",
        rid: "",
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    onLoad: function(t) {
        this.setData({
            rid: t.rid
        }), this.MyNoticeInfo();
    },
    MyNoticeInfo: function() {
        var n = this, o = {
            rid: n.data.rid
        };
        t.req("User/MyNoticeInfo", o, function(t, o) {
            if (0 == o.data.code) {
                var e = o.data.data.content, a = o.data.data.senddate.replace(/T/, " "), i = o.data.data.title;
                n.setData({
                    title: i,
                    time: a,
                    content: e
                });
            }
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