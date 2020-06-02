function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t() {
    if (!(h.luckGiftList.length > 0 || 1 == h.loadGift) && h.wxpersonInfo.openid) {
        var e = Date.parse(new Date()), t = {
            api_key: h.opApiKey,
            v: "1",
            session_key: h.currentUser.session_key,
            client_info: h.client_info,
            call_id: e,
            type: "1,4"
        }, i = c.getsign(t);
        t.sig = i, wx.request({
            url: h.apiurl + "gift/getGiftList",
            data: t,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                var t = e.data.giftList;
                if (t) {
                    for (var i = 0; i < t.length; i++) 1 == t[i].status && 12 == t[i].giftType && h.luckGiftList.push(t[i]);
                    a();
                }
            }
        });
    }
}

function a() {
    if (1 != h.loadGift && h.wxpersonInfo.openid) {
        var e = Date.parse(new Date()), t = {
            api_key: h.opApiKey,
            v: "1",
            session_key: h.currentUser.session_key,
            client_info: h.client_info,
            call_id: e,
            type: "4,32",
            isBitwiseAnd: 1
        }, a = c.getsign(t);
        t.sig = a, wx.request({
            url: h.apiurl + "gift/getGiftList",
            data: t,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                0 == h.giftList.length && (h.giftList = e.data.giftList), h.giftList = h.luckGiftList.concat(h.giftList), 
                i(h.giftList);
            }
        });
    }
}

