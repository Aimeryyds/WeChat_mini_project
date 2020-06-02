var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, a = (require("../../wxParse/wxParse.js"), require("../../utils/server.js")), e = wx.getStorageSync("utoken"), i = {
    data: {
        bannerHeight: Math.ceil(290 / 750 * getApp().screenWidth),
        swiperArr: "",
        width: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        arr: {},
        markers: [],
        controls: [ {
            id: 0,
            iconPath: "https://tws.cnweisou.com/images/fixedPosition.png",
            position: {
                left: 175,
                top: 280,
                width: 35,
                height: 35
            },
            clickable: !0
        }, {
            id: 1,
            iconPath: "https://tws.cnweisou.com/images/mapPosition.png",
            position: {
                left: 320,
                top: 480,
                width: 35,
                height: 35
            },
            clickable: !0
        } ],
        loading: !0
    },
    controltap: function(t) {
        var a = this;
        1 == t.controlId && this.mapCtx.moveToLocation(), 0 == t.controlId && wx.openLocation({
            latitude: a.data.latitude,
            longitude: a.data.longitude,
            scale: 28
        });
    },
    onLoad: function(t) {
        console.log(t);
        var a = this;
        if (e = wx.getStorageSync("utoken"), a.mapCtx = wx.createMapContext("map"), t.mid) {
            a.setData({
                mid: t.mid
            });
            wx.setStorageSync("mid", t.mid), wx.getStorageSync("mid");
        }
        var i = "";
        t.id ? i = t.id : t.id = "", a.setData({
            options: t,
            id: i
        }), a.loadPageData(t);
    },
    onShow: function() {
        var t = this;
        console.log(t.data.id), console.log("that.data.id------------"), t.data.id || t.loadPageData(t.data.id);
    },
    onHide: function() {
        var t = this, a = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        if (a.tabBarPage) {
            var e = a.tabBarPage;
            for (var i in e) "/pages/indexpage/indexpage" == e[i] && t.setData({
                id: ""
            });
        }
        this.setData({
            loading: !1
        });
    },
    onPullDownRefresh: function() {
        wx.getStorageSync("utoken");
    },
    loadPageData: function(e) {
        var i = this;
        a.sendRequest({
            url: "?r=wxapp.indexpage.index",
            data: {
                id: i.data.id
            },
            method: "GET",
            success: function(o) {
                i.setData({
                    data: o.data,
                    loading: !1
                });
                var s;
                o.data.data.page && (o.data.data.page.is_pinpoint && (s = o.data.data.page.is_pinpoint), 
                wx.setNavigationBarTitle({
                    title: o.data.data.page.name
                }), console.log(t(o.data.data.page.background)), wx.setNavigationBarColor({
                    frontColor: "#000000",
                    backgroundColor: o.data.data.page.backgroundcolor,
                    animation: {
                        duration: 400,
                        timingFunc: "easeIn"
                    }
                }));
                try {
                    if (o.data.data.items) var n = o.data.data.items;
                } catch (t) {}
                for (var d in o.data.data.items) switch (o.data.data.items[d].id) {
                  case "merchgroup":
                    "1" == o.data.data.items[d].params.openlocation && (e.lng ? (i.setData({
                        listLat: e.lat,
                        listLng: e.lng
                    }), a.sendRequest({
                        url: "?r=wxapp.shop.list&lat=" + e.lat + "&lng=" + e.lng + "&site=0",
                        showToast: !1,
                        data: {
                            is_pinpoint: s
                        },
                        method: "GET",
                        success: function(t) {
                            if (t.data.result && i.setData({
                                store: t.data.result,
                                store_num: t.data.result.list.length
                            }), n) for (var a in n) if ("search" == n[a].id) {
                                var o = n[a];
                                o.item = {
                                    address: e.city,
                                    lat: e.lat,
                                    lng: e.lng
                                }, i.setData({
                                    search: o
                                });
                            }
                        }
                    })) : wx.getLocation({
                        type: "wgs84",
                        success: function(t) {
                            var e = t.latitude, o = t.longitude;
                            i.setData({
                                listLat: e,
                                listLng: o
                            }), a.sendRequest({
                                url: "?r=wxapp.shop.list&lat=" + t.latitude + "&lng=" + t.longitude + "&site=0",
                                showToast: !1,
                                data: {
                                    is_pinpoint: s
                                },
                                method: "GET",
                                success: function(t) {
                                    if (t.data.result && i.setData({
                                        store: t.data.result,
                                        store_num: t.data.result.list.length,
                                        address: t.data.result.city
                                    }), n) for (var a in n) if ("search" == n[a].id) {
                                        var s = n[a];
                                        s.item = {
                                            address: i.data.address,
                                            lat: e,
                                            lng: o
                                        }, i.setData({
                                            search: s
                                        });
                                        var d = i.data.search.item.address.split("");
                                        if (d.length >= 6) {
                                            var r = [];
                                            for (var l in d) l < 6 && r.push(d[l]);
                                            r = r.join(""), i.setData({
                                                address: r
                                            });
                                        } else i.setData({
                                            address: i.data.address
                                        });
                                    }
                                }
                            });
                        }
                    }));
                    break;

                  case "search":
                    i.setData({
                        paddingleft: o.data.data.items[d].style.paddingleft
                    }), console.log(i.data.paddingleft), wx.getSystemInfo({
                        success: function(t) {
                            i.setData({
                                windowWidthS: 2 * t.windowWidth - 10 * i.data.paddingleft
                            }), console.log(i.data.windowWidthS);
                        }
                    });
                    break;

                  case "map":
                    var r = [ {
                        iconPath: "https://tws.cnweisou.com/images/hotelPosition.png",
                        id: 0,
                        latitude: o.data.data.items[d].style.latitude,
                        longitude: o.data.data.items[d].style.longitude,
                        width: 30,
                        height: 30,
                        callout: {
                            content: "我在这里喔",
                            color: "#fff",
                            display: "BYCLICK",
                            bgColor: "#FC6969",
                            padding: 20,
                            borderRadius: 5
                        }
                    } ];
                    i.setData({
                        markers: r,
                        latitude: parseFloat(o.data.data.items[d].style.latitude),
                        longitude: parseFloat(o.data.data.items[d].style.longitude)
                    });
                }
            }
        });
    },
    storebtn: function(t) {
        wx.navigateTo({
            url: "../goods/shop/shop?id=" + t.currentTarget.id
        });
    },
    getToPage: function(t) {
        a.getToPage(t);
    },
    search: function(t) {
        wx.navigateTo({
            url: "../search/index"
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
            title: "小程序：" + this.userinfo.name,
            path: "/pages/index/index?uid=4719784"
        };
    },
    call: function(t) {
        var a = t.currentTarget.id;
        wx.showActionSheet({
            itemList: [ "拨打电话", "取消" ],
            success: function(t) {
                0 == t.tapIndex && wx.makePhoneCall({
                    phoneNumber: a
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    formSubmit: function(t) {
        wx.navigateTo({
            url: "../goods/list/list?keywords=" + t.detail.value
        });
    },
    formSubmitX: function(t) {
        if (e) {
            var i = t.detail.value;
            for (var o in i) if (this.data.arr[o] = i[o], "" == i[o]) return void wx.showModal({
                title: "提示",
                showCancel: !1,
                content: o + "不能为空",
                success: function(t) {
                    t.confirm && console.log("用户点击确定");
                }
            });
            a.sendRequest({
                url: "?r=wxapp.indexpage.post",
                method: "POST",
                data: {
                    wxpage_id: this.data.id,
                    arr: this.data.arr,
                    utoken: e
                },
                success: function(t) {
                    wx.showModal({
                        title: "消息",
                        content: "预约成功",
                        showCancel: !1
                    });
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "请删除小程序，允许授权才能提交",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        });
    }
};

Page(i);