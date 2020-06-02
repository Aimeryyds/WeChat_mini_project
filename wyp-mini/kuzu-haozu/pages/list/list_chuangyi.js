function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e = getApp(), i = require("filterCommon.js");

Page({
    data: (t = {
        selected: 5,
        tabArr: {
            curHdIndex: 0,
            curEdIndex: 0,
            curSdIndex: 0,
            curLdIndex: 0
        },
        scrollTop: {
            scroll_top: 0,
            goTop_show: !1
        },
        cur: "",
        showDialog: !1,
        loading: !1,
        pull: !0,
        windowHeight: 736,
        showLoading: !0,
        value: [ 0, 0 ],
        ul_areas: [],
        price: [],
        avg_price: [],
        house_type: [],
        house_zhuangxiu: [],
        price_cowork: [],
        tag: [],
        house_is_register: [],
        house_house_type: [],
        listorder: [],
        district: [],
        subway: [],
        areas: [],
        citys: [],
        stations: [],
        bangongtype: 6,
        zhuangxiutype: 0,
        ordertype: 0,
        building_items: [],
        district_id: ""
    }, a(t, "areas", ""), a(t, "nohouse", !1), a(t, "msg_template", ""), a(t, "pages", 1), 
    a(t, "maxPage", 1), a(t, "subsucc", !1), a(t, "cityOption", {
        house_type: 6
    }), a(t, "isloading", !1), a(t, "imgurls", [ {
        url: "../../images/AllAble_icon.png",
        id: 0
    }, {
        url: "../../images/Ordinary_icon.png",
        id: 1
    }, {
        url: "../../images/Hardcover_icon.png",
        id: 5
    }, {
        url: "../../images/Secondary_icon.png",
        id: 6
    } ]), a(t, "building", {}), a(t, "building_list", {}), a(t, "pointInfo", {}), a(t, "searchobj", {
        house_type: 6,
        house_zhuangxiu: 0,
        house_is_register: 0
    }), a(t, "order", {}), a(t, "filter", {
        house_type: 6
    }), a(t, "params", {}), t),
    clickTypeFun: i.clickTypeFun,
    clickTypeZX: i.clickTypeZX,
    filterFun: i.filterFun,
    clickTypeTS: i.clickTypeTS,
    clickTypeClear: i.clickTypeClear,
    selectedFun: function(a) {
        var t = a.target.dataset.val;
        this.data.selected == t && (t = -1), this.setData({
            selected: t
        });
    },
    scrollTopFun: function(a) {
        a.detail.scrollTop > 300 ? this.setData({
            "scrollTop.goTop_show": !0
        }) : this.setData({
            "scrollTop.goTop_show": !1
        });
    },
    upper: function() {
        var a = this, t = e.getSecret();
        if (a.data.isloading) return !1;
        if (a.setData({
            isloading: !0
        }), a.data.pages > a.data.maxPage) return !1;
        a.data.pages++;
        var i = e.extend({
            page: a.data.pages,
            currtime: t.currtime,
            sign: t.sign,
            house_type: 6
        }, a.data.cityOption);
        i = e.extend(i, a.data.filter), i = e.extend(i, a.data.order), wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/list/",
            data: i,
            success: function(t) {
                if (a.setData({
                    isloading: !1
                }), 200 === t.data.code) {
                    var e = t.data.data.building_list, i = e.items, s = [];
                    for (var o in i) i[o].point_name && (i[o].name = i[o].point_name), s.push(i[o]);
                    var r = a.data.building_items;
                    Array.prototype.push.apply(r, s), a.setData({
                        building_items: r,
                        selected: 5,
                        nohouse: !1,
                        house_show: !0,
                        subsucc: !0,
                        maxPage: Math.ceil(e.total / 10)
                    }), setTimeout(function() {
                        a.setData({
                            subsucc: !1
                        });
                    }, 2e3);
                } else (r = a.data.building_items).length > 0 ? a.setData({
                    house_show: !1
                }) : a.setData({
                    nohouse: !0,
                    house_show: !1,
                    selected: 5
                });
            }
        });
    },
    goTopFun: function(a) {
        var t = this.data.scrollTop.scroll_top;
        t = 1 == t ? 0 : 1, this.setData({
            "scrollTop.scroll_top": t
        });
    },
    tabFun: i.tabFun,
    tabFunlab: i.tabFunlab,
    showFn: i.showFn,
    onLoad: function(a) {
        var t = this, i = e.getSecret();
        a.domain = a.domain || e.globalData.domain, t.setData({
            cityOption: a
        }), wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/getqueryfilter/",
            data: {
                domain: e.globalData.domain,
                currtime: i.currtime,
                sign: i.sign,
                house_type: 6
            },
            success: function(a) {
                var i = a.data;
                i.data.district[0].district_id = i.data.district[0].val, t.setData({
                    ul_areas: i.data.area,
                    price: i.data.price_rent.price,
                    avg_price: i.data.price_rent.avg_price,
                    house_type: i.data.house_type,
                    house_zhuangxiu: i.data.house_zhuangxiu
                });
                var s = function(a) {
                    for (var t = 0; t < a.length; t++) a[t].checked = "不限" === a[t].show;
                };
                s(i.data.house_is_register), s(i.data.house_house_type), s(i.data.tag), t.setData({
                    house_is_register: i.data.house_is_register,
                    house_house_type: i.data.house_house_type,
                    tag: i.data.tag
                }), t.setData({
                    listorder: i.data.listorder,
                    district: i.data.district,
                    subway: i.data.subway_line,
                    msg_template: e.globalData["tel-phone"]
                });
            }
        });
        var s = e.extend({
            domain: e.globalData.domain,
            currtime: i.currtime,
            sign: i.sign,
            house_type: 6
        }, a);
        wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/list/",
            data: s,
            success: function(a) {
                var e = a.data, i = [];
                if (200 == a.data.code) {
                    var s = e.data.building_list.items;
                    for (var o in s) i.push(s[o]);
                }
                t.setData({
                    building_items: i
                });
            }
        }), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    windowHeight: a.windowHeight
                });
            }
        });
    },
    goTap: i.goTap,
    directTap: function(a) {
        var t = this, i = a.currentTarget.dataset.id, s = e.globalData.domain, o = e.getSecret();
        this.district_id = a.currentTarget.dataset.id, wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/getqueryfilter/",
            data: {
                district_id: i,
                domain: s,
                currtime: o.currtime,
                sign: o.sign
            },
            success: function(a) {
                t.setData({
                    areas: a.data.data
                });
            }
        });
    },
    ditieTap: function(a) {
        var t = this, i = a.currentTarget.dataset.id, s = e.globalData.domain, o = e.getSecret();
        this.subway_line = a.currentTarget.dataset.id, wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/getqueryfilter/",
            data: {
                subway_line: i,
                domain: s,
                currtime: o.currtime,
                sign: o.sign
            },
            success: function(a) {
                t.setData({
                    stations: a.data.data.station
                });
            }
        });
    },
    areasTap: function(a) {
        var t = a.currentTarget.dataset.id;
        e.globalData.domain, e.getSecret();
        this.areasR_name = a.currentTarget.dataset.name, wx.navigateTo({
            url: "/pages/list/list?area=" + t
        });
    },
    onClickButton: function(a) {
        var t = this;
        switch (a.currentTarget.dataset.index) {
          case "0":
            t.setData({
                showDialog: !this.data.showDialog
            });
        }
    },
    onClickdiaView: function() {
        this.setData({
            showDialog: !this.data.showDialog
        });
    },
    closeFun: function() {
        this.setData({
            selected: 5,
            showDialog: 0
        });
    },
    emptyFun: function() {}
});