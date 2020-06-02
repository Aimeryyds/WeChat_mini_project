function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(i, n) {
                try {
                    var s = t[i](n), o = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
            }
            return a("next");
        });
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
});

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
}, _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _card = require("./../../components/CourseCard/card.js"), _card2 = _interopRequireDefault(_card), _index2 = require("./../../components/Loading/index.js"), _index3 = _interopRequireDefault(_index2), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _indexList = require("./../../components/Commons/indexList.js"), _indexList2 = _interopRequireDefault(_indexList), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _global = require("./../../common/util/global.js"), _common = require("./../../common/util/common.js"), app = getApp(), filterDataST = 0, choose = function(e) {
    function t() {
        var e, r, a, i;
        _classCallCheck(this, t);
        for (var n = arguments.length, s = Array(n), o = 0; o < n; o++) s[o] = arguments[o];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.config = {
            navigationBarTitleText: "学而思",
            enablePullDownRefresh: !0,
            onReachBottomDistance: 100,
            backgroundTextStyle: "dark"
        }, a.$repeat = {}, a.$props = {
            indexlist: {
                "v-bind:indexData.sync": "indexData"
            },
            indexlist1: {
                "v-bind:indexData.sync": "indexData1"
            },
            taltoast: {
                class: "toast"
            },
            card: {
                "xmlns:v-bind": "",
                "v-bind:teacherListNew.sync": "teacherListNew",
                "v-bind:cardInfo.sync": "cardInfo",
                bottomLine: "true",
                "xmlns:v-on": ""
            },
            LoadingView: {
                "v-bind:isLoading.sync": "isLoading"
            }
        }, a.$events = {
            indexlist: {
                "v-on:select": "selectTeacher"
            },
            indexlist1: {
                "v-on:select": "selectTotur"
            },
            card: {
                "v-on:classInfo": "goClassInfo",
                "v-on:registIndex": "registIndex"
            }
        }, a.components = {
            indexlist: _indexList2.default,
            indexlist1: _indexList2.default,
            taltoast: _toast2.default,
            card: _card2.default,
            LoadingView: _index3.default
        }, a.data = {
            isLoading: !0,
            isNewUser: !1,
            isLoad: !1,
            pageone: "",
            isUser: !1,
            swiperinfo: {
                isLoad: !1,
                current: 0,
                indicatorColor: " rgba(255, 255, 255, 0.9)",
                isIndicatorDots: !0,
                indicatorActiveColor: "rgba(0, 0, 0, 0.4)",
                isAutoplay: !0,
                interval: "3000",
                circular: !0
            },
            isGetbtn: !1,
            screenInfo: {
                grd_id: "",
                grd_name: "",
                cla_gt_name: "",
                cla_gt_id: "",
                city_code: "",
                city_name: ""
            },
            bannerUrl: "",
            breakoff: !1,
            transparentMask: !0,
            address: [],
            secondAddress: [],
            thirdAddress: [],
            teacherList: [],
            cardInfo: [],
            willChangeClass: [],
            claCourseType: [],
            claTime: [],
            loadingWord: "",
            refresh: !1,
            filterHidden: !0,
            mainTeacher: !0,
            classArea: !0,
            tutor: !0,
            blue1: !1,
            blue2: !1,
            blue3: !1,
            grade: "",
            gradeId: "",
            array: [ [ "a", "b" ], [ "c", "d" ] ],
            multiIndex: [ 0, 0 ],
            indexData: {},
            indexData1: {},
            gradeArray: [ [], [] ],
            multiArray: [],
            subIndex: 0,
            subject: [],
            termIndex: 0,
            term: [],
            claIndex: 0,
            cla: [],
            filter: {
                subject: "学科",
                subjectId: "",
                term: "学期",
                termId: "",
                level: "班次",
                levelId: "",
                classType: "",
                classTypeId: "",
                classTime: "",
                classTimeId: "",
                classArea: "不限",
                classAreaId: "",
                teacher: "不限",
                teacherId: "",
                tutor: "不限",
                tutorId: "",
                fullClass: 0
            },
            claId: "",
            count: 0,
            waitcount: 0,
            tutorDisabled: !0,
            listIndex: 0,
            page: "1",
            url: "",
            gradeName: "",
            areaCode: "",
            nextArray: [],
            bottomLoadShow: !1,
            isShare: !1,
            isNew: !0,
            pressTimer: null,
            longPressDone: !1,
            bannersArr: [],
            timer: null,
            streams: {
                isHide: !1,
                margin: 0
            },
            teacherListNew: [],
            BubbleSort: !0,
            imgUrls: [],
            bannerDefaultImg: "https://static-xesapi.speiyou.cn/1529481576102.png",
            materialUrls: [],
            filterData: {},
            images: {
                avatar: "http://static-xesapi.speiyou.cn/1546845297813.png",
                triangle: "http://static-xesapi.speiyou.cn/1546845575320.png",
                actTriangle: "http://static-xesapi.speiyou.cn/1546845653797.png"
            },
            strengTutor: !1,
            isCompleteFilter: !1,
            pagesize: 10
        }, a.computed = {
            sumcont: function() {
                var e = this.waitcount + this.count;
                return e >= 100 ? "99+" : e;
            },
            addsumcont: function() {
                var e = this.waitcount + this.count, t = e.toString().length;
                return 1 === t ? "" : 2 === t ? "double-mun" : "infinite-mun";
            }
        }, a.methods = {
            tapSelector: function(e) {
                app.XesAnalyticsMP.track("132-1190", {
                    type: e
                });
            },
            getUserInfoFn: function(e) {
                this.loadSetPath(this.isShare, "personinfo"), this.getUnionIdCode(e);
            },
            Jumpcity: function() {
                if (!wx.getStorageSync("user-token") && !0) return void wx.navigateTo({
                    url: "/pages/openCity/openCity?url=classlist"
                });
                wx.showModal({
                    title: "",
                    content: "已登录用户暂不支持切换城市  如需帮助，请联系客服10108899",
                    showCancel: !1,
                    confirmText: "我知道了"
                });
            },
            tapbanner: function() {
                function e(e, r) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    var a, i, n, s;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (a = this.materialUrls[t], i = !1, a && a.indexOf("evaluation") > -1 && (i = this.getStorageUnid(a)), 
                            n = this.urlisValid(a), this.loadSetPath(), !(i && n && this.BubbleSort && r)) {
                                e.next = 12;
                                break;
                            }
                            if (this.BubbleSort = !1, !(s = this.getConsumerInfo())) {
                                e.next = 11;
                                break;
                            }
                            return this.tapDecide(s, t), e.abrupt("return");

                          case 11:
                            wx.redirectTo({
                                url: "/pages/loginRelevant/inputphone"
                            });

                          case 12:
                            r || this.bannerToOther(t);

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            tapHandler: function() {
                this.longPressDone || (this.getuserStatus(), this.isUserStatePath()), app.XesAnalyticsMP.track("132-1182");
            },
            ImgError: function(e) {
                this.imgUrls[e] = this.bannerDefaultImg;
            },
            touchstartHandler: function() {
                this.pressTimer && clearTimeout(this.pressTimer), this.timeClock(4), this.longPressDone = !1;
            },
            touchendHandler: function() {
                this.pressTimer && clearTimeout(this.pressTimer);
            },
            completeFilter: function() {
                this.isCompleteFilter = !0, this.setFilterFinish(), wx.startPullDownRefresh();
            },
            addThird: function(e, t) {
                this.filterActStatus(this.thirdAddress, t), this.setThirdPlace(this.thirdAddress, t), 
                this.getFilterData();
            },
            addSecond: function(e, t) {
                this.filterActStatus(this.secondAddress, t), this.setSecondPlace(e);
            },
            addFirst: function(e, t) {
                this.filterActStatus(this.address, t), this.setFirstPlace(e);
            },
            tapShow: function() {
                this.filter.fullClass = 0 === this.filter.fullClass ? 1 : 0, this.getFilterData();
            },
            reset: function() {
                this.resetFilter(), this.getFilterData();
            },
            selectClass: function(e, t) {
                this.filterActStatus(this.claCourseType, e), this.filter.classTypeId = t.id, this.getFilterData();
            },
            selectTime: function(e, t) {
                this.filterActStatus(this.claTime, e), this.filter.classTimeId = t.id, this.getFilterData();
            },
            chooseGrade: function() {
                app.XesAnalyticsMP.view("132-1184");
            },
            bindMultiPickerChange: function(e) {
                this.gradeChanging(e), this.updateStorage(), this.resetInfo(), this.getBannerImg(), 
                this.resetFilter(), this.getClassList(), this.getSubTermCla(), wx.startPullDownRefresh(), 
                app.XesAnalyticsMP.track("132-1183", {
                    grade_name: this.screenInfo.grd_name,
                    gradeid: this.screenInfo.grd_id
                });
            },
            bindMultiPickerColumnChange: function(e) {
                var t = {
                    column: e.detail.column,
                    value: e.detail.value
                };
                if (!t.column && this.multiArray[t.value]) {
                    var r = this.multiArray[t.value].data, a = [];
                    r.forEach(function(e) {
                        a.push({
                            grd_id: e.grd_id,
                            name: e.grd_name,
                            cla_gt_name: e.cla_gt_name,
                            cla_gt_id: e.cla_gt_id
                        });
                    }), this.gradeArray[1] = a;
                }
            },
            subjectChange: function(e) {
                this.setSubject(e), this.resetFilter(), this.getSubTermCla(), this.pageScrollTops(), 
                wx.startPullDownRefresh(), app.XesAnalyticsMP.track("132-1189", {
                    value: this.filter.subject
                });
            },
            termChange: function(e) {
                this.setTerm(e), this.resetFilter(), this.getSubTermCla(), this.pageScrollTops(), 
                wx.startPullDownRefresh(), app.XesAnalyticsMP.track("132-1189", {
                    value: this.filter.term
                });
            },
            claChange: function(e) {
                this.setCla(e), this.resetFilter(), this.getSubTermCla(), this.pageScrollTops(), 
                wx.startPullDownRefresh(), app.XesAnalyticsMP.track("132-1189", {
                    value: this.filter.level
                });
            },
            filter: function() {
                this.setFilterFinish();
            },
            showFileter: function() {
                this.filterHidden = !1, this.getFilterData(), app.XesAnalyticsMP.track("132-1188");
            },
            teacher: function(e) {
                this.mainTeacher = this.teaAreaShowHide(this.mainTeacher, e);
            },
            classArea: function(e) {
                this.classArea = this.teaAreaShowHide(this.classArea, e);
            },
            tutor: function(e) {
                this.tutor = this.teaAreaShowHide(this.tutor, e);
            },
            selectTeacher: function(e) {
                this.setTeacher(e), this.getFilterData();
            },
            selectTotur: function(e) {
                this.setTotur(e), this.getFilterData();
            },
            goClassInfo: function(e) {
                var t = this.getAreaCode();
                return "1" === e.classType ? void wx.navigateTo({
                    url: "classdetail/online?classId=" + e.classId + "&courseId=" + e.courseId + "&areaCode=" + t + "&route=classlist"
                }) : "4" === e.classType ? void wx.navigateTo({
                    url: "classdetail/offline?classId=" + e.classId + "&areaCode=" + t + "&route=classlist"
                }) : void ("2" === e.classType && wx.navigateTo({
                    url: "classdetail/double?classId=" + e.classId + "&areaCode=" + t + "&route=classlist"
                }));
            },
            registIndex: function(e) {
                this.listIndex = e;
            }
        }, i = r, _possibleConstructorReturn(a, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "isUserStatePath",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = wx.getStorageSync("unid") || "", r = wx.getStorageSync("user-token") || "", 
                        a = wx.getStorageSync("userInfoStatus") || "", t || this.BubbleSort) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return");

                      case 5:
                        if (this.BubbleSort = !1, !a.complete || !r) {
                            e.next = 9;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/personcenter/personinfo"
                        }), e.abrupt("return");

                      case 9:
                        if (r) {
                            e.next = 13;
                            break;
                        }
                        return this.BubbleSort = !0, wx.navigateTo({
                            url: "/pages/loginRelevant/inputphone"
                        }), e.abrupt("return");

                      case 13:
                        if (i = this.getConsumerInfo(), !r || i) {
                            e.next = 17;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/inputphone"
                        }), e.abrupt("return");

                      case 17:
                        if (!r || !i || i.bind_phone) {
                            e.next = 20;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevantbindphone"
                        }), e.abrupt("return");

                      case 20:
                        if (!r || !i || i.complete) {
                            e.next = 23;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/cityclass"
                        }), e.abrupt("return");

                      case 23:
                        wx.navigateTo({
                            url: "/pages/personcenter/personinfo"
                        });

                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getUnionId",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, i, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = this, a = wx.getStorageSync("openid"), i = _path2.default.getUnionid, n = {
                            iv: t.detail.iv,
                            encryptedData: t.detail.encryptedData,
                            open_id: a
                        }, t && t.detail.iv && t.detail.encryptedData && a) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 6:
                        return e.abrupt("return", new Promise(function(e, t) {
                            (0, _common.axios)({
                                url: i,
                                data: n
                            }).then(function(t) {
                                t = t || {};
                                var a = t.data;
                                if (a && a.data && !a.error_code) return wx.setStorageSync("unid", a.data.union_id), 
                                r.BubbleSort = !0, r.$apply(), void e(a.data.union_id);
                                wx.showToast({
                                    title: a.error_msg,
                                    icon: "none",
                                    duration: 1e3
                                }), r.BubbleSort = !0, r.$apply(), e(!1);
                            });
                        }));

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getUnionIdCode",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = wx.getStorageSync("unid") || "", a = t.detail, i = null, !("encryptedData" in a && r && this.BubbleSort)) {
                            e.next = 8;
                            break;
                        }
                        return app.sensors.track("allow_sq", {
                            allow_sq: "允许授权"
                        }), this.BubbleSort = !1, this.userAllowFunc(r), e.abrupt("return");

                      case 8:
                        if (!("encryptedData" in a && !r && this.BubbleSort)) {
                            e.next = 18;
                            break;
                        }
                        return app.sensors.track("allow_sq", {
                            allow_sq: "允许授权"
                        }), this.BubbleSort = !1, e.next = 13, _wepy2.default.$instance.globalData.again();

                      case 13:
                        return e.next = 15, this.getUnionId(t);

                      case 15:
                        return i = e.sent, i && this.userAllowFunc(i), e.abrupt("return");

                      case 18:
                        "encryptedData" in a || (app.sensors.track("refuse_sq", {
                            refuse_sq: "拒绝授权"
                        }), wx.showModal({
                            title: "",
                            content: "为了保证您能体验学而思的完整服务，请允许获取您的公开信息",
                            showCancel: !1,
                            confirmText: "我知道了"
                        }));

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "updateStorage",
        value: function() {
            var e = this.screenInfo, t = wx.getStorageSync("weChatExpress") || {};
            t && (t.grade = e.grd_id, t.grade_name = e.grd_name, wx.setStorageSync("weChatExpress", t));
        }
    }, {
        key: "tapDecide",
        value: function(e, t) {
            var r = this;
            return e ? void this.bannerToTest(t) : e && !e.bind_phone ? void wx.navigateTo({
                url: "/pages/loginRelevant/bindphone",
                complete: function() {
                    r.BubbleSort = !0;
                }
            }) : e && !e.complete ? void wx.navigateTo({
                url: "/pages/loginRelevant/cityclass",
                complete: function() {
                    r.BubbleSort = !0;
                }
            }) : void wx.navigateTo({
                url: "/pages/loginRelevant/inputphone",
                complete: function() {
                    r.BubbleSort = !0;
                }
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                path: this.getSharePath()
            };
        }
    }, {
        key: "onUnload",
        value: function() {
            wx.removeStorageSync("breakoff"), wx.removeStorageSync("webViewUrl"), this.pressTimer && clearTimeout(this.pressTimer);
        }
    }, {
        key: "onPageScroll",
        value: function(e) {
            this.streams.isHide = e.scrollTop > 30, this.swiperinfo.isAutoplay = !this.streams.isHide, 
            this.$apply();
        }
    }, {
        key: "getConsumerInfo",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus") || null;
            return this.BubbleSort = !0, this.getRegistListcount(), this.$apply(), e;
        }
    }, {
        key: "mergeConsumerInfo",
        value: function(e) {
            var t = {
                applet_user_city: e.area_name,
                applet_user_grade: e.grade_name,
                applet_student_id: e.stu_id,
                applet_user_sex: "男",
                applet_union_id: wx.getStorageSync("unid"),
                applet_user_name: e.name,
                openid: wx.getStorageSync("openid")
            };
            app.sensors.login(e.stu_id), app.sensors.setProfile(t);
            var r = {
                user_id: e.stu_id,
                user_name: e.name,
                city: e.area_name,
                city_code: e.area_code,
                grade_id: e.grade,
                grade: e.grade_name,
                union_id: e.union_id || wx.getStorageSync("unid")
            };
            app.XesAnalyticsMP.setProfile(r);
        }
    }, {
        key: "replaceToken",
        value: function(e) {
            var t = this;
            return new Promise(function(r, a) {
                var i = _path2.default.replaceToken, n = {
                    authorization: e
                };
                (0, _common.axios)({
                    url: i,
                    header: n
                }).then(function(e) {
                    if (e && e.data && 0 === e.data.error_code) {
                        var a = e.data.data, i = a.utoken;
                        return void r(i);
                    }
                    r(!1), e && e.data && wx.showToast({
                        title: e.data.error_msg || "系统开小差",
                        icon: "none",
                        duration: 2e3,
                        complete: function() {
                            t.BubbleSort = !0;
                        }
                    });
                });
            });
        }
    }, {
        key: "bannerNote",
        value: function(e) {
            app.sensors.track("applet_click_banner", {
                applet_click_banner: "点击BANNER",
                url: e
            });
        }
    }, {
        key: "bannerToTest",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a, i, n, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = this, a = wx.getStorageSync("user-token"), e.next = 4, this.replaceToken(a);

                      case 4:
                        if (i = e.sent) {
                            e.next = 8;
                            break;
                        }
                        return wx.redirectTo({
                            url: "/pages/loginRelevant/inputphone"
                        }), e.abrupt("return");

                      case 8:
                        n = r.materialUrls[t], s = i && -1 !== n.indexOf("?") ? n + "&utoken=" + i : n + "?utoken=" + i, 
                        wx.setStorageSync("webViewUrl", s), r.bannerNote(n), wx.navigateTo({
                            url: "/pages/banner/banner",
                            complete: function() {
                                r.BubbleSort = !0;
                            }
                        });

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "bannerToOther",
        value: function(e) {
            var t = this;
            t.bannerUrl = t.materialUrls[e], wx.setStorageSync("webViewUrl", t.bannerUrl), t.bannerNote(t.bannerUrl), 
            wx.navigateTo({
                url: "/pages/banner/banner",
                complete: function(e) {
                    t.BubbleSort = !0;
                }
            });
        }
    }, {
        key: "getAccreditInfo",
        value: function(e) {
            return new Promise(function(e) {
                var t = wx.getStorageSync("weChatExpress");
                if (t) return wx.getStorageSync("userInfoStatus") || (t.saved = !0, wx.setStorageSync("userInfoStatus", t)), 
                wx.setStorageSync("user-token", t.token), void e(t);
                e("");
            });
        }
    }, {
        key: "userAllowFunc",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = this, wx.showLoading({
                            title: "",
                            mask: !0
                        }), e.next = 4, r.getAccreditInfo(t);

                      case 4:
                        if (a = e.sent, wx.hideLoading(), a.token) {
                            e.next = 9;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/inputphone"
                        }), e.abrupt("return");

                      case 9:
                        if (a.bind_phone) {
                            e.next = 12;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/bindphone"
                        }), e.abrupt("return");

                      case 12:
                        if (a.complete) {
                            e.next = 15;
                            break;
                        }
                        return wx.navigateTo({
                            url: "/pages/loginRelevant/cityclass?page=cityclass"
                        }), e.abrupt("return");

                      case 15:
                        this.mergeConsumerInfo(a), wx.navigateTo({
                            url: "/pages/personcenter/personinfo"
                        });

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onReachBottom",
        value: function() {
            this.bottomLoadShow = !0, this.getClassList("more");
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            wx.getStorageSync("userInfoStatus").stu_id && this.getRegistListcount(), this.getClassList(), 
            this.getBannerImg();
        }
    }, {
        key: "resetFilter",
        value: function() {
            this.resetFilterFunc(this.claCourseType), this.filter.classTypeId = "", this.resetFilterFunc(this.claCourseType), 
            this.filter.classTimeId = "", this.filter.classArea = "不限", this.resetFilterFunc(this.claCourseType), 
            this.secondAddress = [], this.thirdAddress = [], this.filter.classAreaId = "", this.filter.teacher = "不限", 
            this.filter.teacherId = "", this.filter.tutor = "不限", this.filter.tutorId = "", 
            this.filter.fullClass = 0, this.$apply();
        }
    }, {
        key: "resetFilterFunc",
        value: function(e) {
            e.forEach(function(e) {
                e.checked = !1;
            });
        }
    }, {
        key: "getAreaCode",
        value: function() {
            var e = this.isShare, t = this.screenInfo.city_code || "", r = wx.getStorageSync("userInfoStatus").area_code || "", a = wx.getStorageSync("weChatExpress").area_code || "";
            if (!e) return r || a || "";
            if (t) {
                return t;
            }
            if (r) {
                return r;
            }
            if (a) {
                return a;
            }
        }
    }, {
        key: "getGradeList",
        value: function() {
            var e = this, t = this, r = wx.getStorageSync("weChatExpress") || {}, a = r.area_code, i = r.grade, n = this.screenInfo.city_code || a, s = _path2.default.new_gradelists, o = {
                area_code: n
            };
            (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                url: s,
                data: o
            }).then(function(r) {
                r = r || {};
                var a = r.data || {};
                if (a && !a.error_code) {
                    var n = e.screenInfo.grd_id || i, s = a.data, o = [];
                    if ("[object Array]" === toString.call(s)) {
                        if (!s.length) return t.gradeArray = [ [], [] ], t.multiArray = [], void t.$apply();
                        s.forEach(function(e, t) {
                            var r = {};
                            r.id = e.id, r.name = e.name, "[object Array]" === toString.call(e.grades) && (r.data = [], 
                            e.grades.forEach(function(t) {
                                var a = {};
                                a.grd_id = t.id, a.grd_name = t.name, a.cla_gt_id = e.id, a.cla_gt_name = e.name, 
                                r.data.push(a);
                            })), o.push(r);
                        });
                    }
                    return e.multiArray = o, e.initMultiGradeList(n), e.initNextGradeList(t.nextArray), 
                    e.grade || (e.nextArray = e.multiArray[0] && e.multiArray[0].data || [], e.initNextGradeList(e.nextArray)), 
                    void t.$apply();
                }
                wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "initMultiGradeList",
        value: function(e) {
            var t = this;
            t.gradeArray[0] = [], t.multiArray.forEach(function(e) {
                t.gradeArray[0].push({
                    id: e.id,
                    name: e.name
                });
            }), t.multiArray.forEach(function(r, a) {
                r.data.forEach(function(r, i) {
                    r.grd_id === e && (t.nextArray = t.multiArray[a].data, t.multiIndex[0] = a, t.multiIndex[1] = i, 
                    t.grade = r.grd_name);
                });
            });
        }
    }, {
        key: "initNextGradeList",
        value: function(e) {
            var t = [];
            e.forEach(function(e) {
                t.push({
                    grd_id: e.grd_id,
                    name: e.grd_name,
                    cla_gt_name: e.cla_gt_name,
                    cla_gt_id: e.cla_gt_id
                });
            }), this.gradeArray[1] = t;
        }
    }, {
        key: "setThirdPlace",
        value: function(e, t) {
            this.filter.classArea = e[t].name, this.filter.classAreaId = e[t].id, this.classArea = !0;
        }
    }, {
        key: "setSecondPlace",
        value: function(e) {
            this.thirdAddress = e.venue;
        }
    }, {
        key: "setFirstPlace",
        value: function(e) {
            this.secondAddress = e.dept, this.thirdAddress = [];
        }
    }, {
        key: "filterActStatus",
        value: function(e, t) {
            e.forEach(function(e) {
                e.checked = !1;
            }), e[t].checked = !0;
        }
    }, {
        key: "teaAreaShowHide",
        value: function(e, t) {
            return !("0" === t);
        }
    }, {
        key: "setSubject",
        value: function(e) {
            this.subIndex = e.detail.value, this.blue1 = !1, this.filter.subject = this.subject[this.subIndex].name, 
            this.filter.subjectId = this.subject[this.subIndex].id;
        }
    }, {
        key: "setTerm",
        value: function(e) {
            this.termIndex = e.detail.value, this.blue2 = !1, this.filter.term = this.term[this.termIndex].name, 
            this.filter.termId = this.term[this.termIndex].id;
        }
    }, {
        key: "setCla",
        value: function(e) {
            this.claIndex = e.detail.value, this.blue3 = !1, this.filter.level = this.cla[this.claIndex].name, 
            this.filter.levelId = this.cla[this.claIndex].id;
        }
    }, {
        key: "setTeacher",
        value: function(e) {
            this.filter.teacher = e.teaName, this.filter.teacherId = e.teaEmpNo, this.mainTeacher = !0;
        }
    }, {
        key: "setTotur",
        value: function(e) {
            this.filter.tutor = e.teaName, this.filter.tutorId = e.teaEmpNo, this.tutor = !0;
        }
    }, {
        key: "setFilterFinish",
        value: function() {
            this.filterHidden = !0, this.mainTeacher = !0, this.tutor = !0, this.classArea = !0;
        }
    }, {
        key: "gradeChanging",
        value: function(e) {
            this.multiIndex = e.detail.value, this.screenInfo.grd_name = this.gradeArray[1][this.multiIndex[1]].name, 
            this.screenInfo.grd_id = this.gradeArray[1][this.multiIndex[1]].grd_id, this.$apply();
        }
    }, {
        key: "setFilter",
        value: function(e, t) {
            var r = e.findIndex(function(e, r) {
                if (e.name === t) return r;
            });
            return r < 0 ? 0 : r;
        }
    }, {
        key: "getSubTermCla",
        value: function() {
            var e = this, t = this, r = _path2.default.getSemesterShift, a = wx.getStorageSync("weChatExpress") || {}, i = a.area_code, n = a.grade, s = {
                area_code: this.screenInfo.city_code || i,
                grade_id: this.screenInfo.grd_id || n,
                term_id: this.filter.termId || 9999,
                level_id: this.filter.levelId || 9999,
                subject_id: this.filter.subjectId || 9999,
                ast_ids: "short"
            };
            (0, _global.isHaveObjectValue)(s) && (0, _common.axios)({
                url: r,
                data: s
            }).then(function(r) {
                var a = r.data;
                if (a && 0 === a.error_code) {
                    var i = a.data;
                    return t.subject = i.subject ? i.subject : [ {
                        name: "不限",
                        id: 9999
                    } ], t.term = i.term ? i.term : [ {
                        name: "不限",
                        id: 9999
                    } ], t.cla = i.level ? i.level : [ {
                        name: "不限",
                        id: 9999
                    } ], e.subIndex = t.setFilter(t.subject, e.filter.subject), e.termIndex = t.setFilter(t.term, e.filter.term), 
                    e.claIndex = t.setFilter(t.cla, e.filter.level), void t.$apply();
                }
                wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "timeClock",
        value: function(e) {
            var t = this;
            this.longPressDone = !0, this.pressTimer = setTimeout(function() {
                if (e--, t.$apply(), t.$invoke("taltoast", "show", {
                    message: e,
                    duration: 1e3
                }), 1 === e) return clearTimeout(t.pressTimer), t.$parent.globalData.classListFilter = t.getSharePath(!0), 
                void wx.navigateTo({
                    url: "/pages/internal/qrcode"
                });
                t.timeClock(e);
            }, 1e3);
        }
    }, {
        key: "getFilterData",
        value: function() {
            var e = this;
            filterDataST && clearTimeout(filterDataST), filterDataST = setTimeout(function() {
                e._getFilterData(), filterDataST = 0;
            }, 200);
        }
    }, {
        key: "_getFilterData",
        value: function() {
            var e = this;
            wx.showToast({
                icon: "loading",
                mask: !0,
                title: "加载中..."
            });
            var t = this, r = _path2.default.querysearchcondition, a = wx.getStorageSync("weChatExpress") || {}, i = a.area_code, n = a.grade, s = {
                area_code: this.screenInfo.city_code || i,
                tea_id: this.filter.teacherId || 9999,
                tutor_tea_id: this.filter.tutorId || 9999,
                course_type: this.filter.classTypeId,
                time_type: this.filter.classTimeId,
                venue_id: this.filter.classAreaId,
                subject_ids: this.filter.subjectId || 9999,
                level_ids: this.filter.levelId || 9999,
                term: this.filter.termId || 9999,
                grade_id: this.screenInfo.grd_id || n,
                year: "",
                cla_biz_type: ""
            };
            (0, _common.axios)({
                url: r,
                data: s
            }).then(function(r) {
                if (wx.hideToast(), r && r.data && r.data.data && 0 === r.data.error_code) {
                    var a = r.data, i = a.data, n = i.claCourseType;
                    e.strengTutor = i.strengTutor;
                    var s = !1, o = {}, c = {};
                    e.claCourseType = [], n.forEach(function(t) {
                        e.claCourseType.push({
                            id: t.id,
                            type: t.name
                        });
                    }), t.initClaTypeTime(e.claCourseType, e.filter.classTypeId);
                    var l = i.time;
                    e.claTime = [], l.forEach(function(t) {
                        e.claTime.push({
                            id: t.claTimeId,
                            name: t.claTimeClassify
                        });
                    }), t.initClaTypeTime(e.claTime, e.filter.classTimeId), e.address = i.address ? i.address : [], 
                    e.address.length && (e.address.forEach(function(t) {
                        t.dept.forEach(function(r) {
                            r.venue.forEach(function(a) {
                                a.id === e.filter.classAreaId && (s = !0, t.checked = !0, o = t.dept, r.checked = !0, 
                                c = r.venue, a.checked = !0);
                            });
                        });
                    }), !s && t.initActClassAreaCode(), t.secondAddress = o, t.thirdAddress = c), e.indexData = i.new_teacher, 
                    e.filter.teacherId ? t.initTeaTutorFilter(i.new_teacher, e.filter.teacherId) : e.indexData["#"] && t.initTeaTutor(e.indexData["#"][0], e.filter.teacher, e.filter.teacherId), 
                    e.indexData1 = i.new_tutor, e.filter.tutorId ? t.initTeaTutorFilter(i.new_tutor, e.filter.tutorId) : e.indexData1["#"] && t.initTeaTutor(e.indexData1["#"][0], e.filter.tutor, e.filter.tutorId), 
                    "{}" === JSON.stringify(e.indexData1) && (e.indexData1 = []), "{}" === JSON.stringify(e.indexData) && (e.indexData = []), 
                    e.$apply();
                }
            });
        }
    }, {
        key: "initClaTypeTime",
        value: function(e, t) {
            e.forEach(function(e) {
                e.id === t && (e.checked = !0);
            });
        }
    }, {
        key: "initTeaTutorFilter",
        value: function(e, t) {
            Object.keys(e).forEach(function(r) {
                e[r].forEach(function(e) {
                    e.teaEmpNo === t && (e.checked = !0);
                });
            });
        }
    }, {
        key: "initTeaTutor",
        value: function(e, t, r) {
            e.checked = !0, e.teaName, e.teaEmpNo;
        }
    }, {
        key: "initActClassAreaCode",
        value: function() {
            this.address[0].checked = !0, this.secondAddress = this.address[0].dept, this.secondAddress[0].checked = !0, 
            this.thirdAddress = this.secondAddress[0].venue, this.thirdAddress[0].checked = !0;
        }
    }, {
        key: "getClassList",
        value: function(e) {
            var t = this, r = this, a = _path2.default.searchclass;
            this.transparentMask = !1, this.page = e ? ++this.page : 1;
            var i = wx.getStorageSync("weChatExpress") || {}, n = i.area_code, s = i.grade;
            this.$apply();
            var o = {
                areaCode: this.screenInfo.city_code || n,
                astIds: "short",
                update: 2,
                platform: "iOS",
                mode: 2,
                limit: 10,
                subjectIds: this.filter.subjectId || 9999,
                term: this.filter.termId || 9999,
                page: this.page,
                gradeId: this.screenInfo.grd_id || s,
                levelIds: this.filter.levelId || 9999,
                isHiddenFull: this.filter.fullClass,
                teaId: this.filter.teacherId || 9999,
                tutorTeaId: this.filter.tutorId || 9999,
                timeType: this.filter.classTimeId || "",
                claCourseType: this.filter.classTypeId || "",
                venueId: this.filter.classAreaId || ""
            }, c = {
                authorization: wx.getStorageSync("user-token") || ""
            };
            o.areaCode && (0, _common.axios)({
                url: a,
                data: o,
                header: c
            }).then(function(e) {
                e = e || {};
                var a = e.data;
                if (wx.stopPullDownRefresh(), a && 0 === a.error_code) {
                    t.transparentMask = !0, t.bottomLoadShow = !1;
                    var i = [];
                    if (!(i = a.data && a.data.data && a.data.data.rows)) return t.cardInfo = [], t.loadingWord = "", 
                    void t.$apply();
                    r.filterLoadList(i), t.sendAnalytics(a.data.data);
                }
            });
        }
    }, {
        key: "sendAnalytics",
        value: function(e) {
            var t = "";
            switch (this.filter.classTypeId) {
              case 1:
                t = "在线";
                break;

              case 2:
                t = "双师";
                break;

              case 4:
                t = "面授";
            }
            if (app.XesAnalyticsMP.view("132-1191", {
                subject_name: this.filter.subject,
                subject_id: this.filter.subjectId,
                num: (e.pageIndex - 1) * this.pagesize + e.pageSize,
                term_name: this.filter.term,
                term_id: this.filter.termId,
                level_name: this.filter.level,
                level_id: this.filter.levelId,
                course_type: t,
                from: ""
            }), this.isCompleteFilter) {
                this.isCompleteFilter = !this.isCompleteFilte;
                var r = "";
                this.claTime.forEach(function(e) {
                    e.checked && (r = e.name);
                }), app.XesAnalyticsMP.track("132-1187", {
                    course_type: t,
                    time: r,
                    venue_name: "不限" !== this.filter.classArea ? this.filter.classArea : "",
                    teacher: "不限" !== this.filter.teacher ? this.filter.teacher : "",
                    tutor: "不限" !== this.filter.tutor ? his.filter.tutor : "",
                    is_full: this.filter.fullClass,
                    num: e.totalCount
                });
            }
        }
    }, {
        key: "pageScrollTops",
        value: function() {
            "Android" === wx.getStorageSync("userAttribute").system && wx.pageScrollTo({
                scrollTop: 0,
                duration: 300
            });
        }
    }, {
        key: "filterLoadList",
        value: function(e) {
            var t = this, r = /(^http|^https)/;
            e.length >= 10 ? this.loadingWord = "正在加载" : this.loadingWord = "", e.length < 10 && (this.loadingWord = "已经到底啦", 
            this.$apply()), 1 === this.page && (this.cardInfo = []), e.forEach(function(e, r) {
                t.cardInfo.push(e);
            }), this.cardInfo.forEach(function(e, a) {
                "" !== e.tutor_picture_url && (r.test(e.tutor_picture_url) ? e.tutor_picture_url = e.tutor_picture_url : e.tutor_picture_url = "" + e.domain + t.getString(e.tutor_picture_url)), 
                "[object Array]" === toString.call(e.tutors) && e.tutors.forEach(function(r, i) {
                    t.cardInfo[a].tutors[i] = {
                        tutorId: r.tutorId,
                        tutorSysName: r.tutorSysName,
                        tutorPictureUrl: t.getString(r.tutorPictureUrl) ? e.domain + t.getString(r.tutorPictureUrl) : r.tutorPictureUrl,
                        tutorEmpNo: r.tutorEmpNo,
                        accountType: r.accountType,
                        teacherType: r.teacherType
                    };
                }), "[object Array]" === toString.call(e.teachers) && e.teachers.forEach(function(r, i) {
                    t.cardInfo[a].teachers[i] = {
                        teacherId: r.teacherId,
                        teacherName: r.teacherName,
                        teacherPictureUrl: t.getString(r.teacherPictureUrl) ? e.domain + t.getString(r.teacherPictureUrl) : r.teacherPictureUrl,
                        teacherEmpNo: r.teacherEmpNo,
                        accountType: r.accountType,
                        teacherType: r.teacherType
                    };
                });
            }), 0 === this.cardInfo.length && (this.loadingWord = ""), this.$apply();
        }
    }, {
        key: "getSelectedClassListCount",
        value: function() {
            var e = this, t = wx.getStorageSync("userInfoStatus"), r = _path2.default.getunpaidordernum, a = {
                area_code: t.area_code
            }, i = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, a, i)) && (0, _common.axios)({
                url: r,
                data: a,
                header: i
            }).then(function(t) {
                t = t || {};
                var r = t.data;
                r && r.data && 0 === r.error_code ? (e.waitcount = r.data.count, e.$apply()) : wx.showModal({
                    title: "提示",
                    cancelText: "重试",
                    content: r.error_msg || "出错了，请稍后再试",
                    success: function(t) {
                        t.cancel && e.getRegistListcount();
                    }
                });
            });
        }
    }, {
        key: "getRegistListcount",
        value: function() {
            var e = this, t = wx.getStorageSync("userInfoStatus"), r = _path2.default.getPurchaseNumber, a = "", i = {
                area_code: t.area_code || "",
                stu_id: t.stu_id || ""
            }, n = {
                authorization: wx.getStorageSync("user-token")
            };
            (0, _global.isHaveObjectValue)(_extends({}, i, n)) && (0, _common.axios)({
                url: r,
                data: i,
                header: n
            }).then(function(t) {
                t = t || {};
                var r = t.data;
                if (!Array.isArray(r) || r.length) return 0 === r.error_code ? (a = r.data.count, 
                e.count = a, e.$apply(), void e.getSelectedClassListCount()) : void wx.showModal({
                    title: "提示",
                    cancelText: "重试",
                    content: r.error_msg || "出错了，请稍后再试",
                    success: function(t) {
                        t.cancel && e.getRegistListcount();
                    }
                });
            });
        }
    }, {
        key: "getString",
        value: function(e) {
            var t = /^(http|https)/;
            return e ? t.test(e) ? "" : e.split(",")[0] : "";
        }
    }, {
        key: "getSharePath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = wx.getStorageSync("weChatExpress"), r = t.area_code, a = t.area_name, i = t.grade, n = t.grade_name, s = this, o = JSON.stringify(this.filter);
            return this.isShare || (s.screenInfo.city_code = r), e && (s.$parent.globalData.classListFilterObject = {
                areaCode: s.screenInfo.city_code,
                areaName: s.screenInfo.city_name,
                gradeId: s.screenInfo.grd_id,
                gradeName: s.screenInfo.grd_name,
                filter: s.filter
            }), "/pages/classlist/classlist?city_code=" + r + "&city_name=" + a + "&grd_id=" + i + "&filter=" + o + "&grd_name=" + n;
        }
    }, {
        key: "urlisValid",
        value: function(e) {
            return -1 !== e.indexOf("http") || -1 !== e.indexOf("https");
        }
    }, {
        key: "getBannerImg",
        value: function() {
            var e = this, t = wx.getStorageSync("weChatExpress") || {}, r = t.grade, a = t.area_code, i = wx.getStorageSync("userInfoStatus"), n = {
                open_id: wx.getStorageSync("openid") || "",
                grade: this.screenInfo.grd_id || r || i.grade,
                city: this.screenInfo.city_code || a || i.area_code,
                stu_id: i.stu_id || "",
                position: 2
            }, s = {
                authorization: wx.getStorageSync("user-token")
            }, o = _path2.default.banners;
            if (!n || !n.grade || !n.city) return !1;
            (0, _common.axios)({
                url: o,
                data: n,
                header: s
            }).then(function(t) {
                t = t || {};
                var r = t.data;
                if (r) if (e.imgUrls = [], e.materialUrls = [], r && r.data && 0 === r.error_code) {
                    var a = r.data;
                    if (e.swiperinfo.isLoad = a.length, e.$apply(), !a.length) return;
                    e.addBannerData(a);
                } else e.swiperinfo.isLoad = !1, e.$apply();
            });
        }
    }, {
        key: "addBannerData",
        value: function(e) {
            var t = this;
            this.swiperinfo.isIndicatorDots = 1 !== e.length, this.$apply(), e.forEach(function(e, r) {
                t.imgUrls.push({
                    IMG: t.AndroidPatch(e.banner_new_image_url),
                    ID: e.banner_id,
                    STATUS: e.require_login,
                    URL: e.material_url
                }), t.materialUrls.push(e.material_url), t.$apply();
            });
        }
    }, {
        key: "AndroidPatch",
        value: function(e) {
            var t = "";
            return wx.getSystemInfo({
                success: function(r) {
                    if ("Android" === r.system.split(" ")[0]) return void ("[object String]" === toString.call(e) && -1 !== e.indexOf("https") && (t = e.replace(/https/, "http")));
                    t = e;
                },
                fail: function() {
                    -1 !== e.indexOf("https") && (t = e.replace(/https/, "http"));
                }
            }), t;
        }
    }, {
        key: "imgChange",
        value: function(e) {
            var t = e.detail.current;
            this.appletBanner(this.imgUrls[t].ID), this.$apply();
        }
    }, {
        key: "appletBanner",
        value: function(e) {
            -1 === this.bannersArr.indexOf(e) && (this.bannersArr.push(e), app.sensors.track("applet_browse_banner", {
                applet_browse_banner: "浏览BANNER"
            }));
        }
    }, {
        key: "resetInfo",
        value: function() {
            this.filter.termId = "", this.filter.levelId = "", this.filter.subjectId = "", this.subIndex = 0, 
            this.claIndex = 0, this.termIndex = 0, this.filter.term = "学期", this.filter.level = "班次", 
            this.filter.subject = "学科", this.filter.teacherId = "", this.filter.tutorId = "", 
            this.filter.classTypeId = "", this.filter.classAreaId = "";
        }
    }, {
        key: "isLoadCitys",
        value: function() {
            var e = wx.getStorageSync("weChatExpress") || {}, t = e.area_code, r = e.area_name;
            this.screenInfo.city_name !== r && this.screenInfo.city_code !== t && (this.screenInfo.city_name = r, 
            this.screenInfo.city_code = t, this.resetInfo(), this.getSubTermCla(), this.getClassList(), 
            this.getGradeList());
        }
    }, {
        key: "assignmentInfo",
        value: function(e) {
            var t = null;
            if (e.filter && (t = JSON.parse(e.filter)), e.toSelect) return void this.toSelectFilterData(t);
            this.otherFilterData(e, t);
        }
    }, {
        key: "toSelectFilterData",
        value: function(e) {
            this.screenInfo = {
                grd_id: e.grd_id || e.grade || e.gradeId,
                grd_name: e.grd_name || e.grade_name || e.gradeName,
                cla_gt_name: "",
                cla_gt_id: "",
                city_code: e.city_code || e.area_code,
                city_name: e.city_name || e.area_name
            }, this.$apply();
        }
    }, {
        key: "otherFilterData",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = wx.getStorageSync("weChatExpress") || {}, a = r.grade, i = r.grade_name, n = r.area_code, s = r.area_name;
            this.screenInfo = {
                grd_id: e.grd_id || e.grade || e.gradeid || a,
                grd_name: e.grd_name || e.grade_name || e.gradename || i,
                cla_gt_name: "",
                cla_gt_id: "",
                city_code: e.city_code || e.area_code || e.areacode || n,
                city_name: e.city_name || e.area_name || e.areaname || s
            }, this.filter.termId = t ? t.termId : 9999, this.filter.term = t ? t.term : "学期", 
            this.filter.levelId = t ? t.levelId : 9999, this.filter.level = t ? t.level : "班次", 
            this.filter.subjectId = t ? t.subjectId : 9999, this.filter.subject = t ? t.subject : "学科", 
            this.$apply();
        }
    }, {
        key: "filterOption",
        value: function(e) {
            var t = {
                subject: e.subjectNames || e.subjectname || e.subject || "学科",
                subjectId: e.subjectIds || e.subjectid || e.subjectId || 9999,
                term: e.termName || e.termname || e.term || "学期",
                termId: e.termId || e.termid || 9999,
                level: e.levelName || e.levelname || e.level || "班次",
                levelId: e.levelId || e.levelid || 9999,
                classType: "",
                classTypeId: "",
                classTime: "",
                classTimeId: "",
                classArea: "不限",
                classAreaId: "",
                teacher: "不限",
                teacherId: "",
                tutor: "不限",
                tutorId: "",
                fullClass: 0
            };
            this.filter = t, this.getClassList();
        }
    }, {
        key: "filterOptionData",
        value: function(e) {
            var t = this;
            if (!e.wechat && !e.filter) return this.getSubTermCla(), void this.getClassList();
            var r = _path2.default.getSemesterShift, a = wx.getStorageSync("weChatExpress") || {}, i = a.area_code, n = a.grade, s = {
                area_code: this.screenInfo.city_code || i,
                grade_id: this.screenInfo.grd_id || n,
                term_id: this.filter.termId || 9999,
                level_id: this.filter.levelId || 9999,
                subject_id: this.filter.subjectId || 9999,
                ast_ids: "short"
            };
            (0, _global.isHaveObjectValue)(s) && (0, _common.axios)({
                url: r,
                data: s
            }).then(function(r) {
                r = r || {};
                var a = r.data;
                if (a && a.data && 0 === a.error_code) {
                    var i = a.data;
                    if (t.subject = i.subject ? i.subject : [ {
                        name: "不限",
                        id: 9999
                    } ], t.term = i.term ? i.term : [ {
                        name: "不限",
                        id: 9999
                    } ], t.cla = i.level ? i.level : [ {
                        name: "不限",
                        id: 9999
                    } ], t.subIndex = t.setFilter(t.subject, t.filter.subject), t.termIndex = t.setFilter(t.term, t.filter.term), 
                    t.claIndex = t.setFilter(t.cla, t.filter.level), t.$apply(), e && e.filter) {
                        var n = JSON.parse(e.filter);
                        return void t.filterOption(n);
                    }
                    if (e && e.wechat) return void t.filterOption(e);
                } else wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "reFreshGrade",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = wx.getStorageSync("changeGradeState"), r = wx.getStorageSync("user-token") || "", 
                        a = this.getConsumerInfo(), t.refreshGrade && r && (this.mergefunc(a), t.refreshGrade = "", 
                        wx.setStorageSync("changeGradeState", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "unnaturalLoginStyle",
        value: function(e) {
            var t = wx.getStorageSync("weChatExpress") || {};
            this.isUser = !wx.getStorageSync("user-token");
            var r = 0 === t.state;
            return e.scene ? (this.getRequestScene(e.scene, r), !1) : t.is_login ? (this.shareUserInfo(e), 
            !1) : 0 === t.state ? (this.mergefunc(e), this.setTouristInfo(e), !1) : (this.mergefunc(e), 
            !1);
        }
    }, {
        key: "onAutoJump",
        value: function() {
            var e = wx.getStorageSync("pagePath"), t = wx.getStorageSync("userInfoStatus") || null;
            return "detail" === e.url ? (e.implement = !1, void wx.setStorageSync("pagePath", e)) : e.implement ? void wx.navigateTo({
                url: "/pages/personcenter/personinfo"
            }) : void (t && (this.updateUser(t), this.resetInfo(), this.getSubTermCla(), this.getClassList(), 
            this.getGradeList()));
        }
    }, {
        key: "updateUser",
        value: function(e) {
            this.screenInfo.city_code = e.area_code, this.screenInfo.city_name = e.area_name, 
            this.screenInfo.grd_id = e.grade, this.screenInfo.grd_name = e.grade_name, this.$apply();
        }
    }, {
        key: "showimplt",
        value: function() {
            this.swiperinfo.isAutoplay = !0, this.showPageBury(), this.isUserfn(), this.getBannerImg();
        }
    }, {
        key: "isGoUserInfo",
        value: function() {
            var e = wx.getStorageSync("weChatExpress") || {};
            e.token && !e.complete && wx.redirectTo({
                url: "/pages/loginRelevant/cityclass?page=cityclass"
            });
        }
    }, {
        key: "isShowUserInfo",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus") || {}, t = this.pageone;
            this.isUser = !wx.getStorageSync("user-token"), (e.saved || t) && (this.mergefunc(e), 
            e.saved = !1, wx.setStorageSync("userInfoStatus", e));
        }
    }, {
        key: "showPageBury",
        value: function() {
            if (app.sensors.track("applet_browse_courselist", {
                applet_browse_courselist: "浏览课程列表"
            }), this.imgUrls.length) {
                var e = this.imgUrls[0].ID;
                this.bannersArr = [ e ], app.sensors.track("applet_browse_banner", {
                    applet_browse_banner: "浏览BANNER"
                });
            }
        }
    }, {
        key: "isUserfn",
        value: function() {
            var e = wx.getStorageSync("user-token");
            if (e) return this.isUser = !e, void this.onAutoJump();
            this.count = 0, this.isLoadCitys(), this.getSubTermCla(), this.getGradeList();
        }
    }, {
        key: "mergefunc",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.assignmentInfo(e), this.getGradeList(), this.filterOptionData(e);
        }
    }, {
        key: "isTourist",
        value: function(e) {
            if (!wx.getStorageSync("user-token")) return void this.mergefunc();
            this.isUserStatus(e);
        }
    }, {
        key: "forwardLoad",
        value: function(e) {
            var t = this, r = Object.keys(e), a = wx.getStorageSync("isNewUser"), i = wx.getStorageSync("user-token");
            return new Promise(function(n, s) {
                if (r.length) return a || !i ? (t.mergefunc(), void n(!0)) : (t.mergefunc(e), void n(!0));
                t.isTourist(e);
            });
        }
    }, {
        key: "getRequestScene",
        value: function(e, t) {
            var r = this;
            wx.setStorageSync("scene", e);
            var a = _path2.default.getfilters, i = {
                scene: e
            };
            (0, _global.isHaveObjectValue)(i) && (0, _common.axios)({
                url: a,
                data: i
            }).then(function(e) {
                e = e || {};
                var a = e.data;
                if (a && a.data && !a.error_code) {
                    var i = a.data;
                    return r.mergeSceneInfo(i), r.isSceneUserIdentity(t), r.getGradeList(), r.getSubTermCla(), 
                    r.getClassList(), r.getBannerImg(), r.getConsumerInfo(), void r.scanningReportData(i.params);
                }
                wx.showToast({
                    title: a.error_msg,
                    icon: "none",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "mergeSceneInfo",
        value: function(e) {
            this.screenInfo.grd_id = e.params.gradeId, this.screenInfo.grd_name = e.params.gradeName, 
            this.screenInfo.city_code = e.params.areaCode, this.screenInfo.city_name = e.params.areaName, 
            this.filter = e.params.filter;
        }
    }, {
        key: "isSceneUserIdentity",
        value: function(e) {
            e && this.setNewUserData();
        }
    }, {
        key: "setNewUserData",
        value: function() {
            var e = {
                grd_id: this.screenInfo.grd_id,
                grd_name: this.screenInfo.grd_name,
                grd_custom_name: "",
                city_code: this.screenInfo.city_code,
                city_name: this.screenInfo.city_name,
                real_locate: !0,
                default: "index"
            };
            this.setTouristInfo(e);
        }
    }, {
        key: "scanningReportData",
        value: function(e) {
            var t = this.screenCourseType(e.filter), r = this.screenGoCourse(e.filter), a = this.$parent.globalData.appletInfo, i = "\n            " + e.areaName + "," + e.gradeName + ",\n            学科：" + ("学科" === e.filter.subject ? "" : e.filter.subject) + ",\n            学期：" + ("学期" === e.filter.term ? "" : e.filter.term) + ",\n            班次：" + ("班次" === e.filter.level ? "" : e.filter.level) + ",\n            课程类型：" + (t || "") + ",\n            上课时间：" + (r || "") + ",\n            上课地点：" + ("不限" === e.filter.classArea ? "" : e.filter.classAre) + ",\n            主讲老师：" + ("不限" === e.filter.teacher ? "" : e.filter.teacher) + ",\n            辅助老师：" + ("不限" === e.filter.tutor ? "" : e.filter.tutor) + ",\n            显示满班：" + (e.filter.fullClass ? "未满班" : "满班") + ",\n        ";
            a.QR_id = i, app.sensors.track("open_applet", a);
        }
    }, {
        key: "screenCourseType",
        value: function(e) {
            var t = {
                1: "在线",
                2: "双师",
                default: "面授"
            };
            if (e && e.classTypeId) return t[e.classTypeId] || t.default;
        }
    }, {
        key: "screenGoCourse",
        value: function(e) {
            var t = {
                1: [ "周一" ],
                2: [ "周二" ],
                3: [ "周三" ],
                4: [ "周四" ],
                5: [ "周五" ],
                6: [ "周六" ],
                7: [ "周日" ],
                9: [ "一期" ],
                10: [ "二期" ],
                11: [ "三期" ]
            };
            if (e && e.classTimeId) return t[e.classTimeId][0];
        }
    }, {
        key: "setTouristInfo",
        value: function(e) {
            var t = wx.getStorageSync("openid"), r = _path2.default.setinfo, a = {
                open_id: t,
                grade_id: e.grd_id,
                grade_name: e.grd_name,
                area_code: e.city_code,
                area_name: e.city_name
            };
            (0, _global.isHaveObjectValue)(a) && (0, _common.axios)({
                url: r,
                data: a
            }).then(function(e) {
                var t = e.data;
                if (t && t.data && 0 === t.error_code) {
                    var r = t.data.set_result ? "游客模式设置成功" : "游客模式设置失败";
                    return void wx.setStorageSync("TouristStatus", r);
                }
                wx.showToast({
                    title: t.error_msg,
                    icon: "none",
                    duration: 1e3
                });
            });
        }
    }, {
        key: "userNormalFunc",
        value: function() {
            var e = wx.getStorageSync("weChatExpress") || {}, t = e.state;
            this.isNewUser = 0 === t, this.isGetbtn = this.isNewUser;
        }
    }, {
        key: "cleanStorageSta",
        value: function() {
            var e = wx.getStorageSync("weChatExpress") || {}, t = e.is_login;
            this.isUser = !t, this.$apply(), wx.setStorageSync("isNewUser", this.isNewUser), 
            wx.getStorageSync("user-token") || "" || wx.removeStorageSync("userInfoStatus");
        }
    }, {
        key: "isUserStatus",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = wx.getStorageSync("userInfoStatus") || {}, r = wx.getStorageSync("weChatExpress") || {}, 
                        r.bind_phone && t.bind_phone) {
                            e.next = 5;
                            break;
                        }
                        return this.userBindPhone(t), e.abrupt("return");

                      case 5:
                        if (r.complete && t.complete) {
                            e.next = 8;
                            break;
                        }
                        return this.userCompleteMsg(t), e.abrupt("return");

                      case 8:
                        this.mergefunc();

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "shareUserInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = wx.getStorageSync("user-token"), a = wx.getStorageSync("userInfoStatus"), 
                        !r) {
                            e.next = 11;
                            break;
                        }
                        if (a.bind_phone) {
                            e.next = 6;
                            break;
                        }
                        return this.userBindPhone(a), e.abrupt("return");

                      case 6:
                        if (a.complete) {
                            e.next = 9;
                            break;
                        }
                        return this.userCompleteMsg(a), e.abrupt("return");

                      case 9:
                        this.$apply(), this.mergefunc(t);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "isSharePage",
        value: function(e) {
            var t = Object.keys(e);
            this.isShare = !!t.length, this.loadSetPath(this.isShare);
        }
    }, {
        key: "loadSetPath",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "home", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            wx.setStorageSync("pagePath", {
                share: e,
                url: t,
                mun: r,
                implement: a
            });
        }
    }, {
        key: "getuserStatus",
        value: function() {
            var e = wx.getStorageSync("userInfoStatus");
            !e && !e.complete && !e.bind_phone && this.loadSetPath(this.isShare, "personinfo");
        }
    }, {
        key: "userBindPhone",
        value: function(e) {
            this.loadSetPath(), wx.redirectTo({
                url: "/pages/loginRelevant/bindphone"
            });
        }
    }, {
        key: "userCompleteMsg",
        value: function(e) {
            wx.setStorageSync("entry", "cityclass"), this.loadSetPath(), wx.redirectTo({
                url: "/pages/loginRelevant/cityclass?page=cityclass"
            });
        }
    }, {
        key: "getStorageUnid",
        value: function() {
            var e = wx.getStorageSync("unid") || "";
            return e || wx.navigateTo({
                url: "/pages/authorize/index"
            }), !!e;
        }
    }, {
        key: "loadWebViews",
        value: function(e) {
            return !e || !e.pageone || (this.pageone = e.pageone, wx.navigateTo({
                url: "/pages/banner/banner"
            }), !1);
        }
    }, {
        key: "getOnloadState",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = wx.getStorageSync("openid") || "") {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        this.getBannerImg(), this.forwardLoad(t);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            this.isLoad || (this.isGoUserInfo(), this.isShowUserInfo(), this.showimplt(), this.reFreshGrade());
        }
    }, {
        key: "onHide",
        value: function() {
            this.isLoad = !1, this.swiperinfo.isAutoplay = !1, wx.removeStorageSync("breakoff");
        }
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = Object.keys(t), this.isLoad = !0, e.next = 4, _wepy2.default.$instance.globalData.usersFunc();

                      case 4:
                        if (this.userNormalFunc(), this.cleanStorageSta(), a = this.loadWebViews(t)) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return");

                      case 9:
                        if (!r.length) {
                            e.next = 12;
                            break;
                        }
                        return this.unnaturalLoginStyle(t), e.abrupt("return");

                      case 12:
                        this.isSharePage(t), this.getOnloadState(t), this.getRegistListcount(), this.isLoading = !0;

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(choose, "pages/classlist/classlist"));