var t = require("../../netdiisk_requestapi/transAssistant.js"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../netdisk_utils/transSendListMixin.js")), i = getApp(), a = wx.ENV.staticPath;

Component({
    behaviors: [ e.default ],
    properties: {
        info: {
            type: Object,
            observer: function() {
                this.init();
            }
        },
        type: {
            type: Number,
            value: 1
        }
    },
    data: {
        transInfo: {},
        systemInfo: {},
        emptyIcon: a + "/ic_trans_introduce.png",
        loaded: !1,
        previewCateMap: {
            0: [ 3 ],
            1: ""
        }
    },
    ready: function() {
        this.setData({
            systemInfo: i.globalData.systemInfo
        });
    },
    methods: {
        init: function() {
            var t = this.data.info, e = t.uuid, i = t.tid, a = t.uk, n = t.fsid;
            e && i && a && void 0 !== n && this.getList(0);
        },
        getList: function(e) {
            var i = this;
            if (!this.data.loading) {
                this.setData({
                    loading: !0
                });
                var a = function() {
                    i.setData({
                        loading: !1
                    });
                }, n = this.data, s = n.info, r = n.type, d = s.uuid, o = s.tid, u = s.uk, l = s.fsid, f = s.isFile;
                (0, t.getSendDetail)({
                    type: r,
                    start: e,
                    limit: 50,
                    uuid: d,
                    tid: o,
                    uk: u,
                    fsid: l,
                    is_file: f
                }).then(function(e) {
                    if (a(), 0 === (e = e.data || {}).errno) {
                        i.addListParam(e.list), i.processListRes(e);
                        var n = i.data.list, s = {
                            avatar: e.sender_avatar_url,
                            name: e.sender_name,
                            surl: e.surl,
                            time: n[0] && n[0].server_mtime
                        };
                        i.setData({
                            transInfo: s,
                            loaded: !0
                        });
                    } else {
                        var r = t.errMap[e.errno] || "出错了，请稍后重试";
                        i.handleMsg(r);
                    }
                }).catch(function(t) {
                    console.error(t), a(), i.handleMsg("出错了，请稍后重试");
                });
            }
        },
        addListParam: function(t) {
            var e = this.data, i = e.info, a = e.type, n = i.uuid, s = i.tid, r = i.uk, d = {
                uuid: n,
                tid: s,
                uk: r
            };
            a ? d.receiver_id = r : d.sender_id = r, t.forEach(function(t) {
                Object.assign(t, d);
            });
        },
        navDetail: function() {
            var t = this.data.info.savePath, e = {
                path: encodeURIComponent(t),
                serverFilename: t.substring(t.lastIndexOf("/") + 1)
            };
            wx.safeNavigateTo("/pages/netdisk_dirdetail/dirdetail", e);
        },
        handleClick: function(t) {
            var e = this, i = t.detail.fileMeta, a = i.uuid, n = i.tid, s = i.uk, r = i.file_type, d = i.fsid, o = this.data, u = o.type, l = o.info, f = 0 === r, c = 1 === r || 2 === r, h = l.savePath;
            if (c) {
                var v = {
                    uuid: a,
                    tid: n,
                    uk: s,
                    fsid: d,
                    type: u,
                    isFile: f ? 1 : 0,
                    savePath: h
                };
                wx.safeNavigateTo("/pages/netdisk_transSendDetail/index", v);
            } else {
                if (0 === u && h) return void wx.showDialog({
                    title: "查看当前文件",
                    content: "当前列表不支持文件查看，请跳转至百度网盘进行查看",
                    cancelText: "取消",
                    confirmText: "跳转查看",
                    confirm: function() {
                        e.navDetail();
                    }
                });
                if (0 === u) return void wx.showDialog({
                    title: "无法查看文件",
                    content: "暂不支持查看未保存的文件，请把文件保存到网盘再查看",
                    showCancel: !1,
                    confirmText: "确定"
                });
                this.handleMsg("暂不支持预览");
            }
        },
        longPress: function() {
            console.log("longPress");
        }
    }
});