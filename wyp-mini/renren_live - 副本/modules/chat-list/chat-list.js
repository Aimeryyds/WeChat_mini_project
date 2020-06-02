var e, t, a = require("../../72E76F218A740DDF14810726663CC841.js"), s = require("../../2A5831C68A740DDF4C3E59C1F25DC841.js"), n = require("../../213E99418A740DDF4758F1467AACC841.js"), i = require("../../14E98D478A740DDF728FE5401BCCC841.js"), o = require("../../FB1B99A38A740DDF9D7DF1A4A7DCC841.js"), r = getApp(), g = null, l = null, c = "https://wpi.renren.com/comet_get", u = r.apiurl + "talk/deleteTalkSession";

Component({
    properties: {},
    data: {
        recents: [],
        wpsid: -1,
        mid: 0,
        maxMsgKey: -1,
        stopMessageInterval: !1,
        hintStatus: 0
    },
    methods: {
        init: function(t) {
            g = this, e = t;
        },
        getRecentChatList: function(t) {
            t && wx.showLoading({
                title: "载入中..."
            }), g.setData({
                recents: wx.getStorageSync("chatMessages"),
                hintStatus: 0
            }), t || g.setData({
                recents: e.data.recents
            });
            var a = wx.getStorageSync("cookiesdata");
            s.getNetworkTypeP()().then(function(e) {
                if (o.i("联系人列表=1=>" + JSON.stringify(e)), "none" != e.networkType) return s.getRequestP("https://webpager.renren.com/api/getRecent", a, "");
                g.setHintStatus(3);
            }).then(function(e) {
                if (o.i("联系人列表=2=>" + JSON.stringify(e)), null != e) if (200 == e.statusCode) {
                    var t = null;
                    o.i("联系人列表=2=>" + JSON.stringify(t));
                    try {
                        t = e.data.data.recents;
                    } catch (e) {
                        g.againLogin(), fail();
                    }
                    if (null != t && t.length > 0) {
                        for (var a = 0; a < t.length; a++) if (t[a].msgKey > g.data.maxMsgKey && g.setData({
                            maxMsgKey: t[a].msgKey
                        }), t[a].id >= 6e8 && t[a].id <= 7e8) t.splice(a--, 1); else {
                            t[a].messageTime = 0, t[a].messageCount = 0, t[a].left = 0;
                            var s = g.data.recents;
                            if (null != s && s.length > 0) for (var n = 0; n < s.length; n++) if (t[a].msgKey == s[n].msgKey) {
                                t[a] = s[n];
                                break;
                            }
                        }
                        wx.setStorageSync("chatMessages", t), g.setData({
                            recents: t
                        });
                    } else wx.removeStorageSync("chatMessages"), g.setData({
                        recents: []
                    }), g.setHintStatus(1);
                } else fail();
            }).catch(function(e) {
                o.i("联系人列表=catch=>"), "request:fail url not in domain list" == e.errMsg && g.againLogin(), 
                g.setHintStatus(2);
            }).finally(function(t) {
                o.i("联系人列表=finally=>"), wx.stopPullDownRefresh(), wx.hideLoading(), e.onRecentCallback(g.data);
            });
        },
        setHintStatus: function(e) {
            var t = g.data.recents;
            (null == t || t.length <= 0) && g.setData({
                hintStatus: e
            });
        },
        getMessageInterval_1: function() {
            g.data.stopMessageInterval = !1, l = s.getNetworkType(function(e) {
                if (o.i("拉消息=网络=>" + JSON.stringify(e)), "none" != e.networkType) return g.getMessageInterval_2();
                g.doComplete(e);
            }, function(e) {
                o.i("拉消息=网络=>" + JSON.stringify(e)), g.doComplete(e);
            });
        },
        getMessageInterval_2: function() {
            if (-1 == g.data.wpsid) {
                var e = wx.getStorageSync("cookiesdata"), t = {
                    ins: "",
                    mid: 0
                };
                l = s.getRequest(c, e, t, function(e) {
                    if (o.i("拉消息=wpsid=>" + JSON.stringify(e)), 200 == e.statusCode) {
                        var t = -1;
                        if (e.header["Set-Cookie"]) for (var a = e.header["Set-Cookie"].split("; "), s = 0; s < a.length; s++) -1 != a[s].indexOf("wpsid") && (t = a[s].split("=")[1]);
                        return o.i("拉消息=wpsid=>wpsid：" + t), g.setData({
                            wpsid: t
                        }), g.getMessageInterval_3();
                    }
                    g.doComplete(e);
                }, function(e) {
                    o.i("拉消息=wpsid=>" + JSON.stringify(e)), g.doComplete(e);
                });
            } else g.getMessageInterval_3();
        },
        getMessageInterval_3: function() {
            var t = wx.getStorageSync("cookiesdata") + ";wpsid=" + g.data.wpsid, i = {
                mid: g.data.mid
            };
            l = s.getRequest(c, t, i, function(t) {
                if (o.i("拉取消息=2=>" + JSON.stringify(t)), "ERROR[403]: please login first" == t.data && g.againLogin(), 
                200 == t.statusCode) {
                    var s = new a.DOMParser(), i = s.parseFromString(t.data);
                    o.i("拉取消息()=doc=>" + i);
                    var r = i.getElementsByTagName("common").length - 1;
                    o.i("拉取消息=commonLength=>" + r);
                    var l = i.getElementsByTagName("common")[r];
                    o.i("拉取消息=common=>" + l);
                    var c = l.attributes[0].nodeValue;
                    o.i("拉取消息=mid=>" + c);
                    var u = JSON.parse(l.firstChild.nodeValue);
                    o.i("拉取消息=item=>" + l.firstChild.nodeValue);
                    var d = u.richbody;
                    if (o.i("拉取消息=richbody=>" + d), g.setData({
                        mid: c
                    }), null != d) {
                        var f = s.parseFromString(d).getElementsByTagName("font")[0].firstChild.nodeValue, m = u.msgkey, p = n.formatTime(u.time / 1e3, "M/D h:m"), y = g.data.recents;
                        if (null != y && y.length > 0) {
                            for (var h = 0; h < y.length; h++) {
                                if (y[h].msgKey > g.data.maxMsgKey && g.setData({
                                    maxMsgKey: y[h].msgKey
                                }), y[h].id == u.from) {
                                    if (y[h].recent = f, y[h].msgKey = m, y[h].messageTime = p, 0 != y[h].messageCount ? y[h].messageCount = parseInt(y[h].messageCount) + 1 : y[h].messageCount = 1, 
                                    0 != h) {
                                        var S = y[h];
                                        y.splice(h--, 1), y.unshift(S);
                                    }
                                    break;
                                }
                                h == y.length - 1 && g.getRecentChatList(!1), o.i("消息数量2=" + y[h].name + "==" + y[h].messageCount);
                            }
                            g.setData({
                                recents: y
                            });
                            g.data.recents;
                            e.onRecentCallback(g.data);
                        } else g.getRecentChatList(!1);
                        return g.getMessageInterval_4(u);
                    }
                    for (var v = g.data.recents, w = 0; w < v.length; w++) {
                        v[w].msgKey > g.data.maxMsgKey && g.setData({
                            maxMsgKey: v[w].msgKey
                        });
                        v[w].id, u.from;
                        if (v[w].id == u.from) {
                            v[w].messageCount, u.count;
                            u.count > v[w].messageCount && (v[w].messageCount = u.count);
                        }
                        o.i("消息数量1=" + v[w].name + "==" + v[w].messageCount);
                    }
                    g.setData({
                        recents: v
                    }), e.onRecentCallback(g.data), g.setSuccessState(101);
                }
                g.doComplete(t);
            }, function(e) {
                g.doComplete(e);
            });
        },
        getMessageInterval_4: function(e) {
            var t = wx.getStorageSync("cookiesdata") + ";wpsid=" + g.data.wpsid, a = null;
            a = '<ack from="' + e.from + '" to="' + e.to + '" msgkey="' + e.msgkey + '" type="dr" chat_type="chat"/>%0a%26_rtk=' + wx.getStorageSync("_rtk"), 
            l = s.postRequest("https://wpi.renren.com/muc_chat", t, a, function(e) {
                200 == e.statusCode && g.setSuccessState(102), g.doComplete(e);
            }, function(e) {
                g.doComplete(res);
            });
        },
        doComplete: function(e) {
            if (!g.data.stopMessageInterval) {
                var t = g.getSuccessState();
                101 == t || 102 == t ? (o.i("test正常"), g.getMessageInterval_1()) : (o.i("test延时"), 
                setTimeout(function() {
                    g.getMessageInterval_1();
                }, 4e3));
            }
            g.setSuccessState(0);
        },
        againLogin: function() {
            i.updateLoginStatus(), i.loginSuccess = function(e) {
                o.i("重新登录==>" + JSON.stringify(e));
            };
        },
        deleteTalk: function(t) {
            var a = {
                api_key: r.opApiKey,
                v: "1.0",
                client_info: r.client_info,
                session_key: r.currentUser.session_key,
                call_id: new Date().getTime(),
                uidTarget: t
            };
            a.sig = i.getsign(a), s.getNetworkTypeP()().then(function(e) {
                if (o.i("联系人列表=1=>" + JSON.stringify(e)), "none" != e.networkType) return s.getRequestP(u, "", a);
                wx.showToast({
                    title: "网络异常",
                    icon: "none",
                    duration: 2e3
                });
            }).then(function(t) {
                o.i("删除当前会话=2=>" + JSON.stringify(t)), null != t && (200 == t.statusCode && 0 == t.data.result ? e.onDeleteChatCallback(0) : e.onDeleteChatCallback(-1));
            }).catch(function(t) {
                o.i("删除当前会话=catch=>"), e.onDeleteChatCallback(-1);
            }).finally(function(e) {
                o.i("删除当前会话=finally=>");
            });
        },
        setHintView: function(t) {
            try {
                e.hintView.setHintView(t);
            } catch (e) {}
        },
        startMessageInterval: function() {
            g.getMessageInterval();
        },
        stopMessageInterval: function() {
            g.data.stopMessageInterval = !0, l && l.abort();
        },
        setSuccessState: function(e) {
            t = e;
        },
        getSuccessState: function() {
            return t;
        }
    }
});