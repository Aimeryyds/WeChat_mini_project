Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.getFeedList = exports.getSearchSug = exports.getReplyList = exports.getComment = exports.getSearchResult = exports.getHotSpotImage = exports.getHotSpot = exports.getHotSearch = undefined;

var getHotSearch = exports.getHotSearch = function() {
    var _ref = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _index2.default.request({
                        url: "https://m.toutiao.com/microapp-hot-topic/api/get-hot-search"
                    });

                  case 2:
                    data = _context.sent;
                    if (!(data.statusCode === 200 && data.data.message === "success")) {
                        _context.next = 5;
                        break;
                    }
                    return _context.abrupt("return", data.data.data);

                  case 5:
                    return _context.abrupt("return", false);

                  case 6:
                  case "end":
                    return _context.stop();
                }
            }
        }, _callee, this);
    }));
    return function getHotSearch() {
        return _ref.apply(this, arguments);
    };
}();

var getHotSpot = exports.getHotSpot = function() {
    var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(id) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _index2.default.request({
                        url: "https://m.toutiao.com/microapp-hot-topic/api/get-hot-spot?gid=" + id
                    });

                  case 2:
                    data = _context2.sent;
                    if (!(data.statusCode === 200 && data.data.message === "success")) {
                        _context2.next = 5;
                        break;
                    }
                    return _context2.abrupt("return", data.data.data);

                  case 5:
                    return _context2.abrupt("return", false);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
    return function getHotSpot(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var getHotSpotImage = exports.getHotSpotImage = function() {
    var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3(id) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _index2.default.request({
                        url: "https://m.toutiao.com/microapp-hot-topic/api/get-hot-spot-image?id=" + id
                    }).catch(function(err) {
                        console.log(err);
                    });

                  case 2:
                    data = _context3.sent;
                    if (!(data.statusCode === 200 && data.data.message === "success")) {
                        _context3.next = 5;
                        break;
                    }
                    return _context3.abrupt("return", data.data.data);

                  case 5:
                    return _context3.abrupt("return", false);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
    return function getHotSpotImage(_x2) {
        return _ref3.apply(this, arguments);
    };
}();

var getSearchResult = exports.getSearchResult = function() {
    var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee4(query) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var accessToken, data, _accessToken, keyword, hasMore, reqId, list, ret;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    accessToken = _index2.default.getStorageSync("accessToken") || "";
                    _context4.next = 3;
                    return _index2.default.request({
                        url: "https://m.toutiao.com/microapp-hot-topic/api/search?query=" + query + "&accessToken=" + accessToken + "&offset=" + offset
                    }).catch(function(err) {
                        console.log(err);
                        return null;
                    });

                  case 3:
                    data = _context4.sent;
                    if (!(data && data.statusCode === 200 && data.data.message === "success")) {
                        _context4.next = 13;
                        break;
                    }
                    _accessToken = data.data.accessToken;
                    _index2.default.setStorageSync("accessToken", _accessToken);
                    keyword = data.data.data.keyword || [];
                    hasMore = data.data.data.hasMore;
                    reqId = data.data.data.reqId;
                    list = data.data.data.list.map(function(i) {
                        i.timeago = _index4.default.timeago(i.publish_time * 1e3);
                        i.richTitle = getRichTitle(i.title, keyword);
                        return i;
                    });
                    ret = {
                        list: list,
                        keyword: keyword,
                        hasMore: hasMore,
                        reqId: reqId
                    };
                    return _context4.abrupt("return", ret);

                  case 13:
                    return _context4.abrupt("return", null);

                  case 14:
                  case "end":
                    return _context4.stop();
                }
            }
        }, _callee4, this);
    }));
    return function getSearchResult(_x4) {
        return _ref4.apply(this, arguments);
    };
}();

var getComment = exports.getComment = function() {
    var _ref5 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee5(id, offset) {
        var header, res, hasMoreComment, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    header = _index4.default.getRequestHeader();
                    _context5.next = 3;
                    return _index2.default.request({
                        url: "https://ib.snssdk.com/article/v1/tab_comments/?group_id=" + id + "&&tab_index=0&count=10&offset=" + offset,
                        header: header
                    });

                  case 3:
                    res = _context5.sent;
                    if (!(res.statusCode === 200 && res.data && res.data.data)) {
                        _context5.next = 8;
                        break;
                    }
                    hasMoreComment = res.data.has_more;
                    data = res.data.data;
                    return _context5.abrupt("return", {
                        data: data,
                        hasMoreComment: hasMoreComment
                    });

                  case 8:
                    return _context5.abrupt("return", {
                        commentData: [],
                        hasMoreComment: false
                    });

                  case 9:
                  case "end":
                    return _context5.stop();
                }
            }
        }, _callee5, this);
    }));
    return function getComment(_x5, _x6) {
        return _ref5.apply(this, arguments);
    };
}();

var getReplyList = exports.getReplyList = function() {
    var _ref6 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee6(id) {
        var res, _res$data$data, data, has_more;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _index2.default.request({
                        url: "https://is-hl.snssdk.com/2/comment/v4/reply_list/?id=" + id + "&count=10&offset=0"
                    });

                  case 2:
                    res = _context6.sent;
                    if (!(res.statusCode === 200 && res.data && res.data.data)) {
                        _context6.next = 6;
                        break;
                    }
                    _res$data$data = res.data.data, data = _res$data$data.data, has_more = _res$data$data.has_more;
                    return _context6.abrupt("return", {
                        data: data,
                        hasMore: has_more
                    });

                  case 6:
                    return _context6.abrupt("return", {
                        commentData: [],
                        hasMoreComment: false
                    });

                  case 7:
                  case "end":
                    return _context6.stop();
                }
            }
        }, _callee6, this);
    }));
    return function getReplyList(_x7) {
        return _ref6.apply(this, arguments);
    };
}();

