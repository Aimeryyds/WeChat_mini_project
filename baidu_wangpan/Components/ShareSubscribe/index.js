var e = require("../../netdiisk_requestapi/getShareData.js"), t = wx.ENV.staticPath;

Component({
    properties: {
        shareUrlInfo: {
            type: Object,
            observer: function() {
                this.getShareSubInfo();
            }
        },
        hasDir: {
            type: Boolean,
            observer: function() {
                this.getShareSubInfo();
            }
        }
    },
    data: {
        closeIcon: t + "/feed-close.png",
        showSub: !1,
        closed: !1
    },
    methods: {
        getShareSubInfo: function() {
            var t = this, s = this.data, n = s.shareUrlInfo;
            if (n.shareId && s.hasDir && !s.closed) {
                var r = {
                    share_uk: n.uk,
                    shareid: n.shareId,
                    share_surl: n.shortUrl,
                    feedback_type: 0
                };
                (0, e.getLinkFeedback)(r).then(function(e) {
                    0 === (e = e.data || {}).errno && e.button && !e.button.pressed && (t.setData({
                        showSub: !0
                    }), wx.log.share.subShow.send());
                }).catch(function(e) {
                    console.error(e);
                });
            }
        },
        handleClose: function() {
            this.close(), wx.log.share.subClose.send();
        },
        close: function() {
            this.setData({
                closed: !0
            });
        },
        reportSub: function() {
            var t = this, s = this.data.shareUrlInfo, n = {
                share_uk: s.uk,
                shareid: s.shareId,
                share_surl: s.shortUrl,
                feedback_type: 0
            };
            (0, e.reportLinkFeedback)(n).then(function(e) {
                0 === (e = e.data || {}).errno || 80001 === e.errno ? (t.handleMsg("订阅成功"), t.close()) : t.handleMsg("订阅失败，请稍后重试");
            }).catch(function(e) {
                t.handleMsg("订阅失败，请稍后重试");
            });
        },
        handleSub: function() {
            var e = this;
            this.getUserSubAuth().then(function() {
                e.reportSub();
            }).catch(function(e) {
                console.error(e);
            }), wx.log.share.subClick.send();
        },
        handleMsg: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
            wx.wetoast({
                content: e,
                duration: t
            });
        },
        getUserSubAuth: function() {
            var e = this, t = "STZ408PhBK7CFOk_ueOoVHQoRUREEDuXoqvOCcDS8Ck";
            return new Promise(function(s, n) {
                wx.requestSubscribeMessage({
                    tmplIds: [ t ],
                    success: function(r) {
                        var o = r[t], a = {
                            accept: "授权成功",
                            reject: "订阅消息需要您的授权才行哦~",
                            ban: "出了一些问题，已通知程序员哥哥处理"
                        }[o] || "未知错误，请稍后重试";
                        e.handleMsg(a), "accept" === o ? s() : n();
                    },
                    fail: function() {
                        e.handleMsg("未知错误，请稍后重试"), n();
                    }
                });
            });
        }
    }
});