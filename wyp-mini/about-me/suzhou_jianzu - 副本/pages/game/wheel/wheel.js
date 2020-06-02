function t(t, e, a, r) {
    for (var s = Math.PI / 180 * Math.round(360 / r), o = 0; o < r; o++) {
        var i = e + t * Math.sin(s * o), d = a + t * Math.cos(s * o);
        n.unshift({
            x: i,
            y: d,
            index: o
        });
    }
}

getApp();

var e, a = require("../../../wxParse/wxParse"), r = require("../../../utils/server"), n = [];

Page({
    data: {
        awardsList: {},
        animationData: {},
        btnDisabled: "",
        prizeResult: {},
        colorYellow: "#FFF5C0",
        colorGreen: "#8CD29F",
        arcNum: 6,
        rad: Math.PI / 180
    },
    onShow: function() {
        var a = this;
        wx.createSelectorQuery().select("#canvas-container").boundingClientRect(function(r) {
            r ? t(parseFloat(r.width / 2), parseFloat(r.width / 2 - 5), parseFloat(r.width / 2 - 5), 12) : t(parseFloat(157), parseFloat(152), parseFloat(152), 12), 
            a.setData({
                circleList: n
            }), e = setInterval(function() {
                "#FFDF2F" == a.data.colorCircleFirst ? a.setData({
                    colorCircleFirst: "#fff",
                    colorCircleSecond: "#FFDF2F"
                }) : a.setData({
                    colorCircleFirst: "#FFDF2F",
                    colorCircleSecond: "#fff"
                });
            }, 500);
        }).exec();
    },
    onUnload: function() {
        clearInterval(e);
    },
    onHide: function() {
        clearInterval(e);
    },
    getPrize: function() {
        var t = this, e = wx.getStorageSync("utoken");
        r.sendRequest({
            url: "?r=lottery.reward",
            data: {
                utoken: e,
                id: t.data.myId
            },
            async: !1,
            method: "POST",
            success: function(e) {
                if (console.log(e), console.log("res-------------------"), e.data.result.icon) {
                    t.setData({
                        prizeResult: e.data.result,
                        btnDisabled: "disabled"
                    });
                    var a = wx.createAnimation({
                        duration: 4e3,
                        timingFunction: "ease"
                    });
                    t.animationRun = a, a.rotate(360 * t.data.rewardLen - t.data.prizeResult.id * (360 / t.data.rewardLen)).step({
                        duration: 5e3
                    }), t.setData({
                        animationData: a.export()
                    }), setTimeout(function() {
                        var e = wx.createAnimation({
                            duration: 500
                        });
                        t.animationInit = e, e.rotate(0).step(), t.setData({
                            animationData: e.export(),
                            btnDisabled: "disabled",
                            cover: !0
                        });
                    }, 5500);
                } else t.setData({
                    cover: !0,
                    "prizeResult.info": "配置有误，请联系商家完善",
                    "prizeResult.icon": "https://tws.cnweisou.com/images/gameError.jpg"
                });
            }
        });
    },
    getLottery: function() {
        var t = this;
        console.log(t.data.rewardLen), t.data.rewardResult.chance > 0 ? (t.data.rewardResult.chance--, 
        t.setData({
            rewardResult: t.data.rewardResult
        }), t.getPrize()) : (t.data.rewardResult.chance = 0, t.setData({
            rewardResult: t.data.rewardResult
        }));
    },
    onLoad: function(t) {
        var e = this, n = wx.getStorageSync("utoken");
        r.sendRequest({
            url: "?r=lottery.lottery_id&type=1",
            data: {
                utoken: n
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    myId: t.data.result.id
                }), r.sendRequest({
                    url: "?r=lottery.lists",
                    data: {
                        utoken: n,
                        id: e.data.myId
                    },
                    method: "POST",
                    success: function(t) {
                        if (console.log(t), t.data.result.reward) {
                            e.setData({
                                rewardList: t.data.result.reward,
                                rewardLen: t.data.result.reward.length,
                                rewardResult: t.data.result,
                                nowTime: t.data.result.chance
                            }), console.log(e.data.rewardLen), t.data.result.lottery.lotteryinfo && a.wxParse("article", "html", t.data.result.lottery.lotteryinfo, e, 5);
                            for (var r = e.data.rewardList.length, n = 1 / r, s = 0; s < r; s++) e.data.rewardList[s].turn = s * n + "turn";
                            e.setData({
                                rewardList: e.data.rewardList
                            }), e.data.rewardResult.chance > 0 ? e.setData({
                                btnDisabled: ""
                            }) : e.setData({
                                btnDisabled: "disabled"
                            });
                        } else wx.showModal({
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
    prizeOk: function() {
        var t = this;
        t.setData({
            cover: !1
        }), t.data.rewardResult.chance > 0 && setTimeout(function() {
            t.setData({
                btnDisabled: ""
            });
        }, 500);
    }
});