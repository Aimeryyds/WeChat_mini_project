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
        openType: {
            type: String,
            value: ""
        },
        parameter: {
            type: String,
            value: ""
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
        },
        isShade: {
            type: Boolean,
            value: !1
        }
    },
    externalClasses: [ "icon-class" ],
    data: {},
    ready: function() {
        var e = this, t = this.data.type, a = [ "big", "small", "mini" ];
        a.indexOf(t) <= -1 && wx.createSelectorQuery().in(this).select(".btn-container").boundingClientRect(function(n) {
            var i = n.width > 140 ? 0 : 1;
            t = a[i], e.setData({
                type: t
            });
        }).exec();
    },
    methods: {
        tap: function() {
            this.triggerEvent("action");
        }
    }
});