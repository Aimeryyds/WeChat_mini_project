var e = require("../../../utils/https.js"), t = require("../../../utils/util.js");

Page({
    data: {
        myHight: "",
        noOverdue: [],
        overdue: [],
        carList: []
    },
    myEventListener: function(e) {
        this.setData({
            myHight: e.detail
        });
    },
    navBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    gotodetail: function(e) {
        console.log(e.currentTarget.dataset.item), wx.navigateTo({
            url: "../ridingCardDetails/index?item=" + JSON.stringify(e.currentTarget.dataset.item)
        });
    },
    MyRidingCard: function() {
        var n = this, i = [], a = [];
        e.req11("RidingCard/MyRidingCard", {}, function(o, r) {
            if (0 == r.data.code) {
                for (var u = r.data.data, d = [], c = 0; c < u.length; c++) u[c].expiretimeTmp = u[c].expiretime, 
                0 == u[c] && (u[c].usecounted = parseInt(t.floatSub(u[c].totalcount, u[c].remainingusecount))), 
                u[c].newbuytime = new Date(u[c].buytime.replace(/-/g, "/")).getTime(), u[c].expiretime = u[c].expiretime.substr(0, 10).replace(/\-/g, "/"), 
                u[c].endTime = new Date(u[c].expiretime).getTime(), u[c].state = t.CompareDate(u[c].expiretimeTmp, t.formatTime(new Date())), 
                0 == u[c].remainingusecount && "0" == u[c].type && (u[c].state = !1), u[c].state ? i.push(u[c]) : (console.log(u[c]), 
                u[c].old = !0, a.push(u[c]));
                console.log(a), a = a.concat(d), i.sort(function(e, t) {
                    return e.endTime - t.endTime;
                }), a.sort(function(e, t) {
                    return t.endTime - e.endTime;
                }), i.sort(function(e, t) {
                    if (e.endTime == t.endTime) return e.type - t.type;
                }), a.sort(function(e, t) {
                    if (e.endTime == t.endTime) return e.type - t.type;
                });
                for (var s = i.concat(a), m = 0; m < s.length; m++) 0 != s[m].type ? function(t) {
                    e.req11("RidingCard/GetMonthCardUseCount", {
                        id: s[t].id
                    }, function(e, i) {
                        0 == i.data.code && (s[t].usecounted = i.data.data, s.length, n.setData({
                            carList: s
                        }));
                    });
                }(m) : (s[m].usecounted = s[m].totalcount - s[m].remainingusecount, m == s.length - 1 && n.setData({
                    carList: s
                }));
                console.log(s);
            }
        });
    },
    onLoad: function(e) {
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