function e(e, o) {
    var n = wx.getStorageSync("token");
    return o.token = n, new Promise(function(n, t) {
        wx.request({
            url: e,
            data: o,
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            success: function(e) {
                console.info(e);
                try {
                    "1" == e.data.code && util.GetToken();
                } catch (e) {}
                "服务器异常" == e.data ? (wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "网络错误或服务器繁忙!"
                })) : n(e.data);
            },
            fail: function(e) {
                wx.hideLoading(), console.log(e), t(e), wx.showModal({
                    title: "提示",
                    content: "网络错误或服务器繁忙!"
                });
            }
        });
    });
}

getApp();

module.exports = {
    Requests_json: e,
    GetToken: function(o, n) {
        var t = !1;
        return e(o + "/token?", n).then(function(e) {
            if ("0" == e.code) {
                var o = e.data.access_token;
                console.info("获取到token：" + o), wx.setStorageSync("token", o), t = !0;
            } else console.info("获取token异常");
        }), t;
    },
    GetTokenCallBack: function(o, n, t) {
        e(o + "/token?", n).then(function(e) {
            if ("0" == e.code) {
                var o = e.data.access_token;
                console.info("获取到token：" + o), wx.setStorageSync("token", o), t();
            } else console.info("获取token异常");
        });
    }
};