function t(t, e, a) {
    return t - e >= 0 && t - e < a || e - t > 0 && e - t < a;
}

function e(t) {
    if ((t = t.data) && t.module && N.isArray(t.module.command)) {
        for (var e = t.module.command, a = {}, n = 0; n < e.length; n++) a[e[n].timestamp] ? a[e[n].timestamp].push(e[n]) : (a[e[n].timestamp] = new Array(), 
        a[e[n].timestamp].push(e[n]));
        for (var i in a) {
            var s = 1e3 * parseFloat(i), r = 1e3 * parseFloat(i) + 1e3;
            A.addTask(P.ANNOTATION, {
                cmd: "anno",
                annoArray: a[i]
            }, s, r, !0, "between"), (o = {}).timestamp = s, o.annoArray = a[i];
            for (l = 0; l < B.pageRecordInfo.length; l++) if (s > B.pageRecordInfo[l].starttimestamp && s < B.pageRecordInfo[l].stoptimestamp) {
                B.pageRecordInfo[l].annodata.push(o);
                break;
            }
        }
    } else if (t && t.module && "[object Object]" == Object.prototype.toString.call(t.module.command)) {
        (a = {})[(e = t.module.command).timestamp] = new Array(), a[e.timestamp].push(e);
        for (var i in a) {
            var s = 1e3 * parseFloat(i), r = 1e3 * parseFloat(i) + 1e3;
            A.addTask(P.ANNOTATION, {
                cmd: "anno",
                annoArray: a[i]
            }, s, r, !0, "between");
            var o = {};
            o.timestamp = s, o.annoArray = a[i];
            for (var l = 0; l < B.pageRecordInfo.length; l++) if (s > B.pageRecordInfo[l].starttimestamp && s < B.pageRecordInfo[l].stoptimestamp) {
                B.pageRecordInfo[l].annodata.push(o);
                break;
            }
        }
    }
}

function a(t) {
    if (t.conf.jsanno && null != t.conf.jsanno) {
        B.record_max_time = 1e3 * parseFloat(t.conf.duration), B.record_MainAnno = t.conf.jsanno, 
        B.hasAnno = !0;
        for (var a = {}, n = 0; n < t.conf.module.length; n++) "multirecord" == t.conf.module[n].name && (a = t.conf.module[n].multirecord);
        if (N.isArray(a)) {
            for (var i = 0, s = [], r = 0; r < a.length; r++) (a[r].jsanno && null != a[r].jsanno || a[r].anno && null != a[r].anno) && (!a[r].jsanno && a[r].anno && (a[r].jsanno = a[r].anno.replace("xml", "js")), 
            s[a[r].jsanno] ? s[a[r].jsanno] && (B.record_jsanno[i] = {
                jsanno: a[r].jsanno,
                starttimestamp: 1e3 * parseFloat(a[r].starttimestamp),
                stoptimestamp: 1e3 * parseFloat(a[r].stoptimestamp),
                duration: 1e3 * parseFloat(a[r].duration)
            }, i++) : (s[a[r].jsanno] = a[r].jsanno, B.record_jsanno[i] = {
                jsanno: a[r].jsanno,
                starttimestamp: 1e3 * parseFloat(a[r].starttimestamp),
                stoptimestamp: 1e3 * parseFloat(a[r].stoptimestamp),
                duration: 1e3 * parseFloat(a[r].duration)
            }, i++));
            B.record_jsanno[0] ? N.ajax({
                type: "GET",
                url: q.visitUrl + B.record_jsanno[0].jsanno,
                dataType: "json",
                success: function(t) {
                    B.record_jsanno_old[B.record_jsanno[0].jsanno] = 1, B.is_pptRecord = 1, e(t);
                },
                error: function(t) {
                    B.record_jsanno = [], B.recordGetMainAnno();
                }
            }) : B.recordGetMainAnno();
        } else if (a.jsanno) {
            var o = a.jsanno;
            B.record_jsanno[0] = {
                jsanno: o,
                starttimestamp: 1e3 * parseFloat(a.starttimestamp),
                stoptimestamp: 1e3 * parseFloat(a.stoptimestamp),
                duration: 1e3 * parseFloat(a.duration)
            }, N.ajax({
                type: "GET",
                url: q.visitUrl + o,
                dataType: "json",
                success: function(t) {
                    B.record_jsanno_old[o] = 1, B.is_pptRecord = 1, e(t);
                },
                error: function(t) {
                    B.record_jsanno = [], B.recordGetMainAnno();
                }
            });
        } else B.recordGetMainAnno();
    }
}

function n(t, e) {
    return t.timestamp - e.timestamp;
}

function i(t) {
    if (N.isArray(t)) {
        t.length > 0 && (R.currentTime = t[t.length - 1].timestamp);
        for (var e = 0; e < t.length; e++) {
            if ((o = {}).list = new Array(), i = (a = 1e3 * parseFloat(t[e].timestamp)) + 1e3, 
            l = t[e].ems) {
                if (N.isArray(l)) for (c = 0; c < l.length; c++) {
                    (m = {}).sender = l[c].sender, m.content = l[c].text, m.submitTime = R.startTime + a, 
                    m.senderId = l[c].senderId, m.senderRole = r(l[c].senderRole);
                    d = {
                        timestamp: a,
                        data: m
                    };
                    R.chathisData.push(d), o.list.push(m);
                } else {
                    (m = {}).sender = l.sender, m.content = l.text, m.submitTime = R.startTime + a, 
                    m.senderId = l.senderId, m.senderRole = r(l.senderRole);
                    d = {
                        timestamp: a,
                        data: m
                    };
                    R.chathisData.push(d), o.list.push(m);
                }
                s(o, a, i);
            }
        }
    } else if (t.timestamp) {
        R.currentTime = t.timestamp;
        var a, i, o = {};
        o.list = new Array(), i = (a = 1e3 * parseFloat(t.timestamp)) + 1e3;
        var l = t.ems;
        if (l) {
            if (N.isArray(l)) for (var c = 0; c < l.length; c++) {
                (m = {}).sender = l[c].sender, m.content = l[c].text, m.submitTime = R.startTime + a, 
                m.senderId = l[c].senderId;
                d = {
                    timestamp: a,
                    data: m
                };
                R.chathisData.push(d), o.list.push(m);
            } else {
                var m = {};
                m.sender = l.sender, m.content = l.text, m.submitTime = R.startTime + a, m.senderId = l.senderId;
                var d = {
                    timestamp: a,
                    data: m
                };
                R.chathisData.push(d), o.list.push(m);
            }
            s(o, a, i);
        }
    }
    R.chathisData.sort(n);
}

function s(t, e, a) {
    if (R.chatSync) A.addTask(P.CHAT, t, e, a, !0, "between"); else {
        var n = {
            starttime: e,
            stoptime: a,
            data: t
        };
        R.chatData.push(n);
    }
}

