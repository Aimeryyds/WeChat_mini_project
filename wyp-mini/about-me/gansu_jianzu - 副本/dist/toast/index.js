module.exports = {
    showZanToast: function(t, a) {
        var s = this;
        console.log(this, t, a);
        var o = this.data.zanToast || {};
        clearTimeout(o.timer), o = {
            show: !0,
            title: t
        }, this.setData({
            zanToast: o
        });
        var e = setTimeout(function() {
            s.clearZanToast();
        }, a || 2e3);
        this.setData({
            "zanToast.timer": e
        });
    },
    clearZanToast: function() {
        var t = this.data.zanToast || {};
        clearTimeout(t.timer), this.setData({
            "zanToast.show": !1
        });
    }
};