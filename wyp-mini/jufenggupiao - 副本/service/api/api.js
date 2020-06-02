Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.getCCMp4 = exports.getLiveNewInfos = exports.recordDistclickNum = exports.APP_SHARE_COUNT = exports.APP_START_COUNT = exports.getRealTimeIndex = exports.getUserInvestmentType = exports.getArticleList = exports.getArticleDetails = exports.getRiskType = exports.risk = exports.searchQuestionList = exports.questionList = exports.cancelArticle = exports.getLiveCol = exports.getColArticle = exports.getCollection = exports.getZjDetail = exports.getAnswerList = exports.getRecordMore = exports.getQrcode = exports.liveAdd = exports.getZjList = exports.getLiveList = exports.saveAnswer = exports.getRandomColumnist = exports.saveWxUserInfo = exports.cancelFirstLogin = exports.isFirstLogin = exports.setCustomColumnist = exports.getCustomColumnist = exports.removeStock = exports.addStock = exports.searchStock = exports.getStockHome = exports.setSrdzDict = exports.getSrdzDict = exports.getToken = undefined;

var _wxRequest = require("./../wxRequest.js");

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

// const requestUrl = 'https://jgpt.jfinfo.com/'; //测试地址
var requestUrl = "https://jgp.jfinfo.com/";

// 线上地址
// 获取token
var getToken = exports.getToken = function getToken(param) {
    return (0, _wxRequest2.default)({
        params: Object.assign({}, param.params, {
            scene: wx.scene
        })
    }, requestUrl + "api/user/token");
};

// 获取私人订制选项卡
var getSrdzDict = exports.getSrdzDict = function getSrdzDict(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/getSrdzDict");
};

// 保存私人订制选项卡
var setSrdzDict = exports.setSrdzDict = function setSrdzDict(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/saveUserMicroinfo");
};

// 自选股首页接口
var getStockHome = exports.getStockHome = function getStockHome(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/selfStock/index");
};

// 股票搜索接口
var searchStock = exports.searchStock = function searchStock(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/selfStock/searchStock");
};

// 自选股添加接口
var addStock = exports.addStock = function addStock(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/selfStock/addStock");
};

//删除自选股
var removeStock = exports.removeStock = function removeStock(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/selfStock/removeStock");
};

// 获取栏目接口
var getCustomColumnist = exports.getCustomColumnist = function getCustomColumnist(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getCustomColumnist");
};

// 定制栏目接口
var setCustomColumnist = exports.setCustomColumnist = function setCustomColumnist(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/customColumnist");
};

// 获得用户是否是第一次登陆平台
var isFirstLogin = exports.isFirstLogin = function isFirstLogin(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/first");
};

// 取消用户第一次进入状态
var cancelFirstLogin = exports.cancelFirstLogin = function cancelFirstLogin(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/close/first");
};

// 保存微信用户信息
var saveWxUserInfo = exports.saveWxUserInfo = function saveWxUserInfo(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/save/wx/info");
};

// 问股页面获取随机栏目
var getRandomColumnist = exports.getRandomColumnist = function getRandomColumnist(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getRandomColumnist");
};

// 问股页面保存问题
var saveAnswer = exports.saveAnswer = function saveAnswer(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/question/ask");
};

// 直播列表
var getLiveList = exports.getLiveList = function getLiveList(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/live/list");
};

// 直播首页战绩回顾列表
var getZjList = exports.getZjList = function getZjList(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/record/review/list");
};

// 直播首页添加收藏
var liveAdd = exports.liveAdd = function liveAdd(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/favorites/option");
};

// 获取二维码
var getQrcode = exports.getQrcode = function getQrcode(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/wx/qr/code/b");
};

// 战绩回顾更多列表
var getRecordMore = exports.getRecordMore = function getRecordMore(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/record/review/more/list");
};

// 我的提问列表
var getAnswerList = exports.getAnswerList = function getAnswerList(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/my/question");
};

// 战绩回顾详情
var getZjDetail = exports.getZjDetail = function getZjDetail(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/record/review/info");
};

// 我的收藏->所有栏目
var getCollection = exports.getCollection = function getCollection(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/favorites/columnists");
};

// 我的收藏->各栏目下收藏的文章列表
var getColArticle = exports.getColArticle = function getColArticle(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/favorites/columnists/article");
};

// 我的收藏->用户收藏过的直播列表
var getLiveCol = exports.getLiveCol = function getLiveCol(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/live/favorites");
};

// 我的收藏->添加取消收藏
var cancelArticle = exports.cancelArticle = function cancelArticle(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/favorites/columnists/article/option");
};

// 问答大厅-列表
var questionList = exports.questionList = function questionList(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/question/list");
};

// 问答大厅-搜索
var searchQuestionList = exports.searchQuestionList = function searchQuestionList(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/search/question");
};

// 风险揭示说明
var risk = exports.risk = function risk(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/risk/tip");
};

// 获取用户私人定制基本信息接口
var getRiskType = exports.getRiskType = function getRiskType(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/getUserMicroinfo");
};

// 获取直播相关文章详情接口
var getArticleDetails = exports.getArticleDetails = function getArticleDetails(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getArticleDetail");
};

// 获取直播相关文章列表详情
var getArticleList = exports.getArticleList = function getArticleList(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/product/getArticleList");
};

// 获取用户风险类型接口
var getUserInvestmentType = exports.getUserInvestmentType = function getUserInvestmentType(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/user/isAssessment");
};

// 轮询获取上证深证指数
var getRealTimeIndex = exports.getRealTimeIndex = function getRealTimeIndex(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/selfStock/getStockRisePercent");
};

// APP启动统计接口
var APP_START_COUNT = exports.APP_START_COUNT = function APP_START_COUNT(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/statistic/firstEntry");
};

// APP分享统计接口
var APP_SHARE_COUNT = exports.APP_SHARE_COUNT = function APP_SHARE_COUNT(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/statistic/behaviorStatistic");
};

// > api/review/click
var recordDistclickNum = exports.recordDistclickNum = function recordDistclickNum(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/review/click");
};

// 直播页面获取最新消息
var getLiveNewInfos = exports.getLiveNewInfos = function getLiveNewInfos(param) {
    return (0, _wxRequest2.default)(param, requestUrl + "api/live/new/number");
};

// CC链接获取mp4地址 
var getCCMp4 = exports.getCCMp4 = function getCCMp4(vid, siteid, vc, callback) {
    wx.request({
        url: "https://p.bokecc.com/servlet/getvideofile",
        data: {
            vid: vid,
            siteid: siteid,
            hlssupport: 1,
            useragent: wx.getSystemInfoSync().system.toLowerCase().startsWith("android") ? "Android" : "iPhone",
            vc: vc || ""
        },
        header: {
            "Content-Type": "applciation/json"
        },
        method: "GET",
        success: function success(res) {
            callback(res);
        },
        fail: function fail(err) {}
    });
};