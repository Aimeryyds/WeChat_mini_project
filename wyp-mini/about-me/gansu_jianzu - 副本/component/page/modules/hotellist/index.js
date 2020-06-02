var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../common.js"));

Component({
    behaviors: [ t.default ],
    properties: {
        module: {
            type: Object
        }
    },
    ready: function() {
        console.log("hotellist", this.data);
        var t = wx.getStorageSync("location");
        console.log(t.location, "////////////////////"), this.setData({
            location: t
        });
    },
    data: {},
    methods: {
        gotoDetail: function(t) {
            this.jump("/pages/shop/products/products?storeid=" + t.currentTarget.dataset.id);
        },
        makedataSource: function() {
            this.jump("/pages/hotel/list/index");
        }
    }
});