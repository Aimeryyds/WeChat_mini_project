Component({
    data: {
        list: [ {
            title: "排序方式",
            items: [ {
                name: "时间排序",
                eventName: "timeSortEvent",
                value: "time"
            }, {
                name: "名称排序",
                eventName: "nameSortEvent",
                value: "name"
            } ]
        }, {
            title: "\b视图",
            items: [ {
                name: "列表",
                eventName: "switchListEvent",
                value: "list"
            }, {
                name: "缩略图",
                eventName: "switchGridEvent",
                value: "grid"
            } ]
        } ],
        order: "time",
        mode: "list",
        isShow: !1
    },
    methods: {
        emitEvent: function(e) {
            var t = e.currentTarget.dataset, i = this.data, a = i.order, n = i.mode, m = t.value, s = t.eventname;
            ("time" === m || "name" === m ? a === m : n === m) || (this.triggerEvent(s, {
                mode: m
            }), this.hide());
        },
        show: function() {
            this.setData({
                order: getApp().globalData.listOrder,
                mode: wx.getCurrentViewMode(),
                isShow: !0
            });
        },
        hide: function() {
            this.setData({
                isShow: !1
            }), this.triggerEvent("hideOperModeDialog");
        }
    }
});