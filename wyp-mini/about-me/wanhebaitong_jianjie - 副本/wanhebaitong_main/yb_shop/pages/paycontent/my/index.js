var t = getApp(), e = (t.requirejs("api/index"), t.requirejs("core"));

Page({
    data: {
        menu: t.tabBar,
        menu_show: !1,
        showtabbar_back: !1,
        member: {},
        haslogin: !1,
        dobuy: !1,
        now_sku: {},
        num: 1,
        nowprice: 0,
        skus: [],
        isinputing: !1
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    formSubmit: function(t) {
        var n = {
            currentTarget: {
                dataset: {}
            }
        }, a = t.detail.value;
        n.currentTarget.dataset = a, e.menu_url(n, 1);
        var o = {};
        o.formid = t.detail.formId, o.openid = getApp().getCache("userinfo").openid, o.username = getApp().getCache("userinfo").nickName, 
        e.get("Market/getFormid", o, function(t) {
            console.log(t);
        });
    },
    to_url: function(t) {
        e.menu_url(t, 1);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        });
        var e = 0 <= this.data.tabbar_index;
        this.setData({
            menu: getApp().tabBar,
            showtabbar: e,
            showtabbar_back: e
        });
    },
    onGotUserInfo: function(e) {
        console.log(e);
        var n = this;
        if (!(a = t.getCache("userinfo"))) {
            var a = e.detail.userInfo, o = {};
            o.haslogin = !!a, a && (o.member = a), console.log(o), n.setData({
                dd: o
            }), t.getUserInfo(e.detail.userInfo, function(t) {
                console.log("tt !!!!!!!!!!!!!"), console.log(t), n.getInfo();
            }, e.detail.encryptedData, e.detail.iv);
        }
    },
    getInfo: function() {
        var t = this, n = getApp().getCache("userinfo");
        n && (t.setData({
            member: n,
            haslogin: !0
        }), e.get("paycontent/uinfo", {
            uid: n.uid
        }, function(e) {
            if (console.log(e), 1 == e.code) {
                var n = t.data.member;
                n.expire_day = e.info.expire_day, n.isvip = e.info.isvip, console.log(n), t.setData({
                    member: n
                });
            }
        }));
    },
    getallprice: function() {
        var t = this, n = (t.data.id, {});
        e.get("paycontent/allprice", {}, function(a) {
            0 == a.code ? 0 < a.info.length && (n.skus = a.info, n.now_sku = a.info[0], n.nowprice = a.info[0].price, 
            t.setData(n)) : e.alert(a.msg);
        }, !0);
    },
    inputing: function(t) {
        console.log(t);
        var e = this.data.isinputing;
        console.log(e), this.setData({
            isinputing: !e
        });
    },
    dobuy: function(t) {
        0 < this.data.skus.length ? this.setData({
            dobuy: !0,
            showtabbar: !1
        }) : core.alert("未添加资费,暂不可购买");
    },
    hidebuy: function(t) {
        this.data.isinputing || this.setData({
            dobuy: !1,
            showtabbar: this.data.showtabbar_back
        });
    },
    choose_sku: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, n = this.data.skus[e], a = (n.price * this.data.num).toFixed(2);
        this.setData({
            now_sku: n,
            nowprice: a
        });
    },
    num_change: function(t) {
        console.log(t);
        var e = t.detail.value, n = (this.data.now_sku.price * e).toFixed(2);
        this.setData({
            num: e,
            nowprice: n
        });
    },
    tobuy: function(t) {
        if (this.data.num <= 0) e.error("购买数量必须大于0"); else {
            var n = this;
            this.setData({
                dobuy: !1,
                showtabbar: n.data.showtabbar_back
            }), e.loading("支付中...");
            var a = {};
            a.price_id = this.data.now_sku.id, a.num = this.data.num, a.uid = getApp().getCache("userinfo").uid, 
            a.openid = getApp().getCache("userinfo").openid, e.get("paycontent/createOrder", a, function(t) {
                0 == t.code ? wx.requestPayment({
                    timeStamp: t.info.timeStamp,
                    nonceStr: t.info.nonceStr,
                    package: t.info.package,
                    signType: "MD5",
                    paySign: t.info.paySign,
                    success: function(t) {
                        console.log(t), "requestPayment:ok" == t.errMsg ? (wx.showToast({
                            title: "支付成功！",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            n.getInfo(), n.getallprice();
                        }, 2e3)) : e.error("支付失败！");
                    },
                    fail: function(t) {
                        e.error("您已经取消支付！");
                    }
                }) : e.error(t.msg);
            });
        }
    },
    onShow: function() {
        this.getInfo(), this.getallprice();
    },
    relogin: function() {
        var e = this;
        wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] || wx.openSetting({
                    success: function(n) {
                        n.authSetting["scope.userInfo"] && (t.getUserInfo(), setTimeout(function() {
                            e.getInfo();
                        }, 1e3));
                    }
                });
            }
        });
    }
});