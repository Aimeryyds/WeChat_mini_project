var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../common.js"));

Component({
    behaviors: [ e.default ],
    properties: {
        module: {
            type: Object
        }
    },
    methods: {
        receivecoupon: function(e) {
            console.log(e.detail, "e");
            var o = e.detail, t = o.id, i = o.color;
            this.jump("/pages/coupons/receive_coupon/index?id=" + t + "&color=" + i);
        }
    }
});