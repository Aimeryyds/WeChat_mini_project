function t() {
    "" !== this.data.fromPage && "dirdetail" !== this.data.fromPage && "sharedir" !== this.data.fromPage || this.triggerEvent("isEmpty", 0 === this.data.list.length);
}

function e() {
    return (0, o.checkAllFileIsOwner)(this.getSelectItems());
}

function i(i) {
    var a = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], o = this.data, d = o.start, c = o.list, p = o.isSelectedAll, w = o.selectedCount, S = o.viewMode, A = o.once, D = n ? "list" === S ? h : u : h, m = {
        path: i
    };
    n && !A && (m.isLoading = !0), this.setData(m), 0 !== d && this.setData({
        showTips: !0
    });
    var L = wx.getCurrentViewPage(), _ = "time" === g.globalData.listOrder ? 1 : 0;
    return l.fileListRequestApis.getNormalList(i, d, D, g.globalData.listOrder, _).then(function(i) {
        var l = i.data, n = l.list, o = void 0 === n ? [] : n, h = l.has_more;
        v = 1;
        var u = (0, r.dataTransform)(o), g = u.length || 0;
        wx.getCurrentViewPage().setData({
            xListLen: g
        }), void 0 === h && (h = g === D);
        var S = {
            hasMore: !!h,
            isLoading: !1,
            start: d + g
        };
        a.data.start && d > 0 ? S.list = c.concat(u) : S.list = u;
        var A = S.list;
        if (t.call(a), p && w < f) {
            var m = [], _ = A.length;
            _ > f && (_ = f);
            for (var C, y = 0; y < _; y++) (C = A[y]).isSelect = !0, m.push(C.fs_id);
            S.selectedCount = _, S.selectList = m;
        }
        L && L.refreshCount && L.refreshCount(S.selectedCount), S.once = !0, S.showTips = !1, 
        a.setData(S), getApp().globalData.preShareData.list = A, S.selectedCount && a.triggerEvent("select", {
            isAll: p,
            count: S.selectedCount || 0,
            isAllDir: s.call(a),
            isAllFileOwner: e.call(a)
        });
    }).catch(function(t) {
        L.data.isTransAssistant && wx.log.transAssistant.selectPageFail.send({
            from: "catch"
        });
    });
}

