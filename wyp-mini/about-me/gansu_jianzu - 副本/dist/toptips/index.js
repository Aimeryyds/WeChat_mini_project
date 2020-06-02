module.exports = {
    showZanTopTips: function() {
        var t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = this.data.zanTopTips || {};
        e.timer && (clearTimeout(e.timer), e.timer = null), "number" == typeof o && (o = {
            duration: o
        }), o = Object.assign({
            duration: 3e3
        }, o);
        var n = setTimeout(function() {
            t.setData({
                "zanTopTips.show": !1,
                "zanTopTips.timer": null
            });
        }, o.duration);
        this.setData({
            zanTopTips: {
                show: !0,
                content: i,
                options: o,
                timer: n
            }
        });
    }
};