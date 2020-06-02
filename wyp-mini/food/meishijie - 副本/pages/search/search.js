var e = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !1,
        searchPlh: "美食杰什么菜都有",
        userId: e.globalData.userId,
        userInfo: {},
        searchTips: {},
        searchicon: "../../images/searchicon.png",
        focus: !0,
        searchedWords: [],
        hideSearchedWords: !0,
        noSearchedWords: !0,
        showToast: !1,
        toastTitle: "",
        searchRequesting: !1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        hasNextPage: !0,
        scSvwShow: "",
        searchInputing: !1,
        nowords: "",
        bottomline: !1
    },
    onShareAppMessage: function(e) {
        return e.from, {
            title: "美食杰菜谱大全",
            path: "/pages/index/index",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151908_464.jpg",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    onShow: function() {
        var e = this;
        this.setData({
            focus: !0
        }), wx.getStorage({
            key: "searchedWords",
            success: function(a) {
                var s = e.trimSpace(a.data.split("||s$@s||"));
                s.length > 0 ? e.setData({
                    searchedWords: s,
                    hideSearchedWords: !1,
                    noSearchedWords: !1
                }) : e.setData({
                    hideSearchedWords: !0,
                    noSearchedWords: !0
                });
            }
        });
    },
    formSubmit: function(e) {
        var a = "string" == typeof e.detail.value ? e.detail.value.trim() : e.detail.value.mainSearchInput.trim();
        this.recordSearched(e, a), "" == a || void 0 == a ? this.showToastss({
            title: "请输入关键词",
            duration: 2e3
        }) : wx.navigateTo({
            url: "../searchRecipe/searchRecipe?keyword=" + a
        });
    },
    showToastss: function(e) {
        var a = this, s = e.duration, t = e.title;
        a.setData({
            showToast: !0,
            toastTitle: t
        }), setTimeout(function() {
            a.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, s);
    },
    recordSearched: function(e, a) {
        var s = a || e.currentTarget.dataset.name, t = e.currentTarget.dataset.hidesearchedwords, r = this;
        if ("" == s || void 0 == s) ; else {
            for (var o = this.data.searchedWords, d = 0; d < o.length; d++) o[d] == s && (o.splice(d, 1), 
            d -= 1);
            var i = (s + "||s$@s||" + o.join("||s$@s||")).split("||s$@s||").slice(0, 20).join("||s$@s||");
            wx.setStorage({
                key: "searchedWords",
                data: i
            });
            var c = this.trimSpace(i.split("||s$@s||"));
            c.length > 0 && setTimeout(function() {
                r.setData({
                    searchedWords: c,
                    noSearchedWords: !1
                });
            }, 1e3), 1 == t ? this.setData({
                hideSearchedWords: !0
            }) : this.setData({
                hideSearchedWords: !1
            });
        }
    },
    trimSpace: function(e) {
        for (var a = 0; a < e.length; a++) "" != e[a] && void 0 !== e[a] || (e.splice(a, 1), 
        a -= 1);
        return e;
    },
    clearSearchedWords: function() {
        var e = this;
        wx.removeStorage({
            key: "searchedWords",
            success: function(a) {
                e.setData({
                    searchedWords: [],
                    hideSearchedWords: !0,
                    noSearchedWords: !0
                });
            }
        });
    },
    onLoad: function(e) {
        var a = this;
        wx.getStorage({
            key: "userId",
            success: function(e) {
                a.setData({
                    userId: e.data
                });
            }
        });
    },
    getUserInfo: function(a) {
        "getUserInfo:ok" == a.detail.errMsg && (e.globalData.userInfo = a.detail.userInfo, 
        this.setData({
            userInfo: a.detail.userInfo,
            hasUserInfo: !0
        }), wx.getUserInfo({
            success: function(a) {
                wx.request({
                    url: e.globalData.localhost + "/v9/vendor_callback_xcx.php",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        site: "weixin",
                        code: e.globalData.userCode
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        wx.setStorage({
                            key: "userId",
                            data: a.data.user_id
                        }), e.globalData.userId = a.data.user_id, wx.navigateTo({
                            url: "../myfav/myfav?uid=" + e.globalData.userId
                        });
                    }
                });
            }
        }));
    },
    onHide: function() {
        this.setData({
            searchTips: {},
            hideSearchedWords: !1
        });
    },
    iFocused: function(e) {
        this.setData({
            searchInputing: !0
        });
    },
    exitInputing: function() {
        this.setData({
            searchInputing: !1,
            nowords: ""
        });
        var e = this;
        e.data.searchRequesting ? setTimeout(function() {
            e.setData({
                searchTips: {},
                hideSearchedWords: !1
            }), wx.getStorage({
                key: "searchedWords",
                success: function(a) {
                    var s = e.trimSpace(a.data.split("||s$@s||"));
                    s.length > 0 ? e.setData({
                        searchedWords: s,
                        hideSearchedWords: !1,
                        noSearchedWords: !1
                    }) : e.setData({
                        hideSearchedWords: !0,
                        noSearchedWords: !0
                    });
                }
            });
        }, 500) : (e.setData({
            searchTips: {},
            hideSearchedWords: !1
        }), wx.getStorage({
            key: "searchedWords",
            success: function(a) {
                var s = e.trimSpace(a.data.split("||s$@s||"));
                s.length > 0 ? e.setData({
                    searchedWords: s,
                    hideSearchedWords: !1,
                    noSearchedWords: !1
                }) : e.setData({
                    hideSearchedWords: !0,
                    noSearchedWords: !0
                });
            }
        }));
    },
    inputIng: function(a) {
        var s = "string" == typeof a.detail.value ? a.detail.value.trim() : a.detail.value.mainSearchInput.trim(), t = this;
        "" == s ? t.data.searchRequesting ? setTimeout(function() {
            t.setData({
                searchTips: {},
                hideSearchedWords: !1
            }), wx.getStorage({
                key: "searchedWords",
                success: function(e) {
                    var a = t.trimSpace(e.data.split("||s$@s||"));
                    a.length > 0 ? t.setData({
                        searchedWords: a,
                        hideSearchedWords: !1,
                        noSearchedWords: !1
                    }) : t.setData({
                        hideSearchedWords: !0,
                        noSearchedWords: !0
                    });
                }
            });
        }, 500) : (t.setData({
            searchTips: {},
            hideSearchedWords: !1
        }), wx.getStorage({
            key: "searchedWords",
            success: function(e) {
                var a = t.trimSpace(e.data.split("||s$@s||"));
                a.length > 0 ? t.setData({
                    searchedWords: a,
                    hideSearchedWords: !1,
                    noSearchedWords: !1
                }) : t.setData({
                    hideSearchedWords: !0,
                    noSearchedWords: !0
                });
            }
        })) : t.data.searchRequesting || (t.setData({
            searchRequesting: !0
        }), wx.request({
            url: e.globalData.newlocalhost + "/Searchabout/associate",
            data: {
                format: "json",
                keywords: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                e.data.data.length > 0 && (console.log(e.data.data), t.setData({
                    searchTips: e.data.data,
                    hideSearchedWords: !0
                }), t.setData({
                    searchRequesting: !1
                }));
            },
            fail: function() {
                t.setData({
                    searchRequesting: !1
                });
            }
        }));
    }
});