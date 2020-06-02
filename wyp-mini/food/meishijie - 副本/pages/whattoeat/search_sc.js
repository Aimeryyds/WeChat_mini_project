var e = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !1,
        userId: e.globalData.userId,
        userInfo: {},
        searchTips: {},
        searchicon: "../../images/searchicon.png",
        focus: !0,
        searchedWords_cj_sc: [],
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
            key: "searchedWords_cj_sc",
            success: function(s) {
                var a = e.trimSpace(s.data.split("||s$@s||"));
                a.length > 0 ? e.setData({
                    searchedWords_cj_sc: a,
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
        var s = this, a = "string" == typeof e.detail.value ? e.detail.value.trim() : e.detail.value.mainSearchInput.trim();
        this.recordSearched(e, a), "" == a || void 0 == a ? this.showToastss({
            title: "请输入关键词",
            duration: 2e3
        }) : (s.setData({
            searchTips: {},
            hideSearchedWords: !1
        }), setTimeout(function() {
            wx.navigateTo({
                url: "../whattoeat/search_result_sc?words=" + a + "&scene_id=" + s.data.option.scene_id
            });
        }, 50));
    },
    showToastss: function(e) {
        var s = this, a = e.duration, t = e.title;
        s.setData({
            showToast: !0,
            toastTitle: t
        }), setTimeout(function() {
            s.setData({
                showToast: !1,
                toastTitle: ""
            });
        }, a);
    },
    recordSearched: function(e, s) {
        var a = s || e.currentTarget.dataset.name, t = e.currentTarget.dataset.hidesearchedwords, r = this;
        if ("" == a || void 0 == a) ; else {
            for (var c = this.data.searchedWords_cj_sc, d = 0; d < c.length; d++) c[d] == a && (c.splice(d, 1), 
            d -= 1);
            var o = (a + "||s$@s||" + c.join("||s$@s||")).split("||s$@s||").slice(0, 10).join("||s$@s||");
            wx.setStorage({
                key: "searchedWords_cj_sc",
                data: o
            });
            var i = this.trimSpace(o.split("||s$@s||"));
            i.length > 0 && setTimeout(function() {
                r.setData({
                    searchedWords_cj_sc: i,
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
        for (var s = 0; s < e.length; s++) "" != e[s] && void 0 !== e[s] || (e.splice(s, 1), 
        s -= 1);
        return e;
    },
    clearSearchedWords: function() {
        var e = this;
        wx.removeStorage({
            key: "searchedWords_cj_sc",
            success: function(s) {
                e.setData({
                    searchedWords_cj_sc: [],
                    hideSearchedWords: !0,
                    noSearchedWords: !0
                });
            }
        });
    },
    onLoad: function(e) {
        this.setData({
            option: e
        });
        var s = this;
        wx.getStorage({
            key: "userId",
            success: function(e) {
                s.setData({
                    userId: e.data
                });
            }
        });
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
                key: "searchedWords_cj_sc",
                success: function(s) {
                    var a = e.trimSpace(s.data.split("||s$@s||"));
                    a.length > 0 ? e.setData({
                        searchedWords_cj_sc: a,
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
            key: "searchedWords_cj_sc",
            success: function(s) {
                var a = e.trimSpace(s.data.split("||s$@s||"));
                a.length > 0 ? e.setData({
                    searchedWords_cj_sc: a,
                    hideSearchedWords: !1,
                    noSearchedWords: !1
                }) : e.setData({
                    hideSearchedWords: !0,
                    noSearchedWords: !0
                });
            }
        }));
    },
    inputIng: function(s) {
        var a = "string" == typeof s.detail.value ? s.detail.value.trim() : s.detail.value.mainSearchInput.trim(), t = this;
        "" == a ? t.data.searchRequesting ? setTimeout(function() {
            t.setData({
                searchTips: {},
                hideSearchedWords: !1
            }), wx.getStorage({
                key: "searchedWords_cj_sc",
                success: function(e) {
                    var s = t.trimSpace(e.data.split("||s$@s||"));
                    s.length > 0 ? t.setData({
                        searchedWords_cj_sc: s,
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
            key: "searchedWords_cj_sc",
            success: function(e) {
                var s = t.trimSpace(e.data.split("||s$@s||"));
                s.length > 0 ? t.setData({
                    searchedWords_cj_sc: s,
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
            url: e.globalData.newlocalhost + "/shicai/shicai_search_rel",
            data: {
                format: "json",
                scene_id: t.data.option.scene_id || "",
                q: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e), e.data.data.length > 0 ? (t.setData({
                    searchTips: e.data.data,
                    hideSearchedWords: !0
                }), t.setData({
                    searchRequesting: !1
                })) : t.setData({
                    searchRequesting: !1
                });
            },
            fail: function() {
                t.setData({
                    searchRequesting: !1
                });
            }
        }));
    }
});