function e(e) {
    for (var t, n = Date.now(), i = [], l = function(e, t, n) {
        this.text = e, this.time = t, this.pri = n || 0;
    }, o = 0; o < e.length; o++) {
        if ("object" === s(e[o])) t = e[o] instanceof l ? e[o] : new l(e[o].text, n, e[o].pri); else {
            if ("string" != typeof e[o]) continue;
            t = new l(e[o], n);
        }
        i.push(t);
    }
    return i;
}

function t(e) {
    var t = d.concat(e);
    t.sort(function(e, t) {
        return e.pri < t.pri ? 1 : e.pri > t.pri ? -1 : 0;
    }), (d = t.splice(0, d.length)).sort(function(e, t) {
        return e.time < t.time ? -1 : e.time > t.time ? 1 : 0;
    });
}

function n(e, t) {
    e && 0 !== e.length && (u = u.concat(e));
}

function i() {
    var e = Date.now(), t = [];
    a.getIdleTrackIndex();
    a.bulletInList[0] = a.bulletCount = u.length - r.screenSize, t = t.concat(a.bulletInList), 
    a.bulletCount > 0 && (l(t, 0), a.bulletInList[0] = a.bulletCount = 0), "function" == typeof c && h && setTimeout(function() {
        c.call(window, u);
    }, 0), t = null, r.debug && console.debug("shoot() takes: " + (Date.now() - e) + " ms");
}

function l(e, t) {
    setTimeout(function() {
        for (var t = 0; t < r.lines; t++) if (!(!e[t] || e[t] <= 0 || 0 === u.length || e[t] > u.length)) for (var n = e[t] - 1; n >= 0; n--) u.shift();
        e = null;
    }, t);
}

function o(l) {
    var o, c = a.getIdleTrackIndex();
    if (0 !== l.length && !f) {
        if (a.setIdleTime(), l = e(l), r.discard) {
            if (!(r.speed <= 0)) return void (r.debug && console.debug("Illegal value of discard and speed while mode is 2."));
            0 === r.discardRule ? o = l.splice(0, r.maxShot) : 1 === r.discardRule && (o = l.splice(-1 * r.maxShot)), 
            c = r.maxShot;
        } else r.speed <= 0 || h ? (o = l.splice(0, r.maxShot), d = d.concat(l.splice(0, r.cacheSize - d.length))) : d = d.concat(l.splice(0, r.cacheSize - d.length)), 
        l.length > 0 && t(l), c = r.maxShot;
        n(o, c), i();
    }
}

var c, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, u = [], r = {
    lines: 1,
    discard: !1,
    discardRule: 0,
    cacheSize: 50,
    speed: 500,
    maxShot: 5,
    screenSize: 100,
    spacing: 10,
    clean: 20,
    debug: !1
}, a = {
    list: [],
    bulletInList: [],
    bulletCount: 0,
    maxTime: 0,
    intervalST: null,
    getIdleTrackIndex: function() {
        var e = [];
        return e[0] = 0, e;
    },
    setIdleTime: function(e, t) {
        r.speed <= 0 ? setTimeout(this.idleHandler, 0) : this.intervalST || (this.intervalST = setInterval(this.idleHandler, r.speed));
    },
    idleHandler: function() {
        d.length > 0 && !f && (r.debug && console.debug("idleHandler() cacheList: " + d.length), 
        h = !0, o(d.splice(0, d.length)), h = !1);
    }
}, d = [], f = !1, h = !1;

module.exports = {
    listenShoot: function(e, t) {
        c = t, o(e);
    },
    clearAll: function() {
        a.bulletCount = 0, a.maxTime = 0;
        for (var e = 0; e < r.lines; e++) a.bulletInList[e] = 0;
        return u = [], d = [], !0;
    }
};