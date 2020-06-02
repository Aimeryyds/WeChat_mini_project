Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function t(t, e) {
        var i = [], n = !0, o = !1, r = void 0;
        try {
            for (var m, u = t[Symbol.iterator](); !(n = (m = u.next()).done) && (i.push(m.value), 
            !e || i.length !== e); n = !0) ;
        } catch (t) {
            o = !0, r = t;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (o) throw r;
            }
        }
        return i;
    }
    return function(e, i) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

exports.default = Component({
    behaviors: [],
    properties: {
        countdown: {
            type: Number,
            value: 0,
            observer: "init"
        },
        format: {
            type: String,
            value: "dd天hh时mm分ss秒"
        },
        numStyle: {
            type: String,
            value: ""
        },
        symbolStyle: {
            type: String,
            value: ""
        }
    },
    data: {
        computeTime: 0,
        endTimeMs: 0
    },
    detached: function() {
        this.onPageHide();
    },
    methods: {
        init: function() {
            console.log("countdown init");
            var t = this.data, e = t.countdown, i = t.format;
            this.computeTime = e, this.format = i;
            var n = Date.now();
            this.endTimeMs = n + 1e3 * this.computeTime, this.initCountdown();
        },
        initCountdown: function() {
            var t = this;
            clearInterval(this._timer);
            var e = Date.now(), i = this.endTimeMs - e, n = i % 1e3 || 0;
            this._timer = setTimeout(function() {
                t.initCountdown();
            }, n), this.setCountdownTimeItems(i);
        },
        setCountdownTimeItems: function(t) {
            this.computeTime = parseInt(Math.ceil(t / 1e3)), this.emitRunCount(this.computeTime), 
            this.computeTime <= 0 && (clearInterval(this._timer), this.emitEndCount());
            var e = this.getTimeItems(this.computeTime, this.format);
            this.setData({
                timeItems: e
            });
        },
        getTimeItems: function(t, e) {
            t < 0 && (t = 0);
            var i = e.match(/[a-zA-Z]{1,3}/g) || [], n = e.match(/[\u4e00-\u9fa5]+|[^a-zA-Z]/g) || [], o = this.getTime(t, e);
            return i.map(function(t, e) {
                return {
                    num: o[t],
                    symbol: n[e]
                };
            });
        },
        getTime: function(e, i) {
            var n = e, o = [ 60, 60, 24 ].map(function(t) {
                var e = n % t;
                return n = Math.floor(n / t), e;
            }), r = t(o, 3), m = r[0], u = r[1], s = r[2];
            return e > 86400 && -1 === i.indexOf("d") && (s += 24 * n), e > 3600 && -1 === i.indexOf("h") && (u += 60 * s), 
            e > 60 && -1 === i.indexOf("m") && (m += 60 * u), {
                dd: this.formatTime(n),
                hh: this.formatTime(s),
                mm: this.formatTime(u),
                ss: this.formatTime(m),
                d: n,
                h: s,
                m: u,
                s: m
            };
        },
        formatTime: function(t) {
            return t < 10 ? "0" + t : t;
        },
        emitRunCount: function() {
            this.triggerEvent("runcount", {
                computeTime: this.computeTime
            });
        },
        emitEndCount: function() {
            this.triggerEvent("endcount");
        },
        onPageShow: function() {
            var t = Date.now();
            this.format && this.endTimeMs && (this.computeTime = parseInt((this.endTimeMs - t) / 1e3), 
            this.initCountdown());
        },
        onPageHide: function() {
            clearInterval(this._timer);
        }
    }
});