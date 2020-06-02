var e = require("../../utils/util");

Page({
    data: {
        serviceTel: null,
        industries: [ "餐饮外卖", "拼团商城", "母婴用品", "食品百货", "3C数码", "家居家电", "IT软件/互联网", "金融投资", "汽车美容", "婚纱摄影", "运动健身", "其他" ],
        plugs: [ {
            image: "幸运抽奖.png",
            text: "幸运抽奖"
        }, {
            image: "拼团.png",
            text: "全民"
        }, {
            image: "分销.png",
            text: "代言人分销"
        }, {
            image: "优惠券.png",
            text: "优惠券"
        }, {
            image: "砸金蛋.png",
            text: "砸金蛋"
        }, {
            image: "红包.png",
            text: "口令红包"
        }, {
            image: "礼包.png",
            text: "新人大礼"
        }, {
            image: "节日选择.png",
            text: "节日活动"
        }, {
            image: "小程序.png",
            text: "一品一码"
        }, {
            image: "其他.png",
            text: "更多"
        } ]
    },
    onLoad: function(e) {},
    onShow: function() {
        this.setData({
            serviceTel: getApp().globalData.shop.serviceTel
        });
    },
    call: function() {
        e.call(this.data.serviceTel);
    },
    onShareAppMessage: function() {}
});