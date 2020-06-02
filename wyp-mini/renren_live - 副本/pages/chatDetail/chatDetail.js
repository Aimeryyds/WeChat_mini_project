var e = require("../../modules/chat-input/chat-input"), t = require("../../72E76F218A740DDF14810726663CC841.js"), a = require("../../2A5831C68A740DDF4C3E59C1F25DC841.js"), o = require("../../213E99418A740DDF4758F1467AACC841.js"), n = require("../../14E98D478A740DDF728FE5401BCCC841.js"), i = require("../../21B883058A740DDF47DEEB025D7CC841.js"), s = require("../../A81692D68A740DDFCE70FAD1CABCC841.js"), r = getApp(), c = null, g = 0, l = void 0;

Page({
    data: {
        roomId: null,
        roomTitle: null,
        roomState: null,
        roomStateSrc: null,
        roomHeadUrl: null,
        roomFrom: null,
        userInfo: r.currentUser,
        myUid: -1,
        defaultImage: "/images/default_header.png",
        stopMessageInterval: !1,
        requestQueueNumber: 0,
        messages: [],
        tempItemMessage: null,
        more: !0,
        offset: 0,
        limit: 30,
        type: 0,
        wpsid: -1,
        mid: 0,
        scrollTop: 0,
        windowWidth: 0,
        windowHeight: 0,
        windowHeightRpx: 0,
        animation: {},
        tapTab: !1,
        tapLetter: !1,
        isBangPhone: r.globalData.isBangPhone,
        toView: "",
        loadMore: !1,
        privateMsgPackageInfoList: [],
        privateMsgCount: 0,
        diamondNumber: 0,
        friendHeadUrl: "",
        textMessage: "",
        chatItems: [],
        scrollTopTimeStamp: 0,
        showMessagePacket: !1,
        animationData: {},
        currentIndex: 0,
        dataset: null,
        navigationTitleText: null,
        hintNumber: 0,
        isHost: 1e3
    },
    onLoad: function(e) {
        (c = this).alertView = c.selectComponent("#alertView"), c.againAlertView = c.selectComponent("#againAlertView"), 
        c.myToast = c.selectComponent("#myToast"), wx.getSystemInfo({
            success: function(e) {
                c.setData({
                    windowWidth: e.windowWidth,
                    windowHeight: e.windowHeight,
                    windowHeightRpx: i.px2rpx(e.windowHeight, e.windowWidth)
                });
            }
        });
        var t = r.globalData.navStatusbarHeight, a = i.px2rpx(t, c.data.windowWidth), o = wx.getStorageSync(e.id);
        c.setData({
            roomId: e.id,
            roomTitle: e.name,
            navigationTitleText: e.name,
            roomHeadUrl: e.headUrl,
            roomFrom: e.from,
            messages: "" == o ? [] : o,
            myUid: wx.getStorageSync("myUid"),
            navigationBarHeight: t,
            navigationBarHeightRpx: a
        }), g = e.link, l = e.wpsid, c.data.wpsid = l, c.initData(), c.getChatList(), c.getRoomState(), 
        c.isBindMobile();
    },
    onReady: function() {
        1 == g ? (g = 2, c.sendHello()) : 10 == g && (g = "", c.sayHello()), wx.setNavigationBarTitle({
            title: c.data.roomTitle
        }), c.initAnimation("ease"), c.getPhonecon = c.selectComponent("#getPhonepop");
    },
    onShow: function() {
        if (-1 != r.currentUser.uid) try {
            wx.setStorageSync("myUid", r.currentUser.uid);
        } catch (e) {
            console.log("myUid storageSync exception" + e);
        }
        c.setData({
            stopMessageInterval: !1,
            userInfo: r.currentUser,
            isBangPhone: r.globalData.isBangPhone
        });
    },
    onHide: function() {
        c.bindClose(), c.setData({
            stopMessageInterval: !0
        });
    },
    onUnload: function() {
        var e = c.data.messages.slice(c.data.messages.length - 30, c.data.messages.length);
        try {
            wx.setStorageSync(c.data.roomId, e);
        } catch (e) {
            console.log("roomId storageSync exception" + e);
        }
        c.setData({
            stopMessageInterval: !0
        });
    },
    isBindMobile: function() {
        n.isBindMobile(), n.isBindMobileCallBack = function(e) {
            e.data.is_bind_mobile ? r.globalData.isBindMobile = !0 : r.globalData.isBindMobile = !1;
        };
    },
    getChatList: function() {
        wx.showNavigationBarLoading();
        var e = "https://webpager.renren.com/api/getChatList", t = wx.getStorageSync("cookiesdata"), o = {
            st: c.data.offset,
            lt: c.data.limit,
            type: c.data.type,
            roomId: c.data.roomId
        };
        a.getNetworkTypeP()().then(function(n) {
            if (c.consoleLog("获取聊天内容=1=>" + JSON.stringify(n)), "none" != n.networkType) return c.setData({
                requestQueueNumber: 1
            }), a.getRequestP(e, t, o);
            fail();
        }).then(function(n) {
            if (c.consoleLog("获取聊天内容=2=>" + JSON.stringify(n)), 200 == n.statusCode) {
                var i = null;
                try {
                    i = n.data.data.items;
                } catch (e) {
                    c.judgeIsAgainLogin(), fail();
                }
                if (null != i && i.length > 0) return console.log("wotest" + i[i.length - 1].msgkey), 
                c.consoleLog("获取聊天内容=2=>" + JSON.stringify(n.data.data.items)), i = c.getTransformTime(i), 
                wx.setStorageSync(c.data.roomId, i), c.setData({
                    messages: i,
                    requestQueueNumber: 2
                }), e = "https://wpi.renren.com/comet_get", a.getRequestP(e, t, o);
                if (-1 == c.data.wpsid || void 0 == c.data.wpsid) return e = "https://wpi.renren.com/comet_get", 
                a.getRequestP(e, t, o);
            }
            fail();
        }).then(function(e) {
            if (c.consoleLog("renren", "getChatList()=3=>" + JSON.stringify(e)), 200 == e.statusCode) {
                for (var t = e.header["Set-Cookie"].split("; "), a = -1, o = 0; o < t.length; o++) -1 != t[o].indexOf("wpsid") && (a = t[o].split("=")[1]);
                c.consoleLog("获取聊天内容=3=>wpsid：" + a), c.setData({
                    wpsid: a,
                    requestQueueNumber: 3
                });
                var n = c.data.messages;
                c.getSendReadyRR(n[n.length - 1]);
            } else fail();
        }).catch(function(e) {
            c.consoleLog("获取聊天内容=catch=>");
        }).finally(function(e) {
            c.consoleLog("获取聊天内容=finally=>"), 3 != c.data.requestQueueNumber ? setTimeout(function() {
                c.getChatList();
            }, 4e3) : (c.setData({
                offset: c.data.offset + c.data.limit
            }), c.getMessageInterval()), c.getViewHeight(), c.setData({
                requestQueueNumber: 0
            }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    sayHello: function() {
        var e = [ "Hi~" ], t = r.currentUser.uid + "@talk.m.renren.com", o = c.data.roomId + "@talk.m.renren.com", n = wx.getStorageSync("_rtk"), i = new Date().getTime(), s = wx.getStorageSync("cookiesdata") + ";wpsid=" + l, g = '<message fname="' + r.currentUser.user_name + '" from="' + t + '" to="' + o + '" type="chat" subtype="1000"><richbody type="dialog" localid="' + i + '"><font>' + e[Math.random() * e.length >> 0] + "</font></richbody></message>&_rtk=" + n;
        a.postMessage("https://wpi.renren.com/muc_chat", s, g).then(function(e) {
            200 == e.statusCode && console.log("发送消息=>" + JSON.stringify(e));
        });
    },
    sendHello: function() {
        var e = [ "滴滴滴，有您的小可爱到了，请签收~", "歪？小可爱你在吗？", "要不要花三分钟了解下有趣的灵魂？" ];
        console.log("wpsid:", l);
        var t = r.currentUser.uid + "@talk.m.renren.com", o = c.data.roomId + "@talk.m.renren.com", n = wx.getStorageSync("_rtk"), i = new Date().getTime(), s = wx.getStorageSync("cookiesdata") + ";wpsid=" + l, g = '<message fname="' + r.currentUser.user_name + '" from="' + t + '" to="' + o + '" type="chat" subtype="1000"><richbody type="dialog" localid="' + i + '"><font>' + e[Math.random() * e.length >> 0] + "</font></richbody></message>&_rtk=" + n;
        a.postMessage("https://wpi.renren.com/muc_chat", s, g).then(function(e) {
            200 == e.statusCode && console.log("发送消息=>" + JSON.stringify(e));
        });
    },
    getSendReadyRR: function(e) {
        console.info("wotest=发送已读回执", JSON.stringify(e));
        var t = r.currentUser.uid, o = e.fromId, n = e.msgkey, i = wx.getStorageSync("_rtk");
        console.info("wotest=发送已读回执", "from=" + t + ";to=" + o + ";msgkey=" + n + ";_rtk=" + i);
        var s = wx.getStorageSync("cookiesdata") + ";wpsid=" + c.data.wpsid;
        console.info("wotest=发送已读回执", e.msgkey);
        var g = '<ack from="' + t + '" to="' + o + '" msgkey="' + n + '" type="rr" chat_type="chat" ext_flag="1"/>%0a%26_rtk=' + i;
        console.info("wotest=发送已读回执", g), a.postRequestP("https://wpi.renren.com/muc_chat", s, g).then(function(e) {
            if (200 == e.statusCode) {
                c.consoleLog("发送消息=>" + JSON.stringify(e));
                var t = getCurrentPages(), a = t[t.length - 2], o = a.data.recents;
                if (o) for (var n = 0; n < o.length; n++) c.data.roomId == o[n].id && (o[n].messageCount = 0);
                a.route && a.route.indexOf("chat") > -1 && a.changeData(o);
            }
        });
    },
    getMessageInterval: function() {
        if (!c.data.stopMessageInterval) {
            var e = "https://wpi.renren.com/comet_get", o = wx.getStorageSync("cookiesdata") + ";wpsid=" + c.data.wpsid, n = {
                mid: c.data.mid
            };
            a.getNetworkTypeP()().then(function(t) {
                if (c.consoleLog("拉取消息=1=>" + JSON.stringify(t)), "none" != t.networkType) return c.setData({
                    requestQueueNumber: 1
                }), a.getRequestP(e, o, n);
                fail();
            }).then(function(i) {
                if (c.consoleLog("拉取消息=2=>" + JSON.stringify(i)), "ERROR[403]: please login first" == i.data && (c.judgeIsAgainLogin(), 
                fail()), 200 == i.statusCode) {
                    var s = new t.DOMParser(), g = s.parseFromString(i.data);
                    c.consoleLog("拉取消息=doc=>" + g);
                    var l = g.getElementsByTagName("common").length - 1;
                    c.consoleLog("拉取消息=commonLength=>" + l);
                    var u = g.getElementsByTagName("common")[l];
                    c.consoleLog("拉取消息=common=>" + u);
                    var d = u.attributes[0].nodeValue;
                    c.consoleLog("拉取消息=mid=>" + d);
                    var m = JSON.parse(u.firstChild.nodeValue);
                    c.consoleLog("拉取消息=item=>" + u.firstChild.nodeValue);
                    var f = m.richbody;
                    if (c.consoleLog("拉取消息=richbody=>" + f), c.setData({
                        mid: d,
                        requestQueueNumber: 2
                    }), null != f) {
                        var p = s.parseFromString(f).getElementsByTagName("font")[0].firstChild.nodeValue;
                        c.consoleLog("拉取消息=msgkey=>" + m.msgkey);
                        var h = {
                            attach: 0,
                            audioSrc: "",
                            audioTime: 0,
                            bodyType: "dialog",
                            content: p,
                            contentType: 0,
                            fromHead: "",
                            fromId: m.from,
                            fromName: m.fname,
                            imgSrc: "",
                            msgkey: m.msgkey,
                            originalSrc: "",
                            source: "",
                            time: m.time / 1e3,
                            type: 0
                        };
                        if (c.setData({
                            tempItemMessage: h
                        }), !c.data.stopMessageInterval && m.from != r.currentUser.uid && m.from == c.data.roomId) return e = "https://wpi.renren.com/muc_chat", 
                        n = '<ack from="' + m.to + '" to="' + m.from + '" msgkey="' + m.msgkey + '" type="rr" chat_type="chat" ext_flag="1"/>%0a%26_rtk=' + wx.getStorageSync("_rtk"), 
                        a.postRequestP(e, o, n);
                        c.setData({
                            requestQueueNumber: 999
                        });
                    }
                }
                fail();
            }).then(function(t) {
                if (c.consoleLog("拉取消息=3=>" + JSON.stringify(t)), 200 == t.statusCode && !c.data.stopMessageInterval) return c.setData({
                    requestQueueNumber: 3
                }), e = "https://webpager.renren.com/api/getUserInfo", n = {
                    uids: c.data.tempItemMessage.fromId
                }, a.getRequestP(e, o, n);
                fail();
            }).then(function(e) {
                if (c.consoleLog("拉取消息=4=>" + JSON.stringify(e)), 200 == e.statusCode) {
                    if (c.data.tempItemMessage.fromId != r.currentUser.uid) {
                        var t = c.data.messages, a = c.data.tempItemMessage;
                        a.fromHead = e.data.data.items[0].tiny_url;
                        for (var o = 0; o < t.length && t[o].msgkey != a.msgkey; o++) o == t.length - 1 && c.data.roomId == a.fromId && t.push(a);
                        t = c.getTransformTime(t), c.setData({
                            tempItemMessage: a,
                            messages: t
                        }), c.getViewHeight();
                    }
                    c.setData({
                        requestQueueNumber: 4
                    });
                } else fail();
            }).catch(function(e) {
                c.consoleLog("拉取消息=catch=>");
            }).finally(function(e) {
                c.consoleLog("拉取消息=finally=>"), 4 != c.data.requestQueueNumber && 999 != c.data.requestQueueNumber ? setTimeout(function() {
                    c.getMessageInterval();
                }, 4e3) : c.getMessageInterval(), c.setData({
                    requestQueueNumber: 0
                });
            });
        }
    },
    getViewHeight: function() {
        var e = 0;
        wx.createSelectorQuery().selectAll("#test").boundingClientRect(function(t) {
            for (var a = 0; a < t.length; a++) e += t[a].height, a == t.length - 1 && e != c.data.scrollTop && c.setData({
                scrollTop: e
            });
        }).exec();
    },
    initData: function() {
        var t = wx.getSystemInfoSync();
        e.init(c, {
            isBangPhone: r.globalData.isBangPhone,
            systemInfo: t,
            minVoiceTime: 1,
            maxVoiceTime: 60,
            startTimeDown: 56,
            format: "mp3",
            sendButtonBgColor: "mediumseagreen",
            sendButtonTextColor: "white",
            extraArr: [ {
                picName: "message_chat",
                description: "私信套餐"
            }, {
                picName: "voice_chat",
                description: "视频私聊"
            } ]
        }), c.setData({
            pageHeight: t.windowHeight
        }), c.textButton(), c.extraButton(), c.voiceButton();
    },
    textButton: function() {
        e.setTextMessageListener(function(e) {
            var t = e.detail.value.replace(/\s+/g, "");
            if (null != t && t.length > 0) if (r.globalData.isBindMobile) {
                var o = r.currentUser.uid + "@talk.m.renren.com", n = c.data.roomId + "@talk.m.renren.com", i = wx.getStorageSync("_rtk"), s = new Date().getTime(), g = c.data.wpsid, l = wx.getStorageSync("cookiesdata") + ";wpsid=" + g, u = '<message fname="' + r.currentUser.user_name + '" from="' + o + '" to="' + n + '" type="chat" subtype="1000"><richbody type="dialog" localid="' + s + '"><font>' + t + "</font></richbody></message>&requestToken=-147899469&_rtk=" + i;
                a.postMessage("https://wpi.renren.com/muc_chat", l, u).then(function(t) {
                    if (200 == t.statusCode) {
                        var a = {
                            FROM: r.currentUser.uid,
                            TO: c.data.roomId,
                            DOMAIN: "talk.m.renren.com",
                            TYPE: "chat",
                            NAME: r.currentUser.user_name,
                            LOCALID: s,
                            TEXT: e.detail.value
                        };
                        c.addChatMessage(a.FROM, a.NAME, a.TEXT, a.LOCALID);
                    }
                });
            } else c.getPhonecon.onShowCon();
        });
    },
    extBlurCallback: function(e) {
        c.bindClose();
    },
    voiceButton: function() {
        e.recordVoiceListener(function(e, t) {
            var a = e.tempFilePath, o = t;
            console.log(a, o);
        }), e.setVoiceRecordStatusListener(function(t) {
            switch (t) {
              case e.VRStatus.START:
              case e.VRStatus.SUCCESS:
              case e.VRStatus.CANCEL:
              case e.VRStatus.SHORT:
              case e.VRStatus.UNAUTH:
              case e.VRStatus.FAIL:
            }
        });
    },
    extraButton: function() {
        e.clickExtraListener(function(e) {
            switch (console.log(e), c.getViewHeight(), parseInt(e.currentTarget.dataset.index)) {
              case 0:
                c.getPrivateMsgInfo(), c.setData({
                    showMessagePacket: !c.data.showMessagePacket
                });
                var t = c.data.windowHeightRpx - 330;
                c.initAnimation("ease"), c.animation.height(t + "rpx").step(), c.setData({
                    animation: c.animation.export(),
                    scrollTop: c.data.scrollTop - 330,
                    tapLetter: !0
                });
                break;

              case 1:
                c.isVideoChat();
            }
        }), e.setExtraButtonClickListener(function(e) {
            console.log("Extra弹窗是否消息", e);
            var t = c.data.isBangPhone ? 140 : 100;
            if (e) {
                var a = c.data.windowHeightRpx - t;
                c.initAnimation("step-start"), c.animation.height(a + "rpx").step(), c.setData({
                    scrollTop: a,
                    animation: c.animation.export(),
                    tapTab: !1
                });
            } else {
                var o = c.data.windowHeightRpx - 230 - t;
                c.initAnimation("ease"), c.animation.height(o + "rpx").step(), c.setData({
                    scrollTop: o,
                    animation: c.animation.export(),
                    tapTab: !0
                });
            }
            setTimeout(function() {
                c.getViewHeight();
            }, 500);
        });
    },
    resetInputStatus: function() {
        e.closeExtraView();
    },
    buyPacket: function(e) {
        e.currentTarget.dataset.item;
        var t = e.currentTarget.dataset.index, a = e.currentTarget.dataset;
        c.setData({
            currentIndex: t,
            dataset: a
        }), c.alertView.showAlertView("是否确认购买该私信套餐", "", "取消", "确定", 300);
    },
    getPrivateMsgInfo: function() {
        var e = r.apiurl, t = e + "whisper/getUserPrivateMsgCount", o = {
            api_key: r.opApiKey,
            v: "1",
            call_id: new Date().getTime(),
            session_key: r.currentUser.session_key,
            client_info: r.client_info
        }, i = n.getsign(o);
        o.sig = i, r.wxpersonInfo.openid && a.postRequestP(t, "", o).then(function(s) {
            return c.consoleLog("私信数量=1=>" + JSON.stringify(s)), 200 == s.statusCode && -1 != s.data.privateMsgCount && c.setData({
                privateMsgCount: s.data.privateMsgCount
            }), t = e + "whisper/getPrivateMsgPackageList", o = {
                api_key: r.opApiKey,
                v: "1",
                session_key: r.currentUser.session_key,
                client_info: r.client_info,
                call_id: new Date().getTime()
            }, i = n.getsign(o), o.sig = i, a.postRequestP(t, "", o);
        }).then(function(e) {
            if (c.consoleLog("私信套餐=2=>" + JSON.stringify(e)), 200 == e.statusCode) {
                var t = e.data.privateMsgPackageInfoList;
                c.setData({
                    privateMsgPackageInfoList: t
                });
            }
        }).catch(function(e) {
            c.consoleLog("私信=catch=>");
        }).finally(function(e) {
            c.consoleLog("私信=finally=>");
        });
    },
    buyPrivateMsgPackage: function(e, t, a, o) {
        if (r.wxpersonInfo.openid) {
            var i = new Date().getTime(), s = {
                api_key: r.opApiKey,
                v: "1",
                session_key: r.currentUser.session_key,
                client_info: r.client_info,
                call_id: i,
                packageId: t,
                packageTokenCount: a
            }, g = n.getsign(s);
            s.sig = g, wx.request({
                url: r.apiurl + e,
                data: s,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    switch (e.data.result) {
                      case 0:
                        return c.setData({
                            privateMsgCount: c.data.privateMsgCount + o
                        }), void c.myToast.show("购买成功");

                      case 1:
                        return void c.myToast.show("购买失败,请刷新重试");

                      case 2:
                        return void r.globalData.platform;

                      case 3:
                        return;

                      case 4:
                        return void c.myToast.show("购买频率太快,请稍后再试");

                      case 5:
                      default:
                        return void c.myToast.show("购买失败,请刷新重试");
                    }
                }
            });
        }
    },
    sendChatMessage: function(e, t, a, o, i) {
        if (r.wxpersonInfo.openid) {
            var s = {
                api_key: r.opApiKey,
                v: "1",
                session_key: r.currentUser.session_key,
                client_info: r.client_info,
                call_id: i,
                msgType: t,
                content: a,
                params: o
            }, g = n.getsign(s);
            s.sig = g, wx.request({
                url: r.apiurl + e,
                data: s,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    if (200 == e.statusCode) switch (e.data.result) {
                      case 0:
                        var t = JSON.parse(a);
                        c.addChatMessage(t.FROM, t.NAME, t.TEXT, t.LOCALID);
                        break;

                      case 1:
                        c.alertView.showAlertView("您的私信条数不足", "购买私信套餐与主播畅聊~", "再想想", "购买套餐", 100);
                        break;

                      case 2:
                        c.myToast.show("购买评论太快,请稍后再试");
                    }
                }
            });
        }
    },
    addChatMessage: function(e, t, a, o) {
        c.consoleLog("添加消息=msgkey=>" + o);
        var n = {
            attach: 0,
            audioSrc: "",
            audioTime: 0,
            bodyType: "dialog",
            content: a,
            contentType: 0,
            fromHead: r.currentUser.head_url,
            fromId: e,
            fromName: t,
            imgSrc: "",
            msgkey: o,
            originalSrc: "",
            source: "",
            time: o / 1e3,
            type: 0
        }, i = c.data.messages;
        if (i.length > 0) for (var s = 0; s < i.length && i[s].msgkey != n.msgkey; s++) s == i.length - 1 && i.push(n); else i.push(n);
        i = c.getTransformTime(i);
        var g = c.data.hintNumber;
        3 == ++g && (i = c.insertHintContent(i)), c.setData({
            tempItemMessage: n,
            messages: i,
            hintNumber: g
        }), c.getViewHeight();
        try {
            for (var l = getCurrentPages(), u = l[l.length - 2], d = u.data.recents, m = 0; m < d.length; m++) c.data.roomId == d[m].id && (d[m].messageCount = 0, 
            d[m].recent = a);
            u.changeData(d);
        } catch (e) {}
    },
    alertViewOkAction: function(e) {
        switch (c.getViewHeight(), e.detail) {
          case 100:
            c.getPrivateMsgInfo(), c.setData({
                showMessagePacket: !c.data.showMessagePacket
            });
            var t = c.data.windowHeightRpx - 330;
            c.initAnimation("ease"), c.animation.height(t + "rpx").step(), c.setData({
                animation: c.animation.export(),
                scrollTop: c.data.scrollTop - 330,
                tapLetter: !0
            });
            break;

          case 200:
            "ios" != r.globalData.platform && (c.consoleLog("立即充值"), c.jumpToPayView());
            break;

          case 300:
            var a = c.data.dataset, o = a.item.id, n = a.item.tokenCount, i = a.item.msgCount;
            c.buyPrivateMsgPackage("whisper/buyPrivateMsgPackage", o, n, i);
            break;

          default:
            console.log("默认弹窗=>" + e.detail);
        }
    },
    alertViewCancelAction: function(e) {
        c.consoleLog("取消弹窗");
    },
    jumpToPayView: function() {
        n.jumpToChargeView(!1);
    },
    bindClose: function() {
        var e = c.data.isBangPhone ? 140 : 100, t = c.data.windowHeightRpx - e;
        c.initAnimation("step-start"), c.animation.height(t + "rpx").step(), c.setData({
            animation: c.animation.export(),
            showMessagePacket: !1,
            crollTop: t,
            tapTab: !1,
            tapLetter: !1
        }), c.resetInputStatus(), c.getViewHeight();
    },
    judgeIsAgainLogin: function() {
        n.updateLoginStatus(), n.loginSuccess = function(e) {
            e && c.getChatList();
        };
    },
    bindRefesh: function(e) {
        c.consoleLog("下拉刷新=>e=" + JSON.stringify(e)), c.data.more && (c.data.loadMore || (c.setData({
            loadMore: !0
        }), c.getLoadMoreChatList()));
    },
    bindLoadMore: function(e) {
        c.consoleLog("上拉加载更多=>e=" + JSON.stringify(e));
    },
    bindScroll: function(e) {
        c.consoleLog("滑动触发=>e=" + JSON.stringify(e));
    },
    chatInputGetValueEvent: function() {
        c.consoleLog("bind", "chatInputGetValueEvent");
    },
    getLoadMoreChatList: function() {
        c.bindClose();
        var e = wx.getStorageSync("cookiesdata"), t = {
            st: c.data.offset,
            lt: c.data.limit,
            type: c.data.type,
            roomId: c.data.roomId
        }, o = null, n = "toView" + c.data.messages[0].msgkey;
        a.getNetworkTypeP()().then(function(o) {
            if (c.consoleLog("加载更多=1=>" + JSON.stringify(o)), "none" != o.networkType) return a.getRequestP("https://webpager.renren.com/api/getChatList", e, t);
            fail();
        }).then(function(e) {
            c.consoleLog("加载更多=2=>" + JSON.stringify(e)), 200 == e.statusCode && (o = e.data.data.items, 
            c.setData({
                more: e.data.data.more
            }));
        }).catch(function(e) {
            c.consoleLog("加载更多=catch=>" + JSON.stringify(e));
        }).finally(function(e) {
            c.consoleLog("加载更多=finally=>" + JSON.stringify(e)), null != o && o.length > 0 ? (setTimeout(function() {
                c.consoleLog("加载更多=finally=>" + JSON.stringify(o));
                var e = o.concat(c.data.messages);
                e = c.getTransformTime(e), c.setData({
                    messages: e,
                    offset: c.data.offset + c.data.limit,
                    loadMore: !1
                });
            }, 1e3), setTimeout(function() {
                c.setData({
                    toView: n
                });
            }, 1001)) : setTimeout(function() {
                c.setData({
                    loadMore: !1
                });
            }, 1e3);
        });
    },
    errorFunction: function(e) {
        if ("error" == e.type) {
            var t = e.target.dataset.errorimg, a = c.data.messages;
            a[t].fromHead = c.data.defaultImage, c.setData({
                messages: a
            });
        }
    },
    consoleLog: function(e) {},
    initAnimation: function(e) {
        c.animation = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 400,
            timingFunction: e,
            delay: 0
        });
    },
    isVideoChat: function() {
        if (r.wxpersonInfo.openid) {
            var e = r.apiurl + "whisper/getMyTimeAccount", t = {
                api_key: r.opApiKey,
                v: "1.0",
                call_id: new Date().getTime(),
                session_key: r.currentUser.session_key,
                userId: r.currentUser.uid
            }, o = n.getsign(t);
            t.sig = o, a.getNetworkTypeP()().then(function(o) {
                return c.consoleLog("是否可视频聊天=1=>" + JSON.stringify(o)), "none" != o.networkType ? a.postRequestP(e, "", t) : c.myToast.show("网络异常");
            }).then(function(i) {
                if (c.consoleLog("是否可视频聊天=2=>" + JSON.stringify(i)), null != i) return 200 == i.statusCode && null != i.data.count ? (c.setData({
                    diamondNumber: i.data.count
                }), e = r.apiurl + "whisper/getHostStatus", t = {
                    api_key: r.opApiKey,
                    v: "1.0",
                    call_id: new Date().getTime(),
                    session_key: r.currentUser.session_key,
                    hostId: c.data.roomId
                }, o = n.getsign(t), t.sig = o, a.postRequestP(e, "", t)) : void fail();
            }).then(function(e) {
                if (c.consoleLog("是否可视频聊天=3=>" + JSON.stringify(e)), null != e) {
                    if (200 == e.statusCode) if (c.data.diamondNumber < e.data.cost) r.globalData.platform; else {
                        if (0 == e.data.status) return c.myToast.show("该小主没有私聊权限呦~");
                        if (1 == e.data.status) return wx.navigateTo({
                            url: "../videoChat/videoChat?headUrl=" + c.data.roomHeadUrl + "&isFocused=1&userId=" + c.data.roomId + "&userName=" + c.data.roomTitle
                        });
                        if (2 == e.data.status) return c.myToast.show("小主正在忙线，请稍后再播~");
                        if (3 == e.data.status) return c.myToast.show("小主休息啦~");
                        if (5 == e.data.status) return c.myToast.show("小主已被封禁~");
                    }
                    fail();
                }
            }).catch(function(e) {
                c.myToast.show("请求失败,请稍后再试"), c.consoleLog("是否可视频聊天=catch=>" + JSON.stringify(e));
            }).finally(function(e) {
                c.consoleLog("是否可视频聊天=finally=>" + JSON.stringify(e));
            });
        }
    },
    getTransformTime: function(e) {
        for (var t = o.formatTime(new Date().getTime() / 1e3, "Y-M-D"), a = 0, n = 0; n < e.length; n++) if (e[n].time - a >= 300) {
            a = e[n].time;
            var i = o.formatTime(e[n].time, "Y-M-D");
            e[n].transformTime = t == i ? o.formatTime(e[n].time, "h:m") : o.formatTime(e[n].time, "Y-M-D h:m");
        }
        return e;
    },
    insertHintContent: function(e) {
        return e;
    },
    navigationBack: function() {
        c.setData({
            stopMessageInterval: !0
        }), null == c.data.roomFrom ? (s.setHomeFrom(1), wx.switchTab({
            url: "../home/home"
        })) : wx.navigateBack({
            delta: 1
        });
    },
    getRoomState: function() {
        var e = r.apiurl + "whisper/getHostStatusFromUserHome", t = {
            api_key: r.opApiKey,
            v: "1.0",
            call_id: new Date().getTime(),
            session_key: r.currentUser.session_key,
            hostId: c.data.roomId
        }, o = n.getsign(t);
        t.sig = o, a.getNetworkTypeP()().then(function(o) {
            if (c.consoleLog("获取主播状态=1=>" + JSON.stringify(o)), "none" != o.networkType) return a.postRequestP(e, "", t);
        }).then(function(e) {
            if (c.consoleLog("获取主播状态=2=>" + JSON.stringify(e)), null != e && 200 == e.statusCode) {
                var t = e.data.status, a = null;
                1 == t ? a = "../../images/chat/chat-live-ing.png" : 2 == t ? a = "../../images/chat/chat-private-ing.png" : 3 == t && (a = "../../images/chat/chat-line-ing.png"), 
                c.setData({
                    roomState: t,
                    roomStateSrc: a
                });
            }
        }).catch(function(e) {
            c.consoleLog("获取主播状态=catch=>" + JSON.stringify(e));
        }).finally(function(e) {
            c.consoleLog("获取主播状态=finally=>" + JSON.stringify(e));
        });
    },
    gotoHomePage: function() {
        if (r.currentUser.session_key) {
            var e = Date.parse(new Date()), t = {
                api_key: r.opApiKey,
                v: "1",
                client_info: r.client_info,
                session_key: r.currentUser.session_key,
                call_id: e,
                uid: this.data.roomId,
                type: "211820270846018"
            }, a = this, o = n.getsign(t);
            t.sig = o, wx.request({
                url: r.apiurl + "profile/getInfo",
                data: t,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    if (console.log(e), e.data.userRedAndVipInfoResponse && 6 === e.data.userRedAndVipInfoResponse.red_host_flag) {
                        var t = "isLive=2222&playerId=" + a.data.roomId;
                        wx.navigateTo({
                            url: "../personalPage/personalPage?" + t
                        });
                    } else wx.showToast({
                        title: "该用户不是主播哦",
                        icon: "none",
                        duration: 2e3
                    });
                },
                fail: function(e) {}
            });
        }
    }
});