var getSearchSug = exports.getSearchSug = function() {
    var _ref7 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee7(keyword) {
        var res;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return _index2.default.request({
                        url: "https://is-hl.snssdk.com/2/article/search_sug/?keyword=" + keyword
                    });

                  case 2:
                    res = _context7.sent;
                    if (!(res.statusCode === 200 && res.data && res.data.data)) {
                        _context7.next = 5;
                        break;
                    }
                    return _context7.abrupt("return", res.data.data);

                  case 5:
                    return _context7.abrupt("return", []);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
            }
        }, _callee7, this);
    }));
    return function getSearchSug(_x8) {
        return _ref7.apply(this, arguments);
    };
}();

var getFeedList = exports.getFeedList = function() {
    var _ref8 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee8() {
        var isFirstTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var max_behot_time = arguments[1];
        var as, cp, header, params, url, data, ret;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    as = ASCP().as;
                    cp = ASCP().cp;
                    header = _index4.default.getRequestHeader();
                    params = {
                        aid: 1162,
                        ac: "wap",
                        tag: "news_entertainment",
                        format: "json_raw",
                        count: 20,
                        as: as,
                        cp: cp,
                        enable_stick: ""
                    };
                    if (isFirstTime) {
                        params.min_behot_time = 0;
                    } else {
                        params.max_behot_time = max_behot_time;
                    }
                    url = "https://m.toutiao.com/list/wxapp/?" + _index6.default.stringify(params);
                    _context8.next = 8;
                    return _index2.default.request({
                        url: url,
                        header: header
                    });

                  case 8:
                    data = _context8.sent;
                    if (!(data.statusCode === 200 && data.data.data && data.data.data.length > 0)) {
                        _context8.next = 12;
                        break;
                    }
                    ret = data.data.data.filter(function(i) {
                        return !i.has_video;
                    }).map(function(item) {
                        if (item.has_video && item.video_duration) {
                            item.video_duration_format = _index4.default.formatTime(item.video_duration);
                        }
                        if (item.video_detail_info) {
                            item.video_watch_count = _index4.default.formatNum(item.video_detail_info.video_watch_count);
                        }
                        if (item.datetime) {
                            item.timeago = _index4.default.timeago(item.datetime);
                        }
                        if (item.hot) {
                            item.hot = item.hot === 1;
                        }
                        if (item.is_stick) {
                            if (hasImageOrVideo(item)) {
                                item.mode = "middle_mode";
                            } else {
                                item.mode = "no_image_mode";
                            }
                        } else if (item.has_video && item.video_detail_info) {
                            item.mode = "large_mode";
                        } else if (item.more_mode) {
                            item.mode = "more_mode";
                        } else if (item.middle_mode) {
                            item.mode = "middle_mode";
                        } else if (item.large_mode) {
                            item.mode = "large_mode";
                        } else {
                            item.mode = "no_image_mode";
                        }
                        item.default_image_url = _index4.default.getImageUrlFromItem(item).replace(/\.webp$/, "");
                        if (item.default_image_url === "") {
                            item.mode = "no_image_mode";
                        }
                        return item;
                    });
                    return _context8.abrupt("return", ret);

                  case 12:
                  case "end":
                    return _context8.stop();
                }
            }
        }, _callee8, this);
    }));
    return function getFeedList() {
        return _ref8.apply(this, arguments);
    };
}();

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../utils/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../npm/qs/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

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

var ASCP = _index4.default.ASCP;

function hasImageOrVideo(item) {
    return item ? item.image_url || item.large_image_url || item.video_detail_info && item.video_detail_info.detail_video_large_image && item.video_detail_info.detail_video_large_image.url || item.middle_image && item.middle_image.uri || item.image_list && item.image_list.length : false;
}

function getAllIndexOf(searchStr, str) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index = void 0, indices = [];
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function getRichTitle(content, keywords) {
    var highlights = [], sections = [];
    keywords.forEach(function(keyword) {
        var allIndex = getAllIndexOf(keyword, content);
        highlights = highlights.concat(allIndex.map(function(i) {
            return [ i, keyword.length ];
        }));
    });
    highlights.sort(function(a, b) {
        return a[0] - b[0];
    });
    if (highlights.length === 0) {
        return [ {
            highlight: false,
            content: content
        } ];
    }
    if (highlights[0] && highlights[0][0] !== 0) {
        sections.push({
            highlight: false,
            content: content.substring(0, highlights[0][0])
        });
    }
    for (var i = 0, l = highlights.length; i < l; i++) {
        var h = highlights[i];
        sections.push({
            highlight: true,
            content: content.substr(h[0], h[1])
        });
        var next = highlights[i + 1];
        var nextContent = {
            highlight: false,
            content: ""
        };
        if (next) {
            // to next highlight
            nextContent.content = content.substring(h[0] + h[1], next[0]);
        } else {
            // to end
            nextContent.content = content.substr(h[0] + h[1]);
        }
        if (nextContent.content) {
            sections.push(nextContent);
        }
    }
    return sections;
}