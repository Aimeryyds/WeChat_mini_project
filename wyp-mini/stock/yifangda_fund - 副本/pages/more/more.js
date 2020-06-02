getApp();

Page({
    data: {
        indicatorDots: !1,
        autoplay: !0,
        interval: 4e3,
        duration: 1e3,
        imgUrls: [ "../image/haibao/4.jpg", "../image/haibao/hs300.jpg", "../image/haibao/s100.jpg" ],
        imgArr: [ "https://mmbiz.qpic.cn/mmbiz_jpg/PY3esKicffFGZdkkrBCRibBBHU8qO7PCMNhovG7uiapNExC01PAL13IPy0vH36ZsicYlMH25XzJn2wqdC59vu4Wg2A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1", "https://mmbiz.qpic.cn/mmbiz_jpg/PY3esKicffFGZdkkrBCRibBBHU8qO7PCMNfbdjcVib7FS1icHpdaz53Hdx8nh8oicwgE5Pn8DB4ljicJydNkwPJs8x8A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" ],
        imgArr1: [ "https://mmbiz.qpic.cn/mmbiz_gif/PY3esKicffFGZdkkrBCRibBBHU8qO7PCMNeQKrdQ4icUcsqXeziaicclBr8ib7OC9iakDF6bnQRRfxgQPyvNNmlGS9fKw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1" ],
        imgArr2: [ "https://mmbiz.qpic.cn/mmbiz_jpg/PY3esKicffFGZdkkrBCRibBBHU8qO7PCMNhovG7uiapNExC01PAL13IPy0vH36ZsicYlMH25XzJn2wqdC59vu4Wg2A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" ],
        imgArr3: [ "https://mmbiz.qpic.cn/mmbiz_jpg/PY3esKicffFGZdkkrBCRibBBHU8qO7PCMNfbdjcVib7FS1icHpdaz53Hdx8nh8oicwgE5Pn8DB4ljicJydNkwPJs8x8A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" ]
    },
    onLoad: function() {},
    onShow: function() {
        var i = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t), i.setData({
                    winHeight: t.windowHeight
                }), console.log("res.windowHeight:", t.windowHeight), console.log("bottom:", i.data.winHeight);
            }
        }), this.setData({
            winHeight: i.data.winHeight
        }), console.log("bottom2:", this.data.winHeight);
    },
    onShareAppMessage: function(i) {
        return "button" === i.from && console.log(i.target), {
            title: "看净值·读季报·查基金",
            path: "/pages/fundvalue/fundvalue",
            imageUrl: "/pages/image/fengmian.jpg",
            success: function(i) {
                console.log("转发成功:");
            },
            fail: function(i) {
                console.log("转发失败:");
            }
        };
    },
    imgFund: function(i) {
        var t = i.currentTarget.dataset.index, e = this.data.imgArr;
        wx.previewImage({
            current: e[t],
            urls: e
        });
    },
    imgMore1: function(i) {
        var t = i.currentTarget.dataset.index, e = this.data.imgArr1;
        wx.previewImage({
            current: e[t],
            urls: e
        });
    },
    imgMore2: function(i) {
        var t = i.currentTarget.dataset.index, e = this.data.imgArr2;
        wx.previewImage({
            current: e[t],
            urls: e
        });
    },
    imgMore3: function(i) {
        var t = i.currentTarget.dataset.index, e = this.data.imgArr3;
        wx.previewImage({
            current: e[t],
            urls: e
        });
    }
});