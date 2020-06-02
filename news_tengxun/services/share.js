var e = require("../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../@babel/runtime/helpers/defineProperty")), t = e(require("../@babel/runtime/helpers/objectWithoutProperties")), i = e(require("../utils/logger")), n = e(require("../network/url")), o = require("../store/index"), a = require("./jump"), u = require("./report");

function l(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        r && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, i);
    }
    return t;
}

function p(e) {
    var r = "";
    return e && (r = n.default.generateImage.toString({
        id: e
    })), r;
}

exports = module.exports = {
    genArticleShareMsg: function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0";
        n.opType = u.OP_TYPE.shareWeixinClick, (0, u.report)(n);
        var g = e.title, s = e.id, f = e.atype, d = e.imageUrl, b = e.useScreenShot, h = e.activeId, m = (0, 
        t.default)(e, [ "title", "id", "atype", "imageUrl", "useScreenShot", "activeId" ]);
        1 * f != 0 && 1 * f != 1 || (m.uid = o.userInfo.openid || "", m.source = "wxapp");
        var O = {
            title: g || "腾讯新闻",
            path: (0, a.toJumpUrl)(c, f, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(i), !0).forEach(function(t) {
                        (0, r.default)(e, t, i[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach(function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(i, r));
                    });
                }
                return e;
            }({
                id: s
            }, m))
        };
        return d ? O.imageUrl = d : b || (h ? O.imageUrl = p(h) : s && (O.imageUrl = p(s))), 
        i.default.info("分享好友信息：", O), O;
    },
    genShareMsg: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r.opType = u.OP_TYPE.shareWeixinClick, (0, u.report)(r);
        var n = e.title, o = e.imageUrl, l = e.targetPage, p = e.atype, c = (0, t.default)(e, [ "title", "imageUrl", "targetPage", "atype" ]), g = {
            title: n || "腾讯新闻",
            imageUrl: o,
            path: (0, a.toJumpUrl)(l, p, c)
        };
        return i.default.info("分享好友信息：", g), g;
    }
};