var t = getApp(), i = t.requirejs("core"), a = t.requirejs("api/index");

Page({
    data: {
        route: "form",
        menu: t.tabBar,
        menu_show: !1,
        config: t.config,
        default_pic: "/yb_shop/static/images/add_pic.jpg",
        show: !1,
        form: [],
        data: {}
    },
    menu_url: function(t) {
        i.menu_url(t, 2);
    },
    formSubmit: function(t) {
        a.formSubmit(this, t);
    },
    bindPickerChange: function(t) {
        a.bindPickerChange(this, t);
    },
    listen_time_two: function(t) {
        a.listen_time_two(this, t);
    },
    chooseImageTap1: function(t) {
        var e = i.pdata(t).id;
        a.upload(this, e, "form_pic", 1);
    },
    chooseImageTap2: function(t) {
        var e = i.pdata(t).id;
        a.upload(this, e, "form_pic", 0);
    },
    Image_del: function(t) {
        a.Image_del(this, t);
    },
    get_list: function() {
        var e = this.data.id;
        "" == t.getCache("userinfo") && (i.toast("您还没登录呢"), setTimeout(function() {
            wx.redirectTo({
                url: "/yb_shop/pages/index/index"
            });
        }, 1e3)), a.get_form_list(1, e, this);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), i.setting(), this.setData({
            menu: getApp().tabBar
        }), t.item = {
            param: t.id
        }, this.setData(t), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.get_list();
    },
    onShareAppMessage: function() {}
});