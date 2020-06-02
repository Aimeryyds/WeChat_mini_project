var app = getApp();

Page({
    data: {
        form: {},
        copyright: "",
        t1v: "",
        t2v: "",
        t3v: "",
        t4v: "",
        rv: "",
        cv: "",
        av: "",
        av1: "",
        blist: {},
        tcolor: "",
        hide_tabbar: "0"
    },
    onLoad: function(t) {
        var a = app.siteInfo.uniacid;
        this.setData({
            copyright: app.globalData.copyright
        });
        var e = this;
        app.util.request({
            url: "entry/wxapp/form",
            data: {
                m: "yyf_company",
                uniacid: a
            },
            cachetime: 0,
            success: function(t) {
                t.data.errno || (e.setTabBar(), e.setData({
                    form: t.data.data
                }), wx.setNavigationBarTitle({
                    title: t.data.data.catname
                }));
            }
        }), app.util.request({
            url: "entry/wxapp/TabBar",
            data: {
                m: "yyf_company",
                uniacid: a
            },
            cachetime: 0,
            success: function(t) {
                if (!t.data.errno) {
                    var a = wx.getStorageSync("barlist");
                    "" != a && a.uptime == t.data.data.uptime || (wx.setStorageSync("barlist", t.data.data), 
                    e.setTabBar());
                }
            }
        });
    },
    notice: function(t) {
        wx.showModal({
            title: t,
            content: "",
            success: function(t) {}
        });
    },
    notice1: function(t) {
        wx.showModal({
            title: "",
            content: t,
            success: function(t) {}
        });
    },
    t1: function(t) {
        console.log(t.detail.value), this.setData({
            t1v: t.detail.value
        });
    },
    t2: function(t) {
        this.setData({
            t2v: t.detail.value
        });
    },
    t3: function(t) {
        this.setData({
            t3v: t.detail.value
        });
    },
    t4: function(t) {
        this.setData({
            t4v: t.detail.value
        });
    },
    radioChange: function(t) {
        this.setData({
            rv: t.detail.value
        });
    },
    checkChange: function(t) {
        this.setData({
            cv: t.detail.value
        });
    },
    textareaBlur: function(t) {
        this.setData({
            av: t.detail.value
        });
    },
    submitClick: function(t) {
        var a = !0, e = this.data;
        if ("" == e.t1v && "1" == e.form.t1full && "1" == e.form.t1show) return this.notice(e.form.t1name + "不能为空!"), 
        a = !1;
        if ("" == e.t2v && "1" == e.form.t2full && "1" == e.form.t2show) return this.notice(e.form.t2name + "不能为空!"), 
        a = !1;
        if ("" == e.t3v && "1" == e.form.t3full && "1" == e.form.t3show) return this.notice(e.form.t3name + "不能为空!"), 
        a = !1;
        if ("" == e.t4v && "1" == e.form.t4full && "1" == e.form.t4show) return this.notice(e.form.t4name + "不能为空!"), 
        a = !1;
        if ("" == e.rv && "1" == e.form.rfull && "1" == e.form.rshow) return this.notice(e.form.rname + "不能为空!"), 
        a = !1;
        if ("" == e.cv && "1" == e.form.cfull && "1" == e.form.cshow) return this.notice(e.form.cname + "不能为空!"), 
        a = !1;
        if ("" == e.av && "1" == e.form.afull && "1" == e.form.ashow) return this.notice(e.form.aname + "不能为空!"), 
        a = !1;
        if (a) {
            var r = app.siteInfo.uniacid, i = this;
            app.util.footer(i);
            var o = wx.getStorageSync("sendtime");
            "" == o && (o = 0), app.util.request({
                url: "entry/wxapp/formadd",
                data: {
                    m: "yyf_company",
                    uniacid: r,
                    t1v: i.data.t1v,
                    t1name: i.data.form.t1name,
                    t2v: i.data.t2v,
                    t2name: i.data.form.t2name,
                    t3v: i.data.t3v,
                    t3name: i.data.form.t3name,
                    t4v: i.data.t4v,
                    t4name: i.data.form.t4name,
                    rv: i.data.rv,
                    rname: i.data.form.rname,
                    cv: i.data.cv,
                    cname: i.data.form.cname,
                    av: i.data.av,
                    aname: i.data.form.aname,
                    sendtime: o
                },
                cachetime: 0,
                success: function(t) {
                    if (!t.data.errno) if (1 == t.data.errno) i.notice(t.data.message); else {
                        var a = Date.parse(new Date());
                        a /= 1e3, wx.setStorageSync("sendtime", a), i.notice1(i.data.form.successtext);
                    }
                }
            });
        }
    },
    onShareAppMessage: function(t) {
        return {
            title: this.data.catname,
            path: "/yyf_company/pages/message/message"
        };
    },
    setTabBar: function() {
        var t, a;
        if (!(i = wx.getStorageSync("barlist"))) return !1;
        this.setData({
            blist: i,
            tcolor: i.tcolor,
            hide_tabbar: i.hide_tabbar
        }), t = "" != i.font_color ? i.font_color : "#ffffff", a = "" != i.head_color ? i.head_color : i.tcolor, 
        wx.setNavigationBarColor({
            frontColor: t,
            backgroundColor: a
        });
        var e = getCurrentPages(), r = e[e.length - 1].route, i = this.data.blist, o = r.split("/");
        "message" == o[o.length - 1] && (i.isCurrentPage = !0);
        var n = new Array(i.m1_path, i.m2_path, i.m3_path, i.m4_path), s = 0;
        for (var c in n) "message" == n[c] && (s = parseInt(c) + 1);
        i.currentNum = s, this.setData({
            blist: i
        });
    },
    testUrl: function(t, a) {
        var e = app.siteInfo.siteroot + "?i=" + app.siteInfo.uniacid + "&t=" + app.siteInfo.multiid + "&v=" + app.siteInfo.version + "&from=wxapp&";
        return t && ((t = t.split("/"))[0] && (e += "c=" + t[0] + "&"), t[1] && (e += "a=" + t[1] + "&"), 
        t[2] && (e += "do=" + t[2] + "&")), e;
    },
    tel: function() {
        var t = this.data.blist.phone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    driver: function() {
        wx.openLocation({
            latitude: Number(this.data.blist.jing),
            longitude: Number(this.data.blist.wei),
            address: this.data.blist.address
        });
    },
    tabNav: function(t) {
        var a = t.currentTarget.dataset.url, e = t.currentTarget.dataset.tab;
        if ("-1" != a.indexOf("https")) {
            wx.setStorageSync("navurl", a);
            a = "../webview/webview?op=" + e;
            wx.navigateTo({
                url: a
            });
        } else wx.redirectTo({
            url: a
        });
    },
    copy_action: function() {
        var t = this.data.blist.copyright;
        if ("1" == t.copy_kind) {
            var a = t.copy_phone;
            wx.makePhoneCall({
                phoneNumber: a
            });
        }
        if ("2" == t.copy_kind) {
            var e = t.copy_appid, r = t.copy_ddress;
            wx.navigateToMiniProgram({
                appId: e,
                path: r,
                success: function(t) {}
            });
        }
    }
});