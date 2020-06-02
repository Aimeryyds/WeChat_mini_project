var t = require("../../../../utils/server"), a = wx.getStorageSync("utoken"), e = 1, s = {};

Page({
    data: {
        loading: !0,
        reflesh: !1
    },
    onLoad: function() {
        a = wx.getStorageSync("utoken"), this.loadingData();
    },
    onShow: function() {
        e = 1, s = {};
    },
    loadingData: function() {
        var e = this;
        t.sendRequest({
            url: "?r=wxapp.creditshop",
            showToast: !1,
            data: {
                utoken: a
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    loading: !1,
                    data: t.data.result
                }), s.credit = e.data.data.credit, s.advs = e.data.data.advs, s.recommands = e.data.data.recommands, 
                s.times = e.data.data.times, s.tops = e.data.data.tops, s.vips = e.data.data.vips;
            }
        });
    },
    onReachBottom: function() {
        var d = this;
        d.data.reflesh || (d.setData({
            reflesh: !0
        }), e += 1, t.sendRequest({
            url: "?r=wxapp.creditshop",
            data: {
                utoken: a,
                page: e
            },
            method: "GET",
            success: function(t) {
                t.data.result ? (t.data.result.advs && (s.advs = s.advs.concat(t.data.result.advs)), 
                t.data.result.vips && (s.vips = s.vips.concat(t.data.result.vips)), t.data.result.tops && (s.tops = s.tops.concat(t.data.result.tops)), 
                t.data.result.times && (s.times = s.times.concat(t.data.result.times)), t.data.result.recommands && (s.recommands = s.recommands.concat(t.data.result.recommands)), 
                (t.data.result.advs || t.data.result.vips || t.data.result.tops || t.data.result.times || t.data.result.recommands) && d.setData({
                    reflesh: !1,
                    data: s
                })) : e -= 1;
            }
        }));
    },
    tointegral: function(t) {
        wx.navigateTo({
            url: "../integral/index?credit=" + t.currentTarget.dataset.credit
        });
    },
    todetail: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../detail/index?id=" + t.currentTarget.dataset.id
        });
    }
});