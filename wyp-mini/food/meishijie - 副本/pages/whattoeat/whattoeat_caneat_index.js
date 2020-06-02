var t = getApp();

Page({
    data: {
        barHeight_nobar: wx.getSystemInfoSync().statusBarHeight,
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4,
        enable: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        showtopbar: !1,
        cj_swiper_current: 0
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
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
    onLoad: function(e) {
        this.setData({
            option: e
        });
        var a = this;
        a.setData({
            requeseDone: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/shicai/cj_shicai_classify",
            data: {
                source: "微信小程序",
                format: "json",
                id: e.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), a.setData({
                    sortlist: t.data
                }), a.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 300);
            },
            fail: function(t) {
                a.setData({
                    requeseFail: !0
                });
            }
        });
    }
});