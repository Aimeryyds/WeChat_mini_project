var t = getApp(), e = (t.requirejs("api/index"), t.requirejs("core")), i = t.requirejs("wxParse/wxParse");

Page({
    data: {
        route: "find_info",
        menu: t.tabBar,
        menu_show: !1,
        show: !1,
        use_wxParse: !0,
        dobuy: !1,
        page: 1,
        now_sku: {},
        num: 1,
        nowprice: 0,
        skus: [],
        isinputing: !1,
        isvip: !0,
        samegroup: [],
        loaded: !1,
        liked: !1,
        isplay: !1,
        duration: 0,
        currecttime: 0,
        timechanging: !1,
        nowtime: "00:00",
        endtime: "00:00"
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(a) {
        null != a && null != a && this.setData({
            tabbar_index: a.tabbar_index ? a.tabbar_index : -1
        }), e.setting(), this.setData({
            menu: getApp().tabBar
        }), t.isInArray(getApp().tabBar.list, this.data.route) && this.setData({
            menu_show: !0
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.setData({
            id: a.id
        }), this.getinfo(), this.getlist(), this.getallprice();
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
            dobuy: !0
        }) : e.alert("未添加资费,暂不可购买");
    },
    hidebuy: function(t) {
        this.data.isinputing || this.setData({
            dobuy: !1
        });
    },
    choose_sku: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.index, a = this.data.skus[e], i = (a.price * this.data.num).toFixed(2);
        this.setData({
            now_sku: a,
            nowprice: i
        });
    },
    num_change: function(t) {
        console.log(t);
        var e = t.detail.value, a = (this.data.now_sku.price * e).toFixed(2);
        this.setData({
            num: e,
            nowprice: a
        });
    },
    tobuy: function(a) {
        if (this.data.num <= 0) e.error("购买数量必须大于0"); else {
            this.setData({
                dobuy: !1
            }), e.loading("支付中...");
            var i = this, n = {};
            n.content_id = this.data.detail.id, n.price_id = this.data.now_sku.id, n.num = this.data.num, 
            n.uid = t.getCache("userinfo").uid, n.openid = t.getCache("userinfo").openid, e.get("paycontent/createOrder", n, function(t) {
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
                        }), i.setData({
                            page: 1
                        }), setTimeout(function() {
                            i.getinfo(), i.getlist(), i.getallprice();
                        }, 2e3)) : e.error("支付失败！");
                    },
                    fail: function(t) {
                        e.error("您已经取消支付！");
                    }
                }) : e.error(t.msg);
            });
        }
    },
    play_music: function() {
        var t = this, e = this.data.detail.title, a = this.data.detail.image, i = this.data.detail.audio_url;
        if (i && "" != i) {
            var n = wx.getBackgroundAudioManager();
            n.title = e, n.coverImgUrl = a, n.src = i, this.setData({
                isplay: !0
            }), n.onCanplay(function(e) {
                console.log("onCanplay !!!!!!!!!"), t.setData({
                    duration: parseInt(n.duration),
                    endtime: t.timeformat(parseInt(n.duration))
                });
            }), n.onPlay(function(e) {
                console.log("onPlay !!!!!!!!!"), t.setData({
                    duration: parseInt(n.duration),
                    endtime: t.timeformat(parseInt(n.duration))
                }), t.startAnimationInterval();
            }), n.onEnded(function(e) {
                console.log("onEnded !!!!!!!!!"), t.setData({
                    currecttime: 0,
                    isplay: !1,
                    nowtime: "00:00"
                });
            }), n.onPause(function(e) {
                console.log("onPause !!!!!!!!!"), t.setData({
                    isplay: !1
                });
            }), n.onTimeUpdate(function(e) {
                console.log("onTimeUpdate !!!!!!!!!"), t.data.timechanging || t.setData({
                    currecttime: parseInt(n.currentTime),
                    nowtime: t.timeformat(parseInt(n.currentTime))
                });
            });
        }
    },
    timeformat: function(t) {
        var e = parseInt(t / 60), a = t % 60;
        return (e = e < 10 ? "0" + e : "" + e) + ":" + (a = a < 10 ? "0" + a : "" + a);
    },
    timechanging: function(t) {
        this.setData({
            timechanging: !0
        });
    },
    timechange: function(t) {
        console.log("timechange !!!!!!!!");
        var e = t.detail.value;
        wx.getBackgroundAudioManager().seek(e), this.setData({
            currecttime: e,
            timechanging: !1
        });
    },
    play_status_change: function() {
        this.data.isplay ? (wx.getBackgroundAudioManager().pause(), this.setData({
            isplay: !1
        })) : (wx.getBackgroundAudioManager().play(), this.setData({
            isplay: !0
        }));
    },
    onShow: function() {
        this.checkuser();
    },
    checkuser: function() {
        var i = this, n = {};
        e.get("paycontent/checkuser", {
            uid: t.getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (n.isvip = t.info, i.setData(n)) : a.alert(t.msg);
        }, !0);
    },
    dolike: function() {
        var i = this, n = {};
        e.get("paycontent/dolike", {
            id: i.data.detail.id,
            uid: t.getCache("userinfo").uid
        }, function(t) {
            1 == t.code ? (n.liked = !i.data.liked, i.setData(n)) : a.alert("收藏失败");
        }, !0);
    },
    getinfo: function() {
        var a = this, n = a.data.id, o = {};
        e.get("paycontent/paycontent_info", {
            id: n,
            uid: t.getCache("userinfo").uid
        }, function(t) {
            if (wx.setNavigationBarTitle({
                title: t.info.title ? decodeURIComponent(t.info.title) : "产品详情"
            }), 0 == t.code) {
                try {
                    i.wxParse("wxParseData", "html", t.info.content, a, "0"), o.use_wxParse = !0, console.log("use wxParse !!!");
                } catch (t) {
                    o.use_wxParse = !1, console.log("not use wxParse !!!");
                }
                o.detail = t.info, o.liked = t.info.liked, o.show = !0, a.setData(o), 1 == t.info.paycontent_type && a.play_music();
            } else e.alert(t.msg);
        }, !0);
    },
    getlist: function() {
        var t = this, a = t.data.id, i = {};
        e.get("paycontent/samegroup", {
            id: a,
            page: t.data.page
        }, function(a) {
            0 == a.code ? (0 < a.info.length ? (1 == t.data.page ? i.samegroup = a.info : i.samegroup = t.data.samegroup.concat(a.info), 
            i.page = t.data.page + 1) : i.loaded = !0, t.setData(i)) : e.alert(a.msg);
        }, !0);
    },
    getallprice: function() {
        var t = this, a = t.data.id, i = {};
        e.get("paycontent/allprice", {
            id: a
        }, function(a) {
            0 == a.code ? 0 < a.info.length && (i.skus = a.info, i.now_sku = a.info[0], i.nowprice = a.info[0].price, 
            t.setData(i)) : e.alert(a.msg);
        }, !0);
    },
    onPullDownRefresh: function() {
        this.getinfo(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        console.log("加载更多"), this.data.loaded || this.getlist();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.detail.title,
            path: "/yb_shop/pages/paycontent/info/index?id=" + this.data.detail.id
        };
    }
});