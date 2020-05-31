require("../../components/wux");

var e = getApp(), i = require("../../utils/md5.js"), t = require("../../utils/util.js");

Page({
    data: {
        timeout: !1,
        cornermark: "../../img/portfolio_corner_mark.png",
        headPreUrl: "http://www.windmoney.com.cn/mm/finance/img/headportrait/",
        adsTitle: "热点投资 独家机会",
        adsDesc: "限时1天，每周三更新",
        adsImgUrl: "",
        imgUrls: [ {
            link: "/pages/search/auth/auth",
            url: "http://114.80.214.59/UnitedWeb/CMS/pictures/20180606/142541_cmsFile.png"
        }, {
            link: "/pages/search/auth/auth",
            url: "https://www.windmoney.com.cn/mm/finance/img/ad_cdr.jpg"
        } ],
        indicatorDots: !0,
        autoplay: !0,
        circular: !0,
        interval: 5e3,
        duration: 1e3,
        systeminfo: e.data.systeminfo,
        isnewyear: !1,
        appname: "万得基金",
        appdesc: "与财富相伴，为梦想安家",
        showAuth: !1,
        cancel: function(e) {
            console.log(e.detail), this.wemodal.hide();
        },
        enterlist: [ {
            name: "热门主题",
            icon: "../../img/indexicon/theme.jpg",
            link: "/pages/hot/index"
        }, {
            name: "基金排行",
            icon: "../../img/indexicon/rank.png",
            link: "../fundrank/index/index"
        }, {
            name: "多维板块",
            icon: "../../img/indexicon/morerank.png",
            link: "../fundrank/index/index?ismore=1"
        }, {
            name: "新发基金",
            icon: "../../img/indexicon/newfund.png",
            link: "../fund/newindex/newindex"
        }, {
            name: "严选组合",
            icon: "../../img/indexicon/portfolio.png",
            link: "../portfolio/recommendation/index"
        }, {
            name: "基金公司",
            icon: "../../img/indexicon/company.png",
            link: "/pages/company/companyindex/companyindex"
        }, {
            name: "基金经理",
            icon: "../../img/indexicon/managers.png",
            link: "../managerrank/index/index",
            isnew: 0,
            link_share: "../managerrank/guide/guide?enterindex=5"
        } ],
        defaultManagerImgUrl: "../../img/defaulthead.png"
    },
    adJumpTo: function(i) {
        var t = i.currentTarget.dataset.detail, n = {
            actionType: "922602820001"
        };
        if (e.savePoint(n), t) {
            var a = JSON.parse(t);
            a && e.jumpMap(a.type, a.link, a.title);
        }
    },
    gotoEssay: function(e) {
        var i = e.currentTarget.dataset.url, t = e.currentTarget.dataset.title;
        if (i) {
            var n = "url=" + encodeURIComponent(i);
            t && (n = n + "&title=" + t, wx.navigateTo({
                url: "/pages/bigVipColumn/web/web?" + n
            }));
        }
    },
    gotoBigVip: function(e) {
        var i = e.currentTarget.dataset.account;
        i && wx.navigateTo({
            url: "/pages/bigVipColumn/bigVip/bigVip?weixinAccount=" + i + "&fromPage=searchindex"
        });
    },
    gotoBigVipColumn: function(e) {
        wx.navigateTo({
            url: "/pages/bigVipColumn/index"
        });
    },
    gotoAboutUs: function(e) {
        wx.navigateTo({
            url: "../static/about/about"
        });
    },
    gotoSearchFundDetail: function(e) {
        wx.navigateTo({
            url: "../webview/webview?url=https://mp.weixin.qq.com/s/MahhzIkZTBCOh6kQkFLtaQ"
        });
    },
    imggoto: function() {
        wx.navigateTo({
            url: "../worldcup/index"
        });
    },
    gotowxsearchad: function(e) {
        wx.navigateTo({
            url: "../static/ad_search/ad_search"
        });
    },
    gotoRecommendation: function(e) {
        wx.navigateTo({
            url: "../portfolio/recommendation/index"
        });
    },
    gotoCorrectSinglePage: function(e) {
        var i = e.currentTarget.dataset.code, t = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: t + "?code=" + i
        });
    },
    formSubmit: function(i) {
        e.addformid(i.detail.formId);
    },
    gotoSearch: function(i) {
        e.addformid(i.detail.formId), wx.navigateTo({
            url: "search"
        });
    },
    gotoAttention: function(i) {
        e.globalData.sessionId ? (e.addformid(i.detail.formId), wx.navigateTo({
            url: "../attention/attention"
        })) : this.setData({
            showAuth: !0
        });
    },
    notAuthToLogin: function() {
        this.setData({
            showAuth: !1
        });
    },
    enterSubPage: function(i) {
        e.addformid(i.detail.formId);
        var t = i.currentTarget.dataset.index, n = this.data.enterlist[t];
        if ("我的关注" == n.name) wx.switchTab({
            url: n.link
        }); else {
            if (1 == n.isnew && 1 != wx.getStorageSync("lockindex" + t)) return void wx.navigateTo({
                url: n.link_share
            });
            wx.navigateTo({
                url: n.link
            });
        }
    },
    convertStrTimeToDate: function(e) {
        var i = e.replace(/-/g, ":").replace(" ", ":").split(":");
        return new Date(i[0], i[1] - 1, i[2], i[3], i[4], 0);
    },
    isShowPeriod: function(e, i) {
        var t = this;
        try {
            var n = t.convertStrTimeToDate(e).getTime(), a = t.convertStrTimeToDate(i).getTime(), o = Date.now();
            if (n <= o && a >= o) return !0;
        } catch (e) {}
        return !1;
    },
    dealPortfolioData: function(e) {
        var i = this;
        if (e && e.starADVO) {
            var n = e.starADVO;
            if (n && n.length > 0) {
                var a = [];
                n.forEach(function(e, n) {
                    i.isShowPeriod(e.adStartDate, e.adEndDate) && (e.fundIncome = t.dealBenifitData(e.fundIncome), 
                    e.index = t.convertFundFlag(e.index), e.description = e.description.replace(/<productemphasize[^>]*>/, ""), 
                    e.description = e.description.replace("</productemphasize>", ""), e.description = e.description.replace(/<font[^>]*>/, ""), 
                    e.description = e.description.replace("</font>", ""), a.push(e));
                }), this.setData({
                    recommendationList: a
                });
            }
        }
    },
    dealBannerData: function(e) {
        var i = this;
        if (e && e.firBannerADVO) {
            var t = [];
            e.firBannerADVO.forEach(function(e, n) {
                if (i.isShowPeriod(e.adStartDate, e.adEndDate)) {
                    var a = {}, o = e.imageADDetail;
                    o && o[0] && (a.imgUrl = o[0].picUrl), a.jumpUrl = e.jumpUrl, t.push(a);
                }
            }), this.setData({
                ads: t
            });
        }
    },
    dealStarADData: function(e) {
        var i = this;
        if (e && e.starADVO) {
            var n = [];
            e.starADVO.forEach(function(e, a) {
                if (i.isShowPeriod(e.adStartDate, e.adEndDate)) {
                    var o = {};
                    o.fundName = e.fundName, o.fundIncome = t.dealBenifitData(e.fundIncome), o.fundCode = e.fundCode, 
                    o.jumpUrl = e.jumpUrl, o.index = t.convertFundFlag(e.index), e.description = e.description.replace(/<productemphasize[^>]*>/, ""), 
                    e.description = e.description.replace("</productemphasize>", ""), e.description = e.description.replace(/<font[^>]*>/, ""), 
                    e.description = e.description.replace("</font>", ""), o.description = e.description, 
                    n.push(o);
                }
            }), this.setData({
                weeklys: n
            });
        }
    },
    dealBigVData: function(e) {
        var n = this;
        if (e && e.bigvADVO) {
            var a = [];
            e.bigvADVO.forEach(function(e, o) {
                if (n.isShowPeriod(e.adStartDate, e.adEndDate)) {
                    var r = {};
                    r.bigvNickname = e.bigvNickname, r.paperTitle = e.paperTitle, r.paperUrl = e.paperUrl, 
                    r.picUrl = e.picUrl, r.publicAccountID = e.publicAccountID, r.weixinPic = n.data.headPreUrl + i.md5convert16(e.publicAccountID) + ".jpg", 
                    r.publishTime = t.formatTimeMark(e.paperTime), a.push(r);
                }
            }), n.setData({
                essays: a
            });
        }
    },
    getMutiADInfo: function(i) {
        var t = this, n = {
            appType: "03",
            adTypeModels: "02-01,03-04,09-04,11-05"
        };
        e.getData("QUERY_MULTI_AD_INFO", n, function(e) {
            e && (e["03"] && t.dealStarADData(e["03"]), e["02"] && t.dealBannerData(e["02"]), 
            e["09"] && t.dealPortfolioData(e["09"]), e[11] && t.dealBigVData(e[11])), i && wx.stopPullDownRefresh();
        }, function(e) {
            i && wx.stopPullDownRefresh();
        }, !0);
    },
    onLoad: function(i) {
        e.WeModal(), this.getMutiADInfo();
        var t = wx.getStorageSync("isFirst");
        if ("" === t || !0 === t) {
            var n = this;
            this.setData({
                isFirst: !0
            }), setTimeout(function() {
                wx.setStorageSync("isFirst", !1), n.setData({
                    isFirst: !1,
                    timeOut: !0
                });
            }, 1e4);
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        e.submitFormIds();
    },
    onUnload: function() {},
    onShareAppMessage: function() {
        return {
            title: "基金数据查询小程序，快来试试！",
            path: "/pages/search/searchindex"
        };
    },
    onPullDownRefresh: function() {
        this.getMutiADInfo(!0);
    }
});