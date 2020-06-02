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

var _wepy = require("./../../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _swiperZj = require("./../swiperZj.js");

var _swiperZj2 = _interopRequireDefault(_swiperZj);

var _api = require("./../../service/api/api.js");

var _process = require("./../../service/process.js");

var _process2 = _interopRequireDefault(_process);

var _ask = require("./../ask.js");

var _ask2 = _interopRequireDefault(_ask);

var _loadFooter = require("./../loadFooter.js");

var _loadFooter2 = _interopRequireDefault(_loadFooter);

var _Tips = require("./../../service/Tips.js");

var _Tips2 = _interopRequireDefault(_Tips);

var _wepyNices = require("./../nices/wepy-nices.js");

var _wepyNices2 = _interopRequireDefault(_wepyNices);

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

var WEEK = [ "日", "一", "二", "三", "四", "五", "六" ];

var saveNewsId = {
    id: "",
    tid: ""
};

var live = function(_wepy$component) {
    _inherits(live, _wepy$component);
    function live() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, live);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = live.__proto__ || Object.getPrototypeOf(live)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.props = {}, _this.$repeat = {}, _this.$props = {
            loadFooter: {
                "xmlns:v-bind": "",
                "v-bind:loadComplete.sync": "isLoad",
                "v-bind:curStatus.sync": "isMore"
            }
        }, _this.$events = {}, _this.components = {
            swiperZj: _swiperZj2.default,
            ask: _ask2.default,
            loadFooter: _loadFooter2.default,
            nices: _wepyNices2.default
        }, _this.data = {
            showNotic: false,
            page: 1,
            zjList: [],
            liveList: [],
            refeshLoadingMore: false,
            refeshSuc: false,
            qrCode: "",
            imgPath: "",
            imgPath2: "",
            showShare: false,
            isComplete: false,
            isComplete2: false,
            isLoad: false,
            isMore: 1,
            shareImgWord: {},
            plate: require("./plate.js").default,
            teacherModalStatus: false,
            teacherInfo: {},
            liveNewsNumber: 0,
            hasReviewHistort: false,
            isMiniNav: false
        }, _this.events = {
            "get-live-data": function getLiveData($event) {
                _this.$broadcast("refesh-zj");
                if ($event == "loadmore") {
                    _this.getLiveData(++_this.page);
                    return;
                }
                if ($event == "refresh") {
                    _this.page = 1;
                    _this.isLoad = false;
                    _this.getLiveData(1);
                    return;
                }
                _this.getLiveData(_this.page);
                _this.birthQecode();
            },
            "remove-follow": function removeFollow($event) {
                _this.liveList.forEach(function(ele) {
                    if (ele.id == $event) {
                        ele.animatePalying = false;
                        _this.$apply();
                        return;
                    }
                });
            },
            "has-review": function hasReview($event) {
                _this.hasReviewHistort = $event;
            },
            "mini-nav": function miniNav($event) {
                _this.isMiniNav = $event;
            },
            "get-live-news-data": function getLiveNewsData($event) {
                // 轮询直播最新消息
                _this.setinterLiveNews();
            }
        }, _this.watch = {}, _this.methods = {
            newsRefesh: function newsRefesh() {
                this.page = 1;
                this.isLoad = false;
                this.getLiveData(1);
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 100
                });
                this.liveNewsNumber = 0;
                this.setinterLiveNews();
            },
            goArticle: function goArticle(val) {
                if (val.catalog == "cjdk") {
                    wx.navigateTo({
                        url: "/pages/myService/video?type=1&catalog=" + val.catalog + "&id=" + val.id
                    });
                } else {
                    wx.navigateTo({
                        url: "/pages/myService/artice?type=1&catalog=" + val.catalog + "&id=" + val.id
                    });
                }
            },
            closeTeacherModal: function closeTeacherModal() {
                this.teacherModalStatus = false;
            },
            showTeacherModal: function showTeacherModal(item) {
                this.teacherInfo = {
                    name: item.lecturer.name,
                    avatar: item.lecturer.avatar,
                    card: item.lecturer.certificate
                };
                this.teacherModalStatus = true;
            },
            closeShare: function closeShare() {
                this.showShare = false;
                this.isComplete2 = false;
            },
            shareModal: function shareModal(_obj) {
                var _hang = void 0;
                this.shareImgWord.wordTime = _obj.created_at;
                this.shareImgWord.wordContent = this.escape2Html(_obj.content_text);
                this.shareImgWord.wordWeek = this.getWeekFromDate(_obj.created_at);
                this.showShare = true;
            },
            saveImg: function saveImg() {
                _Tips2.default.txtloading("处理中...");
                this.isComplete2 = true;
                this.plate.views[3].text = this.escape2Html(this.shareImgWord.wordTime + "&nbsp;&nbsp;" + this.shareImgWord.wordWeek);
                this.plate.views[4].text = this.shareImgWord.wordContent;
                this.plate.views[this.plate.views.length - 1].url = this.qrCode;
                // 处理高度
                                this.plate.height = 551 + 146 + this.plate.views[4].text.length / 14 * 68 + "rpx";
                this.plate.views[0].css.height = 269 + 146 + this.plate.views[4].text.length / 14 * 68 + "rpx";
                this.plate.views[5].css.top = this.plate.views[4].text.length / 14 * 68 + 257 + 30 + "rpx";
            },
            imgComplete: function imgComplete(e) {
                var that = this;
                _Tips2.default.txtloaded();
                this.imgPath2 = e.detail.path;
                if (e.detail.path) {
                    that.isComplete2 = false;
                } else {
                    that.isComplete2 = true;
                }
                wx.saveImageToPhotosAlbum({
                    filePath: that.imgPath2,
                    success: function success(result) {
                        if (result.errMsg == "saveImageToPhotosAlbum:ok") {
                            that.showShare = false;
                            that.$apply();
                            _Tips2.default.success("保存成功");
                            (0, _api.APP_SHARE_COUNT)({
                                params: {
                                    behavior: "image"
                                }
                            });
                        }
                    },
                    fail: function fail() {
                        wx.getSetting({
                            success: function success(res) {
                                if (!res.authSetting["scope.writePhotosAlbum"]) that.openConfirm();
                            }
                        });
                    }
                });
            },
            clickIMG: function clickIMG(_arr, i) {
                wx.previewImage({
                    current: _arr[i],
                    urls: _arr
                });
            },
            add: function add(par, e) {
                this.addLive({
                    id: e.currentTarget.dataset.id,
                    op: par
                });
            },
            check: function check(_ref2) {
                var id = _ref2.id;
                this.liveList.forEach(function(ele) {
                    if (ele.id == id) {
                        if (!ele.isCheck) {
                            ele.scrollTop = wx.liveScrollTop;
                            ele.isCheck = !ele.isCheck;
                        } else {
                            ele.isCheck = !ele.isCheck;
                            wx.pageScrollTo({
                                scrollTop: ele.scrollTop,
                                duration: 0
                            });
                        }
                        return;
                    }
                });
            },
            loadMore: function loadMore(e) {},
            refesh: function refesh(e) {},
            scroll: function scroll(e) {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(live, [ {
        key: "onLoad",
        value: function onLoad() {}
    }, {
        key: "escape2Html",
        value: function escape2Html(str) {
            var arrEntities = {
                lt: "<",
                gt: ">",
                nbsp: " ",
                amp: "&",
                quot: '"'
            };
            return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(all, t) {
                return arrEntities[t];
            });
        }
    }, {
        key: "openConfirm",
        value: function openConfirm() {
            wx.showModal({
                content: "检测到您没打开保存相册的权限，是否去设置打开？",
                confirmText: "确认",
                cancelText: "取消",
                success: function success(res) {
                    if (res.confirm) {
                        wx.openSetting({
                            success: function success(res) {}
                        });
                    } else {}
                }
            });
        }
        // 获取直播页最新消息
        }, {
        key: "getLiveNews",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var _arr, i, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _arr = this.liveList;
                            if (!(_arr.length > 0)) {
                                _context.next = 11;
                                break;
                            }
                            i = 0;

                          case 3:
                            if (!(i < _arr.length)) {
                                _context.next = 11;
                                break;
                            }
                            if (!(_arr[i].is_top == 0)) {
                                _context.next = 8;
                                break;
                            }
                            saveNewsId.id = _arr[i].id;
                            if (_arr[i - 1]) {
                                saveNewsId.tid = _arr[i - 1].id;
                            } else {
                                saveNewsId.tid = "";
                            }
                            return _context.abrupt("break", 11);

                          case 8:
                            i++;
                            _context.next = 3;
                            break;

                          case 11:
                            _context.next = 13;
                            return (0, _api.getLiveNewInfos)({
                                params: {
                                    id: saveNewsId.id,
                                    tid: saveNewsId.tid
                                }
                            });

                          case 13:
                            res = _context.sent;
                            this.liveNewsNumber = res.data;
                            _arr = null;
                            this.$apply();

                          case 17:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function getLiveNews() {
                return _ref3.apply(this, arguments);
            }
            return getLiveNews;
        }()
    }, {
        key: "getLiveData",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(page) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            this.isMore = 2;
                            _Tips2.default.loading();
                            _context2.next = 5;
                            return (0, _api.getLiveList)({
                                params: {
                                    page: page
                                }
                            });

                          case 5:
                            res = _context2.sent;
                            if (page == 1) {
                                this.liveList = res.data;
                                // 轮询直播最新消息
                                                                this.liveNewsNumber = 0;
                                this.setinterLiveNews();
                            } else {
                                this.liveList = this.liveList.concat(res.data);
                            }
                            this.liveList.forEach(function(ele) {
                                ele.isCheck = false;
                                ele.imgBoxWidth = ele.text_img.length * (228 + 3);
                                ele.nodes = [];
                                ele.animatePalying = false;
                                ele.nodes.push({
                                    type: "text",
                                    text: ele.content_text
                                });
                            });
                            wx.stopPullDownRefresh();
                            if (res.data.length < 10) {
                                this.isMore = 3;
                            }
                            this.$apply();
                            _Tips2.default.loaded();
                            this.isLoad = true;
                            _context2.next = 17;
                            break;

                          case 15:
                            _context2.prev = 15;
                            _context2.t0 = _context2["catch"](0);

                          case 17:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this, [ [ 0, 15 ] ]);
            }));
            function getLiveData(_x) {
                return _ref4.apply(this, arguments);
            }
            return getLiveData;
        }()
    }, {
        key: "addLive",
        value: function() {
            var _ref5 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3(parsms) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _Tips2.default.loading();
                            _context3.next = 3;
                            return (0, _api.liveAdd)({
                                params: {
                                    id: parsms.id,
                                    op: parsms.op
                                }
                            });

                          case 3:
                            res = _context3.sent;
                            if (res.code == 0) {
                                if (parsms.op == 1) {
                                    _Tips2.default.success("已收藏");
                                    this.liveList.forEach(function(ele) {
                                        if (ele.id == parsms.id) {
                                            ele.is_favorites = 1;
                                        }
                                    });
                                } else {
                                    _Tips2.default.success("已取消");
                                    this.liveList.forEach(function(ele) {
                                        if (ele.id == parsms.id) {
                                            ele.is_favorites = 0;
                                        }
                                    });
                                }
                            }
                            this.$apply();
                            _Tips2.default.loaded();

                          case 7:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function addLive(_x2) {
                return _ref5.apply(this, arguments);
            }
            return addLive;
        }()
    }, {
        key: "setinterLiveNews",
        value: function setinterLiveNews() {
            var _this2 = this;
            clearInterval(wx.liveNewsInter);
            wx.liveNewsInter = setInterval(function() {
                _this2.getLiveNews();
            }, 30 * 1e3);
        }
        // 获取二维码
        }, {
        key: "birthQecode",
        value: function() {
            var _ref6 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee4() {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return (0, _api.getQrcode)({
                                params: {
                                    page: "pages/authorization",
                                    // scene: wx.scene
                                    scene: "0000"
                                }
                            });

                          case 2:
                            res = _context4.sent;
                            this.qrCode = res.data;

                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
            function birthQecode() {
                return _ref6.apply(this, arguments);
            }
            return birthQecode;
        }()
    }, {
        key: "getWeekFromDate",
        value: function getWeekFromDate(date) {
            var _d = date.split(" ")[0];
            var _e = _d.split("-");
            var _t = _e.join("/");
            return "星期" + WEEK[new Date(_t).getDay()];
        }
    } ]);
    return live;
}(_wepy2.default.component);

exports.default = live;