function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e, o, n = 0, i = 0, c = 0, d = require("../../../js/qqmap-wx-jssdk.min.js"), r = (getApp(), 
require("../../../js/coordinate.js"));

Page({
    data: (a = {
        currentTab: 0,
        header_tag: [ "楼盘", "优惠", " 户型", " 动态", "顾问", "周边", "楼栋", "推荐" ],
        header_current: 0,
        header_hidden: !0,
        isFixed: !1,
        cityId: 1,
        latitude: "",
        longitude: "",
        circum_title: "地铁",
        circum_des: "附近的地铁站",
        circum_list: [ "地铁", "公交", "教育", "医院", "银行", "购物" ],
        circum_current: 0
    }, t(a, "latitude", "39.9202350000"), t(a, "longitude", "116.4977420000"), t(a, "communityId", "338855"), 
    a),
    onLoad: function(t) {
        var a = this;
        a.getData(), o = new d({
            key: "PHJBZ-23WC3-WZH3J-YCJHE-ZOSVV-FXBOB"
        });
        var e = r.transformFromBaiduToGCJ(a.data.latitude, a.data.longitude), n = {
            iconPath: "https://res.5i5j.com/cache/weixin/common/adr_icon.png",
            id: a.data.cityId,
            callout: {
                borderRadius: 15
            },
            latitude: e.latitude,
            longitude: e.longitude
        };
        if (a.setData({
            markersIndex: n,
            markers: n,
            latitude: e.latitude,
            longitude: e.longitude
        }), 0 != a.data.latitude && 0 != a.data.longitude) {
            var i = wx.getStorageSync("traffic_mk_" + a.data.communityId), c = wx.getStorageSync("traffic_con_" + a.data.communityId), l = wx.getStorageSync("traffic_line_" + a.data.communityId);
            console.log("默认xian--", l), i && c && l ? a.setData({
                markers: i,
                circum: c,
                line: l
            }) : a.trafficShow();
        }
    },
    getData: function() {
        var t = this, a = {
            estate_id: 8
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/estate/detail",
            data: a,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            success: function(a) {
                if (console.log("详情页数据--", a), 200 == a.data.status) {
                    var e = a.data.data.lastArticle.data, o = [];
                    if (void 0 != e) for (var n = 0; n < e.length; n++) o.push(e[n].content);
                    var i = o;
                    t.setData({
                        detailData: a.data.data,
                        conRich: i
                    });
                    var c = wx.createSelectorQuery();
                    c.selectAll(".title_anchor").boundingClientRect(function(a) {
                        for (var e = [], o = 0; o < a.length; o++) e.push(a[o].top - 80);
                        t.setData({
                            header_tap: e
                        });
                    }).exec(), c.select("#head_img").boundingClientRect(function(a) {
                        t.setData({
                            header_img: a.top
                        });
                    }).exec();
                }
                204 == a.data.status && console.log(a.data.msg);
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    chooseCircum: function(t) {
        var a = this;
        switch (t.currentTarget.dataset.index) {
          case 0:
            var e = wx.getStorageSync("traffic_mk_" + a.data.communityId), o = wx.getStorageSync("traffic_con_" + a.data.communityId), n = wx.getStorageSync("traffic_line_" + a.data.communityId);
            console.log(e), e && o && n ? a.setData({
                markers: e,
                circum: o,
                line: n
            }) : a.trafficShow(), a.setData({
                circum_current: 0,
                circum_title: "地铁",
                circum_des: "附近的地铁站"
            });
            break;

          case 1:
            var i = wx.getStorageSync("transit_mk_" + a.data.communityId), c = wx.getStorageSync("transit_con_" + a.data.communityId), d = wx.getStorageSync("transit_line_" + a.data.communityId);
            console.log(i), i && c && d ? a.setData({
                markers: i,
                circum: c,
                line: d
            }) : a.transitShow(), a.setData({
                circum_current: 1,
                circum_title: "公交",
                circum_des: "附近的公交站"
            });
            break;

          case 2:
            var r = wx.getStorageSync("school_mk_" + a.data.communityId), l = wx.getStorageSync("school_con_" + a.data.communityId), s = wx.getStorageSync("school_line_" + a.data.communityId);
            console.log("school", r), r && l && s ? a.setData({
                markers: r,
                circum: l,
                line: s
            }) : a.schoolShow(), a.setData({
                circum_current: 2,
                circum_title: "学校",
                circum_des: "附近的学校"
            });
            break;

          case 3:
            var u = wx.getStorageSync("hospital_mk_" + a.data.communityId), g = wx.getStorageSync("hospital_con_" + a.data.communityId), m = wx.getStorageSync("hospital_line_" + a.data.communityId);
            console.log("医院", u), u && g && m ? a.setData({
                markers: u,
                circum: g,
                line: m
            }) : a.hospitalShow(), a.setData({
                circum_current: 3,
                circum_title: "医疗",
                circum_des: "附近的医院"
            });
            break;

          case 4:
            var h = wx.getStorageSync("bank_mk_" + a.data.communityId), _ = wx.getStorageSync("bank_con_" + a.data.communityId), f = wx.getStorageSync("bank_line_" + a.data.communityId);
            console.log("银行", h), h && _ && f ? a.setData({
                markers: h,
                circum: _,
                line: f
            }) : a.bankShow(), a.setData({
                circum_current: 4,
                circum_title: "银行",
                circum_des: "附近的银行"
            });
            break;

          case 5:
            var y = wx.getStorageSync("shopping_mk_" + a.data.communityId), S = wx.getStorageSync("shopping_con_" + a.data.communityId), p = wx.getStorageSync("shop_line_" + a.data.communityId);
            console.log("购物", y), y && S && p ? a.setData({
                markers: y,
                circum: S,
                line: p
            }) : a.shoppingShow(), a.setData({
                circum_current: 5,
                circum_title: "购物",
                circum_des: "附近的商场"
            });
        }
    },
    trafficShow: function() {
        var t = this;
        o.search({
            keyword: "地铁",
            location: {
                latitude: t.data.latitude,
                longitude: t.data.longitude
            },
            filter: "category=地铁站",
            success: function(a) {
                console.log("地铁------", a);
                for (var e = [], o = "", n = a.data, i = 0; i < a.data.length; i++) e.push({
                    title: a.data[i].title,
                    id: a.data[i].id,
                    address: a.data[i].address,
                    latitude: a.data[i].location.lat,
                    longitude: a.data[i].location.lng,
                    iconPath: "https://res.5i5j.com/cache/weixin/common/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + a.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == a.data.length - 1 ? o += a.data[i].title : o = o + a.data[i].title + ",";
                e.push(t.data.markersIndex), console.log("markersIndex----", t.data.markersIndex, "----", e, o), 
                wx.setStorageSync("traffic_mk_" + t.data.communityId, e), wx.setStorageSync("traffic_con_" + t.data.communityId, o), 
                wx.setStorageSync("traffic_line_" + t.data.communityId, n), t.setData({
                    markers: e,
                    circum: o,
                    line: n
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    transitShow: function() {
        var t = this;
        o.search({
            keyword: "公交",
            location: {
                latitude: t.data.latitude,
                longitude: t.data.longitude
            },
            filter: "category=公交站",
            success: function(a) {
                console.log("公交------", a);
                for (var e = [], o = "", n = a.data, i = 0; i < a.data.length; i++) e.push({
                    title: a.data[i].title,
                    id: a.data[i].id,
                    address: a.data[i].address,
                    latitude: a.data[i].location.lat,
                    longitude: a.data[i].location.lng,
                    iconPath: "https://res.5i5j.com/cache/weixin/common/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + a.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == a.data.length - 1 ? o += a.data[i].title : o = o + a.data[i].title + ",";
                e.push(t.data.markersIndex), wx.setStorageSync("transit_mk_" + t.data.communityId, e), 
                wx.setStorageSync("transit_con_" + t.data.communityId, o), wx.setStorageSync("transit_line_" + t.data.communityId, n), 
                t.setData({
                    markers: e,
                    circum: o,
                    line: n
                }), console.log("index", t.data.markersIndex);
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    schoolShow: function() {
        var t = this;
        o.search({
            keyword: "教育",
            filter: "category=大学,小学,幼儿园",
            location: {
                latitude: t.data.latitude,
                longitude: t.data.longitude
            },
            success: function(a) {
                console.log("教育------", a);
                var e = [], o = "", n = a.data;
                console.log("m", e);
                for (var i = 0; i < a.data.length; i++) e.push({
                    title: a.data[i].title,
                    id: a.data[i].id,
                    address: a.data[i].address,
                    latitude: a.data[i].location.lat,
                    longitude: a.data[i].location.lng,
                    iconPath: "https://res.5i5j.com/cache/weixin/common/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + a.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == a.data.length - 1 ? o += a.data[i].title : o = o + a.data[i].title + ",";
                e.push(t.data.markersIndex), wx.setStorageSync("school_mk_" + t.data.communityId, e), 
                wx.setStorageSync("school_con_" + t.data.communityId, o), wx.setStorageSync("school_line_" + t.data.communityId, n), 
                console.log("mks", e), t.setData({
                    markers: e,
                    circum: o,
                    line: n
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    hospitalShow: function() {
        var t = this;
        o.search({
            keyword: "医院",
            location: {
                latitude: t.data.latitude,
                longitude: t.data.longitude
            },
            filter: "category=医院",
            success: function(a) {
                console.log("医院-----", a);
                for (var e = [], o = "", n = a.data, i = 0; i < a.data.length; i++) e.push({
                    title: a.data[i].title,
                    id: a.data[i].id,
                    address: a.data[i].address,
                    latitude: a.data[i].location.lat,
                    longitude: a.data[i].location.lng,
                    iconPath: "https://res.5i5j.com/cache/weixin/common/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + a.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == a.data.length - 1 ? o += a.data[i].title : o = o + a.data[i].title + ",";
                e.push(t.data.markersIndex), wx.setStorageSync("hospital_mk_" + t.data.communityId, e), 
                wx.setStorageSync("hospital_con_" + t.data.communityId, o), wx.setStorageSync("hospital_line_" + t.data.communityId, n), 
                t.setData({
                    markers: e,
                    circum: o,
                    line: n
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    bankShow: function() {
        var t = this;
        o.search({
            keyword: "银行",
            location: {
                latitude: t.data.latitude,
                longitude: t.data.longitude
            },
            filter: "category=银行",
            success: function(a) {
                console.log("银行-----", a);
                for (var e = [], o = "", n = a.data, i = 0; i < a.data.length; i++) e.push({
                    title: a.data[i].title,
                    id: a.data[i].id,
                    address: a.data[i].address,
                    latitude: a.data[i].location.lat,
                    longitude: a.data[i].location.lng,
                    iconPath: "https://res.5i5j.com/cache/weixin/common/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + a.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == a.data.length - 1 ? o += a.data[i].title : o = o + a.data[i].title + ",";
                e.push(t.data.markersIndex), wx.setStorageSync("bank_mk_" + t.data.communityId, e), 
                wx.setStorageSync("bank_con_" + t.data.communityId, o), wx.setStorageSync("bank_line_" + t.data.communityId, n), 
                t.setData({
                    markers: e,
                    circum: o,
                    line: n
                }), console.log("index", t.data.markersIndex);
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    shoppingShow: function() {
        var t = this;
        o.search({
            keyword: "购物",
            filter: "category=商场",
            location: {
                latitude: t.data.latitude,
                longitude: t.data.longitude
            },
            success: function(a) {
                console.log("购物-----", a);
                for (var e = [], o = "", n = a.data, i = 0; i < a.data.length; i++) e.push({
                    title: a.data[i].title,
                    id: a.data[i].id,
                    address: a.data[i].address,
                    latitude: a.data[i].location.lat,
                    longitude: a.data[i].location.lng,
                    iconPath: "https://res.5i5j.com/cache/weixin/common/adr_icon.png",
                    height: 1,
                    width: 1,
                    callout: {
                        content: " " + a.data[i].title + " ",
                        borderRadius: 15,
                        bgColor: "#FFB102",
                        display: "ALWAYS",
                        padding: 3,
                        borderWidth: .5,
                        borderColor: "#999"
                    }
                }), i == a.data.length - 1 ? o += a.data[i].title : o = o + a.data[i].title + ",";
                e.push(t.data.markersIndex), wx.setStorageSync("shopping_mk_" + t.data.communityId, e), 
                wx.setStorageSync("shopping_con_" + t.data.communityId, o), wx.setStorageSync("shopping_line_" + t.data.communityId, n), 
                t.setData({
                    markers: e,
                    circum: o,
                    line: n
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function(t) {
                console.log(t);
            }
        });
    },
    onPageScroll: function(t) {
        for (var a = this, e = a.data.header_tap, o = a.data.header_img, n = 0; n < e.length; n++) if (n != e.length - 1 && t.scrollTop >= e[n] - 40 && t.scrollTop < e[n + 1] - 40) a.setData({
            header_current: n
        }); else {
            if (!(n == e.length - 1 && t.scrollTop > e[e.length - 1] - 40)) continue;
            a.setData({
                header_current: e.length - 1
            });
        }
        t.scrollTop < o ? a.setData({
            isFixed: !1
        }) : a.setData({
            isFixed: !0
        });
    },
    toNode: function(t) {
        console.log("dian-----", t, "---"), wx.createSelectorQuery().select(".header_scroll .cur").boundingClientRect(function(a) {
            console.log("++++++", t.currentTarget.offsetLeft);
        }).exec();
        var a = t.currentTarget.dataset.index, e = this.data.header_tap[a] - 20;
        wx.pageScrollTo({
            scrollTop: e
        });
    },
    touchStart: function(t) {
        n = t.touches[0].pageX, i = t.touches[0].pageY, e = setInterval(function() {
            c++;
        }, 100);
    },
    touchEnd: function(t) {
        var a = t.changedTouches[0].pageX, o = t.changedTouches[0].pageY, d = a - n, r = o - i;
        if (c < 20) {
            var l = Math.abs(d), s = Math.abs(r);
            l > 2 * s && (d < 0 ? console.log("左滑=====") : console.log("右滑=====")), s > 2 * l && r < 0 && console.log("上滑动=====");
        }
        clearInterval(e), c = 0;
    },
    changTab: function(t) {
        this.setData({
            currentTab: t.target.dataset.current
        }), console.log("currentTab--", this.data.currentTab);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});