var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t) {
    function n() {}
    function r(e, t) {
        for (var n = e.length; n--; ) if (e[n].listener === t) return n;
        return -1;
    }
    function i(e) {
        return function() {
            return this[e].apply(this, arguments);
        };
    }
    function s(t) {
        return "function" == typeof t || t instanceof RegExp || !(!t || "object" !== (void 0 === t ? "undefined" : e(t))) && s(t.listener);
    }
    var o = n.prototype, u = t.EventEmitter;
    o.getListeners = function(e) {
        var t, n, r = this._getEvents();
        if (e instanceof RegExp) {
            t = {};
            for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
        } else t = r[e] || (r[e] = []);
        return t;
    }, o.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n;
    }, o.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && ((t = {})[e] = n), t || n;
    }, o.addListener = function(t, n) {
        if (!s(n)) throw new TypeError("listener must be a function");
        var i, o = this.getListenersAsObject(t), u = "object" === (void 0 === n ? "undefined" : e(n));
        for (i in o) o.hasOwnProperty(i) && -1 === r(o[i], n) && o[i].push(u ? n : {
            listener: n,
            once: !1
        });
        return this;
    }, o.on = i("addListener"), o.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        });
    }, o.once = i("addOnceListener"), o.defineEvent = function(e) {
        return this.getListeners(e), this;
    }, o.defineEvents = function(e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this;
    }, o.removeListener = function(e, t) {
        var n, i, s = this.getListenersAsObject(e);
        for (i in s) s.hasOwnProperty(i) && -1 !== (n = r(s[i], t)) && s[i].splice(n, 1);
        return this;
    }, o.off = i("removeListener"), o.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t);
    }, o.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t);
    }, o.manipulateListeners = function(t, n, r) {
        var i, s, o = t ? this.removeListener : this.addListener, u = t ? this.removeListeners : this.addListeners;
        if ("object" !== (void 0 === n ? "undefined" : e(n)) || n instanceof RegExp) for (i = r.length; i--; ) o.call(this, n, r[i]); else for (i in n) n.hasOwnProperty(i) && (s = n[i]) && ("function" == typeof s ? o.call(this, i, s) : u.call(this, i, s));
        return this;
    }, o.removeEvent = function(t) {
        var n, r = void 0 === t ? "undefined" : e(t), i = this._getEvents();
        if ("string" === r) delete i[t]; else if (t instanceof RegExp) for (n in i) i.hasOwnProperty(n) && t.test(n) && delete i[n]; else delete this._events;
        return this;
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(e, t) {
        var n, r, i, s, o = this.getListenersAsObject(e);
        for (s in o) if (o.hasOwnProperty(s)) for (n = o[s].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(e, r.listener), 
        r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
        return this;
    }, o.trigger = i("emitEvent"), o.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t);
    }, o.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this;
    }, o._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
    }, o._getEvents = function() {
        return this._events || (this._events = {});
    }, n.noConflict = function() {
        return t.EventEmitter = u, n;
    }, "function" == typeof define && define.amd ? define(function() {
        return n;
    }) : "object" === ("undefined" == typeof module ? "undefined" : e(module)) && module.exports ? module.exports = n : t.EventEmitter = n;
}("undefined" != typeof window ? window : {});