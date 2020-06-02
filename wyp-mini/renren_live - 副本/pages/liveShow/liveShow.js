function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

function i() {
    if (Qt && 1 == ni) {
        ni = 0, ii = 0;
        var e = {}, t = B(Ot);
        Ot = "", Tt.setData({
            inputStr: "",
            focus: !1
        }), e.userId = Fe.currentUser.uid, e.type = 0, e.name = Fe.currentUser.user_name, 
        e.level = Fe.currentUser.level, e.Content = t, e.userVipState = Fe.currentUser.userVipState, 
        e.x = st + dt, e.y = Ye, e.width = dt, e.height = ot, e.size = ot, v(e), e.tr = I(e), 
        e.height = ot * e.tr.length, setTimeout(function() {
            Pt.unshift(e), pe(t);
        }, 66);
    }
}

function n() {
    var e = {}, t = "@" + Ci + "，我正进入你的陪玩直播间";
    e.userId = Fe.currentUser.uid, e.type = 0, e.name = Fe.currentUser.user_name, e.level = Fe.currentUser.level, 
    e.Content = t, e.userVipState = Fe.currentUser.userVipState, e.x = st + dt, e.y = Ye, 
    e.width = dt, e.height = ot, e.size = ot, v(e), e.tr = I(e), e.height = ot * e.tr.length, 
    setTimeout(function() {
        Pt.unshift(e), pe(t);
    }, 66), Fe.aldstat.sendEvent("直播间跳转心跳女孩", String(Be.platform));
}

function a() {
    nn = 0, an = [ 0, 0, 0 ], on = [], rn = [], Pt = [], Nt = [], li = [];
}

function o(e) {
    var t = 0, i = e.x / qe;
    i <= .25 ? t = 1 : i > .25 && i <= .5 ? t = 2 : i > .5 && i <= .75 ? t = 3 : i > .75 && (t = 4), 
    t += 8 * Tt.data._giftNum, e.y > Bi && (t += 4), 257 != Fe.giftList[t - 1].id || 0 != Fe.giftList[t - 1].giftTicketNum ? Bt - Fe.giftList[t - 1].price * qt[Gt - 1] >= 0 || Fe.giftList[t - 1].giftTicketNum - Fe.giftList[t - 1].price * qt[Gt - 1] >= 0 ? (A(Fe.giftList[t - 1]), 
    setTimeout(function() {
        var e = {
            userId: Fe.currentUser.uid,
            type: 104,
            name: Fe.currentUser.user_name,
            level: Number(Fe.currentUser.level),
            Content: "赠送了" + qt[Gt - 1] + "个" + Fe.giftList[t - 1].name,
            userColor: "#fff",
            userVipState: 0,
            x: st + dt,
            y: Ye,
            width: dt,
            height: ot,
            tr: ""
        };
        v(e), Pt.push(e);
    }.bind(this), 150), ce(Fe.giftList[t - 1].id, qt[Gt - 1], Wt, Fe.giftList[t - 1].giftType)) : 4 != Mt && (Tt.setData({
        giftBottom: -Ge
    }), c(4)) : console.log("当前星月票为0无法赠送");
}

function r() {
    "ios" != Be.platform && Tt.setData({
        giftBagBtnShow: !1
    }), P();
}

function s() {
    var e = Fe.giftList, t = e.mFindIndex(function(e) {
        return 45 === e.id;
    }), i = e.mFindIndex(function(e) {
        return 7 === e.id;
    });
    u(), i >= 0 && void 0 != e[i].giftTicketNum && (Li = e[i].giftTicketNum, console.log("小星星礼券：", Li), 
    "ios" == Be.platform && (Li += Bt), Tt.setData({
        littleStarNum: Li
    })), t >= 0 && (void 0 != e[t].freeGiftCount && (vi = e[t].freeGiftCount, Tt.setData({
        starNum: vi
    })), console.log("星尘：", vi), "ios" == Be.platform && Tt.setData({
        giftBagOpacity: 1,
        giftBagBtnShow: !0
    }));
}

function l() {
    if (Yi) {
        Yi = !1;
        var e = Fe.giftList, t = e.mFindIndex(function(e) {
            return 7 === e.id;
        });
        t >= 0 && void 0 != e[t].giftTicketNum && (Li = e[t].giftTicketNum, "ios" == Be.platform && (Li += Bt));
    }
}

function u() {
    Ht = Math.ceil(Fe.giftList.length / 8) - 1, d(), te(0);
}

function d() {
    for (var e = [], t = 0; t <= Ht; t++) {
        var i = {};
        i.id = t + 1, i.date = t, i.str = t, e.push(i);
    }
    Tt.setData({
        giftPageList: e
    });
}

function c(e) {
    if (Mt > 0 && 1 == Mi) {
        Tt.data.bagMultipleShow && Tt.setData({
            bagMultipleShow: !1
        }), 2 != Mt && (Rt.opacity(0).translateY(20).step(), Tt.setData(t({}, [ Zi[Mt - 1] ], Rt.export())));
        var i = setTimeout(function() {
            if (clearTimeout(i), i = null, 0 == Mi) return !1;
            2 == Mt && (Jt = Vt = 0, Tt.setData({
                _giftNum: 0,
                giftBottom: -Ge,
                onePayShow: !1
            })), Tt.setData(t({}, [ Qi[Mt - 1] ], !1)), f(e);
        }, 120);
    } else f(e);
}

function f(e) {
    if (Mt = e, 0 == e) return !1;
    2 != e && Tt.setData(t({}, [ Qi[e - 1] ], !0)), Tt.data.starNum != vi && Tt.setData({
        starNum: vi
    }), Rt.opacity(1).translateY(0).step(), Tt.setData(t({}, [ Zi[e - 1] ], Rt.export()));
}

function g() {
    for (var e = Nt.length, t = 0; t < e; t++) {
        var i = Nt[t];
        t > 0 && void 0 != i && (i.y = Nt[t - 1].y + Nt[t - 1].height + it), 102 == i.type && 0 == i.flag && (i.flag = 1, 
        li.push(i));
    }
    var n = Nt[e - 1];
    if (void 0 == n || n.liveRoomId != Wt) return !1;
    var a = n.y - n.height - it;
    new Ne.default.Tween({
        y: n.y
    }).to({
        y: a
    }, 300).easing(Ne.default.Easing.Quadratic.Out).onUpdate(function() {
        if (0 == Mi) return !1;
        for (var t = this.y - n.y, i = 0; i < e; i++) {
            if (void 0 == Nt[i] || n.liveRoomId != Wt) return !1;
            Nt[i].y += t, w(Nt[i]);
        }
        x(), Ke.draw();
    }).onComplete(function() {
        if (0 == Mi || n.liveRoomId != Wt || void 0 == Nt[0] || 0 == Fe.isLivePage) return !1;
        Nt[0].y < je - Nt[0].height - ot && (105 == Nt[0].type ? (Ut = -1, Tt.setData({
            giftStarsTop: -400,
            giftAdShow: !1
        })) : 107 == Nt[0].type && (bt = -1, Tt.setData({
            wfyTop: -400,
            wfyBtnShow: !1
        })), Nt.shift()), 0 == $t && (wt = setTimeout(D, at));
    }).start();
}

function p() {
    clearTimeout($i);
    var e = li[0];
    if (0 == li.length && 0 == $t || void 0 == e) $i = setTimeout(p, 300); else {
        if (1 == e.flag) {
            e.flag = 2;
            var t = {
                checkInBgColor0: "rgba(" + e.bg + ",0.3)",
                checkInBgColor1: "rgba(" + e.bg + ",1)",
                iconLevel: e.level,
                iconUrl: e.icon,
                checkName: e.name
            };
            Tt.setData({
                checkInShow: !0,
                check: t
            }, function() {
                if (null == en || void 0 == en) return !1;
                en.translateX(gt).step({
                    duration: 400
                }), Tt.setData({
                    userCheckInLeft: en.export()
                }), setTimeout(function() {
                    if (null == en || void 0 == en) return !1;
                    en.translateX(-qe).step(), Tt.setData({
                        userCheckInLeft: en.export()
                    }), setTimeout(function() {
                        li.shift(), Tt.setData({
                            checkInShow: !1
                        }, function() {
                            p();
                        });
                    }.bind(this), 300);
                }.bind(this), 1400);
            });
        }
        e = null;
    }
}

function m(e) {
    var t = e.level, i = void 0, n = !0;
    if (t = t < 10 ? String("0" + t) : String(t), 101 == e.type ? (n = !1, i = "#a83dfa", 
    e.y = Ye) : 102 == e.type || 103 == e.type ? (n = !0, i = "#cecece") : 104 == e.type ? (i = e.iconColor, 
    n = !0) : i = "white", e.level = t, e.textColor = i, e.showShadow = n, e.flag = 0, 
    102 == e.type) e.bg = xt[e.indexId], C(e); else {
        if (null == Nt) return !1;
        Nt.push(e);
        var a = Pt.length;
        a <= 10 ? at = 300 : a > 10 && a <= 20 ? at = 250 : a > 20 && a <= 30 ? at = 200 : a > 30 && a <= 40 ? at = 150 : a > 40 && (at = 100), 
        g();
    }
}

function h() {
    je = (ze = Ge - 140 / 750 * qe) - Ze, Ye = Ge - 140 * Je;
    var e = Number(je / Ge.toFixed(2)), t = Number(ze / Ge.toFixed(2));
    vt.push(e - .05), vt.push(e), vt.push(t - .05), vt.push(t), _(), mt = je - .1 * Ge, 
    void 0 != Pt[0] && (Pt[0].y = Ye), Tt.setData({
        userCheckInTop: mt
    });
}

function v(e) {
    void 0 == e.level && (e.level = "0");
    var t = Number(e.level), i = t > 76 ? 3 : parseInt((t - 1) / 25);
    e.indexId = i, e.icon = St[i], e.iconColor = _t[i], e.bg = xt[i];
}

function w(e) {
    var t = Ke;
    if (t.setTextBaseline("top"), t.save(), 101 != e.type && 105 != e.type && 107 != e.type && (t.shadowBlur = 0, 
    t.shadowOffsetX = t.shadowOffsetY = 0, y(t, 30, e.y, 70, 32, 16, e.iconColor), t.drawImage(e.icon, et, e.y + 8 * Je, tt, tt), 
    t.fillStyle = "white", t.setTextAlign("center"), t.font = "normal " + it.toFixed(0) + "px sans-serif", 
    t.fillText(String(e.level), nt, e.y + 4 * Je)), 105 != e.type && 107 != e.type) {
        t.fillStyle = _t[0], t.setTextAlign("left"), t.shadowBlur = 1, t.shadowOffsetX = t.shadowOffsetY = 1, 
        t.font = rt;
        var i = st;
        if (101 == e.type && (i = 30 * Je), 1 != e.userVipState && 11 != e.userVipState || 0 != e.type) 102 == e.type || 106 == e.type ? t.fillText(e.name, i, e.y) : t.fillText(e.nameStr, i, e.y); else {
            var n = Math.floor(i + e.width + 2 - ct);
            t.fillText(e.name, i, e.y), 1 == e.userVipState ? t.drawImage(yi, n, e.y, xi, xi) : t.drawImage(_i, n, e.y, xi, xi), 
            t.fillText(":", n + xi + 2, e.y);
        }
        var a = i + e.width;
        1 != e.userVipState && 11 != e.userVipState || 0 != e.type || (a += 6 + xi);
        var o = {
            ctx: Ke,
            x: a,
            y: e.y,
            width: e.width,
            height: ot,
            color: e.textColor,
            size: ot,
            bold: !1,
            tr: e.tr,
            type: e.type,
            userVipState: e.userVipState
        };
        106 == e.type && (o.color = "#f6225f"), "进入直播间" == o.tr[0] && (t.shadowBlur = 0, 
        t.shadowOffsetX = t.shadowOffsetY = 0), T(o), t.restore();
    } else 105 == e.type ? (Ut = e.y, Tt.setData({
        giftStarsTop: Ut + Hi
    }), y(t, 30, e.y, e.width / Je, e.height / Je, 42, "#ffe600"), t.save(), t.beginPath(), 
    t.arc(et + 38 * Je, e.y + 42 * Je, 33 * Je, 0, 2 * Math.PI, !1), t.clip(), t.drawImage(e.url, et + 5 * Je, e.y + 9 * Je, 66 * Je, 66 * Je), 
    t.restore(), t.fillStyle = "#000", t.font = "normal " + Lt.toFixed(0) + "px sans-serif", 
    t.fillText("主播悄悄送给你5个星辰", et + 89 * Je, e.y + 12 * Je), t.fillStyle = "#ff6934", 
    t.fillText("立即领取!", et + 89 * Je, e.y + e.height - 36 * Je), t.drawImage(yt + "adBtn.png", et + 201 * Je, e.y + e.height - 36 * Je, 26 * Je, 26 * Je)) : 107 == e.type && (bt = e.y, 
    Tt.setData({
        wfyTop: bt + Hi
    }), t.save(), y(t, 30, e.y, e.width / Je, e.height / Je, 42, "wfy"), t.restore(), 
    t.save(), t.beginPath(), t.arc(et + 38 * Je, e.y + 42 * Je, 33 * Je, 0, 2 * Math.PI, !1), 
    t.clip(), t.drawImage(e.url, et + 5 * Je, e.y + 9 * Je, 66 * Je, 66 * Je), t.restore(), 
    t.fillStyle = "white", t.font = "normal " + Lt.toFixed(0) + "px sans-serif", t.fillText("主播悄悄对你说，终于等到你啦！", et + 89 * Je, e.y + 12 * Je), 
    t.fillStyle = "#f15433", t.fillText("戳这里来互动~", et + 89 * Je, e.y + e.height - 36 * Je), 
    t.drawImage(yt + "wfyBtn.png", et + 256 * Je, e.y + e.height - 36 * Je, 26 * Je, 26 * Je));
}

