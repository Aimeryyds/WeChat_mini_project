var t = getApp(), a = require("../../sdk/dingxiang.js");

Page({
    data: {
        cityId: 1,
        storesList: [],
        lianxiangList: [],
        inputValue: "",
        keywordsVal: "",
        nodata: !1,
        lxHidden: !0,
        inputCha: !0,
        storesName: null,
        loadinghide: !1
    },
    onLoad: function(e) {
        var n = this, o = this;
        console.log("城市", e.cityId), new a({
            appId: t.globalData.dxAppId
        }, function(t, a) {
            t ? console.log(t) : (n.setData({
                dxDeviceId: a,
                cityId: e.cityId
            }), o.storesListData());
        });
    },
    storesListData: function() {
        var a = t.globalData.url_host, e = this, n = {
            cityId: e.data.cityId
        };
        wx.request({
            url: a + "/stores/" + e.data.cityId + "/v1/list?cityid=" + e.data.cityId,
            method: "POST",
            data: n,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                200 == t.data.status && e.setData({
                    storesList: t.data.data.list,
                    loadinghide: !0
                });
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    storesContent: function(t) {
        var a = t.currentTarget.dataset.text, e = (t.currentTarget.dataset.num, getCurrentPages());
        e[e.length - 1];
        e[e.length - 2].setData({
            searchType: 0,
            storesName: a
        }), wx.navigateBack({
            delta: 1
        });
    },
    searchInpFn: function(t) {
        console.log("输入-----", t.detail.value), "" != t.detail.value && (console.log(1111), 
        this.setData({
            inputCha: !1,
            nodata: !0
        })), this.setData({
            inputValue: t.detail.value
        }), this.search(t.detail.value);
    },
    delInp: function() {
        var t = this;
        t.setData({
            inputValue: "",
            inputCha: !0,
            nodata: !1
        }), t.search("");
    },
    search: function(a) {
        var e = this, n = t.globalData.url_host, o = {
            keywords: a
        };
        wx.request({
            url: n + "/stores/" + e.data.cityId + "/v1/suggest",
            method: "POST",
            data: o,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(t) {
                null == t.data.data ? (e.setData({
                    lianxiangList: "",
                    nodata: !0,
                    lxHidden: !1
                }), "" == e.data.inputValue && e.setData({
                    lxHidden: !0,
                    nodata: !1
                }), "" != e.data.inputValue && null == t.data.data && (e.setData({
                    lxHidden: !1
                }), console.log(222))) : (e.setData({
                    lianxiangList: t.data.data,
                    nodata: !0,
                    lxHidden: !0
                }), console.log("下拉联想", t.data.data));
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    toListLink: function(t) {
        var a = this, e = t.currentTarget.dataset;
        console.log("门店信息", e), a.data.keywordsVal = e.alias;
        a.data.keywordsVal, e.address, e.communityid;
        console.log("门店名称", e.text), console.log("门店id", e.num);
        var n = getCurrentPages();
        n[n.length - 1];
        n[n.length - 2].setData({
            searchType: 0,
            storesName: e.text
        }), wx.navigateBack({
            delta: 1
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