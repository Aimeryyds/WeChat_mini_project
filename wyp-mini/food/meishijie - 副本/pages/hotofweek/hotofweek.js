var e = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !0,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        starUrl1: "../../images/star1.png",
        starUrl2: "../../images/star2.png",
        starUrl3: "../../images/star3.png",
        iconUrl1: "../../images/cplisticon1.png",
        iconUrl2: "../../images/cplisticon2.png",
        showtopbar: !0
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
        this.setData({
            option: t
        });
        var a = this;
        a.setData({
            requeseDone: !1
        }), wx.request({
            url: e.globalData.apph5localhost + "/top/weixin_week.php",
            data: {
                source: "微信小程序",
                format: "json"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e), a.setData({
                    weekData: e.data.data.items
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