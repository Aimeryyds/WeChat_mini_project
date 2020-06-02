var a = getApp(), t = require("../../sdk/dingxiang.js");

Page({
    data: {
        lianxiangList: [],
        inputValue: "",
        keywordsVal: "",
        historyRecord: [],
        arrRecord: [],
        keywordsValArr: [],
        nodata: !1,
        lxHidden: !0,
        lishi: !1,
        inputCha: !0
    },
    onLoad: function(e) {
        var o = this, d = this;
        console.log("城市", e.cityId), new t({
            appId: a.globalData.dxAppId
        }, function(a, t) {
            a ? console.log(a) : (o.setData({
                dxDeviceId: t,
                cityId: e.cityId,
                historyRecord: wx.getStorageSync("that.data.historySellHouseSearch") || [],
                historyRecordSale: wx.getStorageSync("that.data.historyRecordSale") || []
            }), console.log("changdu----", d.data.historyRecord.length), 0 != d.data.historyRecord.length && (console.log("test4"), 
            d.setData({
                nodata: !0
            })));
        }), console.log("历史记录---", d.data.historyRecord);
    },
    searchInpFn: function(a) {
        console.log("输入-----", a.detail.value), "" != a.detail.value && (console.log(1111), 
        this.setData({
            inputCha: !1
        })), this.setData({
            inputValue: a.detail.value
        }), this.search(a.detail.value);
    },
    delInp: function() {
        var a = this;
        a.setData({
            inputValue: "",
            inputCha: !0
        }), a.search("");
    },
    search: function(t) {
        var e = this, o = a.globalData.url_host, d = {
            keywords: t
        };
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
                null == a.data.data ? (console.log("test1"), e.setData({
                    lianxiangList: "",
                    nodata: !0,
                    lishi: !1,
                    lxHidden: !1
                }), null == a.data.data && 0 == e.data.historyRecord.length && e.setData({
                    nodata: !1
                }), "" == e.data.inputValue && e.setData({
                    lxHidden: !0
                }), "" != e.data.inputValue && (console.log("输入框有值"), e.setData({
                    nodata: !0
                })), "" != e.data.inputValue && null == a.data.data && (e.setData({
                    lxHidden: !1,
                    lishi: !0
                }), console.log(222))) : (console.log("test2"), e.setData({
                    lianxiangList: a.data.data,
                    nodata: !0,
                    lxHidden: !0,
                    lishi: !0
                }), console.log("下拉联想", a.data.data));
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    bindconfirm: function(a) {
        var t = this, e = a.detail.value["search-input"] ? a.detail.value["search-input"] : a.detail.value;
        if (5 == t.data.cityId || 7 == t.data.cityId || 8 == t.data.cityId || 9 == t.data.cityId || 16 == t.data.cityId || 18 == t.data.cityId || 19 == t.data.cityId || 20 == t.data.cityId || 22 == t.data.cityId || 24 == t.data.cityId) {
            t.data.keywordsVal = e, console.log("bindconfirm: ", e), console.log("支持手录的城市: "), 
            wx.redirectTo({
                url: "../sellHouse/sellHouse?searchType=0&searchName=" + e + "&searchId=null&cityId=" + t.data.cityId
            });
            var o = [ t.data.keywordsVal ];
            t.historyRecord(o), console.log("走这里");
        }
    },
    toListLink: function(a) {
        var t = this, e = a.currentTarget.dataset;
        t.data.keywordsVal = e.alias;
        var o = [ t.data.keywordsVal, e.adrs, e.communityid ];
        console.log("++++", e), t.historyRecord(o), wx.redirectTo({
            url: "../sellHouse/sellHouse?searchType=0&searchName=" + e.alias + "&searchId=" + e.communityid + "&cityId=" + t.data.cityId
        });
    },
    historyLinkFn: function(a) {
        var t = this, e = a.currentTarget.dataset;
        console.log("currentData+++++----", e);
        t.data.keywordsVal = e.alias;
        getCurrentPages();
        wx.redirectTo({
            url: "../sellHouse/sellHouse?searchName=" + e.name + "&searchType=0&searchId=" + e.communityid + "&cityId=" + t.data.cityId
        });
    },
    historyRecord: function(a) {
        console.log("his", a);
        for (var t = this, e = 0; e < t.data.historyRecord.length; e++) t.data.arrRecord.push(t.data.historyRecord[e].value[0]);
        -1 == t.data.arrRecord.indexOf(t.data.keywordsVal) && (t.data.historyRecord.length < 5 ? t.data.historyRecord.unshift({
            value: a,
            id: t.data.historyRecord.length
        }) : (console.log("shandiao"), t.data.historyRecord.pop(), console.log("000-----", t.data.historyRecord.pop()), 
        t.data.historyRecord.unshift({
            value: a,
            id: t.data.historyRecord.length
        }))), wx.setStorageSync("that.data.historySellHouseSearch", t.data.historyRecord), 
        console.log(t.data.arrRecord), console.log(t.data.historyRecord);
    },
    historyDelFn: function() {
        wx.clearStorageSync("that.data.historySellHouseSearch"), console.log("test3"), this.setData({
            historyRecord: [],
            nodata: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});