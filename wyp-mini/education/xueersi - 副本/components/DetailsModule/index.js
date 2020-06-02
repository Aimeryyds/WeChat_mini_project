function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _coupon = require("./../ClassDetail/coupon.js"), _coupon2 = _interopRequireDefault(_coupon), _common = require("./../../common/util/common.js"), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), app = getApp(), detailsModule = function(e) {
    function t() {
        var e, i, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
        return i = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        n.data = {
            felas: "默认",
            courseInfo: null,
            isFullScreen: !0,
            moreCourseDetail: null,
            isimgInfo: !1,
            coverUrl: "",
            controls: !0,
            isPlay: !0,
            system: "",
            playSrc: "https://static-xesapi.speiyou.cn/1543221957558.png",
            fullScreen: "https://static-xesapi.speiyou.cn/1543218895263.png",
            fullScreens: 1,
            toggleStatus: 1,
            toggleIcon: "http://static-xesapi.speiyou.cn/1543214934792.png",
            notControls: !0,
            playStatus: !0,
            videoCtx: null,
            isGetbtn: !1,
            getAreaCode: "",
            label: {
                _item1: [ "小班授课", "免费试听", "家长旁听", "随时退费" ],
                _item2: [ "直播回放", "辅导老师", "随时退费" ],
                _item3: [ "小班授课", "家长旁听", "随时退费" ]
            },
            evaluation: {},
            termId: "",
            suitableObject: {},
            trainingTarget: {},
            detailType: 0,
            detailImg: "",
            onLineImgs: [],
            imgDetail: {},
            detailVideos: {},
            showVideo: !1,
            videoContext: "",
            recrument: {}
        }, n.props = {
            areaCode: String,
            detailsType: {
                type: Number,
                default: 2
            },
            activity: Object,
            imgTestInfo: {},
            detailsInfo: {},
            evaluationInfo: {},
            isShare: Boolean
        }, n.$repeat = {}, n.$props = {
            lessoncoupon: {
                "xmlns:v-bind": "",
                "v-bind:activity.sync": "activity",
                "v-bind:areaCode.sync": "areaCode",
                "v-bind:detailsType.sync": "detailsType"
            }
        }, n.$events = {}, n.components = {
            lessoncoupon: _coupon2.default
        }, n.computed = {
            isCourseInfo: function() {
                var e = this.courseInfo;
                if (e) return !!e.length;
            },
            isVideoContent: function() {
                var e = this.detailsType, t = null;
                if (1 !== e) {
                    if ("{}" !== JSON.stringify(this.imgDetail)) for (t in this.imgDetail) this.imgDetail[t] && !0;
                }
                return this.recrument.detailDescImg && this.recrument.detailDescImg.length;
            },
            isCoverVideoImg: function() {
                return !this.coverUrl;
            },
            isBotmImg: function() {
                return this.recrument && this.recrument.detailDescImg && this.recrument.detailDescImg.length;
            },
            isArrow: function() {
                return 3 !== this.evaluation.status;
            },
            diagnosisTest: function() {
                return {
                    1: [ "开始诊断" ],
                    2: [ "开始诊断" ],
                    3: [ "" ],
                    4: [ "去选课" ]
                }[this.evaluation.status];
            },
            isImgTestInfo: function() {
                return !Object.keys(this.imgTestInfo).length;
            },
            detailLabel: function() {
                var e = this.termId.length > 1 ? 5 : this.termId, t = this.detailType;
                return e < 5 && 1 === t ? this.label._item2 : e < 5 && 2 === t ? this.label._item1 : e < 5 && 4 === t ? this.label._item1 : e > 4 && 1 === t ? this.label._item2 : e > 4 && 2 === t ? this.label._item3 : e > 4 && 4 === t ? this.label._item3 : void 0;
            },
            isDetailType: function() {
                return 1 !== this.detailType && !!this.imgDetail.vedioUrl;
            },
            isEvaluation: function() {
                var e = Object.prototype.toString.call(this.evaluation), t = !0;
                return "[object Array]" === e ? t = !!this.evaluation.length : t;
            },
            isRmoveClass: function() {
                return 1 === this.detailType || !this.imgDetail.vedioUrl;
            },
            isDiagnosis: function() {
                return 1 === this.detailType;
            }
        }, n.watch = {
            imgTestInfo: function(e) {
                this.isVideoInfo(e), this.funcFactory(e);
            }
        }, n.methods = {
            imglarge: function(e) {
                wx.previewImage({
                    current: e,
                    urls: this.recrument.detailDescImg || []
                });
            },
            changefullscreen: function(e) {
                var t = e.detail.fullScreen;
                this.isFullScreen = !t, this.$apply();
            },
            playVideo: function() {
                this.$emit("video-addClas"), this.showVideo = !this.showVideo, this.videoContext = wx.createVideoContext("myVideo"), 
                this.videoContext.play(), this.$apply();
            },
            hideVideo: function() {
                this.$emit("video-removeClas"), this.showVideo = !1, this.videoContext.pause(), 
                this.$apply();
            },
            diagnosisFn: function() {
                wx.getStorageSync("user-token") || "" ? this.userStatus() : this.touristStatus();
            },
            getUserInfoFn: function(e) {
                var t = this, i = wx.getStorageSync("unid");
                this.loadSetPath({
                    share: this.isShare,
                    url: "detail",
                    clickName: ""
                }), e.detail.encryptedData ? (app.sensors.track("allow_sq", {
                    allow_sq: "允许授权"
                }), this.buryXkdetail(1), i ? t.userAllowFunc(i) : t.getUnionId(e).then(function(e) {
                    e && t.userAllowFunc(e);
                })) : (app.sensors.track("refuse_sq", {
                    refuse_sq: "拒绝授权"
                }), wx.showModal({
                    title: "",
                    content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息",
                    showCancel: !1,
                    confirmText: "我知道了"
                }));
            }
        }, a = i, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "isVideoInfo",
        value: function(e) {
            if (1 !== e.detailType) {
                var t = e.imgDetail;
                this.showVideo = !t.vedioUrl, this.isimgInfo = !!t.vedioUrl, this.$apply();
            }
        }
    }, {
        key: "getUnionId",
        value: function(e) {
            return console.log("modiw"), new Promise(function(t, i) {
                var n = wx.getStorageSync("openid");
                if (!(e && e.detail.iv && e.detail.encryptedData && n)) return !1;
                var a = _path2.default.getUnionid, o = {
                    iv: e.detail.iv,
                    encryptedData: e.detail.encryptedData,
                    open_id: n
                };
                (0, _common.axios)({
                    url: a,
                    data: o
                }).then(function(e) {
                    var i = e.data;
                    0 === i.error_code ? (wx.setStorageSync("unid", i.data.union_id), t(i.data.union_id)) : (wx.showToast({
                        title: i.error_msg,
                        icon: "none",
                        duration: 1e3
                    }), t(!1));
                });
            });
        }
    }, {
        key: "buryXkdetail",
        value: function(e) {
            var t = 1 === e ? "去登录" : 2 === e ? "开始诊断" : "已有诊断推荐选择班级", i = {
                result: t
            };
            app.sensors.track("xkdetail_test_mini", i);
        }
    }, {
        key: "userAllowFunc",
        value: function(e) {
            var t = this;
            t.getConsumerInfo(e).then(function(e) {
                return e.token ? e.bind_phone ? e.complete ? void t.$emit("admission-diagnosis") : void wx.navigateTo({
                    url: "/pages/loginRelevant/cityclass?page=cityclass"
                }) : void wx.redirectTo({
                    url: "/pages/loginRelevant/bindphone"
                }) : void wx.navigateTo({
                    url: "/pages/loginRelevant/inputphone"
                });
            });
        }
    }, {
        key: "getConsumerInfo",
        value: function(e) {
            return new Promise(function(e, t) {
                var i = wx.getStorageSync("weChatExpress");
                if (i) return wx.getStorageSync("userInfoStatus") || (i.saved = !0, console.log("新数据缓存后", i), 
                wx.setStorageSync("userInfoStatus", i)), wx.setStorageSync("user-token", i.token), 
                void e(i);
                e("");
            });
        }
    }, {
        key: "userStatus",
        value: function() {
            4 === this.evaluation.status ? this.jumpList() : this.jumpWebView();
        }
    }, {
        key: "jumpList",
        value: function() {
            var e = this.detailsInfo, t = this.evaluationInfo, i = wx.getStorageSync("userInfoStatus").area_name || wx.getStorageSync("weChatExpress").area_name, n = wx.getStorageSync("userInfoStatus").area_code || wx.getStorageSync("weChatExpress").area_code, a = {
                area_name: i,
                area_code: n,
                gradeName: e.gradeName || "",
                gradeId: e.gradeId || "",
                gradeTypeId: e.gradeTypeId || "",
                gradeTypeName: e.gradeTypeName || "",
                subjectIds: e.subjectIds || "",
                subjectNames: e.subjectNames || "",
                levelId: t.levelId || "",
                levelName: t.levelName || "",
                termId: e.termId || "",
                termName: e.termName || ""
            }, o = JSON.stringify(a);
            this.buryXkdetail(), wx.navigateTo({
                url: "/pages/classlist/classlist?filter=" + o + "&toSelect=" + !0
            });
        }
    }, {
        key: "jumpWebView",
        value: function() {
            var e = this, t = this, i = this.evaluation.url, n = "", a = wx.getStorageSync("user-token") || "";
            if (this.buryXkdetail(2), !i) return void wx.showModal({
                title: "提示",
                content: "服务器出错啦，是否重新加载",
                showCancel: !1
            });
            a && (0, _common.getUtoken)(a).then(function(a) {
                var o = e.detailsInfo.degree, r = e.detailsInfo.id, s = {
                    utoken: a,
                    url: i,
                    levelId: o,
                    classId: r
                };
                getCheckUrl(i) && (n = e.setWebviewUrl(s, e.detailType), wx.setStorage({
                    key: "webViewUrl",
                    data: n,
                    success: function() {
                        t.loadSetPath({
                            share: t.isShare,
                            clickName: ""
                        }), wx.navigateTo({
                            url: "/pages/banner/banner"
                        });
                    }
                }));
            });
        }
    }, {
        key: "setWebviewUrl",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = e.utoken && -1 !== e.url.indexOf("?") ? "&" : "?", n = t ? "&detailtype=" + t : "";
            return "" + e.url + i + "utoken=" + e.utoken + "&levelid=" + e.levelId + "&classid=" + e.classId + "&wechat=wx" + n;
        }
    }, {
        key: "touristStatus",
        value: function() {
            this.loadSetPath({
                share: this.isShare,
                url: "detail",
                clickName: ""
            }), wx.navigateTo({
                url: "/pages/loginRelevant/inputphone"
            });
        }
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.share, i = void 0 !== t && t, n = e.url, a = void 0 === n ? "home" : n, o = e.mun, r = void 0 === o ? 0 : o, s = e.implement, l = void 0 !== s && s, u = e.clickName, c = void 0 === u ? "signup" : u;
            wx.setStorageSync("pagePath", {
                share: i,
                url: a,
                mun: r,
                implement: l,
                clickName: c
            });
        }
    }, {
        key: "funcFactory",
        value: function(e) {
            var t = e.detailType;
            this.detailType = t, this.burialOther(e), this.commonFactory(e.recrument), 1 === t ? this.onlineFactory(e) : this.otherFactory(e);
        }
    }, {
        key: "commonFactory",
        value: function(e) {
            this.recrument = e, this.recrument.detailDescImg = this.recrument.detailDescImg || [], 
            this.recrument.detailSuit = this.subStrMax(this.recrument.detailSuit, 100), this.recrument.detailTarget = this.subStrMax(this.recrument.detailTarget, 100);
        }
    }, {
        key: "subStrMax",
        value: function(e, t) {
            return e ? e.length <= t ? e : e.substr(0, t) + "..." : "";
        }
    }, {
        key: "onlineFactory",
        value: function(e) {
            this.courseInfo = e.courseInfo, this.moreCourseDetail = e.moreCourseDetail, this.suitableObject = e.courseInfo[0], 
            this.trainingTarget = e.courseInfo[1], this.detailType = e.detailType, this.onLineImgs = e.moreCourseDetail.courseImgDesc || [], 
            this.termId = e.termId, this.$apply();
        }
    }, {
        key: "burialOther",
        value: function(e) {
            var t = null, i = e.imgDetail || e.moreCourseDetail;
            for (var n in i) t = !(!i[n] && "[]" !== i[n]);
            app.sensors.track("applet_browse_detail", {
                detail: Number(t).toString()
            });
        }
    }, {
        key: "otherFactory",
        value: function(e) {
            this.termId = e.termId, this.detailType = e.detailType, this.detailImg = e.imgDetail.imageUrl || "", 
            this.coverUrl = e.imgDetail.coverUrl, this.imgDetail = e.imgDetail, this.evaluation = e.evaluation, 
            this.$apply();
        }
    }, {
        key: "isAuthorizes",
        value: function() {
            var e = wx.getStorageSync("unid");
            this.isGetbtn = !e;
        }
    }, {
        key: "onLoad",
        value: function() {
            this.isAuthorizes();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = detailsModule;