Component({
    properties: {
        bgColor: {
            type: String,
            value: "blue"
        },
        fontColor: {
            type: String,
            value: "white"
        },
        isShowIcon: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        type: {
            type: String,
            value: "big"
        }
    },
    externalClasses: [ "icon-class" ],
    data: {},
    ready: function() {
        var e = this, t = this.data.type, n = [ "big", "small" ];
        n.indexOf(t) <= -1 && wx.createSelectorQuery().in(this).select(".btn-container").boundingClientRect(function(i) {
            var o = i.width > 140 ? 0 : 1;
            t = n[o], e.setData({
                type: t
            });
        }).exec();
    },
    methods: {
        getuserinfo: function(e) {
            this.triggerEvent("getuserinfo", e);
        }
    }
});