function s() {
    var t = !0, e = this.data.list, i = !0, s = !1, a = void 0;
    try {
        for (var l, r = e[Symbol.iterator](); !(i = (l = r.next()).done); i = !0) {
            var n = l.value, o = n.isSelect, d = n.category;
            if (o && t && (t = 6 === d), !t) break;
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

function a(t) {
    var i = this;
    if (this.data.canSelected) {
        Array.isArray(t) || (t = [ t ]);
        var a = [];
        t.forEach(function(t) {
            var e = t.id, s = t.isSelect, l = i.data.selectList.includes(e);
            s && !l && i.data.selectList.length < f && i.data.selectList.push(e), !s && l && a.push(e);
        }), this.data.selectList = this.data.selectList.filter(function(t) {
            return !a.includes(t);
        });
        var l = this.data.selectList.length;
        this.data.isSelectedAll = l === this.data.list.length || l === f, this.data.selectedCount = l;
        var r = e.call(this);
        this.setData(this.data), this.triggerEvent("select", {
            isAll: this.data.isSelectedAll,
            count: l,
            isAllDir: s.call(this),
            isAllFileOwner: r
        });
    }
}

var l = require("../../../netdiisk_requestapi/getFileList.js"), r = require("../../../netdisk_utils/transform.js"), n = require("../../../netdisk_utils/common.js"), o = require("../../../netdisk_utils/checkFile.js"), d = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./initPage.js")), c = require("../../../netdisk_templates/empty_list/emptyList.js"), h = wx.ENV.CONF.MAINPAGE_FILES_LOAD_LIMITED_COUNT, u = wx.ENV.CONF.GRID_FILES_LOAD_LIMITED_COUNT, f = wx.ENV.CONF.BATCH_EDIT_LIMITED_COUNT, g = getApp(), v = 1;

Component({
    properties: {
        canSwitchMode: {
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
        canSelectAll: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isShow: !0,
        viewMode: "list",
        path: "/",
        isLoading: !0,
        hasMore: !0,
        list: [],
        start: 0,
        isSelectedAll: !1,
        selectedCount: 0,
        selectList: [],
        isGuideUser: g.globalData.isGuideUser,
        order: g.globalData.listOrder,
        showTips: !1,
        placeholderItem: {
            category: -4,
            path: "/test.rear",
            isdir: 0,
            isPlaceholder: !0,
            server_filename: "test.rear",
            size: 12862296
        }
    },
    observers: {
        list: function(t) {
            this.setData({
                innerList: t.slice().concat(this.data.placeholderItem)
            });
        }
    },
    ready: function() {
        this.data.canSwitchMode && this.setData({
            viewMode: wx.getCurrentViewMode()
        }), this.setData({
            isGuideUser: g.globalData.isGuideUser
        });
    },
    methods: {
        setMode: function(t) {
            this.data.canSwitchMode && (t && this.data.viewMode === t || (t || (t = "list" === this.data.viewMode ? "grid" : "list"), 
            this.setData({
                viewMode: t
            })));
        },
        loadMore: function() {
            !this.data.isLoading && this.data.hasMore && i.call(this, this.data.path, !1);
        },
        reloadList: function() {
            this.dispose(), this.data.canSelected && this.triggerEvent("select", {
                isAll: !1,
                count: 0,
                isAllDir: !1,
                isAllFileOwner: !1
            }), i.call(this, this.data.path);
        },
        loadList: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/", e = wx.getCurrentViewPage();
            this.refreshMode(), t !== this.data.path && this.dispose(), this.data.start = 0;
            var s = !(this.data.list.length > 0);
            i.call(this, t, s), this.setData({
                order: g.globalData.listOrder,
                isShow: !([ "batchEdit", "copyShare" ].indexOf(e.pageType) > -1)
            });
        },
        _selectItem: function(t) {
            var e = t.detail, i = e.id, s = e.isSelect;
            if (s && this.data.selectedCount >= f) wx.wetoast({
                content: "最多仅能对" + f + "个文件进行操作",
                duration: 1200
            }); else {
                var l = this.data.list, r = l.findIndex(function(t) {
                    return t.fs_id === i;
                });
                -1 !== r && (l[r].isSelect = s, this.setData({
                    list: l
                }), a.call(this, {
                    id: i,
                    isSelect: s
                }));
            }
        },
        update: function(t) {
            var e = this.data.list, i = t.fs_id, s = e.findIndex(function(t) {
                return t.fs_id === i;
            });
            -1 !== s && (e[s] = t, this.setData({
                list: e
            }), a.call(this, {
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
                }), 0 === i.length ? this.reloadList() : a.call(this, s);
            }
        },
        append: function(e) {
            var i = this.data.list;
            e.uk = wx.getStorageSync("uk"), this.setData({
                list: [ e ].concat(i)
            }), a.call(this, {
                id: e.fs_id,
                isSelect: !!e.isSelect
            }), t.call(this);
        },
        handleSelectAll: function() {
            this.selectedAll(!this.data.isSelectedAll);
            try {
                wx.getCurrentViewPage().data.isTransAssistant && wx.log.transAssistant.selectAll.send();
            } catch (t) {
                console.error(t);
            }
        },
        goback: function() {
            this.triggerEvent("goback");
        },
        selectedAll: function(t) {
            if (this.data.canSelected) {
                t = !!t;
                var i = this.data.list;
                if (t) {
                    var a = i.length, l = a > f ? 200 : a, r = [];
                    i = i.map(function(t, e) {
                        var i = e < l;
                        return t.isSelect = i, i && r.push(t.fs_id), t;
                    }), this.setData({
                        list: i,
                        isSelectedAll: !0,
                        selectedCount: r.length,
                        selectList: r
                    });
                } else i = i.map(function(t) {
                    return t.isSelect = !1, t;
                }), this.setData({
                    list: i,
                    isSelectedAll: !1,
                    selectedCount: 0,
                    selectList: []
                });
                var n = e.call(this);
                this.triggerEvent("select", {
                    isAll: t,
                    count: this.data.selectedCount,
                    isAllDir: s.call(this),
                    isAllFileOwner: n
                });
            }
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
        getCurrentPath: function() {
            return this.data.path;
        },
        initCurrentPage: d.default,
        show: function() {
            this.setData({
                isShow: !0
            });
        },
        hide: function() {
            this.setData({
                isShow: !1
            });
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
            return (0, n.generateFormId)(t);
        },
        tplClick: function() {
            wx.log.guide.diskNormal.send(), (0, c.clickBtn)();
        },
        orders: function() {
            var t = wx.getStorageSync("listOrder");
            if (t === this.data.order && v) {
                v = 0;
                var e = "time" === t ? "name" : "time";
                g.globalData.listOrder = e, wx.setStorageSync("listOrder", e), wx.log.send({
                    value: "文件排序",
                    type: "wx_order_" + e
                }), this.loadList(this.data.path), wx.wetoast({
                    content: "加载中...",
                    loading: !0,
                    duration: 500
                });
            }
        },
        batchReset: function() {
            this.data.list.map(function(t, e) {
                t.isSelect = !1;
            }), this.setData({
                selectedCount: 0,
                selectList: [],
                isSelectedAll: !1,
                list: this.data.list
            });
        },
        onSwitchMode: function(t) {
            var e = t.detail.mode;
            this.setMode(e), this.triggerEvent("switchMode");
        },
        refreshMode: function() {
            var t = this.selectComponent("#switchButton"), e = wx.getCurrentViewMode();
            this.setData({
                viewMode: e
            }), t && t.refreshIcon();
        }
    }
});