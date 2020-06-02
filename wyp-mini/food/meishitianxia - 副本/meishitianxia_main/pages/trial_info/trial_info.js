var a = require("../../wxParse/wxParse.js"), t = getApp();

Page({
    data: {
        wxParseData: [],
        ctwinlist: [],
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        isapply: !1,
        note: "",
        mask_poster: !1,
        time: "--天 --:--:--"
    },
    onLoad: function(e) {
        var i = this;
        i.setData({
            id: e.id
        }), (t.globalData.uid > 0 ? t.globalData.uid : -1) > 0 && i.setData({
            haveuid: !0
        }), wx.getSystemInfo({
            success: function(a) {
                i.setData({
                    statusBarHeight: a.statusBarHeight
                });
            }
        });
        var o = "goods_getTrialInfo", n = {
            id: e.id
        }, s = t.getParam(o, n);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (0 == t.data[o].error) {
                    a.wxParse("article", "html", t.data[o].data.shiyong.ctdescr, i, 5), a.wxParse("ctwinlist", "html", t.data[o].data.shiyong.ctwinlist, i, 5);
                    var e = 1 == t.data[o].data.isapply;
                    i.setData({
                        trial_data: t.data[o].data,
                        loading: !1,
                        loading_fail: !1,
                        isapply: e
                    }), t.data[o].data.endtime > 0 && setTimeout(function() {
                        i.countdown(t.data[o].data.endtime);
                    }, 1e3);
                } else i.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                i.setData({
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
        var i = Math.floor(a / 60 % 60);
        i = i < 10 ? "0" + i : i;
        var o = Math.floor(a % 60);
        return o = o < 10 ? "0" + o : o, t + e + ":" + i + ":" + o;
    },
    clickinfo: function(a) {
        var e = this;
        a.currentTarget.dataset.type;
        t.globalData.uid = -1, wx.getUserInfo({
            success: function(a) {
                t.getId(function(a) {
                    a > 0 && e.setData({
                        haveuid: !0
                    });
                });
            }
        });
    },
    myCatchTouch: function() {},
    do_trial: function() {
        this.setData({
            mask_poster: !0
        });
    },
    trial_note: function(a) {
        this.setData({
            note: a.detail.value
        });
    },
    do_cancel: function() {
        this.setData({
            note: "",
            mask_poster: !1
        });
    },
    do_ok: function() {
        var a = this;
        if ("" == a.data.note) return wx.showToast({
            image: "../../image/delete_popmenu.png",
            title: "请填写理由"
        }), !1;
        wx.showToast({
            title: "提交中...",
            icon: "loading",
            duration: 1e4
        });
        var e = t.globalData.uid > 0 ? t.globalData.uid : -1, i = "goods_trialApply", o = {
            cid: a.data.trial_data.shiyong.cid,
            ctid: a.data.trial_data.shiyong.ctid,
            note: a.data.note,
            uid: e,
            session_key: t.globalData.key
        }, n = t.getParam(i, o);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: n
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                0 == t.data[i].error ? (wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.hideToast(), a.setData({
                        isapply: !0,
                        mask_poster: !1
                    });
                }, 1e3)) : (wx.hideToast(), wx.showToast({
                    icon: "none",
                    title: t.data[i].msg
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
    wxParseTagATap: function(a) {
        var t, e = a.currentTarget.dataset.src;
        /space-/.test(e) && (t = e.split(".html")[0].split("-")[1], wx.navigateTo({
            url: "/pages/space/space?uid=" + t
        }));
    },
    onShareAppMessage: function() {
        return {
            title: "免费试用：" + this.data.trial_data.cname,
            desc: this.data.trial_data.recommend,
            imageUrl: this.data.trial_data.csalvepic[0],
            path: "/pages/index/index?type=trial_info&id=" + this.data.id + "&inviteuid=" + t.globalData.uid
        };
    }
});