function r(t) {
    var e = "";
    return "" != t && ((t -= 0) % 2 == 1 && (e += "1,", t -= 1), t % 4 == 2 && (e += "2,", 
    t -= 2), t % 8 == 4 && (e += "4,", t -= 4), t % 16 == 8 && (e += "8,", t -= 8), 
    t - 16 == 0 && (e += "16,"), e.length > 0 && (e = e.substring(0, e.length - 1))), 
    e;
}

function o() {
    for (var t = [ "seek", "pause", "play", "leaveMessage", "submitVote", "playheadTime", "submitMute", "submitVolume", "submitStop", "submitQAList", "submitChatHistory", "submitLeaveMessageList", "showControlBar", "submitAnswerSheet", "setupChatSync", "submitChatSegment", "checkExit" ], e = 0; e < t.length; e++) _.bind(t[e], function e(a) {
        if (U.widgetReady) {
            if (Q(a), "submitStop" == a.type) for (var n = 0; n < t.length; n++) _.unbind(t[n], e);
        } else _.send("onAPIError", {
            api: a.type,
            param: a.data,
            explain: "Core-widget not ready, please wait a moment!",
            type: "9"
        });
    });
}

function l() {
    (A = new G()).addTaskFunction(P.PPT, function(t) {
        z("onDocChange", {
            doc: t.docName,
            title: t.title,
            width: t.width,
            height: t.height,
            hls: t.hls
        }), z("onDocUrl", t);
    }, null), A.addTaskFunction(P.ANNOTATION, function(t) {
        z("onAnno", t);
    }, null), A.addTaskFunction(P.CHAT, function(t) {
        R.chatSync && z("onChat", t);
    }, null), A.addTaskFunction(P.LOTTERY, function(t) {
        z("onLottery", t);
    }, null), A.addTaskFunction(P.VOTE, function(t) {
        z("onVote", t);
    }, null);
}

function c() {
    console.log("[getXmlData]:" + M.xmlUrl), N.isBlank(M.xmlUrl) || N.ajax({
        url: M.xmlUrl,
        dateType: "xml",
        success: function(t) {
            m(t);
        },
        error: function() {
            console.log("[getXmlData] error");
        }
    });
}

function m(t) {
    var e = (t = N.parseXml(t.data)).documentElement;
    if ("5" == N.getXmlNodeAttr(e, "ver") ? (C.hls = N.getXmlNodeAttr(e, "mobilenormal"), 
    C.highHls = N.getXmlNodeAttr(e, "mobilehigh")) : C.hls = N.getXmlNodeAttr(e, "hls"), 
    C.hlsAudioOnly = N.getXmlNodeAttr(e, "hlsaudioonly"), C.duration = N.getXmlNodeAttr(e, "duration"), 
    C.liveTextFile = N.getXmlNodeAttr(e, "livetextfile"), C.jsContent = N.getXmlNodeAttr(e, "js"), 
    C.playing = !0, N.isBlank(C.hls)) C.playing = !1, z("onStatus", {
        type: 4,
        explain: "not support mobile"
    }); else {
        for (var a = e.getElementsByTagName("module"), n = 0; n < a.length; n++) {
            var i = N.getXmlNodeAttr(a[n], "name");
            if ("document" == i) for (var s = a[n].childNodes, r = 0; r < s.length; r++) {
                var o = N.getXmlNodeAttr(s[r], "name"), l = s[r].childNodes;
                if (l) for (f = 0; f < l.length; f++) {
                    var c = l[f];
                    if ("page" == c.nodeName) {
                        var m = {};
                        m.docName = o, m.title = N.getXmlNodeAttr(c, "title"), m.hls = N.getXmlNodeAttr(c, "hls"), 
                        m.startTime = N.getXmlNodeAttr(c, "starttimestamp"), m.endTime = N.getXmlNodeAttr(c, "stoptimestamp"), 
                        m.content = N.getXmlNodeAttr(c, "content"), m.height = N.getXmlNodeAttr(c, "height"), 
                        m.width = N.getXmlNodeAttr(c, "width"), C.docArray.push(m);
                    }
                }
            } else if ("vote" == i || "survey" == i) {
                for (var u = a[n].childNodes, r = 0; r < u.length; r++) if ("command" == u[r].nodeName) {
                    var p = u[r];
                    if ("publish_card" == N.getXmlNodeAttr(p, "type")) continue;
                    (w = {}).id = N.getXmlNodeAttr(p, "id"), w.startTime = N.getXmlNodeAttr(p, "timestamp"), 
                    w.skip = N.getXmlNodeAttr(p, "skip");
                    var h = p.childNodes;
                    w.questions = new Array();
                    for (var f = 0; f < h.length; f++) {
                        var y = h[f];
                        if ("subject" == y.nodeName) w.subject = N.trim(y.textContent); else if ("question" == y.nodeName) {
                            var g = {};
                            g.id = N.getXmlNodeAttr(y, "id"), g.type = N.getXmlNodeAttr(y, "type"), g.answer = N.getXmlNodeAttr(y, "answer"), 
                            g.text = "";
                            var v = y.childNodes;
                            g.items = new Array();
                            for (var T = 0; T < v.length; T++) {
                                var A = v[T];
                                if ("subject" == A.nodeName) g.subject = N.trim(A.textContent); else if ("item" == A.nodeName) {
                                    var j = {};
                                    j.id = N.getXmlNodeAttr(A, "id"), j.option = N.trim(A.textContent), j.correct = N.getXmlNodeAttr(A, "correct"), 
                                    j.selected = N.getXmlNodeAttr(A, "selected"), g.items.push(j);
                                }
                            }
                            w.questions.push(g);
                        }
                    }
                    C.voteSurveyList.push(w);
                }
            } else if ("lottery" == i) for (var k = a[n].childNodes, r = 0; r < k.length; r++) {
                var x = k[r];
                (w = {}).cmd = N.getXmlNodeAttr(x, "cmd"), w.timestamp = N.getXmlNodeAttr(x, "timestamp"), 
                w.info = N.getXmlNodeAttr(x, "info"), N.isBlank(w.cmd) || C.lotteryArray.push(w);
            } else if ("layout" == i) for (var b = a[n].childNodes, r = 0; r < b.length; r++) {
                var I = b[r], w = {};
                w.type = N.getXmlNodeAttr(I, "type"), w.timestamp = N.getXmlNodeAttr(I, "timestamp"), 
                N.isBlank(w.type) || C.layoutArray.push(w);
            }
        }
        U.widgetReady = !0, d();
    }
}

