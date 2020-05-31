function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

function e() {
    "" !== this.data.fromPage && "dirdetail" !== this.data.fromPage && "sharedir" !== this.data.fromPage || this.triggerEvent("isEmpty", 0 === this.data.list.length);
}

function i() {
    return (0, c.checkAllFileIsOwner)(this.getSelectItems());
}

function s(e) {
    var i = this, s = e || this.data;
    if (S.globalData.savedList.length > 0 && s.list.length > 0) {
        var a = !1;
        s.list.map(function(s, l) {
            var r = "list[" + l + "].highlight";
            if (S.globalData.highlightOff) s.highlight && (s.highlight = !1, e || i.setData(t({}, r, !1))); else {
                var n = S.globalData.savedList.filter(function(t) {
                    return t.to === s.path && !s.highlight;
                });
                n && n.length ? (a = !0, s.highlight = !0, e || i.setData(t({}, r, !0))) : s.highlight && (s.highlight = !1, 
                e || i.setData(t({}, r, !1)));
            }
        }), a && (s.list.sort(function(t, e) {
            return t.highlight && !e.highlight ? -1 : !t.highlight && e.highlight ? 1 : 0;
        }), S.globalData.highlightOff = !0);
    }
}

function a(t) {
    var i = this, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = this.data, n = r.start, d = r.list, c = r.isSelectedAll, u = r.selectedCount, g = r.viewMode, D = r.once, L = r.requestApiName, A = a ? "list" === g ? l ? p : f : v : l ? p : f, y = {
        path: t
    }, _ = "doSearch" === L;
    a && !D && (y.isLoading = !0), 0 !== n && (y.showTips = !0), _ && !n && (n = 1), 
    this.setData(y);
    var M = wx.getCurrentViewPage();
    return o.fileListRequestApis[L](t, n, A).then(function(t) {
        var a = t.data, l = a.list, r = void 0 === l ? [] : l, o = a.has_more;
        m = 1;
        var g = (0, h.dataTransform)(r), f = g.length || 0;
        void 0 === o && (o = f === A);
        var p = {
            hasMore: !!o,
            isLoading: !1,
            start: n + (_ ? 1 : f)
        };
        i.data.start && n > 0 ? p.list = d.concat(g) : p.list = g;
        var v = p.list, D = v.length;
        if (M.setData({
            xListLen: D
        }), e.call(i), c && u < w) {
            var L = [];
            D > w && (D = w);
            for (var y, C = 0; C < D; C++) (y = v[C]).isSelect = !0, L.push(y.fs_id);
            p.selectedCount = D, p.selectList = L;
        }
        M && M.refreshCount && M.refreshCount(p.selectedCount), p.once = !0, p.showTips = !1, 
        s.call(i, p), i.setData(p), S.globalData.preShareData.list = v;
    }).catch(function(t) {
        i.setData({
            isLoading: !1
        }), console.warn(t);
    });
}

function l() {
    var t = !0, e = this.data.list, i = !0, s = !1, a = void 0;
    try {
        for (var l, r = e[Symbol.iterator](); !(i = (l = r.next()).done); i = !0) {
            var n = l.value, o = n.isSelect, h = n.category;
            if (o && t && (t = 6 === h), !t) break;
        }
    } catch (t) {
        s = !0, a = t;
    } finally {
        try {
            !i && r.return && r.return();
        } finally {
            if (s) throw a;
        }
    }
    return t;
}

function r(t) {
    var e = this;
    if (this.data.canSelected) {
        Array.isArray(t) || (t = [ t ]);
        var s = [];
        t.forEach(function(t) {
            var i = t.id, a = t.isSelect, l = e.data.selectList.includes(i);
            a && !l && e.data.selectList.length < w && e.data.selectList.push(i), !a && l && s.push(i);
        }), this.data.selectList = this.data.selectList.filter(function(t) {
            return !s.includes(t);
        });
        var a = this.data.selectList.length, r = a === this.data.list.length || a === w, n = i.call(this);
        this.setData({
            selectedCount: a,
            isSelectedAll: r
        });
        var o = l.call(this);
        this.setData({
            isAllDir: o
        }), this.triggerEvent("select", {
            isAll: this.data.isSelectedAll,
            count: a,
            isAllDir: l.call(this),
            isAllFileOwner: n
        });
    }
}

