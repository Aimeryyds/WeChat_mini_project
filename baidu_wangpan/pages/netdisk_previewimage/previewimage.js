function e(e, t) {
    var a = [], s = 0;
    return e.map(function(e, i) {
        e.category - 0 == 3 && a.push(e), e.fs_id === t && (s = a.length);
    }), {
        imageList: a,
        currentIndex: s
    };
}

var t = getApp().globalData;

Page({
    data: {
        list: [],
        currentIndex: 0,
        fromPreview: !0,
        isHideShare: !0,
        showSharePoster: !1,
        showDownload: !1
    },
    onReady: function() {
        this.imagepreview = this.selectComponent("#ImagePreview");
    },
    onLoad: function(t) {
        this.pageType = "previewImage", "share" !== t.preview && wx.hideShareMenu(), this.setData({
            isStory: t.isStory && "true" === t.isStory || !1,
            preview: t.preview
        }), this.data.isStory && wx.log.sharepage.storyImagePreview.send(), this.imagepreview = this.selectComponent("#ImagePreview"), 
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog");
        var a = this;
        wx.getStorage({
            key: "imagelist",
            success: function(s) {
                var i = e(s.data.list, s.data.currentFsId), r = wx.getStorageSync("uk") === s.data.uk, o = (s.data.list[a.data.currentIndex].path || "").includes("<share>"), h = "sharedir" === t.preview && o;
                +t.imgHideShare && (h = !0);
                var n = i.imageList, d = !!(n[i.currentIndex - 1] || {}).dlink;
                a.setData({
                    isHideShare: h,
                    showDownload: d,
                    isShare: "share" === a.data.preview,
                    owner: "share" !== t.preview || r,
                    list: n,
                    currentIndex: i.currentIndex,
                    surl: s.data.surl || "",
                    uk: s.data.uk || "",
                    pwd: s.data.pwd || ""
                }), a.imagepreview.loadList({
                    data: a.data
                }, s.data.surl || "", a.currentPath || "/", a.transfer || !1), wx.removeStorage({
                    key: "imagelist"
                });
            }
        });
    },
    onShareAppMessage: function() {
        this.data.isStory ? wx.log.sharepage.storyImageShare.send() : wx.log.sharepage.previewImageShare.send();
        var e = this.data.isStory ? "pages/netdisk_share/share?to=share&surl=" + this.data.surl + "&imagetype=3" : "pages/netdisk_share/share?to=share&surl=" + this.data.surl, a = this.data.pwd ? e + "&pwd=" + this.data.pwd : e;
        return {
            title: t.shareInfo.fileTitle || "百度网盘",
            path: this.data.surl ? a : "pages/netdisk_index/index",
            imageUrl: this.data.isStory ? t.shareInfo.storyImg : this.data.list[this.data.currentIndex - 1].thumbs.url3
        };
    },
    downLoad: function() {
        this.imagepreview = this.selectComponent("#ImagePreview"), this.imagepreview.downLoad();
    },
    shareToOther: function() {
        wx.log.file.normalImgPreviewShareBtnClick.send(), this.imagepreview.shareToOthers();
    },
    saveFile: function() {
        this.imagepreview.saveFile();
    },
    makePoster: function() {
        this.SharePoster = this.selectComponent("#SharePoster"), this.SharePoster.show({
            isStory: this.data.isStory || !1,
            title: t.shareInfo.fileTitle || "百度网盘",
            name: t.shareInfo.shareName,
            shareImage: this.data.isStory ? t.shareInfo.storyImg : this.data.list[this.data.currentIndex - 1].thumbs.url3,
            surl: this.data.surl,
            pwd: this.data.pwd
        });
    },
    sendToFriends: function() {
        wx.log.file.normalImgPreviewShareBtnClick.send(), this.imagepreview.shareToOthers();
    },
    showModalDialog: function() {
        this.ShareDialog = this.selectComponent("#ShareDialog"), this.ShareDialog.show(wx.SHARE_DIALOG_TYPE.SHARE_FILES, "", {
            mode: "multiple"
        });
    }
});