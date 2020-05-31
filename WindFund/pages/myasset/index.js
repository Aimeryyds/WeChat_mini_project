require("../../utils/util.js"), getApp();

Page({
    data: {
        nickname: "",
        avatarUrl: ""
    },
    _cancelEvent: function() {
        console.log("你点击了取消"), this.contactdialog.hideDialog();
    },
    _confirmEvent: function() {
        console.log("你点击了确定"), this.contactdialog.hideDialog();
    },
    showcontactDialog: function(n) {
        var o = n.currentTarget.dataset.dialogtype;
        this.contactdialog.showDialog(o);
    },
    getUserInfo: function() {
        var n = this;
        wx.getUserInfo({
            success: function(o) {
                var t = o.userInfo, a = t.nickName, i = t.avatarUrl;
                n.setData({
                    nickName: a,
                    avatarUrl: i
                });
            }
        });
    },
    onLoad: function(n) {},
    onReady: function() {
        this.contactdialog = this.selectComponent("#dialog");
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});