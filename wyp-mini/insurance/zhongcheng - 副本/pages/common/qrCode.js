var e = getApp();

Page({
    data: {},
    onLoad: function(o) {
        var n = this;
        e.toCheckSession(function() {
            n.toPage(o);
        });
    },
    toPage: function(e) {
        console.log(e);
        var o, n = this, s = "", a = "";
        if (e) {
            var t = e.q;
            if (t) {
                t = decodeURIComponent(t), console.log("q=" + e.q);
                var l = t.indexOf("?");
                console.log("index=" + l), l > 0 && l + 1 < t.length && (a = t.substring(l + 1, t.length), 
                s = n.getUrlParms(a, "skipType"));
            }
        }
        console.log(a), console.log("skipType=" + s), "face" == s ? (o = "/pages/face/detect", 
        "" != a && (o += "?" + a)) : "person" == s ? (o = "/pages/face/person", "" != a && (o += "?" + a)) : "webview" == s ? (o = "/pages/webview/webview", 
        "" != a && (o += "?" + a)) : (o = "/pages/home/home", "" != a && (o += "?" + a)), 
        console.log("跳转.." + o), wx.reLaunch({
            url: o
        });
    },
    getUrlParms: function(e, o) {
        var n = new RegExp("(^|&)" + o + "=([^&]*)(&|$)"), s = e.match(n);
        return null != s ? s[2] : null;
    }
});