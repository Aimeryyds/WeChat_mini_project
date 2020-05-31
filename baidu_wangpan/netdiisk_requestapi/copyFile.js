Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.execTaskQuery = exports.asyncCopyFiles = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), t = !1, n = void 0, i = {
    TASK_QUERY: "api/taskquery",
    ASYNC_COPY: "api/filemanager?opera=copy&async=2&onnest=fail"
}, r = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments[2];
    return t ? e.map(function(e) {
        return e.dest = t, n && (e.ondup = n), e;
    }) : e;
}, o = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "path";
    return e.map(function(e) {
        var n = e[t] || "";
        return {
            dest: "",
            path: n,
            newname: (n ? n.split("/") : []).pop()
        };
    });
}, s = function(e) {
    return function() {
        return new Promise(function(t) {
            setTimeout(t, e);
        });
    };
}, a = function(t) {
    var n = t.taskid, r = t.times, o = void 0 === r ? 100 : r, s = t.type, a = void 0 === s ? "POST" : s, u = t.targetSize, c = t.filelist, d = function t() {
        return t.times > o ? Promise.reject({
            msg: "超过最多次数",
            errCode: 1
        }) : (t.times++, (0, e.wxReq)(i.TASK_QUERY + "?taskid=" + n, {
            filelist: c
        }, a).then(function(e) {
            var t = e.data, n = t.errno, i = t.task_errno, r = t.status;
            return 0 != +n || 0 != +i ? (e.data.target_size = u, Promise.reject({
                errCode: 2,
                data: e.data
            })) : "success" === r ? e : Promise.resolve();
        }).catch(function(e) {
            return Promise.reject(e);
        }));
    };
    return d.times = 0, d;
}, u = function(e) {
    var t = e.taskid, n = e.delaytime, i = void 0 === n ? 1e3 : n, r = e.times, o = e.type, u = e.targetSize, c = e.filelist, f = s(i), l = a({
        taskid: t,
        times: r,
        type: o,
        targetSize: u,
        filelist: c
    });
    return l().then(function e(t) {
        return t ? (d(), wx.log.common.async_success.send(), t) : f().then(function() {
            return l();
        }).then(e);
    }).catch(function(e) {
        return Promise.reject(e);
    });
}, c = function() {
    return t ? (wx.wetoast({
        content: "正在执行其他操作...",
        loading: !0,
        duration: 1e3
    }), !1) : (wx.wetoast({
        content: "请稍候...",
        loading: !0,
        duration: !0
    }), t = !0);
}, d = function() {
    wx.toasthide(), t = !1;
}, f = function(t, i, r) {
    var o = r.isAsyncQuery, s = void 0 !== o && o, a = r.delaytime, f = void 0 === a ? 1e3 : a, l = r.times, m = r.type;
    if (!c()) return Promise.reject(new Error("is doing"));
    var y = (0, e.wxReq)(t, i, "POST").then(function(e) {
        return 0 !== e.data.errno ? Promise.reject(e) : (!s && d(), e);
    }).catch(function(e) {
        return !s && d(), Promise.reject(e);
    });
    return s ? y.then(function(e) {
        return 0 !== e.data.errno ? (wx.log.common.async_fail.send(), Promise.reject(e)) : e.data.taskid ? (n = {
            taskid: e.data.taskid,
            delaytime: f,
            times: l,
            type: m,
            targetSize: e.data.target_size,
            filelist: i.filelist
        }, u(n)) : (d(), e);
    }).catch(function(e) {
        return d(), wx.log.common.async_fail.send(), Promise.reject(e);
    }) : y;
};

exports.asyncCopyFiles = function(e) {
    var t = e.fileList, n = e.pathKey, s = e.dest, a = e.ondup, u = e.delaytime, c = void 0 === u ? 2e3 : u, d = e.times, l = void 0 === d ? 3 : d;
    return t = o(t, n), t = r(t, s, a), f(i.ASYNC_COPY, {
        filelist: JSON.stringify(t)
    }, {
        isAsyncQuery: !0,
        delaytime: c,
        times: l
    });
}, exports.execTaskQuery = function() {
    return c(), u(n).catch(function(e) {
        return d(), Promise.reject(e);
    });
};