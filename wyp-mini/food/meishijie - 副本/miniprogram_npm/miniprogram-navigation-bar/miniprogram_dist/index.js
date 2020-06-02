var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function(e) {
    function n(t) {
        if (a[t]) return a[t].exports;
        var o = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    var a = {};
    return n.m = e, n.c = a, n.d = function(t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        });
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(e, a) {
        if (1 & a && (e = n(e)), 8 & a) return e;
        if (4 & a && "object" === (void 0 === e ? "undefined" : t(e)) && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & a && "string" != typeof e) for (var r in e) n.d(o, r, function(t) {
            return e[t];
        }.bind(null, r));
        return o;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
}([ function(t, e) {
    var n = __wxConfig.global.window, a = n.navigationBarBackgroundColor, o = n.navigationBarTextStyle, r = n.navigationBarTitleText, i = wx.getSystemInfoSync().statusBarHeight, l = "white" === o || "" === o ? "./images/nav_icon_white.png" : "./images/nav_icon_black.png", u = "" === r ? "WeChat" : r, s = "" === a ? "background-color:#000;" : "background-color:" + a + ";", c = "" === o ? "color: white;" : "color:" + o + ";";
    Component({
        properties: {
            enable: {
                type: Boolean,
                value: "true"
            },
            bgStyle: {
                type: String,
                value: ""
            },
            titleStyle: {
                type: String,
                value: "",
                observer: "_changeTitleStyle"
            },
            title: {
                type: String,
                value: u,
                observer: "_changeTitle"
            },
            delta: {
                type: Number,
                value: 1
            },
            bgClass: {
                type: String,
                value: "",
                observer: "_changeBgClass"
            },
            titleClass: {
                type: String,
                value: "",
                observer: "_changeTitleClass"
            },
            showLoading: {
                type: Boolean,
                value: !1
            }
        },
        data: {
            barHeight: i,
            navIconUrl: l,
            navBgStyle: s,
            navTitleStyle: c
        },
        attach: function() {
            console.log(wx.getCurrent);
        },
        methods: {
            _changeTitle: function() {
                "" === this.data.title && this.setData({
                    title: u
                });
            },
            _changeBgClass: function() {
                "" === this.data.bgClass ? this.setData({
                    navBgStyle: s
                }) : this.setData({
                    navBgStyle: ""
                });
            },
            _changeTitleClass: function() {
                "" === this.data.titleClass ? this.setData({
                    navTitleStyle: c
                }) : this.setData({
                    navTitleStyle: ""
                });
            },
            _onTap: function() {
                this.triggerEvent("back", {}), this.data.enable && wx.navigateBack({
                    delta: this.data.delta
                });
            }
        }
    });
} ]);