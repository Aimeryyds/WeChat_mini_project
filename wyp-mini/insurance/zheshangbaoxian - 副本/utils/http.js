module.exports = function(e) {
    var t = "" + (e.baseUrl ? e.baseUrl : "https://weixin.zsins.com") + e.url, a = e.dataType || "json";
    return wx.showLoading({
        title: "加载中"
    }), new Promise(function(s, o) {
        wx.request({
            url: t,
            data: e.data,
            header: e.header || {},
            method: e.method || "POST",
            dataType: a,
            responseType: e.responseType || "text",
            complete: function(e) {
                wx.hideLoading(), "json" === a ? 200 === e.statusCode ? "Successful" === e.data.status$ ? s(e.data) : (wx.showToast({
                    title: e.data.resMessage$,
                    icon: "none",
                    duration: 2e3
                }), o(e)) : (wx.showToast({
                    title: "请求出错",
                    icon: "none",
                    duration: 2e3
                }), o("失败")) : s(e.data);
            }
        });
    });
};