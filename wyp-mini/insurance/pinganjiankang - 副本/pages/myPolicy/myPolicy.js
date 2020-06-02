var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../vant/toast/toast")), a = t(require("../vant/dialog/dialog")), n = getApp();

Page({
    data: {
        currentTab: 0,
        policyList: [],
        guaranteeList: [],
        allLength: 0,
        to_be_paidLength: 0,
        has_paidLength: 0,
        finishLength: 0,
        baseUrl: n.globalData.baseUrl,
        to_be_paidSel: !1
    },
    unbind: function() {
        wx.getStorageSync("openId") || "" ? a.default.confirm({
            title: "提示信息",
            message: "解除绑定后，查询保单需要重新绑定身份信息，是否确认？",
            asyncClose: !0
        }).then(function() {
            wx.request({
                url: n.globalData.baseUrl + "/miniapp/unBindPartyNo.do",
                method: "POST",
                data: {
                    unionId: wx.getStorageSync("unionId") || "",
                    openId: wx.getStorageSync("openId")
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    a.default.close(), "00" == t.data.returnCode ? ((0, e.default)(t.data.msg), setTimeout(function() {
                        wx.switchTab({
                            url: "../home/home"
                        });
                    }, 1e3)) : ((0, e.default)(t.data.msg), a.default.close());
                },
                fail: function(t) {
                    a.default.close();
                }
            });
        }).catch(function() {
            a.default.close();
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    queryPolicyListByUnionId: function() {
        var t = this;
        wx.showLoading({
            title: "加载中"
        });
        var e = wx.getStorageSync("unionId") || "", a = wx.getStorageSync("openId") || "";
        wx.request({
            url: n.globalData.baseUrl + "/miniapp/queryPolicyListByUnionId.do",
            method: "POST",
            data: {
                unionId: e,
                openId: a
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                if (wx.hideLoading(), "01" != e.data.returnCode) {
                    var a = {
                        "00": "保障中",
                        "01": "已满期",
                        "02": "已终止"
                    }, n = {
                        L: "已失效",
                        N: "保单退保",
                        M: "到期终止",
                        S: "保单退保",
                        W: "已撤件",
                        Y: "终止附约",
                        X: "责任终止"
                    }, o = e.data.data, i = o.map(function(t, e, o) {
                        return "03" == t.state ? t.state = n[t.polSts] : t.state = a[t.state], t;
                    }), r = o.filter(function(t, e, a) {
                        return "保障中" == t.state;
                    });
                    console.log(o), t.setData({
                        policyList: i,
                        guaranteeList: r
                    });
                } else wx.showModal({
                    content: e.data.returnMsg,
                    showCancel: !1,
                    success: function(t) {}
                });
            },
            fail: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "请求失败，请稍候再试"
                });
            }
        });
    },
    onLoad: function() {
        this.queryPolicyListByUnionId();
    },
    onShow: function() {},
    swichNav: function(t) {
        console.log(t), this.data.currentTab != t.target.dataset.current && (this.setData({
            currentTab: t.target.dataset.current
        }), 1 != t.target.dataset.current || this.data.guaranteeList.length || (0, e.default)("暂无相关保单"));
    },
    policyDetail: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.polno, a = t.currentTarget.dataset.certno;
        console.log(a);
        var n = t.currentTarget.dataset.state;
        wx.navigateTo({
            url: "../policyDetail/policyDetail?polno=" + e + "&certno=" + a + "&state=" + n
        });
    }
});