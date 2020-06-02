var t = require("../../../@babel/runtime/helpers/interopRequireWildcard"), e = t(require("../../js/const")), a = t(require("../../js/util")), i = require("../../../services/jump"), n = new getApp().global;

Page({
    data: {
        c: e,
        start: 0,
        shareInfo: {},
        relatedActData: [],
        userInfo: {},
        sex: "",
        articleId: "",
        shareType: e.posterType.activity,
        isShow: !0,
        status: 1
    },
    onLoad: function(t) {
        var e = {
            id: t.id,
            headImgUrl: decodeURIComponent(t.headimgurl),
            title: t.title
        };
        this.setData({
            articleId: t.id,
            shareInfo: e
        }), this.getRecomAct(), n.mta.Page.init();
    },
    onShow: function() {
        this.getParticipateInfo(), this.setData({
            start: parseInt(new Date().getTime() / 1e3)
        }), a.rep({
            opType: "pv",
            fromPage: "local_joinsucc_page",
            beginTime: this.data.start,
            id: this.data.articleId
        });
    },
    onHide: function() {
        a.reportPageLeave("local_joinsucc_page", this);
    },
    onUnload: function() {
        a.reportPageLeave("local_joinsucc_page", this);
    },
    getParticipateInfo: function(t) {
        var i = this;
        a.fetch(e.api.participateInfo, {
            activity_id: this.data.articleId
        }, null, "GET").then(function(t) {
            0 == (t = t.data).code && i.setData({
                "userInfo.nickname": t.data.real_name,
                "userInfo.mobile": a.formatPhone(t.data.mobile),
                sex: e.sex[t.data.sex],
                status: t.data.status
            });
        });
    },
    getUserInfo: function() {
        return new Promise(function(t, i) {
            a.fetch(e.api.getUserInfo, {}, {}, "GET").then(function(e) {
                e = e.data, t(e);
            });
        });
    },
    getRecomAct: function() {
        var t = this;
        this.data.articleId, this.data.article_id;
        a.fetch(e.api.getRecomAct, {
            act_id: this.data.articleId,
            chlid: n.comPostInfo.chlid
        }, null, "GET").then(function(a) {
            if (!(a = a.data).code) {
                var i = [];
                a.data.map(function(t) {
                    t.act_type = t.act_type.toString(), -1 != e.ALLOW_ACT_TYPE.indexOf(t.act_type) && i.push(t);
                }), t.setData({
                    relatedActData: i
                });
            }
        });
    },
    onShareAppMessage: function() {
        var t = a.extend({}, e.shareDefaultInfo, this.data.shareInfo || {});
        return t.path = (0, i.toUrl)(i.PAGE_PATH.LOCAL_ACTIVE, {
            id: this.data.articleId
        }), t.imageUrl = this.data.shareInfo.headImgUrl, t;
    },
    handleMoreAct: function() {
        n.localtab = "GOOD_ACT", wx.switchTab({
            url: (0, i.toJumpUrl)(4)
        });
    }
});