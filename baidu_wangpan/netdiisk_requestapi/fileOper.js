Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fileOper = void 0;

var e = require("../netdisk_utils/wxRequestApi.js"), t = !1, n = [ "/apps" ], r = {
    CREATE: "api/create",
    RENAME: "api/filemanager?opera=rename&async=0&onnest=fail&ondup=newcopy",
    ASYNC_RENAME: "api/filemanager?opera=rename&async=2&onnest=fail&ondup=newcopy",
    COPY: "api/filemanager?opera=copy&async=0&onnest=fail&ondup=newcopy",
    DELETE: "api/filemanager?opera=delete&async=0&onnest=fail",
    ASYNC_DELETE: "api/filemanager?opera=delete&async=2&onnest=fail",
    TASK_QUERY: "api/taskquery",
    UPLOAD: "api/filemanager?opera=copy&async=2&ondup=newcopy",
    SHARESET: "share/pset"
}, i = function(e) {
    return function() {
        return new Promise(function(t) {
            setTimeout(t, e);
        });
    };
}, a = function(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, i = arguments[2], a = arguments[3], o = function o() {
        return o.times > n ? Promise.reject("超过最多次数") : (o.times++, (0, e.wxReq)(r.TASK_QUERY + "?taskid=" + t, {
            filelist: a
        }, "POST").then(function(e) {
            var t = e.data, n = t.errno, r = t.task_errno, a = t.status;
            return 0 != +n || 0 != +r ? (e.data.target_size = i, Promise.reject(e)) : "success" === a ? e : Promise.resolve();
        }).catch(function(e) {
            return Promise.reject(e);
        }));
    };
    return o.times = 0, o;
}, o = function(e) {
    var t = e.taskid, n = e.delaytime, r = void 0 === n ? 1e3 : n, o = e.times, s = e.targetSize, u = e.filelist, f = i(r), l = a(t, o, s, u);
    return l().then(function e(t) {
        return t ? (c(), wx.log.common.async_success.send(), t) : f().then(function() {
            return l();
        }).then(e);
    }).catch(function(e) {
        return Promise.reject(e);
    });
}, s = function() {
    return !t && (wx.wetoast({
        content: "请稍候...",
        loading: !0,
        duration: !0
    }), t = !0);
}, c = function() {
    wx.toasthide(), t = !1;
}, u = function(t, n) {
    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!s()) return Promise.reject(new Error("is doing"));
    var i = (0, e.wxReq)(t, n, "POST").then(function(e) {
        return 0 !== e.data.errno ? Promise.reject(e) : (!r && c(), e);
    }).catch(function(e) {
        return !r && c(), Promise.reject(e);
    });
    return r ? i.then(function(e) {
        return 0 !== e.data.errno ? (wx.log.common.async_fail.send(), Promise.reject(e)) : e.data.taskid ? o({
            taskid: e.data.taskid,
            targetSize: e.data.target_size,
            filelist: n.filelist
        }) : (c(), e);
    }).catch(function(e) {
        return c(), wx.log.common.async_fail.send(), Promise.reject(e);
    }) : i;
}, f = function(e, t) {
    return u(t ? r.ASYNC_DELETE : r.DELETE, {
        filelist: JSON.stringify(e)
    }, t);
}, l = function(e, t) {
    if ("string" == typeof e) return f([ e ], t);
    Array.isArray(e) || (e = [ e ]);
    for (var r, i = wx.getCurrentViewPage(), a = "sharedir" === i.pageName || "sharedir" === i.fromPage, o = (wx.getStorageSync("uk"), 
    []), s = !1, c = !1, u = 0, l = e.length; u < l; u++) {
        var d = (r = e[u]).path.includes("<share>"), p = r.oper_id, m = wx.getStorageSync("uk");
        (!d || d && m === p) && (c = !0, o.push(r.path)), (1 === r.share || d && m === p) && !s && (s = !0);
    }
    if (o.some(function(e) {
        return n.includes(e);
    })) return wx.wetoast({
        content: "预置文件不可以删除",
        duration: 1e3
    }), Promise.reject();
    var g = "";
    return a && !c ? (wx.wetoast({
        content: "只能管理自己上传的文件哦",
        duration: 1200
    }), Promise.reject()) : (!g && s && (g = "确认删除所选文件吗? 删除后他人将无法查看和管理"), !g && (g = "确认删除所选文件吗？"), 
    new Promise(function(e) {
        wx.showDialog({
            title: "确认删除",
            content: g,
            confirm: function() {
                a & o.length > 1 ? wx.log.share.batch_delete_sure.send() : wx.log.normal.batch_delete_sure.send(), 
                e();
            }
        });
    }).then(function() {
        return f(o, t);
    }));
};

exports.fileOper = {
    createDir: function(e) {
        return u(r.CREATE, {
            path: e,
            isdir: 1,
            block_list: "[]"
        });
    },
    createShareDir: function(e) {
        return u(r.CREATE, {
            path: e,
            isdir: 1,
            sharetag: 1,
            block_list: "[]"
        });
    },
    renameDir: function(e, t) {
        return u(r.RENAME, {
            filelist: JSON.stringify([ {
                path: e,
                newname: t
            } ])
        });
    },
    asyncRenameDir: function(e, t) {
        return u(r.ASYNC_RENAME, {
            filelist: JSON.stringify([ {
                path: e,
                newname: t
            } ])
        }, !0);
    },
    copyDir: function(e, t) {
        return u(r.COPY, {
            filelist: JSON.stringify([ {
                path: e,
                dest: t,
                newname: (e.match(/\/([^\/]+)\/?$/) || [])[1]
            } ])
        });
    },
    asyncDeleteFiles: function(e) {
        return l(e, !0);
    },
    deleteFile: l,
    queryTask: a,
    asyncCloudUploadFiles: function(e) {
        return u(r.UPLOAD, {
            filelist: JSON.stringify(e)
        }, !0);
    },
    shareSet: function(e) {
        return u(r.SHARESET, e);
    }
};