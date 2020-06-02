var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../behaviors/toptips.js"));

Component({
    behaviors: [ e.default ],
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        dateList: {
            type: Array,
            value: [],
            observer: "initDateTimes"
        }
    },
    data: {
        days: [],
        times: [],
        currentIndex: 0,
        timeIndex: -1,
        tempCurrentIndex: 0,
        tempTimeIndex: -1
    },
    methods: {
        initDateTimes: function() {
            var e = this.data.dateList.map(function(e) {
                return {
                    remainNum: e.remainNum,
                    text: e.weekDay,
                    available: e.available,
                    day: e.month + "-" + e.day
                };
            }), t = this.data.dateList.map(function(e) {
                return e.timeData;
            });
            this.setData({
                days: e,
                times: t
            });
        },
        handleClickDay: function(e) {
            var t = 0, a = this.data.dateList, i = e.currentTarget.dataset.index;
            for (var r in a[i].timeData) if (1 == a[i].timeData[r].available) {
                t = r;
                break;
            }
            this.setData({
                tempCurrentIndex: i,
                tempTimeIndex: t
            });
        },
        handleClickTime: function(e) {
            if (!e.currentTarget.dataset.disabled) {
                var t = e.currentTarget.dataset.index;
                this.setData({
                    tempTimeIndex: t
                });
            }
        },
        handleUpdateDateTime: function() {
            var e = this.data, t = e.tempCurrentIndex, a = e.tempTimeIndex;
            if (-1 != a) {
                var i = this.data.dateList, r = {
                    arrivedYear: i[t].year,
                    arrivedMonth: i[t].month,
                    arrivedDay: i[t].day,
                    arrivedTime: i[t].timeData[a].time,
                    arrivedWeek: i[t].weekDay
                };
                this.triggerEvent("ok", {
                    arrivedDate: r
                }, {});
            } else console.log("请先选择时间");
        },
        hideDialog: function() {
            this.triggerEvent("hide", {}, {});
        }
    }
});