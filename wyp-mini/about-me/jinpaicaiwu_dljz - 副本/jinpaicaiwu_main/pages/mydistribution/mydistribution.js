var a = require("../../wxParse/tua-mp"), t = getApp();

(0, a.TuaPage)({
    data: function() {
        return {
            msg: "msg",
            datas: [],
            show_homeBar: !1,
            canIUseAvatarUrl: wx.canIUse("open-data.type.userAvatarUrl")
        };
    },
    onShow: function() {
        this.data.datas.result && this.data.loaded && this.onLoad();
    },
    onLoad: function() {
        var a = this, o = t.globalData.userInfo;
        o ? (wx.showLoading({
            title: "加载中...",
            mask: !0
        }), a.setData({
            headphoto: o.avatarUrl
        }), a.show_homeBar = 1 == getCurrentPages().length, a.data.canIUseAvatarUrl || a.setData({
            show_homeBar: a.show_homeBar,
            loaded: !0
        }), t.apiRequest("user", "mydistribution", {
            data: [],
            success: function(t) {
                if (wx.hideLoading(), "OK" == t.data.result) a.datas = t.data, a.data.canIUseAvatarUrl || a.setData({
                    datas: t.data
                }); else {
                    var o = t.data.errmsg || "请求失败";
                    wx.showModal({
                        title: o,
                        content: "",
                        showCancel: !1,
                        success: function() {
                            wx.navigateBack();
                        }
                    });
                }
            },
            fail: function() {
                console.error("请求失败"), wx.hideLoading();
            }
        })) : wx.navigateTo({
            url: "../login/login"
        });
    },
    tosy: function() {
        wx.redirectTo({
            url: "../fxdp_sy/fxdp_sy"
        });
    },
    computed: {
        money: function() {
            if (this.datas) {
                var a = this.datas.remaining - this.datas.totalmoney;
                return a <= 0 && (a = 0), a || (a = 0), a = a.toFixed(2), a;
            }
        }
    },
    watch: {},
    methods: {
        backHome: function() {
            t.goToHome(!0);
        },
        backTop: function() {
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 300
            });
        }
    }
});