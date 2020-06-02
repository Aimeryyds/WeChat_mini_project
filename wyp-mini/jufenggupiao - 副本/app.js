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

var _wepy = require("./npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js");

var _process = require("./service/process.js");

var _process2 = _interopRequireDefault(_process);

var _intercept = require("./service/intercept.js");

var _intercept2 = _interopRequireDefault(_intercept);

var _forward = require("./service/forward.js");

var _forward2 = _interopRequireDefault(_forward);

var _wepyRedux = require("./npm/wepy-redux/lib/index.js");

var _store = require("./store/index.js");

var _store2 = _interopRequireDefault(_store);

var _api = require("./service/api/api.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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

var mtjwxsdk = require("./utils/mtj-wx-sdk.js");

var store = (0, _store2.default)();

(0, _wepyRedux.setStore)(store);

var _default = function(_wepy$app) {
    _inherits(_default, _wepy$app);
    function _default() {
        _classCallCheck(this, _default);
        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
        _this.config = {
            pages: [ "pages/authorization", // 授权页面
            "pages/index", // 首页
            "pages/mine/collection", // 我的收藏
            "pages/mine/risk", // 风险揭示说明
            "pages/myService/video", // 我的服务视频类
            "pages/myService/moduleList", // 栏目定制
            "pages/network", // 无网络
            "pages/myService/teacher", // 老师简介
            "pages/myService/explain", // 往期嘉宾
            "pages/myService/team", // 执笔投顾团队
            "pages/qa/myQuestion", // 我的提问
            "pages/mine/me", // 我的页面
            "pages/record/recordList", // 战绩回顾列表
            "pages/record/recordDetails", // 战绩回顾详情
            "pages/industry", // 行情web-view
            "pages/search", // 搜索
            "pages/webpage", // web-view
            "pages/myService/artice", // 我的服务文章类
            "pages/myService/list", // 我的服务更多推荐
            "pages/qa/askStock", // 提问
            "pages/mine/aboutUs", // 关于我们
            "pages/mine/disclaimer" ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#1E82D2",
                navigationBarTitleText: "巨丰股票",
                navigationBarTextStyle: "#fff",
                backgroundColor: "#1E82D2"
            },
            networkTimeout: {
                request: 6e4
            },
            resizable: true,
            usingComponents: {}
        };
        _this.globalData = {
            userInfo: null,
            APP_START_UP_OPTIONS: {}
        };
        _this.use("requestfix");
        _this.use("promisify");
        _intercept2.default.call(_this);
        return _this;
    }
    _createClass(_default, [ {
        key: "onLaunch",
        value: function onLaunch(options) {
            this.APP_START_UP_OPTIONS = options;
            // let interval = setInterval(() => {
            //   let t = wx.getStorageSync('token');
            //   if (t && wx.globalFirstTokenIsGet) {
            //     APP_START_COUNT({
            //       params: {
            //         equipment: wx
            //           .getSystemInfoSync()
            //           .system.toLowerCase()
            //           .startsWith('android')
            //           ? 'Android'
            //           : 'iPhone'
            //       }
            //     });
            //     clearInterval(interval);
            //   }
            // }, 300);
                        console.log("APP_START_UP_OPTIONS", this.APP_START_UP_OPTIONS);
            _process2.default.checkSDK();
            _forward2.default.isAUTH(function(info) {
                if (info) {
                    _forward2.default.checkSession();
                }
            });
            _wepy2.default.onAppRouteDone(function(res) {
                if (res.path !== "pages/index") {
                    wx.selfInter ? clearInterval(wx.selfInter) : null;
                    wx.liveNewsInter ? clearInterval(wx.liveNewsInter) : null;
                }
            });
        }
    }, {
        key: "onShow",
        value: function onShow(options) {
            wx.scene = options.scene;
            _forward2.default.main(options);
        }
    }, {
        key: "onHide",
        value: function onHide() {
            if (wx.selfInter) clearInterval(wx.selfInter);
            if (wx.liveNewsInter) clearInterval(wx.liveNewsInter);
        }
    }, {
        key: "onPageNotFound",
        value: function onPageNotFound() {
            wx.redirectTo({
                url: "/pages/authorization"
            });
        }
    } ]);
    return _default;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
}));

require("./_wepylogs.js");