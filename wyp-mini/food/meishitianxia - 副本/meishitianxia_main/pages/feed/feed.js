var t = getApp();

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
        page: [ 1 ],
        loading_end: [ !1 ],
        list: [ [] ],
        lasttime: [ 0 ]
    },
    onLoad: function(a) {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    height: t.windowHeight
                });
            }
        }), t.globalData.uid > 0 && e.setData({
            haveuid: !0
        }), e.loadMore();
    },
    onReady: function() {},
    onShow: function() {
        wx.setStorageSync("showmy", 1);
    },
    list_onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function(a) {
        var e, s, o, n = this, i = n.data.tag, l = n.data.navs[i].worktype, d = n.data.loading_end;
        return !(1 != a && (d[i] || !n.data.status)) && ("index" == l && (e = "feed_getFeedList", 
        s = {
            type: "all",
            lasttime: n.data.lasttime[i]
        }, o = t.getParam(e, s), 1 != a && n.setData({
            loading: !0
        }), n.setData({
            loading_fail: !1,
            status: !1
        }), void wx.request({
            url: t.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                if (0 == a.data[e].error) {
                    var s, o = n.data.list, l = a.data[e].data, r = n.data.lasttime;
                    for (s = 0; s < l.length; s++) l[s].template_data.commentnote && (l[s].template_data.commentnote = n.get_img_txt(l[s].template_data.commentnote)), 
                    l[s].template_data.reply_summary && (l[s].template_data.reply_summary = n.get_img_txt(l[s].template_data.reply_summary)), 
                    l[s].template_data.replycommentnote && (l[s].template_data.replycommentnote = n.get_img_txt(l[s].template_data.replycommentnote)), 
                    s == l.length - 1 && (r[i] = l[s].template_data.dateline), l[s].vip = t.showstaruser(l[s].template_data.uid);
                    o[i] = o[i].concat(l), n.setData({
                        list: o,
                        lasttime: r,
                        loading: !1
                    });
                } else a.data[e].error < 0 ? (d[i] = !0, n.setData({
                    loading: !1,
                    loading_end: d
                })) : n.setData({
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
            complete: function() {
                n.setData({
                    status: !0,
                    refresh: !1
                });
            }
        })));
    },
    handletouchend: function(t) {
        var a = this, e = a.data.tag;
        if (t.changedTouches[0].pageY - this.data.lastY > 100 && 0 == a.data.top) {
            var s = a.data.lasttime, o = a.data.list;
            s[e] = 0, o[e] = [], a.setData({
                refresh: !0,
                lasttime: s,
                list: o
            }), a.loadMore(1);
        }
    },
    handletouchtart: function(t) {
        var a = this, e = a.data.tag;
        wx.createSelectorQuery().selectAll(".infos").boundingClientRect(function(s) {
            a.setData({
                top: s[e].top,
                lastY: t.changedTouches[0].pageY
            });
        }).exec();
    },
    message_show: function() {
        var t = this;
        1 == t.data.show_data ? t.setData({
            message_show: !1,
            show_data: 2
        }) : 2 == t.data.show_data && t.setData({
            message_show: !0,
            show_data: 1
        });
    },
    get_img_txt: function(t) {
        for (var a = "", e = /(\[em\:)+[a-z0-9]+(\:\])*/gi, s = (a = t.replace(e, function(t) {
            var a = t;
            return a = a.replace("[em:", "******https://static.meishichina.com/u2/i/face/"), 
            a = a.replace(":]", ".gif******");
        })).split("******"), o = [], n = 0; n < s.length; n++) "" != s[n] && (/https:/.test(s[n]) ? o.push({
            type: "img",
            value: s[n]
        }) : o.push({
            type: "txt",
            value: s[n]
        }));
        return o;
    }
});