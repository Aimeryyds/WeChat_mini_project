Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function() {
    this.intercept("request", {
        config: function config(p) {
            p.data = create_sign_handle(p.data);
            return p;
        },
        success: function success(p) {
            // 0 is success
            if (p.data.code !== 0) {
                no_token_Handle(p.data.code);
                server_err_handle(p.data.code);
            }
            return p.data;
        },
        fail: function fail(p) {
            // wx.showToast({
            //   title: p.data.msg,
            //   icon: 'none'
            // })
            // console.error(p.data.msg)
            // return p;
        },
        complete: function complete(p) {
            console.log(_util2.default.getLocalTime() + "------\x3e " + p.data.msg);
        }
    });
};

var _api = require("./api/api.js");

var _util = require("./util.js");

var _util2 = _interopRequireDefault(_util);

var _process = require("./process.js");

var _process2 = _interopRequireDefault(_process);

var _wxRequest = require("./wxRequest.js");

var _wxRequest2 = _interopRequireDefault(_wxRequest);

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

var md5 = require("./md5.js");

var Base64 = require("./base64.js").Base64;

var sign_key = "jfinfo888";

var NO_TOKEN = [ "500006", "500017", "500005" ];

var SERVER_ERR = [ "500000", "500004", "500002", "500205", "500001", "500207", "500015", "500016" ];

// 状态码对应的含义
// 500006 token超时
// 500017 token不能为空
// 500005 非法的token
// 500000 服务器错误
// 500004 访问接口参数错误
// 500002 sign验证失败
// 500205 接口异常
// 500001 请求超时,请重新访问
// 500207 用户不存在
// 500015 非法用户
// 500016 非法的用户类型
var valve = true;

var _getToken = function() {
    var _ref = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
        var res, _token, pages, curPageObject;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    valve = false;
                    _context.next = 3;
                    return _process2.default.wxLogin();

                  case 3:
                    res = _context.sent;
                    if (!res.isOk) {
                        _context.next = 12;
                        break;
                    }
                    _context.next = 7;
                    return (0, _api.getToken)({
                        params: {
                            code: res.code
                        }
                    });

                  case 7:
                    _token = _context.sent;
                    valve = true;
                    if (_token.data) {
                        wx.setStorageSync("token", _token.data);
                        // 刷新当前页
                        // wx.redirectTo({
                        //   url: util.getCurrentPageUrlWithArgs()
                        // });
                                                pages = getCurrentPages();
                        curPageObject = pages[pages.length - 1];
                        curPageObject.onShow();
                        curPageObject.onLoad(curPageObject.options);
                    }
                    _context.next = 13;
                    break;

                  case 12:
                    wx.showToast({
                        title: "微信登陆失败!",
                        icon: "none"
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
            }
        }, _callee, undefined);
    }));
    return function _getToken() {
        return _ref.apply(this, arguments);
    };
}();

var no_token_Handle = function no_token_Handle(code) {
    code = String(code);
    if (NO_TOKEN.includes(code)) {
        if (!valve) return;
        _getToken();
    }
};

var server_err_handle = function server_err_handle(code) {
    code = String(code);
    if (SERVER_ERR.includes(code)) {
        wx.showToast({
            title: "系统出错",
            icon: "none"
        });
    }
};

var create_sign_handle = function create_sign_handle(data) {
    data.token = wx.getStorageSync("token");
    data.timestamp = new Date().getTime();
    data.key = sign_key;
    var _sort = _util2.default.keySort(data);
    var _newObj = _util2.default.urlEncodeSimple(_sort);
    data.sign = md5(Base64.encode(_newObj));
    delete data.key;
    for (var item in data) {
        if (data.hasOwnProperty(item)) {
            var element = data[item];
            // 签名时把value为null的字段给截掉
                        if (!element && typeof element != "undefined" && element != 0) {
                delete data[item];
            }
        }
    }
    return data;
};