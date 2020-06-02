var t, e = require("../../../utils/server"), a = wx.getStorageSync("utoken"), s = 1, n = [];

Page({
    data: {
        isClick: !1,
        lookPhone: "点击查看",
        comments: "",
        hasmessage: "",
        contDetail: "",
        noCommentsList: ""
    },
    onLoad: function(e) {
        t = this, a = wx.getStorageSync("utoken"), t.setData({
            nowId: e.id
        }), t.detailInfo(a, t.data.nowId);
    },
    detailInfo: function(a, n, o) {
        t = this, e.sendRequest({
            url: "?r=sad2.detail",
            data: {
                utoken: a,
                id: n
            },
            method: "GET",
            success: function(e) {
                if (e.data.result) {
                    var o = e.data.result.createtime.indexOf(" ");
                    t.setData({
                        detialList: e.data.result,
                        createtime: e.data.result.createtime.substring(0, o)
                    }), e.data.result.comments.length > 0 && (s = 1, t.getComments(a, n, s));
                }
            }
        });
    },
    clickphone: function() {
        t = this;
        var a = wx.getStorageSync("utoken");
        t.data.isClick ? wx.makePhoneCall({
            phoneNumber: t.data.phone
        }) : e.sendRequest({
            url: "?r=sad.show_mobile&utoken=" + a,
            data: {},
            method: "GET",
            success: function(e) {
                0 == e.data.status && t.setData({
                    phone: t.data.detialList.mobile,
                    isClick: !0,
                    lookPhone: "点击拨号"
                });
            }
        });
    },
    clickLike: function() {
        e.sendRequest({
            url: "?r=sad2.like&utoken=" + a,
            data: {
                id: t.data.nowId
            },
            method: "GET",
            success: function(e) {
                t.detailInfo(a, t.data.nowId);
            }
        });
    },
    message: function() {
        this.setData({
            hasmessage: !0
        });
    },
    closeMessage: function() {
        this.setData({
            hasmessage: !1
        });
    },
    callHoster: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "确定与发布人进行通话吗？",
            confirmColor: "#F35155",
            success: function(e) {
                e.confirm ? wx.makePhoneCall({
                    phoneNumber: t.data.detialList.mobile
                }) : e.cancel;
            }
        });
    },
    sendMessage: function(a, s, n, o) {
        t = this, e.sendRequest({
            url: "?r=sad2.comment",
            data: {
                utoken: a,
                id: s,
                content: n
            },
            method: "GET",
            success: function(e) {
                t.detailInfo(a, s), t.getComments(a, s, o);
            }
        });
    },
    formMessage: function(t) {
        var e = this;
        e.setData({
            contDetail: t.detail.value.cont
        }), e.data.contDetail ? (s = 1, e.sendMessage(a, e.data.nowId, e.data.contDetail), 
        e.setData({
            contDetail: ""
        })) : wx.showToast({
            title: "内容不能为空",
            image: "https://tws.cnweisou.com/images/eidtNo.png",
            duration: 2e3
        });
    },
    clickSumbit: function() {},
    bindscrolltolower: function() {
        var t = this;
        t.data.detialList.comments.length > 0 && (t.data.noCommentsList ? wx.showToast({
            title: "没有更多评论喔",
            image: "https://tws.cnweisou.com/images/eidtNo.png",
            duration: 500
        }) : (s++, t.getComments(a, t.data.nowId, s)));
    },
    getComments: function(a, o, i) {
        t = this, e.sendRequest({
            url: "?r=sad2.get_comments",
            data: {
                utoken: a,
                id: o,
                page: i
            },
            method: "GET",
            success: function(e) {
                if (e.data.result.length > 0) {
                    var a;
                    for (var o in e.data.result) a = e.data.result[o].createtime.indexOf(" "), e.data.result[o].createtime = e.data.result[o].createtime.substring(0, a);
                    1 == s ? (n = [], n = e.data.result.reverse()) : n.concat(e.data.result.reverse()), 
                    t.setData({
                        commentsAll: n,
                        noCommentsList: !1
                    });
                } else s--, t.setData({
                    noCommentsList: !0
                }), wx.showToast({
                    title: "没有更多评论喔",
                    image: "https://tws.cnweisou.com/images/eidtNo.png",
                    duration: 1e3
                });
            }
        });
    },
    previewImg: function(t) {
        var e = this;
        wx.previewImage({
            current: t.currentTarget.dataset.url,
            urls: e.data.detialList.imgs
        });
    }
});