function y(e, t, i, n, a, o, r) {
    var s = Math.floor(t * Je), l = i, u = Math.floor(n * Je), d = Math.floor(a * Je), c = Math.floor(o * Je);
    e.beginPath(), "wfy" == r ? (Xe.addColorStop(0, "#ffc4b6"), Xe.addColorStop(1, "#f98881"), 
    e.fillStyle = Xe) : e.fillStyle = r, e.arc(s + c, l + c, c, Math.PI, 3 * Math.PI / 2), 
    e.lineTo(u - c + s, l), e.arc(u - c + s, c + l, c, 3 * Math.PI / 2, 2 * Math.PI), 
    e.lineTo(u + s, d + l - c), e.arc(u - c + s, d - c + l, c, 0, 1 * Math.PI / 2), 
    e.lineTo(c + s, d + l), e.arc(c + s, d - c + l, c, 1 * Math.PI / 2, Math.PI), e.fill(), 
    e.closePath();
}

function _() {
    We.addColorStop(0, "rgba(250,50,50,1)"), We.addColorStop(vt[0], "rgba(50,50,50,1)"), 
    We.addColorStop(vt[1], "rgba(50,50,50,0)"), We.addColorStop(vt[2], "rgba(50,50,50,0)"), 
    We.addColorStop(vt[3], "rgba(250,50,50,1)"), We.addColorStop(1, "rgba(250,50,50,1)");
}

function x() {
    Ke.save(), Ke.globalCompositeOperation = "destination-out", Ke.fillStyle = We, Ke.fillRect(0, 0, qe, Ge), 
    Ke.restore();
}

function S(e) {
    if (void 0 == e || null == e) return 0;
    return e >= 1e4 ? (e /= 1e4, -1 != String(e).indexOf(".") && (e = e.toFixed(1)), 
    e.toString().replace(".0", "") + "万") : e;
}

function T(e) {
    var t = e.ctx;
    t.fillStyle = e.color, t.font = rt;
    for (var i = e.x, n = 0; n < e.tr.length; n++) if (n < lt) {
        if (n > 0 && (i = 1 != e.userVipState && 11 != e.userVipState || 0 != e.type ? e.x - e.width : e.x - e.width - (6 + xi)), 
        n == lt - 1) {
            var a = e.tr[n];
            e.tr[n] = a.substring(0, a.length - 3) + "...", a = null;
        }
        t.fillText(e.tr[n], i, e.y + n * e.height);
    }
}

function I(e) {
    var t = e.Content;
    if (void 0 == t || null == t || "" == t) return "";
    var i = "", n = [], a = 0, o = Qe, r = e.width;
    101 == e.type && (o = $e), 1 != e.userVipState && 11 != e.userVipState || (r += xi + 3);
    var s = t.split("");
    He.save(), He.font = "normal " + ot.toFixed(0) + "px sans-serif";
    var l = s.map(function(e) {
        return He.measureText(e).width;
    });
    He.restore(), s = null;
    for (var u = 0; u < t.length; u++) {
        var d = i + t.charAt(u), c = a + l[u];
        i = d, a = c, (c > o && u > 0 && n.length > 0 || c > o - r && u > 0 && 0 == n.length) && (n.push(i), 
        i = t.charAt(u), a = l[u]), u == t.length - 1 && n.push(i);
    }
    return l = t = null, n;
}

function k(e, t) {
    if (void 0 == e || "" == e || null == e) return 0;
    var i = 0;
    return e.split("").forEach(function(e) {
        /[a-zA-Z]/.test(e) ? i += 7 : /[0-9]/.test(e) ? i += 5.5 : /\./.test(e) ? i += 2.7 : /-/.test(e) ? i += 3.25 : /[\u4e00-\u9fa5]/.test(e) ? i += 10 : /\(|\)/.test(e) ? i += 3.73 : /\s/.test(e) ? i += 2.5 : /%/.test(e) ? i += 8 : i += 10;
    }), i * t / 10;
}

function D() {
    if (clearTimeout(wt), 0 == Mi || 0 == Fe.isLivePage || Pt.length < 0) return !1;
    if ((Date.parse(new Date()) - Ti) / 1e3 >= 3 && 0 == Yt && 0 == Ui && (Ui = 1, ee()), 
    (Date.parse(new Date()) - Ti) / 1e3 >= 15 && 1 == Ui) {
        Ui = 2;
        var e = wx.createAnimation({
            duration: 200,
            timingFunctionL: "ease"
        });
        e.opacity(0).translateX(20).step(), Tt.setData({
            liveFollowMove: e.export()
        }), setTimeout(function() {
            Tt.setData({
                liveFollowShow: !1
            });
        }.bind(this), 210);
    }
    if ((Date.parse(new Date()) - Ti) / 1e3 >= 30 && 0 == Si && (Si = 1, Pt.push(Ct)), 
    At && 0 == $t) wt = setTimeout(D, 300); else if (Pt.length > 0) {
        tn = 0;
        var t = Pt.shift();
        if (101 != t.type && 105 != t.type && 107 != t.type) {
            var i = si.find(function(e) {
                return e.id == t.userId;
            }), n = 0;
            if (void 0 != i) n = i.width; else {
                n = G(t.name);
                var a = {
                    id: t.userId,
                    width: n
                };
                si.push(a);
            }
            t.x = st + n, t.width = n, 102 != t.type && 106 != t.type || (t.x -= ct, t.width -= ct), 
            t.tr = I(t), t.height = ot * t.tr.length;
        }
        t.nameStr = t.name + "：", t.liveRoomId = Wt, m(t);
    } else {
        var o = 500 + 100 * ++tn;
        o > 2e3 && (o = 2e3), 0 == $t && (wt = setTimeout(D, o)), o = null;
    }
}

function C(e) {
    Nt.push(e), g();
}

function L(e) {
    var t = -1, i = on.filter(function(t) {
        return t.userId == e.userId;
    });
    if (-1 != (nn = an.mFindIndex(function(e) {
        return 0 == e;
    })) || void 0 != i) {
        if (i.length > 0) {
            var n = i.find(function(t) {
                return t.giftId == e.giftId;
            });
            if (void 0 != n && 1 == n.flag) return n.flag = e.flag = 3, e.tearmId = n.tearmId, 
            n.giftCount = e.giftCount = e.giftCount + n.giftCount, void U(e);
        }
        nn >= 0 ? (t = nn, e.tearmId = t, an[t] = 1, on[t] = e, U(e)) : rn.push(e);
    } else rn.push(e);
}

function U(e) {
    var i = String(e.tearmId + 1);
    if (0 == e.flag) {
        var n;
        Tt.setData((n = {}, t(n, [ "sg" + i + "Left" ], -ht), t(n, [ "sg" + i + "UserImg" ], e.userHeadUrl), 
        t(n, [ "sg" + i + "GiftImg" ], e.giftUrl), t(n, [ "sg" + i + "GiftName" ], e.giftName), 
        t(n, [ "sg" + i + "GiftCount" ], "×" + e.giftCount), t(n, [ "sg" + i + "Animation" ], 1), 
        t(n, [ "sg" + i + "Show" ], !0), t(n, [ "kValues" + i ], "transform"), n), function() {
            e.tweenBack = function() {
                sn.translateX(-qe).step().translateX(-qe).step({
                    duration: 0
                }), Tt.setData(t({}, [ "sg" + i + "Left" ], sn.export())), setTimeout(function() {
                    var n;
                    an[e.tearmId] = 0, on[e.tearmId] = {}, Tt.setData((n = {}, t(n, [ "sg" + i + "Show" ], !1), 
                    t(n, [ "kValues" + i ], "auto"), n));
                }.bind(this), 300);
            }, e.waitTween = function() {
                setTimeout(function() {
                    1 == e.flag ? (e.flag = 2, e.tweenBack()) : (e.flag = 1, e.waitTween());
                }.bind(this), 1e3);
            }, sn.translateX(pt).step({
                delay: 100
            }), Tt.setData(t({}, [ "sg" + i + "Left" ], sn.export())), setTimeout(function() {
                e.flag = 1, e.waitTween();
            }.bind(this), 400);
        });
    } else Tt.setData(t({}, [ "sg" + i + "GiftCount" ], "×" + e.giftCount), function() {});
}

function b(e) {
    Ae.default.requestAnimationFrame(b), Ne.default.update(e);
}

function P() {
    p(), O(), Ae.default.requestAnimationFrame(b), setTimeout(function() {
        oe(Xt, Wt);
    }.bind(this), 133);
}

function N() {
    var e = Fe.currentUser;
    if (void 0 == e.level) return _e(), !1;
    var t = {
        userId: e.uid,
        type: 102,
        name: e.user_name,
        level: e.level,
        Content: "进入直播间",
        userVipState: 0,
        x: 0,
        y: je,
        width: dt,
        height: ot,
        size: ot,
        tr: ""
    };
    v(t), Pt.push(t);
    var i = {
        nickName: e.user_name,
        avatarUrl: e.head_url,
        uid: e.uid
    };
    Tt.setData({
        userInfo: i,
        huodongStr: Fe.globalData.huodongStr
    });
}

function A(e) {
    var t = Fe.currentUser, i = {};
    i.userId = t.uid, i.userName = t.user_name, i.userHeadUrl = t.head_url, i.giftId = e.id, 
    i.giftName = e.name, i.giftUrl = e.picUrl, 45 != e.id && 7 != e.id || "ios" != Be.platform ? i.giftCount = qt[Gt - 1] : i.giftCount = qt[Et - 1], 
    i.flag = 0, L(i);
}

function O() {
    rn.length > 0 && L(rn.shift()), 0 == $t && (ln = setTimeout(function() {
        clearTimeout(ln), O();
    }.bind(this), 550));
}

function M(e) {
    var t = e.viewer_total_count, i = {
        userHeadUrl: e.head_url,
        userName: e.name,
        viewCount: t,
        starCount: S(e.starCount),
        vj: !1
    };
    Ci = e.name, 6 == e.red_host_flag && (i.vj = yt + "live_vj.png"), Tt.setData({
        nav: i
    }, function() {
        setTimeout(function() {
            var e = wx.createAnimation({
                duration: 200,
                timingFunctionL: "ease"
            });
            e.opacity(1).step(), Tt.setData({
                animationNav: e.export()
            });
        }, 50);
    });
}

function R(e) {
    if (console.log("直播时长：", e), void 0 == e || isNaN(e)) return "00:00:00";
    var t = parseInt(e), i = 0, n = 0;
    t > 60 && (i = parseInt(t / 60), t = parseInt(t % 60), i > 60 && (n = parseInt(i / 60), 
    i = parseInt(i % 60))), t = parseInt(t), i = parseInt(i), n = parseInt(n);
    var a = (parseInt(n) < 10 ? "0" + parseInt(n) : parseInt(n)) + ":", o = (parseInt(i) < 10 ? "0" + parseInt(i) : parseInt(i)) + ":", r = parseInt(t) < 10 ? "0" + parseInt(t) : parseInt(t);
    return console.log(a + o + r), a + o + r;
}

