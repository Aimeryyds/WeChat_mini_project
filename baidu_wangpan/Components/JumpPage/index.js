var e = require("../../netdiisk_requestapi/getFileList.js");

Component({
    properties: {
        hasLogin: {
            type: Boolean,
            value: !1,
            observer: function() {
                this.getFileMeta();
            }
        },
        isGuideUser: {
            type: Boolean,
            value: !0,
            observer: function() {
                this.getFileMeta();
            }
        },
        jumpInfo: {
            type: Object,
            obsercer: function() {
                this.getFileMeta();
            }
        }
    },
    data: {
        showFileItem: !1,
        fileMeta: {}
    },
    methods: {
        getFileMeta: function() {
            var t = this, i = this.data, s = i.jumpInfo, n = s.jumpPage, o = s.jumpFsId, a = s.jumpIndex, r = s.jumpOrder, u = s.jumpDesc, l = s.jumpParentDir;
            if (i.hasLogin && !i.isGuideUser && n && o) {
                this.setData({
                    showFileItem: !0
                });
                var c = a - 20;
                c < 0 && (c = 0);
                var f = function() {
                    wx.wetoast({
                        content: "系统开小差了，请稍候再试",
                        duration: 3e3
                    });
                };
                e.fileListRequestApis.getNormalList(l, c, 40, r, u).then(function(e) {
                    if (0 === (e = e.data).errno) {
                        var i = void 0;
                        if (e.list.some(function(e) {
                            if (e.fs_id === o) return i = e, !0;
                        }), !i) return void f();
                        i.isPlaceholder = !0, t.setData({
                            fileMeta: i
                        }), t.fileItemIns = t.selectComponent("#ListItem"), wx.nextTick(function() {
                            t.fileItemIns._click();
                        });
                    } else f();
                }).catch(function(e) {
                    f();
                });
            }
        }
    }
});