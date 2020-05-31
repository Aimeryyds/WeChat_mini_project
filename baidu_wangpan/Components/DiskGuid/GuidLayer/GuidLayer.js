Component({
    properties: {
        top: {
            type: Number,
            value: 100
        },
        isShow: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        show: function() {
            this.setData({
                isShow: !0
            });
        }
    }
});