function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../network/api"));

Component({
    properties: {
        module: {
            type: Object,
            observer: function(t, e) {
                if (this.setData({
                    scrollLeft: NaN,
                    group: t,
                    checkindex: 0
                }), e && e.options) {
                    var i = this;
                    setTimeout(function() {
                        i.setGroupWidth();
                    }, 500);
                }
            }
        }
    },
    data: {
        group: {},
        showMore: !1,
        checkindex: 0
    },
    ready: function() {
        var t = getApp().globalConfig;
        this.setData({
            isShowStoreName: t.isShowStoreName
        }), this.setGroupWidth();
    },
    methods: {
        showMore: function(t) {
            var e = this;
            wx.createSelectorQuery().in(this).select("#group").boundingClientRect(function(t) {
                e.setData({
                    moreTop: t.top * (750 / wx.getSystemInfoSync().screenWidth) + 88
                });
            }).exec(), this.setData({
                showMore: !this.data.showMore
            });
        },
        hideMore: function(t) {
            this.setData({
                showMore: !1
            });
        },
        setGroupWidth: function() {
            if (this.data.group && "type1" == this.data.group.options.showType) {
                var t = this;
                wx.createSelectorQuery().in(this).selectAll(".single-item").boundingClientRect(function(e) {
                    var i = e.reduce(function(t, e) {
                        return t + e.width;
                    }, 0);
                    t.setData({
                        width: i * (750 / wx.getSystemInfoSync().screenWidth) + 88,
                        height: 88
                    });
                }).exec();
            }
            if (this.data.group && "type2" == this.data.group.options.showType) {
                var e = wx.createSelectorQuery().in(this), i = this, o = wx.getSystemInfoSync().screenWidth;
                console.log(o, "screenWidth"), e.selectAll(".twoline-item").boundingClientRect(function(t) {
                    var e = t.reduce(function(t, e) {
                        return t + e.width;
                    }, 0);
                    if (e <= o) i.setData({
                        width: e,
                        height: 88
                    }); else {
                        var n = 0, r = 88;
                        t.reduce(function(i, a, s) {
                            var u = i + a.width;
                            return u >= (e / 2 > o ? e / 2 : o) && 0 == n && (n = u, r = s == t.length - 1 ? 88 : 176), 
                            u;
                        }, 0), i.setData({
                            width: n,
                            height: r
                        });
                    }
                }).exec();
            }
        },
        catchmove: function(t) {},
        bindCheckItem: function(t) {
            var e = t.currentTarget.dataset, i = (e.index, e.item, e.item), o = i.limitNum, n = i.cids, r = i.groupType, a = this.data.group.options.location, s = void 0 === a ? 2 : a;
            this.setData({
                checkindex: t.currentTarget.dataset.index
            });
            var u = {
                cids: n.map(function(t) {
                    return t.id;
                }).join(","),
                groupType: r,
                limitNum: o
            };
            "news" !== r && (u.location = s), this.queryIndexGroup(u);
        },
        bindCheckMoreItem: function(t) {
            var e = wx.createSelectorQuery().in(this), i = t.currentTarget.dataset, o = i.index, n = (i.item, 
            i.item), r = n.limitNum, a = n.cids, s = n.groupType;
            this.data.group.options.location;
            this.setData({
                checkindex: o
            });
            var u = this, c = {
                cids: a.map(function(t) {
                    return t.id;
                }).join(","),
                groupType: s,
                limitNum: r
            };
            "news" !== s && (c.location = 2), this.queryIndexGroup(c), e.selectAll(".single-item").boundingClientRect(function(t) {
                var e = t.reduce(function(t, e, i) {
                    return i <= o ? t + e.width : t;
                }, 0);
                e * (750 / wx.getSystemInfoSync().screenWidth) <= 662 ? u.setData({
                    scrollLeft: NaN
                }) : u.setData({
                    scrollLeft: e - 662 / 750 * wx.getSystemInfoSync().screenWidth
                });
            }).exec();
        },
        queryIndexGroup: function(i) {
            var o = this;
            e.default.queryIndexGroup(i).then(function(e) {
                var i;
                o.setData((i = {}, t(i, "group.data", e.data.data || []), t(i, "group.total", e.data.total), 
                i));
            }).catch(function(e) {
                var i;
                o.setData((i = {}, t(i, "group.data", []), t(i, "group.total", 0), i));
            });
        },
        makedataSource: function() {
            var t = this.data.group.options.groups[this.data.checkindex], e = this.data.group.options.location, i = void 0 === e ? 2 : e;
            "goods" == t.groupType ? this.jump("/pages/sources/products/index?dsId=&location=" + i + "&dataType=1&type=goodslist&categoryIds=" + t.cids.map(function(t) {
                return t.id;
            }).join(",")) : "news" == t.groupType ? this.jump("/pages/sources/newsinfo/newsinfo?location=" + i + "&type=group&dataType=2&categoryIds=" + t.cids.map(function(t) {
                return t.id;
            }).join(",")) : "project" == t.groupType ? this.jump("/pages/sources/services/index?location=" + i + "&type=group&dataType=2&categoryIds=" + t.cids.map(function(t) {
                return t.id;
            }).join(",")) : "supply" == t.groupType && this.jump("/pages/sources/supplyinfo/supplyinfo?location=" + i + "&type=group&dataType=2&categoryIds=" + t.cids.map(function(t) {
                return t.id;
            }).join(","));
        },
        jump: function(t) {
            1 == getCurrentPages().length ? wx.navigateTo({
                url: t
            }) : wx.redirectTo({
                url: t
            });
        }
    }
});