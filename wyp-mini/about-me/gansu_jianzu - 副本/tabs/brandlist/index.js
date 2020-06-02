function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var o = arguments[a];
        for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
    }
    return t;
}, o = t(require("../../network/api.js")), e = t(require("../../utils/const.js")), i = t(require("../../utils/notification")), n = t(require("../../utils/location.js"));

Page({
    data: {
        locationSuccess: !0,
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 20
        }
    },
    init: function() {
        var t = this, o = getApp().globalConfig;
        if (o) if (this.setData(a({}, this.data, {
            globalConfig: o
        })), o.isEnableLocation) {
            var e = getApp().globalData.location;
            e && e.location ? (this.setData({
                location: e
            }), this.queryBrandList({
                pageNo: 1,
                pageSize: 20
            }, !0)) : (wx.showLoading({
                title: "定位中..."
            }), n.default.ensureLocation(o).then(function(t) {
                wx.hideLoading();
            }).catch(function(a) {
                console.log(a), t.setData({
                    locationSuccess: !1
                }), wx.hideLoading();
            }));
        } else wx.showLoading({
            title: "请稍候"
        }), this.queryBrandList({
            pageNo: 1,
            pageSize: 20
        }, !0);
    },
    onLoad: function(t) {
        var a = this;
        i.default.register(e.default.action.QUERY_CONFIG_SUCCESS, this, function(t) {
            a.init();
        }), i.default.register(e.default.action.LOCATION_CHANGED, this, function(t) {
            a.setData({
                location: t.data,
                locationSuccess: !0
            }), wx.showLoading({
                title: "请稍候"
            }), a.queryBrandList({
                pageNo: 1,
                pageSize: 20
            }, !0);
        }), this.init();
    },
    queryBrandList: function(t, a) {
        var e = this;
        o.default.getBrandListByLocation(t).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), e.setData({
                list: a ? t.data.data : e.data.list.concat(t.data.data),
                isShow: !0,
                loadmore: t.data.nextCursor > 0,
                loadingmore: !1,
                query: {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                }
            }), console.log(t, "++++++++++++");
        }).catch(function(t) {
            return console.log(t);
        });
    },
    handlestorelist: function(t) {
        var a = t.currentTarget.dataset.brand;
        getApp().setFlash("brand", a), wx.navigateTo({
            url: "/pages/storelist/storelist"
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(t), 
        this.setData({
            loadingmore: !0
        }), this.queryBrandList(this.data.query, !1));
    },
    onUnload: function() {
        i.default.remove(e.default.action.QUERY_CONFIG_SUCCESS, this), i.default.remove(e.default.action.LOCATION_CHANGED, this);
    }
});