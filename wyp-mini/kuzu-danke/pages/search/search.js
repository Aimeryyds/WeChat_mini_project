(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/search" ], {
    "058c": function(t, a, e) {
        e.r(a);
        var r = e("f05c"), c = e.n(r);
        for (var n in r) "default" !== n && function(t) {
            e.d(a, t, function() {
                return r[t];
            });
        }(n);
        a.default = c.a;
    },
    2356: function(t, a, e) {},
    "3c37": function(t, a, e) {
        var r = e("2356");
        e.n(r).a;
    },
    9293: function(t, a, e) {
        var r = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, c = [];
        e.d(a, "b", function() {
            return r;
        }), e.d(a, "c", function() {
            return c;
        }), e.d(a, "a", function() {});
    },
    c4be: function(t, a, e) {
        e.r(a);
        var r = e("9293"), c = e("058c");
        for (var n in c) "default" !== n && function(t) {
            e.d(a, t, function() {
                return c[t];
            });
        }(n);
        e("3c37");
        var o = e("f0c5"), i = Object(o.a)(c.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        a.default = i.exports;
    },
    f05c: function(t, a, e) {
        (function(t) {
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var c = r(e("5f18")), n = r(e("733e")), o = getApp();
            o.sensors || (o.sensors = o.globalData.sensors);
            var i = {
                data: function() {
                    return {
                        navbar: [ "合租", "整租", "业主加盟" ],
                        currentTab: 0,
                        id: 0,
                        tagName: [],
                        catalogSelect: 0,
                        hotWord: [],
                        hot_word_list: [],
                        confirm: [],
                        search_text: "",
                        hotCityName: "",
                        latlng: "",
                        subway_img: "",
                        subway_list: "",
                        community_img: "",
                        community_list: "",
                        officebuilding_img: "",
                        officebuilding_list: "",
                        search_more: !1,
                        userName: "",
                        sugArr: [],
                        search_history: !1,
                        around_hot: !1
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: "租得省心,住得舒心",
                        imageUrl: "../../images/share_img.png",
                        path: "pages/search/search"
                    };
                },
                onLoad: function(a) {
                    var e = this;
                    o.globalData.longitude && o.globalData.latitude && (e.latlng = o.globalData.latitude + "_" + o.globalData.longitude, 
                    e.hotWordAroundGps()), e.hot_word(), t.getStorage({
                        key: "historySearch",
                        success: function(t) {
                            console.log(t), "" == !t.data || "null" == !t.data ? (e.tagName = t.data, e.search_history = !0) : (e.tagName = [], 
                            e.search_history = !1);
                        }
                    });
                },
                components: {},
                props: {},
                methods: {
                    listPage1: function(a) {
                        var e = this;
                        e.catalogSelect = a.currentTarget.dataset.select, e.searchHistory(a.currentTarget.dataset.select), 
                        t.reLaunch({
                            url: "../index/index?pagetype=index&search_text=" + e.catalogSelect
                        }), o.sensors.track("Xcx_search", {
                            Xcx_hotword: e.catalogSelect
                        });
                    },
                    listPage2: function(a) {
                        var e = this;
                        e.catalogSelect = a.currentTarget.dataset.select, e.searchHistory(a.currentTarget.dataset.select), 
                        t.reLaunch({
                            url: "../index/index?pagetype=index&search_text=" + e.catalogSelect
                        }), o.sensors.track("Xcx_search", {
                            Xcx_history: e.catalogSelect
                        });
                    },
                    listPage3: function(a) {
                        var e = this;
                        e.catalogSelect = a.currentTarget.dataset.select, e.searchHistory(a.currentTarget.dataset.select), 
                        t.reLaunch({
                            url: "../index/index?pagetype=index&search_text=" + e.catalogSelect
                        }), o.sensors.track("Xcx_search", {
                            Xcx_hotWordAroundGps: e.catalogSelect
                        });
                    },
                    hotWordAroundGps: function() {
                        var a = this;
                        t.getStorageSync("cityStorageName") == t.getStorageSync("original_cityName") ? (a.around_hot = !0, 
                        (0, n.default)(c.default.url_room + "/v1/room/hotWordAroundGps", {
                            latlng: a.latlng,
                            app_id: "wx024695259e1a68cb",
                            city_id: t.getStorageSync("cityStorageNum")
                        }, "GET", !1, "").then(function(t) {
                            a.subway_img = t.data.data[0].picurl, a.subway_list = t.data.data[0].list, a.community_img = t.data.data[1].picurl, 
                            a.community_list = t.data.data[1].list, a.officebuilding_img = t.data.data[2].picurl, 
                            a.officebuilding_list = t.data.data[2].list;
                        })) : a.around_hot = !1;
                    },
                    hot_word: function() {
                        var a = this;
                        (0, n.default)(c.default.url + "/web-api/wechat-applets/hot-search-words", {
                            app_id: "wx024695259e1a68cb",
                            city_id: "",
                            city_name: t.getStorageSync("cityStorageName")
                        }, "GET", !1, {
                            app_id: "wx024695259e1a68cb",
                            city_id: ""
                        }).then(function(t) {
                            for (var e = t.data.length, r = 0; r < e; r++) a.hotWord.push(t.data[r]);
                        });
                    },
                    inp_confirm: function(a) {
                        if (this.search_text = a.detail.value, t.reLaunch({
                            url: "../index/index?pagetype=index&search_text=" + this.search_text
                        }), "" == a.detail.value) return !1;
                        this.searchHistory(a.detail.value);
                    },
                    goBack: function() {
                        t.navigateBack();
                    },
                    searchHistory: function(a) {
                        var e = this.tagName;
                        e.unshift({
                            catalogName: a,
                            select: a
                        });
                        for (var r = 0; r < e.length; r++) 0 != r && e[r].catalogName == a && e.splice(r, 1);
                        e.length > 10 && e.pop(1), this.tagName = this.tagName, t.setStorage({
                            key: "historySearch",
                            data: this.tagName
                        });
                    },
                    userNameInput: function(a) {
                        var e = this;
                        "" == a.detail.value ? e.search_more = !1 : (e.search_more = !0, (0, n.default)(c.default.url_room + "/v1/room/sugText", {
                            city_id: t.getStorageSync("cityStorageNum"),
                            app_id: "wx024695259e1a68cb",
                            q: a.detail.value
                        }, "GET", !1, "").then(function(t) {
                            var a = [];
                            if (0 != t.data.data.data.length) for (var r = 0; r < t.data.data.data.length; r++) a.push(t.data.data.data[r]);
                            e.sugArr = a;
                        }));
                    },
                    sug_click: function(a) {
                        var e = this;
                        t.reLaunch({
                            url: "../index/index?pagetype=index&search_text=" + a.currentTarget.dataset.sugword
                        }), e.searchHistory(a.currentTarget.dataset.sugword);
                    }
                },
                computed: {},
                watch: {}
            };
            a.default = i;
        }).call(this, e("543d").default);
    },
    fdf5: function(t, a, e) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e027"), a(e("66fd")), t(a(e("c4be")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "fdf5", "common/runtime", "common/vendor" ] ] ]);