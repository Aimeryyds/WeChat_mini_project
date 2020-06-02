function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t(e, t) {
    wx.request({
        url: e.data.leveltwo,
        data: JSON.stringify({
            id: t
        }),
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success: function(t) {
            if (0 == t.data.retcode) {
                var a = t.data.childData;
                if (a.length > 0) {
                    for (var n = [], i = [], r = [], o = 0; o < a.length; o++) 0 == a[o].menutype && e.setData({
                        bannerUrl: a[o].imagepath
                    }), 4 == a[o].menutype && n.push(a[o]), 5 == a[o].menutype && i.push(a[o]), 6 == a[o].menutype && r.push(a[o]);
                    e.setData({
                        array1Obj: n,
                        array2Obj: i,
                        array3Obj: r
                    });
                }
            }
        }
    });
}

function a(e, t) {
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
        success: function(n) {
            0 == n.data.retcode ? wx.navigateTo({
                url: "../navigate/navigate?id=" + t + "&key=" + n.data.key
            }) : -3 == n.data.retcode ? wx.navigateTo({
                url: "../redirect/redirect?id=" + t + "&userid=" + n.data.id
            }) : -2 == n.data.retcode ? wx.showToast({
                title: "请先关注公众号",
                icon: "fail",
                duration: 6e3
            }) : 40029 == n.data.retcode ? (wx.login({
                success: function(t) {
                    e.setData({
                        code: t.code
                    });
                }
            }), a(e)) : 45011 == n.data.retcode ? wx.showToast({
                title: "频率限制，每个用户每分钟100次，请稍后再试",
                icon: "fail",
                duration: 6e3
            }) : -1 == n.data.retcode ? wx.showToast({
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

function n(e, t) {
    var a = e.split("?");
    if (a.length > 1) {
        for (var n, i = a[1].split("&"), r = 0; r < i.length; r++) if (null != (n = i[r].split("=")) && n[0] == t) return n[1];
        return "";
    }
    return "";
}

var i, r = getApp();

Page({
    data: (i = {
        leveltwo: "https://weixin.xacbank.com.cn/wxyh/WECHAT/communications/menuApplet/findChildMenu",
        initgetkey: "https://weixin.xacbank.com.cn/wxyh/WECHAT/communications/getKeyByMiniCode",
        imgUrl: r.globalData.imgUrl,
        bannerUrl: "",
        array1Obj: []
    }, e(i, "array1Obj", []), e(i, "array1Obj", []), e(i, "code", ""), i),
    onLoad: function(e) {
        var a = e.id, n = this;
        t(n, a), wx.login({
            success: function(e) {
                n.setData({
                    code: e.code
                });
            }
        });
    },
    webviewGo: function(e) {
        var t = e.currentTarget.dataset.menuid;
        if ("true" == n(e.currentTarget.dataset.menuurl, "flag")) {
            wx.login({
                success: function(e) {
                    i.setData({
                        code: e.code
                    });
                }
            });
            var i = this;
            a(i, t);
        } else wx.navigateTo({
            url: "../navigate/navigate?id=" + t
        });
    },
    onShareAppMessage: function() {}
});