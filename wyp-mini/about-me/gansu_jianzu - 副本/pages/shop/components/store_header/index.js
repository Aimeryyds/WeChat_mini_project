var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../network/api"));

Component({
    properties: {
        shopId: {
            type: String,
            value: ""
        },
        storeDetail: {
            type: Object,
            value: {}
        }
    },
    data: {},
    attached: function() {
        this.getStoreDetail();
    },
    methods: {
        getStoreDetail: function() {
            var e = this;
            console.log("-------getStoreDetail----aaaaaaaaaaaaaaaaa-", this.data.shopId), wx.showLoading({
                title: "请稍后",
                mask: !0
            }), t.default.getStoreDetail({
                id: this.data.shopId
            }).then(function(t) {
                wx.hideLoading(), e.setData({
                    storeDetail: t.data
                }), e.triggerEvent("setStoreDetail", {
                    store: t.data
                });
            });
        },
        jumpstoredetail: function(t) {
            var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.openevaluate;
            wx.navigateTo({
                url: "/pages/shop/desc/desc?id=" + e + "&openevaluate=" + a
            });
        },
        collectionOn: function(e) {
            var a = this, o = this.data.storeDetail;
            o.hasCollection ? t.default.unfollowStore({
                storeId: o.id
            }).then(function(t) {
                t && 0 == t.status && t.data.result && a.setData({
                    "storeDetail.hasCollection": !1
                });
            }) : t.default.followStore({
                storeId: o.id
            }).then(function(t) {
                t && 0 == t.status && t.data.result && a.setData({
                    "storeDetail.hasCollection": !0
                });
            });
        }
    }
});