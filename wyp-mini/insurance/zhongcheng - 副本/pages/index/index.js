var e = getApp();

Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        imgUrls: [ {
            name: "交通意外险",
            msg: "提供飞机、火车、轮船、汽车四类交通工具的意外伤害保障。",
            type: "TRAFFIC",
            img: "../../images/selfpolicy/selfpolicy-traffic.png",
            bg: "rgba(241,127,54,1)"
        }, {
            name: "旅游意外险(境内)",
            msg: "提供医疗、住院津贴、身故/残疾保障。",
            type: "TRAVEL",
            img: "../../images/selfpolicy/selfpolicy-travel.png",
            bg: "rgba(3,210,198,1)"
        }, {
            name: "旅游意外险(境外)",
            msg: "提供经济型、全面型、豪华型三类保障套餐，涵盖多达14项保障内容。",
            type: "TRAVELOUT",
            img: "../../images/selfpolicy/selfpolicy-travelout.png",
            bg: "rgba(51,176,245,1)"
        }, {
            name: "驾意险",
            msg: "提供医疗、身故/残疾保障。",
            type: "DRIVING_RECORD",
            img: "../../images/selfpolicy/selfpolicy_drivingrecord.png",
            bg: "rgba(3,210,198,1)"
        }, {
            name: "家财险",
            msg: "提供全面型、豪华型套餐，保障项目多达12项，保费从180元-299元/年。",
            type: "FAMILY",
            img: "../../images/selfpolicy/selfpolicy_family.png",
            bg: "rgba(249,112,200,1)"
        } ],
        indicatorDots: !0,
        vertical: !1,
        autoplay: !1,
        interval: 2e3,
        duration: 500
    },
    onLoad: function() {
        e.globalData.sessionToken && "" != e.globalData.sessionToken || e.toCheckSession(e);
    },
    miniProgram: function(a) {
        console.log(a);
        var o = a.currentTarget.dataset.type, s = a.detail.formId;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), e.sendRedirect(e, o, s);
    }
});