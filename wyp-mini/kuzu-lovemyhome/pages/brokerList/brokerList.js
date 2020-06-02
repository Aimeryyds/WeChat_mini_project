function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e = getApp(), r = require("../../sdk/dingxiang.js"), o = require("../../utils/gio-minp/index.js").default, d = require("../../sdk/gioConfig.js").default;

o("setConfig", d), Page({
    data: (t = {
        loading: !0,
        cityId: 1,
        page_num: 1,
        totalpage: 0,
        listLock: 1,
        brokerlist_data: [],
        hidden: !0,
        tabTxt: [],
        tab: [ !0, !0, !0 ],
        filterMask: !0,
        search: !1,
        quYuBar2: 0,
        quYuBar3: 0,
        quYuBxBar2: "",
        quYuBxBar3: "",
        loadbarid: 0,
        quyuNav2: !1,
        quyuNav3: !0,
        filterArea: [],
        filterArea2: [],
        subCur: 0,
        tagData: [],
        total_page: 0
    }, a(t, "page_num", 1), a(t, "listLock", 1), a(t, "listHidden", !1), a(t, "houseNo", !0), 
    a(t, "showAllData", !0), a(t, "speed", 0), a(t, "accuracy", 0), a(t, "searchCon", "请输入经纪人姓名、电话或商圈、店面"), 
    a(t, "postParam", {}), a(t, "countLock", 1), a(t, "loadingCount", !0), t),
    onLoad: function(a) {
        var t = this;
        new r({
            appId: e.globalData.dxAppId
        }, function(e, r) {
            if (e) console.log(e); else {
                t.setData({
                    dxDeviceId: r
                });
                var o = t, d = [];
                d = [ {
                    name: "区域",
                    navselected: !1
                }, {
                    name: "筛选",
                    navselected: !1
                }, {
                    name: "排序",
                    navselected: !1
                } ], o.setData({
                    cityId: a.cityId,
                    tabTxt: d,
                    nameCur2: "不限",
                    nameCur1: "区域",
                    quYuBar2: 11,
                    quYuBxBar2: 11
                }), o.getQuYuData(0), o.paixuData(), o.shaixuanData(), console.log(a.searchType), 
                a.searchType ? (o.setData({
                    searchCon: a.searchName,
                    tabTxt: o.data.tabTxt
                }), o.data.postParam.keywords = a.keyWords, console.log("search", o.data.postParam), 
                o.filterData(o.data.postParam)) : o.getData("");
            }
        });
    },
    getData: function(t) {
        var r = this, o = e.globalData.url_host, d = {
            page: r.data.page_num,
            pcount: 15
        }, n = Object.assign(d, t);
        wx.request({
            url: o + "/broker/" + r.data.cityId + "/v1/list",
            data: n,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                if (200 == t.data.status) {
                    console.log("data : ", t.data);
                    for (var e = [], o = 0; o < t.data.data.list.length; o++) {
                        var d = t.data.data.list[o].dkscore.toFixed(1);
                        e.push(d);
                    }
                    if (0 == t.data.data.count) {
                        var n;
                        r.setData((n = {
                            houseNo: !1,
                            listHidden: !0
                        }, a(n, "houseNo", !1), a(n, "loading", !1), n));
                    } else if (t.data.data.count < 15) console.log(t.data.data.count, "小于", 15), r.data.listLock = 2, 
                    r.setData({
                        brokerlist_data: t.data.data.list,
                        dkscoreArr: e,
                        listHidden: !1,
                        houseNo: !0,
                        loading: !1,
                        showAllData: !1
                    }); else if (r.data.listLock = 1, r.data.totalpage = Math.ceil(t.data.data.count / 15), 
                    r.data.totalpage >= r.data.page_num) {
                        var i = r.data.brokerlist_data.concat(t.data.data.list);
                        r.setData({
                            brokerlist_data: i,
                            dkscoreArr: e,
                            houseNo: !0,
                            listHidden: !1,
                            showAllData: !0,
                            loading: !1
                        }), wx.hideLoading(), r.data.page_num += 1;
                    }
                    1 == r.data.countLock && 0 == r.data.loading && (r.setData({
                        countNum: t.data.data.count,
                        loadingCount: !1
                    }), setTimeout(function() {
                        r.setData({
                            countNum: "",
                            loadingCount: !0
                        });
                    }, 2e3));
                } else r.data.listLock = 2, console.log("msg:", t.data.msg), r.setData({
                    loading: !1,
                    listHidden: !0,
                    houseNo: !1
                });
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {
                wx.hideLoading();
            }
        });
    },
    brokerDeatil: function(a) {
        var t = this, e = a.currentTarget.dataset.brokerid;
        a.currentTarget.dataset.citycode;
        console.log(t.data.cityId), wx.navigateTo({
            url: "../broker_detail/brokerDetail?brokerId=" + e + "&cityId=" + t.data.cityId + "&citycode="
        });
    },
    tel: function(a) {
        var t = a.currentTarget.id, r = a.currentTarget.dataset.jobleave, d = a.currentTarget.dataset.index + 1, n = a.currentTarget.dataset.bid, i = e.tdsdk;
        console.log("sdk", i), o("track", "telconsult", {
            iconlocation_var: d,
            agentid_var: n,
            telnum_var: t
        }), i.appEvent.eventId({
            eventLabel: 1
        }), i.appEvent.eventId({
            eventLabel: 2
        }), i.appEvent.eventId({
            eventLabel: 6
        });
        var s = e.globalData.url_host;
        wx.request({
            url: s + "/wxim/wxcallback",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            data: {
                click_id: e.globalData.click_id,
                action_type: "RESERVATION",
                value: 40,
                user_action_set_id: 1110064786
            },
            method: "post",
            success: function(a) {
                console.log("成功666:", a);
            }
        }), 1 == r && (console.log("mobile", t), wx.makePhoneCall({
            phoneNumber: t,
            success: function() {
                console.log("拨打成功", t);
            },
            fail: function() {
                console.log("拨打失败", t);
            }
        })), 0 == r && wx.showToast({
            title: "该经纪人已离职，请联系其他经纪人",
            icon: "none"
        });
    },
    filterData: function(a) {
        var t = this;
        t.data.page_num = 1, t.getData(a);
    },
    filterTabFn: function(a) {
        var t = this, e = [ !0, !0, !0 ], r = a.currentTarget.dataset.index;
        if (0 == t.data.tab[r]) {
            switch (r) {
              case 1:
                t.setData({
                    curTab: 2
                });
                break;

              case 2:
                t.setData({
                    curTab: 3
                });
            }
            console.log(t.data.curTab), t.filterMaskFn();
        } else {
            var o = "";
            e[r] = !this.data.tab[r], o = this.data.tab[r] ? a.currentTarget.dataset.name : "", 
            t.setData({
                tab: e,
                filterMask: e[r],
                filnav: o,
                search: !1
            });
        }
    },
    filterMaskFn: function() {
        var a = this, t = this.data.curTab;
        console.log("curs1", t), a.setData({
            tab: [ !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            sortcon: !0,
            zindex: 10,
            filnav: "",
            curTab: ""
        });
    },
    quyuFn: function(a) {
        var t = this, e = a.currentTarget.dataset;
        switch (console.log("quyuFn", a), +e.barid) {
          case 1:
            console.log("barid:", e.barid), t.getQuYuData(0), t.setData({
                quyuNav3: !0,
                nameCur1: e.name,
                nameCur2: "不限",
                nameCur11: "",
                nameCur21: "",
                nameCur31: "",
                quYuBar2: 11,
                quYuBxBar2: 11,
                loadbarid: 0
            });
            break;

          case 2:
            console.log("barid:", e.barid), t.getDiTieData(0), t.setData({
                quyuNav3: !0,
                nameCur1: e.name,
                nameCur2: "不限",
                nameCur11: "",
                nameCur21: "",
                nameCur31: "",
                quYuBar2: 21,
                quYuBxBar2: 21,
                loadbarid: 0
            });
        }
    },
    quyuFn2: function(a) {
        var t = this, e = a.currentTarget.dataset;
        switch (+e.barid) {
          case 11:
            t.data.postParam.keywords = "", t.data.postParam.lineid = "", t.data.postParam.stationid = "", 
            t.data.postParam.nearby = "", t.data.postParam.conmmunityid = "", t.data.postParam.districtid = e.districtid, 
            t.getQuYuData(e.districtid), t.setData({
                quyuNav3: !1,
                nameCur11: e.districtid,
                nameCur21: "",
                nameCur2: "",
                nameCur3: "不限",
                quyuId: e.districtid,
                quyuName: e.name,
                quYuBar3: 12,
                quYuBxBar3: 12,
                loadbarid: 12
            });
            break;

          case 21:
            t.data.postParam.keywords = "", t.data.postParam.districtid = "", t.data.postParam.sqid = "", 
            t.data.postParam.nearby = "", t.data.postParam.conmmunityid = "", t.data.postParam.lineid = e.dtlineid, 
            t.getDiTieData(e.dtlineid), t.setData({
                quyuNav3: !1,
                nameCur21: e.dtlineid,
                nameCur11: "",
                nameCur2: "",
                nameCur3: "不限",
                quyuId: e.dtlineid,
                quyuName: e.name,
                quYuBar3: 22,
                quYuBxBar3: 22,
                loadbarid: 22
            }), console.log("地铁2:", t.data.quyuId);
            break;

          case 31:
            t.data.tabTxt[0].newname = e.name, 1 == t.data.dingwei ? (t.setData({
                quyuNav3: !0,
                nameCur31: e.nearid,
                nameCur2: "",
                quyuName: e.name,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                quYuBar3: 32,
                quYuBxBar3: 32,
                loadbarid: 32,
                searchCon: "请输入经纪人姓名、电话或商圈、店面",
                brokerlist_data: []
            }), t.data.postParam.keywords = "", t.data.postParam.districtid = "", t.data.postParam.sqid = "", 
            t.data.postParam.lineid = "", t.data.postParam.stationid = "", t.data.postParam.conmmunityid = "", 
            t.data.postParam.nearby = e.nearid, t.data.postParam.location = t.data.longitude + "," + t.data.latitude, 
            t.filterData(t.data.postParam)) : (wx.showToast({
                title: "定位失败,请授权位置信息",
                icon: "none"
            }), t.setData({
                nameCur31: e.nearid,
                nameCur2: "",
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0 ],
                filterMask: !0,
                search: !1
            }));
        }
    },
    quyuFn3: function(a) {
        var t = this, e = a.currentTarget.dataset;
        switch (t.data.tabTxt[0].newname = e.name, +e.barid) {
          case 12:
            t.setData({
                nameCur3: e.sqid,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 12,
                shangquan: e.name,
                searchCon: "请输入经纪人姓名、电话或商圈、店面",
                brokerlist_data: []
            }), t.data.postParam.keywords = "", t.data.postParam.districtid = "", t.data.postParam.sqid = e.sqid, 
            t.data.postParam.stationid = "", t.data.postParam.conmmunityid = "", t.filterData(t.data.postParam), 
            console.log("区域三级", t.data.postParam);
            break;

          case 22:
            t.setData({
                nameCur3: e.sqid,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 22,
                searchCon: "请输入经纪人姓名、电话或商圈、店面",
                brokerlist_data: []
            }), t.data.postParam.keywords = "", t.data.postParam.sqid = "", t.data.postParam.conmmunityid = "", 
            t.data.postParam.stationid = e.sqid, t.filterData(t.data.postParam), console.log("地铁三级", t.data.postParam);
        }
    },
    buxianFn2: function(a) {
        var t = this;
        t.data.tabTxt[0].newname = "", t.setData({
            nameCur2: a.currentTarget.dataset.name,
            tabTxt: t.data.tabTxt,
            filnav: "",
            tab: [ !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            quyuNav3: !0,
            loadbarid: 0,
            nameCur3: "",
            nameCur11: "",
            nameCur21: "",
            nameCur31: "",
            searchCon: "请输入经纪人姓名、电话或商圈、店面",
            brokerlist_data: []
        }), t.data.postParam.keywords = "", t.data.postParam.districtid = "", t.data.postParam.sqid = "", 
        t.data.postParam.lineid = "", t.data.postParam.stationid = "", t.data.postParam.nearby = "", 
        t.data.postParam.location = "", t.data.postParam.conmmunityid = "", t.filterData(t.data.postParam), 
        console.log("buxian2", t.data.postParam);
    },
    buxianFn3: function(a) {
        var t = this, e = a.currentTarget.dataset;
        switch (t.data.tabTxt[0].newname = t.data.quyuName, +e.bxbarid) {
          case 12:
            t.setData({
                nameCur3: a.currentTarget.dataset.name,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 12,
                searchCon: "请输入经纪人姓名、电话或商圈、店面",
                brokerlist_data: []
            }), t.data.postParam.keywords = "", t.data.postParam.sqid = "", t.data.postParam.conmmunityid = "", 
            t.data.postParam.qyid = t.data.quyuId, console.log("区域不限3：", t.data.postParam), 
            t.filterData(t.data.postParam);
            break;

          case 22:
            t.setData({
                nameCur3: a.currentTarget.dataset.name,
                quyuSqId: "",
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 22,
                brokerlist_data: []
            }), t.data.postParam.keywords = "", t.data.postParam.stationid = "", t.data.postParam.conmmunityid = "", 
            t.data.postParam.lineid = t.data.quyuId, console.log("地铁不限3：", t.data.postParam), 
            t.filterData(t.data.postParam);
        }
    },
    getQuYuData: function(a) {
        var t = this, r = {}, o = e.globalData.url_host;
        wx.request({
            url: o + "/appapi/region/" + t.data.cityId + "/v1/list",
            method: "POST",
            data: r,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(e) {
                if (200 == e.data.status) {
                    for (var r = [], o = 0; o < e.data.data.length; o++) r[e.data.data[o].id] = e.data.data[o].sqlist;
                    0 == a ? t.setData({
                        filterArea: e.data.data
                    }) : t.setData({
                        filterArea2: r[a]
                    });
                } else console.log("204");
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    getDiTieData: function(a) {
        var t = this, r = {}, o = e.globalData.url_host;
        wx.request({
            url: o + "/appapi/subway/" + t.data.cityId + "/v1/list",
            method: "POST",
            data: r,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(e) {
                if (200 == e.data.status) {
                    for (var r = [], o = 0; o < e.data.data.length; o++) r[e.data.data[o].lineid] = e.data.data[o].stationlist;
                    console.log("stArr", r), 0 == a ? t.setData({
                        filterArea: e.data.data
                    }) : t.setData({
                        filterArea2: r[a]
                    });
                } else console.log("204");
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    shaixuanData: function() {
        var a = [ {
            btype: "",
            name: "全部"
        }, {
            btype: 1,
            name: "买卖经纪人"
        }, {
            btype: 2,
            name: "租赁经纪人"
        } ];
        this.setData({
            shaixuanTypeList: a
        });
    },
    shaixuanFn: function(a) {
        var t = this, e = a.currentTarget.dataset.btype, r = a.currentTarget.dataset.index;
        t.shaixuanData(), t.data.postParam.btype = e;
        var o = t.data.tabTxt[1].name, d = t.data.shaixuanTypeList[r].name;
        o != d && (t.data.tabTxt[1].newname = d), "全部" == d && (t.data.tabTxt[1].newname = ""), 
        t.setData({
            curTab: 1,
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            shaixuanName: t.data.shaixuanTypeList[r].name,
            brokerlist_data: []
        }), console.log("筛选-", t.data.postParam), t.filterData(t.data.postParam);
    },
    paixuData: function() {
        var a = [ {
            psort: "",
            name: "默认"
        }, {
            psort: 3,
            name: "买卖成交量从高到低"
        }, {
            psort: 4,
            name: "租赁成交量从高到低"
        }, {
            psort: 2,
            name: "带看量从高到低"
        } ];
        this.setData({
            paixuTypeList: a
        });
    },
    paixuFn: function(a) {
        var t = this, e = a.currentTarget.dataset.psort, r = a.currentTarget.dataset.index;
        t.data.postParam.psort = e;
        var o = t.data.tabTxt[2].name, d = t.data.paixuTypeList[r].name;
        o != d && (t.data.tabTxt[2].newname = d), "默认" == d && (t.data.tabTxt[2].newname = ""), 
        t.setData({
            curTab: 2,
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            paixuName: t.data.paixuTypeList[r].name,
            brokerlist_data: []
        }), t.filterData(t.data.postParam);
    },
    toSearch: function(a) {
        var t = this, e = "";
        "请输入经纪人姓名、电话或商圈、店面" != t.data.searchCon && (e = t.data.searchCon), 8 == getCurrentPages().length ? wx.redirectTo({
            url: "../brokerSearch/brokerSearch?cityId=" + t.data.cityId + "&searchInp=" + e
        }) : wx.navigateTo({
            url: "../brokerSearch/brokerSearch?cityId=" + t.data.cityId + "&searchInp=" + e
        });
    },
    delInp: function() {
        var a = this;
        a.data.tabTxt[0].newname = "", a.setData({
            searchCon: "请输入经纪人姓名、电话或商圈、店面",
            tabTxt: a.data.tabTxt
        }), a.setData({
            brokerlist_data: [],
            postParam: ""
        }), a.filterData();
    },
    loadMore: function() {
        var a = this;
        if (console.log("totalpage", a.data.totalpage), console.log("page_num", a.data.page_num), 
        a.data.countLock = 2, a.data.totalpage < a.data.page_num && (console.log("没有新数据"), 
        a.setData({
            showAllData: !1,
            loading: !1
        }), a.data.listLock = 2), 2 == a.data.listLock) return !1;
        wx.showLoading({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), a.getData(a.data.postParam);
    },
    avatarError: function(a) {
        var t = this, e = {};
        e["brokerlist_data[" + Number(a.target.dataset.imgindex) + "].brokerimg"] = "/img/resources/default_broker_404.png", 
        t.setData(e);
    },
    toIm: function(a) {
        var t = wx.getStorageSync("loginStatus"), r = a.currentTarget.dataset.bid, d = e.globalData.url_host, n = a.currentTarget.dataset.index + 1;
        if (o("track", "onlineconsult", {
            iconlocation_var: n,
            agentid_var: r
        }), 1 == t) {
            var i = a.currentTarget.dataset.leave, s = e.tdsdk;
            console.log("sdk", s), s.appEvent.eventId({
                eventLabel: 1
            }), s.appEvent.eventId({
                eventLabel: 3
            }), s.appEvent.eventId({
                eventLabel: 10
            }), wx.request({
                url: d + "/wxim/wxcallback",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                data: {
                    click_id: e.globalData.click_id,
                    action_type: "RESERVATION",
                    value: 40,
                    user_action_set_id: 1110064786
                },
                method: "post",
                success: function(a) {
                    console.log("成功666:", a);
                }
            }), void 0 === i || 1 == i ? (wx.requestSubscribeMessage({
                tmplIds: e.globalData.tmplids,
                success: function(a) {
                    console.log(a);
                }
            }), wx.navigateTo({
                url: "../im/im?bid=" + r
            })) : wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人！",
                icon: "none"
            });
        } else {
            wx.navigateTo({
                url: "../login/login?url=im/im&bid=" + r + "&ret_type=1&maidian=1&jjrMain=1"
            });
        }
    },
    onReady: function() {
        o("setPage", {
            pagename: "经纪人列表页"
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});