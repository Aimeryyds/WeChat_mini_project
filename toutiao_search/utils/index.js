var getTTWebid = function() {
    var _ref = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
        var header, res, ttWebId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    header = {
                        "X-Traffic-Type": "wxapp",
                        Accept: "application/json",
                        "Cache-Control": "no-cache"
                    };
                    _context.next = 3;
                    return _index2.default.request({
                        url: "https://m.toutiao.com/",
                        data: {},
                        method: "GET",
                        header: header,
                        uniqKey: "tt_webid"
                    });

                  case 3:
                    res = _context.sent;
                    if (res.data._ck) {
                        ttWebId = res.data._ck["tt_webid"];
                        _index2.default.setStorageSync("ttwebId", ttWebId);
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
            }
        }, _callee, this);
    }));
    return function getTTWebid() {
        return _ref.apply(this, arguments);
    };
}();

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _crc = require("./crc32.js");

var _crc2 = _interopRequireDefault(_crc);

var _encoder = require("./encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _ASCP = require("./ASCP.js");

var _ASCP2 = _interopRequireDefault(_ASCP);

var _tea = require("./tea.js");

var _tea2 = _interopRequireDefault(_tea);

var _index3 = require("../npm/timeago.js/lib/index.js");

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

var timeago = function timeago(time) {
    return (0, _index3.format)(time, "zh_CN");
};

function getRequestHeader() {
    var ttWebId = _index2.default.getStorageSync("ttwebId");
    return {
        "X-Traffic-Type": "wxapp",
        Cookie: "tt_webid=" + ttWebId
    };
}

function formatTime(t) {
    var h = 0;
    var m = 0;
    var s = 0;
    var formatTime = "";
    m = Math.floor(t / 60);
    if (m > 60) {
        h = Math.floor(m / 60);
        m = m % 60;
    }
    s = t - m * 60 - h * 60 * 60;
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    if (h > 0) {
        if (h < 10) {
            h = "0" + h;
        }
        formatTime = h + ":" + m + ":" + s;
    } else {
        formatTime = m + ":" + s;
    }
    return formatTime;
}

var formatNum = function formatNum(num) {
    return num < 1e4 ? num : (num / 1e4).toFixed(1) + "万";
};

function getImageUrlFromItem(item) {
    var ret = "";
    if (item.large_mode && item.large_image_url) {
        ret = item.large_image_url;
    } else if (item.has_video && item.video_detail_info) {
        ret = item.video_detail_info.detail_video_large_image.url;
    } else if (item.middle_mode) {
        ret = item.image_url;
    } else if (item.more_mode) {
        ret = item.image_list[0].url;
    } else {
        ret = item.image_url || item.image_list && item.image_list.length > 0 && item.image_list[0].url || item.middle_image && item.middle_image.url || "";
    }
    return ret;
}

module.exports = {
    CRC32: _crc2.default,
    Encoder: _encoder2.default,
    timeago: timeago,
    getRequestHeader: getRequestHeader,
    getTTWebid: getTTWebid,
    formatNum: formatNum,
    formatTime: formatTime,
    ASCP: _ASCP2.default,
    getImageUrlFromItem: getImageUrlFromItem,
    Tea: _tea2.default
};