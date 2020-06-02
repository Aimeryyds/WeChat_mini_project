var t = require("../../utils/network.js"), e = require("../../utils/util.js"), a = {
    normal: 0,
    loading: 1,
    end: 2,
    noData: 3,
    error: 4,
    standby: 5
};

Page({
    data: {
        offset: 0,
        num: 20,
        logined: !1,
        isIpx: getApp().globalData.isIpx,
        focused: !1,
        noteID: "",
        commentID: "",
        replyID: "",
        replyToUserID: "",
        replyToUserName: "",
        placeholder: "我想说两句",
        commentText: "",
        keyboardBottom: 0,
        array: [],
        comment: {},
        footerState: a.normal
    },
    onLoad: function(t) {
        var e = this;
        e.setData({
            noteID: t.noteID,
            commentID: t.commentID,
            replyID: t.commentID
        }), e.data.isIpx && e.setData({
            keyboardBottom: 34
        }), e.request();
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
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        if (console.log("onReachBottom"), !(this.data.array.length <= 0 || this.data.footerState == a.end)) {
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
            var o = this, n = "https://wapi.douguo.com/wxapp/note/commentdetail/" + this.data.offset + "/" + this.data.num;
            t.request(n, {
                note_id: this.data.noteID,
                comment_id: this.data.commentID
            }, function(t) {
                var n, i;
                e.isArray(t.cs) ? (n = 0 == o.data.offset ? t.cs : o.data.array.concat(t.cs), i = t.cs.length < o.data.num ? a.end : a.normal, 
                n.length <= 0 && (i = a.noData)) : (n = [], i = a.noData), o.setData({
                    footerState: i,
                    array: n
                }), 0 == o.data.offset && o.setData({
                    comment: t.mc
                });
            }, function(t) {
                var e = o.data.offset - o.data.num;
                e = e < 0 ? 0 : e, o.setData({
                    offset: e,
                    footerState: a.error
                });
            });
        }
    },
    loginAction: function() {
        var e = this;
        wx.showLoading({
            title: "加载中"
        }), wx.login({
            success: function(a) {
                wx.getUserInfo({
                    success: function(o) {
                        wx.setStorageSync("nickName", o.userInfo.nickName), wx.setStorageSync("avatarUrl", o.userInfo.avatarUrl), 
                        t.request("https://passport.douguo.com/mitoSign/getwxsession", {
                            code: a.code,
                            iv: o.iv,
                            encryptedData: o.encryptedData
                        }, function(e) {
                            wx.hideLoading(), t.initSessionParams(e.union_id, e.third_session_key), wx.setStorageSync("open_id", e.openid), 
                            wx.navigateTo({
                                url: "../authorize/authorize"
                            });
                        }, function(t) {
                            e.loginfailed(t);
                        });
                    },
                    fail: function(t) {
                        e.loginfailed(t);
                    }
                });
            },
            fail: function(t) {
                e.loginfailed(t);
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
    favoComment: function(e) {
        t.request("https://wapi.douguo.com/wxapp/comment/like", {
            entity_type: 8,
            id: e.id
        }, function(t) {
            console.log("点赞成功");
        }, function(t) {
            console.log("点赞失败");
        });
    },
    unfavoComment: function(e) {
        t.request("https://wapi.douguo.com/wxapp/comment/unlike", {
            entity_type: 8,
            id: e.id
        }, function(t) {
            console.log("取消赞成功");
        }, function(t) {
            console.log("取消赞失败");
        });
    },
    inputBoxBlur: function(t) {
        var e = 0;
        this.data.isIpx && (e = 34), this.setData({
            focused: !1,
            keyboardBottom: e
        });
    },
    inputBoxFocus: function(t) {
        this.setData({
            keyboardBottom: t.detail.height
        });
    },
    publishButtonPressed: function(t) {
        var e = this, a = t.detail.value.searchinput;
        a.length <= 0 || e.postReply({
            content: a
        });
    },
    publishConfirm: function(t) {
        var e = this, a = t.detail.value;
        a.length <= 0 || e.postReply({
            content: a
        });
    },
    commentFavoViewPressed: function(t) {
        var e = this;
        if (wx.getStorageSync("user")) {
            var a = this.data.comment.id;
            this.data.comment.like ? (this.data.comment.like = !1, this.data.comment.like_count -= 1, 
            e.unfavoComment({
                id: a
            })) : (this.data.comment.like = !0, this.data.comment.like_count += 1, e.favoComment({
                id: a
            })), this.setData({
                comment: this.data.comment
            });
        } else e.loginAction();
    },
    favoViewPressed: function(t) {
        console.log("favoViewPressed" + t.currentTarget.dataset.commentIndex);
        var e = this;
        if (wx.getStorageSync("user")) {
            var a = t.currentTarget.dataset.commentIndex, o = this.data.array[a].id;
            this.data.array[a].like ? (this.data.array[a].like = !1, this.data.array[a].like_count -= 1, 
            e.unfavoComment({
                id: o
            })) : (this.data.array[a].like = !0, this.data.array[a].like_count += 1, e.favoComment({
                id: o
            })), this.setData({
                array: this.data.array
            });
        } else e.loginAction();
    },
    emptyFunction: function() {},
    commentViewPressed: function(t) {
        this.setData({
            focused: !0,
            replyID: t.currentTarget.dataset.commentId,
            replyToUserID: t.currentTarget.dataset.userId,
            replyToUserName: t.currentTarget.dataset.userName,
            placeholder: "@" + t.currentTarget.dataset.userName,
            commentText: ""
        });
    },
    postReply: function(a) {
        var o = this;
        t.request("https://wapi.douguo.com/wxapp/user/addnotecomment", {
            reply_id: o.data.replyID,
            content: a.content,
            post_id: o.data.commentID,
            note_id: o.data.noteID,
            to_user_id: o.data.replyToUserID
        }, function(t) {
            var n = wx.getStorageSync("user"), i = {
                id: t.comment_id,
                u: {
                    id: n.user_id,
                    n: n.nick,
                    p: n.user_photo,
                    lv: 0,
                    is_prime: 0
                },
                content: [ {
                    c: a.content
                } ],
                time: e.formatTime(new Date()),
                reply_id: o.data.replyID,
                reply_user: {
                    n: o.data.replyToUserName
                },
                child_comments: [],
                ccc: 0,
                like_count: 0,
                like: 0
            };
            o.setData({
                array: o.data.array.concat(i),
                commentText: ""
            }), wx.showToast({
                title: "评论成功",
                duration: 1500
            });
        }, function(t) {
            console.log("评论失败");
        });
    }
});