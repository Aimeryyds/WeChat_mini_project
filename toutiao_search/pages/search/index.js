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

var getIcon = function getIcon(tag) {
    switch (tag) {
      case 2:
        return "/statics/image/icon-hot@2x.png";
        break;

      case 3:
        return "/statics/image/icon-recommend@2x.png";
        break;

      case 5:
        return "/statics/image/icon-local@2x.png";
        break;

      case 1:
        return "/statics/image/icon-new@2x.png";
        break;

      case 4:
        return "/statics/image/icon-unique@2x.png";
        break;

      default:
        return "/statics/image/icon-hot@2x.png";
    }
};

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
        _this), _this.$usedState = [ "anonymousState__temp17", "anonymousState__temp18", "anonymousState__temp19", "loopArray0", "loopArray1", "defaultQuery", "focus", "query", "searchResult", "searchSugData", "searchData", "searchHistory", "hideSearchHistory", "$anonymousCallee__0", "updateTime", "hotSearchList", "hasMore", "offset" ], 
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
            var searchData = _index2.default.getStorageSync("searchData") || "[]";
            searchData = JSON.parse(searchData);
            var searchHistory = _index2.default.getStorageSync("searchHistory") || "[]";
            searchHistory = JSON.parse(searchHistory);
            var _$router$params = this.$router.params, source = _$router$params.source, query = _$router$params.query;
            this.state = {
                query: query || "",
                defaultQuery: query,
                searchResult: [],
                hasMore: true,
                offset: 0,
                hotSearchList: [],
                updateTime: null,
                focus: !query,
                searchData: searchData || [],
                searchHistory: searchHistory || [],
                hideSearchHistory: true,
                searchSugData: []
            };
            this.source = source || "";
        }
    }, {
        key: "componentWillMount",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var query, _ref3, hotSearchList, updateTime;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            query = this.state.query;
                            if (query) {
                                this.refreshSearchResult();
                            }
                            _context.next = 4;
                            return (0, _index3.getHotSearch)();

                          case 4:
                            _ref3 = _context.sent;
                            hotSearchList = _ref3.hotSearchList;
                            updateTime = _ref3.updateTime;
                            this.setState({
                                hotSearchList: hotSearchList.slice(0, 10),
                                updateTime: updateTime
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
        key: "onShareAppMessage",
        value: function onShareAppMessage() {
            _index5.default.Tea.event("mp_share", {
                path: this.$scope.route
            });
            var query = this.state.query;
            return {
                title: "今日头条热搜",
                path: "pages/search/index?query=" + query + "&share=1"
            };
        }
    }, {
        key: "handleCancle",
        value: function handleCancle() {
            _index2.default.navigateBack({
                delta: 1
            });
        }
    }, {
        key: "handleClickRank",
        value: function handleClickRank(e) {
            var _this2 = this;
            var _e$currentTarget$data = e.currentTarget.dataset, item = _e$currentTarget$data.item, key = _e$currentTarget$data.key;
            var query = item.hotSearchWord;
            if (key === 9) {
                _index5.default.Tea.event("more_trending_click", {
                    category_name: "search_init"
                });
                _index2.default.navigateTo({
                    url: "/pages/searchRank/index"
                });
                return;
            }
            this.source = "trending_list";
            this.setState({
                query: query,
                defaultQuery: query
            }, function() {
                return _this2.refreshSearchResult();
            });
        }
    }, {
        key: "deteleInput",
        value: function deteleInput() {
            var searchHistory = _index2.default.getStorageSync("searchHistory") || "[]";
            searchHistory = JSON.parse(searchHistory);
            this.setState({
                defaultQuery: "",
                query: "",
                searchResult: [],
                hasMore: true,
                offset: 0,
                focus: true,
                searchHistory: searchHistory
            });
        }
    }, {
        key: "refreshSearchResult",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var _this3 = this;
                var _state, searchResult, query, offset, searchHistory, data, hasMore;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _state = this.state, searchResult = _state.searchResult, query = _state.query, offset = _state.offset;
                            searchHistory = JSON.parse(_index2.default.getStorageSync("searchHistory") || "[]");
                            if (searchHistory.indexOf(query) > -1) {
                                searchHistory.splice(searchHistory.indexOf(query), 1);
                            }
                            searchHistory.unshift(query);
                            _index2.default.setStorageSync("searchHistory", JSON.stringify(searchHistory));
                            _context2.next = 7;
                            return (0, _index3.getSearchResult)(query, offset * 10);

                          case 7:
                            data = _context2.sent;
                            hasMore = false;
                            if (data) {
                                if (offset === 0) {
                                    this.searchId = data.reqId;
                                }
                                offset = offset + 1;
                                searchResult = searchResult.concat(data.list);
                                hasMore = data.hasMore && data.list.length > 0;
                            }
                            _index5.default.Tea.event("search_success", {
                                search_id: this.searchId,
                                query_id: "",
                                query: query,
                                source: this.source || "",
                                is_no_result: data && data.list ? data.list.length > 0 ? 1 : 0 : 2,
                                offset: (offset - 1) * 10
                            });
                            // 过滤视频内容
                                                        searchResult = searchResult.filter(function(i) {
                                return !i.has_video;
                            });
                            this.setState({
                                searchResult: searchResult,
                                offset: offset,
                                hasMore: hasMore
                            }, function() {
                                _this3.lock = false;
                            });

                          case 13:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function refreshSearchResult() {
                return _ref4.apply(this, arguments);
            }
            return refreshSearchResult;
        }()
    }, {
        key: "onReachBottom",
        value: function onReachBottom() {
            if (this.lock || !this.state.hasMore) {
                return;
            }
            this.lock = true;
            this.refreshSearchResult();
        }
    }, {
        key: "handleClickFeedList",
        value: function handleClickFeedList(e) {
            var query = this.state.query;
            var _e$currentTarget$data2 = e.currentTarget.dataset, item = _e$currentTarget$data2.item, index = _e$currentTarget$data2.index;
            var id = item.item_id;
            _index5.default.Tea.event("search_result_click", {
                search_id: this.searchId,
                query: query,
                source: this.source,
                rank: index
            });
            _index2.default.navigateTo({
                url: "/pages/detail/index?id=" + id + "&from=search"
            });
        }
    }, {
        key: "handleConfirm",
        value: function handleConfirm(e) {
            var _this4 = this;
            var query = e.target.value;
            if (query) {
                this.source = "input";
                this.setState({
                    query: query,
                    offset: 0,
                    searchResult: [],
                    defaultQuery: query,
                    focus: false
                }, function() {
                    return _this4.refreshSearchResult();
                });
            }
        }
    }, {
        key: "handleInput",
        value: function handleInput(e) {
            var _this5 = this;
            var value = e.currentTarget.value;
            if (!value) {
                this.deteleInput();
                return;
            }
            this.setState({
                defaultQuery: value
            });
            (0, _index3.getSearchSug)(value).then(function(res) {
                _this5.setState({
                    searchSugData: res
                });
            });
        }
    }, {
        key: "handleClickDeleteHistory",
        value: function handleClickDeleteHistory() {
            _index2.default.setStorageSync("searchHistory", "[]");
            this.setState({
                searchHistory: []
            });
        }
    }, {
        key: "handleClickSearchData",
        value: function handleClickSearchData(e) {
            var _this6 = this;
            var item = e.currentTarget.dataset.item;
            this.source = "search_bar_inner";
            this.setState({
                query: item,
                offset: 0,
                searchResult: [],
                defaultQuery: item,
                focus: false
            }, function() {
                return _this6.refreshSearchResult();
            });
        }
    }, {
        key: "handleClickHistory",
        value: function handleClickHistory(e) {
            var _this7 = this;
            var item = e.currentTarget.dataset.item;
            this.source = "search_history";
            this.setState({
                query: item,
                offset: 0,
                searchResult: [],
                defaultQuery: item,
                focus: false
            }, function() {
                return _this7.refreshSearchResult();
            });
        }
    }, {
        key: "handleClickSearchSug",
        value: function handleClickSearchSug(e) {
            var _this8 = this;
            var item = e.currentTarget.dataset.item;
            this.source = "sug";
            this.setState({
                query: item.keyword,
                offset: 0,
                searchResult: [],
                defaultQuery: item.keyword,
                focus: false
            }, function() {
                return _this8.refreshSearchResult();
            });
        }
    }, {
        key: "handleClickHideSearchHistory",
        value: function handleClickHideSearchHistory() {
            var hideSearchHistory = this.state.hideSearchHistory;
            this.setState({
                hideSearchHistory: !hideSearchHistory
            });
        }
    }, {
        key: "_createData",
        value: function _createData() {
            this.__state = arguments[0] || this.state || {};
            this.__props = arguments[1] || this.props || {};
            var _state2 = this.__state, hotSearchList = _state2.hotSearchList, updateTime = _state2.updateTime, defaultQuery = _state2.defaultQuery, query = _state2.query, searchResult = _state2.searchResult, focus = _state2.focus, hasMore = _state2.hasMore, searchData = _state2.searchData, searchHistory = _state2.searchHistory, hideSearchHistory = _state2.hideSearchHistory, searchSugData = _state2.searchSugData;
            var anonymousState__temp17 = searchHistory && searchHistory.length > 0 ? "/statics/image/delete.png" : null;
            var anonymousState__temp18 = "/statics/image/hotlogo@2x.png";
            var anonymousState__temp19 = updateTime ? "上次更新 " + _index5.default.timeago((updateTime - 10) * 1e3) : null;
            var $anonymousCallee__0 = searchHistory && searchHistory.length > 0 ? searchHistory.slice(0, hideSearchHistory ? 4 : 20) : [];
            var loopArray0 = query ? searchResult.map(function(i, _k) {
                i = {
                    $original: (0, _index.internal_get_original)(i)
                };
                var $loopState__temp2 = i.$original.is_stick ? i.$original.mode === "more_mode" ? "/statics/image/tag-stick.png" : null : null;
                var $loopState__temp4 = i.$original.tip === 1 ? i.$original.mode === "more_mode" ? "/statics/image/tag-hot.png" : null : null;
                var $loopState__temp6 = i.$original.tip === 1 ? i.$original.mode === "middle_mode" ? "/statics/image/tag-hot.png" : null : null;
                var $loopState__temp8 = i.$original.has_video ? i.$original.mode === "middle_mode" ? _index5.default.formatTime(i.$original.video_duration) : null : null;
                var $loopState__temp10 = i.$original.has_video ? i.$original.mode === "large_mode" ? "/statics/image/play-btn.png" : null : null;
                var $loopState__temp12 = i.$original.tip === 1 ? i.$original.mode === "large_mode" ? "/statics/image/tag-hot.png" : null : null;
                var $loopState__temp14 = i.$original.is_stick ? "/statics/image/tag-stick.png" : null;
                var $loopState__temp16 = i.$original.tip === 1 ? "/statics/image/tag-hot.png" : null;
                return {
                    $loopState__temp2: $loopState__temp2,
                    $loopState__temp4: $loopState__temp4,
                    $loopState__temp6: $loopState__temp6,
                    $loopState__temp8: $loopState__temp8,
                    $loopState__temp10: $loopState__temp10,
                    $loopState__temp12: $loopState__temp12,
                    $loopState__temp14: $loopState__temp14,
                    $loopState__temp16: $loopState__temp16,
                    $original: i.$original
                };
            }) : [];
            var loopArray1 = !(defaultQuery && searchSugData.length > 0) ? hotSearchList.map(function(i, key) {
                i = {
                    $original: (0, _index.internal_get_original)(i)
                };
                var $loopState__temp21 = i.$original.tag && key < 9 ? getIcon(i.$original.tag) : null;
                var $loopState__temp23 = i.$original.tag && key < 9 ? (0, _index.internal_inline_style)({
                    width: i.$original.tag === "local" ? "28px" : "14px"
                }) : null;
                return {
                    $loopState__temp21: $loopState__temp21,
                    $loopState__temp23: $loopState__temp23,
                    $original: i.$original
                };
            }) : [];
            Object.assign(this.__state, {
                anonymousState__temp17: anonymousState__temp17,
                anonymousState__temp18: anonymousState__temp18,
                anonymousState__temp19: anonymousState__temp19,
                loopArray0: loopArray0,
                loopArray1: loopArray1,
                $anonymousCallee__0: $anonymousCallee__0
            });
            return this.__state;
        }
    } ]);
    return Index;
}(_index.Component);

Index.properties = {};

Index.$$events = [ "handleInput", "handleConfirm", "deteleInput", "handleCancle", "handleClickFeedList", "handleClickSearchSug", "handleClickSearchData", "handleClickHideSearchHistory", "handleClickDeleteHistory", "handleClickHistory", "handleClickRank" ];

exports.default = Index;

Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));