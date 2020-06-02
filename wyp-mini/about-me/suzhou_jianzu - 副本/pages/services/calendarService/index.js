var t = require("../../../utils/server"), e = wx.getStorageSync("utoken"), a = {
    data: {
        time: "10:00",
        curMonthIndex: ""
    },
    onLoad: function(t) {
        for (var e = this, a = [ "日", "一", "二", "三", "四", "五", "六" ], i = new Date(), n = i.getFullYear(), s = i.getMonth() + 1, r = i.getDate(), o = (i.getFullYear(), 
        i.getMonth(), new Date(n, s, 0).getDate()), d = new Date(n, s + 1, 0).getDate(), u = new Date(n, s + 2, 0).getDate(), c = [], g = [], l = [], D = 1; D <= o; D++) c.push(D);
        for (D = 1; D <= d; D++) g.push(D);
        for (D = 1; D <= u; D++) l.push(D);
        var h = [ {
            days: c,
            emptyDays: new Date(Date.UTC(n, s - 1, 1)).getDay(),
            month: s.toString()
        }, {
            days: g,
            emptyDays: new Date(Date.UTC(n, s, 1)).getDay(),
            month: s + 1
        }, {
            days: l,
            emptyDays: new Date(Date.UTC(n, s + 1, 1)).getDay(),
            month: s + 2
        } ];
        e.setData({
            allDays: h,
            weeks_ch: a,
            curYear: n,
            curMonth: s,
            curDate: r,
            indexs: r,
            curMonthIndex: s,
            id: t.cartIds,
            sum: t.amount,
            title: t.title,
            price: t.price,
            img: t.img,
            store: t.stroe
        }), e.loadData();
    },
    loadData: function() {
        var a = this;
        e = wx.getStorageSync("utoken"), t.sendRequest({
            url: "?r=wxapp.services.price.getprice",
            data: {
                id: a.data.id,
                utoken: e
            },
            method: "GET",
            success: function(t) {
                console.log(t.data), a.setData({
                    list: t.data
                });
            }
        });
    },
    Xget: function(t) {
        var e = this, a = t.currentTarget.dataset.month, i = t.currentTarget.dataset.day;
        e.setData({
            indexs: i,
            curMonthIndex: a
        });
        for (var n in e.data.list) if (e.data.list[n].month == a && e.data.list[n].day == i) return console.log(e.data.list[n]), 
        e.setData({
            price: e.data.list[n].oprice,
            thisdate: e.data.list[n].thisdate
        }), void setTimeout(function() {
            wx.navigateTo({
                url: "../../order/ordersubmit/index?cartIds=" + e.data.id + "&amount=" + e.data.sum + "&title=" + e.data.title + "&price=" + e.data.price + "&img=" + e.data.img + "&time=" + e.data.thisdate + "&store=1"
            });
        }, 1e3);
        wx.showToast({
            title: "暂不支持预定",
            icon: "loading",
            duration: 2e3
        });
    },
    bindTimeChange: function(t) {
        this.setData({
            time: t.detail.value
        });
    }
};

Page(a);