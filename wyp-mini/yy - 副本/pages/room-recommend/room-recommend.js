var e = getApp(), t = require("../../utils/hdweapp.js"), o = require("../../utils/paramConfig.js").ParamConfig, n = require("../../utils/request.js").RequestGet, a = void 0;

Page({
    data: {
        statusBar: {
            title: "精彩直播推荐",
            height: e.globalData.systemInfo.statusBarHeight
        },
        systemInfo: null,
        shareInfo: null,
        statusBarHeight: 0,
        roomAttentionList: [],
        roomRecommendList: [],
        showMoreRoomAttention: !1,
        showMoreRoomRecommend: !1
    },
    recommendPageTouchstart: function(e) {
        a = e.changedTouches.length && e.changedTouches[0].pageX;
    },
    recommendPageTouchend: function(e) {
        e.changedTouches[0].pageX - a > 200 && wx.navigateBack();
    },
    getRoomRecommendList: function() {
        var e = this, t = o.WECHAT_YY_HOST + "/recommend/left/index/idx";
        n(t).then(function(t) {
            t.code ? wx.showToast({
                title: t.message,
                icon: "none"
            }) : e.setData({
                roomRecommendList: t.data
            });
        });
    },
    getRoomAttentionList: function() {
        var e = this, t = wx.getStorageSync("udbInfo");
        if (t && t.yyuid) {
            var a = o.WECHAT_YY_HOST + "/nav/subscribe/live", i = {
                wxAppid: "wx3538e651c432208a",
                udb_oar: t.udb_oar,
                yyuid: t.yyuid
            };
            n(a, i).then(function(t) {
                var o = t.data[0].data.map(function(e) {
                    var t = "", o = Math.floor(e.liveTime / 3600);
                    if (o) {
                        var n = Math.floor((e.liveTime - 60 * o * 60) / 60);
                        n.toString().length < 2 && (n = "0" + n), t = o + "小时" + n + "分钟";
                    } else {
                        var a = Math.floor(e.liveTime / 60);
                        a.toString().length < 2 && (a = "0" + a), t = a + "分钟";
                    }
                    return e._liveTime = t, e;
                });
                0 == t.code && e.setData({
                    roomAttentionList: o
                });
            });
        }
    },
    getSystemInfo: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    systemInfo: t,
                    statusBarHeight: t.statusBarHeight || 0
                });
            }
        });
    },
    openNewRoom: function(e) {
        var o = e.currentTarget.dataset.url, n = e.currentTarget.dataset.type, a = e.currentTarget.dataset.uid || "", i = e.currentTarget.dataset.sid, s = e.currentTarget.dataset.ssid;
        t.event({
            id: "10103",
            label: "0003",
            params: {
                key1: a,
                key2: i,
                key3: s
            }
        }), t.event({
            id: "10103",
            label: "0004",
            params: {
                key1: a,
                key2: i,
                key3: s,
                key4: n
            }
        }), wx.reLaunch({
            url: "/pages/index/index?url=" + encodeURIComponent(o)
        });
    },
    roomAttentionMore: function() {
        this.setData({
            showMoreRoomAttention: !this.data.showMoreRoomAttention
        });
    },
    roomRecommendMore: function() {
        this.setData({
            showMoreRoomRecommend: !this.data.showMoreRoomRecommend
        });
    },
    onLoad: function(e) {
        this.setData({
            shareInfo: e
        }), this.getSystemInfo(), this.getRoomRecommendList(), this.getRoomAttentionList(), 
        t.Page.init();
    },
    onShow: function() {},
    onShareAppMessage: function() {
        var e = wx.getStorageSync("HDSDK_openid") || "", t = wx.getStorageSync("origin_channel") || "wx_miniapp", o = this.data.shareInfo, n = encodeURIComponent("/pages/room/room?father_openId=" + e + "&origin_channel=" + t + "&sid=" + o.sid + "&uid=" + o.uid + "&ssid=" + o.ssid + "&snapshot=" + encodeURIComponent(o.snapshot));
        return {
            title: o.title || "YY直播",
            path: "/pages/index/index?father_openId=" + e + "&origin_channel=" + t + "&url=" + n,
            imageUrl: o.snapshot
        };
    }
});