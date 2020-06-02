function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, a = e(require("../../../../../utils/util.js")), i = e(require("../../../../../utils/const.js")), n = e(require("../../../../../utils/notification.js")), s = e(require("../../../../../network/api")), d = {
    filter: !0,
    filterActive: !1,
    segements: [ {
        key: "time",
        value: [ "", "", "" ],
        checked: !1
    }, {
        key: "options",
        options: [ {
            key: 1,
            title: "推荐排序",
            checked: !0
        }, {
            key: 1,
            title: "好评优先"
        }, {
            key: 1,
            title: "距离最近"
        } ]
    } ],
    filters: [ {
        key: "brandIds",
        type: "radio",
        title: "品牌(单选)",
        options: []
    }, {
        key: "price",
        type: "radio",
        title: "价格",
        options: [ {
            key: "0",
            title: "不限"
        }, {
            key: "1",
            title: "￥150以下"
        }, {
            key: "2",
            title: "￥150 ~ ￥300"
        }, {
            key: "3",
            title: "￥301 ~ ￥450"
        }, {
            key: "4",
            title: "￥451 ~ ￥600"
        }, {
            key: "5",
            title: "￥600以上"
        } ]
    } ]
};

Component({
    properties: {
        serverTime: {
            type: Number,
            observer: "reload"
        },
        intime: {
            type: Object,
            value: {}
        }
    },
    data: t({}, JSON.parse(JSON.stringify(d)), {
        query: {}
    }),
    attached: function() {
        this.registerNotification();
    },
    ready: function() {
        this.init();
    },
    detached: function() {
        console.log("===========tab组件detached============"), n.default.remove(i.default.action.HOTEL_DATE_CHANGED);
    },
    methods: {
        reload: function(e) {
            this.setData(t({}, JSON.parse(JSON.stringify(d))));
        },
        init: function() {
            var e = this.data.intime;
            e && e.endDate > 0 ? this.setData({
                startDate: e.startDate,
                endDate: e.endDate,
                "segements[0].value": [ e.inTime_data, e.leaveTime_data, e.statistics_data + "晚" ],
                "segements[0].checked": !1,
                inTime_data: e.inTime_data,
                leaveTime_data: e.leaveTime_data,
                statistics_data: e.statistics_data
            }) : this.setData({
                "segements[0].value": [ a.default.getDateStr(0), a.default.getDateStr(1), "1晚" ]
            }), this.getBrands();
        },
        registerNotification: function() {
            var e = this;
            n.default.register(i.default.action.HOTEL_DATE_CHANGED, this, function(t) {
                var i = e;
                console.log("接收酒店时间变化的通知----搜索tab-------settings.action.HOTEL_DATE_CHANGED====", t.data), 
                i.setData({
                    startDate: t.data.startDate,
                    endDate: t.data.endDate,
                    "segements[0].value": [ a.default.timestampToTime(t.data.startDate), a.default.timestampToTime(t.data.endDate), (t.data.endDate - t.data.startDate) / 864e5 + "晚" ],
                    "segements[0].checked": !0,
                    statistics_data: (t.data.endDate - t.data.startDate) / 864e5,
                    inTime_data: a.default.timestampToTime(t.data.startDate),
                    leaveTime_data: a.default.timestampToTime(t.data.endDate)
                }, function() {
                    i.triggerEvent("changetime", i.data);
                });
            });
        },
        getBrands: function() {
            var e = this;
            s.default.queryHotelBrandList({}).then(function(t) {
                var a = [];
                console.log("res.data--\x3e", t.data);
                for (var i in t.data) a.push({
                    key: t.data[i].id,
                    title: t.data[i].brandName
                });
                console.log("brands--\x3e", a), e.setData({
                    "filters[0].options": a
                });
            }).catch(function(e) {
                wx.hideLoading(), console.log(e);
            });
        },
        handleChangeTime: function() {
            var e = this.data, t = e.startDate, a = e.endDate;
            t > 0 && a > 0 ? wx.navigateTo({
                url: "/pages/hotel/checkdate/index?startDate=" + t + "&endDate=" + a
            }) : t > 0 ? wx.navigateTo({
                url: "/pages/hotel/checkdate/index?startDate=" + t
            }) : a > 0 ? wx.navigateTo({
                url: "/pages/hotel/checkdate/index?endDate=" + a
            }) : wx.navigateTo({
                url: "/pages/hotel/checkdate/index"
            });
        },
        handleTabSwitch: function(e) {
            console.log("handleTabSwitch", e);
            var a = this.data.query;
            switch (e.detail.key) {
              case "time":
                this.handleChangeTime();
                break;

              case "options":
                a = t({}, a, {
                    sort: "好评优先" == e.detail.title ? "evaluateScore:descend" : "距离最近" == e.detail.title ? "distance:descend" : ""
                }), this.setData({
                    "segements[1].options": e.detail.options,
                    "segements[1].title": e.detail.title,
                    "segements[1].checked": e.detail.checked
                });
            }
        },
        handleOptionChange: function(e) {
            console.log("handleOptionChange", e);
            var a = t({}, a, {
                sort: "好评优先" == e.detail.title ? "evaluateScore:descend" : "距离最近" == e.detail.title ? "distance:ascend" : ""
            });
            this.triggerEvent("query", a);
        },
        handleFilter: function(e) {
            console.log("handleFilter", e);
            var a = e.detail, i = this.selectComponent(".Segements");
            i && i.hideFilterPop();
            var n = {};
            a.forEach(function(e) {
                var t = e.options.filter(function(e) {
                    return e.checked;
                }).map(function(e) {
                    return e.key;
                });
                t.length > 0 && (n[e.key] = t.join(","));
            }), console.log("handleFilter---query--\x3e", n);
            var s = t({}, this.data.query, {
                brandIds: n.brandIds || 0,
                price: n.price || 0
            });
            this.setData({
                query: s,
                filterActive: Object.keys(s).length > 0
            }), this.triggerEvent("query", s);
        }
    }
});