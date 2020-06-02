var a, t = require("../../wxParse/wxParse.js"), e = getApp(), o = null;

Page({
    data: {
        wxParseData: [],
        ctwinlist: [],
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        isapply: !1,
        time: "--天 --:--:--",
        type: 0
    },
    onLoad: function(a) {
        var t = this;
        t.setData({
            id: a.id
        }), (e.globalData.uid > 0 ? e.globalData.uid : -1) > 0 && t.setData({
            haveuid: !0
        }), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    statusBarHeight: a.statusBarHeight
                });
            }
        }), wx.createRewardedVideoAd && ((o = wx.createRewardedVideoAd({
            adUnitId: "adunit-2b9e3bb0b4f777f7"
        })).onLoad(function() {}), o.onError(function(a) {}), o.onClose(function(a) {
            a && a.isEnded ? t.setData({
                type: 2
            }) : wx.showToast({
                icon: "none",
                title: "未观看完整，请重新观看"
            });
        }));
    },
    onShow: function(t) {
        var e = this;
        (a = wx.getStorageSync("draw_vn") ? wx.getStorageSync("draw_vn") : {
            n: 0,
            date: ""
        }).date != new Date().toDateString() && (a.n = 0, a.date = "", wx.setStorageSync("draw_vn", a)), 
        e.getDrawInfo();
    },
    getDrawInfo: function(o) {
        var n = this, i = (e.globalData.uid > 0 && e.globalData.uid, "goods_getDrawInfo"), d = {
            id: n.data.id
        }, r = e.getParam(i, d);
        wx.request({
            url: e.globalData.murl5,
            data: {
                p: r
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                if (0 == e.data[i].error) {
                    t.wxParse("article", "html", e.data[i].data.gou.ctdescr, n, 5), t.wxParse("ctwinlist", "html", e.data[i].data.gou.ctwinlist, n, 5);
                    var d = 1 == e.data[i].data.isapply;
                    n.setData({
                        draw_data: e.data[i].data,
                        lotteryinfo: e.data[i].data.lotteryinfo,
                        loading: !1,
                        loading_fail: !1,
                        isapply: d
                    }), e.data[i].data.endtime > 0 && 2 != o && setTimeout(function() {
                        n.countdown(e.data[i].data.endtime);
                    }, 1e3), e.data[i].data.sxluckdraw < 1 && a.n < 5 && n.setData({
                        type: 1
                    });
                } else n.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                n.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            complete: function() {}
        });
    },
    countdown: function(a) {
        var t = this;
        if (a < 0) return !1;
        t.setData({
            time: t.dateformat(a)
        }), setTimeout(function() {
            a -= 1, t.countdown(a);
        }, 1e3);
    },
    dateformat: function(a) {
        var t = Math.floor(a / 3600 / 24);
        t = t > 0 ? t + "天 " : "";
        var e = Math.floor(a / 3600 % 24);
        e = e < 10 ? "0" + e : e;
        var o = Math.floor(a / 60 % 60);
        o = o < 10 ? "0" + o : o;
        var n = Math.floor(a % 60);
        return n = n < 10 ? "0" + n : n, t + e + ":" + o + ":" + n;
    },
    clickinfo: function(a) {
        var t = this;
        a.currentTarget.dataset.type;
        e.globalData.uid = -1, wx.getUserInfo({
            success: function(a) {
                e.getId(function(a) {
                    a > 0 && (t.setData({
                        haveuid: !0
                    }), t.getDrawInfo(2));
                });
            }
        });
    },
    myCatchTouch: function() {},
    do_draw: function(t) {
        var o = this, n = t.currentTarget.dataset.type, i = "video" == n ? 1 : 0;
        wx.showToast({
            title: "提交中...",
            icon: "loading",
            duration: 1e4
        });
        e.globalData.uid > 0 && e.globalData.uid;
        var d = "goods_drawApply", r = {
            id: o.data.draw_data.gou.cid,
            ctid: o.data.draw_data.gou.ctid,
            luckdraw: 1,
            videoad: i,
            session_key: e.globalData.key
        }, s = e.getParam(d, r);
        wx.request({
            url: e.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                0 == t.data[d].error ? (wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), "video" == n && (a.n = a.n + 1, a.date = new Date().toDateString(), wx.setStorageSync("draw_vn", a)), 
                setTimeout(function() {
                    wx.hideToast(), o.setData({
                        type: "video" == n ? 0 : 1
                    }), o.getDrawInfo(2);
                }, 1e3)) : (wx.hideToast(), wx.showToast({
                    icon: "none",
                    title: t.data[d].msg
                }));
            },
            fail: function() {
                wx.hideToast(), wx.showToast({
                    image: "../../image/delete_popmenu.png",
                    title: "提交失败"
                });
            }
        });
    },
    do_drawvideo: function() {
        o && o.show().catch(function() {
            o.load().then(function() {
                return o.show();
            }).catch(function(a) {
                console.log("激励视频 广告显示失败" + a);
            });
        });
    },
    wxParseTagATap: function(a) {
        var t, e = a.currentTarget.dataset.src;
        /space-/.test(e) && (t = e.split(".html")[0].split("-")[1], wx.navigateTo({
            url: "/pages/space/space?uid=" + t
        }));
    },
    onShareAppMessage: function() {
        return {
            title: "免费抽奖：" + this.data.draw_data.cname,
            desc: this.data.draw_data.recommend,
            imageUrl: this.data.draw_data.csalvepic[0],
            path: "/pages/index/index?type=draw_info&id=" + this.data.id + "&inviteuid=" + e.globalData.uid
        };
    }
});