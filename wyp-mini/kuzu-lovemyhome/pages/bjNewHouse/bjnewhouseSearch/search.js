var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/tool"));

Page({
    data: {
        cityid: 1,
        themeid: "",
        thiscur: 0,
        bangdancur: 0,
        hotkeywords: "",
        value: "",
        mindsearchdata: "",
        history: ""
    },
    onLoad: function(t) {
        console.log(t), this.setData({
            cityid: t.cityid
        });
        var a = "searchHistory" + t.cityid, e = "";
        wx.getStorageSync(a) ? e = wx.getStorageSync(a) : (e = "", wx.setStorageSync(a, [])), 
        this.setData({
            history: e
        }), console.log("history", this.data.history), this.getKeywords(), this.themeLoupan(), 
        this.searchlist();
    },
    themeLoupan: function() {
        var t = this, a = {
            cityid: t.data.cityid
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/common/theme",
            method: "post",
            data: a,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (console.log("主题楼盘数据--", a), 200 == a.data.status) {
                    var e = a.data.data.tabs, s = a.data.data.estates;
                    t.setData({
                        themedata: e,
                        tabsCon: s
                    });
                } else a.data.status;
                console.log(a);
            }
        });
    },
    bintheme: function(t) {
        var a = this, e = t.currentTarget.dataset.index, s = t.currentTarget.dataset.themeid;
        a.setData({
            thiscur: e
        }), console.log("themeid--", s);
        var i = {
            cityid: a.data.cityid,
            themeid: s
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/common/theme",
            method: "post",
            data: i,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (console.log("点击后返回主题楼盘数据--", t), 200 == t.data.status) {
                    var e = t.data.data.estates;
                    a.setData({
                        tabsCon: e
                    });
                } else t.data.status;
                console.log(t);
            }
        });
    },
    searchlist: function() {
        var t = this, a = {
            cityid: t.data.cityid
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/search/list",
            method: "post",
            data: a,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (console.log("搜索榜单数据--", a), 200 == a.data.status) {
                    var e = a.data.data.tab, s = a.data.data.list;
                    t.setData({
                        searlistTab: e,
                        searlistCon: s
                    });
                } else a.data.status;
                console.log(a);
            }
        });
    },
    bangdan: function(t) {
        var a = this, e = t.currentTarget.dataset.index, s = t.currentTarget.dataset.id;
        a.setData({
            bangdancur: e
        });
        var i = {
            cityid: a.data.cityid,
            typeid: s
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/search/list",
            method: "post",
            data: i,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (console.log("点击搜索榜单数据--", t), 200 == t.data.status) {
                    var e = t.data.data.list;
                    a.setData({
                        searlistCon: e
                    });
                } else t.data.status;
                console.log(t);
            }
        });
    },
    getKeywords: function() {
        var t = this, a = {
            cityid: t.data.cityid
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/search/hotrecommend",
            method: "post",
            data: a,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log("res----++++", a), 200 == a.data.status ? t.setData({
                    hotkeywords: a.data.data
                }) : 204 == a.data.status && t.setData({
                    hotkeywords: ""
                }), console.log(a);
            }
        });
    },
    hotkeywordsclick: function(t) {
        var a = t.currentTarget.dataset.estateid, e = t.currentTarget.dataset.properytypeid, s = {
            properytypeid: e,
            estateid: a,
            type: 3,
            name: t.currentTarget.dataset.name,
            cityid: this.data.cityid
        };
        this.addHistory(s), wx.navigateTo({
            url: "/pages/newhouse/detail/detail?estateid=" + a + "&propertytypeid=" + e
        });
    },
    getinputvalue: t.default.debounce(function(t) {
        var a = t[0].detail.value;
        this.setData({
            value: a
        });
        var e = this, s = this.data.cityid;
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/search/searchrelation",
            method: "post",
            data: {
                cityid: s,
                keyword: a
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (console.log("联想----", t), 200 == t.data.status) {
                    for (var s = t.data.data.areaList, i = [], o = 0; o < s.length; o++) {
                        var n = s[o].name, r = {
                            name: n = -1 != n.indexOf(a) ? n.replace(a, "<span style='color:#3399FF'>" + a + "</span>") : n
                        };
                        i.push(r);
                    }
                    for (var d = t.data.data.subwayList, c = [], o = 0; o < d.length; o++) {
                        var u = d[o].name, r = {
                            name: u = -1 != u.indexOf(a) ? u.replace(a, "<span style='color:#3399FF'>" + a + "</span>") : u
                        };
                        c.push(r);
                    }
                    for (var l = t.data.data.sqList, p = [], o = 0; o < l.length; o++) {
                        var h = l[o].name, r = {
                            name: h = -1 != h.indexOf(a) ? h.replace(a, "<span style='color:#3399FF'>" + a + "</span>") : h
                        };
                        p.push(r);
                    }
                    for (var y = t.data.data.estateList, g = [], o = 0; o < y.length; o++) {
                        var f = y[o].estatename, w = y[o].address, r = {
                            estatename: f = -1 != f.indexOf(a) ? f.replace(a, "<span style='color:#3399FF'>" + a + "</span>") : f,
                            address: w = -1 != w.indexOf(a) ? w.replace(a, "<span style='color:#3399FF'>" + a + "</span>") : w
                        };
                        g.push(r);
                    }
                    e.setData({
                        estateList: t.data.data.estateList,
                        areaList: t.data.data.areaList,
                        sqList: t.data.data.sqList,
                        stationList: t.data.data.stationList,
                        subwayList: t.data.data.subwayList,
                        child_info: g,
                        sqList_info: p,
                        areaList_info: i,
                        subwayList_info: c
                    });
                } else e.setData({
                    estateList: "empty",
                    areaList: "empty",
                    sqList: "empty",
                    stationList: "empty",
                    subwayList: "empty"
                });
            }
        });
    }),
    addHistory: function(t) {
        var a = "searchHistory" + this.data.cityid, e = wx.getStorageSync(a);
        console.log(e), -1 == JSON.stringify(e).indexOf(t.estateid) && (e.length < 10 ? e.push(t) : (e.shift(), 
        e.push(t)), wx.setStorageSync(a, e), this.setData({
            history: e
        }));
    },
    delsearch: function() {
        this.setData({
            mindsearchdata: "",
            value: ""
        });
    },
    routergo: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.type, e = t.currentTarget.dataset.searchid, s = t.currentTarget.dataset.properttypeid, i = {
            properytypeid: s,
            estateid: e,
            type: a,
            name: t.currentTarget.dataset.name,
            cityid: this.data.cityid
        };
        if (this.addHistory(i), 3 == a) console.log("321321121321", e, s), wx.navigateTo({
            url: "/pages/newhouse/detail/detail?estateid=" + e + "&propertytypeid=" + s
        }); else if (1 == a) {
            var e = t.currentTarget.dataset.searchid, o = {
                page: 1,
                pageSize: 15,
                keyword: "",
                areaID: "",
                priceID: "",
                customPriceLow: "",
                customPriceTop: "",
                houseTypeID: "",
                propertyTypeID: "",
                trafficID: "",
                tagID: "",
                otherID: "",
                openDate: "",
                budingArea: "",
                totalPrice: "",
                customTotalPriceLow: "",
                customTotalPriceTop: "",
                sortID: "",
                swLat: "",
                swLng: "",
                neLng: "",
                neLat: ""
            };
            o.areaID = e, wx.navigateTo({
                url: "/pages/newhouse/list/list?condition=" + JSON.stringify(o) + "&cityid=" + this.data.cityid
            });
        }
    },
    backpage: function() {
        wx.navigateBack();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});