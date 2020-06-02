var a = getApp(), t = require("../../utils/scrollx.js");

Page({
    data: function(a, t, e) {
        return t in a ? Object.defineProperty(a, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[t] = e, a;
    }({
        icon: [ "上风上水", "金奖", "风水宝地", "财源滚滚" ],
        arr: [ "a_color", "b_color", "c_color", "d_color" ],
        building_class: "building_class",
        space_class: "",
        building_show: !1,
        space_show: !0,
        none_icon: "../../images/building_icon.png",
        none_show: !1,
        building_msg: "",
        data_msg: [],
        space_data_msg: [],
        tel_phone: "",
        collectOrbrowse: 1,
        seeWidth: 0,
        ulen: 300,
        moveCurr: 0,
        isSC: !1,
        salesList: [],
        pages: 1,
        maxPage: 1,
        subsucc: !1,
        loading: !1,
        pull: !0,
        windowHeight: 736,
        showLoading: !0,
        lfstr: "",
        kind: "",
        view_id: "",
        isloading: !1,
        leftMove: {},
        leftCurr: {},
        leftView: {}
    }, "data_msg", ""),
    buildingFn: function() {
        this.getData("data_msg", 1), this.setData({
            building_class: "building_class",
            space_class: "",
            building_show: !1,
            space_show: !0
        });
    },
    spaceFn: function() {
        this.getData("space_data_msg", 2), this.setData({
            building_class: "",
            space_class: "space_class",
            building_show: !0,
            space_show: !1
        });
    },
    onLoad: function(t) {
        this.setData({
            collectOrbrowse: t.kind,
            tel_phone: a.globalData["tel-phone"]
        });
    },
    onReady: function(a) {
        var t = this;
        wx.createSelectorQuery().exec(function(a) {
            var e = a[0].width;
            t.setData({
                seeWidth: e - 30 * e / 750
            });
        }), this.buildingFn(), 1 == this.data.collectOrbrowse ? wx.setNavigationBarTitle({
            title: "我的收藏"
        }) : wx.setNavigationBarTitle({
            title: "我的浏览"
        });
    },
    touchStart: t.touchStart,
    touchEnd: function(a) {
        t.touchEnd.call(this, a);
        var e = a.currentTarget.dataset.id, s = this;
        if (this.data.leftCurr[e] > 70) (i = this.data.leftMove)[e] = 1e3, setTimeout(function() {
            s.setData({
                leftMove: i
            });
        }, 300); else {
            var i = this.data.leftMove;
            i[e] = 0, this.setData({
                leftMove: i
            });
        }
    },
    turnScroll: function(a) {
        t.turnScroll.call(this, a);
        var e = a.currentTarget.dataset.id, s = this.data.leftCurr;
        s[e] = a.detail.scrollLeft, this.setData({
            leftCurr: s
        });
    },
    onShow: function() {
        this.getData("data_msg", 1);
    },
    upper: function() {
        var t = this, e = t.data.lfstr, s = t.data.kind, i = a.getSecret();
        if (!(t.data.pages < t.data.maxPage)) return !1;
        if (t.data.isloading) return !1;
        t.setData({
            isloading: !0
        }), wx.hideLoading(), t.data.pages++;
        var d = a.extend({
            page: t.data.pages,
            currtime: i.currtime,
            sign: i.sign,
            page_size: 10,
            uid: a.globalData.userInfo.user_id,
            type: s
        });
        1 == this.data.collectOrbrowse ? wx.request({
            url: a.globalData.haozuBase + "/api/miniapps/collect/",
            data: d,
            success: function(a) {
                if (t.setData({
                    isloading: !1
                }), wx.hideLoading(), 0 == a.data.data.length && t.setData({
                    none_show: !0
                }), "data_msg" == e) {
                    var s = n = a.data.data.list, i = [];
                    for (var d in s) s[d].building_id && (s[d].id = s[d].building_id), i.push(s[d]);
                    o = t.data.data_msg;
                    Array.prototype.push.apply(o, i), t.setData({
                        data_msg: o,
                        nohouse: !1,
                        house_show: !0,
                        subsucc: !0,
                        maxPage: Math.ceil(a.data.data.total / 10)
                    }), setTimeout(function() {
                        t.setData({
                            subsucc: !1
                        });
                    }, 2e3);
                } else {
                    var n = a.data.data.list, s = n, i = [];
                    for (var d in s) s[d].house_id && (s[d].id = s[d].house_id), i.push(s[d]);
                    var o = t.data.space_data_msg;
                    Array.prototype.push.apply(o, i), t.setData({
                        space_data_msg: o,
                        nohouse: !1,
                        house_show: !0,
                        subsucc: !0,
                        maxPage: Math.ceil(a.data.data.total / 10)
                    }), setTimeout(function() {
                        t.setData({
                            subsucc: !1
                        });
                    }, 2e3);
                }
            }
        }) : wx.request({
            url: a.globalData.haozuBase + "/api/miniapps/view/",
            data: d,
            success: function(a) {
                if (t.setData({
                    isloading: !1
                }), wx.hideLoading(), 0 == a.data.data.length && t.setData({
                    none_show: !0
                }), "data_msg" == e) {
                    var s = n = a.data.data.list, i = [];
                    for (var d in s) s[d].building_id && (s[d].id = s[d].building_id), i.push(s[d]);
                    o = t.data.data_msg;
                    Array.prototype.push.apply(o, i), t.setData({
                        data_msg: o,
                        house_show: !0,
                        nohouse: !1,
                        subsucc: !0,
                        maxPage: Math.ceil(a.data.data.total / 10)
                    }), setTimeout(function() {
                        t.setData({
                            subsucc: !1
                        });
                    }, 2e3);
                } else {
                    var n = a.data.data.list, s = n, i = [];
                    for (var d in s) s[d].house_id && (s[d].id = s[d].house_id), i.push(s[d]);
                    var o = t.data.space_data_msg;
                    Array.prototype.push.apply(o, i), t.setData({
                        space_data_msg: o,
                        house_show: !0,
                        nohouse: !1,
                        subsucc: !0,
                        maxPage: Math.ceil(a.data.data.total / 10)
                    }), setTimeout(function() {
                        t.setData({
                            subsucc: !1
                        });
                    }, 2e3);
                }
            }
        });
    },
    getData: function(t, e) {
        var s = a.getSecret(), i = this;
        wx.showLoading({
            mask: !0
        }), i.setData({
            none_show: !1,
            lfstr: t,
            kind: e
        }), 1 == this.data.collectOrbrowse ? (wx.request({
            url: a.globalData.haozuBase + "/api/miniapps/collect/",
            data: {
                uid: a.globalData.userInfo.user_id,
                type: e,
                currtime: s.currtime,
                sign: s.sign,
                page_size: 10
            },
            success: function(a) {
                if (wx.hideLoading(), 0 == a.data.data.length && i.setData({
                    none_show: !0
                }), "data_msg" == t) {
                    var e = n = a.data.data.list, s = [];
                    for (var d in e) e[d].building_id && (e[d].id = e[d].building_id), s.push(e[d]);
                    a.data.data && a.data.data.total;
                    i.setData({
                        data_msg: s,
                        nohouse: 0 === s.length,
                        maxPage: Math.ceil(a.data.data.total / 10)
                    });
                } else {
                    var n = a.data.data.list, e = n, s = [];
                    for (var d in e) e[d].house_id && (e[d].id = e[d].house_id), s.push(e[d]);
                    a.data.data && a.data.data.total;
                    i.setData({
                        space_data_msg: s,
                        nohouse: 0 === s.length,
                        maxPage: Math.ceil(a.data.data.total / 10)
                    });
                }
            }
        }), wx.getSystemInfo({
            success: function(a) {
                i.setData({
                    windowHeight: a.windowHeight
                });
            }
        })) : null == a.globalData.userInfo ? 1 == e ? wx.getStorage({
            key: "building",
            success: function(a) {
                i.setData({
                    data_msg: a.data,
                    space_data_msg: []
                });
            },
            fail: function(a) {
                i.setData({
                    none_show: !0
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }) : wx.getStorage({
            key: "space",
            success: function(a) {
                i.setData({
                    data_msg: [],
                    space_data_msg: a.data
                });
            },
            fail: function(a) {
                i.setData({
                    none_show: !0
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }) : (wx.request({
            url: a.globalData.haozuBase + "/api/miniapps/view/",
            data: {
                uid: a.globalData.userInfo.user_id,
                type: e,
                currtime: s.currtime,
                sign: s.sign,
                page_size: 10
            },
            success: function(a) {
                if (wx.hideLoading(), 0 == a.data.data.length && i.setData({
                    none_show: !0
                }), "data_msg" == t) {
                    var e = n = a.data.data.list, s = [];
                    for (var d in e) e[d].building_id && (e[d].id = e[d].building_id), s.push(e[d]);
                    a.data.data && a.data.data.total;
                    i.setData({
                        data_msg: s,
                        nohouse: 0 === s.length,
                        maxPage: Math.ceil(a.data.data.total / 10)
                    });
                } else {
                    var n = a.data.data.list, e = n, s = [];
                    for (var d in e) e[d].house_id && (e[d].id = e[d].house_id), s.push(e[d]);
                    a.data.data && a.data.data.total;
                    i.setData({
                        space_data_msg: s,
                        nohouse: 0 === s.length,
                        maxPage: Math.ceil(a.data.data.total / 10)
                    });
                }
            }
        }), wx.getSystemInfo({
            success: function(a) {
                i.setData({
                    windowHeight: a.windowHeight
                });
            }
        }));
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    shouchang: function(t) {
        var e = this, s = t.currentTarget.dataset.id, i = t.currentTarget.dataset.type;
        if (a.globalData.userInfo) {
            var d = a.getSecret(), n = a.globalData.userInfo || {}, o = e.data[i], u = o.filter(function(a, t) {
                return a["data_msg" == i ? "building_id" : "id"] == s;
            })[0];
            if (1 == e.data.collectOrbrowse) wx.request({
                url: a.globalData.uchaozuBase + "/api/miniapps/collect/del/",
                data: {
                    uid: n.user_id || "",
                    type: "1",
                    opt_id: t.currentTarget.dataset.id,
                    currtime: d.currtime,
                    sign: d.sign
                },
                success: function(a) {
                    a.data;
                    if (500 === a.statusCode) return !1;
                    o.splice(o.indexOf(u), 1), e.setData({
                        data_msg: o,
                        space_data_msg: o
                    });
                }
            }); else {
                if (1 == u.isCollect) return !1;
                "data_msg" == i && wx.request({
                    url: a.globalData.uchaozuBase + "/api/miniapps/collect/add/",
                    data: {
                        uid: n.user_id || "",
                        type: "1",
                        opt_id: t.currentTarget.dataset.id,
                        currtime: d.currtime,
                        sign: d.sign
                    },
                    success: function(a) {
                        a.data;
                        if (500 === a.statusCode) return !1;
                        u.isCollect = !0, e.setData({
                            data_msg: o
                        });
                    }
                }), wx.request({
                    url: a.globalData.uchaozuBase + "/api/miniapps/collect/add/",
                    data: {
                        uid: n.user_id || "",
                        type: "2",
                        opt_id: t.currentTarget.dataset.id,
                        currtime: d.currtime,
                        sign: d.sign
                    },
                    success: function(a) {
                        a.data;
                        if (500 === a.statusCode) return !1;
                        u.isCollect = !0, e.setData({
                            space_data_msg: o
                        });
                    }
                });
            }
        } else wx.navigateTo({
            url: "/pages/login/index"
        });
    },
    remove: function(t) {
        var e = this, s = t.currentTarget.dataset.id, i = t.currentTarget.dataset.type, d = a.getSecret(), n = a.globalData.userInfo || {}, o = a.extend([], e.data[i], !1, !0), u = o.filter(function(a, t) {
            return a["data_msg" == i ? "building_id" : "id"] == s;
        })[0], r = function(a) {
            for (var t = Object.keys(a), e = 0; e < t.length; e++) a[t[e]] = 0;
            return a;
        };
        1 == e.data.collectOrbrowse ? "data_msg" == i ? wx.request({
            url: a.globalData.uchaozuBase + "/api/miniapps/collect/del/",
            data: {
                uid: n.user_id || "",
                type: 1,
                opt_id: t.currentTarget.dataset.id,
                currtime: d.currtime,
                sign: d.sign
            },
            success: function(a) {
                a.data;
                if (500 === a.statusCode) return !1;
                o.splice(o.indexOf(u), 1), e.setData({
                    data_msg: o,
                    leftView: r(e.data.leftView)
                });
            }
        }) : wx.request({
            url: a.globalData.uchaozuBase + "/api/miniapps/collect/del/",
            data: {
                uid: n.user_id || "",
                type: 2,
                opt_id: t.currentTarget.dataset.id,
                currtime: d.currtime,
                sign: d.sign
            },
            success: function(a) {
                a.data;
                if (500 === a.statusCode) return !1;
                o.splice(o.indexOf(u), 1), e.setData({
                    space_data_msg: o,
                    leftView: r(e.data.leftView)
                });
            }
        }) : a.globalData.userInfo ? "data_msg" == i ? wx.request({
            url: a.globalData.uchaozuBase + "/api/miniapps/view/del/",
            data: {
                uid: n.user_id || "",
                view_type: 1,
                view_id: t.currentTarget.dataset.id,
                currtime: d.currtime,
                sign: d.sign
            },
            success: function(a) {
                a.data;
                if (500 === a.statusCode) return !1;
                o.splice(o.indexOf(u), 1), e.setData({
                    data_msg: o,
                    leftView: r(e.data.leftView)
                });
            }
        }) : wx.request({
            url: a.globalData.uchaozuBase + "/api/miniapps/view/del/",
            data: {
                uid: n.user_id || "",
                view_type: 2,
                view_id: t.currentTarget.dataset.id,
                currtime: d.currtime,
                sign: d.sign
            },
            success: function(a) {
                a.data;
                if (500 === a.statusCode) return !1;
                o.splice(o.indexOf(u), 1), e.setData({
                    space_data_msg: o,
                    leftView: r(e.data.leftView)
                });
            }
        }) : "data_msg" == i ? wx.getStorage({
            key: "building",
            success: function(a) {
                wx.getStorageSync("building");
                for (var s = t.currentTarget.dataset.id, i = 0; i < o.length; i++) o[i].building_id == s && o.splice(i, 1);
                e.setData({
                    data_msg: o
                });
                wx.getStorageSync("building");
                wx.setStorageSync("building", o), wx.getStorage({
                    key: "building",
                    success: function(a) {
                        if (500 === a.statusCode) return !1;
                        e.setData({
                            data_msg: o,
                            leftView: r(e.data.leftView)
                        });
                    }
                });
            }
        }) : wx.getStorage({
            key: "space",
            success: function(a) {
                wx.getStorageSync("space");
                for (var s = t.currentTarget.dataset.id, i = 0; i < o.length; i++) o[i].id == s && o.splice(i, 1);
                e.setData({
                    space_data_msg: o
                });
                wx.getStorageSync("space");
                wx.setStorageSync("space", o), wx.getStorage({
                    key: "space",
                    success: function(a) {
                        if (500 === a.statusCode) return !1;
                        e.setData({
                            space_data_msg: o,
                            leftView: r(e.data.leftView)
                        });
                    }
                });
            }
        });
    },
    zixun: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.tel_phone
        });
    }
});