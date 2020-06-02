var t = getApp(), e = t.requirejs("check"), a = t.requirejs("core");

Page({
    data: {
        route: "member_cart",
        menu: t.tabBar,
        menu_show: !1,
        icons: t.requirejs("icons"),
        show: !1,
        edit_list: [],
        list: [],
        edit: !1,
        merch_list: !1,
        ischeckall: !0,
        member_change: !0,
        delBtnWidth: 160,
        config: t.config
    },
    menu_url: function(t) {
        a.menu_url(t, 2);
    },
    onLoad: function(t) {
        a.ReName(getApp().config.gou + "物车");
        var e = this;
        null != t && null != t && e.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), a.setting(), e.initEleWidth(), e.setData({
            menu: getApp().tabBar,
            config: getApp().config
        }), e.get_cart();
    },
    touchS: function(t) {
        1 == t.touches.length && this.setData({
            startX: t.touches[0].clientX
        });
    },
    touchM: function(t) {
        if (1 == t.touches.length) {
            var e = t.touches[0].clientX, a = this.data.startX - e, i = this.data.delBtnWidth, c = "";
            0 == a || a < 0 ? c = "left:0px" : 0 < a && (c = "left:-" + a + "px", i <= a && (c = "left:-" + i + "px"));
            var n = t.currentTarget.dataset.index, r = this.data.list;
            r[n].txtStyle = c, this.setData({
                list: r
            });
        }
    },
    touchE: function(t) {
        if (1 == t.changedTouches.length) {
            var e = t.changedTouches[0].clientX, a = this.data.startX - e, i = this.data.delBtnWidth, c = i / 2 < a ? "left:-" + i + "px" : "left:0px", n = t.currentTarget.dataset.index, r = this.data.list;
            r[n].txtStyle = c, this.setData({
                list: r
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
        var e = this, i = a.data(t).id;
        a.confirm("是否确认删除该商品?", function() {
            a.get("Cart/DelCart", {
                cart_id: i
            }, function(t) {
                0 == t.code ? (a.success("删除成功"), setTimeout(function() {
                    e.setData({
                        edit: !1
                    }), e.get_cart();
                }, 1e3)) : a.alert(t.msg);
            });
        });
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.get_cart(), wx.stopPullDownRefresh();
    },
    get_cart: function() {
        var t, e = {}, i = this;
        a.get("Cart/cart", {
            uid: getApp().getCache("userinfo").uid
        }, function(a) {
            for (var c in a.info.forEach(function(t) {
                t.txtStyle = "";
            }), 0 == a.info.length ? i.setData({
                empty: 1
            }) : i.setData({
                empty: !1
            }), a.info) e[a.info[c].cart_id] = !0;
            t = {
                show: !0,
                checkObj: e,
                ischeckall: !0,
                list: a.info || [],
                checkNum: a.info.length
            }, i.setData(t), i.caculate();
        }, !0);
    },
    caculate: function() {
        var t = this, e = 0, a = 0, i = t.data.checkObj;
        t.data.list.forEach(function(t) {
            i[t.cart_id] && t.sku && (a += t.num, e += parseFloat(t.num * t.sku.price));
        }), t.setData({
            order_money: e,
            total: a
        });
    },
    number: function(t) {
        var e = this, i = a.pdata(t), c = i.value, n = i.id;
        if (!t.target.dataset.action) return console.log(11), !1;
        if ("minus" == t.target.dataset.action) {
            if (c <= 1) return !1;
            c = parseInt(c) - 1;
        }
        if ("plus" == t.target.dataset.action) {
            if (c >= i.max) return a.toast("最大购买量 " + i.max + "件！"), !1;
            c = parseInt(c) + 1;
        }
        a.post("Cart/cartNum", {
            cart_id: n,
            num: c
        }, function(t) {
            0 == t.code && e.get_cart();
        });
    },
    checkAllClick: function(t) {
        t = !this.data.ischeckall;
        var e = this.data.checkObj, a = {
            ischeckall: t,
            checkObj: e
        };
        for (var i in e) a.checkObj[i] = t;
        a.checkNum = t ? this.data.list.length : 0, this.setData(a), this.caculate();
    },
    itemClick: function(t) {
        var e = a.pdata(t).id, i = (a.pdata(t).goodsid, this.data.checkObj), c = this.data.checkNum;
        i[e] ? (i[e] = !1, c--) : (i[e] = !0, c++);
        var n = !0;
        for (var r in i) if (!i[r]) {
            n = !1;
            break;
        }
        console.log(i), this.setData({
            checkObj: i,
            ischeckall: n,
            checkNum: c
        }), this.caculate();
    },
    edit: function(t) {
        var i = a.data(t), c = this;
        switch (i.action) {
          case "edit":
            this.setData({
                edit: !0
            });
            break;

          case "complete":
            this.setData({
                edit: !1
            });
            break;

          case "move":
            e.isObject(void 0) || a.post("member/cart/tofavorite", {
                ids: void 0
            }, function(t) {
                c.get_cart();
            });
            break;

          case "delete":
            i = c.data.checkObj;
            var n = [];
            for (var r in i) i[r] && n.push(r);
            if (n.length < 1) return;
            n = n.toString(), a.confirm("是否确认删除该商品?", function() {
                a.post("Cart/DelCart", {
                    cart_id: n
                }, function(t) {
                    0 == t.code ? (a.toast("删除成功"), c.setData({
                        edit: !1
                    }), c.get_cart()) : a.alert(t.msg);
                });
            });
            break;

          case "pay":
            i = c.data.checkObj;
            var s = c.data.list;
            if (n = [], s.forEach(function(t) {
                i[t.cart_id] && t.sku && n.push(t.cart_id);
            }), n.length < 1) return;
            n = n.toString(), wx.navigateTo({
                url: "/yb_shop/pages/order/create/index?cart_id=" + n + "&uid=" + getApp().getCache("userinfo").uid + "&type=cart"
            });
        }
    },
    onShareAppMessage: function() {
        return a.onShareAppMessage();
    }
});