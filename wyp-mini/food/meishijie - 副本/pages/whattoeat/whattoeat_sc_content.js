var e = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4,
        backiconUrl: "../../images/nav_icon_black.png",
        showToast: !1,
        toastTitle: "",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        requesting: 0,
        showGoHomepage: !1,
        enable: !0,
        showtopbar: !1
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onShareAppMessage: function(e) {
        return e.from, {
            title: this.data.cpDetail.title,
            path: "/pages/sc_content/sc_content?id=" + option.id + "&&title=" + option.title,
            imageUrl: this.data.cpDetail.cover_img.big + "?imageMogr2/gravity/Center/crop/328x262",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    onLoad: function(t) {
        var a = this;
        this.setData({
            option: t
        }), a.setData({
            requeseDone: !1
        }), wx.request({
            url: e.globalData.newlocalhost + "/shicai/shicai_detail",
            data: {
                source: "微信小程序",
                format: "json",
                sc_id: t.sc_id,
                scene_id: t.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e), a.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600), a.setData({
                    scDetail: e.data
                });
            },
            fail: function(e) {
                a.setData({
                    requeseFail: !0
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600);
            }
        }), wx.request({
            url: e.globalData.newlocalhost + "/shicai/shicai_recipe_recommend",
            data: {
                source: "微信小程序",
                format: "json",
                sc_id: t.sc_id,
                scene_id: t.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e), a.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600), a.setData({
                    scDetail_recommend: e.data
                });
            },
            fail: function(e) {
                a.setData({
                    requeseFail: !0
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600);
            }
        });
    },
    showToastss: function(e) {
        var t = this, a = e.duration, s = e.title;
        t.setData({
            showToast: !0,
            toastTitle: s
        }), setTimeout(function() {
            t.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, a);
    }
});