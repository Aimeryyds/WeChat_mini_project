var a = getApp(), t = require("../../sdk/dingxiang.js");

(0, require("../../utils/gio-minp/index.js").default)("setConfig", require("../../sdk/gioConfig.js").default), 
Page({
    data: {
        list_param: 1,
        city_id: 1,
        list: [],
        lazyLoad: !0,
        hidden: !0,
        tabTxt: [],
        tab: [ !0, !0, !0 ],
        filterMask: !0,
        subCur: 0,
        filterPrices: [],
        priceData: "",
        pricesData: [],
        inpVal: null,
        filterFxing: [],
        filterArea: [],
        areaData: "",
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
        postParam: {},
        loadinghide: !0,
        countLock: 1,
        loadingCount: !0,
        sq_id: "",
        community_id: ""
    },
    onLoad: function(e) {
        var n = this;
        new t({
            appId: a.globalData.dxAppId
        }, function(a, t) {
            if (a) console.log(a); else {
                n.setData({
                    dxDeviceId: t
                });
                var i = n, d = [];
                i.data.city_id = e.cityId, 1 == e.listParam && (wx.setNavigationBarTitle({
                    title: "在售房源"
                }), d = [ {
                    name: "价格",
                    navselected: !1
                }, {
                    name: "房型",
                    navselected: !1
                }, {
                    name: "面积",
                    navselected: !1
                } ]), 2 == e.listParam && (wx.setNavigationBarTitle({
                    title: "在租房源"
                }), d = [ {
                    name: "租金",
                    navselected: !1
                }, {
                    name: "房型",
                    navselected: !1
                }, {
                    name: "面积",
                    navselected: !1
                } ]), i.setData({
                    list_param: e.listParam,
                    tabTxt: d
                }), e.sqId && (i.data.sq_id = e.sqId), e.communityId && (i.data.community_id = e.communityId), 
                i.filterPricesData(), i.filterFxingData(), i.filterAreaData(), i.sortConData(), 
                i.getData("");
            }
        });
    },
    getData: function(t) {
        var e = a.globalData.url_host, n = this, i = "exchange";
        if (1 == n.data.list_param) {
            d = {
                page: n.data.page_num,
                pcount: 15,
                sqid: n.data.sq_id,
                conmmunityid: n.data.community_id
            };
            i = "exchange";
        }
        if (2 == n.data.list_param) {
            i = "rent";
            var d = {
                page: n.data.page_num,
                pcount: 15,
                sqids: n.data.sq_id,
                communityid: n.data.community_id
            };
        }
        var o = Object.assign(d, t);
        n.setData({
            loadinghide: !1,
            showAllData: !0
        }), console.log("post_data:", o), wx.request({
            url: e + "/appapi/" + i + "/" + n.data.city_id + "/v1/prolist",
            method: "POST",
            data: o,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (console.log("data", a.data), 200 == a.data.status) {
                    if (console.log("count : ", a.data.data.count), 0 == a.data.data.count) n.setData({
                        listHidden: !0,
                        houseNo: !1,
                        loadinghide: !0
                    }); else if (a.data.data.count < 15) n.data.listLock = 2, n.setData({
                        listHidden: !1,
                        houseNo: !0,
                        list: a.data.data.list,
                        sqinfo: a.data.data.exchangerecord,
                        showAllData: !1,
                        loadinghide: !0
                    }); else if (n.data.listLock = 1, n.data.total_page = Math.ceil(a.data.data.count / 15), 
                    console.log("total_page", n.data.total_page), n.data.total_page >= n.data.page_num) {
                        var t = n.data.list.concat(a.data.data.list);
                        n.setData({
                            showAllData: !0,
                            listHidden: !1,
                            houseNo: !0,
                            list: t,
                            sqinfo: a.data.data.exchangerecord,
                            loadinghide: !0
                        }), n.data.page_num += 1, console.log("翻页", n.data.page_num), console.log("setData", t), 
                        console.log("sqname", a.data.data.exchangerecord);
                    }
                    1 == n.data.countLock && 1 == n.data.loadinghide && (n.setData({
                        countNum: a.data.data.count,
                        loadingCount: !1
                    }), setTimeout(function() {
                        n.setData({
                            countNum: "",
                            loadingCount: !0
                        });
                    }, 2e3));
                } else n.data.listLock = 2, console.log("msg:", a.data.msg), n.setData({
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
        t.data.page_num = 1, t.getData(a);
    },
    filterTabFn: function(a) {
        var t = this, e = [ !0, !0, !0 ], n = a.currentTarget.dataset.index, i = "";
        e[n] = !this.data.tab[n], i = this.data.tab[n] ? a.currentTarget.dataset.name : "", 
        t.setData({
            tab: e,
            filterMask: e[n],
            filnav: i
        });
    },
    filterMaskFn: function() {
        this.setData({
            tab: [ !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            sortcon: !0,
            zindex: 10,
            filnav: ""
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
        t.data.priceData = e.code, t.setData({
            priceCurName: e.name,
            valPrice: e.name,
            inpVal: "",
            minPrice: "",
            maxPrice: ""
        }), t.data.postParam.price = t.data.priceData, console.log("价格", t.data.postParam);
    },
    priceMin: function(a) {
        this.setData({
            minPrice: a.detail.value,
            priceCurName: ""
        });
    },
    priceMax: function(a) {
        this.setData({
            maxPrice: a.detail.value,
            priceCurName: ""
        });
    },
    emptyPriceFn: function(a) {
        var t = this;
        a.currentTarget.dataset;
        t.data.tabTxt[1].newname = "", t.setData({
            priceCurName: "",
            tabTxt: t.data.tabTxt,
            filnav: "",
            inpVal: "",
            minPrice: "",
            maxPrice: "",
            valPrice: ""
        }), t.data.postParam.price = "", t.data.priceData = "";
    },
    priceConfirm: function(a) {
        var t = this, e = a.currentTarget.dataset, n = parseInt(e.valuemin), i = parseInt(e.valuemax);
        1 == t.data.list_param && (n && !i && (t.data.tabTxt[0].newname = n + "万以上", t.data.priceData = n + ",99999999", 
        t.data.postParam.price = t.data.priceData), i && !n && (t.data.tabTxt[0].newname = i + "万以下", 
        t.data.priceData = "0," + i), n && i && (t.data.tabTxt[0].newname = n + "-" + i + "万", 
        t.data.priceData = n + "," + i)), 2 == t.data.list_param && (n && !i && (t.data.tabTxt[0].newname = n + "元以上", 
        t.data.priceData = n + ",99999999", t.data.postParam.price = t.data.priceData), 
        i && !n && (t.data.tabTxt[0].newname = i + "元以下", t.data.priceData = "0," + i), 
        n && i && (t.data.tabTxt[0].newname = n + "-" + i + "元", t.data.priceData = n + "," + i)), 
        n || i || (t.data.tabTxt[0].newname = t.data.valPrice), "" == t.data.priceData && (t.data.tabTxt[0].newname = ""), 
        t.setData({
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            list: []
        }), t.data.postParam.price = t.data.priceData, t.filterData(t.data.postParam);
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
    filterFxingFn: function(a) {
        var t, e = this, n = a.currentTarget.dataset.index, i = [], d = [];
        e.data.fxingData[n].selected = !e.data.fxingData[n].selected, e.data.fxingData.forEach(function(a, t) {
            a.selected && (d.push(a.broom), i.push(a.name));
        }), t = d.join(), e.data.postParam.broom = t, e.setData({
            filterFxing: e.data.fxingData,
            fxname: i
        });
    },
    emptyFxingFn: function(a) {
        var t = this;
        a.currentTarget.dataset;
        t.data.tabTxt[2].newname = "", t.setData({
            tabTxt: t.data.tabTxt,
            fxname: ""
        });
        for (var e in t.data.fxingData) t.data.fxingData[e].selected = !1;
        t.setData({
            filterFxing: t.data.fxingData
        }), t.data.postParam.broom = "";
    },
    fxingConfirm: function(a) {
        var t = this, e = a.currentTarget.dataset.fxingname, n = [];
        n.push(e), console.log("curNameArr", n), t.data.tabTxt[1].newname = e ? n : "", 
        t.setData({
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0, !0 ],
            filterMask: !0,
            search: !1,
            list: []
        }), console.log("房型 ", t.data.postParam), t.filterData(t.data.postParam);
    },
    filterAreaData: function() {
        this.setData({
            filterArea: [ {
                code: "0,50",
                name: "50㎡以下"
            }, {
                code: "50,70",
                name: "50-70㎡"
            }, {
                code: "70,90",
                name: "70-90㎡"
            }, {
                code: "90,110",
                name: "90-110㎡"
            }, {
                code: "110,130",
                name: "110-130㎡"
            }, {
                code: "130,150",
                name: "130-150㎡"
            }, {
                code: "150,200",
                name: "150-200㎡"
            }, {
                code: "200,1000",
                name: "200㎡以上"
            } ]
        });
    },
    filterAreaFn: function(a) {
        var t = this, e = a.currentTarget.dataset;
        t.data.areaData = e.code, t.setData({
            areaCurName: e.name,
            tabTxt: t.data.tabTxt,
            valArea: e.name,
            inpVal: "",
            minArea: "",
            maxArea: ""
        }), t.data.postParam.buildarea = t.data.areaData;
    },
    areaMin: function(a) {
        this.setData({
            minArea: a.detail.value,
            areaCurName: ""
        });
    },
    areaMax: function(a) {
        this.setData({
            maxArea: a.detail.value,
            areaCurName: ""
        });
    },
    emptyAreaFn: function(a) {
        var t = this;
        a.currentTarget.dataset;
        t.data.tabTxt[2].newname = "", t.setData({
            areaCurName: "",
            tabTxt: t.data.tabTxt,
            filnav: "",
            inpVal: "",
            minArea: "",
            maxArea: "",
            valArea: ""
        }), t.data.postParam.buildarea = "", t.data.areaData = "";
    },
    areaConfirm: function(a) {
        var t = this, e = a.currentTarget.dataset, n = parseInt(e.valueminarea), i = parseInt(e.valuemaxarea);
        n && !i && (t.data.tabTxt[2].newname = n + "㎡以上", t.data.areaData = n + ",0", t.data.postParam.buildarea = t.data.areaData), 
        i && !n && (t.data.tabTxt[2].newname = i + "㎡以下", t.data.areaData = "0," + i), n && i && (t.data.tabTxt[2].newname = n + "-" + i + "㎡", 
        t.data.areaData = n + "," + i), n || i || (t.data.tabTxt[2].newname = t.data.valArea), 
        "" == t.data.areaData && (t.data.tabTxt[2].newname = ""), t.setData({
            filnav: "",
            tabTxt: t.data.tabTxt,
            tab: [ !0, !0, !0 ],
            filterMask: !0,
            list: []
        }), t.data.postParam.buildarea = t.data.areaData, t.filterData(t.data.postParam);
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
        }), t.getData(t.data.postParam);
    },
    toDetail: function(a) {
        var t = this, e = parseInt(a.currentTarget.dataset.index);
        console.log("index", e);
        var n = this.data.list[e].housesid, i = this.data.list[e].cityid;
        1 == t.data.list_param && wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + n + "&cityId=" + i
        }), 2 == t.data.list_param && wx.navigateTo({
            url: "../zufang_detail/zufang_detail?houseId=" + n + "&cityId=" + i
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {},
    onLazyLoad: function() {}
});