function t(t) {
    var a = this;
    t.setData(Object.assign(t.data, e({}, a.initData())));
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
}, a = (getApp(), {
    articleList: [],
    clickedMap: {},
    currentDate: "--",
    pageNum: 1,
    loadNextPage: {
        canBeLoad: !0,
        tipHidden: !0
    },
    datePickerList: [],
    isToday: !0,
    isTodayEmpty: !1,
    sharePoster: {
        hidden: !0,
        saveHidden: !0
    },
    isScrollNearTop: !0,
    isSubscribed: wx.getStorageSync("isSubscribed"),
    subscribeTipHidden: !0,
    shareBarHidden: !1,
    isTopBarFixed: !1,
    datePickerShow: !1
});

t.prototype.initData = function() {
    return a;
}, t.prototype.getData = function(t) {
    return t ? a.key : a;
}, t.prototype.setData = function(t, e) {
    t.setData(e);
}, t.prototype.execute = function(t) {}, module.exports = t;