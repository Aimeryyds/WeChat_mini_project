function e(e) {
    if (!e) {
        var t = getCurrentPages();
        e = t[t.length - 1];
    }
    return e;
}

function t(e, t) {
    var o = e.selector, n = t;
    if (!n) {
        var r = getCurrentPages();
        n = r[r.length - 1];
    }
    return n.selectComponent(o);
}

function o(e, t) {
    var o = [];
    return n.default.fillStockWithGroups(e, t).then(function(e) {
        e[0].groups.forEach(function(e) {
            o.push(e.gid);
        });
    }), o;
}

var n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../services/stockgroup/stockgroup")), r = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t.default = e, t;
}(require("../../services/stockgroup/constant")), c = require("../../comm-ui/modal/index");

module.exports = function(u, i) {
    i = e(i);
    var a = t(u, i), s = (u.stocks || []).map(function(e) {
        return e.exchange + "_" + e.code;
    });
    if (a) {
        s.length < 1 && console.warn("请将操作的股票传入options.stocks以提升用户体验");
        var f = u.checkGroup && o(u.stocks, i), l = u.accountType || r.ACCOUNT_WX;
        n.default.getGroupMeta(i, {
            accountType: l
        }).then(function(e) {
            var t = e.groups;
            "function" == typeof u.filter ? t = t.filter(u.filter) : t.forEach(function(e) {
                var t = e.gid + "";
                ("0" === t || f && f.indexOf(t) > -1) && (e.selected = !0), s.length > 0 && (e.hasAdd = !!(e.stocks || []).find(function(e) {
                    var t = e.id;
                    return s.indexOf(t.exchange + "_" + t.code) > -1;
                }));
            }), a.setData({
                groupList: t,
                accountType: l
            });
        }), c({
            title: "设置分组",
            selector: "#modal__" + a.data.modalId,
            showCancelButton: !0,
            autoClose: !1,
            onConfirm: function(e) {
                var t = e.type, o = a.data, n = o.mode, r = o.groupList;
                if ("confirm" === t) {
                    if ("select" === n && "function" == typeof u.onConfirm) {
                        var c = r.filter(function(e) {
                            return e.selected;
                        });
                        u.onConfirm(c), a.closeModal();
                    }
                    "edit" === n && !1 !== a.addGroup(i) && a.switchMode();
                }
            },
            onCancel: function(e) {
                var t = e.type, o = a.data.mode;
                "cancel" === t && ("select" === o && "function" == typeof u.onCancel && (u.onCancel(), 
                a.closeModal()), "edit" === o && a.switchMode());
            }
        }, a);
    } else console.error("未找到组件，可能没有在wxml中添加 zxgroup-selector 组件");
};