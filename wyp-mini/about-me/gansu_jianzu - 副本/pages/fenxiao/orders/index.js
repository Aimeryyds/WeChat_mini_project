var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var o = arguments[a];
        for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
    }
    return t;
}, a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api"));

Page({
    data: {
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 10
        }
    },
    onLoad: function(t) {
        this.distributionOrderList(this.data.query, !0);
    },
    distributionOrderList: function(o, e) {
        var r = this;
        wx.showLoading({
            title: "请稍后"
        }), a.default.distributionOrderList(o).then(function(a) {
            console.log(a, "++++"), wx.hideLoading(), r.setData({
                orderList: e ? a.data.data : r.data.orderList.concat(a.data.data),
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: t({}, r.data.query, {
                    pageNo: a.data.nextCursor,
                    pageSize: a.data.pageSize
                })
            }), console.log(a, "++++++++++++");
        }).catch(function(t) {
            return console.log(t);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.distributionOrderList(t({}, this.data.query), !1));
    }
});