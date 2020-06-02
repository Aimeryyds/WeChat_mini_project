function n(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}

function r(n) {
    if (Array.isArray(n)) {
        for (var r = 0, e = Array(n.length); r < n.length; r++) e[r] = n[r];
        return e;
    }
    return Array.from(n);
}

function e(n, r) {
    var e = {};
    for (var t in n) r.indexOf(t) >= 0 || Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    return e;
}

function t(n, r) {
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, t = o(e);
    if (t.code) return _.default.show(r, t.msg), Promise.reject(t);
    t = t.data, e.command = e.command || p.SYNC;
    var a = e.showLoading, d = void 0 !== a && a;
    return new Promise(function(o, u) {
        (0, g.default)({
            url: "" + f.default.API_V2_HOST + f.default.API_V2_PREFIX + "portfolio?command=" + e.command + "&subcommand=" + (e.subcommand || 0) + "&accountType=" + t,
            data: n,
            method: "POST"
        }, r, d).done(function(n) {
            n.data && 0 === n.data.errcode ? o(n.data.data) : u({
                msg: n.errmsg
            });
        }).fail(u);
    }).then(function(n) {
        if (n.groups) {
            n.groups = s(n.groups);
            var r = JSON.parse(JSON.stringify(n.groups)), t = u(e, "GRP-META") || [];
            r.forEach(function(n) {
                n.stocks = [], e.command !== p.SYNC && (n.version = c(n, t));
            }), u(e, "GRP-META", r);
        }
        return n;
    }).catch(function(n) {
        return i(r, n);
    });
}

function o() {
    var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).accountType || p.ACCOUNT_WX;
    return g.default.getSession().portal && n === p.ACCOUNT_GFT ? (n = p.ACCOUNT_GFT, 
    {
        data: n
    }) : n === p.ACCOUNT_GFT ? {
        msg: "未登录广发通",
        code: p.ERR_ACCOUNT_NOT_FOUNT
    } : {
        data: n
    };
}

function u() {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments[1], e = arguments[2];
    if (r = "STOCK_GROUP_CACHE_" + r + "-" + o(n).data, !e) return wx.getStorageSync(r);
    wx.setStorageSync(r, e);
}

function i(n) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    console.log("makeError", r);
    var e = r.msg, t = void 0 === e ? "操作失败，请稍候再试" : e;
    return _.default.show(n, t), Promise.reject(r);
}

function c(n) {
    return ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).find(function(r) {
        return r.gid === n.gid;
    }) || n).version;
}

function a(n) {
    return {
        $ALL: "全部",
        $A: "A股",
        $B: "B股",
        $H: "港股",
        $US: "美股"
    }[n] || n;
}

