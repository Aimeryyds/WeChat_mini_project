function t() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (t = l.shareInfo.fsidlist.concat(t)), 
    l.shareInfo.fsidlist = t;
}

function e(e) {
    if (this.data.canSelected) {
        Array.isArray(e) || (e = [ e ]);
        var s = [], a = this.data.selectList;
        e.forEach(function(t) {
            var e = t.id, l = t.isSelect, n = a.includes(e);
            l && !n && a.length < i && a.push(e), !l && n && s.push(e);
        }), this.data.selectList = a.filter(function(t) {
            return !s.includes(t);
        });
        var l = this.data.selectList.length, n = l === this.data.list.length || l === i;
        this.setData({
            selectedCount: l,
            isSelectedAll: n
        }), t(this.data.selectList), this.triggerEvent("select", {
            isAll: n,
            selectedCount: l
        });
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.selectedMethods = exports.selectedData = exports.selectedFns = void 0;

var s = require("../../../netdisk_utils/sortFileList.js"), i = wx.ENV.CONF.BATCH_EDIT_LIMITED_COUNT, a = getApp(), l = a.globalData, n = (l.shareInfo.fsidlist, 
1);

exports.selectedFns = {
    setSelectList: function(e) {
        var s = this.data, a = s.isSelectedAll, l = s.selectedCount;
        if (a && l < i) {
            var n = [], d = e.length;
            d > i && (d = i);
            for (var c, o = 0; o < d; o++) (c = e[o]).isSelect = !0, n.push(c.fs_id);
            this.setData({
                selectedCount: d
            }), this.data.selectList = n, t(n, !0);
        }
    }
}, exports.selectedData = {
    canSwitchMode: !0,
    canSelected: !1,
    order: l.listOrder,
    orderTab: [ {
        value: "time",
        name: "时间排序",
        sign: "/"
    }, {
        value: "name",
        name: "名称排序",
        sign: ""
    } ],
    viewMode: "list",
    isSelectedAll: !1,
    selectedCount: 0,
    selectList: []
}, exports.selectedMethods = {
    onSwitchMode: function(t) {
        var e = t.detail.mode;
        this.setMode(e), this.triggerEvent("switchMode");
    },
    setMode: function(t) {
        this.data.canSwitchMode && (t && this.data.viewMode === t || (t || (t = "list" === this.data.viewMode ? "grid" : "list"), 
        this.setData({
            viewMode: t
        })));
    },
    selectItem: function(t) {
        var s = t.detail, a = s.id, l = s.isSelect;
        if (l && this.data.selectedCount >= i) wx.wetoast({
            content: "最多仅能对" + i + "个文件进行操作",
            duration: 1200
        }); else {
            var n = this.data.list, d = n.findIndex(function(t) {
                return t.fs_id === a;
            });
            -1 !== d && (n[d].isSelect = l, this.setData({
                list: n
            }), e.call(this, {
                id: a,
                isSelect: l
            }));
        }
    },
    orders: function() {
        var t = wx.getStorageSync("listOrder");
        if (t === this.data.order && n) {
            n = 0;
            var e = "time" === t ? "name" : "time";
            a.globalData.listOrder = e, wx.setStorageSync("listOrder", e), wx.log.send({
                value: "文件排序",
                type: "wx_order_" + e
            });
            var i = (0, s.sortFileList)(e, this.data.list);
            this.setData({
                order: e,
                list: i
            }), wx.wetoast({
                content: "加载中...",
                loading: !0,
                duration: 500,
                success: function() {
                    n = 1;
                }
            });
        }
    },
    selectedAll: function() {
        var e = this.data, s = e.isSelectedAll, a = e.list;
        if (s) this.resetList(), t([]); else {
            var l = a.length, n = l > i ? 200 : l, d = [];
            a = a.map(function(t, e) {
                var s = e < n;
                return t.isSelect = s, s && d.push(t.fs_id), t;
            }), this.setData({
                list: a,
                isSelectedAll: !0,
                selectedCount: d.length,
                selectList: d
            }), t(d);
        }
        this.triggerEvent("select", {
            isAll: !s,
            count: this.data.selectedCount
        });
    },
    longPress: function(t) {
        var e = t.detail.canSelected;
        this.setData({
            canSelected: e,
            canSwitchMode: !1
        });
    },
    resetList: function() {
        var t = this.data.list;
        t = t.map(function(t) {
            return t.isSelect = !1, t;
        }), this.setData({
            list: t,
            isSelectedAll: !1,
            selectedCount: 0,
            selectList: []
        });
    },
    goback: function() {
        this.resetList(), this.setData({
            canSelected: !1,
            canSwitchMode: !0
        }), t(this.getFsid(this.data.list));
    },
    bottomBtnFn: function(t) {
        var e = t.detail;
        switch (void 0 === e ? "" : e) {
          case "transferFiles":
            this.saveToMe(), this.goback();
        }
    }
};