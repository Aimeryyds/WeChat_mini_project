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

var _process = require("./process.js");

var _process2 = _interopRequireDefault(_process);

var _util = require("./util.js");

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

var dePage = "/pages/authorization";

var SCENE_ARR = [ "1007", // 单人聊天会话中的小程序消息卡片
"1008", // 群聊会话中的小程序消息卡片
"1011", // 扫描二维码
"1012", // 长按图片识别二维码
"1013", // 手机相册选取二维码
"1014", // 小程序模板消息
"1019", // 微信钱包
"1020", // 公众号 profile 页相关小程序列表
"1023", // 安卓系统桌面图标
"1025", // 扫描一维码
"1028", // 我的卡包
"1029", // 卡券详情页
"1031", // 长按图片识别一维码
"1032", // 手机相册选取一维码
"1034", // 微信支付完成页
"1035", // 公众号自定义菜单
"1036", // App 分享消息卡片
"1039", // 摇电视
"1043", // 公众号模板消息
"1044", // 带 shareTicket 的小程序消息卡片 详情
"1045", // 朋友圈广告
"1046", // 朋友圈广告详情页
"1047", // 扫描小程序码
"1048", // 长按图片识别小程序码
"1049", // 手机相册选取小程序码
"1052", // 卡券的适用门店列表
"1057", // 钱包中的银行卡详情页
"1058", // 公众号文章
"1059", // 体验版小程序绑定邀请页
"1064", // 微信连Wi - Fi状态栏
"1067", // 公众号文章广告
"1072", // 二维码收款页面
"1073", // 客服消息列表下发的小程序消息卡片
"1074", // 公众号会话下发的小程序消息卡片
"1081", // 客服消息下发的文字链
"1082", // 公众号会话下发的文字链
"1084", // 朋友圈广告原生页
"1091", // 公众号文章商品卡片
"1096", // 聊天记录
"1097" ];

// 分享后进入小程序的参数定义
wx.shareOptionsWithUrl = null;

// 是从分享进来的全局定义变量
wx.isFromShareChannel = null;

// 分享进入后的路径是否pages/index 
wx.ShareUrlIsIndex = null;

// 返回首页按钮是否有点击态
wx.backHomeButtonIsClick = null;

var Forward = function() {
    function Forward() {
        _classCallCheck(this, Forward);
    }
    _createClass(Forward, null, [ {
        key: "main",
        value: function() {
            var _ref = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee(options) {
                var isauth;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (Forward.filterScene(options.scene)) {
                                _context.next = 2;
                                break;
                            }
                            return _context.abrupt("return");

                          case 2:
                            wx.isFromShareChannel = true;
                            console.log("分享的路径", options.path);
                            console.log("分享的路径于index对比结果", options.path == "pages/index");
                            wx.ShareUrlIsIndex = options.path == "pages/index" || options.path == "pages/authorization" ? true : false;
                            wx.backHomeButtonIsClick = wx.ShareUrlIsIndex ? true : false;
                            _context.next = 9;
                            return Forward.isAUTH();

                          case 9:
                            isauth = _context.sent;
                            console.log("分享测试-是否授权用户", isauth);
                            this._path = "/" + options.path;
                            this._query = options.query;
                            console.log("分享测试-分享参数", this._query);
                            if (isauth) {
                                console.log("有授权步骤");
                                Forward.rhythmOne();
                            } else {
                                console.log("无授权步骤");
                                Forward.rhythmTwo(options);
                            }

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function main(_x) {
                return _ref.apply(this, arguments);
            }
            return main;
        }()
    }, {
        key: "isAUTH",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(callback) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _process2.default.isAuthorization();

                          case 2:
                            res = _context2.sent;
                            console.log("----------授权结果对象信息------------------", res);
                            callback && callback(res);
                            return _context2.abrupt("return", res);

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function isAUTH(_x2) {
                return _ref2.apply(this, arguments);
            }
            return isAUTH;
        }()
    }, {
        key: "rhythmOne",
        value: function rhythmOne() {
            // 分享后用户有授权,如果是授权页面，直接跳入首页;如果是其他页面进入其他页面
            // Forward.checkSession();
        }
    }, {
        key: "rhythmTwo",
        value: function rhythmTwo(obj) {
            // 分享后用户无授权时,如果是授权页分享的无须变动;如果是非授权页面分享的需要带上分享的页面链接参数等跳入授权页面就行对应的操作
            if (this._path !== dePage) {
                var that = this;
                console.log("分享无授权---跳转到登录页--不是登陆页分享出来");
                // 检测到您是第一次使用
                                wx.showLoading({
                    title: "跳转授权中...",
                    mask: true
                });
                wx.shareOptionsWithUrl = Object.assign({}, obj.query);
                setTimeout(function() {
                    Forward.redirtPage(_util2.default.urlEncode("/pages/authorization", {
                        page: that._path
                    }));
                    wx.hideLoading();
                }, 1400);
            } else {
                console.log("分享无授权---跳转到登录页---是登录页分享出来");
                // Forward.redirtPage(
                //   util.urlEncode('/pages/authorization', {
                //     page: '/pages/index'
                //   })
                // );
                        }
        }
        // 重定向到指定页面
        }, {
        key: "redirtPage",
        value: function redirtPage(_url) {
            wx.redirectTo({
                url: _url
            });
        }
        // 场景值过滤
        }, {
        key: "filterScene",
        value: function filterScene(scene) {
            scene = String(scene);
            return SCENE_ARR.includes(scene);
        }
        // 登陆态是否过期
        }, {
        key: "checkSession",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3() {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _process2.default.checkSession();

                          case 2:
                            res = _context3.sent;
                            if (!res.isOk) {
                                // 登陆态过期提示用户重新授权
                                wx.showModal({
                                    title: "提示",
                                    content: "登录态失效,请重新登录",
                                    cancelText: "知道了",
                                    confirmText: "重新登录",
                                    success: function success(res) {
                                        if (res.confirm) {
                                            Forward.redirtPage(_util2.default.urlEncode("/pages/authorization", {}));
                                        } else if (res.cancel) {
                                            // 点击取消
                                        }
                                    }
                                });
                            } else {
                                console.log("用户登陆态正常!");
                            }

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function checkSession() {
                return _ref3.apply(this, arguments);
            }
            return checkSession;
        }()
    } ]);
    return Forward;
}();

exports.default = Forward;