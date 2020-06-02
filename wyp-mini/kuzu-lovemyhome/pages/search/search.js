var a = getApp(), t = require("../../sdk/dingxiang.js");

Page({
    data: {
        list_param: 1,
        search_param: 1,
        qiehuanName: "二手房",
        qieHidden: !0,
        lianxiangList: [],
        inputValue: "",
        hotListAll: [],
        hotList: [],
        changeindex: 6,
        keywordsVal: "",
        historyRecord: [],
        arrRecord: [],
        historyRecordRent: [],
        arrRecordRent: []
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
                list_param: e.listParam,
                search_param: e.searchParam,
                inputValue: e.searchInp,
                historyRecord: wx.getStorageSync("self.data.historyRecord") || [],
                historyRecordRent: wx.getStorageSync("self.data.historyRecordRent") || []
            }), r.hotData(), r.qiehuanData());
        });
    },
    qiehuanData: function() {
        this.setData({
            qiehuanData: [ {
                name: "二手房"
            }, {
                name: "租房"
            } ],
            curName: "二手房"
        });
    },
    qiehuanFn: function(a) {
        this.setData({
            qieHidden: !1
        });
    },
    qiehuanConFn: function(a) {
        var t = this, e = a.currentTarget.dataset;
        t.setData({
            curName: e.name,
            qiehuanName: e.name,
            list_param: e.index + 1,
            qieHidden: !0
        }), this.hotData();
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
        var t = this, e = a.currentTarget.dataset, r = "";
        switch (t.data.keywordsVal = e.name, wx.redirectTo({
            url: "../sale/sale?searchId=" + e.searchid + "&searchType=" + e.searchtype + "&cityId=" + t.data.cityId + "&searchName=" + e.name + "&parentId=" + e.parentid + "&listParam=" + t.data.list_param
        }), +e.searchtype) {
          case 1:
            r = "区域";
            break;

          case 2:
            r = "商圈";
            break;

          case 3:
            r = "小区";
            break;

          case 4:
            r = "地铁";
            break;

          case 5:
            r = "地铁";
        }
        var i = [ t.data.keywordsVal, r, e.searchid, e.searchtype, e.parentid ];
        t.historyRecord(i);
    },
    bindconfirm: function(a) {
        var t = this, e = a.detail.value["search - input"] ? a.detail.value["search - input"] : a.detail.value;
        t.data.keywordsVal = e, console.log("bindconfirm: ", e), wx.redirectTo({
            url: "../sale/sale?keyWords=" + e + "&searchType=0&cityId=" + t.data.cityId + "&searchName=" + e + "&listParam=" + t.data.list_param
        });
        var r = [ t.data.keywordsVal ];
        t.historyRecord(r);
    },
    search: function(a) {
        var t = this;
        if (1 == t.data.list_param) e = {
            searchtype: 1,
            keywords: a
        };
        if (2 == t.data.list_param) var e = {
            searchtype: 2,
            keywords: a
        };
        wx.request({
            url: "https://appapi.5i5j.com/appapi/search/" + t.data.cityId + "/v1/searchhome",
            method: "POST",
            data: e,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                null == a.data.data ? t.setData({
                    lianxiangList: ""
                }) : t.setData({
                    lianxiangList: a.data.data
                });
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    hotData: function() {
        var a = this;
        if (1 == a.data.list_param) t = {
            type: 1
        };
        if (2 == a.data.list_param) var t = {
            type: 2
        };
        wx.request({
            url: "https://appapi.5i5j.com/appapi/search/" + a.data.cityId + "/v1/choosekeywords",
            method: "POST",
            data: t,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                a.setData({
                    hotListAll: t.data.data,
                    hotList: t.data.data
                });
            },
            fail: function(a) {
                console.log("error", a);
            },
            complete: function(a) {}
        });
    },
    hotLinkFn: function(a) {
        var t = this, e = a.currentTarget.dataset, r = "";
        t.data.keywordsVal = e.name;
        getCurrentPages();
        switch (wx.redirectTo({
            url: "../sale/sale?searchId=" + e.searchid + "&searchType=" + e.searchtype + "&cityId=" + t.data.cityId + "&searchName=" + e.name + "&parentId=" + e.parentid + "&listParam=" + t.data.list_param
        }), +e.searchtype) {
          case 1:
            r = "区域";
            break;

          case 2:
            r = "商圈";
            break;

          case 3:
            r = "小区";
            break;

          case 4:
            r = "地铁";
            break;

          case 5:
            r = "地铁";
        }
        var i = [ t.data.keywordsVal, r, e.searchid, e.searchtype, e.parentid ];
        t.historyRecord(i);
    },
    historyLinkFn: function(a) {
        var t = this, e = a.currentTarget.dataset;
        t.data.keywordsVal = e.name;
        getCurrentPages();
        e.searchid ? (console.log("下拉搜索"), wx.redirectTo({
            url: "../sale/sale?searchId=" + e.searchid + "&searchType=" + e.searchtype + "&cityId=" + t.data.cityId + "&searchName=" + e.name + "&parentId=" + e.parentid + "&listParam=" + t.data.list_param
        })) : (console.log("键盘搜索"), wx.redirectTo({
            url: "../sale/sale?keyWords=" + t.data.keywordsVal + "&searchType=0&cityId=" + t.data.cityId + "&searchName=" + t.data.keywordsVal + "&listParam=" + t.data.list_param
        })), console.log("list_param历史点击", t.data.list_param);
    },
    historyRecord: function(a) {
        var t = this;
        if (1 == t.data.list_param) {
            for (e = 0; e < t.data.historyRecord.length; e++) t.data.arrRecord.push(t.data.historyRecord[e].value[0]);
            -1 == t.data.arrRecord.indexOf(t.data.keywordsVal) && (t.data.historyRecord.length < 10 ? t.data.historyRecord.unshift({
                value: a,
                id: t.data.historyRecord.length
            }) : (t.data.historyRecord.pop(), t.data.historyRecord.unshift({
                value: a,
                id: t.data.historyRecord.length
            }))), wx.setStorageSync("self.data.historyRecord", t.data.historyRecord);
        }
        if (2 == t.data.list_param) {
            for (var e = 0; e < t.data.historyRecordRent.length; e++) t.data.arrRecord.push(t.data.historyRecordRent[e].value[0]);
            -1 == t.data.arrRecord.indexOf(t.data.keywordsVal) && (t.data.historyRecordRent.length < 10 ? t.data.historyRecordRent.unshift({
                value: a,
                id: t.data.historyRecordRent.length
            }) : (t.data.historyRecordRent.pop(), t.data.historyRecordRent.unshift({
                value: a,
                id: t.data.historyRecordRent.length
            }))), wx.setStorageSync("self.data.historyRecordRent", t.data.historyRecordRent);
        }
    },
    historyDelFn: function() {
        var a = this;
        wx.clearStorageSync("searhRecord"), 1 == a.data.list_param && this.setData({
            historyRecord: []
        }), 2 == a.data.list_param && this.setData({
            historyRecordRent: []
        });
    },
    refreshFn: function() {
        var a = this.data.hotListAll.length, t = this.data.hotListAll.slice(this.data.changeindex, this.data.changeindex + 6);
        this.setData({
            hotList: t
        }), this.data.changeindex += 6, this.data.changeindex >= a && (this.data.changeindex = 0);
    },
    onShow: function() {}
});