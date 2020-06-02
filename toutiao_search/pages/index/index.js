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

// NOTE: 为了添加 Taro 对自定义组件的监听
{
    require("../../components/StatusBar/StatusBar.js");
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
        _this), _this.$usedState = [ "anonymousState__temp", "loopArray0", "loopArray1", "hotSearchData", "feedListData" ], 
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
                hotSearchData: [],
                feedListData: []
            };
            var systemInfo = _index2.default.getSystemInfoSync();
            var screenHeight = systemInfo.screenHeight;
            this.screenHeight = screenHeight;
            this.gidCache = {};
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.initFeedList(true);
        }
    }, {
        key: "componentDidShow",
        value: function componentDidShow() {
            this.initHotSearch();
        }
    }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage() {
            _index5.default.Tea.event("mp_share", {
                path: this.$scope.route
            });
            return {
                title: "今日头条热搜",
                path: "pages/index/index?share=1"
            };
        }
    }, {
        key: "initHotSearch",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var _ref3, hotSearchList;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _index3.getHotSearch)();

                          case 2:
                            _ref3 = _context.sent;
                            hotSearchList = _ref3.hotSearchList;
                            if (hotSearchList && hotSearchList.length > 0) {
                                this.setState({
                                    hotSearchData: hotSearchList.slice(0, 5)
                                });
                                // if (hotSearchList[0].isHotspot) {
                                //     this.setState({
                                //         hotSearchData: hotSearchList.slice(0, 3)
                                //     });
                                // } else {
                                //     this.setState({
                                //         hotSearchData: hotSearchList.slice(0, 5)
                                //     });
                                // }
                                                        }

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function initHotSearch() {
                return _ref2.apply(this, arguments);
            }
            return initHotSearch;
        }()
    }, {
        key: "handleClickHotspot",
        value: function handleClickHotspot(e) {
            var item = e.currentTarget.dataset.item;
            var topicId = item.hotspot.gid;
            _index2.default.navigateTo({
                url: "/pages/subject/index?topicId=" + topicId + "&from=hot_search"
            });
        }
    }, {
        key: "handleClickDetail",
        value: function handleClickDetail(e) {
            var _e$currentTarget$data = e.currentTarget.dataset, item = _e$currentTarget$data.item, index = _e$currentTarget$data.index;
            var id = item.content.gid;
            _index2.default.navigateTo({
                url: "/pages/detail/index?id=" + id + "&from=hot_search&rank=" + (1 + index)
            });
        }
    }, {
        key: "handleClickHotSearch",
        value: function handleClickHotSearch(e) {
            var item = e.currentTarget.dataset.item;
            var query = item.hotSearchWord;
            _index2.default.navigateTo({
                url: "/pages/search/index?query=" + encodeURIComponent(query) + "&source=trending_card"
            });
        }
    }, {
        key: "handleClickSearchRank",
        value: function handleClickSearchRank() {
            _index5.default.Tea.event("more_trending_click", {
                category_name: "__all__"
            });
            _index2.default.navigateTo({
                url: "/pages/searchRank/index"
            });
        }
    }, {
        key: "handleClickFeedList",
        value: function handleClickFeedList(e) {
            var item = e.currentTarget.dataset.item;
            var id = item.item_id;
            _index2.default.navigateTo({
                url: "/pages/detail/index?id=" + id + "&from=feed"
            });
        }
    }, {
        key: "initFeedList",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;
                var data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return (0, _index3.getFeedList)(true);

                          case 2:
                            data = _context2.sent;
                            this.setState({
                                feedListData: data
                            }, function() {
                                _this2.checkImpression();
                            });

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function initFeedList() {
                return _ref4.apply(this, arguments);
            }
            return initFeedList;
        }()
    }, {
        key: "onScrollToLower",
        value: function() {
            var _ref5 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3(e) {
                var _this3 = this;
                var feedListData, lastData, data;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!(e.detail.direction !== "bottom")) {
                                _context3.next = 2;
                                break;
                            }
                            return _context3.abrupt("return");

                          case 2:
                            if (!this.lock) {
                                _context3.next = 4;
                                break;
                            }
                            return _context3.abrupt("return");

                          case 4:
                            this.lock = true;
                            feedListData = this.state.feedListData;
                            lastData = feedListData[feedListData.length - 1];
                            _context3.next = 9;
                            return (0, _index3.getFeedList)(false, lastData.behot_time);

                          case 9:
                            data = _context3.sent;
                            this.setState({
                                feedListData: feedListData.concat(data)
                            }, function() {
                                _this3.lock = false;
                            });

                          case 11:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function onScrollToLower(_x) {
                return _ref5.apply(this, arguments);
            }
            return onScrollToLower;
        }()
    }, {
        key: "onScroll",
        value: function onScroll() {
            this.checkImpression();
        }
    }, {
        key: "checkImpression",
        value: function checkImpression() {
            var _this4 = this;
            var query = _index2.default.createSelectorQuery();
            query.selectAll(".feedlist-item").boundingClientRect(function(all) {
                all.forEach(function(i) {
                    var id = i.dataset.item.group_id;
                    if (!_this4.gidCache[id] && i.top > 0 && i.top < _this4.screenHeight) {
                        _index5.default.Tea.event("client_show", {
                            group_id: id,
                            group_type: i.dataset.item.has_video ? "video" : "article",
                            position: "feed"
                        });
                        _this4.gidCache[id] = 1;
                    }
                });
            }).exec();
            query.select(".more").boundingClientRect(function(rect) {
                if (!_this4.hasSendMoreBtnImpression && rect.top > 0 && rect.top < _this4.screenHeight) {
                    _this4.hasSendMoreBtnImpression = true;
                    _index5.default.Tea.event("more_trending_show", {
                        category_name: "__all__"
                    });
                }
            }).exec();
        }
    }, {
        key: "_createData",
        value: function _createData() {
            this.__state = arguments[0] || this.state || {};
            this.__props = arguments[1] || this.props || {};
            var _state = this.__state, hotSearchData = _state.hotSearchData, feedListData = _state.feedListData;
            var anonymousState__temp = "/statics/image/hotlogo@2x.png";
            var loopArray0 = hotSearchData.length > 0 ? hotSearchData.map(function(i, key) {
                i = {
                    $original: (0, _index.internal_get_original)(i)
                };
                var $loopState__temp3 = hotSearchData.length > 0 ? i.$original.isHotspot ? key + 1 + ". " + i.$original.hotSearchWord + "（" + _index5.default.formatNum(i.$original.hotspot.viewCount) + "人围观）" : null : null;
                var $loopState__temp5 = hotSearchData.length > 0 ? (0, _index.internal_inline_style)({
                    width: i.$original.content.picUrl ? "60%" : "100%"
                }) : null;
                return {
                    $loopState__temp3: $loopState__temp3,
                    $loopState__temp5: $loopState__temp5,
                    $original: i.$original
                };
            }) : [];
            var loopArray1 = feedListData.map(function(i) {
                i = {
                    $original: (0, _index.internal_get_original)(i)
                };
                var $loopState__temp7 = i.$original.is_stick ? i.$original.mode === "more_mode" ? "/statics/image/tag-stick.png" : null : null;
                var $loopState__temp9 = i.$original.hot ? i.$original.mode === "more_mode" ? "/statics/image/tag-hot.png" : null : null;
                var $loopState__temp11 = i.$original.mode === "more_mode" ? _index5.default.formatNum(i.$original.comment_count) : null;
                var $loopState__temp13 = i.$original.is_stick ? i.$original.mode === "middle_mode" ? "/statics/image/tag-stick.png" : null : null;
                var $loopState__temp15 = i.$original.hot ? i.$original.mode === "middle_mode" ? "/statics/image/tag-hot.png" : null : null;
                var $loopState__temp17 = i.$original.mode === "middle_mode" ? _index5.default.formatNum(i.$original.comment_count) : null;
                var $loopState__temp19 = i.$original.has_video ? i.$original.mode === "large_mode" ? "/statics/image/play-btn.png" : null : null;
                var $loopState__temp21 = i.$original.is_stick ? i.$original.mode === "large_mode" ? "/statics/image/tag-stick.png" : null : null;
                var $loopState__temp23 = i.$original.hot ? i.$original.mode === "large_mode" ? "/statics/image/tag-hot.png" : null : null;
                var $loopState__temp25 = i.$original.mode === "large_mode" ? _index5.default.formatNum(i.$original.comment_count) : null;
                var $loopState__temp27 = i.$original.is_stick ? "/statics/image/tag-stick.png" : null;
                var $loopState__temp29 = i.$original.hot ? "/statics/image/tag-hot.png" : null;
                var $loopState__temp31 = _index5.default.formatNum(i.$original.comment_count);
                return {
                    $loopState__temp7: $loopState__temp7,
                    $loopState__temp9: $loopState__temp9,
                    $loopState__temp11: $loopState__temp11,
                    $loopState__temp13: $loopState__temp13,
                    $loopState__temp15: $loopState__temp15,
                    $loopState__temp17: $loopState__temp17,
                    $loopState__temp19: $loopState__temp19,
                    $loopState__temp21: $loopState__temp21,
                    $loopState__temp23: $loopState__temp23,
                    $loopState__temp25: $loopState__temp25,
                    $loopState__temp27: $loopState__temp27,
                    $loopState__temp29: $loopState__temp29,
                    $loopState__temp31: $loopState__temp31,
                    $original: i.$original
                };
            });
            Object.assign(this.__state, {
                anonymousState__temp: anonymousState__temp,
                loopArray0: loopArray0,
                loopArray1: loopArray1
            });
            return this.__state;
        }
    } ]);
    return Index;
}(_index.Component);

Index.properties = {};

Index.$$events = [ "onScroll", "onScrollToLower", "handleClickHotSearch", "handleClickHotspot", "handleClickDetail", "handleClickSearchRank", "handleClickFeedList" ];

exports.default = Index;

Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));