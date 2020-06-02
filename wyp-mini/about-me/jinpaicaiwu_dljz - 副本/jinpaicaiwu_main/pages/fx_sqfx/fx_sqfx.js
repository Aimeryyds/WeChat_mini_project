var a = getApp();

Page({
    data: {
        address: {
            detail: "",
            province: "",
            frmtype: "distripost"
        },
        isShow: !1,
        areaname: [],
        reviewstr: "",
        fill_addr: "",
        check_phone: "",
        pid: "",
        ret_page: "",
        phonenum: "",
        captchanum: "",
        timetips: "获取校验码",
        currentTime: "30",
        disabled: !1,
        phoneshow: !1,
        addrshow: !1,
        is_autoCheck: !1,
        captcha: "",
        imgcaptchanum: ""
    },
    bindcode: function() {
        var a = this.data.phonenum, t = this.data.imgcaptchanum;
        if (!t) return wx.showModal({
            content: "请输入图形验证码"
        }), !1;
        if (!/^\+?\d{1,}[ \-0-9]+$/.test(a)) return wx.showModal({
            content: "请输入合法手机号码"
        }), !1;
        var e = this;
        e.setData({
            imgcaptchanum: t
        }), wx.showLoading({
            title: "加载中",
            mask: !0
        }), getApp().apiRequest("distribution", "smsdyncode", {
            data: {
                phone: a,
                yanzhengma: t
            },
            success: function(a) {
                var t = a.data.result;
                if ("error" == t || "ERROR" == t) return wx.showModal({
                    content: a.data.errmsg
                }), !1;
                var i = e.data.currentTime;
                e.setData({
                    timetips: i + "秒后重发",
                    disabled: !0
                });
                var d = setInterval(function() {
                    e.setData({
                        timetips: i - 1 + "秒后重发"
                    }), --i <= 0 && (clearInterval(d), e.setData({
                        timetips: "重新获取",
                        currentTime: 60,
                        disabled: !1
                    }));
                }, 1e3);
                wx.showToast({
                    title: "发送成功",
                    icon: "success",
                    duration: 2e3
                }), wx.hideLoading();
            },
            complete: function() {
                e.freshCaptcha(), wx.hideLoading();
            },
            fail: function() {
                console.error("请求失败");
            }
        });
    },
    freshCaptcha: function() {
        var t = a.globalData.config.domain + "/wxappapi/distribution/captcha?capkey=fenxiaosq&APISESSID=" + a.globalData.APISESSID + "&s=" + parseInt(100 * Math.random());
        this.setData({
            captcha: t
        });
    },
    formSubmit: function() {
        var t = this, e = t.data.address, i = wx.getStorageSync("fxid"), d = t.data.fill_addr, n = t.data.check_phone, c = !1, s = !1;
        (e.detail && e.prov_id && e.city_id && e.dist_id || "0" == d) && (c = !0), (t.data.phonenum && t.data.captchanum || "0" == n) && (s = !0), 
        c && s ? a.apiRequest("distribution", "mydistributors", {
            data: {
                fill_addr: d,
                check_phone: n,
                pid: t.data.pid,
                fxid: i,
                prov_id: e.prov_id,
                city_id: e.city_id,
                dist_id: e.dist_id,
                moreaddr: e.detail,
                frmtype: e.frmtype,
                phone: t.data.phonenum,
                captcha: t.data.captchanum,
                imgcaptchanum: t.data.imgcaptchanum
            },
            success: function(a) {
                var e = a.data.userkey;
                if (/^[a-z0-9]{32}$/i.test(e)) return t.setData({
                    reviewstr: "恭喜成为分销商，点击确定继续分享",
                    fill_addr: a.data.fill_addr,
                    check_phone: a.data.check_phone
                }), wx.hideLoading(), !1;
                if (!a.data.phone_error) {
                    var i = a.data.reviewstr.replace(/[<b></b>]/g, "");
                    t.setData({
                        reviewstr: i,
                        fill_addr: a.data.fill_addr,
                        check_phone: a.data.check_phone
                    });
                }
                if ("error" == a.data.result) return wx.showModal({
                    content: a.data.errmsg
                }), wx.hideLoading(), !1;
                wx.hideLoading();
            }
        }) : wx.showModal({
            title: "提示",
            content: "请填写完整资料",
            showCancel: !1
        });
    },
    toBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    surebtn: function() {
        wx.redirectTo({
            url: "/pages/" + this.data.ret_page + "?product_id=" + this.data.pid
        });
    },
    bindPhone: function(a) {
        this.setData({
            phonenum: a.detail.value
        });
    },
    bindCaptcha: function(a) {
        this.setData({
            captchanum: a.detail.value
        });
    },
    bindImgCaptcha: function(a) {
        this.setData({
            imgcaptchanum: a.detail.value
        });
    },
    bindDetail: function(a) {
        this.setData({
            "address.detail": a.detail.value
        });
    },
    onCancel: function() {
        this.setData({
            "address.povince": "",
            isShow: !1
        });
    },
    onConfirm: function() {
        this.setData({
            isShow: !1
        });
    },
    addDot: function(a) {
        a instanceof Array && a.map(function(a) {
            return a.fullName.length > 4 ? (a.fullNameDot = a.fullName.slice(0, 4) + "...", 
            a) : (a.fullNameDot = a.fullName, a);
        });
    },
    onLoad: function(t) {
        var e = this;
        e.setData({
            isShow: !1,
            showDistrict: !0
        });
        var i = t.pid, d = wx.getStorageSync("fxid"), n = t.ret_page;
        e.freshCaptcha(), e.setData({
            pid: i,
            ret_page: n
        }), wx.showLoading({
            title: "请求中",
            mask: !0
        }), new Promise(function(t, n) {
            e.is_now_req = !0, a.apiRequest("distribution", "mydistributors", {
                data: {
                    pid: i,
                    fxid: d
                },
                success: function(a) {
                    return t(a);
                },
                fail: function(a) {
                    return n(a);
                },
                complete: function(a) {
                    e.is_now_req = !1;
                }
            }), e.reqtimer && clearTimeout(e.reqtimer), e.reqtimer = setTimeout(function() {
                e.is_now_req && (wx.hideLoading(), wx.showToast({
                    title: "请求超时，请稍后重试！",
                    icon: "none"
                }), setTimeout(function() {
                    wx.navigateBack({});
                }, 1e3));
            }, 1e4);
        }).then(function(t) {
            var i = t.data.userkey;
            if (/^[a-z0-9]{32}$/i.test(i)) return wx.hideLoading(), e.setData({
                fill_addr: "0",
                check_phone: "0",
                reviewstr: "恭喜成为分销商，点击确定继续分享"
            }), !1;
            var d = t.data.fill_addr, n = t.data.check_phone;
            if (e.setData({
                fill_addr: d,
                check_phone: n
            }), "1" == d) new Promise(function(t, e) {
                a.apiRequest("user", "basearea", {
                    data: {
                        pid: 1
                    },
                    success: function(a) {
                        return t(a);
                    },
                    fail: function(a) {
                        return e(a);
                    }
                });
            }).then(function(t) {
                var i = t.data.data[0];
                return e.addDot(t.data.data), e.setData({
                    proviceData: t.data.data,
                    "selectedProvince.index": 0,
                    "selectedProvince.code": i.code,
                    "selectedProvince.fullName": i.fullName
                }), new Promise(function(t, e) {
                    a.apiRequest("user", "basearea", {
                        data: {
                            pid: i.code
                        },
                        success: function(a) {
                            return t(a);
                        },
                        fail: function(a) {
                            return e(a);
                        }
                    });
                });
            }).then(function(t) {
                var i = t.data.data[0];
                return e.addDot(t.data.data), e.setData({
                    cityData: t.data.data,
                    "selectedCity.index": 0,
                    "selectedCity.code": i.code,
                    "selectedCity.fullName": i.fullName
                }), e.data.showDistrict ? new Promise(function(t, e) {
                    a.apiRequest("user", "basearea", {
                        data: {
                            pid: i.code
                        },
                        success: function(a) {
                            return t(a);
                        },
                        fail: function(a) {
                            return e(a);
                        }
                    });
                }) : void e.setData({
                    value: [ 0, 0 ]
                });
            }).then(function(a) {
                wx.hideLoading();
                var t = a.data.data[0];
                e.addDot(a.data.data), e.setData({
                    value: [ 0, 0, 0 ],
                    districtData: a.data.data,
                    "selectedDistrict.index": 0,
                    "selectedDistrict.code": t.code,
                    "selectedDistrict.fullName": t.fullName
                });
            }).catch(function(a) {
                wx.hideLoading(), console.log(a);
            }); else {
                if ("0" == d && "0" == n) {
                    wx.hideLoading();
                    var c = t.data.reviewstr.replace(/[<b></b>]/g, "");
                    e.setData({
                        reviewstr: c
                    });
                }
                "0" == d && "1" == n && wx.hideLoading();
            }
        }).catch(function(a) {
            wx.hideLoading(), console.log(a);
        });
    },
    choosearea: function() {
        this.setData({
            isShow: !0
        });
    },
    bindChange: function(t) {
        var e = this, i = t.detail.value, d = this.data, n = d.address;
        i.length > 2 && (this.data.value[0] !== i[0] && this.data.value[1] === i[1] && this.data.value[2] === i[2] ? new Promise(function(t, e) {
            a.apiRequest("user", "basearea", {
                data: {
                    pid: d.proviceData[i[0]].code
                },
                success: function(a) {
                    return t(a);
                },
                fail: function(a) {
                    return e(a);
                }
            });
        }).then(function(t) {
            return e.addDot(t.data.data), e.setData({
                cityData: t.data.data
            }), new Promise(function(e, i) {
                a.apiRequest("user", "basearea", {
                    data: {
                        pid: t.data.data[0].code
                    },
                    success: function(a) {
                        return e(a);
                    },
                    fail: function(a) {
                        return i(a);
                    }
                });
            });
        }).then(function(a) {
            a.data.data.length > 0 && (e.addDot(a.data.data), e.setData({
                districtData: a.data.data,
                value: [ i[0], 0, 0 ]
            }), n.province = e.data.proviceData[i[0]].fullName + " - " + e.data.cityData[0].fullName + " - " + a.data.data[0].fullName, 
            n.prov_id = e.data.proviceData[i[0]].code, n.city_id = e.data.cityData[i[1]].code, 
            n.dist_id = e.data.districtData[i[2]].code, e.setData({
                address: n
            }));
        }).catch(function(a) {
            console.log(a);
        }) : this.data.value[0] === i[0] && this.data.value[1] !== i[1] && this.data.value[2] === i[2] ? new Promise(function(t, e) {
            a.apiRequest("user", "basearea", {
                data: {
                    pid: d.cityData[i[1]].code
                },
                success: function(a) {
                    return t(a);
                },
                fail: function(a) {
                    return e(a);
                }
            });
        }).then(function(a) {
            a.data.data.length > 0 && (e.addDot(a.data.data), n.province = e.data.proviceData[i[0]].fullName + " - " + e.data.cityData[i[1]].fullName + " - " + a.data.data[0].fullName, 
            n.prov_id = e.data.proviceData[i[0]].code, n.city_id = e.data.cityData[i[1]].code, 
            e.setData({
                districtData: a.data.data,
                value: [ i[0], i[1], 0 ]
            }), n.dist_id = e.data.districtData[i[2]].code, e.setData({
                address: n
            }));
        }).catch(function(a) {
            console.log(a);
        }) : this.data.value[0] === i[0] && this.data.value[1] === i[1] && this.data.value[2] !== i[2] && (n.province = this.data.proviceData[i[0]].fullName + " - " + this.data.cityData[i[1]].fullName + " - " + this.data.districtData[i[2]].fullName, 
        n.prov_id = this.data.proviceData[i[0]].code, n.city_id = this.data.cityData[i[1]].code, 
        n.dist_id = this.data.districtData[i[2]].code, this.setData({
            value: i,
            address: n
        })));
    }
});