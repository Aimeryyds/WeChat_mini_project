require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 1 ], {
    "/Fln": function(t, a, o) {
        "use strict";
        var e = o("xy8G"), n = o("npGW");
        var s = function(t) {
            o("gAuY");
        }, i = o("ybqe")(e.a, n.a, s, "data-v-a253fd0a", null);
        a.a = i.exports;
    },
    "5ijb": function(t, a, o) {
        "use strict";
        var e = o("UCMt"), n = o("Erjd");
        var s = function(t) {
            o("FOlx");
        }, i = o("ybqe")(e.a, n.a, s, "data-v-21076028", null);
        a.a = i.exports;
    },
    "63T1": function(t, a, o) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var e = o("5nAL"), n = o.n(e), s = o("/Fln");
        new n.a(s.a).$mount();
    },
    "6iJ1": function(t, a, o) {
        "use strict";
        var e = {
            render: function() {
                var t = this, a = t.$createElement, o = t._self._c || a;
                return o("div", {
                    staticClass: "load"
                }, [ t.hasMore ? o("div", {
                    staticClass: "more",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(a) {
                            t.$emit("loadMore");
                        }
                    }
                }, [ t._v("加载更多") ]) : o("div", {
                    staticClass: "none"
                }, [ t._v("没有更多了️") ]) ]);
            },
            staticRenderFns: []
        };
        a.a = e;
    },
    "8rD3": function(t, a, o) {
        "use strict";
        a.a = {
            props: [ "hasMore" ]
        };
    },
    Erjd: function(t, a, o) {
        "use strict";
        var e = {
            render: function() {
                var t = this, a = t.$createElement, o = t._self._c || a;
                return o("div", {
                    staticClass: "comment"
                }, [ o("div", {
                    staticClass: "detail"
                }, [ o("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.avatar
                    }
                }), t._v(" "), o("div", {
                    staticClass: "info"
                }, [ o("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.nickname)) ]), t._v(" "), o("div", {
                    staticClass: "date"
                }, [ t._v(t._s(t.date)) ]) ]) ]), t._v(" "), o("div", {
                    staticClass: "content"
                }, [ t._v(t._s(t.content)) ]) ]);
            },
            staticRenderFns: []
        };
        a.a = e;
    },
    FOlx: function(t, a) {},
    HawC: function(t, a, o) {
        "use strict";
        var e = {
            render: function() {
                var t = this, a = t.$createElement, o = t._self._c || a;
                return o("div", {
                    staticClass: "catalog",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.handleNavToArticle
                    }
                }, [ o("div", {
                    staticClass: "catalog-right"
                }, [ t.is_finished ? o("div", {
                    staticClass: "has-read"
                }) : o("div", {
                    staticClass: "not-read"
                }), t._v(" "), o("div", {
                    staticClass: "title",
                    class: {
                        unreadable: !t.hasPurchased && 0 === t.status
                    }
                }, [ t._v(t._s(t.title_cn)) ]) ]), t._v(" "), t.hasPurchased || 1 === t.status ? o("div", {
                    staticClass: "length"
                }, [ t._v(t._s(t.length) + "词") ]) : o("div", {
                    staticClass: "lock"
                }) ]);
            },
            staticRenderFns: []
        };
        a.a = e;
    },
    UCMt: function(t, a, o) {
        "use strict";
        var e = o("0xDb");
        a.a = {
            props: [ "avatar", "nickname", "content", "created_at" ],
            data: function() {
                return {
                    isEllipsis: !0
                };
            },
            computed: {
                date: function() {
                    return Object(e.c)(this.created_at);
                }
            }
        };
    },
    ZU0N: function(t, a, o) {
        "use strict";
        var e = o("oE8u"), n = o("zYU7");
        var s = function(t) {
            o("u3oR");
        }, i = o("ybqe")(e.a, n.a, s, "data-v-247088b6", null);
        a.a = i.exports;
    },
    gAuY: function(t, a) {},
    i4C4: function(t, a, o) {
        "use strict";
        var e = o("8rD3"), n = o("6iJ1");
        var s = function(t) {
            o("uG1f");
        }, i = o("ybqe")(e.a, n.a, s, "data-v-1290ede2", null);
        a.a = i.exports;
    },
    ksh9: function(t, a, o) {
        "use strict";
        var e = o("rt//"), n = o("HawC");
        var s = function(t) {
            o("nP3Q");
        }, i = o("ybqe")(e.a, n.a, s, "data-v-679d64e2", null);
        a.a = i.exports;
    },
    nP3Q: function(t, a) {},
    npGW: function(t, a, o) {
        "use strict";
        var e = {
            render: function() {
                var t = this, a = t.$createElement, o = t._self._c || a;
                return t.bookInfo ? o("div", {
                    staticClass: "wrapper"
                }, [ o("div", {
                    staticClass: "basic"
                }, [ o("img", {
                    staticClass: "basic-bgimg",
                    attrs: {
                        src: t.bookInfo.cover_urls[0]
                    }
                }), t._v(" "), o("div", {
                    staticClass: "basic-info",
                    style: {
                        height: t.height,
                        paddingTop: t.paddingTop
                    }
                }, [ o("ComplexBook", {
                    attrs: {
                        isDetail: !0,
                        name_cn: t.bookInfo.name_cn,
                        name_en: t.bookInfo.name_en,
                        cover_urls: t.bookInfo.cover_urls,
                        id: t.productId,
                        book_id: t.bookId,
                        authors: t.bookInfo.authors,
                        description_cn: "",
                        read_amount: t.bookInfo.read_amount,
                        mpcomid: "0"
                    }
                }) ], 1) ]), t._v(" "), o("div", {
                    staticClass: "publisher"
                }, [ o("span", [ t._v("出版商") ]), t._v(" "), o("span", [ t._v(t._s(t.bookInfo.publisher.name_cn)) ]) ]), t._v(" "), o("div", {
                    staticClass: "horizontal-line"
                }), t._v(" "), o("div", {
                    staticClass: "description",
                    class: {
                        ellipsis: t.isEllipsis
                    }
                }, [ t._v(t._s(t.bookInfo.description_cn)) ]), t._v(" "), o("div", {
                    staticClass: "view-description",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(a) {
                            t.isEllipsis = !t.isEllipsis;
                        }
                    }
                }, [ t._v(t._s(t.isEllipsis ? "展开" : "收起")) ]), t._v(" "), o("div", {
                    staticClass: "tags-and-share"
                }, [ o("div", {
                    staticClass: "tags"
                }, [ o("div", {
                    staticClass: "tags-item"
                }, [ o("div", {
                    staticClass: "level-icon"
                }), t._v(" "), o("div", {
                    staticClass: "tags-name"
                }, [ t._v(t._s(t.bookInfo.level.name)) ]) ]), t._v(" "), t._l(t.bookInfo.tags, function(a, e) {
                    return o("div", {
                        key: a.id,
                        staticClass: "tags-item"
                    }, [ o("div", {
                        staticClass: "tag-icon"
                    }), t._v(" "), o("div", {
                        staticClass: "tags-name"
                    }, [ t._v(t._s(a.name)) ]) ]);
                }) ], 2), t._v(" "), o("button", {
                    staticClass: "share",
                    attrs: {
                        "open-type": "share",
                        eventid: "1"
                    },
                    on: {
                        click: t.handleTrackShare
                    }
                }, [ t._v("分享给好友") ]) ], 1), t._v(" "), o("div", {
                    staticClass: "divider"
                }), t._v(" "), o("div", {
                    staticClass: "adv-tab"
                }, [ o("div", {
                    class: {
                        active: !t.showCatalogs
                    },
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleViewDetail
                    }
                }, [ t._v("详情") ]), t._v(" "), o("div", {
                    class: {
                        active: t.showCatalogs
                    },
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.handleViewCatalogs
                    }
                }, [ t._v("目录") ]) ]), t._v(" "), t.showCatalogs ? o("div", {
                    staticClass: "adv-catalogs"
                }, [ t._l(t.catalogs.catalogs, function(a, e) {
                    return o("Catalog", t._b({
                        key: a.id,
                        attrs: {
                            recentRead: a.id === t.catalogs.current_read.article_id,
                            bookName: t.bookInfo.name_cn,
                            userBook: t.bookInfo.user_book,
                            buttonGroup: t.bookInfo.button_group,
                            bookId: t.bookId,
                            rank: e,
                            isLogin: t.isLogin,
                            mpcomid: "3-" + e
                        }
                    }, "Catalog", a, !1));
                }), t._v(" "), o("LoadMore", {
                    attrs: {
                        hasMore: t.catalogs.total !== t.catalogs.catalogs.length,
                        eventid: "5",
                        mpcomid: "4"
                    },
                    on: {
                        loadMore: t.handleLoadCatalogs
                    }
                }) ], 2) : o("div", {
                    staticClass: "adv-detail"
                }, [ t.bookInfo.product_info && t.bookInfo.product_info.promotions.length && t.isAndroid ? o("div", {
                    staticClass: "adv-discount"
                }, [ o("div", {
                    staticClass: "adv-discount-title"
                }, [ t._v(t._s(t.bookInfo.product_info.promotions[0].title)) ]), t._v(" "), o("div", {
                    staticClass: "adv-discount-desc"
                }, [ t._v(t._s(t.bookInfo.product_info.promotions[0].description)) ]) ]) : t._e(), t._v(" "), t.bookInfo.product_info && t.bookInfo.product_info.media_urls.length ? o("div", {
                    staticClass: "adv-feature"
                }, [ o("div", {
                    staticClass: "adv-feature-title"
                }, [ t._v("特色介绍") ]), t._v(" "), o("div", {
                    staticClass: "feature-img",
                    style: {
                        backgroundImage: t.featureImg
                    }
                }) ]) : t._e(), t._v(" "), t.bookInfo.product_info && t.bookInfo.product_info.services.length ? o("div", {
                    staticClass: "divider"
                }) : t._e(), t._v(" "), t.comments ? o("div", {
                    staticClass: "comments"
                }, [ o("div", {
                    staticClass: "comments-header"
                }, [ t._v("书评(" + t._s(t.comments.total) + ")") ]), t._v(" "), t._l(t.comments.objects, function(a, e) {
                    return o("Comment", t._b({
                        key: a.id,
                        attrs: {
                            mpcomid: "1-" + e
                        }
                    }, "Comment", a, !1));
                }), t._v(" "), 0 === t.comments.total ? o("div", {
                    staticClass: "empty-comment"
                }, [ o("div", {
                    staticClass: "empty-comment-img"
                }), t._v(" "), o("div", {
                    staticClass: "empty-comment-text"
                }, [ t._v("暂时还没有书评哦~") ]) ]) : t._e(), t._v(" "), t.comments.total ? o("LoadMore", {
                    attrs: {
                        hasMore: t.comments.total !== t.comments.objects.length,
                        eventid: "4",
                        mpcomid: "2"
                    },
                    on: {
                        loadMore: t.handleLoadComments
                    }
                }) : t._e() ], 2) : t._e() ]), t._v(" "), t.isLogin ? o("ButtonGroup", {
                    attrs: {
                        status: t.bookInfo.button_group,
                        isIpx: t.isIpx,
                        articleId: t.bookInfo.user_book.curr_read_position.article_id,
                        paraId: t.bookInfo.user_book.curr_read_position.paragraph_id,
                        bookName: t.bookInfo.name_cn,
                        onDesk: t.bookInfo.on_desk,
                        bookId: t.bookId,
                        productId: t.productId,
                        isAndroid: t.isAndroid,
                        eventid: "7",
                        mpcomid: "5"
                    },
                    on: {
                        "toggle-book": t.toogleBook
                    }
                }) : o("div", {
                    staticClass: "login-btn-container"
                }, [ o("button", {
                    staticClass: "login-btn",
                    attrs: {
                        "open-type": "getUserInfo",
                        loading: t.loginLoading,
                        disabled: t.loginLoading,
                        eventid: "6"
                    },
                    on: {
                        getuserinfo: t.login
                    }
                }, [ t._v("点击登录后，试读本书") ]) ], 1) ], 1) : t._e();
            },
            staticRenderFns: []
        };
        a.a = e;
    },
    oE8u: function(t, a, o) {
        "use strict";
        var e = o("Xxa5"), n = o.n(e), s = o("exGp"), i = o.n(s), r = o("Q8le"), c = o("Apws");
        a.a = {
            props: [ "status", "isIpx", "articleId", "paraId", "bookName", "onDesk", "bookId", "productId", "isAndroid" ],
            computed: {
                unlockText: function() {
                    return 2 !== this.status ? "解锁" : "升级";
                }
            },
            methods: {
                handleNavToArticle: function() {
                    this.$router.push({
                        path: "/pages/article/main",
                        query: {
                            articleId: this.articleId,
                            paraId: this.paraId,
                            bookName: this.bookName
                        }
                    });
                },
                handleToggleBook: function(t) {
                    var a = this;
                    return i()(n.a.mark(function o() {
                        return n.a.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                a.$emit("toggle-book"), a.handleSubmit(t);

                              case 2:
                              case "end":
                                return o.stop();
                            }
                        }, o, a);
                    }))();
                },
                handleTrialOrRead: function(t) {
                    var a = this;
                    return i()(n.a.mark(function o() {
                        return n.a.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                if (0 !== a.status) {
                                    o.next = 7;
                                    break;
                                }
                                return o.next = 3, r.a.trialBook(a.bookId);

                              case 3:
                                return o.next = 5, c.a.track({
                                    event_code: "reading-try-click",
                                    event_value: {
                                        bookproduct_name: a.bookName
                                    }
                                });

                              case 5:
                                o.next = 8;
                                break;

                              case 7:
                                c.a.track({
                                    event_code: "reading-start-reading",
                                    event_value: {
                                        bookproduct_name: a.bookName
                                    }
                                });

                              case 8:
                                a.handleNavToArticle(), a.handleSubmit(t);

                              case 10:
                              case "end":
                                return o.stop();
                            }
                        }, o, a);
                    }))();
                },
                handlePurchase: function(t) {
                    this.handleSubmit(t), this.isAndroid ? this.$router.push({
                        path: "/pages/purchase/main",
                        query: {
                            productId: this.productId
                        }
                    }) : wx.showModal({
                        title: "温馨提示",
                        showCancel: !1,
                        content: "由于相关规范，iOS功能暂不可用",
                        confirmText: "我知道了"
                    });
                    var a = 2 === this.status ? "upgrade_service" : "unlock_book";
                    c.a.track({
                        event_code: "reading-bookproduct-purchase",
                        event_value: {
                            action: a,
                            bookproduct_id: this.productId,
                            bookproduct_name: this.bookName
                        }
                    }), c.a.sensorLog({
                        event_code: "RDreading_BookProductDetail_Buy",
                        event_value: {
                            bookproduct_id: this.productId,
                            bookproduct_name: this.bookName
                        }
                    });
                },
                handleSubmit: function(t) {
                    c.a.collectFormId(t.mp.detail.formId);
                }
            }
        };
    },
    "rt//": function(t, a, o) {
        "use strict";
        var e = o("Xxa5"), n = o.n(e), s = o("exGp"), i = o.n(s), r = o("Apws"), c = o("Q8le");
        a.a = {
            props: [ "title_cn", "status", "is_finished", "length", "id", "recentRead", "bookName", "userBook", "bookId", "buttonGroup", "rank", "isLogin" ],
            computed: {
                hasPurchased: function() {
                    return !!this.userBook && 2 === this.userBook.status;
                }
            },
            methods: {
                handleNavToArticle: function() {
                    var t = this;
                    return i()(n.a.mark(function a() {
                        return n.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (t.isLogin) {
                                    a.next = 2;
                                    break;
                                }
                                return a.abrupt("return");

                              case 2:
                                if (0 !== t.buttonGroup) {
                                    a.next = 5;
                                    break;
                                }
                                return a.next = 5, c.a.trialBook(t.bookId);

                              case 5:
                                if (!t.hasPurchased && 1 !== t.status) {
                                    a.next = 11;
                                    break;
                                }
                                return a.next = 8, r.a.track({
                                    event_code: "reading-catalog-click",
                                    event_value: {
                                        book_id: t.bookId,
                                        article_rank: t.rank
                                    }
                                });

                              case 8:
                                t.$router.push({
                                    path: "/pages/article/main",
                                    query: {
                                        articleId: t.id,
                                        bookName: t.bookName
                                    }
                                }), a.next = 12;
                                break;

                              case 11:
                                wx.showToast({
                                    title: "快去解锁全书章节吧~",
                                    icon: "none"
                                });

                              case 12:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                }
            }
        };
    },
    u3oR: function(t, a) {},
    uG1f: function(t, a) {},
    xy8G: function(t, a, o) {
        "use strict";
        var e = o("//Fk"), n = o.n(e), s = o("d7EF"), i = o.n(s), r = o("Xxa5"), c = o.n(r), d = o("Gu7T"), u = o.n(d), l = o("exGp"), v = o.n(l), p = o("Dd8w"), _ = o.n(p), m = o("NYxO"), b = o("IcnI"), f = o("Z8KY"), k = o("Apws"), h = o("4VVH"), g = o("/WWA"), I = o("KntP"), C = o("5ijb"), x = o("ksh9"), w = o("i4C4"), y = o("ZU0N"), D = o("rgcf"), L = o("EwJx"), B = o.n(L);
        a.a = {
            store: b.a,
            components: {
                ComplexBook: I.a,
                Comment: C.a,
                Catalog: x.a,
                LoadMore: w.a,
                ButtonGroup: y.a
            },
            onShow: function() {
                this.load();
            },
            onHide: function() {
                this.showCatalogs = !1;
            },
            data: function() {
                return {
                    productId: "",
                    bookInfo: null,
                    bookId: "",
                    showCatalogs: !1,
                    isEllipsis: !0,
                    comments: null,
                    catalogs: null,
                    loginLoading: !1
                };
            },
            computed: _()({}, Object(m.c)({
                isIpx: function(t) {
                    return t.globalData.isIpx;
                },
                isAndroid: function(t) {
                    return t.globalData.isAndroid;
                },
                isLogin: function(t) {
                    return t.globalData.isLogin;
                }
            }), {
                featureImg: function() {
                    return this.bookInfo && this.bookInfo.product_info && this.bookInfo.product_info.media_urls.length && 'url("' + this.bookInfo.product_info.media_urls[0][0] + '")';
                }
            }),
            onShareAppMessage: function() {
                k.a.sensorLog({
                    event_code: "RDreading_BookProductDetail_Share",
                    event_value: {
                        bookproduct_id: this.productId,
                        bookproduct_name: this.bookInfo.name_cn
                    }
                });
                var t = Object(h.a)().nickname, a = wx.getStorageSync("userDetail").id_int;
                return {
                    title: t + "向你推荐了一本英文原版书",
                    path: "/pages/login/main?target=detail&productId=" + this.productId + "&bookId=" + this.bookId + "&shareFrom=detail&userId=" + a + "&productName=" + this.bookInfo.name_cn
                };
            },
            methods: {
                handleLoadComments: function() {
                    var t = this;
                    return v()(c.a.mark(function a() {
                        var o, e, n, s;
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return o = t.comments.page, a.next = 3, f.a.getComments(t.bookId, {
                                    page: o + 1,
                                    ipp: 10
                                });

                              case 3:
                                e = a.sent, n = e.objects, s = e.page, t.comments.objects = [].concat(u()(t.comments.objects), u()(n)), 
                                t.comments.page = s;

                              case 8:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                handleLoadCatalogs: function() {
                    var t = this;
                    return v()(c.a.mark(function a() {
                        var o, e, n, s;
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return o = t.catalogs.page, a.next = 3, f.a.getCatalogs(t.bookId, {
                                    page: o + 1,
                                    ipp: 10
                                });

                              case 3:
                                e = a.sent, n = e.catalogs, s = e.page, t.catalogs.catalogs = [].concat(u()(t.catalogs.catalogs), u()(n)), 
                                t.catalogs.page = s;

                              case 8:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                handleViewDetail: function() {
                    var t = this;
                    return v()(c.a.mark(function a() {
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (!t.showCatalogs) {
                                    a.next = 8;
                                    break;
                                }
                                return a.next = 3, f.a.getComments(t.bookId);

                              case 3:
                                t.comments = a.sent, t.showCatalogs = !1, t.catalogs.total = 0, t.catalogs.objects = [], 
                                t.catalogs.page = 1;

                              case 8:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                handleViewCatalogs: function() {
                    var t = this;
                    return v()(c.a.mark(function a() {
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (t.showCatalogs) {
                                    a.next = 8;
                                    break;
                                }
                                return a.next = 3, f.a.getCatalogs(t.bookId);

                              case 3:
                                t.catalogs = a.sent, t.showCatalogs = !0, t.comments.total = 0, t.comments.objects = [], 
                                t.comments.page = 1;

                              case 8:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                handleDiffBtnGroupStatus: function(t) {
                    return 0 === t || 1 === t ? "unlock_book" : 2 === t ? "upgrade_service" : 3 === t ? "start_reading" : "";
                },
                handleTrackShare: function() {
                    this.productId && (k.a.track({
                        event_code: "reading-minireader-share",
                        event_value: {
                            channel: "share_to_friends",
                            share_object: "bookproduct",
                            bookproduct_id: this.productId,
                            bookproduct_name: this.bookInfo.name_cn
                        }
                    }), k.a.sensorLog({
                        event_code: "RDreading_BookProductDetail_Share",
                        event_value: {
                            channel: "share_to_friends",
                            share_object: "bookproduct",
                            bookproduct_id: this.productId,
                            bookproduct_name: this.bookInfo.name_cn
                        }
                    }));
                },
                toogleBook: function() {
                    var t = this;
                    return v()(c.a.mark(function a() {
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (!t.bookInfo.on_desk) {
                                    a.next = 7;
                                    break;
                                }
                                return a.next = 3, D.a.removeBookFromDesk([ t.bookId ]);

                              case 3:
                                t.bookInfo.on_desk = !1, wx.showToast({
                                    title: "已移出书桌",
                                    icon: "none"
                                }), a.next = 11;
                                break;

                              case 7:
                                return a.next = 9, D.a.addBookToDesk(t.bookId);

                              case 9:
                                t.bookInfo.on_desk = !0, wx.showToast({
                                    title: "已加入书桌",
                                    icon: "none"
                                });

                              case 11:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                nav2PlanLanding: function() {
                    var t = this;
                    return v()(c.a.mark(function a() {
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.next = 2, k.a.track({
                                    event_code: "reading-bookproductad-click",
                                    event_value: {
                                        bookproduct_name: t.bookInfo.name_cn
                                    }
                                });

                              case 2:
                                t.$router.push({
                                    path: "/pages/planLanding/main",
                                    query: {
                                        id: g.e
                                    }
                                });

                              case 3:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                login: function(t) {
                    var a = this;
                    return v()(c.a.mark(function o() {
                        var e, n, s, i;
                        return c.a.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                if (a.loginLoading = !0, e = t.mp.detail, e.userInfo) {
                                    o.next = 7;
                                    break;
                                }
                                return wx.showToast({
                                    title: "需要授权才可以使用哦",
                                    icon: "none"
                                }), a.loginLoading = !1, o.abrupt("return");

                              case 7:
                                return o.next = 9, B.a.login();

                              case 9:
                                return n = o.sent, s = n.code, o.next = 13, k.a.register({
                                    code: s,
                                    app_name: g.d,
                                    data: e
                                });

                              case 13:
                                return o.next = 15, k.a.getUserDetail();

                              case 15:
                                return i = o.sent, wx.setStorageSync("userDetail", i), a.loginLoading = !1, o.next = 20, 
                                a.load();

                              case 20:
                                b.a.commit("setLoginStatus", {
                                    isLogin: !0
                                });

                              case 21:
                              case "end":
                                return o.stop();
                            }
                        }, o, a);
                    }))();
                },
                load: function() {
                    var t = this;
                    return v()(c.a.mark(function a() {
                        var o, e, s, r, d, u, l, v, p;
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return o = t.$route.query.bookId, t.bookId = o, a.next = 4, n.a.all([ f.a.getBookDetail(t.bookId), f.a.getComments(t.bookId) ]);

                              case 4:
                                e = a.sent, s = i()(e, 2), r = s[0], d = s[1], t.bookInfo = r, t.comments = d, u = r.name_cn, 
                                l = r.product_info, v = r.button_group, wx.setNavigationBarTitle({
                                    title: u
                                }), l && l.id && (t.productId = l.id, p = {
                                    bookproduct_id: l.id,
                                    bookproduct_name: u
                                }, k.a.track({
                                    event_code: "reading-bookproduct-detail-pv",
                                    event_value: _()({
                                        btn_on_page: t.handleDiffBtnGroupStatus(v)
                                    }, p)
                                }), k.a.sensorLog({
                                    event_code: "RDreading_BookProductDetail_PV",
                                    event_value: p
                                }));

                              case 13:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                }
            }
        };
    },
    zYU7: function(t, a, o) {
        "use strict";
        var e = {
            render: function() {
                var t = this, a = t.$createElement, o = t._self._c || a;
                return o("div", {
                    staticClass: "wrapper",
                    class: {
                        "fix-iphonex": t.isIpx
                    }
                }, [ 4 === t.status ? o("form", {
                    staticClass: "flex-vhc",
                    attrs: {
                        "report-submit": "",
                        eventid: "4"
                    },
                    on: {
                        submit: t.handleSubmit
                    }
                }, [ o("button", {
                    staticClass: "unpublish",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ t._v("该书籍已下线") ]) ], 1) : o("div", {
                    staticClass: "btn-wrapper"
                }, [ 4 !== t.status ? o("form", {
                    attrs: {
                        "report-submit": "",
                        eventid: "0"
                    },
                    on: {
                        submit: t.handleToggleBook
                    }
                }, [ o("button", {
                    staticClass: "desk-on",
                    class: {
                        "desk-out": t.onDesk
                    },
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ t._v(t._s(t.onDesk ? "移出书桌" : "加入书桌")) ]) ], 1) : t._e(), t._v(" "), 3 === t.status ? o("form", {
                    staticClass: "flex-vhc",
                    attrs: {
                        "report-submit": "",
                        eventid: "3"
                    },
                    on: {
                        submit: t.handleNavToArticle
                    }
                }, [ o("button", {
                    staticClass: "single-read basic-read-btn",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ t._v("开始阅读") ]) ], 1) : o("div", {
                    staticClass: "horizontal-btns"
                }, [ o("form", {
                    attrs: {
                        "report-submit": "",
                        eventid: "1"
                    },
                    on: {
                        submit: t.handleTrialOrRead
                    }
                }, [ o("button", {
                    staticClass: "read basic-read-btn",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ t._v(t._s(2 !== t.status ? "试读" : "开始阅读")) ]) ], 1), t._v(" "), o("form", {
                    attrs: {
                        "report-submit": "",
                        eventid: "2"
                    },
                    on: {
                        submit: t.handlePurchase
                    }
                }, [ o("button", {
                    staticClass: "purchase",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ 2 !== t.status ? o("div", {
                    staticClass: "unlock basic-read-btn"
                }, [ o("div", {
                    staticClass: "unlock-img"
                }), t._v(" "), o("div", {
                    staticClass: "unlock-text"
                }, [ t._v("解锁全书") ]) ]) : o("div", {
                    staticClass: "upgrade basic-read-btn"
                }, [ t._v("升级书籍服务") ]) ]) ], 1) ], 1) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        a.a = e;
    }
}, [ "63T1" ]);