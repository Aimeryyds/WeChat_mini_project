function e(e) {
    wx.request({
        url: e.data.initpage,
        data: JSON.stringify({
            miniappid: e.data.miniappid
        }),
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: function(t) {
            if (0 == t.data.retcode) {
                var a = t.data.menuList;
                if (a.length > 0) {
                    for (var i = {}, n = 0; n < a.length; n++) 0 == a[n].menutype && e.setData({
                        bannerUrl: a[n].imagepath
                    }), 1 == a[n].menutype && (i = a[n].children), 2 == a[n].menutype && e.setData({
                        xykgnObj: a[n].children
                    }), 3 == a[n].menutype && e.setData({
                        xxfwObj: a[n].children
                    });
                    var r = Math.ceil(i.length / 2);
                    e.setData({
                        wyhObj1: i.slice(0, r),
                        wyhObj2: i.slice(r)
                    });
                }
            }
        }
    });
}

function t(e, a) {
    wx.request({
        url: e.data.initgetkey,
        data: JSON.stringify({
            appId: e.data.miniappid,
            code: e.data.code
        }),
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: function(i) {
            0 == i.data.retcode ? wx.navigateTo({
                url: "../navigate/navigate?id=" + a + "&key=" + i.data.key
            }) : -3 == i.data.retcode ? (wx.navigateTo({
                url: "../redirect/redirect?id=" + a + "&userid=" + i.data.id
            }), console.log("../redirect/redirect?id=" + a + "&userid=" + i.data.id)) : -2 == i.data.retcode ? wx.showToast({
                title: "请先关注公众号",
                icon: "fail",
                duration: 6e3
            }) : 40029 == i.data.retcode ? (wx.login({
                success: function(t) {
                    e.setData({
                        code: t.code
                    });
                }
            }), t(e)) : 45011 == i.data.retcode ? wx.showToast({
                title: "频率限制，每个用户每分钟100次，请稍后再试",
                icon: "fail",
                duration: 6e3
            }) : -1 == i.data.retcode ? wx.showToast({
                title: "系统繁忙,请稍后再试",
                icon: "fail",
                duration: 6e3
            }) : wx.showToast({
                title: "网络不给力请稍后再试",
                icon: "fail",
                duration: 6e3
            });
        }
    });
}

function a(e, t) {
    var a = e.split("?");
    if (a.length > 1) {
        for (var i, n = a[1].split("&"), r = 0; r < n.length; r++) if (null != (i = n[r].split("=")) && i[0] == t) return i[1];
        return "";
    }
    return "";
}

var i = getApp();

Page({
    data: {
        initpage: "https://weixin.xacbank.com.cn/wxyh/WECHAT/communications/menuApplet/findFrontMenu",
        initgetkey: "https://weixin.xacbank.com.cn/wxyh/WECHAT/communications/getKeyByMiniCode",
        miniappid: "wx2723f910aa55845c",
        imgUrl: i.globalData.imgUrl,
        indicatorDots: !0,
        bannerUrl: "",
        wyhObj1: [],
        wyhObj2: [],
        xykgnObj: {},
        xxfwObj: {},
        code: ""
    },
    onLoad: function() {
        wx.hideTabBar({});
        var t = this;
        e(t), wx.login({
            success: function(e) {
                t.setData({
                    code: e.code
                });
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: "西安银行+小程序",
            path: "/pages/index/index"
        };
    },
    webviewGo: function(e) {
        var i = e.currentTarget.dataset.menuid, n = e.currentTarget.dataset.menuurl, r = a(n, "flag");
        if ("../nearby/nearby" == n) wx.navigateTo({
            url: "../nearby/nearby?id=" + i
        }); else if ("true" == r) {
            wx.login({
                success: function(e) {
                    o.setData({
                        code: e.code
                    });
                }
            });
            var o = this;
            t(o, i);
        } else wx.navigateTo({
            url: "../navigate/navigate?id=" + i
        });
    }
});