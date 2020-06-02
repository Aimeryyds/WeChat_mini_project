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
        wx.showLoading({
            title: "请稍后"
        }), this.queryBrandList(this.data.query, !0);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    queryBrandList: function(o, a) {
        var e = this;
        t.default.getBrandListByLocation(o).then(function(t) {
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
    makeproduct: function(t) {
        console.log(t.currentTarget.dataset.item);
        var o = t.currentTarget.dataset.item;
        getApp().setFlash("brand", o), wx.navigateTo({
            url: "/pages/storelist/storelist"
        });
    },
    lower: function(t) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (console.log(t), 
        this.setData({
            loadingmore: !0
        }), this.queryBrandList(this.data.query, !1));
    }
};