function d() {
    var t = "?siteid=" + M.siteId + "&userid=" + M.userId + "&confid=" + M.confId + "&username=" + encodeURIComponent(M.userName) + "&onlylogin=" + M.onlyLogin;
    if (N.isBlank(M.hostId) || (t += "&hostid=" + M.hostId), t += "&type=0&r=" + new Date().getTime(), 
    N.isBlank(M.alb)) u(); else {
        F.currentAlb = M.alb;
        var e = M.protocolPrex + X + M.alb + "/license" + t;
        N.ajax({
            url: e,
            success: function(t) {
                t = t.data + "", N.isBlank(t) ? u() : p(t);
            },
            error: function(t) {
                u();
            }
        });
    }
}

function u() {
    if (!N.isBlank(M.backAlb)) {
        F.currentAlb = M.backAlb;
        var t = "?siteid=" + M.siteId + "&userid=" + M.userId + "&confid=" + M.confId + "&username=" + encodeURIComponent(M.userName) + "&onlylogin=" + M.onlyLogin;
        N.isBlank(M.hostId) || (t += "&hostid=" + M.hostId), t += "&type=0&r=" + new Date().getTime();
        var e = M.protocolPrex + X + M.backAlb + "/license" + t;
        N.ajax({
            url: e,
            success: function(t) {
                t = t.data + "", N.isBlank(t) ? u() : p(t);
            },
            error: function() {
                console.log("[getSessionIdByBackALb] error");
            }
        });
    }
}

function p(t) {
    var e = t.split(",")[0];
    "-1" == e ? z("onStatus", {
        type: 6,
        explain: "The people is logining."
    }) : "0" == e ? z("onStatus", {
        type: 1,
        explain: "There are not enough license."
    }) : void 0 == e || 0 == e.length ? z("onStatus", {
        type: 7,
        explain: "Request for the service cannot be fulfilled and you cannot join in."
    }) : (F.sessionId = e, F.startTime = new Date().getTime(), f());
}

function h() {
    var t = Math.round(new Date().getTime() - F.startTime), e = 1e3 * Math.round(F.watchMaxDuration), a = 1e3 * C.duration, n = Math.round(1e3 * k.globalData.currentTime), i = "tid=" + M.tid + ",t=" + t + ",d=" + e + ",v=" + a + ",sc=" + M.sc + ",pos=" + n, s = "?siteid=" + M.siteId + "&userid=" + M.userId + "&confid=" + M.confId + "&onlylogin=" + M.onlyLogin + "&type=1&sessionid=" + F.sessionId + "&needlicense=1&other=" + escape(i) + "&username=" + encodeURIComponent(M.userName) + "&r=" + new Date().getTime(), r = M.protocolPrex + X + F.currentAlb + "/license" + s;
    N.ajax({
        url: r
    });
}

function f() {
    N.isBlank(M.xmlUrl) || (q.visitUrl = M.xmlUrl.substring(0, M.xmlUrl.lastIndexOf("/") + 1), 
    q.videoUrl = q.visitUrl + C.hls, q.audioUrl = q.visitUrl + C.hlsAudioOnly), z("onVideoUrl", {
        mediaUrl: q.videoUrl
    }), z("onAudioUrl", {
        mediaUrl: q.audioUrl
    }), U.canPlay = !0, F.keepTimeId = setInterval(function() {
        h();
    }, F.keepInterval), l(), y(), g();
    var t = {};
    N.isBlank(C.jsContent) || (t.supportChatSync = !0), setTimeout(function() {
        _.send("onDataReady", t);
    }, 500);
}

function y() {
    if (!N.isEmpty(C.docArray) && C.docArray.length > 0) {
        var t = {};
        t.list = new Array();
        for (l = 0; l < C.docArray.length; l++) {
            var e = C.docArray[l];
            e.hlsid = e.hls.replace("hls/", "").replace(".png", ""), e.hls = q.visitUrl + e.hls, 
            A.addTask(P.PPT, e, 1e3 * e.startTime, 1e3 * e.endTime, !0, "between");
            var a = {
                doc: e.docName,
                title: e.title,
                starttimestamp: 1e3 * e.startTime,
                stoptimestamp: 1e3 * e.endTime
            };
            t.list.push(a);
            var n = {
                hlsid: e.hlsid,
                starttimestamp: 1e3 * e.startTime,
                stoptimestamp: 1e3 * e.endTime,
                annodata: []
            };
            B.pageRecordInfo.push(n);
        }
        z("onChapter", t);
    }
    if (N.isBlank(C.duration) || z("onFileDuration", {
        duration: 1e3 * C.duration
    }), !N.isEmpty(C.voteSurveyList) && C.voteSurveyList.length > 0) for (l = 0; l < C.voteSurveyList.length; l++) {
        var i = C.voteSurveyList[l], s = 1e3 * i.startTime;
        i.startTime = void 0, A.addTask(P.VOTE, i, s, null);
    }
    if (!N.isEmpty(C.lotteryArray) && C.lotteryArray.length > 0) for (l = 0; l < C.lotteryArray.length; l++) {
        var r = C.lotteryArray[l], o = {};
        "1" == r.cmd ? o.action = "start" : "2" == r.cmd ? (o.action = "stop", o.user = r.info) : o.action = "abort", 
        A.addTask(P.LOTTERY, o, 1e3 * r.timestamp, null);
    }
    if (!N.isEmpty(C.layoutArray) && C.layoutArray.length > 0) for (var l = 0; l < C.layoutArray.length; l++) {
        var c = C.layoutArray[l];
        A.addTask(P.LAYOUT, {
            focus: c.type
        }, 1e3 * c.timestamp, null);
    }
}

function g() {
    if (!N.isBlank(C.jsContent)) try {
        var t = q.visitUrl + C.jsContent;
        N.ajax({
            type: "GET",
            url: t,
            dataType: "json",
            success: function(t) {
                a(t = t.data), R.chatGetSyn(t);
            },
            error: function(t) {}
        });
    } catch (t) {}
    if (!N.isBlank(C.liveTextFile)) try {
        var e = q.visitUrl + C.liveTextFile;
        N.ajax({
            type: "GET",
            url: e,
            success: function(t) {
                for (var e = (t = N.parseXml(t.data)).documentElement.getElementsByTagName("LiveTextItem"), a = new Array(), n = 0; n < e.length; n++) {
                    var i = {}, s = e[n];
                    i.time = N.getXmlNodeAttr(s, "timestamp"), i.lang = N.getXmlNodeAttr(s, "lang"), 
                    i.content = N.trim(s.textContent), a.push(i);
                }
                a.length > 0 && z("onTextWebcast", {
                    list: a
                });
            },
            error: function(t) {}
        });
    } catch (t) {}
}

