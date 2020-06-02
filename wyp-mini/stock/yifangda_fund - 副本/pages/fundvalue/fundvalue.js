Page({
    data: {
        jsondata888: [],
        indicatorDots: !1,
        autoplay: !0,
        interval: 4e3,
        duration: 1e3,
        imgUrls: [ "../image/haibao/1.jpg", "../image/haibao/hs300.jpg", "../image/haibao/s100.jpg" ],
        imgArr: [ "https://mmbiz.qpic.cn/mmbiz_jpg/PY3esKicffFGYMv3icAIh1gMUnAlF6RGQzN82xHeGmjgtCUYlicN69luE4k7nibbtarDID9DAOFrS0KOjPqskjxYZw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1", "https://mmbiz.qpic.cn/mmbiz_jpg/PY3esKicffFGYMv3icAIh1gMUnAlF6RGQzeCVPTiaiaNhwZHMsgvD6to17SHVgUJZNfZrDcAH1waewzEriaoG8G3k6w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" ]
    },
    onShow: function() {
        var t = this;
        wx.request({
            url: "https://static.efunds.com.cn/market/2.0/funds_all_nav.js",
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                t.setData({
                    jsondata888: a.data
                }), console.log("这是res.data:", a.data);
            }
        });
    },
    formSubmit: function(t) {
        for (var a = t.detail.value.id, o = 0, n = 0, e = this.data.jsondata888.length, s = 0; s < this.data.jsondata888.length; s++) a == this.data.jsondata888[s].code && (o = 1, 
        n = s);
        1 == o ? (console.log("formData:", a), console.log(this.data.jsondata888.length), 
        console.log(this.data.jsondata888[n].code), this.setData({
            tofund: "Y" + this.data.jsondata888[n].code
        }), console.log("tofund:", this.data.tofund)) : (console.log("no this data"), console.log(a.length), 
        0 == a.length ? wx.showModal({
            title: "",
            content: "请先输入易方达旗下基金代码再点击搜索！"
        }) : wx.showModal({
            title: "",
            content: "您输入的不是易方达旗下基金代码，请重新输入！",
            success: function(t) {
                t.confirm ? (console.log("用户点击确定"), console.log("formData:", a), console.log("jsondata888:", e)) : console.log("用户点击取消");
            }
        }));
    },
    imgFund: function(t) {
        var a = t.currentTarget.dataset.index, o = this.data.imgArr;
        wx.previewImage({
            current: o[a],
            urls: o
        });
    },
    onShareAppMessage: function(t) {
        return "button" === t.from && console.log(t.target), {
            title: "看净值·读季报·查基金",
            path: "/pages/fundvalue/fundvalue",
            imageUrl: "/pages/image/fengmian.jpg",
            success: function(t) {
                console.log("转发成功:");
            },
            fail: function(t) {
                console.log("转发失败:");
            }
        };
    }
});