(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/yz_video/yz_video" ], {
    "01e8": function(t, i, e) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var a = {
            data: function() {
                return {
                    videoUrl: "https://zhuanti.danke.com.cn/danke-vedio/danke-vedio1.mp4",
                    active1: !0,
                    active2: !1,
                    active3: !1,
                    active4: !1,
                    mask1: !1,
                    mask2: !0,
                    mask3: !0,
                    mask4: !0,
                    scroll: ""
                };
            },
            onLoad: function() {},
            methods: {
                video1: function() {
                    this.videoUrl = "https://zhuanti.danke.com.cn/danke-vedio/danke-vedio1.mp4", this.active1 = !0, 
                    this.active2 = !1, this.active3 = !1, this.active4 = !1, this.mask1 = !1, this.mask2 = !0, 
                    this.mask3 = !0, this.mask4 = !0, this.scroll = 0;
                },
                video2: function() {
                    this.videoUrl = "https://zhuanti.danke.com.cn/danke-vedio/danke-vedio2.mp4", this.active1 = !1, 
                    this.active2 = !0, this.active3 = !1, this.active4 = !1, this.mask1 = !0, this.mask2 = !1, 
                    this.mask3 = !0, this.mask4 = !0, this.scroll = 0;
                },
                video3: function() {
                    this.videoUrl = "https://zhuanti.danke.com.cn/danke-vedio/danke-vedio3.mp4", this.active1 = !1, 
                    this.active2 = !1, this.active3 = !0, this.active4 = !1, this.mask1 = !0, this.mask2 = !0, 
                    this.mask3 = !1, this.mask4 = !0, this.scroll = 500;
                },
                video4: function() {
                    this.videoUrl = "https://zhuanti.danke.com.cn/danke-vedio/danke-vedio4.mp4", this.active1 = !1, 
                    this.active2 = !1, this.active3 = !1, this.active4 = !0, this.mask1 = !0, this.mask2 = !0, 
                    this.mask3 = !0, this.mask4 = !1, this.scroll = 500;
                }
            }
        };
        i.default = a;
    },
    "23fe": function(t, i, e) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e027"), i(e("66fd")), t(i(e("e560")).default);
        }).call(this, e("543d").createPage);
    },
    "4f44": function(t, i, e) {
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, n = [];
        e.d(i, "b", function() {
            return a;
        }), e.d(i, "c", function() {
            return n;
        }), e.d(i, "a", function() {});
    },
    c19c: function(t, i, e) {},
    e13b: function(t, i, e) {
        var a = e("c19c");
        e.n(a).a;
    },
    e560: function(t, i, e) {
        e.r(i);
        var a = e("4f44"), n = e("ef32");
        for (var s in n) "default" !== s && function(t) {
            e.d(i, t, function() {
                return n[t];
            });
        }(s);
        e("e13b");
        var c = e("f0c5"), o = Object(c.a)(n.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        i.default = o.exports;
    },
    ef32: function(t, i, e) {
        e.r(i);
        var a = e("01e8"), n = e.n(a);
        for (var s in a) "default" !== s && function(t) {
            e.d(i, t, function() {
                return a[t];
            });
        }(s);
        i.default = n.a;
    }
}, [ [ "23fe", "common/runtime", "common/vendor" ] ] ]);