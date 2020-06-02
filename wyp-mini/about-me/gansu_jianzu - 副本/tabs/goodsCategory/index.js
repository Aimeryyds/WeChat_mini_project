var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../network/api.js"));

Page({
    data: {
        brandList: [],
        currentIndex: 0
    },
    onLoad: function(t) {
        wx.showLoading({
            title: "请稍后"
        }), this.queryList();
    },
    handleCheckClassify: function(t) {
        this.setData({
            currentCateIndex: t.currentTarget.dataset.id
        }), wx.navigateTo({
            url: "/pages/sources/products/index?categoryIds=" + t.currentTarget.dataset.id
        });
    },
    handleCheckBrand: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            currentIndex: e
        });
    },
    queryList: function() {
        var e = this;
        t.default.queryIndexCategory().then(function(t) {
            console.log(t, "res"), wx.hideLoading(), e.setData({
                brandList: t.data
            });
        });
    }
});