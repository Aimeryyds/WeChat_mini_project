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
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _fiche = require("./fiche.js"), _fiche2 = _interopRequireDefault(_fiche), turncoms = function(e) {
    function t() {
        var e, n, i, o;
        _classCallCheck(this, t);
        for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
        return n = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        i.props = {
            visible: {
                type: Boolean,
                default: !0,
                twoWay: !0
            },
            old_data: {
                type: Object,
                default: {}
            },
            new_data: {
                type: Object,
                default: {}
            },
            change_course: {
                type: Boolean,
                default: !1
            }
        }, i.data = {
            isScroll: !0,
            aniMain: {},
            contentHeight: 1150,
            aniConfig: {
                duration: 300,
                timingFunction: "ease"
            }
        }, i.watch = {}, i.$repeat = {}, i.$props = {
            "old-fiche": {
                "xmlns:v-bind": "",
                "v-bind:cardInfo.sync": "old_data"
            },
            "new-fiche": {
                "v-bind:cardInfo.sync": "new_data"
            }
        }, i.$events = {}, i.components = {
            "old-fiche": _fiche2.default,
            "new-fiche": _fiche2.default
        }, i.methods = {
            click_hide: function() {
                this.hide();
            },
            submitfunc: function() {
                this.hide(), this.$emit("submitFn");
            }
        }, o = n, _possibleConstructorReturn(i, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "hide",
        value: function() {
            var e = wx.createAnimation(this.aniConfig).bottom("-100%").step();
            this.aniMain = e.export();
            var t = wx.createAnimation(this.aniConfig).opacity(0).step();
            this.aniMask = t.export(), this.visible = !0;
        }
    }, {
        key: "show",
        value: function() {
            this.visible = !0;
            var e = wx.createAnimation(this.aniConfig).bottom(0).step();
            this.aniMain = e.export();
            var t = wx.createAnimation(this.aniConfig).opacity(1).step();
            this.aniMask = t.export(), this.$apply();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = turncoms;