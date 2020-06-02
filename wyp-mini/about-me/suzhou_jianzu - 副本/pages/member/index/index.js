function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = require("../../../utils/server"), o = wx.getStorageSync("utoken"), n = null, s = -1, i = 0;

Page((e = {
    data: {
        loading: !0,
        login: !1,
        time: "获取验证码",
        is_openmerch: "",
        merchid: "",
        utoken: "",
        order_0: "",
        order_1: "",
        order_2: "",
        balance: "",
        integral: "",
        membercard: "",
        memberLevel: "",
        level1: "普通会员",
        cardsn: "",
        customerserver: "",
        icongroupImg: [ "https://tws.cnweisou.com/images/1n.png", "https://tws.cnweisou.com/images/2n.png", "https://tws.cnweisou.com/images/3n.png", "https://tws.cnweisou.com/images/4n.png", "https://tws.cnweisou.com/images/refundP.png" ],
        listmenuImg: [ "https://tws.cnweisou.com/images/1allOrderMy.png", "https://tws.cnweisou.com/images/7signMy.png", "https://tws.cnweisou.com/images/8membershipCardMy.png", "https://tws.cnweisou.com/images/9shopMy.png", "https://tws.cnweisou.com/images/10receivingAddressMy.png", "https://tws.cnweisou.com/images/11getCouponsMy.png", "https://tws.cnweisou.com/images/12attentionMy.png", "https://tws.cnweisou.com/images/13reservationServiceMy.png", "https://tws.cnweisou.com/images/14integralMall.png", "https://tws.cnweisou.com/images/15distributionMy.png", "https://tws.cnweisou.com/images/16activitiesMy.png", "https://tws.cnweisou.com/images/17jumpListMy.png", "https://tws.cnweisou.com/images/18aboutUsMy.png", "https://tws.cnweisou.com/images/19publishingSupplyDemand.png", "https://tws.cnweisou.com/images/20supplyDemandMy.png", "https://tws.cnweisou.com/images/21groupPurchaseMy.png", "https://tws.cnweisou.com/images/22subscribeListMy.png", "https://tws.cnweisou.com/images/couponsMy.png", "https://tws.cnweisou.com/images/evaluationMy.png", "https://tws.cnweisou.com/images/markMy.png", "https://tws.cnweisou.com/images/tracksMy.png", "https://tws.cnweisou.com/images/CartMy.png", "https://tws.cnweisou.com/images/viewMy.png", "https://tws.cnweisou.com/images/informationMy.png" ],
        myPhone: "",
        userInfo: ""
    },
    isPhone: function() {
        var t = this;
        o = wx.getStorageSync("utoken"), a.sendRequest({
            url: "?r=ewei_hotel.member.is_auth",
            data: {
                utoken: o
            },
            method: "GET",
            success: function(e) {
                e.data.result.mobile ? t.setData({
                    myPhone: e.data.result.mobile
                }) : t.setData({
                    myPhone: ""
                });
            }
        });
    },
    getPhoneNumber: function(t) {
        var e = this;
        o = wx.getStorageSync("utoken");
        var n = t.detail.errMsg, s = t.detail.encryptedData, i = t.detail.iv;
        n.indexOf("getPhoneNumber:fail") > -1 ? (e.setData({
            myPhone: ""
        }), wx.showToast({
            title: "已拒绝获取手机号",
            image: "https://tws.cnweisou.com/images/eidtNo.png",
            duration: 1500
        })) : a.sendRequest({
            url: "?r=ewei_hotel.member.auth_mobile",
            data: {
                utoken: o,
                encryptedData: s,
                iv: i
            },
            method: "POST",
            success: function(t) {
                if (1 != t.data.status) return wx.showToast({
                    title: "授权失败",
                    image: "https://tws.cnweisou.com/images/eidtNo.png",
                    duration: 1500
                }), !1;
                a.sendRequest({
                    url: "?r=ewei_hotel.member.is_auth",
                    data: {
                        utoken: o
                    },
                    method: "GET",
                    success: function(t) {
                        t.data.result && t.data.result.mobile && e.setData({
                            myPhone: t.data.result.mobile
                        });
                    }
                });
            }
        });
    },
    onLoad: function(t) {
        o = wx.getStorageSync("utoken");
        a.globalData.login;
        var e = this;
        a.globalData.userInfo ? e.setData({
            loading: !1
        }) : (wx.getUserInfo({
            success: function(t) {
                e.setData({
                    userInfo: t.userInfo
                });
            }
        }), e.setData({
            loading: !1
        })), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    height: t.windowHeight
                });
            }
        });
    },
    loginbtn: function() {
        wx.navigateTo({
            url: "../registered/index"
        });
    },
    stroebtn: function() {
        wx.navigateTo({
            url: "../../goods/shop/shop?id=" + this.data.merchid
        });
    },
    onShow: function() {
        var t = a.globalData.login, e = this;
        e.setData({
            login: t
        }), o ? (o = wx.getStorageSync("utoken"), e.getMemberAll()) : wx.login({
            success: function(t) {
                var n = t.code;
                wx.getUserInfo({
                    success: function(t) {
                        a.sendRequest({
                            url: "?r=wxapp.logs.slogin",
                            data: {
                                code: n,
                                encryptedData: t.encryptedData,
                                iv: t.iv
                            },
                            method: "POST",
                            success: function(a) {
                                if (a.data) return 1 == a.data.status ? (o = a.data.result.utoken, wx.setStorageSync("utoken", o), 
                                e.setData({
                                    userInfo: t.userInfo
                                }), e.getMemberAll(), void ("function" == typeof cb && cb(o))) : -1 == a.data.status ? void 0 : void a.data.status;
                            }
                        });
                    }
                });
            }
        });
    },
    onPullDownRefresh: function() {
        wx.getStorageSync("utoken"), a.globalData.login;
        var t = this;
        wx.getStorageSync("utoken"), t.getMemberAll(), wx.stopPullDownRefresh();
    },
    getMemberAll: function() {
        var t = this;
        o = wx.getStorageSync("utoken"), a.sendRequest({
            url: "?r=wxapp.member&utoken=" + o,
            method: "GET",
            showToast: !1,
            success: function(e) {
                if (a.globalData.userInfo ? t.setData({
                    userInfo: a.globalData.userInfo
                }) : t.data.userInfo ? t.setData({
                    userInfo: t.data.userInfo
                }) : wx.getUserInfo({
                    success: function(e) {
                        t.setData({
                            userInfo: e.userInfo
                        });
                    }
                }), e.data.result.member_page) t.setData({
                    index: !1
                }), t.getMemberInfo(); else {
                    if (e.data.result.cardsn) o = e.data.result.cardsn; else var o = null;
                    t.setData({
                        index: !0,
                        is_openmerch: e.data.result.is_openmerch,
                        merchid: e.data.result.merchid,
                        order_0: e.data.result.order_0,
                        order_1: e.data.result.order_1,
                        order_2: e.data.result.order_2,
                        order_4: e.data.result.order_4,
                        balance: e.data.result.credit2,
                        integral: e.data.result.credit1,
                        membercard: e.data.result.credit3,
                        cardsn: o
                    }), e.data.result && e.data.result.wxapp_sign && t.setData({
                        wxapp_sign: e.data.result.wxapp_sign
                    }), null == t.data.cardsn ? (t.setData({
                        memberLevel: t.data.level1
                    }), wx.getStorageSync("customerserver") && t.setData({
                        customerserver: wx.getStorageSync("customerserver")
                    })) : t.setData({
                        memberLevel: e.data.result.cardset.title
                    });
                }
            }
        }), o = wx.getStorageSync("utoken"), a.sendRequest({
            url: "?r=member.tool&utoken=" + o,
            method: "GET",
            showToast: !1,
            success: function(e) {
                t.setData({
                    toolList: e.data.result
                }), 1 == e.data.result.mobile && t.isPhone();
            }
        });
    },
    navigateToCoupon: function() {
        wx.navigateTo({
            url: "../coupon/myCoupon/myCoupon"
        });
    },
    yu_list: function() {
        wx.navigateTo({
            url: "../../services/list/index"
        });
    },
    navigateToEvaluate: function() {
        wx.navigateTo({
            url: "../evaluate/evaluate"
        });
    },
    navigateToPoint: function() {
        wx.navigateTo({
            url: "../point/point"
        });
    },
    navigateToCollect: function() {
        wx.navigateTo({
            url: "../collect/collect"
        });
    }
}, t(e, "navigateToEvaluate", function() {
    wx.navigateTo({
        url: "../evaluate/evaluate"
    });
}), t(e, "navigateToMoney", function() {
    wx.navigateTo({
        url: "../money/money"
    });
}), t(e, "navigateToList", function() {
    wx.navigateTo({
        url: "/pages/member/jump/jump"
    });
}), t(e, "navigateRegister", function() {
    wx.reLaunch({
        url: "../../commission/register/index"
    });
}), t(e, "navigateToOrder", function(t) {
    var e = t.currentTarget.id;
    wx.navigateTo({
        url: "../../order/list/list?id=" + e + "&currid=" + e
    });
}), t(e, "navigateTogroupbuy", function(t) {
    wx.navigateTo({
        url: "../allTool/groupbuy/index?id=0"
    });
}), t(e, "navigateToOrderMore", function(t) {
    wx.navigateTo({
        url: "../../order/list/list?id=1"
    });
}), t(e, "navigateToAddress", function() {
    wx.navigateTo({
        url: "../../address/list/list"
    });
}), t(e, "logout", function() {
    a.globalData.login = !1, a.globalData.userInfo = null, wx.request({
        url: "https://wudhl.com/index.php/Api/User/logoutWX/openid/" + a.globalData.openid,
        data: {},
        method: "GET",
        success: function(t) {
            200 == t.data.code && (wx.showToast({
                title: "注销成功",
                icon: "success"
            }), timeout = setTimeout(function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            }, 2e3));
        }
    });
}), t(e, "joinAllTool", function() {
    wx.navigateTo({
        url: "../allTool/allTool"
    });
}), t(e, "navigateToAddressAboutus", function() {
    wx.navigateTo({
        url: "/pages/member/aboutus/aboutus"
    });
}), t(e, "turnTologin", function(t) {
    this.setData({
        ifLogup: !1
    }), this.data.email = "", this.data.name = "", this.data.password = "", this.data.passwordSure = "";
}), t(e, "turnTologup", function(t) {
    this.setData({
        ifphone: !1,
        ifLogup: !0,
        num: ""
    }), this.data.name = "", this.data.email = "", this.data.phoneNum = "", this.data.password = "";
}), t(e, "turnto_phone", function(t) {
    this.setData({
        ifphone: !0
    });
}), t(e, "tap_logups", function(t) {
    wx.switchTab({
        url: "/pages/index/index"
    });
}), t(e, "tap_logup", function(t) {
    if ("" == this.data.email) wx.showToast({
        title: "请输入您的邮箱",
        duration: 1200,
        icon: "loading"
    }); else if (".com" != this.data.email.slice(-4) || this.data.email.indexOf("@") < 0) wx.showToast({
        title: "您输入的邮箱不合法",
        duration: 1200,
        icon: "loading"
    }), this.setData({
        warn: {
            warn_email: "color:rgb(241,1,25);"
        }
    }); else if ("" == this.data.password) wx.showToast({
        title: "请设置登陆密码",
        duration: 1200,
        icon: "loading"
    }); else if (this.data.password == this.data.passwordSure) {
        var e = new "".User(), o = this;
        e.setUsername(this.data.name), e.setEmail(this.data.email), e.setPassword(this.data.password), 
        e.signUp().then(function(t) {
            a.iflogup = !0, wx.showToast({
                title: "",
                icon: "loading"
            }), wx.redirectTo({
                url: "../main/main?usrid=" + t.id
            });
        }, function(t) {
            switch (t.code) {
              case 203:
                wx.showToast({
                    title: "您已注册过，请登录",
                    icon: "loading"
                }), o.turnTologin();
                break;

              case 202:
                wx.showToast({
                    title: "此用户名已被注册",
                    icon: "loading"
                }), o.setData({
                    warn: {
                        warn_name: "color:rgb(241,1,25);"
                    }
                });
                break;

              case 214:
                wx.showToast({
                    title: "您的手机已注册过请登录",
                    icon: "loading"
                });
            }
        });
    } else wx.showToast({
        title: "两次输入的密码不一致",
        duration: 1200,
        icon: "loading"
    }), this.setData({
        warn: {
            warn_passwordSure: "color:rgb(241,1,25);"
        }
    });
}), t(e, "tap_login", function() {
    var t = new "".User(), e = this;
    "" == this.data.name ? wx.showToast({
        title: "请输入注册邮箱",
        duration: 1500,
        icon: "loading"
    }) : "" == this.data.password ? wx.showToast({
        title: "请输入密码",
        duration: 1500,
        icon: "loading"
    }) : (t.setUsername(this.data.name), t.setPassword(this.data.password), t.logIn().then(function(t) {
        wx.showToast({
            title: "",
            icon: "loading"
        });
        var e = t.id;
        wx.redirectTo({
            url: "../main/main?usrid=" + e
        });
    }, function(t) {
        "210" == t.code ? (wx.showToast({
            title: "密码错误",
            duration: 1500,
            icon: "loading"
        }), e.setData({
            warn: {
                warn_passwordSure: "color:rgb(241,1,25);"
            }
        })) : "211" == t.code ? (wx.showToast({
            title: "该邮箱还未注册，请先注册",
            duration: 2200,
            icon: "loading"
        }), e.setData({
            warn: {
                warn_name: "color:rgb(241,1,25);"
            },
            ifLogup: !0
        })) : "216" == t.code ? (wx.showToast({
            icon: "loading",
            title: "请先验证邮箱",
            duration: 2e3
        }), "".User.requestEmailVerify(e.data.email).then(function(t) {}, function(t) {
            "1" == t.code && wx.showToast({
                title: "今日往此邮箱发送的邮件数已超上限",
                duration: 2e3,
                icon: "loading"
            });
        })) : "219" == t.code && (e.setData({
            warn: {
                warn_passwordSure: "color:rgb(241,1,25);"
            }
        }), wx.showToast({
            title: "登录失败次数超过限制，请稍候再试，或通过忘记密码重设密码",
            duration: 4e3,
            icon: "loading"
        }));
    }));
}), t(e, "getnum", function(t) {
    var e = this;
    11 != parseInt(e.data.phoneNum).toString().length ? wx.showToast({
        title: "请输入正确的手机号",
        icon: "loading"
    }) : e.reSendPhoneNum();
}), t(e, "inputNum", function(t) {
    this.data.num = t.detail.value;
}), t(e, "quick_reguster_phone", function(t) {
    wx.navigateTo({
        url: "../../register/index"
    });
}), t(e, "quick_login_phone", function(t) {
    var e = this;
    4 == parseInt(this.data.num).toString().length ? wx.request({
        url: "https://wudhl.com/index.php/Api/User/validate?phone=" + this.data.phoneNum + "&num=" + this.data.num + "&openid=" + a.globalData.openid,
        data: {
            phone: this.data.phoneNum,
            num: this.data.num
        },
        method: "GET",
        success: function(t) {
            200 == t.data.code ? (a.globalData.login = !0, a.globalData.userInfo = t.data.res, 
            e.setData({
                login: !0
            }), wx.showToast({
                title: t.data.msg,
                icon: "success"
            }), timeout = setTimeout(function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            }, 2e3)) : wx.showToast({
                title: t.data.msg,
                icon: "error"
            });
        }
    }) : wx.showToast({
        title: "无效的验证码",
        duration: 1500,
        icon: "loading"
    });
}), t(e, "getPassword", function(t) {
    this.setData({
        password: t.detail.value,
        warn: {
            warn_passwordSure: ""
        }
    }), this.data.password = t.detail.value;
}), t(e, "getEmail", function(t) {
    this.data.email = t.detail.value, this.data.name = t.detail.value, this.setData({
        warn: {
            warn_email: ""
        }
    });
}), t(e, "passwordSure", function(t) {
    t.detail.value === this.data.password && (this.data.passwordSure = t.detail.value), 
    this.setData({
        warn: {
            warn_passwordSure: ""
        }
    });
}), t(e, "getPhoneNum", function(t) {
    this.setData({
        phoneNum: t.detail.value
    });
}), t(e, "input_num", function(t) {
    this.data.num = t.detail.value;
}), t(e, "forgetPassword", function(t) {
    "".User.requestPasswordReset(this.data.email).then(function(t) {
        wx.showToast({
            title: "密码重置邮件已发送，请在邮件中重置密码",
            icon: "success",
            duration: 5e3
        });
    }, function(t) {
        "1" == t.code ? wx.showToast({
            title: "今日往此邮箱发送的邮件数已超上限",
            duration: 2e3,
            icon: "loading"
        }) : "204" == t.code ? wx.showToast({
            title: "请先输入注册邮箱",
            duration: 1200,
            icon: "loading"
        }) : "205" == t.code && wx.showToast({
            title: "您还没注册哦",
            duration: 1200,
            icon: "loading"
        });
    });
}), t(e, "reSendPhoneNum", function() {
    if (s < 0) {
        var t = this;
        s = 60, n = setInterval(function() {
            s--, t.setData({
                time: s + "s"
            }), s <= 0 && (s = -1, clearInterval(n), t.setData({
                time: "获取验证码"
            }));
        }, 1e3);
    } else wx.showToast({
        title: "短信已发到您的手机，请稍后重试!",
        icon: "loading",
        duration: 700
    });
}), t(e, "refundGoods", function() {
    wx.navigateTo({
        url: "/pages/order/refundGoods/refundGoods"
    });
}), t(e, "joinMemberCar", function() {
    wx.navigateTo({
        url: "../activeCard/activeCard"
    });
}), t(e, "joinMemberShip", function() {
    wx.navigateTo({
        url: "../membership/index"
    });
}), t(e, "joinbalanceDetail", function() {
    wx.navigateTo({
        url: "../activeCard/integralSum/integralSum?creditType=credit2"
    });
}), t(e, "joinintegralDetail", function() {
    wx.navigateTo({
        url: "../activeCard/integralSum/integralSum?creditType=credit1"
    });
}), t(e, "joinUs", function() {
    wx.navigateTo({
        url: "../aboutus/aboutus"
    });
}), t(e, "joinIntegral", function() {
    wx.navigateTo({
        url: "../integral/home/index"
    });
}), t(e, "joinVIPCard", function() {
    wx.navigateTo({
        url: "../membership/index"
    });
}), t(e, "joinSign", function() {
    wx.navigateTo({
        url: "../sign/sign"
    });
}), t(e, "joingroundShopDetail", function() {
    wx.navigateTo({
        url: "../../groupbuy/groupList/index"
    });
}), t(e, "joinCreateActivity", function() {
    wx.navigateTo({
        url: "../groupActivity/groupActivity"
    });
}), t(e, "joinMyActivity", function() {
    wx.navigateTo({
        url: "../groupActivity/channel/channel"
    });
}), t(e, "joinSad", function() {
    wx.navigateTo({
        url: "../../supdem/supdem"
    });
}), t(e, "joinMysad", function() {
    wx.navigateTo({
        url: "../../supdem/myexhibit/myexhibit"
    });
}), t(e, "joincustomerForm", function() {
    wx.navigateTo({
        url: "../../customerForm/formSuccess/formSuccess"
    });
}), t(e, "getMemberInfo", function() {
    var t = this, e = wx.getStorageSync("utoken");
    a.sendRequest({
        url: "?r=wxapp.member&utoken=" + e,
        method: "GET",
        success: function(e) {
            t.setData({
                memberInfo: e.data.result
            }), null == e.data.result.cardsn ? t.setData({
                memberLevel: t.data.level1
            }) : t.setData({
                memberLevel: e.data.result.cardset.title
            }), t.data.memberInfo.memberLevel = t.data.memberLevel, t.setData({
                memberInfo: t.data.memberInfo
            });
            var a = [ t.data.memberInfo.order_0, t.data.memberInfo.order_1, t.data.memberInfo.order_2, t.data.memberInfo.order_2, t.data.memberInfo.order_4 ];
            for (var o in e.data.result.member_page.data.items) if ("icongroup" == e.data.result.member_page.data.items[o].id) {
                var n = 0;
                for (var s in e.data.result.member_page.data.items[o].data) e.data.result.member_page.data.items[o].data[s].iconImg = t.data.icongroupImg[n], 
                e.data.result.member_page.data.items[o].data[s].currOrder = a[n], n++;
                t.data.memberInfo.member_page.data.items[o] = e.data.result.member_page.data.items[o], 
                t.setData({
                    memberInfo: t.data.memberInfo
                });
            }
            for (var r in e.data.result.member_page.data.items) if ("listmenu" == e.data.result.member_page.data.items[r].id) {
                for (var u in e.data.result.member_page.data.items[r].data) e.data.result.member_page.data.items[r].data[u].listmenuImg = t.data.listmenuImg[i], 
                e.data.result.member_page.data.items[r].data[u].textcolor = e.data.result.member_page.data.items[r].style.textcolor, 
                e.data.result.member_page.data.items[r].data[u].remarkcolor = e.data.result.member_page.data.items[r].style.remarkcolor, 
                i++;
                t.data.memberInfo.member_page.data.items[r] = e.data.result.member_page.data.items[r], 
                t.setData({
                    memberInfo: t.data.memberInfo
                });
            }
        }
    });
}), t(e, "getToPage", function(t) {
    a.getToPage(t);
}), e));