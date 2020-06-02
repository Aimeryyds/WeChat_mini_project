Page({
    data: {
        cityid: "1",
        loadstatus: !1,
        showcount: !0,
        filterData: [],
        areaData: [],
        peiceData: [],
        housetypeData: [],
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
        console.log(t), this.setData({
            cityid: t.cityid
        }), t.condition && this.setcondition(t), this.getlistData(), this.getTagList();
    },
    setcondition: function(t) {
        var a = JSON.parse(t.condition), e = this.data.tabArr;
        console.log(a), (a.budingArea || a.otherID || a.openDate || a.propertyTypeID || a.tagID) && (e[3].select = !0), 
        a.areaID && (e[0].select = !0), this.setData({
            postdata: a,
            tabArr: e
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
                    var i = t.data.postdata.page, r = t.data.postdata;
                    i += 1, r.page = i, t.setData({
                        postdata: r
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
                    var e = t.data.tabArr, s = t.data.postdata.areaID, i = "";
                    a.data.data.area.map(function(t) {
                        s == t.areaID && (i = t.areaName);
                    }), e[0].name = i, t.setData({
                        tabArr: e
                    });
                }
            }
        });
    },
    scrolltolower: function() {
        var t = this.data.pageCount;
        this.data.postdata.page <= t ? (this.setData({
            showcount: !1
        }), this.getlistData()) : wx.showToast({
            icon: "none",
            title: "没有更多房源"
        });
    },
    filtertabFn: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.tabindex, s = this.data.postdata;
        e == a ? this.setData({
            tabindex: 5,
            postdatafront: JSON.parse(JSON.stringify(s))
        }) : this.setData({
            tabindex: a,
            postdatafront: JSON.parse(JSON.stringify(s))
        });
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
            tabindex: 5
        }), !1;
    },
    preventD: function() {},
    areasecondFn: function(t) {
        var a = t.currentTarget.dataset.areaid, e = this.data.postdata, s = this.data.tabArr, i = t.currentTarget.dataset.name;
        "" != a ? (0 == this.data.areaFirstSelect ? (e.areaID = a, e.trafficID = "") : (e.areaID = "", 
        e.trafficID = a), s[0].name = i, s[0].select = !0) : (e.areaID = "", e.trafficID = "", 
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
        var a = t.currentTarget.dataset.priceid, e = this.data.postdata, s = this.data.tabArr, i = t.currentTarget.dataset.name;
        "" == a ? (e.priceID = "", e.customPriceLow = "", e.customPriceTop = "", e.customTotalPriceLow = "", 
        e.customTotalPriceTop = "", s[1].name = "价格", s[1].select = !1) : (e.priceID = a, 
        s[1].name = i, s[1].select = !0), e.page = 1, this.setData({
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
        var t = parseInt(this.data.minprice), a = parseInt(this.data.maxprice), e = this.data.priceFirstSelect, s = this.data.postdata, i = this.data.tabArr;
        t || a ? (0 == e && (s.customPriceLow = "", s.customPriceTop = "", t && !a ? (s.customTotalPriceLow = t, 
        s.customTotalPriceTop = 999999999, i[1].select = !0, i[1].name = t + "万以上") : !t && a ? (s.customTotalPriceLow = 0, 
        s.customTotalPriceTop = a, i[1].select = !0, i[1].name = a + "万以下") : t && a && (s.customTotalPriceLow = t, 
        s.customTotalPriceTop = a, i[1].select = !0, i[1].name = t + "-" + a + "万")), 1 == e && (s.customTotalPriceLow = "", 
        s.customTotalPriceTop = "", t && !a ? (s.customPriceLow = t, s.customPriceTop = 999999999, 
        i[1].select = !0, i[1].name = t + "万以上") : !t && a ? (s.customPriceLow = 0, s.customPriceTop = a, 
        i[1].select = !0, i[1].name = a + "万以下") : t && a && (s.customPriceLow = t, s.customPriceTop = a, 
        i[1].select = !0, i[1].name = t + "-" + a + "万")), s.priceID = "", s.page = 1, this.setData({
            postdata: s,
            tabArr: i,
            listdata: [],
            showcount: !0,
            tabindex: 5,
            postdatafront: JSON.parse(JSON.stringify(s))
        }), this.getlistData()) : wx.showToast({
            icon: "none",
            title: "请输入价格区间"
        });
    },
    inputprice: function(t) {
        var a = t.detail.value, e = t.currentTarget.dataset.type, s = this.data.minprice, i = this.data.maxprice;
        "min" == e ? s = a : i = a, this.setData({
            minprice: s,
            maxprice: i
        });
    },
    housetypeFn: function(t) {
        var a = t.currentTarget.dataset.housetypeid, e = this.data.postdata, s = this.data.tabArr;
        if ("" == a) e.houseTypeID = "", s[2].name = "房型", s[2].select = !1; else {
            e.houseTypeID = a;
            var i = t.currentTarget.dataset.name;
            s[2].name = i, s[2].select = !0;
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
            postdatafront: JSON.parse(JSON.stringify(a))
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
            tabArr: a
        }), this.getlistData();
    },
    moreCancel: function() {
        var t = this.data.postdatafront;
        t.budingArea = "", t.otherID = "", t.propertyTypeID = "", t.tagID = "", t.openDate = "", 
        this.setData({
            postdatafront: t
        });
    },
    routego: function(t) {
        var a = this.data.cityid, e = t.currentTarget.dataset.estateid, s = t.currentTarget.dataset.propertytypeid;
        wx.navigateTo({
            url: "/pages/newhouse/detail/detail?estateid=" + e + "&propertytypeid=" + s + "&cityid=" + a
        });
    },
    searchhouse: function() {
        var t = this.data.cityid;
        wx.navigateTo({
            url: "/pages/newhouse/search/search?cityid=" + t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});