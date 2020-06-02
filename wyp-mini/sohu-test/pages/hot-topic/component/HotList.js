function e(e) {
    var t = this;
    t.pageContext = e, t.pageStore = e.store, t.pageVendor = e.vendor;
}

getApp();

var t = require("../../../lib/es6-promise").Promise;

e.prototype.render = function(e) {
    var t = this, o = [];
    e.articles.forEach(function(e, a) {
        if (8 != e.newsType && -1 == e.link.indexOf("http://") && -1 == e.link.indexOf("http://")) {
            var r = t.pageVendor.util.getHour(e.publishTime);
            e.timeHour = r, o.push(e);
        }
    }), t.pageStore.setData(t.pageContext, {
        articleList: o
    });
}, e.prototype.load = function(e) {
    var o = this;
    return new t(function(t, a) {
        o.pageStore.setData(o.pageContext, {
            "firstLoading.loadhidde": !1
        }), o.pageVendor.req.getHotArticles(o.pageContext, e).then(function(e) {
            o.render(e.data), e.data.articles ? (setTimeout(function() {
                return wx.pageScrollTo({
                    scrollTop: 0
                });
            }, 0), o.pageStore.setData(o.pageContext, {
                "firstLoading.loadhidden": !0
            }), t(e.data.articles.length)) : a(new Error("no articles data"));
        }).catch(function(e) {
            o.pageStore.setData(o.pageContext, {
                isOffline: !0
            }), console.log("hot-list load err: " + e.message);
        });
    });
}, module.exports = e;