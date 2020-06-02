Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LOCAL_LAST_LOCATE_INFO = exports.STORAGE_LC_COMMENT_IS_PRAISED = exports.STORAGE_LC_SELECTED_CITYINFO = exports.STORAGE_LC_CITYLIST = exports.STORAGE_LC_LOCATION_CITYINFO = exports.STORAGE_LC_LOCATION_LAT_LNG = exports.STORAGE_LC_COMMENT_CONTENT = exports.VARS = exports.sex = exports.shareDefaultInfo = exports.ALLOW_ACT_TYPE = exports.ACT_TYPE = exports.posterType = exports.posterDefaultInfo = exports.forward = exports.ACT_STATUS_WORD = exports.ACT_STATUS = exports.localFeedArr = exports.defaultCityInfo = exports.emoInfo = exports.api = exports.ENV = void 0;

var e = "https://wxapp.inews.qq.com", t = "http://10.12.91.31:9090", o = "https://life.qq.com";

exports.ENV = "prod-bebba2";

var s = o, a = {
    login: e + "/login",
    cityList: e + "/getSubLocChannels?type=0",
    getCity: e + "/getLocationChl?type=location",
    getQRCodeUrl: "https://view.inews.qq.com/generateImage",
    dislikeUrl: e + "/dislike",
    getHeaderInfo: s + "/api/header/getinfo",
    getTabsCfg: o + "/gettabs",
    getWeatherInfo: "https://r.inews.qq.com/getWeatherInfo",
    aroundThing: "".concat("https://view.inews.qq.com", "/g2/getRecommendList?from=wxapp&newlocal=1"),
    goodAct: s + "/api/activity/get_act_list",
    worthGo: t + "/api/feeds/cms",
    worthEat: t + "/api/feeds/cms",
    goodWelfare: "https://tmock.qq.com/mock/52/api/feeds/get_goodWelfare_list",
    getUrbanMsg: o + "/api/urbanmessage/get_urbanmessage",
    sendUrbanMsg: o + "/api/urbanmessage/send_urbanmessage",
    getGreetList: o + "/api/city_interact/greet_list",
    sendGreet: o + "/api/city_interact/greet",
    getArticleDetail: t + "/api/feeds/cms_detail",
    getRelatedArticles: o + "/api/article/get_related_article",
    getCommentList: e + "/getQQNewsComment",
    getReplyList: e + "/getQQNewsOrigReplyComment",
    getReReplyList: e + "/getQQNewsCommentThird",
    addComment: e + "/shareQQNewsMulti",
    delComment: e + "/delComment",
    praiseComment: e + "/supportQQNewsComment",
    getActDetail: s + "/api/activity/detail",
    getRecomAct: s + "/api/activity/news_recommend_list",
    getSignInfo: s + "/api/activity/sign_user_info",
    signUp: s + "/api/activity/sign_up",
    participateInfo: s + "/api/my_activity/participate_info",
    getPhoneNumber: s + "/api/uc/get_phone_number",
    getUserInfo: o + "/api/uc/user_info",
    getMyActList: "".concat(s, "/api/my_activity/joined_act_list"),
    vote: "https://panshi.qq.com/v2/vote/"
};

exports.api = a;

exports.emoInfo = {
    smile: "http://mat1.gtimg.com/www/js/news/emo-smile.png",
    cry: "http://mat1.gtimg.com/www/js/news/emo-cry.png",
    angry: "http://mat1.gtimg.com/www/js/news/emo-angry.png",
    snicker: "http://mat1.gtimg.com/www/js/news/emo-sniker.png"
};

exports.defaultCityInfo = {
    chlid: "news_news_bj",
    chlname: "北京"
};

exports.localFeedArr = {
    AROUND_THING: {
        id: "aroundThing",
        name: "身边事"
    },
    GOOD_ACT: {
        id: "goodAct",
        name: "好活动"
    },
    WORTH_GO: {
        id: "worthGo",
        name: "值得去"
    },
    WORTH_EAT: {
        id: "worthEat",
        name: "值得吃"
    },
    GOOD_WELFARE: {
        id: "goodWelfare",
        name: "好福利"
    }
};

var r = {
    PENDING_AUDIT: 1,
    PASS_AUDIT: 2,
    FAIL_AUDIT: 3,
    JOINED: 4
};

exports.ACT_STATUS = r;

var i = {};

exports.ACT_STATUS_WORD = i, i[r.PENDING_AUDIT] = "报名审核中", i[r.PASS_AUDIT] = "审核已通过", 
i[r.FAIL_AUDIT] = "审核未通过", i[r.JOINED] = "已参加活动";

exports.forward = {
    first: 2,
    pullDown: 0,
    pullUp: 1
};

exports.posterDefaultInfo = {
    avatarMask: "http://mat1.gtimg.com/www/js/news/head_mask.png",
    avatarUrl: "http://mat1.gtimg.com/www/js/news/default_avatar.png",
    headImgUrl: "http://mat1.gtimg.com/www/js/news/weibo_default_poster",
    qrcodeUrl: "",
    videoIconUrl: "http://mat1.gtimg.com/www/js/news/poster_video.png",
    logoUrl: "http://mat1.gtimg.com/www/js/news/poster_logo.png",
    nickName: "腾讯网友",
    title: "",
    time: "",
    address: ""
};

exports.posterType = {
    activity: 7,
    lcvideo: 8,
    lcNormal: 9
};

var p = {
    NORMAL: "0",
    OFFLINE: "1",
    VOTE: "2",
    ONLINE: "3",
    HELP: "4"
};

exports.ACT_TYPE = p;

var _ = [ p.OFFLINE, p.ONLINE ];

exports.ALLOW_ACT_TYPE = _;

exports.shareDefaultInfo = {
    title: "腾讯新闻",
    desc: "实时热点全网罗",
    path: "/pages/index/index"
};

exports.sex = [ "保密", "男", "女" ];

exports.VARS = {
    LOADING_HEIGHT: 56
};

exports.STORAGE_LC_COMMENT_CONTENT = "STORAGE_LC_COMMENT_CONTENT";

exports.STORAGE_LC_LOCATION_LAT_LNG = "STORAGE_LC_LOCATION_LAT_LNG";

exports.STORAGE_LC_LOCATION_CITYINFO = "STORAGE_LC_LOCATION_CITYINFO";

exports.STORAGE_LC_CITYLIST = "STORAGE_LC_CITYLIST";

exports.STORAGE_LC_SELECTED_CITYINFO = "STORAGE_LC_SELECTED_CITYINFO";

exports.STORAGE_LC_COMMENT_IS_PRAISED = "STORAGE_LC_COMMENT_IS_PRAISED";

exports.LOCAL_LAST_LOCATE_INFO = "LOCAL_LAST_LOCATE_INFO";