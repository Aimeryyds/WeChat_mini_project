var t = getApp(), e = require("filterCommon.js");

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
    showFn: e.showFn,
    selectedFun: function(t) {
        var e = t.target.dataset.val;
        this.data.selected == e && (e = -1), this.setData({
            selected: e
        });
    },
    tabFun: function(t) {
        var e = Number(t.target.dataset.id), a = t.currentTarget.dataset.key, i = this.data.tabArr;
        "curAIndex" !== a && "curPIndex" !== a || (i["curAIndex" === a ? "curPIndex" : "curAIndex"] = ""), 
        i[a] = e, this.setData({
            tabArr: i
        });
    },
    goTopFun: function(t) {
        var e = this.data.scrollTop.scroll_top;
        e = 1 == e ? 0 : 1, this.setData({
            "scrollTop.scroll_top": e
        });
    },
    onLoad: function(e) {
        var a = this, i = t.getSecret();
        wx.request({
            url: t.globalData.haozuBase + "/api/miniapps/getqueryfilter/",
            data: {
                currtime: i.currtime,
                sign: i.sign
            },
            success: function(e) {
                var i = e.data;
                a.setData({
                    ul_areas: i.data.area,
                    price: i.data.price_rent.price,
                    avg_price: i.data.price_rent.avg_price,
                    listorder: i.data.listorder,
                    msg_template: t.globalData["tel-phone"],
                    house_type: i.data.house_type
                });
            }
        }), wx.request({
            url: t.globalData.haozuBase + "/api/miniapps/houselist/",
            data: {
                building_id: e.building_id,
                currtime: i.currtime,
                sign: i.sign
            },
            success: function(t) {
                var e = t.data, i = e.data.house_list, s = e.data.building_info, r = [];
                for (var o in i) r.push(i[o]);
                a.setData({
                    building: s,
                    building_items: r
                }), wx.setNavigationBarTitle({
                    title: s.name + " | 写字楼出租",
                    success: function(t) {}
                });
            }
        }), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    windowHeight: t.windowHeight
                });
            }
        });
    },
    goTap: function(e) {
        var a = this, i = e.currentTarget.dataset;
        if (i.obj && (i = i.obj), void 0 === i.listorder) {
            var s = a.data.filter;
            void 0 !== i.price && delete s.avg_price, void 0 !== i.avg_price && delete s.price, 
            t.extend(i, s, !0), a.setData({
                filter: i
            }), i = t.extend(i, a.data.order);
        } else a.setData({
            order: i,
            ordertype: i.listorder
        }), i = t.extend(i, a.data.filter);
        var r = t.getSecret(), o = t.extend({
            building_id: a.data.building.id,
            currtime: r.currtime,
            sign: r.sign
        }, i);
        wx.request({
            url: t.globalData.haozuBase + "/api/miniapps/houselist/",
            data: o,
            success: function(t) {
                var e = t.data, i = t.data.house_list;
                if (0 != t.data.data.house_list) {
                    i = e.data.house_list;
                    a.setData({
                        building_items: i,
                        selected: 5,
                        nohouse: !1,
                        house_show: !0,
                        showDialog: !1,
                        scrollTop: 0,
                        params: e.data.params
                    });
                } else a.setData({
                    nohouse: !0,
                    house_show: !1,
                    selected: 5,
                    showDialog: !1
                });
            }
        });
    },
    onClickButton: function(t) {
        var e = this;
        switch (t.currentTarget.dataset.index) {
          case "0":
            e.setData({
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
    }
});