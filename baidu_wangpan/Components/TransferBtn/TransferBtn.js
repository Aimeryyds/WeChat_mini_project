function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = require("../../netdiisk_requestapi/transferFiles.js"), a = require("../List/ShareList/msg.js"), r = e(require("../../netdisk_utils/guideMemberMixin")), s = e(require("../../netdisk_utils/shareGuideMemberMixin")), i = getApp().globalData;

Component({
    behaviors: [ r.default, s.default ],
    properties: {
        btnTxt: {
            type: String,
            value: "保存到我的网盘"
        },
        type: {
            type: String,
            value: "video"
        },
        surl: {
            type: String,
            value: ""
        },
        owner: {
            type: Boolean,
            value: !1
        },
        shareUk: {
            type: String,
            value: ""
        },
        shareId: {
            type: String,
            value: ""
        },
        fsId: {
            type: String,
            value: ""
        }
    },
    data: {
        flag: !0,
        isGuideUser: i.isGuideUser
    },
    ready: function() {
        this.setShareInfo();
        var e = "&transfer=true", t = wx.getCurrentViewPage().options;
        for (var a in t) "to" !== a && "surl" !== a && (e += "&" + a + "=" + t[a]);
        this.setData({
            pageUrl: e
        }), t.transfer && "auto" === wx.getStorageSync(this.data.surl) && this.autoTrans();
    },
    methods: {
        transfer: function() {
            this.saveFile();
        },
        setShareInfo: function() {
            var e = [ this.data.fsId ], t = {
                shareid: this.data.shareId,
                uk: this.data.shareUk,
                fsidlist: e
            };
            i.shareInfo = t;
        },
        saveFile: function() {
            if (i.isGuideUser) wx.setStorageSync(this.data.surl, "auto"), wx.setStorageSync(this.data.surl + "preview", this.data.pageUrl), 
            i.transfer = !0, wx.safeNavigateTo("/pages/netdisk_bindAccount/bindAccount?to=share" + this.data.type + "&surl=" + this.data.surl); else {
                if (!this.data.flag) return;
                this.setData({
                    flag: !1
                }), wx.showLoading({
                    title: "正在转存..."
                }), this.paths = "/我的资源", this.transFiles(this.paths);
            }
        },
        transFiles: function(e) {
            var a = this, r = wx.getStorageSync(this.data.surl);
            (0, t.transferFiles)(e, 1).then(function(e) {
                var t = e.data;
                a.transferSucCallback(t), "auto" === r && wx.removeStorageSync(a.surl) && wx.removeStorageSync(a.surl + "preview");
            }, function(e) {
                a.transferFailCallback(e);
            }).catch(function(e) {
                console.error(e);
            });
        },
        transferSucCallback: function(e) {
            var t = this;
            e || this.transferFailCallback();
            var r = Number(e.errno);
            12 === r && (r = this.handleErrno(e));
            var s = a.transferMsg[r] || "";
            this.checkGuideMemberErrno({
                errno: r,
                targetSize: e.target_size,
                targetFileNums: e.target_file_nums
            });
            var i = 0 === r && e.task_id, n = "fail";
            (0 === r && !i || -8 === r || -30 === r) && (n = "success"), this.handleMsg(n, s, r), 
            setTimeout(function() {
                t.setData({
                    flag: !0
                });
            }, 1500);
        },
        handleErrno: function(e) {
            var t = e.info, a = null;
            if (t && t.length > 0) for (var r = 0; r < t.length; r++) {
                var s = t[r].errno;
                if (0 !== s) {
                    a = s;
                    break;
                }
            }
            return a;
        },
        transferFailCallback: function(e) {
            var t = this;
            wx.hideLoading(), this.transferToast(), setTimeout(function() {
                t.setData({
                    flag: !0
                });
            }, 1500), this.transferLog();
        },
        transferToast: function() {
            wx.showToast({
                title: "网络出错，请稍后再试",
                icon: "none",
                duration: 1500
            });
        },
        transferLog: function(e) {
            var t = "失败", a = "fail";
            0 !== e && -8 !== e && -30 !== e || (a = "success", t = 0 === e ? "成功" : "已存在");
            var r = "外链分享,转存文件" + t, s = "wx_sharepage_transfer_" + a + "_" + e;
            wx.log.send({
                value: r,
                type: s
            }), this.data.transfer && wx.log.send({
                value: "游客正常化" + r,
                type: "wx_sharepage_transfer_" + a + "_normal_" + e
            });
        },
        handleMsg: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = arguments[2];
            if ("success" === e) {
                var r = wx.getCurrentViewPage(), s = r.pageType;
                wx.hideLoading(), this.transferLog(0), "previewVideo" !== s && "previewAudio" !== s || r.saveSucc(), 
                wx.showToast({
                    title: "已转存至“我的资源”",
                    icon: "none",
                    duration: 1500
                });
            } else {
                if (wx.hideLoading(), this.transferLog(a), this.data.showGuideMember) return;
                wx.showToast({
                    title: t || "转存失败，请重试",
                    icon: "none",
                    duration: 1500
                });
            }
        },
        autoTrans: function() {
            "auto" !== wx.getStorageSync(this.data.surl) || this.data.owner || this.data.isGuideUser || this.saveFile();
        }
    }
});