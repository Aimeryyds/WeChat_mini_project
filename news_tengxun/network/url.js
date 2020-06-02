var e, t = require("../@babel/runtime/helpers/interopRequireDefault"), r = t(require("../@babel/runtime/helpers/defineProperty")), s = t(require("../utils/mlodash")), o = require("../store/index"), a = t(require("../utils/logger"));

function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, s);
    }
    return r;
}

var p = (e = {
    kvcollect: {
        url: "/kvcollect",
        baseUrl: "https://btrace.qq.com",
        params: {
            BossId: 5897,
            Pwd: 760824233
        }
    },
    articleTopicModel: {
        url: "/wxapp/articleTopicModel",
        data: {
            listname: "related_topic"
        }
    },
    dislike: {
        url: "/dislike",
        data: {
            from: "wxapp"
        }
    },
    delComment: {
        url: "/delComment",
        data: {
            self: "1",
            delfrom: "article"
        }
    },
    getRecommendList: {
        url: "/g2/getRecommendList",
        data: {
            from: "wxapp"
        }
    },
    getRecommMedia: {
        url: "/wxapp/getRecommMedia",
        data: {
            from: "wxapp"
        }
    },
    getRecommendLisVideo: {
        url: "/g2/getRecommendList",
        data: {
            from: "wxapp",
            reqType: 2
        }
    },
    getTwentyFourHourNews: {
        url: "/wxapp/getTwentyFourHourNews"
    },
    getTopicWeiboList: {
        url: "/getTopicWeiboList",
        data: {
            topic_tab_id: "topic_square"
        }
    },
    getTopicSelectList: {
        url: "/getTopicSelectList",
        data: {
            topic_tab_id: "topic_select"
        }
    },
    generateImage: {
        url: "/generateImage",
        params: {
            from: "wxapp"
        }
    },
    reportpush: {
        url: "/reportpush",
        params: !0 === o.global.dev ? {
            env: "dev"
        } : {}
    },
    searchPage: {
        url: "/searchPage",
        params: {
            from: "wxapp"
        }
    },
    vote: {
        url: "/v2/vote/<voteId>",
        baseUrl: "https://panshi.qq.com"
    },
    voteSubmit: {
        url: "/v2/vote/<voteId>/submit",
        baseUrl: "https://panshi.qq.com"
    },
    getNewRelateRecomm: {
        url: "/g2/getNewRelateRecomm",
        baseUrl: "https://view.inews.qq.com",
        data: {
            path: "a",
            check_article_name: "normal_share"
        }
    },
    getUserWeiboList: "/getUserWeiboList",
    login: "/login",
    appreciateSharing: "/wxapp/appreciateSharing",
    code2openid: "/wxapp/code2openid",
    enterShareGrp: "/wxapp/enterShareGrp",
    getAtComments: "/getAtComments",
    getCommentUserInfo: "/getCommentUserInfo",
    getGid: "/getGid",
    getMyComments: "/getMyComments",
    getNewsAtype: "/getNewsAtype",
    getNewRelateRecommVideo: "/wxapp/getNewRelateRecomm",
    getQQNewsComment: "/getQQNewsComment",
    getQQNewsCommentThird: "/getQQNewsCommentThird",
    getQQNewsOrigReplyComment: "/getQQNewsOrigReplyComment",
    getReplyList: "/getReplyList",
    getShareGrpComment: "/getShareGrpComment",
    getSharingHistory: "/wxapp/getSharingHistory",
    getSubItem: "/getSubItem",
    getSubNewsContent: "/getSubNewsContent",
    bottomRecommList: "/bottomRecommList",
    getSubNewsRelate: "/getSubNewsRelate",
    getSubNewsIndex: "/getSubNewsIndex",
    getSubNewsListItems: "/getSubNewsListItems",
    getSpecialVideoListItems: "/getSpecialVideoListItems",
    getSpecialListItems: "/getSpecialListItems",
    getTopicItem: "/getTopicItem",
    getUserOption: "/wxapp/getUserOption",
    getUserSubTopicAndCpList: "/getUserSubTopicAndCpList",
    getUserVideoList: "/getUserVideoList",
    getUpUserList: "/getUpUserList",
    getUpList: "/getUpList",
    getUserFansList: "/getUserFansList",
    getUserSubTopicList: "/getUserSubTopicList",
    getUserSubList: "/getUserSubList",
    getVideoRecommend: "/wxapp/getVideoRecommend",
    getZwbList: "/wxapp/getZwbList",
    newsflash: "/wxapp/newsflash",
    reportInterest: "/reportInterest",
    setUserOption: "/wxapp/setUserOption",
    shareQQNewsMulti: "/shareQQNewsMulti",
    supportQQNewsComment: "/supportQQNewsComment",
    syncSubCp: "/syncSubCp",
    syncSubTopic: "/syncSubTopic",
    UserFansMsgList: "/UserFansMsgList",
    abTest: "/wxapp/getUserExper",
    guideInfo: "/wxapp/guideinfo",
    uploadPic: "/uploadPic",
    postWeibo: "/postWeibo",
    delWeibo: "/delWeibo"
}, (0, r.default)(e, "searchPage", "/searchPage"), (0, r.default)(e, "searchSug", "/searchSug"), 
(0, r.default)(e, "search", "/search"), (0, r.default)(e, "searchMore", "/searchMore"), 
e);

function n(e, t, r) {
    return function(o) {
        var a = {};
        s.default.isObject(t) && Object.assign(a, t), s.default.isObject(r) && Object.assign(a, r), 
        s.default.isObject(o) && Object.assign(a, o);
        var i = function(e) {
            return s.default.map(e, function(e, t) {
                return null == e && (e = ""), "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e));
            }).join("&");
        }(a);
        return i ? "".concat(e, "?").concat(i) : e;
    };
}

var c = {};

c.formatUrl = function(e) {
    var t = "https://wxapp.inews.qq.com";
    !0 === e && (t = "https://wxapptest.inews.qq.com"), s.default.forEach(p, function(e, o) {
        var p;
        s.default.isString(e) ? p = {
            url: t + e
        } : s.default.isObject(e) && (delete (p = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(s), !0).forEach(function(t) {
                    (0, r.default)(e, t, s[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : i(Object(s)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
                });
            }
            return e;
        }({}, e)).baseUrl, s.default.isString(e.url) ? p.url = (e.baseUrl || t) + e.url : a.default.error("url表错误，url支持object注册，但item必须包含url字段")), 
        p.toString = n(p.url, p.params, p.data), c[o] = p;
    });
}, c.formatUrl(o.global.dev), module.exports = exports = c;