var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
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
        stores: {
            type: Object
        }
    },
    data: {
        query: {},
        filter: !1,
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
            key: "distance",
            title: "距离最近",
            order: "ascend"
        } ]
    },
    ready: function() {
        var e = this;
        wx.getSystemInfo({
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
            var t = e.detail, r = t.key, s = t.order;
            this.setData({
                sort: r + ":" + s
            }), this.triggerEvent("onquery", {
                sort: this.data.sort,
                query: this.data.query
            });
        },
        handleSearch: function(e, t) {
            this.reset();
        },
        handleScrollBottom: function(t) {
            console.log("to bottom");
            var r = this.data.stores;
            r.pageNo < r.pageTotal && this.triggerEvent("onquery", {
                sort: this.data.sort,
                query: e({}, this.data.query, {
                    pageNo: r.pageNo + 1
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
                    key: "distance",
                    title: "距离最近",
                    order: "ascend"
                } ]
            });
        }
    }
});