module.exports = {
    mysocket: function(e, n, t) {
        var o = null, i = !1, s = !1, l = "", c = "";
        "undefined" == typeof WebSocket && (console.log(WebSocket), console.log("您的设备不支持WebSocket"));
        var a = {
            init: function() {
                this.bind();
            },
            bind: function() {
                try {
                    (o = new WebSocket("ws://" + e.ip + ":" + e.port + "/")).onopen = function(e) {
                        i = !0;
                    }, o.onmessage = function(e) {
                        "" != e.data && (console.log("收到响应"), l += e.data.toString(), s || (s = !0, a.analysis()));
                    }, o.onclose = function(e) {
                        console.log("已关闭"), i = !1, setTimeout(function() {
                            a.bind();
                        }, 1e4);
                    };
                } catch (e) {
                    console.log(e);
                }
            },
            heart: function() {},
            analysis: function() {
                for (var i = l.split("#"), r = i.length, u = 0; u < r; u++) if (i[u] && i[u].length > 1) try {
                    var f = JSON.parse(i[u]);
                    if (l = l.replace(i[u] + "#", ""), console.log(JSON.stringify(f)), f.ServerDist) c = f.ClientID, 
                    o.send('{"ClientID":"' + f.ClientID + '","UserID":"' + e.uid + '","UType":"app"}'); else if (f.signaltype) switch (f.signaltype) {
                      case "Locate":
                        break;

                      case "operate":
                        "APPE501" == f.rettype ? n(f) : "APPE301" == f.rettype && t(f);
                    }
                } catch (e) {
                    console.log(e + i[u]);
                }
                i = null, "" != l ? setTimeout(function() {
                    a.analysis();
                }, 150) : s = !1;
            },
            send: function(e) {
                i ? (console.log("指令发出"), o.send(e)) : console.log("您的设备不支持WebSocket");
            },
            sendParm: function(e, n, t) {
                var e = {
                    ClientID: c,
                    SignalName: e,
                    Arguments: t,
                    vid: n
                };
                return JSON.stringify(e);
            }
        };
        return a.init(), a;
    }
};