var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = {
    TWEEN: n
};

var n = n || function() {
    var t = {}, e = {}, i = 0;
    return {
        getAll: function() {
            return Object.keys(t).map(function(n) {
                return t[n];
            });
        },
        removeAll: function() {
            t = {};
        },
        add: function(n) {
            t[n.getId()] = n, e[n.getId()] = n;
        },
        remove: function(n) {
            delete t[n.getId()], delete e[n.getId()];
        },
        update: function(i, r) {
            var a = Object.keys(t);
            if (0 === a.length) return !1;
            for (i = void 0 !== i ? i : n.now(); a.length > 0; ) {
                e = {};
                for (var o = 0; o < a.length; o++) !1 !== t[a[o]].update(i) || r || delete t[a[o]];
                a = Object.keys(e);
            }
            return !0;
        },
        nextId: function() {
            return i++;
        }
    };
}();

n.now = function() {
    return new Date().getTime();
}, n.Tween = function(t) {
    this._object = t, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, 
    this._duration = 1e3, this._repeat = 0, this._repeatDelayTime = void 0, this._yoyo = !1, 
    this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = null, 
    this._easingFunction = n.Easing.Linear.None, this._interpolationFunction = n.Interpolation.Linear, 
    this._chainedTweens = [], this._onStartCallback = null, this._onStartCallbackFired = !1, 
    this._onUpdateCallback = null, this._onCompleteCallback = null, this._onStopCallback = null, 
    this._id = n.nextId();
}, n.Tween.prototype = function(t, n) {
    for (var e = Object.keys(n), i = e.length, r = 0; r < i; r += 1) t[e[r]] = n[e[r]];
    return t;
}(Object.create(Object.prototype), {
    getId: function() {
        return this._id;
    },
    to: function(t, n) {
        return this._valuesEnd = t, void 0 !== n && (this._duration = n), this;
    },
    start: function(t) {
        n.add(this), this._isPlaying = !0, this._onStartCallbackFired = !1, this._startTime = void 0 !== t ? t : n.now(), 
        this._startTime += this._delayTime;
        for (var e in this._valuesEnd) {
            if (this._valuesEnd[e] instanceof Array) {
                if (0 === this._valuesEnd[e].length) continue;
                this._valuesEnd[e] = [ this._object[e] ].concat(this._valuesEnd[e]);
            }
            void 0 !== this._object[e] && (this._valuesStart[e] = this._object[e], this._valuesStart[e] instanceof Array == !1 && (this._valuesStart[e] *= 1), 
            this._valuesStartRepeat[e] = this._valuesStart[e] || 0);
        }
        return this;
    },
    stop: function() {
        return this._isPlaying ? (n.remove(this), this._isPlaying = !1, null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object), 
        this.stopChainedTweens(), this) : this;
    },
    end: function() {
        return this.update(this._startTime + this._duration), this;
    },
    stopChainedTweens: function() {
        for (var t = 0, n = this._chainedTweens.length; t < n; t++) this._chainedTweens[t].stop();
    },
    delay: function(t) {
        return this._delayTime = t, this;
    },
    repeat: function(t) {
        return this._repeat = t, this;
    },
    repeatDelay: function(t) {
        return this._repeatDelayTime = t, this;
    },
    yoyo: function(t) {
        return this._yoyo = t, this;
    },
    easing: function(t) {
        return this._easingFunction = t, this;
    },
    interpolation: function(t) {
        return this._interpolationFunction = t, this;
    },
    chain: function() {
        return this._chainedTweens = arguments, this;
    },
    onStart: function(t) {
        return this._onStartCallback = t, this;
    },
    onUpdate: function(t) {
        return this._onUpdateCallback = t, this;
    },
    onComplete: function(t) {
        return this._onCompleteCallback = t, this;
    },
    onStop: function(t) {
        return this._onStopCallback = t, this;
    },
    update: function(t) {
        var n, e, i;
        if (t < this._startTime) return !0;
        !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), 
        this._onStartCallbackFired = !0), e = (e = (t - this._startTime) / this._duration) > 1 ? 1 : e, 
        i = this._easingFunction(e);
        for (n in this._valuesEnd) if (void 0 !== this._valuesStart[n]) {
            var r = this._valuesStart[n] || 0, a = this._valuesEnd[n];
            a instanceof Array ? this._object[n] = this._interpolationFunction(a, i) : ("string" == typeof a && (a = "+" === a.charAt(0) || "-" === a.charAt(0) ? r + parseFloat(a) : parseFloat(a)), 
            "number" == typeof a && (this._object[n] = r + (a - r) * i));
        }
        if (null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, i), 
        1 === e) {
            if (this._repeat > 0) {
                isFinite(this._repeat) && this._repeat--;
                for (n in this._valuesStartRepeat) {
                    if ("string" == typeof this._valuesEnd[n] && (this._valuesStartRepeat[n] = this._valuesStartRepeat[n] + parseFloat(this._valuesEnd[n])), 
                    this._yoyo) {
                        var o = this._valuesStartRepeat[n];
                        this._valuesStartRepeat[n] = this._valuesEnd[n], this._valuesEnd[n] = o;
                    }
                    this._valuesStart[n] = this._valuesStartRepeat[n];
                }
                return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime, 
                !0;
            }
            null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object);
            for (var s = 0, u = this._chainedTweens.length; s < u; s++) this._chainedTweens[s].start(this._startTime + this._duration);
            return !1;
        }
        return !0;
    }
}), n.Easing = {
    Linear: {
        None: function(t) {
            return t;
        }
    },
    Quadratic: {
        In: function(t) {
            return t * t;
        },
        Out: function(t) {
            return t * (2 - t);
        },
        InOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        }
    },
    Cubic: {
        In: function(t) {
            return t * t * t;
        },
        Out: function(t) {
            return --t * t * t + 1;
        },
        InOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        }
    },
    Quartic: {
        In: function(t) {
            return t * t * t * t;
        },
        Out: function(t) {
            return 1 - --t * t * t * t;
        },
        InOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        }
    },
    Quintic: {
        In: function(t) {
            return t * t * t * t * t;
        },
        Out: function(t) {
            return --t * t * t * t * t + 1;
        },
        InOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        }
    },
    Sinusoidal: {
        In: function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
        },
        Out: function(t) {
            return Math.sin(t * Math.PI / 2);
        },
        InOut: function(t) {
            return .5 * (1 - Math.cos(Math.PI * t));
        }
    },
    Exponential: {
        In: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        Out: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        InOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        }
    },
    Circular: {
        In: function(t) {
            return 1 - Math.sqrt(1 - t * t);
        },
        Out: function(t) {
            return Math.sqrt(1 - --t * t);
        },
        InOut: function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        }
    },
    Elastic: {
        In: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI);
        },
        Out: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1;
        },
        InOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1;
        }
    },
    Back: {
        In: function(t) {
            var n = 1.70158;
            return t * t * ((n + 1) * t - n);
        },
        Out: function(t) {
            var n = 1.70158;
            return --t * t * ((n + 1) * t + n) + 1;
        },
        InOut: function(t) {
            var n = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((n + 1) * t - n) * .5 : .5 * ((t -= 2) * t * ((n + 1) * t + n) + 2);
        }
    },
    Bounce: {
        In: function(t) {
            return 1 - n.Easing.Bounce.Out(1 - t);
        },
        Out: function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        InOut: function(t) {
            return t < .5 ? .5 * n.Easing.Bounce.In(2 * t) : .5 * n.Easing.Bounce.Out(2 * t - 1) + .5;
        }
    }
}, n.Interpolation = {
    Linear: function(t, e) {
        var i = t.length - 1, r = i * e, a = Math.floor(r), o = n.Interpolation.Utils.Linear;
        return e < 0 ? o(t[0], t[1], r) : e > 1 ? o(t[i], t[i - 1], i - r) : o(t[a], t[a + 1 > i ? i : a + 1], r - a);
    },
    Bezier: function(t, e) {
        for (var i = 0, r = t.length - 1, a = Math.pow, o = n.Interpolation.Utils.Bernstein, s = 0; s <= r; s++) i += a(1 - e, r - s) * a(e, s) * t[s] * o(r, s);
        return i;
    },
    CatmullRom: function(t, e) {
        var i = t.length - 1, r = i * e, a = Math.floor(r), o = n.Interpolation.Utils.CatmullRom;
        return t[0] === t[i] ? (e < 0 && (a = Math.floor(r = i * (1 + e))), o(t[(a - 1 + i) % i], t[a], t[(a + 1) % i], t[(a + 2) % i], r - a)) : e < 0 ? t[0] - (o(t[0], t[0], t[1], t[1], -r) - t[0]) : e > 1 ? t[i] - (o(t[i], t[i], t[i - 1], t[i - 1], r - i) - t[i]) : o(t[a ? a - 1 : 0], t[a], t[i < a + 1 ? i : a + 1], t[i < a + 2 ? i : a + 2], r - a);
    },
    Utils: {
        Linear: function(t, n, e) {
            return (n - t) * e + t;
        },
        Bernstein: function(t, e) {
            var i = n.Interpolation.Utils.Factorial;
            return i(t) / i(e) / i(t - e);
        },
        Factorial: function() {
            var t = [ 1 ];
            return function(n) {
                var e = 1;
                if (t[n]) return t[n];
                for (var i = n; i > 1; i--) e *= i;
                return t[n] = e, e;
            };
        }(),
        CatmullRom: function(t, n, e, i, r) {
            var a = .5 * (e - t), o = .5 * (i - n), s = r * r;
            return (2 * n - 2 * e + a + o) * (r * s) + (-3 * n + 3 * e - 2 * a - o) * s + a * r + n;
        }
    }
}, function(e) {
    "function" == typeof define && define.amd ? define([], function() {
        return n;
    }) : "undefined" != typeof module && "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) ? module.exports = n : void 0 !== e && (e.TWEEN = n);
}(void 0);