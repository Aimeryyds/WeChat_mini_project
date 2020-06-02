var a = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (a[e] = o[e]);
    }
    return a;
}, t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../network/api"));

Page({
    data: {
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 10
        },
        list: []
    },
    onLoad: function(t) {
        t && this.setData({
            query: a({}, this.data.query, {
                dsId: t.dsId,
                location: t.location,
                dataType: t.dataType
            })
        }), this.queryManjianData(this.data.query, !0);
    },
    onShow: function() {},
    queryManjianData: function(o, e) {
        var n = this;
        t.default.queryManjianList(o).then(function(t) {
            n.setData({
                list: e ? t.data.data : n.data.list.concat(t.data.data),
                isShow: !0,
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, n.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                })
            });
        }).catch(function(a) {
            console.log(a);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(a), 
        this.setData({
            loadingmore: !0
        }), this.queryManjianData(this.data.query, !1));
    }
});