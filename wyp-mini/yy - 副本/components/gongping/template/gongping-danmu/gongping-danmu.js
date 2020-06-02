function e(e) {
    return {
        1: "您暂时不能发言",
        2: "频道不存在",
        3: "子频道不存在",
        4: "用户发言子频道和实际所在子频道不一致",
        5: "该频道暂时禁言了",
        6: "该频道对你禁言",
        7: "请登录后再发言",
        8: "请稍后再发言",
        9: "请稍后再发言",
        10: "用户需要绑定手机才能发言",
        11: "说的太快了，休息下",
        12: "文本中含有违禁字",
        17: "禁止匿名用户发言",
        18: "服务器忙，请稍后再试",
        19: "发送内容过长",
        20: "发送内容过长"
    }[e += ""] || !1;
}

var t, i, n, s = require("../../lib/xmldom/dom-parser.js"), a = require("giftConfig.js"), r = a.getGiftConfig, o = a.getFreeFlowerConfig, c = a.contributeConfig, l = a.happyFightConfig, u = require("../../../../utils/request.js").AddCloudLog, f = require("../../../../utils/paramConfig.js").ParamConfig, d = require("barrage.js"), g = !1, h = null, p = !1, b = null, m = null, I = !1, U = !0, C = {
    barrage: {
        enable: !0,
        tpl: {
            nick: "{$nick}",
            sysInfo: "{$sysInfo}",
            userInfo: "{$userInfo}",
            gift: {
                giftCount: "{$giftCount}",
                giftName: "{$giftName}",
                giftImg: "{$giftImg}"
            },
            type: "{$type}"
        },
        bottom: [ 5, 30, 55, 80 ],
        transition: 12e3,
        limitInterval: 0
    }
}, S = {}, w = {}, v = {}, y = {
    type: function(e) {
        return Object.prototype.toString.call(e).replace(/\[object (.*)\]/, "$1").toLowerCase();
    },
    parseXML: function(e) {
        var t;
        return e && "string" == typeof e ? (t = new s.DOMParser(), t.parseFromString(e)) : null;
    },
    limitWords: function(e, t) {
        if (void 0 !== e) {
            for (var i, n = 0, s = "", a = 0; a < e.length; a++) if (i = e.charCodeAt(a), (n += i <= 127 ? 1 : i <= 2047 ? 2 : i <= 65535 ? 3 : 4) > t) {
                s = e.substring(0, a);
                break;
            }
            return "" === s && (s = e), s;
        }
    },
    isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
    }
}, k = {
    transform: function(e, t) {
        var i, n, s, a = [];
        if (s = e.chat_msg, n = y.limitWords(e.nick, 18), "object" == y.type(s)) return s;
        for (var r = 0, o = (i = "array" == y.type(s) ? s : [ s ]).length; r < o; r++) {
            var c = i[r];
            if (~c.indexOf("<?xml")) {
                var l = y.parseXML(i[r]);
                c = l.getElementsByTagName("txt")[0] && l.getElementsByTagName("txt")[0].getAttribute("data") || "";
            }
            a.push({
                nick: n,
                text: c
            });
        }
        return this.filter(a), a;
    },
    transformDamu: function(e) {
        var t = [], i = e.msg;
        if (i.indexOf("<?xml") > -1 && i.indexOf("<msg>") > -1) {
            var n = y.parseXML(i).getElementsByTagName("txt")[0].attributes[0].value;
            t.push({
                uid: e.from_uid || 0,
                nick: e.nick,
                text: n
            });
        } else t.push({
            uid: e.from_uid || 0,
            nick: e.nick,
            text: e.msg
        });
        return this.filter(t), t;
    },
    filter: function(e) {
        function t(e) {
            return e.text = e.text.replace(/\/\{[A-Za-z0-9]{1,3}/g, "").replace(/yy:\/\//gi, ""), 
            !!e.text;
        }
        if ("array" === y.type(e)) for (var i = 0; i < e.length; i++) t(e[i]) || e.splice(i, 1); else {
            if ("object" !== y.type(e)) return;
            t(e) || (e = null);
        }
    }
};

k.format = function(e) {
    var t = Date.now(), i = this, n = {
        content: [],
        comboLs: []
    }, s = [];
    return "user_count" === e.response && i.wsCallback4 && i.wsCallback4(e.total_count), 
    "chat" === e.response && e.msg && (n.content = n.content.concat(k.transformDamu(e))), 
    "flower_broadcast" == e.response && e && (n.content = n.content.concat(e)), "combo_bc" === e.response && e.effect_lv && n.comboLs.push({
        fromId: e.from_id,
        fromNick: y.limitWords(e.from_nick, 18),
        effectLv: e.effect_lv,
        nowCombo: e.now_combo.toString(),
        num: e.num.toString(),
        type: e.type,
        end: !1,
        start: !0
    }), "gift_broadcast" === e.response && (s.push({
        uid: e.from_id,
        nick: y.limitWords(e.from_name, 18),
        giftType: e.gift_type,
        giftCount: e.gift_num
    }), e.detailInfo.GIFTLEVEL <= 0 && n.comboLs.push({
        fromId: e.from_id,
        fromNick: y.limitWords(e.from_name, 18),
        effectLv: 0,
        num: e.gift_num.toString(),
        type: e.gift_type,
        end: !1,
        start: !0
    }), n.content = n.content.concat(s)), "lunmai" === e.response && e.uid && e.uid != _.anchorUid && (_.anchorUid = e.uid, 
    _.wsCallback3 && _.wsCallback3(e.uid)), S[t] = n, t;
};

var _ = {
    isServiceChannelReady: !1,
    isGiftReady: !1,
    socketOpen: !1,
    anchorUid: "",
    userInfo: "",
    topSid: "",
    subSid: "",
    systemType: "",
    joinChannel: "",
    temp: [],
    wsCallback: null,
    wsCallback2: null,
    wsCallback3: null,
    wsCallback4: null,
    wsCallback5: null,
    wsCallback6: null,
    wsCallback7: null,
    wsCallback8: null,
    wsCallback9: null,
    wsCallback10: null,
    wsCallback11: null,
    wsCallback12: null,
    wsCallback13: null,
    wsCallback14: null,
    bugGiftResTipsMap: {
        2: "抱歉，不能自己送给自己哦！",
        3: "您要赠送的主播已经离开1号麦序，您不能进行本次赠送了哦！",
        4: "对不起，月票只能送给签约歌手哦~，选择其他礼物赠送吧！",
        5: "送礼物失败！",
        6: "抱歉，礼物已经下架，请选择别的礼物吧！",
        9: "该礼物只能由客户端送出！",
        10: "送礼物需要在频道呆够时间才能送！",
        14: "抱歉，因为目前直播内容较为特殊，礼物功能将暂停使用。谢谢大家支持",
        7: "退出频道升级！",
        103017: "对不起，娱乐套件4.0删档内测期间，只有受邀用户才能使用该功能哦。",
        103023: "已开启消费锁,解锁后才能消费",
        102323: "已开启消费锁,无法消费",
        103021: "参数错误",
        103020: "sql affected row错误",
        103022: "K币消费失败",
        103024: "获取用户的消费状态失败",
        103019: "查询日期超出有效范围",
        103025: "消费商品类型不被允许",
        103026: "处于月结不允许做此操作"
    },
    init: function(e, t, s, a, r, o, c, l, f, g, C, S, w, v, y) {
        u("gongping_init_start", {
            sid: e.topSid || "",
            ssid: e.subSid || e.topSid,
            uid: e.uid || 0
        }, "");
        var k = this;
        p = !1, I = !1, U = !0, k.topSid = e.topSid || "", k.subSid = e.subSid || e.topSid, 
        k.systemType = e.systemType, k.joinChannel = e.joinChannel, k.anchorUid = e.uid || 0, 
        k.userInfo = wx.getStorageSync("udbInfo") || {}, i = e.h5, n = e.svc, k.parentContext = e.context, 
        k.isServiceChannelReady = !1, t && (k.wsCallback = t), s && (k.wsCallback2 = s), 
        a && (k.wsCallback3 = a), r && (k.wsCallback4 = r), o && (k.wsCallback5 = o), c && (k.wsCallback6 = c), 
        l && (k.wsCallback7 = l), f && (k.wsCallback8 = f), g && (k.wsCallback9 = g), C && (k.wsCallback10 = C), 
        S && (k.wsCallback11 = S), w && (k.wsCallback12 = w), v && (k.wsCallback13 = v), 
        y && (k.wsCallback14 = y), d.clearAll(), k.isServiceChannelReadyFn(), k.insertSysInfo(0), 
        k.topSid && k.subSid && (k.checkRoomStatus(k.topSid, k.subSid), k.connectLive(), 
        k.getUdbInfo(), u("gongping_init_end", {
            sid: k.topSid,
            ssid: k.subSid,
            uid: k.anchorUid
        }, ""), b && clearTimeout(b), m && clearTimeout(m), h && clearTimeout(h), b = setTimeout(function() {
            p || k.queryChSortedConsumesReq();
        }, 8e3), m = setTimeout(function() {
            I || k.queryHappyFightReq();
        }, 5e3));
    },
    resetDanmuInfo: function() {
        g = !1, u("resetDanmuInfo", {
            sid: this.topSid,
            ssid: this.subSid,
            uid: this.anchorUid
        }, g);
    },
    isServiceChannelReadyFn: function() {
        this.isServiceChannelReady = i.isServiceChannelReady(), this.isServiceChannelReady && !g && (this.requestPack(), 
        g = !0), u("isServiceChannelReadyFn", {
            sid: this.topSid,
            ssid: this.subSid,
            uid: this.anchorUid
        }, {
            isServiceChannelReady: this.isServiceChannelReady,
            hasConnectChannel: g
        });
    },
    getUdbInfo: function() {
        _.userInfo || (_.userInfo = wx.getStorageSync("udbInfo"));
    },
    beKickedChannel: function(e) {
        u("beKickedChannel", {
            sid: this.topSid,
            ssid: this.subSid,
            uid: this.anchorUid
        }, e), this.wsCallback14(!0), wx.showModal({
            content: e,
            showCancel: !1,
            success: function(e) {
                if (e.confirm) {
                    var t = getCurrentPages().length;
                    t && t >= 2 ? wx.navigateBack({
                        delta: 1,
                        fail: function() {}
                    }) : wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }
            }
        });
    },
    queryChSortedConsumesReq: function() {
        var e = this;
        p = !0, c.queryChSortedConsumesReq(i, n, e.topSid, f.PC_APPID, 1017, 1, 2011), c.totalData(i, n, f.YY_APPID, 8812, 3);
    },
    queryHappyFightReq: function() {
        I = !0, l.queryHappyFightReq(i, n, f.PC_APPID, 9530, 2, 2200, 123), u("queryHappyFightReq", {
            sid: this.topSid,
            ssid: this.subSid,
            uid: this.anchorUid
        }, "");
    },
    setChannelEventCb: function() {
        var e = this, t = !1;
        i.setChannelEventCb(function(i) {
            var n = _.userInfo.yyuid || 0;
            if (0 == i.type) {
                if (4 !== i.code) return void (10 == i.code ? e.beKickedChannel("频道人数达到上限【10】") : 6 == i.code ? e.parentContext.onUpdateEncodedChannel(!0) : e.beKickedChannel("该直播间受限，可以看看其他的～【" + i.code + "】"));
                e.queryChSortedConsumesReq(), e.queryHappyFightReq();
            } else if (1 == i.type) t || (e.wsCallback4 && e.wsCallback4(i.total), t = !0, h && clearTimeout(h), 
            h = setTimeout(function() {
                t = !1;
            }, 2e3)); else if (3 == i.type) e.beKickedChannel("已在其它端进入频道，小程序端自动退出【3】"); else if (7 == i.type) e.beKickedChannel("你被踢出频道，可以看看其他的～【7】"); else if (9 == i.type) {
                var s = i.disableText[i.topSid] || 0;
                s && s.length && s.indexOf(n) > -1 ? e.wsCallback7(!0) : e.wsCallback7(!1);
            } else 10 == i.type ? i.uid == n && (1 == i.disable ? e.wsCallback7(!0) : e.wsCallback7(!1)) : 11 == i.type && i.subSid == e.subSid && (2 == i.status || 3 == i.status ? e.wsCallback7(!0) : e.wsCallback7(!1));
            u("setChannelEventCb", {
                sid: e.topSid,
                ssid: e.subSid,
                uid: e.anchorUid
            }, i);
        }, !0);
    },
    setH5EventCb: function() {
        var e = this;
        i.setH5EventCb(function(t) {
            if (0 == t.type && 0 == t.code) _.userInfo || wx.getStorageSync("udbInfo"); else if (1 == t.type) ; else if (2 == t.type) {
                var n = f.APPIDS;
                i.subsAppids(n);
                var s = [ 22 ];
                i.unsubsAppids(s), g || e.requestPack();
            }
            u("setH5EventCb", {
                sid: e.topSid,
                ssid: e.subSid,
                uid: e.anchorUid
            }, {
                evt: t,
                hasConnectChannel: g
            });
        }, !0);
    },
    requestPack: function() {
        var e = this;
        u("gift_and_flower_config_request", {
            sid: e.topSid,
            ssid: e.subSid,
            uid: e.anchorUid
        }, ""), r.init(i, n, f.YY_APPID, 3100, 41, function(t) {
            e.isGiftReady = !0, w = t.allGiftInfo, v = t.giftImgInfo, "Android" == e.systemType && e.wsCallback9(t), 
            u("gift_and_flower_config_response", {
                sid: e.topSid,
                ssid: e.subSid,
                uid: e.anchorUid
            }, "");
        }), o.init(i, n, f.YY_APPID, 3111, 1);
    },
    getAnchorInfo: function(e) {
        if (e) {
            var t = this;
            wx.request({
                url: f.WAP_COM_HOST + "/mobileweb/anchor/info/" + e,
                method: "GET",
                success: function(e) {
                    var i = e.data;
                    if (i && 0 == i.code) {
                        var n = i.data, s = {
                            uid: n.uid,
                            nick: n.nick
                        };
                        t.wsCallback5 && t.wsCallback5(s);
                    }
                }
            });
        }
    },
    setH5MaixuCb: function() {
        var e = this;
        i.setH5MaixuCb(function(i) {
            var n = {};
            switch (i.type) {
              case 0:
                i.chorus.length >= 2 && (e.getAnchorInfo(i.chorus[1]), t = i.chorus[1]);
                break;

              case 2:
                i.uid != t && i.uid != e.anchorUid || (t = 0, e.wsCallback5 && e.wsCallback5({}));
                break;

              case 5:
                i.uid == t && (t = 0, e.wsCallback5 && e.wsCallback5({}));
                break;

              case 9:
                n.response = "lunmai", n.uid = i.uid, n.uid && n.uid != _.anchorUid && (_.anchorUid = n.uid, 
                _.wsCallback3 && _.wsCallback3(n.uid));
                break;

              case 16:
                i.uid && (e.getAnchorInfo(i.uid), t = i.uid);
                break;

              case 17:
                e.wsCallback5 && e.wsCallback5({}), t = 0;
            }
        }, !0);
    },
    checkRoomStatus: function(e, t) {
        var i = this;
        if (e && t) {
            var n = "https://wap.yy.com/mobileweb/play/checkChannelOnline?sid=" + e + "&ssid=" + t;
            wx.request({
                url: n,
                method: "GET",
                success: function(s) {
                    var a = s.data;
                    if (0 == a.code) {
                        var r = a.data[0];
                        U = !!r;
                    } else U = !1;
                    u(n, {
                        sid: e,
                        ssid: t,
                        uid: i.anchorUid
                    }, a);
                },
                fail: function(s) {
                    U = !1, u(n, {
                        sid: e,
                        ssid: t,
                        uid: i.anchorUid
                    }, s);
                }
            });
        }
    },
    setH5ChatRecvCb: function() {
        var t = this, n = !0;
        i.setH5ChatRecvCb(function(i) {
            if (U) {
                if (0 != i.code) {
                    var s = e(i.code);
                    return s && t.wsCallback8(s), void u("gongping_damu_response_fail", {
                        sid: t.topSid,
                        ssid: t.subSid,
                        uid: t.anchorUid
                    }, i);
                }
                _.userInfo.yyuid || (_.userInfo = wx.getStorageSync("udbInfo")), _.userInfo.yyuid != i.from_uid && (n && (n = !1, 
                u("gongping_damu_recv_first", {
                    sid: t.topSid,
                    ssid: t.subSid,
                    uid: t.anchorUid
                }, i)), i.response = "chat", t.widgetUpdate(k.format.call(t, i)));
            } else u("gongping_damu_norecv_for_nolive", {
                sid: t.topSid,
                ssid: t.subSid,
                uid: t.anchorUid
            }, i);
        }, !0);
    },
    propsBroadcastMerge: function(e) {
        for (var t = this, i = new n.Buffer(e), s = i.getUI32(), a = {}, r = 0; r < s; ++r) {
            a.response = "gift_broadcast", a.gift_type = i.getUI32(), a.gift_num = i.getUI32(), 
            a.from_id = i.getUI32(), a.to_id = i.getUI32(), a.from_name = i.getUTF8String(), 
            a.to_name = i.getUTF8String(), a.detailInfo = {};
            for (var o = i.getUI32(), c = 0; c < o; ++c) {
                var l = i.getUTF8String(), u = i.getUTF8String();
                a.detailInfo[l] = u;
            }
            t.widgetUpdate(k.format.call(t, a));
        }
    },
    buyGiftResponse: function(e) {
        var t = {}, i = new n.Buffer(e);
        t.result = i.getUI16(), t.type = i.getUI32(), t.num = i.getUI32(), t.fromId = i.getUI32(), 
        t.toId = i.getUI32(), t.toYYNumber = i.getUI32(), t.toName = i.getUTF8String(), 
        t.qinMiDuAdd = i.getUI32();
        for (var s = new Object(), a = i.getUI32(), r = 0; r < a; ++r) {
            var o = i.getUTF8String(), c = i.getUTF8String();
            s[o] = c;
        }
        if (t.detailInfo = s, this.buyGiftResultHandler(t), t.detailInfo && t.detailInfo.errDetail) {
            var l = JSON.parse(t.detailInfo.errDetail);
            wx.showToast({
                title: l.description,
                icon: "none"
            });
        }
        u("sendgift_response", {
            sid: this.topSid,
            ssid: this.subSid,
            uid: this.anchorUid
        }, t);
    },
    buyGiftResultHandler: function(e) {
        0 != e.result && 1 != e.result && wx.showToast({
            title: this.bugGiftResTipsMap[e.result] || "",
            icon: "none"
        }), this.parentContext.giftResponseHandler(e);
    },
    ComboFloatEffectsBC: function(e) {
        var t = this, i = {}, s = new n.Buffer(e);
        i.response = "combo_bc", i.topch = s.getUI32(), i.subch = s.getUI32(), i.from_id = s.getUI32(), 
        i.toid = s.getUI32(), i.from_nick = s.getUTF8String(), i.to_nick = s.getUTF8String(), 
        i.type = s.getUI32(), i.num = s.getUI32(), i.effect_lv = s.getUI32(), i.show_effect = s.getUI32(), 
        i.now_combo = s.getUI32(), i.next_combo = s.getUI32(), i.detailInfo = {};
        for (var a = s.getUI32(), r = 0; r < a; ++r) {
            var o = s.getUTF8String(), c = s.getUTF8String();
            i.detailInfo[o] = c;
        }
        t.widgetUpdate(k.format.call(t, i)), u("ComboFloatEffectsBC", {
            sid: t.topSid,
            ssid: t.subSid,
            uid: t.anchorUid
        }, i);
    },
    freePropsBroadcas: function(e) {
        for (var t = new n.Buffer(e), i = t.getUI32(), s = {}, a = 0; a < i; ++a) {
            s.response = "gift_free", s.type = t.getUI32(), s.num = t.getUI32(), s.fromId = t.getUI32(), 
            s.toId = t.getUI32(), s.fromName = t.getUTF8String(), s.toName = t.getUTF8String(), 
            s.detailInfo = {};
            for (var r = t.getUI32(), o = 0; o < r; ++o) {
                var c = t.getUTF8String(), l = t.getUTF8String();
                s.detailInfo[c] = l;
            }
        }
    },
    getListUnitStrMap: function(e) {
        for (var t = e.getUI32(), i = [], n = 0; n < t; n++) {
            for (var s = e.getUI32(), a = {}, r = 0; r < s; r++) {
                var o = e.getUI32(), c = e.getUTF8String();
                a[o] = c;
            }
            i.push(a);
        }
        return i;
    },
    queryChSortedConsumesRes: function(e) {
        try {
            var t = {}, i = new n.Buffer(e);
            t.result = i.getUI32(), t.chId = i.getUI32(), t.offset = i.getUI32(), t.limit = i.getUI32(), 
            t.total = i.getUI32(), t.list = this.getListUnitStrMap(i), wx.setStorageSync("sortedConsumesInfo", JSON.stringify(t));
        } catch (e) {
            u("queryChSortedConsumesRes_fail", {
                sid: this.topSid,
                ssid: this.subSid,
                uid: this.anchorUid
            }, e);
        }
    },
    BroadcastChSortedConsumes: function(e) {
        try {
            var t = {}, i = new n.Buffer(e);
            t.result = 0, t.chId = i.getUI32(), t.total = i.getUI32(), t.list = this.getListUnitStrMap(i), 
            wx.setStorageSync("sortedConsumesInfo", JSON.stringify(t));
        } catch (e) {
            u("BroadcastChSortedConsumes_fail", {
                sid: this.topSid,
                ssid: this.subSid,
                uid: this.anchorUid
            }, e);
        }
    },
    sendResponse: function(e, t, i) {
        if (20 == e) switch (t) {
          case 4:
            this.propsBroadcastMerge(i);
            break;

          case 101:
            this.buyGiftResponse(i);
            break;

          case 106:
            this.ComboFloatEffectsBC(i);
            break;

          case 1004:
            this.freePropsBroadcas(i);
        }
        if (1017 == e) switch (t) {
          case 2:
            this.queryChSortedConsumesRes(i);
            break;

          case 3:
            this.BroadcastChSortedConsumes(i);
        }
    },
    unmarshalPKNotify: function(e) {
        var t = {};
        t.extendsInfo = {};
        var i = new n.Buffer(e);
        t.state = i.getUI32(), t.type = i.getUI32(), t.result = i.getUI32(), t.title = i.getUTF8String(), 
        t.pntitle = i.getUTF8String(), t.luid = i.getUI32(), t.lnick = i.getUTF8String(), 
        t.lhead_url = i.getUTF8String(), t.ruid = i.getUI32(), t.rnick = i.getUTF8String(), 
        t.rhead_url = i.getUTF8String(), t.lnum = i.getUI32(), t.rnum = i.getUI32(), t.ltime = i.getUI32(), 
        t.now = i.getUI64(), t.tlen = i.getUI32(), t.ltopcid = i.getUI32(), t.lsubcid = i.getUI32(), 
        t.rtopcid = i.getUI32(), t.rsubcid = i.getUI32(), t.ppDuration = i.getUI32(), t.pkDuration = i.getUI32(), 
        t.pnDuration = i.getUI32(), t.err_desc = i.getUTF8String(), t.mapSize = i.getUI32();
        for (var s = 0; s < t.mapSize; ++s) {
            var a = i.getUTF8String(), r = i.getUTF8String();
            t.extendsInfo[a] = r;
        }
        this.wsCallback13(t), u("queryHappyFightRes", {
            sid: this.topSid,
            ssid: this.subSid,
            uid: this.anchorUid
        }, "");
    },
    sendResponse123: function(e, t, i) {
        if (9530 == e) switch (t) {
          case 1:
            this.unmarshalPKNotify(i);
        }
    },
    unmarshalGift: function(e) {
        var t = {}, i = new n.Buffer(e);
        t.xmlUrl = i.getUTF8String();
        var s = i.getUI32();
        t.giftInfo = [];
        for (var a = 0; a < s; ++a) {
            var o = i.getUTF8String();
            t.giftInfo[a] = o;
        }
        var c = i.getUI32();
        c = c > 10 ? 10 : c, t.extData = {};
        for (var l = 0; l < c; ++l) {
            var f = i.getString(), d = i.getString();
            f && (t.extData[f] = d);
        }
        r.initGiftList(t), g = !0, u("unmarshalFlowerGift", {
            sid: this.topSid,
            ssid: this.subSid,
            uid: this.anchorUid
        }, {
            data: e,
            vectorSize: s,
            extSize: c,
            unmarshalInfo: t
        });
    },
    unmarshalFlowerGift: function(e) {
        var t = this, i = {}, s = new n.Buffer(e);
        i.result = s.getUI32(), i.flwNumMax = s.getUI32(), i.flwIncSecs = s.getUI32(), i.flwIncNum = s.getUI32(), 
        i.flwOwnedNums = s.getUI32(), i.flwRemainSecs = s.getUI32(), u("unmarshalFlowerGift_num", {
            sid: t.topSid,
            ssid: t.subSid,
            uid: t.anchorUid
        }, i), t.wsCallback10(i), g = !0;
    },
    unmarshalFreeFlowerGift: function(e) {
        var t = this, i = {};
        i.response = "flower_broadcast";
        var s = new n.Buffer(e);
        if (1 == s.getUI32()) {
            var a = s.decompress();
            s = new n.Buffer(a);
        }
        var r = s.getUI32();
        r > 8e3 && wx.showToast({
            title: "一秒内频道内最多20个鲜花"
        });
        for (var o = 0; o < r; ++o) {
            i.num = s.getUI32(), i.uid = s.getUI32(), i.toId = s.getUI32(), i.fromName = s.getUTF8String(), 
            i.toName = s.getUTF8String();
            var c = s.getUI32();
            i.extendInfo = {};
            for (var l = 0; l < c; ++l) {
                var u = s.getUTF8String(), f = s.getUTF8String();
                i.extendInfo[u] = f;
            }
        }
        t.widgetUpdate(k.format.call(t, i));
    },
    unmarshalSendFlwRsp: function(e) {
        var t = this, i = new n.Buffer(e), s = {};
        s.result = i.getUI32(), s.sendednum = i.getUI32(), s.flwOwnedNums = i.getUI32(), 
        s.flwRemainSecs = i.getUI32(), s.toId = i.getUI32(), s.extendInfo = {};
        for (var a = i.getUI32(), r = 0; r < a; ++r) {
            var o = i.getUTF8String(), c = i.getUTF8String();
            s.extendInfo[o] = c;
        }
        if (0 == s.result || 240007 == s.result || 240008 == s.result) {
            if (t.wsCallback11(s), 240007 == s.result || 240008 == s.result) {
                var l = {};
                l.response = "flower_broadcast", l.fromName = t.userInfo.partnerNickname || "", 
                t.widgetUpdate(k.format.call(t, l));
            }
        } else wx.showToast({
            title: "系统出错",
            icon: "none"
        });
        u("unmarshalSendFlwRsp", {
            sid: t.topSid,
            ssid: t.subSid,
            uid: t.anchorUid
        }, s);
    },
    unmarshalNoble: function(e) {
        try {
            var t = new n.Buffer(e).getUI32();
            this.wsCallback12(t);
        } catch (e) {
            u("unmarshalNoble", {
                sid: this.topSid,
                ssid: this.subSid,
                uid: this.anchorUid
            }, e);
        }
    },
    getHeaderData: function(e) {
        e.getUI32();
        var t = e.getUI32();
        e.getUI16();
        return t;
    },
    setH5DataRecvCb: function() {
        var e = this;
        i.setH5DataRecvCb(function(t, i) {
            if (15012 == t || 25112 == t || 15013 == t || 60035 == t) if (60035 != t && 15013 != t) {
                var s = new n.Buffer(i), a = e.getHeaderData(s);
                if (123 == a || 120 == a || 102 == a) if (123 == a) {
                    s.getUI32();
                    var r = s.getUI32(), o = s.getUI32(), c = s.getBytes();
                    e.sendResponse123(r, o, c);
                } else {
                    s.getUI32(), s.getUI32();
                    var l = !1;
                    if (120 == a && (l = s.getBool()), l) for (var u = s.decompress(), f = new n.Buffer(u), d = f.getUI32(), g = 0; g < d; ++g) {
                        f.getUI32();
                        for (var h = f.getUI32(), p = f.getUI32(), b = f.getBytes(), m = f.getUI32(), I = 0; I < m; ++I) f.getUI32(), 
                        f.getUTF8String();
                        e.sendResponse(h, p, b);
                    } else for (var U = s.getUI32(), C = 0; C < U; C++) {
                        s.getUI32();
                        var S = s.getUI32(), w = s.getUI32(), v = s.getBytes();
                        e.sendResponse(S, w, v);
                    }
                }
            } else {
                for (var y = new n.Buffer(i), k = y.getUI16(), _ = y.getUI16(), F = y.getUI32(), T = 0; T < F; ++T) y.getUI16(), 
                y.getUTF8String();
                if (3100 == k && 42 == _) {
                    var x = y.getBytes();
                    e.unmarshalGift(x);
                }
                if (3111 == k && 2 == _) {
                    var R = y.getBytes();
                    e.unmarshalFlowerGift(R);
                }
                if (3111 == k && 6 == _) {
                    var B = y.getBytes();
                    e.unmarshalFreeFlowerGift(B);
                }
                if (3111 == k && 4 == _) {
                    var N = y.getBytes();
                    e.unmarshalSendFlwRsp(N);
                }
                if (8812 == k && 4 == _) {
                    var q = y.getBytes();
                    e.unmarshalNoble(q);
                }
                if (8812 == k && 12 == _) {
                    var L = y.getBytes();
                    e.unmarshalNoble(L);
                }
            }
        }, !0);
    },
    connectLive: function() {
        this.setChannelEventCb(), this.setH5EventCb(), this.setH5MaixuCb(), this.setH5ChatRecvCb(), 
        this.setH5DataRecvCb();
    },
    messageHandle: function(e) {
        for (var t = this, i = [ "chat", "gift_broadcast", "combo_bc", "maixu", "leave", "user_count" ], n = 0, s = i.length; n < s; n++) if (e.response === i[n]) {
            t.widgetUpdate(k.format.call(this, e));
            break;
        }
    },
    insertSysInfo: function(e) {
        for (var t = this, i = [ "YY官方倡导绿色直播，对直播内容进行24小时在线巡查。任何传播违法、违规、低俗暴力等不良信息将会封停账号。", "YY官方提醒你：如果有涉及到财产的操作，请务必谨慎核对对方身份，谨防受骗！" ], n = {
            content: [],
            comboLs: []
        }, s = e || 0, a = 0; a < i.length; a++) n.content.push({
            sysInfo: i[a]
        });
        n.content.push({
            userInfo: (_.userInfo.partnerNickname || _.userInfo.nickName || "我") + " 来了"
        }), S[s] = n, t.widgetUpdate(s);
    },
    widgetUpdate: function(e) {
        var t, i, n, s = this, a = {}, r = {}, o = parseInt(e, 10) || 0;
        if (S[o]) {
            if (S[o].content && S[o].content.length > 0) for (var c = 0; c < S[o].content.length; c++) {
                if (r = {}, a = {}, S[o].content[c].uid && (a.uid = S[o].content[c].uid), S[o].content[c].fromName && (a.sendFlowerNick = S[o].content[c].fromName), 
                S[o].content[c].nick && (a.nick = C.barrage.tpl.nick.replace("{$nick}", S[o].content[c].nick + "")), 
                S[o].content[c].text && (a.text = S[o].content[c].text), S[o].content[c].sysInfo && (a.sysInfo = C.barrage.tpl.sysInfo.replace("{$sysInfo}", S[o].content[c].sysInfo)), 
                S[o].content[c].userInfo && (a.userInfo = C.barrage.tpl.userInfo.replace("{$userInfo}", S[o].content[c].userInfo)), 
                S[o].content[c].giftType) {
                    if (!w[S[o].content[c].giftType]) continue;
                    n = (t = JSON.parse(w[S[o].content[c].giftType].info)).icon_mob, i = v[n], r.pri = 1, 
                    a.giftCount = C.barrage.tpl.gift.giftCount.replace("{$giftCount}", S[o].content[c].giftCount || 1), 
                    a.giftName = C.barrage.tpl.gift.giftName.replace("{$giftName}", t.name), a.giftImg = C.barrage.tpl.gift.giftImg.replace("{$giftImg}", i.path);
                } else r.pri = 0;
                y.isEmptyObject(a) || (r.timer = e, r.text = a, [].push(r), s.wsCallback && s.wsCallback(r));
            }
            if (S[o].comboLs && S[o].comboLs.length > 0) for (var l = 0; l < S[o].comboLs.length; l++) if (w[S[o].comboLs[l].type]) {
                n = (t = JSON.parse(w[S[o].comboLs[l].type].info)).icon_mob, i = v[n], S[o].comboLs[l].giftName = t.name, 
                S[o].comboLs[l].giftImg = i.path;
                var u = S[o].comboLs[l];
                s.wsCallback2 && s.wsCallback2(u);
            }
        }
    }
};

module.exports = _;