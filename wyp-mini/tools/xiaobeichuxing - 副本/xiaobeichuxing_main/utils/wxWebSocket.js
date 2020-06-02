function e() {
    for (var o = wx.getStorageSync("uid"), l = t.split("#"), s = l.length, i = 0; i < s; i++) if (l[i] && l[i].length > 1) try {
        var a = JSON.parse(l[i]);
        if (t = t.replace(l[i] + "#", ""), console.log(JSON.stringify(a)), a.ServerDist) c = a.ClientID, 
        this.send('{"ClientID":"' + a.ClientID + '","UserID":"' + o + '","UType":"app"}'); else if (a.signaltype) switch (a.signaltype) {
          case "Locate":
            break;

          case "operate":
            "APPE501" == a.rettype ? unlockCall(a) : "APPE301" == a.rettype && lockedCall(a);
        }
    } catch (e) {
        console.log(e + l[i]);
    }
    l = null, "" != t ? setTimeout(function() {
        e();
    }, 150) : n = !1;
}

var o = !1, t = "", n = !1, c = "", l = {
    wsurl: "wss://api.xiaobeibike.com/websocket"
};

module.exports = {
    mysocket: function() {
        wx.connectSocket({
            url: l.wsurl,
            success: function() {
                console.log("发送成功,正在连接WebSocket");
            }
        }), wx.onSocketOpen(function(e) {
            console.log(e), console.log("WebSocket连接已打开！"), o = !0;
        }), wx.onSocketMessage(function(o) {
            "" != o.data && (console.log("收到响应"), t += o.data.toString(), n || (n = !0, e()));
        }), wx.onSocketClose(function(e) {
            console.log("WebSocket 已关闭！"), o = !1;
        }), wx.onSocketError(function(e) {
            console.log("WebSocket连接打开失败，请检查！");
        });
    },
    analysis: e
};