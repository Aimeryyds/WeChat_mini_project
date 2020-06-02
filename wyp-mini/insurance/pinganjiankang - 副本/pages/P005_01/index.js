Page({
    data: {
        scrollLeft: 0,
        id: "",
        typeList: [ {
            categoryId: 1,
            categoryName: "分类1"
        }, {
            categoryId: 2,
            categoryName: "分类2"
        }, {
            categoryId: 3,
            categoryName: "分类3"
        }, {
            categoryId: 4,
            categoryName: "分类4"
        }, {
            categoryId: 5,
            categoryName: "分类5"
        }, {
            categoryId: 6,
            categoryName: "分类6"
        }, {
            categoryId: 7,
            categoryName: "分类7"
        }, {
            categoryId: 8,
            categoryName: "分类8"
        }, {
            categoryId: 9,
            categoryName: "分类9"
        } ]
    },
    onLoad: function(t) {},
    onReady: function() {
        var t = this;
        wx.createSelectorQuery().select("#tab-con").boundingClientRect(function(e) {
            t.setData({
                tabScrollTop: e.top + 100
            });
        }).exec();
    },
    onPageScroll: function(t) {
        t.scrollTop > this.data.tabScrollTop ? this.setData({
            tabFixed: !0
        }) : this.setData({
            tabFixed: !1
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    switchNav: function(t) {
        var e = t.currentTarget.offsetLeft, a = t.currentTarget.dataset, o = a.id, c = (a.index, 
        t.detail.x);
        if (this.data.id == t.currentTarget.dataset.id) return !1;
        c < 60 ? this.setData({
            scrollLeft: e - 60
        }) : c > 330 && this.setData({
            scrollLeft: e
        }), this.setData({
            id: o
        });
    }
});