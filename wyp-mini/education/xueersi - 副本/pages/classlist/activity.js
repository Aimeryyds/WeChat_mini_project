function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
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
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, i, a) {
        return i && t(e.prototype, i), a && t(e, a), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _card = require("./../../components/Commons/card.js"), _card2 = _interopRequireDefault(_card), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _common = require("./../../common/util/common.js"), choose = function(t) {
    function e() {
        var t, i, a, s;
        _classCallCheck(this, e);
        for (var r = arguments.length, c = Array(r), o = 0; o < r; o++) c[o] = arguments[o];
        return i = a = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(c))), 
        a.config = {
            navigationBarTitleText: "选课报班",
            navigationBarTextStyle: "black",
            navigationBarBackgroundColor: "#fff",
            enablePullDownRefresh: !0,
            onReachBottomDistance: 50,
            backgroundColor: "#fff"
        }, a.$repeat = {}, a.$props = {
            card: {
                class: "class-item",
                "xmlns:v-bind": "",
                "v-bind:cardInfo.sync": "cardInfo",
                bottomLine: "true",
                "xmlns:v-on": ""
            },
            taltoast: {
                class: "toast"
            }
        }, a.$events = {
            card: {
                "v-on:classInfo": "goClassInfo",
                "v-on:regist": "regist",
                "v-on:registIndex": "registIndex"
            }
        }, a.components = {
            card: _card2.default,
            taltoast: _toast2.default
        }, a.data = {
            teacherList: [ {
                haha: 0,
                head: "https://cdninsight.speiyou.com/1512564803956_teacher_avatar.png",
                tutor_RealName: "沈泽群055787",
                school: "西安电子科技大学",
                left: 73,
                checked: !1
            }, {
                haha: 1,
                head: "https://cdninsight.speiyou.com/1512564803956_teacher_avatar.png",
                tutor_RealName: "沈泽群055787",
                school: "西安电子科技大学",
                left: 73,
                checked: !1
            } ],
            cardInfo: [],
            loadingWord: "正在加载",
            refresh: !1,
            tutor: !0,
            array: [ [ "a", "b" ], [ "c", "d" ] ],
            subIndex: 0,
            subject: [],
            termIndex: 0,
            term: [],
            claIndex: 0,
            cla: [],
            gradeIndex: 0,
            grade: [],
            filter: {
                subjectId: "",
                termId: "",
                claIds: [],
                gradeId: "",
                yearId: "",
                classTypeId: ""
            },
            claId: "",
            activityId: "",
            activity: [],
            tutorDisabled: !0,
            listIndex: 0,
            page: "1",
            bottomLoadShow: !1,
            actContent: {},
            areaCode: ""
        }, a.watch = {
            teacherList: function() {
                var t = this;
                this.teacherList.forEach(function(e) {
                    !0 === e.checked && (t.tutorDisabled = !1);
                });
            }
        }, a.methods = {
            subjectChange: function(t) {
                var e = this;
                this.subIndex = t.detail.value, this.grade = [], this.term[this.termIndex].childList.forEach(function(t) {
                    t.childList.forEach(function(t) {
                        e.grade.push({
                            name: t.name,
                            id: t.id,
                            childList: t.childList
                        });
                    });
                }), this.subject = this.grade[this.gradeIndex].childList, this.cla = this.subject[this.subIndex].childList, 
                this.filter.subjectId = this.subject[this.subIndex].id, this.filter.classTypeId = this.cla[0].id, 
                this.filter.claIds = [], this.cla[0].childList.forEach(function(t) {
                    e.filter.claIds.push(t.id);
                }), this.getClassList(), wx.startPullDownRefresh();
            },
            termChange: function(t) {
                var e = this;
                this.termIndex = t.detail.value, this.grade = [], this.term[this.termIndex].childList.forEach(function(t) {
                    t.childList.forEach(function(t) {
                        e.grade.push({
                            name: t.name,
                            id: t.id,
                            childList: t.childList
                        });
                    });
                }), this.gradeIndex = 0, this.subject = this.grade[0].childList, this.subIndex = 0, 
                this.filter.subjectId = this.subject[0].id, this.cla = this.subject[0].childList, 
                this.filter.gradeId = this.grade[this.gradeIndex].id, this.filter.termId = this.term[this.termIndex].term, 
                this.filter.yearId = this.term[this.termIndex].year, this.filter.classTypeId = this.cla[0].id;
                var i = this.cla[0].childList;
                this.filter.claIds = [], i.forEach(function(t) {
                    e.filter.claIds.push(t.id);
                }), this.getClassList(), wx.startPullDownRefresh(), this.$apply();
            },
            claChange: function(t) {
                var e = this;
                this.claIndex = t.detail.value, this.grade = [], this.term[this.termIndex].childList.forEach(function(t) {
                    t.childList.forEach(function(t) {
                        e.grade.push({
                            name: t.name,
                            id: t.id,
                            childList: t.childList
                        });
                    });
                }), this.subject = this.grade[this.gradeIndex].childList, this.cla = this.subject[this.subIndex].childList, 
                this.filter.subjectId = this.subject[this.subIndex].id, this.filter.classTypeId = this.cla[this.claIndex].id;
                var i = this.cla[this.claIndex].childList;
                this.filter.claIds = [], i.forEach(function(t) {
                    e.filter.claIds.push(t.id);
                }), this.getClassList(), wx.startPullDownRefresh();
            },
            gradeChange: function(t) {
                var e = this;
                this.gradeIndex = t.detail.value, this.grade = [], this.term[this.termIndex].childList.forEach(function(t) {
                    t.childList.forEach(function(t) {
                        e.grade.push({
                            name: t.name,
                            id: t.id,
                            childList: t.childList
                        });
                    });
                }), this.subject = this.grade[this.gradeIndex].childList, this.subIndex = 0, this.filter.subjectId = this.subject[this.subIndex].id, 
                this.cla = this.subject[0].childList, this.filter.gradeId = this.grade[this.gradeIndex].id, 
                this.filter.classTypeId = this.cla[0].id;
                var i = this.cla[0].childList;
                this.filter.claIds = [], i.forEach(function(t) {
                    e.filter.claIds.push(t.id);
                }), this.getClassList(), wx.startPullDownRefresh();
            },
            goClassInfo: function(t) {
                "1" === t.classType ? wx.navigateTo({
                    url: "classdetail/online?classId=" + t.classId + "&courseId=" + t.courseId + "&areaCode=" + this.areaCode + "&route=activity"
                }) : "4" === t.classType ? wx.navigateTo({
                    url: "classdetail/offline?classId=" + t.classId + "&areaCode=" + this.areaCode + "&route=activity"
                }) : "2" === t.classType && wx.navigateTo({
                    url: "classdetail/double?classId=" + t.classId + "&areaCode=" + this.areaCode + "&route=activity"
                });
            },
            registIndex: function(t) {
                this.listIndex = t;
            }
        }, s = i, _possibleConstructorReturn(a, s);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onReachBottom",
        value: function() {
            this.bottomLoadShow = !0, this.getClassList("more");
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            this.filter.gradeId && this.getClassList();
        }
    }, {
        key: "getActivity",
        value: function() {
            var t = this, e = _path2.default.querycondition, i = {
                area_code: this.areaCode,
                activity_id: this.activityId
            };
            if (!i.area_code || !i.activity_id) return !1;
            (0, _common.axios)({
                url: e,
                data: i
            }).then(function(e) {
                var i = e.data;
                if (i && 0 === i.error_code) {
                    var a = i.data || [];
                    if (t.term = [], !a.length) return;
                    a.forEach(function(e, i) {
                        e.childList.forEach(function(i, a) {
                            t.term.push({
                                name: e.name + i.name,
                                year: e.id,
                                term: i.id,
                                childList: e.childList[a].childList
                            });
                        });
                    }), t.filter.termId = t.term[t.termIndex].term, t.filter.yearId = t.term[t.termIndex].year, 
                    t.term[t.termIndex].childList.forEach(function(e) {
                        e.childList.forEach(function(e) {
                            t.grade.push({
                                name: e.name,
                                id: e.id,
                                childList: e.childList
                            });
                        });
                    }), t.filter.gradeId = t.grade[t.gradeIndex].id, t.subject = t.grade[t.gradeIndex].childList, 
                    t.filter.subjectId = t.subject[t.subIndex].id, t.cla = t.subject[t.subIndex].childList, 
                    t.filter.classTypeId = t.cla[t.claIndex].id;
                    t.cla[t.claIndex].childList.forEach(function(e) {
                        t.filter.claIds.push(e.id);
                    }), t.getClassList(), t.$apply();
                } else t.$invoke("taltoast", "show", {
                    message: i.error_msg || "系统错误",
                    duration: 2e3
                });
            });
        }
    }, {
        key: "getClassList",
        value: function(t) {
            var e = this;
            this.loadingWord = "正在加载", t ? this.page++ : this.page = 1;
            var i = _path2.default.searchclass, a = {
                areaCode: this.areaCode ? this.areaCode : wx.getStorageSync("weChatExpress").area_code,
                astIds: "short",
                update: 2,
                platform: wx.getStorageSync("platform"),
                mode: 2,
                limit: 10,
                subjectIds: this.filter.subjectId,
                term: this.filter.termId,
                page: this.page,
                gradeId: this.filter.gradeId,
                levelIds: this.filter.levelId ? this.filter.levelId : 9999,
                isHiddenFull: "1",
                teaId: this.filter.teacherId ? this.filter.teacherId : 9999,
                tutorTeaId: this.filter.tutorId ? this.filter.tutorId : 9999,
                timeType: this.filter.classTimeId ? this.filter.classTimeId : "",
                claCourseType: this.filter.classTypeId ? this.filter.classTypeId : "",
                venueId: this.filter.classAreaId ? this.filter.classAreaId : "",
                year: this.filter.yearId,
                classLevelIds: this.filter.claIds
            }, s = {
                authorization: wx.getStorageSync("user-token") || ""
            };
            (0, _common.axios)({
                url: i,
                data: a,
                header: s
            }).then(function(t) {
                var i = t.data;
                if (wx.stopPullDownRefresh(), 0 === i.error_code) {
                    e.transparentMask = !0, e.bottomLoadShow = !1;
                    var a = [];
                    if (!(a = i.data && i.data.data && i.data.data.rows)) return e.cardInfo = [], e.loadingWord = "", 
                    void e.$apply();
                    e.filterLoadList(a);
                }
            });
        }
    }, {
        key: "filterLoadList",
        value: function(t) {
            var e = this, i = /(^http|^https)/;
            t.length >= 10 ? this.loadingWord = "正在加载" : this.loadingWord = "", t.length < 10 && (this.loadingWord = "已经到底啦", 
            this.$apply()), 1 === this.page && (this.cardInfo = []), t.forEach(function(t, i) {
                e.cardInfo.push(t);
            }), this.cardInfo.forEach(function(t, a) {
                "" !== t.tutor_picture_url && (i.test(t.tutor_picture_url) ? t.tutor_picture_url = t.tutor_picture_url : t.tutor_picture_url = "" + t.domain + e.getString(t.tutor_picture_url)), 
                "[object Array]" === toString.call(t.tutors) && t.tutors.forEach(function(i, s) {
                    e.cardInfo[a].tutors[s] = {
                        tutorId: i.tutorId,
                        tutorSysName: i.tutorSysName,
                        tutorPictureUrl: e.getString(i.tutorPictureUrl) ? t.domain + e.getString(i.tutorPictureUrl) : i.tutorPictureUrl,
                        tutorEmpNo: i.tutorEmpNo,
                        accountType: i.accountType,
                        teacherType: i.teacherType
                    };
                }), "[object Array]" === toString.call(t.teachers) && t.teachers.forEach(function(i, s) {
                    e.cardInfo[a].teachers[s] = {
                        teacherId: i.teacherId,
                        teacherName: i.teacherName,
                        teacherPictureUrl: e.getString(i.teacherPictureUrl) ? t.domain + e.getString(i.teacherPictureUrl) : i.teacherPictureUrl,
                        teacherEmpNo: i.teacherEmpNo,
                        accountType: i.accountType,
                        teacherType: i.teacherType
                    };
                });
            }), 0 === this.cardInfo.length && (this.loadingWord = ""), this.$apply();
        }
    }, {
        key: "getString",
        value: function(t) {
            var e = /^(http|https)/;
            if (t) {
                if (e.test(t)) return "";
                return t.split(",")[0];
            }
            return "";
        }
    }, {
        key: "onLoad",
        value: function(t) {
            this.areaCode = t.areaCode, this.activityId = t.activityId, this.actContent.activity_type_name = t.activityName, 
            this.actContent.activity_desc = t.activityContent, wx.setNavigationBarTitle({
                title: t.activityName
            }), this.getActivity();
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(choose, "pages/classlist/activity"));