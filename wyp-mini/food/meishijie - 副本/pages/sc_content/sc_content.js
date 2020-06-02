function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = getApp();

Page((e = {
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        showToast: !1,
        toastTitle: "",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        requesting: 0,
        showGoHomepage: !1
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
    }
}, t(e, "onShareAppMessage", function(t) {
    return t.from, {
        title: this.data.cpDetail.title,
        path: "/pages/sc_content/sc_content?id=" + option.id + "&&title=" + option.title,
        imageUrl: this.data.cpDetail.cover_img.big + "?imageMogr2/gravity/Center/crop/328x262",
        success: function(t) {},
        fail: function(t) {}
    };
}), t(e, "onLoad", function(t) {
    var e = this;
    this.setData({
        option: t
    }), e.setData({
        requeseDone: !1
    }), wx.setNavigationBarTitle({
        title: t.title
    }), wx.request({
        url: a.globalData.localhost + "/v6/shicai_detail2.php",
        data: {
            source: "微信小程序",
            format: "json",
            id: t.id,
            title: t.title
        },
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            e.setData({
                requeseFail: !1
            }), setTimeout(function() {
                e.setData({
                    requeseDone: !0
                });
            }, 600), e.setData({
                scDetail: t.data
            });
        },
        fail: function(t) {
            e.setData({
                requeseFail: !0
            }), setTimeout(function() {
                e.setData({
                    requeseDone: !0
                });
            }, 600);
        }
    });
}), t(e, "showToastss", function(t) {
    var e = this, a = t.duration, i = t.title;
    e.setData({
        showToast: !0,
        toastTitle: i
    }), setTimeout(function() {
        e.setData({
            showToast: !1,
            toastTitle: ""
        });
    }, a);
}), e));