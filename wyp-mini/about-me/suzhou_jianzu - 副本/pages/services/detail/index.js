function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = require("../../../utils/server"), r = require("../../../wxParse/wxParse.js"), s = wx.getStorageSync("utoken"), i = 1, d = "all", n = 1, o = [], l = getApp(), u = {
    data: {
        id: "",
        sum: 1,
        width: Math.ceil(wx.getSystemInfoSync().windowHeight),
        title: "",
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        select: "all",
        refresh: !1,
        curDateIndex: 0
    },
    onLoad: function(t) {
        s = wx.getStorageSync("utoken"), this.data.id = t.objectId, this.loadPageData(), 
        this.getEvaluation(), this.getEvaluationData(d);
    },
    loadPageData: function() {
        var t = this;
        a.sendRequest({
            url: "?r=wxapp.services.detail&id=" + t.data.id,
            method: "GET",
            success: function(a) {
                console.log(a.data.result.price_list), console.log(111), t.setData({
                    data: a.data.result,
                    title: a.data.result.goods.goods_name,
                    price: a.data.result.goods.price,
                    img: a.data.result.gallery[0].image_url,
                    price_list: a.data.result.price_list
                }), a.data.result.store && a.data.result.store[0] && (t.setData({
                    store: a.data.result.store[0]
                }), l.globalData.store = a.data.result.store[0]), e = a.data.result.goods.goodsdetail, 
                r.wxParse("article", "html", e, t, 5);
            }
        });
    },
    getEvaluation: function() {
        var t = this;
        a.sendRequest({
            url: "?r=wxapp.services.detail.get_comments&id=" + t.data.id,
            method: "GET",
            success: function(e) {
                t.setData({
                    Evaluation: e.data.result
                });
            }
        });
    },
    getEvaluationData: function(t) {
        var e = this;
        a.sendRequest({
            url: "?r=wxapp.services.detail.get_comment_list",
            data: {
                id: e.data.id,
                page: 1,
                level: t,
                showImage: !1
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    list: t.data.result.list
                });
                for (var a in e.data.list) o.push(e.data.list[a].content);
                for (var s = 0; s < o.length; s++) r.wxParse("reply" + s, "html", o[s], e), s === o.length - 1 && r.wxParseTemArray("replyTemArray", "reply", o.length, e);
            }
        });
    },
    select: function(t) {
        var e = this;
        d = t.currentTarget.dataset.index, e.setData({
            refresh: !1
        }), n = 1, e.getEvaluationData(t.currentTarget.dataset.index), e.setData({
            select: t.currentTarget.dataset.index
        });
    },
    joinImage: function(t) {
        var e = this;
        e.setData({
            imgUrls: t.currentTarget.dataset.img,
            imgLength: t.currentTarget.dataset.img.length
        }), e.data.showImage || e.setData({
            showImage: !0
        });
    },
    showImages: function() {
        this.setData({
            showImage: !1
        });
    },
    call: function(t) {
        var e = t.currentTarget.id;
        wx.showActionSheet({
            itemList: [ "拨打电话", "取消" ],
            success: function(t) {
                0 == t.tapIndex && wx.makePhoneCall({
                    phoneNumber: e
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    bottom: function() {
        var e = this;
        e.data.refresh || (e.setData({
            refresh: !0
        }), n += 1, console.log(e.data.goodsId), a.sendRequest({
            url: "?r=wxapp.services.detail.get_comment_list",
            data: t({
                id: e.data.goodsId,
                page: 1,
                level: d,
                showImage: !1
            }, "page", n),
            method: "GET",
            success: function(t) {
                var a = [];
                for (var s in e.data.list) a.push(e.data.list[s]);
                if ("" != t.data.result.list) {
                    for (var i in t.data.result.list) a.push(t.data.result.list[i]);
                    e.setData({
                        refresh: !1
                    });
                } else n -= 1;
                for (var d = 0; d < a.length; d++) r.wxParse("reply" + d, "html", a[d].content, e), 
                d === a.length - 1 && r.wxParseTemArray("replyTemArray", "reply", a.length, e);
                e.setData({
                    list: a
                });
            }
        }));
    },
    addr: function(t) {
        wx.openLocation({
            latitude: parseFloat(t.currentTarget.dataset.lat),
            longitude: parseFloat(t.currentTarget.dataset.lng),
            name: t.currentTarget.dataset.name,
            scale: 28
        });
    },
    order_goods: function(t) {
        wx.navigateTo({
            url: "/pages/services/detail/index?objectId=" + t.currentTarget.dataset.objectid
        });
    },
    reservas: function() {
        var t = this;
        wx.navigateTo({
            url: "../calendarService/index?cartIds=" + t.data.id + "&amount=" + t.data.sum + "&title=" + t.data.title + "&price=" + t.data.price + "&img=" + t.data.img + "&store=1"
        });
    },
    getToPage: function(t) {
        a.getToPage(t);
    },
    add: function() {
        i += 1, this.setData({
            sum: i
        });
    },
    sub: function() {
        0 == i || 1 == i ? i = 1 : i -= 1, this.setData({
            sum: i
        });
    },
    yuyue: function() {
        var t = this;
        t.data.id, t.data.sum, t.data.cur_year, t.data.cur_month, t.data.indexs, t.data.time;
        wx.navigateTo({
            url: "../../order/ordersubmit/index?cartIds=" + t.data.id + "&amount=" + t.data.sum + "&title=" + t.data.title + "&price=" + t.data.price + "&img=" + t.data.img + "&time=" + t.data.cur_year + "-" + t.data.cur_month + "-" + t.data.indexs + "&store=1"
        });
    },
    goToSelectDate: function() {
        this.reservas();
    },
    goToOrder: function(t) {
        var e = this, a = t.currentTarget.dataset.index;
        e.setData({
            curDateIndex: t.currentTarget.dataset.index
        }), wx.navigateTo({
            url: "../../order/ordersubmit/index?cartIds=" + e.data.id + "&amount=" + e.data.sum + "&title=" + e.data.title + "&price=" + e.data.price_list[a].oprice + "&img=" + e.data.img + "&time=" + e.data.price_list[a].thisdate + "&store=1"
        });
    }
};

Page(u);