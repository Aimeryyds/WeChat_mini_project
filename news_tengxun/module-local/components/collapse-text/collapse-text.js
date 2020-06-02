Component({
    properties: {
        text: {
            type: String,
            value: ""
        },
        linecount: {
            type: Number,
            value: 3
        },
        lineheight: {
            type: Number,
            value: 25
        }
    },
    data: {
        needUnfold: !1
    },
    methods: {
        toggletitle: function(t) {
            this.setData({
                needUnfold: t.detail.linecount >= 3.5
            });
        },
        unfoldTap: function(t) {
            this.setData({
                needUnfold: !1
            }), this.triggerEvent("textunfoldtap");
        }
    },
    ready: function(t) {}
});