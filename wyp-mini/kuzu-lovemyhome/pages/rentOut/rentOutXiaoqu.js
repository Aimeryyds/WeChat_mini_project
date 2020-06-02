var t = require("../../sdk/dingxiang.js"), a = getApp();

Page({
    data: {
        commNameVal: "",
        nolxHidden: !0,
        historyHidden: !0,
        noHistoryHidden: !0,
        lianxiangList: [],
        keywordsVal: "",
        historyRecord: [],
        arrRecord: []
    },
    onLoad: function(e) {
        var o = this, d = this;
        new t({
            appId: a.globalData.dxAppId
        }, function(t, a) {
            t ? console.log(t) : (o.setData({
                dxDeviceId: a
            }), d.setData({
                cityId: e.cityId,
                historyRecord: wx.getStorageSync("self.data.historyRecord") || [],
                historyRecordRent: wx.getStorageSync("self.data.historyRecordRent") || []
            }), 0 != d.data.historyRecord.length ? d.setData({
                historyHidden: !1
            }) : d.setData({
                historyHidden: !0,
                noHistoryHidden: !1
            }));
        });
    },
    searchInpFn: function(t) {
        var a = this;
        a.setData({
            commNameVal: t.detail.value
        }), a.search(t.detail.value);
    },
    delInp: function() {
        var t = this;
        t.setData({
            commNameVal: ""
        }), t.search("");
    },
    search: function(t) {
        var e = this, o = a.globalData.url_host, d = {
            keywords: t
        }, r = e.data.historyRecord.length;
        wx.request({
            url: o + "/appapi/community/" + e.data.cityId + "/v1/suggest",
            method: "POST",
            data: d,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                null == a.data.data ? (e.setData({
                    lianxiangList: "",
                    nolxHidden: !1,
                    noHistoryHidden: !0,
                    historyHidden: !0
                }), "" == t && (console.log("historyRecord--", e.data.historyRecord.length), r > 0 ? e.setData({
                    historyHidden: !1,
                    nolxHidden: !0
                }) : e.setData({
                    noHistoryHidden: !1,
                    historyHidden: !0,
                    nolxHidden: !0
                }))) : e.setData({
                    lianxiangList: a.data.data
                });
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    toRentOutTap: function(t) {
        var a = this, e = t.currentTarget.dataset;
        a.data.keywordsVal = e.communityname, console.log(t);
        var o = [ a.data.keywordsVal, e.historyname, e.communityid ];
        console.log("valueArr--", o), a.historyRecord(o), wx.redirectTo({
            url: "rentOut?communityName=" + a.data.keywordsVal + "&communityId=" + e.communityid + "&noteLayerHide=true&cityId=" + a.data.cityId
        });
    },
    historyLinkTap: function(t) {
        var a = this, e = t.currentTarget.dataset;
        a.data.keywordsVal = e.historyname, console.log("cityId", a.data.cityId);
        var o = [ a.data.keywordsVal, e.communityid ];
        console.log("valueArr--", o), a.historyRecord(o), wx.redirectTo({
            url: "rentOut?communityName=" + a.data.keywordsVal + "&communityId=" + e.communityid + "&noteLayerHide=true&cityId=" + a.data.cityId
        });
    },
    historyRecord: function(t) {
        for (var a = this, e = 0; e < a.data.historyRecord.length; e++) a.data.arrRecord.push(a.data.historyRecord[e].value[0]);
        -1 == a.data.arrRecord.indexOf(a.data.keywordsVal) && (a.data.historyRecord.length < 5 ? a.data.historyRecord.unshift({
            value: t,
            id: a.data.historyRecord.length
        }) : (a.data.historyRecord.pop(), a.data.historyRecord.unshift({
            value: t,
            id: a.data.historyRecord.length
        }))), wx.setStorageSync("self.data.historyRecord", a.data.historyRecord), console.log(a.data.arrRecord), 
        console.log(a.data.historyRecord);
    },
    historyDelFn: function() {
        var t = this;
        wx.clearStorageSync("searhRecord"), t.setData({
            historyRecord: [],
            historyHidden: !0,
            noHistoryHidden: !1
        });
    },
    bindconfirm: function(t) {
        var a = this, e = a.data.cityId;
        if (5 == e || 7 == e || 8 == e || 9 == e || 16 == e || 18 == e || 19 == e || 20 == e || 22 == e || 24 == e) {
            var o = t.detail.value["search - input"] ? t.detail.value["search - input"] : t.detail.value;
            a.data.keywordsVal = o, console.log("bindconfirm: ", o), wx.redirectTo({
                url: "rentOut?communityName=" + a.data.keywordsVal + "&communityId=&noteLayerHide=true&cityId=" + a.data.cityId
            });
            var d = [ a.data.keywordsVal ];
            a.historyRecord(d), console.log("valueArr", d);
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});