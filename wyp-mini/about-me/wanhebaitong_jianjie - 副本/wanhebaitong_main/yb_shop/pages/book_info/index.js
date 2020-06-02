var o = getApp(), t = o.requirejs("api/index"), i = o.requirejs("core"), e = o.requirejs("wxParse/wxParse");

Page({
    data: {
        show: !1,
        default_pic: "/yb_shop/static/images/add_pic.jpg",
        form: [],
        data: {}
    },
    menu_url: function(o) {
        i.menu_url(o, 2);
    },
    onLoad: function(o) {
        i.setting(), this.setData(o), o.id ? this.get_info() : i.alert("未获取到预约信息");
    },
    get_info: function() {
        var o = this, a = o.data.id;
        i.get("Market/bookinfo", {
            id: a
        }, function(a) {
            0 == a.code ? (o.setData({
                "item.param": a.info.form_id + ""
            }), t.get_form_list(3, a.info.form_id, o), e.wxParse("wxParseData", "html", a.info.content, o, "0"), 
            o.setData({
                info: a.info,
                show: !0
            })) : i.alert(a.msg);
        });
    },
    formPower: function(e) {
        var a = this, n = a.data.item.param + "", r = a.data.power_form[n].form, s = e.detail.value;
        console.log(s), console.log(r), delete s.id, t.validate(s, r, function(e) {
            0 == e && (s = JSON.stringify(t.to_str(s, r)), i.loading("正在提交中..."), i.post("Market/submitbook", {
                data: s,
                form: JSON.stringify(r),
                thing_id: a.data.info.id,
                user_id: o.getCache("userinfo").uid
            }, function(o) {
                if (i.hideLoading(), 0 == o.code) {
                    i.success("提交成功");
                    var t = a.data.power_form;
                    t[n].form = r, a.setData({
                        power_form: t,
                        form_data: {}
                    });
                } else i.alert(o.msg);
            }));
        });
    },
    bindPickerChange: function(o) {
        t.bindPickerChange(this, o);
    },
    listen_time_two: function(o) {
        t.listen_time_two(this, o);
    },
    chooseImageTap1: function(o) {
        var e = i.pdata(o).id;
        t.upload(this, e, "book_pic", 1);
    },
    chooseImageTap2: function(o) {
        var e = i.pdata(o).id;
        t.upload(this, e, "book_pic", 0);
    },
    Image_del: function(o) {
        t.Image_del(this, o);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});