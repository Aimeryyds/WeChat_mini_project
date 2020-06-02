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

var _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _global = require("./../../common/util/global.js"), swiperBanner = function(e) {
    function t() {
        var e, o, i, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, a = Array(s), n = 0; n < s; n++) a[n] = arguments[n];
        return o = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        i.data = {
            videoPlay: !1,
            videoPlayTea: !1,
            swiperinfo: {
                isLoad: !1,
                current: 0,
                isIndicatorDots: !1,
                isAutoplay: !1,
                circular: !0
            },
            defaultShowVideo: {},
            lightHouseVideo: {},
            topImages: [],
            mpVideoSupport: !1,
            defaultImg: "https://static-xesapi.speiyou.cn/xesFeProject/xesFeSource/xesImagesLibrary/1587718090027.png",
            playIcon: "https://static-xesapi.speiyou.cn/xesFeProject/xesFeSource/xesImagesLibrary/1585822177870.png"
        }, i.components = {}, i.props = {
            isWifi: {
                type: Boolean,
                default: !1
            },
            bannerInfos: {
                type: Object,
                default: {
                    topImages: null,
                    defaultShowVideo: null,
                    lightHouseVideo: {}
                }
            }
        }, i.computed = {
            bannerLength: function() {
                var e = this.topImages.length;
                return (this.defaultShowVideo.teacherVideoUrl || this.defaultShowVideo.teacherImg) && e++, 
                this.lightHouseVideo.topVideo && e++, e;
            }
        }, i.watch = {
            bannerInfos: function(e) {
                var t = e.topImages, o = e.defaultShowVideo, i = e.lightHouseVideo;
                this.topImages = t, this.defaultShowVideo = o, this.lightHouseVideo = i, this.mpVideoSupport = (0, 
                _global.compareVersion)("2.4.4"), this.mpVideoSupport < 0 && (this.defaultShowVideo.teacherVideoUrl = null, 
                this.lightHouseVideo.topVideo = null), !o.teacherImg && o.teacherVideoUrl && (this.defaultShowVideo.teacherImg = this.defaultImg), 
                i.videoCoverImage || (this.lightHouseVideo.videoCoverImage = this.defaultImg), t.length || o.teacherImg || o.teacherVideoUrl || i.topVideo || (this.topImages = [ this.defaultImg ]), 
                this.$apply();
            }
        }, i.methods = {
            swiperChange: function(e) {
                this.videoPlay = !1, this.videoPlayTea = !1, this.isWifi = !1, this.swiperinfo.current = Number(e.detail.current), 
                this.$apply();
            },
            playVideo: function() {
                this.videoPlay = !0;
            },
            playVideoTea: function() {
                this.videoPlayTea = !0;
            },
            hideVideo: function() {
                this.videoPlay = !1, this.$apply();
            }
        }, r = o, _possibleConstructorReturn(i, r);
    }
    return _inherits(t, e), t;
}(_wepy2.default.component);

exports.default = swiperBanner;