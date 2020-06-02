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
        recipeID: "",
        replyID: "",
        replyToUserID: "",
        focused: !1,
        keyboardBottom: 0,
        placeholder: "我想说两句",
        commentText: "",
        array: [],
        footerState: a.normal
    },
    onLoad: function(t) {
        var e = this;
        e.setData({
            recipeID: t.recipeID
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
    request: function() {
        if (!(this.data.recipeID.length <= 0)) {
            this.setData({
                footerState: a.loading
            });
            var o = this, n = "https://wapi.douguo.com/wxapp/recipe/flatcomments/" + this.data.offset + "/" + this.data.num;
            t.request(n, {
                id: this.data.recipeID
            }, function(t) {
                var n, i;
                e.isArray(t.comments) ? (n = 0 == o.data.offset ? t.comments : o.data.array.concat(t.comments), 
                i = t.comments.length < o.data.num ? a.end : a.normal, n.length <= 0 && (i = a.noData)) : (n = [], 
                i = a.noData), o.setData({
                    footerState: i,
                    array: n
                });
            }, function(t) {
                wx.showModal({
                    title: "",
                    content: "别着急，网有点慢，再试试",
                    showCancel: !1
                });
                var e = o.data.offset - o.data.num;
                e = e < 0 ? 0 : e, o.setData({
                    offset: e,
                    footerState: a.error
                });
            });
        }
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        if (console.log("onReachBottom"), !(this.data.array.length <= 0 || this.data.footerState == a.end)) {
            var t = this.data.offset + this.data.num;
            this.setData({
                offset: t
            }), this.request();
        }
    },
    onShareAppMessage: function() {
        return {
            title: "豆果美食",
            desc: "豆果美食 开启美味生活",
            path: "/pages/recipe_comments/recipe_comments?recipeID=" + this.data.recipeID
        };
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
    favoRecipe: function(e) {
        t.request("https://wapi.douguo.com/wxapp/comment/like", {
            entity_type: 9,
            id: e.id
        }, function(t) {
            console.log("点赞成功");
        }, function(t) {
            wx.showModal({
                title: "",
                content: "别着急，网有点慢，再试试",
                showCancel: !1
            }), console.log("点赞失败");
        });
    },
    unfavoRecipe: function(e) {
        t.request("https://wapi.douguo.com/wxapp/comment/unlike", {
            entity_type: 9,
            id: e.id
        }, function(t) {
            console.log("取消赞成功");
        }, function(t) {
            wx.showModal({
                title: "",
                content: "别着急，网有点慢，再试试",
                showCancel: !1
            }), console.log("取消赞失败");
        });
    },
    favoViewPressed: function(t) {
        console.log("favoViewPressed" + t.currentTarget.dataset.commentIndex);
        var e = this;
        if (wx.getStorageSync("user")) {
            var a = t.currentTarget.dataset.commentIndex, o = this.data.array[a].id;
            this.data.array[a].like ? (this.data.array[a].like = !1, this.data.array[a].like_count -= 1, 
            e.unfavoRecipe({
                id: o
            })) : (this.data.array[a].like = !0, this.data.array[a].like_count += 1, e.favoRecipe({
                id: o
            })), this.setData({
                array: this.data.array
            });
        } else e.loginAction();
    },
    replyViewPressed: function(t) {
        var e = this;
        wx.navigateTo({
            url: "../recipe_replies/recipe_replies?recipeID=" + e.data.recipeID + "&commentID=" + t.currentTarget.dataset.commentId
        }), console.log("replyViewPressed" + t.currentTarget.dataset.commentId);
    },
    commentViewPressed: function(t) {
        this.setData({
            focused: !0,
            replyID: t.currentTarget.dataset.commentId,
            replyToUserID: t.currentTarget.dataset.userId,
            placeholder: "@" + t.currentTarget.dataset.userName,
            commentText: ""
        }), console.log("commentViewPressed" + t.currentTarget.dataset.userId);
    },
    emptyFunction: function() {},
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
    postReply: function(a) {
        var o = this;
        t.request("https://wapi.douguo.com/wxapp/user/addrecipecomment", {
            reply_id: o.data.replyID,
            content: a.content,
            post_id: o.data.replyID,
            recipe_id: o.data.recipeID,
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
                child_comments: [],
                ccc: 0,
                like_count: 0,
                like: 0
            };
            if (o.data.replyID) {
                for (var r = 0; r < o.data.array.length; r++) {
                    var s = o.data.array[r];
                    if (s.id == o.data.replyID) {
                        s.child_comments = [ i ].concat(s.child_comments), s.ccc += 1;
                        break;
                    }
                }
                o.setData({
                    array: o.data.array,
                    commentText: ""
                });
            } else o.setData({
                array: [ i ].concat(o.data.array),
                commentText: ""
            });
            wx.showToast({
                title: "评论成功",
                duration: 1500
            });
        }, function(t) {
            wx.showModal({
                title: "",
                content: "别着急，网有点慢，再试试",
                showCancel: !1
            }), wx.showToast({
                title: t,
                icon: "none"
            });
        });
    }
});