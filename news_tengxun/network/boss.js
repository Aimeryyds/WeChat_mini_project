var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = (e(require("../utils/mlodash")), 
e(require("./wxrequest"))), r = {
    default: "https://btrace.qq.com/kvcollect?BossId=5897&Pwd=760824233"
};

exports = module.exports = {
    BOSS_URL: r,
    bossPost: function(e) {
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
        return (0, t.default)({
            method: "POST",
            url: u,
            data: e
        }, !1);
    }
};