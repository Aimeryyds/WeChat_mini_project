var a = getApp();

Page({
    data: {
        navs: [ {
            subject: "首页",
            worktype: "index",
            id: 0
        } ],
        tag: 0,
        refresh: !1,
        loading: !0,
        loading_fail: !1,
        status: !0,
        lastY: 0,
        loading1: !0,
        loading1_fail: !1,
        loading1_ok: !1,
        show_data: 0,
        event_pai_id: "",
        lasttime: ""
    },
    onLoad: function(t) {
        var e = this, i = t.id;
        wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    height: a.windowHeight
                });
            }
        }), a.globalData.uid > 0 && e.setData({
            haveuid: !0
        });
        var d = "event_getEventDetails", n = {
            pid: i
        }, s = a.getParam(d, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                if (0 == a.data[d].error) {
                    wx.setNavigationBarTitle({
                        title: a.data[d].data.subject
                    });
                    var t = e.data.navs.concat(a.data[d].data.eventchindinfo), n = new Date().getTime(), s = "doing";
                    n > 1e3 * a.data[d].data.endtime && (s = "end"), n < 1e3 * a.data[d].data.starttime && (s = "will"), 
                    e.setData({
                        id: i,
                        loading1: !1,
                        loading1_ok: !0,
                        subject: a.data[d].data.subject,
                        wappic: a.data[d].data.wappic,
                        pic: a.data[d].data.pic,
                        descr: a.data[d].data.descr,
                        hdstime: a.data[d].data.hdstime,
                        hdetime: a.data[d].data.hdetime,
                        joinnum: a.data[d].data.joinnum,
                        address: a.data[d].data.address,
                        drawurl: a.data[d].data.drawurl,
                        state: s,
                        navs: t
                    }), a.data[d].data.descr.length > 59 && e.setData({
                        show_data: 1
                    });
                    for (o = 0; o < a.data[d].data.eventchindinfo.length; o++) if ("pai" == a.data[d].data.eventchindinfo[o].worktype) {
                        e.setData({
                            event_pai_id: a.data[d].data.eventchindinfo[o].id
                        });
                        break;
                    }
                    var o, l = [], r = [], c = [];
                    if (!e.data.page) {
                        for (o = 0; o < e.data.navs.length; o++) l.push(1), c.push(!1), r.push([]);
                        e.setData({
                            page: l,
                            loading_end: c,
                            list: r
                        });
                    }
                    e.loadMore();
                } else e.setData({
                    loading1: !1,
                    loading1_fail: !0
                });
            },
            fail: function() {
                e.setData({
                    loading1: !1,
                    loading1_fail: !0
                });
            },
            complete: function() {}
        });
    },
    onReady: function() {},
    onShow: function() {},
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
        var e, i = this, d = i.data.tag, n = i.data.navs[d].worktype, s = i.data.page, o = i.data.loading_end, l = {};
        if (o[d] || !i.data.status) return !1;
        "index" == n ? (e = "feed_getEventFeedList", l = {
            eventid: i.data.id,
            lasttime: i.data.lasttime
        }) : (e = "event_getEventChildList", l = {
            pid: i.data.navs[d].id,
            type: n,
            pageindex: s[d]
        }), 1 != t && i.setData({
            loading: !0
        }), i.setData({
            loading_fail: !1,
            status: !1
        });
        var r = a.getParam(e, l);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: r
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (0 == t.data[e].error) {
                    var s, l = i.data.list, r = i.data.page, c = t.data[e].data;
                    if ("index" == n) for (s = 0; s < c.length; s++) c[s].vip = a.showstaruser(c[s].template_data.uid), 
                    s == c.length - 1 && i.setData({
                        lasttime: c[s].template_data.dateline
                    }); else if ("pai" == n) for (s = 0; s < c.length; s++) c[s].vip = a.showstaruser(c[s].uid), 
                    c[s].photo[0] && (c[s].photo[0].pic = c[s].photo[0].pic.replace("p500GIF", "c320"));
                    l[d] = l[d].concat(c), r[d] = r[d] + 1, i.setData({
                        list: l,
                        loading: !1,
                        page: r
                    });
                } else t.data[e].error < 0 ? (o[d] = !0, i.setData({
                    loading: !1,
                    loading_end: o
                })) : i.setData({
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
            complete: function() {
                i.setData({
                    status: !0,
                    refresh: !1
                }), i.switch_v();
            }
        });
    },
    concat_list: function(a, t) {
        for (var e = 0; e < a.length; e++) for (var i = 0; i < t.length; i++) 1 == this.data.tag ? a[e].adid == t[i].adid && t.splice(i, 1) : 11 == this.data.tag ? a[e].ArticleID == t[i].ArticleID && t.splice(i, 1) : a[e].id == t[i].id && t.splice(i, 1);
        return a.concat(t);
    },
    onShareAppMessage: function() {
        return {
            title: this.data.subject,
            imageUrl: this.data.pic,
            path: "/pages/index/index?type=event_info&id=" + this.data.id + "&inviteuid=" + a.globalData.uid
        };
    },
    handletouchend: function(a) {
        var t = this, e = t.data.tag;
        if (a.changedTouches[0].pageY - this.data.lastY > 100 && 0 != e && 0 == t.data.top) {
            var i = t.data.page, d = t.data.list;
            i[e] = 1, d[e] = [], t.setData({
                refresh: !0,
                page: i,
                list: d
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
    message_show: function() {
        var a = this;
        1 == a.data.show_data ? a.setData({
            message_show: !1,
            show_data: 2
        }) : 2 == a.data.show_data && a.setData({
            message_show: !0,
            show_data: 1
        });
    },
    pai_do: function() {
        wx.navigateTo({
            url: "../pai_add/pai_add?id=" + this.data.event_pai_id
        });
    },
    pai_draw: function() {
        wx.navigateTo({
            url: "../webview/webview?src=" + this.data.drawurl
        });
    },
    pai_rule: function() {
        wx.navigateTo({
            url: "../webview/webview?src=" + this.data.address
        });
    },
    clickinfo: function() {
        var t = this;
        a.globalData.uid = -1, wx.getUserInfo({
            success: function(e) {
                a.getId(function(a) {
                    a > 0 && (t.setData({
                        haveuid: !0
                    }), t.pai_do());
                });
            }
        });
    },
    switch_v: function() {
        this.setData({
            open_v: a.globalData.open_v
        });
    }
});