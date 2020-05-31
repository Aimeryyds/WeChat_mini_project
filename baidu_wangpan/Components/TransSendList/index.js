function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = require("../../netdiisk_requestapi/transAssistant.js"), i = t(require("../../netdisk_utils/transSendListMixin.js")), s = t(require("../../netdisk_utils/transListTtpMixin.js")), a = t(require("../../netdisk_utils/selectMixin.js")), n = t(require("miniprogram-computed")), r = wx.ENV.staticPath;

Component({
    behaviors: [ i.default, s.default, a.default, n.default ],
    properties: {
        type: {
            type: Number,
            value: 1
        }
    },
    data: {
        emptyIcon: r + "/ic_trans_introduce.png",
        maxSelectCount: 100,
        itemKey: "tid",
        selectAllMsg: "存在不可撤回文件，已选择可撤回文件",
        withdrawTip: !1
    },
    computed: {},
    attached: function() {
        this.init();
    },
    methods: {
        init: function() {
            this.getList(0), this.setData({
                showTransListTip: !0
            }), this.getWithdrawTipData(), wx.log.transAssistant.sendList.send();
        },
        getList: function(t) {
            var i = this;
            this.setData({
                loading: !0
            });
            var s = function() {
                i.setData({
                    loading: !1
                });
            };
            (0, e.getSendList)({
                start: t,
                limit: 50
            }).then(function(a) {
                if (s(), 0 === (a = a.data || {}).errno) {
                    var n = i.data.list;
                    0 === t && n.length > 0 && (i.data.list = []), i.processListRes(a), t || a.list.length || (wx.log.transAssistant.sendListEmpty.send(), 
                    wx.log.transAssistant.helpShow.send({
                        from: "sendList"
                    }));
                } else {
                    var r = e.errMap[a.errno] || "出错了，请稍后重试";
                    i.handleMsg(r);
                }
            }).catch(function(t) {
                console.error(t), s(), i.handleMsg("出错了，请稍后重试");
            });
        },
        handleClick: function(t) {
            var e = t.detail.fileMeta, i = e.uuid, s = e.tid, a = e.uk, n = e.file_type, r = e.fsid, d = this.data, l = d.type, o = d.canSelected, h = d.selectListMap, c = 0 === n;
            if (o && c) {
                var u = h[s];
                this.selectItem({
                    id: s,
                    isSelect: !u
                });
            } else {
                var w = {
                    uuid: i,
                    tid: s,
                    uk: a,
                    fsid: r,
                    type: l,
                    isFile: c ? 1 : 0
                };
                wx.safeNavigateTo("/pages/netdisk_transSendDetail/index", w);
            }
        },
        checkSelect: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.data.listMap[t], s = {
                2: "对方已转存，不能撤回",
                3: "该文件已撤回"
            }[i.send_status];
            if (s) return e && this.handleMsg(s), !1;
            var a = new Date().getTime() / 1e3;
            return !(i.ctime + 86400 < a) || (e && this.handleMsg("发送已超过24小时，不能撤回"), !1);
        },
        getWithdrawTipData: function() {
            var t = wx.getStorageSync("withdraw-tip-key");
            this.setData({
                withdrawTip: t
            });
        },
        showWithdrawTip: function() {
            var t = this;
            wx.showDialog({
                title: "撤回提示",
                content: "是否撤回已发出的文件，撤回后对方无法保存文件",
                cancelText: "忽略",
                confirmText: "确定",
                confirm: function() {
                    t.setData({
                        withdrawTip: !0
                    }), t.withdraw();
                },
                always: function() {
                    wx.setStorageSync("withdraw-tip-key", !0), t.setData({
                        withdrawTip: !0
                    });
                }
            });
        },
        withdraw: function() {
            var t = this;
            if (this.data.withdrawTip) {
                var i = this.data.selectListMap, s = Object.keys(i);
                wx.wetoast({
                    content: "正在撤回文件...",
                    duration: !0,
                    loading: !0
                }), (0, e.withdraw)({
                    list: JSON.stringify(s)
                }).then(function(i) {
                    if (wx.toasthide(), 0 === (i = i.data || {}).errno) {
                        console.log(i);
                        var a = i.succ_list, n = a.length;
                        if (n !== s.length) {
                            var r = a.length ? "部分文件撤回失败，请稍后重试" : "撤回失败，请稍后重试";
                            t.handleMsg(r);
                        } else t.handleMsg(n ? "已撤回" + n + "个文件" : "撤回成功");
                        t.setData({
                            canSelected: !1
                        }), t.selectAll(!1), t.getList(0);
                    } else {
                        var d = e.errMap[i.errno] || "出错了，请稍后重试";
                        t.handleMsg(d);
                    }
                }).catch(function(e) {
                    wx.toasthide(), console.error(e), t.handleMsg("出错了，请稍后重试");
                });
            } else this.showWithdrawTip();
        }
    }
});