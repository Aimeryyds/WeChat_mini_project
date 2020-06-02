function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = require("../../../utils/server"), i = wx.getStorageSync("utoken");

getApp();

Page((t = {
    data: {
        loading: !0,
        disabled: !1,
        distributor: "成为分销商"
    },
    onLoad: function() {
        this.getInfo();
    },
    getInfo: function() {
        i = wx.getStorageSync("utoken");
        var e = this;
        a.sendRequest({
            method: "GET",
            url: "?r=wxapp.commission.register1&utoken=" + i,
            showToast: !1,
            data: {},
            success: function(t) {
                console.log(t), t.data.result && void 0 === t.data.result.length ? t.data.result.set && (e.setData({
                    become: t.data.result.set.become,
                    set: t.data.result.set
                }), 1 == t.data.result.member.isagent && e.setData({
                    distributor: "商家申请中",
                    disabled: !0
                })) : (console.log("空--------------------------"), e.setData({
                    isdistributor: !0
                }), a.sendRequest({
                    url: "?r=wxapp.commission.index&utoken=" + i,
                    data: {},
                    showToast: !1,
                    success: function(t) {
                        console.log(t);
                        var a = t.data.result.member;
                        e.setData({
                            data: a,
                            sets: t.data.result.set.commission.texts,
                            mid: a.id
                        });
                        var i = t.data.result.member.nickname, o = t.data.result.member.aagentlevel;
                        if (e.setData({
                            shop: i,
                            rank: o
                        }), 0 == a.agentid) {
                            n = "总店";
                            e.setData({
                                person: n
                            });
                        } else {
                            var n = t.data.result.member.person;
                            e.setData({
                                person: n
                            });
                        }
                    }
                })), e.setData({
                    loading: !1
                });
            }
        });
    },
    toindex: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    toAgreement: function() {
        wx.navigateTo({
            url: "../agreement/agreement"
        });
    },
    joingoodDetail: function() {
        var e = this;
        wx.navigateTo({
            url: "../../goods/detail/detail?objectId=" + e.data.set.goods.id
        });
    },
    formSubmit: function(e) {
        this.setData({
            realname: e.detail.value.name,
            mobile: e.detail.value.phone,
            weixin: e.detail.value.weChat
        });
    },
    submitClick: function(e) {
        if ((t = this).data.realname) if (/^1(3|4|5|7|8)\d{9}$/.test(t.data.mobile)) if (t.data.weixin) {
            var t = this, i = wx.getStorageSync("utoken");
            a.sendRequest({
                url: "?r=wxapp.commission.register1&utoken=" + i,
                data: {
                    realname: t.data.realname,
                    mobile: t.data.mobile,
                    weixin: t.data.weixin
                },
                method: "POST",
                success: function(e) {
                    1 == e.data.status && (wx.showToast({
                        title: "商家注册成功",
                        icon: "success",
                        duration: 3e3
                    }), t.setData({
                        realname: t.data.realname,
                        mobile: t.data.mobile,
                        weixin: t.data.weixin,
                        distributor: "商家申请中",
                        disabled: !0
                    }));
                }
            });
        } else wx.showModal({
            title: "消息",
            content: "微信号不能为空",
            showCancel: !1,
            confirmColor: "#FF6A6A"
        }); else wx.showModal({
            title: "消息",
            content: "请填写正确的手机号",
            showCancel: !1,
            confirmColor: "#FF6A6A"
        }); else wx.showModal({
            title: "消息",
            content: "姓名不能为空",
            showCancel: !1,
            confirmColor: "#FF6A6A"
        });
    },
    distribution: function() {
        wx.navigateTo({
            url: "../distributionPrice/distributionPrice"
        });
    },
    Withdraw: function() {
        wx.navigateTo({
            url: "../distributionPrice/distributionPrice"
        });
    },
    order: function() {
        wx.navigateTo({
            url: "../orderForm/orderForm"
        });
    }
}, e(t, "Withdraw", function() {
    wx.navigateTo({
        url: "../Withdraw/Withdraw"
    });
}), e(t, "team", function() {
    wx.navigateTo({
        url: "../team/team"
    });
}), e(t, "QRcode", function() {
    var e = this;
    wx.navigateTo({
        url: "../QRcode/QRcode?mid=" + e.data.mid
    });
}), e(t, "QStroe", function() {
    var e = this;
    wx.navigateTo({
        url: "../shopStore/index?mid=" + e.data.mid
    });
}), t));