var e = require("../../netdiisk_requestapi/shareMember.js"), t = getApp(), a = function() {
    wx.reLaunch({
        url: "/pages/netdisk_index/index?currentTab=1"
    });
};

Page({
    data: {
        member: [],
        selectedMember: [],
        count: 0,
        isDeleteFiles: !1,
        fileId: "",
        groupId: "",
        owerUk: "",
        systemInfo: t.globalData.systemInfo,
        height: 0,
        statusBarHeight: 20,
        totalHeight: 68,
        pressDownClass: ""
    },
    onLoad: function(e) {
        var a = void 0;
        t.globalData && (a = t.globalData.shareDirData.currentDirData) && (a = a.dirMeta, 
        this.data.fileId = "" + a.fid, this.data.groupId = "" + a.group_id, this.getShareMember()), 
        this.setData({
            height: t.globalData.navHeight,
            systemInfo: t.globalData.systemInfo,
            statusBarHeight: t.globalData.statusBarHeight,
            totalHeight: t.globalData.totalHeight,
            owerUk: wx.getStorageSync("uk")
        });
    },
    onReady: function() {
        this.delMemberDialog = this.selectComponent("#del-member-dialog"), this.toast = this.selectComponent("#toast");
    },
    getShareMember: function() {
        var t = this;
        return (0, e.getShareMember)(this.data.groupId).then(function(e) {
            return e.length <= 0 && wx.wetoast({
                content: "没有可移除成员",
                duration: 2e3,
                success: function() {
                    a();
                }
            }), t.setData({
                member: e
            }), e;
        });
    },
    updateMember: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (e.length <= 0) return !1;
        var r = this.data, i = r.member, n = r.selectedMember;
        if ((i = i.filter(function(t) {
            return e.indexOf(t.uk) <= -1;
        })).length <= 1) return a(), !1;
        n = n.filter(function(t) {
            return e.indexOf(t) <= -1;
        }), this.setData({
            member: i,
            selectedMember: n,
            count: n.length,
            isDeleteFiles: !1
        });
        var s = [], o = [];
        i.forEach(function(e) {
            var t = e.avator, a = e.uname;
            s.push(t), o.push(a);
        }), t.globalData.shareDirData.currentDirData.publicMeta.avator = s, t.globalData.shareDirData.currentDirData.publicMeta.uname = o;
    },
    deleteMember: function() {
        var t = this, a = this.data, r = a.fileId, i = a.selectedMember, n = a.isDeleteFiles;
        (0, e.delShareMember)(r, i, n).then(function(e) {
            var a = e.data, r = (a.errno, a.data);
            t.getShareMember().then(function(e) {
                t.updateMember(r);
            });
        });
    },
    changeIsDeleteFiles: function() {
        this.setData({
            isDeleteFiles: !this.data.isDeleteFiles
        });
    },
    showDelMemberDialog: function() {
        this.delMemberDialog.show();
    },
    removeSelectedMember: function(e) {
        return this.data.selectedMember.filter(function(t) {
            return e !== t;
        });
    },
    selectMember: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data, r = a.member, i = a.count, n = a.selectedMember, s = r[t];
        s.isSelected ? (s.isSelected = !1, i--, n = this.removeSelectedMember(s.uk)) : (s.isSelected = !0, 
        i++, n.push(s.uk)), this.setData({
            member: r,
            count: i,
            selectedMember: n
        });
    },
    goback: function() {
        wx.navigateBack();
    }
});