function v(t) {
    if (N.isEmpty(t) || N.isEmpty(t.id)) return {
        result: !1,
        type: 2,
        explain: "Submission of data is empty."
    };
    if (N.isEmpty(t.questions) || t.questions.length <= 0) return {
        result: !1,
        type: 2,
        explain: "The questions is empty."
    };
    if (N.isEmpty(t.skip)) return {
        result: !1,
        type: 2,
        explain: "The skip is empty."
    };
    if ("true" != t.skip && "false" != t.skip) return {
        result: !1,
        type: 1,
        explain: "The value of skip is error."
    };
    for (var e = 0; e < t.questions.length; e++) {
        var a = t.questions[e];
        if (N.isEmpty(a.id)) return {
            result: !1,
            type: 2,
            explain: "The id of question is empty."
        };
        if ("text" != a.type && "multi" != a.type && "single" != a.type) return {
            result: !1,
            type: 2,
            explain: "The type of question is empty."
        };
        if ("text" != a.type) {
            if (N.isEmpty(a.answer) && "true" != t.skip) return {
                result: !1,
                type: 2,
                explain: "The answer of question is empty."
            };
        } else if (N.isEmpty(a.text) && "true" != t.skip) return {
            result: !1,
            type: 2,
            explain: "The text of question is empty."
        };
    }
    return {
        result: !0
    };
}

function T(t) {
    for (var e = N.createXml({
        nodeName: "voteSubmit",
        attrArray: [ {
            name: "tid",
            value: M.tid
        }, {
            name: "siteid",
            value: M.siteId
        }, {
            name: "userid",
            value: M.userId
        }, {
            name: "username",
            value: M.userName
        }, {
            name: "confid",
            value: M.confId
        }, {
            name: "live",
            value: "false"
        } ]
    }, "UTF-8"), a = N.createNode({
        nodeName: "command",
        attrArray: [ {
            name: "id",
            value: t.id
        } ]
    }), n = t.questions, i = 0; i < n.length; i++) {
        var s = n[i], r = N.createNode({
            nodeName: "question",
            attrArray: [ {
                name: "id",
                value: s.id
            } ]
        });
        if ("text" == s.type) {
            if ("" != N.trim(s.text)) {
                m = N.createNode({
                    nodeName: "item",
                    value: s.text,
                    attrArray: [ {
                        name: "idx",
                        value: 0
                    } ]
                });
                r = N.addNode(r, m);
            }
        } else if ("" != N.trim(s.answer)) for (var o = s.answer.split(","), l = 0; l < o.length; l++) {
            var c = o[l] - 1, m = N.createNode({
                nodeName: "item",
                attrArray: [ {
                    name: "idx",
                    value: c
                } ]
            });
            r = N.addNode(r, m);
        }
        a = N.addNode(a, r);
    }
    e = N.addNode(e, a), N.ajax({
        type: "POST",
        url: M.xmlApi,
        data: e
    });
}

var A, j, k = getApp(), x = require("./gssdk.js"), b = x.GS, N = x.tool, I = (x.DOMParser, 
{}), w = "", _ = null, L = "", S = "http://", D = "0", O = "", E = "", X = "", M = {
    containerId: "",
    xmlUrl: "",
    protocolPrex: "http://",
    sslSupport: !1,
    siteId: 0,
    userId: 0,
    userName: "",
    confId: "",
    hostId: 0,
    tid: "",
    sc: "sc=0",
    onlyLogin: "0",
    alb: "",
    backAlb: "",
    xmlApi: "",
    albProxy: "",
    video: !0
}, C = {
    hls: "",
    highHls: "",
    hlsAudioOnly: "",
    duration: "",
    liveTextFile: "",
    jsContent: "",
    playing: !1,
    voteSurveyList: new Array(),
    lotteryArray: new Array(),
    layoutArray: new Array(),
    docArray: new Array()
}, F = {
    sessionId: "",
    currentAlb: "",
    startTime: 0,
    lastTime: 0,
    watchMaxDuration: 0,
    keepTimeId: 0,
    keepInterval: 1e4
}, P = {
    PPT: "gensee_task_ppt",
    VOTE: "gensee_task_vote",
    LOTTERY: "gensee_task_lottery",
    LAYOUT: "gensee_task_layout",
    CHAT: "gensee_task_chat",
    ANNOTATION: "gensee_task_annotation"
}, q = {
    media: null,
    visitUrl: "",
    videoUrl: "",
    audioUrl: "",
    lowVideoUrl: ""
}, U = {
    firstPlay: !0,
    firstCanPlay: !0,
    canPlay: !1,
    seeking: !1
}, R = {
    startTime: "",
    duration: "",
    chatMainFile: "",
    chatList: [],
    requestedData: {},
    lastTime: 0,
    chathisData: [],
    chatData: [],
    currentTime: 0,
    xmlChat: !1,
    sliceStartTime: 0,
    sliceEndTime: 0,
    chatSync: !1,
    allHisFirst: !0,
    allLastSeekTime: 0,
    playTime: 0
}, B = {
    is_pptRecord: 0,
    record_max_time: 0,
    record_jsanno: [],
    record_jsanno_old: {},
    record_MainAnno: "",
    hasAnno: !1,
    pageRecordInfo: []
}, G = function(e) {
    this.taskArray = new Array(), this.taskFunction = new Array(), this.defaultOpt = {
        interval: 500,
        deviations: 550,
        status: !1
    }, this.timeOutObj = null, this.dealTask = !1, this.i = 0;
    var a = this;
    this.timeOut = function() {
        a.dealTask = !0;
        var e = a.taskArray, n = a.taskFunction;
        if (e.length > 0) {
            var i = 1e3 * k.globalData.currentTime;
            if (i >= 0) for (var s = 0; s < e.length; s++) {
                var r = e[s];
                if ("usual" == r.deal) if (N.isEmpty(r.startTime)) {
                    for (var o = r.type, l = 0; l < n.length; l++) if ((c = n[l]).type == o) {
                        c.startFun.call(this, r.data);
                        break;
                    }
                    e.splice(s, 1), s--;
                } else {
                    if (t(i, r.startTime, a.defaultOpt.deviations)) {
                        if (N.isEmpty(r.startTimeDeal) || !r.startTimeDeal) {
                            for (var o = r.type, l = 0; l < n.length; l++) if ((c = n[l]).type == o) {
                                r.startTimeDeal = !0, c.startFun.call(this, r.data);
                                break;
                            }
                            r.forever || (e.splice(s, 1), s--);
                        }
                    } else r.startTimeDeal = !1;
                    if (!N.isEmpty(r.endTime)) if (t(i, r.endTime, a.defaultOpt.deviations)) {
                        o = r.type;
                        if (N.isEmpty(r.endTimeDeal) || !r.endTimeDeal) for (l = 0; l < n.length; l++) if ((c = n[l]).type == o) {
                            r.endTimeDeal = !0, c.startFun.call(this, r.data);
                            break;
                        }
                    } else r.endTimeDeal = !1;
                } else if ("between" == r.deal) if (i >= r.startTime && i <= r.endTime || i >= r.startTime && N.isEmpty(r.endTime)) {
                    if (!r.deal_all) {
                        for (var o = r.type, l = 0; l < n.length; l++) {
                            var c = n[l];
                            if (c.type == o) {
                                r.deal_all = !0, c.startFun.call(this, r.data);
                                break;
                            }
                        }
                        r.forever || (e.splice(s, 1), s--);
                    }
                } else r.deal_all = !1; else r.fun.call(this, r.data) && (e.splice(s, 1), s--);
            }
        }
        a.dealTask = !1;
    };
};

