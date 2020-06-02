var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        barHeight_notopbar: wx.getSystemInfoSync().statusBarHeight,
        backbtnPos: wx.getSystemInfoSync().statusBarHeight + 4,
        enable: !0,
        backiconUrl: "../../images/nav_icon_black.png",
        winHeight: "",
        shareicon: "../../images/rd_b_fx@3x.png",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        showTopbar: !1,
        is_index: !0,
        bartitle: "年夜饭"
    },
    tapBackbtn: function() {
        wx.navigateBack(1);
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: "年夜饭-不再为吃什么而苦恼",
            path: "/pages/index/index?goNewyear2019=1",
            imageUrl: "https://s1.st.meishij.net/p2/20190118/20190118173737_498.jpg",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(a) {
        var e = this;
        this.setData({
            option: a
        }), a.words && e.setData({
            is_index: !1
        }), a.words ? 3 == a.type ? (e.setData({
            bartitle: "春节习俗美食推荐"
        }), wx.request({
            url: "https://apph5.meishi.cc/zt/zt_bang.php",
            data: {
                format: "json",
                words: a.words,
                type: a.type
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log("习俗:"), console.log(t), e.setData({
                    bdlist: t.data.data
                });
            }
        })) : (e.setData({
            bartitle: a.words + "榜"
        }), wx.request({
            url: t.globalData.newlocalhost + "/data/new_year_top",
            data: {
                format: "json",
                words: a.words,
                type: a.type
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), e.setData({
                    bdlist: t.data.data.items
                });
            }
        })) : (wx.request({
            url: t.globalData.newlocalhost + "/data/new_year_top",
            data: {
                format: "json",
                words: "吉祥",
                type: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), e.setData({
                    jixianglist: t.data.data.items.slice(0, 3)
                }), console.log(e.data.jixianglist);
            }
        }), wx.request({
            url: t.globalData.newlocalhost + "/data/new_year_top",
            data: {
                format: "json",
                words: "硬菜",
                type: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), e.setData({
                    yingcailist: t.data.data.items.slice(0, 3)
                }), console.log(e.data.jixianglist);
            }
        }), wx.request({
            url: t.globalData.newlocalhost + "/data/new_year_top",
            data: {
                format: "json",
                words: "孩子",
                type: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), e.setData({
                    haizizuiailist: t.data.data.items.slice(0, 3)
                }), console.log(e.data.jixianglist);
            }
        }));
    }
});