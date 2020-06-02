!function(e) {
    e && e.__esModule;
}(require("../../../../network/api"));

Component({
    properties: {
        searchUrl: {
            type: String,
            value: "/pages/shop/search/search"
        },
        q: {
            type: String,
            value: "搜索店内商品"
        },
        openType: {
            type: String,
            value: "navigate"
        },
        shopId: {
            type: Number
        }
    },
    data: {},
    attached: function() {},
    methods: {
        jumpstoredetail: function(e) {
            var t = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/shop/desc/desc?id=" + t
            });
        }
    }
});