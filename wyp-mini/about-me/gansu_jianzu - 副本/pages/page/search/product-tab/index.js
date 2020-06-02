var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
};

Component({
    properties: {
        keyword: {
            type: String,
            value: ""
        },
        serverTime: {
            type: Number,
            observer: "handleSearch"
        },
        products: {
            type: Object
        },
        filters: {
            type: Object
        }
    },
    data: {
        query: {},
        filter: !0,
        sort: "sales:descend",
        segements: [ {
            key: "sales",
            title: "销量优先",
            checked: !0,
            order: "descend"
        }, {
            key: "evaluateCount",
            title: "好评最高",
            order: "descend"
        }, {
            key: "price",
            title: "价格",
            sort: !0,
            order: "ascend"
        } ]
    },
    ready: function() {
        var e = this, t = getApp().globalConfig;
        e.setData({
            isShowStoreName: t.isShowStoreName
        }), console.log(e.data.isShowStoreName, "isShowStoreName"), wx.getSystemInfo({
            success: function(t) {
                var r = wx.createSelectorQuery();
                r.select("#search").boundingClientRect(), r.select("#tab").boundingClientRect(), 
                r.exec(function(r) {
                    console.log(r), e.setData({
                        scrollHeight: t.windowHeight - r[0].height - r[1].height - 36
                    });
                });
            }
        });
    },
    methods: {
        handleTabSwitch: function(e) {
            var t = e.detail, r = t.key, i = t.order;
            this.setData({
                sort: r + ":" + i
            }), this.triggerEvent("onquery", {
                sort: this.data.sort,
                query: this.data.query
            });
        },
        handleCheckBrand: function(e) {
            var t = e.currentTarget.dataset.index, r = this.data.filters;
            r.brandList.childrenList[t].checked = !r.brandList.childrenList[t].checked, this.setData({
                filters: r
            });
        },
        handleCheckProperty: function(e) {
            var t = e.currentTarget.dataset, r = t.index, i = t.idx, a = this.data.filters;
            a.propertyList[r].childrenList[i].checked = !a.propertyList[r].childrenList[i].checked, 
            this.setData({
                filters: a
            });
        },
        handleSetPrice: function(e) {
            var t = e.currentTarget.dataset.type, r = e.detail.value, i = this.data.filters;
            i["" + t] = r, this.setData({
                filters: i
            });
        },
        handleCheckCategory: function(e) {
            var t = e.currentTarget.dataset.index, r = this.data.filters;
            r.categoryList[t].checked = !r.categoryList[t].checked, this.setData({
                filters: r
            });
        },
        handleSubmitFilter: function() {
            var e = this.data.filters, t = e.minPrice, r = e.maxPrice, i = e.brandList.childrenList ? e.brandList.childrenList.filter(function(e) {
                return e.checked;
            }).map(function(e) {
                return e.propertyName;
            }) : [], a = e.categoryList.filter(function(e) {
                return e.checked;
            }).map(function(e) {
                return e.id;
            }), s = [];
            e.propertyList.forEach(function(e) {
                var t = {
                    pid: e.id
                }, r = [];
                e.childrenList.forEach(function(e) {
                    e.checked && r.push(e.propertyName);
                }), t.propertyNames = r.join(","), s.push(t);
            });
            var n = {};
            void 0 != t && t.trim().length > 0 && (n.minPrice = t.trim()), void 0 != r && r.trim().length > 0 && (n.maxPrice = r.trim(0)), 
            i.length > 0 && (console.log(i, "brandIds"), s.push({
                pid: e.brandList.id,
                propertyNames: i.join(",")
            })), a.length > 0 && (n.catIds = a.join(",")), n.properties = s.filter(function(e) {
                return e.propertyNames.length > 0;
            });
            var o = !1;
            (n.minPrice || n.maxPrice || n.brandIds && n.brandIds.length > 0 || n.properties && n.properties.length > 0) && (o = !0), 
            this.setData({
                query: n,
                filterActive: o
            });
            var c = this.selectComponent(".Segements");
            c && c.hideFilterPop(), console.log(n, "query"), this.triggerEvent("onquery", {
                sort: this.data.sort,
                query: this.data.query
            });
        },
        handleSearch: function(e, t) {
            this.reset();
        },
        handleScrollBottom: function(t) {
            console.log("to bottom");
            var r = this.data.products;
            console.log(r.pageNo, r.pageTotal, "+++++++++++++++++"), r.pageNo < r.pageTotal && (console.log("_______________________"), 
            this.triggerEvent("onquery", {
                sort: this.data.sort,
                query: e({}, this.data.query, {
                    pageNo: r.pageNo + 1
                })
            }));
        },
        handleResetFilter: function() {
            var t = this.data.filters;
            t.categoryList.forEach(function(e) {
                return e.checked = !1;
            }), t.brandList.childrenList && t.brandList.childrenList.forEach(function(e) {
                return e.checked = !1;
            }), t.propertyList.forEach(function(e) {
                e.childrenList.forEach(function(e) {
                    return e.checked = !1;
                });
            }), this.setData({
                query: {},
                filters: e({}, t, {
                    minPrice: "",
                    maxPrice: ""
                })
            });
        },
        reset: function() {
            console.log("reset ?");
            var e = this.data;
            e.segements, e.filters;
            this.setData({
                query: {},
                filterActive: !1,
                sort: "sales:descend",
                segements: [ {
                    key: "sales",
                    title: "销量优先",
                    checked: !0,
                    order: "descend"
                }, {
                    key: "evaluateCount",
                    title: "好评最高",
                    order: "descend"
                }, {
                    key: "price",
                    title: "价格",
                    sort: !0,
                    order: "ascend"
                } ]
            });
        }
    }
});