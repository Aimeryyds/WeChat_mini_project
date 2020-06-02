var e = require("../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../utils/mlodash")), t = e(require("../utils/logger")), r = require("./reportConst"), n = require("../store/index"), c = 10, o = {
    HOME: "/pages/jump/jump",
    MINE: "/pages/mine/index",
    MINE_MESSAGE: "/pages/mine/message",
    COMMENT_LIKE: "/pages/mine/like",
    MINE_SETTING: "/pages/mine/setting",
    MINE_SHARE_CIRCLE: "/pages/mine/shareCircle",
    MINE_ACTIVE: "/pages/mine/activity",
    USER: "/pages/user/index",
    USER_FOCUS: "/pages/user/follow",
    USER_FANS: "/pages/user/fans",
    LOCAL_ACTIVE: "/module-local/pages/act/act",
    LOCAL_ARTICLE: "/module-local/pages/article/article",
    MEDIA: "/pages/article/media/media",
    HOT_NEWS: "/pages/hotnews/index",
    NEWS_FLASH: "/pages/newsflash/index",
    COMMENT_VIDEO: "/pages/comment/video",
    COMMENT_NORMAL: "/pages/comment/normal",
    COMMENT_SHARE: "/pages/comment/share",
    COMMENT_WEIBO: "/pages/comment/weibo",
    COMMENT_DETAIL: "/pages/comment/detail",
    TOPIC: "/pages/topic/topic",
    VIDEO: "/pages/video/index",
    NORMAL: "/pages/normal/index",
    NORMAL_SHARE: "/pages/normal/share",
    TOPIC_EDITOR: "/pages/topic/editor",
    SPECIAL: "/package/special/index",
    DAILY: "/package/daily/index",
    WEB_VIEW: "/package/webview/index",
    SEARCH: "/pages/search/index"
};

function s(e) {
    return 100 === (e = Number(e)) || 120 === e || 101 === e || 4 === e || 56 === e || 0 === e || 1 === e || 303 === e || 302 === e || 118 === e;
}

var i = "";

