var t = require("../../../utils/https.js"), e = require("../../../utils/util.js"), a = new (require("../../../utils/qqmap-wx-jssdk.js"))({
    key: "BHIBZ-3BMR3-6BV3E-YSEFY-7KS4Z-4GBVE"
}), i = t.imgurl, n = !1, o = !1;

Page({
    data: {
        topicon: i + "cx_icon.png",
        img1: i + "1.png",
        latitude: "",
        longitude: "",
        stime: "",
        etime: "",
        vid: "",
        amount: "",
        orderno: "",
        markers: [],
        polyline: [ {
            points: [],
            color: "#fccf00",
            width: 4,
            borderColor: "#fccf00"
        } ],
        detailedList: [ {
            img: i + "jl.png",
            sTit: "骑行距离",
            statname: "起点",
            endname: "终点",
            long: "1.2",
            sdata: "",
            edata: ""
        }, {
            img: i + "time.png",
            sTit: "骑行时长",
            statname: "开锁时间",
            endname: "关锁时间",
            long: "18",
            sdata: "",
            edata: ""
        }, {
            img: i + "fy.png",
            sTit: "骑行费用",
            statname: "基础里程费",
            endname: "调度费",
            Coupon: "优惠券",
            Couponnum: "-3",
            long: "1.2",
            sdata: "",
            edata: "",
            youhuiq: ""
        } ],
        strAddr: "",
        endAddr: "",
        obj: {},
        timeOut: "0",
        miOut: "0",
        myHight: ""
    },
    myEventListener: function(t) {
        console.log(t.detail), this.setData({
            myHight: t.detail
        });
    },
    goBack: function() {
        wx.navigateBack();
    },
    onLoad: function(t) {
        var e = this, a = t.stime.replace(/T/, " "), i = t.etime.replace(/T/, " ");
        this.setData({
            vid: t.vid,
            orderno: t.orderno,
            stime: a,
            etime: i,
            paystatus: t.paystatus
        }), e.MyTripTrail(a, i), e.GetOrderChargeDetailList(t.orderno);
    },
    GetOrderChargeDetailList: function(e) {
        var a = this, i = {
            id: e
        };
        t.req11("V2.0/Order/GetOrderChargeDetailList", i, function(t, e) {
            if (0 == e.data.code) for (var i = e.data.data, n = 0; n < i.length; n++) 2 == i[n].type && a.setData({
                timeOut: i[n].price ? i[n].price + "" : "0"
            }), 5 == i[n].type && a.setData({
                miOut: i[n].price ? i[n].price + "" : "0"
            });
        });
    },
    MyTripTrail: function(a, i) {
        var n = this, o = this, d = this.data.polyline, s = {
            vid: o.data.vid,
            orderno: o.data.orderno,
            stime: a,
            etime: i
        };
        t.req("Veh/MyTripTrail", s, function(t, a) {
            var i = a.data.data, o = e.gcj_encrypt(i.slat, i.slng), s = e.gcj_encrypt(i.elat, i.elng);
            i.slat = o[1], i.slng = o[0], i.elat = s[1], i.elng = s[0];
            var r = i;
            if (n.setData({
                obj: r
            }), n.reverseGeocoder(i.slat, i.slng, function(t) {
                var e = n.data.obj;
                e.slatlng = t.result.address, n.setData({
                    obj: e
                });
            }), n.reverseGeocoder(i.elat, i.elng, function(t) {
                var e = n.data.obj;
                e.elatlng = t.result.address, n.setData({
                    obj: e
                });
            }), 0 != r.list.length) {
                for (var c = r.list, l = [], u = [], g = 0; g < c.length; g++) {
                    var h = c[g], m = [ h.lng, h.lat ];
                    l.push({
                        latitude: m[1],
                        longitude: m[0]
                    }), 0 == g && u.push({
                        iconPath: "../../../Content/Img/xcs.png",
                        id: 0,
                        latitude: m[1],
                        longitude: m[0],
                        width: 29,
                        height: 50
                    }), g == c.length - 1 && u.push({
                        iconPath: "../../../Content/Img/xce.png",
                        id: 0,
                        latitude: m[1],
                        longitude: m[0],
                        width: 29,
                        height: 50
                    });
                }
                d[0].points = l, n.setData({
                    polyline: d,
                    markers: u
                });
            } else (u = []).push({
                iconPath: "../../../Content/Img/xcs.png",
                id: 0,
                latitude: i.slat,
                longitude: i.slng,
                width: 29,
                height: 50
            }), u.push({
                iconPath: "../../../Content/Img/xce.png",
                id: 0,
                latitude: i.elat,
                longitude: i.elng,
                width: 29,
                height: 50
            }), d[0].points = [ {
                longitude: i.elng,
                latitude: i.elat
            } ], n.setData({
                polyline: d,
                markers: u
            });
        });
    },
    zffsucc: function(e, a) {
        var i = this;
        if (e > 15) return wx.showToast({
            icon: "none",
            title: "支付超时,请前往微信支付分支付",
            mask: !0
        }), void (n = !1);
        t.req11("V2.0/Order/GetRidingOrder", {
            id: a
        }, function(t, o) {
            0 == o.data.code ? (wx.showToast({
                title: "支付成功",
                icon: "success",
                duration: 1500,
                mask: !0
            }), setTimeout(function() {
                wx.navigateTo({
                    url: "../../index/index"
                });
            }, 1500), n = !1) : setTimeout(function() {
                i.zffsucc(e + 1, a);
            }, 2e3);
        });
    },
    showModelkf: function(e) {
        if (wx.showToast({
            icon: "none",
            title: "支付中...",
            mask: !0,
            duration: 3e4
        }), 1 != n && 1 != o) {
            var a = this, i = e.target.dataset.orderno;
            t.req11("V2.0/Order/GetRidingOrder", {
                id: i
            }, function(t, e) {
                if (0 == e.data.code) if (15 == e.data.data.paytype) {
                    a.zffsucc(0, i);
                } else {
                    if (wx.hideToast(), 1 == n || 1 == o) return;
                    n = !0, wx.showLoading({
                        title: "支付中...",
                        mask: !0
                    }), a.PayOrder({
                        paytype: 3
                    }, i);
                } else wx.hideToast(), wx.showModal({
                    title: "提示",
                    content: e.data.retmsg
                });
            });
        } else wx.hideToast();
    },
    PayOrder: function(e, a) {
        var i = this;
        1 != o ? t.req11("V2.0/Order/PayOrder", e, function(d, s) {
            if (0 == s.data.code) if (4 == e.paytype) {
                if (1 == o) return void wx.hideLoading();
                o = !0;
                var r = s.data.data.data;
                wx.requestPayment({
                    timeStamp: r.timeStamp,
                    nonceStr: r.nonceStr,
                    package: r.package,
                    signType: "MD5",
                    paySign: r.paySign,
                    success: function(e) {
                        wx.hideLoading(), wx.showLoading({
                            title: "等待中...",
                            mask: !0
                        });
                        var a = 0, i = setInterval(function() {
                            if ((a += 1) > 15) return wx.hideLoading(), n = !1, o = !1, clearInterval(i), void wx.showModal({
                                title: "提示",
                                content: "网络堵塞,请勿重复支付,稍后进入小程序酷酷酷"
                            });
                            t.req11("V2.0/Order/GetUnpayOrder", {}, function(t, e) {
                                -1 == e.data.code && (wx.hideLoading(), n = !1, o = !1, clearInterval(i), wx.setStorageSync("depositstate", 1), 
                                wx.showToast({
                                    title: "支付成功",
                                    icon: "success",
                                    duration: 1500,
                                    mask: !0
                                }), setTimeout(function() {
                                    wx.navigateTo({
                                        url: "../../index/index"
                                    });
                                }, 1500));
                            });
                        }, 2e3);
                    },
                    fail: function(t) {
                        console.log("支付取消"), wx.hideLoading(), n = !1, o = !1, "requestPayment:fail cancel" != t.errMsg && wx.showModal({
                            title: "提示",
                            content: t.errMsg,
                            success: function(t) {
                                t.confirm;
                            }
                        });
                    }
                });
            } else 3 == e.paytype ? t.req11("V2.0/Order/GetRidingOrder", {
                id: a
            }, function(t, e) {
                var a = e.data.data.amount, i = e.data.data.ridingtime, o = e.data.data.mile, d = e.data.data.stime.replace(/T/, " "), s = e.data.data.etime.substr(0, 19).replace(/T/, " "), r = e.data.data.costprice, c = e.data.data.dispatchamount, l = e.data.data.couponamount;
                wx.hideLoading(), wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3,
                    mask: !0
                }), n = !1, wx.setStorageSync("depositstate", 1), setTimeout(function() {
                    wx.redirectTo({
                        url: "../../index/endtrip/index?amount=" + a + "&ridingtime=" + i + "&mile=" + o + "&code=0&stime=" + d + "&etime=" + s + "&costprice=" + r + "&dispatchamount=" + c + "&couponamount=" + l + "&endtrip=1"
                    });
                }, 1500);
            }) : (wx.hideLoading(), n = !1, wx.showToast({
                title: s.data.retmsg,
                icon: "success",
                duration: 2e3
            })); else if (1 == s.data.code) {
                if (1 == o) return;
                i.PayOrder({
                    paytype: 4
                }, a);
            } else wx.hideLoading(), n = !1, wx.showModal({
                title: "提示",
                content: s.data.retmsg
            });
        }) : wx.hideLoading();
    },
    reverseGeocoder: function(t, e, i) {
        a.reverseGeocoder({
            location: {
                latitude: t,
                longitude: e
            },
            success: function(t) {
                i(t);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});