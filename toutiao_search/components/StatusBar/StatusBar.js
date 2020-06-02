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

var _require = require("../../api/index.js"), getHotSearch = _require.getHotSearch;

var Utils = require("../../utils/index.js");

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp = void 0, index = void 0;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

Component({
    properties: {
        title: {
            type: String,
            value: "今日最热榜"
        },
        showSearchBanner: {
            type: Boolean,
            value: false
        },
        showBackBtn: {
            type: Boolean,
            value: true
        }
    },
    data: {
        totalHeight: 0,
        titleHeight: 0,
        searchData: [],
        offset: 0,
        index: 0,
        showAnimation: true
    },
    lifetimes: {
        created: function created() {},
        attached: function() {
            var _ref = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var systemInfo, system, statusBarHeight, bannerTop, _ref2, hotSearchList, searchData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            systemInfo = wx.getSystemInfoSync();
                            system = systemInfo.system, statusBarHeight = systemInfo.statusBarHeight;
                            bannerTop = /Android/gi.test(system) ? 8 : 8;
                            this.setData({
                                totalHeight: statusBarHeight + bannerTop + 40,
                                searchTop: statusBarHeight + bannerTop,
                                titleHeight: bannerTop + 40
                            });
                            if (!this.properties.showSearchBanner) {
                                _context.next = 13;
                                break;
                            }
                            _context.next = 7;
                            return getHotSearch();

                          case 7:
                            _ref2 = _context.sent;
                            hotSearchList = _ref2.hotSearchList;
                            searchData = getRandomArrayElements(hotSearchList.slice(5, hotSearchList.length), 4).map(function(i) {
                                return i.hotSearchWord;
                            });
                            wx.setStorageSync("searchData", JSON.stringify(searchData));
                            searchData.push(searchData[0]);
                            this.setData({
                                searchData: searchData.map(function(i) {
                                    return "热搜：" + i;
                                })
                            });

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function attached() {
                return _ref.apply(this, arguments);
            }
            return attached;
        }(),
        ready: function ready() {
            var _this = this;
            setInterval(function() {
                var _data = _this.data, searchData = _data.searchData, offset = _data.offset;
                var len = searchData.length;
                offset = offset + 1;
                _this.setData({
                    offset: offset,
                    showAnimation: true
                }, function() {
                    setTimeout(function() {
                        if (offset === len - 1) {
                            _this.setData({
                                offset: 0,
                                showAnimation: false
                            });
                        }
                    }, 1e3);
                });
            }, 4e3);
        },
        moved: function moved() {},
        detached: function detached() {}
    },
    methods: {
        clickSearchBanner: function clickSearchBanner() {
            Utils.Tea.event("search_tab_enter");
            wx.navigateTo({
                url: "/pages/search/index"
            });
        },
        clickBackBtn: function clickBackBtn() {
            var length = getCurrentPages().length;
            if (length > 1) {
                wx.navigateBack({
                    delta: 1
                });
            } else {
                wx.navigateTo({
                    url: "/pages/index/index"
                });
            }
        },
        clickHomeBtn: function clickHomeBtn() {
            wx.redirectTo({
                url: "/pages/index/index"
            });
        }
    }
});