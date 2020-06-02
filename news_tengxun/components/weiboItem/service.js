var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = (e(require("../../utils/mlodash")), 
e(require("../../utils/logger"))), t = require("../../network/index.js"), n = require("../../store/index");

exports = module.exports = {
    reportInterest: function(e, i) {
        t.request.login().post(t.URL.reportInterest, {}, {
            id: e,
            diffusionCount: i,
            devid: n.userInfo.openid,
            app_openid: n.userInfo.app_openid,
            type: "diffused",
            chlid: "news_recommend_main"
        }).then(function(e) {
            r.default.warn("topicPage success reloadDoPraise data:", e);
        }, function(e) {
            r.default.warn("topicPage fail reloadDoPraise data:", e);
        });
    },
    getFinalPushCount: function(e) {
        return e <= 10 ? e : e <= 19 ? e % 10 * 11 : 100;
    },
    getAddPushCount: function(e) {
        return e <= 11 ? 1 : e <= 19 ? 11 : 1;
    },
    deleteWeibo: function(e) {
        return t.request.login().post(t.URL.delWeibo, e).then(function(e) {
            return e && 0 === e.ret ? e : Promise.reject(e);
        });
    }
};