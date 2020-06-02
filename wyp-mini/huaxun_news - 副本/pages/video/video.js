var e = getApp(), t = require("../../sdk/zrender-helper"), a = require("../../sdk/zrender"), n = require("../../sdk/vod"), s = require("../../sdk/gssdk").GS, i = "", o = "", r = {}, l = void 0, d = 0, p = void 0, c = void 0;

Page({
    data: {
        joinItem: "",
        videoHeight: 205,
        swiperHeight: 500,
        audioSrc: "",
        videoSrc: "",
        autoplay: !0,
        condition: !1,
        docHeight: 0,
        documentUrl: "",
        current: 1,
        isShowQnaire: !1,
        isFullScreen: !1,
        pointer_show: 0,
        voteList: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
        voteSingleSel: "../../assets/icons/single.png",
        voteSingleSel2: "../../assets/icons/single2.png",
        voteSingleSel3: "../../assets/icons/single3.png",
        voteMultSel: "../../assets/icons/multiple.png",
        voteMultSel2: "../../assets/icons/multiple2.png",
        voteMultSel3: "../../assets/icons/multiple3.png",
        voteId: [],
        voteAll: [],
        adsInfo: {
            show: !1
        }
    },
    onLoad: function(t) {
        this.channel = s.createChannel(), e.globalData.channel = this.channel, t.item && this.setData({
            joinItem: JSON.parse(t.item)
        });
        var a = this;
        setTimeout(function() {
            a.checkAds();
        }, 5e3);
    },
    onReady: function() {
        var a = this, s = !1, i = wx.getSystemInfoSync().windowHeight, o = wx.getSystemInfoSync().windowWidth, r = 9 * o / 16, d = i - 44 - r;
        this.setData({
            videoHeight: r,
            swiperHeight: d
        }), l = o / 1024, this.videoContext = wx.createVideoContext("myVideo"), this.chat = this.selectComponent("#chat"), 
        this.zr && this.zr.dispose(), this.zr = t.createZrender("drawCanvas", o, d), this.channel.bind("onVideoUrl", function(e) {
            console.log("获取到视频地址"), a.setData({
                videoSrc: e.data.mediaUrl
            });
        }), this.channel.bind("onDocChange", function(e) {
            console.log("文档翻页"), p = e.data.height, c = e.data.width;
            var t = o * (p / c);
            l = o / c, a.clearAnno(), a.setData({
                documentUrl: e.data.hls,
                docHeight: t,
                condition: !0
            });
        }), this.channel.bind("onAnno", function(e) {
            console.log("收到标注");
            var t = e.data.annoArray;
            "clear" == e.data.cmd || t.length > 0 && setTimeout(function() {
                a.drawCanvas(t);
            }, 200);
        }), this.channel.bind("onVote", function(e) {
            console.log("收到调查问卷");
            var t = e.data, n = a.data.voteAll, s = a.data.voteId;
            if (a.voteId_in(s, t.id)) return !1;
            if (s.push({
                id: t.id
            }), !a.voteId_in(n, t.id)) for (var i = 0; i < t.questions.length; i++) t.questions[i].answer = "";
            t.type = "question", n.push(t), n.length > 0 && a.videoContext.pause(), a.setData({
                voteId: s,
                voteAll: n,
                isShowQnaire: !0
            });
        }), this.channel.bind("onTitle", function(e) {
            console.log("获取标题"), wx.setNavigationBarTitle({
                title: e.data.content
            });
        }), this.channel.bind("onStatus", function(e) {
            if (console.log("SDK状态通知"), s) return !1;
            s = !0;
            var t = "";
            "1" == e.data.type ? t = "人数已满，您无法加入" : "7" == e.data.type && (t = "人数已满，您无法加入"), 
            "1" != e.data.type && "7" != e.data.type || wx.showModal({
                title: "提示",
                content: t,
                showCancel: !1,
                confirmText: "我知道了",
                confirmColor: "#0078d7",
                success: function() {
                    s = !1, wx.navigateBack({
                        delta: 1
                    });
                }
            });
        }), this.channel.bind("onAPIError", function(e) {
            console.log("报错"), wx.showModal({
                title: "ERROR",
                content: e.data.explain,
                showCancel: !1,
                confirmText: "我知道了",
                confirmColor: "#0078d7"
            });
        }), this.channel.bind("onDataReady", function(e) {
            e.data;
            a.channel.send("setupChatSync", {
                open: !0
            }), a.channel.send("submitQAList", {}), a.videoContext.play();
        }), this.numTen = function(e) {
            return e > 9 ? e : "0" + e;
        }, this.voteId_in = function(e, t) {
            if (0 == e.length) return !1;
            for (var a in e) if (e[a].id == t) return !0;
            return !1;
        }, this.idInCanvas = function(e, t) {
            if ("[object Object]" == !Object.prototype.toString.call(e)) return !1;
            for (var a in e) if (a == t) return !0;
            return !1;
        }, n._open_.init({
            widget: this.channel,
            site: a.data.joinItem.site,
            ownerid: a.data.joinItem.id,
            ctx: a.data.joinItem.ctx,
            authcode: a.data.joinItem.authcode,
            uid: "",
            uname: e.globalData.userInfo.nickName,
            encodetype: "",
            password: "",
            k: a.data.joinItem.k,
            istest: !1
        }, function(t) {
            console.log("回调"), e.globalData.userInfo.userid = t.userid;
        });
    },
    refreshCanvas: function(e) {
        var t = this;
        t.clearAnno(), t.chat.refreshChat();
    },
    createArrowHead: function(e, t, n) {
        var s, i, o, r, l = parseInt(e[0]), d = parseInt(e[1]), p = parseInt(e[2]), c = parseInt(e[3]), h = p - l, u = c - d, f = Math.atan2(u, h), g = ((f *= 180 / Math.PI) + 30) * Math.PI / 180, y = (f - 30) * Math.PI / 180;
        return s = p - 5 * Math.cos(g), i = c - 5 * Math.sin(g), o = p - 5 * Math.cos(y), 
        r = c - 5 * Math.sin(y), new a.Polygon({
            shape: {
                points: [ [ p, c ], [ s, i ], [ o, r ] ],
                smooth: !1
            },
            style: {
                fill: t,
                stroke: t,
                lineWidth: n
            }
        });
    },
    drawCanvas: function(e) {
        var t = this;
        if (!(e && e.length > 0)) return !1;
        for (var n = 0; n < e.length; n++) {
            var s = new Object();
            if (!t.idInCanvas(r, e[n].id)) {
                for (var d in e[n]) s[d] = e[n][d];
                if (null != s.color) var p = s.color.split(","), c = p[0], h = parseFloat(p[1]);
                if (t.data.pointer_show > 0 && (9 == s.type || 1 == s.type ? ("0" == s.style && 2 != t.data.pointer_show || "1" == s.style && 1 != t.data.pointer_show) && (1 == t.data.pointer_show ? i.setStyle({
                    x: -100,
                    y: -100
                }) : o.setStyle({
                    x: -100,
                    y: -100
                })) : (1 == t.data.pointer_show ? i.setStyle({
                    x: -100,
                    y: -100
                }) : o.setStyle({
                    x: -100,
                    y: -100
                }), t.setData({
                    pointer_show: 0
                }))), 6 == s.type) {
                    s.start_p = s.p.split(","), s.end_p = s.ep.split(",");
                    var u = parseInt(s.end_p[0]) - parseInt(s.start_p[0]), f = parseInt(s.end_p[1]) - parseInt(s.start_p[1]), g = parseInt(s.linesize) * l, y = new a.Rect({
                        shape: {
                            x: parseInt(s.start_p[0]) * l,
                            y: parseInt(s.start_p[1]) * l,
                            width: parseInt(u * l),
                            height: parseInt(f * l)
                        },
                        style: {
                            fill: null,
                            stroke: c,
                            lineWidth: g
                        }
                    });
                    r[s.id] = y, r[s.id].timestamp = s.timestamp, t.zr.add(y);
                } else if (5 == s.type) {
                    s.start_p = s.p.split(","), s.end_p = s.ep.split(",");
                    var u = parseInt(s.end_p[0]) - parseInt(s.start_p[0]), f = parseInt(s.end_p[1]) - parseInt(s.start_p[1]), g = parseInt(s.linesize) * l, I = new a.Ellipse({
                        shape: {
                            cx: (parseInt(s.start_p[0]) + parseInt(s.end_p[0])) / 2 * l,
                            cy: (parseInt(s.start_p[1]) + parseInt(s.end_p[1])) / 2 * l,
                            rx: parseInt(u / 2 * l),
                            ry: parseInt(f / 2 * l)
                        },
                        style: {
                            fill: null,
                            stroke: c,
                            lineWidth: g
                        }
                    });
                    r[s.id] = I, r[s.id].timestamp = s.timestamp, t.zr.add(I);
                } else if (4 == s.type && s.text) {
                    console.log("写文字"), s.start_p = s.p.split(","), s.end_p = s.ep.split(",");
                    var v = parseInt(s.fontsize * l), w = s.text, m = new a.Text({
                        style: {
                            x: parseInt(s.start_p[0]) * l,
                            y: parseInt(s.start_p[1]) * l,
                            text: w,
                            textFill: c,
                            textFont: v + "px Microsoft Yahei",
                            textBaseline: "top"
                        }
                    });
                    r[s.id] = m, r[s.id].timestamp = s.timestamp, t.zr.add(m);
                } else if (3 == s.type) if (0 == s.removed) t.clearAnno(); else {
                    var x = s.removed;
                    r[x] && null != r[x] && t.zr.remove(r[x]), delete r[x];
                } else if ("8" == s.type || "7" == s.type) {
                    s.start_p = s.p.split(","), s.end_p = s.ep.split(",");
                    g = parseInt(s.linesize) * l;
                    if ("0" == s.style || "7" == s.type) {
                        var D = new a.Line({
                            shape: {
                                x1: parseInt(s.start_p[0]) * l,
                                y1: parseInt(s.start_p[1]) * l,
                                x2: parseInt(s.end_p[0]) * l,
                                y2: parseInt(s.end_p[1]) * l
                            },
                            style: {
                                lineCap: "round",
                                lineWidth: g,
                                stroke: c,
                                lineDash: null
                            }
                        });
                        r[s.id] = D, r[s.id].timestamp = s.timestamp, t.zr.add(D);
                    } else if ("1" == s.style) {
                        var S = new a.Line({
                            shape: {
                                x1: parseInt(s.start_p[0]) * l,
                                y1: parseInt(s.start_p[1]) * l,
                                x2: parseInt(s.end_p[0]) * l,
                                y2: parseInt(s.end_p[1]) * l
                            },
                            style: {
                                lineCap: "butt",
                                lineWidth: g,
                                stroke: c,
                                lineDash: [ 2, 2 ]
                            }
                        });
                        r[s.id] = S, r[s.id].timestamp = s.timestamp, t.zr.add(S);
                    } else if ("2" == s.style) {
                        console.log("有箭头线条");
                        var b = t.createArrowHead([ s.start_p[0] * l, s.start_p[1] * l, s.end_p[0] * l, s.end_p[1] * l ], c, g * l), _ = new a.Line({
                            shape: {
                                x1: parseInt(s.start_p[0]) * l,
                                y1: parseInt(s.start_p[1]) * l,
                                x2: parseInt(s.end_p[0]) * l,
                                y2: parseInt(s.end_p[1]) * l
                            },
                            style: {
                                lineCap: "round",
                                lineWidth: g,
                                stroke: c,
                                fill: c
                            }
                        });
                        r[s.id] = [ _, b ], r[s.id].timestamp = s.timestamp, t.zr.add(_), t.zr.add(b);
                    }
                } else if (2 == s.type) {
                    for (var g = parseInt(s.linesize) * l, P = s.p, A = new Array(), k = 0; k < P.length; k++) "[object Array]" === Object.prototype.toString.call(P[k]) ? P[k] = P[k] : P[k] = P[k].split(",");
                    for (var C = 0; C < P.length; C++) A.push([ parseInt(P[C][0]) * l, parseInt(P[C][1]) * l ]);
                    h < 1 && (h = .75);
                    var M = new a.Polyline({
                        style: {
                            lineDash: [ 0, 0 ],
                            opacity: h,
                            stroke: c,
                            lineWidth: g
                        },
                        shape: {
                            points: A,
                            smooth: .5
                        }
                    });
                    r[s.id] = M, r[s.id].timestamp = s.timestamp, t.zr.add(M);
                } else if (9 == s.type || 1 == s.type) {
                    var T;
                    if (T = "[object Array]" === Object.prototype.toString.call(s.p) ? s.p : s.p.split(","), 
                    s.style && 1 == s.style && "" == i) {
                        O = new a.Image({
                            style: {
                                x: parseInt(T[0]) * l,
                                y: parseInt(T[1]) * l,
                                image: "../../assets/icons/point.png",
                                width: 16,
                                height: 16,
                                text: ""
                            }
                        });
                        t.zr.add(O), i = O;
                    } else if (s.style && 0 == s.style && "" == o) {
                        var O = new a.Image({
                            style: {
                                x: parseInt(T[0]) * l,
                                y: parseInt(T[1]) * l,
                                image: "../../assets/icons/pointEx.png",
                                width: 16,
                                height: 16,
                                text: ""
                            }
                        });
                        t.zr.add(O), o = O;
                    } else s.style && 1 == s.style ? i.setStyle({
                        x: parseInt(T[0]) * l,
                        y: parseInt(T[1]) * l
                    }) : o.setStyle({
                        x: parseInt(T[0]) * l,
                        y: parseInt(T[1]) * l
                    });
                    s.style && 1 == s.style ? t.setData({
                        pointer_show: 1
                    }) : t.setData({
                        pointer_show: 2
                    });
                }
            }
        }
    },
    clearAnno: function() {
        var e = this, a = [];
        for (var n in r) r[n] && null != r[n] && (a.push(r[n]), e.zr.remove(r[n]));
        var s = wx.getSystemInfoSync().windowHeight, i = wx.getSystemInfoSync().windowWidth, o = s - 44 - 9 * i / 16;
        e.zr = t.createZrender("drawCanvas", i, o), r = {};
    },
    swiperDemo1: function() {
        this.setData({
            current: 1
        });
    },
    swiperDemo2: function() {
        this.setData({
            current: 2
        });
    },
    swiperDemo3: function() {
        this.setData({
            current: 3
        });
    },
    swiperDemo4: function() {
        this.setData({
            current: 4
        });
    },
    singleTap: function(e) {
        for (var t, a = e.currentTarget.dataset.id, n = e.currentTarget.dataset.qaid, s = this.data.voteAll, i = 0; i < s.length; i++) {
            t = s[i].questions;
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                if ("single" == r.type && r.id == n) for (var l = 0; l < r.items.length; l++) r.items[l].id == a ? (r.items[l].selected = !0, 
                r.answer = l + 1 + "") : r.items[l].selected = !1;
            }
        }
        this.setData({
            voteAll: s
        });
    },
    multTap: function(e) {
        for (var t, a = e.currentTarget.dataset.id, n = this.data.voteAll, s = 0; s < n.length; s++) {
            t = n[s].questions;
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                if ("multi" == o.type) {
                    o.answer = "";
                    for (var r = 0; r < o.items.length; r++) o.items[r].id == a && (o.items[r].selected = !o.items[r].selected), 
                    o.items[r].selected && (o.answer += r + 1 + ",");
                    o.answer = o.answer.substring(0, o.answer.length - 1);
                }
            }
        }
        this.setData({
            voteAll: n
        });
    },
    textInput: function(e) {
        for (var t, a = e.currentTarget.dataset.id, n = this.data.voteAll, s = e.detail.value, i = 0; i < n.length; i++) {
            t = n[i].questions;
            for (var o = 0; o < t.length; o++) "text" == t[o].type && t[o].id == a && (t[o].answer = s, 
            t[o].text = s);
        }
        this.setData({
            voteAll: n
        });
    },
    subVote: function(e) {
        for (var t, a = this.data.voteAll, n = e.currentTarget.dataset.id, s = !1, i = 0; i < a.length; i++) if (a[i].id == n) {
            for (var o = 0; o < a[i].questions.length; o++) {
                var r = a[i].questions[o].items;
                if (r) for (var l = 0; l < r.length; l++) if ("true" == r[l].correct) {
                    s = !0;
                    break;
                }
                if (s) break;
            }
            if ("false" == a[i].skip) for (var d = 0; d < a[i].questions.length; d++) if ("" == a[i].questions[d].answer) return wx.showModal({
                title: "提示",
                content: "强制投票需要回答完所有题目",
                showCancel: !1,
                confirmText: "我知道了",
                confirmColor: "#0078d7"
            }), !1;
            t = a[i], s ? a[i].showAns = !0 : a.splice(i, 1);
            break;
        }
        this.channel.send("submitVote", t), 0 == a.length ? (this.videoContext.play(), this.setData({
            voteAll: a,
            isShowQnaire: !1
        })) : this.setData({
            voteAll: a
        });
    },
    closeNaire: function(e) {
        for (var t = e.currentTarget.dataset.id, a = this, n = a.data.voteAll, s = 0; s < n.length; s++) if (n[s].id == t) {
            n.splice(s, 1);
            break;
        }
        0 == n.length ? (a.videoContext.play(), a.setData({
            voteAll: n,
            isShowQnaire: !1
        })) : a.setData({
            voteAll: n
        });
    },
    screenChange: function(e) {
        var t = e.detail.fullScreen;
        this.setData({
            isFullScreen: t
        });
    },
    exitFull: function(e) {
        this.videoContext.exitFullScreen();
    },
    timeupdate: function(t) {
        t.detail.currentTime != d && (e.globalData.currentTime = t.detail.currentTime, n.initMediaEvent.timeRecord(), 
        Math.abs(t.detail.currentTime - d) > 1 && (this.clearAnno(), 0 == t.detail.currentTime ? this.chat.reset() : this.chat.refreshChat(), 
        n.initMediaEvent.timeupdate(), n.initMediaEvent.seeking(), n.initMediaEvent.seeked()), 
        d = t.detail.currentTime, console.log(e.globalData.currentTime));
    },
    playVideo: function(e) {
        n.initMediaEvent.play(), n.initMediaEvent.playing();
    },
    pauseVideo: function(e) {
        n.initMediaEvent.pause();
    },
    endVideo: function(e) {
        n.initMediaEvent.ended();
    },
    onUnload: function(e) {
        n._open_.refresh();
    },
    checkAds: function() {
        var t = e.globalData.adsInfo;
        if (null != t) if (t.hasOwnProperty("adsId")) {
            if (!(wx.getStorageSync(t.adsId) || !1)) {
                t.show = !0, t.hasOwnProperty("adsBoxStyle") || (t.adsBoxStyle = ""), t.hasOwnProperty("adsInnerStyle") || (t.adsInnerStyle = ""), 
                t.hasOwnProperty("adsImageStyle") || (t.adsImageStyle = ""), t.hasOwnProperty("showAdsPath") || (t.showAdsPath = []), 
                t.hasOwnProperty("showClose") || (t.showClose = !0), t.hasOwnProperty("imageMode") || (t.imageMode = "widthFix");
                s = (n = (a = getCurrentPages())[a.length - 1]).route;
                t.showAdsPath.length > 0 && t.showAdsPath.indexOf(s) < 0 && (t.show = !1), this.setData({
                    adsInfo: t
                });
            }
        } else {
            t.show = !0, t.hasOwnProperty("adsBoxStyle") || (t.adsBoxStyle = ""), t.hasOwnProperty("adsInnerStyle") || (t.adsInnerStyle = ""), 
            t.hasOwnProperty("adsImageStyle") || (t.adsImageStyle = ""), t.hasOwnProperty("showAdsPath") || (t.showAdsPath = []), 
            t.hasOwnProperty("showClose") || (t.showClose = !0), t.hasOwnProperty("imageMode") || (t.imageMode = "widthFix");
            var a = getCurrentPages(), n = a[a.length - 1], s = n.route;
            t.showAdsPath.length > 0 && t.showAdsPath.indexOf(s) < 0 && (t.show = !1), this.setData({
                adsInfo: t
            });
        }
    },
    openAds: function(e) {
        if (e = e.currentTarget.dataset.ads, e.show = !1, this.setData({
            adsInfo: e
        }), e.hasOwnProperty("adsId") && wx.setStorageSync(e.adsId, !0), "link" == e.type && null != e.url && "" != e.url && wx.navigateTo({
            url: "../webview/index?options=" + JSON.stringify(e)
        }), "miniapp" == e.type && null != e.appId && "" != e.appId) {
            var t = "";
            null != e.appPath && (t = e.appPath);
            var a = {};
            null != e.appParam && "" !== e.appParam && (a = e.appParam), wx.navigateToMiniProgram({
                appId: e.appId,
                path: t,
                extraData: a,
                envVersion: "release",
                success: function(e) {
                    console.log("open mini success");
                },
                fail: function() {
                    console.log("open mini error");
                }
            });
        }
    },
    closeAdsClick: function(e) {
        (e = e.currentTarget.dataset.ads).show = !1, this.setData({
            adsInfo: e
        }), e.hasOwnProperty("adsId") && wx.setStorageSync(e.adsId, !0);
    },
    getPhoneNumber: function(t) {
        var a = this.data.adsInfo;
        a.show = !1, this.setData({
            adsInfo: a
        }), a.hasOwnProperty("adsId") && wx.setStorageSync(a.adsId, !0), "getPhoneNumber:ok" === t.detail.errMsg && wx.login({
            success: function(a) {
                wx.request({
                    url: "https://api.huaxun66.cn/mp/user/savePhoneNumber",
                    method: "POST",
                    header: {
                        "content-type": "application/json",
                        token: "e35755230782476ad195a23eae107751"
                    },
                    data: {
                        appid: e.globalData.appid,
                        openid: e.globalData.userInfo.openid,
                        unionid: e.globalData.userInfo.unionid,
                        bannerid: "",
                        encryptedData: t.detail.encryptedData,
                        iv: t.detail.iv,
                        code: a.code
                    },
                    success: function(t) {
                        console.log(t), 0 === t.data.errCode && (e.globalData.userInfo.mobile = t.data.data.mobile, 
                        wx.setStorage({
                            key: "userInfo",
                            data: e.globalData.userInfo,
                            success: function(e) {
                                console.log("========userInfo local save success========");
                            }
                        }));
                    }
                });
            }
        });
    },
    getUserInfo: function(t) {
        console.log(t);
        var a = this.data.adsInfo;
        a.show = !1, this.setData({
            adsInfo: a
        }), a.hasOwnProperty("adsId") && wx.setStorageSync(a.adsId, !0), "getUserInfo:ok" === t.detail.errMsg && (e.globalData.userInfo.nickname = t.detail.userInfo.nickName, 
        e.globalData.userInfo.sex = t.detail.userInfo.gender, e.globalData.userInfo.headimgurl = t.detail.userInfo.avatarUrl, 
        e.globalData.userInfo.country = t.detail.userInfo.country, e.globalData.userInfo.province = t.detail.userInfo.province, 
        e.globalData.userInfo.city = t.detail.userInfo.city, wx.setStorage({
            key: "userInfo",
            data: e.globalData.userInfo,
            success: function(e) {
                console.log("========userInfo local save success========");
            }
        }), wx.login({
            success: function(a) {
                wx.request({
                    url: "https://api.huaxun66.cn/mp/user/getLoginInfo",
                    method: "POST",
                    header: {
                        "content-type": "application/json",
                        token: "e35755230782476ad195a23eae107751"
                    },
                    data: {
                        appid: e.globalData.appid,
                        code: a.code
                    },
                    success: function(a) {
                        if (0 == a.data.errCode) {
                            e.globalData.userInfo.openid = a.data.data.openid, e.globalData.userInfo.unionid = a.data.data.unionid;
                            var n = {
                                appid: e.globalData.appid,
                                openid: e.globalData.userInfo.openid,
                                unionid: e.globalData.userInfo.unionid,
                                nickname: e.globalData.userInfo.nickname,
                                headimgurl: e.globalData.userInfo.headimgurl,
                                sex: e.globalData.userInfo.sex,
                                country: e.globalData.userInfo.country,
                                city: e.globalData.userInfo.city,
                                province: e.globalData.userInfo.province,
                                userid: a.data.data.userid,
                                appname: e.globalData.appname,
                                apptype: "小程序",
                                session_key: a.data.data.session_key,
                                encryptedData: t.detail.encryptedData,
                                iv: t.detail.iv
                            };
                            wx.request({
                                url: "https://api.huaxun66.cn/mp/user/addUser",
                                method: "POST",
                                header: {
                                    "content-type": "application/json",
                                    token: "e35755230782476ad195a23eae107751"
                                },
                                data: n,
                                success: function(t) {
                                    0 == t.data.errCode && (null != t.data.data.unionid && (e.globalData.userInfo.unionid = t.data.data.unionid), 
                                    wx.setStorage({
                                        key: "userInfo",
                                        data: e.globalData.userInfo,
                                        success: function(e) {
                                            console.log("========userInfo local save success========");
                                        }
                                    }));
                                }
                            });
                        }
                    }
                });
            }
        }));
    }
});