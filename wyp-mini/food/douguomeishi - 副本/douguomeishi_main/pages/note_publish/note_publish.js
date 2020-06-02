var t = require("../../utils/network.js"), e = require("../../utils/util.js"), a = require("../../utils/WxNotificationCenter.js"), i = {
    loading: 0,
    end: 1,
    error: 2
};

Page({
    data: {
        isIpx: getApp().globalData.isIpx,
        imagePaths: [],
        imageDatas: [],
        noteContent: "",
        noteTitle: "",
        blockRanges: [],
        noteContents: [],
        topics: {},
        eventId: "",
        noteContentHeight: 0,
        buttonHeight: 0,
        toView: "index_0"
    },
    chooseImages: function() {
        var t = this, e = 9 - t.data.imageDatas.length;
        wx.chooseImage({
            count: e,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                for (var a = 0; a < e.tempFilePaths.length; a++) {
                    var n = e.tempFilePaths[a];
                    wx.getImageInfo({
                        src: n,
                        success: function(e) {
                            var a = e.width, n = e.height, o = e.path, s = {
                                filePath: o,
                                state: i.loading,
                                url: "",
                                width: a,
                                height: n
                            };
                            t.setData({
                                imagePaths: t.data.imagePaths.concat(o),
                                imageDatas: t.data.imageDatas.concat(s),
                                toView: "index_" + t.data.imageDatas.length
                            }), t.uploadImage(s);
                        }
                    });
                }
            }
        });
    },
    uploadImageRetry: function(t) {
        var e = t.currentTarget.dataset.item, a = i.loading;
        e.state = a;
        for (var n = this.data.imageDatas, o = 0; o < n.length; o++) if (n[o].filePath == e.filePath) {
            n.splice(o, 1, e);
            break;
        }
        this.setData({
            imageDatas: n
        }), this.uploadImage(e);
    },
    uploadImage: function(a) {
        var n = a, o = n.filePath, s = this;
        t.uploadImage({}, o, function(t) {
            var a, o = "";
            e.isObject(t) ? (o = t.actual_url, a = t.actual_url.length ? i.end : i.error) : a = i.error, 
            n.url = o, n.state = a;
            for (var h = s.data.imageDatas, r = 0; r < h.length; r++) if (h[r].filePath == n.filePath) {
                h.splice(r, 1, n);
                break;
            }
            s.setData({
                imageDatas: h
            });
        }, function(t) {
            var e = i.error;
            n.state = e;
            for (var a = s.data.imageDatas, o = 0; o < a.length; o++) if (a[o].filePath == n.filePath) {
                a.splice(o, 1, n);
                break;
            }
            s.setData({
                imageDatas: a
            });
        });
    },
    deleteImage: function(t) {
        var e = t.currentTarget.dataset.item, a = this.data.imagePaths, i = this.data.imageDatas, n = 0;
        if (a.length > 1) for (var o = 0; o < a.length; o++) if (a[o] == e) {
            n = o;
            break;
        }
        a.splice(n, 1), i.splice(n, 1), this.setData({
            imagePaths: a,
            imageDatas: i,
            toView: "index_" + i.length
        });
    },
    onNoteTitleInput: function(t) {
        t.detail.value && (this.data.noteTitle = t.detail.value);
    },
    onNoteContentInput: function(t) {
        var e = this.data.noteContent, a = this.data.noteContent, i = 0;
        t && (a = t.detail.value, i = t.detail.cursor);
        var n = 0, o = 0, s = !1, h = this.data.blockRanges, r = [];
        if (a.length < e.length) for (var g = 0; g < h.length; g++) {
            var n = (d = h[g]).startIndex, o = d.endIndex;
            if (i >= n && i <= o) {
                i = (a = a.substring(0, n) + a.substring(o)).length;
                break;
            }
        }
        for (var l = 0; l < a.length; l++) if ("#" == a[l]) if (s) {
            var d = {
                startIndex: n,
                endIndex: o = l
            };
            r.push(d), n = 0, o = 0, s = !1;
        } else n = l, s = !0;
        this.setData({
            blockRanges: r,
            noteContent: a,
            cursor: i
        });
    },
    showImages: function(t) {
        var e = t.currentTarget.dataset.item;
        wx.previewImage({
            current: e,
            urls: this.data.imagePaths
        });
    },
    formSubmit: function(e) {
        console.log(e);
        var n = e.detail.formId, o = wx.getStorageSync("open_id"), s = this.data.imageDatas;
        if (s.length <= 0) wx.showToast({
            title: "必须传图片哦",
            image: "/images/error.png"
        }); else {
            for (var h = [], r = 0; r < s.length; r++) {
                var g = s[r];
                if (g.state != i.end || !g.url.length) return console.log(s), void wx.showToast({
                    title: "有图片未上传完成",
                    image: "/images/error.png"
                });
                var l = {};
                l.u = g.url, l.w = g.width, l.h = g.height, h = h.concat(l);
            }
            this.data.noteTitle;
            for (var d = [], c = this.data.noteContent.split("#"), r = 0; r < c.length; r++) {
                var u = c[r];
                if (!(u.length <= 0)) {
                    var f = {};
                    if (f.c = u, r % 2 > 0) {
                        var m = this.data.topics[u];
                        m && m.length > 0 ? (f.type = 3, f.id = m) : f.type = 0;
                    } else f.type = 0;
                    d.push(f);
                }
            }
            var p = this.data.eid;
            wx.showLoading({
                title: "加载中"
            });
            var v = "";
            this.data.noteTitle && (v = this.data.noteTitle);
            var w = {
                images: JSON.stringify(h),
                title: v,
                content: JSON.stringify(d),
                event_id: p
            };
            n && o && (w.form_id = n, w.open_id = o), t.request("https://wapi.douguo.com/wxapp/note/publish", w, function(t) {
                a.postNotificationName("notePubilshedNotificationName"), wx.hideLoading(), wx.navigateBack({});
            }, function(t) {
                wx.showModal({
                    title: "",
                    content: "别着急，网有点慢，再试试",
                    showCancel: !1
                }), wx.hideLoading(), t && t.message && wx.showToast({
                    title: t.message,
                    image: "/images/error.png"
                });
            });
        }
    },
    onLoad: function(t) {
        var e = t.tid ? t.tid : "", a = t.tt ? t.tt : "", i = t.eid ? t.eid : "";
        if (this.data.eid = i, e.length > 0 && a.length > 0) {
            this.data.topics[a] = e;
            a = this.data.noteContent + "#" + a + "#";
            this.setData({
                noteContent: a
            }), this.onNoteContentInput();
        }
    },
    onReady: function() {},
    onShow: function() {
        var t = wx.createSelectorQuery(), e = this;
        t.select(".publish-conatiner").boundingClientRect(function(t) {
            console.log(t.height), e.setData({
                noteContentHeight: t.height,
                originHeight: t.height
            });
        }).exec();
        e = this;
        (t = wx.createSelectorQuery()).select(".publish-submit-container").boundingClientRect(function(t) {
            console.log(t.height), e.data.buttonHeight = t.height;
        }).exec();
    },
    onContentFocus: function(t) {
        this.data.noteContentHeight = this.data.originHeight - t.detail.height + this.data.buttonHeight, 
        this.setData({
            noteContentHeight: this.data.noteContentHeight
        });
    },
    onContentBlur: function(t) {
        this.data.noteContentHeight = this.data.originHeight, this.setData({
            noteContentHeight: this.data.noteContentHeight
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});