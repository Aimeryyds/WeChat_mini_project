var t = require("../../../utils/server"), o = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        index: 0,
        commissioncount: "",
        status: ""
    },
    tabClick: function(a) {
        console.log(a);
        var s = a.currentTarget.dataset.index;
        this.setData({
            index: s
        }), console.log(s);
        var e = this.data.index;
        0 == e && (e = "");
        var n = this;
        t.sendRequest({
            url: "?r=wxapp.commission.log&utoken=" + o,
            data: {
                status: e
            },
            success: function(t) {
                console.log(t);
                var o = t.data.result.list;
                console.log(o);
                var a = t.data.result.commissioncount;
                n.setData({
                    data: o,
                    commissioncount: a
                });
            }
        });
    },
    detailClick: function(t) {
        console.log(t.currentTarget.id), wx.navigateTo({
            url: "../WithdrawDetail/WithdrawDetail?id=" + t.currentTarget.id
        });
    },
    onLoad: function(a) {
        o = wx.getStorageSync("utoken");
        var s = this;
        t.sendRequest({
            url: "?r=wxapp.commission.log&utoken=" + o,
            showToast: !1,
            data: "",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t);
                var o = t.data.result.list;
                console.log(o);
                var a = t.data.result.commissioncount;
                s.setData({
                    loading: !1,
                    data: o,
                    commissioncount: a
                });
            }
        });
    }
});