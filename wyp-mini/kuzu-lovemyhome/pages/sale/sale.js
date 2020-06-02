var a = getApp(), t = require("../../sdk/dingxiang.js"), e = require("../../utils/gio-minp/index.js").default, o = require("../../sdk/gioConfig.js").default;

e("setConfig", o), Page({
    data: {
        list_param: 1,
        city_id: 1,
        list: [],
        lazyLoad: !0,
        hidden: !0,
        tabTxt: [],
        tab: [ !0, !0, !0, !0 ],
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
        filterPrices: [],
        priceData: "",
        inpVal: null,
        filterFxing: [],
        fxingData: [],
        pricesData: [],
        moreTag: [],
        moreCurName: "",
        rentothertype: "",
        rentothertypefont: "",
        moreselected: [],
        tagData: [],
        total_page: 0,
        page_num: 1,
        listLock: 1,
        listHidden: !1,
        houseNo: !0,
        showAllData: !0,
        sortbtn: !1,
        sortcon: !0,
        sortData: [],
        longitude: 0,
        latitude: 0,
        speed: 0,
        accuracy: 0,
        searchCon: "请输入小区或商圈名称",
        postParam: {},
        loadinghide: !0,
        countLock: 1,
        loadingCount: !0,
        dingwei: "",
        moreData: "",
        curTab: "",
        price_name: "",
        price_name_commit: "",
        price_val: "",
        minPrice: "",
        maxPrice: "",
        minPriceInput: "",
        maxPriceInput: "",
        minPriceData: "",
        maxPriceData: "",
        floorType: "",
        floorTypeName: "",
        floorTypeCommit: "",
        floorTypeNameCommit: "",
        mores: {},
        moresName: "",
        moresCommit: {},
        moresNameCommit: "",
        moresTag: "",
        moreTagsName: "",
        moresTagCommit: "",
        moresTagNameCommit: "",
        moresBuildate: "",
        moresBuildateName: "",
        moresBuildateCommit: "",
        moresBuildateNameCommit: "",
        xiaohb: !0
    },
    onLoad: function(e) {
        var o = this;
        new t({
            appId: a.globalData.dxAppId
        }, function(t, d) {
            if (t) console.log(t); else {
                o.setData({
                    dxDeviceId: d
                });
                var r = o;
                if (e.condition) {
                    c = JSON.parse(e.condition);
                    console.log(c), r.setData({
                        postParam: c
                    });
                }
                u = [];
                1 == e.listParam && (wx.setNavigationBarTitle({
                    title: "二手房"
                }), u = [ {
                    name: "区域",
                    navselected: !1
                }, {
                    name: "价格",
                    navselected: !1
                }, {
                    name: "房型",
                    navselected: !1
                }, {
                    name: "更多",
                    navselected: !1
                } ]), 2 == e.listParam && (wx.setNavigationBarTitle({
                    title: "租房"
                }), u = [ {
                    name: "区域",
                    navselected: !1
                }, {
                    name: "租金",
                    navselected: !1
                }, {
                    name: "房型",
                    navselected: !1
                }, {
                    name: "更多",
                    navselected: !1
                } ]), r.setData({
                    list_param: e.listParam,
                    tabTxt: u,
                    city_id: e.cityId,
                    nameCur2: "不限",
                    nameCur1: "区域",
                    quYuBar2: 11,
                    quYuBxBar2: 11
                }), console.log("listParam进入二手房", r.data.list_param), r.setMoreData(), r.getQuYuData(0), 
                r.filterPricesData(), r.floorTypeData(), r.filtermoreData(), r.sortConData(), r.kaiqihudong();
                var i = wx.getStorageSync("loginStatus"), s = wx.getStorageSync("userInfo"), n = a.globalData.url_host;
                if ("1" == i) m = s.token; else var m = "";
                if (wx.request({
                    url: n + "/event/activeactivitynq?city_id=" + e.cityId,
                    method: "GET",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                        deviceSource: 3,
                        token: m
                    },
                    success: function(a) {
                        r.setData({
                            returnData: a.data.data.lq
                        }), a.data.data.activities ? (console.log("查看是有数据-------", a.data.data.activities.length), 
                        r.setData({
                            returnData: a.data.data.lq,
                            kajuanLength: a.data.data.activities
                        })) : (console.log("没有数据"), r.setData({
                            kajuanLength: void 0
                        }));
                    }
                }), e.searchType) {
                    switch (r.data.tabTxt[0].newname = e.searchName, r.setData({
                        searchCon: e.searchName,
                        tabTxt: r.data.tabTxt
                    }), +e.searchType) {
                      case 0:
                        r.data.tabTxt[0].newname = "", r.setData({
                            tabTxt: r.data.tabTxt
                        }), r.data.postParam.keywords = e.keyWords;
                        break;

                      case 1:
                        r.data.postParam.districtid = e.searchId, r.setData({
                            nameCur1: "区域",
                            nameCur11: e.searchId,
                            nameCur3: "不限",
                            quyuNav3: !1,
                            quYuBar2: 11,
                            quYuBxBar2: 11
                        }), r.getQuYuData(e.searchId);
                        break;

                      case 2:
                        1 == r.data.list_param && (r.data.postParam.sqid = e.searchId), 2 == r.data.list_param && (r.data.postParam.sqids = e.searchId), 
                        r.getQuYuData(e.parentId), r.setData({
                            nameCur1: "区域",
                            nameCur11: e.parentId,
                            nameCur3: e.searchId,
                            quyuNav3: !1,
                            quYuBar2: 11,
                            quYuBxBar2: 11,
                            quYuBar3: 12,
                            quYuBxBar3: 12
                        });
                        break;

                      case 3:
                        1 == r.data.list_param && (r.data.postParam.conmmunityid = e.searchId), 2 == r.data.list_param && (r.data.postParam.communityid = e.searchId), 
                        r.data.tabTxt[0].newname = "", r.setData({
                            tabTxt: r.data.tabTxt
                        });
                        break;

                      case 4:
                        r.data.postParam.lineid = e.searchId;
                        var t = {
                            currentTarget: {
                                dataset: {
                                    barid: "2",
                                    name: "地铁"
                                }
                            }
                        };
                        r.quyuFn(t), r.setData({
                            nameCur1: "地铁",
                            nameCur21: e.searchId,
                            nameCur3: "不限",
                            quyuNav3: !1,
                            quYuBar2: 21,
                            quYuBxBar2: 21
                        }), r.getDiTieData(0), r.getDiTieData(e.searchId);
                        break;

                      case 5:
                        r.data.postParam.stationid = e.searchId, r.setData({
                            nameCur1: "地铁",
                            nameCur21: e.parentId,
                            nameCur3: e.searchId,
                            quyuNav3: !1,
                            quYuBar2: 21,
                            quYuBxBar2: 21,
                            quYuBar3: 22,
                            quYuBxBar3: 22
                        }), r.getDiTieData(0), r.getDiTieData(e.parentId);
                    }
                    console.log("search", r.data.postParam), r.filterData(r.data.postParam);
                } else if (e.condition) {
                    console.log("帮你挑的数据");
                    var c = JSON.parse(e.condition), l = r.data.moreData, u = r.data.tabTxt;
                    c.broom ? c.broomname : "房型", console.log("tab_broom_select", void 0), u[2].newname = c.broomname;
                    var p = r.data.floorTypeList;
                    if (p.map(function(a) {
                        a.broom == c.broom && (a.selected = !0);
                    }), (c.buildarea || c.housetype || c.heading || c.floortype || c.buildyear || c.decoratetype) && (u[3].newname = "更多"), 
                    c.housetype) {
                        u[3].newname = "更多";
                        var g = c.housetypename;
                        console.log("11111111111111111111111111", g), console.log("2222222222", l), l.housetype.map(function(a) {
                            a.code == c.housetype && (a.selected = !0);
                        });
                    }
                    c.toilet && (u[3].newname = "更多");
                    var f = "", D = "不限", b = "不限", h = "", y = "", T = !0, P = 11;
                    (c.sqname || c.districtname) && (f = "区域", D = "", u[0].newname = c.sqname || c.districtname, 
                    c.districtname && (h = c.districtid, c.sqname && (T = !1, r.getQuYuData(c.districtid), 
                    b = c.sqid))), (c.lineName || c.stationName) && (f = "地铁", D = "", P = 21, u[0].newname = c.stationName || c.lineName, 
                    c.lineName && (r.getDiTieData(c.lineid), r.getDiTieData(0), y = c.lineid, c.stationName && (T = !1, 
                    r.getDiTieData(0), b = c.stationid))), r.setData({
                        tabTxt: u,
                        floorTypeList: p,
                        floorType: c.broom,
                        floorTypeName: c.broomname,
                        floorTypeCommit: c.broom,
                        floorTypeNameCommit: c.broomname,
                        nameCur1: f,
                        nameCur2: D,
                        nameCur3: b,
                        nameCur11: h,
                        nameCur21: y,
                        quyuNav3: T,
                        quYuBar2: P,
                        moreData: l
                    }), console.log("351351351", r.data.moreTag), console.log(c), r.getData(c);
                } else r.getData("");
                wx.getLocation({
                    type: "gcj02",
                    altitude: !0,
                    success: function(a) {
                        r.data.dingwei = 1, r.data.latitude = a.latitude, r.data.longitude = a.longitude, 
                        r.data.speed = a.speed, r.data.accuracy = a.accuracy;
                    },
                    fail: function() {
                        r.data.dingwei = 2;
                    },
                    complete: function() {}
                });
            }
        });
    },
    getData: function(t) {
        var e = a.globalData.url_host, o = this, d = "exchange", r = {
            page: o.data.page_num,
            pcount: 15
        }, i = Object.assign(r, t);
        o.setData({
            loadinghide: !1,
            showAllData: !0
        }), console.log("post_data:", i), 1 == o.data.list_param && (d = "exchange"), 2 == o.data.list_param && (d = "rent"), 
        wx.request({
            url: e + "/appapi/" + d + "/" + o.data.city_id + "/v1/prolist",
            method: "POST",
            data: i,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (console.log("data", a.data), 200 == a.data.status) {
                    if (console.log("count : ", a.data.data.count), 0 == a.data.data.count) o.setData({
                        listHidden: !0,
                        houseNo: !1,
                        loadinghide: !0
                    }); else if (a.data.data.count < 15) console.log(a.data.data.count, "小于", 15), o.data.listLock = 2, 
                    o.setData({
                        listHidden: !1,
                        houseNo: !0,
                        list: a.data.data.list,
                        sqinfo: a.data.data.exchangerecord,
                        showAllData: !1,
                        loadinghide: !0
                    }), console.log("exchangerecord1", a.data.data.exchangerecord); else if (o.data.listLock = 1, 
                    o.data.total_page = Math.ceil(a.data.data.count / 15), console.log("total_page", o.data.total_page), 
                    o.data.total_page >= o.data.page_num) {
                        var t = o.data.list.concat(a.data.data.list);
                        o.setData({
                            showAllData: !0,
                            listHidden: !1,
                            houseNo: !0,
                            list: t,
                            sqinfo: a.data.data.exchangerecord,
                            loadinghide: !0
                        }), o.data.page_num += 1, console.log("翻页", o.data.page_num);
                    }
                    1 == o.data.countLock && 1 == o.data.loadinghide && (o.setData({
                        countNum: a.data.data.count,
                        loadingCount: !1
                    }), setTimeout(function() {
                        o.setData({
                            countNum: "",
                            loadingCount: !0
                        });
                    }, 2e3));
                } else o.data.listLock = 2, console.log("msg:", a.data.msg), o.setData({
                    listHidden: !0,
                    houseNo: !1,
                    loadinghide: !0
                });
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    imgError: function(a) {
        var t = {};
        t["list[" + a.target.dataset.index + "].imgurl"] = "https://res.5i5j.com/cache/weixin/common/default_house_list_404.png", 
        this.setData(t);
    },
    imageError: function(a) {
        var t = {};
        t["item.imgurl"] = "https://res.5i5j.com/cache/weixin/common/default_house_list_404.png", 
        this.setData(t);
    },
    filterData: function(a) {
        var t = this;
        console.log("filter", a), console.log(a.othertype), a.othertype && (console.log("this.data.postParam", this.data.postParam), 
        this.data.postParam.othertype = a.othertype), t.data.page_num = 1, t.getData(a);
    },
    filterTabFn: function(a) {
        var t = this, e = [ !0, !0, !0, !0 ], o = a.currentTarget.dataset.index;
        if (0 == t.data.tab[o]) {
            switch (o) {
              case 1:
                t.setData({
                    curTab: 2
                });
                break;

              case 2:
                t.setData({
                    curTab: 3
                });
                break;

              case 3:
                t.setData({
                    curTab: 4
                });
            }
            console.log(t.data.curTab), t.filterMaskFn();
        } else {
            var d = "";
            e[o] = !this.data.tab[o], d = this.data.tab[o] ? a.currentTarget.dataset.name : "", 
            console.log(d), t.setData({
                tab: e,
                filterMask: e[o],
                filnav: d,
                search: !1
            });
        }
    },
    filterMaskFn: function() {
        var a = this, t = this.data.curTab;
        switch (console.log("cur", t), t) {
          case 2:
            a.emptyPriceFn(), "" == a.data.price_val && a.setData({
                price_val: a.data.postParam.price,
                price_name: a.data.price_name_commit,
                minPriceInput: a.data.minPrice,
                maxPriceInput: a.data.maxPrice,
                minPriceData: a.data.minPrice,
                maxPriceData: a.data.maxPrice
            });
            break;

          case 3:
            a.emptyfloorType(), a.setData({
                floorType: a.data.floorTypeCommit,
                floorTypeName: a.data.floorTypeNameCommit
            });
            var e = a.data.floorTypeList;
            e.forEach(function(t, o) {
                a.data.floorType.indexOf(t.broom) > -1 && (e[o].selected = !0);
            }), "" == a.data.floorTypeName ? a.data.tabTxt[2].newname = "" : a.data.tabTxt[2].newname = a.data.floorTypeName, 
            console.log("tab", a.data.tabTxt), a.setData({
                floorTypeList: e,
                tabTxt: a.data.tabTxt
            }), console.log(a.data.floorType + "==" + a.data.floorTypeName);
            break;

          case 4:
            console.log("mores", JSON.stringify(a.data.moresCommit)), a.moreReset(), "{}" != JSON.stringify(a.data.moresCommit) && (console.log("有条件", a.data.moresNameCommit), 
            a.setData({
                mores: a.data.moresCommit,
                moreData: a.data.moresNameCommit,
                moreTag: a.data.moresTagCommit,
                tagData: a.data.moresTagCommit,
                moreCurName: a.data.moresBuildateCommit
            })), "{}" == JSON.stringify(a.data.mores) ? a.data.tabTxt[3].newname = "" : a.data.tabTxt[3].newname = " 更多", 
            a.setData({
                tabTxt: a.data.tabTxt
            }), console.log(a.data.mores), console.log(a.data.moreData);
        }
        a.setData({
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            sortcon: !0,
            zindex: 10,
            filnav: ""
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
            break;

          case 3:
            console.log("barid:", e.barid), t.setData({
                quyuNav3: !0,
                nameCur1: e.name,
                nameCur2: "不限",
                nameCur11: "",
                nameCur21: "",
                nameCur31: "",
                quYuBar2: 31,
                quYuBxBar2: 31,
                filterArea: [ {
                    nearid: 1,
                    name: "1km内"
                }, {
                    nearid: 2,
                    name: "2km内"
                }, {
                    nearid: 5,
                    name: "5km内"
                } ]
            });
        }
    },
    quyuFn2: function(a) {
        var t = this, e = a.currentTarget.dataset;
        if (1 == t.data.list_param) switch (+e.barid) {
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
            console.log("地铁2:", t.data.postParam), t.getDiTieData(e.dtlineid), t.setData({
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
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                quYuBar3: 32,
                quYuBxBar3: 32,
                loadbarid: 32,
                searchCon: "请输入小区或商圈名称",
                list: []
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
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1
            }));
        }
        if (2 == t.data.list_param) switch (+e.barid) {
          case 11:
            t.data.postParam.keywords = "", t.data.postParam.lineid = "", t.data.postParam.stationid = "", 
            t.data.postParam.nearby = "", t.data.postParam.communityid = "", t.data.postParam.districtids = e.districtid, 
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
            t.data.postParam.keywords = "", t.data.postParam.districtids = "", t.data.postParam.sqids = "", 
            t.data.postParam.nearby = "", t.data.postParam.communityid = "", t.data.postParam.lineid = e.dtlineid, 
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
            });
            break;

          case 31:
            t.data.tabTxt[0].newname = e.name, 1 == t.data.dingwei ? (t.setData({
                quyuNav3: !0,
                nameCur31: e.nearid,
                nameCur2: "",
                quyuName: e.name,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                quYuBar3: 32,
                quYuBxBar3: 32,
                loadbarid: 32,
                searchCon: "请输入小区或商圈名称",
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.districtids = "", t.data.postParam.sqids = "", 
            t.data.postParam.lineid = "", t.data.postParam.stationid = "", t.data.postParam.communityid = "", 
            t.data.postParam.nearby = e.nearid, t.data.postParam.location = t.data.longitude + "," + t.data.latitude, 
            t.filterData(t.data.postParam)) : (wx.showToast({
                title: "定位失败,请授权位置信息",
                icon: "none"
            }), t.setData({
                nameCur31: e.nearid,
                nameCur2: "",
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1
            }));
        }
    },
    quyuFn3: function(a) {
        var t = this, e = a.currentTarget.dataset;
        if (t.data.tabTxt[0].newname = e.name, 1 == t.data.list_param) switch (+e.barid) {
          case 12:
            t.setData({
                nameCur3: e.sqid,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 12,
                shangquan: e.name,
                searchCon: "请输入小区或商圈名称",
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.districtid = "", t.data.postParam.sqid = e.sqid, 
            t.data.postParam.stationid = "", t.data.postParam.conmmunityid = "", t.filterData(t.data.postParam), 
            console.log("区域三级", t.data.postParam);
            break;

          case 22:
            t.setData({
                nameCur3: e.sqid,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 22,
                searchCon: "请输入小区或商圈名称",
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.sqid = "", t.data.postParam.conmmunityid = "", 
            t.data.postParam.stationid = e.sqid, t.filterData(t.data.postParam), console.log("地铁三级", t.data.postParam);
        }
        if (2 == t.data.list_param) switch (+e.barid) {
          case 12:
            t.setData({
                nameCur3: e.sqid,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 12,
                shangquan: e.name,
                searchCon: "请输入小区或商圈名称",
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.districtids = "", t.data.postParam.sqids = e.sqid, 
            t.data.postParam.stationid = "", t.data.postParam.communityid = "", t.filterData(t.data.postParam), 
            console.log("区域三级", t.data.postParam);
            break;

          case 22:
            t.setData({
                nameCur3: e.sqid,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 22,
                searchCon: "请输入小区或商圈名称",
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.sqids = "", t.data.postParam.communityid = "", 
            t.data.postParam.stationid = e.sqid, t.filterData(t.data.postParam), console.log("地铁三级", t.data.postParam);
        }
    },
    buxianFn2: function(a) {
        var t = this;
        t.data.tabTxt[0].newname = "", t.setData({
            nameCur2: a.currentTarget.dataset.name,
            tabTxt: t.data.tabTxt,
            filnav: "",
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            quyuNav3: !0,
            loadbarid: 0,
            nameCur3: "",
            nameCur11: "",
            nameCur21: "",
            nameCur31: "",
            searchCon: "请输入小区或商圈名称",
            list: []
        }), 1 == t.data.list_param && (t.data.postParam.keywords = "", t.data.postParam.districtid = "", 
        t.data.postParam.sqid = "", t.data.postParam.lineid = "", t.data.postParam.stationid = "", 
        t.data.postParam.nearby = "", t.data.postParam.location = "", t.data.postParam.conmmunityid = "", 
        t.filterData(t.data.postParam), console.log("buxian2", t.data.postParam)), 2 == t.data.list_param && (t.data.postParam.keywords = "", 
        t.data.postParam.districtids = "", t.data.postParam.sqids = "", t.data.postParam.lineid = "", 
        t.data.postParam.stationid = "", t.data.postParam.nearby = "", t.data.postParam.location = "", 
        t.data.postParam.communityid = "", t.filterData(t.data.postParam), console.log("buxian2", t.data.postParam));
    },
    buxianFn3: function(a) {
        var t = this, e = a.currentTarget.dataset;
        if (t.data.tabTxt[0].newname = t.data.quyuName, 1 == t.data.list_param) switch (+e.bxbarid) {
          case 12:
            t.setData({
                nameCur3: a.currentTarget.dataset.name,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 12,
                searchCon: "请输入小区或商圈名称",
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.sqid = "", t.data.postParam.conmmunityid = "", 
            t.data.postParam.districtid = t.data.quyuId, console.log("区域不限3：", t.data.postParam), 
            t.filterData(t.data.postParam);
            break;

          case 22:
            t.setData({
                nameCur3: a.currentTarget.dataset.name,
                quyuSqId: "",
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 22,
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.stationid = "", t.data.postParam.conmmunityid = "", 
            t.data.postParam.lineid = t.data.quyuId, console.log("地铁不限3：", t.data.postParam), 
            t.filterData(t.data.postParam);
        }
        if (2 == t.data.list_param) switch (+e.bxbarid) {
          case 12:
            t.setData({
                nameCur3: a.currentTarget.dataset.name,
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 12,
                searchCon: "请输入小区或商圈名称",
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.sqids = "", t.data.postParam.communityid = "", 
            t.data.postParam.districtids = t.data.quyuId, console.log("区域不限3：", t.data.postParam), 
            t.filterData(t.data.postParam);
            break;

          case 22:
            t.setData({
                nameCur3: a.currentTarget.dataset.name,
                quyuSqId: "",
                tabTxt: t.data.tabTxt,
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 22,
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.stationid = "", t.data.postParam.communityid = "", 
            t.data.postParam.lineid = t.data.quyuId, console.log("地铁不限3：", t.data.postParam), 
            t.filterData(t.data.postParam);
        }
    },
    getQuYuData: function(t) {
        var e = a.globalData.url_host, o = this, d = {};
        wx.request({
            url: e + "/appapi/region/" + o.data.city_id + "/v1/list",
            method: "POST",
            data: d,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    for (var e = [], d = 0; d < a.data.data.length; d++) e[a.data.data[d].id] = a.data.data[d].sqlist;
                    0 == t ? o.setData({
                        filterArea: a.data.data
                    }) : o.setData({
                        filterArea2: e[t]
                    });
                } else console.log("204");
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    getDiTieData: function(t) {
        var e = a.globalData.url_host, o = this, d = {};
        wx.request({
            url: e + "/appapi/subway/" + o.data.city_id + "/v1/list",
            method: "POST",
            data: d,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    for (var e = [], d = 0; d < a.data.data.length; d++) e[a.data.data[d].lineid] = a.data.data[d].stationlist;
                    console.log("stArr", e), 0 == t ? o.setData({
                        filterArea: a.data.data
                    }) : o.setData({
                        filterArea2: e[t]
                    });
                } else console.log("204");
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {
                wx.hideLoading();
            }
        });
    },
    filterPricesData: function() {
        var a = this, t = a.data.city_id;
        1 == a.data.list_param ? 1 == t || 9 == t ? a.data.pricesData = [ {
            code: "0,200",
            name: "200万以下"
        }, {
            code: "200,250",
            name: "200-250万"
        }, {
            code: "250,300",
            name: "250-300万"
        }, {
            code: "300,400",
            name: "300-400万"
        }, {
            code: "400,500",
            name: "400-500万"
        }, {
            code: "500,600",
            name: "500-600万"
        }, {
            code: "600,800",
            name: "600-800万"
        }, {
            code: "800,1000",
            name: "800-1000万"
        }, {
            code: "1000,0",
            name: "1000万以上"
        } ] : 2 == t || 8 == t || 5 == t || 20 == t || 7 == t || 18 == t || 19 == t ? a.data.pricesData = [ {
            code: "0,50",
            name: "50万以下"
        }, {
            code: "50,80",
            name: "50-80万"
        }, {
            code: "80,100",
            name: "80-100万"
        }, {
            code: "100,120",
            name: "100-120万"
        }, {
            code: "120,150",
            name: "120-150万"
        }, {
            code: "150,200",
            name: "150-200万"
        }, {
            code: "200,300",
            name: "200-300万"
        }, {
            code: "300,500",
            name: "300-500万"
        }, {
            code: "500,0",
            name: "500万以上"
        } ] : 15 != t && 22 != t && 24 != t && 6 != t && 16 != t || (a.data.pricesData = [ {
            code: "0,50",
            name: "50万以下"
        }, {
            code: "50,80",
            name: "50-80万"
        }, {
            code: "80,100",
            name: "80-100万"
        }, {
            code: "100,120",
            name: "100-120万"
        }, {
            code: "120,150",
            name: "120-150万"
        }, {
            code: "150,200",
            name: "150-200万"
        }, {
            code: "200,300",
            name: "200-300万"
        }, {
            code: "300,0",
            name: "300万以上"
        } ]) : 2 == a.data.list_param && (1 == t || 2 == t || 5 == t || 7 == t || 8 == t || 9 == t ? a.data.pricesData = [ {
            code: "0,1500",
            name: "1500元以下"
        }, {
            code: "1500,2500",
            name: "1500-2500元"
        }, {
            code: "2500,3500",
            name: "2500-3500元"
        }, {
            code: "3500,5000",
            name: "3500-5000元"
        }, {
            code: "5000,8000",
            name: "5000-8000元"
        }, {
            code: "8000,10000",
            name: "8000-10000元"
        }, {
            code: "10000,0",
            name: "10000元以上"
        } ] : 16 != t && 24 != t && 20 != t && 22 != t && 15 != t && 6 != t && 19 != t && 18 != t || (a.data.pricesData = [ {
            code: "0,1000",
            name: "1000元以下"
        }, {
            code: "1000,1500",
            name: "1000-1500元"
        }, {
            code: "1500,2000",
            name: "1500-2000元"
        }, {
            code: "2000,2500",
            name: "2000-2500元"
        }, {
            code: "2500,3000",
            name: "2500-3000元"
        }, {
            code: "3000,4000",
            name: "3000-4000元"
        }, {
            code: "4000,5000",
            name: "4000-5000元"
        }, {
            code: "5000,0",
            name: "5000元以上"
        } ])), a.setData({
            filterPrices: a.data.pricesData
        });
    },
    filterPricesFn: function(a) {
        var t = this, e = a.currentTarget.dataset;
        console.log(e), t.setData({
            price_name: e.name,
            price_val: e.code,
            minPriceInput: "",
            maxPriceInput: "",
            minPriceData: "",
            maxPriceData: "",
            curTab: 2
        });
    },
    priceMin: function(a) {
        this.setData({
            minPriceData: a.detail.value,
            price_name: ""
        });
    },
    priceMax: function(a) {
        this.setData({
            maxPriceData: a.detail.value,
            price_name: ""
        });
    },
    emptyPriceFn: function(a) {
        var t = this;
        t.setData({
            tabTxt: t.data.tabTxt,
            minPriceInput: "",
            maxPriceInput: "",
            price_name: "",
            price_val: "",
            maxPriceData: "",
            minPriceData: ""
        }), console.log(t.data.price_name + "==" + t.data.price_val), console.log(t.data.minPriceInput + "==" + t.data.maxPriceInput), 
        console.log(t.data.minPriceData + "==" + t.data.maxPriceData);
    },
    priceConfirm: function(a) {
        var t = this, e = a.currentTarget.dataset, o = parseInt(e.valuemin), d = parseInt(e.valuemax);
        o && !d && (1 == t.data.list_param ? t.data.price_name = o + "万以上" : t.data.price_name = o + "元以上", 
        t.data.price_val = o + ",99999999", t.setData({
            minPriceInput: o,
            maxPriceInput: ""
        })), d && !o && (1 == t.data.list_param ? t.data.price_name = d + "万以下" : t.data.price_name = d + "元以下", 
        t.data.price_val = "0," + d, t.setData({
            minPriceInput: "",
            maxPriceInput: d
        })), o && d && (1 == t.data.list_param ? t.data.price_name = o + "-" + d + "万" : t.data.price_name = o + "-" + d + "元", 
        t.data.price_val = o + "," + d, t.setData({
            minPriceInput: o,
            maxPriceInput: d
        })), o || d || t.setData({
            minPriceInput: o,
            maxPriceInput: d
        }), "" == t.data.price_val && (t.data.price_name = ""), t.data.tabTxt[1].newname = t.data.price_name, 
        t.setData({
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            list: [],
            price_name_commit: t.data.price_name,
            minPrice: o,
            maxPrice: d
        }), t.data.postParam.price = t.data.price_val, console.log("价格确定", t.data.price_val), 
        t.filterData(t.data.postParam);
    },
    filterFxingData: function() {
        var a = this;
        a.data.fxingData = [ {
            broom: 1,
            selected: !1,
            name: "一室"
        }, {
            broom: 2,
            selected: !1,
            name: "二室"
        }, {
            broom: 3,
            selected: !1,
            name: "三室"
        }, {
            broom: 4,
            selected: !1,
            name: "四室"
        }, {
            broom: 5,
            selected: !1,
            name: "五室"
        }, {
            broom: 9,
            selected: !1,
            name: "五室以上"
        } ], a.setData({
            filterFxing: a.data.fxingData
        });
    },
    fxingConfirm: function(a) {
        var t = this, e = a.currentTarget.dataset.fxingname, o = [];
        o.push(e), t.data.tabTxt[2].newname = e ? o : "", t.setData({
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            list: []
        }), console.log("房型 ", t.data.postParam), t.filterData(t.data.postParam);
    },
    filtermoreData: function() {
        var t = a.globalData.url_host, e = this, o = {
            cityid: e.data.city_id
        };
        wx.request({
            url: t + "/appapi/common/label",
            method: "POST",
            data: o,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    1 == e.data.list_param && (e.data.tagData = a.data.data.WEB_SALE_LABEL), 2 == e.data.list_param && (e.data.tagData = a.data.data.WEB_RENT_LABEL), 
                    e.data.tagData.forEach(function(a, t) {
                        a.selected = !1;
                    }), e.setData({
                        moreTag: e.data.tagData
                    }), console.log("tag", e.data.moreTag);
                    var t = e.data.moreTag, o = e.data.postParam, d = e.data.tabTxt;
                    o.tag && (d[3].newname = "更多", t.map(function(a) {
                        a.code == o.tag && (a.selected = !0);
                    }), e.setData({
                        tabTxt: d,
                        moreTag: t
                    }), console.log(e.data.tabTxt), console.log(e.data.moreTag));
                }
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    setMoreData: function() {
        var a = this;
        console.log("sadadadssadas", a.data.list_param);
        var t = [];
        1 == a.data.list_param && (t = {
            toilet: [ {
                code: 1,
                selected: !1,
                name: "一卫"
            }, {
                code: 2,
                selected: !1,
                name: "两卫"
            }, {
                code: 3,
                selected: !1,
                name: "三卫"
            }, {
                code: 0,
                selected: !1,
                name: "三卫以上"
            } ],
            buildarea: [ {
                code: "0,50",
                selected: !1,
                name: "50㎡以下"
            }, {
                code: "50,70",
                selected: !1,
                name: "50-70㎡"
            }, {
                code: "70,90",
                selected: !1,
                name: "70-90㎡"
            }, {
                code: "90,110",
                selected: !1,
                name: "90-110㎡"
            }, {
                code: "110,130",
                selected: !1,
                name: "110-130㎡"
            }, {
                code: "130,150",
                selected: !1,
                name: "130-150㎡"
            }, {
                code: "150,200",
                selected: !1,
                name: "150-200㎡"
            }, {
                code: "200,1000",
                selected: !1,
                name: "200以上"
            } ],
            heading: [ {
                code: 10,
                selected: !1,
                name: "南北"
            }, {
                code: 3,
                selected: !1,
                name: "南"
            }, {
                code: 1,
                selected: !1,
                name: "东"
            }, {
                code: 2,
                selected: !1,
                name: "西"
            }, {
                code: 4,
                selected: !1,
                name: "北"
            } ],
            buildage: [ {
                code: 1,
                selected: !1,
                name: "5年以内"
            }, {
                code: 2,
                selected: !1,
                name: "10年以内"
            }, {
                code: 3,
                selected: !1,
                name: "15年以内"
            }, {
                code: 4,
                selected: !1,
                name: "20年以内"
            }, {
                code: 0,
                selected: !1,
                name: "20年以上"
            } ],
            floortype: [ {
                code: -1,
                selected: !1,
                name: "底层"
            }, {
                code: 1,
                selected: !1,
                name: "低楼层"
            }, {
                code: 2,
                selected: !1,
                name: "中楼层"
            }, {
                code: 3,
                selected: !1,
                name: "高楼层"
            }, {
                code: 999,
                selected: !1,
                name: "顶层"
            } ],
            decoratetype: [ {
                code: 3,
                selected: !1,
                name: "精装修"
            }, {
                code: 2,
                selected: !1,
                name: "普通装修"
            }, {
                code: 1,
                selected: !1,
                name: "毛坯房"
            } ],
            housetype: [ {
                code: 1,
                selected: !1,
                name: "普通住宅"
            }, {
                code: 2,
                selected: !1,
                name: "别墅"
            }, {
                code: 3,
                selected: !1,
                name: "其他"
            } ]
        }), 2 == a.data.list_param && (t = {
            renttype: [ {
                code: 1,
                selected: !1,
                name: "整租"
            }, {
                code: 2,
                selected: !1,
                name: "合租"
            } ],
            buildarea: [ {
                code: "0,50",
                selected: !1,
                name: "50㎡以下"
            }, {
                code: "50,70",
                selected: !1,
                name: "50-70㎡"
            }, {
                code: "70,90",
                selected: !1,
                name: "70-90㎡"
            }, {
                code: "90,110",
                selected: !1,
                name: "90-110㎡"
            }, {
                code: "110,130",
                selected: !1,
                name: "110-130㎡"
            }, {
                code: "130,150",
                selected: !1,
                name: "130-150㎡"
            }, {
                code: "150,200",
                selected: !1,
                name: "150-200㎡"
            }, {
                code: "200,1000",
                selected: !1,
                name: "200以上"
            } ],
            heading: [ {
                code: 10,
                selected: !1,
                name: "南北"
            }, {
                code: 3,
                selected: !1,
                name: "南"
            }, {
                code: 1,
                selected: !1,
                name: "东"
            }, {
                code: 2,
                selected: !1,
                name: "西"
            }, {
                code: 4,
                selected: !1,
                name: "北"
            } ],
            decoratetype: [ {
                code: 3,
                selected: !1,
                name: "精装修"
            }, {
                code: 2,
                selected: !1,
                name: "普通装修"
            }, {
                code: 1,
                selected: !1,
                name: "毛坯房"
            } ],
            floortype: [ {
                code: -1,
                selected: !1,
                name: "底层"
            }, {
                code: 1,
                selected: !1,
                name: "低楼层"
            }, {
                code: 2,
                selected: !1,
                name: "中楼层"
            }, {
                code: 3,
                selected: !1,
                name: "高楼层"
            }, {
                code: 999,
                selected: !1,
                name: "顶层"
            } ],
            othertype: [ {
                code: 1,
                selected: !1,
                name: "业主直租"
            }, {
                code: 3,
                selected: !1,
                name: "相寓"
            } ]
        }), a.setData({
            moreData: t
        });
    },
    floorTypeData: function() {
        this.setData({
            floorTypeList: [ {
                broom: 1,
                selected: !1,
                name: "一室"
            }, {
                broom: 2,
                selected: !1,
                name: "二室"
            }, {
                broom: 3,
                selected: !1,
                name: "三室"
            }, {
                broom: 4,
                selected: !1,
                name: "四室"
            }, {
                broom: 5,
                selected: !1,
                name: "五室"
            }, {
                broom: 9,
                selected: !1,
                name: "五室以上"
            } ]
        });
    },
    floorTypeFn: function(a) {
        var t = this;
        console.log(t.data.floorTypeList);
        var e, o = a.currentTarget.dataset.index, d = [], r = [];
        t.data.floorTypeList[o].selected = !t.data.floorTypeList[o].selected, t.data.floorTypeList.forEach(function(a, t) {
            a.selected && (r.push(a.broom), d.push(a.name));
        }), e = r.join(), t.setData({
            floorType: e,
            floorTypeName: d,
            floorTypeList: t.data.floorTypeList,
            curTab: 3
        });
    },
    emptyfloorType: function(a) {
        var t = this;
        t.data.tabTxt[2].newname = "", t.setData({
            tabTxt: t.data.tabTxt,
            floorType: "",
            floorTypeName: ""
        });
        for (var e in t.data.floorTypeList) t.data.floorTypeList[e].selected = !1;
        t.setData({
            floorTypeList: t.data.floorTypeList
        }), console.log(t.data.floorTypeName + "==" + t.data.floorType);
    },
    floorTypeConfirm: function(a) {
        var t = this, e = t.data.floorType, o = t.data.floorTypeName;
        console.log(e + "==" + o), t.data.tabTxt[2].newname = "" != o ? o : "", t.data.postParam.broom = e, 
        t.setData({
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            list: [],
            floorTypeCommit: e,
            floorTypeNameCommit: o
        }), console.log(t.data.tabTxt), console.log("楼型", t.data.postParam), t.filterData(t.data.postParam);
    },
    moreFn: function(a) {
        console.log(a);
        var t, e, o = this, d = a.currentTarget.dataset, r = d.index, i = d.valname, s = [];
        switch (this.setData({
            curTab: 4
        }), console.log("+currentData.moreid", +d.moreid), +d.moreid) {
          case 1:
            o.data.moreData[i][r].selected = !o.data.moreData[i][r].selected, o.data.moreData[i].forEach(function(a, t) {
                a.selected && s.push(a.code);
            }), t = s.join(), console.log(t), o.data.mores[i] = t, o.setData({
                moreData: o.data.moreData,
                moresName: o.data.moreData
            });
            break;

          case 2:
            console.log("tag", o.data.tagData), o.data.tagData[r].selected = !o.data.tagData[r].selected, 
            o.data.tagData.forEach(function(a, t) {
                a.selected && s.push(a.code);
            }), t = s.join(), o.data.mores.tag = t, o.setData({
                moreTag: o.data.tagData,
                moresName: o.data.moreData
            });
            break;

          case 3:
            o.data.moreData[i][r].selected = !o.data.moreData[i][r].selected, o.data.moreData[i][r].selected ? (e = o.data.moreData[i][r].code, 
            o.setData({
                moreCurName: d.name
            })) : (o.setData({
                moreCurName: ""
            }), e = ""), o.setData({
                moresName: o.data.moreData
            }), o.data.mores.buildage = e, console.log(o.data.moresName);
        }
        console.log("more", o.data.mores), console.log("name", o.data.moresName);
    },
    moreReset: function(a) {
        var t = this;
        for (var e in t.data.moreData) {
            for (var o in t.data.moreData[e]) t.data.moreData[e][o].selected = !1;
            t.data.postParam[e] = [];
        }
        for (var o in t.data.tagData) t.data.tagData[o].selected = !1;
        for (var o in t.data.moreData.buildage) t.data.moreData.buildage[o].selected = !1;
        t.data.tabTxt[3].newname = "", t.setData({
            tabTxt: t.data.tabTxt,
            moreData: t.data.moreData,
            moreTag: t.data.tagData,
            moreCurName: "",
            filnav: "",
            mores: {},
            moresName: {}
        }), console.log("data", t.data.moreData);
    },
    moreConfirm: function(a) {
        var t = this;
        "{}" == JSON.stringify(t.data.mores) ? t.data.tabTxt[3].newname = "" : t.data.tabTxt[3].newname = " 更多", 
        t.setData({
            filnav: "",
            tab: [ !0, !0, !0, !0 ],
            tabTxt: t.data.tabTxt,
            filterMask: !0,
            search: !1,
            list: [],
            moresCommit: t.data.mores,
            moresNameCommit: t.data.moresName,
            moresTagCommit: t.data.moreTag,
            moresBuildateCommit: t.data.moreCurName
        }), t.filterData(t.data.mores);
    },
    preventTouchMove: function() {},
    sortConData: function() {
        var a = this;
        1 == a.data.list_param && (a.data.sortData = [ {
            id: "",
            name: "默认排序"
        }, {
            id: 1,
            name: "总价从低到高"
        }, {
            id: 2,
            name: "总价从高到低"
        }, {
            id: 3,
            name: "单价从低到高"
        }, {
            id: 4,
            name: "单价从高到低"
        }, {
            id: 5,
            name: "最新发布"
        } ]), 2 == a.data.list_param && (a.data.sortData = [ {
            id: "",
            name: "默认排序"
        }, {
            id: 1,
            name: "租金从低到高"
        }, {
            id: 2,
            name: "租金从高到低"
        }, {
            id: 3,
            name: "面积从小到大"
        }, {
            id: 4,
            name: "面积从大到小"
        }, {
            id: 5,
            name: "最新发布"
        } ]), a.setData({
            sortlist: a.data.sortData
        });
    },
    sortbtnFn: function() {
        this.setData({
            sortcon: !1,
            filterMask: !1,
            zindex: 13
        });
    },
    sortlistFn: function(a) {
        var t = this, e = a.currentTarget.dataset;
        t.setData({
            sortcon: !0,
            filterMask: !0,
            zindex: 10,
            sortCurName: e.name,
            list: []
        }), t.data.postParam.psort = e.sortid, t.filterData(t.data.postParam);
    },
    loadMore: function(a) {
        var t = this;
        if (t.data.countLock = 2, t.data.total_page < t.data.page_num && (console.log("没有新数据"), 
        t.setData({
            showAllData: !1,
            loadinghide: !0
        }), t.data.listLock = 2), 2 == t.data.listLock) return t.setData({
            loadinghide: !0
        }), !1;
        t.setData({
            loadinghide: !1
        }), console.log("self.data.postParam", t.data.postParam), t.getData(t.data.postParam);
    },
    toDetail: function(a) {
        var t = this, e = parseInt(a.currentTarget.dataset.index);
        console.log("index", e);
        var o = t.data.list[e].housesid, d = t.data.list[e].cityid;
        1 == t.data.list_param && wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + o + "&cityId=" + d
        }), 2 == t.data.list_param && wx.navigateTo({
            url: "../zufang_detail/zufang_detail?houseId=" + o + "&cityId=" + d
        });
    },
    sqHuodong: function() {
        var t = this, e = a.globalData.url_host, o = wx.getStorageSync("loginStatus"), d = wx.getStorageSync("userInfo");
        if (console.log("index--token----", d), "1" == o) r = d.token; else var r = "";
        console.log("查看data---"), wx.request({
            url: e + "/event/activeactivitynq?city_id=" + t.data.city_id,
            method: "GET",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                token: r
            },
            success: function(a) {
                200 == a.data.status && (console.log("详情查看是否领取-------", a), 1 == a.data.data.lq ? (console.log("跳转领取"), 
                wx.navigateTo({
                    url: "../siqing/lingqu?cityId=" + t.data.city_id + "&lingqule=false"
                })) : (console.log("跳转未领取"), wx.redirectTo({
                    url: "../siqing/siqing?cityId=" + t.data.city_id + "&returnData=" + a.data.data.lq
                })));
            }
        });
    },
    kaiqihudong: function() {
        var t = this, e = (wx.getStorageSync("loginStatus"), wx.getStorageSync("userInfo")), o = a.globalData.url_host;
        wx.request({
            url: o + "/event/v1/homenq",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                deviceId: e.uid
            },
            data: {
                cityid: t.data.city_id,
                userid: e.uid
            },
            success: function(a) {
                console.log("调用接口了-------", a), console.log("调用接口了2-------", a.data.msg), 204 == a.data.status ? (console.log("res.data.data.msg---", a.data.status), 
                t.setData({
                    xiaohb: !0
                })) : t.setData({
                    xiaohb: !1
                });
            }
        });
    },
    toSearch: function(a) {
        var t = this, e = "";
        "请输入小区或商圈名称" != t.data.searchCon && (e = t.data.searchCon), 8 == getCurrentPages().length ? wx.redirectTo({
            url: "../search/search?cityId=" + t.data.city_id + "&searchInp=" + e + "&listParam=" + t.data.list_param + "&searchParam=2"
        }) : wx.navigateTo({
            url: "../search/search?cityId=" + t.data.city_id + "&searchInp=" + e + "&listParam=" + t.data.list_param + "&searchParam=2"
        });
    },
    delInp: function() {
        var a = this;
        a.data.tabTxt[0].newname = "", a.setData({
            searchCon: "请输入小区或商圈名称",
            tabTxt: a.data.tabTxt,
            list: []
        }), a.data.postParam.districtid = "", a.data.postParam.sqid = "", a.data.postParam.conmmunityid = "", 
        a.data.postParam.lineid = "", a.data.postParam.stationid = "", console.log(a.data.postParam), 
        a.filterData();
    },
    tel: function(a) {
        var t = a.currentTarget.id;
        wx.makePhoneCall({
            phoneNumber: t,
            success: function() {
                console.log("拨打电话成功!");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    brokerDeatil: function(a) {
        var t = this, e = a.currentTarget.dataset.brokerid;
        a.currentTarget.dataset.citycode;
        console.log(t.data.cityId), wx.navigateTo({
            url: "../broker_detail/brokerDetail?brokerId=" + e + "&cityId=" + t.data.city_id + "&citycode="
        });
    },
    communityDetail: function(a) {
        var t = this, e = parseInt(a.currentTarget.dataset.communityid), o = t.data.city_id;
        wx.navigateTo({
            url: "../community_detail/comDetail?communityId=" + e + "&cityId=" + o
        });
    },
    onReady: function() {
        var a = this;
        1 == a.data.list_param && e("setPage", {
            pagename: "房源列表页",
            businessline_pvar: "二手房"
        }), 2 == a.data.list_param && e("setPage", {
            pagename: "房源列表页",
            businessline_pvar: "租房"
        });
    }
});