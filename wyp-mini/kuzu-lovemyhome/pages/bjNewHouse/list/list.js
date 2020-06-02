Page({
    data: {
        thridWid: !1,
        loadstatus: !1,
        showcount: !0,
        cityid: "1",
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
            districtid: "",
            sqid: "",
            broom: "",
            propertyTypeId: "",
            other: "",
            openDate: "",
            buildingArea: "",
            tag: "",
            traffic: "",
            price: "",
            totalPrice: "",
            order: 8,
            swLat: "",
            swLng: "",
            neLng: "",
            neLat: ""
        },
        postdatafront: {
            page: 1,
            pageSize: 15,
            keyword: "",
            districtid: "",
            sqid: "",
            broom: "",
            propertyTypeId: "",
            other: "",
            openDate: "",
            buildingArea: "",
            tag: "",
            traffic: "",
            price: "",
            totalPrice: "",
            order: 8,
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
        this.getlistData(), this.getTagList();
    },
    getlistData: function() {
        var t = this;
        this.setData({
            loadstatus: !1,
            datastatus: !1
        });
        var a = t.data.postdata;
        a.cityid = t.data.cityid, wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/estate/list",
            method: "POST",
            data: a,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (console.log("列表页数据--", a), "200" == a.data.status) {
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
                    var o = t.data.postdata.page, i = t.data.postdata;
                    o += 1, i.page = o, t.setData({
                        postdata: i
                    });
                } else "204" == a.data.status && t.setData({
                    loadstatus: !0,
                    datastatus: !0
                });
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    getTagList: function() {
        var t = this, a = {
            cityid: 1,
            area: 1,
            buildingArea: 1,
            houseType: 1,
            openDate: 1,
            order: 1,
            other: 1,
            price: 1,
            propertyType: 1,
            tag: 1,
            totalPrice: 1,
            traffic: 1,
            loopline: 1,
            shortcut: 1,
            nearby: 1
        };
        wx.request({
            url: "http://newhouse-appapi-test.5i5j.com/common/location",
            method: "post",
            data: a,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                console.log("搜索标签", a), t.setData({
                    filterData: a.data.data,
                    areaData: a.data.data.area,
                    trafficData: a.data.data.traffic,
                    totalPrice: a.data.data.totalPrice,
                    price: a.data.data.price,
                    housetypeData: a.data.data.houseType,
                    order: a.data.data.order,
                    buildingAreaData: a.data.data.buildingArea,
                    otherData: a.data.data.other,
                    propertyTypeIdData: a.data.data.propertyType,
                    opendataData: a.data.data.openDate,
                    tagData: a.data.data.tag
                });
            }
        });
    },
    filtertabFn: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.tabindex, s = this.data.postdata, o = this.data.shaiTop;
        wx.pageScrollTo({
            scrollTop: o
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
        var a = t.currentTarget.dataset.index;
        this.setData({
            areaFirstSelect: a
        });
    },
    checkprice: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            priceFirstSelect: a
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
        var a = t.currentTarget.dataset.areaid, e = t.currentTarget.dataset.index, s = this.data.postdatafront, o = this.data.tabArr, i = t.currentTarget.dataset.name;
        "" != a ? (s.districtid = a, o[0].name = i, o[0].select = !0, this.setData({
            thridWid: !0,
            quyuIndex: e
        })) : (s.districtid = "", o[0].select = !1, o[0].name = "区域"), this.setData({
            postdatafront: s
        });
    },
    sqsecondFn: function(t) {
        var a = t.currentTarget.dataset.sqid, e = this.data.postdatafront, s = this.data.tabArr, o = t.currentTarget.dataset.name;
        "" != a ? (e.sqid = a, s[0].name = o, s[0].select = !0) : (e.districtid = "", s[0].select = !1, 
        s[0].name = "区域"), this.setData({
            postdatafront: e
        });
    },
    pricesecondFn: function(t) {
        var a = t.currentTarget.dataset.priceid, e = this.data.postdata, s = this.data.tabArr, o = t.currentTarget.dataset.name;
        "" == a ? (e.price = "", e.customPriceLow = "", e.customPriceTop = "", e.customTotalPriceLow = "", 
        e.customTotalPriceTop = "", s[1].name = "价格", s[1].select = !1) : (e.price = a, 
        s[1].name = o, s[1].select = !0), e.page = 1, this.setData({
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
        var t = parseInt(this.data.minprice), a = parseInt(this.data.maxprice), e = this.data.priceFirstSelect, s = this.data.postdata, o = this.data.tabArr;
        t || a ? (0 == e && (s.customPriceLow = "", s.customPriceTop = "", t && !a ? (s.customTotalPriceLow = t, 
        s.customTotalPriceTop = 999999999, o[1].select = !0, o[1].name = t + "万以上") : !t && a ? (s.customTotalPriceLow = 0, 
        s.customTotalPriceTop = a, o[1].select = !0, o[1].name = a + "万以下") : t && a && (s.customTotalPriceLow = t, 
        s.customTotalPriceTop = a, o[1].select = !0, o[1].name = t + "-" + a + "万")), 1 == e && (s.customTotalPriceLow = "", 
        s.customTotalPriceTop = "", t && !a ? (s.customPriceLow = t, s.customPriceTop = 999999999, 
        o[1].select = !0, o[1].name = t + "万以上") : !t && a ? (s.customPriceLow = 0, s.customPriceTop = a, 
        o[1].select = !0, o[1].name = a + "万以下") : t && a && (s.customPriceLow = t, s.customPriceTop = a, 
        o[1].select = !0, o[1].name = t + "-" + a + "万")), s.priceID = "", s.page = 1, this.setData({
            postdata: s,
            tabArr: o,
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
        var a = t.detail.value, e = t.currentTarget.dataset.type, s = this.data.minprice, o = this.data.maxprice;
        "min" == e ? s = a : o = a, this.setData({
            minprice: s,
            maxprice: o
        });
    },
    housetypeFn: function(t) {
        var a = this, e = t.currentTarget.dataset.index, s = t.currentTarget.dataset.broom, o = this.data.postdatafront, i = this.data.tabArr, r = this.data.housetypeData, n = [];
        if ("" == s) r.broom = "", i[2].name = "房型", i[2].select = !1; else {
            var d = a.data.housetypeData[e];
            d.isSelect = !d.isSelect, r.map(function(t) {
                1 == t.isSelect && n.push(t.id);
            }), console.log("房型else", r), o.broom = n.toString(), console.log("housetypeData.broom-----", o.broom);
            var c = t.currentTarget.dataset.name;
            i[2].name = c, i[2].select = !0, console.log("房型-----", a.data.housetypeData), a.setData({
                housetypeData: r,
                postdatafront: o
            }), console.log(a.data.postdatafront, "-------++++++", a.data.postdata);
        }
    },
    housetype_yes: function() {
        console.log("房型确定"), console.log(this.data.postdatafront, "----2---++++++", this.data.postdata);
        var t = this.data.postdatafront, a = this.data.postdata, e = this.data.tabArr;
        a.page = 1, this.setData({
            postdata: JSON.parse(JSON.stringify(t)),
            listdata: [],
            showcount: !0,
            tabindex: 5,
            tabArr: e,
            isFixed2: !1
        }), this.getlistData();
    },
    housetype_empty: function() {
        var t = this.data.postdatafront, a = this.data.housetypeData;
        this.data.housetypeData.map(function(t) {
            1 == t.isSelect && (t.isSelect = !1);
        }), t.broom = "", this.setData({
            postdatafront: t,
            housetypeData: a
        }), console.log("房型清空", this.data.postdata, "-------++++++", this.data.postdatafront);
    },
    sortFn: function(t) {
        var a = this.data.postdata, e = t.currentTarget.dataset.sortid, s = this.data.tabArr;
        "" == e ? (a.order = "", s[4].select = !1) : (a.order = e, s[4].select = !0), a.page = 1, 
        this.setData({
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
    kMenu: function(t) {
        var a = this;
        if (a.data.indexTab === t.target.dataset.index) return !1;
        a.setData({
            indexTab: t.target.dataset.index
        });
    },
    tapgo: function(t) {
        var a = this, e = t.currentTarget.dataset.path;
        console.log("点击当前--", t), "search" == e && (console.log("跳转搜索"), wx.navigateTo({
            url: "/pages/bjNewHouse/bjnewhouseSearch/search?cityid=" + a.data.cityid
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onReachBottom: function() {
        console.log("加载下一页");
        var t = this.data.pageCount;
        this.data.postdata.page <= t ? (this.setData({
            showcount: !1
        }), this.getlistData()) : wx.showToast({
            icon: "none",
            title: "没有更多房源"
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {}
});