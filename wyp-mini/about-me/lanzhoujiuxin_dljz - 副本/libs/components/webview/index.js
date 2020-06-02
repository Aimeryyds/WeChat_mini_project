require("../../../utils/api");

var e = getApp();

module.exports = {
    name: "webview",
    data: {},
    props: {
        isTabBarWebView: !1,
        tabBarWebViewIndex: 0
    },
    onUnload: function() {
        this.setData({
            is_unloaded: !0
        });
    },
    onLoad: function(a) {
        var t = this, i = e.globalData.wxAppRequest;
        if (t.props.isTabBarWebView) {
            var n = e.globalData.wxappInfo;
            0 != Object.keys(n).length ? t.methods.initWebView(t) : i.getWXAppInfo(function() {
                t.methods.initWebView();
            });
        } else {
            var o = a.pageUrl;
            t.parent.setData({
                pageUrl: o
            });
        }
    },
    onShow: function() {},
    methods: {
        initWebView: function(a) {
            var t = e.globalData.wxappInfo.tabBarWebViewList[a.props.tabBarWebViewIndex].pageUrl;
            a.parent.setData({
                pageUrl: t
            });
        }
    }
};