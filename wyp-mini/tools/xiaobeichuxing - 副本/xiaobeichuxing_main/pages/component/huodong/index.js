var t = require("../../../utils/https.js"), e = require("../../../utils/util.js"), i = "", a = "";

new getApp();

Component({
    behaviors: [],
    properties: {
        huodongList: {
            type: Array,
            value: [],
            observer: function(e) {
                var i = this.data.huodongList;
                console.log(i);
                for (var a = 0; a < i.length; a++) if (i[a].image_id) i[a].picturepath = t.imgurlOne + "/FileResources/GetImage?imageID=" + i[a].image_id; else {
                    var o = i[a].picturepath;
                    o.indexOf("|") > -1 && (i[a].picturepath = o.slice(0, o.length - 1));
                }
                this.setData({
                    list: i
                });
            }
        },
        curidx: {
            type: Number,
            value: 0,
            observer: function(t) {
                this.setData({
                    curidx: t
                });
            }
        }
    },
    data: {
        indicatorDots: !0,
        autoplay: !1,
        interval: 2e3,
        duration: 1e3,
        list: [],
        curidx: 0
    },
    methods: {
        movetap: function(t) {
            a = 0 != t.touches[0].clientX ? t.touches[0].clientX : t.touches[0].pageX;
        },
        onTap: function(t) {
            this.triggerEvent("myevent", t);
        },
        startmove: function(t) {
            i = 0 != t.touches[0].clientX ? t.touches[0].clientX : t.touches[0].pageX;
        },
        endmove: function(t) {
            if ("" !== i && "" !== a) {
                console.log(a, i);
                var e = this.data.curidx;
                a - i >= 10 ? (e -= 1, console.log(e), i = "", a = "") : a - i < 0 && a - i < -10 && (e += 1, 
                console.log(e), i = "", a = ""), e > this.data.list.length - 1 ? e = this.data.list.length - 1 : e < 0 && (e = 0), 
                this.setData({
                    curidx: e
                }), console.log(e), this.onTap(e);
            }
        },
        tourl: e.throttle(function(e) {
            var i = this.data.list[this.data.curidx].activitytype;
            if (1 != i && 3 != i || wx.navigateTo({
                url: "../payment/recharge/index"
            }), 5 == i && wx.navigateTo({
                url: "../payment/buyCard/index"
            }), 6 == i) {
                var a = this.data.list[this.data.curidx].id;
                t.req11("V2.0/Activity/ActivityUserReceiveCoupon", {
                    activityid: a
                }, function(t, e) {
                    0 == e.data.code ? (wx.showToast({
                        title: e.data.retmsg,
                        icon: "none",
                        duration: 2e3
                    }), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/payment/coupon/index"
                        });
                    }, 2100)) : -1 == e.data.code && wx.showToast({
                        title: e.data.retmsg,
                        icon: "none",
                        duration: 2e3
                    });
                });
            }
        })
    }
});