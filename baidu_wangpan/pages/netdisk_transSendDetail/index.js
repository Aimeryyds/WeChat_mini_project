Page({
    data: {
        info: {}
    },
    onLoad: function(t) {
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.validateOptions(t), wx.hideShareMenu(), wx.log.transAssistant.sendDetail.send();
    },
    validateOptions: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = t.uuid, s = t.tid, e = t.uk, a = t.fsid, o = t.type, n = t.isFile, d = void 0 === n ? 0 : n, h = t.savePath;
        void 0 === o && (o = 1), i && s && e && void 0 !== a && this.setData({
            info: {
                uuid: i,
                tid: s,
                uk: e,
                fsid: a,
                isFile: d,
                savePath: h
            },
            type: o
        });
    }
});