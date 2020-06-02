function t() {
    return Math.random() < .5 ? "#FF2A48" : "white";
}

function a(t) {
    return t < 10 ? "0" + t : t;
}

var e = Array(256).join("1").split(""), s = require("../../utils/server.js"), d = (require("../../wxParse/wxParse.js"), 
require("../../utils/add.js"), wx.getStorageSync("mid"), wx.getStorageSync("utoken")), o = wx.getExtConfigSync ? wx.getExtConfigSync() : {}, r = o.new, l = 1, i = [], c = "", n = 0, u = 0, g = [], p = !0, h = {
    data: {
        offline: !1,
        loading: !0,
        bannerHeight: Math.ceil(290 / 750 * getApp().screenWidth),
        width: 2 * Math.ceil(wx.getSystemInfoSync().windowWidth),
        swiperArr: "",
        id: "",
        selectedTitle: 0,
        index: 0,
        headPhoto: "",
        showView: !1,
        phone: "",
        total: "",
        carts: [],
        goodsList: [],
        empty: !0,
        minusStatuses: [ "disabled", "disabled", "normal", "normal", "disabled" ],
        selectedAllStatus: !0,
        skillPriceList: {},
        refresh: !1,
        twoindex: 0,
        isClick: "",
        myNum: 0,
        redResult: {},
        redPrize: {},
        "redPrize.topOPen": 0,
        markers: [],
        controls: [ {
            id: 0,
            iconPath: "https://tws.cnweisou.com/images/fixedPosition.png",
            position: {
                left: 188,
                top: 155,
                width: 35,
                height: 35
            },
            clickable: !0
        }, {
            id: 1,
            iconPath: "https://tws.cnweisou.com/images/mapPosition.png",
            position: {
                left: 320,
                top: 260,
                width: 35,
                height: 35
            },
            clickable: !0
        } ],
        scrollTop: 0
    },
    controltap: function(t) {
        var a = this;
        1 == t.controlId && this.mapCtx.moveToLocation(), 0 == t.controlId && wx.openLocation({
            latitude: a.data.latitude,
            longitude: a.data.longitude,
            scale: 28
        });
    },
    receivePackage: function() {
        var t = this, a = wx.getStorageSync("utoken");
        s.sendRequest({
            url: "?r=lottery.reward",
            showToast: !1,
            data: {
                utoken: a,
                id: t.data.myId
            },
            method: "POST",
            success: function(a) {
                a.data.result.icon ? t.setData({
                    redPrize: a.data.result,
                    "redPrize.topOPen": 2,
                    redWait: !1
                }) : t.setData({
                    "redPrize.info": "支付配置有误，请联系商家完善",
                    "redPrize.icon": "https://tws.cnweisou.com/images/gameError.jpg",
                    "redPrize.topOPen": 2
                });
            }
        });
    },
    submitInfo: function(t) {
        var a = t.detail.formId;
        s.sendRequest({
            url: "?r=wxapp.formid.getFormidList",
            data: {
                utoken: d,
                formId: a
            },
            method: "GET",
            success: function(t) {}
        });
    },
    receivePackageClose: function() {
        var t = this;
        clearInterval(void 0), t.setData({
            "redResult.redPackage": !1
        });
    },
    addcard: function() {
        s.sendRequest({
            url: "?r=wxapp.member.vipcard.addWxMemberCard",
            data: {
                utoken: d
            },
            method: "GET",
            success: function(t) {
                wx.addCard({
                    cardList: [ {
                        cardId: t.data.result.card_id,
                        cardExt: '{"nonce_str": "' + t.data.result.card_ext.nonce_str + '", "timestamp": "' + t.data.result.card_ext.timestamp + '", "signature":"' + t.data.result.card_ext.signature + '"}'
                    } ],
                    success: function(t) {
                        s.sendRequest({
                            url: "?r=wxapp.member.vipcard.decs",
                            data: {
                                utoken: d,
                                cardid: t.cardList[0].cardId,
                                encrypt_code: t.cardList[0].code
                            },
                            method: "GET",
                            success: function(a) {
                                wx.openCard({
                                    cardList: [ {
                                        cardId: t.cardList[0].cardId,
                                        code: a.data.result.code
                                    } ],
                                    success: function(t) {}
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    opencard: function() {
        wx.navigateTo({
            url: "../groupbuy/groupList/index"
        });
    },
    clickCont: function() {
        this.setData({
            isClick: !0
        });
    },
    clickContAgain: function() {
        this.setData({
            isClick: !1
        });
    },
    onUnload: function() {
        c && clearTimeout(c);
    },
    onHide: function() {
        c && clearTimeout(c);
    },
    onLoad: function(t) {
        var a = this;
        l = 1;
        o.new, getApp();
        if (a.mapCtx = wx.createMapContext("map"), t.mid) {
            a.setData({
                mid: t.mid
            });
            wx.setStorageSync("mid", t.mid), wx.getStorageSync("mid");
        }
        a.setData({
            options: t
        }), this.getInviteCode(t), this.loadPageData(t), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    windowWidth: t.windowWidth,
                    windowHeight: t.windowHeight
                });
            }
        }), (d = wx.getStorageSync("utoken")) && this.isHasRed(d);
    },
    onShow: function(t) {
        var a = this;
        !p && a.data.seckillgroup && a.getstartList();
    },
    isHasRed: function(t) {
        var a = this;
        s.sendRequest({
            url: "?r=lottery.has_get_red&utoken=" + t,
            method: "GET",
            showToast: !1,
            success: function(e) {
                e.data.result && 1 == e.data.result.status && a.setData({
                    statusRed: e.data.result.status
                }), 1 == e.data.result.status && s.sendRequest({
                    url: "?r=lottery.lottery_id&type=4&utoken=" + t,
                    method: "GET",
                    showToast: !1,
                    that: a,
                    success: function(e) {
                        e.data.result.id && (a.setData({
                            myId: e.data.result.id
                        }), s.sendRequest({
                            url: "?r=lottery.lists&utoken=" + t,
                            showToast: !1,
                            that: a,
                            data: {
                                id: a.data.myId
                            },
                            method: "POST",
                            success: function(t) {
                                console.log(t), t.data.result && a.setData({
                                    redResult: t.data.result,
                                    "redResult.redPackage": !0,
                                    "redPrize.topOPen": 0
                                });
                            }
                        }));
                    }
                });
            }
        });
    },
    draw: function() {
        var a = this, s = wx.createCanvasContext("redPackage");
        s.setFillStyle(t()), e.map(function(t, d) {
            var o = 5 * d, t = Math.random() * t * 5;
            s.fillText("/", o, t), e[d] = t > a.data.windowHeight - 200 + 200 * Math.random() ? 0 : t + 20;
        }), s.draw();
    },
    count_down: function(t) {
        if ((t = this).data.skillPriceList.clock = t.date_format(t.data.total_micro_second), 
        t.setData({
            clock: t.date_format(t.data.total_micro_second),
            skillPriceList: t.data.skillPriceList
        }), t.data.total_micro_second <= 0) return t.data.clock.clock_hasTime = "", t.data.clock = t.data.clock.clock_hasTime, 
        t.setData({
            clock: t.data.clock,
            isSkill: !1
        }), void t.getstartList();
        c = setTimeout(function() {
            t.data.total_micro_second -= 1e3, t.count_down(t);
        }, 1e3);
    },
    date_format: function(t) {
        var e = Math.floor(t / 1e3), s = a(Math.floor(e / 3600)), d = a(Math.floor((e - 3600 * s) / 60)), o = a(e - 3600 * s - 60 * d);
        return {
            clock_hour: s,
            clock_min: d,
            clock_sec: o,
            micro_sec: a(Math.floor(t % 1e3 / 10)),
            clock_all: s + ":" + d + ":" + o,
            clock_hasTime: !0
        };
    },
    getstartList: function() {
        var t = this;
        s.sendRequest({
            url: "?r=seckill",
            data: {},
            showToast: !1,
            that: t,
            method: "GET",
            success: function(a) {
                if (a.data.result && 0 != a.data.result.length) {
                    if (a.data.result.times) {
                        for (var e, s = 0; s < a.data.result.times.length; s++) if (0 == a.data.result.times[s].status) {
                            e = s;
                            break;
                        }
                        if (e || 0 == e) {
                            t.data.skillPriceList.show = !0, t.setData({
                                time: a.data.result.time,
                                times: a.data.result.times,
                                goods: a.data.result.goods,
                                skillPriceList: t.data.skillPriceList
                            });
                            t.data.times[e].starttime;
                            var d = 1e3 * t.data.time.nowtime, o = 1e3 * t.data.times[e].endtime - d;
                            t.data.skillPriceList.nowClock = t.data.times[e].time, t.data.skillPriceList.goods = t.data.goods, 
                            t.setData({
                                isSkill: !0,
                                total_micro_second: o,
                                skillPriceList: t.data.skillPriceList
                            }), t.count_down(t);
                        } else t.data.skillPriceList.show = "", t.setData({
                            skillPriceList: t.data.skillPriceList
                        });
                    }
                } else t.data.skillPriceList.show = !1, t.setData({
                    skillPriceList: t.data.skillPriceList
                });
            }
        });
    },
    joinskillPrice: function() {
        wx.navigateTo({
            url: "../goods/priceKill/priceKill"
        });
    },
    clickSkill: function(t) {
        wx.navigateTo({
            url: "../goods/priceKill/priceKill"
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        this.getInviteCode(t.data.options), this.loadPageData(t.data.options), wx.stopPullDownRefresh();
    },
    inputchange: function(t) {
        console.log(t), this.setData({
            keywords: t.detail.value
        });
    },
    formSubmit: function(t) {
        var a = this, e = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        if (e.tabBarPage) {
            var s = e.tabBarPage;
            for (var d in s) if ("/pages/goods/list/list" == s[d]) return void wx.reLaunch({
                url: "/pages/goods/list/list?keywords=" + a.data.keywords
            });
        }
        wx.navigateTo({
            url: "../goods/list/list?keywords=" + a.data.keywords
        });
    },
    search: function() {
        var t = this;
        wx.navigateTo({
            url: "../goods/list/list?keywords=" + t.data.keywords
        });
    },
    getCarts: function() {
        var t = this;
        wx.getStorageSync("selectGoods") && t.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        }), t.data.Allnum ? this.setData({
            showView: !0
        }) : wx.showToast({
            title: "请勾选商品",
            icon: "success",
            duration: 1e3
        });
    },
    loadPageData: function(t) {
        var a = this;
        4 == r && (a.setData({
            loading: !1,
            news: r
        }), s.sendRequest({
            url: "?r=wxapp.shop.takingOrder&news=" + r,
            method: "GET",
            showToast: !1,
            that: a,
            success: function(t) {
                var e, s, d = [];
                wx.getSystemInfo({
                    success: function(t) {
                        e = .1 * t.windowHeight, s = .9 * t.windowHeight;
                    }
                });
                for (var o in t.data.result.category) {
                    d[o] = [];
                    for (var r in t.data.result.category[o].goods) d[o].push(t.data.result.category[o].goods[r]);
                }
                i = t.data.result.category, a.setData({
                    dataonload: {
                        test: t.data.result,
                        topHeight: e,
                        swiperHeight: s,
                        arr: d
                    },
                    data: {
                        test: t.data.result,
                        topHeight: e,
                        swiperHeight: s,
                        arr: d
                    },
                    selectedTitle: a.data.selectedTitle
                }), wx.getStorageSync("selectGoods") && a.setData({
                    selectGoods: wx.getStorageSync("selectGoods"),
                    Allprice: wx.getStorageSync("Allprice"),
                    Allnum: wx.getStorageSync("Allnum")
                });
            }
        })), 1 != r && 3 != r || s.sendRequest({
            url: "?r=wxapp&news=" + r,
            method: "GET",
            showToast: !1,
            that: a,
            success: function(e) {
                console.log(e), console.log(111), a.setData({
                    data: e.data
                }), "-2" == a.data.data.data.page.diymenu && (wx.setStorageSync("diymenu", a.data.data.data.page.diymenu), 
                s.sendRequest({
                    url: "?r=wxapp.member.aboutus",
                    method: "GET",
                    showToast: !1,
                    success: function(t) {
                        var a = t.data.result.tel.split(",");
                        wx.setStorageSync("tel", a[0]);
                    }
                }));
                var d;
                if (e.data.data && e.data.data.page && (e.data.data.page.is_pinpoint && (d = e.data.data.page.is_pinpoint), 
                e.data.data && e.data.data.page && 1 == e.data.data.page.customerserver)) {
                    var o = e.data.data.page.icon ? "http://boweisou.oss-cn-shenzhen.aliyuncs.com/" + e.data.data.page.icon : "https://tws.cnweisou.com/images/kefu.png";
                    wx.setStorageSync("customerserver", o);
                }
                try {
                    if (e.data.data.items) var r = e.data.data.items;
                } catch (t) {}
                try {
                    for (var l in e.data.data.items) switch (e.data.data.items[l].id) {
                      case "merchgroup":
                        "1" == e.data.data.items[l].params.openlocation && (t.lng ? (a.setData({
                            listLat: t.lat,
                            listLng: t.lng
                        }), s.sendRequest({
                            url: "?r=wxapp.shop.list&lat=" + t.lat + "&lng=" + t.lng + "&site=0",
                            showToast: !1,
                            that: a,
                            data: {
                                is_pinpoint: d
                            },
                            method: "GET",
                            success: function(e) {
                                if (e.data.result && a.setData({
                                    store: e.data.result,
                                    store_num: e.data.result.list.length
                                }), r) for (var s in r) if ("search" == r[s].id) {
                                    var d = r[s];
                                    d.item = {
                                        address: t.city,
                                        lat: t.lat,
                                        lng: t.lng
                                    }, a.setData({
                                        search: d
                                    });
                                }
                            }
                        })) : wx.getLocation({
                            type: "wgs84",
                            success: function(t) {
                                var e = t.latitude, o = t.longitude;
                                a.setData({
                                    listLat: e,
                                    listLng: o
                                }), s.sendRequest({
                                    url: "?r=wxapp.shop.list&lat=" + t.latitude + "&lng=" + t.longitude + "&site=0",
                                    showToast: !1,
                                    that: a,
                                    data: {
                                        is_pinpoint: d
                                    },
                                    method: "GET",
                                    success: function(t) {
                                        if (t.data.result && a.setData({
                                            store: t.data.result,
                                            store_num: t.data.result.list.length,
                                            address: t.data.result.city
                                        }), r) for (var s in r) if ("search" == r[s].id) {
                                            var d = r[s];
                                            d.item = {
                                                address: a.data.address,
                                                lat: e,
                                                lng: o
                                            }, a.setData({
                                                search: d
                                            });
                                            var l = a.data.search.item.address.split("");
                                            if (l.length >= 6) {
                                                var i = [];
                                                for (var c in l) c < 6 && i.push(l[c]);
                                                i = i.join(""), a.setData({
                                                    address: i
                                                });
                                            } else a.setData({
                                                address: a.data.address
                                            });
                                        }
                                    }
                                });
                            }
                        }));
                        break;

                      case "search":
                        a.setData({
                            paddingleft: e.data.data.items[l].style.paddingleft
                        }), 1 == e.data.data.items[l].style.fixed && a.setData({
                            searchHeight: 75 + 2 * e.data.data.items[l].style.paddingtop
                        }), wx.getSystemInfo({
                            success: function(t) {
                                a.setData({
                                    windowWidthS: 2 * t.windowWidth - 10 * a.data.paddingleft
                                });
                            }
                        });
                        break;

                      case "map":
                        var i = [ {
                            iconPath: "https://tws.cnweisou.com/images/hotelPosition.png",
                            id: 0,
                            latitude: e.data.data.items[l].style.latitude,
                            longitude: e.data.data.items[l].style.longitude,
                            width: 30,
                            height: 30,
                            callout: {
                                content: "我在这里喔",
                                color: "#fff",
                                display: "BYCLICK",
                                bgColor: "#93C750",
                                padding: 20,
                                borderRadius: 5
                            }
                        } ];
                        a.setData({
                            markers: i,
                            latitude: parseFloat(e.data.data.items[l].style.latitude),
                            longitude: parseFloat(e.data.data.items[l].style.longitude)
                        });
                        break;

                      case "seckillgroup":
                        a.setData({
                            seckillgroup: e.data.data.items[l].id
                        }), p && (p = !1, a.getstartList());
                    }
                } catch (t) {}
                d > 0 && (t.lng ? (a.setData({
                    listLat: t.lat,
                    listLng: t.lng
                }), s.sendRequest({
                    url: "?r=wxapp.shop.list&lat=" + t.lat + "&lng=" + t.lng + "&site=0",
                    showToast: !1,
                    that: a,
                    data: {
                        is_pinpoint: d
                    },
                    method: "GET",
                    success: function(e) {
                        if (e.data.result && a.setData({
                            store: e.data.result,
                            store_num: e.data.result.list.length
                        }), r) for (var s in r) if ("search" == r[s].id) {
                            var d = r[s];
                            d.item = {
                                address: t.city,
                                lat: t.lat,
                                lng: t.lng
                            }, a.setData({
                                search: d
                            });
                        }
                    }
                })) : wx.getLocation({
                    type: "wgs84",
                    success: function(t) {
                        var e = t.latitude, d = t.longitude;
                        s.sendRequest({
                            url: "?r=wxapp.shop.localtion",
                            showToast: !1,
                            that: a,
                            data: {
                                lat: e,
                                lng: d
                            },
                            method: "GET",
                            success: function(t) {
                                var e = {};
                                e.item = {
                                    address: t.data.result
                                }, a.setData({
                                    search: e,
                                    address: t.data.result
                                });
                            }
                        });
                    }
                })), a.setData({
                    loading: !1
                });
            }
        });
    },
    markertap: function(t) {},
    address: function(t) {
        wx.navigateTo({
            url: "../area/index/index?addr=" + t.currentTarget.dataset.addr + "&lat=" + t.currentTarget.dataset.lat + "&lng=" + t.currentTarget.dataset.lng + "&addr=" + t.currentTarget.dataset.addr
        });
    },
    storebtn: function(t) {
        console.log(t), console.log("跳转"), wx.navigateTo({
            url: "../goods/shop/shop?id=" + t.currentTarget.id,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    getToPage: function(t) {
        s.getToPage(t);
    },
    to_store: function() {
        var t = this;
        wx.navigateTo({
            url: "../shoppage/list/index?listLat=" + t.data.listLat + "&listLng=" + t.data.listLng
        });
    },
    getInviteCode: function(t) {
        void 0 != t.uid && wx.showToast({
            title: "来自用户:" + t.uid + "的分享",
            icon: "success",
            duration: 2e3
        });
    },
    onShareAppMessage: function() {
        return {
            path: "/pages/index/index?uid=4719784"
        };
    },
    call: function(t) {
        var a = t.currentTarget.id;
        console.log(a), wx.showActionSheet({
            itemList: [ "拨打电话", "取消" ],
            success: function(t) {
                0 == t.tapIndex && wx.makePhoneCall({
                    phoneNumber: a,
                    success: function() {
                        console.log("成功");
                    },
                    fail: function() {}
                });
            }
        });
    },
    reduce: function(t) {
        var a = this;
        wx.getStorageSync("selectGoods") && a.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        });
        var e = t.currentTarget.dataset.index;
        if (a.data.data.arr[a.data.selectedTitle][e].mytotal >= 1) {
            a.data.data.arr[a.data.selectedTitle][e].mytotal--, n -= a.data.data.arr[a.data.selectedTitle][e].marketprice, 
            u--, a.setData({
                data: a.data.data,
                Allprice: n,
                Allnum: u
            });
            for (var s = 0; s < a.data.selectGoods.length; s++) a.data.selectGoods[s].id == a.data.data.arr[a.data.selectedTitle][e].id && (g.splice(s, 1, a.data.data.arr[a.data.selectedTitle][e]), 
            a.setData({
                selectGoods: g
            }));
            wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
            wx.setStorageSync("Allnum", a.data.Allnum);
        }
        if (a.data.data.arr[a.data.selectedTitle][e].mytotal <= 0) {
            a.data.data.arr[a.data.selectedTitle][e].mytotal = 0;
            for (var d = 0; d < a.data.selectGoods.length; d++) 0 == a.data.selectGoods[d].mytotal && (g.splice(d, 1), 
            a.setData({
                selectGoods: g
            }));
        }
        wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
        wx.setStorageSync("Allnum", a.data.Allnum);
    },
    add: function(t) {
        var a = this, e = parseInt(t.currentTarget.dataset.id), d = t.currentTarget.dataset.index;
        if (a.setData({
            nowid: e,
            nowcurrIndex: d
        }), wx.getStorageSync("selectGoods") && a.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        }), a.data.data.arr[a.data.selectedTitle][d].mytotal) if (1 == a.data.data.arr[a.data.selectedTitle][d].hasoption) a.setData({
            isSecond: !0
        }); else {
            a.data.data.arr[a.data.selectedTitle][d].mytotal++, n += parseInt(a.data.data.arr[a.data.selectedTitle][d].marketprice), 
            u++, a.setData({
                data: a.data.data,
                Allprice: n,
                Allnum: u
            });
            for (var o = 0; o < a.data.selectGoods.length; o++) a.data.selectGoods[o].id == a.data.data.arr[a.data.selectedTitle][d].id && (g.splice(o, 1, a.data.data.arr[a.data.selectedTitle][d]), 
            a.setData({
                selectGoods: g
            }));
            wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
            wx.setStorageSync("Allnum", a.data.Allnum);
        } else {
            if (1 == a.data.data.arr[a.data.selectedTitle][d].hasoption) {
                var r = wx.getStorageSync("utoken");
                s.sendRequest({
                    url: "?r=wxapp.goods.detail&id=" + a.data.data.arr[a.data.selectedTitle][d].id + "&utoken=" + r,
                    method: "GET",
                    that: a,
                    success: function(t) {
                        a.setData({
                            goods_spec_list: t.data.result.goods.goods_spec_list,
                            spec_goods_price: t.data.result.spec_goods_price,
                            isSecond: !0,
                            mygoodLen: t.data.result.goods.goods_spec_list.length,
                            goods_name: t.data.result.goods.goods_name
                        });
                        for (var e = [], s = 0; s < a.data.goods_spec_list.length; s++) for (var d = 0; d < a.data.goods_spec_list[s].length; d++) 1 == a.data.goods_spec_list[s][d].isClick && e.push(a.data.goods_spec_list[s][d].item_id);
                        if (1 == e.length) for (r = 0; r < a.data.spec_goods_price.length; r++) a.data.spec_goods_price[r].key == e[0] && a.setData({
                            nowPrice: a.data.spec_goods_price[r].price
                        }); else for (var o = e.reverse().join("_"), r = 0; r < a.data.spec_goods_price.length; r++) a.data.spec_goods_price[r].key == o && a.setData({
                            nowPrice: a.data.spec_goods_price[r].price
                        });
                    }
                });
            } else a.data.data.arr[a.data.selectedTitle][d].mytotal = 0, a.data.data.arr[a.data.selectedTitle][d].mytotal++, 
            n += parseInt(a.data.data.arr[a.data.selectedTitle][d].marketprice), u++, g.push(a.data.data.arr[a.data.selectedTitle][d]), 
            a.setData({
                data: a.data.data,
                Allprice: n,
                Allnum: u,
                selectGoods: g
            });
            wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
            wx.setStorageSync("Allnum", a.data.Allnum);
        }
    },
    selectSpecif: function(t) {
        for (var a = this, e = t.currentTarget.dataset.index, s = t.currentTarget.dataset.spec_name, d = 0; d < a.data.goods_spec_list.length; d++) for (var o = 0; o < a.data.goods_spec_list[d].length; o++) a.data.goods_spec_list[d][o].spec_name == s && (a.data.goods_spec_list[d][o].isClick = e == o ? 1 : 0);
        for (var r = [], l = 0; l < a.data.goods_spec_list.length; l++) for (var i = 0; i < a.data.goods_spec_list[l].length; i++) 1 == a.data.goods_spec_list[l][i].isClick && r.push(a.data.goods_spec_list[l][i].item_id);
        if (1 == r.length) for (n = 0; n < a.data.spec_goods_price.length; n++) a.data.spec_goods_price[n].key == r[0] && a.setData({
            nowPrice: a.data.spec_goods_price[n].price
        }); else for (var c = r.reverse().join("_"), n = 0; n < a.data.spec_goods_price.length; n++) a.data.spec_goods_price[n].key == c && a.setData({
            nowPrice: a.data.spec_goods_price[n].price
        });
        a.setData({
            goods_spec_list: a.data.goods_spec_list
        });
    },
    selectOk: function(t) {
        var a = this;
        if (a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].mytotal) {
            a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].mytotal++, a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].marketprice = a.data.nowPrice, 
            n += parseInt(a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].marketprice), 
            u++, a.setData({
                data: a.data.data,
                Allprice: n,
                Allnum: u
            });
            for (var e = 0; e < a.data.selectGoods.length; e++) a.data.selectGoods[e].id == a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].id && (g.splice(e, 1, a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex]), 
            a.setData({
                selectGoods: g,
                isSecond: !1
            }));
            wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
            wx.setStorageSync("Allnum", a.data.Allnum);
        } else a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].mytotal = 0, a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].mytotal++, 
        a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].marketprice = a.data.nowPrice, 
        n += parseInt(a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].marketprice), 
        u++, g.push(a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex]), a.setData({
            data: a.data.data,
            Allprice: n,
            Allnum: u,
            selectGoods: g,
            isSecond: !1
        });
        wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
        wx.setStorageSync("Allnum", a.data.Allnum);
    },
    closeSecond: function(t) {
        this.setData({
            isSecond: !1
        });
    },
    allAdd: function(t) {
        var a = this;
        wx.getStorageSync("selectGoods") && a.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        });
        var e = t.currentTarget.dataset.index;
        a.data.selectGoods[e].mytotal++, n += parseInt(a.data.selectGoods[e].marketprice), 
        a.setData({
            selectGoods: a.data.selectGoods,
            Allprice: n
        }), a.data.data.arr[0][0] = a.data.selectGoods[e], a.setData({
            data: a.data.data
        });
        for (var s = 0; s < a.data.data.length; s++) for (var d in a.data.data.arr[s][d]) a.data.selectGoods[e].id == a.data.data.arr[s][d].id && (a.data.data.arr[s][d] = a.data.selectGoods[e], 
        a.setData({
            data: a.data.data
        }));
        wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
        wx.setStorageSync("Allnum", a.data.Allnum);
    },
    allDelete: function(t) {
        var a = this;
        wx.getStorageSync("selectGoods") && a.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        });
        var e = t.currentTarget.dataset.index;
        if (a.data.selectGoods[e].mytotal--, n -= parseInt(a.data.selectGoods[e].marketprice), 
        console.log(a.data.Allprice), u--, a.data.selectGoods[e].mytotal >= 1) {
            a.setData({
                selectGoods: a.data.selectGoods,
                Allprice: n,
                Allnum: u
            });
            for (s = 0; s < a.data.data.arr.length; s++) for (d = 0; d < a.data.data.arr[s].length; d++) a.data.data.arr[s][d].id == a.data.selectGoods[e].id && (a.data.data.arr[s][d] = a.data.selectGoods[e], 
            a.setData({
                data: a.data.data
            }));
            wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
            wx.setStorageSync("Allnum", a.data.Allnum);
        } else if (a.data.selectGoods[e].mytotal <= 0) {
            for (var s = 0; s < a.data.data.arr.length; s++) for (var d = 0; d < a.data.data.arr[s].length; d++) a.data.data.arr[s][d].id == a.data.selectGoods[e].id && (a.data.data.arr[s][d].mytotal = 0, 
            a.setData({
                data: a.data.data
            }));
            a.data.selectGoods.splice(e, 1), a.setData({
                selectGoods: a.data.selectGoods,
                Allprice: n,
                Allnum: u
            }), 0 == a.data.selectGoods.length && (a.setData({
                showView: !1
            }), a.data.data = a.data.dataonload, a.setData({
                selectGoods: [],
                showView: !1,
                Allnum: 0,
                Allprice: 0,
                data: a.data.data
            }), u = 0, n = 0, g = [], wx.removeStorageSync("selectGoods"), wx.removeStorageSync("Allprice"), 
            wx.removeStorageSync("Allnum")), wx.setStorageSync("selectGoods", a.data.selectGoods), 
            wx.setStorageSync("Allprice", a.data.Allprice), wx.setStorageSync("Allnum", a.data.Allnum), 
            wx.setStorageSync("data", a.data.data);
        }
    },
    show: function(t) {
        var a = this, e = (parseInt(t.currentTarget.dataset.index), t.currentTarget.id);
        this.data.data.selectedTitle = e, this.setData({
            selectedTitle: e,
            twoindex: e
        }), a.setData({
            refresh: !1
        }), l = 1;
    },
    click_phone: function() {
        var t = this;
        wx.makePhoneCall({
            phoneNumber: t.data.data.test.shopinfo.phone
        });
    },
    topShow: function() {
        this.setData({
            showView: !1
        });
    },
    bindCheckout: function() {
        for (var t = this, a = 0; a < t.data.selectGoods.length; a++) for (var e in t.data.selectGoods[a]) "id" != e && "merchid" != e && "mytotal" != e && "marketprice" != e && delete t.data.selectGoods[a][e];
        var d = wx.getStorageSync("utoken");
        s.sendRequest({
            url: "?r=wxapp.member.cart.updateCart",
            that: t,
            data: {
                utoken: d,
                goodslist: t.data.selectGoods
            },
            method: "POST",
            success: function(a) {
                t.data.data = t.data.dataonload, t.setData({
                    selectGoods: [],
                    showView: !1,
                    Allnum: 0,
                    Allprice: 0,
                    data: t.data.data
                }), u = 0, n = 0, g = [], wx.removeStorageSync("selectGoods"), wx.removeStorageSync("Allprice"), 
                wx.removeStorageSync("Allnum"), wx.navigateTo({
                    url: "../../../../order/checkout/checkout"
                });
            }
        });
    },
    deleteCart: function() {
        var t = this;
        t.data.data = t.data.dataonload, t.setData({
            selectGoods: [],
            showView: !1,
            Allnum: 0,
            Allprice: 0,
            data: t.data.data
        }), u = 0, n = 0, g = [], wx.removeStorageSync("selectGoods"), wx.removeStorageSync("Allprice"), 
        wx.removeStorageSync("Allnum");
    },
    bottom: function(t) {
        var a = this;
        a.data.refresh || (a.setData({
            refresh: !0
        }), l += 1, s.sendRequest({
            url: "?r=wxapp.shop.takingOrder&news=4",
            that: a,
            data: {
                page: l
            },
            method: "GET",
            success: function(t) {
                var e, s, d = [];
                for (var o in i) {
                    d[o] = [];
                    for (var r in i[o].goods) d[o].push(i[o].goods[r]);
                }
                for (var l in t.data.result.category) if (t.data.result.category[l].goods) for (var c in t.data.result.category[l].goods) d[l].push(t.data.result.category[l].goods[c]), 
                i[l].goods.push(t.data.result.category[l].goods[c]);
                wx.getSystemInfo({
                    success: function(t) {
                        e = .1 * t.windowHeight, s = .9 * t.windowHeight;
                    }
                }), a.setData({
                    data: {
                        test: t.data.result,
                        topHeight: e,
                        swiperHeight: s,
                        arr: d
                    },
                    selectedTitle: a.data.selectedTitle
                }), t.data.result.category && t.data.result.category[a.data.twoindex] && "" != t.data.result.category[a.data.twoindex].goods && a.setData({
                    refresh: !1
                });
            }
        }));
    },
    diy_phone: function() {
        wx.makePhoneCall({
            phoneNumber: wx.getStorageSync("tel")
        });
    },
    diy_category: function() {
        wx.navigateTo({
            url: "/pages/category/category"
        });
    }
};

Page(h);