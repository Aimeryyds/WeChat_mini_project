var a = require("../../../utils/https.js");

Page({
    data: {
        couList: [],
        couListOut: [],
        myHight: ""
    },
    myEventListener: function(a) {
        console.log(1212), console.log(a.detail), this.setData({
            myHight: a.detail
        });
    },
    onLoad: function(a) {
        this.MyCoupon();
    },
    MyCoupon: function() {
        var t = this, e = {
            uid: wx.getStorageSync("uid")
        };
        a.req("User/MyCoupon", e, function(a, e) {
            if (0 == e.data.code) {
                for (var n = [], o = [], i = 0; i < e.data.data.length; i++) {
                    var d = e.data.data[i].stime.replace(/T/, " ").substring(0, 10), r = e.data.data[i].etime.replace(/T/, " ").substring(0, 10), s = e.data.data[i].state;
                    if (1 == s) {
                        var u = {
                            id: e.data.data[i].id,
                            stime: d,
                            etime: r,
                            type: e.data.data[i].couponfee,
                            remark: e.data.data[i].name,
                            arearname: e.data.data[i].arearname ? e.data.data[i].arearname : "全国"
                        };
                        n.push(u);
                    } else if (0 == s) {
                        var c = {
                            id: e.data.data[i].id,
                            stime: d,
                            etime: r,
                            type: e.data.data[i].couponfee,
                            remark: e.data.data[i].remark,
                            arearname: e.data.data[i].arearname
                        };
                        o.push(c);
                    }
                }
                t.setData({
                    couList: n,
                    couListOut: o
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