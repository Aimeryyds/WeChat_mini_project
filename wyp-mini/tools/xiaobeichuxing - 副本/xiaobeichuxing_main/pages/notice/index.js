var t = require("../../utils/https.js"), e = require("../../utils/util.js"), n = t.imgurl, i = [];

Page({
    data: {
        notice: !1,
        no: n + "no.png",
        noticeList: [],
        nowTime: "",
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(1212), console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    onLoad: function(t) {
        var n = e.formatTime(new Date());
        this.setData({
            nowTime: n
        }), this.mynotice();
    },
    mynotice: function() {
        var e = this, n = {
            uid: wx.getStorageSync("uid"),
            senddate: this.data.nowTime
        };
        t.req("User/MyNotice", n, function(t, n) {
            if (0 == n.data.code) {
                i = [];
                for (var o = 0; o < n.data.data.length; o++) {
                    var a = n.data.data[o], s = a.senddate.replace(/T/, " ");
                    a.senddate = s, i.push(a);
                }
                e.setData({
                    noticeList: i
                });
            }
        });
    },
    showtices: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "notices/index?title=" + e.title + "&time=" + e.time + "&content=" + e.cont + "&rid=" + e.rid
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