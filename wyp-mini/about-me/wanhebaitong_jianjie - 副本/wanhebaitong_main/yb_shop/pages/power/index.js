var e = getApp(), t = e.requirejs("core"), o = e.requirejs("api/index");

e.requirejs("icons"), e.requirejs("wxParse/wxParse");

Page({
    data: {
        route: "power",
        menu: e.tabBar,
        menu_show: !1,
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 500,
        circular: !0,
        icons: e.requirejs("icons"),
        show: !1,
        display: !0,
        hotimg: "/yb_shop/static/images/hotdot.jpg",
        notification: "/yb_shop/static/images/notification.png",
        default_pic: "/yb_shop/static/images/add_pic.jpg",
        background: e.config.background,
        showtabbar: !1,
        markers: [ {
            iconPath: "/yb_shop/static/images/red_position_icon.png",
            title: "地理位置",
            latitude: 34.62845,
            longitude: 112.42821,
            width: 50,
            height: 50
        } ],
        video: !1,
        config: e.config,
        id: "0",
        bookData: {}
    },
    menu_url: function(e) {
        t.menu_url(e, 2);
    },
    formSubmit: function(e) {
        var o = {
            currentTarget: {
                dataset: {}
            }
        }, a = e.detail.value;
        o.currentTarget.dataset = a, t.menu_url(o, 1);
        var i = {};
        i.formid = e.detail.formId, i.openid = getApp().getCache("userinfo").openid, i.username = getApp().getCache("userinfo").nickName, 
        t.get("Market/getFormid", i, function(e) {
            console.log(e);
        });
    },
    to_url: function(e) {
        t.menu_url(e, 1);
    },
    onLoad: function(e) {
        console.log(e);
        var o = this;
        null != e && null != e && o.setData({
            id: e.id,
            tabbar_index: e.tabbar_index ? e.tabbar_index : -1
        }), getApp().get_menu(function(e) {
            o.setData({
                menu: getApp().tabBar
            }), 0 <= o.data.tabbar_index && o.setData({
                showtabbar: !!getApp().tabBar.IsDiDis && getApp().tabBar.IsDiDis
            }), o.getList(), t.setting();
        });
    },
    formBook: function(e) {
        var o = this, a = e.detail.value, i = getApp().getCache("userinfo").uid;
        if ("" != a.name) return null == i ? (t.error("请先登录"), void setTimeout(function() {
            t.jump("/yb_shop/pages/index/index", 2);
        }, 1e3)) : void (11 == a.phone.length ? (a.user_id = i, t.get("Index/WriteBook", a, function(e) {
            0 == e.code ? (o.setData({
                bookData: {}
            }), t.success("提交成功")) : t.alert(e.msg);
        })) : t.error("手机号格式不正确"));
        t.error("姓名不能为空");
    },
    onShow: function() {},
    getList: function() {
        var e = this, t = e.data.id;
        o.power(t, e, function(t) {
            console.log(t), e.setData({
                index: t.index,
                show: t.show,
                page: t.page
            }), wx.setNavigationBarColor({
                frontColor: t.page.text_color,
                backgroundColor: t.page.nv_color,
                animation: {
                    duration: 0,
                    timingFunc: "easeIn"
                }
            }), wx.setBackgroundColor && wx.setBackgroundColor({
                backgroundColor: t.page.bg_color ? t.page.bg_color : "#f2f3f4"
            });
        });
    },
    onPullDownRefresh: function() {
        this.onLoad(), wx.stopPullDownRefresh();
    },
    navigate: function(e) {
        var o = t.pdata(e);
        o.name && o.lat && o.lng ? t.tx_map(o.lat, o.lng, o.name) : t.toast("不能获取到该位置");
    },
    phone: function(e) {
        t.phone(e);
    },
    formPower: function(e) {
        o.formSubmit(this, e);
    },
    bindPickerChange: function(e) {
        o.bindPickerChange(this, e);
    },
    listen_time_two: function(e) {
        o.listen_time_two(this, e);
    },
    chooseImageTap1: function(e) {
        var a = t.pdata(e).id;
        o.upload(this, a, "form_pic", 1);
    },
    chooseImageTap2: function(e) {
        var a = t.pdata(e).id;
        o.upload(this, a, "form_pic", 0);
    },
    Image_del: function(e) {
        o.Image_del(this, e);
    },
    previewImage: function(e) {
        var o = t.pdata(e).url, a = t.pdata(e).arr;
        t.previewImage(o, a, "imgurl");
    },
    listenerTime: function(e) {
        this.setData({
            "bookData.book_time": e.detail.value
        });
    },
    onShareAppMessage: function() {
        return t.onShareAppMessage();
    }
});