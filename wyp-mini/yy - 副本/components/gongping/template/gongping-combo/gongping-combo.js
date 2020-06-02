var t = {
    isEmptyObject: function(t) {
        var e = void 0;
        for (e in t) return !1;
        return !0;
    }
}, e = {
    shotFlage: !1,
    acceptQueue: [],
    cacheQueue: [],
    cacheQueueMaxLen: 20,
    dataA: {},
    dataB: {},
    callbackA: null,
    callbackB: null,
    init: function(t, e) {
        var a = this;
        t && (a.callbackA = t), e && (a.callbackB = e);
    },
    destory: function() {
        var t = this;
        t.dataA = {}, t.dataB = {}, t.cacheQueue = [], t.shotFlage = !1;
    },
    accept: function(t) {
        t.numArr = t.num.split(""), void 0 !== t.nowCombo && (t.nowComboArr = t.nowCombo.split("")), 
        this.acceptQueue.push(t), this.shotFlage || this.autoShot();
    },
    autoShot: function() {
        var t = this;
        this.shotFlage = !0;
        var e = t.acceptQueue.length, a = t.cacheQueue.length, c = t.cacheQueueMaxLen;
        e && a < c && (t.cacheQueue = t.cacheQueue.concat(t.acceptQueue.splice(0, c - a)), 
        a = t.cacheQueue.length), 0 !== a ? t.showdata(function(e) {
            e && t.autoShot();
        }) : t.shotFlage = !1;
    },
    showdata: function(t) {
        var e = this;
        this.getData(function(a, c) {
            a && e.setData(a, c), t && t(a);
        });
    },
    setData: function(t, e) {
        var a = this;
        a["data" + e] = t, a["callback" + e] && a["callback" + e](t);
    },
    getData: function(e) {
        var a, c = this, u = c.cacheQueue, n = null, i = null;
        if (!c.nextIsBig()) for (var o = 0, s = u.length; o < s; o++) {
            if (!t.isEmptyObject(c.dataA) && c.isSame(u[o], c.dataA)) {
                i = o, a = "A";
                break;
            }
            if (!t.isEmptyObject(c.dataB) && c.isSame(u[o], c.dataB)) {
                i = o, a = "B";
                break;
            }
        }
        if ("number" == typeof i) {
            n = u[i];
            var h = parseInt(c["data" + a].num, 10) + parseInt(n.num, 10) + "";
            n.num = h, n.numArr = h.split("");
        } else t.isEmptyObject(c.dataA) ? (i = 0, a = "A") : t.isEmptyObject(c.dataB) && (i = 0, 
        a = "B");
        "number" == typeof i ? (n = u[i], c.cacheQueue.splice(i, 1)) : c.shotFlage = !1, 
        e && e(n, a);
    },
    nextIsBig: function() {
        var t = this.cacheQueue[0];
        return t && t.effectLv;
    },
    checkShotAgain: function() {
        this.cacheQueue.length && !this.shotFlage && this.autoShot();
    },
    isSame: function(t, e) {
        return parseInt(t.effectLv, 10) <= 0 && (t.fromNick === e.fromNick && t.type === e.type);
    }
};

module.exports = e;