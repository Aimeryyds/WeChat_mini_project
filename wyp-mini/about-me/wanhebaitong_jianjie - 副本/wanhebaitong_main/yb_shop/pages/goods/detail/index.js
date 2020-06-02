var t = getApp(), o = t.requirejs("core"), a = t.requirejs("wxParse/wxParse"), e = [], i = [];

Page({
    data: {
        route: "goods_detail",
        menu: t.tabBar,
        menu_show: !1,
        icons: t.requirejs("icons"),
        goods: {},
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 500,
        circular: !0,
        advWidth: 0,
        info: "active",
        para: "",
        slider: "",
        buyType: "",
        pickerOption: {},
        specsData: [],
        specsTitle: "",
        tempname: "",
        showPicker: !1,
        total: 1,
        canBuy: !0,
        optionid: 0,
        spec_Show: !0,
        button_color: t.config.button_color,
        font_color: t.config.font_color,
        config: t.config,
        display: !0
    },
    to_poster: function(a) {
        t.get_poster(a), o.jump("/yb_shop/pages/poster/index");
    },
    onGotUserInfo: function(o) {
        var a = this, e = t.getCache("userinfo");
        a.setData({
            display: !1
        }), e || t.getUserInfo(o.detail.userInfo, function(t) {
            1e3 != t || a.setData({
                display: !0
            });
        });
    },
    menu_url: function(t) {
        o.menu_url(t, 2);
    },
    onLoad: function(a) {
        if (a.scene) {
            var e = decodeURIComponent(a.scene);
            console.log(e), o.alert(e), e = e.split(","), console.log(e), a.id = e[0], a.pid = e[1];
        }
        t.getCache("userinfo") && this.setData({
            display: !1
        }), a && a.pid && (t.get_user_name(a.pid, this), this.setData({
            pid: a.pid
        }), t.set_share_pid(a.pid), t.setCache("pid", a.pid)), null != a && null != a && this.setData({
            tabbar_index: a.tabbar_index ? a.tabbar_index : -1
        }), o.setting(), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        });
        var i = this;
        console.log(a), i.setData({
            menu: getApp().tabBar,
            options: a,
            button_color: getApp().config.button_color,
            font_color: getApp().config.font_color,
            config: getApp().config
        }), wx.getSystemInfo({
            success: function(t) {
                i.setData({
                    advWidth: t.windowWidth
                });
            }
        });
    },
    onShow: function() {
        var t = this.data.options;
        this.getDetail(t);
    },
    url: function() {
        var t = "/yb_shop/pages/member/cart/index?key=1";
        wx.navigateTo({
            url: t,
            fail: function(a) {
                0 <= a.errMsg.indexOf("tabbar") && o.jump(t, 4);
            }
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    GoodsClicks: function(t) {
        o.get("goods/GoodsClicks", {
            goods_id: t.id
        }, function(t) {});
    },
    buyNow: function(t) {
        var o = this, a = o.data.optionid;
        1 < o.data.goods.sku.length ? (0 == a && wx.showToast({
            title: "请选择规格",
            icon: "loading",
            duration: 1e3
        }), wx.redirectTo({
            url: "/yb_shop/pages/order/create/index?goods_id=" + o.data.options.id + "&total=" + o.data.total + "&sku_id=" + a + "&uid=" + getApp().getCache("userinfo").uid
        })) : wx.redirectTo({
            url: "/yb_shop/pages/order/create/index?goods_id=" + o.data.options.id + "&total=" + o.data.total + "&sku_id=" + o.data.goods.sku[0].sku_id + "&uid=" + getApp().getCache("userinfo").uid
        });
    },
    getCart: function(t) {
        var a = this, e = "", i = a.data.optionid;
        if (1 < a.data.goods.sku.length) {
            if (0 == i) return void o.alert("请选择规格！");
            e = i;
        } else e = a.data.goods.sku[0].sku_id;
        o.get("Cart/AddCart", {
            buyer_id: getApp().getCache("userinfo").uid,
            num: a.data.total,
            sku_id: e,
            goods_id: a.data.goods.goods_id,
            goods_name: a.data.goods.goods_name,
            goods_images: a.data.goods.images
        }, function(t) {
            0 == t.code ? (wx.showToast({
                title: "成功添加到购物车",
                icon: "success",
                duration: 1500
            }), a.setData({
                active: "",
                slider: "out",
                "goods.cart": parseInt(a.data.goods.cart) + parseInt(a.data.total)
            })) : o.alert(t.msg);
        });
    },
    selectPicker: function(t) {
        var o = this, a = t.currentTarget.dataset.tap, e = t.currentTarget.dataset.buytype;
        if (o.setData({
            active: "active",
            slider: "in",
            tempname: "select-picker",
            buyType: e
        }), i = this.data.goods.sku, 0 != o.data.goods.goods_spec_format.length) {
            o.setData({
                optionid: i[0].sku_id,
                "goods.stock": i[0].stock,
                "goods.promote_price": i[0].promote_price,
                "goods.cost_price": i[0].cost_price,
                "goods.market_price": i[0].market_price,
                "goods.price": i[0].price,
                "goods.sku_pic": null != i[0].pic ? i[0].pic.img_cover : ""
            }), console.log(i[0]), i[0].stock <= 0 ? o.setData({
                canBuy: !1
            }) : o.setData({
                canBuy: !0
            });
            var s = o.data.goods.goods_spec_format, n = (a = "", []);
            s.forEach(function(t, o) {
                n[o] = {
                    id: t.spec_id,
                    vid: t.value[0].spec_value_id,
                    spec_name: t.value[0].spec_value_name
                }, a += t.value[0].spec_value_name + "， ";
            }), o.setData({
                specsData: n,
                specsTitle: a
            });
        } else i[0].stock <= 0 ? o.setData({
            canBuy: !1
        }) : o.setData({
            canBuy: !0
        }), o.setData({
            "goods.sku_pic": null != i[0].pic ? i[0].pic.img_cover : ""
        });
    },
    specsTap: function(t) {
        var o = this, a = "", s = "", n = t.target.dataset.idx;
        (e = o.data.specsData)[n] = {
            id: t.target.dataset.id,
            vid: t.target.dataset.vid,
            spec_name: t.target.dataset.spec_name
        };
        var d = [];
        e.forEach(function(t) {
            a += t.spec_name + "， ", s = t.id + ":" + t.vid, d.push(s);
        }), i.forEach(function(t) {
            var a = !0;
            d.forEach(function(o) {
                t.attr_value_items.indexOf(o) < 0 && (a = !1);
            }), a && (o.setData({
                optionid: t.sku_id,
                "goods.stock": t.stock,
                "goods.promote_price": t.promote_price,
                "goods.cost_price": t.cost_price,
                "goods.market_price": t.market_price,
                "goods.price": t.price,
                "goods.sku_pic": null != t.pic ? t.pic.img_cover : ""
            }), t.stock <= 0 ? o.setData({
                canBuy: !1
            }) : o.setData({
                canBuy: !0
            }));
        }), o.setData({
            specsData: e,
            specsTitle: a
        });
    },
    number: function(t) {
        var a = o.data(t), e = o.pdata(t), i = e.value;
        if (!t.target.dataset.action) return !1;
        if ("minus" === a.action) {
            if (!(1 < i && i > e.min)) return o.toast("已是最少购买量");
            i -= 1;
        } else if ("plus" === a.action) {
            if (!(i < e.max)) return o.toast("最多购买" + e.max + "件");
            i += 1;
        }
        this.setData({
            total: i
        });
    },
    emptyActive: function() {
        this.setData({
            active: "",
            slider: "out"
        });
    },
    getDetail: function(t) {
        var e = this, i = "";
        e.setData({
            loading: !0
        }), o.get("goods/GoodsDetail", {
            goods_id: t.id,
            uid: getApp().getCache("userinfo").uid
        }, function(t) {
            console.log(t), 0 == t.code ? (1 == t.info.sku.length && e.setData({
                optionid: -1
            }), i = t.info.min_buy ? t.info.min_buy : 1, a.wxParse("wxParseData", "html", t.info.description, e, "0"), 
            e.setData({
                show: !0,
                goods: t.info,
                total: i
            }), wx.setNavigationBarTitle({
                title: t.info.goods_name || "商品详情"
            })) : o.alert(t.msg);
        });
    },
    goodsTab: function(t) {
        var o = t.currentTarget.dataset.tap;
        "info" == o ? this.setData({
            info: "active",
            para: ""
        }) : "para" == o && this.setData({
            info: "",
            para: "active"
        });
    },
    favorite: function(t) {
        var a = this, e = t.currentTarget.dataset.logprice;
        o.get("goods/Favorites", {
            fav_id: a.data.options.id,
            log_price: e,
            uid: getApp().getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? 1 == t.info.status ? a.setData({
                "goods.favorites": !0
            }) : a.setData({
                "goods.favorites": !1
            }) : o.alert(t.msg);
        });
    },
    onShareAppMessage: function() {
        var t = this.data.goods.goods_name, o = getApp().getCache("userinfo").uid ? getApp().getCache("userinfo").uid : 0;
        return {
            title: t,
            path: "/yb_shop/pages/goods/detail/index?id=" + this.data.goods.goods_id + "&pid=" + o
        };
    }
});