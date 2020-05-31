var t = require("../../netdisk_utils/batchFn.js"), s = (require("../../netdiisk_requestapi/searchApi.js"), 
getApp());

wx.ENV.CONF.SEARCH_COUNT;

Page({
    data: {
        height: 60,
        value: "",
        his: [],
        show: !0,
        xListLen: 0,
        isBatch: !1
    },
    onLoad: function(i) {
        this.toast = this.selectComponent("#toast"), this.modalDialog = this.selectComponent("#modalDialog"), 
        this.dialog = this.selectComponent("#dialog"), this.toast = this.selectComponent("#toast"), 
        this.showDialog = this.selectComponent("#showDialog"), this.XList = this.selectComponent("#XList"), 
        this.pageType = "search", this.isFocus = !1;
        var a = wx.getStorageSync("his");
        this.setData({
            height: s.globalData.navHeight,
            his: a,
            systemInfo: s.globalData.systemInfo
        }), (0, t.batchFn)(this), this.XList.initCurrentPage(this);
    },
    input: function(t) {
        var s = t.detail.value;
        this.setData({
            value: s
        });
    },
    confirm: function() {
        this.search();
    },
    focus: function() {
        var t = this;
        this.setData({
            show: !0
        }, function() {
            t.isFocus = !0;
        });
    },
    search: function() {
        var t = this.trim(this.data.value);
        t ? (this.doLoc(t), this.XList.loadList(t), this.setData({
            show: !1
        })) : this.setData({
            value: ""
        });
    },
    cancel: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    doLoc: function(t) {
        var s = wx.getStorageSync("his") || [];
        s.map(function(i, a) {
            i === t && s.splice(a, 1);
        }), s.unshift(t), s.length > 5 && s.pop(), this.setData({
            his: s
        }, function() {
            wx.setStorageSync("his", s);
        });
    },
    clearAll: function() {
        wx.removeStorage({
            key: "his"
        }), this.setData({
            his: []
        });
    },
    fastSearch: function(t) {
        if (this.isFocus) {
            var s = t.target.dataset.item;
            this.doLoc(s), this.XList.loadList(s), this.setData({
                show: !1,
                value: s
            });
        }
    },
    clear: function() {
        this.setData({
            value: ""
        });
    },
    trim: function(t) {
        for (var s = t.replace(/^\s\s*/, ""), i = s.length; /\s/.test(s.charAt(--i)); ) ;
        return s.slice(0, i + 1);
    },
    setIsBatchTrue: function() {
        this.setData({
            isBatch: !0
        });
    }
});