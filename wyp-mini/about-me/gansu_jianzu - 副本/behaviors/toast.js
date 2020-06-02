module.exports = Behavior({
    behaviors: [],
    properties: {
        title: {
            type: String
        },
        timeout: {
            type: Number
        }
    },
    data: {
        myBehaviorData: {}
    },
    onLoad: function() {},
    attached: function() {},
    methods: {
        showToast: function(t, a) {
            var e = this, o = this.data.toast || {};
            clearTimeout(o.timer), o = {
                show: !0,
                title: t
            }, this.setData({
                toast: o
            });
            var s = setTimeout(function() {
                e.clearToast();
            }, a || 2e3);
            this.setData({
                "toast.timer": s
            });
        },
        clearToast: function() {
            var t = this.data.toast || {};
            clearTimeout(t.timer), this.setData({
                "toast.show": !1
            });
        }
    }
});