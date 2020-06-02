var a = getApp(), t = require("../../sdk/dingxiang.js"), e = require("../../utils/gio-minp/index.js").default, o = require("../../sdk/gioConfig.js").default;

e("setConfig", o), Page({
    data: {
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
        filterFxing: [],
        fxingData: [],
        pricesData: [],
        moreTag: [],
        moreCurName: "",
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
        floorAge: "",
        floorAgeName: "",
        floorAgeCommit: "",
        floorAgeNameCommit: ""
    },
    onLoad: function(e) {
        var o = this;
        new t({
            appId: a.globalData.dxAppId
        }, function(a, t) {
            if (a) console.log(a); else {
                o.setData({
                    dxDeviceId: t
                });
                var r = o, i = [];
                wx.setNavigationBarTitle({
                    title: "小区"
                }), i = [ {
                    name: "区域",
                    navselected: !1
                }, {
                    name: "均价",
                    navselected: !1
                }, {
                    name: "楼型",
                    navselected: !1
                }, {
                    name: "楼龄",
                    navselected: !1
                } ], r.setData({
                    tabTxt: i,
                    city_id: e.cityId,
                    nameCur2: "不限",
                    nameCur1: "区域",
                    quYuBar2: 11,
                    quYuBxBar2: 11
                }), r.getQuYuData(0), r.filterPricesData(), r.floorTypeData(), r.filtermoreData(), 
                r.sortConData(), console.log(e.searchType), e.searchType ? (r.data.tabTxt[0].newname = e.searchName, 
                r.setData({
                    searchCon: e.searchName,
                    tabTxt: r.data.tabTxt
                }), r.data.tabTxt[0].newname = "", r.setData({
                    tabTxt: r.data.tabTxt
                }), r.data.postParam.keywords = e.keyWords, r.filterData(r.data.postParam)) : r.getData("");
            }
        });
    },
    getData: function(t) {
        var e = a.globalData.url_host, o = this, r = {
            page: o.data.page_num,
            pcount: 15
        }, i = Object.assign(r, t);
        o.setData({
            loadinghide: !1,
            showAllData: !0
        }), wx.request({
            url: e + "/appapi/community/" + o.data.city_id + "/v1/list",
            method: "POST",
            data: i,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (console.log(a.data.data), 200 == a.data.status) {
                    if (0 == a.data.data.count) o.setData({
                        listHidden: !0,
                        houseNo: !1,
                        loadinghide: !0
                    }); else if (a.data.data.count < 15) o.data.listLock = 2, o.setData({
                        listHidden: !1,
                        houseNo: !0,
                        list: a.data.data.list,
                        showAllData: !1,
                        loadinghide: !0
                    }); else if (o.data.listLock = 1, o.data.total_page = Math.ceil(a.data.data.count / 15), 
                    o.data.total_page >= o.data.page_num) {
                        var t = o.data.list.concat(a.data.data.list);
                        o.setData({
                            showAllData: !0,
                            listHidden: !1,
                            houseNo: !0,
                            list: t,
                            loadinghide: !0
                        }), o.data.page_num += 1;
                    }
                    console.log(o.data.tabTxt), 1 == o.data.countLock && 1 == o.data.loadinghide && (o.setData({
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
        t["v.brokerInfo.join_head_img"] = "https://res.5i5j.com/cache/weixin/common/default_house_list_404.png", 
        this.setData(t);
    },
    filterData: function(a) {
        var t = this;
        t.data.page_num = 1, t.getData(a);
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
            var r = "";
            e[o] = !this.data.tab[o], r = this.data.tab[o] ? a.currentTarget.dataset.name : "", 
            t.setData({
                tab: e,
                filterMask: e[o],
                filnav: r,
                search: !1
            });
        }
    },
    filterMaskFn: function() {
        var a = this, t = this.data.curTab;
        switch (console.log("curs1", t), t) {
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
            a.setData({
                floorTypeList: e,
                tabTxt: a.data.tabTxt
            }), console.log(a.data.floorType + "==" + a.data.floorTypeName);
            break;

          case 4:
            a.emptyLl(), a.setData({
                floorAge: a.data.floorAgeCommit,
                floorAgeName: a.data.floorAgeNameCommit
            });
            var o = a.data.buildage;
            console.log("bui", o), o.forEach(function(t, e) {
                "" != a.data.floorAge && a.data.floorAge == o[e].code && (o[e].selected = !0);
            }), console.log("buis", o), "" == a.data.floorAgeName ? a.data.tabTxt[3].newname = "" : a.data.tabTxt[3].newname = a.data.floorAgeName, 
            a.setData({
                buildage: o,
                tabTxt: a.data.tabTxt
            }), console.log(a.data.floorAge + "==" + a.data.floorAgeName);
        }
        a.setData({
            tab: [ !0, !0, !0, !0 ],
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
    },
    quyuFn3: function(a) {
        var t = this, e = a.currentTarget.dataset;
        switch (t.data.tabTxt[0].newname = e.name, +e.barid) {
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
                tab: [ !0, !0, !0, !0 ],
                filterMask: !0,
                search: !1,
                loadbarid: 12,
                searchCon: "请输入小区或商圈名称",
                list: []
            }), t.data.postParam.keywords = "", t.data.postParam.sqid = "", t.data.postParam.conmmunityid = "", 
            t.data.postParam.qyid = t.data.quyuId, console.log("区域不限3：", t.data.postParam), 
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
    },
    getQuYuData: function(t) {
        var e = this, o = {}, r = a.globalData.url_host;
        wx.request({
            url: r + "/appapi/region/" + e.data.city_id + "/v1/list",
            method: "POST",
            data: o,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    for (var o = [], r = 0; r < a.data.data.length; r++) o[a.data.data[r].id] = a.data.data[r].sqlist;
                    0 == t ? e.setData({
                        filterArea: a.data.data
                    }) : e.setData({
                        filterArea2: o[t]
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
        var e = this, o = {}, r = a.globalData.url_host;
        wx.request({
            url: r + "/appapi/subway/" + e.data.city_id + "/v1/list",
            method: "POST",
            data: o,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    for (var o = [], r = 0; r < a.data.data.length; r++) o[a.data.data[r].lineid] = a.data.data[r].stationlist;
                    console.log("stArr", o), 0 == t ? e.setData({
                        filterArea: a.data.data
                    }) : e.setData({
                        filterArea2: o[t]
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
        1 == t || 9 == t ? a.data.pricesData = [ {
            code: "0,2",
            name: "2万以下"
        }, {
            code: "2,3",
            name: "2-3万"
        }, {
            code: "3,4",
            name: "3-4万"
        }, {
            code: "4,5",
            name: "4-5万"
        }, {
            code: "5,6",
            name: "5-6万"
        }, {
            code: "6,8",
            name: "6-8万"
        }, {
            code: "8,10",
            name: "8-10万"
        }, {
            code: "10,0",
            name: "10万以上"
        } ] : 2 == t || 8 == t || 5 == t || 20 == t || 7 == t || 18 == t || 19 == t ? a.data.pricesData = [ {
            code: "0,1",
            name: "1万以下"
        }, {
            code: "1,1.5",
            name: "1-1.5万"
        }, {
            code: "1.5,2",
            name: "1.5-2万"
        }, {
            code: "2,2.5",
            name: "2-2.5万"
        }, {
            code: "2.5,3",
            name: "2.5-3万"
        }, {
            code: "3,4",
            name: "3-4万"
        }, {
            code: "4,5",
            name: "4-5万"
        }, {
            code: "5,0",
            name: "5万以上"
        } ] : 15 != t && 22 != t && 24 != t && 6 != t && 16 != t || (a.data.pricesData = [ {
            code: "0,0.5",
            name: "0.5万以下"
        }, {
            code: "0.5,0.8",
            name: "0.5-0.8万"
        }, {
            code: "0.8,1",
            name: "0.8-1万"
        }, {
            code: "1,1.2",
            name: "1-1.2万"
        }, {
            code: "1.2,1.5",
            name: "1.2-1.5万"
        }, {
            code: "1.5,2",
            name: "1.5-2万"
        }, {
            code: "20,0",
            name: "2万以上"
        } ]), a.setData({
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
    emptyPriceFn: function() {
        var a = this;
        a.setData({
            tabTxt: a.data.tabTxt,
            minPriceInput: "",
            maxPriceInput: "",
            price_name: "",
            price_val: "",
            maxPriceData: "",
            minPriceData: ""
        }), console.log(a.data.price_name + "==" + a.data.price_val), console.log(a.data.minPriceInput + "==" + a.data.maxPriceInput), 
        console.log(a.data.minPriceData + "==" + a.data.maxPriceData);
    },
    priceConfirm: function(a) {
        var t = this, e = a.currentTarget.dataset, o = parseInt(e.valuemin), r = parseInt(e.valuemax);
        o && !r && (t.data.price_name = o + "万以上", t.data.price_val = o + ",99999999", t.setData({
            minPriceInput: o,
            maxPriceInput: ""
        })), r && !o && (t.data.price_name = r + "万以下", t.data.price_val = "0," + r, t.setData({
            minPriceInput: "",
            maxPriceInput: r
        })), o && r && (t.data.price_name = o + "-" + r + "万", t.data.price_val = o + "," + r, 
        t.setData({
            minPriceInput: o,
            maxPriceInput: r
        })), o || r || t.setData({
            minPriceInput: o,
            maxPriceInput: r
        }), "" == t.data.price_val && (t.data.price_name = ""), t.data.tabTxt[1].newname = t.data.price_name, 
        t.setData({
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            list: [],
            price_name_commit: t.data.price_name,
            minPrice: o,
            maxPrice: r
        }), t.data.postParam.price = t.data.price_val, console.log("价格确定", t.data.price_val), 
        t.filterData(t.data.postParam);
    },
    floorTypeData: function() {
        this.setData({
            floorTypeList: [ {
                broom: 1,
                selected: !1,
                name: "板楼"
            }, {
                broom: 2,
                selected: !1,
                name: "塔楼"
            }, {
                broom: 3,
                selected: !1,
                name: "塔板结合"
            }, {
                broom: 10,
                selected: !1,
                name: "其他"
            } ]
        });
    },
    floorTypeFn: function(a) {
        var t, e = this, o = a.currentTarget.dataset.index, r = [], i = [];
        e.data.floorTypeList[o].selected = !e.data.floorTypeList[o].selected, e.data.floorTypeList.forEach(function(a, t) {
            a.selected && (i.push(a.broom), r.push(a.name));
        }), t = i.join(), e.setData({
            floorType: t,
            floorTypeName: r,
            floorTypeList: e.data.floorTypeList,
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
        console.log(e + "==" + o), t.data.tabTxt[2].newname = "" != o ? o : "", t.data.postParam.communitytype = e, 
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
    filtermoreData: function(a) {
        var t = this, e = [ {
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
        } ];
        console.log("build", t.data.buildage), this.setData({
            buildage: e,
            bui: e
        }), console.log(t.data.bui);
    },
    filterYearFn: function(a) {
        var t = this, e = a.currentTarget.dataset.index;
        console.log(t.data.buildage), t.filtermoreData(), t.data.buildage[e].selected = !t.data.buildage[e].selected, 
        t.setData({
            buildage: t.data.buildage,
            floorAge: t.data.buildage[e].code,
            floorAgeName: t.data.buildage[e].name,
            curTab: 4
        });
    },
    llConfirm: function(a) {
        var t = this, e = t.data.floorAge, o = t.data.floorAgeName;
        t.data.tabTxt[3].newname = o || "", t.setData({
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            list: [],
            floorAgeCommit: e,
            floorAgeNameCommit: o
        }), t.data.postParam.buildage = e, console.log("楼龄", t.data.postParam), t.filterData(t.data.postParam);
    },
    emptyLl: function(a) {
        var t = this;
        t.data.tabTxt[3].newname = "";
        var e = [ {
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
        } ];
        t.setData({
            tabTxt: t.data.tabTxt,
            floorAge: "",
            floorAgeName: "",
            buildage: e
        }), console.log(t.data.buildage), console.log(t.data.floorAgeName + "==" + t.data.floorAge);
    },
    preventTouchMove: function() {},
    sortConData: function() {
        var a = this;
        a.data.sortData = [ {
            id: "",
            name: "默认排序"
        }, {
            id: 1,
            name: "均价从低到高"
        }, {
            id: 2,
            name: "均价从高到低"
        }, {
            id: 3,
            name: "成交量最大"
        } ], a.setData({
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
        }), t.getData(t.data.postParam);
    },
    toDetail: function(a) {
        var t = this, e = parseInt(a.currentTarget.dataset.communityid), o = t.data.city_id;
        wx.navigateTo({
            url: "../community_detail/comDetail?communityId=" + e + "&cityId=" + o
        });
    },
    toSearch: function(a) {
        var t = this, e = "";
        "请输入小区或商圈名称" != t.data.searchCon && (e = t.data.searchCon), 8 == getCurrentPages().length ? wx.redirectTo({
            url: "../comSearch/comSearch?cityId=" + t.data.city_id + "&searchInp=" + e + "&listParam=" + t.data.list_param
        }) : wx.navigateTo({
            url: "../comSearch/comSearch?cityId=" + t.data.city_id + "&searchInp=" + e + "&listParam=" + t.data.list_param
        });
    },
    delInp: function() {
        var a = this;
        a.data.tabTxt[0].newname = "", a.setData({
            searchCon: "请输入小区或商圈名称",
            tabTxt: a.data.tabTxt
        }), this.setData({
            list: [],
            postParam: ""
        }), a.filterData();
    },
    onShareAppMessage: function(a) {},
    onReady: function() {
        e("setPage", {
            pagename: "小区列表页"
        });
    }
});