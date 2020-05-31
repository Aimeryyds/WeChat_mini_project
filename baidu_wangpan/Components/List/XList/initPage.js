Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, t = require("../../../netdiisk_requestapi/fileOper.js"), a = require("../../../netdisk_utils/common.js"), i = require("../../../netdisk_utils/transform.js"), r = (require("../../../netdisk_utils/errnoText.js"), 
require("../../../netdisk_utils/shareFn.js"));

(function(e) {
    e && e.__esModule;
})(require("../../../netdisk_utils/upload.js")), require("../../../netdiisk_requestapi/getUserCenterInfo.js");

exports.default = function(n) {
    var o = getApp();
    n.formSubmit = function(e) {
        return (0, a.generateFormId)(e);
    }, n.rename = function(e) {
        if (wx.log.normal.modifiedShareDirName.send(), n.data.sharedirData && !n.data.sharedirData.dirMeta.is_owner && e && e.oper_id !== wx.getStorageSync("uk")) wx.wetoast({
            content: "只能管理自己上传的文件哦",
            duration: 1500
        }); else {
            var t = e.server_filename, a = "ios" === o.globalData.systemInfo.platform ? 250 : t.length;
            n.dialog.show({
                title: "重命名",
                selectionEnd: a,
                value: t
            });
        }
    }, n.dialogConfirm = function(a, i, r, o) {
        if (o) {
            var s = n.modalDialog.getFileMeta().path;
            return s = s.slice(1, s.length - 1), n.shareDirRename(a, i, s);
        }
        if (i) n.createDir(a); else {
            var l = n.modalDialog.getFileMeta(), d = "文件" + (1 === l.isdir ? "夹" : "");
            t.fileOper.asyncRenameDir(l.path, a).then(function(t) {
                var a = t.data.list[0].to, i = a.match(/.*\/(.*)$/), r = i && i[1] || a;
                n.XList.update(e({}, l, {
                    server_filename: r,
                    path: a
                })), wx.wetoast({
                    content: d + "重命名成功",
                    duration: 3e3
                });
            }).catch(function() {
                wx.wetoast({
                    content: d + "重命名失败",
                    duration: 3e3
                });
            });
        }
    }, n.createDir = function(e) {
        var a = n.XList.getCurrentPath(), r = "", s = "/" === a.substr(-1) ? "" : "/", l = a + s + e;
        t.fileOper.createDir(l).then(function(e) {
            var t = e.data;
            wx.wetoast({
                content: "新建文件夹成功",
                duration: 800
            });
            var l = t.path.replace(a + s, ""), d = {
                category: 6,
                dir_empty: 1,
                empty: 0,
                fs_id: t.fs_id,
                path: t.path,
                server_ctime: (0, i.transformTime)(t.ctime),
                server_mtime: (0, i.transformTime)(t.mtime),
                server_filename: l,
                share: n.data.sharedirData ? 1 : 0,
                size: "0B",
                unlist: 0,
                isdir: t.isdir
            };
            if (n.XList.append(d), n.data.sharedirData) r = "/pages/netdisk_sharedir/sharedir?from=filelist", 
            o.globalData.shareDirData.currentDirData.isRoot = !1, o.globalData.shareDirData.currentDirData.dirMeta = d; else if (n.data.isCopyFilePage) {
                var c = encodeURIComponent(JSON.stringify(d));
                r = "/pages/netdisk_copyshare/copyshare?path=" + encodeURIComponent(d.path) + "&mod=&isShare=" + d.share + "&isRoot=0&fid=" + d.fs_id + "&serverFilename=" + d.server_filename + "&fileMeta=" + c;
            } else r = "/pages/netdisk_dirdetail/dirdetail?path=" + encodeURIComponent(d.path) + "&mod=&isShare=" + d.share + "&isRoot=0&fid=" + d.fs_id + "&serverFilename=" + d.server_filename;
            setTimeout(function() {
                wx.safeNavigateTo(r);
            }, 1200);
        }).catch(function() {
            wx.wetoast({
                content: "新建文件夹失败",
                duration: 3e3
            });
        });
    }, n.deleteFiles = function(e, a) {
        wx.log.normal.list_delete.send(), t.fileOper.asyncDeleteFiles(e).then(function() {
            n.XList.remove(e.fs_id), wx.log.normal.list_delete_success.send();
        }, function(e) {
            return e && wx.wetoast({
                content: "删除失败，请重试",
                loading: !1,
                duration: 1500
            });
        });
    }, n.shareToWeixinGroup = function(e, t) {
        if (wx.log.normal.normalBtnShareToClick.send(), 1 != +e.share || e.is_root) {
            var a = wx.getStorageSync("uk"), i = e.fs_id, r = e.share, n = e.path, o = e.server_filename;
            wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
                uk: a,
                fid: i,
                share: r,
                hasListData: !1,
                serverFilename: o,
                path: encodeURIComponent(n)
            });
        } else wx.wetoast({
            content: "父目录已经共享，子目录无法共享",
            duration: 3e3
        });
    }, n.shareToOthers = function(e, t) {
        (0, r.jumpToShareSnap)(e, {
            from: "xlist"
        });
    }, n.copyFile = function(e, t) {
        wx.log.send({
            type: "wx_copyfile_click_" + t,
            value: "复制按钮点击"
        }), o.globalData.preShareData.copyList = [ e ], wx.safeNavigateTo("/pages/netdisk_copyshare/copyshare?from=" + t);
    }, n.addLocalFile = function() {
        wx.log.normal.normalDirDetailAddLocalFileBtnClick.send(), wx.chooseImage({
            count: 9,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(e) {
                var t = e.tempFilePaths, a = e.tempFiles;
                o.globalData.uploadList = t, o.globalData.uploadListSize = a.map(function(e) {
                    return e.size;
                }).reduce(function(e, t) {
                    return e + t;
                }), n.localUpload().then(function() {
                    n.XList.reloadList();
                });
            }
        });
    }, n.createNewFolder = function() {
        wx.log.normal.createNewDir.send(), n.dialog.show({
            title: "新建文件夹",
            placeholder: "请输入文件夹名称"
        });
    }, n.setCode = function(e) {
        var t = "bdnetdisk://n/action.MYFILE?m_n_v=8.3.0&uk=" + wx.getStorageSync("uk") + "&path=" + e.path + "&origin=1";
        (0, a.setCode)(t);
    };
};