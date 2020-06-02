var app = getApp();

Page({
    data: {
        url: "",
        blist: {},
        op: "",
        adid: 0,
        adfloat: "",
        slideid: 0
    },
    onLoad: function(a) {
        var t = this;
        app.util.footer(t);
        var i = app.siteInfo.uniacid, e = wx.getStorageSync("navurl"), d = a.op, o = a.adid, r = a.adfloat, s = a.slideid;
        this.setData({
            op: d,
            adid: o,
            adfloat: r,
            slideid: s
        }), e ? (e = e.split("webview?url=")[1], this.setData({
            url: e
        })) : app.util.request({
            url: "entry/wxapp/GetWebUrl",
            data: {
                m: "yyf_company",
                uniacid: i,
                op: d,
                adid: o,
                adfloat: r,
                slideid: s
            },
            cachetime: 0,
            success: function(a) {
                a.data.errno || t.setData({
                    url: a.data.data
                });
            }
        }), app.util.request({
            url: "entry/wxapp/TabBar",
            data: {
                m: "yyf_company",
                uniacid: i
            },
            cachetime: 0,
            success: function(a) {
                if (!a.data.errno) {
                    var t, i, e = wx.getStorageSync("barlist");
                    "" != e && e.uptime == a.data.data.uptime || wx.setStorageSync("barlist", a.data.data), 
                    t = "" != e.font_color ? e.font_color : "#ffffff", i = "" != e.head_color ? e.head_color : e.tcolor, 
                    wx.setNavigationBarColor({
                        frontColor: t,
                        backgroundColor: i
                    });
                }
            }
        });
    },
    onShareAppMessage: function(a) {
        return {
            path: "/yyf_company/pages/webview/webview?op=" + this.data.op + "&adid=" + this.data.adid + "&adfloat=" + this.adfloat + "&slideid=" + this.data.slideid
        };
    }
});