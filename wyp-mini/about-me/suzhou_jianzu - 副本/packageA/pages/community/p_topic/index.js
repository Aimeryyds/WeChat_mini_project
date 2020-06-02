var e = require("../../../../WxEmojiView/WxEmojiView.js"), t = [], a = (getApp(), 
require("../../../../utils/server")), i = wx.getStorageSync("utoken");

Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        testText: "00:01:02:03",
        show: 1,
        images: [],
        imageWidth: ""
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    show: function(e) {
        var t = this;
        1 == e.currentTarget.dataset.index ? t.setData({
            show: 1
        }) : 2 == e.currentTarget.dataset.index && t.setData({
            show: 2
        });
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function(a) {
        i = wx.getStorageSync("utoken");
        var s = this;
        t = [], a.rid ? s.setData({
            pid: a.pid,
            bid: a.bid,
            rid: a.rid
        }) : a.pid ? s.setData({
            pid: a.pid,
            bid: a.bid
        }) : s.setData({
            bid: a.bid
        }), e.bindThis(this), s.setData({
            WxEmojiObjs: {
                WxEmojiTextArray: ""
            }
        });
    },
    WxEmojiTextareaFocus: function(t) {
        var a = this;
        e.WxEmojiTextareaFocus(a, t);
    },
    WxEmojiTextareaBlur: function(t) {
        var a = this;
        e.WxEmojiTextareaBlur(a, t);
    },
    wxPreEmojiTap: function(t) {
        var a = this;
        e.wxPreEmojiTap(a, t);
    },
    testBlur: function(e) {
        var t = {}, a = this;
        t.showWxEmojiChooseView = 1, t.textAreaText = e.detail.value, a.setData({
            WxEmojiObjs: t
        });
    },
    bindFormSubmit: function(e) {
        if ((e.detail.value.title || e.detail.value.textArea) && (e.detail.value.textArea.length < "3" || e.detail.value.textArea.length < "3")) wx.showModal({
            title: "提示",
            content: "标题或者内容不能小于三个文字",
            showCancel: !1,
            success: function(e) {
                e.confirm;
            }
        }); else if ("" != e.detail.value.textArea) {
            var s = this;
            s.data.rid ? a.sendRequest({
                url: "?r=wxapp.sns.post.reply",
                data: {
                    utoken: i,
                    pid: s.data.pid,
                    bid: s.data.bid,
                    rpid: s.data.rid,
                    content: e.detail.value.textArea,
                    images: t
                },
                method: "POST",
                success: function(e) {
                    wx.navigateBack({
                        pid: s.data.pid
                    });
                }
            }) : s.data.pid ? a.sendRequest({
                url: "?r=wxapp.sns.post.reply",
                data: {
                    utoken: i,
                    pid: s.data.pid,
                    bid: s.data.bid,
                    content: e.detail.value.textArea,
                    images: t
                },
                method: "POST",
                success: function(e) {
                    wx.navigateBack({
                        pid: s.data.pid
                    });
                }
            }) : (wx.setStorageSync("bid", s.data.bid), a.sendRequest({
                url: "?r=wxapp.sns.post.submit",
                data: {
                    utoken: i,
                    bid: s.data.bid,
                    title: e.detail.value.title,
                    content: e.detail.value.textArea,
                    images: t
                },
                method: "POST",
                success: function(e) {
                    wx.navigateBack({
                        id: s.data.bid
                    });
                }
            }));
        } else wx.showModal({
            title: "提示",
            content: "内容不能为空",
            showCancel: !1,
            success: function(e) {
                e.confirm;
            }
        });
    },
    onShow: function() {},
    chooseImage: function() {
        var e = this, a = [];
        wx.chooseImage({
            count: 5,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(i) {
                for (var s = i.tempFilePaths, o = 0; o < s.length; o++) wx.uploadFile({
                    url: "https://tws.cnweisou.com/wxapi/index.php?r=wxapp.util.uploader&i=450",
                    filePath: s[o],
                    name: "file",
                    method: "POST",
                    header: {
                        "content-type": "multipart/form-data"
                    },
                    success: function(e) {
                        var i = e.data, s = JSON.parse(i);
                        t.push(s.url), a.i = e;
                    }
                });
                e.setData({
                    images: e.data.images.concat(s)
                }), e.data.images.length;
            }
        });
    },
    previewImage: function() {
        var e = this;
        wx.previewImage({
            urls: e.data.images
        });
    },
    delete: function(e) {
        var a = this, i = e.currentTarget.dataset.index, s = a.data.images;
        s.splice(i, 1), t.splice(i, 1), a.setData({
            images: s
        });
    }
});