(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/interest/interest" ], {
    "17d1": function(t, e, o) {
        var a = o("6e70");
        o.n(a).a;
    },
    "1d23": function(t, e, o) {
        o.r(e);
        var a = o("4bb6"), n = o("dceb");
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        o("17d1");
        var s = o("f0c5"), r = Object(s.a)(n.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "4bb6": function(t, e, o) {
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, n = [];
        o.d(e, "b", function() {
            return a;
        }), o.d(e, "c", function() {
            return n;
        }), o.d(e, "a", function() {});
    },
    "6e70": function(t, e, o) {},
    b125: function(t, e, o) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("e027"), e(o("66fd")), t(e(o("1d23")).default);
        }).call(this, o("543d").createPage);
    },
    d44c: function(t, e, o) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(o("5f18")), i = a(o("733e")), s = getApp();
            s.sensors || (s.sensors = s.globalData.sensors);
            var r = {
                data: function() {
                    return {
                        no_room: 0,
                        roomList: [],
                        total: 0,
                        feature: {},
                        pageNum: 1,
                        tj_title: "",
                        recommend_title: "",
                        isLastPage: !1,
                        tabcolor: 2,
                        edit_status: !1,
                        selectIndex: [],
                        selectNum: 0,
                        user_id: t.getStorageSync("userId"),
                        navigateUrl: [],
                        isIphoneX: "",
                        menuTapCurrent: 0,
                        pageNum_tab2: 1,
                        footList_list: [],
                        footlist_all: [],
                        offset_footlist: "",
                        footlist_total: "",
                        footlist_current_page: 0,
                        footlist_onoff: !0,
                        toIndex_once: 0,
                        onoff_show: !1
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: "来小程序找房，优惠多多",
                        path: "pages/index/index"
                    };
                },
                onLoad: function(e) {
                    console.log("onLoad");
                    var o = this;
                    o.user_id = t.getStorageSync("userId"), o.toIndex_once = t.getStorageSync("toIndex_once"), 
                    o.options = JSON.parse(JSON.stringify(e)), o.rent_type = "";
                },
                onShow: function() {
                    console.log("onShow");
                    var e = this;
                    e.user_id = t.getStorageSync("userId"), console.log(e.user_id), e.clearFootList(), 
                    e.footList(), e.getRoomList(), t.getStorageSync("interestReload") && t.setStorage({
                        key: "interestReload",
                        data: 0
                    });
                },
                onReachBottom: function() {
                    "0" == this.menuTapCurrent || this.scrollLoadingTab2();
                },
                components: {},
                props: {},
                methods: {
                    getRoomList: function() {
                        var e = this;
                        (0, i.default)(n.default.url_room + "/v1/collect/roomList", {
                            city_id: t.getStorageSync("cityStorageNum"),
                            app_id: "wx024695259e1a68cb",
                            user_id: t.getStorageSync("userId"),
                            page: e.pageNum,
                            page_num: 999
                        }, "GET", !0, "").then(function(t) {
                            var o = t.data.data, a = t.data.data.data.length;
                            0 == a ? (e.no_room = 1, e.onoff_show = !1) : e.onoff_show = !0;
                            for (var n = a, i = [], s = 0; s < n; s++) i.push({
                                sureid: !1,
                                id: o.data[s].id
                            });
                            e.selectIndex = i, e.total = n;
                            var r = [], c = [];
                            for (s = 0; s < o.data.length; s++) r.push(o.data[s]), "可出租" == o.data[s].status ? (r[s].navigateUrl = "../detail/detail?id=" + o.data[s].id + "&rent_type=" + o.data[s].rent_type + "&interst = true&from_app=", 
                            c.push("../detail/detail?id=" + o.data[s].id + "&rent_type=" + o.data[s].rent_type + "&interst = true&from_app=")) : (r[s].navigateUrl = "", 
                            c.push(""));
                            e.roomList = r, e.navigateUrl = c;
                        }).catch(function(t) {
                            console.log(t), e.onoff_show = !1;
                        });
                    },
                    default: function() {},
                    clearRoomList: function() {
                        this.roomList = [];
                    },
                    editEvt: function() {
                        this.edit_status = !0;
                    },
                    cancelEdit: function() {
                        for (var t = this.selectIndex, e = 0; e < t.length; e++) t[e].sureid = !1;
                        this.edit_status = !1, this.selectNum = 0, this.selectIndex = t;
                    },
                    checkAllEvt: function() {
                        for (var t = this.selectIndex, e = t.length, o = this.selectNum, a = 0; a < e; a++) t[a].sureid = o != e;
                        this.selectNum = o == e ? 0 : e, this.selectIndex = t;
                    },
                    checkEvt: function(t) {
                        var e = this, o = t.currentTarget.dataset.index, a = 0, n = e.selectIndex;
                        n[o].sureid = !n[o].sureid, this.selectIndex = n;
                        for (var i = 0; i < e.total; i++) n[i].sureid && a++;
                        this.selectNum = a;
                    },
                    deleteEvt: function(e) {
                        for (var o = this, a = "", r = o.selectIndex, c = [], d = 0, u = o.total; d < u; d++) r[d].sureid && (a += r[d].id + ",", 
                        c.push(d));
                        0 != a.length && (s.sensors.track("Xcx_interest_click", {
                            Xcx_delete_room: a.slice(0, a.length - 1)
                        }), (0, i.default)(n.default.url_room + "/v1/collect/cancelRoom", {
                            city_id: t.getStorageSync("cityStorageNum"),
                            app_id: "wx024695259e1a68cb",
                            user_id: t.getStorageSync("userId"),
                            room_ids: a.slice(0, a.length - 1)
                        }, "GET", !0, "").then(function(e) {
                            e.data.data.success && (t.showToast({
                                title: "已删除"
                            }), o.edit_status = !1, o.selectNum = 0, o.clearRoomList(), o.getRoomList());
                        }));
                    },
                    scrollLoadingTab2: function() {
                        if (Math.ceil(this.footlist_total / 10) > this.footlist_current_page) {
                            var e = this.pageNum_tab2 + 1;
                            this.pageNum_tab2 = e, this.footList();
                        } else t.showToast({
                            title: "已经没有浏览足迹了",
                            icon: "none",
                            duration: 2e3
                        });
                    },
                    toLogin: function() {
                        var e = getCurrentPages()[getCurrentPages().length - 1].route;
                        t.navigateTo({
                            url: "../login/login?callback=" + e
                        });
                    },
                    interest_room: function(t) {
                        if (!this.edit_status) {
                            var e = t.currentTarget.dataset.index, o = this.roomList[e].name;
                            o && s.sensors.track("Xcx_interest_click", {
                                Xcx_click_interest_room: o
                            });
                        }
                    },
                    menuTap: function(t) {
                        var e = t.currentTarget.dataset.current;
                        this.menuTapCurrent = e;
                    },
                    clearFootList: function() {
                        this.pageNum_tab2 = 1, this.footlist_all = [];
                    },
                    footList: function() {
                        var e = this;
                        (0, i.default)(n.default.url_room + "/v1/user/footList", {
                            page: e.pageNum_tab2 = 1,
                            per_page: "10",
                            offset: e.offset_footlist,
                            user_id: t.getStorageSync("userId"),
                            app_id: "wx024695259e1a68cb",
                            city_id: t.getStorageSync("cityStorageNum")
                        }, "GET", !0, "").then(function(o) {
                            if ("0000" == o.data.code) if (t.hideLoading(), 0 == o.data.data.length) e.no_room = 1, 
                            e.footlist_onoff = !0; else if (e.footList_list = [], 0 == o.data.data.data.list.length) e.footlist_onoff = !0; else {
                                for (var a = 0; a < o.data.data.data.list.length; a++) e.footlist_all.push(o.data.data.data.list[a]);
                                e.footlist_onoff = !1, e.footList_list = e.footlist_all, e.offset_footlist = o.data.data.offset, 
                                e.footlist_total = o.data.data.total, e.footlist_current_page = o.data.data.current_page;
                            } else t.showToast({
                                title: o.data.msg,
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    online: function(e) {
                        var o = this, a = o.getNowTime();
                        t.showLoading({
                            title: "提交中",
                            mask: !0
                        }), t.request({
                            url: s.data.url + "/web-api/wechat-applets/passenger",
                            method: "POST",
                            header: {
                                "content-type": "application/json"
                            },
                            data: {
                                user_id: o.user_id,
                                city_id: "",
                                mobile: t.getStorageSync("userMobile"),
                                daikan_date: a,
                                name: t.getStorageSync("userNickname"),
                                city: t.getStorageSync("cityStorageName"),
                                room_id: e.currentTarget.dataset.roomid,
                                app_id: "wx024695259e1a68cb",
                                price: e.currentTarget.dataset.price,
                                sign: obj_token,
                                source: "微信小程序"
                            },
                            success: function(e) {
                                t.hideLoading(), e.data.success ? t.navigateTo({
                                    url: "../yuyue/yuyue?yySuccess=1"
                                }) : t.showToast({
                                    title: e.data.msg,
                                    icon: "none",
                                    duration: 2e3
                                });
                            },
                            fail: function(e) {
                                t.hideLoading(), console.log(e);
                            }
                        });
                    },
                    getNowTime: function() {
                        var t = new Date(), e = t.getFullYear(), o = t.getMonth() + 1, a = t.getDate();
                        return o < 10 && (o = "0" + o), a < 10 && (a = "0" + a), e + "-" + o + "-" + a;
                    },
                    toIndex: function() {
                        t.switchTab({
                            url: "../index/index"
                        }), t.setStorage({
                            key: "toIndex_once",
                            data: 1
                        }), s.sensors.track("Xcx_IndexTagbar", {
                            Xcx_bottom_Index: "Xcx底部-首页"
                        });
                    }
                },
                computed: {},
                watch: {}
            };
            e.default = r;
        }).call(this, o("543d").default);
    },
    dceb: function(t, e, o) {
        o.r(e);
        var a = o("d44c"), n = o.n(a);
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    }
}, [ [ "b125", "common/runtime", "common/vendor" ] ] ]);