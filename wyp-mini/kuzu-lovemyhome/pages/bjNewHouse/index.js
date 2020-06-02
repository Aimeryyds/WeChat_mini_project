Page({
    data: {
        isFixed: !1,
        isFixed2: !1,
        cityid: "1",
        currentTab: 0,
        swiperCurrent: 0,
        indexTab: 0,
        tabArr: [ {
            name: "区域",
            select: !1
        }, {
            name: "价格",
            select: !1
        }, {
            name: "房型",
            select: !1
        }, {
            name: "更多",
            select: !1
        }, {
            name: "排序",
            select: !1
        } ],
        tabindex: 5,
        areaFirstSelect: 0,
        priceFirstSelect: 0,
        postdata: {
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
        },
        postdatafront: {
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
        },
        listdata: [],
        datastatus: !1,
        count: "",
        pageCount: "",
        minprice: "",
        maxprice: ""
    },
    onLoad: function(t) {
        var a = this;
        this.getlistData(), this.getTagList(), this.getIndexData();
        var e = wx.createSelectorQuery();
        e.select(".list-tab").boundingClientRect(function(t) {
            console.log("筛选框距离顶部高度--", t.top), a.setData({
                shaiTop: t.top
            });
        }).exec(), e.select(".fixedTop").boundingClientRect(function(t) {
            console.log("距离顶部高度--", t.top), a.setData({
                shai2Top: t.top
            });
        }).exec();
    },
    getIndexData: function() {
        var t = this, a = {
            cityid: t.data.cityid
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/home/index",
            method: "post",
            data: a,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log("北京新房首页数据--", a), t.setData({
                    indexData: a.data.data,
                    themeCon: a.data.data.theme.estates
                });
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    getlistData: function() {
        var t = this;
        this.setData({
            loadstatus: !1,
            datastatus: !1
        });
        var a = t.data.postdata;
        a.cityid = t.data.cityid, wx.request({
            url: "https://appapi.5i5j.com/estate/" + t.data.cityid + "/list",
            method: "POST",
            data: a,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if ("200" == a.data.status) {
                    var e = t.data.listdata.concat(a.data.data.results);
                    t.setData({
                        listdata: e,
                        count: a.data.data.count,
                        pageCount: a.data.data.pageCount,
                        loadstatus: !0
                    });
                    var s = "共找到" + a.data.data.count + "套房源";
                    t.data.showcount && setTimeout(function() {
                        wx.showToast({
                            icon: "none",
                            title: s
                        });
                    }, 500);
                    var r = t.data.postdata.page, o = t.data.postdata;
                    r += 1, o.page = r, t.setData({
                        postdata: o
                    });
                } else "204" == a.data.status && t.setData({
                    loadstatus: !0,
                    datastatus: !0
                });
            }
        });
    },
    getTagList: function() {
        var t = this;
        wx.request({
            url: "https://appapi.5i5j.com/appapi/location/" + t.data.cityid + "/index",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (t.setData({
                    filterData: a.data.data,
                    areaData: a.data.data.area,
                    peiceData: a.data.data.totalPrice,
                    housetypeData: a.data.data.houseType
                }), console.log("111111111111111", a.data.data.area), t.data.postdata.areaID) {
                    var e = t.data.tabArr, s = t.data.postdata.areaID, r = "";
                    a.data.data.area.map(function(t) {
                        s == t.areaID && (r = t.areaName);
                    }), e[0].name = r, t.setData({
                        tabArr: e
                    });
                }
            }
        });
    },
    filtertabFn: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.tabindex, s = this.data.postdata, r = this.data.shaiTop;
        wx.pageScrollTo({
            scrollTop: r
        }), this.setData({
            isFixed2: !0
        }), e == a ? (console.log("if---"), this.setData({
            tabindex: 5,
            postdatafront: JSON.parse(JSON.stringify(s))
        })) : (console.log("else+++"), this.setData({
            tabindex: a,
            postdatafront: JSON.parse(JSON.stringify(s))
        }));
    },
    checkarea: function(t) {
        var a, e = t.currentTarget.dataset.index;
        a = 0 == e ? this.data.filterData.area : this.data.filterData.traffic, this.setData({
            areaFirstSelect: e,
            areaData: a
        });
    },
    checkprice: function(t) {
        var a, e = t.currentTarget.dataset.index;
        a = 0 == e ? this.data.filterData.totalPrice : this.data.filterData.price, this.setData({
            priceFirstSelect: e,
            peiceData: a
        });
    },
    hidefilter: function() {
        return this.setData({
            tabindex: 5,
            isFixed2: !1
        }), !1;
    },
    preventD: function() {},
    areasecondFn: function(t) {
        var a = t.currentTarget.dataset.areaid, e = this.data.postdata, s = this.data.tabArr, r = t.currentTarget.dataset.name;
        "" != a ? (0 == this.data.areaFirstSelect ? (e.areaID = a, e.trafficID = "") : (e.areaID = "", 
        e.trafficID = a), s[0].name = r, s[0].select = !0) : (e.areaID = "", e.trafficID = "", 
        s[0].select = !1, s[0].name = "区域"), e.page = 1, this.setData({
            postdata: e,
            showcount: !0,
            tabindex: 5,
            tabArr: s,
            listdata: [],
            postdatafront: JSON.parse(JSON.stringify(e))
        }), this.getlistData();
    },
    pricesecondFn: function(t) {
        var a = t.currentTarget.dataset.priceid, e = this.data.postdata, s = this.data.tabArr, r = t.currentTarget.dataset.name;
        "" == a ? (e.priceID = "", e.customPriceLow = "", e.customPriceTop = "", e.customTotalPriceLow = "", 
        e.customTotalPriceTop = "", s[1].name = "价格", s[1].select = !1) : (e.priceID = a, 
        s[1].name = r, s[1].select = !0), e.page = 1, this.setData({
            postdata: e,
            tabArr: s,
            showcount: !0,
            tabindex: 5,
            listdata: [],
            minprice: "",
            maxprice: "",
            postdatafront: JSON.parse(JSON.stringify(e))
        }), this.getlistData();
    },
    priceconfirm: function() {
        var t = parseInt(this.data.minprice), a = parseInt(this.data.maxprice), e = this.data.priceFirstSelect, s = this.data.postdata, r = this.data.tabArr;
        t || a ? (0 == e && (s.customPriceLow = "", s.customPriceTop = "", t && !a ? (s.customTotalPriceLow = t, 
        s.customTotalPriceTop = 999999999, r[1].select = !0, r[1].name = t + "万以上") : !t && a ? (s.customTotalPriceLow = 0, 
        s.customTotalPriceTop = a, r[1].select = !0, r[1].name = a + "万以下") : t && a && (s.customTotalPriceLow = t, 
        s.customTotalPriceTop = a, r[1].select = !0, r[1].name = t + "-" + a + "万")), 1 == e && (s.customTotalPriceLow = "", 
        s.customTotalPriceTop = "", t && !a ? (s.customPriceLow = t, s.customPriceTop = 999999999, 
        r[1].select = !0, r[1].name = t + "万以上") : !t && a ? (s.customPriceLow = 0, s.customPriceTop = a, 
        r[1].select = !0, r[1].name = a + "万以下") : t && a && (s.customPriceLow = t, s.customPriceTop = a, 
        r[1].select = !0, r[1].name = t + "-" + a + "万")), s.priceID = "", s.page = 1, this.setData({
            postdata: s,
            tabArr: r,
            listdata: [],
            showcount: !0,
            tabindex: 5,
            postdatafront: JSON.parse(JSON.stringify(s)),
            isFixed2: !1
        }), this.getlistData()) : wx.showToast({
            icon: "none",
            title: "请输入价格区间"
        });
    },
    inputprice: function(t) {
        var a = t.detail.value, e = t.currentTarget.dataset.type, s = this.data.minprice, r = this.data.maxprice;
        "min" == e ? s = a : r = a, this.setData({
            minprice: s,
            maxprice: r
        });
    },
    housetypeFn: function(t) {
        var a = t.currentTarget.dataset.housetypeid, e = this.data.postdata, s = this.data.tabArr;
        if ("" == a) e.houseTypeID = "", s[2].name = "房型", s[2].select = !1; else {
            e.houseTypeID = a;
            var r = t.currentTarget.dataset.name;
            s[2].name = r, s[2].select = !0;
        }
        e.page = 1, this.setData({
            postdata: e,
            tabArr: s,
            listdata: [],
            showcount: !0,
            tabindex: 5,
            postdatafront: JSON.parse(JSON.stringify(e))
        }), this.getlistData();
    },
    sortFn: function(t) {
        var a = this.data.postdata, e = t.currentTarget.dataset.sortid, s = this.data.tabArr;
        "" == e ? (a.sortID = "", s[4].select = !1) : (a.sortID = e, s[4].select = !0), 
        a.page = 1, this.setData({
            postdata: a,
            tabArr: s,
            listdata: [],
            showcount: !0,
            tabindex: 5,
            postdatafront: JSON.parse(JSON.stringify(a)),
            isFixed2: !1
        }), this.getlistData();
    },
    moretagFn: function(t) {
        var a = t.currentTarget.dataset.type, e = this.data.postdatafront;
        "" == t.currentTarget.dataset.id ? e[a] = "" : e[a] = t.currentTarget.dataset.id, 
        this.setData({
            postdatafront: e
        });
    },
    moreConfirm: function() {
        var t = this.data.postdatafront, a = this.data.tabArr;
        t.budingArea || t.otherID || t.propertyTypeID || t.tagID || t.openDate ? a[3].select = !0 : a[3].select = !1, 
        t.page = 1, this.setData({
            postdata: JSON.parse(JSON.stringify(t)),
            listdata: [],
            showcount: !0,
            tabindex: 5,
            tabArr: a,
            isFixed2: !1
        }), this.getlistData();
    },
    moreCancel: function() {
        var t = this.data.postdatafront;
        t.budingArea = "", t.otherID = "", t.propertyTypeID = "", t.tagID = "", t.openDate = "", 
        this.setData({
            postdatafront: t
        });
    },
    onPageScroll: function(t) {
        var a = this.data.shai2Top;
        this.setData({
            huaGao: t.scrollTop
        }), t.scrollTop >= a ? this.setData({
            isFixed: !0
        }) : this.setData({
            isFixed: !1
        });
    },
    housetabCur: function(t) {
        var a = this, e = t.currentTarget.dataset.themeid;
        if (console.log("点击当前--", e, "---", t.target.dataset.current), console.log("--", a.data.currentTab), 
        a.data.currentTab === t.target.dataset.current) return !1;
        a.setData({
            currentTab: t.target.dataset.current
        });
        var s = {
            cityid: 1,
            themeid: e
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/common/theme",
            method: "post",
            data: s,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (console.log("点击后返回主题楼盘数据--", t), 200 == t.data.status) {
                    var e = t.data.data.estates;
                    a.setData({
                        themeCon: e
                    });
                } else t.data.status;
                console.log(t);
            }
        });
    },
    getCurrent: function(t) {
        this.setData({
            swiperCurrent: t.detail.current
        });
    },
    kMenu: function(t) {
        var a = this;
        if (console.log("点击当前--", t.target.dataset.index), console.log("--", a.data.indexTab), 
        a.data.indexTab === t.target.dataset.index) return !1;
        a.setData({
            indexTab: t.target.dataset.index
        });
    },
    tapgo: function(t) {
        var a = t.currentTarget.dataset.path, e = t.currentTarget.dataset.isopen, s = t.currentTarget.dataset.visible, s = t.currentTarget.dataset.visible, r = t.currentTarget.dataset.linkurl;
        console.log("导航--", a, "-----", e, "----", s, "----", r);
    },
    swipertab: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.url;
        console.log("url--", e, "----", a);
    },
    topic: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.url, s = t.currentTarget.dataset.type;
        console.log("url--", e, "----", a, "---", s), 1 == s && console.log("跳转h5页面"), 2 == s && console.log("解析地址跳转小程序现有页面");
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});