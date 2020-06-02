var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
    }
    return e;
}, t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../network/api"));

Page({
    data: {},
    onLoad: function(e) {
        var t = e.shopId, a = e.workerId;
        this.setData({
            shopId: t
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryStaffDetail({
            id: a
        });
    },
    queryStaffDetail: function(e, a) {
        var s = this;
        t.default.queryStaffDetail(e).then(function(e) {
            if (console.log(e, "++++"), wx.hideLoading(), e && e.data.serviceList > 2) {
                var t = e.data.serviceList;
                s.setData({
                    projectdetail: e.data,
                    serviceList: t.splice(0, 2),
                    allserviceList: t,
                    service: t[0]
                });
            } else s.setData({
                projectdetail: e.data,
                serviceList: e.data.serviceList,
                service: e.data.serviceList.length > 0 ? e.data.serviceList[0] : {},
                showDescExpand: e.data.brief.length > 100,
                descCollspand: e.data.brief.length > 100
            });
            console.log(e, "++++++++++++");
        }).catch(function(e) {
            return console.log(e);
        });
    },
    toggleDescExpand: function() {
        this.setData({
            descCollspand: !this.data.descCollspand
        });
    },
    phoneCall: function(e) {
        var t = this.data.projectdetail.store.tel;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    onShareAppMessage: function(e) {
        return "button" === e.from && console.log(e.target), {
            title: this.data.projectdetail.serverName,
            path: "/pages/services/worker_detail/index?storeId=" + this.data.shopId + "&workerId=" + this.data.projectdetail.id,
            imageUrl: this.data.projectdetail.headImg
        };
    },
    createOrder: function() {
        var t = this.data, a = t.shopId, s = t.projectdetail;
        getApp().setFlash("staff", e({
            storeId: a
        }, s)), wx.navigateTo({
            url: "/pages/services/order_create/index"
        });
    }
});