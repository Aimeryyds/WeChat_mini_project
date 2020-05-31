function e(e) {
    return new Promise(function(t, o) {
        var n = {
            url: e.url,
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                o(e);
            }
        };
        e.data && (n.data = e.data), e.header && (n.header = e.header), e.method && (n.method = e.method), 
        e.protocols && (n.protocols = e.protocols), "socket" === e.mode ? wx.connectSocket(n) : wx.request(n);
    });
}

function t(e, t) {
    var n = (e = e || new Date()).getFullYear(), i = e.getMonth() + 1, s = e.getDate(), r = e.getHours(), c = e.getMinutes(), a = e.getSeconds(), u = e.getMilliseconds();
    return [ n, i, s ].map(o).join("-") + " " + [ r, c, a ].map(o).join(":") + (t ? "." + u : "");
}

function o(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var o = [], i = void 0, s = void 0, r = void 0, c = function(e) {
        function o(e) {
            for (var t in n.socketMap) n.socketMap[t].reject(e), delete n.socketMap[t];
            n.log("minico socket request fail, res: " + JSON.stringify(e));
        }
        var n = this;
        this.option = e || {}, this.status = 0, this.logining = !1, this.loginQueue = [], 
        this.socketMap = {}, this.listener = {
            open: {
                map: {},
                queue: []
            },
            connect: {
                map: {},
                queue: []
            },
            message: {
                map: {},
                queue: []
            },
            push: {
                map: {},
                queue: []
            },
            close: {
                map: {},
                queue: []
            },
            error: {
                map: {},
                queue: []
            }
        }, this.formIdList = [], wx.onSocketOpen(function(e) {
            n.status = 101, n.log("socket open"), n.emit("open", e);
        }), wx.onSocketError(function(e) {
            n.status = 600, o(), n.log("socket error, res: " + JSON.stringify(e)), n.emit("error", e);
        }), wx.onSocketMessage(function(e) {
            var i = void 0;
            try {
                i = JSON.parse(e.data);
            } catch (e) {}
            if (i) {
                if (i.probe) return void ("pong" === i.type && n.log("socket pong frame receive"));
                if (-3e3 === i.ret || -3001 === i.ret || -3002 === i.ret || -3003 === i.ret) n.log("socket connect token out of date, res: " + e.data), 
                n.login().then(function() {
                    n.retry ? (n.retry = !1, o()) : (n.log("minico relogin"), n.retry = !0, n.connect().then(function() {}, o));
                }, o); else if ("connect" === i.seq) {
                    n.status = 200;
                    for (var s in n.socketMap) n.socketMap[s].param.token = n.token, n.message(n.socketMap[s].param);
                    n.option.heartBeat && (r && clearInterval(r), r = setInterval(function() {
                        n.message({
                            probe: !0,
                            type: "ping"
                        });
                    }, n.option.heartBeat)), n.log("socket connect success, res: " + e.data + ", end: " + t(new Date(), !0)), 
                    n.emit("connect", i);
                } else "push" === i.seq ? (n.log("socket data push received, res: " + e.data), n.emit("push", i)) : i.seq && n.socketMap[i.seq] ? (0 === i.ret ? n.socketMap[i.seq].resolve(i) : n.socketMap[i.seq].reject(i), 
                delete n.socketMap[i.seq], n.log((e.data && e.data.length, e.data.substr(0, 200) + "...")), 
                n.emit("message", i)) : (n.log("socket message unprocessed branch, res: " + JSON.stringify(e)), 
                n.emit("error", i));
            } else n.log("socket message parse error, res: " + e.data), n.emit("error", e);
        }), wx.onSocketClose(function(e) {
            n.status = 300, r && clearInterval(r), n.log("socket close, res: " + JSON.stringify(e)), 
            n.emit("close", e);
        }), n.log("minico config success: " + JSON.stringify(e));
    };
    return c.prototype.getLoginInfo = function() {
        var e = this;
        return new Promise(function(t, o) {
            if (e.token) e.log("login wx.checkSession success"), t(e.token); else {
                try {
                    e.token = wx.getStorageSync("minico_data");
                } catch (t) {
                    e.log("get storage fail, error: " + t);
                }
                e.token ? (e.log("login wx.checkSession success, storage exist"), t(e.token)) : (e.log("login wx.checkSession success, token empty, get login token"), 
                e.login().then(t, o));
            }
        });
    }, c.prototype.login = function() {
        var t = this, o = (t.option.debug ? "http:" : "https:") + "//" + t.option.domain + "/minico/oauth20";
        return new Promise(function(n, i) {
            function s(e, o) {
                var n = !0, i = !1, s = void 0;
                try {
                    for (var r, c = t.loginQueue[Symbol.iterator](); !(n = (r = c.next()).done); n = !0) {
                        var a = r.value;
                        e ? a.resolve(o) : a.reject(o);
                    }
                } catch (e) {
                    i = !0, s = e;
                } finally {
                    try {
                        !n && c.return && c.return();
                    } finally {
                        if (i) throw s;
                    }
                }
                t.loginQueue = [], t.logining = !1;
            }
            t.loginQueue.push({
                resolve: n,
                reject: i
            }), t.log("login wx.login queue, length: " + t.loginQueue.length), t.logining || (t.logining = !0, 
            wx.login({
                success: function(n) {
                    n.code ? (t.log("login wx.login success, request minico login"), e({
                        url: o + "?uin=" + t.option.name,
                        data: {
                            code: n.code,
                            appid: t.option.appid,
                            platform: t.option.platform || "wx",
                            extra: t.option.extra
                        },
                        method: "POST"
                    }).then(function(e) {
                        var o = (e || {}).data || {};
                        if (0 === o.retcode) {
                            t.token = o.data;
                            try {
                                wx.setStorageSync("minico_data", t.token);
                            } catch (e) {
                                t.log("set storage fail, error: " + e);
                            }
                            t.log("oauth success"), s(!0, t.token);
                        } else t.log("oauth fail, retcode: " + (o.retcode || e.statusCode)), s(!1, e);
                    }, function(e) {
                        t.log(o + " failed! res: " + JSON.stringify(e)), s(!1, {
                            retcode: 100020,
                            retmsg: e
                        });
                    })) : (t.log("login wx.login success, code empty"), s(!1, {
                        retcode: 100021,
                        retmsg: n
                    }));
                },
                fail: function(e) {
                    t.log("login wx.login failed"), s(!1, {
                        retcode: 100022,
                        retmsg: e
                    });
                }
            }));
        });
    }, c.prototype.webapp = function(t) {
        var o = this;
        return new Promise(function(n, i) {
            function s(s) {
                o.log("webapp " + t.protocol + "/" + t.name + " send, openid: " + s.openid + ", uid: " + (s.uid ? s.uid : ""));
                var r = (o.option.debug ? "http:" : "https:") + "//" + o.option.domain + "/minico/json/" + t.protocol + "/" + t.name, c = t.data, a = {
                    Cookie: "minico_appid=" + o.option.appid
                };
                s && (a.Cookie += "; minico_token=" + s.minico_token + "; minico_openid=" + s.openid + (s.uid ? "; minico_uid=" + s.uid : "")), 
                e({
                    url: r + "?uin=" + (s.uid || s.openid || o.option.name),
                    data: c,
                    header: a,
                    method: t.method || "POST"
                }).then(function(e) {
                    var s = (e || {}).data || {};
                    -3e3 === s.ret || -3001 === s.ret || -3002 === s.ret || -3003 === s.ret ? o.login().then(function() {
                        o.webapp(t).then(n, i);
                    }, i) : n(e);
                }, function(e) {
                    i(e);
                });
            }
            void 0 === t.withCredentials || t.withCredentials ? o.getLoginInfo().then(function(e) {
                s(e);
            }, function(e) {
                i(e);
            }) : s();
        });
    }, c.prototype.upload = function(e) {
        var t = this;
        return new Promise(function(o, n) {
            function i(i) {
                var s = (t.option.debug ? "http:" : "https:") + "//" + t.option.domain + "/minico/upload/" + e.protocol + "/" + e.name;
                s = s + "?uin=" + (i.uid || i.openid);
                var r = {
                    Cookie: "minico_appid=" + t.option.appid
                };
                i && (r.Cookie += "; minico_token=" + i.minico_token + "; minico_openid=" + i.openid + (i.uid ? "; minico_uid=" + i.uid : "")), 
                t.log("minico upload, url: " + s), wx.uploadFile({
                    url: s,
                    filePath: e.filePath,
                    name: e.fileField,
                    header: r,
                    formData: e.data,
                    success: function(i) {
                        if (i && 200 === i.statusCode && "uploadFile:ok" === i.errMsg) {
                            if ("string" == typeof i.data) try {
                                i.data = JSON.parse(i.data);
                            } catch (e) {}
                            0 === i.data.ret ? o(i) : -3e3 === i.data.ret || -3001 === i.data.ret || -3002 === i.data.ret || -3003 === i.data.ret ? t.login().then(function() {
                                t.upload(e).then(o, n);
                            }, n) : n(i);
                        } else n(i);
                    },
                    fail: function(e) {
                        n(e);
                    }
                });
            }
            void 0 === e.withCredentials || e.withCredentials ? t.getLoginInfo().then(function(e) {
                i(e);
            }, function(e) {
                n(e);
            }) : i();
        });
    }, c.prototype.connect = function() {
        var o = this;
        return o.status = 1, o.log("minico connect start: " + t(new Date(), !0)), new Promise(function(t, n) {
            function i(i) {
                var s = (o.option.debug ? "ws:" : "wss:") + "//" + o.option.domain + "/minico/ws?seq=" + new Date().getTime() + (9999 * Math.random()).toFixed(0), r = {
                    Cookie: "minico_appid=" + o.option.appid
                };
                i && (r["x-client-proto"] = "https", i.uid && (r["minico-uid"] = i.uid), r.Cookie += "; minico_token=" + i.minico_token + "; minico_openid=" + i.openid + (i.uid ? "; minico_uid=" + i.uid : "")), 
                o.log("socket connect request sent, header: " + JSON.stringify(r)), e({
                    url: s + "&uin=" + (o.option.name || i.uid || i.openid),
                    header: r,
                    mode: "socket"
                }).then(function(e) {
                    "connectSocket:ok" === e.errMsg ? (o.status = 100, t(e)) : (o.status = 400, n(e)), 
                    o.log("socket connect respond, res: " + JSON.stringify(e));
                }, function(e) {
                    o.status = 500, n(e), o.log("socket connect request fail, res: " + JSON.stringify(e));
                });
            }
            o.getLoginInfo().then(function(e) {
                o.log("getLoginInfo success, token: " + JSON.stringify(e)), i(e);
            }, function(e) {
                n(e);
            });
        });
    }, c.prototype.socket = function(e) {
        var t = this;
        return new Promise(function(o, n) {
            function i() {
                t.connect().then(function() {}, function(e) {
                    for (var o in t.socketMap) t.socketMap[o].reject(e), delete t.socketMap[o];
                });
            }
            var s = new Date().getTime() + (9999 * Math.random()).toFixed(0);
            e.seq = s, t.socketMap[s] = {
                param: e,
                resolve: o,
                reject: n
            }, t.log("minico.socket new message in queue, seq: " + s), 200 === t.status ? t.message(e) : 0 === t.status || 300 === t.status ? i() : 1 === t.status || 100 === t.status || 101 === t.status || wx.closeSocket({
                code: 1e3,
                reason: "socket close to reconnect",
                success: i,
                fail: i
            });
        });
    }, c.prototype.message = function(e) {
        var t = this;
        wx.sendSocketMessage({
            data: JSON.stringify(e),
            success: function() {},
            fail: function(o) {
                t.socketMap[e.seq] && (t.socketMap[e.seq].reject(o), delete t.socketMap[e.seq]);
            }
        });
    }, c.prototype.rebuild = function(e) {
        var t = this;
        return new Promise(function(o, n) {
            101 !== t.status && 200 !== t.status || wx.closeSocket(), t.login().then(function() {
                t.socket(e).then(o, n);
            }, n);
        });
    }, c.prototype.on = function(e, t, o) {
        e ? ("function" == typeof t && (o = t, t = null), t ? this.listener[e].map[t] = o : this.listener[e].queue.push(o)) : this.log("minico.on no event type specify");
    }, c.prototype.off = function(e, t) {
        e ? t ? delete this.listener[e].map[t] : (this.listener[e].map = {}, this.listener[e].queue = []) : this.log("minico.off no event type specify");
    }, c.prototype.emit = function(e, t) {
        var o = this.listener[e].map, n = this.listener[e].queue;
        for (var i in o) "function" == typeof o[i] && o[i](t);
        for (var s = 0, r = n.length; s < r; s++) "function" == typeof n[s] && n[s](t);
    }, c.prototype.log = function(e) {
        var i = getCurrentPages(), s = " [" + (i && i.length ? i[i.length - 1].route : "app") + "] ";
        e = "object" === (void 0 === e ? "undefined" : n(e)) ? JSON.stringify(e) : e, o.push(t(new Date()) + s + " : " + e), 
        console.log(s + e);
    }, c.prototype.report = function() {
        var e = this, t = (this.option.debug ? "http:" : "https:") + "//" + this.option.domain + "/log/post/" + this.option.appid, n = +new Date(), r = i && n - i < 3e3 ? 3e3 - n + i : 0, c = void 0;
        try {
            o.push("openid: " + ((e.token || {}).openid || "none")), o.push(JSON.stringify(wx.getSystemInfoSync()));
        } catch (e) {}
        c = (e.token || {}).openid || this.option.appid, s && clearTimeout(s), s = setTimeout(function() {
            wx.request({
                url: t + "?uin=" + (e.option.name || c),
                method: "POST",
                dataType: "json",
                data: o.join("\n"),
                header: {
                    "Content-Type": "text/html; charset=UTF-8"
                }
            }), o = [], i = +new Date();
        }, r);
    }, c.prototype.record = function(e) {
        e && "the formId is a mock one" !== e && (this.log("set form id: " + e), this.formIdList.push({
            formid: e,
            time: new Date().getTime()
        }));
    }, c.prototype.submit = function() {
        var t = this, o = (this.option.debug ? "http:" : "https:") + "//" + t.option.domain + "/minico/record", n = (this.token || {}).openid || this.option.appid;
        return new Promise(function(i, s) {
            t.formIdList.length ? t.getLoginInfo().then(function(r) {
                var c = {
                    Cookie: "minico_appid=" + t.option.appid
                };
                r && (c.Cookie += "; minico_token=" + r.minico_token + "; minico_openid=" + r.openid + (r.uid ? "; minico_uid=" + r.uid : "")), 
                e({
                    url: o + "?uin=" + (t.option.name || n),
                    data: {
                        formid: t.formIdList
                    },
                    header: c,
                    method: "POST"
                }).then(function() {
                    t.formIdList = [], t.log("submit form id, count: " + t.formIdList.length), i();
                }, function(e) {
                    t.log("submit form id fail, res: " + JSON.stringify(e)), s();
                });
            }, function(e) {
                t.log("submit form id fail, openid deficiency, res: " + JSON.stringify(e)), s();
            }) : s();
        });
    }, function(e) {
        return new c(e);
    };
}();