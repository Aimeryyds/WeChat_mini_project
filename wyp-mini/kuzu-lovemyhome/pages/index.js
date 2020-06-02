var t, e = getApp(), a = require("../js/qqmap-wx-jssdk.min.js"), o = require("../utils/gio-minp/index.js").default, s = require("../sdk/gioConfig.js").default;

o("setConfig", s), Page({
    data: {
        cityid: 1,
        cityname: "北京",
        loadinghide: !1,
        list: "",
        helpYouPick: "",
        helpYouRent: "",
        communitytest: "",
        hotrecommend: "",
        houseknowledge: "",
        unReadNum: "",
        currentTab: 0,
        iscitylistback: !1,
        newhouse: ""
    },
    onLoad: function(t) {
        this.indexPop(100), this.getmessage(), this.getlocation();
    },
    getlocation: function() {
        console.log("获取地理位置信息");
        var t = this;
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userLocation"] ? (console.log("已经授权地理位置了"), t.getcityname()) : wx.authorize({
                    scope: "scope.userLocation",
                    success: function(e) {
                        t.getcityname();
                    },
                    fail: function() {
                        t.setData({
                            cityid: 1,
                            cityname: "北京"
                        }), t.getdata();
                    }
                });
            }
        });
    },
    getcityname: function() {
        var e = this;
        t = new a({
            key: "PHJBZ-23WC3-WZH3J-YCJHE-ZOSVV-FXBOB"
        }), console.log(t), t.reverseGeocoder({
            success: function(t) {
                console.log(t);
                var a = t.result.address_component.city.substr(0, 2);
                console.log(a), e.getCityList(a);
            },
            fail: function(t) {
                console.error(t), e.setData({
                    cityid: 1,
                    cityname: "北京"
                }), e.getdata();
            }
        });
    },
    getCityList: function(t) {
        var a = this, o = "";
        wx.request({
            url: e.globalData.url_host + "/appapi/home/switchweb",
            success: function(e) {
                console.log("城市列表", e), e.data.data.map(function(e) {
                    e.name == t && (o = e.id);
                }), console.log("cityid", o), a.setData({
                    cityid: o,
                    cityname: t
                }), wx.setStorageSync("citylocation", t), a.getdata();
            }
        });
    },
    getnewhouseData: function() {
        console.log("获取新房数据");
        var t = this.data.cityid, e = this;
        wx.request({
            url: "https://appapi.5i5j.com/home/" + t + "/info",
            data: {
                cityid: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data.data);
                var a = t.data.data;
                0 == a.bannerInfo.length && 0 == a.dynamic.length && 0 == a.guide.length && 0 == a.hotEstate.length ? (console.log("此城市没有新房频道"), 
                e.setData({
                    newhouse: !1
                })) : (console.log("此城市有新房频道"), e.setData({
                    newhouse: !0
                }));
            }
        });
    },
    getmessage: function() {
        var t = this;
        if ("1" == wx.getStorageSync("loginStatus")) {
            var a = wx.getStorageSync("userInfo"), o = e.globalData.url_host;
            console.log("index--userInfo----", a), wx.request({
                url: o + "/wxim/messageunread",
                method: "POST",
                data: {
                    user_id: a.uid
                },
                success: function(e) {
                    console.log("res.datares.datares.data", e.data);
                    var a = e.data.count, o = wx.getStorageSync("userInfo");
                    a > 99 && (a = "99+"), t.setData({
                        unReadNum: a,
                        userInfo: o
                    });
                }
            }), wx.onSocketMessage(function(o) {
                if (void 0 === JSON.parse(o.data).type) {
                    var s = e.globalData.url_host;
                    wx.request({
                        url: s + "/wxim/messageunread",
                        method: "POST",
                        data: {
                            user_id: a.uid
                        },
                        success: function(e) {
                            var a = e.data.count;
                            a > 99 && (a = "99+"), t.setData({
                                unReadNum: a
                            });
                        }
                    });
                }
                console.log(JSON.parse(o.data));
            });
        }
    },
    getdata: function() {
        var t = e.globalData.url_host, a = this, o = wx.getStorageSync("userInfo"), s = wx.getStorageSync("loginStatus");
        console.log("用户信息-", o);
        var i;
        i = "1" == s ? o.token : "", console.log("传用户信息-", i), wx.request({
            url: t + "/appapi/newindex/" + a.data.cityid + "/v1/weixinindex",
            method: "POST",
            data: {},
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                token: i
            },
            success: function(t) {
                console.log("recommendList", t.data.data);
                var e = t.data.data.saleAndRentRecommendHouses.result.saleRecommendHouses, o = t.data.data.saleAndRentRecommendHouses.result.rentRecommendHouses, s = t.data.data.helpYouPick, i = t.data.data.helpYouRent, n = t.data.data.commuitytest, c = t.data.data.hotrecommend, r = t.data.data.houseknowledge;
                r || (r = null), c || (c = null), n || (n = null), s || (s = null), i || (i = null), 
                a.setData({
                    helpYouPick: s,
                    helpYouRent: i,
                    communitytest: n,
                    hotrecommend: c,
                    houseknowledge: r,
                    list2: o,
                    list: e,
                    loadinghide: "true"
                });
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {}
        }), wx.request({
            url: "https://appapi.5i5j.com/home/" + a.data.cityid + "/info",
            data: {
                cityid: a.data.cityid
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data.data);
                var e = t.data.data;
                0 == e.bannerInfo.length && 0 == e.dynamic.length && 0 == e.guide.length && 0 == e.hotEstate.length ? (console.log("此城市没有新房频道"), 
                a.setData({
                    newhouse: !1
                })) : (console.log("此城市有新房频道"), a.setData({
                    newhouse: !0
                }));
            }
        });
    },
    routerview: function(t) {
        var e = t.currentTarget.dataset.path, a = "", s = this.data.cityid || 1;
        if (console.log(e), "search" == e) a = "./search/search?cityId=" + s + "&searchParam=1&searchInp=&listParam=1"; else if ("sale" == e) a = "./sale/sale?cityId=" + s + "&listParam=1"; else if ("rent" == e) a = "./sale/sale?cityId=" + s + "&listParam=2"; else if ("newhouse" == e) console.log("dadsaasdadadas", this.data.newhouse), 
        this.data.newhouse ? a = "./newhouse/index?cityId=" + s + "&cityname=" + this.data.cityname : wx.showToast({
            title: "功能暂未开通，敬请期待",
            icon: "none"
        }); else if ("community" == e) a = "./community/community?cityId=" + s; else if ("broker" == e) a = "./brokerList/brokerList?cityId=" + s; else if ("broker_tj" == e) wx.showToast({
            title: "功能暂未开通，敬请期待",
            icon: "none"
        }); else if ("sellhouse" == e) wx.getStorageSync("loginStatus") ? (o("track", "commissionsuccess", {
            commissiontype_var: "卖房"
        }), a = "./sellHouse/sellHouse?cityId=" + s) : a = "./login/login?ret_type=4&cityId=" + s; else if ("rentout" == e) wx.getStorageSync("loginStatus") ? (o("track", "commissionsuccess", {
            commissiontype_var: "出租"
        }), a = "./rentOut/rentOut?cityId=" + s) : a = "./login/login?ret_type=5&cityId=" + s; else if ("webview" == e) {
            r = JSON.stringify(t.currentTarget.dataset.targeturl);
            console.log(r), a = "./webview/webview?url=" + (r = encodeURIComponent(r));
        } else if ("pickorrent" == e) {
            var i = t.currentTarget.dataset.choicetype, n = t.currentTarget.dataset.listparam;
            if (2 == i) console.log("跳转到房源列表页"), a = "./sale/sale?cityId=" + s + "&listParam=" + n + "&condition=" + (c = JSON.stringify(t.currentTarget.dataset.condition)); else {
                console.log("挑战到相应详情页", r);
                r = JSON.stringify(t.currentTarget.dataset.targeturl);
                a = "./webview/webview?url=" + (r = encodeURIComponent(r));
            }
        } else if ("detail" == e) a = "./sale_detail/sale_detail?houseId=" + t.currentTarget.dataset.houseid + "&cityId=" + s; else if ("city" == e) a = "./choosecity/choosecity?from=index"; else if ("hotrecommend" == e) {
            var i = t.currentTarget.dataset.choicetype, n = t.currentTarget.dataset.topictype;
            if (console.log(i, n), 2 == i) {
                var c = JSON.stringify(t.currentTarget.dataset.condition);
                a = "./sale/sale?cityId=" + s + "&listParam=" + n + "&condition=" + c;
            } else {
                var r = JSON.stringify(t.currentTarget.dataset.targeturl);
                a = "./webview/webview?url=" + (r = encodeURIComponent(r));
            }
        }
        wx.navigateTo({
            url: a
        });
    },
    tabbarrouterview: function(t) {
        var e = t.currentTarget.dataset.path, a = "", o = this.data.cityid || 1;
        "toMessage" == e ? a = "./message/message?cityId=" + o : "toUser" == e && (a = "user/user?cityId=" + o), 
        wx.redirectTo({
            url: a
        });
    },
    shifou: function() {
        var t = this, a = wx.getStorageSync("loginStatus"), o = e.globalData.url_host, s = wx.getStorageSync("userInfo");
        if ("1" == a) i = s.token; else var i = "";
        wx.request({
            url: o + "/event/activeactivitynq?city_id=" + t.data.cityid,
            method: "GET",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                token: i
            },
            success: function(e) {
                console.log("查看是否领取-------", e), t.setData({
                    returnData: e.data.data.lq
                }), e.data.data.activities ? (console.log("查看是有数据-------", e.data.data.activities.length), 
                t.setData({
                    returnData: e.data.data.lq,
                    kajuanLength: e.data.data.activities
                })) : (console.log("没有数据"), t.setData({
                    kajuanLength: "undefined"
                }));
            }
        });
    },
    sqHuodong: function() {
        var t = this, e = this.data.cityid;
        1 == t.data.returnData ? (console.log("跳转领取"), wx.navigateTo({
            url: "siqing/lingqu?cityId=" + e + "&lingqule=false"
        })) : (console.log("跳转未领取"), wx.navigateTo({
            url: "siqing/siqing?cityId=" + e + "&returnData=" + t.data.returnData
        }));
    },
    indexPop: function(t) {
        var a = this;
        console.log("取值--------------------------------", t);
        var o = wx.getStorageSync("loginStatus"), s = wx.getStorageSync("userInfo"), i = e.globalData.url_host, n = this.data.cityid;
        wx.request({
            url: i + "/event/v1/homenq",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                deviceId: s.uid
            },
            data: {
                cityid: n,
                userid: s.uid
            },
            success: function(e) {
                console.log("调用接口了-------", e), console.log("调用接口了2-------", e.data.msg), 204 == e.data.status ? (console.log("res.data.data.msg---", e.data.status), 
                a.setData({
                    xiaohb: !0
                })) : a.setData({
                    xiaohb: !1
                }), null != e.data.data && (1 == o ? (1 == e.data.data.list[0].is_pop ? (console.log("显示首页弹窗"), 
                a.setData({
                    indexPop: e.data.data.list,
                    siqing: !1
                })) : (console.log("隐藏首页弹窗"), a.setData({
                    siqing: !0
                })), a.setData({
                    xiaohb: !1
                })) : (console.log("未登录显示首页弹窗"), (100 == t || a.data.iscitylistback) && a.setData({
                    indexPop: e.data.data.list,
                    siqing: !1,
                    xiaohb: !0
                })));
            }
        });
    },
    sqClose: function() {
        this.setData({
            siqing: !0
        });
    },
    housetabCur: function(t) {
        var e = this;
        if (console.log("点击当前--", t.target.dataset.current), console.log("--", e.data.currentTab), 
        e.data.currentTab === t.target.dataset.current) return !1;
        e.setData({
            currentTab: t.target.dataset.current
        });
    },
    toDetail: function(t) {
        var e = this, a = parseInt(t.currentTarget.dataset.index), o = e.data.list[a].housesid;
        console.log("二手房房源id---", o), wx.navigateTo({
            url: "sale_detail/sale_detail?houseId=" + o + "&cityId=" + e.data.list[a].cityid
        });
    },
    toDetail2: function(t) {
        var e = this, a = parseInt(t.currentTarget.dataset.index), o = e.data.list2[a].housesid;
        console.log("租房房源id---", o), wx.navigateTo({
            url: "zufang_detail/zufang_detail?houseId=" + o + "&cityId=" + e.data.list2[a].cityid
        });
    },
    onReady: function() {},
    onShow: function() {
        this.shifou(), this.indexPop();
    },
    onHide: function() {
        this.setData({
            iscitylistback: !1
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});