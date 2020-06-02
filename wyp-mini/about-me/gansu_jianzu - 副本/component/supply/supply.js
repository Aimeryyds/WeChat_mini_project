Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (a[s] = t[s]);
    }
    return a;
}, e = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../network/api")), t = {
    tab: {
        list: [ {
            id: "address",
            title: "全部"
        }, {
            id: "type",
            title: "类型"
        }, {
            id: "classify",
            title: "全部分类"
        } ],
        selectedId: "address",
        scroll: !1
    },
    types: [ {
        id: 1,
        name: "全部"
    }, {
        id: 3,
        name: "供应"
    }, {
        id: 4,
        name: "求购"
    } ],
    typeIndex: -1,
    addresses: [],
    addressIndex: [ 0, 0, 0 ],
    classifies: [],
    classifyIndex: [ 0, 0 ],
    supplys: [],
    loading: !1,
    loadmore: !1,
    isloadingmore: !1,
    scrollTop: 0,
    searchUrl: "/pages/articles/search/search",
    pagination: {
        nextCursor: 0,
        previousCursor: 0,
        totalNumber: 0
    },
    query: {
        pageNo: 1,
        pageSize: 10
    },
    selectAddress: "全国",
    selectClassify: "全部分类",
    isFirstOpen: !0
};

exports.default = {
    onLoad: function(a) {
        this.setData(t);
        var e = wx.getSystemInfoSync(), s = e.windowWidth / 750, i = {
            pageNo: 0,
            title: a.q ? a.q : ""
        };
        this.setData({
            query: i,
            sysInfo: e,
            scrollHeight: e.windowHeight - 88 * s + 2
        }), a.dsId && this.setData({
            "query.dsId": a.dsId
        }), a.dataType && this.setData({
            "query.dataType": a.dataType
        }), a.type && this.setData({
            type: a.type
        }), a.categoryIds && this.setData({
            "query.cids": a.categoryIds
        }), a.from && this.setData({
            from: a.from,
            navToDetail: !0
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this.data.title, t = getApp().getFlash("keyword");
        console.log(getApp().getFlash("keyword"), "++++++++++++++++", t);
        var s = a({}, this.data.query, {
            pageNo: 0,
            title: t || ""
        });
        this.setData({
            query: s
        }), this.data.isFirstOpen ? ("group" == this.data.type ? (console.log("+++++++++"), 
        this.queryGroupSupplyList(this.data.query, !0, !0)) : this.querysupplyList(this.data.query, !0, !0), 
        this.setData({
            isFirstOpen: !1
        })) : e != t ? "group" == this.data.type ? (console.log("+++++++++"), this.queryGroupSupplyList(this.data.query, !0, !0)) : this.querysupplyList(this.data.query, !0, !0) : "group" == this.data.type ? this.queryGroupSupplyList(this.data.query, !1, !0) : this.querysupplyList(this.data.query, !1, !0), 
        this.queryRegions(1, -1), this.queryClassifies();
    },
    querysupplyList: function(t, s, i) {
        var d = this, r = t || {}, o = this.data, l = o.from, n = o.navToDetail;
        s && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), e.default.querySupplyList(r).then(function(e) {
            if (wx.stopPullDownRefresh(), wx.hideLoading(), d.setData({
                isloadingmore: !1,
                supplys: i ? e.data.data : d.data.supplys.concat(e.data.data),
                loading: !1,
                loadmore: e.data.nextCursor > 0,
                pagination: {
                    nextCursor: e.data.nextCursor,
                    previousCursor: e.data.previousCursor,
                    totalNumber: e.data.totalNumber
                },
                query: a({}, d.data.query, {
                    pageNo: e.data.nextCursor
                })
            }), "page" == l && n && e.data.data && 1 == e.data.data.length) {
                var t = e.data.data[0];
                d.setData({
                    navToDetail: !1
                }), wx.redirectTo({
                    url: "/pages/gongqiu/supplyDetail/index?id=" + t.id
                });
            } else d.setData({
                navToDetail: !1
            });
        }).catch(function(a) {
            console.log(a), wx.stopPullDownRefresh(), wx.hideLoading(), d.setData({
                loading: !1,
                loadmore: !1,
                isloadingmore: !1
            });
        });
    },
    queryGroupSupplyList: function(t, s, i) {
        var d = this, r = t || {}, o = this.data;
        o.from, o.navToDetail;
        s && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), e.default.queryGroupSupply(r).then(function(e) {
            wx.stopPullDownRefresh(), wx.hideLoading(), d.setData({
                isloadingmore: !1,
                supplys: i ? e.data.data : d.data.supplys.concat(e.data.data),
                loading: !1,
                loadmore: e.data.nextCursor > 0,
                pagination: {
                    nextCursor: e.data.nextCursor,
                    previousCursor: e.data.previousCursor,
                    totalNumber: e.data.totalNumber
                },
                query: a({}, d.data.query, {
                    pageNo: e.data.nextCursor
                })
            });
        }).catch(function(a) {
            console.log(a), wx.stopPullDownRefresh(), wx.hideLoading(), d.setData({
                loading: !1,
                loadmore: !1,
                isloadingmore: !1
            });
        });
    },
    lower: function(a) {
        this.data.loadmore && !this.data.isloadingmore && (this.setData({
            isloadingmore: !0
        }), "group" == this.data.type ? this.queryGroupSupplyList(this.data.query, !1, !1) : this.querysupplyList(this.data.query, !1, !1));
    },
    queryRegions: function(a, t) {
        var s = this;
        1 == a ? e.default.queryRegions({
            parentId: t
        }).then(function(a) {
            a.data.splice(0, 0, {
                code: "-1",
                fullName: "全国",
                id: 0,
                name: "全国",
                parentId: "-1"
            }), s.setData({
                addresses: [ a.data, [ {
                    code: "-1",
                    fullName: "全国",
                    id: 0,
                    name: "全国",
                    parentId: "-1"
                } ], [ {
                    code: "-1",
                    fullName: "全国",
                    id: 0,
                    name: "全国",
                    parentId: "-1"
                } ] ]
            });
        }).catch(function(a) {
            s.showTopTips(a.message || "查询失败");
        }) : 2 == a ? e.default.queryRegions({
            parentId: t
        }).then(function(a) {
            s.setData({
                addresses: [ s.data.addresses[0], a.data, [] ]
            }), s.queryRegions(3, a.data[0].code);
        }).catch(function(a) {
            s.showTopTips(a.message || "查询失败");
        }) : 3 == a && e.default.queryRegions({
            parentId: t
        }).then(function(a) {
            a.data.splice(0, 0, {
                code: "-1",
                fullName: "全部",
                id: 0,
                name: "全部",
                parentId: "-1"
            }), s.setData({
                addresses: [ s.data.addresses[0], s.data.addresses[1], a.data ]
            });
        }).catch(function(a) {
            s.showTopTips(a.message || "查询失败");
        });
    },
    queryClassifies: function() {
        var a = this;
        e.default.queryCategoryList().then(function(e) {
            var t = e.data.map(function(a) {
                return {
                    id: a.id,
                    name: a.name,
                    pid: a.pid
                };
            });
            t.splice(0, 0, {
                id: 0,
                name: "全部分类",
                pid: 0
            });
            var s = [ {
                id: 0,
                name: "全部",
                pid: 0
            } ];
            a.setData({
                data: e.data,
                classifies: [ t, s ]
            });
        }).catch(function(a) {
            console.log(a);
        });
    },
    bindAddressPickerChange: function(e) {
        var t = this.data.addresses, s = 0 != t[2][e.detail.value[2]].id ? t[2][e.detail.value[2]].fullName : 0 != t[1][e.detail.value[1]].id ? "全" + t[1][e.detail.value[1]].fullName : "全国";
        this.setData({
            addressIndex: e.detail.value,
            selectAddress: s
        });
        var i = 0 != t[0][e.detail.value[0]].id ? t[0][e.detail.value[0]].code : "", d = 0 != t[1][e.detail.value[1]].id ? t[1][e.detail.value[1]].code : "", r = 0 != t[2][e.detail.value[2]].id ? t[2][e.detail.value[2]].code : "", o = a({}, this.data.query, {
            provinceCode: i,
            cityCode: d,
            districtCode: r,
            pageNo: 1
        });
        this.setData({
            query: o
        }), this.querysupplyList(o, !0, !0);
    },
    bindAddressPickerColumnChange: function(a) {
        var e = this.data.addresses;
        switch (a.detail.column) {
          case 0:
            if (0 == a.detail.value) {
                var t = e[0];
                this.setData({
                    addresses: [ t, [ {
                        code: "-1",
                        fullName: "全国",
                        id: 0,
                        name: "全国",
                        parentId: "-1"
                    } ], [ {
                        code: "-1",
                        fullName: "全国",
                        id: 0,
                        name: "全国",
                        parentId: "-1"
                    } ] ]
                });
            } else this.queryRegions(2, e[0][a.detail.value].code);
            break;

          case 1:
            this.queryRegions(3, e[1][a.detail.value].code);
        }
    },
    bindTypePickerChange: function(e) {
        this.setData({
            typeIndex: e.detail.value
        });
        var t = 1;
        switch (e.detail.value) {
          case "0":
            t = 1;
            break;

          case "1":
            t = 3;
            break;

          case "2":
            t = 4;
        }
        var s = a({}, this.data.query, {
            dataType: t,
            pageNo: 1
        });
        this.setData({
            query: s
        }), this.querysupplyList(s, !0, !0);
    },
    bindClassifyMultiPickerChange: function(e) {
        var t = this.data.classifies, s = 0 != t[1][e.detail.value[1]].id ? t[1][e.detail.value[1]].name : t[0][e.detail.value[0]].name;
        this.setData({
            classifyIndex: e.detail.value,
            selectClassify: s
        });
        var i = 0 != t[1][e.detail.value[1]].id ? t[1][e.detail.value[1]].id : t[0][e.detail.value[0]].id, d = a({}, this.data.query, {
            pageNo: 1,
            categoryId: i
        });
        this.setData({
            query: d
        }), this.querysupplyList(d, !0, !0);
    },
    bindClassifyMultiPickerColumnChange: function(a) {
        var e = this.data.classifies;
        if (0 == a.detail.column) {
            var t = [];
            t = 0 == a.detail.value || !this.data.data[a.detail.value - 1].categoryList || this.data.data[a.detail.value - 1].categoryList.length < 1 ? [ {
                id: 0,
                name: "全部",
                pid: 0
            } ] : this.data.data[a.detail.value - 1].categoryList.map(function(a) {
                return {
                    id: a.id,
                    name: a.name,
                    pid: a.pid
                };
            }), this.setData({
                classifies: [ e[0], t ]
            });
        }
    },
    handlesupply: function(a) {
        var e = a.currentTarget.dataset.id;
        getCurrentPages().length, wx.navigateTo({
            url: "/pages/gongqiu/supplyDetail/index?id=" + e
        });
    },
    bindsupplysearch: function() {
        var a = this.data.query.title || "";
        wx.navigateTo({
            url: "/pages/sources/newsinfo/newssearch?keyword=" + a
        });
    },
    handlephone: function(a) {
        var e = a.currentTarget.dataset.mobile;
        wx.makePhoneCall({
            phoneNumber: e
        });
    }
};