function F(e) {
    if (void 0 == e || isNaN(e)) return "00:00";
    var t = parseInt(e), i = 0;
    return t > 60 && (i = parseInt(t / 60), t = parseInt(t % 60), i > 60 && (i = parseInt(i % 60))), 
    t = parseInt(t), i = parseInt(i), (parseInt(i) < 10 ? "0" + parseInt(i) : parseInt(i)) + ":" + (parseInt(t) < 10 ? "0" + parseInt(t) : parseInt(t));
}

function B(e) {
    var t = e.replace(/<\/?[^>]*>/g, "");
    return t = t.replace(/[|]*\n/, ""), t = t.replace(/&npsp;/gi, "");
}

function q(e) {
    return e.replace(/[\u0391-\uFFE5]/g, "aa").length;
}

function G(e) {
    Ke.save(), Ke.font = "normal " + ot.toFixed(0) + "px sans-serif";
    var t = Ke.measureText(e).width;
    Ke.restore();
    var i = q(e);
    return t += i >= 10 && t < i * ut / 2 ? 1.5 * ct : ct;
}

function E() {
    var e = qe, t = Ge, i = 368 / e, n = 642 / t, a = void 0, o = void 0;
    a = i >= 1 ? n >= 1 ? Math.min(i, n) : 642 / t : n >= 1 ? 368 / e : Math.min(i, n);
    var r = 0, s = 0, l = 0, u = 0;
    0 == Ri ? (r = 642 / a * .65, s = 368 / a, l = 642 / a) : (u = 200 * Je, s = qe, 
    l = 9 * qe / 16), Ji = u;
    var d = {
        liveWidth: s,
        liveHeight: l,
        liveLeft: .5 * (qe - s)
    };
    (o = {
        pkTop: 0,
        starOne: 0,
        starTwo: 0,
        countDown: "--:--"
    }).pkTop = r - .12 * qe, o.pkJump = r - s + .08 * qe, Tt.setData({
        live: d,
        pk: o,
        isLivePk: !1,
        showJumpPlayer: !1
    }, function() {
        di = 1;
    });
}

function V() {
    if (0 == di) {
        var e = setTimeout(function() {
            clearTimeout(e), e = null, V();
        }.bind(this), 100);
        return !1;
    }
    Tt.setData({
        isLivePk: !0
    }, function() {
        var e = wx.createAnimation({
            duration: 200,
            timingFunctionL: "ease"
        });
        e.opacity(1).step(), Tt.setData({
            animationPk: e.export()
        });
        var t = setTimeout(function() {
            clearTimeout(t), t = null, 0 == wi ? xe() : Se();
        }.bind(this), 200);
    });
}

function K() {
    Tt.setData({
        showJumpPlayer: !0
    }, function() {
        Tt.setData({
            "pk.pkJumpAlpha": 1
        });
    });
}

function H() {
    Tt.setData({
        showJumpPlayer: !1
    });
}

function J() {
    var e = setTimeout(function() {
        clearTimeout(e), e = null, fi = 0;
        var t = wx.createAnimation({
            duration: 200,
            timingFunctionL: "ease"
        });
        t.opacity(0).step(), Tt.setData({
            isLivePk: !1,
            "pk.starOne": 0,
            "pk.starTwo": 0,
            isPkEnd: !0,
            animationPk: t.export()
        });
    }.bind(this), 3e3);
}

function W() {
    un = setTimeout(function() {
        clearTimeout(un), --fi >= 0 && (Tt.setData({
            "pk.countDown": F(fi)
        }), Se());
    }.bind(this), 1e3);
}

function X(e, t) {
    var i = wx.createAnimation({
        duration: 200,
        timingFunctionL: "linear"
    }), n = wx.createAnimation({
        duration: 200,
        timingFunctionL: "linear"
    }), a = e / (e + t) * 710 / 750 * qe;
    i.width(a).step(), n.left(a).step(), Tt.setData({
        animationPkOneResult: i.export(),
        animationPkStar: n.export()
    });
}

function j(e, t) {
    return !(e.y < t.y || e.y > t.y + t.height || e.x < t.x || e.x > t.x + t.width);
}

function z() {
    console.log("开始赠送星尘");
    var e = 0;
    e = "ios" == Be.platform ? Et : Gt;
    var t = qt[e - 1];
    vi - t >= 0 ? (vi -= t, A({
        id: 45,
        name: "星尘",
        picUrl: "http://fmn.rrimg.com/fmn071/20170212/0935/original_djOD_9223000de48b1e83.png"
    }), Tt.setData({
        starNum: vi
    }), ce(45, t, Wt, 0)) : wx.showToast({
        title: "星尘不够~",
        icon: "none",
        duration: 2e3
    });
}

function Y() {
    console.log("开始使用小星星");
    var e = 0;
    e = "ios" == Be.platform ? Et : Gt;
    var t = qt[e - 1];
    Li - t >= 0 ? (Li -= t, A({
        id: 7,
        name: "小星星",
        picUrl: "https://fmn.rrimg.com/fmn079/20170212/0935/original_3Jbo_c62e000a0e0a1e84.png"
    }), Tt.setData({
        littleStarNum: Li
    }), giftList[starResult].giftTicketNum = Li, ce(7, t, Wt, 0)) : wx.showToast({
        title: "小星星不够~",
        icon: "none",
        duration: 2e3
    });
}

function Z() {
    var e = [ {
        id: "7",
        unitPrice: "1",
        tokensCount: 10
    }, {
        id: "1",
        unitPrice: "6",
        tokensCount: 60
    }, {
        id: "7",
        unitPrice: "10",
        tokensCount: 100
    }, {
        id: "3",
        unitPrice: "58",
        tokensCount: 580
    }, {
        id: "4",
        unitPrice: "108",
        tokensCount: 1080,
        activityAmount: "18"
    } ];
    Tt.setData({
        productInfoList: e
    });
}

function Q() {
    var e = new Date(), t = e.getFullYear(), i = e.getMonth() + 1, n = e.getDate();
    return i >= 1 && i <= 9 && (i = "0" + i), n >= 0 && n <= 9 && (n = "0" + n), t + "-" + i + "-" + n;
}

function $() {
    wx.getStorage({
        key: "wfy",
        success: function(e) {
            e.data.timestamp == Q() && 0 != e.data.isWfy || (Si = 0, wx.setStorage({
                key: "wfy",
                data: {
                    timestamp: Q(),
                    isWfy: 1
                }
            }));
        },
        fail: function(e) {
            Si = 0, wx.setStorage({
                key: "wfy",
                data: {
                    timestamp: Q(),
                    isWfy: 1
                }
            });
        }
    });
}

function ee() {
    Tt.setData({
        liveFollowShow: !0
    }, function() {
        var e = wx.createAnimation({
            duration: 200,
            timingFunctionL: "ease",
            delay: 27
        });
        e.opacity(1).translateX(0).step(), Tt.setData({
            liveFollowMove: e.export()
        });
    });
}

function te(e) {
    var t = He;
    t.save(), t.fillStyle = "rgba(1,4,28,0.9)", t.fillRect(0, 0, qe, dn), t.fillStyle = "#01051b", 
    t.fillRect(0, parseInt(510 * Ve), qe, parseInt(90 * Ve));
    for (var i = 0; i < 16; i++) {
        var n = 0;
        if ((n = mn >= 0 ? i + 8 * Jt : i + 8 * (Jt - 1)) >= Fe.giftList.length || n < 0) break;
        var a = Fe.giftList[n];
        if (void 0 == a) return !1;
        var o = 0, r = 0;
        if (i < 8 ? (o = Ei[i].x, -1 == mn && (o = Ei[i].x - qe / Ve), r = Ei[i].y) : (o = Ei[i - 8].x + qe / Ve, 
        -1 == mn && (o = Ei[i - 8].x), r = Ei[i - 8].y), o * Ve + Fi >= 0 && o * Ve + Fi <= qe) if (void 0 == a.path || null == a.path ? t.drawImage(yt + "default_gift.png", o * Ve + Fi, r * Ve + Vi, 100 * Ve, 100 * Ve) : t.drawImage(a.path, o * Ve + Fi, r * Ve + Vi, 100 * Ve, 100 * Ve), 
        12 == a.giftType && t.drawImage(yt + "xinyunIcon.png", (o - 44) * Ve + Fi, (r - 38) * Ve + Vi, 64 * Ve, 64 * Ve), 
        t.textAlign = "center", t.font = cn, t.fillStyle = "#fff", t.fillText(a.name, (o + 50) * Ve + Fi, (r + 130) * Ve + Vi), 
        t.font = fn, t.fillStyle = "#FFD600", 257 == a.id) {
            var s = t.measureText("券 " + a.giftTicketNum.toString()).width / 2;
            t.fillText("券 " + a.giftTicketNum.toString(), (o + 50) * Ve + Fi, (r + 160) * Ve + Vi), 
            t.drawImage(yt + "quan.png", (o + 50) * Ve + Fi - s, (r + 139) * Ve + Vi, 26 * Ve, 26 * Ve);
        } else if (0 == a.giftTicketNum || void 0 == a.giftTicketNum) {
            var l = t.measureText(a.price.toString()).width / 2;
            t.fillText(a.price, (o + 40) * Ve + Fi, (r + 160) * Ve + Vi), t.drawImage("../../images/guo.png", (o + 40) * Ve + l + Fi, (r + 145) * Ve + Vi, 20 * Ve, 22 * Ve);
        } else {
            var u = t.measureText("券 " + a.giftTicketNum.toString()).width / 2;
            t.fillText("券 " + a.giftTicketNum.toString(), (o + 50) * Ve + Fi, (r + 160) * Ve + Vi), 
            t.drawImage(yt + "quan.png", (o + 50) * Ve + Fi - u, (r + 139) * Ve + Vi, 26 * Ve, 26 * Ve);
        }
    }
    t.restore(), t.draw(!1, function() {
        0 == e && 0 == gn && (gn = 1, D(), "ios" != Be.platform && Tt.setData({
            btnGiftShow: !0
        }));
    });
}

function ie(e) {
    var t = Tt.data._giftNum, i = 0;
    if (0 == Vt) {
        if (Vt = 1, 2 == e) {
            if (i = -1, --t < 0) return t = Vt = 0, void (mn = Fi = 0);
        } else if (i = 1, ++t > Ht) return t = Ht, Vt = 0, void (mn = Fi = 0);
        mn = i, Tt.setData({
            _giftNum: t
        }), pn += i * wx, new Ne.default.Tween({
            x: 0
        }).to({
            x: qe
        }, 450).easing(Ne.default.Easing.Cubic.Out).onUpdate(function() {
            Fi = -i * this.x, te();
        }).onComplete(function() {
            mn = Fi = 0, Jt = Tt.data._giftNum, Vt = 0;
        }).start();
    }
}

function ne() {
    Fe.isLivePage = !1, Mi = Ti = Oi = mn = Jt = pn = Fi = 0, $t = 1, we(), a(), Ae.default.cancelAnimationFrame(), 
    Ne.default.removeAll(), clearTimeout(qi), clearTimeout(un), clearTimeout($i), clearTimeout(wt), 
    clearTimeout(ln), clearTimeout(Xi), qi = $i = wt = ln = un = Xi = null;
}

function ae(e) {
    if (Fe.wxpersonInfo.openid) {
        var t = {
            api_key: Fe.opApiKey,
            v: "1",
            session_key: Fe.currentUser.session_key,
            client_info: Fe.client_info,
            call_id: new Date().getTime(),
            user_id: e,
            limit: 10,
            rankType: 2,
            visitor: Fe.currentUser.uid
        }, i = Oe.default.getsign(t);
        t.sig = i, wx.request({
            url: Fe.apiurl + "gift/getGiftSendUidRank",
            data: t,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                if (e.data.recordList && e.data.recordList.length > 0) {
                    var t;
                    e.data.recordList.forEach(function(e, i) {
                        t = Me.default.getLevelMsg(e.userStarLevelInfoMessage.level), e.iconUrl = t.iconUrl, 
                        e.backgroundcolor = t.backgroundcolor;
                    }), Tt.setData({
                        rankCellList: e.data.recordList
                    });
                } else Tt.setData({
                    rankCellList: []
                });
            }
        });
    }
}

