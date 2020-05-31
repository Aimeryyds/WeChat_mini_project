function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var n = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), l = require("../../../external/mta_analysis.js"), o = require("../../../common/md.js"), s = require("./baseService.js"), a = function(a) {
    function r(i) {
        return e(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
    }
    return i(r, s), n(r, [ {
        key: "loadMore",
        value: function() {
            var e = this;
            if (!this.Page.data.multiFileInfo.loadingMore) {
                var t = this.Page.data.multiFileInfo, i = t.dirList.length + t.fileList.length + t.noteList.length;
                if (!t.finished) {
                    var n = t.localPageContext || i;
                    this.setValueByKey("multiFileInfo.loadingMore", !0), this.loadShareInfo({
                        start: n
                    }).then(function(t) {
                        e.append(t), e.setValueByKey("multiFileInfo.loadingMore", !1);
                    }).catch(function(t) {
                        e.setValueByKey("multiFileInfo.loadingMore", !1), o.log("[share page]: fail, multiFileService.loadMore"), 
                        o.log("more info: " + t.message), o.write();
                    });
                }
            }
        }
    }, {
        key: "init",
        value: function(e) {
            var t = this, i = e.total_dir_count || 0, n = e.total_file_count || 0, l = e.total_note_count || 0, o = (e.dir_list || []).map(function(e) {
                return t.dirFormat(e);
            }), s = (e.file_list || []).map(function(e) {
                return t.fileFormat(e);
            }), a = (e.note_list || []).map(function(e) {
                return t.noteFormat(e);
            }), r = Boolean(0 === i && 0 === n && l > 0), u = i + n + l;
            this.Page.setData({
                multiFileInfo: {
                    isAllPicVideo: Boolean(e.is_all_pic_video),
                    isAllPic: Boolean(e.is_all_pic),
                    isAllVideo: Boolean(e.is_all_video),
                    isAllNote: r,
                    totalDirCount: i,
                    totalFileCount: n,
                    totalNoteCount: l,
                    selectedCount: 0,
                    totalCount: u,
                    dirList: o,
                    fileList: s,
                    noteList: a,
                    finished: e.finish_flag,
                    localPageContext: e.server_page_context,
                    loadingMore: !1,
                    selecting: !1,
                    allSelected: !1,
                    loadMoreAllSelected: !1
                }
            });
        }
    }, {
        key: "isFinished",
        value: function() {
            return this.Page.data.multiFileInfo.finished;
        }
    }, {
        key: "append",
        value: function(e) {
            var t = this, i = (e.dir_list || []).map(function(e) {
                return t.dirFormat(e);
            }), n = (e.file_list || []).map(function(e) {
                return t.fileFormat(e);
            }), l = (e.note_list || []).map(function(e) {
                return t.noteFormat(e);
            });
            this.Page.data.multiFileInfo.loadMoreAllSelected && (i.forEach(function(e) {
                e.selected = !0;
            }), n.forEach(function(e) {
                e.selected = !0;
            }), l.forEach(function(e) {
                e.selected = !0;
            })), this.Page.setData({
                "multiFileInfo.finished": e.finish_flag,
                "multiFileInfo.localPageContext": e.server_page_context || ""
            }), this.appendArray(i, "multiFileInfo.dirList"), this.appendArray(n, "multiFileInfo.fileList"), 
            this.appendArray(l, "multiFileInfo.noteList");
        }
    }, {
        key: "setItemSelected",
        value: function(e, t) {
            if ("folder" === e.type) {
                var i = "multiFileInfo.dirList[" + this.dirList.findIndex(function(t) {
                    return t.id === e.id;
                }) + "].selected";
                this.setValueByKey(i, t);
            } else if ("note" === e.type) {
                var n = "multiFileInfo.noteList[" + this.noteList.findIndex(function(t) {
                    return t.id === e.id;
                }) + "].selected";
                this.setValueByKey(n, t);
            } else {
                var l = "multiFileInfo.fileList[" + this.fileList.findIndex(function(t) {
                    return t.id === e.id;
                }) + "].selected";
                this.setValueByKey(l, t);
            }
            this.updateAllSelected(), this.updateSelectedCount();
        }
    }, {
        key: "setAllSelected",
        value: function(e) {
            var t = {};
            this.dirList.forEach(function(i, n) {
                t["multiFileInfo.dirList[" + n + "].selected"] = e;
            }), this.fileList.forEach(function(i, n) {
                t["multiFileInfo.fileList[" + n + "].selected"] = e;
            }), this.noteList.forEach(function(i, n) {
                t["multiFileInfo.noteList[" + n + "].selected"] = e;
            }), t["multiFileInfo.allSelected"] = e, t["multiFileInfo.loadMoreAllSelected"] = e, 
            this.Page.setData(t), this.updateSelectedCount();
        }
    }, {
        key: "updateAllSelected",
        value: function() {
            var e = !0;
            this.allList.forEach(function(t) {
                t.selected || (e = !1);
            }), this.setValueByKey("multiFileInfo.allSelected", e);
        }
    }, {
        key: "updateSelectedCount",
        value: function() {
            this.setValueByKey("multiFileInfo.selectedCount", this.selectedCount);
        }
    }, {
        key: "setSelecting",
        value: function(e) {
            e && this.setAllSelected(!0), this.Page.setData({
                choosingPath: e,
                "multiFileInfo.selecting": e
            });
        }
    }, {
        key: "saveAllSelected",
        value: function(e) {
            var t = this;
            l.Event.stat("baocun", {
                sharesavedo: "true"
            });
            var i = e.pDirKey || "", n = e.ppDirKey || "", s = {
                fileList: this.selectedFileList.map(function(e) {
                    return {
                        pdir_key: e.pdirKey,
                        file_id: e.id,
                        file_name: e.name,
                        file_size: e.size
                    };
                }),
                dirList: this.selectedDirList.map(function(e) {
                    return {
                        pdir_key: e.pdirKey,
                        dir_key: e.id,
                        dir_name: e.name
                    };
                }),
                noteList: [],
                isSaveAll: this.Page.data.multiFileInfo.allSelected,
                dstPpdirKey: n,
                dstPdirKey: i
            };
            this.doSave(s).then(function() {
                t.setSelecting(!1), wx.reLaunch({
                    url: "../index/index?save_share=true"
                });
            }).catch(function(e) {
                o.log("[share page]: fail, multiFileService.saveAllSelected"), o.log("more info: " + e.message), 
                o.write(), wx.showToast({
                    icon: "none",
                    title: "" + e.message
                });
            });
        }
    }, {
        key: "saveAllSelectedAsync",
        value: function(e) {
            var t = this;
            l.Event.stat("baocun", {
                sharesavedo: "true"
            });
            var i = e.pDirKey || "", n = e.ppDirKey || "", s = {
                fileList: this.selectedFileList.map(function(e) {
                    return {
                        pdir_key: e.pdirKey,
                        file_id: e.id,
                        file_name: e.name,
                        file_size: e.size
                    };
                }),
                dirList: this.selectedDirList.map(function(e) {
                    return {
                        pdir_key: e.pdirKey,
                        dir_key: e.id,
                        dir_name: e.name
                    };
                }),
                noteList: [],
                isSaveAll: this.Page.data.multiFileInfo.allSelected,
                dstPpdirKey: n,
                dstPdirKey: i
            };
            return new Promise(function(e, i) {
                t.doSave(s).then(function(i) {
                    t.setSelecting(!1), e(i);
                }).catch(function(e) {
                    o.log("[share page]: fail, multiFileService.saveAllSelected"), o.log("more info: " + e.message), 
                    o.write(), i(e);
                });
            });
        }
    }, {
        key: "dirList",
        get: function() {
            return this.Page.data.multiFileInfo.dirList;
        }
    }, {
        key: "fileList",
        get: function() {
            return this.Page.data.multiFileInfo.fileList;
        }
    }, {
        key: "noteList",
        get: function() {
            return this.Page.data.multiFileInfo.noteList;
        }
    }, {
        key: "allList",
        get: function() {
            return this.dirList.concat(this.fileList, this.noteList);
        }
    }, {
        key: "selectedDirList",
        get: function() {
            return this.dirList.filter(function(e) {
                return e.selected;
            });
        }
    }, {
        key: "selectedFileList",
        get: function() {
            return this.fileList.filter(function(e) {
                return e.selected;
            });
        }
    }, {
        key: "selectedNoteList",
        get: function() {
            return this.noteList.filter(function(e) {
                return e.selected;
            });
        }
    }, {
        key: "selectedCount",
        get: function() {
            var e = 0, t = this.Page.data.multiFileInfo;
            if (t.allSelected) e = t.totalCount; else {
                var i = 0;
                if (this.allList.forEach(function(e) {
                    e.selected && i++;
                }), t.finished || !t.loadMoreAllSelected) e = i; else {
                    var n = t.dirList.length + t.fileList.length + t.noteList.length;
                    e = t.totalCount - n + i;
                }
            }
            return e;
        }
    } ]), r;
}();

module.exports = a;