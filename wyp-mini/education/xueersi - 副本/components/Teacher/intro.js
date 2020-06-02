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
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), app = getApp(), intro = function(e) {
    function t() {
        var e, o, n, i;
        _classCallCheck(this, t);
        for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.props = {
            introInfo: {
                type: Object,
                default: {},
                twoWay: !0
            }
        }, n.data = {
            controls: !0,
            showVideo: !1,
            hasContent: !0
        }, n.methods = {
            changefullscreen: function(e) {
                var t = e.detail.fullScreen;
                this.isFullScreen = !t, this.$apply();
            },
            playVideo: function() {
                this.$emit("video-addClas"), this.showVideo = !this.showVideo, this.videoContext = wx.createVideoContext("myVideo"), 
                this.videoContext.play(), this.$apply(), this.sendAnalytics("132-1169");
            },
            hideVideo: function() {
                this.$emit("video-removeClas"), this.showVideo = !1, this.videoContext.pause(), 
                this.$apply();
            }
        }, n.computed = {
            showEmptyPic: function() {
                var e = this.introInfo;
                return "{}" === JSON.stringify(e) || "" === e.tea_video_url && "" === e.qualification_certificate && 0 === e.grd_name.length && "" === e.tea_teach_result && "" === e.tea_experience && "" === e.tea_features;
            }
        }, n.events = {
            teacherData: function(e) {
                this.introInfo = e, this.introInfo.tea_video_url && this.sendAnalytics("132-1170", "view");
            }
        }, i = o, _possibleConstructorReturn(n, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "sendAnalytics",
        value: function(e, t) {
            var o = {
                0: "teacher",
                1: "tutor",
                2: "teacher"
            }, n = o[this.introInfo.teacherType], i = {
                teacherid: this.introInfo.tea_id,
                type: n
            };
            "view" === t ? app.XesAnalyticsMP.view(e, i) : app.XesAnalyticsMP.track(e, i);
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = intro;