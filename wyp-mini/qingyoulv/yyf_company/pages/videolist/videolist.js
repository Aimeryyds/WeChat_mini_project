var app = getApp();

Page({
    data: {
        list: [],
        lastid: 0,
        tid: 0,
        catname: "",
        copyright: "",
        cats: [],
        currentTabsIndex: 0,
        fid: 0,
        currentCatId: 0,
        fatherId: 0,
        blist: {},
        tcolor: "",
        catkey: -1,
        hide_tabbar: "0"
    },
    onLoad: function(a) {
        var t = a.tid, e = a.fid;
        !e && (e = 0), this.setData({
            tid: t,
            fid: e,
            currentCatId: t
        }), this.loadData(0), this.setData({
            copyright: app.globalData.copyright
        }), this.setTabBar(t);
    },
    loadMore: function(a) {
        var t = a.currentTarget.dataset.lastid;
        this.loadData(t);
    },
    catClick: function(a) {
        var t = a.currentTarget.dataset.cid, e = a.currentTarget.dataset.fid, r = a.currentTarget.dataset.catkey;
        this.data.catkey != r && (this.setData({
            tid: t,
            fid: e,
            catkey: r,
            lastid: 0
        }), this.loadData(0));
    },
    loadData: function(a) {
        var d = this, t = app.siteInfo.uniacid, e = d.data.tid, r = d.data.fid;
        app.util.request({
            url: "entry/wxapp/news",
            data: {
                m: "yyf_company",
                lastid: a,
                uniacid: t,
                tid: e,
                fid: r
            },
            cachetime: 0,
            success: function(a) {
                if (!a.data.errno) {
                    d.setData({
                        catname: a.data.data.catname,
                        currentTabsIndex: a.data.data.currentIndex,
                        fatherId: a.data.data.fatherId
                    }), d.setData({
                        cats: a.data.data.cats
                    }), wx.setNavigationBarTitle({
                        title: a.data.data.catname
                    });
                    var t = a.data.data.list.length, e = a.data.data.currentCatId;
                    if (d.data.currentCatId != e ? (console.log(d.data.currentCatId + "---" + e), d.setData({
                        list: [],
                        currentCatId: e
                    })) : console.log(1111), 0 < t) {
                        var r = d.data.lastid + 8;
                        d.setData({
                            lastid: r
                        });
                        var i = d.data.list.concat(a.data.data.list);
                        d.setData({
                            list: i
                        });
                    }
                }
            }
        }), app.util.request({
            url: "entry/wxapp/TabBar",
            data: {
                m: "yyf_company",
                uniacid: t
            },
            cachetime: 0,
            success: function(a) {
                if (!a.data.errno) {
                    var t = wx.getStorageSync("barlist");
                    "" != t && t.uptime == a.data.data.uptime || (wx.setStorageSync("barlist", a.data.data), 
                    d.setTabBar());
                }
            }
        });
    },
    onShareAppMessage: function(a) {
        return {
            title: this.data.catname,
            path: "/yyf_company/pages/news/news?tid=" + this.data.fatherId
        };
    },
    setTabBar: function(a) {
        var t, e;
        if (!(d = wx.getStorageSync("barlist"))) return !1;
        this.setData({
            blist: d,
            tcolor: d.tcolor,
            hide_tabbar: d.hide_tabbar
        }), t = "" != d.font_color ? d.font_color : "#ffffff", e = "" != d.head_color ? d.head_color : d.tcolor, 
        wx.setNavigationBarColor({
            frontColor: t,
            backgroundColor: e
        });
        var r = getCurrentPages(), i = r[r.length - 1], d = this.data.blist;
        i.options.tid == a && (d.isCurrentPage = !0);
        var s = new Array(d.m1_path, d.m2_path, d.m3_path, d.m4_path), n = 0;
        for (var o in s) s[o] == a && (n = parseInt(o) + 1);
        d.currentNum = n, this.setData({
            blist: d
        });
    },
    tel: function() {
        var a = this.data.blist.phone;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    driver: function() {
        wx.openLocation({
            latitude: Number(this.data.blist.jing),
            longitude: Number(this.data.blist.wei),
            address: this.data.blist.address
        });
    },
    playVideo: function(a) {
        var t = a.currentTarget.dataset.sidx, e = this.data.list;
        e[t].show_video = !0, this.setData({
            list: e
        });
    },
    tabNav: function(a) {
        var t = a.currentTarget.dataset.url, e = a.currentTarget.dataset.tab;
        if ("-1" != t.indexOf("https")) {
            wx.setStorageSync("navurl", t);
            t = "../webview/webview?op=" + e;
            wx.navigateTo({
                url: t
            });
        } else wx.redirectTo({
            url: t
        });
    },
    copy_action: function() {
        var a = this.data.blist.copyright;
        if ("1" == a.copy_kind) {
            var t = a.copy_phone;
            wx.makePhoneCall({
                phoneNumber: t
            });
        }
        if ("2" == a.copy_kind) {
            var e = a.copy_appid, r = a.copy_ddress;
            wx.navigateToMiniProgram({
                appId: e,
                path: r,
                success: function(a) {}
            });
        }
    }
});