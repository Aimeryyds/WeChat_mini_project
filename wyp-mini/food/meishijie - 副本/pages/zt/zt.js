var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        barHeight_notopbar: wx.getSystemInfoSync().statusBarHeight,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4,
        enable: !0,
        backiconUrl: "../../images/nav_icon_black.png",
        winHeight: "",
        shareicon: "../../images/rd_w_fx@3x.png",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        showTopbar: !1,
        is_index: !0,
        bartitle: "年夜饭"
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    onPageScroll: function(t) {
        t.scrollTop > 400 ? this.setData({
            showTopbar: !0
        }) : this.setData({
            showTopbar: !1
        });
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: this.data.ztdata.title,
            path: "/pages/index/index?goZt=" + this.data.option.id,
            imageUrl: this.data.ztdata.header_img,
            success: function(t) {
                console.log("/pages/index/index?goZt=" + this.data.option.url);
            },
            fail: function(t) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(a) {
        var e = this;
        this.setData({
            option: a,
            requeseDone: !0
        }), wx.request({
            url: t.globalData.apph5localhost + "/zt/zt_detail.php",
            data: {
                format: "json",
                words: a.words,
                type: a.type,
                id: a.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log("习俗正文:"), e.setData({
                    ztdata: t.data,
                    shortTitle: t.data.title ? t.data.title.substring(0, 6) + "..." : ""
                }), console.log(t.data);
            }
        });
    }
});