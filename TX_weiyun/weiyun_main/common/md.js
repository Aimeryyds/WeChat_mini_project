var e = "https://www.weiyun.com/report/md", t = "https://www.weiyun.com/weiyun/error/wxa_error", i = {
    DiskUserInfoGet: 179000195,
    DiskDirBatchList: 179000196,
    DiskFileBatchDownload: 179000197,
    DiskDirFileBatchDeleteEx: 179000198,
    DiskFileBatchRename: 179000199,
    DiskDirAttrModify: 179000200,
    WeiyunShareAdd: 179000201,
    WeiyunShareView: 179000202,
    WeiyunSharePartSaveData: 179000203,
    LibPageListGet: 179000204,
    WeiyunShareBatchDownload: 185000353,
    WeiyunShareDirList: 185000354
}, r = [];

module.exports = {
    log: function(e) {
        arguments.length < 2 ? (r.push(e), console.log(e)) : ([].slice.call(arguments).forEach(function(e, t, i) {
            r.push(e);
        }), console.log.apply(console, arguments));
    },
    write: function() {
        var e = "522856232", i = wx.getStorageSync("userInfo");
        i && i.uid && (e = i.uid);
        var o = getCurrentPages(), n = o[o.length - 1];
        r.unshift("[md.write]: page: " + n.route + ", options: " + JSON.stringify(n.options)), 
        r.unshift("[md.write]: user: " + JSON.stringify(i)), r.unshift("[md.write]: report time: " + new Date().toString()), 
        wx.request({
            url: t + "?uin=" + e,
            method: "POST",
            data: r.join("\n"),
            header: {
                "Content-Type": "text/plain"
            }
        }), r = [];
    },
    report: function(t, r, o, n) {
        var a = {
            fromId: 204971707,
            toId: 279000132
        };
        t && i[t] && (n = i[t]), n && (a.interfaceId = n, void 0 !== r && (a.code = r), 
        void 0 !== o && (a.type = o), wx.request({
            url: e,
            data: a
        }));
    }
};