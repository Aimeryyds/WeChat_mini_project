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

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Step = function() {
    function Step() {
        _classCallCheck(this, Step);
    }
    _createClass(Step, null, [ {
        key: "wxLogin",
        // 微信登录,获取code
        value: function wxLogin() {
            return new Promise(function(resolve, reject) {
                wx.login({
                    success: function success(res) {
                        resolve(Object.assign(res, {
                            isOk: true
                        }));
                    },
                    fail: function fail(error) {
                        reject(Object.assign(error, {
                            isOk: false
                        }));
                    }
                });
            });
        }
        // 判断是否授权
        }, {
        key: "isAuthorization",
        value: function isAuthorization() {
            return new Promise(function(resolve, reject) {
                var _isAuthor = void 0;
                wx.getSetting({
                    success: function success(res) {
                        if (res.authSetting["scope.userInfo"]) {
                            _isAuthor = true;
                        } else {
                            _isAuthor = false;
                        }
                        resolve(_isAuthor);
                    },
                    fail: function fail(res) {
                        reject(false);
                    }
                });
            });
        }
        // 获取用户信息
        }, {
        key: "getInfo",
        value: function getInfo() {
            return new Promise(function(resolve, reject) {
                wx.getUserInfo({
                    success: function success(res) {
                        resolve(Object.assign(res, {
                            isOk: true
                        }));
                    },
                    fail: function fail(error) {
                        reject(Object.assign(error, {
                            isOk: false
                        }));
                    }
                });
            });
        }
        // 用户登录态是否过期
        }, {
        key: "checkSession",
        value: function checkSession() {
            return new Promise(function(resolve, reject) {
                wx.checkSession({
                    success: function success(res) {
                        resolve(Object.assign(res, {
                            isOk: true
                        }));
                    },
                    fail: function fail(error) {
                        reject(Object.assign(error, {
                            isOk: false
                        }));
                    }
                });
            });
        }
        // 获取系统信息
        }, {
        key: "getSystemInfo",
        value: function getSystemInfo() {
            return new Promise(function(resolve, reject) {
                wx.getSystemInfo({
                    success: function success(res) {
                        resolve(Object.assign(res, {
                            isOk: true
                        }));
                    },
                    fail: function fail(error) {
                        reject(Object.assign(error, {
                            isOk: false
                        }));
                    }
                });
            });
        }
        // 轮询检查是否有token,有token后回调继续操作
        }, {
        key: "intervalCheckTokenAndNext",
        value: function intervalCheckTokenAndNext(callback) {
            var interval = setInterval(function() {
                var t = wx.getStorageSync("token");
                if (t) {
                    typeof callback === "function" && callback();
                    clearInterval(interval);
                }
            }, 300);
        }
        // 获取jsSDK版本
        }, {
        key: "isSDKExipred",
        value: function isSDKExipred() {
            var _wx$getSystemInfoSync = wx.getSystemInfoSync(), SDKVersion = _wx$getSystemInfoSync.SDKVersion;
            console.info("[version]sdk " + SDKVersion);
            return SDKVersion == null || SDKVersion < "1.2.0";
        }
        // 检查版本是否过低
        }, {
        key: "checkSDK",
        value: function checkSDK() {
            if (this.isSDKExipred()) {
                Tips.modal("您的微信版本太低，为确保正常使用，请尽快升级");
            }
        }
    } ]);
    return Step;
}();

exports.default = Step;