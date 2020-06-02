var t = require("../../../utils/server"), a = wx.getStorageSync("utoken");

getApp();

Page({
    data: {
        loading: !0,
        isDisable: !0,
        clickImg: !1,
        clickType: !1,
        clickCont: !1,
        imgUrls: [ "http://tws.cnweisou.com/images/groundActivity.jpg" ],
        indicatorDots: !0,
        autoplay: !1,
        Startdate: null,
        Starttimne: null,
        Enddate: null,
        Endtime: null,
        formInfo: {},
        activityTip: !1,
        ClassNum: 0,
        index: 0,
        arraySystem: [],
        payNumLists: [],
        payType: "",
        payNum: "",
        activityType: [],
        activityIntroduce: "",
        verification: ""
    },
    onLoad: function(e) {
        a = wx.getStorageSync("utoken");
        var i = this;
        t.sendRequest({
            url: "?r=activity.index.cost_type&utoken=" + a,
            showToast: !1,
            data: {},
            method: "GET",
            success: function(t) {
                for (var a = [], e = t.data.result.length, s = 0; s < e; s++) a.push(t.data.result[s].desc);
                for (var n = [], d = t.data.result.length, o = 0; o < d; o++) n.push(t.data.result[o].value);
                i.setData({
                    arraySystem: a,
                    payNumLists: n,
                    payType: t.data.result[0].desc,
                    payNum: t.data.result[0].value
                });
            }
        }), t.sendRequest({
            url: "?r=activity.index.get_imgs&utoken=" + a,
            method: "GET",
            showToast: !1,
            success: function(t) {
                if (t.data.result.default.length > 0) {
                    var a = [];
                    a.push(t.data.result.default[0].url), i.setData({
                        imgUrls: a,
                        "formInfo.imgUrls": a
                    });
                }
                i.setData({
                    loading: !1
                });
            }
        }), wx.removeStorageSync("images"), wx.removeStorageSync("imageValueLists"), wx.removeStorage({
            key: "typeCont"
        }), wx.removeStorage({
            key: "textCont"
        });
        var s = new Date(), n = s.getFullYear(), d = s.getMonth() + 1, o = s.getDate(), r = s.getHours(), c = s.getMinutes();
        d < 10 && (d = "0" + d), o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), c < 10 && (c = "0" + c);
        var l = new Date(Date.now() + 864e5), u = l.getFullYear(), m = l.getMonth() + 1, h = l.getDate(), g = s.getMinutes();
        m < 10 && (m = "0" + m), h < 10 && (h = "0" + h), g < 10 && (g = "0" + g), this.setData({
            Startdate: n + "-" + d + "-" + o,
            Starttimne: r + ":00",
            Enddate: u + "-" + m + "-" + h,
            Endtime: r + ":00",
            Nowdate: n + "-" + d + "-" + o,
            Nowttimne: r + ":" + c
        });
    },
    onShow: function(t) {
        var a = this;
        if (a.data.clickImg) {
            var e = [];
            wx.getStorageSync("imageValueLists") && (e = wx.getStorageSync("imageValueLists"));
            var i = e.join(",");
            a.setData({
                imgUrls: wx.getStorageSync("images"),
                imageValueLists: i,
                "formInfo.imgUrls": wx.getStorageSync("images")
            });
        }
        a.data.clickType && wx.getStorage({
            key: "typeCont",
            success: function(t) {
                a.setData({
                    activityType: t.data.typeCont,
                    classNum: t.data.classNum,
                    "formInfo.activityType": t.data.typeCont
                });
            }
        }), a.data.clickCont && wx.getStorage({
            key: "textCont",
            success: function(t) {
                a.setData({
                    activityIntroduce: t.data.textCont,
                    classNum: t.data.classNum
                });
            }
        });
    },
    changeStartDate: function(t) {
        t.detail.value < this.data.Enddate || t.detail.value == this.data.Enddate && this.data.Endtime > this.data.Starttimne ? this.setData({
            Startdate: t.detail.value
        }) : wx.showModal({
            title: "提示",
            content: "结束时间不能早于开始时间"
        }), t.detail.value >= this.data.Nowdate || t.detail.value == this.data.Nowdate && this.data.Endtime > this.data.Starttimne ? this.setData({
            Startdate: t.detail.value
        }) : (wx.showModal({
            title: "提示",
            content: "开始时间不得早于当前"
        }), this.setData({
            Startdate: this.data.Nowdate
        }));
    },
    changeStartTime: function(t) {
        this.data.Startdate < this.data.Enddate || this.data.Startdate == this.data.Enddate && t.detail.value < this.data.Endtime || this.data.Startdate == this.data.Nowdate && t.detail.value >= this.data.Nowttimne ? this.data.Startdate == this.data.Nowdate ? t.detail.value >= this.data.Nowttimne ? this.setData({
            Starttimne: t.detail.value
        }) : (wx.showModal({
            title: "提示",
            content: "开始时间不得早于当前"
        }), this.setData({
            Starttimne: this.data.Nowttimne
        })) : this.setData({
            Starttimne: t.detail.value
        }) : wx.showModal({
            title: "提示",
            content: "结束时间不能早于开始时间"
        });
    },
    changeEndDate: function(t) {
        t.detail.value > this.data.Startdate || this.data.Startdate == t.detail.value && this.data.Endtime > this.data.Starttimne ? this.setData({
            Enddate: t.detail.value
        }) : wx.showModal({
            title: "提示",
            content: "结束时间不能早于开始时间"
        });
    },
    changeEndTime: function(t) {
        this.data.Startdate < this.data.Enddate || this.data.Startdate == this.data.Enddate && t.detail.value > this.data.Starttimne ? this.setData({
            Endtime: t.detail.value
        }) : wx.showModal({
            title: "提示",
            content: "结束时间不能早于开始时间"
        });
    },
    changeImage: function() {
        var t = this;
        t.setData({
            clickImg: !0
        }), wx.navigateTo({
            url: "../groupActivity/changeImg/changeImg"
        }), t.data.clickImg;
    },
    actItem: function(t) {
        this.setData({
            "formInfo.actItem": t.detail.value
        });
    },
    changeadress: function(t) {
        this.setData({
            "formInfo.actAddress": t.detail.value
        });
    },
    changeMap: function() {
        var t = this;
        wx.chooseLocation({
            success: function(a) {
                console.log(a), t.setData({
                    "formInfo.actAddress": a.name,
                    "formInfo.lat": a.latitude,
                    "formInfo.lng": a.longitude
                });
            }
        });
    },
    verificationPhone: function(t) {
        this.setData({
            verification: t.detail.value,
            activityTip: !1
        });
    },
    bindblurPhone: function(t) {
        var a = this;
        "" == a.data.verification || /^1[34578]\d{9}$/.test(a.data.verification) ? a.setData({
            "formInfo.phone": a.data.verification
        }) : (a.setData({
            activityTip: !0,
            verification: ""
        }), wx.showToast({
            title: "手机号输入有误",
            duration: 2e3
        }));
    },
    moreSelectArrow: function() {
        var t = this;
        0 == t.data.ClassNum ? t.setData({
            ClassNum: 1
        }) : t.setData({
            ClassNum: 0
        });
    },
    actPersonum: function(t) {
        this.setData({
            "formInfo.actPersonnum": t.detail.value
        });
    },
    systemChange: function(t) {
        var a = this, e = t.detail.value;
        this.setData({
            index: t.detail.value,
            payType: a.data.arraySystem[e],
            payNum: a.data.payNumLists[e]
        });
    },
    choosetype: function() {
        this.setData({
            clickType: !0
        }), wx.navigateTo({
            url: "../groupActivity/activityType/activityType"
        });
    },
    activityIntroduce: function() {
        this.setData({
            clickCont: !0
        }), wx.navigateTo({
            url: "../groupActivity/activityIntroduce/activityIntroduce"
        });
    },
    formSubmitAll: function() {
        var e = this;
        a = wx.getStorageSync("utoken"), t.sendRequest({
            url: "?r=activity.index.edit&utoken=" + a,
            data: {
                title: e.data.formInfo.actItem,
                start_time: e.data.Startdate + " " + e.data.Starttimne + ":00",
                locate: e.data.formInfo.actAddress,
                lat: e.data.formInfo.lat,
                lng: e.data.formInfo.lng,
                banner_imgs: e.data.imageValueLists,
                cost_type: e.data.payNum,
                end_time: e.data.Enddate + " " + e.data.Endtime + ":00",
                limit_members: e.data.formInfo.actPersonnum,
                type: e.data.activityType,
                note: e.data.activityIntroduce,
                mobile: e.data.verification
            },
            method: "POST",
            success: function(t) {
                e.setData({
                    activity_id: t.data.result.activity_id
                }), wx.redirectTo({
                    url: "../groupActivity/establishActivity/establishActivity?activity_id=" + e.data.activity_id
                });
            }
        });
    }
});