G.prototype.switchMedia = function(t) {
    this.media = media;
}, G.prototype.setInterval = function(t) {
    var e = this;
    return !this.dealTask && (this.defaultOpt.interval = t, this.defaultOpt.status && (clearInterval(this.timeOutObj), 
    this.timeOutObj = setInterval(function() {
        e.timeOut();
    }, this.defaultOpt.interval)), !0);
}, G.prototype.start = function() {
    var t = this;
    this.defaultOpt.status || (this.timeOutObj = setInterval(function() {
        t.timeOut();
    }, this.defaultOpt.interval), this.defaultOpt.status = !0);
}, G.prototype.stop = function() {
    return !this.dealTask && (clearInterval(this.timeOutObj), this.defaultOpt.status = !1, 
    this.timeOutObj = null, !0);
}, G.prototype.addTaskFunction = function(t, e, a) {
    var n = this.taskFunction;
    if (N.isEmpty(t)) return !1;
    if (!N.isFunction(e)) return !1;
    var i = {
        type: t,
        startFun: e
    };
    return N.isFunction(a) ? i.endFun = a : i.endFun = function() {}, n.push(i), !0;
}, G.prototype.clear = function() {
    this.taskArray = new Array(), this.taskFunction = new Array(), this.defaultOpt = {
        interval: 500,
        deviations: 550,
        status: !1
    }, this.dealTask = !1, this.i = 0;
}, G.prototype.addTask = function(t, e, a, n, i, s) {
    var r = this.taskArray;
    if (N.isEmpty(t)) return !1;
    N.isEmpty(i) && (i = !0), N.isEmpty(s) && (s = "usual");
    var o = {
        type: t,
        data: e,
        startTime: a,
        endTime: n,
        forever: i,
        deal: s,
        deal_all: !1
    };
    return r.push(o), !0;
};

var H = {
    chatMore: !0,
    qaMore: !0,
    chatPage: 1,
    qaPage: 1,
    chatDeal: function(t) {
        var e = this;
        if (this.chatMore) {
            var a = '<?xml version="1.0" encoding="utf-8"?><chatHistory siteid="' + M.siteId + '" userid="' + M.userId + '" confid="' + M.confId + '" live="false" page="' + this.chatPage + '"/>';
            N.ajax({
                url: M.xmlApi,
                data: a,
                type: "POST",
                success: function(a) {
                    var a = N.formatXml(a.data), n = {};
                    if (!N.isEmpty(a)) {
                        var i = new Array(), s = a.documentElement.getElementsByTagName("chatlist");
                        n.more = !1;
                        for (var r = 0; r < s.length; r++) {
                            n.more = N.getXmlNodeAttr(s[r], "more"), n.page = N.getXmlNodeAttr(s[r], "page");
                            for (var o = s[r].getElementsByTagName("chat"), l = 0; l < o.length; l++) {
                                var c = {};
                                c.content = N.getNodeValue(o[l]), c.submitTime = N.getXmlNodeAttr(o[l], "time"), 
                                c.senderId = N.getXmlNodeAttr(o[l], "senderId"), i.push(c);
                            }
                        }
                        n.list = i;
                    }
                    "true" != n.more && (e.chatMore = !1), N.isBlank(n.page) ? e.chatPage = e.chatPage + 1 : e.chatPage = n.page - 0 + 1, 
                    t.call(this, n);
                }
            });
        }
    },
    qaDeal: function(t) {
        var e = this;
        if (this.qaMore) {
            var a = '<?xml version="1.0" encoding="utf-8"?><qaHistory siteid="' + M.siteId + '" userid="' + M.userId + '" confid="' + M.confId + '" live="false" page="' + this.qaPage + '"/>';
            N.ajax({
                url: M.xmlApi,
                data: a,
                type: "POST",
                success: function(a) {
                    var a = N.formatXml(a.data), n = {};
                    if (!N.isEmpty(a)) {
                        var i = a.documentElement;
                        n.more = N.getXmlNodeAttr(i, "more");
                        for (var s = i.getElementsByTagName("qa"), r = new Array(), o = 0; o < s.length; o++) {
                            var l = {};
                            l.id = N.getXmlNodeAttr(s[o], "id"), l.question = N.getXmlNodeAttr(s[o], "question"), 
                            l.submitor = N.getXmlNodeAttr(s[o], "questionowner"), l.answer = N.getXmlNodeAttr(s[o], "answer"), 
                            l.answerBy = N.getXmlNodeAttr(s[o], "answerowner"), l.submitTime = N.getXmlNodeAttr(s[o], "questiontimestamp"), 
                            l.answerTime = N.getXmlNodeAttr(s[o], "qaanswertimestamp"), l.submitorId = N.getXmlNodeAttr(s[o], "questionownerid"), 
                            l.answererId = N.getXmlNodeAttr(s[o], "answerownerid"), r.push(l);
                        }
                        n.list = r;
                    }
                    "true" != n.more && (e.chatMore = !1), N.isBlank(n.page) ? e.qaPage = e.qaPage + 1 : e.qaPage = n.page - 0 + 1, 
                    t.call(this, n);
                }
            });
        }
    },
    msgDeal: function(t) {
        var e = '<?xml version="1.0" encoding="utf-8"?><leaveMsgHistory siteid="' + M.siteId + '" userid="' + M.userId + '" confid="' + M.confId + '" live="false"/>';
        N.ajax({
            url: M.xmlApi,
            data: e,
            type: "POST",
            success: function(e) {
                var e = N.formatXml(e.data), a = {};
                if (!N.isEmpty(e)) {
                    for (var n = e.documentElement, i = new Array(), s = n.getElementsByTagName("msg"), r = 0; r < s.length; r++) {
                        var o = {};
                        o.id = N.getXmlNodeAttr(s[r], "id"), o.question = N.getXmlNodeAttr(s[r], "question"), 
                        o.submitTime = N.getXmlNodeAttr(s[r], "questiontimestamp"), o.submitor = N.getXmlNodeAttr(s[r], "questionowner"), 
                        o.answerTime = N.getXmlNodeAttr(s[r], "qaanswertimestamp"), o.answerBy = N.getXmlNodeAttr(s[r], "answerowner"), 
                        o.answer = N.getXmlNodeAttr(s[r], "answer"), i.push(o);
                    }
                    a.list = i;
                }
                t.call(this, a);
            }
        });
    }
};

