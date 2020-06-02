var t = require("../../utils/network.js"), e = require("../../utils/util.js"), a = {
    normal: 0,
    loading: 1,
    end: 2,
    noData: 3,
    error: 4,
    standby: 5
}, r = {
    popular: 0,
    collect: 2,
    dish: 3
};

Page({
    data: {
        offset: 0,
        num: 20,
        orderID: r.popular,
        keyword: "",
        array: [],
        footerState: a.normal,
        searchKeyValue: "",
        focused: !1
    },
    onLoad: function(t) {
        this.setData({
            keyword: t.keyword,
            orderID: t.orderID,
            searchKeyValue: t.keyword
        }), this.request();
    },
    request: function() {
        if (!(this.data.keyword.length <= 0)) {
            this.setData({
                footerState: a.loading
            });
            var r = this, s = "https://wapi.douguo.com/wxapp/recipesearch/" + this.data.offset + "/" + this.data.num;
            t.request(s, {
                keyword: this.data.keyword,
                order: this.data.orderID
            }, function(t) {
                var s, o;
                e.isArray(t.recipes) ? (s = 0 == r.data.offset ? t.recipes : r.data.array.concat(t.recipes), 
                o = t.recipes.length < r.data.num ? a.end : a.loading, s.length <= 0 && (o = a.noData)) : (s = [], 
                o = a.noData), r.setData({
                    footerState: o,
                    array: s
                });
            }, function(t) {
                wx.showModal({
                    title: "",
                    content: "别着急，网有点慢，再试试",
                    showCancel: !1
                });
                var e = r.data.offset - r.data.num;
                e = e < 0 ? 0 : e, r.setData({
                    offset: e,
                    footerState: a.error
                });
            });
        }
    },
    onReachBottom: function() {
        if (console.log("onReachBottom"), !(this.data.array.length <= 0 || this.data.footerState == a.end)) {
            var t = this.data.offset + this.data.num;
            this.setData({
                offset: t
            }), this.request();
        }
    },
    searchButtonPressed: function() {
        var t = this.data.searchKeyValue;
        this.setData({
            keyword: t,
            orderID: r.popular,
            offset: 0,
            array: []
        }), this.request();
    },
    searchConfirm: function(t) {
        var e = t.detail.value;
        this.setData({
            keyword: e,
            orderID: r.popular,
            offset: 0,
            array: []
        }), this.request();
    },
    recipeItemPressed: function(t) {
        var e = t.currentTarget.dataset.recipeId;
        wx.navigateTo({
            url: "../recipe/recipe?rid=" + e
        });
    },
    firstOrderPressed: function(t) {
        this.data.orderID != r.popular && (this.setData({
            offset: 0,
            orderID: r.popular,
            array: []
        }), this.request());
    },
    secondOrderPressed: function(t) {
        this.data.orderID != r.collect && (this.setData({
            offset: 0,
            orderID: r.collect,
            array: []
        }), this.request());
    },
    thirdOrderPressed: function(t) {
        this.data.orderID != r.dish && (this.setData({
            offset: 0,
            orderID: r.dish,
            array: []
        }), this.request());
    },
    searchInput: function(t) {
        this.setData({
            searchKeyValue: t.detail.value
        });
    },
    clickFocused: function() {
        this.setData({
            focused: !0
        });
    },
    onSearchBlur: function() {
        this.setData({
            focused: !1
        });
    },
    onShareAppMessage: function() {
        return {
            title: "豆果美食 - " + this.data.keyword,
            desc: "豆果美食 开启美味生活",
            path: "/pages/search/search?keyword=" + this.data.keyword
        };
    }
});