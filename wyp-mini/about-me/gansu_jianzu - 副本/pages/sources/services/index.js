var a = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
    }
    return a;
}, e = function(a) {
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
            pageSize: 20
        },
        servicesList: []
    },
    onLoad: function(a) {
        var e = getApp().globalConfig;
        this.setData({
            isShowStoreName: e.isShowStoreName
        }), a.location && this.setData({
            "query.location": a.location
        }), a.dsId && this.setData({
            "query.dsId": a.dsId
        }), a.dataType && this.setData({
            "query.dataType": a.dataType
        }), a.type && this.setData({
            type: a.type
        }), a.categoryIds && this.setData({
            "query.cids": a.categoryIds
        }), a.from && this.setData({
            from: a.from,
            navToDetail: !0
        }), "group" == this.data.type ? this.queryGroupServiveList(this.data.query, !0) : this.queryServiveList(this.data.query, !0);
    },
    queryServiveList: function(t, i) {
        var r = this, o = this.data, s = o.from, d = o.navToDetail;
        wx.showLoading({
            title: "加载中"
        }), e.default.queryDatasourceProjects(t).then(function(e) {
            if (wx.hideLoading(), r.setData({
                servicesList: i ? e.data.data : r.data.servicesList.concat(e.data.data),
                loadmore: e.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, r.data.query, {
                    pageNo: e.data.nextCursor,
                    pageSize: e.data.pageSize
                })
            }), "page" == s && d && e.data.data && 1 == e.data.data.length) {
                var t = e.data.data[0];
                r.setData({
                    navToDetail: !1,
                    isShow: !1
                }), wx.redirectTo({
                    url: "/pages/services/service_detail/index?shopId=" + t.storeId + "&serviceId=" + t.id
                });
            } else r.setData({
                isShow: !0,
                navToDetail: !1
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    queryGroupServiveList: function(t, i) {
        var r = this;
        wx.showLoading({
            title: "加载中"
        }), e.default.queryGroupService(t).then(function(e) {
            wx.hideLoading(), r.setData({
                isShow: !0,
                servicesList: i ? e.data.data : r.data.servicesList.concat(e.data.data),
                loadmore: e.data.nextCursor > 0,
                loadingmore: !1,
                query: a({}, r.data.query, {
                    pageNo: e.data.nextCursor,
                    pageSize: e.data.pageSize
                })
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(a), 
        this.setData({
            loadingmore: !0
        }), "group" == this.data.type ? this.queryGroupServiveList(this.data.query, !1) : this.queryServiveList(this.data.query, !1));
    },
    makeservice: function(a) {
        var e = a.currentTarget.dataset.service;
        wx.navigateTo({
            url: "/pages/services/service_detail/index?shopId=" + e.storeId + "&serviceId=" + e.id
        });
    }
});