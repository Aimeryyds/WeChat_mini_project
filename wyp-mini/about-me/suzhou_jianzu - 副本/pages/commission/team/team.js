var t, a = require("../../../utils/server"), e = wx.getStorageSync("utoken"), r = 1;

Page({
    data: {
        loading: !0,
        index: 1,
        num: "",
        arr: {
            1: 0,
            2: 0,
            3: 0
        },
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        refresh: !1
    },
    tabClick: function(r) {
        var s = this;
        t = r.currentTarget.dataset.index, this.setData({
            index: t
        }), a.sendRequest({
            url: "?r=wxapp.commission.down&utoken=" + e + "&level=" + t,
            data: {},
            success: function(t) {
                var a = t.data.result.list;
                s.data.arr[1] = t.data.result.level[1], s.data.arr[2] = t.data.result.level[2], 
                s.data.arr[3] = t.data.result.level[3];
                var e = s.data.arr;
                s.setData({
                    data: a,
                    arr: e
                });
            }
        });
    },
    toDate: function() {
        var t = 1e3 * number, a = new Date(t);
        return a.getFullYear() + "/" + ((a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "/") + (a.getDate() < 10 ? "0" + a.getDate() : a.getDate());
    },
    onLoad: function(t) {
        e = wx.getStorageSync("utoken");
        var r = this;
        r.data.index;
        a.sendRequest({
            url: "?r=wxapp.commission.down&utoken=" + e + "&level=" + r.data.index,
            showToast: !1,
            data: {},
            method: "GET",
            success: function(t) {
                console.log(t);
                var a = t.data.result.list;
                r.data.arr[1] = t.data.result.level[1], r.data.arr[2] = t.data.result.level[2], 
                r.data.arr[3] = t.data.result.level[3];
                var e = r.data.arr;
                r.setData({
                    loading: !1,
                    data: a,
                    arr: e
                });
            }
        });
    },
    bottom: function(t) {
        var s = this;
        s.data.refresh || (s.setData({
            refresh: !0
        }), r += 1, a.sendRequest({
            url: "?r=wxapp.commission.down",
            data: {
                utoken: e,
                level: s.data.index,
                page: r
            },
            method: "GET",
            success: function(t) {
                console.log(t);
                var a = [];
                for (var e in s.data.data.list) a.push(s.data.data.list[e]);
                if ("" == t.data.result.list.list) r -= 1; else {
                    for (var l in t.data.result.list.list) a.push(t.data.result.list.list[l]);
                    s.setData({
                        refresh: !1
                    });
                }
                s.setData({
                    data: {
                        list: a
                    }
                });
            }
        }));
    }
});