function oe(e, t) {
    if (At) return !1;
    var i = Fe.apiurl + "livevideo/liveRoomGetRoomCondition", n = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        live_room_id: t,
        owner_id: e
    };
    n.sig = Oe.default.getsign(n), wx.request({
        data: n,
        url: i,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(i) {
            if (200 == i.statusCode) {
                if (void 0 == i.data) return 0 == $t && (qi = setTimeout(function() {
                    t == Fe.globalData.liveRoomId && oe(e, t);
                }, 2e3)), !1;
                var n = i.data.room_state;
                if (0 != n && 3 != n) return ti = 1, 2 == n && wx.createLivePlayerContext("player").stop(), 
                setTimeout(function() {
                    wx.hideLoading();
                }, 100), 1 == n && ye(), !1;
                var a = Tt.data.liveState, o = i.data, r = Tt.data.liveItem, s = r.starCount;
                r.starMoonCount != o.starMoonCount && t == Fe.globalData.liveRoomId && Tt.setData({
                    "nav.starMoonCount": S(o.starMoonCount)
                }), s != o.starShineCount && t == Fe.globalData.liveRoomId && (r.starCount = o.starShineCount, 
                Tt.setData({
                    "nav.starCount": S(o.starShineCount),
                    liveItem: r
                })), 1 == i.data.lineLivePkState && (wi = 1, xe()), 2 == i.data.lineLivePkState && (wi = 0, 
                H()), 0 == ui && 3 == i.data.lineLivePkState && (ui = !0, V()), 4 != i.data.lineLivePkState && 5 != i.data.lineLivePkState || (0 == wi ? xe() : ui && (ui = !1, 
                Te())), o.comment_version > a.comment_version && re(), o.user_version > a.user_version && (le(), 
                se()), null != o.gift_newest_record_id && o.gift_newest_record_id != a.gift_newest_record_id && ue(o.gift_newest_record_id, e, t), 
                null != a.followVersion && o.followVersion != a.followVersion && de(e, t), Tt.data.liveState = i.data, 
                0 == $t && (qi = setTimeout(function() {
                    t == Fe.globalData.liveRoomId && oe(e, t);
                }, 2e3));
            }
        }
    });
}

function re() {
    Fe.apiurl;
    var e = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        owner_id: Xt,
        entry_id: Wt,
        limit: 5,
        need_star_level: 1,
        comment_id: Tt.data.comment_id
    };
    e.sig = Oe.default.getsign(e), wx.request({
        data: e,
        method: "POST",
        url: Fe.apiurl + "livevideo/getComments",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {
            var t = this, i = e.data;
            if (200 == e.statusCode) {
                if (!i.comment_list || i.comment_list.length <= 0) return !1;
                for (var n = i.comment_list, a = 0; a < n.length; a++) {
                    (function(e) {
                        var i = 0, a = n[e];
                        if (void 0 == a) return "continue";
                        void 0 != a.liveVipInfo.liveVipState && (i = a.liveVipInfo.liveVipState);
                        if (1 == i) {
                            var o = a.liveVipInfo.newLogo;
                            if (void 0 != o || null != o) {
                                var r = o.split("/");
                                "a_Riyb_b844000b6d6c1e80.png" != r[r.length - 1] && "a_7eaA_881400052a711e7f.png" != r[r.length - 1] || (i = 11);
                            }
                        }
                        if (setTimeout(function() {
                            var e = {
                                userId: a.user_id,
                                type: 0,
                                name: a.user_name,
                                level: a.userStarLevelInfoMessage.level,
                                Content: a.content,
                                userColor: "#fff",
                                userVipState: i,
                                x: 0,
                                y: Ye,
                                width: 0,
                                height: ot,
                                tr: ""
                            };
                            if (v(e), e.Content.indexOf(e.name + "抢到") > -1 && (e.type = 106, e.Content = e.Content.substr(e.name.length, e.Content.length)), 
                            a.user_id != Fe.currentUser.uid) {
                                var t = e.name;
                                t = t.replace(/[\מ]/g, ""), e.name = t, Pt.push(e);
                            }
                        }.bind(t), 50), e == n.length - 1) {
                            var s = void 0;
                            s = void 0 == a.id_string ? a.id : a.id_string, Tt.setData({
                                comment_id: s
                            });
                        }
                    })(a);
                }
            }
        }
    });
}

function se(e) {
    var t = Fe.apiurl + "livevideo/getNRoomUserList", i = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        liveRoomId: Wt,
        need_vip_info: 1
    };
    i.sig = Oe.default.getsign(i), wx.request({
        data: i,
        url: t,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(t) {
            if (200 == t.statusCode) {
                if (0 == e) {
                    if (void 0 == t.data.roomUserInfoResponseList) return !1;
                    var i = t.data.roomUserInfoResponseList[0].userUrls.head_url, n = "../../images/live/default_image.png";
                    return Tt.setData({
                        user1: i
                    }, function() {
                        t.data.roomUserInfoResponseList.length >= 2 && (n = t.data.roomUserInfoResponseList[1].userUrls.head_url, 
                        Tt.setData({
                            user2: n
                        }));
                    }), ei = t.data.view_count, Tt.setData({
                        "nav.viewCount": S(ei)
                    }), !1;
                }
                if (void 0 == t.data.view_count || isNaN(t.data.view_count)) return !1;
                if (t.data.roomUserInfoResponseList[0].liveRoomId != Wt) return !1;
                ei = t.data.view_count, Tt.setData({
                    "nav.viewCount": S(ei)
                });
            }
        }
    });
}

function le() {
    var e = Fe.apiurl + "livevideo/GetLatestRoomUser", t = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        liveRoomId: Wt,
        lastId: Tt.data.roomLastId,
        need_star_level: 1,
        playerId: Xt
    };
    t.sig = Oe.default.getsign(t), wx.request({
        data: t,
        url: e,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {
            if (200 == e.statusCode) {
                if (!e.data.userList || e.data.userList.length <= 0) return !1;
                if (e.data.userList[0].liveRoomId != Fe.globalData.liveRoomId) return !1;
                for (var t = e.data.userList, i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (void 0 != n) {
                        if (n.userId == Fe.currentUser.uid) return !1;
                        var a = n.vipLogo, o = "进入直播间";
                        3 == n.state && (104, o = "首次观看人人直播"), "" != a && (106, "#a83dfa", o = n.action + n.carName + o);
                        var r = {
                            userId: n.userId,
                            type: 102,
                            name: n.userName,
                            level: n.userStarLevelInfoMessage.level,
                            Content: o,
                            userVipState: 0,
                            x: 0,
                            y: je,
                            width: 0,
                            height: ot,
                            size: ot,
                            tr: ""
                        };
                        v(r), Pt.push(r);
                    }
                }
                Tt.setData({
                    roomLastId: e.data.lastId
                });
            }
        }
    });
}

function ue(e, t, i) {
    var n = Fe.apiurl + "gift/getGiftRecordIncById", a = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        toUserId: t,
        gid: "livevideo_" + i,
        giftRecordId: e,
        need_star_level: 1,
        uniq_key: Fe.currentUser.uniq_key
    };
    a.sig = Oe.default.getsign(a), wx.request({
        data: a,
        url: n,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {
            if (200 == e.statusCode) {
                if (!e.data.giftList || e.data.giftList.length <= 0) return !1;
                for (var t = e.data.giftList, i = 0; i < t.length; i++) {
                    (function(e) {
                        var i = t[e];
                        if (void 0 == i) return "continue";
                        var n = i.liveVipInfo.liveVipState, a = (t[e].combo, i.giftName, {
                            userId: i.id,
                            userName: i.formUserName,
                            userHeadUrl: i.fromUserImgUrl.tiny_url,
                            giftId: i.id,
                            giftName: i.giftName,
                            giftUrl: i.giftPicUrl,
                            giftCount: Number(i.giftCount),
                            flag: 0
                        });
                        i.fromUserId != Fe.currentUser.uid && L(a);
                        setTimeout(function() {
                            var e = {
                                userId: i.id,
                                type: 104,
                                name: i.formUserName,
                                level: Number(i.userStarLevelInfoMessage.level),
                                Content: "赠送了" + i.giftCount + "个" + i.giftName,
                                userColor: "#fff",
                                userVipState: n,
                                x: 0,
                                y: Ye,
                                width: 0,
                                height: ot,
                                tr: ""
                            };
                            v(e), i.fromUserId != Fe.currentUser.uid && void 0 != e && Pt.push(e);
                        }, 50);
                    })(i);
                }
            }
        }
    });
}

function de(e, t) {
    var i = Fe.apiurl + "livevideo/getFollowAndHot", n = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        roomId: t,
        anchorId: e,
        lastId: Tt.data.focusLastId,
        need_star_level: 1,
        uniq_key: Fe.currentUser.uniq_key
    };
    n.sig = Oe.default.getsign(n), wx.request({
        data: n,
        url: i,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {
            var t = this;
            if (200 == e.statusCode) {
                if (!e.data.followerList || e.data.followerList.length <= 0) return !1;
                for (var i = e.data.followerList, n = 0; n < i.length; n++) {
                    (function(e) {
                        var n = i[e];
                        if (void 0 == n) return "continue";
                        n.vipLogo;
                        var a = {
                            userId: n.followerId,
                            type: 103,
                            name: n.followerName,
                            level: n.userStarLevelInfoMessage.level,
                            Content: "关注了主播，一秒路转粉~",
                            userColor: "#fff",
                            userVipState: 0,
                            x: 0,
                            y: je,
                            width: 0,
                            height: ot,
                            size: ot,
                            tr: ""
                        };
                        v(a), n.followerId != Fe.currentUser.uid && setTimeout(function() {
                            Pt.push(a);
                        }.bind(t), 50);
                    })(n);
                }
                Tt.setData({
                    focusLastId: e.data.lastId
                });
            }
        }
    });
}

