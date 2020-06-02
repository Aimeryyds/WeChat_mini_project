Component({
    properties: {
        customBackReturn: {
            type: Boolean,
            value: !1
        }
    },
    options: {
        multipleSlots: !0
    },
    data: {},
    methods: {
        onTap: function(t) {
            this.triggerEvent("myevent", t);
        },
        backClick: function() {}
    },
    attached: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var s = e.system.indexOf("iOS") > -1;
                t.setData({
                    statusHeight: e.statusBarHeight,
                    navHeight: s ? 44 : 48
                });
            }
        }), t.onTap(this.data.statusHeight / 1.5);
    }
});