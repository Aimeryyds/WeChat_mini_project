function t(t) {
    this.context = t, this.init();
}

getApp();

t.prototype.onPageScroll = function(t) {
    var o = this;
    o.scrollState && (t > o.scrollState.prevScrollTop + 20 ? o.context.setData({
        shareBarHidden: !0
    }) : t < o.scrollState.prevScrollTop - 20 && o.context.setData({
        shareBarHidden: !1
    }), o.scrollState.prevScrollTop = t);
}, t.prototype.init = function() {
    this.scrollState = {
        prevScrollTop: 0
    };
}, module.exports = t;