B.recordDrawTime = function(t) {
    if (!(t >= B.record_max_time) && B.record_jsanno.length > 1) for (var a = 0; a < B.record_jsanno.length; a++) if (B.record_jsanno[a].starttimestamp <= t && B.record_jsanno[a].stoptimestamp > t) {
        if (B.record_jsanno_old[B.record_jsanno[a].jsanno]) return;
        B.record_jsanno_old[B.record_jsanno[a].jsanno] = 1, N.ajax({
            type: "GET",
            url: q.visitUrl + B.record_jsanno[a].jsanno,
            dataType: "json",
            success: function(t) {
                e(t);
            },
            error: function(e) {
                B.record_jsanno = [], B.recordGetMainAnno(t);
            }
        });
        break;
    }
}, B.recordGetMainAnno = function(t) {
    B.record_MainAnno && (B.record_jsanno[0] = {
        jsanno: B.record_MainAnno,
        starttimestamp: 0,
        stoptimestamp: B.record_max_time,
        duration: B.record_max_time
    }, t ? B.record_jsanno_old[B.record_MainAnno] || N.ajax({
        type: "GET",
        url: q.visitUrl + +B.record_MainAnno,
        dataType: "json",
        success: function(t) {
            B.record_jsanno_old[B.record_MainAnno] = 1, e(t);
        },
        error: function(t) {}
    }) : N.ajax({
        type: "GET",
        url: q.visitUrl + B.record_MainAnno,
        dataType: "json",
        success: function(t) {
            B.record_jsanno_old[B.record_MainAnno] = 1, B.is_pptRecord = 1, e(t);
        },
        error: function(t) {}
    }));
}, B.recordSeekTime = function(t) {
    if (B.hasAnno && B.pageRecordInfo.length > 0) {
        z("onAnno", {
            cmd: "clear"
        });
        for (var e = new Array(), a = 0; a < B.pageRecordInfo.length; a++) if (t > B.pageRecordInfo[a].starttimestamp && t < B.pageRecordInfo[a].stoptimestamp) {
            var n = B.pageRecordInfo[a];
            if (n.annodata.length > 0) for (var i = 0; i < n.annodata.length && n.annodata[i].timestamp <= t; i++) for (var s = 0; s < n.annodata[i].annoArray.length; s++) e.push(n.annodata[i].annoArray[s]);
            break;
        }
        e.length > 0 && z("onAnno", {
            cmd: "anno",
            annoArray: e
        });
    }
}, R.addAllSyn = function() {
    if (R.chatData.length > 0) for (var t = 0; t < R.chatData.length; t++) {
        var e = R.chatData[t];
        s(e.data, e.starttime, e.stoptime);
    }
    R.chatData = [];
}, R.chatGetSyn = function(t) {
    if (R.xmlChat = !0, t.conf.jschat && null != t.conf.jschat) {
        var e = new Date().getTimezoneOffset(), a = new Date(t.conf.starttime.replace(/\-/g, "/")).getTime();
        R.startTime = a - 60 * e * 1e3, R.duration = 1e3 * parseFloat(t.conf.duration), 
        R.chatMainFile = t.conf.jschat;
        for (var n = {}, s = 0; s < t.conf.module.length; s++) if ("multirecord" == t.conf.module[s].name) {
            n = t.conf.module[s].multirecord;
            break;
        }
        if (n && N.isArray(n)) {
            for (var r = [], o = 0, l = 0; l < n.length; l++) n[l].chat && null != n[l].chat && (r[n[l].chat] ? R.chatList[o - 1].stoptimestamp = 1e3 * parseFloat(n[l].stoptimestamp) : (r[n[l].chat] = n[l].chat, 
            R.chatList[o] = {
                jschat: n[l].jschat,
                starttimestamp: 1e3 * parseFloat(n[l].starttimestamp),
                stoptimestamp: 1e3 * parseFloat(n[l].stoptimestamp),
                duration: 1e3 * parseFloat(n[l].duration)
            }, o++));
            R.chatList.length > 0 ? (R.requestedData[R.chatList[0].jschat] = 1, N.ajax({
                type: "GET",
                url: q.visitUrl + R.chatList[0].jschat,
                dataType: "json",
                success: function(t) {
                    (t = t.data) && t.module && t.module.chat && i(t.module.chat);
                },
                error: function(t) {
                    1 == R.chatList.length && R.chatGetMain();
                }
            })) : R.chatGetMain();
        } else if (n && n.jschat) {
            var c = n.jschat;
            N.ajax({
                type: "GET",
                url: q.visitUrl + c,
                dataType: "json",
                success: function(t) {
                    (t = t.data) && t.module && t.module.chat && i(t.module.chat);
                },
                error: function(t, e) {
                    R.chatGetMain();
                }
            });
        } else R.chatGetMain();
    }
}, R.chatGetMain = function(t) {
    R.chatList = [], R.chatMainFile && N.ajax({
        type: "GET",
        url: q.visitUrl + R.chatMainFile,
        dataType: "json",
        success: function(t) {
            (t = t.data) && t.module && t.module.chat && i(t.module.chat);
        },
        error: function(t) {}
    });
}, R.chatCurrent = function(t) {
    if (!(t >= R.duration) && (t - R.playTime > 3e3 && (R.lastTime = t, B.recordSeekTime(t), 
    U.seeking = !1), R.playTime = t, R.chatList.length > 1)) for (var e = 0; e < R.chatList.length; e++) t >= R.chatList[e].starttimestamp && t <= R.chatList[e].stoptimestamp && (R.requestedData[R.chatList[e].jschat] || (R.requestedData[R.chatList[e].jschat] = 1, 
    N.ajax({
        type: "GET",
        url: q.visitUrl + R.chatList[e].jschat,
        dataType: "json",
        success: function(t) {
            (t = t.data) && t.module && t.module.chat && i(t.module.chat);
        },
        error: function(t) {}
    })));
}, R.chatslice = function(t, e) {
    R.requestedData[R.chatList[t].jschat] = 1, N.ajax({
        type: "GET",
        url: q.visitUrl + R.chatList[t].jschat,
        dataType: "json",
        success: function(t) {
            (t = t.data) && t.module && t.module.chat && i(t.module.chat), R.getMoreChat(e);
        },
        error: function(t) {
            R.getMoreChat(e);
        }
    });
}, R.getMoreChat = function(t) {
    var e = {
        more: !1,
        list: []
    }, a = [], i = 0;
    if (0 != R.lastTime) if (R.chatList.length <= 1) {
        R.sliceStartTime = 0;
        for (var s = 0, r = 0, o = c = (l = R.chathisData).length - 1; o >= 0 && s < 100; o--) if (l[o].timestamp < R.lastTime && l[o].timestamp >= R.sliceStartTime) {
            if (a.push(l[o]), r = o, 99 == s && o > 0) for (m = o - 1; m >= 0 && l[o].timestamp == l[m].timestamp; m--) a.push(l[m]);
            s++;
        }
        0 != s && 0 != r && 100 == s && r < c && (e.more = !0);
    } else {
        for (o = 0; o < R.chatList.length; o++) if (R.chatList[o].starttimestamp < R.lastTime && R.chatList[o].stoptimestamp >= R.lastTime) {
            if (o >= 1) for (m = o - 1; m >= 0; m--) {
                if (!R.requestedData[R.chatList[m].jschat]) {
                    i = m;
                    break;
                }
                R.sliceStartTime = R.chatList[m].starttimestamp;
            }
            break;
        }
        for (var l = R.chathisData, s = 0, c = l.length - 1, r = 0, o = c; o >= 0 && s < 100; o--) if (l[o].timestamp < R.lastTime && l[o].timestamp >= R.sliceStartTime) {
            if (a.push(l[o]), r = o, 99 == s && o > 0) for (var m = o - 1; m >= 0 && l[o].timestamp == l[m].timestamp; m--) a.push(l[m]);
            s++;
        }
        if (0 != s && 0 != r && 100 == s && r < c) e.more = !0; else if (0 == s && 0 == r && 0 != i) return void R.chatslice(i, t);
    }
    if (a.sort(n), a.length >= 1) {
        R.lastTime = a[0].timestamp;
        for (o = 0; o < a.length; o++) e.list.push(a[o].data);
        t.call(this, e);
    } else t.call(this, e);
}, R.chatAllslice = function(t, e) {
    R.requestedData[R.chatList[t].jschat] = 1, N.ajax({
        type: "GET",
        url: q.visitUrl + R.chatList[t].jschat,
        dataType: "json",
        success: function(t) {
            (t = t.data) && t.module && t.module.chat && i(t.module.chat), R.getMoreAllChat(e);
        },
        error: function(t) {
            R.getMoreAllChat(e);
        }
    });
}, R.getMoreAllChat = function(t) {
    var e = {
        more: !1,
        list: []
    }, a = [], i = 0;
    if (R.lastTime < R.duration) if (R.chatList.length <= 1) {
        R.allSliceStartTime = 0;
        for (var s = 0, r = (c = R.chathisData).length - 1, o = 0, l = 0; l <= r && s < 100; l++) if (c[l].timestamp > R.allLastSeekTime) {
            if (a.push(c[l]), o = l, 99 == s && l < r) for (m = l + 1; m <= r && c[l].timestamp == c[m].timestamp; m++) a.push(c[m]);
            s++;
        }
        0 != s && 0 != o && 100 == s && o < r && (e.more = !0);
    } else {
        R.sliceEndTime = R.chatList[0].stoptimestamp;
        for (l = 0; l < R.chatList.length; l++) if (R.chatList[l].starttimestamp < R.allLastSeekTime && R.chatList[l].stoptimestamp >= R.allLastSeekTime) {
            R.sliceEndTime = R.chatList[l].stoptimestamp;
            for (m = l + 1; m < R.chatList.length; m++) {
                if (!R.requestedData[R.chatList[m].jschat]) {
                    i = m;
                    break;
                }
                R.sliceEndTime = R.chatList[m].stoptimestamp;
            }
            break;
        }
        for (var c = R.chathisData, s = 0, r = c.length - 1, o = 0, l = 0; l <= r && s < 100; l++) if (c[l].timestamp > R.allLastSeekTime && c[l].timestamp <= R.sliceEndTime) {
            if (a.push(c[l]), o = l, 99 == s && l < r) for (var m = l + 1; m <= r && c[l].timestamp == c[m].timestamp; m++) a.push(c[m]);
            s++;
        }
        if (0 != s && 0 != o && 100 == s && o < r) e.more = !0; else if (0 == s && 0 == o && 0 != i) return void R.chatAllslice(i, t);
    }
    if (a.sort(n), a.length >= 1) {
        R.allLastSeekTime = a[a.length - 1].timestamp;
        for (l = 0; l < a.length; l++) e.list.push(a[l].data);
        t.call(this, e);
    } else t.call(this, e);
};

