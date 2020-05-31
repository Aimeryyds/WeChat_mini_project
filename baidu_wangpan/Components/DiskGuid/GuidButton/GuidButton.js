Component({
    properties: {
        guideText: {
            type: String,
            value: ""
        },
        isShow: {
            type: Boolean,
            value: !1
        },
        top: {
            type: Number,
            value: 100
        }
    },
    methods: {
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        show: function() {
            var t = this;
            this.setData({
                isShow: !0
            }), setTimeout(function() {
                t.hide();
            }, 5e3);
        }
    }
});