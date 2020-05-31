Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.vipApi = void 0;

var e = require("../../netdisk_utils/wxRequestApi.js"), r = {
    getProductListApi: "rest/2.0/membership/product?method=get",
    placeOrderApi: "rest/2.0/membership/product?method=purchase",
    getOrderPayInfoApi: "rest/2.0/membership/order?method=query"
};

exports.vipApi = {
    getProductList: function(t) {
        return (0, e.wxReq)(r.getProductListApi, t, "GET");
    },
    placeOrder: function(t) {
        return (0, e.wxReq)(r.placeOrderApi, t, "GET");
    },
    getOrderPayInfo: function(t) {
        return (0, e.wxReq)(r.getOrderPayInfoApi, t, "GET");
    }
};