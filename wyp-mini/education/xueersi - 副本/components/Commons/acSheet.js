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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), TalAcSheet = function(e) {
    function t() {
        var e, i, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, r = Array(a), c = 0; c < a; c++) r[c] = arguments[c];
        return i = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        n.data = {
            claId: "",
            imgList: {
                defaultImg: "http://static-xesapi.speiyou.cn/1524642003100.png",
                checkType: "http://static-xesapi.speiyou.cn/1546929309981.png",
                notCheckType: "http://static-xesapi.speiyou.cn/1546929306696.png"
            },
            visible: !1,
            changeValue: !0,
            nowReadClass: [],
            aniMain: {},
            aniMask: {},
            timer: null,
            aniConfig: {
                duration: 300,
                timingFunction: "ease"
            }
        }, n.props = {
            tutorDisable: {
                type: Boolean,
                default: !0
            },
            teacherList: {}
        }, n.watch = {
            teacherList: function(e) {
                var t = this;
                e.forEach(function(e) {
                    e.checked && (t.tutorDisable = !e.checked);
                });
            }
        }, n.methods = {
            closes: function() {
                this.hideLayer();
            },
            concealFrame: function() {
                this.hideLayer();
            },
            loadErrorImg: function(e) {
                this.teacherList[e].picture_url = "http://static-xesapi.speiyou.cn/1524642003100.png";
            },
            selectChange: function(e, t) {
                var i = this, n = e.detail.value;
                this.teacherList.forEach(function(e, t) {
                    return String(n) !== String(t) ? void (e.checked = !1) : e.left ? (e.checked = !0, 
                    i.claId = e.class_id, void i.$apply()) : void (e.checked = !1);
                });
            },
            tutorDone: function() {
                this.$emit("chooseTutorEV", this.claId);
            }
        }, o = i, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "hideLayer",
        value: function() {
            var e = this, t = wx.createAnimation(this.aniConfig).bottom("-100%").step();
            this.aniMain = t.export();
            var i = wx.createAnimation(this.aniConfig).opacity(0).step();
            this.aniMask = i.export(), this.$apply(), clearTimeout(this.timer), this.timer = setTimeout(function() {
                e.visible = !1, e.$apply();
            }, 300);
        }
    }, {
        key: "showLayer",
        value: function() {
            this.teacherList.forEach(function(e) {
                e.checked && (e.checked = !e.checked);
            }), this.visible = !0, this.tutorDisable = !0;
            var e = wx.createAnimation(this.aniConfig).bottom(0).step();
            this.aniMain = e.export();
            var t = wx.createAnimation(this.aniConfig).opacity(1).step();
            this.aniMask = t.export(), this.$apply();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = TalAcSheet;