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
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _starScore = require("./starScore.js"), _starScore2 = _interopRequireDefault(_starScore), app = getApp(), comDetails = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.props = {
            avgScore: {
                type: Number,
                default: 0
            },
            evaluateTags: {
                type: Array,
                default: []
            },
            evaluateList: {
                type: Array,
                default: [],
                twoWay: !0
            },
            totalCount: {
                type: Number,
                default: 0
            }
        }, a.data = {
            currentTagIndex: 0,
            showScore: !0,
            imgList: {
                defaultImg: "https://static-xesapi.speiyou.cn/xesFeProject/xesFeSource/xesImagesLibrary/1584608698243.png"
            },
            dataList: []
        }, a.$repeat = {
            evaluateList: {
                com: "star1",
                props: ""
            }
        }, a.$props = {
            star1: {
                "v-bind:score.sync": {
                    value: "Item.star_num",
                    for: "evaluateList",
                    item: "Item",
                    index: "index",
                    key: "index"
                }
            },
            star: {
                size: "'m'",
                "xmlns:v-bind": "",
                "v-bind:showScore.once": "showScore",
                "v-bind:score.sync": "avgScore"
            }
        }, a.$events = {}, a.components = {
            star: _starScore2.default,
            star1: _starScore2.default
        }, a.watch = {
            totalCount: function(e) {
                this.totalCount = this.formatCount(e);
            },
            evaluateList: function(e) {
                e && (this.dataList = this.dataList.concat(e), this.$apply());
            }
        }, a.methods = {
            tagChange: function(e) {
                this.currentTagIndex = e, this.$emit("tagChange", this.evaluateTags[e]), this.sendAnalytics();
            },
            loadErrorImg: function(e) {
                this.evaluateList[e].stu_logo = this.imgList.defaultImg;
            }
        }, a.events = {
            updateList: function(e, t) {
                e && (this.evaluateList = e);
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "sendAnalytics",
        value: function() {
            app.XesAnalyticsMP.track("132-1167", {
                button_name: this.evaluateTags[this.currentTagIndex].desc
            });
        }
    }, {
        key: "formatCount",
        value: function(e) {
            if (e < 1e5) return e;
            var t = e / 1e4;
            return parseInt(t) === t ? t + "W" : parseInt(t) + "W+";
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = comDetails;