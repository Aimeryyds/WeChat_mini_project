function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../components/circus/toast/toast.js")), a = t(require("../../../components/http")), o = require("../../../components/utils"), r = require("../../../components/bridge"), s = t(require("../../../config"));

getApp().View({
    beacon: {
        name: "新股"
    },
    data: {
        myData: [],
        showBgData: {
            code: "",
            isShowBg: !0
        }
    },
    events: {
        showmore: {
            name: "查看新股详情",
            handler: function(t) {
                var e = t.currentTarget.dataset.code;
                (0, o.setData)(this, "showBgData.isShowBg", !1), this.switchDetailPanel(e);
            }
        }
    },
    switchDetailPanel: function(t) {
        for (var e = (0, o.getData)(this, "myData"), a = 0; a < e.length; a++) for (var r = 0; r < e[a].cont.length; r++) for (var s = 0; s < e[a].cont[r].shares.length; s++) if (e[a].cont[r].shares[s].tradingcode == t) if (1 == e[a].cont[r].shares[s].hidden) {
            for (var n = 0; n < e.length; n++) for (var i = 0; i < e[n].cont.length; i++) for (var c = 0; c < e[n].cont[i].shares.length; c++) e[n].cont[i].shares[c].hidden = !0;
            e[a].cont[r].shares[s].hidden = !1;
        } else e[a].cont[r].shares[s].hidden = !0;
        (0, o.setData)(this, "myData", e);
    },
    onShareAppMessage: function() {
        return {
            title: "新股",
            path: "/pages/quote/newshare/newshare"
        };
    },
    onLoad: function(t) {
        var a = this;
        t.code && (0, o.setData)(this, "showBgData.code", t.code), (0, r.setNavigationBarTitle)({
            title: "新股"
        }), this.reqShare().done(function(e) {
            var o = a.loadData(e.data);
            t.tradingcode && a.scrollTo(o, t.tradingcode);
        }).fail(function() {
            e.default.show(a, "出错啦");
        });
    },
    onShow: function() {},
    scrollTo: function(t, e) {
        var a = this;
        "function" == typeof wx.createSelectorQuery && setTimeout(function() {
            wx.createSelectorQuery().select(".lists-body").boundingClientRect(function(o) {
                var r = 0, s = 0;
                t: for (var n = 0; n < t.length; n++) {
                    s++;
                    for (var i = t[n], c = [], h = 0; h < i.cont.length; h++) c = c.concat(i.cont[h].shares);
                    for (var u = 0; u < c.length; u++) if (r++, c[u].tradingcode == e) break t;
                }
                a.switchDetailPanel(e), wx.pageScrollTo({
                    scrollTop: (r - 1 - 1) * (o.height + 10) + 34 * s
                });
            }).exec();
        }, 500);
    },
    reqShare: function() {
        return (0, a.default)({
            url: s.default.SER_URL + "/api/wechat/info/1.0.0/stock/ipo",
            data: {}
        }, this, !0);
    },
    loadData: function(t) {
        function e(t, e) {
            for (var a = [], o = 0, r = t.length; o < r; o++) {
                for (var s = o + 1; s < r; s++) t[o][e] === t[s][e] && (s = ++o);
                a.push(t[o]);
            }
            return a;
        }
        for (var a = [], r = 0, s = t.length; r < s; r++) {
            var n = {};
            switch (n.secuabbr = t[r].secuabbr, n.type = t[r].type, n.listingdate_s = t[r].listingdate_s ? t[r].listingdate_s.slice(4, 6) + "-" + t[r].listingdate_s.slice(6, 8) : "--", 
            n.applycode = t[r].applycode, n.succresultnoticedate = t[r].succresultnoticedate, 
            n.tradingcode = t[r].tradingcode, n.ipoStatus = t[r].ipoStatus, n.ipoStatus) {
              case "readyBook":
                n.ipoStatus = "待申购";
                break;

              case "readyIpo":
                n.ipoStatus = "待上市";
                break;

              case "alreadyIpo":
                n.ipoStatus = "已上市";
                break;

              case "todayIpo":
                n.ipoStatus = "今日上市";
                break;

              case "todayBook":
                n.ipoStatus = "今日申购";
            }
            n.induname = t[r].induname, n.pe = t[r].pe ? t[r].pe : "--", n.issueprice = t[r].issueprice ? t[r].issueprice + "元" : "待定", 
            n.bookmaxon = t[r].bookmaxon ? t[r].bookmaxon / 1e4 + "万股" : "待定", n.succresultratedate = t[r].succresultratedate ? t[r].succresultratedate.toFixed(4) + "%" : "--%", 
            n.bookstartdateon_s = t[r].bookstartdateon_s.slice(4, 6) + "-" + t[r].bookstartdateon_s.slice(6, 8), 
            n.sortdate = t[r].bookstartdateon_s, n.hidden = !0, a.push(n);
        }
        for (var i = [], c = a, r = 0; r < c.length; r++) c[r].sortyear = c[r].sortdate.slice(0, 4), 
        c[r].sortmonth = c[r].sortdate.slice(4, 6), i.push({
            year: c[r].sortyear,
            cont: []
        }), i = i.sort(function(t, e) {
            return parseInt(e.year) - parseInt(t.year);
        });
        i = e(i, "year");
        for (r = 0; r < i.length; r++) for (s = 0; s < c.length; s++) c[s].sortyear == i[r].year && i[r].cont.push({
            month: c[s].sortmonth,
            shares: []
        });
        for (r = 0; r < i.length; r++) i[r].cont = e(i[r].cont, "month");
        for (var h = 0; h < i.length; h++) for (r = 0; r < i[h].cont.length; r++) for (s = 0; s < c.length; s++) c[s].sortyear == i[h].year && c[s].sortmonth == i[h].cont[r].month && i[h].cont[r].shares.push(c[s]);
        return (0, o.setData)(this, "myData", i), i;
    }
});