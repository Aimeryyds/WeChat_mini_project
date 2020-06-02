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
}), exports.default = void 0;

var _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), app = getApp(), FilterNav = function(t) {
    function e() {
        var t, n, i, s;
        _classCallCheck(this, e);
        for (var o = arguments.length, a = Array(o), c = 0; c < o; c++) a[c] = arguments[c];
        return n = i = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
        i.props = {
            navInfo: {
                type: Object
            },
            navFixed: {
                type: Boolean
            },
            hasHeadImg: {
                type: Boolean
            },
            courseCount: {
                type: Number
            }
        }, i.data = {
            condition: {
                gradeId: "",
                subjectId: "",
                classType: ""
            },
            firstIn: !0,
            showGradeSelect: !1,
            gradeActiveIndex: 0,
            subjectActiveIndex: 0,
            typeActiveIndex: 0
        }, i.computed = {
            arrowImg: function() {
                return this.showGradeSelect ? "../../common/img/arrow_active.png" : "../../common/img/arrow_unactive.png";
            }
        }, i.events = {}, i.watch = {
            navInfo: function(t) {
                var e = this, n = wx.getStorageSync("userInfoStatus");
                this.firstIn && n && n.grade ? (this.firstIn = !1, this.navInfo.gradeList && this.navInfo.gradeList.forEach(function(t, i) {
                    if (t.gradeId === n.grade) return e.condition.gradeId = n.grade, e.gradeActiveIndex = i, 
                    !1;
                }), this.condition.gradeId || (this.condition.gradeId = this.navInfo.gradeList && this.navInfo.gradeList[0].gradeId, 
                this.gradeActiveIndex = 0)) : this.firstIn && (this.condition.gradeId = this.navInfo.gradeList && this.navInfo.gradeList[0].gradeId, 
                this.gradeActiveIndex = 0), this.navInfo.subject || (this.$emit("getSubjectAndType", {
                    grade_id: this.condition.gradeId
                }, 0), this.subjectActiveIndex = 0, this.typeActiveIndex = 0), this.$apply();
            }
        }, i.events = {
            getCourseList: function(t) {
                var e = void 0, n = void 0;
                0 === t && (this.condition.subjectId = this.navInfo.subject ? this.navInfo.subject[0].subjectId : "", 
                this.condition.classType = this.navInfo.class_type.length ? this.navInfo.class_type[0].classType : "", 
                e = this.navInfo.subject ? this.navInfo.subject[0].subjectName : "", n = this.navInfo.class_type[0] ? this.navInfo.class_type[0].text : ""), 
                1 === t && (this.condition.subjectId = this.navInfo.subject[this.subjectActiveIndex].subjectId, 
                this.condition.classType = this.navInfo.class_type.length ? this.navInfo.class_type[0].classType : "", 
                n = this.navInfo.class_type[0] ? this.navInfo.class_type[0].text : "", e = this.navInfo.subject ? this.navInfo.subject[this.subjectActiveIndex].subjectName : ""), 
                console.log("condition---", e, n), console.log("broast----", this.gradeActiveIndex, this.condition.gradeId), 
                this.$emit("filterCourseList", this.condition);
            }
        }, i.methods = {
            toggleGradeSelect: function() {
                this.showGradeSelect = !this.showGradeSelect, this.showGradeSelect && this.hasHeadImg && wx.pageScrollTo({
                    scrollTop: 189,
                    duration: 0
                });
            },
            handleSubjectClick: function(t, e) {
                var n = {
                    subject_id: t.subjectId,
                    grade_id: this.condition.gradeId
                };
                this.subjectActiveIndex = e, this.typeActiveIndex = 0, this.condition.classType = this.navInfo.class_type.length ? this.navInfo.class_type[0].classType : "", 
                this.condition.subjectId !== t.subjectId ? (n.subject_id = t.subjectId, this.$emit("getSubjectAndType", n, 1)) : this.$emit("filterCourseList", this.condition), 
                app.sensors.track("dkact_other_button", {
                    button_name: "学科",
                    event_name: "其他按钮点击—活动主页"
                });
            },
            onGradeClick: function(t, e) {
                this.gradeActiveIndex = e, this.subjectActiveIndex = 0, this.typeActiveIndex = 0, 
                this.condition.gradeId !== t.gradeId ? (this.condition.gradeId = t.gradeId, this.$emit("getSubjectAndType", {
                    grade_id: this.condition.gradeId
                }, 0)) : this.$emit("filterCourseList", this.condition), app.sensors.track("dkact_other_button", {
                    button_name: "年级",
                    event_name: "其他按钮点击—活动主页"
                });
            },
            handleTypeClick: function(t, e) {
                this.typeActiveIndex = e, this.condition.classType = t.classType, this.$emit("filterCourseList", this.condition), 
                app.sensors.track("dkact_other_button", {
                    button_name: "课程类型",
                    event_name: "其他按钮点击—活动主页"
                });
            }
        }, s = n, _possibleConstructorReturn(i, s);
    }
    return _inherits(e, t), e;
}(_wepy2.default.component);

exports.default = FilterNav;