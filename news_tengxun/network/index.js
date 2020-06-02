var e = require("../@babel/runtime/helpers/interopRequireDefault"), u = require("./request"), r = e(require("./url")), i = e(require("./login")), l = e(require("./openid")), t = e(require("./openGid")), q = e(require("./uploadFile"));

module.exports = exports = {
    request: u.request,
    flushReqQueue: u.flushReqQueue,
    URL: r.default,
    login: i.default,
    getOpenId: l.default,
    getOpenGid: t.default,
    uploadFile: q.default
};