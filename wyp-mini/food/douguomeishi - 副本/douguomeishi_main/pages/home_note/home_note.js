var t, e = require("../../utils/network.js"), a = require("../../utils/util.js"), o = {
    normal: 0,
    loading: 1,
    end: 2,
    noData: 3,
    error: 4,
    standby: 5
};

Page({
    data: {
        bottomButtonShow: !1,
        offset: 0,
        urlOffset: 0,
        num: 20,
        footerState: o.normal,
        array: [],
        leftList: [],
        rightList: [],
        leftHeight: 0,
        rightHeight: 0,
        itemImageWidth: 321
    },
    onLoad: function(e) {
        (t = this).request();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        t.setData({
            urlOffset: 0
        }), wx.stopPullDownRefresh(), this.request();
    },
    onReachBottom: function() {
        if (console.log("onReachBottom"), !(this.data.array.length <= 0 || this.data.footerState == o.end)) {
            var t = this.data.offset + this.data.num;
            this.setData({
                urlOffset: t
            }), this.request();
        }
    },
    onShareAppMessage: function() {},
    request: function() {
        this.setData({
            footerState: o.loading
        });
        var n = "https://wapi.douguo.com/wxapp/homenote/" + this.data.urlOffset + "/" + this.data.num;
        e.request(n, {}, function(e) {
            var n, i;
            a.isArray(e.notes) ? (i = e.notes.length < t.data.num ? o.end : o.loading, (n = 0 == t.data.urlOffset ? e.notes : t.data.array.concat(e.notes)).length <= 0 && (i = o.noData), 
            t.setupNotesFall(e.notes)) : (n = [], i = o.noData), t.setData({
                footerState: i,
                array: n,
                offset: t.data.urlOffset,
                bottomButtonShow: !0
            });
        }, function(e) {
            wx.showModal({
                title: "",
                content: "别着急，网有点慢，再试试",
                showCancel: !1
            }), t.setData({
                footerState: o.error,
                bottomButtonShow: !1
            });
        });
    },
    setupNotesFall: function(e) {
        var a = t.data.leftList, o = t.data.rightList, n = t.data.leftHeight, i = t.data.rightHeight;
        0 == t.data.urlOffset && (a = [], o = [], n = 0, i = 0);
        for (var s = 0; s < e.length; s++) {
            var r = e[s];
            0 != r.image_h && 0 != r.image_w || (r.image_h = r.image_w = t.data.itemImageWidth), 
            r.image_h = parseInt(r.image_h) / parseInt(r.image_w) * t.data.itemImageWidth, r.image_w = t.data.itemImageWidth, 
            n <= i ? (a.push(r), n += r.image_h) : (o.push(r), i += r.image_h);
        }
        this.setData({
            leftList: a,
            rightList: o,
            leftHeight: n,
            rightHeight: i
        });
    },
    noteItemPressed: function(t) {
        var e = t.currentTarget.dataset.noteId;
        console.log(e), wx.navigateTo({
            url: "../note/note?id=" + e
        });
    },
    uploadNoteClick: function() {
        var t = this;
        wx.getStorageSync("user") ? wx.navigateTo({
            url: "../../pages/note_publish/note_publish"
        }) : t.loginAction();
    },
    loginAction: function() {
        var t = this;
        wx.showLoading({
            title: "加载中"
        }), wx.login({
            success: function(a) {
                wx.getUserInfo({
                    success: function(o) {
                        wx.setStorageSync("nickName", o.userInfo.nickName), wx.setStorageSync("avatarUrl", o.userInfo.avatarUrl), 
                        e.request("https://passport.douguo.com/mitoSign/getwxsession", {
                            code: a.code,
                            iv: o.iv,
                            encryptedData: o.encryptedData
                        }, function(t) {
                            wx.hideLoading(), e.initSessionParams(t.union_id, t.third_session_key), wx.setStorageSync("open_id", t.openid), 
                            wx.navigateTo({
                                url: "../authorize/authorize"
                            });
                        }, function(e) {
                            wx.showModal({
                                title: "",
                                content: "别着急，网有点慢，再试试",
                                showCancel: !1
                            }), t.loginfailed(e);
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
    }
});