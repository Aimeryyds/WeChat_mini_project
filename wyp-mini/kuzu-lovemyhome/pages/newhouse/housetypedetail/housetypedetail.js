Page({
    data: {
        housetypeid: "",
        detailData: "",
        albumindex: 1
    },
    onLoad: function(e) {
        var t = e.housetypeid;
        console.log(t), this.getdetailData(t);
    },
    getdetailData: function(e) {
        var t = this;
        wx.request({
            url: "https://appapi.5i5j.com/housetype/detail",
            method: "POST",
            data: {
                houseTypeID: e
            },
            success: function(e) {
                t.setData({
                    detailData: e.data.data
                }), console.log(e.data.data);
            }
        });
    },
    loopchange: function(e) {
        var t = parseInt(e.detail.current) + 1;
        this.setData({
            albumindex: t
        });
    },
    routergo: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.targeturl, a = "/pages/webview/webview?url=" + (t = encodeURIComponent(t));
        wx.navigateTo({
            url: a
        });
    },
    housetypelist: function(e) {
        var t = "/pages/newhouse/housetype/housetype?estateid=" + this.data.detailData.estateInfo.estateID;
        wx.navigateTo({
            url: t
        });
    },
    housetypedetail: function(e) {
        var t = e.currentTarget.dataset.housetypeid;
        console.log(t), wx.navigateTo({
            url: "/pages/newhouse/housetypedetail/housetypedetail?housetypeid=" + t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});