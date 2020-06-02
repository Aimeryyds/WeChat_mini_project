Component({
    properties: {
        placeholder: {
            type: String,
            value: "搜索"
        },
        isShow: {
            type: Boolean,
            value: !1
        },
        isShowSearchHistory: {
            type: Boolean,
            value: !0
        },
        isShowSearchKey: {
            type: Boolean,
            value: !1
        },
        searchKeys: {
            type: Array,
            value: []
        },
        name: {
            type: String,
            value: "wxSearchHisKeys"
        },
        maxHeight: Number,
        focus: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        searchHistories: [],
        value: ""
    },
    ready: function() {
        this.init();
    },
    methods: {
        init: function() {
            this.data.barHeight;
            var e = this;
            wx.getSystemInfo({
                success: function(t) {
                    var a = t.windowHeight, s = a - 48;
                    e.setData({
                        searchHeight: s,
                        maxHeight: 4 * a / 5
                    });
                }
            }), this.getHisKeys();
        },
        getHisKeys: function() {
            var e = this.data.name, t = [];
            try {
                t = wx.getStorageSync(e), console.log(t), t && this.setData({
                    searchHistories: t
                });
            } catch (e) {}
        },
        hideSearch: function() {
            this.setData({
                isShow: !1
            }), this.triggerEvent("onsearchhide");
        },
        showSearch: function() {
            this.setData({
                isShow: !0
            }), this.triggerEvent("onsearchshow");
        },
        onSearchFocus: function() {
            var e = this.data.value;
            this.setData({
                showDel: e.trim().length > 0
            }), 0 == e.trim().length && this.showSearch();
        },
        onSearchChange: function(e) {
            var t = e.detail.value;
            this.setData({
                value: t,
                showDel: t.trim().length > 0
            }), 0 == t.trim().length && this.showSearch();
        },
        clearSearch: function() {
            this.setData({
                focus: !0,
                value: "",
                showDel: !1,
                searchFocus: !0
            }), this.triggerEvent("clear");
        },
        onSearch: function() {
            var e = this.data.value;
            void 0 !== e && 0 != e.trim().length && (this._addHistory(), this.hideSearch(), 
            this.triggerEvent("search", {
                value: e
            }));
        },
        onKeyTap: function(e) {
            var t = e.currentTarget.dataset.key;
            this.setData({
                value: t,
                showDel: !0
            }), this.hideSearch(), this.triggerEvent("search", {
                value: t
            });
        },
        _addHistory: function() {
            var e = this, t = this.data, a = t.value, s = t.name;
            if (void 0 !== a && 0 != a.length) {
                var i = wx.getStorageSync(s);
                i ? (i.indexOf(a) < 0 && i.unshift(a), wx.setStorage({
                    key: s,
                    data: i,
                    success: function() {
                        e.getHisKeys();
                    }
                })) : ((i = []).push(a), wx.setStorage({
                    key: s,
                    data: i,
                    success: function() {
                        e.getHisKeys();
                    }
                }));
            }
        },
        clearSearchHistories: function() {
            var e = this, t = this.data.name;
            wx.removeStorage({
                key: t,
                success: function(t) {
                    e.setData({
                        searchHistories: []
                    });
                }
            });
        }
    }
});