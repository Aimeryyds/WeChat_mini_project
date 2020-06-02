var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        shareicon: "../../images/rd_b_fx@3x.png",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        requesting: 0
    },
    onShareAppMessage: function(t) {
        var e = this;
        return t.from, {
            title: e.data.option.title,
            path: "/pages/index/index?goCd_cid=" + e.data.option.cid + "&&goCd_title=" + e.data.option.title,
            imageUrl: e.data.cdDetail.items[0].img.replace("?imageMogr2/gravity/Center/crop/328x328", "") + "?imageMogr2/gravity/Center/crop/328x262",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(e) {
        var a = this;
        this.setData({
            option: e
        }), a.setData({
            requeseDone: !1
        }), wx.setNavigationBarTitle({
            title: e.title
        }), wx.request({
            url: t.globalData.localhost + "/v9/recipe_list.php",
            data: {
                source: "微信小程序",
                format: "json",
                cid: e.cid,
                title: e.title
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                a.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600), a.setData({
                    cdDetail: t.data.data
                });
            },
            fail: function(t) {
                a.setData({
                    requeseFail: !0
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600);
            }
        });
    }
});