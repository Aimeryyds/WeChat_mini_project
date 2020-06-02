var t = getApp();

require("../../sdk/dingxiang.js");

Page({
    data: {
        userInfoData: [],
        loading: !1,
        isLing: "",
        loginStatus: 0,
        mzsmMask: !0,
        maskSty: !0,
        mianzetk: !0,
        huodongsm: !0,
        remaskSty: !0,
        shibai: !0,
        weilingqu: !1,
        lingqule: !0,
        loadinghide: !0,
        erroTit: !0
    },
    onLoad: function(t) {
        console.log("siqing.js---options--", t);
        var a = this;
        1 == t.shareSiqing && a.setData({
            shareSiqing: t.shareSiqing
        }), "false" == t.lingqule && (console.log("首页过来就是领取的"), a.setData({
            weilingqu: !0,
            lingqule: t.lingqule
        })), 1 == t.isLing && (console.log("从登录页过来的"), a.setData({
            isLing: t.isLing,
            activityid: t.activityid,
            cityId: t.cityId
        })), a.setData({
            cityId: t.cityId
        }), console.log("是否2--", a.data.returnData);
        var e = wx.getStorageSync("loginStatus");
        if (1 == e) {
            console.log("登陆了");
            var i = wx.getStorageSync("userInfo");
            console.log("userInfo--", i), a.setData({
                loginStatus: e,
                userInfoData: i,
                isLing: t.isLing,
                tokenText: i.token
            });
        } else console.log("++没登录++"), a.setData({
            isLing: t.isLing,
            tokenText: ""
        });
        a.kListData();
        var o = wx.getSystemInfoSync().windowHeight * (750 / wx.getSystemInfoSync().windowWidth) + "rpx";
        wx.createSelectorQuery().select(".bottom-bg").boundingClientRect(function(t) {
            var e = t.height / 2 - 200;
            a.setData({
                height: e + "px",
                gaodu2: wx.getSystemInfoSync().windowHeight,
                gaodu3: o
            });
        }).exec();
    },
    kListData: function() {
        var a = this, e = t.globalData.url_host;
        console.log("kListData---", a.data.cityId, "--", a.data.tokenText), wx.request({
            url: e + "/event/activeactivitynq?city_id=" + a.data.cityId,
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId,
                token: a.data.tokenText
            },
            method: "get",
            success: function(t) {
                if (200 == t.data.status) {
                    console.log("折扣数据--", t);
                    var e = t.data.data.parent.mianze, e = t.data.data.parent.mianze, i = t.data.data.parent.shuoming;
                    a.setData({
                        kjList: t.data.data,
                        myrich: e,
                        myrich2: i
                    }), 1 == a.data.isLing ? 1 == t.data.data.lq ? (a.setData({
                        remaskSty: !0,
                        weilingqu: !0,
                        lingqule: !1,
                        loading: !0
                    }), console.log("登陆页过来，领取过的")) : (console.log("登陆页过来，未领取过的"), a.jikou()) : 1 == a.data.shareSiqing ? 1 == t.data.data.lq ? (a.setData({
                        remaskSty: !0,
                        weilingqu: !0,
                        lingqule: !1,
                        loading: !0
                    }), console.log("分享领取过的")) : (console.log("分享没领取过"), a.setData({
                        remaskSty: !0,
                        weilingqu: !1,
                        lingqule: !0,
                        loading: !0
                    })) : a.setData({
                        loading: !0
                    });
                }
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    toLogin: function(a) {
        var e = this, i = wx.getStorageSync("loginStatus"), o = a.currentTarget.dataset.activityid;
        if (console.log("参数--", o), 1 == i) {
            var n = t.globalData.url_host;
            console.log("userInfoData---", e.data.userInfoData), e.setData({
                lingqule: !0
            }), console.log("一键领取，给接口传的参数-----", e.data.cityId, "--", e.data.userInfoData.uid, "---", o, "---", e.data.tokenText), 
            wx.request({
                url: n + "/event/nqlingqu?city_id=" + e.data.cityId + "&userid=" + e.data.userInfoData.uid + "&activityid=" + o,
                method: "get",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId,
                    token: e.data.tokenText
                },
                success: function(t) {
                    console.log("领取折扣劵请求接口--", t), console.log("状态-------", t.data.code), console.log("状态2-------", t.data.message), 
                    200 == t.data.code ? (e.setData({
                        loadinghide: !1
                    }), setTimeout(function() {
                        console.log("过0.2秒钟后"), e.setData({
                            weilingqu: !0,
                            lingqule: !1,
                            remaskSty: !1,
                            loadinghide: !0
                        });
                    }, 200)) : (e.setData({
                        tishi: t.data.message,
                        erroTit: !1,
                        loadinghide: !0
                    }), setTimeout(function() {
                        e.setData({
                            weilingqu: !1,
                            lingqule: !0,
                            loading: !0,
                            erroTit: !0
                        });
                    }, 2500));
                },
                fail: function(t) {
                    console.log("error", t);
                },
                complete: function(t) {
                    console.log("complete", t);
                }
            });
        } else console.log("----没登录----"), wx.navigateTo({
            url: "../login/login?url=siqing/siqing&cityId=" + e.data.cityId + "&ret_type=3&activityid=" + o
        });
    },
    jikou: function() {
        var a = this, e = t.globalData.url_host;
        console.log("调用领取的接口-----", a.data.cityId, "--", a.data.userInfoData.uid, "---", a.data.activityid, "----", a.data.tokenText), 
        a.setData({
            loadinghide: !1
        }), wx.request({
            url: e + "/event/nqlingqu?city_id=" + a.data.cityId + "&userid=" + a.data.userInfoData.uid + "&activityid=" + a.data.activityid,
            method: "get",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId,
                token: a.data.tokenText
            },
            success: function(t) {
                console.log("领取折扣劵请求接口--", t), console.log("状态-------", t.data.code), console.log("状态2-------", t.data.message), 
                200 == t.data.code ? (setTimeout(function() {
                    console.log("过0.3秒钟后"), console.log("--", a.data.lingqule), a.setData({
                        weilingqu: !0,
                        lingqule: !1,
                        remaskSty: !1,
                        loading: !0,
                        loadinghide: !0
                    });
                }, 300), console.log("调用接口，领取成功")) : (a.setData({
                    tishi: t.data.message,
                    erroTit: !1,
                    loadinghide: !0
                }), setTimeout(function() {
                    a.setData({
                        weilingqu: !1,
                        lingqule: !0,
                        loading: !0,
                        erroTit: !0
                    });
                }, 2500));
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {
                console.log("complete", t);
            }
        });
    },
    mztkBtn: function() {
        this.setData({
            mzsmMask: !1,
            maskSty: !1,
            mianzetk: !1
        });
    },
    hdsmBtn: function() {
        this.setData({
            mzsmMask: !1,
            maskSty: !1,
            huodongsm: !1
        });
    },
    colseMask: function() {
        this.setData({
            mzsmMask: !0,
            maskSty: !0,
            mianzetk: !0,
            huodongsm: !0
        });
    },
    knowBtn: function() {
        this.setData({
            remaskSty: !0
        });
    },
    saleList: function() {
        wx.navigateTo({
            url: "../sale/sale?cityId=" + this.data.cityId + "&listParam=1"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return console.log("分享的城市-", this.data.cityId), {
            title: "我爱我家20周年庆感恩钜惠，二手佣金4.9折起！",
            desc: "活动期间，登陆我爱我家APP，即可一键赢取超值优惠券。",
            imageUrl: "https://res.5i5j.com/wap/event/year/images/sqshare.png",
            path: "/pages/index?city=" + this.data.cityId
        };
    }
});