function i(e) {
    var t = e.mFindIndex(function(e) {
        return 45 === e.id;
    });
    if (t >= 0) {
        e.splice(t, 1);
        var a = e.mFindIndex(function(e) {
            return 45 === e.id;
        });
        a >= 0 && e.splice(a, 1);
    }
    for (var i = 0; i < e.length; i++) 1 != e[i].status && e.splice(i, 1);
    e && e.length > 0 && (e.forEach(function(e, t) {
        var a = e.picUrl.toString();
        void 0 != a && a.length > 0 && (e.picUrl = a.replace(/http:\/\//, "https://"));
    }), console.log("开始加载礼物"), n(e));
}

function n(e) {
    wx.getImageInfo({
        src: e[A].picUrl,
        success: function(t) {
            e[A].path = t.path, A++, s(e);
        },
        fail: function(t) {
            r(e);
        }
    });
}

function o(e) {
    C = setTimeout(function() {
        clearTimeout(C), n(e);
    }.bind(this), 50);
}

function r(e) {
    P = setTimeout(function() {
        clearTimeout(P), k < M ? (k++, n(e)) : (k = 1, A++, s(e));
    }, 100 * k);
}

function s(e) {
    if (A == e.length) {
        if (h.loadGift = 1, h.isLivePage) {
            var t = getCurrentPages(), a = t[t.length - 1];
            a && a.drawGift();
        }
        P = A = null, console.log("礼物图片全部加载完成");
    } else o(e);
}

var l, d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, c = require("../../14E98D478A740DDF728FE5401BCCC841.js"), u = require("../../436428478A740DDF250240407F3DC841.js"), h = (require("../../2A5831C68A740DDF4C3E59C1F25DC841.js"), 
getApp()), f = !0, g = null, p = {}, _ = [], v = [], m = 1, w = !0, y = 1, L = 100, S = !0, b = void 0, x = (wx.createAnimation({
    duration: 1e3,
    timingFunction: "ease"
}), wx.createAnimation({
    duration: 1e3,
    timingFunction: "ease"
}), []), D = void 0, I = void 0, U = void 0, T = [];

Page({
    data: (l = {
        tabHeight: h.globalData.navStatusbarHeight + h.globalData.navTopHeight,
        navHeight: h.globalData.navStatusbarHeight + h.globalData.navTopHeight + 70 / 1334 * h.globalData.screenHeight - 2,
        navTopBackShow: !1,
        navigationImg: "./../../images/logo_top.png",
        bannerShow: !1,
        indicatorDots: !0,
        autoplay: !0,
        interval: 3e3,
        duration: 800,
        privateBannerInfoList: [],
        itemLeft: h.globalData.itemLeft,
        videoInfoList: [],
        page_size: 20,
        hasMore: !1,
        recommendItem: {},
        recommendShow: !1,
        goodsIndex: 0,
        huodongStr: "",
        userId: "",
        userName: "",
        userHead: "",
        downAppisShow: !1,
        errorUerShow: !1,
        newLibaoShow: !1,
        tablive: !0,
        tabdance: !1,
        tabshort: !1,
        tabliveicon: !0,
        tabdanceicon: !1,
        tabshorticon: !1,
        shortList: [],
        tabCss: "tabcomm",
        danceList: []
    }, e(l, "tabdance", !1), e(l, "danceListNone", !1), l),
    onLoad: function(e) {
        var a = this;
        U = this.selectComponent("#login"), t();
        var i = e.userName;
        void 0 !== i && ("string" != typeof i && (i = i.toString()), h.globalData.invitorId = i);
        var n = e.channelid, o = e.q;
        if (console.log("home==channelNum==", n), console.log("home==channelidStr==", o), 
        void 0 != n) h.globalData.qudao = n, h.client_info = '{"uniqid":"104C2BAC-6E2C-4723-A55E-F66FE1206D29","os":"iOS11.2","mac":"6C:40:08:8E:96:CE","screen":"2436X1125","from":"' + n.toString() + '","model":"Simulator","other":",","version":"9.1.6"}', 
        c.resetClient_info(h.client_info); else if (o) {
            var r = decodeURIComponent(o);
            (o = a.GetQueryString(r, "channelid").toString()) && (h.client_info = '{"uniqid":"104C2BAC-6E2C-4723-A55E-F66FE1206D29","os":"iOS11.2","mac":"6C:40:08:8E:96:CE","screen":"2436X1125","from":"' + o + '","model":"Simulator","other":",","version":"9.1.6"}', 
            c.resetClient_info(h.client_info), h.globalData.qudao = o);
        } else h.client_info = '{"uniqid":"104C2BAC-6E2C-4723-A55E-F66FE1206D29","os":"iOS11.2","mac":"6C:40:08:8E:96:CE","screen":"2436X1125","model":"Simulator","other":",","version":"9.1.6"}', 
        c.resetClient_info(h.client_info);
        if (wx.getStorageSync("wxGetUserInfoAuth") && (c.updateUserInfo(h.currentUser), 
        c.loginSuccess = function(e) {}, c.isBindMobile(), c.isBindMobileCallBack = function(e) {
            e.data.is_bind_mobile ? (wx.setStorageSync("wxPhoneAuth", !0), h.globalData.isBindMobile = !0) : h.globalData.isBindMobile = !1;
        }), S = !0, b = .48 * h.globalData.windowWidth, h.aldstat.sendEvent("进入首页", "进入首页"), 
        console.log("订阅===options===", e), e.liveId && e.liveRoomId) {
            var s = {
                player_id: e.liveId,
                live_room_id: e.liveRoomId,
                live_state: 0,
                play_url: e.playUrl
            };
            m = 1, h.globalData.isAuthor ? (a.getInfo(), a.toLiveShow(s), a.signCanShow()) : p = s, 
            a.getMiniProHotList(1, a.data.page_size, s), a.getPrivateBannerList();
        } else "liveShow" != h.page && (h.currentUser && h.currentUser.session_key && h.currentUser.uid && (a.getInfo(), 
        a.setData({
            userId: h.currentUser.uid,
            userName: h.currentUser.user_name,
            userHead: h.currentUser.head_url
        }), a.signCanShow(), e.vid && wx.navigateTo({
            url: "./../miniVideo/miniVideo?vid=" + e.vid
        })), a.getMiniProHotList(1, a.data.page_size), a.getPrivateBannerList());
    },
    onpipeiHome: function() {
        var e;
        v = [ {
            player_id: 970386648
        }, {
            player_id: 946524863
        }, {
            player_id: 961973025
        }, {
            player_id: 964281013
        }, {
            player_id: 918660761
        }, {
            player_id: 969953655
        }, {
            player_id: 968915429
        }, {
            player_id: 922895912
        }, {
            player_id: 968848864
        }, {
            player_id: 970206973
        }, {
            player_id: 969258658
        }, {
            player_id: 966902863
        }, {
            player_id: 964718080
        }, {
            player_id: 969413463
        }, {
            player_id: 969885899
        }, {
            player_id: 969841741
        }, {
            player_id: 969885828
        }, {
            player_id: 969283002
        }, {
            player_id: 969837863
        }, {
            player_id: 914417614,
            name: "木木",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn421/20190506/1800/h_large_eQmP_0c1a00021f44195a.jpg"
        }, {
            player_id: 914824333,
            name: "唇色陶陶",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn521/20190506/1800/h_large_n24A_119400002b111986.jpg"
        }, {
            player_id: 914825719,
            name: "小满满",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn421/20190506/1800/h_large_x1cj_1a17000f21f11986.jpg"
        }, {
            player_id: 914825897,
            name: "萌粉小樱桃",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn421/20190506/1800/h_large_8O2f_0c1c00021eed195a.jpg"
        }, {
            player_id: 914826139,
            name: "柠檬猫",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn421/20190506/1800/h_large_NmPC_5390000abc551986.jpg"
        }, {
            player_id: 914826164,
            name: "小米妞",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn221/20190506/1800/h_large_vrYX_9c6c00002bfe195a.jpg"
        }, {
            player_id: 914828825,
            name: "夏夏",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn221/20190506/1800/h_large_Ut3k_d510000177a01986.jpg"
        }, {
            player_id: 914829286,
            name: "宁溪溪",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn321/20190506/1800/h_large_HVut_0c1a00021f46195a.jpg"
        }, {
            player_id: 914829331,
            name: "猫小九",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn521/20190506/1800/h_large_bXki_497300002b26195a.jpg"
        }, {
            player_id: 914829339,
            name: "九姑娘",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn421/20190506/1805/h_large_sSUm_ce0d000a9d5a1986.jpg"
        }, {
            player_id: 915848602,
            name: "范朵朵",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn421/20190506/1805/h_large_uMwx_0c1a00021f47195a.jpg"
        }, {
            player_id: 915848774,
            name: "锦玉吖",
            head_url: "https://ssl.hdn.xnimg.cn/photos/hdn121/20190506/1805/h_large_VKEg_ce0d000a9d5b1986.jpg"
        } ];
        var t = Math.floor(Math.random() * v.length);
        e = v[t], h.aldstat.sendEvent("首页点击“闪配”按钮进入主播个人主页", "进入主播个人主页");
        var a = "playerId=" + e.player_id;
        wx.navigateTo({
            url: "./../personalPage/personalPage?" + a
        });
    },
    signCanShow: function() {
        var e = this;
        c.canSmallGainSignGift(), c.canSmallGainSignGiftCallBack = function(t) {
            if (1 == t.data.result) h.globalData.canSign = !1, e.setData({
                downAppisShow: !1
            }); else {
                h.globalData.canSign = !0, e.setData({
                    downAppisShow: !1
                });
                var a = u.formateTime(new Date());
                wx.getStorage({
                    key: "openDownAppTime",
                    success: function(t) {
                        t.data == a ? e.setData({
                            downAppisShow: !1
                        }) : e.setData({
                            downAppisShow: !0
                        });
                    },
                    fail: function(t) {
                        e.setData({
                            downAppisShow: !0
                        });
                    }
                });
            }
        };
    },
    onReady: function() {},
    onShow: function(e) {
        var t = this;
        f = !0, S = !0, "liveShow" == h.page && 1 == h.liveShowClose && (h.page = "", h.liveShowClose = "", 
        w = !1, t.getInfo(), m = 1, t.getMiniProHotList(1, t.data.page_size));
    },
    onHide: function() {},
    onUnload: function() {
        w = !1, g = null;
    },
    onPullDownRefresh: function() {
        var e = this;
        if (e.data.tablive) m = 1, e.getMiniProHotList(m, e.data.page_size); else if (e.data.tabshort) S = !0, 
        e.getHotList(); else if (e.data.tabdance && T && T.length >= 0) for (var t = 0; t < T.length; t++) T[t].pageN = 1, 
        T[t].hasMore = !0, e.getdanceList(t);
        wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        var e = this;
        if (e.data.tablive) e.getMiniProHotList(m, e.data.page_size); else if (e.data.tabshort) e.getHotList(); else if (e.data.tabdance && T && T.length >= 0) for (var t = 0; t < T.length; t++) e.getdanceList(t);
    },
    onShareAppMessage: function(e) {
        var t = h.globalData.qudao;
        console.log("home=share=success=", t), "button" == e.from && "shareHome" == e.target.id ? h.aldstat.sendEvent("首页点击右下角“分享”按钮进行分享", "分享") : "menu" === e.from && h.aldstat.sendEvent("首页点击右上角微信系统分享按钮进行分享", "分享");
        var a, i, n, o;
        if (_ && _.length > 0) {
            var r = Math.floor(Math.random() * _.length);
            o = _[r];
        } else o = this.data.recommendItem;
        return o && o.player_id ? (a = o.player_id, i = o.live_room_id, n = o.play_url, 
        {
            title: o.title,
            path: "/pages/home/home?userName=" + h.currentUser.uid + "&channelid=" + t + "&liveId=" + a + "&liveRoomId=" + i + "&playUrl=" + n,
            imageUrl: o.cover_img_url,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }) : {
            title: c.randomShareTitle(),
            path: "/pages/home/home?userName=" + h.currentUser.uid + "&channelid=" + t,
            imageUrl: c.randomShareImage(),
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        };
    },
    getAuthor: function(e) {
        var t = this;
        t.setData({
            userId: h.currentUser.uid,
            userName: h.currentUser.user_name,
            userHead: h.currentUser.head_url,
            recommendShow: !1
        }), t.getInfo(), t.signCanShow(), t.hasRecharge(), h.globalData.qudao >= 7e3 && h.globalData.qudao < 8e3 ? t.setData({
            newLibaoShow: !0
        }) : p.live_room_id ? (f = !1, t.toLiveRoomFun(p)) : p.id && wx.navigateTo({
            url: "./../miniVideo/miniVideo?vid=" + p.id
        });
    },
    GetQueryString: function(e, t) {
        var a = e.split("?");
        if (a.length > 1) for (var i = a[1].split("&"), n = 0; n < i.length; n++) {
            var o = i[n].split("=");
            if (o[0] == t) return o[1];
        }
        return !1;
    },
    onCloseLibao: function() {
        this.setData({
            newLibaoShow: !1
        });
    },
    getPhoneNumber: function(e) {
        var t = this;
        h.aldstat.sendEvent("首页渠道为7000-8000新用户是否注册手机号", "注册手机号"), c.getUserPhone(e, "首页"), 
        c.uploadMobilePhoneCallBack = function(e) {
            1 === e.data.result && (wx.showToast({
                title: "手机号注册成功",
                icon: "none",
                duration: 2e3
            }), t.setData({
                newLibaoShow: !1
            }), c.sendStarSmallZhiBo(), c.sendStarSmallZhiBoCallBack = function(e) {
                wx.showToast({
                    title: "获取5个星尘",
                    icon: "none",
                    duration: 2e3
                });
            }, t.toLiveRoomFun(p));
        };
    },
    getPrivateBannerList: function() {
        var e = this, t = (h.currentUser.session_key, {
            api_key: h.opApiKey,
            v: "1",
            call_id: Date.parse(new Date())
        }), a = c.getLoginsign(t);
        t.sig = a, wx.request({
            url: h.apiurl + "whisper/getPrivateBannerList",
            data: t,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                t.data.privateBannerInfoList || (t.data.privateBannerInfoList = []), t.data.privateBannerInfoList = t.data.privateBannerInfoList.concat(x), 
                !t.data.privateBannerInfoList || t.data.privateBannerInfoList && t.data.privateBannerInfoList.length <= 0 ? e.setData({
                    privateBannerInfoList: [],
                    bannerShow: !1
                }) : e.setData({
                    privateBannerInfoList: t.data.privateBannerInfoList,
                    bannerShow: !0
                }), e.hasRecharge();
            },
            fail: function() {}
        });
    },
    getMiniProHotList: function(e, t, a) {
        var i = this;
        if (1 == e && i.setData({
            videoInfoList: [],
            hasMore: !1
        }), i.data.hasMore) return !1;
        var n = Date.parse(new Date()), o = {
            api_key: h.opApiKey,
            v: "1",
            call_id: n,
            userId: h.currentUser.uid,
            page: e,
            page_size: t
        }, r = c.getLoginsign(o);
        o.sig = r, wx.showLoading({
            title: "载入中..."
        }), wx.request({
            url: h.apiurl + "livevideo/liveRoomGetHotLiveRoomList",
            data: o,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                var a = [];
                if (t.data && t.data.live_room_info_list && t.data.live_room_info_list.length > 0) {
                    for (var n = [], o = {}, r = [], s = 0; s < t.data.live_room_info_list.length; s++) if (t.data.live_room_info_list[s] && 0 === t.data.live_room_info_list[s].live_state) {
                        if (t.data.live_room_info_list[s] && t.data.live_room_info_list[s].cover_img_url) {
                            var l = t.data.live_room_info_list[s].cover_img_url;
                            t.data.live_room_info_list[s].cover_img_url = l.indexOf("rrimg") > -1 ? l.replace("http", "https") : l;
                        }
                        t.data.live_room_info_list[s].viewer_total_count = i.getNum(t.data.live_room_info_list[s].viewer_total_count), 
                        t.data.live_room_info_list[s].live_city || (t.data.live_room_info_list[s].live_city = i.getLocal()), 
                        t.data.live_room_info_list[s].tag || 0 !== t.data.live_room_info_list[s].gender && 1 !== t.data.live_room_info_list[s].gender || (t.data.live_room_info_list[s].tag = i.getTag(t.data.live_room_info_list[s].gender)), 
                        o = u.randomColor(), t.data.live_room_info_list[s].tagLeft = o.colorLeft, t.data.live_room_info_list[s].tagRight = o.colorRight, 
                        n.push(t.data.live_room_info_list[s]), 1 == e && r.push({
                            title: t.data.live_room_info_list[s].title,
                            cover_img_url: t.data.live_room_info_list[s].cover_img_url,
                            live_room_id: t.data.live_room_info_list[s].live_room_id,
                            player_id: t.data.live_room_info_list[s].player_id,
                            head_url: t.data.live_room_info_list[s].userUrls.head_url,
                            starCount: t.data.live_room_info_list[s].starCount,
                            viewCount: t.data.live_room_info_list[s].viewer_count,
                            playUrl: t.data.live_room_info_list[s].play_url,
                            name: t.data.live_room_info_list[s].name,
                            red_host_flag: t.data.live_room_info_list[s].userRedAndVipInfoResponse.red_host_flag
                        });
                    }
                    1 == e && (h.allVideosList = r);
                    var d = n.length;
                    if (a = i.data.videoInfoList.concat(n), a = i.dealrepeat(a), h.globalData.homelist = a, 
                    i.setData({
                        videoInfoList: a
                    }), m += 1, d <= 0 ? i.setData({
                        hasMore: !0
                    }) : i.setData({
                        hasMore: !1
                    }), a && a.length > 0 && (_ = u.getElectAnchor(a)), 1 == e && w) {
                        var c, f;
                        _ && _.length > 0 ? (c = Math.floor(Math.random() * _.length), f = _[c]) : (n[c = Math.floor(Math.random() * d)] && "935059861" == n[c].player_id && (n[++c] && "962514369" == n[c].player_id && c++, 
                        n[c] || (c -= 3)), f = n[c]), f && (i.setData({
                            recommendItem: f
                        }), g = setTimeout(function() {
                            i.setData({
                                recommendShow: !0
                            }), clearTimeout(g);
                        }, 1400));
                    }
                } else i.setData({
                    hasMore: !0
                }), 1 == e && i.setData({
                    recommendItem: {},
                    recommendShow: !1
                });
                wx.hideLoading();
            },
            fail: function() {
                wx.hideLoading();
            }
        });
    },
    getLocal: function() {
        return [ "未知星球", "地球", "火星" ][Math.floor(3 * Math.random())];
    },
    getTag: function(e) {
        var t, a, i = [ "女神", "高颜值", "才女一枚" ], n = [ "帅哥", "才艺王子", "王子" ];
        return 1 != e ? (t = i.length, a = i[Math.floor(Math.random() * t)]) : 1 == e && (t = n.length, 
        a = n[Math.floor(Math.random() * t)]), a;
    },
    getNum: function(e) {
        return (e = Number(e)) >= 1e4 && (e = (e /= 1e4).toFixed(1) + "万"), e;
    },
    dealrepeat: function(e) {
        var t = {};
        return e = e.reduce(function(e, a) {
            return t[a.player_id] || (t[a.player_id] = e.push(a)), e;
        }, []);
    },
    dealIdrepeat: function(e) {
        var t = {};
        return e = e.reduce(function(e, a) {
            return t[a.id] || (t[a.id] = e.push(a)), e;
        }, []);
    },
    toLiveShow: function(e) {
        var t = this, a = {
            api_key: h.opApiKey,
            v: "1.0",
            call_id: new Date().getTime(),
            live_room_id: e.live_room_id,
            owner_id: e.player_id
        };
        a.sig = c.getLoginsign(a), wx.request({
            data: a,
            url: h.apiurl + "livevideo/liveRoomGetRoomCondition",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(a) {
                0 != a.data.room_state ? wx.showToast({
                    title: "主播直播已关闭，可以看看其他心仪主播哦~",
                    icon: "none",
                    duration: 2e3
                }) : t.toLiveRoomFun(e);
            }
        });
    },
    toLiveRoom: function(e) {
        var t = this, a = e.currentTarget.dataset.item;
        return p = a, D = wx.getStorageSync("wxGetUserInfoAuth"), I = wx.getStorageSync("wxPhoneAuth"), 
        D ? I ? !!f && (f = !1, void 0 !== e.detail.formId && t.uploadFormid(e.detail.formId), 
        "recommend" == e.currentTarget.dataset.str ? h.aldstat.sendEvent("首页点击特别推荐卡片去看看进入直播间", "进入直播间") : h.aldstat.sendEvent("首页点击主播列表进入直播间", "进入直播间"), 
        void t.toLiveRoomFun(a)) : (U.showPhone(), !1) : (U.showDenglu(), !1);
    },
    toLiveRoomFun: function(e) {
        var a, i = this;
        if (h.currentUser.session_key) {
            var n = Date.parse(new Date()), o = {
                api_key: h.opApiKey,
                v: "1",
                client_info: h.client_info,
                session_key: h.currentUser.session_key,
                call_id: n,
                uid: e.player_id,
                type: "211820270846018",
                playerId: e.player_id
            }, r = c.getsign(o);
            o.sig = r, wx.request({
                url: h.apiurl + "profile/getInfo",
                data: o,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(n) {
                    var o = (n = n.data).error_msg;
                    o && o.indexOf("您的账号已停止使用") > -1 ? i.setData({
                        errorUerShow: !0
                    }) : i.setData({
                        errorUerShow: !1
                    }), !e.play_url && n.whisperProfileInfo && n.whisperProfileInfo.play_url && (e.play_url = n.whisperProfileInfo.play_url), 
                    "ios" != wx.getSystemInfoSync().platform && t();
                    var r, s;
                    r = e.cover_img_url ? e.cover_img_url : n.large_url, s = e.title ? e.title : n.user_name, 
                    a = "liveTitle=" + s + "&liveCoverImg=" + r + "&liveRoomId=" + e.live_room_id + "&playerId=" + e.player_id + "&hasFollowed=" + n.has_followed + "&isFriend=" + n.is_friend + "&playUrl=" + e.play_url, 
                    n.userRedAndVipInfoResponse ? e.red_host_flag = n.userRedAndVipInfoResponse.red_host_flag : e.red_host_flag = 0;
                    var l = [];
                    h.allVideosList.length > 0 && h.allVideosList.forEach(function(t, a) {
                        e.live_room_id != t.live_room_id && l.push(t);
                    }), h.videosList = l;
                    var c = JSON.stringify(e);
                    h.liveShowString = c;
                    try {
                        var u = JSON.parse(h.liveShowString);
                        "object" === (void 0 === u ? "undefined" : d(u)) && u ? (0 === e.live_state && (console.log("videoObj===", e), 
                        wx.navigateTo({
                            url: "./../liveShow/liveShow?" + a
                        })), i.setData({
                            recommendShow: !1
                        })) : (wx.showToast({
                            title: "拉取数据失败，请重试",
                            icon: "none"
                        }), f = !0);
                    } catch (e) {
                        wx.showToast({
                            title: "拉取数据失败，请重试",
                            icon: "none"
                        }), f = !0;
                    }
                },
                fail: function() {
                    i.setData({
                        recommendShow: !1
                    }), f = !0;
                }
            });
        }
    },
    toWeb: function(e) {
        var t = this;
        if (D = wx.getStorageSync("wxGetUserInfoAuth"), I = wx.getStorageSync("wxPhoneAuth"), 
        !D) return U.showDenglu(), !1;
        if (!I) return U.showPhone(), !1;
        var a = e.currentTarget.dataset.item, i = a.jumpUrl;
        a.bannerName && a.bannerName.indexOf("mini") > -1 ? t.toMini(i) : "yiyuanchong" == a.bannerName ? (h.aldstat.sendEvent("首页点击banner“一元大礼包”跳转一元首充页面", "首页banner进入一元首充页面"), 
        wx.navigateTo({
            url: "./../yiyuanChong/yiyuanChong",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        })) : "领取礼包" == a.bannerName ? wx.navigateTo({
            url: "./../huodong/huodong?template=1",
            success: function(e) {},
            fail: function(e) {}
        }) : i && wx.navigateTo({
            url: "./../outer/outer?url=" + i,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    toMini: function(e) {
        wx.navigateToMiniProgram({
            appId: e,
            path: "pages/home/home",
            extraData: {},
            envVersion: "2.2.6",
            success: function(t) {
                "wx792a8c7b67a81524" == e ? h.aldstat.sendEvent("首页点击banner“心动女孩”跳转点击是", "跳转至“心动女孩”小程序") : "wx9fb1c37433434976" == e && h.aldstat.sendEvent("首页点击banner“心跳女孩”跳转点击是", "跳转至“心跳女孩”小程序");
            },
            fail: function(t) {
                "wx792a8c7b67a81524" == e ? h.aldstat.sendEvent("首页点击banner“心动女孩”跳转点击否", "拒绝跳转至“心动女孩”小程序") : "wx9fb1c37433434976" == e && h.aldstat.sendEvent("首页点击banner“心跳女孩”跳转点击否", "拒绝跳转至“心跳女孩”小程序");
            }
        });
    },
    closePop: function() {
        this.setData({
            recommendShow: !1
        }), w = !1;
    },
    closeDownApp: function() {
        this.setData({
            downAppisShow: !1
        });
        var e = u.formateTime(new Date());
        wx.setStorage({
            key: "openDownAppTime",
            data: e
        }), h.aldstat.sendEvent("首页关闭“点击这里输入3”客服按钮", "首页关闭“点击这里输入3”客服按钮");
    },
    uploadFormid: function(e) {
        if (!e) return !1;
        if (h.currentUser.session_key) {
            var t = Date.parse(new Date()), a = {
                api_key: h.opApiKey,
                v: "1",
                client_info: h.client_info,
                session_key: h.currentUser.session_key,
                call_id: t,
                openId: h.wxpersonInfo.openid,
                formIdList: e,
                type: 1
            }, i = c.getsign(a);
            a.sig = i, wx.request({
                url: h.apiurl + "whisper/saveFormId",
                data: a,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {},
                fail: function(e) {}
            });
        }
    },
    getInfo: function() {
        var e = this, t = {};
        if (h.currentUser.session_key) {
            var a = Date.parse(new Date()), t = {
                api_key: h.opApiKey,
                v: "1",
                client_info: h.client_info,
                session_key: h.currentUser.session_key,
                call_id: a,
                uid: h.currentUser.uid,
                type: "17179869184"
            }, i = c.getsign(t);
            t.sig = i, wx.request({
                url: h.apiurl + "profile/getInfo",
                data: t,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(t) {
                    var a = t.data.error_msg;
                    if (a && a.indexOf("您的账号已停止使用") > -1) return e.setData({
                        errorUerShow: !0
                    }), !1;
                    t.data.userStarLevelInfoMessage && t.data.userStarLevelInfoMessage.level ? h.currentUser.level = t.data.userStarLevelInfoMessage.level : h.currentUser.level = 1, 
                    h.currentUser.userVipState = t.data.vip_stat;
                },
                fail: function(e) {}
            });
        }
    },
    changeGoodsSwip: function(e) {
        "touch" == e.detail.source && (0 == e.detail.current && this.data.goodsIndex > 1 ? this.setData({
            goodsIndex: this.data.goodsIndex
        }) : this.setData({
            goodsIndex: e.detail.current
        }));
    },
    getHotList: function() {
        var e = this;
        1 == y ? (L = 100, e.setData({
            shortList: []
        })) : L = 20;
        var t = {
            api_key: h.opApiKey,
            v: "1.0",
            call_id: new Date().getTime(),
            page: y,
            page_size: L,
            types: "1,2,3",
            filter_type: 1
        };
        t.sig = c.getLoginsign(t), wx.showLoading({
            title: "载入中..."
        }), wx.request({
            data: t,
            url: h.apiurl + "shortvideo/getHotList",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                wx.hideLoading(), y++;
                var a = t.data.new_short_video_list;
                if (!a || a.length <= 0) return !1;
                var i = [];
                a.forEach(function(t, a) {
                    1 == t.contentType && (t.viewCount = e.getNum(t.viewCount), i.push(t));
                }), i = e.data.shortList.concat(i), i = e.dealIdrepeat(i), h.shortAll = h.shortAll.concat(i), 
                e.setData({
                    shortList: i
                });
            },
            fail: function() {
                wx.hideLoading();
            }
        });
    },
    getTagByCategoryId: function() {
        var e = this, t = (h.currentUser.session_key, {
            api_key: h.opApiKey,
            v: "1",
            call_id: Date.parse(new Date()),
            session_key: h.currentUser.session_key,
            client_info: h.client_info,
            categoryId: 1,
            limit: 100,
            offset: 0
        }), a = c.getsign(t);
        t.sig = a, wx.request({
            url: h.apiurl + "livevideo/getTagByCategoryId",
            data: t,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(t) {
                if (102 == t.data.error_code) return e.setData({
                    danceListNone: !0
                }), !1;
                if (t.data.totalCount >= 0) {
                    T = t.data.tagInfoList;
                    for (var a = 0; a < T.length; a++) T[a].pageN = 1, T[a].hasMore = !0, e.getdanceList(a);
                }
            },
            fail: function() {}
        });
    },
    getdanceList: function(e) {
        var t = this, a = T[e].id, i = T[e].pageN, n = T[e].hasMore, o = e, r = 10 * (i - 1);
        h.currentUser.session_key;
        if (!n) return !1;
        1 == i && (T[o].hasMore = !0, t.setData({
            danceList: []
        }));
        var s = {
            api_key: h.opApiKey,
            v: "1",
            call_id: Date.parse(new Date()),
            session_key: h.currentUser.session_key,
            client_info: h.client_info,
            tagId: a,
            limit: 10,
            offset: r
        }, l = c.getsign(s);
        s.sig = l, wx.showLoading({
            title: "载入中..."
        }), wx.request({
            url: h.apiurl + "livevideo/getRoomListByDiyTag",
            data: s,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            success: function(e) {
                wx.hideLoading(), T[o].pageN = T[o].pageN + 1;
                var a = [];
                e.data.liveroomInfoList && e.data.liveroomInfoList.length > 0 && (e.data.liveroomInfoList.forEach(function(e, t) {
                    0 == e.live_state && a.push(e);
                }), a = t.data.danceList.concat(a), t.setData({
                    danceList: a
                })), (e.data.liveroomInfoList && e.data.liveroomInfoList.length <= 0 || !e.data.liveroomInfoList) && (T[o].hasMore = !1), 
                e.data.liveroomInfoList && e.data.liveroomInfoList.length <= 0 && o == T.length - 1 && t.data.danceList.length <= 0 && t.setData({
                    danceListNone: !0
                }), !e.data.liveroomInfoList && o == T.length - 1 && t.data.danceList.length <= 0 && t.setData({
                    danceListNone: !0
                }), o == T.length - 1 && t.data.danceList.length > 0 && t.setData({
                    danceListNone: !1
                });
            },
            fail: function() {
                wx.hideLoading();
            }
        });
    },
    onLive: function() {
        this.setData({
            tabCss: "liveActive",
            tabliveicon: !0,
            tabshorticon: !1,
            tabdanceicon: !1,
            tablive: !0,
            tabshort: !1,
            tabdance: !1
        });
    },
    onDance: function() {
        var e = this;
        e.setData({
            tabCss: "danceActive",
            tabliveicon: !1,
            tabdanceicon: !0,
            tabshorticon: !1,
            tabdance: !0,
            tablive: !1,
            tabshort: !1
        }), T.length <= 0 && e.getTagByCategoryId();
    },
    onShort: function() {
        var e = this;
        e.setData({
            tabCss: "shortActive",
            tabliveicon: !1,
            tabshorticon: !0,
            tabdanceicon: !1,
            tablive: !1,
            tabshort: !0,
            tabdance: !1
        }), (!e.data.shortList || e.data.shortList.length <= 0) && e.getHotList();
    },
    toShortRoom: function(e) {
        var t = e.currentTarget.dataset.item;
        return p = t, D = wx.getStorageSync("wxGetUserInfoAuth"), I = wx.getStorageSync("wxPhoneAuth"), 
        D ? I ? !!S && (S = !1, h.aldstat.sendEvent("首页点击短视频列表进入短视频页面", "首页进入短视频页面"), void wx.navigateTo({
            url: "./../miniVideo/miniVideo?vid=" + t.id
        })) : (U.showPhone(), !1) : (U.showDenglu(), !1);
    },
    toKefu: function() {
        h.aldstat.sendEvent("首页点击“点击这里输入3”进入客服", "首页“点击这里输入3”进入客服");
    },
    hasRecharge: function() {
        if (h.currentUser && h.currentUser.session_key) {
            var e = h.apiurl + "token/hasRecharge", t = {
                api_key: h.opApiKey,
                v: "1.0",
                call_id: new Date().getTime(),
                session_key: h.currentUser.session_key
            }, a = this;
            t.sig = c.getsign(t), wx.request({
                data: t,
                url: e,
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8"
                },
                success: function(e) {
                    if ("ios" == h.globalData.platform) h.hasyiyuan = !1; else if (0 == e.data.hasRecharge) {
                        h.hasyiyuan = !0;
                        var t = [ {
                            bannerName: "yiyuanchong",
                            jumpUrl: "yiyuanchong",
                            picUrl: "http://a.xnimg.cn/wap/mobile/wxMiniApp/onlineImgs/banneryy.jpg"
                        } ], i = a.data.privateBannerInfoList.concat(t);
                        a.setData({
                            privateBannerInfoList: i,
                            bannerShow: !0
                        });
                    } else h.hasyiyuan = !1;
                }
            });
        }
    }
}), Array.prototype.mFindIndex = function(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.length, i = t; i < a; i++) if (e.call(this, this[i], i, this)) return i;
    return -1;
};

var A = 0, C = void 0, k = 1, P = void 0, M = 2;