var t, e = require("../../utils/network.js"), o = require("../../utils/util.js"), n = require("../../utils/WxNotificationCenter.js"), a = {
    normal: 0,
    loading: 1,
    end: 2,
    noData: 3,
    error: 4,
    standby: 5
};

Page({
    data: {
        courseMiniAppid: "wx123759eaee60664d",
        goodMiniAppid: "wx09c9b765670e9f53",
        contents: [],
        noteContents: [],
        note: {},
        noteID: "",
        offset: 0,
        num: 20,
        logined: !1,
        appScene: getApp().globalData.appScene,
        recommends: [],
        footerState: a.normal,
        isIpx: getApp().globalData.isIpx,
        showPage: !1,
        showError: !1,
        indicatorDots: !1,
        autoplay: !1,
        interval: 2e3,
        duration: 500,
        currentIndex: 1,
        showReloadView: !1
    },
    onLoad: function(a) {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), this.setData({
            noteID: a.id
        }), t = this;
        e.request("https://wapi.douguo.com/wxapp/notedetail", {
            id: a.id
        }, function(e) {
            if (wx.hideToast(), 0 != o.isObject(e.note)) {
                var n = e.note;
                t.setData({
                    showPage: !0,
                    note: n
                }), t.setupRichTextContents();
            }
        }, function(e) {
            t.setupRichTextContents(), wx.hideToast(), e && e.length > 0 ? t.setData({
                showPage: !0,
                showError: !0
            }) : t.setData({
                showReloadView: !0
            });
        }), this.request();
        var i = this;
        n.addNotification("reloadButtonPressedNotificationName", i.reloadButtonPressed, i);
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.getStorageSync("user") ? t.setData({
            logined: !0
        }) : t.setData({
            logined: !1
        });
    },
    onHide: function() {},
    onUnload: function() {
        n.removeNotification("reloadButtonPressedNotificationName", this);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        if (!(this.data.recommends.length <= 0 || this.data.footerState == a.end)) {
            var t = this.data.offset + this.data.num;
            this.setData({
                offset: t
            }), this.request();
        }
    },
    onShareAppMessage: function() {},
    request: function() {
        if (!(this.data.noteID.length <= 0)) {
            this.setData({
                footerState: a.loading
            });
            var n = "https://wapi.douguo.com/wxapp/noterecommends/" + this.data.offset + "/" + this.data.num;
            e.request(n, {
                id: this.data.noteID
            }, function(e) {
                var n, i;
                o.isArray(e.recommends) ? (n = 0 == t.data.offset ? e.recommends : t.data.recommends.concat(e.recommends), 
                i = e.recommends.length < t.data.num ? a.end : a.normal, n.length <= 0 && (i = a.noData)) : (n = [], 
                i = a.noData), t.setData({
                    footerState: i,
                    recommends: n
                });
            }, function(e) {
                e && e.length > 0 ? wx.showModal({
                    title: "",
                    content: "别着急，网有点慢，再试试",
                    showCancel: !1
                }) : t.setData({
                    showReloadView: !0
                });
                var o = t.data.offset - t.data.num;
                o = o < 0 ? 0 : o, t.setData({
                    offset: o,
                    footerState: a.error
                });
            });
        }
    },
    setupRichTextContents: function() {
        var e = t.data.note.contents;
        if (e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                if (2 != n.type && 4 != n.type && 5 != n.type && 6 != n.type) {
                    var a;
                    n.icon ? (a = [ {
                        name: "a",
                        attrs: {
                            class: "img_class",
                            style: "font-size: " + 20 / 750 * wx.getSystemInfoSync().windowWidth + "px;"
                        },
                        children: [ {
                            type: "text",
                            text: ""
                        } ]
                    }, {
                        name: "img",
                        attrs: {
                            class: "img_class",
                            style: "width: " + 26 / 750 * wx.getSystemInfoSync().windowWidth + "px; height: " + 26 / 750 * wx.getSystemInfoSync().windowWidth + "px",
                            src: n.icon
                        }
                    }, {
                        name: "a",
                        attrs: {
                            class: "a_class",
                            style: "font-size: " + 32 / 750 * wx.getSystemInfoSync().windowWidth + "px; color: " + n.color + ";"
                        },
                        children: [ {
                            type: "text",
                            text: n.c
                        } ]
                    } ], e[o].richTextContent = a) : n.c && (a = [ {
                        name: "a",
                        attrs: {
                            class: "a_class",
                            style: "font-size: " + 38 / 750 * wx.getSystemInfoSync().windowWidth + "px; color: " + n.color + ";"
                        },
                        children: [ {
                            type: "text",
                            text: n.c
                        } ]
                    } ], e[o].richTextContent = a);
                }
            }
            t.setData({
                noteContents: e
            });
        }
    },
    noteItemPressed: function(t) {
        var e = t.currentTarget.dataset.noteId;
        wx.navigateTo({
            url: "../note/note?id=" + e
        });
    },
    recipeItemPressed: function(t) {
        var e = t.currentTarget.dataset.recipeId;
        wx.navigateTo({
            url: "../recipe/recipe?rid=" + e
        });
    },
    swiperBindChange: function(t) {
        this.setData({
            currentIndex: t.detail.current + 1
        });
    },
    favoComment: function(t) {
        e.request("https://wapi.douguo.com/wxapp/comment/like", {
            entity_type: 8,
            id: t.id
        }, function(t) {
            console.log("点赞成功");
        }, function(t) {
            console.log("点赞失败");
        });
    },
    unfavoComment: function(t) {
        e.request("https://wapi.douguo.com/wxapp/comment/unlike", {
            entity_type: 8,
            id: t.id
        }, function(t) {
            console.log("取消赞成功");
        }, function(t) {
            console.log("取消赞失败");
        });
    },
    onlogin: function(e) {
        t.loginAction();
    },
    loginAction: function() {
        var t = this;
        wx.showLoading({
            title: "加载中"
        }), wx.login({
            success: function(o) {
                wx.getUserInfo({
                    success: function(n) {
                        wx.setStorageSync("nickName", n.userInfo.nickName), wx.setStorageSync("avatarUrl", n.userInfo.avatarUrl), 
                        e.request("https://passport.douguo.com/mitoSign/getwxsession", {
                            code: o.code,
                            iv: n.iv,
                            encryptedData: n.encryptedData
                        }, function(t) {
                            wx.hideLoading(), e.initSessionParams(t.union_id, t.third_session_key), wx.setStorageSync("open_id", t.openid), 
                            wx.navigateTo({
                                url: "../authorize/authorize"
                            });
                        }, function(e) {
                            t.loginfailed(e);
                        });
                    },
                    fail: function(e) {
                        t.loginfailed(e);
                    }
                });
            },
            fail: function(e) {
                t.loginfailed(e);
            }
        });
    },
    loginfailed: function(t) {
        wx.hideLoading(), wx.showToast({
            title: "授权失败",
            duration: 2e3,
            image: "../../images/error.png"
        });
    },
    favoViewPressed: function(e) {
        if (console.log("favoViewPressed" + e.currentTarget.dataset.commentIndex), wx.getStorageSync("user")) {
            var o = e.currentTarget.dataset.commentIndex, n = this.data.note.cs[o].id;
            this.data.note.cs[o].like ? (this.data.note.cs[o].like = !1, this.data.note.cs[o].like_count -= 1, 
            t.unfavoComment({
                id: n
            })) : (this.data.note.cs[o].like = !0, this.data.note.cs[o].like_count += 1, t.favoComment({
                id: n
            })), this.setData({
                note: this.data.note
            });
        } else t.onlogin();
    },
    replyViewPressed: function(e) {
        wx.navigateTo({
            url: "../note_replies/note_replies?noteID=" + t.data.note.id + "&commentID=" + e.currentTarget.dataset.commentId
        }), console.log("replyViewPressed" + e.currentTarget.dataset.commentId);
    },
    commentViewPressed: function(e) {
        wx.navigateTo({
            url: "../note_replies/note_replies?noteID=" + t.data.note.id + "&commentID=" + e.currentTarget.dataset.commentId
        }), console.log("commentViewPressed" + e.currentTarget.dataset.commentId);
    },
    commentsMoreViewPressed: function() {
        wx.navigateTo({
            url: "../note_comments/note_comments?noteID=" + t.data.note.id
        });
    },
    emptyFunction: function() {},
    returnToHome: function() {
        wx.switchTab({
            url: "/pages/home/home"
        });
    },
    commentButtonPressed: function() {
        wx.navigateTo({
            url: "../note_comments/note_comments?noteID=" + t.data.noteID
        });
    },
    reloadButtonPressed: function() {
        var t = this, n = this.data.noteID;
        this.setData({
            noteID: n
        }), t.setData({
            showReloadView: !1
        }), t = this;
        e.request("https://wapi.douguo.com/wxapp/notedetail", {
            id: n
        }, function(e) {
            if (wx.hideToast(), 0 != o.isObject(e.note)) {
                var n = e.note;
                t.setData({
                    showPage: !0,
                    note: n
                }), t.setupRichTextContents();
            }
        }, function(e) {
            t.setupRichTextContents(), wx.hideToast();
        }), this.request();
    },
    contentRecipeClick: function(t) {
        var e = t.currentTarget.dataset.actionUrl;
        console.log(e), e && wx.navigateTo({
            url: e
        });
    },
    contentNoteClick: function(t) {
        var e = t.currentTarget.dataset.actionUrl;
        console.log(e), e && wx.navigateTo({
            url: e
        });
    },
    richTextClick: function(t) {
        var e = t.currentTarget.dataset.richUrl;
        e && "http" == e.substring(0, 4) && wx.navigateTo({
            url: "../browser/browser?url=" + e
        });
    },
    download_app: function(t) {
        this.setData({
            showDownloadAlert: !0
        });
    },
    launchAppError: function(t) {
        this.download_app(t);
    },
    alertCoverPressed: function(t) {
        this.setData({
            showDownloadAlert: !1
        });
    }
});