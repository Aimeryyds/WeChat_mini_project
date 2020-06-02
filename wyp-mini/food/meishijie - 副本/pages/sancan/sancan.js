var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        winHeight: "",
        shareicon: "../../images/rd_b_fx@3x.png",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        scrollDone: !1,
        pageNum0: 0,
        hasNextPage0: !0,
        sancanResult0: [],
        pageNum1: 0,
        hasNextPage1: !0,
        sancanResult1: [],
        pageNum2: 0,
        hasNextPage2: !0,
        sancanResult2: [],
        pageNum3: 0,
        hasNextPage3: !0,
        sancanResult3: [],
        pageNum4: 0,
        hasNextPage4: !0,
        sancanResult4: [],
        scCurrent: 0
    },
    setScCur: function() {},
    scrollFinish: function() {
        this.setData({
            scrollDone: !0
        });
    },
    onShareAppMessage: function(a) {
        return a.from, {
            title: "让你不再纠结每日三餐吃什么",
            path: "/pages/index/index?goSancan=1",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514151823_857.jpg",
            success: function(a) {},
            fail: function(a) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(a) {
        this.setData({
            option: a
        });
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                var e = a.windowHeight * (750 / a.windowWidth) - 88;
                console.log(e), t.setData({
                    winHeight: e
                });
            }
        });
        var e = new Date().getHours();
        e < 4 ? (t.loadSc(4), t.setData({
            scCurrent: 4
        })) : e > 3 && e < 10 ? (t.loadSc(0), t.setData({
            scCurrent: 0
        })) : e > 9 && e < 14 ? (t.loadSc(1), t.setData({
            scCurrent: 1
        })) : e > 13 && e < 16 ? (t.loadSc(2), t.setData({
            scCurrent: 2
        })) : e > 15 && e < 22 ? (t.loadSc(3), t.setData({
            scCurrent: 3
        })) : (t.loadSc(4), t.setData({
            scCurrent: 4
        }));
    },
    loadSc: function(t) {
        var e = this;
        0 == t ? (e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/v7/sancanlist_day.php",
            data: {
                type: 0,
                format: "json",
                page: e.data.pageNum0 + 1,
                per_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (e.setData({
                    requeseFail: !1
                }), a.data.data.items.length > 0) {
                    e.setData({
                        sancanResult0: e.data.sancanResult0.concat(a.data.data.items)
                    });
                    var t = e.data.pageNum0 + 1;
                    e.setData({
                        pageNum0: t
                    }), a.data.data.current_page == a.data.data.total_page && e.setData({
                        hasNextPage0: !1
                    }), e.setData({
                        requeseDone: !0
                    });
                } else e.setData({
                    noData: !0
                });
                setTimeout(function() {
                    e.setData({
                        scrollDone: !0
                    });
                }, 500);
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        })) : 1 == t ? (e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/v7/sancanlist_day.php",
            data: {
                type: 1,
                format: "json",
                page: e.data.pageNum1 + 1,
                per_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (e.setData({
                    requeseFail: !1
                }), a.data.data.items.length > 0) {
                    e.setData({
                        sancanResult1: e.data.sancanResult1.concat(a.data.data.items)
                    });
                    var t = e.data.pageNum1 + 1;
                    e.setData({
                        pageNum1: t
                    }), a.data.data.current_page == a.data.data.total_page && e.setData({
                        hasNextPage1: !1
                    }), e.setData({
                        requeseDone: !0
                    });
                } else e.setData({
                    noData: !0
                });
                setTimeout(function() {
                    e.setData({
                        scrollDone: !0
                    });
                }, 500);
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        })) : 2 == t ? (e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/v7/sancanlist_day.php",
            data: {
                type: 2,
                format: "json",
                page: e.data.pageNum2 + 1,
                per_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (e.setData({
                    requeseFail: !1
                }), a.data.data.items.length > 0) {
                    e.setData({
                        sancanResult2: e.data.sancanResult2.concat(a.data.data.items)
                    });
                    var t = e.data.pageNum2 + 1;
                    e.setData({
                        pageNum2: t
                    }), a.data.data.current_page == a.data.data.total_page && e.setData({
                        hasNextPage2: !1
                    }), e.setData({
                        requeseDone: !0
                    });
                } else e.setData({
                    noData: !0
                });
                setTimeout(function() {
                    e.setData({
                        scrollDone: !0
                    });
                }, 500);
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        })) : 3 == t ? (e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/v7/sancanlist_day.php",
            data: {
                type: 3,
                format: "json",
                page: e.data.pageNum3 + 1,
                per_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (e.setData({
                    requeseFail: !1
                }), a.data.data.items.length > 0) {
                    e.setData({
                        sancanResult3: e.data.sancanResult3.concat(a.data.data.items)
                    });
                    var t = e.data.pageNum3 + 1;
                    e.setData({
                        pageNum3: t
                    }), a.data.data.current_page == a.data.data.total_page && e.setData({
                        hasNextPage3: !1
                    }), e.setData({
                        requeseDone: !0
                    });
                } else e.setData({
                    noData: !0
                });
                setTimeout(function() {
                    e.setData({
                        scrollDone: !0
                    });
                }, 500);
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        })) : 4 == t && (e.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/v7/sancanlist_day.php",
            data: {
                type: 4,
                format: "json",
                page: e.data.pageNum4 + 1,
                per_page: 10
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (e.setData({
                    requeseFail: !1
                }), a.data.data.items.length > 0) {
                    e.setData({
                        sancanResult4: e.data.sancanResult4.concat(a.data.data.items)
                    });
                    var t = e.data.pageNum4 + 1;
                    e.setData({
                        pageNum4: t
                    }), a.data.data.current_page == a.data.data.total_page && e.setData({
                        hasNextPage4: !1
                    }), e.setData({
                        requeseDone: !0
                    });
                } else e.setData({
                    noData: !0
                });
                setTimeout(function() {
                    e.setData({
                        scrollDone: !0
                    });
                }, 500);
            },
            fail: function(a) {
                e.setData({
                    requeseFail: !0
                });
            }
        }));
    },
    scChange: function(a) {
        var t = this, e = a.detail.current;
        t.setData({
            scCurrent: e
        }), 0 == e ? t.data.sancanResult0.length > 0 || t.loadSc(0) : 1 == e ? t.data.sancanResult1.length > 0 || t.loadSc(1) : 2 == e ? t.data.sancanResult2.length > 0 || t.loadSc(2) : 3 == e ? t.data.sancanResult3.length > 0 || t.loadSc(3) : 4 == e && (t.data.sancanResult4.length > 0 || t.loadSc(4));
    },
    onReachBottom: function(a) {
        var t = a.currentTarget.dataset.sc;
        0 == t ? this.data.hasNextPage0 && this.loadMore(0) : 1 == t ? this.data.hasNextPage1 && this.loadMore(1) : 2 == t ? this.data.hasNextPage2 && this.loadMore(2) : 3 == t ? this.data.hasNextPage3 && this.loadMore(3) : 4 == t && this.data.hasNextPage4 && this.loadMore(4);
    },
    setScCurrent: function(a) {
        var t = this, e = a.currentTarget.dataset.sc;
        clearTimeout(this.setScCur), this.setScCur = setTimeout(function() {
            t.setData({
                scCurrent: e
            });
        }, 200);
    },
    loadMore: function(a) {
        var t = this;
        t.setData({
            requeseDone: !1
        }), t.loadSc(a);
    }
});