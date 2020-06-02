var t = getApp(), a = require("../../utils/extraMap.js");

Page({
    data: {
        keyword: "",
        headTipColor: "",
        textColor: "",
        suggest: []
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    inputSearch: function(e) {
        var i = this;
        this.setData({
            keyword: e.detail.value
        }), e.detail.value.length > 0 ? a.getSuggest(e.detail.value, function(t) {
            i.setData({
                suggest: t
            });
        }, t.globalData.areaCity) : this.setData({
            suggest: []
        });
    },
    toMap: function() {
        wx.navigateBack({});
    },
    toTargetMap: function(t) {
        var a = t.currentTarget.dataset.aim;
        console.log(a), wx.redirectTo({
            url: "../map/targetMap/targetMap?aim=" + JSON.stringify(a)
        });
    }
});