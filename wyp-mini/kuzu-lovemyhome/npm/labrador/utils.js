function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e, t, n) {
    if (e[t] && (console.log("%c%s %s()", "color:#9a23cc", e.id, t), e[t].apply(e, n)), 
    e._children) for (var u in e._children) {
        var i = e._children[u];
        Array.isArray(i) ? i.forEach(function(e) {
            return r(e, t, n);
        }) : r(i, t, n);
    }
}

var t = module.exports = {};

Object.defineProperty(t, "__esModule", {
    value: !0
});

var n = e(require("../babel-runtime/core-js/json/stringify.js")), u = e(require("../babel-runtime/helpers/typeof.js"));

t.getDebugObject = function(e) {
    if ("object" !== (void 0 === e ? "undefined" : (0, u.default)(e)) || !e || e.asMutable) return e;
    try {
        for (var r in e) if (e[r] && "object" === (0, u.default)(e[r]) && !e[r].asMutable) return JSON.parse((0, 
        n.default)(e));
    } catch (e) {}
    return e;
}, t.shouldUpdate = function(e, r) {
    if (e === r) return !1;
    for (var t in r) {
        var n = r[t];
        if ("object" === (void 0 === n ? "undefined" : (0, u.default)(n)) && n) {
            if (!n.asMutable || e[t] !== n) return !0;
        } else if (e[t] !== n) return !0;
    }
    return !1;
}, t.callLifecycle = r;