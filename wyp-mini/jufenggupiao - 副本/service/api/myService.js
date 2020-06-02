Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.cancelSubscribe = exports.getColumnistDetail = exports.getoption = exports.getGuestInfo = exports.getGuestList = exports.advisers = exports.addColumnists = exports.getArticleList = exports.getArticleDetail = exports.toColumnistDetail = exports.mySubscribe = exports.productIndex = exports.isSubscribe = undefined;

var _wxRequest = require("./../wxRequest.js");

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

// const requestUrl = 'https://jgpt.jfinfo.com/';
var requestUrl = "https://jgp.jfinfo.com/";

// 我的服务  是否定制过栏目
var isSubscribe = exports.isSubscribe = function isSubscribe(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/isSubscribe");
};

// 我的服务  非定制栏目列表
var productIndex = exports.productIndex = function productIndex(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/index");
};

// 我的服务  定制栏目列表
var mySubscribe = exports.mySubscribe = function mySubscribe(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/mySubscribe");
};

//文章类 首页模块详情
var toColumnistDetail = exports.toColumnistDetail = function toColumnistDetail(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/toColumnistDetail");
};

//文章类 文章详情
var getArticleDetail = exports.getArticleDetail = function getArticleDetail(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getArticleDetail");
};

//文章类列表
var getArticleList = exports.getArticleList = function getArticleList(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getArticleList");
};

//订阅
var addColumnists = exports.addColumnists = function addColumnists(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/addColumnists");
};

//投顾团队
var advisers = exports.advisers = function advisers(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/advisers");
};

//嘉宾列表
var getGuestList = exports.getGuestList = function getGuestList(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getGuestList");
};

//讲师详情
var getGuestInfo = exports.getGuestInfo = function getGuestInfo(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getGuestInfo");
};

//收藏文章
var getoption = exports.getoption = function getoption(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/favorites/columnists/article/option");
};

//栏目详情
var getColumnistDetail = exports.getColumnistDetail = function getColumnistDetail(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getColumnistDetail");
};

//取消订阅
var cancelSubscribe = exports.cancelSubscribe = function cancelSubscribe(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/cancelSubscribe");
};