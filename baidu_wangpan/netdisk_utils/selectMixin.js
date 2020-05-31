Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("miniprogram-computed"));

exports.default = Behavior({
    behaviors: [ e.default ],
    data: {
        canSelected: !1,
        listMap: {},
        selectListMap: {},
        selectedCount: 0,
        canSelectListMap: {},
        isSelectedAll: !1
    },
    observers: {
        selectListMap: function(e) {
            var t = Object.keys(e).length, s = this.data.canSelectListMap, c = Object.keys(s).length === t;
            this.setData({
                selectedCount: t,
                isSelectedAll: c
            });
        },
        list: function(e) {
            var t = this, s = {}, c = this.data.itemKey, l = void 0 === c ? "fs_id" : c;
            e.forEach(function(e) {
                s[e[l]] = e;
            }), this.setData({
                listMap: s
            });
            var a = {};
            e.filter(function(e) {
                return "function" != typeof t.checkSelect || t.checkSelect(e[l]);
            }).forEach(function(e) {
                a[e[l]] = e;
            }), this.setData({
                canSelectListMap: a
            });
        }
    },
    methods: {
        checkMaxSelect: function() {
            var e = this.data, t = e.maxSelectCount, s = e.selectListMap, c = Object.keys(s).length;
            return !(t && c >= t) || (this.handleMsg("选择数量超限"), !1);
        },
        handleSelect: function(e) {
            this.selectItem(e.detail);
        },
        selectItem: function(e) {
            var t = e.id, s = e.isSelect;
            if ((!s || this.checkMaxSelect()) && ("function" != typeof this.checkSelect || this.checkSelect(t, !0))) {
                var c = this.data.selectListMap;
                s ? c[t] = !0 : delete c[t], this.setData({
                    selectListMap: c
                });
            }
        },
        longPress: function() {
            this.setData({
                canSelected: !0
            });
        },
        goback: function() {
            this.selectAll(!1), this.setData({
                canSelected: !1
            });
        },
        handleSelectAll: function() {
            var e = !this.data.isSelectedAll;
            this.selectAll(e);
        },
        selectAll: function(e) {
            var t = this.data, s = t.list, c = t.selectedCount, l = t.maxSelectCount, a = t.selectListMap, i = t.canSelectListMap, n = t.itemKey, h = void 0 === n ? "fs_id" : n, o = t.selectAllMsg, d = s.filter(function(e) {
                return i[e[h]];
            }), r = Object.keys(i).length, u = "";
            r < s.length && (u = o || "存在不可选文件，已选择可选文件"), l && r - c > l && (d = d.slice(0, l - c), 
            u = "选择数量超限"), d.length && (d.forEach(function(t) {
                e ? a[t[h]] = !0 : delete a[t[h]];
            }), this.setData({
                selectListMap: a
            })), u && e && this.handleMsg(u);
        }
    }
});