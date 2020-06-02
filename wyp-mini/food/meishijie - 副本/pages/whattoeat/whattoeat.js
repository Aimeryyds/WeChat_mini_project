var e = getApp();

Page({
    data: {
        barHeight_nobar: wx.getSystemInfoSync().statusBarHeight,
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        showtopbar: !1
    },
    onShareAppMessage: function(e) {
        return e.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    showJQQD: function() {
        wx.showToast({
            title: "敬请期待",
            icon: "none",
            duration: 2e3
        });
    },
    onPageScroll: function(e) {
        e.scrollTop > 400 ? this.setData({
            showTopbar: !0
        }) : this.setData({
            showTopbar: !1
        });
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
        var a = this;
        a.setData({
            requeseDone: !1
        }), wx.stopPullDownRefresh(), wx.request({
            url: e.globalData.newlocalhost + "/scene/index",
            data: {
                source: "微信小程序",
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e), a.setData({
                    csm_index_data: e.data
                }), a.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 300);
            },
            fail: function(e) {
                a.setData({
                    requeseFail: !0
                });
            }
        });
    }
});