Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.jumpToBatch = exports.batchFn = void 0;

var e = require("./shareFn.js"), t = require("../netdiisk_requestapi/fileOper.js"), a = require("./checkFile.js");

exports.batchFn = function(s) {
    var i = getApp();
    s.refreshCount = function(e) {
        e && s.setData({
            count: e
        });
    }, s.select = function(e) {
        var t = e.detail, a = t.isAll, i = t.count, o = t.isAllDir, r = t.isAllFileOwner, n = t.isBatch;
        s.setData({
            isAll: a,
            count: i,
            isAllDir: o,
            isAllFileOwner: r,
            isBatch: !1 !== n
        });
    }, s.selectedAll = function() {
        "sharedir" === s.pageType ? wx.log.share.batch_pickall.send() : wx.log.normal.batch_pickall.send(), 
        s.XList.selectedAll(!s.data.isAll);
    }, s.onlyShareToOthers = function(t) {
        var a = {
            dirdetail: "normalDirShareFileButtonClickCount",
            dirindex: "normalDirShareFileButtonClickCount",
            sharedir: "normalShareDirDetailShareFileButtonClickCount"
        };
        (a = a[s.pageType]) && wx.log.normal[a].send(), (0, e.commonShareToOthers)(t);
    }, !s.reloadList && (s.reloadList = function() {
        s.XList.remove();
    }), s.copy = function(e) {
        wx.log.send({
            type: "wx_batchedit_copyfile_" + s.pageType,
            value: "批选页面复制按钮点击"
        }), i.globalData.preShareData.copyList = e, wx.safeNavigateTo('/pages/netdisk_copyshare/copyshare?from="batch"');
    }, s.batchRename = function(e, t) {
        e = e[0], "sharedir" === s.pageType ? wx.log.share.batch_rename.send() : wx.log.normal.batch_rename.send();
        var o = e.server_filename;
        if ("sharedir" !== s.pageType || (0, a.checkFileIsOwner)(e)) {
            var r = "ios" === i.globalData.systemInfo.platform ? 250 : o.length;
            s.dialog.show({
                title: "sharedir" === s.pageType ? "修改共享名称" : "重命名",
                value: o,
                selectionEnd: r,
                confirmFnName: "batchConfirm"
            });
        } else wx.wetoast({
            content: "只能管理自己上传的文件哦",
            duration: 1500
        });
    }, s.batchDelete = function(e) {
        var a = s.pageType;
        "sharedir" === a ? wx.log.share.batch_delete.send() : wx.log.normal.batch_delete.send(), 
        t.fileOper.asyncDeleteFiles(e).then(function() {
            s.reloadList(), "sharedir" === a ? wx.log.share.batch_delete_sure_success.send() : wx.log.normal.batch_delete_sure_success.send();
        }, function(e) {
            e && wx.wetoast({
                content: "删除失败",
                duration: 1e3
            });
        });
    }, s.shareToFriends = function(e) {
        var t = e[0];
        if (e.length > 1) wx.wetoast({
            content: "只能共享文件夹",
            duration: 1e3
        }); else if (/^\/<share>\d+-\d+/.test(t.path) || 1 == +t.share && !t.is_root) wx.wetoast({
            content: "父目录已经共享，子目录无法共享",
            duration: 3e3
        }); else {
            var a = wx.getStorageSync("uk"), s = t.fs_id, i = t.share, o = t.path, r = t.server_filename;
            wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
                uk: a,
                fid: s,
                share: i,
                hasListData: !1,
                serverFilename: r,
                path: encodeURIComponent(o)
            });
        }
    }, s.batchConfirm = function(e) {
        var a = s.XList.getFirstSelectItem(), i = a.path;
        t.fileOper.asyncRenameDir(i, e).then(function(e) {
            var t = e.data, i = t.errno, o = t.list[0];
            0 == +i && o ? (wx.wetoast({
                content: "文件重命名成功",
                duration: 3e3
            }), a.server_filename = o.to.replace(s.XList.data.path, "").replace("/", ""), a.path = o.to, 
            a.isSelect = !1, s.XList.update(a), s.XList.selectedAll(!0)) : wx.wetoast({
                content: "文件重命名失败",
                duration: 3e3
            });
        }).catch(function(e) {
            console.log("文件重命名失败:", e), wx.wetoast({
                content: "文件重命名失败",
                duration: 3e3
            });
        });
    }, s.onListEmpty = function(e) {
        s.setData({
            isListEmpty: e.detail
        });
    }, s.goback = function() {
        switch (s.setData({
            isBatch: !1,
            count: 0,
            shareButtonShow: !1,
            isAll: !1,
            fromShareToBatch: !1,
            isAllDir: !1,
            isHideOperModeDialog: !0
        }), s.pageType) {
          case "sharedir":
            s.setData({
                barType: "enjoyFileDetail",
                isMove: !1,
                scrollHeight: i.globalData.systemInfo.visualHeightRpx - 112
            }), s.batchListScrollHeight = 0;
            break;

          default:
            s.setData({
                scrollHeight: i.globalData.systemInfo.windowHeightRpx - s.data.navbarHeight - 112
            });
        }
    };
}, exports.jumpToBatch = function(e, t, a, s) {
    wx.safeNavigateTo("/pages/netdisk_batchEdit/batchEdit?isOwner=" + t + "&from=" + e + "&onlyShare=" + a + "&wxLogType=" + s);
};