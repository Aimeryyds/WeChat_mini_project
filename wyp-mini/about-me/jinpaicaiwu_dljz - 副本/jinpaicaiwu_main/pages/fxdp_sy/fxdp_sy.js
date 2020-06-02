require("../../wxParse/common.js");

var e = getApp(), t = require("../../static/config.js");

Page({
    data: {
        selectPerson: !0,
        selectArea: !1,
        showModalStatus: !1,
        curNav: 1,
        curIndex: 0,
        second_height: 0,
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        bottomicon01_hover: "../../common/bottomicon01_hover.png",
        bottomicon03: "../../common/bottomicon03.png",
        bottomicon04: "../../common/bottomicon04.png",
        canIUseAvatarUrl: wx.canIUse("open-data.type.userAvatarUrl"),
        products: [],
        pagerid: 1,
        first_categories: [],
        check_id: "",
        pagerShow: !0,
        errmsg: "加载中...",
        fxkey: "",
        first_pid: "",
        pageid: "fxdp_sy/fxdp_sy",
        link_detail_page: "",
        cur_user: {
            fxdp_name: "分销店铺",
            weixin_nickname: "0",
            headphoto: "0"
        },
        fxuser: [],
        show_user: [],
        nav_menu: []
    },
    loadMore: function(e) {
        var t = this.data.pagerid + 1, a = this.data.check_id;
        this.loadProducts({
            check_id: a
        }, {
            page: t
        });
    },
    loadProducts: function(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = getApp(), s = this, o = {};
        o = e, o = Object.assign(o, a);
        var n = !!/^[1-9]{1}\d*$/.test(a.page || 0);
        if (wx.showLoading({
            title: "加载中...",
            mask: !0
        }), t.innerpages && t.innerpages.fxdp) {
            var r = t.innerpages.fxdp;
            if (r.categories && 0 == r.categories.type) {
                var d = r.categories.categories;
                d && (o.categories = d.join(","));
            }
        }
        i.apiRequest("distribution", "fxdp_sy", {
            data: o,
            method: "POST",
            success: function(e) {
                var t = e.data.data || [], a = e.data.first_categories || [], i = e.data.fxkey || [], o = e.data.first_pid || [], r = e.data.link_detail_page || [], d = e.data.cur_user || [], c = e.data.fxuser || [], g = c;
                "" == g && (g = d);
                var p = [];
                for (var u in t) p.unshift(t[u]);
                var f = (t = p).length;
                if (n && (t = s.data.products.concat(t)), "ERROR" == e.data.result) return s.setData({
                    errmsg: e.data.errmsg
                }), wx.hideLoading(), !1;
                "0" == t.length && s.setData({
                    errmsg: "暂无相关产品"
                }), n ? (s.setData({
                    products: t
                }), s.setData({
                    pagerid: s.data.pagerid + 1
                })) : s.setData({
                    products: t
                }), s.setData({
                    first_categories: a,
                    pagerShow: !(f < 10),
                    fxkey: i,
                    first_pid: o,
                    link_detail_page: r,
                    cur_user: d,
                    fxuser: c,
                    show_user: g
                }), wx.hideLoading();
            },
            fail: function() {
                console.error("请求失败"), wx.hideLoading();
            }
        });
    },
    isdistribution: function(e) {
        var t = this, a = wx.getStorageSync("openid"), i = {};
        i.openid = a;
        var s = getApp();
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), s.apiRequest("distribution", "isdistribution", {
            data: i,
            method: "POST",
            success: function(a) {
                t.setData({
                    fxkey: a.data.fxkey
                }), s.globalData.userInfo ? "" == t.data.fxkey ? (wx.hideLoading(), wx.showModal({
                    title: "温馨提示：",
                    content: "您还不是分销商，是否申请成为分销商",
                    success: function(e) {
                        if (e.confirm) {
                            var a = t.data.pageid;
                            wx.navigateTo({
                                url: "../fx_sqfx/fx_sqfx?pid=" + t.data.first_pid + "&ret_page=" + a
                            });
                        } else e.cancel && console.log("用户点击取消");
                    }
                })) : (wx.hideLoading(), wx.redirectTo({
                    url: e
                })) : wx.navigateTo({
                    url: "../login/login"
                }), wx.hideLoading();
            }
        });
    },
    getopenid: function(a) {
        var i = wx.getStorageSync("openid"), s = this;
        i ? (a.openid = i, s.loadProducts(a)) : wx.login({
            success: function(i) {
                if (i.code) {
                    var o = {
                        code: i.code,
                        apitoken: t.apitoken
                    };
                    e.apiRequest("weixin", "get_wxaopenid", {
                        data: o,
                        success: function(e) {
                            e.data.errcode || (wx.setStorageSync("openid", e.data.openid), wx.setStorageSync("session_key", e.data.session_key), 
                            a.openid = e.data.openid), s.loadProducts(a);
                        }
                    });
                } else console.log("获取用户登录态失败！" + i.errMsg);
            }
        });
    },
    rotateClick: function(e) {
        1 == this.data.selectPerson ? this.setData({
            selectArea: !0,
            selectPerson: !1
        }) : this.setData({
            selectArea: !1,
            selectPerson: !0
        }), this.setData({
            showModalStatus: !0
        });
    },
    mySelect: function(e) {
        this.setData({
            selectPerson: !0,
            selectArea: !1,
            showModalStatus: !1
        });
    },
    selectNav: function(e) {
        var t = e.target.dataset.iddd, a = parseInt(e.target.dataset.indexxx);
        this.setData({
            pagerid: 1
        }), this.loadProducts({
            check_id: t
        }), this.setData({
            curNav: t,
            curIndex: a,
            check_id: t
        });
    },
    menu_redir: function(e) {
        var t = {}, a = e.currentTarget.dataset.index, i = this.data.nav_menu[a];
        t.param = {}, t.type = "page", t.param.value = i.id, t.param.redirect = 0, getApp().moduleBindTap(t);
    },
    tosy: function() {
        wx.redirectTo({
            url: "../fxdp_sy/fxdp_sy"
        });
    },
    toqrc: function() {
        this.isdistribution("../fxdp_qrc/fxdp_qrc");
    },
    rethome: function() {
        getApp().goToHome(!0);
    },
    tohome: function() {
        this.isdistribution("../mydistribution/mydistribution");
    },
    toDetail: function(e) {
        var t = this.data.link_detail_page;
        if (/^[1-9]\d*$/.test(t)) {
            var a = e.currentTarget.dataset.productid, i = "/pages/page" + t + "/page" + t;
            wx.navigateTo({
                url: i + "?product_id=" + a
            });
        }
    },
    onLoad: function(e) {
        var t = getApp(), a = this, i = t.globalData.config.nav_defpages_arr || "";
        this.setData({
            products: [],
            nav_menu: i
        }), /^wx_[0-9]+$/.test(e.fxid) && wx.setStorageSync("fxid", e.fxid);
        t.globalData.userInfo;
        var s = decodeURIComponent(e.scene);
        /^wx_[0-9]+$/.test(s) && wx.setStorageSync("fxid", s), e.check_id = this.data.check_id;
        var o = wx.getStorageSync("fxid");
        e.fxid = o, a.getopenid(e), wx.getSystemInfo({
            success: function(e) {
                a.setData({
                    second_height: parseInt(e.windowHeight)
                });
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: "分销店铺",
            path: "/pages/" + this.data.pageid + "?fxid=" + this.data.fxkey
        };
    }
});