var t, a = require("../../../../utils/server"), o = require("../../../../wxParse/wxParse"), e = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        test: "",
        scrollTop: {
            scroll_top: 0,
            goTop_show: !1,
            active: ""
        }
    },
    onLoad: function(t) {
        e = wx.getStorageSync("utoken");
        var a = this;
        a.setData({
            id: t.id
        }), a.loadingData(t);
    },
    loadingData: function(s) {
        e = wx.getStorageSync("utoken");
        var r = this;
        a.sendRequest({
            url: "?r=wxapp.creditshop.detail&id=" + s.id,
            showToast: !1,
            data: {
                utoken: e
            },
            method: "GET",
            success: function(a) {
                r.setData({
                    loading: !1,
                    data: a.data.result,
                    goods: a.data.result.goods,
                    recommands: a.data.result.recommands,
                    rec_num: a.data.result.recommands.length
                });
                var e = a.data.result.goods;
                for (var s in e) "goodsdetail" == s && (console.log(e[s]), t = e[s], o.wxParse("article", "html", t, r, 5));
            }
        });
    },
    getSection: function(t) {
        this.setData({
            active: t.currentTarget.dataset.index
        });
    },
    scrollTopFun: function(t) {
        t.detail.scrollTop > 0 ? this.setData({
            "scrollTop.goTop_show": !0
        }) : this.setData({
            "scrollTop.goTop_show": !1
        });
    },
    goTopFun: function(t) {
        var a = this.data.scrollTop.scroll_top;
        a = 1 == a ? 0 : 1, this.setData({
            "scrollTop.scroll_top": a
        });
    },
    toexchange: function() {
        var t = this;
        wx.redirectTo({
            url: "../exchange/index?id=" + t.data.id
        });
    },
    todetail: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../detail/index?id=" + t.currentTarget.dataset.id
        });
    }
});