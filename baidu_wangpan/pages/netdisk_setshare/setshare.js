function a() {
    wx.reLaunch({
        url: "/pages/netdisk_index/index?currentTab=1"
    });
}

var e = require("../../netdiisk_requestapi/fileOper.js"), t = require("../../netdiisk_requestapi/postShare.js"), s = getApp(), i = wx.ENV, r = (i.bgForwardName, 
i.staticName), o = i.version;

Page({
    data: {
        systemInfo: s.globalData.systemInfo,
        showAllAvator: null,
        bottomFixed: !0,
        divideRow: [],
        sharedirData: {
            isRoot: null,
            memberNum: null,
            avator: [],
            uname: [],
            fileName: null,
            updateTime: null,
            path: null
        },
        isOwner: 1,
        height: 0,
        gpIsOwner: 1,
        shareinfo: null,
        isSelect: !1
    },
    onReady: function() {
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.dialog = this.selectComponent("#dialog"), this.Navbar = this.selectComponent("#Navbar"), 
        this.popupDismiss = this.selectComponent("#popup-dismiss"), this.popupSignOut = this.selectComponent("#popup-signout"), 
        this.Navbar.setTitle("共享管理");
    },
    onLoad: function(a) {
        var e = this;
        this.setData({
            systemInfo: s.globalData.systemInfo,
            height: s.globalData.navHeight
        }), s.globalData.systemInfo || initSystemInfo().then(function(a) {
            return e.setData({
                systemInfo: a
            });
        });
    },
    onShow: function() {
        if (s.globalData && s.globalData.shareDirData.currentDirData.dirMeta) {
            var a = s.globalData.shareDirData.currentDirData, e = a.isRoot, t = a.publicMeta, i = a.dirMeta;
            t.avator.length > 9 && e || t.avator.length > 10 && !e ? this.data.showAllAvator = !1 : this.data.showAllAvator = !0, 
            this.data.sharedirData = {
                isRoot: e,
                memberNum: t.memberNum,
                avator: t.avator,
                uname: t.uname,
                fileName: i.server_filename,
                updateTime: i.server_mtime,
                path: i.path
            }, this.setData({
                showAllAvator: this.data.showAllAvator,
                divideRow: this.handleDivideRow(t.avator, t.uname, i.is_owner),
                sharedirData: this.data.sharedirData,
                isOwner: i.is_owner,
                gpIsOwner: t.gpIsOwner,
                shareinfo: t.shareinfo
            });
        }
    },
    handleAddPeople: function(a) {
        wx.log.share.shareDetailSettingAddMemberClick.send(), s.globalData.isGuideUser && wx.log.guide.dirdetialAdd.send();
        var e = s.globalData.shareDirData.currentDirData.dirMeta, t = e.uk, i = e.fid, r = e.server_filename, o = e.path, n = e.share;
        wx.safeNavigateTo("/pages/netdisk_sharesnapshots/sharesnapshots", {
            uk: t,
            fid: i,
            share: n,
            hasListData: !1,
            serverFilename: r,
            path: encodeURIComponent(o)
        });
    },
    handleDelPeople: function() {
        wx.safeNavigateTo("/pages/netdisk_delShareMember/delShareMember");
    },
    handleShowAllAvator: function() {
        this.data.showAllAvator = !0;
        var a = this.data, e = a.sharedirData, t = a.isOwner, s = this.handleDivideRow(e.avator, e.uname, t), i = this.data.systemInfo.windowHeightRpx - 100, r = 34 + 218 * (s.length - 1) + 212, o = this.data.showAllAvator ? 0 : 76;
        this.data.bottomFixed = i > r + o + 144, this.setData({
            showAllAvator: this.data.showAllAvator,
            bottomFixed: this.data.bottomFixed,
            divideRow: s
        });
    },
    handleDivideRow: function(a, e, t) {
        for (var s = this.data.sharedirData.isRoot, i = [ [] ], r = 0; r < a.length && ((this.data.showAllAvator || (t ? 8 !== r : 9 !== r) || !s) && (this.data.showAllAvator || 10 !== r || s)); r++) {
            var o = i.length;
            i[o - 1].length < 5 ? i[o - 1].push({
                avator: a[r],
                uname: e[r]
            }) : i.push([ {
                avator: a[r],
                uname: e[r]
            } ]);
        }
        if (s) {
            var n = {
                itemClass: "avator-add",
                handle: "handleAddPeople"
            }, h = {
                itemClass: "avator-del",
                handle: "handleDelPeople"
            }, l = i.length - 1, d = i[l], u = d.length;
            t ? u < 4 ? (d.push(n), (0 === l && u > 1 || l > 0) && d.push(h)) : 4 === u ? (d.push(n), 
            i.push([ h ])) : i.push([ n, h ]) : u < 5 ? d.push(n) : i.push([ n ]);
        }
        return i;
    },
    renameShareDir: function() {
        if (wx.log.normal.modifiedShareDirName.send(), 0 !== this.data.isOwner) {
            var a = this.data.sharedirData.fileName, e = "ios" === s.globalData.systemInfo.platform ? 250 : a.length;
            this.dialog.show({
                title: "修改共享名称",
                selectionEnd: e,
                value: a
            });
        } else wx.wetoast({
            content: "只能管理自己上传的文件哦",
            duration: 1500
        });
    },
    dialogConfirm: function(a) {
        var t = this, i = this.data.sharedirData, r = i.path;
        s.globalData.shareDirData.currentDirData.oldDirName = i.fileName;
        var o = "/" === r.substr(-1) ? r.substring(0, r.length - 1) : r;
        e.fileOper.asyncRenameDir(o, a).then(function(a) {
            wx.wetoast({
                content: "文件夹重命名成功",
                duration: 3e3
            }), wx.log.share.setshare_rename_success.send();
            var e = a.data.list[0], r = o.replace(i.fileName, ""), n = e.to.replace(r, "");
            t.data.sharedirData.fileName = n.replace("/", ""), t.data.sharedirData.path = e.to, 
            t.setData({
                sharedirData: t.data.sharedirData
            }), s.globalData.shareDirData.currentDirData.dirMeta.path = e.to, s.globalData.shareDirData.currentDirData.dirMeta.server_filename = n.replace("/", ""), 
            s.globalData.shareDirData.currentDirData.dirListPath = "/" === r.substr(-1) ? r.substring(0, r.length - 1) : r, 
            s.globalData.shareDirData.currentDirData.olddirPath = o;
        }).catch(function() {
            wx.wetoast({
                content: "文件夹重命名失败",
                duration: 3e3
            });
        });
    },
    dismissShareDir: function() {
        wx.log.share.clickDissolveShareGroup.send(), this.popupDismiss.show();
    },
    signOutShareDir: function() {
        wx.log.share.clickExitShareGroup.send(), this.popupSignOut.show();
    },
    dismissSuccess: function() {
        var e = this, s = this.data.shareinfo;
        this.popupDismiss.hide(), (0, t.dismissSharedir)(s.fid).then(function(t) {
            var s = t.data, i = "解散失败，请重试", r = !0;
            switch (wx.toasthide(), s.errno) {
              case 0:
                wx.log.share.clickDissolveShareGroupDialogSuccess.send(), i = "解散共享成功";
                break;

              case 14:
                wx.log.share.clickDissolveShareGroupDialogFail14.send(), r = !1;
                break;

              case 18210:
                wx.log.share.clickDissolveShareGroupDialogFail18210.send(), i = "该共享已被解散", e.popupDismiss.hide(), 
                a();
            }
            wx.wetoast({
                content: i,
                duration: 2e3,
                success: function() {
                    r && a();
                }
            });
        }).catch(function() {
            wx.log.share.clickDissolveShareGroupDialogFail.send(), wx.toasthide(), wx.wetoast({
                content: "解散共享失败！",
                duration: 2e3
            });
        });
    },
    signOutSuccess: function() {
        var e = this.data.shareinfo, s = this.data.isSelect ? 1 : 0;
        this.popupSignOut.hide(), (0, t.signOutSharedir)(e.fid, e.uk, s).then(function(e) {
            var t = e.data, s = "退出失败，请重试", i = !0;
            switch (wx.toasthide(), t.errno) {
              case 0:
                wx.log.share.clickExitShareGroupDialogSuccess.send(), s = "退出共享成功";
                break;

              case 14:
                wx.log.share.clickExitShareGroupDialogFail14.send(), i = !1;
                break;

              case 18216:
                s = "不能删除目录创建者, 目录创建者只能使用目录取消";
                break;

              case 18210:
                wx.log.share.clickExitShareGroupDialogFail18210.send(), s = "已退出该共享";
            }
            wx.wetoast({
                content: s,
                duration: 2e3,
                success: function() {
                    i && a();
                }
            });
        }).catch(function() {
            wx.log.share.clickExitShareGroupDialogFail.send(), wx.toasthide(), wx.wetoast({
                content: "退出共享失败！",
                duration: 2e3
            });
        });
    },
    select: function() {
        this.setData({
            isSelect: !this.data.isSelect
        });
    },
    onShareAppMessage: function(a) {
        if (wx.showShareMenu({
            withShareTicket: !0
        }), "menu" === a.from) return {
            title: "邀请您加入网盘小程序",
            path: "pages/netdisk_index/index",
            imageUrl: r + "/mini-program/images/bg_forward.png?v=" + o
        };
    },
    move: function(a) {}
});