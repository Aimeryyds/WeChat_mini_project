function t(t) {
    if (Array.isArray(t)) {
        for (var r = 0, n = Array(t.length); r < t.length; r++) n[r] = t[r];
        return n;
    }
    return Array.from(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
        var n = arguments[r];
        for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
    }
    return t;
}, n = function() {
    function t(t, r) {
        var n = [], e = !0, o = !1, u = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(e = (i = a.next()).done) && (n.push(i.value), 
            !r || n.length !== r); e = !0) ;
        } catch (t) {
            o = !0, u = t;
        } finally {
            try {
                !e && a.return && a.return();
            } finally {
                if (o) throw u;
            }
        }
        return n;
    }
    return function(r, n) {
        if (Array.isArray(r)) return r;
        if (Symbol.iterator in Object(r)) return t(r, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./stockgroup")), o = function(t) {
    if (t && t.__esModule) return t;
    var r = {};
    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    return r.default = t, r;
}(require("./constant"));

exports.default = {
    sync: function() {
        var u = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = i.keepWX, f = void 0 === a || a, c = i.initStocks, l = arguments[1], s = e.default.getGroupMeta(l).then(function(t) {
            var r = t.groups;
            if (!1 === f) {
                var n = r.filter(function(t) {
                    return !/^[0-4]+$/.test(t.gid);
                }), i = r.filter(function(t) {
                    return /^[0-4]+$/.test(t.gid);
                });
                return e.default.delGroups(n, l).then(function(t) {
                    return console.log("删除小程序分组成功，返回groups", t), e.default.delStocks(u.formatStock(i), l);
                }).then(function() {
                    return [];
                }).catch(function(t) {
                    return console.log("pullMergeGroups 失败", t, r), t && t.code === o.ERR_NO_GROUP ? e.default.delStocks(u.formatStock(r), l).then(function() {
                        return [];
                    }) : Promise.reject(t);
                });
            }
            return r.filter(function(t) {
                return !/^[0-4]+$/.test(t.gid);
            });
        }), d = e.default.getGroupMeta(l, {
            accountType: o.ACCOUNT_GFT
        }).then(function(t) {
            return t.groups;
        });
        return Promise.all([ s, d ]).then(function(t) {
            var r = n(t, 2), o = r[0], u = r[1], i = u.filter(function(t) {
                return !/^[0-4]+$/.test(t.gid);
            });
            return i.length ? e.default.addGroups(i.map(function(t) {
                return {
                    name: t.name
                };
            }), l).then(function(t) {
                return [ t.groups, u ];
            }) : [ o, u ];
        }).then(function(o) {
            var i = n(o, 2), a = i[0], f = i[1], c = f.filter(function(t) {
                return /^[0-4]+$/.test(t.gid);
            }), s = f.filter(function(t) {
                return !/^[0-4]+$/.test(t.gid);
            }), d = {};
            a.forEach(function(t) {
                return d[t.name] = t.gid;
            });
            var p = s.map(function(t) {
                return r({}, JSON.parse(JSON.stringify(t)), {
                    gid: d[t.name]
                });
            });
            return e.default.addStocks(u.formatStock([].concat(t(p), t(c))), l);
        }).then(function() {
            if (c && c.length) return e.default.addStocks([ {
                gid: "0",
                name: "全部",
                stocks: c
            } ], l);
        });
    },
    formatStock: function(t) {
        return t.map(function(t) {
            return t.stocks = (t.stocks || []).map(function(t) {
                return t.id;
            }), t;
        });
    }
};