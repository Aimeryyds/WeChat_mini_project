function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = require("../../../utils/server"), a = wx.getStorageSync("utoken"), i = [], r = [], o = [], n = [], s = [], d = [];

Page({
    data: {
        show: 1,
        images: [],
        imgGood: [],
        xin: 0,
        text: "",
        level: [],
        animationData: {},
        evaluteType: 1
    },
    onLoad: function(e) {
        a = wx.getStorageSync("utoken");
        var t = this;
        if (console.log(e), e.evaluteType) i = e.evaluteType; else var i = 1;
        t.setData({
            orderid: e.order_id,
            evaluteType: i
        }), t.loadData();
    },
    loadData: function() {
        var e = this;
        i = [], r = [], o = [], n = [], d = [], t.sendRequest({
            url: "?r=wxapp.order.detail",
            data: {
                utoken: a,
                id: e.data.orderid
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    data: t.data.result.goods_list,
                    store_name: t.data.result.store_name
                });
                for (var a in t.data.result.goods_list) {
                    var i = {
                        goodsid: t.data.result.goods_list[a].goodsid
                    };
                    r.push(i), r[a].optionid = t.data.result.goods_list[a].optionid;
                }
                for (var n in r) r[n].level = 0, o[n] = 0;
                e.setData({
                    level: o
                });
            }
        });
    },
    onShow: function() {},
    show: function(t) {
        var a = this;
        for (var i in r) i == t.currentTarget.dataset.index && (a.data.arrI && 1 == a.data.arrI[i] ? a.setData({
            arrI: e({}, i, 0)
        }) : a.setData({
            arrI: e({}, i, 1)
        }));
    },
    bindFormSubmit: function(e) {
        var s = this, d = [];
        for (var l in e.detail.value) {
            if ("text" == l) break;
            d.push(e.detail.value[l]);
        }
        var u = {};
        u.content = e.detail.value.text, u.level = s.data.xin, u.images = i;
        for (var l in o) if ("" != o[l]) for (var l in r) {
            if (o) if (o[l]) r[l].level = o[l], console.log(111); else {
                if ("" == u.level) return console.log(333), void wx.showToast({
                    title: "商品评价不能为空111",
                    icon: "loading",
                    duration: 2e3
                });
                console.log(222), r[l].level = u.level;
            } else r[l].level = 0;
            if (n && (n[l] ? r[l].images = n[l] : "" != u.images && (r[l].images = u.images)), 
            d) if (d[l]) r[l].content = d[l]; else {
                if ("" == u.content) return void wx.showToast({
                    title: "商品评价不能为空222",
                    icon: "loading",
                    duration: 2e3
                });
                r[l].content = u.content;
            }
        } else {
            if (!s.data.xin && 1 == s.data.evaluteType) return void wx.showToast({
                title: "整单评分不能为空",
                icon: "loading",
                duration: 2e3
            });
            if (!e.detail.value.text) return void wx.showToast({
                title: "整单评价不能为空",
                icon: "loading",
                duration: 2e3
            });
            r[l].level = s.data.xin, r[l].content = u.content, "" != u.images && (r[l].images = u.images);
        }
        t.sendRequest({
            url: "?r=wxapp.order.comment.submit",
            data: {
                utoken: a,
                orderid: s.data.orderid,
                comments: r
            },
            method: "POST",
            success: function(e) {
                wx.navigateBack({
                    delta: 2
                });
            }
        });
    },
    xin: function(e) {
        var t = this;
        e.target.id ? "1" == e.currentTarget.dataset.index ? 1 == o[e.target.id] ? (o[e.target.id] = 0, 
        t.setData({
            level: o
        })) : (o[e.target.id] = 1, t.setData({
            level: o
        })) : (o[e.target.id] = e.currentTarget.dataset.index, t.setData({
            level: o
        })) : 0 == t.data.xin ? "1" == e.currentTarget.dataset.index ? t.setData({
            xin: 1
        }) : t.setData({
            xin: e.currentTarget.dataset.index
        }) : "1" == e.currentTarget.dataset.index ? 1 == t.data.xin ? t.setData({
            xin: 0
        }) : t.setData({
            xin: 1
        }) : t.setData({
            xin: e.currentTarget.dataset.index
        });
    },
    chooseImage: function(e) {
        var t = this;
        if (e.target.id) var a = e.target.id;
        wx.chooseImage({
            count: 5,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                for (var r = [], o = e.tempFilePaths, d = 0; d < o.length; d++) wx.uploadFile({
                    url: "https://tws.cnweisou.com/wxapi/index.php?r=wxapp.util.uploader&i=450",
                    filePath: o[d],
                    name: "file",
                    method: "POST",
                    header: {
                        "content-type": "multipart/form-data"
                    },
                    success: function(e) {
                        var t = e.data, o = JSON.parse(t);
                        r.push(o.url), a ? (n[a] || (n[a] = []), n[a].push(o.url)) : i.push(o.url);
                    }
                });
                if (a) {
                    s[a] || (s[a] = []);
                    for (var l in o) s[a].push(o[l]);
                    t.setData({
                        img_arr: s
                    });
                } else t.setData({
                    images: t.data.images.concat(o)
                });
                t.data.images.length;
            }
        });
    },
    previewImage: function(e) {
        var t = this;
        t.data.imgGood ? wx.previewImage({
            urls: t.data.imgGood[e.target.id]
        }) : wx.previewImage({
            urls: t.data.images
        });
    },
    delete: function(e) {
        var t = this;
        if (e.target.id) {
            a = e.target.id;
            s[a].splice(e.currentTarget.dataset.index, 1), n[a].splice(e.currentTarget.dataset.index, 1), 
            t.setData({
                imgGood: n,
                img_arr: s
            });
        } else {
            var a = e.currentTarget.dataset.index, r = t.data.images;
            r.splice(a, 1), i.splice(a, 1), t.setData({
                images: r
            });
        }
    },
    goodDetail: function(e) {
        console.log(e.currentTarget.dataset.goodsid);
        var t = e.currentTarget.dataset.goodsid;
        wx.redirectTo({
            url: "/pages/goods/detail/detail?objectId=" + t
        });
    }
});