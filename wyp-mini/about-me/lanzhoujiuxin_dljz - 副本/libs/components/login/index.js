var e = require("../../../utils/api");

module.exports = {
    name: "login",
    data: {
        openId: "",
        title: "",
        userInfo: {}
    },
    props: {
        title: "",
        isUserCol: !1,
        isOrderLogin: !1
    },
    onLoad: function() {
        var o = getApp(), t = this;
        if (t.props.isUserCol) {
            var r = o.globalData.col4;
            if (r) t.methods.initUserColInfo(t, r); else {
                e.getWXAppColModuleInfo(4, function(e) {
                    t.methods.initUserColInfo(t, e);
                });
            }
        }
        o.globalData.userInfo || wx.login({
            success: function(e) {
                if ("login:ok" == e.errMsg) {
                    var o = e.code;
                    t.methods.getUserInfoByCode(o, t.parent.getUserInfoCallBack);
                }
            },
            fail: function(e) {}
        });
    },
    onShow: function() {
        var e = this.childrens.login;
        e.props.isUserCol && wx.login({
            success: function(o) {
                if ("login:ok" == o.errMsg) {
                    var t = o.code;
                    e.methods.getUserInfoByCode(t, e.parent.getUserInfoCallBack);
                }
            },
            fail: function(e) {}
        });
    },
    onUnload: function() {
        this.setData({
            is_unloaded: !0
        });
    },
    methods: {
        initUserColInfo: function(e, o) {
            var t = getApp(), r = !1, a = t.globalData.tabbar, n = getCurrentPages(), s = n[n.length - 1].__route__;
            0 != s.indexOf("/") && (s = "/" + s);
            for (var i in a.list) if (a.list[i].pagePath == s) {
                r = !0;
                break;
            }
            var l = t.globalData.wxappInfo, f = o.name || e.props.title, c = l.flag, g = l.formType, p = l.cusService, u = l.myPage, d = l.isOem, h = l.agentAcct, C = t.globalData.globalColor, I = !1;
            t.globalData.isModel && c.tabBarOpen && (I = !0, t.editTabBar()), wx.setNavigationBarTitle({
                title: f
            }), p.isTabbarPath = r, p.supportOpen = !c.cancelServiceSupport, c.footerOpen = !c.cancelSupport, 
            e.parent.setData({
                flag: c,
                formType: g,
                cusService: p,
                myPage: u,
                globalColor: C,
                showTabBar: I,
                isOem: d,
                agentAcct: h
            });
        },
        getUserInfoByCode: function(o, t) {
            e.getUserInfoByCode(o, t);
        }
    },
    getUserInfoCallBack: function(e) {
        var o = this.childrens.login, t = e.userInfo;
        if (o.props.isUserCol) {
            var r = e.myPageOrderList;
            if (r) {
                var a = e.orderProcCount, n = e.finSettleCount, s = !1, i = {}, l = [];
                r.length > 0 && (s = !0, i = r.shift(0), l = r), o.parent.setData({
                    orderProcCount: a,
                    finSettleCount: n,
                    hasOrder: s,
                    firstOrder: i,
                    otherOrderList: l
                });
            }
            t && o.parent.setData({
                avatarUrl: t.avatarUrl,
                nickName: t.nickName,
                hasUserInfo: !0
            });
        } else o.props.isOrderLogin && t && o.parent.setData({
            hasUserInfo: !0
        });
    },
    userInfoHandler: function(o) {
        var t = this, r = this.childrens.login, a = o.detail.errMsg;
        if ("getUserInfo:fail auth deny" == a) {
            if (!r.props.isOrderLogin) return;
            wx.showModal({
                title: "警告",
                content: "您点击了拒绝授权，无法提交预约。",
                showCancel: !1,
                confirmText: "确定",
                success: function(e) {}
            });
        } else if ("getUserInfo:ok" == a) {
            var n = o.detail.rawData;
            e.getUserInfoByAuth(JSON.parse(n), function(e) {
                t.getUserInfoCallBack(e), r.props.isOrderLogin && getApp().globalData.wxAppRequest.commitOrder(t);
            });
        }
    }
};