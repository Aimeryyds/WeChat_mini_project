var t = require("../../netdisk_utils/common.js"), s = require("../../netdiisk_requestapi/transAssistant"), a = wx.ENV.staticPath, n = getApp(), e = "/pages/netdisk_transAssistant/index", i = function(t) {
    for (var s, a = {
        isUpload: !0,
        uploadMod: t
    }, n = getCurrentPages(), e = n.length - 1; e >= 0; e--) if ("uploading" !== (s = n[e]).pageType) {
        s.data.uploadData = a;
        break;
    }
    wx.navigateBack({
        delta: n.length - 1 - e
    });
};

Page({
    data: {
        count: 0,
        navHeight: 0,
        windowHeight: 0,
        actionHeight: 0,
        showAction: !1,
        canSelectAll: !1,
        isTransAssistant: !1,
        surl: "",
        shareIcon: a + "/ic_edit_share.png"
    },
    onReady: function() {
        this.pageType = "uploading", this.XList = this.selectComponent("#XList"), this.showDialog = this.selectComponent("#showDialog"), 
        this.toast = this.selectComponent("#toast"), this.XList.loadList(this.query);
    },
    localUpload: function() {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original" ],
            sourceType: [ "album" ],
            success: function(t) {
                var s = t.tempFilePaths;
                n.globalData.uploadList = s, i("local");
            }
        });
    },
    onLoad: function(s) {
        var a = s.path, e = s.from, i = s.surl, o = s.title, r = s.whenEmpty, l = void 0 === r ? "selectList" : r, c = s.expire_time, u = s.username, d = n.globalData, h = d.systemInfo, g = d.navHeight, p = d.isIpx, w = h.windowHeight, m = "transAssistant" === e;
        this.setData({
            systemInfo: h,
            navHeight: g,
            windowHeight: w,
            actionHeight: (m ? 112 : 102) / h.ratio,
            ipxBottomHeight: p ? 40 / h.ratio : 0,
            isTransAssistant: m,
            canSelectAll: m,
            surl: i || "",
            title: o || "",
            whenEmpty: l,
            expire_time: c,
            isIpx: p,
            username: u
        }), this.query = decodeURIComponent(a), t.DETAIL_SHARE || wx.hideShareMenu(), m && wx.log.transAssistant.selectPage.send();
    },
    select: function(t) {
        var s = t.detail, a = s.isAll, n = s.count;
        this.setData({
            showAction: n > 0,
            count: n,
            isAll: a
        });
    },
    commitUpload: function() {
        n.globalData.uploadList = this.XList.getSelectItems(), i("cloud");
    },
    goback: function() {
        if (this.data.isTransAssistant) {
            var t = (0, s.getTransAssistantParam)(this.data);
            wx.reLaunch({
                url: e + "?" + t
            });
        }
    },
    handleTransAssistantClick: function() {
        var t = this, a = this.XList.getSelectItems();
        a = a.map(function(t) {
            return t.fs_id;
        }), wx.wetoast({
            content: "请稍候...",
            loading: !0,
            duration: !0
        }), (0, s.sendFile)({
            surl: this.data.surl,
            list: JSON.stringify(a)
        }).then(function(a) {
            if (wx.toasthide(), 0 === (a = a.data || {}).errno) t.transSuccess(), wx.log.transAssistant.sendSuccess.send(); else {
                var n = s.errMap[a.errno], e = s.sendFailNavNoMap[a.errno];
                n && e ? t.transErrorNav(n) : t.transUnknowError(n), wx.log.transAssistant.sendFail.send({
                    from: a.errno
                });
            }
        }).catch(function(s) {
            wx.toasthide(), t.transUnknowError(), wx.log.transAssistant.sendFail.send({
                from: "catch"
            });
        }), wx.log.transAssistant.send.send();
    },
    transSuccess: function() {
        var t = (0, s.getTransAssistantParam)(this.data);
        wx.reLaunch({
            url: e + "?" + t + "&from=upload&status=success"
        });
    },
    transErrorNav: function(t) {
        var a = (0, s.getTransAssistantParam)(this.data);
        wx.reLaunch({
            url: e + "?" + a + "&from=upload&status=fail&msg=" + t
        });
    },
    transUnknowError: function(t) {
        wx.wetoast({
            content: t || "出错了，请稍后重试",
            duration: 3e3
        });
    }
});