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
}(require("../../../network/api.js")), a = require("../../../utils/wxParse/wxParse.js");

Page({
    data: {
        service: {},
        carousel: {
            height: 750,
            images: []
        },
        showSpecModal: !1,
        showPhoneModal: !1
    },
    onLoad: function(e) {
        var t = e.shopId, a = e.serviceId;
        this.setData({
            shopId: t
        }), this.queryServiceDetail({
            id: a
        });
    },
    queryServiceDetail: function(s) {
        wx.showLoading({
            title: "请稍后"
        });
        var i = this;
        t.default.queryProjectDetail(s).then(function(t) {
            wx.hideLoading(), i.setData({
                service: e({}, t.data, {
                    specs: t.data.item
                }),
                "carousel.images": t.data.imgs.map(function(e) {
                    return {
                        imgUrl: e
                    };
                }),
                showDescExpand: t.data.description.length > 100,
                descCollspand: t.data.description.length > 100,
                showWorkersExpand: t.data.personList.length > 2,
                workersCollspand: t.data.personList.length > 2
            }), a.wxParse("content", "html", t.data.detail, i, 5);
        }).catch(function(e) {
            wx.hideLoading();
        });
    },
    toggleDescExpand: function() {
        this.setData({
            descCollspand: !this.data.descCollspand
        });
    },
    toggleWorkersExpand: function() {
        this.setData({
            workersCollspand: !this.data.workersCollspand
        });
    },
    handleLocation: function(e) {
        var t = e.currentTarget.dataset.lat, a = e.currentTarget.dataset.lng;
        t && a && wx.openLocation({
            latitude: parseFloat(t),
            longitude: parseFloat(a),
            scale: 28
        });
    },
    handlePhone: function(e) {
        var t = e.currentTarget.dataset.areanum || "", a = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: t.toString() + a.toString()
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: this.data.service.serviceName,
            path: "/pages/services/service_detail/index?storeId=" + this.data.shopId + "&serviceId=" + this.data.service.id,
            imageUrl: this.data.service.imgs[0]
        };
    },
    toogleSpecDialog: function() {
        this.setData({
            showSpecModal: !0
        });
    },
    hideSpecDialog: function(e) {
        var t = e.detail.service;
        this.setData({
            service: t,
            showSpecModal: !1
        });
    },
    updateSelectedSpecValue: function(e) {
        this.setData({
            selectedSpecValue: e.detail.selectedSpecValue
        });
    },
    updateSelectedSku: function(e) {
        this.setData({
            selectedSku: e.detail.selectedSku
        });
    },
    createOrder: function(e) {
        if (wx.getStorageSync("userinfo").mobile) {
            var t = e.detail.service || this.data.service;
            if (console.log("service", t), t && t.selectedSku) {
                console.log("1111111111");
                var a = t.selectedSku, s = t.selectedSpecValue;
                getApp().setFlash("service", {
                    storeId: t.store.id,
                    id: t.id,
                    serviceName: t.serviceName,
                    servicePrice: a.price,
                    skus: t.skus,
                    serviceImg: t.imgUrl,
                    selectedSku: a,
                    selectedSpecValue: s
                }), this.setData({
                    showSpecModal: !1,
                    service: t
                }), wx.navigateTo({
                    url: "/pages/services/order_create/index"
                });
            } else t && 0 == t.skus.length ? (console.log("2222222222"), getApp().setFlash("service", {
                storeId: t.store.id,
                id: t.id,
                serviceName: t.serviceName,
                servicePrice: t.price,
                serviceImg: t.imgUrl,
                selectedSku: {},
                selectedSpecValue: ""
            }), this.setData({
                showSpecModal: !1
            }), wx.navigateTo({
                url: "/pages/services/order_create/index"
            })) : (console.log("33333333333"), this.setData({
                showSpecModal: !0
            }));
        } else this.setData({
            showPhoneModal: !0,
            url: "/pages/login/login"
        });
    }
});