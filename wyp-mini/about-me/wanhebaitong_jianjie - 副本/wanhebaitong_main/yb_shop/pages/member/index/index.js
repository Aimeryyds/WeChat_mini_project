var e = getApp(), n = e.requirejs("api/index"), o = e.requirejs("core");

Page({
    data: {
        route: "member_index",
        menu: e.tabBar,
        menu_show: !1,
        icons: e.requirejs("icons"),
        member: {},
        page: {},
        show: !1,
        config: e.config,
        background: e.config.background,
        default_pic: "/yb_shop/static/images/add_pic.jpg"
    },
    menu_url: function(e) {
        o.menu_url(e, 2);
    },
    formSubmit: function(e) {
        var t = {
            currentTarget: {
                dataset: {}
            }
        }, a = e.detail.value;
        t.currentTarget.dataset = a, o.menu_url(t, 1);
        var n = {};
        n.formid = e.detail.formId, n.openid = getApp().getCache("userinfo").openid, n.username = getApp().getCache("userinfo").nickName, 
        o.get("Market/getFormid", n, function(e) {
            console.log(e);
        });
    },
    to_url: function(e) {
        o.menu_url(e, 1);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        });
        var a = getApp().getCache("user_center_page");
        "" != a && (this.setData({
            page: a
        }), this.initpage()), "" == e.getCache("userinfo") && (o.toast("您还没登录呢"), setTimeout(function() {
            wx.redirectTo({
                url: "/yb_shop/pages/index/index"
            });
        }, 2e3));
        var n = this;
        getApp().get_menu(function(e) {
            n.setData({
                menu: getApp().tabBar
            }), getApp().check_is_tabbar(), o.get("Distribe/shareSetting", {}, function(e) {
                0 == e.code && n.setData({
                    shareSetting: e.info
                });
            }), n.get_candan();
        });
    },
    initpage: function() {
        var e = this;
        wx.setNavigationBarColor({
            frontColor: e.data.page.text_color,
            backgroundColor: e.data.page.nv_color,
            animation: {
                duration: 0,
                timingFunc: "easeIn"
            }
        }), wx.setNavigationBarTitle({
            title: e.data.page.name ? decodeURIComponent(e.data.page.name) : "首页"
        }), wx.setBackgroundColor && wx.setBackgroundColor({
            backgroundColor: e.data.page.bg_color ? e.data.page.bg_color : "#f2f3f4"
        });
    },
    get_candan: function() {
        var n = this, i = wx.getSystemInfoSync().windowWidth;
        o.get("Index/ucenter", {}, function(r) {
            "string" == typeof t && (r = o.json_parse(r)), n.setData({
                page: r.page
            }), getApp().setCache("user_center_page", r.page), n.initpage(), r.all_data.forEach(function(t) {
                "advert" == t.type && (t.high = i * t.ly_height / t.ly_width), "banner" == t.type && (t.high = i * t.ly_height / 10), 
                "position" == t.type && 2 == t.is_display && n.setData({
                    "markers[0].latitude": t.latitude,
                    "markers[0].longitude": t.longitude,
                    "markers[0].title": t.position_name
                }), "rich_text" == t.type && (s.wxParse("wxParseData_" + t.time_key, "html", t.content, n, "0"), 
                t.wxParseData = n.data["wxParseData_" + t.time_key].nodes), "edit_piclist" == t.type && (t.arr = a.str(t.list)), 
                "comment" == t.type && n.comment(n, t.is_display), "edit_music" == t.type && n.play_music(t.name, t.author, t.imgurl, t.url), 
                "edit_form" == t.type && t.param && "" != t.param && 0 != t.param && (n.get_form_list(2, t.param, n), 
                e.id = t.param);
            }), n.setData({
                list: r.all_data,
                show: !0
            }), n.getInfo();
        }, !0);
    },
    get_form_list: function(e, t, a) {
        var n = {}, i = "提交";
        o.get("index/form", {
            id: t
        }, function(r) {
            var s = r.info.list;
            if (0 == r.code) {
                if (1 == e && (wx.setNavigationBarTitle({
                    title: r.info.title ? decodeURIComponent(r.info.title) : "万能表单"
                }), 0 == s.length)) return void o.alert("表单内容为空");
                s.forEach(function(e) {
                    "picker" == e.module && (n[e.name] = 0), "time_one" == e.module && (n[e.name] = e.default), 
                    "time_two" == e.module && (n[e.name + "_1"] = e.default1, n[e.name + "_2"] = e.default2, 
                    e.default1 && e.default2 ? n[e.name] = e.default1 + "," + e.default2 : n[e.name] = ""), 
                    "pic_arr" == e.module && (n[e.name] = []), "region" == e.module && (n[e.name] = e.default, 
                    n[e.name + "_multi"] = [ 0, 0, 0 ]), "button" == e.module && (i = e.title);
                }), 1 == e && a.setData({
                    show: !0
                }), console.log("-------------------"), console.log(a.data);
                var u = a.data.power_form ? a.data.power_form : {};
                u[t + ""] = {
                    data: n,
                    button_name: i,
                    form: s,
                    form_id: t
                }, console.log(u), a.setData({
                    power_form: u
                });
            } else o.alert(r.msg);
        }, !0);
    },
    play_music: function(e, t, a, n) {
        if (n && "" != n) {
            var o = wx.getBackgroundAudioManager();
            o.title = e || "音乐标题", o.singer = t, o.coverImgUrl = a, o.src = n;
        }
    },
    comment: function(e, t) {
        a.get("Index/CommentList", {
            num: t
        }, function(t) {
            if (0 == t.code) {
                var a = {
                    sroce: t.info.sroce,
                    count: t.info.count
                };
                a.commentlist = t.info.info, e.setData(a);
            } else o.alert(t.msg);
        });
    },
    formBook: function(e) {
        var t = this, a = e.detail.value, n = getApp().getCache("userinfo").uid;
        if ("" != a.name) return null == n ? (o.error("请先登录"), void setTimeout(function() {
            o.jump("/yb_shop/pages/index/index", 2);
        }, 1e3)) : void (11 == a.phone.length ? (a.user_id = n, o.get("Index/WriteBook", a, function(e) {
            0 == e.code ? (t.setData({
                bookData: {}
            }), o.success("提交成功")) : o.alert(e.msg);
        })) : o.error("手机号格式不正确"));
        o.error("姓名不能为空");
    },
    onPullDownRefresh: function() {},
    getInfo: function() {
        var e = this;
        e.setData({
            background: getApp().config.background,
            font_color: getApp().config.font_color
        }), o.get("user/Index", {
            uid: getApp().getCache("userinfo").uid
        }, function(t) {
            console.log(t), t.info.nickName = getApp().getCache("userinfo").nickName, t.info.avatarUrl = getApp().getCache("userinfo").avatarUrl, 
            console.log(t), e.setData({
                member: t.info
            });
        });
    },
    fail: function() {
        wx.redirectTo({
            url: "/yb_shop/pages/message/auth/index"
        });
    },
    onShow: function() {
        this.getInfo();
    },
    relogin: function() {
        var t = this;
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userInfo"] || wx.openSetting({
                    success: function(a) {
                        a.authSetting["scope.userInfo"] && (e.getUserInfo(), setTimeout(function() {
                            t.getInfo();
                        }, 1e3));
                    }
                });
            }
        });
    },
    navigate: function(e) {
        var t = a.pdata(e);
        t.name && t.lat && t.lng ? a.tx_map(t.lat, t.lng, t.name) : a.toast("不能获取到该位置");
    },
    phone: function(e) {
        o.phone(e);
    },
    formPower: function(e) {
        n.formSubmit(this, e);
    },
    bindPickerChange: function(e) {
        n.bindPickerChange(this, e);
    },
    listen_time_two: function(e) {
        n.listen_time_two(this, e);
    },
    chooseImageTap1: function(e) {
        var t = o.pdata(e).id;
        n.upload(this, t, "form_pic", 1);
    },
    chooseImageTap2: function(e) {
        var t = o.pdata(e).id;
        n.upload(this, t, "form_pic", 0);
    },
    Image_del: function(e) {
        n.Image_del(this, e);
    },
    previewImage: function(e) {
        var t = a.pdata(e).url, n = a.pdata(e).arr;
        o.previewImage(t, n, "imgurl");
    }
});