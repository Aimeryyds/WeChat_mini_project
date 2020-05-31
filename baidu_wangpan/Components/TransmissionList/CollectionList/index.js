var t = require("../../../netdiisk_requestapi/transAssistant.js"), e = require("../../../netdisk_utils/transform.js"), i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../netdisk_utils/transListTtpMixin.js")), s = getApp().globalData;

Component({
    behaviors: [ i.default ],
    properties: {
        uuid: {
            type: String,
            value: ""
        },
        leftTime: {
            type: Number,
            value: 0
        },
        title: {
            type: String,
            value: ""
        },
        msgCnt: {
            type: Number,
            optionalTypes: [ String ],
            value: 0,
            observer: function(t) {
                this.checkTransListTip(t);
            }
        }
    },
    data: {
        list: [],
        selectList: [],
        selectedCount: 0,
        hasMore: 0,
        loading: !1,
        canSelected: !1,
        barType: "transCollectionDetailList"
    },
    methods: {
        handleClick: function(t) {
            var e = t.detail.fileMeta, i = e.uuid, s = e.tid, a = e.sender_id, n = e.file_type, l = e.fs_id, r = e.status, o = e.save_path;
            if (3 !== r) if (this.data.canSelected) this.selectItem(e, !e.isSelect); else {
                var c = 0 === n;
                1 !== r && (o = "");
                var d = {
                    uuid: i,
                    tid: s,
                    title: this.data.title,
                    uk: a,
                    fsid: l,
                    isFile: c ? 1 : 0,
                    savePath: o
                };
                wx.safeNavigateTo("/pages/netdisk_collection_detail/index", d);
            } else this.handleMsg("该文件已撤回");
        },
        shareHandler: function() {
            this.triggerEvent("shareHandler");
        },
        init: function() {
            0 === this.data.list.length && this.getList(0), s.transSaveClearSelect && (this.clearSelect(), 
            s.transSaveClearSelect = !1, this.getList(0));
        },
        handleMsg: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
            wx.wetoast({
                content: t,
                duration: e
            });
        },
        getList: function(i) {
            var s = this;
            this.setData({
                loading: !0
            });
            var a = function() {
                s.setData({
                    loading: !1
                });
            };
            (0, t.getSendList)({
                start: i,
                limit: 15,
                uuid: this.data.uuid
            }).then(function(n) {
                if (a(), 0 === (n = n.data || {}).errno) {
                    var l = s.data.hasMore;
                    "number" == typeof n.has_more && (l = n.has_more);
                    var r = n.list;
                    r.forEach(function(t) {
                        t.server_filename = t.file_name, t.server_mtime = t.ctime, 2 !== t.file_type && 1 !== t.file_type || (t.isdir = 1), 
                        t.isSelect = !1;
                    }), r = (0, e.dataTransform)(r, !1), s.setData({
                        list: 0 === i ? r : s.data.list.concat(r),
                        hasMore: l
                    }), wx.getCurrentViewPage().setData({
                        xListLen: s.data.list.length
                    });
                } else {
                    var o = t.errMap[n.errno] || "出错了，请稍后重试";
                    s.handleMsg(o);
                }
            }).catch(function(t) {
                console.error(t), a(), s.handleMsg("出错了，请稍后重试");
            });
        },
        saveMoreToast: function() {
            wx.wetoast({
                content: "仅支持单文件保存",
                duration: 1200
            });
        },
        moreSelectItem: function(t) {
            var e = t.detail || {}, i = e.isSelect, s = e.fileMeta;
            s && (this.longPress({
                canSelected: !0
            }), this.selectItem(s, i));
        },
        selectItem: function(t, e) {
            var i = this.data, s = i.selectList, a = i.list;
            if (e && s.length >= 1) this.saveMoreToast(); else {
                var n = t.tid, l = a.findIndex(function(t) {
                    return t.tid === n;
                });
                if (-1 !== l) {
                    a[l].isSelect = e;
                    var r = s.concat([]), o = !1;
                    e ? (r.push(n), r.length === a.length && (o = !0)) : r.splice(r.indexOf(n), 1), 
                    this.setData({
                        list: a,
                        isSelectedAll: o,
                        selectList: r,
                        selectedCount: r.length
                    });
                }
            }
        },
        handleLongPress: function(t) {
            this.longPress(t.detail);
        },
        longPress: function(t) {
            var e = t.canSelected;
            this.setData({
                canSelected: e
            }), this.triggerEvent("longPress");
        },
        loadMore: function() {
            var t = this.data, e = t.loading, i = t.hasMore, s = t.list;
            e || i && this.getList(s.length);
        },
        getSelectItems: function() {
            var t = this.data, e = t.list, i = t.selectList;
            return e.filter(function(t) {
                return -1 !== i.indexOf(t.tid);
            });
        },
        resetList: function() {
            var t = this.data.list;
            t = t.map(function(t) {
                return t.isSelect = !1, t;
            }), this.setData({
                list: t,
                isSelectedAll: !1,
                selectList: [],
                selectedCount: 0
            });
        },
        selectedAll: function() {
            var t = this.data, e = t.isSelectedAll, i = t.list, s = t.selectedCount;
            if (e) this.resetList(); else if (s > 0) this.saveMoreToast(); else {
                e = !1, 1 === i.length ? e = !0 : this.saveMoreToast();
                var a = [], n = void 0;
                for (n = 0; n < i.length; n++) {
                    var l = i[n];
                    if (3 !== l.status) {
                        a.push(l.tid), l.isSelect = !0;
                        break;
                    }
                }
                this.setData({
                    list: i,
                    isSelectedAll: e,
                    selectedCount: a.length,
                    selectList: a
                });
            }
        },
        bottomBtnFn: function() {
            wx.log.transAssistant.myCollectionDetailSaveBtn.send();
            var t = this.data, e = t.list, i = t.selectList, a = e.filter(function(t) {
                return -1 !== i.indexOf(t.tid);
            }).map(function(t) {
                return {
                    uuid: t.uuid,
                    tid: t.tid,
                    fs_id: t.fs_id,
                    sender_id: t.sender_id
                };
            });
            s.transSaveClearSelect = !1, wx.safeNavigateTo("/pages/netdisk_copyshare/copyshare", {
                from: "trans",
                saveList: JSON.stringify(a)
            });
        },
        checkTransListTip: function(t) {
            t && this.setData({
                showTransListTip: !0
            });
        },
        clearSelect: function() {
            this.goback();
        },
        goback: function() {
            this.resetList(), this.setData({
                canSelected: !1
            }), this.triggerEvent("cancelSelect");
        }
    }
});