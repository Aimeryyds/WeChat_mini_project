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
        },
        brandlist: []
    },
    onLoad: function(t) {
        console.log(t), t && this.setData({
            query: a({}, this.data.query, {
                dsId: t.dsId,
                location: t.location,
                dataType: t.dataType
            })
        }), this.querySourseBrands(this.data.query, !0);
    },
    querySourseBrands: function(e, o) {
        var r = this;
        wx.showLoading({
            title: "请稍后"
        }), console.log(e, "query"), t.default.queryDatasourceBrands(e).then(function(t) {
            console.log(t), r.setData({
                brandlist: o ? t.data.data : r.data.brandlist.concat(t.data.data),
                isShow: !0,
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, r.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                })
            }), wx.hideLoading();
        }).catch(function(a) {
            return console.log(a);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(a), 
        this.setData({
            loadingmore: !0
        }), this.querySourseBrands(this.data.query, !1));
    },
    makeStore: function(a) {
        var t = a.currentTarget.dataset.brand;
        console.log(a.currentTarget.dataset), getApp().setFlash("brand", t), wx.navigateTo({
            url: "/pages/storelist/storelist"
        });
    }
});