function ce(e, t, i, n) {
    var a = 0;
    if (0 != Tt.data.liveItem.live_state) return !1;
    if ((a = Tt.data.liveItem.start_time / 1e3 - new Date().getTime()) < 0 && (a = 0), 
    Fe.wxpersonInfo.openid) {
        var o, r = "gift/sendGift";
        12 == n ? (r = "reward/getLuckGift", o = {
            api_key: Fe.opApiKey,
            v: "1",
            session_key: Fe.currentUser.session_key,
            client_info: Fe.client_info,
            call_id: new Date().getTime(),
            playerId: Xt,
            roomId: i,
            luckyDrawTimes: 1,
            giftId: e,
            luckyDrawMultipleTimes: t
        }) : o = {
            api_key: Fe.opApiKey,
            v: "1",
            session_key: Fe.currentUser.session_key,
            client_info: Fe.client_info,
            call_id: new Date().getTime(),
            gift_id: e,
            gift_count: t,
            to_user_id: Xt,
            gid_str: "livevideo_" + i,
            relative_time: a,
            combo: 0
        };
        var s = Oe.default.getsign(o);
        o.sig = s, wx.request({
            url: Fe.apiurl + r,
            data: o,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                if (1 == t.data.result) {
                    void 0 != t.data.tokensCount && (Bt = parseInt(t.data.tokensCount), Tt.setData({
                        amountWidth: k(String(Bt) + ",", It),
                        remainRenrenGuo: Bt
                    }));
                    var i = Fe.giftList.mFindIndex(function(t) {
                        return t.id === e;
                    });
                    if (void 0 != t.data.giftTicketNum && i >= 0 ? Fe.giftList[i].giftTicketNum = t.data.giftTicketNum : i >= 0 && (Fe.giftList[i].giftTicketNum = 0), 
                    te(), null == t.data.giftLikeName || void 0 == t.data.giftLikeName || "" == t.data.giftLikeName) return !1;
                    var n = t.data.luckGiftResult.reward;
                    if (void 0 == n) return !1;
                    if (n.indexOf("0.00") >= 0) return !1;
                    var a = n.split("！"), o = a[0] + "！" + a[1] + "！", r = {};
                    r.userId = Fe.currentUser.uid, r.type = 104, r.name = Fe.currentUser.user_name, 
                    r.level = Fe.currentUser.level, r.Content = o, r.userVipState = Fe.currentUser.userVipState, 
                    r.x = st + dt, r.y = Ye, r.width = dt, r.height = ot, r.size = ot, v(r), r.tr = I(r), 
                    r.height = ot * r.tr.length, setTimeout(function() {
                        Pt.unshift(r);
                    }, 66);
                } else 2 == t.data.result ? wx.showToast({
                    title: "人人果不够~",
                    icon: "none",
                    duration: 2e3
                }) : 3 == t.data.result ? wx.showToast({
                    title: "幸运礼物不足请稍后再试~",
                    icon: "none",
                    duration: 2e3
                }) : 4 == t.data.result ? wx.showToast({
                    title: "操作太频繁,请稍后再试~",
                    icon: "none",
                    duration: 2e3
                }) : 5 == t.data.result ? wx.showToast({
                    title: "扣果未成功",
                    icon: "none",
                    duration: 2e3
                }) : 6 == t.data.result && wx.showToast({
                    title: "购买次数超过最大限制",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
}

function fe() {
    if (1 == Yt) return !1;
    if (Fe.wxpersonInfo.openid) {
        var e = Fe.apiurl + "follow/modifyRelation", t = {
            api_key: Fe.opApiKey,
            v: "1.0",
            session_key: Fe.currentUser.session_key,
            client_info: Fe.client_info,
            call_id: new Date().getTime(),
            p_id: Xt,
            flag: 1,
            roomId: Wt,
            addfollowfrom: "3G_IPHONE_WHISPERMINIPRO"
        };
        t.sig = Oe.default.getsign(t), wx.request({
            data: t,
            url: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                if (console.log("关注主播==>" + JSON.stringify(e)), 1 == e.data.result) {
                    jt = 1, Yt = 1, Tt.setData({
                        focusImg: yt + "live_focus_on.png",
                        _focus: 1,
                        focusInfo: "已关注",
                        endFocusText: "已关注"
                    });
                    var t = {
                        userId: Fe.currentUser.uid,
                        type: 103,
                        name: Fe.currentUser.user_name,
                        level: Fe.currentUser.level,
                        Content: "关注了主播，一秒路转粉~",
                        userColor: "#fff",
                        userVipState: 0,
                        x: 0,
                        y: je,
                        width: 0,
                        height: ot,
                        size: ot,
                        tr: ""
                    };
                    t.width = dt, v(t), setTimeout(function() {
                        Pt.push(t), wx.showToast({
                            title: "关注成功",
                            icon: "none",
                            duration: 2e3
                        });
                    }.bind(this), 150);
                } else 30018 == e.data.error_code ? Tt.addFriend("friends/request", Xt, "我是" + Fe.currentUser.user_name + ",想关注你") : wx.showToast({
                    title: "关注失败，请稍后再试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
}

function ge() {
    var e = At;
    if (Fe.currentUser.session_key) {
        var t = Date.parse(new Date()), i = {
            api_key: Fe.opApiKey,
            v: "1",
            client_info: Fe.client_info,
            session_key: Fe.currentUser.session_key,
            call_id: t,
            uid: Xt,
            type: "211820270846018",
            playerId: Xt
        }, n = Oe.default.getsign(i);
        i.sig = n, wx.request({
            url: Fe.apiurl + "profile/getInfo",
            data: i,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                jt = t.data.has_followed, zt = t.data.is_friend, mi = t.data.head_url, Ci = t.data.user_name, 
                1 == jt || 1 == zt ? (Yt = 1, Tt.setData({
                    focusImg: yt + "live_focus_on.png",
                    _focus: 1,
                    focusInfo: "已关注",
                    endFocusText: "已关注"
                })) : (Yt = 0, Tt.setData({
                    focusImg: yt + "live_focus_normal.png",
                    _focus: 0,
                    focusInfo: "关注",
                    endFocusText: "关注"
                })), mi = void 0 != mi && null != mi ? mi.indexOf("hdn.xnimg.cn") >= 0 ? mi.replace(/http:\/\/hdn.xnimg.cn/, "https://ssl.hdn.xnimg.cn") : mi.replace(/http:\/\//, "https://") : "../../images/default_header.png", 
                0 == e && wx.downloadFile({
                    url: mi,
                    success: function(e) {
                        Dt.url = Ct.url = e.tempFilePath, 1 == hi && (Xi = setTimeout(function() {
                            clearTimeout(Xi), Pt.push(Dt);
                        }.bind(this), 6e3));
                    },
                    fail: function(e) {}
                }), Tt.setData({
                    "nav.userName": Ci,
                    "nav.userHeadUrl": mi
                });
            },
            fail: function() {}
        });
    }
}

function pe(e) {
    var t = Fe.apiurl + "comment/addComment", i = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        owner_id: Xt,
        entry_id: Wt,
        type: 39,
        content: e
    };
    i.sig = Oe.default.getsign(i), wx.request({
        data: i,
        url: t,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {}
    });
}

function me() {
    var e = Fe.apiurl + "user/isBindMobileMulti", t = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key
    };
    t.sig = Oe.default.getsign(t), wx.request({
        data: t,
        url: e,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {
            (Qt = e.data.is_bind_mobile) && Tt.setData({
                btnBindShow: !1
            });
        }
    });
}

function he(e, t, i) {
    if (Fe.currentUser.session_key) {
        var n = Date.parse(new Date()), a = {
            api_key: Fe.opApiKey,
            v: "1",
            client_info: Fe.client_info,
            session_key: Fe.currentUser.session_key,
            call_id: n,
            user: Fe.wxpersonInfo.openid,
            third_type: "6",
            third_code: e,
            encryptedData: t,
            iv: i
        }, o = Oe.default.getsign(a);
        a.sig = o, wx.request({
            url: Fe.apiurl + "user/bindThirdPartyMobile",
            data: a,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                1 === e.data.result ? (console.log("绑定成功"), Fe.aldstat.sendEvent("所有用户成功绑定手机号", "直播间" + String(Be.platform) + "成功绑定手机号"), 
                Tt.setData({
                    btnBindShow: !1
                })) : 10142 === e.data.error_code ? wx.showToast({
                    title: "手机号格式错误",
                    icon: "none",
                    duration: 2e3
                }) : 10141 === e.data.error_code || 10143 === e.data.error_code || 10144 === e.data.error_code ? wx.showToast({
                    title: "绑定手机号出错",
                    icon: "none",
                    duration: 2e3
                }) : 10145 === e.data.error_code || 10146 === e.data.error_code || 10147 === e.data.error_code ? wx.showToast({
                    title: "该手机号已被绑定,请联系客服",
                    icon: "none",
                    duration: 2e3
                }) : wx.showToast({
                    title: "绑定失败",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(e) {
                wx.hideLoading();
            }
        });
    }
}

function ve() {
    var e = Fe.apiurl + "livevideo/addRoomUser", t = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        liveRoomId: Wt,
        client_info: Fe.client_info
    };
    t.sig = Oe.default.getsign(t), wx.request({
        url: e,
        data: t,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {
            console.log("发送用户进入直播间", e);
        }
    });
}

function we() {
    console.log("用户退出直播间");
    var e = Fe.apiurl + "livevideo/deleteRoomUser", t = {
        api_key: Fe.opApiKey,
        v: "1.0",
        call_id: new Date().getTime(),
        session_key: Fe.currentUser.session_key,
        liveRoomId: Wt,
        client_info: Fe.client_info
    };
    t.sig = Oe.default.getsign(t), wx.request({
        url: e,
        data: t,
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        success: function(e) {}
    });
}

function ye() {
    if (Fe.wxpersonInfo.openid) {
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            live_room_id: Wt,
            with_like_total_count: 1,
            with_viewer_total_count: 0
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "livevideo/liveRoomGetLiveRoom",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                var t = "直播结束 " + R(e.data.duration / 1e3);
                void 0 != e.data.like_count && e.data.like_count, Tt.setData({
                    liveDuration: t
                }, function() {
                    3 != Mt && c(3);
                });
            }
        });
    }
}

function _e() {
    if (Fe.currentUser.session_key) {
        var e = Date.parse(new Date()), t = {
            api_key: Fe.opApiKey,
            v: "1",
            client_info: Fe.client_info,
            session_key: Fe.currentUser.session_key,
            call_id: e,
            uid: Fe.currentUser.uid,
            type: "17179869184"
        }, i = Oe.default.getsign(t);
        t.sig = i, wx.request({
            url: Fe.apiurl + "profile/getInfo",
            data: t,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                Fe.currentUser.level = e.data.userStarLevelInfoMessage.level, N();
            },
            fail: function(e) {}
        });
    }
}

function xe() {
    if (Fe.wxpersonInfo.openid) {
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            playerIdOne: Xt,
            roomIdOne: Wt,
            visitorId: Fe.currentUser.uid
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "livevideo/getLineRecordNew",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                if (void 0 == e.data) return !1;
                ci = e.data.id, e.data.roomIdOne == Wt ? (gi = e.data.roomIdTwo, pi = e.data.uidTwo) : (gi = e.data.roomIdOne, 
                pi = e.data.uidOne), 0 == wi && (wi = 1), K(), ui && Se();
            }
        });
    }
}

function Se() {
    if (Fe.wxpersonInfo.openid) {
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            lineId: ci,
            visitorId: Fe.currentUser.uid
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "livevideo/getPkCondition",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                if (void 0 == e.data) return !1;
                (fi > e.data.countDown || 0 == fi) && (fi = e.data.countDown);
                var t = 0, i = 0;
                Xt == e.data.uidOne ? (t = e.data.starOne, i = e.data.starTwo) : (t = e.data.starTwo, 
                i = e.data.starOne);
                var n = 0;
                Xt != e.data.uidOne && Xt != e.data.uidTwo || (n = 1), void 0 != t && void 0 != i && (Tt.setData({
                    "pk.starOne": t,
                    "pk.starTwo": i
                }), X(t, i)), fi > 0 && 0 == ti && 1 == n && W();
            }
        });
    }
}

function Te() {
    if (Fe.wxpersonInfo.openid) {
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            lineId: ci,
            visitorId: Fe.currentUser.uid
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "livevideo/getPkResult",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                var t = 0, i = 0;
                Xt == e.data.uidOne ? (t = e.data.starOne, i = e.data.starTwo) : (t = e.data.starTwo, 
                i = e.data.starOne), Tt.setData({
                    "pk.starOne": t,
                    "pk.starTwo": i,
                    "pk.countDown": "00:00"
                }), X(t, i);
                var n = void 0, a = void 0;
                1 == e.data.winRoomId ? n = a = yt + "tie.png" : Xt == e.data.winRoomId ? (n = yt + "victory.png", 
                a = yt + "fail.png") : (n = yt + "fail.png", a = yt + "victory.png"), Tt.setData({
                    isPkEnd: !1,
                    leftResultUrl: n,
                    rightResultUrl: a
                }), J();
            }
        });
    }
}

