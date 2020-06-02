Page({
    data: {
        housetype: "",
        listctn: "",
        selectIndex: 0
    },
    onLoad: function(t) {
        console.log(t), this.getHousetypeData(t);
    },
    getHousetypeData: function(t) {
        var e = this;
        wx.request({
            url: "https://appapi.5i5j.com/appapi/housetype/index",
            method: "POST",
            data: {
                estateID: t.estateid
            },
            success: function(t) {
                console.log(t.data.data.houseType), e.setData({
                    housetype: t.data.data.houseType,
                    listctn: t.data.data.houseType[0]
                });
            }
        });
    },
    selectType: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.housetype[e];
        this.setData({
            selectIndex: e,
            listctn: a
        });
    },
    toDetailPage: function(t) {
        var e = t.currentTarget.dataset.housetypeid;
        console.log(e), wx.navigateTo({
            url: "/pages/newhouse/housetypedetail/housetypedetail?housetypeid=" + e
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