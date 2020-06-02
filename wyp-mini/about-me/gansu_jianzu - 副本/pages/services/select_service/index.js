function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../network/api")), i = e(require("../../../utils/notification.js")), n = e(require("../../../utils/const.js"));

Page({
    data: {
        serviceId: 0,
        serviceList: []
    },
    onLoad: function(e) {
        var i = this, n = e.staffId, a = e.storeId, r = e.serviceId;
        this.setData({
            serviceId: r
        }), wx.showLoading({
            title: "请稍候"
        }), t.default.querySelectProjectList({
            storeId: a,
            staffId: n
        }).then(function(e) {
            wx.hideLoading(), i.setData({
                serviceList: e.data
            });
        }).catch(function(e) {
            wx.hideLoading(), console.log("querySelectProjectList error", e);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    handleSelectService: function(e) {
        console.log("handleSelectService");
        var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.name, r = e.currentTarget.dataset.price, o = e.currentTarget.dataset.img;
        i.default.post(n.default.action.YUYUE_SERVICE, {
            serviceId: t,
            serviceName: a,
            servicePrice: r,
            serviceImg: o
        }), wx.navigateBack();
    }
});