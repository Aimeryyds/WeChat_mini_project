function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), o = require("../../sdk/dingxiang.js"), i = require("../../utils/gio-minp/index.js").default, n = require("../../sdk/gioConfig.js").default;

i("setConfig", n), Page({
    data: (a = {
        loading: !0,
        cityId: 1,
        page_num: 1,
        totalpage: 0,
        listLock: 1,
        brokerlist_data: [],
        hidden: !0,
        tabTxt: [],
        tab: [ !0, !0, !0 ],
        filterMask: !0,
        search: !1,
        quYuBar2: 0,
        quYuBar3: 0,
        quYuBxBar2: "",
        quYuBxBar3: "",
        loadbarid: 0,
        quyuNav2: !1,
        quyuNav3: !0,
        filterArea: [],
        filterArea2: [],
        subCur: 0,
        tagData: [],
        total_page: 0
    }, t(a, "page_num", 1), t(a, "listLock", 1), t(a, "listHidden", !1), t(a, "houseNo", !0), 
    t(a, "showAllData", !0), t(a, "speed", 0), t(a, "accuracy", 0), t(a, "searchCon", "请输入经纪人姓名、电话或商圈、店面"), 
    t(a, "postParam", {}), t(a, "countLock", 1), t(a, "loadingCount", !0), a),
    onLoad: function(t) {
        var a = this;
        new o({
            appId: e.globalData.dxAppId
        }, function(e, o) {
            e ? console.log(e) : (a.setData({
                dxDeviceId: o
            }), 1 == t.btype ? wx.setNavigationBarTitle({
                title: "买卖经纪人"
            }) : wx.setNavigationBarTitle({
                title: "租赁经纪人"
            }), a.setData({
                cityId: t.cityid,
                communityid: t.communityid,
                btype: t.btype
            }), a.getData());
        });
    },
    getData: function() {
        var t = this, a = e.globalData.url_host, o = {
            page: t.data.page_num,
            pcount: 15,
            communityid: t.data.communityid,
            btype: t.data.btype
        };
        wx.request({
            url: a + "/community/" + t.data.cityId + "/v1/brokerlist",
            data: o,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            success: function(a) {
                if (200 == a.data.status) {
                    console.log("data : ", a.data);
                    for (var e = [], o = 0; o < a.data.data.list.length; o++) {
                        var i = a.data.data.list[o].dkscore.toFixed(1);
                        e.push(i);
                    }
                    if (0 == a.data.data.count) console.log(0), t.setData({
                        height: "152rpx",
                        houseNo: !1,
                        listHidden: !0
                    }); else if (a.data.data.count < 15) console.log(a.data.data.count, "小于", 15), t.data.listLock = 2, 
                    t.setData({
                        brokerlist_data: a.data.data.list,
                        height: "152rpx",
                        dkscoreArr: e,
                        listHidden: !1,
                        houseNo: !1,
                        loading: !1
                    }); else if (t.data.listLock = 1, t.data.totalpage = Math.ceil(a.data.data.count / 15), 
                    t.data.totalpage >= t.data.page_num) {
                        var n = t.data.brokerlist_data.concat(a.data.data.list);
                        t.setData({
                            brokerlist_data: n,
                            height: "152rpx",
                            dkscoreArr: e,
                            houseNo: !0,
                            loading: !1
                        }), wx.hideLoading(), t.data.page_num += 1;
                    }
                    1 == t.data.countLock && 0 == t.data.loading && (t.setData({
                        countNum: a.data.data.count,
                        loadingCount: !1
                    }), setTimeout(function() {
                        t.setData({
                            countNum: "",
                            loadingCount: !0
                        });
                    }, 2e3));
                } else t.data.listLock = 2, console.log("msg:", a.data.msg), t.setData({
                    loading: !1,
                    listHidden: !0,
                    houseNo: !1
                });
            },
            fail: function(t) {
                console.log("error", t);
            },
            complete: function(t) {
                wx.hideLoading();
            }
        });
    },
    brokerDeatil: function(t) {
        var a = this, e = t.currentTarget.dataset.brokerid;
        t.currentTarget.dataset.citycode;
        console.log(a.data.cityId), wx.navigateTo({
            url: "../broker_detail/brokerDetail?brokerId=" + e + "&cityId=" + a.data.cityId + "&citycode="
        });
    },
    tel: function(t) {
        var a = this, o = t.currentTarget.id, n = (a.data.btype, a.data.cityId, t.currentTarget.dataset.bid), d = t.currentTarget.dataset.index + 1;
        console.log("*************************************************************************************", d), 
        i("track", "telconsult", {
            iconlocation_var: d,
            agentid_var: n,
            telnum_var: o
        });
        var o = t.currentTarget.id, l = e.tdsdk;
        console.log("sdk", l), l.appEvent.eventId({
            eventLabel: 1
        }), l.appEvent.eventId({
            eventLabel: 2
        }), l.appEvent.eventId({
            eventLabel: 7
        });
        var r = e.globalData.url_host;
        wx.request({
            url: r + "/wxim/wxcallback",
            header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                deviceSource: 3,
                dxdeviceId: this.data.dxDeviceId
            },
            data: {
                click_id: e.globalData.click_id,
                action_type: "RESERVATION",
                value: 40,
                user_action_set_id: 1110064786
            },
            method: "post",
            success: function(t) {
                console.log("成功666:", t);
            }
        });
        var c = t.currentTarget.dataset.jobleave;
        1 == c && wx.makePhoneCall({
            phoneNumber: o,
            success: function() {
                console.log("拨打成功", o);
            },
            fail: function() {
                console.log("拨打失败", o);
            }
        }), 0 == c && wx.showToast({
            title: "该经纪人已离职，请联系其他经纪人",
            icon: "none"
        });
    },
    loadMore: function() {
        var t = this;
        if (console.log("totalpage", t.data.totalpage), console.log("page_num", t.data.page_num), 
        t.data.countLock = 2, t.data.totalpage < t.data.page_num && (console.log("没有新数据"), 
        t.setData({
            showAllData: !1,
            loading: !1
        }), t.data.listLock = 2), 2 == t.data.listLock) return !1;
        wx.showLoading({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), t.getData(t.data.orderPram);
    },
    avatarError: function(t) {
        var a = this, e = {};
        e["brokerlist_data[" + Number(t.target.dataset.imgindex) + "].brokerimg"] = "/img/resources/default_broker_404.png", 
        console.log("error", e), a.setData(e);
    },
    toIm: function(t) {
        var a = this, o = wx.getStorageSync("loginStatus"), n = t.currentTarget.dataset.bid, d = e.globalData.url_host, l = a.data.cityId;
        a.data.btype;
        if (i("track", "onlineconsult", {
            iconlocation_var: l,
            agentid_var: n
        }), 1 == o) {
            var r = t.currentTarget.dataset.leave, c = e.tdsdk;
            console.log("sdk", c), c.appEvent.eventId({
                eventLabel: 1
            }), c.appEvent.eventId({
                eventLabel: 3
            }), c.appEvent.eventId({
                eventLabel: 10
            }), wx.request({
                url: d + "/wxim/wxcallback",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    deviceSource: 3,
                    dxdeviceId: this.data.dxDeviceId
                },
                data: {
                    click_id: e.globalData.click_id,
                    action_type: "RESERVATION",
                    value: 40,
                    user_action_set_id: 1110064786
                },
                method: "post",
                success: function(t) {
                    console.log("成功666:", t);
                }
            }), void 0 === r || 1 == r ? (wx.requestSubscribeMessage({
                tmplIds: e.globalData.tmplids,
                success: function(t) {
                    console.log(t);
                }
            }), wx.navigateTo({
                url: "../im/im?bid=" + n
            })) : wx.showToast({
                title: "该经纪人已离职，请联系其他经纪人！",
                icon: "none"
            });
        } else {
            wx.navigateTo({
                url: "../login/login?url=im/im&bid=" + n + "&ret_type=1&maidian=1&jjrMain=1"
            });
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});