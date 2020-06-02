var t = require("../../../utils/https.js"), e = require("../../../utils/util.js"), a = t.imgurl;

Page({
    data: {
        TotalMileage: "53.5",
        lcsm: "里程(千米)",
        jpnum: "6.5",
        jpsm: "减排(千克)",
        hidden: !0,
        time: "",
        right: a + "right.png",
        neworderList: [],
        items: [ {
            name: "3",
            value: "余额",
            checked: "true"
        }, {
            name: "4",
            value: "微信"
        } ],
        showModalkf: !1,
        radiovalue: "3",
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    goBack: function() {
        wx.navigateBack();
    },
    orderContMap: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../stroke/index?stime=" + e.stime + "&etime=" + e.etime + "&vid=" + e.vid + "&amount=" + e.amount + "&ridingtime=" + e.ridingtime + "&mile=" + e.mile + "&orderno=" + e.orderno + "&paystatus=" + e.paystatus
        });
    },
    hideModal: function() {
        this.setData({
            showModalkf: !1
        });
    },
    radioChange: function(t) {
        this.setData({
            radiovalue: t.detail.value
        });
    },
    Payagin: function() {},
    getmyList: function() {
        var e = this, a = {
            uid: wx.getStorageSync("uid"),
            etime: this.data.time
        };
        t.req("Veh/MyTrip", a, function(t, a) {
            if (0 == a.data.code) {
                if (0 == a.data.data.length) return void wx.showToast({
                    title: "没有更多数据了",
                    icon: "none"
                });
                for (var i = [], n = 0; n < a.data.data.length; n++) {
                    var o = a.data.data[n], s = o.stime.replace(/T/, " "), r = o.etime.replace(/T/, " ");
                    s.substring(0, 10), s.substring(10);
                    o.stime = s, o.etime = r, i.push(o), n == a.data.data.length - 1 && e.setData({
                        time: s
                    });
                }
                var d = e.data.neworderList;
                d = d.concat(i), e.setData({
                    neworderList: d
                });
            } else wx.showModal({
                title: "",
                content: a.data.retmsg,
                showCancel: !1,
                success: function(t) {
                    t.confirm && wx.navigateTo({
                        url: "../../login/phoneLogin"
                    });
                }
            });
        });
    },
    onLoad: function(t) {
        var a = e.formatTime(new Date());
        this.setData({
            time: a
        }), this.getmyList();
    },
    onReachBottom: function() {
        this.getmyList();
    }
});