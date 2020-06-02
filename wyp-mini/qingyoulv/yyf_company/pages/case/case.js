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
        cattype: "0",
        catkey: -1,
        imgView_height: 147,
        thumb_height: "",
        hide_tabbar: "0",
        is_addHeight: 0
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
        var t = a.currentTarget.dataset.cid, e = a.currentTarget.dataset.fid, i = a.currentTarget.dataset.catkey;
        this.data.catkey != i && (this.setData({
            tid: t,
            fid: e,
            catkey: i,
            lastid: 0
        }), this.loadData(0));
    },
    loadData: function(a) {
        var n = this;
        app.util.footer(n);
        var t = app.siteInfo.uniacid, e = n.data.tid, i = n.data.fid;
        app.util.request({
            url: "entry/wxapp/news",
            data: {
                m: "yyf_company",
                lastid: a,
                uniacid: t,
                tid: e,
                fid: i
            },
            cachetime: 0,
            success: function(a) {
                if (!a.data.errno) {
                    if (!n.data.is_addHeight) {
                        var t = parseInt(a.data.data.thumb_height), e = 0;
                        140 != t && (e = n.data.imgView_height + (t - 105), n.setData({
                            imgView_height: e,
                            is_addHeight: 1
                        }));
                    }
                    n.setData({
                        catname: a.data.data.catname,
                        currentTabsIndex: a.data.data.currentIndex,
                        fatherId: a.data.data.fatherId,
                        thumb_height: a.data.data.thumb_height
                    }), n.setData({
                        cats: a.data.data.cats,
                        cattype: a.data.data.type
                    }), wx.setNavigationBarTitle({
                        title: a.data.data.catname
                    });
                    var i = a.data.data.list.length, r = a.data.data.currentCatId;
                    if (n.data.currentCatId != r && (console.log(n.data.currentCatId + "---" + r), n.setData({
                        list: [],
                        currentCatId: r
                    })), 0 < i) {
                        var d = n.data.lastid + 8;
                        n.setData({
                            lastid: d
                        });
                        var s = n.data.list.concat(a.data.data.list);
                        n.setData({
                            list: s
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
                    n.setTabBar());
                }
            }
        });
    },
    onShareAppMessage: function(a) {
        return {
            title: this.data.catname,
            path: "/yyf_company/pages/case/case?tid=" + this.data.fatherId
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
        var i = getCurrentPages(), r = i[i.length - 1], d = this.data.blist;
        r.options.tid == a && (d.isCurrentPage = !0);
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
    navigateMini: function(a) {
        var t = a.currentTarget.dataset.sid, e = this.data.list[t].appid, i = this.data.list[t].pageaddress;
        wx.navigateToMiniProgram({
            appId: e,
            path: i,
            success: function(a) {
                console.log("11");
            }
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
            var e = a.copy_appid, i = a.copy_ddress;
            wx.navigateToMiniProgram({
                appId: e,
                path: i,
                success: function(a) {}
            });
        }
    }
});