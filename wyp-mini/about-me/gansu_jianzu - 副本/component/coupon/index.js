Component({
    properties: {
        type: String,
        coupon: {
            type: Object
        },
        color: {
            type: String
        }
    },
    data: {},
    methods: {
        bindCoupon: function(t) {
            var o = t.currentTarget.dataset.coupon.id, e = this.data.color, r = void 0 === e ? "" : e;
            this.triggerEvent("receivecoupon", {
                id: o,
                color: r
            });
        }
    }
});