var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/mlodash")), a = e(require("../../utils/logger")), i = require("../../store/index"), r = (require("../../services/jump"), 
require("../../services/report")), n = require("../../services/share"), s = require("./service");

Page({
    data: {
        type: "guest",
        isMedia: !1,
        followNum: 0,
        fansNum: 0,
        likeNum: 0,
        isMyFans: !1,
        isMyFollow: !1,
        coral_uid: "",
        uin: "",
        mediaId: "",
        avatarUrl: "",
        nickName: "",
        userDesc: "",
        tabNames: [],
        activeIndex: -1,
        ready: !1,
        pageStatus: i.constant.pageStatus,
        status: i.constant.pageStatus.loading,
        pullUpStatus: i.constant.pageStatus.loading,
        fromPage: r.FROM_PAGE.author_page
    },
    onLoad: function(e) {
        var a = this;
        this.query.type = e.type || this.data.type, this.query.mediaId = e.mediaId || e.chlid, 
        this.changeActiveIndex = t.default.debounce(function(e) {
            a.setData({
                activeIndex: e
            });
        }, 200, {
            leading: !0
        });
    },
    onReady: function() {
        var e = this;
        i.userInfo.initOver ? this.render() : (this.renderWhenInitOver = function() {
            i.userInfo.off(i.userInfo.event.initOver, e.renderWhenInitOver), e.render();
        }, i.userInfo.on(i.userInfo.event.initOver, this.renderWhenInitOver));
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function(e) {
        var a = {
            fromPage: this.data.fromPage
        };
        if ("button" === e.from) {
            var i = t.default.get(e, "target.dataset", {}), s = i.chlname, u = i.content, d = i.articleId, o = i.atype, h = i.imageList, c = i.pageArea;
            return a.pageArea = c || r.PAGE_AREA.cell, (0, n.genArticleShareMsg)({
                title: s + (u ? "的动态:" + u : "发布了一条新动态"),
                id: d,
                atype: o,
                imageUrl: h.length ? null : "http://mat1.gtimg.com/www/images/newsapp/wxapp/news/bg_huati.png"
            }, a);
        }
        if ("menu" === e.from) return a.pageArea = r.PAGE_AREA.menu, this.data.isMedia ? (0, 
        n.genShareMsg)({
            targetPage: 11,
            mediaId: this.data.mediaId
        }, a) : (0, n.genShareMsg)({
            targetPage: 10,
            uin: this.data.uin,
            coral_uid: this.data.coral_uid
        }, a);
    },
    onChange: function(e) {
        var a = t.default.get(e, "detail.current", 0);
        a !== this.data.activeIndex && this.changeActiveIndex(a);
    },
    render: function() {
        var e = this;
        this.query.mediaId || this.query.coral_uid !== i.userInfo.coral_uid || this.query.uin !== i.userInfo.uin || (this.query.type = "master");
        var t, r = {
            type: this.query.type,
            isMedia: /^\d+$/.test(this.query.mediaId),
            ready: !0
        };
        "master" !== this.query.type || this.query.coral_uid && this.query.uin || (r.ready = !1), 
        r.isMedia ? (r.weiboTabIndex = 2, r.mediaId = this.query.mediaId, t = (0, s.getSubItem)({
            chlid: this.query.mediaId
        })) : (r.weiboTabIndex = 1, r.uin = this.query.uin || "", r.coral_uid = this.query.coral_uid || "", 
        t = (0, s.getUserInfo)({
            coral_uid: this.query.coral_uid,
            uin: this.query.uin,
            type: this.query.type
        })), this.setData(r), t.then(function(t) {
            t.status = i.constant.pageStatus.ready, t.activeIndex = 0, t.ready = !0, e.setData(t);
        }).catch(function(t) {
            e.setData({
                status: i.constant.pageStatus.error
            }), a.default.error("拉取用户信息出错：", t);
        });
    }
});