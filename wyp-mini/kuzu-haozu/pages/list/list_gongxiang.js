var t = getApp(), a = require("filterCommon.js");

Page({
    data: {
        selected: 5,
        tabArr: {
            curHdIndex: 0,
            curEdIndex: 0,
            curSdIndex: 0,
            curLdIndex: 0
        },
        test: "",
        scrollTop: {
            scroll_top: 0,
            goTop_show: !1
        },
        cur: "",
        showDialog: !1,
        loading: !1,
        pull: !0,
        scrolling: !1,
        windowHeight: 736,
        ordertype: 0,
        building: {},
        building_items: [],
        listorder: [],
        imgurls: [],
        cityOption: {},
        house_type: [],
        pages: 1,
        nohouse: !1,
        pointInfo: {},
        order: {},
        filter: {},
        params: {}
    },
    showFn: a.showFn,
    selectedFun: function(t) {
        var a = t.target.dataset.val;
        this.data.selected == a && (a = -1), this.setData({
            selected: a
        });
    },
    tabFun: function(t) {
        var a = Number(t.target.dataset.id), e = t.currentTarget.dataset.key, i = this.data.tabArr;
        i[e] = a, this.setData({
            tabArr: i
        });
    },
    goTopFun: function(t) {
        var a = this.data.scrollTop.scroll_top;
        a = 1 == a ? 0 : 1, this.setData({
            "scrollTop.scroll_top": a
        });
    },
    onLoad: function(a) {
        var e = this, i = t.getSecret();
        wx.request({
            url: t.globalData.haozuBase + "/api/miniapps/getqueryfilter/",
            data: {
                page_type: 2,
                building_id: a.building_id,
                house_type: 5,
                currtime: i.currtime,
                sign: i.sign
            },
            success: function(t) {
                var a = t.data;
                e.setData({
                    ul_areas: a.data.area
                }), e.setData({
                    price_cowork: a.data.price_cowork.price
                }), e.setData({
                    cowork_type: a.data.cowork_type
                }), e.setData({
                    listorder: a.data.listorder
                });
            }
        }), wx.request({
            url: t.globalData.haozuBase + "/api/miniapps/houselist/",
            data: {
                building_id: a.building_id,
                house_type: 5,
                currtime: i.currtime,
                sign: i.sign
            },
            success: function(t) {
                var a = t.data, i = a.data.house_list, s = a.data.building_info, o = [];
                for (var r in i) o.push(i[r]);
                e.setData({
                    building: s,
                    building_items: o
                }), wx.setNavigationBarTitle({
                    title: s.name + " | 共享办公出租",
                    success: function(t) {}
                });
            }
        }), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    windowHeight: t.windowHeight
                });
            }
        });
    },
    goTap: function(a) {
        var e = this, i = a.currentTarget.dataset;
        if (void 0 === i.listorder) {
            var s = e.data.filter;
            t.extend(i, s, !0), e.setData({
                filter: i
            }), i = t.extend(i, e.data.order);
        } else e.setData({
            order: i,
            ordertype: i.listorder
        }), i = t.extend(i, e.data.filter);
        var o = t.getSecret(), r = t.extend({
            house_type: 5,
            building_id: e.data.building.id,
            currtime: o.currtime,
            sign: o.sign
        }, i);
        wx.request({
            url: t.globalData.haozuBase + "/api/miniapps/houselist/",
            data: r,
            success: function(t) {
                var a = t.data;
                if (0 != t.data.data.house_list) {
                    var i = a.data.house_list;
                    e.setData({
                        building_items: i,
                        selected: 5,
                        nohouse: !1,
                        house_show: !0,
                        showDialog: !1,
                        scrollTop: 0,
                        params: a.data.params
                    });
                } else e.setData({
                    building_items: [],
                    nohouse: !0,
                    house_show: !1,
                    selected: 5,
                    showDialog: !1
                });
            }
        });
    },
    onClickButton: function(t) {
        var a = this;
        switch (t.currentTarget.dataset.index) {
          case "0":
            a.setData({
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