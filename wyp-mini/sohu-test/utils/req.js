getApp();

var e = {};

e.sendData = function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = a.url, d = void 0 === l ? "" : l, t = a.data, o = void 0 === t ? "" : t, r = a.header, u = void 0 === r ? null : r, i = a.callback, c = void 0 === i ? null : i;
    e.requestType({
        method: "POST",
        url: d,
        data: o,
        header: u,
        callback: c
    });
}, e.getData = function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = a.url, d = void 0 === l ? "" : l, t = a.data, o = void 0 === t ? "" : t, r = a.header, u = void 0 === r ? null : r, i = a.callback, c = void 0 === i ? null : i;
    e.requestType({
        method: "GET",
        url: d,
        data: o,
        header: u,
        callback: c
    });
}, e.requestType = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.method, l = void 0 === a ? "get" : a, d = e.url, t = void 0 === d ? "" : d, o = e.data, r = void 0 === o ? "" : o, u = e.header, i = void 0 === u ? null : u, c = e.callback, v = void 0 === c ? null : c;
    wx.request({
        method: l,
        url: t,
        data: r,
        header: i,
        success: v.success,
        fail: v.fail,
        complete: v.complete
    });
}, module.exports = {
    req: e
};