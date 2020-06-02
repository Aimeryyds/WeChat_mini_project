var a = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (a[o] = e[o]);
    }
    return a;
}, t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../network/api"));

Page({
    data: {
        statusType: [ "全部", "充值", "消费" ],
        currentType: 0,
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 8,
            status: -1
        }
    },
    onLoad: function(e) {
        var o = this;
        t.default.queryBalance().then(function(a) {
            console.log(a, "++++"), wx.hideLoading(), o.setData({
                balanceData: a.data
            });
        }).catch(function(a) {
            return console.log(a);
        }), this.balanceDetailList(a({}, this.data.query), !0);
    },
    balanceDetailList: function(e, o) {
        var n = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.balanceDetailList(e).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), n.setData({
                balanceList: o ? t.data.data : n.data.balanceList.concat(t.data.data),
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, n.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                })
            }), console.log(t, "++++++++++++");
        }).catch(function(a) {
            return console.log(a);
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.balanceDetailList(a({}, this.data.query), !1));
    },
    statusTap: function(t) {
        var e = t.currentTarget.dataset.index;
        console.log("curType---\x3e", e);
        var o = 0 == e ? -1 : 1 == e ? 1 : 2;
        console.log("status---\x3e", o), this.setData({
            currentType: e,
            "query.status": o,
            "query.pageNo": 1
        }), this.balanceDetailList(a({}, this.data.query), !0);
    }
});