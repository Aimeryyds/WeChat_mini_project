function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

!function(e) {
    e && e.__esModule;
}(require("../../utils/area"));

var t, a = require("../../utils/https.js"), o = a.imgurl, i = (getApp(), 0), n = /^1[3456789]\d{9}$/;

Page(e({
    data: (t = {
        topimg: o + "topimg.png",
        titmsg: "身份信息",
        joinList: [ {
            picter: "姓名",
            name: "user",
            type: "text",
            placeholder: "请输入姓名"
        }, {
            picter: "手机号码",
            name: "phone",
            type: "number",
            placeholder: "请输入11位手机号码"
        } ],
        joinImg: o + "logo23.png",
        joincont: "完善信息后将在3天内和您取得联系",
        region: [ "广东省", "深圳市", "宝安区" ],
        city: "请选择合作城市",
        adcode: "",
        items: [ {
            name: "电动车行业",
            value: "电动车行业"
        }, {
            name: "非电动车行业",
            value: "非电动车行业"
        } ],
        items1: [ {
            name: "20万以上",
            value: "20万以上"
        }, {
            name: "20万以下",
            value: "20万以下"
        } ],
        people: "*",
        name: "",
        tel: "",
        code: "",
        code1: "",
        hangye: "",
        touzi: "",
        getTime: !0,
        getTimes: !0,
        codeTime: ""
    }, e(t, "code", ""), e(t, "myHight", ""), t),
    myEventListener: function(e) {
        console.log(1212), console.log(e.detail), this.setData({
            myHight: e.detail
        });
    },
    onLoad: function() {
        var e = this;
        wx.getStorage({
            key: "uid",
            success: function(t) {
                e.setData({
                    uid: t.data.uid
                });
            }
        });
    },
    onChange: function(e, t) {},
    checkcity: function(e) {},
    chooseCity: function() {
        var e = this;
        wx.chooseCity({
            showLocatedCity: !0,
            showHotCities: !0,
            success: function(t) {
                e.setData({
                    city: t.city,
                    adcode: t.adCode
                });
            }
        });
    },
    bindRegionChange: function(e) {
        this.setData({
            region: e.detail.value,
            code: e.detail.code
        });
    },
    formSubmit: function(e) {
        var t = this;
        if ("" != e.detail.value.user && "" != e.detail.value.phone && "" != e.detail.value.qq && "" != e.detail.value.city) if (/^1[3456789]\d{9}$/.test(e.detail.value.phone)) {
            var o = {
                uid: t.data.uid,
                name: e.detail.value.user,
                tel: e.detail.value.phone,
                qq: e.detail.value.qq,
                regionid: t.data.adcode,
                region: t.data.city
            };
            a.req("User/LeagueApply", o, function(e, t) {
                0 == t.data.code ? (wx.showToast({
                    icon: "提交成功",
                    title: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 10
                    });
                }, 2e3)) : wx.showToast({
                    icon: t.data.retmsg,
                    title: "none",
                    duration: 2e3
                });
            });
        } else wx.showToast({
            icon: "请正确填写手机号码",
            title: "none",
            duration: 2e3
        }); else wx.showToast({
            icon: "请填写信息",
            title: "none",
            duration: 2e3
        });
    },
    hangyeChange: function(e) {
        this.setData({
            hangye: e.detail.value
        });
    },
    touziChange: function(e) {
        this.setData({
            touzi: e.detail.value
        });
    },
    namePut: function(e) {
        this.setData({
            name: e.detail.value
        });
    },
    telPut: function(e) {
        this.setData({
            tel: e.detail.value
        });
    },
    codePut: function(e) {
        this.setData({
            code: e.detail.value
        });
    },
    getpeople: function() {
        var e = this;
        wx.request({
            url: "https://api.xiaobeibike.com/app/Franchiser/GetFranchiserCount",
            data: "",
            header: {},
            method: "GET",
            dataType: "json",
            responseType: "text",
            success: function(t) {
                e.setData({
                    people: t.data.data
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    getcode: function() {
        var e = this;
        n.test(e.data.tel) ? a.req("User/GetCode", {
            account: e.data.tel,
            type: 6
        }, function(t, a) {
            if (0 == a.data.code) {
                e.setData({
                    getTime: !1,
                    codeTime: "60S再次获取"
                }), wx.showToast({
                    icon: "none",
                    title: "发送成功",
                    duration: 2e3
                }), i = 60;
                var o = setInterval(function() {
                    i--, e.setData({
                        codeTime: i + "S再次获取"
                    }), 0 == i && (i = 0, e.setData({
                        getTime: !0
                    }), clearInterval(o));
                }, 1e3);
            } else wx.showToast({
                icon: "none",
                title: a.data.retmsg,
                duration: 2e3
            });
        }) : wx.showToast({
            icon: "none",
            title: "请输入正确的手机号",
            duration: 2e3
        });
    },
    submi: function() {
        var e = this;
        "" != e.data.name ? "" != e.data.hangye ? "" != e.data.touzi ? "" != e.data.tel ? "" != e.data.code ? (wx.showLoading({
            content: "提交中"
        }), a.req11("Franchiser/FranchiserApply", {
            name: e.data.name,
            tel: e.data.tel,
            industry: e.data.hangye,
            budget: e.data.touzi,
            code: e.data.code
        }, function(t, a) {
            wx.hideLoading(), 0 == a.data.code ? (wx.showToast({
                icon: "none",
                title: "提交成功，我们将在三个工作日内和您取得联系",
                duration: 2e3
            }), e.setData({
                people: parseInt(e.data.people) + 1
            })) : wx.showToast({
                icon: "none",
                title: a.data.retmsg,
                duration: 2e3
            });
        })) : wx.showToast({
            icon: "none",
            title: "请输入验证码",
            duration: 2e3
        }) : wx.showToast({
            icon: "none",
            title: "请输入联系方式",
            duration: 2e3
        }) : wx.showToast({
            icon: "none",
            title: "请选择预算",
            duration: 2e3
        }) : wx.showToast({
            icon: "none",
            title: "请选择行业",
            duration: 2e3
        }) : wx.showToast({
            icon: "none",
            title: "请输入姓名",
            duration: 2e3
        });
    }
}, "onLoad", function() {
    this.getpeople();
}));