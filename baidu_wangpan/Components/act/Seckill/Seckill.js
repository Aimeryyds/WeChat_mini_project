var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../act/getStatus.js")), e = require("../../../act/account.js"), i = (require("../../../netdiisk_requestapi/loginSync.js"), 
require("../../../act/getData.js")), a = require("../../../netdisk_utils/wxApiToPromise.js"), s = require("../../../netdisk_utils/account.js"), n = require("../../../act/actionsConfig.js"), l = require("../../../act/webUrl.js"), r = 1, o = function(t) {
    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i = e.shift(); i; ) {
        if (i - t >= 0) return i - t;
        i = e.shift();
    }
    return 0;
}, c = function(t) {
    return t < 10 ? "0" + t : t;
};

Component({
    properties: {
        seckillData: {
            type: Object,
            value: {},
            observer: function(t) {
                this.resetData(t || {});
            }
        }
    },
    data: {
        timeText: "",
        dialogText: [ "", "" ],
        receiveText: "",
        receiveColor: "",
        loginInfo: null,
        baseUrl: "/pages/netdisk_act/springprint?id=826311545794",
        isSeckill: !1
    },
    ready: function() {
        this.dialog = this.selectComponent("#dialog");
    },
    attached: function() {
        var t = this;
        (0, a.getUserWxInfo)().then(function(i) {
            i.userInfo;
            t.setData({
                loginInfo: (0, e.checkUser)()
            });
        }).catch(function(t) {
            console.warn(t);
        });
    },
    methods: {
        resetData: function(t) {
            Object.keys(t).length > 0 && this.init(t);
        },
        init: function(t) {
            var i = this, a = (0, e.checkUser)(), s = this.data.seckillData.isSecNormal || !1;
            this.getPageStatus();
            "fresh_not_have" === this.data.pageStatus && this.runTimer(function() {
                i.changeBtn("fresh_have");
            }), this.initReceiveNum(), 2 === a && s && "fresh_have" === this.data.pageStatus && this.seckill();
        },
        initReceiveNum: function() {
            var t = this.data.seckillData.seckillContent, e = this.data.seckillData.receiveNum, i = t.already.replace(/%/, e), a = t.color;
            this.setData({
                receiveText: i,
                receiveColor: a
            });
        },
        getPageStatus: function() {
            var i = this.data.seckillData, a = i.seckillContent.buttonInfo.btnTip, s = (0, e.checkUser)(), n = {
                time: i.time,
                startline: i.startline,
                deadline: i.deadline,
                isGetPrivilege: i.isGetPrivilege,
                isOrder: i.isOrder,
                isAddress: i.isAddress,
                isUpload: i.isUpload,
                haveStores: i.haveStores,
                loginInfo: s
            }, l = (0, t.default)(n), r = this.getBtnStatus(l);
            return "mini_guest" === l && (r = this.getBtnStatus("not_login")), this.setData({
                btn: r,
                pageStatus: l,
                btnTip: a
            }), l;
        },
        getBtnStatus: function(t) {
            var e = this.data.seckillData.seckillContent.buttonInfo.statusList.filter(function(e) {
                return e.status.indexOf(t) >= 0;
            });
            return e.length > 0 && (e = e[0]), e;
        },
        changeBtn: function(t) {
            this.data.pageStatus !== t && this.setData({
                pageStatus: t,
                btn: this.getBtnStatus(t),
                timeText: ""
            });
        },
        btnClick: function() {
            if (!(this.data.btn.enabled < 1)) switch (this.data.pageStatus) {
              case "not_login":
                console.log("btn click login");
                break;

              case "mini_guest":
                this.normal();
                break;

              case "fresh_have":
                this.seckill();
                break;

              case "already_upload_img":
              case "already_address":
              case "already_submit_order":
              case "already_view_order":
                this.goToWebView();
                break;

              default:
                console.log("btn click error");
            }
        },
        normal: function() {
            (0, e.bindNormalAccount)(this.data.baseUrl + "&normal=seckill");
        },
        seckill: function() {
            if (!this.data.isSeckill) {
                this.data.isSeckill = !0;
                var t = this.data.seckillData.time, e = this.data.seckillData.startline, i = t > this.data.seckillData.deadline;
                t < e || i ? this.refresh() : this.sale();
            }
        },
        goToWebView: function() {
            var t = "/pages/netdisk_springView/springView?";
            (0, l.getUrlParams)(this.data.btn.url).then(function(e) {
                wx.navigateTo({
                    url: t + e
                });
            }, function(e) {
                wx.navigateTo({
                    url: t + e
                });
            });
        },
        sale: function() {
            var t = this, e = this.data.seckillData.seckillContent.seckillUrl;
            (0, i.getSaleInfo)(e).then(function(e) {
                var i = e.data, a = t.data.seckillData.seckillContent.resultModal[1], s = t.data.seckillData.resultModal;
                0 === i.errno ? (n.log.activity.send("getPrintingChance"), a = t.data.seckillData.seckillContent.resultModal[0], 
                r = 2) : n.log.activity.send("getPrintingChanceFail", {
                    errono: i.errno
                }), t.setData({
                    dialogText: [ a.content.split("\n")[0], a.content.split("\n")[1] || "" ]
                });
                var l = {
                    width: 475,
                    height: 350,
                    singleBtn: "f64b36",
                    mpBgSrc: s.bgSrc,
                    close: s.btnSrc,
                    btnColor: s.btnColor,
                    btn1: {
                        isShow: !0,
                        openType: "",
                        btnBg: s.btnSrc,
                        btnColor: s.color,
                        btnText: a.btnText
                    }
                };
                t.dialog.show(l);
            }).catch(function(e) {
                wx.wetoast({
                    content: "网络异常，请稍后重试",
                    duration: 3e3
                }), t.data.isSeckill = !1;
            });
        },
        authorizeCallback: function(t) {
            var e = t.detail, i = e.errMsg;
            e.userInfo;
            -1 !== i.indexOf("ok") ? (n.log.author.send("wxAthorizeSuccess", {
                from: "seckill"
            }), (0, s.bdWxLogin)("/pages/netdisk_act/springprint?normal=seckill&bdathorize=seckill")) : n.log.author.send("wxAthorizeFail", {
                from: "seckill"
            });
        },
        refresh: function() {
            wx.redirectTo({
                url: this.data.baseUrl
            });
        },
        dialogHide: function() {
            this.refresh();
        },
        dialogFn: function() {
            switch (r) {
              default:
              case 1:
                this.dialog.hide(), this.refresh();
                break;

              case 2:
                this.dialog.hide(), this.changeBtn("already_upload_img"), this.goToWebView();
            }
        },
        runTimer: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, i = this.data.seckillData.time, a = this.data.seckillData.timeArr, s = o(i, a);
            if (s <= 0) e(); else {
                !function i() {
                    var a = 0, n = 0, l = 0;
                    s > 0 ? (a = Math.floor(s / 60 / 60 % 24), n = Math.floor(s / 60 % 60), l = Math.floor(s % 60), 
                    setTimeout(i, 1e3), s -= 1) : e(), t.setData({
                        timeText: c(a) + ":" + c(n) + ":" + c(l)
                    });
                }();
            }
        },
        clickButton: function() {
            n.log.activity.send("seckillClick", {
                type: this.data.pageStatus
            });
        }
    }
});