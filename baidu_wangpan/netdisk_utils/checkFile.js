Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = exports.checkFileIsOwner = function(r) {
    var e = r.is_owner, t = void 0 === e ? "" : e, i = r.path, o = void 0 === i ? "" : i, n = r.uk, a = void 0 === n ? "" : n, u = r.oper_id, v = void 0 === u ? "" : u, c = wx.getStorageSync("uk");
    return "" !== v && 0 !== v ? c === v : "" !== a ? c === a : "" !== t ? 1 == +t : !o.includes("<share>");
};

exports.checkAllFileIsOwner = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    if (e.length <= 0) return !1;
    var t = !0, i = !0, o = !1, n = void 0;
    try {
        for (var a, u = e[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
            var v = a.value;
            if (!t) return t;
            t = r(v);
        }
    } catch (r) {
        o = !0, n = r;
    } finally {
        try {
            !i && u.return && u.return();
        } finally {
            if (o) throw n;
        }
    }
    return t;
}, exports.checkFileIsdir = function(r) {
    var e = r.isdir, t = void 0 === e ? 0 : e, i = r.category, o = void 0 === i ? -1 : i;
    return 1 == +t || 6 == +o;
};