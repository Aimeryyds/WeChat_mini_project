var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api.js"));

Page({
    data: {
        albums: [],
        pics: []
    },
    onLoad: function(t) {
        var n = t.shopId;
        this.setData({
            shopId: n
        }), this.queryAlbumsList(n);
    },
    queryAlbumsList: function(n) {
        var a = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.queryAlbumsList({
            storeId: n,
            pageNo: 1,
            pageSize: 999
        }).then(function(t) {
            wx.hideLoading(), a.setData({
                albums: t.data.data,
                pics: t.data.data.map(function(t) {
                    return t.url;
                })
            });
        });
    },
    onTapPic: function(t) {
        console.log(t), wx.previewImage({
            current: t.currentTarget.dataset.src,
            urls: this.data.pics
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});