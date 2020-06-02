var t = getApp(), e = require("../../utils/hdweapp.js"), a = require("../../utils/paramConfig.js").ParamConfig, r = require("../../utils/request.js").RequestGet, s = null, n = null;

Component({
    properties: {
        roomList: {
            type: Object
        },
        statusBar: {
            type: Object
        },
        gotoUrl: {
            type: Boolean,
            observer: function(t, e) {
                t != e && (this.gotoUrl = t);
            }
        }
    },
    detached: function() {
        s = null, n = null;
    },
    data: {
        focusSearch: !1,
        searchQuery: "",
        hasInput: !1,
        searchHistory: [],
        anchors: {},
        channels: {},
        moreChannels: !1,
        moreAchors: !1,
        scrollTop: 0,
        isSearch: !1
    },
    methods: {
        getuserinfo: function(a) {
            var r = a.target.dataset.url, s = a.target.dataset.sid, o = a.target.dataset.ssid, i = a.target.dataset.uid, c = a.target.dataset.index;
            e.event({
                id: "10005",
                label: "0001",
                params: {
                    key2: s || "",
                    key3: o || "",
                    key4: i || "",
                    key5: c
                }
            }), this.data.gotoUrl || (this.setData({
                gotoUrl: !0
            }), t.collector(r, n));
        },
        focusInput: function() {
            var t = this;
            t.setData({
                focusSearch: !0
            }), t.setData({
                searchHistory: t.getSearchStorage()
            }), this.triggerEvent("focusSearch", {
                status: !0
            }), e.event({
                id: "10005",
                label: "0002"
            });
        },
        bindInput: function(t) {
            var e = this, a = t.detail.value;
            e.data.searchQuery = a, e.setData({
                isSearch: !1
            }), e.computeValue();
        },
        computeValue: function() {
            var t = this.data.searchQuery.length > 0;
            this.setData({
                hasInput: t
            });
        },
        clearInput: function() {
            this.setData({
                searchQuery: "",
                hasInput: !1,
                isSearch: !1
            });
        },
        goBack: function() {
            var t = this;
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 10
            }), t.setData({
                focusSearch: !1,
                gotoUrl: !1
            }), this.triggerEvent("focusSearch", {
                status: !1
            });
        },
        historySearch: function(t) {
            var e = this, a = t.target.dataset.data;
            e.setData({
                searchQuery: a,
                hasInput: !0
            }), e.search();
        },
        submitForm: function(t) {
            n = t.detail.formId;
        },
        setGotoUrlDisable: function() {
            this.setData({
                gotoUrl: !0
            });
        },
        search: function(e) {
            var a = this, r = this.data.searchQuery;
            r = r.trim(), this.triggerEvent("hiidoEvent", {
                id: "10001",
                label: "0001"
            }), r ? (wx.showLoading({
                title: "加载中..."
            }), a.setData({
                searchHistory: this.addSearchStorage(r),
                searchQuery: r
            }), a.reqSearch(r).then(function(t) {
                var e = t.data;
                wx.hideLoading(), 0 == t.code ? a.setData({
                    moreChannels: e.channels.length > 3,
                    moreAchors: e.anchors.length > 3,
                    channels: {
                        list: e.channels.slice(0, 3)
                    },
                    anchors: {
                        list: e.anchors.slice(0, 3)
                    }
                }) : (a.setData({
                    moreChannels: !1,
                    moreAchors: !1,
                    channels: {
                        list: []
                    },
                    anchors: {
                        list: []
                    }
                }), wx.hideLoading());
            }).catch(function() {
                a.setData({
                    channels: {
                        list: []
                    },
                    anchors: {
                        list: []
                    }
                }), wx.hideLoading();
            }).then(function() {
                a.setData({
                    isSearch: !0
                });
            }), e && e.detail && t.getUdbLogin(e.detail)) : wx.showToast({
                title: "请输入内容",
                icon: "none",
                duration: 2e3
            });
        },
        reqSearch: function(t) {
            return s = t, new Promise(function(e, s) {
                var n = a.MINIAPP_YY_HOST + "/mini/search";
                r(n, {
                    uid: 0,
                    q: t
                }).then(function(t) {
                    0 == t.code ? e(t) : s(t), wx.hideToast();
                }).catch(function(t) {
                    s(t), wx.hideToast();
                });
            });
        },
        addSearchStorage: function(t) {
            var e = [];
            try {
                (e = this.getSearchStorage()).unshift(t), e = Array.from(new Set(e)).slice(0, 10), 
                wx.setStorageSync("search", e.join(";"));
            } catch (t) {
                console.error(t);
            }
            return e;
        },
        getSearchStorage: function() {
            var t = [], e = wx.getStorageSync("search");
            return e && (t = e.split(";")), t;
        },
        cleanSearchStorage: function() {
            try {
                wx.removeStorage({
                    key: "search"
                }), this.setData({
                    searchHistory: []
                });
            } catch (t) {
                return !1;
            }
            return !0;
        },
        goToAnchor: function() {
            this.data.moreAchors && wx.navigateTo({
                url: "/pages/search/search?pageType=anchor&value=" + s
            });
        },
        gotToChannels: function() {
            this.data.moreChannels && wx.navigateTo({
                url: "/pages/search/search?pageType=live&value=" + s
            });
        },
        searchSubmit: function(t) {
            this.search(t.detail.value);
        }
    }
});