var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), a = t(require("../../utils/mlodash")), i = t(require("../../utils/logger")), r = require("../../network/index"), n = require("../../utils/time"), s = require("../../utils/parser"), c = require("../../services/share"), o = require("../../store/index"), l = require("../../services/report"), d = o.constant.pageStatus;

Page({
    data: {
        articleData: [],
        cachedCount: 0,
        current: 0,
        fromPage: l.FROM_PAGE.normal_detail_page,
        pageStatus: d.loading,
        isTransiting: !1,
        status: o.constant.pageStatus
    },
    onLoad: function(t) {
        Object.assign(this, {
            newsCount: 0,
            dataList: [],
            notProxyExposureReport: !0
        }), this.init();
        var e = t.id, a = t.atype;
        (0, l.report)({
            opType: l.OP_TYPE.page_exposure,
            fromPage: this.data.fromPage,
            articleId: e,
            articleType: a
        }), (0, l.report)({
            opType: l.OP_TYPE.detail_page_end,
            fromPage: this.data.fromPage,
            articleId: e
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function(t) {
        var e = this.data.current, i = this.dataList[e], r = {
            title: i.title,
            atype: i.atype,
            id: i.articleId
        }, n = {
            fromPage: this.data.fromPage
        };
        if ("button" === t.from) {
            var s = a.default.get(t, "target.dataset", {});
            n.pageArea = s.pageArea;
        } else "menu" === t.from && (n.pageArea = l.PAGE_AREA.menu);
        return (0, c.genArticleShareMsg)(r, n);
    },
    init: function() {
        var t = this, r = this.query.id;
        this.fetchData(r).then(function() {
            var i = t.data.current;
            t.dataList[i] = t.formatData(t.dataList[i]), t.setData((0, e.default)({
                id: r,
                pageStatus: d.ready
            }, "articleData[".concat(i, "]"), t.dataList[i]), function() {
                t.dataList[i + 1] && (t.dataList[i + 1] = t.formatData(t.dataList[i + 1]), t.setData((0, 
                e.default)({}, "articleData[".concat(i + 1, "]"), t.dataList[i + 1] || null)));
            });
            var n = a.default.get(t.data, "articleData[0].relateBlock");
            t.dataList.length - t.data.current < 2 && !n && t.fetchData(t.query.id);
        }).catch(function(e) {
            i.default.error("图文底层页初始化出现错误", e), e && 1 === e.ret ? t.setData({
                pageStatus: d.delete
            }) : t.setData({
                pageStatus: d.error
            });
        });
    },
    fetchData: function(t) {
        var e = this, a = this.data.cachedCount;
        return r.request.post(r.URL.bottomRecommList, {
            id: t,
            cachedCount: a
        }).then(function(t) {
            if (!t || 0 != t.ret) return Promise.reject(t);
            e.dataList = e.dataList.concat(t.newslist), e.setData({
                cachedCount: a + 1
            });
        }).catch(function(t) {
            return Promise.reject(t);
        });
    },
    formatData: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.listItem || {}, i = a.default.get(t, "ext.action", {}), r = (0, 
        s.textParser)(t.cnt_html, t.cnt_attr), c = a.default.get(t, "relate_modules.truth[0].data[0].content"), o = {
            articleId: t.id,
            commentId: e.commentid || t.commentid,
            atype: t.articletype,
            title: e.title || t.title,
            intro: t.intro,
            introName: t.intro_name,
            content: r,
            truthContent: c ? (0, s.textParser)(c, {}) : [],
            fakeContent: this.filter(r, "p") || this.filter(r, "img"),
            date: (0, n.distanceInWords)(e.timestamp || t.timestamp),
            remark: t.remark,
            posterShareImg: t.poster_share_image || "",
            relateBlock: parseInt(i.relateBlock) || 0,
            hotNewsBlock: parseInt(i.hotNewsBlock) || 0,
            hasImage: r.filter(function(t) {
                return "img" === t.type;
            }).length > 0,
            index: this.newsCount++
        }, l = a.default.get(t, "relate_modules.timeLine[0]", {});
        l.title && (o.timeline = {
            title: l.title,
            desc: l.desc,
            image: a.default.get(l, "image.url", ""),
            data: a.default.map(l.data, function(t) {
                return {
                    time: t.time,
                    desc: t.desc
                };
            })
        });
        var d = a.default.get(t, "relate_modules.rel_topic.list[0]", {});
        d.tid && (o.topic = {
            id: d.tid
        });
        var u = a.default.get(t, "relate_ref.zt[0]", {});
        u.sCmsId && (o.special = {
            id: u.sCmsId,
            title: u.title
        });
        var h = e.card, m = t.card;
        return a.default.isObject(h) ? (o.chlid = h.chlid, o.chlicon = h.icon, o.chlname = h.chlname || e.source || "", 
        o.uin = h.uin) : a.default.isObject(m) ? (o.chlid = m.chlid, o.chlicon = m.icon, 
        o.chlname = m.chlname || t.source || "", o.uin = m.uin) : (o.chlid = t.chlid || "", 
        o.chlicon = t.chlicon || t.chlsicon || "", o.chlname = t.chlname || t.source || ""), 
        o;
    },
    bindChange: function(t) {
        var i, r = t.detail.current;
        (this.dataList.length - r <= 2 && this.fetchData(this.query.id), r + 1 === this.newsCount && this.dataList[r + 1]) ? (this.dataList[r + 1] = this.formatData(this.dataList[r + 1]), 
        this.setData((i = {}, (0, e.default)(i, "articleData[".concat(r + 1, "]"), this.dataList[r + 1]), 
        (0, e.default)(i, "current", r), i))) : this.setData({
            current: r
        });
        wx.vibrateShort({});
        var n = a.default.get(this.dataList, "[".concat(r, "]"), {}), s = n.articleId, c = n.atype, o = n.hasImage, d = n.title;
        (0, l.report)({
            opType: l.OP_TYPE.page_exposure,
            fromPage: this.data.fromPage,
            articleId: s,
            articleType: c
        }), (0, l.report)({
            opType: l.OP_TYPE.detail_page_end,
            fromPage: this.data.fromPage,
            articleId: s
        });
        var u = {
            aticleType: c,
            position: r,
            cell_pic: o ? 1 : 0,
            cell_title: d ? 1 : 0
        };
        (0, l.report)({
            opType: l.OP_TYPE.cell_click,
            fromPage: this.data.fromPage,
            articleId: s,
            extension: JSON.stringify(u)
        });
    },
    filter: function(t, e) {
        return t.filter(function(t) {
            return t.type === e;
        })[0];
    }
});