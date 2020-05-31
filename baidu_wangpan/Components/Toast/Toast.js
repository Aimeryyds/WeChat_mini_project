var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = wx.ENV.staticPath, o = 0, n = function(t) {
    t || (t = wx.getCurrentViewPage()), clearTimeout(o), t.toast && t.toast.hide();
};

wx.wetoast = function(t) {
    var e = wx.getCurrentViewPage(), i = t.success, a = void 0 === i ? function() {} : i;
    if (e.toast) {
        var r = t.content, s = t.loading || !1, u = t.duration || 800, m = t.memberType || 0;
        clearTimeout(o), e.toast.show({
            content: r,
            loading: s,
            memberType: m
        }), "number" == typeof u && (o = setTimeout(function() {
            a(), n(e);
        }, t.duration || 800));
    }
}, wx.toasthide = function() {
    var t = wx.getCurrentViewPage();
    n(t);
};

var i = {
    0: e + "/ic_non_member_v2.png",
    1: e + "/ic_member_v2.png",
    2: e + "/ic_super_member_v2.png"
};

Component({
    data: {
        isShow: !1,
        toastAnimationData: null,
        content: "",
        outClass: null,
        loading: !1,
        memberType: 0,
        memberIcon: ""
    },
    methods: {
        show: function(e) {
            var o = void 0, n = !1, a = 0;
            "object" !== (void 0 === e ? "undefined" : t(e)) ? o = e : (o = e.content, n = e.loading, 
            a = e.memberType || 0);
            var r = i[a];
            this.setData({
                isShow: !0,
                content: o,
                outClass: null,
                loading: n,
                memberType: a,
                memberIcon: r
            });
        },
        hide: function() {
            this.setData({
                outClass: "toastOut"
            });
        },
        isShow: function() {
            return this.data.isShow;
        },
        animationend: function(t) {
            "outer" === t.detail.animationName && this.setData({
                isShow: !1,
                content: ""
            });
        }
    }
});