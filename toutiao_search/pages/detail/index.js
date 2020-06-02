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
        _this), _this.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp9", "loopArray0", "loopArray1", "loopArray2", "isIPhoneX", "isVideo", "videoProps", "userInfo", "isArticle", "articleContent", "relatedData", "commentData", "title", "hasMoreComment", "commentOffset", "showCanvas" ], 
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
                isVideo: false,
                isArticle: false,
                videoProps: {},
                userInfo: {},
                articleContent: [],
                relatedData: [],
                commentOffset: 0,
                commentData: [],
                hasMoreComment: true,
                title: "",
                showCanvas: false
            };
            var _Taro$getSystemInfoSy = _index2.default.getSystemInfoSync(), model = _Taro$getSystemInfoSy.model;
            this.isIPhoneX = model.indexOf("iPhone X") > -1;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.fetchContent();
            this.fetchComment();
        }
    }, {
        key: "componentDidShow",
        value: function componentDidShow() {
            this.showTime = Date.now();
        }
    }, {
        key: "componentDidHide",
        value: function componentDidHide() {
            this.sendStayTime();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.sendStayTime();
        }
    }, {
        key: "sendStayTime",
        value: function sendStayTime() {
            this.hideTime = Date.now();
            var stayTime = Math.floor((this.hideTime - this.showTime) / 1e3);
            var _$router$params = this.$router.params, id = _$router$params.id, from = _$router$params.from;
            var isArticle = this.state.isArticle;
            _index5.default.Tea.event("stay_time", {
                group_id: id,
                enter_from: from,
                stay_time: stayTime,
                group_type: isArticle ? "article" : "video"
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage(options) {
            var _state = this.state, title = _state.title, isVideo = _state.isVideo, poster = _state.poster, isArticle = _state.isArticle, articleContent = _state.articleContent;
            var id = this.$router.params.id;
            var imageUrl = "";
            if (isVideo) {
                // 视频取封面
                imageUrl = poster;
            }
            if (isArticle) {
                // 文章取正文第一张图片
                var image = articleContent.find(function(i) {
                    return i.type === "image";
                });
                imageUrl = image ? image.info.src : "";
            }
            if (options.from === "menu") {
                _index5.default.Tea.event("mp_share", {
                    path: this.$scope.route
                });
            } else {
                _index5.default.Tea.event("click_to_share", {
                    group_id: id,
                    group_type: isArticle ? "article" : "video"
                });
            }
            return {
                title: title,
                path: "/pages/detail/index?id=" + id + "&share=1",
                imageUrl: imageUrl
            };
        }
    }, {
        key: "fetchContent",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var id, data, content;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            id = this.$router.params.id;
                            _context.next = 3;
                            return _index2.default.request({
                                url: "https://m.toutiao.com/pwa/api/wxapp/info/" + id + "/"
                            });

                          case 3:
                            data = _context.sent;
                            if (!(data.statusCode === 200 && data.data && data.data.data)) {
                                _context.next = 9;
                                break;
                            }
                            content = data.data.data.content;
                            if (!(content.length === 0)) {
                                _context.next = 8;
                                break;
                            }
                            return _context.abrupt("return");

                          case 8:
                            // content数组第一个为视频并且content数组个数不超过2，则判断为视频详情页，否则为文章详情页
                            if (content[0].type === "video" && content.length <= 2) {
                                this.initVideo(data.data.data);
                            } else {
                                this.initArticle(data.data.data);
                            }

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function fetchContent() {
                return _ref2.apply(this, arguments);
            }
            return fetchContent;
        }()
    }, {
        key: "fetchRelated",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var id, isVideo, header, pageType, res, relatedData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            id = this.$router.params.id;
                            isVideo = this.state.isVideo;
                            header = _index5.default.getRequestHeader();
                            pageType = isVideo ? "video" : "article";
                            _context2.next = 6;
                            return _index2.default.request({
                                // url: `https://m.toutiao.com/related/article/${id}/?noad&&offset=0&count=8&format=json&tt_from=&app=&ac=wxapp&parent_rid=&type=control&aid=&page_type=${pageType}`,
                                url: "https://m.toutiao.com/group/article/" + id + "/" + id + "/related/?noad&&offset=0&count=8&format=json&tt_from=&app=&ac=wxapp&parent_rid=&type=control&aid=&page_type=" + pageType,
                                header: header
                            });

                          case 6:
                            res = _context2.sent;
                            relatedData = res.data.data.filter(function(i) {
                                return !i.has_video && i.tag === "news_entertainment";
                            }).map(function(i) {
                                i.default_image_url = _index5.default.getImageUrlFromItem(i).replace(/\.webp$/, "");
                                return i;
                            });
                            if (res.data.data) {
                                this.setState({
                                    relatedData: relatedData
                                });
                            }

                          case 9:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function fetchRelated() {
                return _ref3.apply(this, arguments);
            }
            return fetchRelated;
        }()
    }, {
        key: "fetchComment",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3() {
                var _this2 = this;
                var id, _state2, commentOffset, commentData, _ref5, data, hasMoreComment;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            id = this.$router.params.id;
                            _state2 = this.state, commentOffset = _state2.commentOffset, commentData = _state2.commentData;
                            _context3.next = 4;
                            return (0, _index3.getComment)(id, commentOffset);

                          case 4:
                            _ref5 = _context3.sent;
                            data = _ref5.data;
                            hasMoreComment = _ref5.hasMoreComment;
                            commentData = commentData.concat(data);
                            // commentData.forEach(i => i.comment.reply_list = []);
                                                        this.setState({
                                commentData: commentData,
                                commentOffset: commentOffset + 10,
                                hasMoreComment: hasMoreComment
                            }, function() {
                                return _this2.lock = false;
                            });

                          case 9:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function fetchComment() {
                return _ref4.apply(this, arguments);
            }
            return fetchComment;
        }()
    }, {
        key: "initVideo",
        value: function() {
            var _ref6 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee4(data) {
                var _this3 = this;
                var content, media_user, publish_time, title, video_play_count, videoInfo, vid, poster, src, videoProps;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            content = data.content, media_user = data.media_user, publish_time = data.publish_time, 
                            title = data.title, video_play_count = data.video_play_count;
                            videoInfo = content[0].info;
                            vid = videoInfo["tt-videoid"];
                            poster = videoInfo["tt-poster"];
                            // const videoTitle = content[1];
                                                        _context4.next = 6;
                            return this.getVideoSrcByVid(vid);

                          case 6:
                            src = _context4.sent;
                            videoProps = {
                                src: src,
                                poster: poster
                            };
                            this.setState({
                                isVideo: true,
                                videoProps: videoProps,
                                userInfo: media_user,
                                publishTime: publish_time,
                                title: title,
                                playCount: video_play_count,
                                poster: poster
                            }, function() {
                                _this3.fetchRelated();
                                _this3.sendTea();
                            });

                          case 9:
                          case "end":
                            return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
            function initVideo(_x) {
                return _ref6.apply(this, arguments);
            }
            return initVideo;
        }()
    }, {
        key: "initArticle",
        value: function() {
            var _ref7 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee6(data) {
                var _this4 = this;
                var title, content, media_user, publish_time;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            title = data.title, content = data.content, media_user = data.media_user, publish_time = data.publish_time;
                            _context6.next = 3;
                            return Promise.all(content.map(function() {
                                var _ref8 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee5(i) {
                                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                        while (1) {
                                            switch (_context5.prev = _context5.next) {
                                              case 0:
                                                if (!(i.type === "video")) {
                                                    _context5.next = 5;
                                                    break;
                                                }
                                                _context5.next = 3;
                                                return _this4.getVideoSrcByVid(i.info["tt-videoid"]);

                                              case 3:
                                                i.src = _context5.sent;
                                                return _context5.abrupt("return", i);

                                              case 5:
                                                return _context5.abrupt("return", i);

                                              case 6:
                                              case "end":
                                                return _context5.stop();
                                            }
                                        }
                                    }, _callee5, _this4);
                                }));
                                return function(_x3) {
                                    return _ref8.apply(this, arguments);
                                };
                            }()));

                          case 3:
                            content = _context6.sent;
                            this.setState({
                                isArticle: true,
                                title: title,
                                userInfo: media_user,
                                publishTime: publish_time,
                                articleContent: content
                            }, function() {
                                _this4.fetchRelated();
                                _this4.sendTea();
                            });

                          case 5:
                          case "end":
                            return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));
            function initArticle(_x2) {
                return _ref7.apply(this, arguments);
            }
            return initArticle;
        }()
    }, {
        key: "sendTea",
        value: function sendTea() {
            var _$router$params2 = this.$router.params, id = _$router$params2.id, from = _$router$params2.from, rank = _$router$params2.rank;
            var isArticle = this.state.isArticle;
            _index5.default.Tea.event("go_detail", {
                group_id: id,
                enter_from: from,
                group_type: isArticle ? "article" : "video",
                hot_search_sort: rank ? +rank : 0
            });
        }
    }, {
        key: "onReachBottom",
        value: function onReachBottom() {
            if (this.lock || !this.state.hasMoreComment) {
                return;
            }
            this.lock = true;
            this.fetchComment();
        }
    }, {
        key: "handleClickDigg",
        value: function handleClickDigg(e) {
            var item = e.currentTarget.dataset.item;
            var commentData = this.state.commentData;
            commentData = commentData.map(function(i) {
                if (i.id === item.id) {
                    i.strong = !i.strong;
                    i.comment.digg_count = i.comment.digg_count + (i.strong ? 1 : -1);
                    if (i.strong) {
                        _index5.default.Tea.event("click_comment_digg", {
                            comment_id: item.id,
                            query: i.comment.text
                        });
                    }
                }
                return i;
            });
            this.setState({
                commentData: commentData
            });
        }
    }, {
        key: "handleClickRelated",
        value: function handleClickRelated(e) {
            var item = e.currentTarget.dataset.item;
            var id = item.id;
            _index2.default.navigateTo({
                url: "/pages/detail/index?id=" + id + "&from=relative"
            });
        }
    }, {
        key: "handleClickImage",
        value: function handleClickImage(e) {
            var item = e.currentTarget.dataset.item;
            var articleContent = this.state.articleContent;
            _index2.default.previewImage({
                urls: articleContent.filter(function(i) {
                    return i.type === "image";
                }).map(function(i) {
                    return i.info.src;
                }),
                current: item.info.src
            });
        }
    }, {
        key: "handleClickReply",
        value: function() {
            var _ref9 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee8(e) {
                var _this5 = this;
                var commentData, item, id;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            commentData = this.state.commentData;
                            item = e.currentTarget.dataset.item;
                            id = item.id;
                            commentData.forEach(function() {
                                var _ref10 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee7(i) {
                                    var _ref11, data, hasMore;
                                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                        while (1) {
                                            switch (_context7.prev = _context7.next) {
                                              case 0:
                                                if (!(i.id === id)) {
                                                    _context7.next = 11;
                                                    break;
                                                }
                                                i.showAllComment = !i.showAllComment;
                                                if (!i.showAllComment) {
                                                    _context7.next = 10;
                                                    break;
                                                }
                                                _context7.next = 5;
                                                return (0, _index3.getReplyList)(id);

                                              case 5:
                                                _ref11 = _context7.sent;
                                                data = _ref11.data;
                                                hasMore = _ref11.hasMore;
                                                i.comment.reply_list = data;
                                                i.hasMore = hasMore;

                                              case 10:
                                                _this5.setState({
                                                    commentData: commentData
                                                });

                                              case 11:
                                              case "end":
                                                return _context7.stop();
                                            }
                                        }
                                    }, _callee7, _this5);
                                }));
                                return function(_x5) {
                                    return _ref10.apply(this, arguments);
                                };
                            }());

                          case 4:
                          case "end":
                            return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));
            function handleClickReply(_x4) {
                return _ref9.apply(this, arguments);
            }
            return handleClickReply;
        }()
    }, {
        key: "getVideoSrcByVid",
        value: function() {
            var _ref12 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee9(vid) {
                var url, res, videoData, keys, srcArr;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            url = _index5.default.CRC32(vid);
                            _context9.next = 3;
                            return _index2.default.request({
                                url: url
                            });

                          case 3:
                            res = _context9.sent;
                            videoData = res.data.data;
                            if (!videoData) {
                                _context9.next = 9;
                                break;
                            }
                            keys = Object.keys(videoData.video_list);
                            srcArr = keys.map(function(key) {
                                return _index5.default.Encoder.base64decode(videoData.video_list[key].main_url);
                            });
                            return _context9.abrupt("return", srcArr[srcArr.length - 1]);

                          case 9:
                          case "end":
                            return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));
            function getVideoSrcByVid(_x6) {
                return _ref12.apply(this, arguments);
            }
            return getVideoSrcByVid;
        }()
    }, {
        key: "handleClickShareMoment",
        value: function handleClickShareMoment() {
            var _this6 = this;
            _index5.default.Tea.event("click_to_share_moment", {
                group_id: this.$router.params.id,
                group_type: this.state.isArticle ? "article" : "video"
            });
            this.setState({
                showCanvas: true
            }, function() {
                return _this6.drawCanvas();
            });
        }
    }, {
        key: "handleClickCanvasMask",
        value: function handleClickCanvasMask() {
            this.setState({
                showCanvas: false
            });
        }
    }, {
        key: "drawCanvas",
        value: function() {
            var _ref13 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee10() {
                var _this7 = this;
                var _state3, title, articleContent, publishTime, videoProps, isArticle, poster, image, _ref14, posterFilePath, _wx$getSystemInfoSync, windowWidth, r, c, grd, chr, temp, row, a, _chr, _temp2, _row2, _a, descArr, _row;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            _state3 = this.state, title = _state3.title, articleContent = _state3.articleContent, 
                            publishTime = _state3.publishTime, videoProps = _state3.videoProps, isArticle = _state3.isArticle;
                            poster = void 0;
                            if (isArticle) {
                                image = articleContent.find(function(i) {
                                    return i.type === "image";
                                });
                                poster = image ? image.info.src : "";
                            } else {
                                poster = videoProps.poster;
                            }
                            _context10.t0 = poster;
                            if (!_context10.t0) {
                                _context10.next = 8;
                                break;
                            }
                            _context10.next = 7;
                            return _index2.default.downloadFile({
                                url: "https://m.toutiao.com/microapp-hot-topic/api/download-image?url=" + encodeURIComponent(poster)
                            });

                          case 7:
                            _context10.t0 = _context10.sent;

                          case 8:
                            _ref14 = _context10.t0;
                            posterFilePath = _ref14.tempFilePath;
                            _wx$getSystemInfoSync = wx.getSystemInfoSync(), windowWidth = _wx$getSystemInfoSync.windowWidth;
                            r = function r(num) {
                                return Math.floor(num * (windowWidth / 750));
                            };
                            c = _index2.default.createCanvasContext("canvas", this.$scope);
                            // 背景
                                                        c.setFillStyle("#fff");
                            c.fillRect(0, 0, r(690), r(615));
                            c.setFillStyle("#f9f9f9");
                            c.fillRect(0, r(615), r(690), r(810));
                            if (poster) {
                                // 图片
                                c.drawImage(posterFilePath, r(30), r(30), r(630), r(375));
                                // 遮罩
                                                                grd = c.createLinearGradient(0, 0, 0, r(187));
                                grd.addColorStop(0, "rgba(0,0,0,0.5)");
                                grd.addColorStop(1, "transparent");
                                c.setFillStyle(grd);
                                c.fillRect(r(30), r(30), r(630), r(375));
                                // logo
                                                                c.drawImage("/statics/image/canvas-logo-white.png", r(51), r(47), r(149), r(42));
                                if (!isArticle) {
                                    c.drawImage("/statics/image/play-btn.png", r(322), r(188), r(56), r(60));
                                }
                                // 标题
                                                                c.setFontSize(19);
                                c.setFillStyle("#222");
                                chr = title.split("");
                                temp = "";
                                row = [];
                                for (a = 0; a < chr.length; a++) {
                                    if (c.measureText(temp).width < r(630)) {
                                        temp += chr[a];
                                    } else {
                                        a--;
                                        row.push(temp);
                                        temp = "";
                                    }
                                }
                                row.push(temp);
                                if (row.length > 2) {
                                    row = [ row[0], row[1] ];
                                    row[1] = row[1].substring(0, row[1].length - 1) + "...";
                                }
                                row.forEach(function(i, index) {
                                    c.fillText(i, r(30), (poster ? r(470) : r(160)) + r(50) * index, r(630));
                                });
                            } else {
                                c.drawImage("/statics/image/canvas-logo-black.png", r(51), r(47), r(149), r(42));
                                // 标题
                                                                c.font = "bold 20px normal sans-serif";
                                c.setFillStyle("#222");
                                _chr = title.split("");
                                _temp2 = "";
                                _row2 = [];
                                for (_a = 0; _a < _chr.length; _a++) {
                                    if (c.measureText(_temp2).width < r(630)) {
                                        _temp2 += _chr[_a];
                                    } else {
                                        _a--;
                                        _row2.push(_temp2);
                                        _temp2 = "";
                                    }
                                }
                                _row2.push(_temp2);
                                if (_row2.length > 2) {
                                    _row2 = _row2.slice(0, 2);
                                    _row2[1] = _row2[1].substring(0, _row2[1].length - 1) + "...";
                                }
                                _row2.forEach(function(i, index) {
                                    c.fillText(i, r(30), r(180) + r(50) * index, r(630));
                                });
                                // 描述
                                                                descArr = articleContent.filter(function(i) {
                                    return i && typeof i === "string";
                                });
                                c.font = "16px normal sans-serif";
                                _row = [];
                                descArr.forEach(function(i) {
                                    if (_row.length > 5) {
                                        return;
                                    }
                                    var chr = i.split("");
                                    var temp = "";
                                    chr.forEach(function(j) {
                                        var width = c.measureText(temp + j).width;
                                        if (width < r(630)) {
                                            temp += j;
                                        } else {
                                            _row.push(temp);
                                            temp = j;
                                        }
                                    });
                                    _row.push(temp);
                                    _row.push("");
                                });
                                if (_row.length > 5) {
                                    _row = _row.slice(0, 5);
                                    if (_row[4]) {
                                        _row[4] = _row[4].substring(0, _row[4].length - 1) + "...";
                                    }
                                }
                                _row.forEach(function(i, index) {
                                    c.fillText(i, r(30), r(310) + r(44) * index, r(630));
                                });
                            }
                            c.font = "14px normal sans-serif";
                            c.setFillStyle("#999");
                            // 发布时间
                                                        if (Date.now() - publishTime * 1e3 <= 864e5) {
                                c.fillText(_index5.default.timeago(new Date(publishTime * 1e3)), r(30), r(588));
                            }
                            // 二维码
                                                        c.drawImage("/statics/image/qrcode.png", r(30), r(643), r(140), r(140));
                            // 文案
                                                        c.fillText("长按扫码查看详情", r(185), r(700));
                            c.fillText("来自「今日最热榜」", r(185), r(744));
                            c.draw(false, function() {
                                setTimeout(function() {
                                    _this7.saveCanvasToAlbum("canvas");
                                }, 1e3);
                            });

                          case 25:
                          case "end":
                            return _context10.stop();
                        }
                    }
                }, _callee10, this);
            }));
            function drawCanvas() {
                return _ref13.apply(this, arguments);
            }
            return drawCanvas;
        }()
    }, {
        key: "saveCanvasToAlbum",
        value: function() {
            var _ref15 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee11(canvasId) {
                var _ref16, tempFilePath, repsonse;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.next = 2;
                            return _index2.default.canvasToTempFilePath({
                                canvasId: canvasId
                            });

                          case 2:
                            _ref16 = _context11.sent;
                            tempFilePath = _ref16.tempFilePath;
                            _context11.next = 6;
                            return _index2.default.saveImageToPhotosAlbum({
                                filePath: tempFilePath
                            }).catch(function(err) {
                                console.log(err);
                                _index2.default.showToast({
                                    title: "保存海报失败",
                                    icon: "none"
                                });
                                return false;
                            });

                          case 6:
                            repsonse = _context11.sent;
                            repsonse && _index2.default.showToast({
                                title: "已保存系统相册"
                            });

                          case 8:
                          case "end":
                            return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));
            function saveCanvasToAlbum(_x7) {
                return _ref15.apply(this, arguments);
            }
            return saveCanvasToAlbum;
        }()
    }, {
        key: "_createData",
        value: function _createData() {
            this.__state = arguments[0] || this.state || {};
            this.__props = arguments[1] || this.props || {};
            var isIPhoneX = this.isIPhoneX;
            var _state4 = this.__state, isVideo = _state4.isVideo, isArticle = _state4.isArticle, userInfo = _state4.userInfo, videoProps = _state4.videoProps, title = _state4.title, publishTime = _state4.publishTime, articleContent = _state4.articleContent, commentData = _state4.commentData, hasMoreComment = _state4.hasMoreComment, playCount = _state4.playCount, relatedData = _state4.relatedData, showCanvas = _state4.showCanvas;
            var anonymousState__temp = isVideo ? (0, _index.internal_inline_style)({
                width: "100%"
            }) : null;
            var anonymousState__temp2 = isVideo ? _index5.default.timeago(publishTime * 1e3) : null;
            var anonymousState__temp3 = isVideo ? _index5.default.formatNum(playCount) + "次播放" : null;
            var anonymousState__temp4 = isArticle ? _index5.default.timeago(publishTime * 1e3) : null;
            var anonymousState__temp9 = (0, _index.internal_inline_style)({
                display: showCanvas ? "block" : "none"
            });
            var loopArray0 = isArticle ? articleContent.map(function(i, key) {
                i = {
                    $original: (0, _index.internal_get_original)(i)
                };
                var $loopState__temp6 = isArticle ? i.$original.type === "video" ? (0, _index.internal_inline_style)({
                    width: "100%"
                }) : null : null;
                return {
                    $loopState__temp6: $loopState__temp6,
                    $original: i.$original
                };
            }) : [];
            var loopArray1 = relatedData.map(function(i, key) {
                i = {
                    $original: (0, _index.internal_get_original)(i)
                };
                var $loopState__temp11 = !!i.$original.title.trim();
                return {
                    $loopState__temp11: $loopState__temp11,
                    $original: i.$original
                };
            });
            var loopArray2 = commentData.map(function(i) {
                i = {
                    $original: (0, _index.internal_get_original)(i)
                };
                var $loopState__temp8 = _index5.default.timeago(new Date(i.$original.comment.create_time * 1e3)) + " · ";
                return {
                    $loopState__temp8: $loopState__temp8,
                    $original: i.$original
                };
            });
            Object.assign(this.__state, {
                anonymousState__temp: anonymousState__temp,
                anonymousState__temp2: anonymousState__temp2,
                anonymousState__temp3: anonymousState__temp3,
                anonymousState__temp4: anonymousState__temp4,
                anonymousState__temp9: anonymousState__temp9,
                loopArray0: loopArray0,
                loopArray1: loopArray1,
                loopArray2: loopArray2,
                isIPhoneX: isIPhoneX
            });
            return this.__state;
        }
    } ]);
    return Index;
}(_index.Component);

Index.properties = {};

Index.$$events = [ "handleClickShareMoment", "handleClickImage", "handleClickRelated", "handleClickDigg", "handleClickReply", "handleClickCanvasMask" ];

exports.default = Index;

Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));