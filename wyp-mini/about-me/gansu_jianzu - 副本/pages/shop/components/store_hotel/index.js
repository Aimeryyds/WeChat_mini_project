function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a = t(require("../../../../utils/util.js")), o = t(require("../../../../network/api"));

Component({
    properties: {
        shopId: {
            type: String,
            value: ""
        }
    },
    data: {
        indicatorDots: !1,
        autoplay: !1,
        interval: 5e3,
        duration: 1e3
    },
    attached: function() {
        this.getStoreDetail();
    },
    detached: function() {
        console.log("---酒店首页组件-------detached----------------");
    },
    methods: {
        queryHomePage: function() {
            var t = this;
            wx.showLoading({
                title: "请稍后"
            });
            var i = this.data.inTimeObj, r = "";
            r = i && i.startDate ? a.default.timestampToYMD(i.startDate) : a.default.getcurrentTimeYMD(), 
            o.default.queryHomePage({
                id: this.data.shopId,
                inTime: r
            }).then(function(a) {
                wx.hideLoading(), t.setData({
                    hotelPageData: a.data,
                    store: a.data,
                    isShow: !0
                }), a.data.roomList.length > 0 && t.setData(e({}, "hotelPageData.roomList[0].checked", !0));
            }).catch(function(t) {
                return console.log(t);
            });
        },
        handleChangeTime: function(t) {
            console.log(t, "e"), this.setData({
                inTimeObj: t.detail
            }, function() {
                this.queryHomePage();
            });
        },
        toggleOn: function(t) {
            console.log(t);
            var a = t.currentTarget.dataset, o = a.index, i = a.item;
            console.log(o, i, "当前的第呢些"), this.setData(e({}, "hotelPageData.roomList[" + o + "].checked", !i.checked));
        },
        handleStoreMap: function(t) {
            console.log(t, "llllllllllllllllllllllllll");
            var e = t.currentTarget.dataset.hotelpagedata;
            wx.openLocation({
                name: e.brandName,
                address: e.detailAddress,
                latitude: parseFloat(e.lat),
                longitude: parseFloat(e.lng),
                success: function(t) {
                    console.log(t);
                }
            });
        },
        gotoHomeDetail: function(t) {
            var e = t.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/hotel/room_detail/index?id=" + e
            });
        },
        toOrder: function(t) {
            var e = wx.getStorageSync("userinfo");
            if (console.log("userinfo", e), e && e.mobile) {
                var a = this.selectComponent("#hotel-time");
                getApp().setFlash("inTimeObj", {
                    startDate: a.data.startDate || 0,
                    endDate: a.data.endDate,
                    statistics_data: a.data.statistics_data,
                    inTime_data: a.data.inTime_data,
                    leaveTime_data: a.data.leaveTime_data
                }), wx.navigateTo({
                    url: "/pages/hotel/order_create/index?roomId=" + t.currentTarget.dataset.roomid + "&strategyId=" + t.currentTarget.dataset.strategyid + "&storeName=" + t.currentTarget.dataset.strategyid + "&roomPrice=" + t.currentTarget.dataset.strategyid
                });
            } else this.setData({
                showModal: !0,
                url: "/pages/login/login"
            });
        },
        getStoreDetail: function() {
            return this.data.store;
        }
    }
});