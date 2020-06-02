var t = getApp();

Page({
    data: {
        focus: !1,
        score: 0,
        stars: [ "icon-wujiaoxing2", "icon-wujiaoxing2", "icon-wujiaoxing2", "icon-wujiaoxing2", "icon-wujiaoxing2" ],
        message: "",
        prdimg: "",
        errmsg: ""
    },
    onLoad: function(t) {
        var a = "", e = t.id, i = t.oid;
        /^\d+$/.test(e) && /^\d+$/.test(i) ? this.argval = {
            id: e,
            oid: i
        } : a = "非法请求", this.setData({
            errmsg: a,
            prdimg: t.img || ""
        });
    },
    doRate: function(t) {
        var a = t.currentTarget.dataset.idx, e = this.data.stars;
        if (isNaN(parseInt(a))) return !1;
        for (var i = 0; i < 5; i++) {
            var s = i <= a ? "icon-wujiaoxing" : "icon-wujiaoxing2";
            e[i] = s;
        }
        this.setData({
            score: a,
            stars: e
        });
    },
    getMessage: function(t) {
        this.setData({
            message: t.detail.value
        });
    },
    onSubmit: function() {
        var a = this.argval || {}, e = this.data.score, i = this.data.message, s = wx.getStorageSync("openid");
        return Object.keys(a).length ? e < 1 ? (wx.showModal({
            title: "请选择评分",
            content: "",
            showCancel: !1
        }), !1) : i.trim().length ? void t.apiRequest("appoit", "comments", {
            data: Object.assign(a, {
                openid: s,
                score: e,
                message: i
            }),
            method: "POST",
            success: function(t) {
                var a = t.data || {};
                "OK" == a.result ? wx.navigateTo({
                    url: "../appiont_order_list/appiont_order_list"
                }) : wx.showModal({
                    title: a.errmsg || "请求失败",
                    content: "",
                    showCancel: !1
                });
            }
        }) : (wx.showModal({
            title: "请填写评价",
            content: "",
            showCancel: !1
        }), this.setData({
            focus: !0
        }), !1) : (wx.showModal({
            title: "非法请求",
            content: "",
            showCancel: !1
        }), !1);
    }
});