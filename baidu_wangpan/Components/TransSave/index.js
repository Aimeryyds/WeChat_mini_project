var t = require("../../netdiisk_requestapi/transAssistant.js"), n = getApp().globalData;

Component({
    properties: {
        saveList: {
            type: Array,
            value: []
        },
        currentPath: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {
        save: function() {
            var n = this, e = this.data, r = e.saveList, a = e.currentPath;
            wx.wetoast({
                content: "请稍候...",
                loading: !0,
                duration: !0
            });
            for (var s = 0; s < r.length; s++) !function(e) {
                var s = r[e], i = s.uuid, o = s.tid, c = s.fs_id, u = s.sender_id;
                (0, t.saveTransfer)({
                    uuid: i,
                    list: JSON.stringify([ {
                        tid: o,
                        sender_id: u,
                        fsid: c
                    } ]),
                    to_path: a
                }).then(function(e) {
                    if (wx.toasthide(), 0 === (e = e.data || {}).errno) wx.log.transAssistant.myCollectionDetailSaveSuccess.send(), 
                    n.transUnknowError("保存成功"), setTimeout(function() {
                        n.transSuccess(s);
                    }, 2e3); else {
                        var r = t.errMap[e.errno];
                        n.transUnknowError(r);
                    }
                    n.goback();
                }).catch(function(t) {
                    wx.toasthide(), n.transUnknowError();
                });
            }(s);
        },
        transSuccess: function(t) {
            n.transSaveClearSelect = !0, this.triggerEvent("goback");
        },
        transUnknowError: function(t) {
            wx.wetoast({
                content: t || "出错了，请稍后重试",
                duration: 3e3
            });
        },
        goback: function() {}
    }
});