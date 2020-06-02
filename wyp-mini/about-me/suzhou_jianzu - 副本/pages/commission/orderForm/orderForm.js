var t = require("../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        index: 0,
        status: "",
        data1: "",
        totalprice: ""
    },
    tabClick: function(e) {
        var s = e.currentTarget.dataset.index;
        this.setData({
            index: s
        }), console.log(s);
        var o = this, r = o.data.index;
        0 == s && (r = ""), t.sendRequest({
            method: "GET",
            url: "?r=wxapp.commission.order&utoken=" + a,
            data: {
                status: r
            },
            success: function(t) {
                var a = t.data.result.totalprice, e = t.data.result.list;
                "" == a && (a = "0.00"), o.setData({
                    data1: e,
                    totalprice: a
                });
            }
        });
    },
    onLoad: function(e) {
        a = wx.getStorageSync("utoken");
        var s = this;
        t.sendRequest({
            method: "GET",
            url: "?r=wxapp.commission.order&utoken=" + a,
            showToast: !1,
            success: function(t) {
                console.log(t);
                var a = t.data.result.totalprice, e = t.data.result.list;
                "" == a && (a = "0.00"), s.setData({
                    data1: e,
                    totalprice: a,
                    loading: !1
                });
            }
        });
    }
});