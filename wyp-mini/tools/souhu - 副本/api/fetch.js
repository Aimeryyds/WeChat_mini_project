Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../api/sh"), a = require("../models/reponseData");

exports.fetch = function() {
    var r = arguments[0];
    return new Promise(function(t, s) {
        e.sh.request({
            url: r.url,
            method: r.method || "GET",
            data: r.data || {},
            header: r.header || {},
            dataType: r.dataType || "json",
            usePrefetchCache: r.usePrefetchCache || !1,
            success: function(e) {
                200 == e.statusCode ? t(a.isArrayData(r) ? {
                    header: e.header,
                    data: a.ResponseData.create(e.data, r)
                } : a.isBasicData(r) ? {
                    header: e.header,
                    data: a.ResponseData.create(e.data, r)
                } : {
                    header: e.header,
                    data: a.ResponseData.create(e.data)
                }) : s({
                    errMsg: e.errMsg
                });
            },
            fail: function(e) {
                s({
                    errMsg: e.errMsg
                });
            }
        });
    });
};