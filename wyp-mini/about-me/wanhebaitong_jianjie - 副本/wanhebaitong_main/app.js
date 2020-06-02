var e = require("yb_shop/utils/core.js"), t = require("./ext.js").data;

App({
    onShow: function(e) {
        console.log("APP onShow !!!!!!"), console.log(e);
        var t = getCurrentPages();
        console.log(t);
    },
    onLaunch: function(e) {
        console.log(e);
        var t = getCurrentPages();
        console.log(t);
        var a = require("siteinfo.js"), o = 0, n = this;
        n.siteInfo = a, e.query.pid && (o = e.query.pid), console.log(o), n.setCache("pid", o), 
        n.get_menu(function(e) {});
    },
    set_share_pid: function(t) {
        var a = this.getCache("userinfo").uid;
        a && t && 0 != t && e.get("Distribe/addman", {
            uid: a,
            pid: t
        }, function(e) {
            console.log(e);
        });
    },
    get_poster: function(t) {
        var a = e.pdata(t);
        ptype = a.type, url = a.url ? a.url : "", id = a.id ? a.id : "", img = a.img ? a.img : "", 
        price = a.price ? a.price : "", original_price = a.original_price ? a.original_price : "";
    },
    ext_data: t,
    getExtC: function(t) {
        var a = this;
        wx.getExtConfig && wx.getExtConfig({
            success: function(o) {
                console.log(o), "getExtConfig: ok" == o.errMsg ? (a.globalData.appid = o.extConfig.app_key ? o.extConfig.app_key : "", 
                a.globalData.app_name = o.extConfig.app_name ? o.extConfig.app_name : getApp().globalData.app_name, 
                a.siteInfo.siteroot = o.extConfig.siteroot ? o.extConfig.siteroot : "", a.siteInfo.uniacid = o.extConfig.uniacid ? o.extConfig.uniacid : "", 
                "function" == typeof t && t()) : e.error("app.js:" + o.errMsg);
            }
        });
    },
    requirejs: function(e) {
        return require("yb_shop/utils/" + e + ".js");
    },
    get_menu: function(t) {
        var a = this;
        a.getCache("menu") ? t(2) : wx.request({
            url: a.siteInfo.siteroot + "?i=" + a.siteInfo.uniacid + "&t=undefined&v=1.0.0&from=wxapp&c=entry&a=wxapp&do=index_tabbar&m=yb_shop&sign=1d917db727d0aa4e23ca117826fa3153",
            data: {},
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                if ("request:ok" == o.errMsg) {
                    if ("string" == typeof o.data && 0 <= o.data.indexOf("html") && 0 <= o.data.indexOf("head") && 0 <= o.data.indexOf("body")) return void e.error("请求错误003");
                    if ("" == o.data) return void console.log("请求异常！");
                    if ("string" == typeof o.data && (o.data = e.json_parse(o.data)), 0 == o.data.code) {
                        var n = o.data.info;
                        if (null == n.page || null == n.page) return void e.alert(n.msg);
                        a.tabBar = n.tabbar, a.page = n.page;
                        var i = 0;
                        for (i = 0; i < a.tabBar.list.length; i++) {
                            var r = a.tabBar.list[i];
                            r.url.indexOf("?") < 0 ? r.url += "?tabbar_index=" + i : r.url += "&tabbar_index=" + i;
                        }
                        a.setCache("menu", n.tabbar, 5);
                    }
                    t(1);
                } else e.alert(o.errMsg);
            }
        });
    },
    getUserInfo: function(t, a) {
        var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        console.log("getUserInfo !!!!!!");
        var i = this, r = "", s = i.getCache("userinfo");
        s ? a && "function" == typeof a && a(s) : wx.login({
            success: function(c) {
                c.code ? (console.log(c), e.get("user/openid", {
                    wx_code: c.code,
                    iv: n,
                    encryptedData: o
                }, function(o) {
                    return console.log(o), 0 != o.code ? (e.alert(o.msg), "function" == typeof a && a(1e3), 
                    !1) : o.info.errcode ? (e.alert("errcode:" + o.info.errcode + ";errmsg:" + o.info.errmsg), 
                    !1) : (r = o.info.openid, o.info.session_key, void e.get("user/Login", {
                        wx_openid: r,
                        wx_unionid: o.info.unionid ? o.info.unionid : null,
                        nick_name: t.nickName,
                        user_headimg: t.avatarUrl,
                        pid: i.getCache("pid")
                    }, function(e) {
                        console.log(e), t.openid = r, t.uid = e.info, i.setCache("userinfo", t), a && "function" == typeof a && a(s);
                    }));
                })) : e.alert("获取用户登录态失败2");
            },
            fail: function() {
                "function" == typeof a && a(1e3), e.alert("获取用户信息失败");
            }
        });
    },
    get_user_name: function(t, a) {
        e.get("user/UserInfo", {
            uid: t
        }, function(e) {
            console.log(e), a.setData({
                p_name: e.info.nick_name
            });
        });
    },
    check_is_tabbar: function() {
        var e = getCurrentPages()[0];
        if (console.log(e), this.siteInfo.native_tabbar) e.setData({
            tabbar_index: -1,
            showtabbar: !1
        }); else {
            if (e.options.tabbar_index) e.setData({
                tabbar_index: e.options.tabbar_index
            }); else for (var t = e.route, a = 0; a < this.tabBar.list.length; a++) if (0 <= this.tabBar.list[a].url.indexOf(t)) {
                e.setData({
                    tabbar_index: a
                });
                break;
            }
            0 <= e.data.tabbar_index && e.setData({
                showtabbar: "true" == this.page.show_tabbar
            });
        }
    },
    isInArray: function(e, t) {
        for (var a = 0; a < e.length; a++) if (t == e[a].key) {
            var o = e[a].url;
            return o.charAt(o.length - 1);
        }
        return !1;
    },
    page: {
        name: "小程序",
        nv_color: "#ffffff",
        bg_color: "#f2f2f2",
        text_color: "#000000",
        bg_img: "",
        open_img: {},
        show_tabbar: "true"
    },
    tabBar: {
        bg_color: "#ffffff",
        text_color: "#333333",
        select_color: "#fe4b71",
        list: [ {
            imgurl: "/yb_shop/pages/index/index",
            name: "首页",
            key: "index",
            page_icon: "/yb_shop/static/icon/gray_home.png",
            page_select_icon: "/yb_shop/static/icon/red_home.png"
        }, {
            imgurl: "/yb_shop/pages/shop_coupon/index",
            name: "优惠券",
            key: "shop_coupon",
            page_icon: "/yb_shop/static/icon/gray_find.png",
            page_select_icon: "/yb_shop/static/icon/red_find.png"
        }, {
            imgurl: "/yb_shop/pages/product/index",
            name: "商品",
            key: "product",
            page_icon: "/yb_shop/static/icon/gray_cate.png",
            page_select_icon: "/yb_shop/static/icon/red_cate.png"
        }, {
            imgurl: "/yb_shop/pages/member/cart/index",
            name: "购物车",
            key: "cart",
            page_icon: "/yb_shop/static/icon/gray_cart.png",
            page_select_icon: "/yb_shop/static/icon/red_cart.png"
        }, {
            imgurl: "/yb_shop/pages/member/index/index",
            name: "会员中心",
            key: "member_index",
            page_icon: "/yb_shop/static/icon/gray_people.png",
            page_select_icon: "/yb_shop/static/icon/red_people.png"
        } ]
    },
    getCache: function(e, t) {
        var a = +new Date() / 1e3, o = "";
        a = parseInt(a);
        try {
            (o = wx.getStorageSync(e + this.globalData.appid)).expire > a || 0 == o.expire ? o = o.value : (o = "", 
            this.removeCache(e));
        } catch (e) {
            o = void 0 === t ? "" : t;
        }
        return o || "";
    },
    setCache: function(e, t, a) {
        var o = +new Date() / 1e3, n = !0, i = {
            expire: a ? o + parseInt(a) : 0,
            value: t
        };
        try {
            wx.setStorageSync(e + this.globalData.appid, i);
        } catch (e) {
            n = !1;
        }
        return n;
    },
    removeCache: function(e) {
        var t = !0;
        try {
            wx.removeStorageSync(e + this.globalData.appid);
        } catch (e) {
            t = !1;
        }
        return t;
    },
    ab: function(e) {},
    util: require("./we7/resource/js/util.js"),
    siteInfo: require("siteinfo.js"),
    globalData: {
        appid: "liu2417301781",
        userInfo: null,
        app_name: "壹佰小程序"
    },
    config: {
        background: "#8b8b8b",
        button_color: "#fff",
        alert_color: "#fff",
        font_color: "black",
        selectedColor: "#df2f20",
        kuan: "款",
        dan: "单",
        fu: "付",
        gou: "购",
        huo: "货"
    },
    redirect: function(e, t) {
        wx.navigateTo({
            url: "/yb_shop/pages/pintuan/pages/" + e + "?" + t
        });
    },
    showModal: function(e) {
        var t = wx.createAnimation({
            duration: 200
        });
        t.opacity(0).rotateX(-100).step(), e.setData({
            animationData: t.export()
        }), setTimeout(function() {
            t.opacity(1).rotateX(0).step(), e.setData({
                animationData: t
            });
        }.bind(e), 200);
    },
    showToast: function(e, t) {
        var a = {};
        a.toastTitle = t, e.setData({
            toast: a
        });
        var o = wx.createAnimation({
            duration: 100
        });
        o.opacity(0).rotateY(-100).step(), a.toastStatus = !0, a.toastAnimationData = o.export(), 
        e.setData({
            toast: a
        }), setTimeout(function() {
            o.opacity(1).rotateY(0).step(), a.toastAnimationData = o, e.setData({
                toast: a
            });
        }.bind(e), 100), setTimeout(function() {
            a.toastStatus = !1, e.setData({
                toast: a
            });
        }.bind(e), 2e3);
    }
});