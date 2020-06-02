var a = getApp();

Page({
    data: {
        height: 375,
        current: 0,
        loading: !0,
        loading_fail: !1,
        loading_ok: !1,
        steps: []
    },
    onLoad: function(t) {
        var i = this;
        i.setData({
            id: t.id,
            tagid: t.tagid,
            current: t.current
        }), wx.getSystemInfo({
            success: function(a) {
                i.setData({
                    height: a.windowHeight
                });
            }
        });
        var e = "recipe_getRecipeInfo", n = {
            id: i.data.id
        }, d = a.getParam(e, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: d
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[e].error ? (wx.setNavigationBarTitle({
                    title: a.data[e].data.title
                }), i.setData({
                    loading: !1,
                    loading_ok: !0,
                    title: a.data[e].data.title,
                    pic: a.data[e].data.c640,
                    steps: a.data[e].data.steps
                })) : a.data[e].error < 0 ? (i.setData({
                    status: !1
                }), wx.redirectTo({
                    url: "/pages/blank404/blank404"
                })) : i.setData({
                    loading_fail: !0
                });
            },
            fail: function() {
                i.setData({
                    loading: !1,
                    loading_fail: !0
                });
            }
        });
    },
    onShow: function() {},
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            imageUrl: this.data.pic,
            path: "/pages/index/index?type=recipe_info&id=" + this.data.id + "&inviteuid=" + a.globalData.uid
        };
    }
});