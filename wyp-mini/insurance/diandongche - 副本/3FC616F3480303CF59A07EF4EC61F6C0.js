Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = function(t) {
    var n = 0 < arguments.length && void 0 !== t ? t : {}, e = Object.assign({}, n);
    for (var r in e) e.hasOwnProperty(r) && "function" == typeof e[r] && delete e[r];
    return e;
}, n = function(t, n) {
    return function() {
        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
        return r.length ? t.apply(n, r) : t.call(n);
    };
}, e = function() {
    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
    return Object.assign.apply(Object, [ {} ].concat(n));
}, r = Behavior({
    definitionFilter: function(n) {
        n.data = t(n.data), n.data.in = !1, n.data.visible = !1;
    },
    methods: {
        $$mergeOptionsToData: t,
        $$mergeOptionsAndBindMethods: function(t, e) {
            var r = 0 < arguments.length && void 0 !== t ? t : {}, i = 1 < arguments.length && void 0 !== e ? e : this.fns, o = Object.assign({}, r);
            for (var a in o) o.hasOwnProperty(a) && "function" == typeof o[a] && (i[a] = n(o[a], this), 
            delete o[a]);
            return o;
        },
        $$setData: function() {
            for (var t = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            var o = e.apply(void 0, [ {} ].concat(r));
            return new Promise(function(n) {
                t.setData(o, n);
            });
        },
        $$requestAnimationFrame: function(t, n) {
            var e = 0 < arguments.length && void 0 !== t ? t : function() {}, r = 1 < arguments.length && void 0 !== n ? n : 1e3 / 60;
            return new Promise(function(t) {
                return setTimeout(t, r);
            }).then(e);
        }
    },
    created: function() {
        this.fns = {};
    },
    detached: function() {
        this.fns = {};
    }
});

exports.default = r;