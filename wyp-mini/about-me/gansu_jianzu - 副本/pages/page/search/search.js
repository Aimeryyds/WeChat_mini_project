function t(t, e) {
    var r = {};
    for (var a in t) e.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
    return r;
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
}, r = function() {
    function t(t, e) {
        var r = [], a = !0, o = !1, n = void 0;
        try {
            for (var i, s = t[Symbol.iterator](); !(a = (i = s.next()).done) && (r.push(i.value), 
            !e || r.length !== e); a = !0) ;
        } catch (t) {
            o = !0, n = t;
        } finally {
            try {
                !a && s.return && s.return();
            } finally {
                if (o) throw n;
            }
        }
        return r;
    }
    return function(e, r) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/es6-promise.min.js")), o = require("../../../network/api");

Page({
    data: {
        tabs: [ {
            title: "全部",
            current: !0
        }, {
            title: "店铺"
        } ],
        keyword: "",
        currentTab: 0,
        products: {},
        stores: {}
    },
    onLoad: function(t) {},
    onTabSwitch: function(t) {
        var e = t.currentTarget.dataset.index, r = this.data.tabs;
        console.log(e, r), r.forEach(function(t, r) {
            t.current = e == r;
        }), this.setData({
            tabs: r,
            currentTab: e
        });
    },
    onSearch: function(t) {
        var e = this;
        wx.showLoading({
            mask: !0,
            title: "请稍后"
        }), this.setData({
            keyword: t.detail.value
        });
        var n = {
            keyword: t.detail.value,
            sort: "sales:descend"
        };
        a.default.all([ (0, o.queryGoodsProperties)(n), (0, o.queryIndexGoods)(n), (0, o.queryIndexStores)(n) ]).then(function(t) {
            wx.hideLoading();
            var a = r(t, 3), o = a[0], n = a[1], i = a[2];
            console.log(t), e.setData({
                serverTime: n.serverTime,
                filters: o.data,
                products: n.data,
                stores: i.data
            });
        }).catch(function(t) {
            wx.hideLoading(), console.log(t);
        });
    },
    handleQueryProducts: function(r) {
        var a = this;
        wx.showLoading({
            mask: !0,
            title: "请稍后"
        });
        var n = r.detail, i = n.sort, s = n.query, d = this.data.keyword, c = e({
            keyword: d,
            sort: i
        }, s), u = this.data.products;
        (0, o.queryIndexGoods)(c).then(function(r) {
            wx.hideLoading();
            var o = r.data;
            t(r, [ "data" ]);
            console.log("+++++++++++++++,--------------"), o.pageNo > 1 ? a.setData({
                products: e({}, o, {
                    data: u.data.concat(o.data)
                })
            }) : a.setData({
                products: o
            });
        }).catch(function(t) {
            wx.hideLoading(), console.log(t);
        });
    },
    handleQueryStores: function(r) {
        var a = this;
        wx.showLoading({
            mask: !0,
            title: "请稍后"
        });
        var n = r.detail.sort, i = {
            keyword: this.data.keyword,
            sort: n
        }, s = this.data.stores;
        (0, o.queryIndexStores)(i).then(function(r) {
            wx.hideLoading();
            var o = r.data;
            t(r, [ "data" ]);
            o.pageNo > 1 ? a.setData({
                stores: e({}, o, {
                    data: s.data.concat(o)
                })
            }) : a.setData({
                stores: o
            });
        }).catch(function(t) {
            wx.hideLoading(), console.log(t);
        });
    },
    makeproject: function(t) {
        var e = t.currentTarget.dataset.project;
        wx.redirectTo({
            url: "/pages/services/service_detail/index?shopId=" + e.storeId + "&serviceId=" + e.id
        });
    }
});