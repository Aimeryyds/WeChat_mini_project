var t = !1, e = !1, u = 0, i = 0;

module.exports = {
    touchStart: function(e) {
        t = !1;
    },
    touchEnd: function(e) {
        t = !0;
    },
    turnScroll: function(t) {
        e = !0, clearTimeout(i), i = setTimeout(function() {
            e = !1;
        }, 500);
        var u = t.detail;
        this.setData({
            ulen: u.scrollWidth,
            moveCurr: u.scrollLeft
        });
    },
    goFun: function(i) {
        var r = i.currentTarget.dataset, n = this.data.moveCurr, o = this.data.ulen, a = this.data.seeWidth;
        if (e && t && r.len > 1 && n > o - a - 11 && r.url && r.url.length > 0) {
            if (o < a) return !1;
            clearTimeout(u), u = setTimeout(function() {
                wx.navigateTo({
                    url: r.url + "?building_id=" + r.tid
                });
            }, 300);
        } else clearTimeout(u);
    }
};