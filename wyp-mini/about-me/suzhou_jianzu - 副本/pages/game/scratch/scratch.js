var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../components/scrath.js")), a = require("../../../utils/server"), e = require("../../../wxParse/wxParse"), s = "", c = "", r = "";

Page({
    data: {
        isStart: !0,
        txt: "重新刮奖",
        imageResource: "https://tws.cnweisou.com/images/scratchCont.png",
        scratchPrize: {},
        noprize: !0
    },
    onLoad: function() {
        var t = this;
        t.setData({
            btndisabled: "disabled"
        });
        var s = wx.getStorageSync("utoken");
        a.sendRequest({
            url: "?r=lottery.lottery_id&type=2",
            data: {
                utoken: s
            },
            method: "GET",
            success: function(c) {
                console.log(c), console.log("获取ID"), t.setData({
                    myId: c.data.result.id
                }), a.sendRequest({
                    url: "?r=lottery.lists",
                    data: {
                        utoken: s,
                        id: t.data.myId
                    },
                    method: "POST",
                    success: function(a) {
                        console.log(a), a.data.result.reward ? (t.setData({
                            scratchResult: a.data.result
                        }), a.data.result.lottery.lotteryinfo && e.wxParse("article", "html", a.data.result.lottery.lotteryinfo, t, 5), 
                        t.scratchReady()) : wx.showModal({
                            title: "提示",
                            content: "请添加活动",
                            success: function(t) {
                                t.confirm ? wx.navigateBack({
                                    delta: 1
                                }) : t.cancel && wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    getMy: function() {
        var a = this;
        console.log(s);
        var e = this;
        this.scratch = new t.default(this, {
            canvasWidth: 377,
            canvasHeight: 152,
            imageResource: r,
            maskColor: "#2A8A6C",
            r: 8,
            awardTxt: s,
            awardTxtColor: "#3985ff",
            awardTxtFontSize: "24px",
            chance: c,
            callback: function() {
                a.setData({
                    imageResource: e.data.imageResource,
                    btndisabled: "",
                    cover: !0
                });
            }
        });
    },
    prizeOk: function() {
        var t = this;
        t.setData({
            imageResource: t.data.imageResource,
            cover: !1,
            noprize: !0
        }), t.data.scratchResult.chance > 0 ? (t.data.scratchResult.chance--, t.setData({
            btndisabled: "",
            scratchResult: t.data.scratchResult
        })) : (t.data.scratchResult.chance = 0, this.setData({
            btndisabled: "disabled",
            scratchResult: t.data.scratchResult
        }));
    },
    scratchReady: function() {
        var t = this;
        if (t.data.scratchResult.chance > 0) {
            t.setData({
                scratchResult: t.data.scratchResult,
                btndisabled: "disabled"
            });
            var e = wx.getStorageSync("utoken");
            a.sendRequest({
                url: "?r=lottery.reward",
                data: {
                    utoken: e,
                    id: t.data.myId
                },
                method: "POST",
                success: function(a) {
                    console.log(a), a.data.result.icon ? (t.setData({
                        scratchPrize: a.data.result,
                        scratchResult: t.data.scratchResult,
                        noprize: !0
                    }), s = t.data.scratchPrize.info, c = t.data.scratchResult.chance, r = t.data.imageResource, 
                    t.getMy()) : t.setData({
                        noprize: !1,
                        cover: !0,
                        scratchResult: t.data.scratchResult,
                        "scratchPrize.info": "支付配置有误，请联系商家完善",
                        "scratchPrize.icon": "https://tws.cnweisou.com/images/gameError.jpg"
                    });
                }
            });
        } else (t.data.scratchResult.chance = 0) && (t.data.scratchResult.chance = 0, t.setData({
            scratchResult: t.data.scratchResult
        }));
    },
    onStart: function() {
        var t = this;
        this.scratch.reset(), t.scratchReady();
    }
});