Page({
    data: {
        info: {},
        title: ""
    },
    onLoad: function(t) {
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.validateOptions(t), wx.hideShareMenu();
    },
    validateOptions: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = t.uuid, s = t.tid, e = t.uk, a = t.fsid, o = t.title, n = t.isFile, d = t.savePath;
        i && s && e && void 0 !== a && this.setData({
            info: {
                uuid: i,
                tid: s,
                uk: e,
                fsid: a,
                isFile: n,
                savePath: d
            },
            title: o
        });
    }
});