function n() {
    var t = wx.getCurrentViewPage();
    switch (t.pageType) {
      case "sharedir":
        return 1 === t.data.isOwner ? "enjoyFileOwnBatch" : "enjoyFileOtherBatch";

      default:
        return "fileDetailBatch";
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.methods = exports.data = exports.properties = void 0;

var o = require("../../../netdiisk_requestapi/getFileList.js"), h = require("../../../netdisk_utils/transform.js"), d = require("../../../netdisk_utils/common.js"), c = require("../../../netdisk_utils/checkFile.js"), u = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../XList/initPage.js")), g = require("../../../netdisk_templates/empty_list/emptyList.js"), f = wx.ENV.CONF.MAINPAGE_FILES_LOAD_LIMITED_COUNT, p = wx.ENV.CONF.MAINPAGE_AFTER_SAVE_FILES_LOAD_LIMITED_COUNT, v = wx.ENV.CONF.GRID_FILES_LOAD_LIMITED_COUNT, w = wx.ENV.CONF.BATCH_EDIT_LIMITED_COUNT, S = getApp(), D = S.globalData, m = 1, L = exports.properties = {
    requestApiName: {
        type: String,
        value: "getNormalList"
    },
    headerOperMode: {
        type: String,
        value: "normal"
    },
    isSHowHeader: {
        type: Boolean,
        value: !0
    },
    isShowBottomBtn: {
        type: Boolean,
        value: !0
    },
    showLoading: {
        type: Boolean,
        value: !1
    },
    canSelected: {
        type: Boolean,
        value: !1
    },
    shareDirPage: {
        type: Boolean,
        value: !1
    },
    whenEmpty: {
        type: String,
        value: "dirlist"
    },
    useScroll: {
        type: Boolean,
        value: !0
    },
    fromPage: {
        type: String,
        value: ""
    },
    sharePage: {
        type: Boolean,
        value: !1
    },
    hasLogin: {
        type: Boolean,
        value: !0
    }
}, A = exports.data = {
    canSwitchMode: !0,
    canSelected: !1,
    order: D.listOrder,
    viewMode: "list",
    isSelectedAll: !1,
    selectedCount: 0,
    selectList: [],
    path: "/",
    isLoading: !0,
    hasMore: !0,
    list: [],
    start: 0,
    isGuideUser: S.globalData.isGuideUser,
    showTips: !1,
    barType: "fileDetailBatch",
    isAllDir: !1
}, y = exports.methods = {
    onSwitchMode: function(t) {
        var e = t.detail.mode;
        this.setMode(e), wx.setCurrentViewMode(e), this.triggerEvent("switchMode");
    },
    setMode: function(t) {
        this.data.canSwitchMode && (t && this.data.viewMode === t || (t || (t = "list" === this.data.viewMode ? "grid" : "list"), 
        this.setData({
            viewMode: t
        })));
    },
    getSelectItems: function() {
        var t = this;
        return this.data.selectList.map(function(e) {
            return t.data.list.find(function(t) {
                return t.fs_id === e;
            });
        });
    },
    getFirstSelectItem: function() {
        var t = this.data.selectList[0];
        return this.data.list.find(function(e) {
            return e.fs_id === t;
        });
    },
    selectItem: function(t) {
        var e = t.detail, i = e.id, s = e.isSelect;
        if (s && this.data.selectedCount >= w) wx.wetoast({
            content: "最多仅能对" + w + "个文件进行操作",
            duration: 1200
        }); else {
            var a = this.data.list, l = a.findIndex(function(t) {
                return t.fs_id === i;
            });
            -1 !== l && (a[l].isSelect = s, this.setData({
                list: a
            }), r.call(this, {
                id: i,
                isSelect: s
            }));
        }
    },
    selectedAll: function(t) {
        var e = this.data, s = e.isSelectedAll, a = e.list;
        if (!0 === t || s) this.resetList(); else {
            var r = a.length, n = r > w ? 200 : r, o = [];
            a = a.map(function(t, e) {
                var i = e < n;
                return t.isSelect = i, i && o.push(t.fs_id), t;
            }), this.setData({
                list: a,
                isSelectedAll: !0,
                selectedCount: o.length,
                selectList: o,
                isAllDir: l.call(this)
            });
        }
        var h = i.call(this);
        this.triggerEvent("select", {
            isAll: !s,
            count: this.data.selectedCount,
            isAllDir: l.call(this),
            isAllFileOwner: h
        });
    },
    longPress: function(t) {
        var e = t.detail.canSelected;
        this.initHighlight(), this.setData({
            canSelected: e,
            isSHowHeader: !1,
            canSwitchMode: !1
        }), this.triggerEvent("longPress");
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
            canSwitchMode: !0,
            isSHowHeader: !0
        }), this.triggerEvent("goback");
    },
    bottomBtnFn: function(t) {
        var e = t.detail, i = void 0 === e ? "" : e, s = this.getSelectItems(), a = wx.getCurrentViewPage();
        switch (i) {
          case "copy":
            a.copy(s);
            break;

          case "rename":
            a.batchRename(s);
            break;

          case "delete":
            a.batchDelete(s);
            break;

          case "share":
            a.onlyShareToOthers(s);
            break;

          case "shareToFriends":
            a.shareToFriends(s);
        }
    },
    orders: function() {
        var t = wx.getStorageSync("listOrder");
        if (t === this.data.order && m) {
            m = 0;
            var e = "time" === t ? "name" : "time";
            S.globalData.listOrder = e, wx.setStorageSync("listOrder", e), wx.log.send({
                value: "文件排序",
                type: "wx_order_" + e
            }), this.loadList(this.data.path), wx.wetoast({
                content: "加载中...",
                loading: !0,
                duration: 500
            });
        }
    },
    loadMore: function(t) {
        var e = this.data, i = e.isLoading, s = e.hasMore, l = e.path, r = e.showTips;
        i || !s || r || a.call(this, l, !1, t);
    },
    reloadList: function() {
        this.dispose(), this.data.canSelected && this.triggerEvent("select", {
            isAll: !1,
            count: 0,
            isAllDir: !1,
            isAllFileOwner: !1,
            isBatch: !1
        }), a.call(this, this.data.path);
    },
    loadList: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/", e = arguments[1];
        wx.getCurrentViewPage();
        this.refreshMode(), t !== this.data.path && this.dispose(), this.data.start = 0;
        var i = !(this.data.list.length > 0);
        a.call(this, t, i, e), this.setData({
            order: S.globalData.listOrder
        });
    },
    update: function(t) {
        var e = this.data.list, i = t.fs_id, s = e.findIndex(function(t) {
            return t.fs_id === i;
        });
        -1 !== s && (e[s] = t, this.setData({
            list: e
        }), r.call(this, {
            id: i,
            isSelect: !!t.isSelect
        }));
    },
    remove: function(t) {
        var e = this, i = this.data.list;
        if (0 !== i.length) {
            var s = [];
            t ? (i = i.filter(function(e) {
                return e.fs_id !== t;
            }), s.push({
                id: t,
                isSelect: !1
            })) : (i = i.filter(function(t) {
                return !e.data.selectList.some(function(e) {
                    return t.fs_id === e;
                });
            }), s = this.data.selectList.map(function(t) {
                return {
                    id: t,
                    isSelect: !1
                };
            })), this.setData({
                list: i
            }), 0 === i.length ? this.reloadList() : r.call(this, s);
        }
    },
    append: function(t) {
        var i = this.data.list;
        t.uk = wx.getStorageSync("uk"), this.setData({
            list: [ t ].concat(i)
        }), r.call(this, {
            id: t.fs_id,
            isSelect: !!t.isSelect
        }), e.call(this);
    },
    dispose: function() {
        this.setData({
            isLoading: !0,
            hasMore: !0,
            list: [],
            start: 0,
            isSelectedAll: !1,
            selectedCount: 0,
            selectList: []
        });
    },
    getCurrentPath: function() {
        return this.data.path;
    },
    initCurrentPage: u.default,
    dirAddFiles: function() {
        this.triggerEvent("dirAddFiles");
    },
    shareDirAddFiles: function() {
        this.triggerEvent("shareDirAddFiles");
    },
    localUpload: function() {
        this.triggerEvent("upload");
    },
    formSubmit: function(t) {
        return (0, d.generateFormId)(t);
    },
    tplClick: function() {
        wx.log.guide.diskNormal.send(), (0, g.clickBtn)();
    },
    refreshMode: function() {
        var t = this.selectComponent("#switchButton"), e = wx.getCurrentViewMode();
        this.setData({
            viewMode: e
        }), t && t.refreshIcon();
    },
    showOperModeDialog: function() {
        this.operModeDialog.show(), this.triggerEvent("showOperModeDialog");
    },
    hideOperModeDialog: function() {
        this.triggerEvent("hideOperModeDialog");
    },
    initHighlight: s
};

Component({
    properties: L,
    data: A,
    options: {
        multipleSlots: !0
    },
    ready: function() {
        this.setData({
            systemInfo: D.systemInfo,
            isGuideUser: S.globalData.isGuideUser,
            barType: n()
        }), this.operModeDialog = this.selectComponent("#operModeDialog");
    },
    methods: y
});