function s(n) {
    return n.map(function(n) {
        return d({}, n, {
            cname: a(n.name)
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var d = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
        var e = arguments[r];
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
    }
    return n;
}, g = n(require("../../components/http")), f = n(require("../../config")), p = function(n) {
    if (n && n.__esModule) return n;
    var r = {};
    if (null != n) for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (r[e] = n[e]);
    return r.default = n, r;
}(require("./constant")), m = require("../../components/utils"), _ = n(require("../../components/circus/toast/toast")), O = {
    getGroupMeta: function(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = r.detail, u = void 0 === o || o, i = e(r, [ "detail" ]);
        return t({}, n, d({
            command: p.GET_GROUP_META
        }, i)).then(function(r) {
            return !1 === u ? (console.warn("detail:false，请不要使用此时的group.version字段"), r) : O.getGroupStocks(r.groups, n, i).then(function(n) {
                return {
                    groups: n
                };
            });
        });
    },
    getGroupStocks: function(n, r, e) {
        return t({
            groups: n.map(function(n) {
                return {
                    groupOpType: p.GROUP_OP_TYPE_GET,
                    gid: n.gid,
                    version: "0",
                    name: n.name
                };
            })
        }, r, e).then(function(r) {
            return (r.groups || []).filter(function(r) {
                return !!n.find(function(n) {
                    return n.gid === r.gid;
                });
            });
        });
    },
    addGroups: function(n, r, e) {
        return n = n.map(function(n) {
            var e = (n.name || "").trim();
            return "" === e ? i(r, {
                msg: "分组名称不能为空"
            }) : e.indexOf("$") > -1 ? i(r, {
                msg: "分组名称不能包含$"
            }) : {
                version: "0",
                name: e,
                groupOpType: p.GROUP_OP_TYPE_ADD
            };
        }), t({
            groups: n
        }, r, e);
    },
    delGroups: function(n, r, e) {
        if (!n || 0 === n.length) {
            return i(r, {
                code: p.ERR_NO_GROUP,
                msg: "分组不存在"
            });
        }
        for (var o = n.length - 1; o >= 0; o--) {
            var a = n[o].gid;
            if (/^[0-4]+$/.test(a)) return i(r, {
                msg: "不允许删除内置分组"
            });
        }
        var s = u(e, "GRP-META"), d = n.map(function(n) {
            return {
                gid: n.gid,
                version: c(n, s),
                name: n.name,
                groupOpType: p.GROUP_OP_TYPE_DEL
            };
        });
        return t({
            groups: d
        }, r, e);
    },
    renameGroup: function(n, r, e) {
        if (!n) return i(r, {
            msg: "请传入分组信息"
        });
        var o = u(e, "GRP-META");
        return t({
            groups: [ {
                gid: n.gid,
                version: c(n, o),
                name: n.name,
                groupOpType: p.GROUP_OP_TYPE_RENAME
            } ]
        }, r, e);
    },
    resortGroups: function(n, r) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n && 0 !== n.length ? t({
            gid: n
        }, r, d({
            command: p.RESORT_GROUP
        }, e)) : i(r, {
            msg: "请传入排序后的分组"
        });
    },
    addStocks: function(n, e, o) {
        var i = u(o, "GRP-META"), a = n.find(function(n) {
            return "0" === n.gid;
        });
        if (!a) {
            var s = [];
            n.forEach(function(n) {
                return s = [].concat(r(s), r(n.stocks));
            }), (a = i.find(function(n) {
                return "0" === n.gid;
            })).stocks = (0, m.unique)(s, "gid"), n.push(a);
        }
        return t({
            groups: n.map(function(n) {
                return {
                    stocks: (n.stocks || []).map(function(n) {
                        return {
                            id: {
                                exchange: n.exchange,
                                code: n.code
                            },
                            opType: p.STOCK_OP_TYPE_ADD
                        };
                    }),
                    gid: n.gid,
                    groupOpType: p.GROUP_OP_TYPE_UPDATE,
                    version: c(n, i),
                    name: n.name
                };
            })
        }, e, o);
    },
    delStocks: function(n, r, e) {
        var o = u(e, "GRP-META"), i = n.find(function(n) {
            return "0" === String(n.gid);
        }), a = {}, s = {};
        return n.forEach(function(n) {
            a[n.gid] = n, (n.stocks || []).forEach(function(r) {
                return s["" + n.gid + r.code] = !0;
            });
        }), (i ? this.fillStockWithGroups(i.stocks, r, e).then(function(n) {
            n.forEach(function(n) {
                (n.groups || []).forEach(function(r) {
                    s["" + r.gid + n.code] || (a[r.gid] = a[r.gid] || {
                        gid: r.gid,
                        name: r.name,
                        stocks: []
                    }).stocks.push({
                        code: n.code,
                        exchange: n.exchange
                    });
                });
            });
        }) : Promise.resolve()).then(function() {
            return Object.values(a).map(function(n) {
                return {
                    stocks: (n.stocks || []).map(function(n) {
                        return {
                            id: {
                                exchange: n.exchange,
                                code: n.code
                            },
                            opType: p.STOCK_OP_TYPE_DEL
                        };
                    }),
                    gid: n.gid,
                    groupOpType: p.GROUP_OP_TYPE_MERGE,
                    version: c(n, o),
                    name: n.name
                };
            });
        }).then(function(n) {
            return t({
                groups: n
            }, r, e);
        });
    },
    moveStocks: function(n, e, o, a, s) {
        var d = "0" === String(e.gid);
        if (!n || 0 === n.length) return i(a, {
            msg: "请传入股票列表"
        });
        var g = n.map(function(n) {
            return {
                id: {
                    exchange: n.exchange,
                    code: n.code
                }
            };
        }), f = u(s, "GRP-META"), m = g.map(function(n) {
            return {
                id: n.id,
                opType: p.STOCK_OP_TYPE_ADD
            };
        });
        return o = o.map(function(n) {
            return {
                stocks: m,
                gid: n.gid,
                groupOpType: p.GROUP_OP_TYPE_MERGE,
                version: c(n, f),
                name: n.name
            };
        }).filter(function(n) {
            return "0" !== String(n.gid);
        }), t({
            groups: d ? o : [ {
                stocks: g.map(function(n) {
                    return {
                        id: n.id,
                        opType: p.STOCK_OP_TYPE_DEL
                    };
                }),
                groupOpType: p.GROUP_OP_TYPE_MERGE,
                gid: e.gid,
                version: c(e, f),
                name: e.name
            } ].concat(r(o))
        }, a, s);
    },
    setTopStock: function(n, r, e, o) {
        var i = u(o, "GRP-META");
        return t({
            groups: [ {
                stocks: [ {
                    id: {
                        exchange: n.exchange,
                        code: n.code
                    },
                    opType: p.STOCK_OP_TYPE_ADD
                } ],
                groupOpType: p.GROUP_OP_TYPE_MERGE,
                gid: r.gid,
                version: c(r, i),
                name: r.name
            } ]
        }, e, o);
    },
    resortStocks: function(n, r, e, o) {
        var i = u(o, "GRP-META");
        return t({
            groups: [ {
                stocks: n.map(function(n) {
                    return {
                        id: {
                            exchange: n.exchange,
                            code: n.code
                        },
                        opType: p.STOCK_OP_TYPE_ADD
                    };
                }),
                groupOpType: p.GROUP_OP_TYPE_MERGE,
                gid: r.gid,
                version: c(r, i),
                name: r.name
            } ]
        }, e, o);
    },
    fillStockWithGroups: function(n, r, e) {
        var t = u(e, "GRP-META");
        return this.getGroupStocks(t, r, e).then(function(r) {
            return n.map(function(n) {
                return d({}, n, {
                    groups: r.filter(function(r) {
                        return !!(r.stocks || []).find(function(r) {
                            var e = r.id;
                            return Number(e.exchange) === Number(n.exchange) && String(e.code) === String(n.code);
                        });
                    })
                });
            });
        });
    }
};

exports.default = O;