var V = {
    seek: function(t) {},
    pause: function(t) {},
    play: function(t) {},
    playheadTime: function(t) {
        var e = k.globalData.currentTime;
        z("onPlayheadTime", {
            playheadTime: 1e3 * e
        });
    },
    submitVote: function(t) {
        var e = t.data, a = v(e);
        if (a.result) T(e); else {
            var n = {};
            n.api = "submitVote", n.param = e, n.explain = a.explain, n.type = a.type, z("onAPIError", n);
        }
    },
    leaveMessage: function(t) {
        var e = t.data;
        if (N.isEmpty(e) || N.isBlank(e.content)) {
            var a = {};
            a.api = "leaveMessage", a.param = e, a.explain = "The data format is error or is null.", 
            a.type = 1, z("onAPIError", a);
        } else {
            var n = '<?xml version="1.0" encoding="UTF-8"?>';
            n = (n = (n = n + "<qaSubmit><siteId>" + M.siteId + "</siteId>") + "<confId>" + M.confId + "</confId>") + "<userId>" + M.userId + "</userId>", 
            n = (n = (n = (n += "<isLive>false</isLive>") + "<userName><![CDATA[" + M.userName + "]]></userName>") + "<question><![CDATA[" + e.content + "]]></question><filter>false</filter>") + "<email><![CDATA[" + e.email + "]]></email></qaSubmit>", 
            N.ajax({
                type: "post",
                url: M.xmlApi,
                data: n
            });
        }
    },
    submitMute: function(t) {},
    submitVolume: function(t) {},
    submitStop: function(t) {},
    submitQAList: function(t) {
        H.qaDeal(function(t) {
            z("onQAList", t);
        });
    },
    submitChatHistory: function(t) {
        R.xmlChat ? R.getMoreAllChat(function(t) {
            z("onChatHistory", t);
        }) : H.chatDeal(function(t) {
            z("onChatHistory", t);
        });
    },
    submitChatSegment: function(t) {
        R.xmlChat && R.chatSync && R.getMoreChat(function(t) {
            z("onChatSegmentList", t);
        });
    },
    submitLeaveMessageList: function(t) {
        H.msgDeal(function(t) {
            z("onLeaveMessageList", t);
        });
    },
    setupChatSync: function(t) {
        var e = t.data;
        R.xmlChat && e.open ? (R.chatSync = !0, R.addAllSyn()) : R.chatSync = !1;
    }
}, Y = function(t) {
    return V[t];
}, Q = function(t) {
    var e = Y(t.type);
    void 0 != e && "function" == typeof e ? e.call(this, t) : z("onAPIError", {
        api: t.type,
        expalin: "The api name is error"
    });
}, z = function(t, e) {
    setTimeout(function() {
        _.send(t, e);
    }, 0);
};

