function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../network/api"));

Page({
    data: {
        showMore: !0,
        showMore1: !0
    },
    onLoad: function(e) {
        this.setData({
            id: e.id
        }), this.queryHotelDetail();
    },
    onReady: function() {},
    queryHotelDetail: function() {
        var a = this;
        wx.showLoading({
            title: "请稍后"
        }), t.default.queryHotelDetail({
            id: this.data.id
        }).then(function(t) {
            if (console.log(t, "++++"), wx.hideLoading(), a.setData({
                phoneDetailData: t.data
            }), a.data.phoneDetailData.facilities.length > 12) {
                var o = a.data.phoneDetailData.facilities.slice(0, 12);
                a.setData(e({}, "phoneDetailData.moreData", o));
            }
        }).catch(function(e) {
            return console.log(e);
        });
    },
    callTab: function(e) {
        wx.makePhoneCall({
            phoneNumber: this.data.phoneDetailData.tel
        });
    },
    moreSource: function() {
        this.setData({
            showMore: !1
        });
    },
    moreSourceHidden: function() {
        this.setData({
            showMore: !0
        });
    },
    moreSource1: function() {
        this.setData({
            showMore1: !1
        });
    },
    moreSource1Hidden: function() {
        this.setData({
            showMore1: !0
        });
    }
});