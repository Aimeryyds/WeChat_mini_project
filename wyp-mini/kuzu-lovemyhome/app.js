var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, t = (function(o) {
    o && o.__esModule;
}(require("/sdk/index.js")), require("./libs/fp.min.js"));

t.initConf({
    organization: "GDS3VusCjqwVbuolurCP",
    channel: "xiaochengxu"
}), (0, require("/utils/gio-minp/index.js").default)("setConfig", require("/sdk/gioConfig.js").default), 
App({
    globalData: {
        url_host: "https://appapi.5i5j.com",
        dxAppId: "0f8591823804c7b5db7e85d05a348ef5",
        tmplids: [ "3ilQmS5foHC3aB6S9xb0fpBLRVwoet5JtQ0T2Z3J8iM" ],
        resources_host: "http://res.5i5j.cn",
        url_test_host: "https://appapi-test.5i5j.com",
        url_ts_host: "https://appts.5i5j.com",
        SMSdk: t
    },
    onLaunch: function() {
        1 == wx.getStorageSync("loginStatus") && this.connecetStart();
    },
    connecetStart: function() {
        var o = wx.getStorageSync("userInfo"), t = this;
        wx.request({
            url: "https://appapi.5i5j.com/wxim/getwebsocketip",
            method: "POST",
            data: {
                user_id: o.uid
            },
            success: function(n) {
                n.data ? t.connect(n.data, o) : t.getWesocketIp();
            }
        });
    },
    connect: function(o) {
        function t(t, n) {
            return o.apply(this, arguments);
        }
        return t.toString = function() {
            return o.toString();
        }, t;
    }(function(t, n) {
        var e = 0;
        wx.connectSocket({
            url: t,
            success: function(o) {
                console.log("WebSocket连接创建", o);
            },
            fail: function(o) {
                wx.showToast({
                    title: "网络异常，聊天功能将无法使用！",
                    icon: "none"
                }), console.log(o), ++e < 10 ? connect() : wx.showToast({
                    title: "聊天组件加载失败，请重新登录！",
                    icon: "none"
                });
            }
        }), wx.onSocketOpen(function(t) {
            var e = '{"type":"login","token":"' + n.wx_socket_token + '"}';
            console.log(void 0 === e ? "undefined" : o(e)), wx.sendSocketMessage({
                data: e,
                success: function(o) {
                    console.log(o);
                }
            }), wx.onSocketClose(function() {
                console.log("退出关闭socket"), 1 == wx.getStorageSync("loginStatus") && connecetStart();
            }), console.log(e), console.log(t), console.log("打开成功");
        });
    }),
    linksocket: function() {
        this.connecetStart();
    },
    onShow: function() {},
    onHide: function() {}
});