function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, r) {
            function a(n, o) {
                try {
                    var i = e[n](o), s = i.value;
                } catch (t) {
                    return void r(t);
                }
                if (!i.done) return Promise.resolve(s).then(function(t) {
                    a("next", t);
                }, function(t) {
                    a("throw", t);
                });
                t(s);
            }
            return a("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var r = 0; r < e.length; r++) {
            var a = e[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, r, a) {
        return r && t(e.prototype, r), a && t(e, a), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), internalQrcode = function(t) {
    function e() {
        var t, r, a, n;
        _classCallCheck(this, e);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i))), 
        a.config = {
            navigationBarTitleText: "小程序路径和二维码",
            navigationBarBackgroundColor: "#fff",
            navigationBarTextStyle: "black"
        }, a.data = {
            originPath: "",
            shortUrl: "",
            qrcodeUrl: "",
            postData: {},
            isDetails: !1,
            QR_id: "",
            activeBtn: 8
        }, a.computed = {
            setMasge: function() {
                return this.isDetails ? "课程详情" : "筛选课程列表";
            }
        }, a.methods = {
            getQrcode: function() {
                function t() {
                    return e.apply(this, arguments);
                }
                var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var e, r, a, n, o = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e = 42 * i, r = JSON.parse(JSON.stringify(this.postData)), a = _path2.default.wxacodeunlimit, 
                            n = {
                                authorization: wx.getStorageSync("user-token")
                            }, wx.showLoading({
                                mask: !0
                            }), i = Number(i), this.activeBtn = i, this.qrcodeUrl = "", r.width = e, (0, _common.axios)({
                                url: a,
                                data: r,
                                header: n
                            }).then(function(t) {
                                var e = t.data;
                                wx.hideLoading(), e && e.data && 0 === e.error_code ? (o.qrcodeUrl = e.data.url, 
                                o.$apply()) : wx.showToast({
                                    title: e.error_msg,
                                    icon: "none",
                                    duration: 2e3
                                });
                            }).catch(function() {
                                wx.hideLoading();
                            });

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return t;
            }(),
            copy: function() {
                this.shortUrl ? wx.setClipboardData({
                    data: this.shortUrl,
                    success: function(t) {
                        wx.showToast({
                            title: "复制成功",
                            icon: "success",
                            duration: 2e3
                        });
                    }
                }) : wx.showToast({
                    title: "没有可复制的路径",
                    icon: "none",
                    duration: 2e3
                });
            },
            preview: function(t) {
                wx.previewImage({
                    current: "",
                    urls: [ t ]
                });
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function(t) {
            this.isDetails = t && t.pages, t && t.pages ? this.detailsPageFunc(t.pages) : this.homePageFunc();
        }
    }, {
        key: "homePageFunc",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, r, a, n, o, i = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        wx.startPullDownRefresh(), this.originPath = this.$parent.globalData.classListFilter, 
                        e = this.originPath.split("?")[0].substr(1), r = this.$parent.globalData.classListFilterObject, 
                        a = _path2.default.wxacodeunlimit, n = {
                            mini_appid: this.$parent.globalData.appId,
                            page: e,
                            params: r,
                            auto_color: 0
                        }, o = {
                            authorization: wx.getStorageSync("user-token")
                        }, this.postData = n, (0, _common.axios)({
                            url: a,
                            data: n,
                            header: o
                        }).then(function(t) {
                            var e = t.data;
                            wx.stopPullDownRefresh(), e && e.data && 0 === e.error_code ? (i.shortUrl = e.data.shortUrl, 
                            i.qrcodeUrl = e.data.url, i.$apply()) : wx.showToast({
                                title: e.error_msg,
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function() {
                            wx.stopPullDownRefresh();
                        });

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "detailsPageFunc",
        value: function() {
            function t(t) {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t(e) {
                var r, a, n, o, i = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        wx.startPullDownRefresh(), r = this.$parent.globalData.detailsInfo, a = _path2.default.wxacodeunlimit, 
                        n = {
                            mini_appid: this.$parent.globalData.appId,
                            page: e,
                            params: r
                        }, o = {
                            authorization: wx.getStorageSync("user-token")
                        }, this.postData = n, (0, _common.axios)({
                            url: a,
                            data: n,
                            header: o
                        }).then(function(t) {
                            var e = t.data;
                            wx.stopPullDownRefresh(), e && e.data && 0 === e.error_code ? (i.shortUrl = e.data.shortUrl, 
                            i.qrcodeUrl = e.data.url, i.QR_id = e.data.qrId, i.$apply()) : wx.showToast({
                                title: e.error_msg,
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function() {
                            wx.stopPullDownRefresh();
                        });

                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(internalQrcode, "pages/internal/qrcode"));