var t = require("../../../utils/server"), a = wx.getStorageSync("utoken"), e = [], i = [], r = [], s = [], d = [];

Page({
    data: {
        show: 1,
        images: [],
        imgGood: [],
        xin: 0,
        text: "",
        level: [],
        animationData: {}
    },
    onLoad: function(t) {
        a = wx.getStorageSync("utoken");
        var e = this;
        console.log(t), console.log("T"), e.setData({
            orderid: t.order_id
        }), e.loadData();
    },
    loadData: function() {
        var n = this;
        e = [], i = [], r = [], s = [], d = [], t.sendRequest({
            url: "?r=wxapp.services.comment",
            data: {
                utoken: a,
                id: n.data.orderid
            },
            method: "GET",
            success: function(t) {
                n.setData({
                    data: t.data.result.goods
                });
            }
        });
    },
    onShow: function() {},
    bindFormSubmit: function(r) {
        var s = this, d = [];
        for (var n in r.detail.value) {
            if ("text" == n) break;
            d.push(r.detail.value[n]);
        }
        var o = {};
        o.content = r.detail.value.text, o.level = s.data.xin, o.images = e, o.goodsid = s.data.data.id, 
        i.push(o), s.data.xin ? r.detail.value.text ? t.sendRequest({
            url: "?r=wxapp.services.comment.submit",
            data: {
                utoken: a,
                orderid: s.data.orderid,
                comments: i
            },
            method: "POST",
            success: function(t) {
                wx.navigateBack({
                    delta: 2
                });
            }
        }) : wx.showToast({
            title: "整单评价不能为空",
            icon: "loading",
            duration: 2e3
        }) : wx.showToast({
            title: "整单评分不能为空",
            icon: "loading",
            duration: 2e3
        });
    },
    xin: function(t) {
        var a = this;
        t.target.id ? "1" == t.currentTarget.dataset.index ? 1 == r[t.target.id] ? (r[t.target.id] = 0, 
        a.setData({
            level: r
        })) : (r[t.target.id] = 1, a.setData({
            level: r
        })) : (r[t.target.id] = t.currentTarget.dataset.index, a.setData({
            level: r
        })) : 0 == a.data.xin ? "1" == t.currentTarget.dataset.index ? a.setData({
            xin: 1
        }) : a.setData({
            xin: t.currentTarget.dataset.index
        }) : "1" == t.currentTarget.dataset.index ? 1 == a.data.xin ? a.setData({
            xin: 0
        }) : a.setData({
            xin: 1
        }) : a.setData({
            xin: t.currentTarget.dataset.index
        });
    },
    chooseImage: function(t) {
        var a = this;
        if (t.target.id) var i = t.target.id;
        wx.chooseImage({
            count: 5,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var r = [], d = t.tempFilePaths, n = 0; n < d.length; n++) wx.uploadFile({
                    url: "https://tws.cnweisou.com/wxapi/index.php?r=wxapp.util.uploader&i=450",
                    filePath: d[n],
                    name: "file",
                    method: "POST",
                    header: {
                        "content-type": "multipart/form-data"
                    },
                    success: function(t) {
                        var a = t.data, d = JSON.parse(a);
                        r.push(d.url), i ? s[i] = r : e = r;
                    }
                });
                i ? (s[i] = d, a.setData({
                    imgGood: s
                })) : a.setData({
                    images: a.data.images.concat(d)
                }), a.data.images.length;
            }
        });
    },
    previewImage: function(t) {
        var a = this;
        a.data.imgGood ? wx.previewImage({
            urls: a.data.imgGood[t.target.id]
        }) : wx.previewImage({
            urls: a.data.images
        });
    },
    delete: function(t) {
        var a = this;
        if (t.target.id) {
            i = t.target.id;
            s[i].splice(t.currentTarget.dataset.index, 1), a.setData({
                imgGood: s
            });
        } else {
            var i = t.currentTarget.dataset.index, r = a.data.images;
            r.splice(i, 1), e.splice(i, 1), a.setData({
                images: r
            });
        }
    }
});