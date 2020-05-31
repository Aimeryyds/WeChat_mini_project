function t(t, e) {
    switch (t) {
      case "dirdetail":
      case "dirindex":
        return "fileDetailBatch";

      default:
        return 1 == +e ? "enjoyFileOwnBatch" : "enjoyFileOtherBatch";
    }
}

var e = require("../../netdiisk_requestapi/fileOper.js"), i = (require("../../netdisk_utils/errnoText.js"), 
require("../../netdisk_utils/common.js")), a = require("../../netdisk_utils/batchFn.js"), s = getApp(), o = !1;

Page({
    data: {
        isOwner: 1,
        isAll: !1,
        count: 0,
        isOnlyShare: !1,
        wxLogType: "",
        boxHeight: 0,
        height: 0,
        isAllDir: !1
    },
    onReady: function() {
        this.pageType = "batchEdit", this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.dialog = this.selectComponent("#dialog"), this.XList = this.selectComponent("#XList");
        var t = wx.getPageData(this.fromPage).query();
        this.XList.loadList(t);
    },
    onLoad: function(e) {
        var n = e.from, r = e.isOwner, h = e.onlyShare, l = e.wxLogType, c = void 0 === l ? "" : l, d = "onlyShare" === h, g = t(n, r), u = (750 / s.globalData.systemInfo.windowWidth).toFixed(2), w = s.globalData.navHeight * u, f = s.globalData.systemInfo.windowHeightRpx - w - 224;
        f += d ? 90 : 0, o = !1, this.fromPage = n, this.isOwner = r, this.setData({
            boxHeight: f,
            height: s.globalData.navHeight,
            isOnlyShare: d,
            wxLogType: c,
            barType: g
        }), (0, a.batchFn)(this), i.DETAIL_SHARE || wx.hideShareMenu();
    },
    onUnload: function() {
        o && wx.getPageData(this.fromPage).update();
    },
    dialogConfirm: function(t) {
        var i = this, a = this.XList.getFirstSelectItem(), s = a.path;
        e.fileOper.asyncRenameDir(s, t).then(function(t) {
            var e = t.data, s = e.errno, n = e.list[0];
            0 == +s && n ? (wx.wetoast({
                content: "文件重命名成功",
                duration: 3e3
            }), a.server_filename = n.to.replace(i.XList.data.path, "").replace("/", ""), a.path = n.to, 
            a.isSelect = !1, i.XList.update(a), i.XList.selectedAll(!1), o = !0) : wx.wetoast({
                content: "文件重命名失败",
                duration: 3e3
            });
        }).catch(function(t) {
            console.log("文件重命名失败:", t), wx.wetoast({
                content: "文件重命名失败",
                duration: 3e3
            });
        });
    },
    refreshCount: function(t) {
        t && this.setData({
            count: t
        });
    },
    reloadList: function() {
        this.XList.remove(), o = !0;
    },
    goBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    bottomBtnFn: function(t) {
        var e = this.XList.getSelectItems();
        switch (t.detail) {
          case "copy":
            this.copy(e);
            break;

          case "share":
            this.onlyShareToOthers(e);
            break;

          case "shareToFriends":
            this.shareToFriends(e);
            break;

          case "rename":
            this.batchRename(e, this.data.isOwner);
            break;

          case "delete":
            this.batchDelete(e);
            break;

          default:
            this.onlyShareToOthers(e);
        }
    }
});