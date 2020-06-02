var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, t = {
    filter: !0,
    filterActive: !1,
    segements: [ {
        key: "sales",
        title: "销量最高",
        checked: !0
    }, {
        key: "distance",
        title: "距离最近"
    }, {
        key: "evaluateCount",
        title: "好评最高"
    } ],
    filters: [ {
        key: "activityType",
        type: "radio",
        title: "优惠活动(单选)",
        options: [ {
            key: "3",
            title: "满减优惠",
            label: "减",
            labelColor: "#FF3366"
        }, {
            key: "4",
            title: "到店领券",
            label: "券",
            labelColor: "#FF6699"
        }, {
            key: "2",
            title: "拼团活动",
            label: "团",
            labelColor: "#FF6600"
        }, {
            key: "1",
            title: "秒杀活动",
            label: "秒",
            labelColor: "#CC66CC"
        } ]
    }, {
        key: "logisticsType",
        type: "radio",
        title: "商家服务",
        options: [ {
            key: "1",
            title: "到店自提"
        } ]
    } ]
};

Component({
    properties: {
        serverTime: {
            type: Number,
            observer: "reload"
        }
    },
    data: e({}, JSON.parse(JSON.stringify(t))),
    methods: {
        reload: function(a) {
            this.setData(e({}, JSON.parse(JSON.stringify(t))));
        },
        handleTabSwitch: function(e) {
            var t = "";
            switch (e.detail.key) {
              case "sales":
                t = "sales:descend";
                break;

              case "distance":
                t = "distance:ascend";
                break;

              case "evaluateCount":
                t = "evaluateCount:descend";
            }
            this.setData({
                sort: t
            }), this.triggerEvent("query", {
                sort: t,
                query: this.data.query
            });
        },
        handleFilter: function(e) {
            var t = e.detail, a = this.selectComponent(".Segements");
            a && a.hideFilterPop();
            var i = {};
            t.forEach(function(e) {
                var t = e.options.filter(function(e) {
                    return e.checked;
                }).map(function(e) {
                    return e.key;
                });
                t.length > 0 && (i[e.key] = t.join(","));
            }), this.setData({
                query: i,
                filterActive: Object.keys(i).length > 0
            }), this.triggerEvent("query", {
                query: i,
                sort: this.data.sort
            });
        }
    }
});