I._open_ = {
    init: function(t) {
        var e = {};
        _ = k.globalData.channel, j = _.id, N.checkObjectIsNull(t.site) && (e.api = "init", 
        e.param = t.site, e.explain = "Parameter site miss", e.type = 2), N.checkObjectIsNull(t.ownerid) && (e.api = "init", 
        e.param = t.ownerid, e.explain = "Parameter ownerid miss", e.type = 2), N.checkObjectIsNull(t.uid) && (t.uid = ""), 
        N.checkObjectIsNull(t.uname) && (t.uname = ""), N.checkObjectIsNull(t.encodetype) && (t.encodetype = ""), 
        N.checkObjectIsNull(t.password) && (t.password = ""), N.checkObjectIsNull(t.ownerid) && (t.ownerid = ""), 
        N.checkObjectIsNull(t.ctx) && (t.ctx = "webcast"), N.checkObjectIsNull(t.authcode) && (t.authcode = ""), 
        N.checkObjectIsNull(t.k) && (t.k = ""), N.checkObjectIsNull(t.istest) && (t.istest = !1);
        var a;
        a = t.istest ? "http://" : "https://", "training" === t.ctx ? (a += t.site + "/sdk/site/sdk/tra/vod/wxconfig", 
        w = 1) : (a += t.site + "/sdk/site/sdk/vod/wxconfig", w = ""), a += "?ownerid=" + t.ownerid + "&authcode=" + t.authcode + "&uid=" + t.uid + "&uname=" + t.uname + "&encodetype=" + t.encodetype + "&password=" + t.password + "&k=" + t.k + "&istest=" + t.istest + "&scType=" + w, 
        console.log("init url:" + a), wx.request({
            url: a,
            header: {
                "content-type": "application/json",
                "cache-control": "no-cache"
            },
            success: function(a) {
                var n = a.data;
                "success" == n.type ? (n.sslSupport && !t.istest ? (L = n.xmlUrl.replace("http://", "https://"), 
                L = L.replace("https://", "https://" + n.wxxApi), S = "https://") : (L = n.xmlUrl, 
                S = "http://"), n.vodKickOut && (D = "1"), N.checkObjectIsNull(n.connectSvr) || (O = n.connectSvr), 
                N.checkObjectIsNull(n.bakConnectSvr) || (E = n.bakConnectSvr), M.xmlApi = n.siteUrl + n.xmlapiContextPath + "/apichannel", 
                "" != n.scType && void 0 != n.scType && (M.xmlApi += "?sc=" + n.scType), M.containerId = j, 
                M.xmlUrl = L, M.protocolPrex = S, M.sslSupport = n.sslSupport, M.siteId = n.siteId, 
                M.userId = n.uid, M.userName = n.userName, M.confId = t.ownerid, M.hostId = n.hostId, 
                M.tid = n.tkId, M.onlyLogin = D, M.alb = O, M.backAlb = E, M.albProxy = w, M.sc = w, 
                X = t.istest ? "" : n.wxxApi, _.send("onTitle", {
                    content: n.subject
                }), o(), c()) : (e.api = "init", e.param = n, e.explain = "Vod Background check is not passed:" + JSON.stringify(n) + "-----type:" + n.type + "-----desc:" + n.desc, 
                e.type = 1, N.checkObjectIsNull(e) || _.send("onAPIError", e));
            },
            fail: function(a) {
                e.api = "init", e.param = "site:" + t.site, e.explain = "vod fail:" + a.errMsg, 
                e.type = 1, N.checkObjectIsNull(e) || _.send("onAPIError", e);
            }
        });
    },
    refresh: function() {
        j && b.clearChannel(), A.stop && (A.clear(), A.stop()), C = {
            hls: "",
            highHls: "",
            hlsAudioOnly: "",
            duration: "",
            liveTextFile: "",
            jsContent: "",
            playing: !1,
            voteSurveyList: new Array(),
            lotteryArray: new Array(),
            layoutArray: new Array(),
            docArray: new Array()
        }, U = {
            firstPlay: !0,
            firstCanPlay: !0,
            canPlay: !1,
            seeking: !1
        }, M = {
            containerId: "",
            xmlUrl: "",
            protocolPrex: "http://",
            sslSupport: !1,
            siteId: 0,
            userId: 0,
            userName: "",
            confId: "",
            hostId: 0,
            tid: "",
            sc: "sc=0",
            onlyLogin: "0",
            alb: "",
            backAlb: "",
            xmlApi: "",
            albProxy: "",
            video: !0
        }, clearInterval(F.keepTimeId), F = {
            sessionId: "",
            currentAlb: "",
            startTime: 0,
            lastTime: 0,
            watchMaxDuration: 0,
            keepTimeId: 0,
            keepInterval: 1e4
        }, R.startTime = "", R.duration = "", R.chatMainFile = "", R.chatList = [], R.requestedData = {}, 
        R.lastTime = 0, R.chathisData = [], R.chatData = [], R.currentTime = 0, R.xmlChat = !1, 
        R.sliceStartTime = 0, R.sliceEndTime = 0, R.chatSync = !1, R.allHisFirst = !0, R.allLastSeekTime = 0, 
        R.playTime = 0, B.is_pptRecord = 0, B.record_max_time = 0, B.record_jsanno = [], 
        B.record_jsanno_old = {}, B.record_MainAnno = "", B.hasAnno = !1, B.pageRecordInfo = [], 
        H.chatMore = !0, H.qaMore = !0, H.chatPage = 1, H.qaPage = 1, w = "";
    }
}, I.initMediaEvent = {
    play: function() {
        U.firstPlay ? (A.start(), U.firstPlay = !1, z("loadStart", {})) : z("onPlay", {
            timestamp: 1e3 * k.globalData.currentTime
        });
    },
    pause: function() {
        z("onPause", {
            timestamp: 1e3 * k.globalData.currentTime
        });
    },
    ended: function() {
        z("onStop", {});
    },
    playing: function() {
        U.firstCanPlay && (U.firstCanPlay = !1, z("onStatus", {
            type: 9,
            explain: "media can play"
        }));
    },
    seeked: function() {
        if (U.seeking) {
            U.seeking = !1;
            var t = 1e3 * parseFloat(k.globalData.currentTime);
            z("onSeekCompleted", {
                timestamp: t
            }), R.lastTime = t, R.playTime = t, B.recordSeekTime(t);
        }
    },
    seeking: function() {
        U.seeking = !0;
    },
    timeupdate: function() {
        var t = k.globalData.currentTime, e = 1e3 * parseFloat(t);
        B.recordDrawTime(e), R.chatCurrent(e);
    },
    timeRecord: function() {
        var t = k.globalData.currentTime;
        t > F.lastTime && (F.watchMaxDuration += t - F.lastTime), F.lastTime = t;
    }
}, module.exports = I;