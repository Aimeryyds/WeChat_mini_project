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
        query: {
            pageNo: 1,
            pageSize: 20
        },
        couponList: []
    },
    onLoad: function(a) {
        a.dsId && this.setData({
            "query.dsId": a.dsId
        }), a.dataType && this.setData({
            "query.dataType": a.dataType
        }), a.color && this.setData({
            couponcolor: a.color
        }), a.from && this.setData({
            from: a.from,
            navToDetail: !0
        }), this.queryCouponList(this.data.query, !0);
    },
    queryCouponList: function(t, e) {
        var r = this;
        wx.showLoading({
            title: "加载中"
        });
        var n = this.data, i = n.from, s = n.navToDetail;
        o.default.queryDatasourceCoupon(t).then(function(o) {
            if (console.log(o, "res"), wx.hideLoading(), r.setData({
                couponList: e ? o.data.data : r.data.couponList.concat(o.data.data),
                loadmore: o.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, r.data.query, {
                    pageNo: o.data.nextCursor,
                    pageSize: o.data.pageSize
                })
            }), "page" == i && s && o.data.data && 1 == o.data.data.length) {
                console.log("+++++++++++++++++++++++++-----------------------");
                var t = o.data.data[0];
                r.setData({
                    navToDetail: !1,
                    isShow: !1
                }), wx.redirectTo({
                    url: "/pages/coupons/receive_coupon/index?id=" + t.id + "&color=" + r.data.couponcolor || ""
                });
            } else r.setData({
                isShow: !0,
                navToDetail: !1
            });
            console.log(o, "++++++++++++");
        }).catch(function(a) {
            return console.log(a);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore && !this.data.loadingmore), this.data.loadmore && !this.data.loadingmore && (console.log(a), 
        this.setData({
            loadingmore: !0
        }), this.queryCouponList(this.data.query, !1));
    },
    choosecoupon: function(a) {
        console.log(a.currentTarget.dataset, "e");
        var o = a.currentTarget.dataset.item;
        wx.navigateTo({
            url: "/pages/coupons/receive_coupon/index?id=" + o.id + "&color=" + this.data.couponcolor || ""
        });
    }
});