var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../network/api"));

Page({
    data: {
        height: 100,
        isShow: !1,
        showDialog: !1
    },
    onLoad: function(a) {
        var e = this;
        console.log(a);
        var o = {
            brandId: a.id,
            flag: 1
        };
        wx.showLoading({
            title: "加载中"
        }), t.default.getStoreListByLocation(o).then(function(t) {
            console.log(t.data.data, "++++"), wx.hideLoading();
            var a = t.data.data.map(function(t) {
                return {
                    iconPath: "/images/tab/marker.png",
                    id: t.id,
                    latitude: t.lat,
                    longitude: t.lng,
                    title: t.storeName,
                    openTimeJson: t.openTimeJson,
                    tel: t.tel,
                    detailAddress: "" + t.detailAddress,
                    brandName: t.brandName
                };
            });
            e.setData({
                markers: a,
                firstMaker: a[0],
                includePoints: a,
                isShow: !0
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    onReady: function() {
        this.setData({
            markers: this.data.markers,
            includePoints: this.data.includePoints,
            firstMaker: this.data.firstMaker
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    markertap: function(t) {
        var a = this;
        console.log(t.markerId), this.data.markers.map(function(e) {
            e.id == t.markerId && a.setData({
                store: e
            });
        });
        var e = 83 - 4 * this.data.store.openTimeJson.length;
        this.setData({
            showDialog: !0,
            height: e
        });
    },
    createmap: function() {
        var t = this.data.store;
        wx.openLocation({
            name: t.title,
            address: t.detailAddress,
            latitude: parseFloat(t.latitude),
            longitude: parseFloat(t.longitude),
            success: function(t) {
                console.log(t);
            }
        });
    },
    makephone: function() {
        var t = this.data.store.tel;
        wx.makePhoneCall({
            phoneNumber: t
        });
    }
});