function t() {
    wx.navigateBack();
}

function e() {
    return new Promise(function(t, e) {
        wx.createSelectorQuery().select("#bottom-back").boundingClientRect(function(e) {
            t(e.height);
        }).exec();
    });
}

function i(e, i) {
    var n = {
        height: 0,
        prevClientY: 0,
        isDraging: !1,
        dragDirection: ""
    };
    e.context.dragupTouchStart = function(t) {
        n.prevClientY = t.touches[0].clientY, n.height = i, n.isDraging = !0;
    }, e.context.dragupTouchMove = function(t) {
        t.touches || (t.touches = t.originalEvent.touches);
        var i = t.touches[0].clientY, r = i - n.prevClientY;
        if (Math.abs(r) > 2 && (n.dragDirection = r > 0 ? "down" : "up"), !(r > 0 && "up" === n.dragDirection || r < 0 && "down" === n.dragDirection) && (n.prevClientY = i, 
        n.isDraging)) {
            var c = o, a = 0;
            n.height <= c ? (a = .7 * r, e.context.setData({
                "dragup.isDone": !1
            })) : n.height > c && n.height <= 2 * c ? (a = .4 * r, e.context.setData({
                "dragup.isDone": !0
            })) : a = 0 * r, n.height -= a, e.context.setData({
                "dragup.currentDomHeight": n.height
            });
        }
    }, e.context.dragupTouchEnd = function(r) {
        if (n.isDraging) {
            var c = o;
            n.height > c ? t() : e.context.setData({
                "dragup.isDone": !1
            }), e.context.setData({
                "dragup.currentDomHeight": i
            }), n.isDraging = !1;
        }
    };
}

function n(t) {
    this.context = t, this.init();
}

getApp();

var o = 180;

n.prototype.init = function() {
    var t = this;
    e().then(function(e) {
        i(t, e);
    });
}, module.exports = n;