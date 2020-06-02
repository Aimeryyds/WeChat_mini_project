var a = getApp(), t = require("../../sdk/dingxiang.js");

Page({
    data: {
        qiehuanName: "二手房",
        qieHidden: !0,
        lianxiangList: [],
        inputValue: "",
        keywordsVal: "",
        historyRecord: [],
        arrRecord: []
    },
    onLoad: function(e) {
        var r = this;
        new t({
            appId: a.globalData.dxAppId
        }, function(a, t) {
            a ? console.log(a) : (r.setData({
                dxDeviceId: t
            }), r.setData({
                cityId: e.cityId,
                inputValue: e.searchInp,
                historyRecord: wx.getStorageSync("self.data.historyCommunity") || []
            }));
        });
    },
    cancelFn: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    searchInpFn: function(a) {
        this.setData({
            inputValue: a.detail.value
        }), this.search(a.detail.value);
    },
    delInp: function() {
        var a = this;
        a.setData({
            inputValue: ""
        }), a.search("");
    },
    toListLink: function(a) {
        var t = this, e = a.currentTarget.dataset;
        t.data.keywordsVal = e.name, wx.getSystemInfoSync();
        var r = [ t.data.keywordsVal ];
        t.historyRecord(r), wx.redirectTo({
            url: "../community/community?keyWords=" + e.name + "&searchType=0&cityId=" + t.data.cityId + "&searchName=" + e.name
        });
    },
    bindconfirm: function(a) {
        var t = this, e = a.detail.value["search-input"] ? a.detail.value["search-input"] : a.detail.value;
        t.data.keywordsVal = e, console.log("bindconfirm: ", e), wx.redirectTo({
            url: "../community/community?keyWords=" + e + "&searchType=0&cityId=" + t.data.cityId + "&searchName=" + e
        });
        var r = [ t.data.keywordsVal ];
        t.historyRecord(r);
    },
    search: function(t) {
        var e = this, r = a.globalData.url_host, i = {
            searchtype: 3,
            keywords: t
        };
        wx.request({
            url: r + "/appapi/search/" + e.data.cityId + "/v1/searchhome",
            method: "POST",
            data: i,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                null == a.data.data ? e.setData({
                    lianxiangList: ""
                }) : (e.setData({
                    lianxiangList: a.data.data
                }), console.log("下拉联想", a.data.data));
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    historyLinkFn: function(a) {
        var t = this, e = a.currentTarget.dataset;
        t.data.keywordsVal = e.name;
        getCurrentPages();
        wx.redirectTo({
            url: "../community/community?keyWords=" + e.name + "&searchType=0&cityId=" + t.data.cityId + "&searchName=" + e.name
        }), console.log("list_param历史点击", t.data.list_param);
    },
    historyRecord: function(a) {
        console.log("his", a);
        for (var t = this, e = 0; e < t.data.historyRecord.length; e++) t.data.arrRecord.push(t.data.historyRecord[e].value[0]);
        -1 == t.data.arrRecord.indexOf(t.data.keywordsVal) && (t.data.historyRecord.length < 10 ? t.data.historyRecord.unshift({
            value: a,
            id: t.data.historyRecord.length
        }) : (t.data.historyRecord.pop(), t.data.historyRecord.unshift({
            value: a,
            id: t.data.historyRecord.length
        }))), wx.setStorageSync("self.data.historyCommunity", t.data.historyRecord);
    },
    historyDelFn: function() {
        wx.clearStorageSync("self.data.historyCommunity"), this.setData({
            historyRecord: []
        });
    }
});