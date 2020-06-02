var a = getApp();

Page({
    data: {
        uid: "",
        id: "",
        imageList: [],
        message: "",
        img_count: 1,
        allowadd: !1
    },
    onLoad: function(a) {
        wx.hideShareMenu();
        this.setData({
            id: a.id,
            type: a.type
        });
    },
    comment_message: function(a) {
        "" == a.detail.value ? this.setData({
            message: "",
            allowadd: !1
        }) : this.setData({
            message: a.detail.value,
            allowadd: !0
        });
    },
    chooseImage: function() {
        var a = this, t = a.data.img_count;
        wx.chooseImage({
            count: t,
            sizeType: [ "compressed" ],
            success: function(t) {
                a.upload_file(t.tempFilePaths, 0), wx.showLoading({
                    title: "加载中",
                    mask: !0
                });
            },
            fail: function(a) {}
        });
    },
    previewImage: function(a) {
        var t = a.target.dataset.src;
        wx.previewImage({
            current: t,
            urls: this.data.imageList
        });
    },
    del_img: function(t) {
        var e = this, i = e.data.imageList, o = t.currentTarget.dataset.num, s = i[o];
        i.splice(o, 1), e.setData({
            imageList: i,
            img_count: e.data.img_count + 1
        });
        var n = {
            img: s
        }, d = a.getParam("common_delAliYunObject", n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: d
            }
        });
    },
    upload_file: function(t, e) {
        var i = this, o = 0, s = 0, n = "common_upimg", d = {
            type: "comment",
            uid: a.globalData.uid,
            session_key: a.globalData.key
        }, m = a.getParam(n, d);
        wx.uploadFile({
            url: a.globalData.murl5 + "?p=" + JSON.stringify(m),
            filePath: t[e],
            name: "file",
            formData: {},
            header: {
                "content-type": "multipart/form-data"
            },
            success: function(a) {
                var t = JSON.parse(a.data);
                0 == t[n].error ? (o++, i.setData({
                    imageList: i.data.imageList.concat(t[n].data),
                    img_count: i.data.img_count - 1
                })) : (s++, wx.showToast({
                    icon: "none",
                    title: t[n].msg ? t[n].msg : ""
                }));
            },
            fail: function(a) {
                s++, wx.showToast({
                    icon: "none",
                    title: "上传失败，请重试"
                });
            },
            complete: function(a) {
                ++e == t.length ? wx.hideLoading() : i.upload_file(t, e);
            }
        });
    },
    comment_add_do: function() {
        var t = this;
        wx.showToast({
            title: "发布中...",
            icon: "loading",
            duration: 1e4
        });
        var e = "comment_addCommentByXCX", i = {
            authorid: a.globalData.uid,
            author: "",
            id: t.data.id,
            pic: t.data.imageList[0] ? t.data.imageList[0] : "",
            message: t.data.message,
            idtype: t.data.type + "id",
            session_key: a.globalData.key
        }, o = a.getParam(e, i);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[e].error ? (wx.showToast({
                    title: "发布成功",
                    icon: "success",
                    duration: 2e3
                }), wx.setStorageSync("showcomment", 1), setTimeout(function() {
                    wx.hideToast(), wx.navigateBack();
                }, 1e3)) : (wx.hideToast(), wx.showToast({
                    icon: "none",
                    title: a.data[e].msg ? a.data[e].msg : "发布失败"
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 2e3));
            },
            fail: function(a) {
                wx.showToast({
                    icon: "none",
                    title: "发布失败"
                });
            }
        });
    },
    onReady: function() {}
});