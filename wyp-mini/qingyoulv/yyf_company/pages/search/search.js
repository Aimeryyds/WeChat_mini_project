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
        hide_time: "0",
        hide_tabbar: "0",
        isData: 1
    },
    onLoad: function(a) {
        this.loadData(a.keyword), wx.setNavigationBarTitle({
            title: a.keyword + "搜索结果"
        }), this.setData({
            copyright: app.globalData.copyright
        }), this.setTabBar();
    },
    loadData: function(a) {
        var e = this, t = app.siteInfo.uniacid;
        app.util.request({
            url: "entry/wxapp/search",
            data: {
                m: "yyf_company",
                uniacid: t,
                keyword: a
            },
            cachetime: 0,
            success: function(a) {
                a.data.errno || (e.setData({
                    list: a.data.data.list
                }), "" == a.data.data.list && e.setData({
                    isData: 0
                }));
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
                    e.setTabBar());
                }
            }
        });
    },
    listNavApp: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.appid, e = a.currentTarget.dataset.address;
        wx.navigateToMiniProgram({
            appId: t,
            path: e,
            success: function(a) {}
        });
    },
    setTabBar: function(a) {
        var t, e;
        if (!(o = wx.getStorageSync("barlist"))) return !1;
        this.setData({
            blist: o,
            tcolor: o.tcolor,
            hide_tabbar: o.hide_tabbar
        }), t = "" != o.font_color ? o.font_color : "#ffffff", e = "" != o.head_color ? o.head_color : o.tcolor, 
        wx.setNavigationBarColor({
            frontColor: t,
            backgroundColor: e
        });
        var r = getCurrentPages(), i = r[r.length - 1], o = this.data.blist, n = (i.options, 
        new Array(o.m1_path, o.m2_path, o.m3_path, o.m4_path)), s = 0;
        for (var c in n) n[c] == a && (s = parseInt(c) + 1);
        o.currentNum = s, this.setData({
            blist: o
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