Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = undefined;

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _wepy = require("./../../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _empty = require("./../empty.js");

var _empty2 = _interopRequireDefault(_empty);

var _myService = require("./../../service/api/myService.js");

var _api = require("./../../service/api/api.js");

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _util = require("./../../service/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function(value) {
                        step("next", value);
                    }, function(err) {
                        step("throw", err);
                    });
                }
            }
            return step("next");
        });
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var myService = function(_wepy$component) {
    _inherits(myService, _wepy$component);
    function myService() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, myService);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myService.__proto__ || Object.getPrototypeOf(myService)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.$repeat = {}, _this.$props = {
            empty: {
                "xmlns:v-bind": "",
                "v-bind:text.once": "text"
            }
        }, _this.$events = {}, _this.components = {
            empty: _empty2.default
        }, _this.data = {
            text: "您还没有定制专属服务，快去看看有什么服务",
            indexData: "",
            mySubData: "",
            check: -1,
            isLoad: false,
            bottom: "-100%",
            isCover: false,
            showVideo: true,
            showVideo1: true,
            isCom: false
        }, _this.events = {
            "get-myService-data": function getMyServiceData($event) {
                _this.isDz();
            },
            checkShowVideo: function checkShowVideo(res) {
                _this.showVideo = res;
            }
        }, _this.watch = {}, _this.methods = {
            canCustomized: function canCustomized() {
                wx.navigateTo({
                    url: "/pages/myService/moduleList"
                });
            },
            tap: function() {
                var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.bottom = "-100%";
                                this.showVideo1 = true;
                                this.isCover = false;
                                this.$apply();

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function tap() {
                    return _ref2.apply(this, arguments);
                }
                return tap;
            }(),
            goVideo: function goVideo(val) {
                wx.navigateTo({
                    url: "/pages/myService/video?type=1&id=" + val.article_id + "&catalog=" + val.catalog
                });
            },
            goDetail1: function goDetail1(val) {
                if (val.catalog == "cjgcj") {} else {
                    wx.navigateTo({
                        url: "/pages/myService/artice?type=1&id=" + val.article_id + "&catalog=" + val.catalog
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(myService, [ {
        key: "onLoad",
        value: function onLoad() {}
    }, {
        key: "isDz",
        //是否定制过栏目
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _Tips2.default.loading();
                            this.isCom = false;
                            _context2.next = 4;
                            return (0, _myService.isSubscribe)();

                          case 4:
                            res = _context2.sent;
                            _Tips2.default.loaded();
                            wx.stopPullDownRefresh();
                            if (res.code == 0) {
                                if (res.data.isSubscribe) {
                                    this.isLoad = false;
                                    this.getMysub();
                                } else {
                                    this.isLoad = true;
                                    this.check = -1;
                                    this.mySubData = [];
                                }
                            } else {
                                this.isLoad = true;
                            }
                            this.$apply();
                            this.isCom = true;

                          case 10:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function isDz() {
                return _ref3.apply(this, arguments);
            }
            return isDz;
        }()
    }, {
        key: "getMysub",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3() {
                var _this2 = this;
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return (0, _myService.mySubscribe)();

                          case 3:
                            res = _context3.sent;
                            if (res.code == 0) {
                                this.check = 1;
                                this.mySubData = res.data;
                                this.mySubData.forEach(function(ele) {
                                    if (ele.video && ele.video.indexOf("p.bokecc.com") != -1) {
                                        ele.video.replace(/HTTPS/g, "https");
                                        ele.videoOpt = _util2.default.urlToObj(ele.video);
                                        (0, _api.getCCMp4)(ele.videoOpt.vid, ele.videoOpt.siteid, "", function(res) {
                                            var data = res.data;
                                            data = data.substring(data.indexOf("(") + 1, data.length - 1);
                                            var dataObj = JSON.parse(data);
                                            // 高清
                                                                                        ele.videoUrl = dataObj.copies[0].playurl;
                                            ele.videoCover = dataObj.img;
                                            _this2.$apply();
                                        });
                                    }
                                });
                                this.$apply();
                                this.isCom = true;
                            }
                            _context3.next = 9;
                            break;

                          case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3["catch"](0);

                          case 9:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this, [ [ 0, 7 ] ]);
            }));
            function getMysub() {
                return _ref4.apply(this, arguments);
            }
            return getMysub;
        }()
    } ]);
    return myService;
}(_wepy2.default.component);

exports.default = myService;