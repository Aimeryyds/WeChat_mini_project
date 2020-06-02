function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
}, a = t(require("../../utils/const.js")), i = t(require("../../utils/notification.js")), n = t(require("../../utils/util.js"));

Component({
    properties: {
        isTimeChangeable: {
            type: Boolean,
            value: !0
        },
        inTime_data: {
            type: String,
            value: ""
        },
        leaveTime_data: {
            type: String,
            value: ""
        },
        statistics_data: {
            type: Number,
            value: 3
        },
        startDate: {
            type: Number,
            value: 0
        },
        endDate: {
            type: Number,
            value: 0
        }
    },
    data: {},
    attached: function() {
        this.init();
    },
    ready: function() {},
    detached: function() {
        console.log("移除接收酒店时间变化的通知---settings.action.HOTEL_DATE_CHANGED===="), i.default.remove(a.default.action.HOTEL_DATE_CHANGED, this);
    },
    methods: {
        init: function() {
            var t = this, s = this, r = getApp().getFlash("inTimeObj");
            console.log("=========inTimeObj==============", r), r && r.startDate && r.startDate > 0 ? this.setData(e({}, r), function() {
                s.triggerEvent("changetime", s.data);
            }) : this.setData({
                inTime_data: n.default.getDateStr(0) + " 今天",
                leaveTime_data: n.default.getDateStr(1) + " 明天",
                statistics_data: 1
            }, function() {
                s.triggerEvent("changetime", s.data);
            }), i.default.register(a.default.action.HOTEL_DATE_CHANGED, this, function(e) {
                var a = t;
                console.log("接收酒店时间变化的通知-----封装组件----settings.action.HOTEL_DATE_CHANGED====", e.data), 
                a.setData({
                    startDate: e.data.startDate,
                    endDate: e.data.endDate,
                    inTime_data: n.default.timestampToTime(e.data.startDate),
                    leaveTime_data: n.default.timestampToTime(e.data.endDate),
                    statistics_data: (e.data.endDate - e.data.startDate) / 864e5
                }, function() {
                    a.triggerEvent("changetime", a.data);
                });
            });
        },
        handleChangeTime: function(t) {
            if (console.log("isTimeChangeable---\x3e", this.data.isTimeChangeable), this.data.isTimeChangeable) {
                var e = this.data, a = e.startDate, i = e.endDate;
                a > 0 && i > 0 ? wx.navigateTo({
                    url: "/pages/hotel/checkdate/index?startDate=" + a + "&endDate=" + i
                }) : a > 0 ? wx.navigateTo({
                    url: "/pages/hotel/checkdate/index?startDate=" + a
                }) : i > 0 ? wx.navigateTo({
                    url: "/pages/hotel/checkdate/index?endDate=" + i
                }) : wx.navigateTo({
                    url: "/pages/hotel/checkdate/index"
                });
            }
        }
    }
});