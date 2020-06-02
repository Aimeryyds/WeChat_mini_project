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
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _appraise = require("./../../components/Teacher/appraise.js"), _appraise2 = _interopRequireDefault(_appraise), tea = function(e) {
    function t() {
        var e, a, n, o;
        _classCallCheck(this, t);
        for (var r = arguments.length, i = Array(r), c = 0; c < r; c++) i[c] = arguments[c];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "学而思教师主页",
            enablePullDownRefresh: !0,
            onReachBottomDistance: 100,
            backgroundTextStyle: "dark"
        }, n.$repeat = {}, n.$props = {
            appraise: {
                "xmlns:v-bind": "",
                "v-bind:avgScore.sync": "avgScore",
                "v-bind:totalCount.sync": "totalCount",
                "v-bind:evaluateTags.sync": "evaluateTags",
                "v-bind:evaluateList.sync": "evaluateList",
                "xmlns:v-on": ""
            }
        }, n.$events = {
            appraise: {
                "v-on:tagChange": "filterEvaList"
            }
        }, n.components = {
            appraise: _appraise2.default
        }, n.data = {
            arr: [ 1, 2, 3, 4, 56, 7 ],
            fromId: new Date(),
            showScore: !0,
            size: "m",
            myScore: 3,
            myScore2: 5,
            avgScore: 0,
            totalCount: 1,
            evaluateTags: [],
            evaluateList: []
        }, n.methods = {
            filterEvaList: function(e) {
                var t = this;
                console.log("收到子组件命令------11111111---", e);
                var a = [ {
                    evaluate_id: 0x536cb04b6c00080,
                    stu_id: "5f5ee4fd412e3f918dbc3aca277f19ba",
                    city_code: "010",
                    stu_name: "哈哈学生",
                    stu_logo: "",
                    cla_name: "春季班初中一年级生物2019-讲义拆分-拆分后3",
                    teacher_name: "老师",
                    star_num: 9,
                    evaluate_time: "2019.03.14",
                    evaluate_content: "发发发发发发",
                    is_audit: "Y",
                    choice: 0,
                    reply_id: 0,
                    reply: null,
                    teacher_id: "ff808081571aa2b301571d1f75441683",
                    tags: null
                }, {
                    evaluate_id: 0x536cb04b6c00080,
                    stu_id: "5f5ee4fd412e3f918dbc3aca277f19ba",
                    city_code: "010",
                    stu_name: "易烊千玺",
                    stu_logo: "",
                    cla_name: "春季-拆分后3",
                    teacher_name: "哈哈老师",
                    star_num: 8.5,
                    evaluate_time: "2019.03.14",
                    evaluate_content: "发发发发发发",
                    is_audit: "Y",
                    choice: 0,
                    reply_id: 0,
                    reply: null,
                    teacher_id: "ff808081571aa2b301571d1f75441683",
                    tags: null
                } ];
                a.forEach(function(e) {
                    e.stu_num = t.formatScore(e.stu_num);
                }), this.$broadcast("updateList", a);
            }
        }, o = a, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "formatScore",
        value: function(e) {
            var t = e / 2, a = parseInt(t);
            return e = t === a ? t : t <= a + .5 ? a + .5 : a + 1;
        }
    }, {
        key: "onReady",
        value: function() {
            console.log(new Date().getTime());
        }
    }, {
        key: "onLoad",
        value: function() {
            this.avgScore = this.formatScore(9), this.totalCount = 1211100, this.evaluateList = [ {
                evaluate_id: 0x536cb04b6c00080,
                stu_id: "5f5ee4fd412e3f918dbc3aca277f19ba",
                city_code: "010",
                stu_name: "王凯",
                stu_logo: "../../common/img/avatar.png",
                cla_name: "春季班初中一年级生物2019",
                teacher_name: "老师",
                star_num: this.formatScore(8),
                evaluate_time: "2019.03.14",
                evaluate_content: "发发发发发发真的挺不错的啊，奴婢的老师，孩子真听话",
                is_audit: "Y",
                choice: 0,
                reply_id: 0,
                reply: "感谢您的支持，希望下次再来听我课啊，哇咔咔，我们的祖国是花园，花园的你们",
                teacher_id: "ff808081571aa2b301571d1f75441683",
                tags: [ {
                    id: 1,
                    desc: "沟通及时啊",
                    count: 1
                } ]
            }, {
                evaluate_id: 0x536cb04b6c00080,
                stu_id: "5f5ee4fd412e3f918dbc3aca277f19ba",
                city_code: "010",
                stu_name: "迪丽热巴",
                stu_logo: "",
                cla_name: "春季",
                teacher_name: "哈哈老师",
                star_num: this.formatScore(8.8),
                evaluate_time: "2019.03.14",
                evaluate_content: "发发发发发发",
                is_audit: "Y",
                choice: 0,
                reply_id: 0,
                reply: "感谢您的支持，希望下次再来听我课啊，哇咔咔，我们的祖国是花园，花园的你们真鲜艳",
                teacher_id: "ff808081571aa2b301571d1f75441683",
                tags: null
            } ], this.evaluateTags = [ {
                id: 0,
                desc: "全部",
                count: 999
            }, {
                id: 0,
                desc: "最新",
                count: 111
            }, {
                id: 1,
                desc: "感染力强",
                count: 22
            }, {
                id: 2,
                desc: "思路清晰易懂",
                count: 33
            }, {
                id: 3,
                desc: "答疑细致",
                count: 44
            }, {
                id: 4,
                desc: "沟通及时",
                count: 1
            } ], this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.$apply();
        }
    } ]), t;
}(_wepy2.default.page);

exports.default = tea;