function Ie(e, t, i, n) {
    if (Fe.currentUser.session_key) {
        var a = Date.parse(new Date()), o = {
            api_key: Fe.opApiKey,
            v: "1",
            client_info: Fe.client_info,
            session_key: Fe.currentUser.session_key,
            call_id: a,
            uid: e,
            type: "211820270846018",
            playerId: e
        }, r = Oe.default.getsign(o);
        o.sig = r, wx.request({
            url: Fe.apiurl + "profile/getInfo",
            data: o,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(a) {
                if (console.log(a), 200 == a.statusCode && void 0 != a.data) {
                    Nt = Pt = null, Tt.setData({
                        "nav.starMoonCount": 0
                    }), ai = 0, jt = a.data.has_followed, zt = a.data.is_friend;
                    var o = {
                        liveRoomId: t,
                        playerId: e,
                        hasFollowed: jt,
                        isFriend: zt,
                        liveCoverImg: i,
                        liveTitle: n,
                        liveHeadUrl: a.data.head_url,
                        liveName: a.data.user_name
                    };
                    ke(t, o);
                } else ai = 0, wx.showToast({
                    title: "主播开小差了，请重试~",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function() {
                ai = 0, wx.showToast({
                    title: "主播开小差了，请重试~",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
}

function ke(e, t) {
    if (Fe.wxpersonInfo.openid) {
        var i = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            live_room_id: e,
            with_like_total_count: 0,
            with_viewer_total_count: 0
        }, n = Oe.default.getsign(i);
        i.sig = n, wx.request({
            url: Fe.apiurl + "livevideo/liveRoomGetLiveRoom",
            data: i,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(i) {
                if (void 0 != i.data.play_url && null != i.data.play_url) {
                    var n = i.data.play_url.split("?")[0];
                    t.playUrl = n, Wi = 1;
                    var a = getCurrentPages();
                    a[a.length - 1].onLoad(t);
                } else {
                    console.log("主播下播，换个直播间：", i);
                    var o = JSON.parse(JSON.stringify(Zt)), r = o.mFindIndex(function(t) {
                        return t.live_room_id === e;
                    });
                    o.splice(r, 1);
                    var s = Math.random() * o.length >> 0, l = o[s].live_room_id, u = o[s].player_id, d = o[s].cover_img_url, c = o[s].title;
                    Fe.liveShowString = JSON.stringify(o[s]), Jt = 0, Ie(u, l, d, c);
                }
            }
        });
    }
}

function De() {
    if (Fe.wxpersonInfo.openid) {
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            version: Fe.versionStr
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "reward/canReceiveStartSmallZhiBo",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                hi = e.data.result;
            }
        });
    }
}

function Ce() {
    if (Fe.wxpersonInfo.openid) {
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            clientInfo: JSON.stringify(Be)
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "reward/sendStarSmallZhiBo",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                console.log("res:", e.data.result), 1 == e.data.result && (vi += 5, Tt.setData({
                    starNum: vi,
                    giftStarsTop: -400,
                    giftAdShow: !1
                }), wx.showToast({
                    title: "领取成功~",
                    icon: "none",
                    duration: 2e3
                }));
            }
        });
    }
}

function Le() {
    if (Fe.wxpersonInfo.openid) {
        l();
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            type: 4,
            giftType: 1,
            playerId: Xt,
            client_info: Fe.client_info
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "gift/getDynamicGiftList",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                console.log(e), void 0 != e.data.giftList[0].freeGiftCount && (console.log("剩余星辰数:", e.data.giftList[0].freeGiftCount), 
                vi = e.data.giftList[0].freeGiftCount), Tt.setData({
                    starNum: vi,
                    littleStarNum: Li,
                    giftBagOpacity: 1
                });
            }
        });
    }
}

function Ue() {
    if (Fe.wxpersonInfo.openid) {
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            live_room_id: Wt,
            with_like_total_count: 0,
            with_viewer_total_count: 0
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "livevideo/liveRoomGetLiveRoom",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                Ri = e.data.sourceState, E();
            }
        });
    }
}

function be() {
    if (Fe.wxpersonInfo.openid) {
        var e = {
            api_key: Fe.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: Fe.currentUser.session_key,
            roomId: Wt,
            playerId: Xt
        }, t = Oe.default.getsign(e);
        e.sig = t, wx.request({
            url: Fe.apiurl + "livevideo/getPlayerNoticeInfo",
            data: e,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                e.data.content;
            }
        });
    }
}

"function" == typeof Symbol && Symbol.iterator;

var Pe, Ne = e(require("../../287BA2A48A740DDF4E1DCAA3EF2DC841.js")), Ae = e(require("../../B54465E28A740DDFD3220DE5DAFCC841.js")), Oe = e(require("../../14E98D478A740DDF728FE5401BCCC841.js")), Me = e(require("../../436428478A740DDF250240407F3DC841.js")), Re = require("../../2A5831C68A740DDF4C3E59C1F25DC841.js"), Fe = getApp(), Be = wx.getSystemInfoSync(), qe = Be.windowWidth, Ge = void 0, Ee = (Ge = "windows" == Be.platform ? Be.windowHeight : Be.screenHeight) / 1334, Ve = qe / 750, Ke = (wx.createCanvasContext("giftCanvas"), 
wx.createCanvasContext("msgCanvas")), He = wx.createCanvasContext("sendGiftCanvas");

Ke.shadowColor = "rgba(0, 0, 0, 0.3)";

var Je = Ee, We = Ke.createLinearGradient(0, 0, 0, Ge), Xe = Ke.createLinearGradient(0, 0, qe, 0), je = 0, ze = 0, Ye = 0, Ze = .2 * Ge >> 0, Qe = .75 * qe, $e = .89 * qe, et = Math.floor(39 * Je), tt = Math.floor(16 * Je), it = Number((20 * Je).toFixed(0)), nt = Math.floor(73 * Je), at = 500, ot = Math.floor(26 * Je), rt = "normal " + ot.toFixed(0) + "px sans-serif", st = Math.floor(112 * Je), lt = 5;

Ke.save(), Ke.font = rt;

var ut = Ke.measureText("人").width, dt = Ke.measureText(Fe.currentUser.user_name + "：").width, ct = Ke.measureText("：").width, ft = Ke.measureText("人人直播：").width;

Ke.restore();

var gt = Math.floor(24 * Je), pt = gt + 100, mt = 0, ht = Math.floor(350 * Je), vt = (Math.floor(130 * Je), 
[]), wt = void 0, yt = "../../images/live/", _t = [ "#ffc800", "#fb9700", "#f85800", "#f6225f" ], xt = [ "255,198,0", "249,151,24", "246,89,27", "243,40,97" ], St = [ yt + "live_grade_stars.png", yt + "live_grade_moon.png", yt + "live_grade_sun.png", yt + "live_grade_crown.png" ], Tt = void 0, It = 24 * Ve, kt = {
    userId: 1,
    type: 101,
    name: "人人直播",
    level: 100,
    Content: "欢迎各位进入直播间，友情提示：直播内容包含任何低俗、暴露和涉黄内容，账号会被封禁；安全部门会24小时巡查哦～",
    userVipState: 0,
    x: 0,
    y: je,
    width: ft,
    height: ot,
    size: ot,
    tr: ""
};

kt.tr = I(kt), kt.height = ot * kt.tr.length;

var Dt = {
    userId: 1,
    type: 105,
    name: "人人直播",
    level: 100,
    Content: "",
    userVipState: 0,
    x: 0,
    y: je,
    width: parseInt(395 * Je),
    height: parseInt(84 * Je),
    size: ot,
    tr: ""
}, Ct = {
    userId: 1,
    type: 107,
    name: "人人直播",
    level: 100,
    Content: "",
    userVipState: 0,
    x: 0,
    y: je,
    width: parseInt(490 * Je),
    height: parseInt(84 * Je),
    size: ot,
    tr: ""
}, Lt = Math.floor(24 * Je), Ut = -1, bt = -1, Pt = [], Nt = [], At = !1, Ot = "", Mt = 0, Rt = wx.createAnimation({
    duration: 100,
    timingFunctionL: "ease"
}), Ft = wx.createAnimation({
    duration: 200,
    timingFunctionL: "ease-in-out"
}), Bt = 0, qt = [ 1, 6, 66, 233, 520, 666, 888, 1314 ], Gt = 1, Et = 1, Vt = 0, Kt = {
    x: 0,
    y: 0
}, Ht = 0, Jt = 0, Wt = 0, Xt = 0, jt = 0, zt = 0, Yt = 0, Zt = void 0, Qt = !1, $t = 0, ei = 0, ti = 0, ii = 0, ni = 0, ai = 0, oi = "", ri = wx.getUpdateManager(), si = [], li = [], ui = !1, di = 0, ci = 0, fi = 0, gi = 0, pi = 0, mi = void 0, hi = 0, vi = 0, wi = 0, yi = yt + "live_message_vip.png", _i = yt + "live_message_vip_year.png", xi = Math.floor(30 * Je), Si = 0, Ti = 0, Ii = !1, ki = void 0, Di = void 0, Ci = void 0, Li = 0, Ui = 0, bi = -1, Pi = 0, Ni = null, Ai = void 0, Oi = 0, Mi = 0, Ri = 0, Fi = 0, Bi = Ge - 290 * Ee, qi = void 0, Gi = 0, Ei = [ {
    x: 45,
    y: 19
}, {
    x: 232,
    y: 19
}, {
    x: 419,
    y: 19
}, {
    x: 606,
    y: 19
}, {
    x: 45,
    y: 242
}, {
    x: 232,
    y: 242
}, {
    x: 419,
    y: 242
}, {
    x: 606,
    y: 242
} ], Vi = 100 * Ve, Ki = !1, Hi = 5 / 750 * qe, Ji = 0, Wi = 0, Xi = void 0, ji = [ "小声点，我正在表白呢！", "太好看了！停不下来怎么办！", "哇，发现一个超级好看的主播！", "快来看看我挖到的大宝贝！", "我有一场恋爱想跟你谈谈...", "惊了！TA居然能做到这个？", "同是九年义务教育，为什么你这么优秀？", "前方高能！快上车！", "我曾跨过山和大海，只为在此与TA相遇" ], zi = 0, Yi = !0;

