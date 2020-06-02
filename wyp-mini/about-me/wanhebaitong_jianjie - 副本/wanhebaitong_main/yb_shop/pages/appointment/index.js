var t = getApp(), a = (t.requirejs("api/index"), t.requirejs("core"));

Page({
    data: {
        route: "appointment",
        menu: t.tabBar,
        menu_show: !1,
        loaded: !1,
        show: !1,
        list: [],
        page: 1,
        info_list: [],
        info_show: !1
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), a.setting(), console.log(t), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.getlist();
    },
    getlist: function() {
        var e = this, i = {}, o = e.data.page;
        a.get("Market/UserBook", {
            user_id: t.getCache("userinfo").uid,
            page: o
        }, function(t) {
            0 == t.code ? (0 < t.info.length && (i.page = o + 1, i.list = e.data.list.concat(t.info), 
            t.info.length < 10 && (i.loaded = !0)), 0 == t.info.length && (i.loaded = !0), i.show = !0, 
            e.setData(i)) : a.alert(t.msg, function() {});
        });
    },
    is_show: function(t) {
        var e = a.pdata(t).index, i = this.data.list, o = this.data.info_show;
        if (this.setData({
            info_show: !o
        }), -1 != e) {
            var n = i[e].param;
            n.forEach(function(t) {
                console.log(t), "pic_arr" == t.key && t.value && (t.value = t.value.split(","));
            }), this.setData({
                info_list: n
            });
        }
    },
    previewImage: function(t) {
        var e = [];
        this.data.list.forEach(function(t, a) {
            e[a] = t.img_cover;
        }), wx.previewImage({
            current: a.pdata(t).url,
            urls: e
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1
        }), this.getlist(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        console.log("加载更多"), this.data.loaded || this.getlist();
    },
    onShow: function() {},
    onShareAppMessage: function() {}
});