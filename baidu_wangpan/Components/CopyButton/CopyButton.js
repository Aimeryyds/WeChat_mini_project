function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
}, i = require("../../netdiisk_requestapi/copyFile.js"), a = require("../../netdisk_utils/transform.js"), r = e(require("../../netdisk_utils/calculate.js")), s = require("../../netdisk_utils/common.js"), o = require("../../netdisk_utils/guideMemberMixin"), n = e(o), d = [], l = null, u = function(e) {
    return r.default.formatTime(new Date(1e3 * e));
};

Component({
    behaviors: [ n.default ],
    properties: {},
    data: {
        count: 0,
        pathList: [],
        duplicateFiles: [],
        currentPath: "",
        pathParams: {},
        times: 10,
        delaytime: 2e3,
        disabled: !1
    },
    ready: function() {
        this.toast = this.selectComponent("#toast"), this.progressPopup = this.selectComponent("#popup-progress"), 
        this.repeatPopup = this.selectComponent("#popup-repeat");
    },
    methods: {
        reSetData: function(e) {
            this.setData(t({}, e));
        },
        setDisabled: function(e) {
            this.setData({
                disabled: !!e
            });
        },
        wetoast: function(e) {
            var t = this, i = e.content, a = e.duration;
            clearTimeout(l), this.toast.show(i), l = setTimeout(function() {
                t.toast.hide();
            }, a || 800);
        },
        handlingError: function(e) {
            var t = e.errCode, i = e.data, r = void 0 === i ? {} : i;
            if (this.triggerEvent("copyEnd"), 1 === t) return this.progressPopup.show(), void wx.log.send({
                value: "wx_copyfile_fail_" + this.data.from + "_" + t,
                type: "复制失败"
            });
            wx.log.send({
                value: "wx_copyfile_fail_" + this.data.from + "_" + r.task_errno,
                type: "复制失败"
            });
            var n = getApp().globalData.userCenterInfo || {}, l = n && n.quotaSize || {}, p = (0, 
            o.getTipByQuota)({
                size: r.target_size,
                total: l.total,
                used: l.used
            });
            if (2 === t) {
                var h = r.errno, c = r.task_errno, f = r.list;
                if (0 === h && -30 === c) {
                    this.repeatPopup.show(), d = f;
                    var g = f[0], m = g.from, v = g.to_meta, y = g.from_meta, _ = m.split("/").pop(), w = "folder", F = void 0;
                    return 0 === y.isdir && (w = (0, s.checkType)(m)), F = wx.ENV.staticName + "mini-program/images/ic_" + w + ".png", 
                    void this.setData({
                        count: f.length,
                        duplicateFiles: [ {
                            title: "目标文件",
                            icon: F,
                            fileName: _,
                            fileTime: u(v.mtime),
                            fileSize: (0, a.toFriendlyQuotaSize)(v.size)
                        }, {
                            title: "原有文件",
                            icon: F,
                            fileName: _,
                            fileTime: u(y.mtime),
                            fileSize: (0, a.toFriendlyQuotaSize)(y.size)
                        } ]
                    });
                }
                if (0 === h && 4 === c) return void this.wetoast({
                    content: "文件已存在",
                    duration: 3e3
                });
                if (0 === h && -32 === c && p) return this.showGuideMemberModal(), void this.setData({
                    guideMemberTip: Object.assign({}, p, {
                        trigger: "copy"
                    })
                });
            }
            this.wetoast({
                content: "复制失败，请稍后重试",
                duration: 3e3
            });
        },
        asyncCopyFiles: function(e) {
            var t = this, a = e.fileList, r = e.ondup, s = void 0 === r ? "" : r, o = e.pathKey, n = a[0].path;
            (n = n && n.substring(0, n.length - a[0].server_filename.length)) !== this.data.currentPath ? (this.triggerEvent("copyStart"), 
            (0, i.asyncCopyFiles)({
                ondup: s,
                pathKey: o,
                fileList: a,
                dest: this.data.currentPath,
                times: this.data.times,
                delaytime: this.data.delaytime
            }).then(function(e) {
                t.triggerEvent("refreshList"), t.wetoast({
                    content: "复制成功",
                    duration: 3e3
                }), wx.log.send({
                    value: "wx_copyfile_success_" + t.data.from,
                    type: "复制成功"
                }), t.goToTargetFolder(), t.triggerEvent("copyEnd");
            }).catch(function(e) {
                var i = e.errCode, a = e.data;
                t.handlingError({
                    errCode: i,
                    data: a
                });
            })) : this.wetoast({
                content: "文件已在目标文件夹中",
                duration: 3e3
            });
        },
        close: function() {
            this.triggerEvent("copyEnd");
        },
        save: function() {
            this.data.disabled || this.asyncCopyFiles({
                fileList: this.data.pathList,
                pathKey: "path"
            });
        },
        dealDuplicateFiles: function(e) {
            this.asyncCopyFiles({
                fileList: d,
                pathKey: "from",
                ondup: e
            }), this.repeatPopup.hide();
        },
        saveByOverwrite: function() {
            this.dealDuplicateFiles("overwrite");
        },
        saveByNewCopy: function() {
            this.dealDuplicateFiles("newcopy");
        },
        goToTargetFolder: function() {
            var e = this.data.currentPath && "/" != this.data.currentPath, t = this.data.pathParams, i = "isShare=" + t.isShare + "&isRoot=" + t.isRoot + "&fid=" + t.fid + "&serverFilename=" + t.serverFilename + "&fileMeta=" + t.fileMeta + "&isHideBack=true", a = e ? "/pages/netdisk_dirdetail/dirdetail?path=" + this.data.currentPath + "&" + i : "/pages/netdisk_index/index";
            wx.reLaunch({
                url: a
            });
        },
        lookUpProgress: function() {
            var e = this;
            (0, i.execTaskQuery)().then(function(t) {
                e.triggerEvent("refreshList"), e.goToTargetFolder(), e.triggerEvent("copyEnd");
            }).catch(function(t) {
                var i = t.errCode, a = t.data;
                e.handlingError({
                    errCode: i,
                    data: a
                });
            }), this.progressPopup.hide();
        },
        lookUpCopiedFiles: function() {
            this.progressPopup.hide(), this.goToTargetFolder();
        }
    }
});