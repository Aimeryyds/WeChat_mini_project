Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;
        if (getter === undefined) {
            return undefined;
        }
        return getter.call(receiver);
    }
};

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../api/index.js");

var _index4 = require("../../utils/index.js");

var _index5 = _interopRequireDefault(_index4);

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

var Index = function(_BaseComponent) {
    _inherits(Index, _BaseComponent);
    function Index() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Index);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "loopArray0", "isIPhoneX", "hotspotInfo", "moduleList", "topicId" ], 
        _this.config = {
            usingComponents: {
                // NOTE: 自定义组件使用首字母小写
                statusbar: "../../components/StatusBar/StatusBar"
            }
        }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Index, [ {
        key: "_constructor",
        value: function _constructor(props) {
            _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
            this.state = {
                topicId: this.$router.params.topicId,
                hotspotInfo: {},
                moduleList: []
            };
            var _Taro$getSystemInfoSy = _index2.default.getSystemInfoSync(), model = _Taro$getSystemInfoSy.model;
            this.isIPhoneX = model.indexOf("iPhone X") > -1;
        }
    }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage() {
            var hotspotInfo = this.state.hotspotInfo;
            var title = hotspotInfo.title, cover_img = hotspotInfo.cover_img;
            _index5.default.Tea.event("mp_share", {
                path: this.$scope.route
            });
            return {
                title: title,
                path: "pages/subject/index?topicId=" + this.$router.params.topicId + "&share=1",
                imageUrl: cover_img
            };
        }
    }, {
        key: "componentWillMount",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var _$router$params, topicId, from, data, hotspotInfo, moduleList;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _$router$params = this.$router.params, topicId = _$router$params.topicId, from = _$router$params.from;
                            _context.next = 3;
                            return (0, _index3.getHotSpot)(topicId);

                          case 3:
                            data = _context.sent;
                            hotspotInfo = data.hotspot_info;
                            moduleList = data.module_list;
                            this.setState({
                                hotspotInfo: hotspotInfo,
                                moduleList: moduleList
                            });
                            _index5.default.Tea.event("go_detail", {
                                group_id: topicId,
                                enter_from: from
                            });

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function componentWillMount() {
                return _ref2.apply(this, arguments);
            }
            return componentWillMount;
        }()
    }, {
        key: "clickTimelineItem",
        value: function clickTimelineItem(e) {
            var item = e.currentTarget.dataset.item;
            _index2.default.navigateTo({
                url: "/pages/detail/index?id=" + item.content_id + "&from=topic"
            });
        }
    }, {
        key: "handleClickRelated",
        value: function handleClickRelated(e) {
            var item = e.currentTarget.dataset.item;
            _index2.default.navigateTo({
                url: "/pages/detail/index?id=" + item.content_id + "&from=topic"
            });
        }
    }, {
        key: "handleClickShareImage",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var id, imageURL, res, repsonse;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            id = this.$router.params.topicId;
                            _index2.default.showLoading({
                                title: "生成热点长图中"
                            });
                            _context2.next = 4;
                            return (0, _index3.getHotSpotImage)(id);

                          case 4:
                            imageURL = _context2.sent;
                            _context2.next = 7;
                            return _index2.default.downloadFile({
                                url: imageURL
                            }).catch(function(err) {
                                _index2.default.showToast({
                                    title: "长图生成失败",
                                    icon: "none"
                                });
                            });

                          case 7:
                            res = _context2.sent;
                            _index5.default.Tea.event("click_to_share_moment", {
                                group_id: id,
                                group_type: "topic"
                            });
                            if (!(res.statusCode === 200 && res.tempFilePath)) {
                                _context2.next = 14;
                                break;
                            }
                            _context2.next = 12;
                            return _index2.default.saveImageToPhotosAlbum({
                                filePath: res.tempFilePath
                            }).catch(function(err) {
                                console.log(err);
                                _index2.default.showToast({
                                    title: "保存长图失败",
                                    icon: "none"
                                });
                                return false;
                            });

                          case 12:
                            repsonse = _context2.sent;
                            repsonse && _index2.default.showToast({
                                title: "已保存系统相册"
                            });

                          case 14:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function handleClickShareImage() {
                return _ref3.apply(this, arguments);
            }
            return handleClickShareImage;
        }()
    }, {
        key: "_createData",
        value: function _createData() {
            this.__state = arguments[0] || this.state || {};
            this.__props = arguments[1] || this.props || {};
            var isIPhoneX = this.isIPhoneX;
            var _state = this.__state, hotspotInfo = _state.hotspotInfo, moduleList = _state.moduleList;
            var anonymousState__temp = "/statics/image/hotlogo@2x.png";
            var anonymousState__temp2 = hotspotInfo.onlooker_count ? _index5.default.formatNum(hotspotInfo.onlooker_count) + "人围观" : null;
            var loopArray0 = moduleList.map(function(module, key) {
                module = {
                    $original: (0, _index.internal_get_original)(module)
                };
                var $anonymousCallee__0 = module.$original.module_type === 1 ? module.$original.module_content.trace_data.map(function(data, key) {
                    data = {
                        $original: (0, _index.internal_get_original)(data)
                    };
                    var $loopState__temp4 = !!module.$original.module_content.trace_data ? module.$original.module_type === 1 ? _index5.default.timeago(data.$original.time * 1e3) + " · " + data.$original.author : null : null;
                    return {
                        $loopState__temp4: $loopState__temp4,
                        $original: data.$original
                    };
                }) : [];
                var $anonymousCallee__2 = module.$original.module_type === 2 ? module.$original.module_content.point_data.map(function(point, _k) {
                    point = {
                        $original: (0, _index.internal_get_original)(point)
                    };
                    var $anonymousCallee__1 = module.$original.module_type === 2 ? point.$original.viewport_list_data.map(function(data, key) {
                        data = {
                            $original: (0, _index.internal_get_original)(data)
                        };
                        var $loopState__temp6 = module.$original.module_type === 2 ? [ _index5.default.timeago(data.$original.content.create_time * 1e3), data.$original.content.user.desc || data.$original.content.verified_content ].join(" · ") : null;
                        return {
                            $loopState__temp6: $loopState__temp6,
                            $original: data.$original
                        };
                    }) : [];
                    return {
                        $anonymousCallee__1: $anonymousCallee__1,
                        $original: point.$original
                    };
                }) : [];
                return {
                    $anonymousCallee__0: $anonymousCallee__0,
                    $anonymousCallee__2: $anonymousCallee__2,
                    $original: module.$original
                };
            });
            Object.assign(this.__state, {
                anonymousState__temp: anonymousState__temp,
                anonymousState__temp2: anonymousState__temp2,
                loopArray0: loopArray0,
                isIPhoneX: isIPhoneX
            });
            return this.__state;
        }
    } ]);
    return Index;
}(_index.Component);

Index.properties = {};

Index.$$events = [ "handleClickShareImage", "clickTimelineItem", "handleClickRelated" ];

exports.default = Index;

Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));