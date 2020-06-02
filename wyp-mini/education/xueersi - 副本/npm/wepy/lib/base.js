function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _event = require("./event.js"), _event2 = _interopRequireDefault(_event), _util = require("./util.js"), _util2 = _interopRequireDefault(_util), PAGE_EVENT = [ "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap" ], APP_EVENT = [ "onLaunch", "onShow", "onHide", "onError" ], $bindEvt = function e(n, t, o) {
    t.$prefix = _util2.default.camelize(o || ""), Object.getOwnPropertyNames(t.components || {}).forEach(function(a) {
        var r = t.components[a], i = new r();
        i.$initMixins(), i.$name = a;
        var c = o ? o + i.$name + "$" : "$" + i.$name + "$";
        t.$com[a] = i, e(n, i, c);
    }), Object.getOwnPropertyNames(t.constructor.prototype || []).forEach(function(e) {
        "constructor" !== e && -1 === PAGE_EVENT.indexOf(e) && (n[e] = function() {
            t.constructor.prototype[e].apply(t, arguments), t.$apply();
        });
    });
    var a = Object.getOwnPropertyNames(t.methods || []);
    return t.$mixins.forEach(function(e) {
        a = a.concat(Object.getOwnPropertyNames(e.methods || []));
    }), a.forEach(function(e, o) {
        n[t.$prefix + e] = function(n) {
            for (var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) a[r - 1] = arguments[r];
            var i = new _event2.default("system", this, n.type);
            i.$transfor(n);
            var c = [], p = 0, s = void 0, f = void 0, u = void 0;
            if (n.currentTarget && n.currentTarget.dataset) {
                for (s = n.currentTarget.dataset; void 0 !== s["wpy" + e.toLowerCase() + (f = String.fromCharCode(65 + p++))]; ) c.push(s["wpy" + e.toLowerCase() + f]);
                void 0 !== s.comIndex && (u = s.comIndex);
            }
            if (void 0 !== u) {
                u = ("" + u).split("-");
                for (var l = u.length, h = l; l-- > 0; ) {
                    h = l;
                    for (var $ = t; h-- > 0; ) $ = $.$parent;
                    $.$setIndex(u.shift());
                }
            }
            a = a.concat(c);
            var d = void 0, _ = void 0, v = t.methods[e];
            return v && (d = v.apply(t, a.concat(i))), t.$mixins.forEach(function(n) {
                n.methods[e] && (_ = n.methods[e].apply(t, a.concat(i)));
            }), t.$apply(), v ? d : _;
        };
    }), n;
};

exports.default = {
    $createApp: function(e, n) {
        var t = {}, o = new e();
        return this.$instance || (o.$init(this, n), this.$instance = o, this.$appConfig = n), 
        2 === arguments.length && !0 === arguments[1] && (t.$app = o), o.$wxapp = getApp(), 
        APP_EVENT = APP_EVENT.concat(n.appEvents || []), PAGE_EVENT = PAGE_EVENT.concat(n.pageEvents || []), 
        APP_EVENT.forEach(function(e) {
            t[e] = function() {
                for (var n = arguments.length, t = Array(n), a = 0; a < n; a++) t[a] = arguments[a];
                var r = void 0;
                return !o.$wxapp && (o.$wxapp = getApp()), o[e] && (r = o[e].apply(o, t)), r;
            };
        }), t;
    },
    $createPage: function(e, n) {
        var t = this, o = {}, a = new e();
        return "string" == typeof n && (this.$instance.$pages["/" + n] = a), a.$initMixins(), 
        ("boolean" == typeof n && n || 3 === arguments.length && !0 === arguments[2]) && (o.$page = a), 
        o.onLoad = function() {
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            a.$name = e.name || "unnamed", a.$init(this, t.$instance, t.$instance);
            var i = t.$instance.__prevPage__, c = {};
            c.from = i || void 0, i && Object.keys(i.$preloadData).length > 0 && (c.preload = i.$preloadData, 
            i.$preloadData = {}), a.$prefetchData && Object.keys(a.$prefetchData).length > 0 && (c.prefetch = a.$prefetchData, 
            a.$prefetchData = {}), o.push(c), [].concat(a.$mixins, a).forEach(function(e) {
                e.onLoad && e.onLoad.apply(a, o);
            }), a.$apply();
        }, o.onShow = function() {
            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            t.$instance.__prevPage__ = a, [].concat(a.$mixins, a).forEach(function(e) {
                e.onShow && e.onShow.apply(a, n);
            });
            var r = getCurrentPages(), i = r[r.length - 1].__route__, c = r[r.length - 1].__wxWebviewId__;
            t.$instance.__wxWebviewId__ !== c && (a.$wxpage = this, t.$instance.__route__ = i, 
            t.$instance.__wxWebviewId__ = c, [].concat(a.$mixins, a).forEach(function(e) {
                e.onRoute && e.onRoute.apply(a, n);
            })), a.$apply();
        }, PAGE_EVENT.forEach(function(e) {
            "onLoad" !== e && "onShow" !== e && (o[e] = function() {
                for (var n = arguments.length, t = Array(n), o = 0; o < n; o++) t[o] = arguments[o];
                var r = void 0;
                return "onShareAppMessage" === e ? (a[e] && (r = a[e].apply(a, t)), r) : ([].concat(a.$mixins, a).forEach(function(n) {
                    n[e] && n[e].apply(a, t);
                }), "onPageScroll" !== e && a.$apply(), r);
            });
        }), a.onShareAppMessage || delete o.onShareAppMessage, -1 === [].concat(a.$mixins, a).findIndex(function(e) {
            return e.onPageScroll;
        }) && delete o.onPageScroll, $bindEvt(o, a, "");
    }
};