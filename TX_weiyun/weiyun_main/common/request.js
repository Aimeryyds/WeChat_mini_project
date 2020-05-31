var e = getApp() || {}, r = require("md.js"), t = require("cmds.js"), o = require("user.js"), i = require("error.js").format, s = wx.getSystemInfoSync();

module.exports = {
    webapp: function(n) {
        var a = 3, d = 0;
        return o.getWxUserInfo().then(function(o) {
            return new Promise(function(i, c) {
                e.minico.getLoginInfo().then(function(m) {
                    function g(t) {
                        r.log("[request]: minico socket, error: " + JSON.stringify(t)), r.write(), d < a ? (d++, 
                        e.minico.webapp(Object.assign(l, {
                            withCredentials: !0
                        })).then(p, g)) : (r.report(n.cmd, 40002, 1), c({
                            code: 40002,
                            message: "" + JSON.stringify(t)
                        }));
                    }
                    function p(t) {
                        if (t.ret && (r.log("[request]: minico socket, data.ret: " + t.ret + ", data.msg: " + t.msg), 
                        r.write(), r.report(n.cmd, 40004, 1), c({
                            code: 40004,
                            message: "" + t.msg
                        })), t.data && t.data.data) {
                            var o = t.data.data;
                            if (o.rsp_header) {
                                var s = o.rsp_header;
                                s.retcode && (r.log("[request]: minico socket, rspHeader.retcode: " + s.retcode + ", rspHeader.retmsg: " + s.retmsg), 
                                r.write(), r.report(n.cmd, s.retcode, 1), c({
                                    code: s.retcode,
                                    message: "" + s.retmsg
                                }));
                            }
                            o.rsp_body && (i(o.rsp_body.RspMsg_body), r.report(n.cmd, 0, 0));
                        } else -3003 === t.data.ret ? (r.log("[request]: minico socket request, error: " + JSON.stringify(t)), 
                        r.write(), r.report(n.cmd, 40006, 1), d < a ? (d++, e.minico.rebuild(l).then(p, g)) : c({
                            code: 40006,
                            message: "" + JSON.stringify(t)
                        })) : (r.log("[request]: minico socket request, error: " + JSON.stringify(t)), r.log("[request]: http start because of socket's failure"), 
                        r.write(), d < a ? (d++, e.minico.webapp(Object.assign(l, {
                            withCredentials: !0
                        })).then(p, g)) : (r.report(n.cmd, 40005, 1), c({
                            code: 40005,
                            message: "" + JSON.stringify(t)
                        })));
                    }
                    var u = t.get(n.cmd);
                    m.uid || (r.report(n.cmd, 40003, 1), r.log("[request]: webapp request no uid"), 
                    r.write(), c({
                        code: 40003,
                        message: "webapp request no uid"
                    })), r.log("[request]: minico getLoginInfo, uin: " + m.uid);
                    var f = {
                        appid: "qq" === s.AppPlatform ? 30121 : 30120,
                        cmd: u.cmdId,
                        fix_version: 3,
                        major_version: 3,
                        minor_version: 3,
                        version: 3,
                        type: 1,
                        uin: (m.uid || 1e4).toString(),
                        seq: parseInt(new Date().getTime() + (9999 * Math.random()).toFixed(0)),
                        wx_openid: "qq" === s.AppPlatform ? "" : m.openid,
                        user_flag: "qq" === s.AppPlatform ? 0 : 1
                    }, q = {
                        ReqMsg_body: {
                            token_info: {
                                nick_name: o.nickName,
                                head_logo: o.avatarUrl
                            }
                        }
                    };
                    n.msgHead && Object.assign(f, n.msgHead), q.ReqMsg_body[".weiyun." + u.cmd + "MsgReq_body"] = n.data;
                    var l = {
                        protocol: u.protocol,
                        name: u.cmd,
                        data: {
                            req_header: JSON.stringify(f),
                            req_body: JSON.stringify(q)
                        }
                    };
                    e.minico.socket(l).then(p, g);
                }, function(e) {
                    r.log("[request]: minico getLoginInfo, error: " + JSON.stringify(e)), r.write(), 
                    r.report(n.cmd, 40001, 1), c({
                        code: 40001,
                        message: "" + JSON.stringify(e)
                    });
                });
            });
        }).catch(function(e) {
            throw i(e);
        });
    }
};