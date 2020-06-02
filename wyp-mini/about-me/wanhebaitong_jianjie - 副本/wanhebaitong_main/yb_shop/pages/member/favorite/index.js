var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        route: "member_favorite",
        menu: t.tabBar,
        menu_show: !1,
        icons: t.requirejs("icons"),
        page: 1,
        loading: !1,
        isedit: !1,
        isCheckAll: !1,
        checkNum: 0,
        loaded: !1,
        list: [],
        delBtnWidth: 80
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), e.setting(), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.getList();
    },
    onReachBottom: function() {
        this.data.loaded || this.getList();
    },
    onPullDownRefresh: function() {
        this.getList(), wx.stopPullDownRefresh();
    },
    getList: function() {
        var t = this;
        t.setData({
            loading: !0
        }), e.get("user/GetFavorites", {
            page: t.data.page,
            uid: getApp().getCache("userinfo").uid
        }, function(e) {
            var a = {
                loading: !1,
                show: !0
            };
            0 < e.info.length && (a.page = t.data.page + 1, a.list = t.data.list.concat(e.info), 
            e.info.length < 10 && (a.loaded = !0)), t.setData(a);
        });
    },
    btnClick: function(t) {
        var a = this, i = e.pdata(t).action;
        if ("edit" == i) {
            var s = {};
            for (var n in this.data.list) s[this.data.list[n].log_id] = !1;
            a.setData({
                isedit: !0,
                checkObj: s,
                isCheckAll: !1
            });
        } else if ("delete" == i) {
            s = a.data.checkObj;
            var c = [];
            for (var n in s) s[n] && c.push(n);
            if (c.length < 1) return;
            c = c.toString(), e.confirm("删除后不可恢复，确定要删除吗？", function() {
                e.get("goods/DelFavorites", {
                    log_id: c
                }, function(t) {
                    0 == t.code ? (e.success("删除成功"), a.setData({
                        isedit: !1,
                        checkNum: 0,
                        page: 1,
                        list: []
                    }), a.getList()) : (e.alert(t.msg), setTimeout(function() {
                        wx.navigateBack();
                    }, 1e3));
                });
            });
        } else "finish" == i && a.setData({
            isedit: !1,
            checkNum: 0
        });
    },
    checkAllClick: function(t) {
        t = !this.data.isCheckAll;
        var e = this.data.checkObj, a = {
            isCheckAll: t,
            checkObj: e
        };
        for (var i in e) a.checkObj[i] = t;
        a.checkNum = t ? this.data.list.length : 0, this.setData(a);
    },
    itemClick: function(t) {
        var a = this, i = e.pdata(t).id, s = e.pdata(t).goodsid;
        if (a.data.isedit) {
            var n = a.data.checkObj, c = a.data.checkNum;
            n[i] ? (n[i] = !1, c--) : (n[i] = !0, c++);
            var o = !0;
            for (var h in n) if (!n[h]) {
                o = !1;
                break;
            }
            console.log(n), a.setData({
                checkObj: n,
                isCheckAll: o,
                checkNum: c
            });
        } else wx.navigateTo({
            url: "/yb_shop/pages/goods/detail/index?id=" + s
        });
    },
    touchS: function(t) {
        1 == t.touches.length && this.setData({
            startX: t.touches[0].clientX
        });
    },
    touchM: function(t) {
        if (1 == t.touches.length) {
            var e = t.touches[0].clientX, a = this.data.startX - e, i = this.data.delBtnWidth, s = "";
            0 == a || a < 0 ? s = "left:0px" : 0 < a && (s = "left:-" + a + "px", i <= a && (s = "left:-" + i + "px"));
            var n = t.currentTarget.dataset.index, c = this.data.list;
            c[n].txtStyle = s, this.setData({
                list: c
            });
        }
    },
    touchE: function(t) {
        if (console.log(t), 1 == t.changedTouches.length) {
            var e = t.changedTouches[0].clientX, a = this.data.startX - e, i = this.data.delBtnWidth, s = i / 2 < a ? "left:-" + i + "px" : "left:0px", n = t.currentTarget.dataset.index, c = this.data.list;
            c[n].txtStyle = s, this.setData({
                list: c
            });
        }
    },
    getEleWidth: function(t) {
        try {
            var e = wx.getSystemInfoSync().windowWidth, a = 375 / (t / 2);
            return Math.floor(e / a);
        } catch (t) {
            return !1;
        }
    },
    initEleWidth: function() {
        var t = this.getEleWidth(this.data.delBtnWidth);
        this.setData({
            delBtnWidth: t
        });
    },
    delItem: function(t) {
        var a = this, i = e.data(t).id;
        e.confirm("是否确认删除该商品?", function() {
            e.get("goods/DelFavorites", {
                log_id: i
            }, function(t) {
                0 == t.code ? (e.success("删除成功"), setTimeout(function() {
                    a.setData({
                        isedit: !1,
                        checkNum: 0,
                        page: 1,
                        list: []
                    }), a.getList();
                }, 1e3)) : e.alert(t.msg);
            });
        });
    }
});