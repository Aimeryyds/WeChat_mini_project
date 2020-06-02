var t = getApp(), a = t.requirejs("core");

Page({
    data: {
        stars_class: [ "fui-label-default", "fui-label-primary", "fui-label-success", "fui-label-warning", "fui-label-danger" ],
        stars_text: [ "差评", "一般", "挺好", "满意", "非常满意" ],
        normalSrc: "/static/images/icon/favor.png",
        selectedSrc: "/static/images/icon-red/favor_fill.png",
        key: -1,
        content: "",
        images: [],
        imgs: []
    },
    onLoad: function(e) {
        a.setting(), this.setData({
            options: e
        }), t.url(e), this.get_list();
    },
    get_list: function() {
        var t = this;
        a.get("order/comment", t.data.options, function(e) {
            0 == e.error ? (e.show = !0, t.setData(e)) : (a.toast(e.message, "loading"), wx.navigateBack());
        }, !0);
    },
    select: function(t) {
        var a = t.currentTarget.dataset.key;
        this.setData({
            key: a
        });
    },
    change: function(t) {
        var e = {};
        e[a.data(t).name] = t.detail.value, this.setData(e);
    },
    submit: function() {
        var t = {
            orderid: this.data.options.id,
            comments: []
        };
        if ("" == this.data.content || -1 == this.data.key) return a.alert("有未填写项目!"), !1;
        for (var e = 0, s = this.data.goods.length; e < s; e++) {
            var i = {
                goodsid: this.data.goods[e].goodsid,
                level: this.data.key + 1,
                content: this.data.content,
                images: this.data.images
            };
            t.comments.push(i);
        }
        a.post("order/comment/submit", t, function(t) {
            0 != t.error && a.toast(t.message, "loading"), wx.navigateBack();
        }, !0);
    },
    upload: function(t) {
        var e = this, s = a.data(t), i = s.type, n = e.data.images, o = e.data.imgs, r = s.index;
        "image" == i ? a.upload(function(t) {
            n.push(t.filename), o.push(t.url), e.setData({
                images: n,
                imgs: o
            });
        }) : "image-remove" == i ? (n.splice(r, 1), o.splice(r, 1), e.setData({
            images: n,
            imgs: o
        })) : "image-preview" == i && wx.previewImage({
            current: o[r],
            urls: o
        });
    }
});