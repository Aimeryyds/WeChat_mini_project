var t = getApp();

require("../../sdk/dingxiang.js");

Page({
    data: {
        loading: !1,
        isLing: "",
        loginStatus: 0,
        mzsmMask: !0,
        maskSty: !0,
        mianzetk: !0,
        huodongsm: !0,
        remaskSty: !0,
        shibai: !0
    },
    onLoad: function(a) {
        console.log("lingqu.js---options--", a);
        var e = this, o = wx.getStorageSync("userInfo");
        t.globalData.url_host;
        e.setData({
            cityId: a.cityId,
            isLing: a.isLing,
            userInfo: o,
            userid: o.uid,
            activityid: a.activityid
        }), e.kListData(a), console.log("that.data.returnData----", e.data.returnData, "----------", e.data.thisLq), 
        1 == a.returnData && (console.log("登陆且领取过 不弹窗"), e.setData({
            remaskSty: !0
        })), 0 == a.returnData && (console.log("登陆了，未领取 请求接口，且弹窗"), e.jikou(a), e.setData({
            remaskSty: !1
        })), 1 == a.isLing && 1 == e.data.thisLq && (console.log("登陆页过来且领取过"), e.setData({
            remaskSty: !0
        })), 1 == a.lingtan && (console.log("登陆了 从领取界面过来"), e.setData({
            remaskSty: !1
        }));
        var n = wx.getSystemInfoSync().windowHeight, i = 750 / wx.getSystemInfoSync().windowWidth;
        console.log("ratio--", i);
        var s = n * i + "rpx";
        console.log("ratio高度---", s), console.log("高度---", n), wx.createSelectorQuery().select(".bottom-bg").boundingClientRect(function(t) {
            console.log("---", t.height);
            var a = t.height / 2 - 200;
            e.setData({
                height: a + "px",
                gaodu2: wx.getSystemInfoSync().windowHeight,
                gaodu3: s
            });
        }).exec();
    },
    kListData: function() {
        var a = this, e = t.globalData.url_host, o = wx.getStorageSync("userInfo");
        wx.request({
            url: e + "/event/activeactivitynq?city_id=" + a.data.cityId,
            method: "GET",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId,
                token: o.token
            },
            success: function(t) {
                if (200 == t.data.status) {
                    console.log("折扣数据--", t);
                    var e = t.data.data.parent.mianze, o = t.data.data.parent.shuoming;
                    a.setData({
                        kjList: t.data.data,
                        thisLq: t.data.data.lq,
                        myrich: e,
                        myrich2: o,
                        loading: !0
                    }), console.log(".........", a.data.thisLq, "------", a.data.isLing), 1 == a.data.isLing && (1 == a.data.thisLq ? (a.setData({
                        remaskSty: !0
                    }), console.log("登陆页过来，领取过的")) : (console.log("登陆页过来，未领取过的"), a.jikou(), a.setData({
                        remaskSty: !1
                    })));
                }
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        });
    },
    jikou: function() {
        var a = this, e = t.globalData.url_host;
        console.log("领取的接口-----", a.data.userid, "--------", a.data.activityid, "--------", a.data.userInfo.token), 
        wx.request({
            url: e + "/event/nqlingqu?city_id=" + a.data.cityId + "&userid=" + a.data.userid + "&activityid=" + a.data.activityid,
            method: "get",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId,
                token: a.data.userInfo.token
            },
            success: function(t) {
                console.log("领取折扣劵请求接口--", t), console.log("状态-------", t.data.code), console.log("状态2-------", t.data.message);
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
        return {
            title: "我爱我家20周年庆感恩钜惠，二手佣金4.9折起！",
            desc: "活动期间，登陆我爱我家APP，即可一键赢取超值优惠券。",
            imageUrl: "https://res.5i5j.com/wap/event/year/images/sqshare.png",
            path: "/pages/index?city=" + this.data.cityId
        };
    }
});