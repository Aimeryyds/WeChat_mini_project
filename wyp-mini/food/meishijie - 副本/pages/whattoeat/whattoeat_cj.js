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
        showTopbar: !1,
        cj_swiper_current: 0,
        vAutoplay: !0,
        vmuted: !0
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
    tapMutedBtn: function() {
        this.setData({
            vmuted: !this.data.vmuted
        });
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    cjSwiperChange: function(t) {
        var e = this;
        this.setData({
            cj_swiper_current: t.detail.current
        }), this.setData({
            vmuted: !0
        }), console.log(this.data.cj_swiper_current);
        for (var a in e.data.cjdata.data.top_items) wx.createVideoContext("top_vitem" + a).pause();
        wx.createVideoContext("top_vitem" + t.detail.current).play();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onPageScroll: function(t) {
        t.scrollTop > 44 ? (this.setData({
            showTopbar: !0
        }), console.log(this.data.showTopbar)) : this.setData({
            showTopbar: !1
        });
    },
    onLoad: function(e) {
        this.setData({
            option: e
        });
        var a = this;
        this.data.option.scene_id = "2", wx.getNetworkType({
            success: function(t) {
                "wifi" != t.networkType && a.setData({
                    vAutoplay: !1
                });
            }
        }), a.setData({
            requeseDone: !1
        }), wx.request({
            url: t.globalData.newlocalhost + "/scene/recommend",
            data: {
                source: "微信小程序",
                format: "json",
                id: e.scene_id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), a.setData({
                    cjdata: t.data
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