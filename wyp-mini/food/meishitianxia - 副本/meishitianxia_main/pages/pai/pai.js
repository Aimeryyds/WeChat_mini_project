var a = getApp();

Page({
    data: {
        navs: [ {
            name: "看帖",
            type: "pai",
            id: "all"
        }, {
            name: "投票",
            type: "pai",
            id: "vote"
        }, {
            name: "精华",
            type: "pai",
            id: "elite"
        } ],
        tag: 0,
        refresh: !1,
        loading: !0,
        loading_fail: !1,
        status: !0,
        top_pai: [],
        lastY: 0
    },
    onLoad: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    height: a.windowHeight
                });
            }
        }), !(a.globalData.uid > 0) && t.inviteuid > 0 && wx.setStorageSync("inviteuid", t.inviteuid), 
        a.globalData.uid > 0 && e.setData({
            haveuid: !0
        }), "pai_info" == t.type && wx.navigateTo({
            url: "/pages/pai_info/pai_info?id=" + t.id
        });
    },
    onShow: function() {
        var a, t = this, e = t.data.navs, i = [], n = [], o = [];
        if (wx.setStorageSync("showmy", 1), !t.data.page) {
            for (t.setData({
                navs: e
            }), a = 0; a < t.data.navs.length; a++) i.push(1), o.push(!1), n.push([]);
            t.setData({
                page: i,
                loading_end: o,
                list: n
            }), t.loadMore();
        }
    },
    tagtag_info: function(a) {
        this.setData({
            tag: a.currentTarget.dataset.n
        });
    },
    swiper_list_change: function(a) {
        this.setData({
            tag: a.detail.current,
            refresh: !1
        }), 1 == this.data.page[a.detail.current] && this.loadMore();
    },
    list_onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function(t) {
        var e = this, i = e.data.tag, n = (e.data.navs[i].type, e.data.page), o = e.data.loading_end;
        if (o[i] || !e.data.status) return !1;
        e.setData({
            loading_fail: !1,
            status: !1
        });
        var s = "pai_getPaiList", d = {
            type: e.data.navs[i].id,
            pageindex: n[i]
        }, r = a.getParam(s, d);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: r
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (0 == t.data[s].error) {
                    var n, d = e.data.list, r = t.data[s].data, l = e.data.page;
                    for (n = 0; n < r.length; n++) r[n].vip = a.showstaruser(r[n].uid), r[n].photo[0] && (r[n].photo[0].pic = r[n].photo[0].pic.replace("p500GIF", "c320"));
                    0 == i && 1 == l[i] && e.load_top(), d[i] = e.concat_list(d[i], r), l[i] = l[i] + 1, 
                    e.setData({
                        list: d,
                        loading: !1,
                        page: l
                    });
                } else t.data[s].error < 0 ? (o[i] = !0, e.setData({
                    loading: !1,
                    loading_end: o
                })) : e.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                e.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            complete: function() {
                e.setData({
                    status: !0,
                    refresh: !1
                });
            }
        });
    },
    concat_list: function(a, t) {
        for (var e = 0; e < a.length; e++) for (var i = 0; i < t.length; i++) a[e].id == t[i].id && t.splice(i, 1);
        return a.concat(t);
    },
    onShareAppMessage: function() {
        return {
            title: "美食天下：帖子",
            desc: "让吃更美好",
            path: "/pages/pai/pai?inviteuid=" + a.globalData.uid
        };
    },
    load_top: function() {
        var t = this, e = "pai_getTopPaiList", i = {
            pageindex: 1
        }, n = a.getParam(e, i);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: n
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[e].error && t.setData({
                    top_pai: t.data.top_pai.concat(a.data[e].data)
                });
            }
        });
    },
    handletouchend: function(a) {
        var t = this, e = t.data.tag;
        if (a.changedTouches[0].pageY - this.data.lastY > 100 && 0 == t.data.top) {
            var i = t.data.page, n = t.data.list;
            i[e] = 1, n[e] = [], 0 == e && t.setData({
                top_pai: []
            }), t.setData({
                refresh: !0,
                page: i,
                list: n
            }), t.loadMore(1);
        }
    },
    handletouchtart: function(a) {
        var t = this, e = t.data.tag;
        wx.createSelectorQuery().selectAll(".infos").boundingClientRect(function(i) {
            t.setData({
                top: i[e].top,
                lastY: a.changedTouches[0].pageY
            });
        }).exec();
    },
    pai_do: function() {
        wx.navigateTo({
            url: "../pai_add/pai_add"
        });
    },
    clickinfo: function() {
        var t = this;
        wx.getUserInfo({
            success: function(e) {
                a.getId(function(a) {
                    a > 0 && (t.setData({
                        haveuid: !0
                    }), t.pai_do());
                });
            }
        });
    }
});