Page({
    data: (Pe = {
        liveHeight: Ge,
        liveSrc: "",
        user1: yt + "live_focus_normal.png",
        user2: yt + "live_focus_normal.png",
        navigationBarHeight: Be.statusBarHeight,
        inputBtnShow: !1,
        inputShow: !0,
        _num: 1,
        _giftNum: 0,
        strLeft: 0,
        btnGiftShow: !0,
        remainRenrenGuo: Bt,
        rankCellList: [],
        comment_id: 0,
        welcomeMessageState: 0,
        liveState: {}
    }, t(Pe, "comment_id", 0), t(Pe, "roomLastId", 0), t(Pe, "focusLastId", 0), t(Pe, "liveItem", ""), 
    t(Pe, "sg1Show", !1), t(Pe, "sg2Show", !1), t(Pe, "sg3Show", !1), t(Pe, "animationRank", 0), 
    t(Pe, "btnBindShow", !0), t(Pe, "inputStrBack", ""), t(Pe, "input_bottom", 0), t(Pe, "endFocusText", "关注"), 
    t(Pe, "isLivePk", !0), t(Pe, "pkOpacity", 0), t(Pe, "leftResultUrl", yt + "tie.png"), 
    t(Pe, "rightResultUrl", yt + "tie.png"), t(Pe, "isPkEnd", !0), t(Pe, "giftBagBtnShow", !0), 
    t(Pe, "giftBagOpacity", 0), t(Pe, "giftAdShow", !0), t(Pe, "productInfoList", []), 
    t(Pe, "pk.pkJumpAlpha", 0), t(Pe, "kValues1", "auto"), t(Pe, "kValues2", "auto"), 
    t(Pe, "kValues3", "auto"), t(Pe, "nowCss", "no"), t(Pe, "huodongStr", ""), t(Pe, "wfyBtnShow", !0), 
    t(Pe, "bagGiftNum", 1), t(Pe, "alphaMsg", 1), t(Pe, "giftArr", []), t(Pe, "actionMul", 0), 
    t(Pe, "giftBottom", Ge), t(Pe, "littleStarNum", 0), t(Pe, "giftAlpha", 0), t(Pe, "nav.userHeadUrl", yt + "default_image.png"), 
    t(Pe, "nav.starMoonCount", 0), t(Pe, "onePayShow", !1), t(Pe, "liveTop", Ge), t(Pe, "yiyuanShow", !1), 
    t(Pe, "_focus", 0), t(Pe, "focusInfo", "关注"), t(Pe, "liveAction", !0), t(Pe, "starNum", vi), 
    t(Pe, "isPartner", !1), Pe),
    onLoad: function(e) {
        Tt = this, wx.getNetworkType({
            success: function(e) {
                var t = e.networkType;
                "2g" == t || "unknown" == t ? wx.showToast({
                    title: "当前网络太慢，请更换~",
                    icon: "none",
                    duration: 2e3
                }) : "none" == t && wx.showToast({
                    title: "网络连接不可用",
                    icon: "none",
                    duration: 2e3
                });
            }
        }), Fe.isLivePage = !0, 0 == Fe.isChat && Tt.setData({
            alphaMsg: 0
        }), s(), Ai = wx.getStorageSync("cookiesdata");
        var t = JSON.parse(Fe.liveShowString);
        M(t), Tt.setData({
            liveItem: t,
            navigationBarHeight: Be.statusBarHeight,
            charmTop: Be.statusBarHeight + Fe.globalData.navTopHeight
        }, function() {
            0 == Wi && h();
        }), "ios" == Be.platform && Tt.setData({
            giftBagOpacity: 1,
            btnGiftShow: !1
        }), De(), $(), mi = "", Gt = 1, Ui = Oi = 0, gi = pi = wi = 0, $t = Mt = ti = ai = di = fi = ci = 0, 
        gn = 0, ui = !1, me(), 1 == Wi && (kt.y = 0, kt.liveRoomId = e.liveRoomId), (Pt = []).push(kt), 
        si = [], N(), console.log("options:", e), Wt = e.liveRoomId, Xt = e.playerId, Zt = Fe.videosList, 
        oi = e.playUrl, Fe.globalData.liveRoomId = Wt, jt = parseInt(e.hasFollowed), zt = parseInt(e.isFriend), 
        1 != jt && 1 != zt || (Yt = 1, Tt.setData({
            focusImg: yt + "live_focus_on.png",
            _focus: 1,
            focusInfo: "已关注",
            endFocusText: "已关注"
        })), ve(), void 0 != e.liveCoverImg && (ki = e.liveCoverImg, Di = e.liveTitle, Tt.setData({
            liveCoverImg: ki
        })), Ue(), ae(Xt), wx.setKeepScreenOn({
            keepScreenOn: !0
        }), Tt.setData({
            amountWidth: k(String(Bt) + ",", It)
        }), Z(), Tt.signInCon = Tt.selectComponent("#signInCon"), Tt.signCanShow(), se(0), 
        1 == Wi && (Nt = [], Tt.onReady());
    },
    onReady: function() {
        Fe.isLivePage = !0, Et = 1, Tt.setData({
            liveSrc: oi
        }), r(), 1 == Wi && (Wi = 0, Tt.onShow());
    },
    onShareAppMessage: function(e) {
        var t = Fe.globalData.qudao;
        console.log("liveshow=share=success=", t), console.log("分享封面地址：", ki), Fe.aldstat.sendEvent("用户分享", String(Be.platform) + "端用户启动分享");
        JSON.parse(Fe.liveShowString);
        return {
            title: ji[Math.random() * ji.length >> 0],
            path: "/pages/home/home?liveId=" + Xt + "&liveRoomId=" + Wt + "&channelid=" + t + "&playUrl=" + oi,
            imageUrl: ki,
            success: function(t) {
                "shareAppMessage:ok" == e.errMsg && wx.showToast({
                    title: "转发成功~",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(e) {
                "shareAppMessage:fail cancel" == e.errMsg || e.errMsg;
            },
            complete: function(e) {}
        };
    },
    onHide: function() {
        At = !0;
    },
    onShow: function(e) {
        var t = this;
        "devtools" == Be.platform && (Tt.setData({
            nextAction: !1
        }), wx.hideLoading()), Wi = 0, Mi = 1, ti = 0, Gt = 1, Ti = Date.parse(new Date()), 
        ge(), en = wx.createAnimation({
            duration: 300,
            timingFunctionL: "ease"
        }), At && (At = !1, oe(Xt, Wt)), Oe.default.getMyTokensAccount("token/getTokensAccount"), 
        Oe.default.myTokenAccountCallback = function(e) {
            Bt = parseInt(e.data.TokensAccountResponse.tokensAmount), t.setData({
                remainRenrenGuo: Bt,
                amountWidth: k(String(Bt) + ",", It)
            });
        }, Ki && (Ki = !1, Tt.signInCon.onSign());
    },
    onUnload: function() {
        Wi = 0, ne();
    },
    signCanShow: function() {
        if (Fe.globalData.canSign) {
            var e = Me.default.formateTime(new Date());
            wx.getStorageSync("closeSignTime") != e && (Oe.default.isReceiveGiftToday(), Oe.default.isReceiveGiftTodayCallBack = function(e) {
                if (1 != e.data.result) Tt.signInCon.showSign(e); else if (1 == e.data.result) {
                    var t = Me.default.formateTime(new Date());
                    wx.setStorageSync("closeSignTime", t);
                }
            });
        } else ;
    },
    onaSignShare: function(e) {
        Ki = e.detail.signShareClick;
    },
    oncloseSign: function(e) {
        if (e.detail.signCloseClick) {
            var t = Me.default.formateTime(new Date());
            wx.setStorageSync("closeSignTime", t);
        }
    },
    onasignsuccess: function(e) {
        "小星星" == e.detail.name && (Li = e.detail.num);
    },
    drawGift: function() {
        te(0);
    },
    payClick: function(e) {
        var t = this;
        Fe.aldstat.sendEvent("页内充值", String(Be.platform) + "端用户开启页内充值");
        var i = this, n = e.currentTarget.dataset.item, a = e.currentTarget.dataset.index;
        i.setData({
            nowCss: a
        }), Oe.default.createRenrenguoOrder("token/createRechargeOrder", n, "zidingyi"), 
        Oe.default.paySuccessCheckCallback = function(e) {
            i.setData({
                nowCss: "no"
            }), Oe.default.getMyTokensAccount("token/getTokensAccount"), Oe.default.myTokenAccountCallback = function(e) {
                Bt = parseInt(e.data.TokensAccountResponse.tokensAmount), t.setData({
                    remainRenrenGuo: Bt,
                    amountWidth: k(String(Bt) + ",", It)
                });
            };
        }, Oe.default.createTradeInpageFallCallBack = function(e) {
            i.setData({
                nowCss: "no"
            });
        }, Oe.default.payFailCheckCallback = function(e) {
            i.setData({
                nowCss: "no"
            });
        };
    },
    toPayment: function() {
        Fe.aldstat.sendEvent("充值", String(Be.platform) + "端用户跳转充值"), wx.navigateTo({
            url: "./../payment/payment"
        });
    },
    statechange: function(e) {
        var t = e.detail.code;
        2001 == t ? console.log("已经连接服务器") : 2002 == t ? console.log("已经连接服务器,开始拉流") : 2003 == t ? console.log("网络接收到首个视频数据包(IDR)") : 2004 == t ? (console.log("视频播放开始", Ji), 
        Tt.setData({
            liveTop: Ji,
            nextAction: !1,
            liveAction: !1
        }), wx.hideLoading(), be()) : 2006 == t ? console.log("视频播放结束") : 2007 == t ? console.log("视频播放Loading") : -2301 == t ? (console.log("网络断连，且经多次重连抢救无效，更多重试请自行重启播放"), 
        wx.showToast({
            title: "视频断连，马上重试",
            icon: "none",
            duration: 2e3
        }), Tt.setData({
            nextAction: !1
        }), wx.createLivePlayerContext("player").play()) : -2302 == t ? console.log("获取加速拉流地址失败") : 2103 == t ? console.log("网络断连, 已启动自动重连") : 2104 == t ? console.log("网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀") : 2105 == t ? console.log("当前视频播放出现卡顿") : 3001 == t && console.log("RTMP -DNS解析失败");
    },
    error: function(e) {
        console.error("live-player error:", e.detail.errMsg);
    },
    canvasIdErrorCallback: function(e) {
        console.error(e.detail.errMsg);
    },
    bindButtonTap: function() {
        Fe.aldstat.sendEvent("撩ta", String(Be.platform) + "端用户启动撩ta"), Qt && this.setData({
            focus: !0,
            inputShow: !1,
            inputBtnShow: !0,
            giftBagOpacity: 0
        });
    },
    bindKeyInput: function(e) {
        At = !0;
    },
    bindblur: function() {
        setTimeout(function() {
            "" != Ot && (1 == ni ? i() : (ii = 0, Ot = "", Tt.setData({
                inputStr: ""
            })));
        }, 100), Tt.setData({
            focus: !1,
            inputShow: !0,
            inputBtnShow: !1,
            input_bottom: 0,
            giftBagOpacity: 1
        }), At = !1;
    },
    chatInputSendTextMessage: function() {
        null != Ot && "" != Ot.trim() ? (ni = 1, i()) : wx.showToast({
            title: "评论内容不能为空",
            icon: "none",
            duration: 2e3
        });
    },
    chatInputGetValueEvent: function(e) {
        Ot = e.detail.value, "ios" == Be.platform && Tt.setData({
            inputStrBack: Ot
        });
    },
    closeLive: function() {
        Fe.page = "liveShow", Fe.liveShowClose = ti, wx.navigateBack({
            changed: !0
        });
    },
    goHome: function() {
        wx.reLaunch({
            url: "./../home/home?page=liveShow"
        });
    },
    gotoHomePage: function() {
        Fe.aldstat.sendEvent("主播主页", String(Be.platform) + "端用户跳转主播主页"), wx.navigateTo({
            url: "../personalPage/personalPage?playerId=" + Xt + "&isFrom=liveShow&isLive=1&hasFollowed=" + jt + "&isFriend=" + zt
        });
    },
    liveFocusAction: function() {
        Ui = 3, console.log("点击关注"), this.focusAction();
        var e = wx.createAnimation({
            duration: 200,
            timingFunctionL: "ease"
        });
        e.opacity(0).translateX(20).step(), Tt.setData({
            liveFollowMove: e.export()
        }), setTimeout(function() {
            Tt.setData({
                liveFollowShow: !1
            });
        }.bind(this), 210);
    },
    focusAction: function() {
        Fe.aldstat.sendEvent("关注主播", String(Be.platform) + "端用户关注主播");
        var e = Date.parse(new Date()), t = {
            api_key: Fe.opApiKey,
            v: "1",
            client_info: Fe.client_info,
            session_key: Fe.currentUser.session_key,
            call_id: e,
            uid: Xt,
            type: "211820270846018",
            playerId: Xt
        }, i = Oe.default.getsign(t);
        t.sig = i, wx.request({
            url: Fe.apiurl + "profile/getInfo",
            data: t,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                jt = e.data.has_followed, zt = e.data.is_friend, 1 == jt || 1 == zt ? (Yt = 1, Tt.setData({
                    focusImg: yt + "live_focus_on.png",
                    _focus: 1,
                    focusInfo: "已关注",
                    endFocusText: "已关注"
                })) : (Yt = 0, console.log("关注主播:", Yt), fe());
            },
            fail: function() {}
        });
    },
    showRank: function() {
        1 != Mt && 0 == ti ? (Fe.aldstat.sendEvent("排行榜", String(Be.platform) + "端用户开启排行榜"), 
        c(1)) : 1 == ti && wx.showToast({
            title: "直播已结束，换个直播间看看吧",
            icon: "none",
            duration: 2e3
        });
    },
    nextLiveAction: function() {
        if (1 == ai) return !1;
        ne(), ai = 1, Fe.aldstat.sendEvent("传送门", String(Be.platform) + "端用户使用传送门");
        var e = Zt.mFindIndex(function(e) {
            return e.live_room_id === Wt;
        });
        e >= 0 && (zi = e), ++zi > Zt.length - 1 && (zi = 0);
        var t = Zt[zi];
        if (void 0 == t) return wx.showToast({
            title: "暂无数据，请返回首页操作~",
            icon: "none",
            duration: 2e3
        }), !1;
        var i = t.live_room_id, n = t.player_id, a = t.cover_img_url, o = t.title;
        Fe.liveShowString = JSON.stringify(t), Jt = 0, Tt.setData({
            nextAction: !0,
            giftBottom: -Ge,
            endShow: !1
        }, function() {
            var e = wx.createAnimation({
                duration: 200,
                timingFunctionL: "ease"
            });
            e.opacity(1).step(), Tt.setData({
                animationNext: e.export()
            }), setTimeout(function() {
                Nt = [], wx.showLoading({
                    title: "传送中...",
                    mask: !0
                }), wx.createLivePlayerContext("player").stop(), Ke.clearRect(0, 0, qe, wh), Ke.draw(), 
                Ae.default.requestAnimationFrame(b);
                var e = wx.createAnimation({
                    duration: 10,
                    timingFunctionL: "ease"
                });
                e.opacity(0).translateX(20).step(), Tt.setData({
                    liveTop: 0,
                    showJumpPlayer: !1,
                    rankShow: !1,
                    onePayShow: !1,
                    bagShow: !1,
                    bagIosShow: !1,
                    payShow: !1,
                    liveFollowMove: e.export()
                }), setTimeout(function() {
                    Tt.setData({
                        liveFollowShow: !1
                    });
                }.bind(this), 50), Ie(n, i, a, o);
            }, 250);
        });
    },
    clickNextMask: function() {
        return !1;
    },
    touchMaskHandler: function(e) {
        if (console.log("displayList:", Mt, ti), Mt > 0 && 0 == ti && (c(0), Tt.setData({
            giftBottom: -Ge,
            onePayShow: !1,
            yiyuanShow: !1
        })), !e.changedTouches[0]) return !1;
        j({
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
        }, {
            x: et,
            y: Ut,
            width: Dt.width,
            height: Dt.height
        }) && 2 == hi && wx.showToast({
            title: "今天幸运值已用完，明天再来吧~",
            icon: "none",
            duration: 2e3
        });
    },
    getStarZhiBo: function() {
        console.log("领取星尘开始"), Fe.aldstat.sendEvent("领取星尘", String(Be.platform) + "端用户领取星尘"), 
        1 == hi && (Fe.aldstat.sendEvent("用户行为", "点击了领取星尘"), hi = 2, Ce());
    },
    showGiftLayer: function() {
        2 != Mt && (mn = Jt = pn = Fi = 0, te(0), setTimeout(function() {
            new Ne.default.Tween({
                y: -Ge
            }).to({
                y: 0
            }, 300).delay(100).easing(Ne.default.Easing.Cubic.Out).onUpdate(function() {
                Tt.setData({
                    giftBottom: this.y
                });
            }).onComplete(function() {
                "ios" != Be.platform && Tt.setData({
                    onePayShow: Fe.hasyiyuan
                });
            }).start();
        }.bind(this), 100), Fe.aldstat.sendEvent("礼物层", String(Be.platform) + "端用户开启礼物层"), 
        c(2));
    },
    moveGift: function() {
        var e = -1 * ++Gi * qe;
        Ft.translateX(e).step(), this.setData({
            animationGiftStep: Ft.export()
        });
    },
    bagMultipleClick: function(e) {
        var t = e.target.dataset.num;
        "ios" == Be.platform ? Et = t : Gt = t, this.setData({
            multipleWidth: It * (String(qt[t - 1]).length + 1) + 4,
            bagGiftNum: qt[t - 1],
            _num: t,
            bagMultipleShow: !1,
            actionMul: 1
        });
    },
    selectBagMultiple: function() {
        Ii = !Ii, this.setData({
            bagMultipleShow: Ii
        });
    },
    giftClick: function(e) {
        0 == Vt && (Fe.aldstat.sendEvent("送礼", String(Be.platform) + "端触发送礼"), o({
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
        }));
    },
    tGiftStart: function(e) {
        if (!e.changedTouches[0]) return !1;
        Kt.x = e.changedTouches[0].clientX, Kt.y = e.changedTouches[0].clientY;
    },
    tGiftEnd: function(e) {
        if (!e.changedTouches[0]) return !1;
        var t = e.changedTouches[0].clientX - Kt.x, i = 0;
        if (t > 10) i = 2; else {
            if (!(t < -10)) return !1;
            i = 1;
        }
        ie(i);
    },
    getUserPhoneNumber: function(e) {
        console.log("开始获取手机号码"), Fe.aldstat.sendEvent("所有提示用户是否绑定手机号", "直播间" + String(Be.platform) + "是否绑定手机号"), 
        wx.login({
            success: function(t) {
                if (t.code) if ("getPhoneNumber:fail user deny" == e.detail.errMsg) console.log("拒绝授权" + e.detail.errMsg), 
                Fe.aldstat.sendEvent("所有用户手机号绑定点击否", "直播间" + String(Be.platform) + "手机号绑定点击否"); else {
                    var i = e.detail.encryptedData, n = e.detail.iv;
                    Fe.aldstat.sendEvent("所有用户手机号绑定点击是", "直播间" + String(Be.platform) + "手机号绑定点击是"), 
                    he(t.code, i, n);
                } else console.log("获取用户登录态失败！" + t.errMsg);
            }
        });
    },
    jumpPlayer: function() {
        if (1 == ai) return !1;
        ai = 1, Fe.aldstat.sendEvent("PK切换", String(Be.platform) + "端用户pk时间切换另一主播"), Tt.setData({
            nextAction: !0
        }, function() {
            var e = wx.createAnimation({
                duration: 200,
                timingFunctionL: "ease"
            });
            e.opacity(1).step(), Tt.setData({
                animationNext: e.export()
            }), setTimeout(function() {
                wx.showLoading({
                    title: "载入中...",
                    mask: !0
                }), Tt.setData({
                    showJumpPlayer: !1
                }), console.log(pi, gi), Ie(pi, gi);
            }, 250);
        });
    },
    gotoPeiwan: function() {
        wx.showModal({
            title: "提示",
            content: "主播需要下播后才能接单，可以先关注主播，请知晓~",
            showCancel: !1,
            success: function(e) {
                e.confirm && wx.navigateToMiniProgram({
                    appId: "wx9fb1c37433434976",
                    path: "pages/personalPage/personalPage?playerId=" + Xt,
                    extraData: {},
                    success: function(e) {
                        n();
                    },
                    fail: function(e) {}
                });
            }
        });
    },
    goStar: function() {
        Fe.aldstat.sendEvent("赠送星尘", String(Be.platform) + "端用户赠送星尘"), z();
    },
    bagAction: function() {
        console.log("背包启动"), Fe.aldstat.sendEvent("背包", String(Be.platform) + "端用户激活背包系统"), 
        5 != Mt && (Tt.setData({
            giftBottom: -Ge,
            onePayShow: !1
        }), Le(), c(5));
    },
    iosOpenBag: function() {
        6 != Mt && (Le(), c(6));
    },
    goLittleStar: function() {
        Fe.aldstat.sendEvent("赠送小星星", String(Be.platform) + "端用户赠送小星星"), Y();
    },
    myContributionClick: function() {
        Fe.aldstat.sendEvent("我的贡献", String(Be.platform) + "端用户跳转我的贡献"), wx.navigateTo({
            url: "../myContribution/myContribution"
        });
    },
    myBillClick: function() {
        Fe.aldstat.sendEvent("我的账单", String(Be.platform) + "端用户跳转我的账单"), wx.navigateTo({
            url: "../myBill/myBill?amountNum=" + this.data.remainRenrenGuo
        });
    },
    showWfy: function() {
        Fe.aldstat.sendEvent("waiting_for_you", String(Be.platform) + "端用户激活waiting for you"), 
        this.setData({
            showWfy: !0
        }, function() {
            var e = wx.createAnimation({
                duration: 150,
                timingFunctionL: "ease"
            });
            e.opacity(1).step(), this.setData({
                animationWfy: e.export()
            });
        }), setTimeout(function() {
            this.closeWfy();
        }.bind(this), 5e3);
    },
    closeWfy: function() {
        var e = wx.createAnimation({
            duration: 150,
            timingFunctionL: "ease"
        });
        e.opacity(0).step(), this.setData({
            animationWfy: e.export()
        }), setTimeout(function() {
            this.setData({
                showWfy: !1
            });
        }.bind(this), 160);
    },
    jumpChat: function() {
        if (0 == Fe.isChat) return !1;
        var e = JSON.parse(Fe.liveShowString).name;
        null != mi && void 0 != mi && "" != mi && void 0 != e && "" != e && null != e ? 1 != Oi && (console.log("name:", e), 
        Fe.aldstat.sendEvent("激活私聊", String(Be.platform) + "端用户激活私聊"), Pi = 0, bi = -1, 
        Tt.getWpsid()) : setTimeout(function() {
            Tt.jumpChat();
        }.bind(this), 100);
    },
    sendHello: function() {
        var e = [ "滴滴滴，有您的小可爱到了，请签收~", "歪？小可爱你在吗？", "要不要花三分钟了解下有趣的灵魂？" ], t = Fe.currentUser.uid + "@talk.m.renren.com", i = "970552229@talk.m.renren.com", n = wx.getStorageSync("_rtk"), a = new Date().getTime(), o = wx.getStorageSync("cookiesdata") + ";wpsid=" + bi, r = '<message fname="' + Fe.currentUser.user_name + '" from="' + t + '" to="' + i + '" type="chat" subtype="1000"><richbody type="dialog" localid="' + a + '"><font>' + e[Math.random() * e.length >> 0] + "</font></richbody></message>&_rtk=" + n;
        Re.postMessage("https://wpi.renren.com/muc_chat", o, r).then(function(e) {
            if (200 == e.statusCode) {
                console.log("发送消息=>" + JSON.stringify(e));
                wx.navigateTo({
                    url: "../chatDetail/chatDetail?id=" + Xt + "&name=" + JSON.parse(Fe.liveShowString).name + "&headUrl=" + mi + "&from=chat"
                });
            }
        });
    },
    getWpsid: function() {
        if (-1 == bi || void 0 == bi) {
            var e = wx.getStorageSync("cookiesdata"), t = {
                ins: "",
                mid: Pi,
                r: 65535 * Math.random()
            };
            Pi++, Ni = Re.getRequest("https://wpi.renren.com/comet_get", e, t, function(e) {
                if (200 == e.statusCode) {
                    for (var t = e.header["Set-Cookie"].split("; "), i = 0; i < t.length; i++) -1 != t[i].indexOf("wpsid") && (bi = t[i].split("=")[1]);
                    console.log("拉消息=wpsid=>wpsid：" + bi), wx.navigateTo({
                        url: "../chatDetail/chatDetail?id=" + Xt + "&name=" + JSON.parse(Fe.liveShowString).name + "&headUrl=" + mi + "&from=chat&link=1&wpsid=" + bi
                    });
                }
            }, function(e) {
                console.log("拉消息=wpsid=>" + JSON.stringify(e));
            });
        } else wx.navigateTo({
            url: "../chatDetail/chatDetail?id=" + Xt + "&name=" + JSON.parse(Fe.liveShowString).name + "&headUrl=" + mi + "&from=chat&link=1&wpsid=" + bi
        });
    },
    onOnepay: function() {
        Fe.aldstat.sendEvent("主播终端页点击“一元首充大礼包”条", "点击“一元首充大礼包”条"), Tt.setData({
            yiyuanShow: !0
        });
    },
    onCYiyuan: function() {
        Fe.aldstat.sendEvent("主播终端页关闭“一元首充大礼包”弹窗", "关闭“一元首充大礼包”弹窗"), Tt.setData({
            yiyuanShow: !1
        });
    },
    onBuyYiyuan: function() {
        var e = this;
        Fe.aldstat.sendEvent("主播终端页点击“一元首充大礼包”弹窗充值", "点击“一元首充大礼包”弹窗充值");
        var t = {
            id: 37,
            tokensCount: 1
        };
        Oe.default.createRenrenguoOrder("token/createRechargeOrder", t), Oe.default.paySuccessCheckCallback = function(t) {
            Fe.hasyiyuan = !0, wx.showToast({
                title: "首充成功~",
                icon: "none"
            }), e.setData({
                yiyuanShow: !1
            });
        }, Oe.default.payFailCheckCallback = function(e) {
            wx.showToast({
                title: "首充失败,请稍等再试~",
                icon: "none"
            });
        };
    },
    dingyue: function() {
        Oe.default.wechatSingleSubscription("主播直播间", Xt);
    }
});

var Zi = [ "animationRank", "animationGift", "animationEnd", "animationPay", "animationBag", "animationIosBag" ], Qi = [ "rankShow", "giftShow", "endShow", "payShow", "bagShow", "bagIosShow" ], $i = void 0, en = wx.createAnimation({
    duration: 300,
    timingFunctionL: "ease"
}), tn = 0, nn = 0, an = [ 0, 0, 0 ], on = [], rn = [], sn = wx.createAnimation({
    duration: 300,
    timingFunctionL: "ease-out"
}), ln = (wx.createAnimation({
    duration: 80,
    timingFunctionL: "ease-out"
}), void 0), un = void 0;

Array.prototype.mFindIndex = function(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.length, n = t; n < i; n++) if (e.call(this, this[n], n, this)) return n;
    return -1;
};

var dn = parseInt(600 * Ve) + 10, cn = "normal " + Number((24 * Ve).toFixed(0)) + "px sans-serif", fn = "normal " + Number((22 * Ve).toFixed(0)) + "px sans-serif", gn = 0, pn = 0, mn = 0;

ri.onCheckForUpdate(function(e) {
    e.hasUpdate && (ri.onUpdateReady(function() {
        wx.showModal({
            title: "更新提示",
            content: "新版本已经准备好，是否重启应用？",
            showCancel: !1,
            success: function(e) {
                e.confirm && ri.applyUpdate();
            }
        });
    }), ri.onUpdateFailed(function() {
        wx.showModal({
            title: "更新提示",
            content: "新版本下载失败",
            showCancel: !1
        });
    }));
});