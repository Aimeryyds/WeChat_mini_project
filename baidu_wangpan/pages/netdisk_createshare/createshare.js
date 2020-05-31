var a = require("../../netdisk_utils/shareGroupOper.js"), t = require("../../netdisk_utils/validation.js"), e = require("../../netdisk_utils/common.js"), i = getApp(), r = wx.ENV, n = r.bgForwardName, o = r.staticName, d = r.version;

Page({
    data: {
        dialogData: {},
        height: 0
    },
    state: {
        isClear: !1
    },
    onReady: function() {
        this.toast = this.selectComponent("#toast"), wx.wetoast({
            content: "已成功创建共享",
            duration: 1e3
        });
    },
    onLoad: function(a) {
        var t = a.fid, r = a.path, n = i.globalData.systemInfo.platform, o = (i.globalData.userWxInfo.nickName, 
        "ios" === n ? 250 : r.length);
        this.setData({
            dialogData: {
                fid: t,
                errorText: null,
                showErrorText: !1,
                value: r,
                defaultText: r,
                inputText: null,
                selectionEnd: o
            },
            height: i.globalData.navHeight
        }), e.DETAIL_SHARE || wx.hideShareMenu();
    },
    onShow: function() {
        wx.getStorageSync("addfriend") && (wx.removeStorageSync("addfriend"), wx.redirectTo({
            url: "/pages/netdisk_sharedir/sharedir?from=createGroupShare"
        })), i.globalData.toCreateSharing = !1;
    },
    wxGoBack: function() {
        var a = getCurrentPages();
        a.length > 1 && a[a.length - 2].changeTab({
            detail: {
                current: 1
            }
        }), wx.navigateBack({
            url: "/pages/netdisk_index/index"
        });
    },
    onShareAppMessage: function() {
        wx.setStorageSync("addfriend", !0);
        var t = this.data.dialogData, e = t.defaultText, i = t.inputText, r = t.fid, s = wx.getStorageSync("uk");
        return null !== i && i !== e ? a.shareGroupOper.createGroupSendWeixinCard({
            fid: r,
            defaultText: e,
            inputText: i
        }).then(function() {
            wx.toasthide(), wx.redirectTo({
                url: "/pages/netdisk_sharedir/sharedir?from=createGroupShare"
            });
        }) : wx.toasthide(), {
            title: "点击加入“" + i + "”",
            path: "/pages/netdisk_index/index?to=sharedir&fid=" + r + "&uk=" + s + "&from=creategroup",
            imageUrl: o + "/mini-program/images/" + n + "?v=" + d
        };
    },
    bindKeyInput: function(a) {
        this.state.isClear = !1;
        var e = a.detail.value, i = t.validation.TextValidationCheck(e);
        this.setData({
            "dialogData.errorText": i,
            "dialogData.inputText": e
        });
    },
    bindKeyBlur: function(a) {
        if (!this.state.isClear || "" !== this.data.dialogData.inputText) {
            this.state.isClear = !1;
            var e = a.detail.value, i = t.validation.TextValidationCheck(e);
            this.setData({
                "dialogData.errorText": i,
                "dialogData.inputText": e
            });
        }
    },
    clearErrorText: function() {
        this.setData({
            "dialogData.showErrorText": !1
        });
    },
    handleClearInput: function() {
        this.state.isClear = !0, this.setData({
            "dialogData.inputText": "",
            "dialogData.value": "",
            "dialogData.showErrorText": !1,
            "dialogData.errorText": t.validation.TextValidationCheck("")
        });
    },
    handleInputConfirm: function(a) {
        var e = t.validation.TextValidationCheck(this.data.dialogData.inputText);
        "" !== e && this.setData({
            "dialogData.showErrorText": !0,
            "dialogData.errorText": e
        });
    },
    cancelCreateGroup: function() {
        var t = this;
        wx.log.share.createShareCancleSend.send();
        var e = this.data.dialogData.defaultText;
        a.shareGroupOper.createGroupCancel("/" + e).then(function() {
            setTimeout(function() {
                t.wxGoBack();
            }, 1500);
        });
    },
    move: function(a) {}
});