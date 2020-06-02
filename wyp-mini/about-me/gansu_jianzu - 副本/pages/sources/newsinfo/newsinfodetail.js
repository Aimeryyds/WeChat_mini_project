function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../network/api")), s = t(require("../../../utils/util.js")), a = require("../../../utils/wxParse/wxParse.js");

Page({
    data: {
        detail: {},
        comment: {}
    },
    onLoad: function(t) {
        this.setData({
            isShowStoreName: wx.getStorageSync("isShowStoreName")
        }), console.log(t), t.id && this.queryNewsInfoDetail({
            id: t.id
        });
    },
    queryNewsInfoDetail: function(t) {
        var s = this, o = this;
        wx.showLoading({
            title: "加载中"
        }), e.default.queryNewsinfoDetail(t).then(function(t) {
            wx.hideLoading(), o.setData({
                detail: t.data.info,
                isShow: !0
            }), o.renderModules(t);
            s.data.detail.content;
            a.wxParse("article", "html", s.data.detail.content, s, 5);
        }).catch(function(t) {
            wx.hideLoading(), console.log(t);
        });
    },
    renderModules: function(t) {
        var e = this.data.isShowStoreName, s = [];
        t.data.relations.forEach(function(t) {
            t.news && t.news.relationList && s.push({
                moduleName: "infoList",
                data: t.news.relationList
            }), t.supplyBuys && t.supplyBuys.relationList && s.push({
                moduleName: "supplyBuyList",
                data: t.supplyBuys.relationList
            }), t.brands && t.brands.relationList && s.push({
                moduleName: "brand",
                data: t.brands.relationList,
                options: {
                    showName: 1
                },
                noShowMore: !0
            }), t.stores && t.stores.relationList && s.push({
                moduleName: "storeList",
                data: t.stores.relationList
            }), t.goods && t.goods.relationList && s.push({
                moduleName: "goods",
                data: t.goods.relationList,
                options: {
                    listStyle: "type1"
                },
                isShowStoreName: e
            }), t.projects && t.projects.relationList && s.push({
                moduleName: "projectList",
                data: t.projects.relationList
            });
        }), this.setData({
            modules: s
        });
    },
    wxParseTagATap: function(t) {
        console.log(t, "++++++++++++");
        var e = t.currentTarget.dataset.src;
        wx.redirectTo({
            url: "/pages/webview/index?url=" + s.default.stringify(e)
        });
    }
});