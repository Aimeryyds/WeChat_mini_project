var a = Object.assign || function(a) {
    for (var o = 1; o < arguments.length; o++) {
        var t = arguments[o];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (a[e] = t[e]);
    }
    return a;
}, o = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../network/api"));

Page({
    data: {
        wdRecordData: [],
        oadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 10
        }
    },
    onLoad: function(a) {
        this.withdrawRecord(this.data.query, !0);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    withdrawRecord: function(t, e) {
        var n = this;
        console.log(t, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"), o.default.withdrawRecord(t).then(function(o) {
            console.log(o, "++++"), wx.hideLoading(), n.setData({
                wdRecordData: e ? o.data.data : n.data.wdRecordData.concat(o.data.data),
                isShow: !0,
                loadmore: o.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, n.data.query, {
                    pageNo: o.data.nextCursor,
                    pageSize: o.data.pageSize
                })
            });
            var t = n.data.wdRecordData.map(function(a) {
                return a.cardNo.substr(-4);
            });
            console.log(t, "minCard");
            for (var r = [], d = 0; d < n.data.wdRecordData; d++) r[d] = !1;
            n.setData({
                toggle: r,
                minCard: t
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.withdrawRecord(this.data.query, !1));
    },
    showOn: function(a) {
        console.log(a, "]]]]]]]]]]]]]]]]]]]]");
        var o = a.currentTarget.dataset.index, t = this.data.toggle;
        t[o] = !t[o], this.setData({
            toggle: t
        });
    }
});