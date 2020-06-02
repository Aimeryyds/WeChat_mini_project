var e = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        requesting: 0
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
    onLoad: function(t) {
        var a = this;
        this.setData({
            option: t
        }), a.setData({
            requeseDone: !1
        }), wx.request({
            url: e.globalData.localhost + "/v9/categorylist.php",
            data: {
                source: "微信小程序",
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                a.setData({
                    requeseFail: !1
                }), setTimeout(function() {
                    a.setData({
                        requeseDone: !0
                    });
                }, 600), a.setData({
                    sortDetail: e.data.data
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
    }
});