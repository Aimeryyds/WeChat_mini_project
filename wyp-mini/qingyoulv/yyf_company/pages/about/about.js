var app = getApp(), WxParse = require("../../../wxParse/wxParse.js");

Page({
    data: {
        content: {},
        catname: "",
        tid: 0,
        copyright: "",
        blist: {},
        hide_tabbar: "0"
    },
    onLoad: function(a) {
        var t = a.tid, e = app.siteInfo.uniacid;
        this.setData({
            tid: t,
            copyright: app.globalData.copyright
        });
        var r = this;
        app.util.request({
            url: "entry/wxapp/about",
            data: {
                m: "yyf_company",
                tid: t,
                uniacid: e
            },
            cachetime: 0,
            success: function(a) {
                a.data.errno || (r.setTabBar(t), WxParse.wxParse("article1", "html", a.data.data.content, r, 10), 
                r.setData({
                    content: a.data.data.content,
                    catname: a.data.data.catname
                }), wx.setNavigationBarTitle({
                    title: a.data.data.catname
                }));
            }
        }), app.util.request({
            url: "entry/wxapp/TabBar",
            data: {
                m: "yyf_company",
                uniacid: e
            },
            cachetime: 0,
            success: function(a) {
                if (!a.data.errno) {
                    var t = wx.getStorageSync("barlist");
                    "" != t && t.uptime == a.data.data.uptime || (wx.setStorageSync("barlist", a.data.data), 
                    r.setTabBar());
                }
            }
        });
    },
    onShareAppMessage: function(a) {
        return {
            title: this.data.catname,
            path: "/yyf_company/pages/about/about?tid=" + this.data.tid
        };
    },
    setTabBar: function(a) {
        var t, e;
        if (!(n = wx.getStorageSync("barlist"))) return !1;
        this.setData({
            blist: n,
            tcolor: n.tcolor,
            hide_tabbar: n.hide_tabbar
        }), t = "" != n.font_color ? n.font_color : "#ffffff", e = "" != n.head_color ? n.head_color : n.tcolor, 
        wx.setNavigationBarColor({
            frontColor: t,
            backgroundColor: e
        });
        var r = getCurrentPages(), i = r[r.length - 1], n = this.data.blist;
        i.options.tid == a && (n.isCurrentPage = !0);
        var o = new Array(n.m1_path, n.m2_path, n.m3_path, n.m4_path), s = 0;
        for (var c in o) o[c] == a && (s = parseInt(c) + 1);
        n.currentNum = s, this.setData({
            blist: n
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