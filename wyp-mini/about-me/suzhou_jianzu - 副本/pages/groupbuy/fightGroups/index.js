var t, e = require("../../../utils/server"), a = wx.getStorageSync("utoken"), r = 1, o = [];

Page({
    data: {
        width: 2 * Math.ceil(wx.getSystemInfoSync().windowWidth),
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        navindex: 0,
        refresh: !1,
        loading: !0
    },
    onLoad: function(t) {
        a = wx.getStorageSync("utoken");
        var e = this;
        e.setData({
            id: t.id
        }), e.loadPageData();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onShow: function() {
        wx.showLoading({
            title: "加载中"
        }), setTimeout(function() {
            wx.hideLoading();
        }, 2e3), a = wx.getStorageSync("utoken");
    },
    loadPageData: function() {
        a = wx.getStorageSync("utoken");
        var r = this;
        e.sendRequest({
            url: "?r=wxapp.groups.goods.fightGroups",
            showToast: !1,
            data: {
                utoken: a,
                id: r.data.id
            },
            method: "GET",
            success: function(e) {
                for (var a = 0; a < e.data.result.teams.length; a++) o.push(e.data.result.teams[a].residualtime);
                t = setInterval(function() {
                    for (var t = [], e = 0; e < o.length; e++) o[e] > 0 ? (o[e] = o[e] - 1, t[e] = r.time(o[e])) : t[e] = "";
                    r.setData({
                        arr: t
                    });
                }, 1e3), r.setData({
                    data: e.data.result,
                    loading: !1
                });
            }
        });
    },
    time: function(t) {
        return parseInt(t / 60 / 60) + ":" + parseInt(t / 60 % 60) + ":" + parseInt(t % 60);
    },
    onUnload: function(e) {
        clearInterval(t);
    },
    tocorder: function(t) {
        var e = this;
        console.log(t), wx.reLaunch({
            url: "../confirmOrder/index?teamid=" + t.currentTarget.dataset.id + "&type=groups&id=" + e.data.id
        });
    },
    bottom: function(s) {
        var n = this;
        if (n.data.refresh) return -1;
        n.setData({
            refresh: !0
        }), r += 1, e.sendRequest({
            url: "?r=wxapp.groups.goods.fightGroups",
            data: {
                utoken: a,
                id: n.data.id,
                page: r
            },
            method: "GET",
            success: function(e) {
                var a = [];
                for (var s in n.data.data.teams) a.push(n.data.data.teams[s]);
                {
                    if ("" != e.data.result.teams) {
                        for (var d in e.data.result.teams) a.push(e.data.result.teams[d]);
                        n.setData({
                            data: {
                                goods: e.data.result.goods,
                                teams: a
                            },
                            refresh: !1
                        });
                        for (var i = 0; i < a.length; i++) o.push(a[i].residualtime);
                        return t = setInterval(function() {
                            for (var t = [], e = 0; e < o.length; e++) o[e] > 0 ? (o[e] = o[e] - 1, t[e] = n.time(o[e])) : t[e] = "";
                            n.setData({
                                arr: t
                            });
                        }, 1e3), e.statusCode && 200 != e.statusCode ? (wx.hideToast(), void n.showModal({
                            content: "" + e.errMsg
                        })) : void 0;
                    }
                    r -= 1;
                }
            }
        });
    }
});