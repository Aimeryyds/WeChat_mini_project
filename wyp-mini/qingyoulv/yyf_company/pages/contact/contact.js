var app = getApp();

Page({
    data: {
        info: [],
        copyright: "",
        blist: {},
        tcolor: "",
        contact_name_size: 22,
        hide_tabbar: "0",
        markers: [ {
            iconPath: "../../resource/images/mark1.png",
            id: 0,
            latitude: 22.54043,
            longitude: 113.93454,
            width: 40,
            height: 40
        } ]
    },
    onLoad: function() {
        var i = this, a = app.siteInfo.uniacid;
        this.setData({
            copyright: app.globalData.copyright
        }), app.util.request({
            url: "entry/wxapp/contact",
            data: {
                m: "yyf_company",
                uniacid: a
            },
            cachetime: 0,
            success: function(a) {
                if (!a.data.errno) {
                    i.setTabBar();
                    var t = a.data.data.contact_name;
                    a.data.data.size = 22, 10 < t.length && (a.data.data.size = 16), 14 < t.length && (a.data.data.size = 14), 
                    16 < t.length && (a.data.data.size = 12);
                    var e = i.data.markers;
                    e[0].latitude = a.data.data.jing, e[0].longitude = a.data.data.wei, i.setData({
                        info: a.data.data,
                        markers: e
                    }), wx.setNavigationBarTitle({
                        title: "联系我们"
                    });
                }
            }
        }), app.util.request({
            url: "entry/wxapp/TabBar",
            data: {
                m: "yyf_company",
                uniacid: a
            },
            cachetime: 0,
            success: function(a) {
                if (!a.data.errno) {
                    var t = wx.getStorageSync("barlist");
                    "" != t && t.uptime == a.data.data.uptime || (wx.setStorageSync("barlist", a.data.data), 
                    i.setTabBar());
                }
            }
        });
    },
    isEmptyObject: function(a) {
        for (var t in a) return !1;
        return !0;
    },
    calling: function() {
        this.data.info.phone;
        wx.makePhoneCall({
            phoneNumber: this.data.info.phone
        });
    },
    calling2: function() {
        this.data.info.phone2;
        wx.makePhoneCall({
            phoneNumber: this.data.info.phone2
        });
    },
    gomap: function() {
        wx.openLocation({
            latitude: Number(this.data.info.jing),
            longitude: Number(this.data.info.wei),
            address: this.data.info.address
        });
    },
    onShareAppMessage: function(a) {
        return {
            title: this.data.catname,
            path: "/yyf_company/pages/contact/contact"
        };
    },
    setTabBar: function() {
        var a, t;
        if (!(n = wx.getStorageSync("barlist"))) return !1;
        this.setData({
            blist: n,
            tcolor: n.tcolor,
            hide_tabbar: n.hide_tabbar
        }), a = "" != n.font_color ? n.font_color : "#ffffff", t = "" != n.head_color ? n.head_color : n.tcolor, 
        wx.setNavigationBarColor({
            frontColor: a,
            backgroundColor: t
        });
        var e = getCurrentPages(), i = e[e.length - 1].route, n = this.data.blist, o = i.split("/");
        "contact" == o[o.length - 1] && (n.isCurrentPage = !0);
        var r = new Array(n.m1_path, n.m2_path, n.m3_path, n.m4_path), s = 0;
        for (var c in r) "contact" == r[c] && (s = parseInt(c) + 1);
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
            var e = a.copy_appid, i = a.copy_ddress;
            wx.navigateToMiniProgram({
                appId: e,
                path: i,
                success: function(a) {}
            });
        }
    }
});