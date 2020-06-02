Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../network/api"));

exports.default = {
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "在线地图"
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = getApp().globalData.location;
        t && t.location && (this.setData({
            cityName: t.location
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryBrandList(this.data.query, !0));
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    queryBrandList: function(a, o) {
        var e = this;
        wx.showLoading({
            title: "加载中"
        }), t.default.getBrandListByLocation(a).then(function(t) {
            console.log(t, "++++"), wx.hideLoading(), e.setData({
                list: o ? t.data.data : e.data.list.concat(t.data.data),
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
    makemap: function(t) {
        console.log(t.currentTarget.dataset.item);
        var a = t.currentTarget.dataset.item;
        wx.navigateTo({
            url: "/pages/brandmap/brandmap?id=" + a.id + "&title=" + a.brandName
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(t), 
        this.setData({
            loadingmore: !0
        }), this.queryBrandList(this.data.query, !1));
    }
};