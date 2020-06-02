function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (e && e.length && void 0 !== t.__k) {
        var o = !0, a = !1, i = void 0;
        try {
            for (var s, u = (0, n.default)(e); !(o = (s = u.next()).done); o = !0) {
                var c = s.value;
                if (void 0 !== c.__k && c.__k === t.__k) return (0, r.default)({}, c, t);
            }
        } catch (e) {
            a = !0, i = e;
        } finally {
            try {
                !o && u.return && u.return();
            } finally {
                if (a) throw i;
            }
        }
    }
    return t;
}

module.exports = {};

var o = e(require("../babel-runtime/core-js/object/keys.js")), r = e(require("../babel-runtime/core-js/object/assign.js")), n = e(require("../babel-runtime/core-js/get-iterator.js")), a = e(require("../lodash/set.js")), i = e(require("../lodash/get.js")), s = (e(require("./component.js")), 
function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t.default = e, t;
}(require("./utils.js")));

module.exports = function(e) {
    var r = {}, n = void 0;
    return r.data = {}, r.name = "", r._dispatch = function(e) {
        for (var t = this.root, o = e.currentTarget || e.target, r = o.dataset.path || "", n = o.dataset["bind" + e.type] || o.dataset["catch" + e.type] || o.dataset[e.type]; r; ) {
            var a = r.indexOf("."), i = "";
            if (-1 === a ? (i = r, r = "") : (i = r.substr(0, a), r = r.substr(a + 1)), !(t = t._children[i])) return void console.error("Can not resolve component by path " + o.dataset.path);
        }
        if (t[n]) return console.log("%c%s %s(%o)", "color:#2abb40", t.id, n, e), t[n](e);
        console.error("Can not resolve event handle " + t.id + "#" + n);
    }, [ "onRouteEnd", "onUnload", "onPullDownRefresh", "onReachBottom" ].forEach(function(e) {
        r[e] = function() {
            for (var t = arguments.length, o = Array(t), r = 0; r < t; r++) o[r] = arguments[r];
            s.callLifecycle(this.root, e, o);
        };
    }), r.onLoad = function(r) {
        (n = this).page = n, n._show = !1, n._ready = !1, n._loadOptions = r, n.updateData = function(e) {
            var r = n.data;
            (0, o.default)(e).forEach(function(o) {
                var n = e[o];
                Array.isArray(n) ? function() {
                    var e = (0, i.default)(r, o), s = n.map(function(o) {
                        return t(e, o);
                    });
                    (0, a.default)(r, o, s);
                }() : (0, a.default)(r, o.split("."), n);
            }), n.setData(r);
        };
        var s = n.root = new e({});
        s._config = {}, s.page = n, s.id = n.__route__, s.page = n;
        try {
            s._init("");
        } catch (e) {
            console.error(e.stack);
        }
        s.onLoad && s.onLoad(r);
    }, r.onReady = function() {
        n._ready = !0, s.callLifecycle(this.root, "onReady");
    }, r.onShow = function() {
        n._show = !0, s.callLifecycle(this.root, "onShow");
    }, r.onHide = function() {
        n._show = !1, s.callLifecycle(this.root, "onHide");
    }, e.prototype.onShareAppMessage && (r.onShareAppMessage = function() {
        var e = this.root.onShareAppMessage();
        return e || console.error(this.root.id + " onShareAppMessage() 没有返回分享数据"), e;
    }), r;
};