var t = __wxConfig.global.window, e = t.navigationBarBackgroundColor, a = t.navigationBarTextStyle, n = t.navigationBarTitleText, l = wx.getSystemInfoSync().statusBarHeight, i = "white" === a || "" === a ? "./images/nav_icon_white.png" : "./images/nav_icon_black.png", s = "" === n ? "WeChat" : n, o = "" === e ? "background-color:#000;" : "background-color:" + e + ";", g = "" === a ? "color: white;" : "color:" + a + ";";

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
            value: s,
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
        barHeight: l,
        navIconUrl: i,
        navBgStyle: o,
        navTitleStyle: g
    },
    attach: function() {
        console.log(wx.getCurrent);
    },
    methods: {
        _changeTitle: function() {
            "" === this.data.title && this.setData({
                title: s
            });
        },
        _changeBgClass: function() {
            "" === this.data.bgClass ? this.setData({
                navBgStyle: o
            }) : this.setData({
                navBgStyle: ""
            });
        },
        _changeTitleClass: function() {
            "" === this.data.titleClass ? this.setData({
                navTitleStyle: g
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