exports = module.exports = {
    PAGE_PATH: o,
    toUrl: function(e, t) {
        return t && !a.default.isEmpty(t) && (e += "?" + a.default.map(t, function(e, a) {
            return "".concat(a, "=").concat(e);
        }).join("&")), e;
    },
    typeToUrl: function(e, r) {
        t.default.info("调用typeToUrl：type=".concat(e, ", query="), r);
        var n = "";
        switch (e += "") {
          case "2":
          case "3":
          case "4":
            n = o.HOME;
            break;

          case "5":
          case "6":
          case "15":
            n = o.MINE;
            break;

          case "7":
            n = o.LOCAL_ACTIVE;
            break;

          case "8":
            n = o.TOPIC;
            break;

          case "9":
            n = o.LOCAL_ARTICLE;
            break;

          case "10":
          case "11":
            n = o.USER;
            break;

          case "12":
            n = o.HOT_NEWS;
            break;

          case "13":
            n = o.DAILY;
            break;

          case "14":
            n = o.NEWS_FLASH;
            break;

          case "16":
            n = o.WEB_VIEW;
            break;

          default:
            n = "";
        }
        return n && (n = (n += "?" + a.default.map(r, function(e, a) {
            return "".concat(a, "=").concat(e);
        }).join("&")).replace(/[\?&]+$/, "")), t.default.info("调用typeToUrl结果：", n), n;
    },
    atypeToUrl: function(e, t) {
        var r = "";
        switch (e = parseInt(e)) {
          case 0:
          case 1:
            r = "1" === t.fromJump || t.openGId ? o.NORMAL_SHARE : o.NORMAL;
            break;

          case 100:
          case 120:
            r = o.SPECIAL;
            break;

          case 101:
          case 4:
          case 56:
          case 118:
            r = o.VIDEO;
            break;

          case 302:
          case 303:
            r = o.COMMENT_WEIBO;
            break;

          default:
            return;
        }
        return a.default.isObject(t) || (t = {}), a.default.has(t, "atype") || (t.atype = e), 
        r += "?" + a.default.map(t, function(e, a) {
            return "".concat(a, "=").concat(e);
        }).join("&");
    },
    atypeToCommentUrl: function(e, t) {
        e = parseInt(e), a.default.isObject(t) || (t = {});
        var r = "";
        switch (e) {
          case 101:
          case 102:
          case 4:
          case 56:
          case 118:
            r = o.COMMENT_VIDEO;
            break;

          case 302:
          case 303:
            r = o.COMMENT_WEIBO;
            break;

          default:
            r = "1" === t.fromPlugin ? o.COMMENT_SHARE : o.COMMENT_NORMAL;
        }
        return a.default.has(t, "atype") || (t.atype = e), r += "?" + a.default.map(t, function(e, a) {
            return "".concat(a, "=").concat(e);
        }).join("&");
    },
    isSupportAtype: s,
    navigateTo: function(e, r) {
        if (t.default.info("调用jump.navigateTo: ", e, r, i), a.default.isObject(r) && (r = a.default.map(r, function(e, a) {
            return "".concat(a, "=").concat(e);
        }).join("&")), r && (-1 === e.indexOf("?") ? e += "?" + r : e += "&" + r), e && i !== e) return i = e, 
        setTimeout(function() {
            return i = "";
        }, 1e3), (getCurrentPages() || []).length === c ? function(e) {
            return new Promise(function(a, r) {
                t.default.info("wx.redirectTo: ", e), wx.redirectTo({
                    url: e,
                    success: a,
                    fail: r
                });
            });
        }(e) : function(e) {
            return new Promise(function(a, r) {
                t.default.info("wx.navigateTo: ", e), wx.navigateTo({
                    url: e,
                    success: a,
                    fail: r
                });
            });
        }(e);
    },
    toJumpUrl: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, r = arguments.length > 1 ? arguments[1] : void 0, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (t.default.info("调用toJumpUrl参数：targetPage=".concat(e, ", atype=").concat(r, ", query="), c), 
        0 !== e && 1 !== e || void 0 === r || s(r)) {
            a.default.isObject(c) || (c = {});
            var o = "/pages/jump/jump?";
            return c.targetPage = e, c.openid = n.userInfo.openid, null != r && (c.atype = r), 
            o = (o += a.default.reduce(c, function(e, a, t) {
                return null != a && e.push("".concat(t, "=").concat(a)), e;
            }, []).join("&")).replace(/[\?&]+$/, ""), t.default.info("生成的jumpUrl：".concat(o)), 
            o;
        }
        return t.default.error("调用toJumpUrl失败：底层页atype的值不支持，atype=", r), "/pages/jump/jump?targetPage=0";
    },
    canJumpToMedia: function(e) {
        return e && !0 === /^[0-9]*$/.test(e);
    },
    parseToFromPage: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0", a = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
        t.default.info("调用parseToFromPage：type=".concat(e, ", atype=").concat(a, ", zwb_type=").concat(n)), 
        e = String(e), a = parseInt(a);
        var c = "";
        switch (e) {
          case "2":
            c = r.FROM_PAGE.news_page;
            break;

          case "3":
            c = r.FROM_PAGE.video_page;
            break;

          case "4":
            c = r.FROM_PAGE.local_page;
            break;

          case "5":
          case "6":
            c = r.FROM_PAGE.mine_page;
            break;

          case "7":
          case "9":
            break;

          case "8":
            c = r.FROM_PAGE.weibo_list_page;
            break;

          case "10":
          case "11":
            c = r.FROM_PAGE.author_page;
            break;

          case "12":
            c = r.FROM_PAGE.hot_detail_page;
            break;

          case "13":
            c = "1" === n ? r.FROM_PAGE.morning_page : r.FROM_PAGE.evening_page;
            break;

          case "14":
            c = r.FROM_PAGE.speed_page;
            break;

          default:
            c = function(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
                e = parseInt(e);
                var t = "0" === (a = String(a)), n = "";
                switch (e) {
                  case 100:
                    n = t ? r.FROM_PAGE.topic_detail_page : "";
                    break;

                  case 120:
                    n = r.FROM_PAGE.special_detail_page;
                    break;

                  case 101:
                    n = t ? r.FROM_PAGE.videotopic_share_detail_page : r.FROM_PAGE.video_comment_page;
                    break;

                  case 102:
                  case 4:
                  case 56:
                  case 118:
                    n = t ? r.FROM_PAGE.video_share_detail_page : r.FROM_PAGE.video_comment_page;
                    break;

                  case 302:
                  case 303:
                    n = r.FROM_PAGE.weibo_detail_page;
                    break;

                  default:
                    n = t ? r.FROM_PAGE.normal_share_detail_page : r.FROM_PAGE.comment_landing_page;
                }
                return n;
            }(a, e);
        }
        return t.default.info("调用parseToFromPage结果：fromPage=".concat(c)), c;
    }
};