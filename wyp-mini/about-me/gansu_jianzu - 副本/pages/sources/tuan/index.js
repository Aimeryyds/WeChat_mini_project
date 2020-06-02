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
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 10
        }
    },
    onLoad: function(a) {
        var t = this.data.query;
        a.dsId && "undefined" !== a.dsId && (t.dsId = a.dsId), a.location && "undefined" !== a.location && (t.location = a.location), 
        a.dataType && "undefined" !== a.dataType && (t.dataType = a.dataType), this.setData({
            query: t
        }), this.queryTuanList(this.data.query, !0);
    },
    onReady: function() {},
    onShow: function() {},
    queryTuanList: function(e, o) {
        var n = this;
        wx.showLoading({
            title: "加载中"
        }), t.default.queryDatasourceTuan(e).then(function(t) {
            console.log(t, "+++"), wx.hideLoading(), n.setData({
                list: o ? t.data.data : n.data.list.concat(t.data.data),
                isShow: !0,
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, n.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                })
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    makeTuan: function(a) {
        console.log(a.currentTarget.dataset);
        var t = a.currentTarget.dataset.tuan;
        wx.navigateTo({
            url: "/pages/products/show/show?id=" + t.id
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(a), 
        this.setData({
            loadingmore: !0
        }), this.queryTuanList(this.data.query, !1));
    }
});