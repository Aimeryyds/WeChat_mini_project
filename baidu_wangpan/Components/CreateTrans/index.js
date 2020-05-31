var t = require("../../netdisk_utils/wxApiToPromise.js"), e = require("../../netdiisk_requestapi/transAssistant"), i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("miniprogram-computed")), n = require("../../netdisk_utils/transform.js"), a = wx.ENV.staticPath, r = new Array(30).fill(1).map(function(t, e) {
    return e + 1;
}), s = new Array(26).fill(1).map(function(t, e) {
    return 20 * e || 1;
}), o = r[6], l = s[3];

Component({
    behaviors: [ i.default ],
    properties: {
        show: {
            type: Boolean,
            value: !1,
            observer: function(t, e) {
                t && !e && this.resetForm();
            }
        }
    },
    data: {
        title: "",
        periodIndex: 6,
        limitIndex: 3,
        closeIconCircle: a + "/act_cancel.png",
        periodRange: r,
        limitRange: s
    },
    computed: {
        period: function(t) {
            return t.periodRange[t.periodIndex];
        },
        limit: function(t) {
            return t.limitRange[t.limitIndex];
        }
    },
    attached: function() {
        this.init();
    },
    methods: {
        resetForm: function() {
            this.initTitle(), this.setData({
                periodIndex: 6,
                limitIndex: 3
            });
        },
        handleHideModal: function() {
            this.hideModal(), wx.log.transAssistant.hideCreate.send();
        },
        hideModal: function() {
            this.triggerEvent("hide");
        },
        init: function() {
            this.initTitle();
        },
        initTitle: function() {
            var e = this;
            (0, t.getUserWxInfo)().then(function(t) {
                var i = t.userInfo.nickName;
                e.setData({
                    title: i + "向你收集文件" + (0, n.formatDateByJoint)()
                });
            }).catch(function(t) {
                console.warn(t);
            });
        },
        handleMsg: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
            wx.wetoast({
                content: t,
                duration: e
            });
        },
        changeTitle: function(t) {
            var e = t.detail.value;
            this.setData({
                title: e
            });
        },
        clearTitle: function() {
            this.setData({
                title: ""
            });
        },
        changePeriod: function(t) {
            var e = t.detail.value;
            this.setData({
                periodIndex: e
            });
        },
        changeLimit: function(t) {
            var e = t.detail.value;
            this.setData({
                limitIndex: e
            });
        },
        handleCreate: function() {
            var t = this, i = this.data, n = i.title, a = i.period, r = i.limit;
            if (n) {
                var s = {
                    title: n,
                    period: a,
                    uid_limit: r,
                    channel: 25,
                    type: 1
                };
                (0, e.createTrans)(s).then(function(i) {
                    if (0 === (i = i.data || {}).errno) {
                        t.hideModal();
                        var n = {
                            surl: i.surl,
                            title: i.title
                        };
                        wx.safeNavigateTo("/pages/netdisk_transShare/index", n), wx.log.transAssistant.createSuccess.send();
                    } else {
                        var a = e.errMap[i.errno] || "创建失败，请稍后重试";
                        t.handleMsg(a);
                    }
                }).catch(function(e) {
                    console.error(e), t.handleMsg("未知错误，请稍后重试");
                }), wx.log.transAssistant.create.send(), this.createLog();
            } else this.handleMsg("请输入收文件的名称");
        },
        createLog: function() {
            var t = this.data, e = t.period, i = t.limit;
            e === o ? wx.log.transAssistant.createDefaultPeriod.send({
                from: e
            }) : wx.log.transAssistant.createPeriod.send({
                from: e
            }), i === l ? wx.log.transAssistant.createDefaultLimit.send({
                from: i
            }) : wx.log.transAssistant.createLimit.send({
                from: i
            });
        }
    }
});