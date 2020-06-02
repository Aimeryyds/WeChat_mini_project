var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api"));

Page({
    data: {
        categoryList: [ {
            id: "-1",
            name: "全部商品"
        } ]
    },
    onLoad: function(t) {
        var a = t.storeid, e = t.categoryId;
        wx.showLoading({
            title: "请稍候",
            mask: !0
        }), this.setData({
            categoryId: e
        }), this.queryCategory({
            storeId: a
        });
    },
    queryCategory: function(a) {
        var e = this;
        t.default.getStorecategoryList(a).then(function(t) {
            wx.hideLoading(), e.setData({
                categoryList: e.data.categoryList.concat(t.data.categoryData)
            });
        }).catch();
    },
    handleCheckClassify: function(t) {
        console.log(t.currentTarget.dataset.data, "e");
        var a = t.currentTarget.dataset.data, e = {
            id: a.id,
            name: a.name
        };
        "" == a.id && (e = {
            id: "",
            name: ""
        }), getApp().setFlash("category", e), wx.navigateBack({
            delta: 1
        });
    }
});