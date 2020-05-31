function e(e, i, t) {
    return i in e ? Object.defineProperty(e, i, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = t, e;
}

var i = function() {
    function e(e, i) {
        var t = [], r = !0, a = !1, s = void 0;
        try {
            for (var n, o = e[Symbol.iterator](); !(r = (n = o.next()).done) && (t.push(n.value), 
            !i || t.length !== i); r = !0) ;
        } catch (e) {
            a = !0, s = e;
        } finally {
            try {
                !r && o.return && o.return();
            } finally {
                if (a) throw s;
            }
        }
        return t;
    }
    return function(i, t) {
        if (Array.isArray(i)) return i;
        if (Symbol.iterator in Object(i)) return e(i, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), t = require("../../external/mta_analysis.js"), r = require("../../common/md.js"), a = require("../../common/user.js"), s = require("./service/fileInitService.js"), n = require("./service/multiFileService.js"), o = require("./service/singleFileService.js"), l = require("./service/tucaoService.js"), c = require("./service/hostService.js"), u = require("./service/guestService.js"), h = require("./service/twiceShareService.js"), d = require("./service/previewService.js"), v = require("./service/errorService.js"), f = require("../../common/request.js"), p = require("../../common/file.js"), g = (getApp() || {}).global, m = {
    name: "",
    key: "",
    pDirKey: "",
    ppDirKey: ""
}, D = {
    name: "",
    key: "",
    pDirKey: "",
    ppDirKey: ""
}, y = "", S = "", w = 0;

Page({
    data: {
        isIPhoneX: /iPhone X/.test(wx.getSystemInfoSync().model),
        personBoxVisibility: !1,
        personBoxAnimation: null,
        initing: !0,
        choosingPath: !1
    },
    onLoad: function(e) {
        var f = this;
        r.log("share onLoad"), t.Page.init(), t.Event.stat("baocun", {
            shareenter: "true"
        });
        var g = e.single_file_info || "";
        g = decodeURIComponent(g);
        try {
            g = JSON.parse(g);
        } catch (e) {
            g = null;
        }
        this.setData({
            shareKey: decodeURIComponent(e.share_key || ""),
            shareDirKey: decodeURIComponent(e.share_dir_key || ""),
            shareName: decodeURIComponent(e.share_name || ""),
            from: e.from || "",
            urlTransferSingle: g
        }), wx.setNavigationBarTitle({
            title: "微云分享"
        }), this.tucaoService = new l(this), this.twiceShareService = new h(this), this.previewService = new d(this), 
        this.errorService = new v(this), this.multiFileService = new n(this), this.singleFileService = new o(this), 
        this.fileInitService = new s(this), this.hostService = new c(this), a.getWxUserInfo().then(function() {
            return Promise.all([ f.fileInitService.init(), f.hostService.init() ]).then(function(e) {
                var t = i(e, 1)[0], r = t.type, a = t.shareInfo;
                switch (r) {
                  case "urlTransferSingle":
                    f.singleFileService.init(a, !1);
                    break;

                  case "single":
                    f.singleFileService.init(a, !0);
                    break;

                  case "multi":
                    f.multiFileService.init(a);
                    break;

                  case "encrypt":
                    f.errorService.fullscreen({
                        msg: "暂不支持查看加密分享"
                    });
                    break;

                  default:
                    f.errorService.fullscreen({
                        msg: "未知的分享信息"
                    });
                }
                f.guestService = new u(f), f.guestService.init(a);
            });
        }).then(function() {
            m = {
                name: "微云",
                key: f.data.host.mainDirKey,
                pDirKey: f.data.host.mainDirKey,
                ppDirKey: f.data.host.rootDirKey
            }, f.saveSelectDir(), y = D.name + "/", p.setStore({
                dir_key: D.key,
                dir_name: D.name,
                pdir_key: D.pDirKey,
                ppdir_key: D.ppDirKey
            }), f.setData({
                initing: !1,
                selectDirInfo: {
                    currDir: D.name
                }
            });
        }).catch(function(e) {
            f.errorService.fullscreen(e), f.setData({
                initing: !1
            });
        });
    },
    onReady: function() {
        r.log("share onReady");
    },
    onShow: function() {
        r.log("share onShow");
    },
    onHide: function() {
        r.log("share onHide");
    },
    onUnload: function() {
        r.log("share onUnload");
    },
    onReachBottom: function() {
        r.log("share onReachBottom");
    },
    onShareAppMessage: function() {
        return r.log("share onShareAppMessage"), "disk" === this.data.from && t.Event.stat("fenxianggeibier", {
            sharemessage: "true"
        }), this.twiceShareService.getInfo();
    },
    scrollToBottom: function() {
        this.multiFileService.isMulti() && (this.multiFileService.isFinished() || this.multiFileService.loadMore());
    },
    clickItem: function(e) {
        var i = void 0;
        i = "tap" === e.type ? e.currentTarget.dataset.item : e.detail.currentTarget.dataset.item, 
        this.multiFileService.isMulti() ? this.data.multiFileInfo.selecting ? this.multiFileService.setItemSelected(i, !i.selected) : "folder" === i.type ? this.enterDir(i) : this.previewFile(i) : this.previewFile(i);
    },
    enterDir: function(e) {
        if (getCurrentPages().length >= 8) wx.showToast({
            icon: "none",
            duration: 3e3,
            title: "浏览层数过多，无法正常访问"
        }); else {
            var i = "index?share_key=" + this.data.shareKey + "&share_dir_key=" + e.id + "&share_name=" + e.name;
            wx.navigateTo({
                url: i,
                success: function() {
                    r.log("[share page]: success, enterDir navigate to " + i);
                },
                fail: function(e) {
                    r.log("[share page]: fail, enterDir navigate to " + i), r.log("more info: " + e.message + "}"), 
                    r.write();
                }
            });
        }
    },
    previewFile: function(e) {
        switch (e.type) {
          case "pic":
            this.previewService.pic(e);
            break;

          case "audio":
            this.previewService.audio(e);
            break;

          case "video":
            this.previewService.video(e);
            break;

          case "doc":
          case "xls":
          case "ppt":
          case "txt":
          case "pdf":
            this.previewService.document(e).catch(function(e) {
                wx.showToast({
                    icon: "none",
                    title: e.message,
                    duration: 3e3
                });
            });
            break;

          default:
            wx.showToast({
                icon: "none",
                title: "暂不支持预览该文件"
            });
        }
    },
    selectSaveDirLoadMore: function() {
        var e = this;
        if (!this.data.selectDirInfo.finished && !this.data.dirLoading) {
            if (w >= 10) return this.data.dirTips || this.setData({
                dirTips: "当前列表长度超过限制，请用微云APP查看更多文件"
            }), void r.log("[share page]: onloadmore pageNum limit, pageNum: " + w);
            this.data.dirTips && this.setData({
                dirTips: ""
            }), this.setData({
                dirLoading: !0
            }), this.dirLoader({
                key: D.key,
                start: this.data.selectDirInfo.dirList.length,
                pageNum: w + 1
            }).then(function() {
                e.setData({
                    dirLoading: !1
                }), w++, e.dirRender({
                    more: !0,
                    pageNum: w
                });
            }, function() {
                e.setData({
                    dirLoading: !1
                }), r.log("[share page]: loadMore loader fail");
            });
        }
    },
    cancelSelectDir: function() {
        this.setData({
            isSelectingDir: !1,
            selectDirInfo: {
                currDir: D.name
            }
        });
    },
    saveSelectDir: function() {
        this.updateCurrDir(), this.setData({
            isSelectingDir: !1
        });
    },
    saveIntoSelectDir: function() {
        this.updateCurrDir(), this.setData({
            isSelectingDir: !1
        }), this.save();
    },
    selectSaveDirBackToUpper: function() {
        var i = this;
        if (m.key !== this.data.host.mainDirKey) {
            var t = p.getStore(m.pDirKey);
            m = {
                name: t.dir_name,
                key: t.dir_key,
                pDirKey: t.pdir_key,
                ppDirKey: t.ppdir_key
            }, this.dirLoader({}).then(function() {
                i.dirRender({});
                var t = i.data.selectDirInfo.fullPath || "", r = t.lastIndexOf("/", t.length - 2);
                S = t.substring(0, r + 1), i.setData(e({}, "selectDirInfo.fullPath", S));
            }, function() {
                r.log("[share page]: bindBreadcrumbTap loader fail");
            });
        } else this.setData({
            isSelectingDir: !1
        });
    },
    updateCurrDir: function() {
        D = {
            name: m.name,
            key: m.key,
            pDirKey: m.pDirKey,
            ppDirKey: m.ppDirKey
        }, y = S;
    },
    updateTempDir: function() {
        m = {
            name: D.name,
            key: D.key,
            pDirKey: D.pDirKey,
            ppDirKey: D.ppDirKey
        }, S = y;
    },
    enterSelectSaveDir: function() {
        var i = this;
        this.updateTempDir(), this.dirLoader({}).then(function() {
            i.dirRender({}), i.setData(e({
                isSelectingDir: !0
            }, "selectDirInfo.fullPath", y));
        });
    },
    selectSaveDir: function(i) {
        var t = this;
        m = {
            name: i.detail.name,
            key: i.detail.key,
            pDirKey: i.detail.pDirKey,
            ppDirKey: i.detail.ppDirKey
        }, this.dirLoader({}).then(function() {
            t.dirRender({}), S = (t.data.selectDirInfo.fullPath || "") + m.name + "/", t.setData(e({}, "selectDirInfo.fullPath", S));
        });
    },
    dirLoader: function() {
        var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (g.userInfo.is_pwd_open) {
            var t = wx.getStorageSync("indepInfo"), a = t.access, s = void 0 !== a && a, n = t.expire, o = void 0 === n ? 0 : n;
            if (!s || +new Date() >= o) return wx.redirectTo({
                url: "../password/index?uin=" + g.userInfo.uin
            }), Promise.reject({
                msg: "global.indep invoked, navigate to password page"
            });
        }
        var l = i.name || m.name, c = i.key || m.key, u = i.start || 0, h = i.count || 20, d = i.pageNum || 0;
        r.log("[share page select save dir]: dir loader request start: " + u + ", count: " + h + ", pageNum: " + d);
        var v = {
            cmd: "DiskDirBatchList",
            data: {
                dir_list: [ {
                    get_type: 1,
                    start: u,
                    count: h,
                    get_abstract_url: !1,
                    dir_key: c,
                    dir_name: l
                } ]
            }
        };
        return new Promise(function(i, t) {
            wx.showLoading(), f.webapp(v).then(function(t) {
                wx.hideLoading();
                var r = e.handleDirData(t);
                d ? g.navData.new_share = r : g.navData.old_share = r, i(r);
            }, function(e) {
                r.log("[share page]: get nav[" + c + "] data fail"), r.log("more info: " + JSON.stringify(error)), 
                r.write() && wx.showToast({
                    title: "数据加载失败",
                    icon: "none",
                    duration: 3e3
                }), t(error);
            });
        });
    },
    handleDirData: function(i) {
        var t = void 0, r = p.getStore(m.key), a = [], s = void 0, n = void 0, o = void 0;
        return t = (i.dir_list || [])[0] || {}, o = r.pdir_key || g.userInfo.root_dir_key, 
        n = r.dir_key || g.userInfo.main_dir_key, a = p.format(t.dir_list || [], "dir", n, o), 
        s = a.length, console.log("finished: " + t.finish_flag), this.setData(e({}, "selectDirInfo.finished", Boolean(t.finish_flag))), 
        {
            dirList: a,
            dirLength: s
        };
    },
    dirRender: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.pageNum || 0, t = g.navData.old_share || {}, a = {};
        r.log("[share page]: render, pageNum: " + i + ", more: " + !!e.more), e.more && (a = g.navData.new_share || {}, 
        t = {
            dirList: t.dirList.concat(a.dirList || [])
        }, g.navData.old_share = t), this.setData({
            selectDirInfo: {
                fullPath: this.data.selectDirInfo.fullPath,
                dirList: Object.assign(t.dirList),
                currDir: m.name,
                dirLength: t.dirList.length,
                isIndex: m.key === m.pDirKey,
                finished: this.data.selectDirInfo.finished
            }
        });
    },
    enterSelection: function() {
        this.multiFileService.isMulti() && this.multiFileService.setSelecting(!0), this.setData({
            choosingPath: !0
        });
    },
    cancelSelection: function() {
        this.multiFileService.setSelecting(!1), this.setData({
            choosingPath: !1
        });
    },
    selectAll: function() {
        this.multiFileService.setAllSelected(!0);
    },
    cancelSelectAll: function() {
        this.multiFileService.setAllSelected(!1);
    },
    saveRetry: function() {
        this.save();
    },
    saveBackground: function() {
        this._loopSave && clearInterval(this._loopSave);
    },
    save: function() {
        var e = this;
        if (t.Event.stat("baocun", {
            sharesaveselect: "true"
        }), this.multiFileService.isMulti()) {
            if (0 === this.multiFileService.selectedCount) return;
            var i = 0, r = setInterval(function() {
                e.multiFileService.saveAllSelectedAsync({
                    pDirKey: D.key,
                    ppDirKey: D.pDirKey
                }).then(function(t) {
                    if (i++, 24301 === t.code && 1 === i) e.selectComponent("#toast-bar").show({
                        message: t.message
                    }), clearInterval(r), i = 0; else if (24301 === t.code) {
                        var a = "成功保存至" + e.data.selectDirInfo.currDir;
                        e.selectComponent("#save-result").showSaveResult({
                            type: "success",
                            title: "保存成功",
                            message: a,
                            times: i
                        }), clearInterval(r), i = 0;
                    } else {
                        var s = "正在保存至" + e.data.selectDirInfo.currDir;
                        e.selectComponent("#save-result").showSaveResult({
                            type: "progress",
                            title: "保存中",
                            message: s,
                            times: i
                        });
                    }
                }).catch(function(t) {
                    e.selectComponent("#save-result").showSaveResult({
                        type: "fail",
                        title: "保存失败",
                        message: t.message,
                        times: i
                    }), clearInterval(r), i = 0;
                });
            }, 1e3);
        } else {
            this.setData({
                choosingPath: !1
            });
            var a = 0;
            this._loopSave = setInterval(function() {
                e.singleFileService.saveAsync({
                    pDirKey: D.key,
                    ppDirKey: D.pDirKey
                }).then(function(i) {
                    if (a++, 24301 === i.code && 1 === a) e.selectComponent("#toast-bar").show({
                        message: i.message
                    }), clearInterval(e._loopSave), a = 0; else if (24301 === i.code) {
                        var t = "成功保存至" + e.data.selectDirInfo.currDir;
                        e.selectComponent("#save-result").showSaveResult({
                            type: "success",
                            title: "保存成功",
                            message: t,
                            times: a
                        }), clearInterval(e._loopSave), a = 0;
                    } else {
                        var r = "正在保存至" + e.data.selectDirInfo.currDir;
                        e.selectComponent("#save-result").showSaveResult({
                            type: "progress",
                            title: "保存中",
                            message: r,
                            times: a
                        });
                    }
                }).catch(function(i) {
                    e.selectComponent("#save-result").showSaveResult({
                        type: "fail",
                        title: "保存失败",
                        message: i.message,
                        times: a
                    }), clearInterval(e._loopSave), a = 0;
                });
            }, 1e3);
        }
    },
    onStatusBarInited: function(e) {
        this.setData({
            statusBarHeight: e.detail.height || 64
        });
    }
});