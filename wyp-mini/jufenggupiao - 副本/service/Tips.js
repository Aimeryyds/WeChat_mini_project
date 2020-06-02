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

/**
 * 提示与加载工具类
 */ var Tips = function() {
    function Tips() {
        _classCallCheck(this, Tips);
    }
    _createClass(Tips, null, [ {
        key: "success",
        /**
     * 弹出提示框
     */
        value: function success(title) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
            wx.showToast({
                title: title,
                icon: "success",
                mask: true,
                duration: duration
            });
            if (duration > 0) {
                return new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        resolve();
                    }, duration);
                });
            }
        }
        /**
     * 弹出确认窗口
     */    }, {
        key: "modal",
        value: function modal(text) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "提示";
            return new Promise(function(resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: false,
                    success: function success(res) {
                        resolve(res);
                    },
                    fail: function fail(res) {
                        reject(res);
                    }
                });
            });
        }
        /**
     * 弹出确认窗口
     */    }, {
        key: "confirm",
        value: function confirm(text) {
            var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";
            return new Promise(function(resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: true,
                    success: function success(res) {
                        if (res.confirm) {
                            resolve(payload);
                        } else if (res.cancel) {
                            reject(payload);
                        }
                    },
                    fail: function fail(res) {
                        reject(payload);
                    }
                });
            });
        }
    }, {
        key: "toast",
        value: function toast(title, onHide) {
            var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
            wx.showToast({
                title: title,
                icon: icon,
                mask: true,
                duration: 500
            });
            // 隐藏结束回调
                        if (onHide) {
                setTimeout(function() {
                    onHide();
                }, 500);
            }
        }
        /**
     * 警告框
     */    }, {
        key: "alert",
        value: function alert(title) {
            wx.showToast({
                title: title,
                image: "/images/icons/alert.png",
                mask: true,
                duration: 500
            });
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve();
                }, 500);
            });
        }
        /**
     * 错误框
     */    }, {
        key: "error",
        value: function error(title, onHide) {
            wx.showToast({
                title: title,
                image: "/images/icons/error.png",
                mask: true,
                duration: 500
            });
            // 隐藏结束回调
                        if (onHide) {
                setTimeout(function() {
                    onHide();
                }, 500);
            }
        }
        /**
     * 文案loading
     */    }, {
        key: "txtloading",
        value: function txtloading() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中...";
            if (this.isLoading) {
                return;
            }
            this.isLoading = true;
            wx.showLoading({
                title: title,
                mask: true
            });
        }
        /**
     * 文案loading加载完毕
     */    }, {
        key: "txtloaded",
        value: function txtloaded() {
            if (this.isLoading) {
                wx.hideLoading();
                this.isLoading = false;
            }
        }
        /**
     * 导航标题栏loading
     */    }, {
        key: "loading",
        value: function loading() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";
            if (this.isLoading) {
                return;
            }
            this.isLoading = true;
            wx.showNavigationBarLoading();
        }
        /**
     * 导航标题栏loading加载完毕
     */    }, {
        key: "loaded",
        value: function loaded() {
            if (this.isLoading) {
                wx.hideNavigationBarLoading();
                this.isLoading = false;
            }
        }
    }, {
        key: "share",
        value: function share(title, url, desc) {
            return {
                title: title,
                path: url,
                desc: desc,
                success: function success(res) {
                    Tips.toast("分享成功");
                }
            };
        }
    } ]);
    return Tips;
}();

Tips.isLoading = false;

exports.default = Tips;