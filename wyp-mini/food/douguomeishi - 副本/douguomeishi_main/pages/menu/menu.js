function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = require("../../utils/network.js"), n = require("../../utils/util.js"), o = {
    normal: 0,
    loading: 1,
    end: 2,
    noData: 3,
    error: 4,
    standby: 5
};

Page((e = {
    data: {
        offset: 0,
        num: 20,
        id: "",
        recipes: [],
        menu: {},
        footerState: o.normal
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.request();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: this.data.menu.title
        };
    },
    request: function() {
        if (!(this.data.id.length <= 0)) {
            this.setData({
                footerState: o.loading
            });
            var t = this, e = "https://wapi.douguo.com/wxapp/menurecipes/" + this.data.offset + "/" + this.data.num;
            a.request(e, {
                id: this.data.id
            }, function(e) {
                0 == t.data.offset && t.setData({
                    menu: e.menu
                });
                var a, i;
                n.isArray(e.recipes) ? (a = 0 == t.data.offset ? e.recipes : t.data.recipes.concat(e.recipes), 
                i = e.recipes.length < t.data.num ? o.end : o.normal, a.length <= 0 && (i = o.noData)) : (a = [], 
                i = o.noData), t.setData({
                    footerState: i,
                    recipes: a
                });
            }, function(e) {
                wx.showModal({
                    title: "",
                    content: "别着急，网有点慢，再试试",
                    showCancel: !1
                });
                var a = t.data.offset - t.data.num;
                a = a < 0 ? 0 : a, t.setData({
                    offset: a,
                    footerState: o.error
                });
            });
        }
    }
}, t(e, "onReachBottom", function() {
    if (console.log("onReachBottom"), !(this.data.recipes.length <= 0 || this.data.footerState == o.end)) {
        var t = this.data.offset + this.data.num;
        this.setData({
            offset: t
        }), this.request();
    }
}), t(e, "recipeItemPressed", function(t) {
    var e = t.currentTarget.dataset.recipeId;
    wx.navigateTo({
        url: "../recipe/recipe?rid=" + e
    });
}), e));