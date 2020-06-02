var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : e(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
}, o = getApp(), a = o.requirejs("core"), i = o.requirejs("api/index");

o.requirejs("icons"), o.requirejs("wxParse/wxParse");

Page({
    data: {
        official_account: wx.canIUse("official-account"),
        route: "index",
        menu: o.tabBar,
        menu_show: !1,
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 500,
        circular: !0,
        icons: o.requirejs("icons"),
        total: 0,
        page: 1,
        show: !1,
        display: !0,
        hotimg: "/yb_shop/static/images/hotdot.jpg",
        notification: "/yb_shop/static/images/notification.png",
        page_bg_img: "",
        page_bg_color: "",
        showtabbar: !1,
        tabbar_index: 0,
        markers: [ {
            iconPath: "/yb_shop/static/images/red_position_icon.png",
            title: "地理位置",
            latitude: 34.62845,
            longitude: 112.42821,
            width: 50,
            height: 50
        } ],
        video: !1,
        config: o.config,
        page_config: o.page,
        is_copyright: !1,
        bookData: {},
        default_pic: "/yb_shop/static/images/add_pic.jpg",
        form: [],
        data: {},
        openImg: !1
    },
    openImg_show: function() {
        this.setData({
            openImg: !1
        }), o.setCache("OpenImgShowed", !0, 86400);
        var e = this.data.showtabbar;
        this.setData({
            showtabbar: !1
        });
        var t = this;
        setTimeout(function() {
            t.setData({
                showtabbar: e
            });
        }, 30);
    },
    onGotUserInfo: function(e) {
        console.log(e);
        var t = this, a = o.getCache("userinfo");
        t.setData({
            display: !1
        }), a || o.getUserInfo(e.detail.userInfo, function(e) {
            1e3 != e ? null != getApp().page.open_img.imgurl && null != getApp().page.open_img.imgurl && 0 < getApp().page.open_img.imgurl.length && t.setData({
                openImg: !0
            }) : t.setData({
                display: !0
            });
        }, e.detail.encryptedData, e.detail.iv);
    },
    formSubmit: function(e) {
        var t = {
            currentTarget: {
                dataset: {}
            }
        }, o = e.detail.value;
        t.currentTarget.dataset = o, a.menu_url(t, 1);
        var i = {};
        i.formid = e.detail.formId, i.openid = getApp().getCache("userinfo").openid, i.username = getApp().getCache("userinfo").nickName, 
        a.get("Market/getFormid", i, function(e) {
            console.log(e);
        });
    },
    to_url: function(e) {
        a.menu_url(e, 1);
    },
    menu_url: function(e) {
        a.menu_url(e, 2);
    },
    onLoad: function(e) {
        e && e.pid && (o.get_user_name(e.pid, this), this.setData({
            pid: e.pid
        }), o.set_share_pid(e.pid), o.setCache("pid", e.pid));
        var n = this;
        getApp().get_menu(function(e) {
            n.setData({
                menu: getApp().tabBar,
                page_config: getApp().page
            }), wx.setNavigationBarTitle({
                title: getApp().page.name ? decodeURIComponent(getApp().page.name) : "首页"
            }), wx.setBackgroundColor && wx.setBackgroundColor({
                backgroundColor: getApp().page.bg_color ? getApp().page.bg_color : "#f2f3f4"
            }), n.setData({
                page_bg_img: getApp().page.bg_img ? getApp().page.bg_img : "",
                page_bg_color: getApp().page.bg_color ? getApp().page.bg_color : ""
            }), i.getArea(), n.getList(), a.setting(), o.getCache("userinfo") && n.setData({
                display: !1
            });
            var p = o.getCache("OpenImgShowed"), r = void 0 === p ? "undefined" : t(p);
            n.data.display || "string" != r && "undefined" != r ? n.setData({
                openImg: !1
            }) : null != getApp().page.open_img.imgurl && null != getApp().page.open_img.imgurl && 0 < getApp().page.open_img.imgurl.length && n.setData({
                openImg: !0
            });
        });
    },
    formBook: function(e) {
        var t = this, o = e.detail.value;
        "" != o.name ? 11 == o.phone.length ? (o.user_id = getApp().getCache("userinfo").uid, 
        a.get("Index/WriteBook", o, function(e) {
            0 == e.code ? (t.setData({
                bookData: {}
            }), a.success("提交成功")) : a.alert(e.msg);
        })) : a.error("手机号格式不正确") : a.error("姓名不能为空");
    },
    listenerTime: function(e) {
        this.setData({
            "bookData.book_time": e.detail.value
        });
    },
    onShow: function() {},
    getList: function() {
        var e = this;
        i.indexMod(e, function(t) {
            e.setData(t);
        });
    },
    onPullDownRefresh: function() {
        this.onLoad(), wx.stopPullDownRefresh();
    },
    navigate: function(e) {
        var t = a.pdata(e);
        t.name && t.lat && t.lng ? a.tx_map(t.lat, t.lng, t.name) : a.toast("不能获取到该位置");
    },
    phone: function(e) {
        a.phone(e);
    },
    formPower: function(e) {
        i.formSubmit(this, e);
    },
    bindPickerChange: function(e) {
        i.bindPickerChange(this, e);
    },
    listen_time_two: function(e) {
        i.listen_time_two(this, e);
    },
    chooseImageTap1: function(e) {
        var t = a.pdata(e).id;
        i.upload(this, t, "form_pic", 1);
    },
    chooseImageTap2: function(e) {
        var t = a.pdata(e).id;
        i.upload(this, t, "form_pic", 0);
    },
    Image_del: function(e) {
        i.Image_del(this, e);
    },
    previewImage: function(e) {
        var t = a.pdata(e).url, o = a.pdata(e).arr;
        a.previewImage(t, o, "imgurl");
    },
    copyright: function() {
        var e = this.data.is_copyright;
        this.setData({
            is_copyright: !e
        });
    },
    onShareAppMessage: function(e) {
        return this.data, {
            path: "/yb_shop/pages/index/index?pid=" + (getApp().getCache("userinfo").uid ? getApp().getCache("userinfo").uid : 0),
            success: function(e) {},
            fail: function(e) {}
        };
    },
    official_account_load: function(e) {
        console.log("official_account_load"), console.log(e);
    },
    official_account_err: function(e) {
        console.log("official_account_err"), console.log(e);
    }
});