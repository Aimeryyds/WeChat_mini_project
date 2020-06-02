var t = require("../../../utils/server"), a = wx.getStorageSync("utoken"), e = require("../../../wxParse/wxParse"), r = "";

Page({
    data: {
        showImage: !1,
        more: !1,
        imgUrls: [],
        imgLength: "",
        circular: !0,
        autoplay: !1,
        duration: 1e3,
        currIndex: 1,
        currImage: 0,
        aid: "",
        article_title: "",
        article_author: "",
        article_date: "",
        resp_desc: "",
        resp_img: "",
        avatar1: "",
        goodNum: "",
        numberPhone: ""
    },
    onLoad: function(i) {
        a = wx.getStorageSync("utoken"), (r = this).setData({
            aid: i.aid
        }), t.sendRequest({
            url: "?r=wxapp.article&utoken=" + a + "&aid=" + r.data.aid,
            method: "GET",
            success: function(t) {
                var a = [];
                a.push(t.data.result.resp_img), r.setData({
                    article_title: t.data.result.article_title,
                    article_author: t.data.result.article_author,
                    article_date: t.data.result.article_date,
                    resp_desc: t.data.result.resp_desc,
                    article_likenum: t.data.result.article_likenum,
                    article_report: t.data.result.article_report,
                    resp_img: t.data.result.resp_img,
                    imgUrls: a,
                    avatar: t.data.result.like_person,
                    goodNum: t.data.result.article_likenum,
                    article_contents: t.data.result.article_content
                }), e.wxParse("article", "html", r.data.article_contents, r, 5), r.data.avatar.length > 8 && r.setData({
                    more: !0
                }), r.setData({
                    imgLength: r.data.imgUrls.length
                });
            }
        });
    },
    onShow: function() {
        t.sendRequest({
            url: "?r=wxapp.article.like&utoken=" + a + "&aid=" + r.data.aid,
            method: "GET",
            success: function(t) {
                8 == r.getBLen(t.data.msg) ? r.setData({
                    isGood: !0
                }) : 14 == r.getBLen(t.data.msg) && r.setData({
                    isGood: !1
                });
            }
        }), t.sendRequest({
            url: "?r=wxapp.article&utoken=" + a + "&aid=" + r.data.aid,
            method: "GET",
            success: function(t) {
                var a = [];
                a.push(t.data.result.resp_img), r.setData({
                    article_title: t.data.result.article_title,
                    article_author: t.data.result.article_author,
                    article_date: t.data.result.article_date,
                    resp_desc: t.data.result.resp_desc,
                    article_likenum: t.data.result.article_likenum,
                    article_report: t.data.result.article_report,
                    resp_img: t.data.result.resp_img,
                    imgUrls: a,
                    avatar: t.data.result.like_person
                }), t.data.result.article_tel && r.setData({
                    numberPhone: t.data.result.article_tel
                }), r.data.avatar.length > 8 && r.setData({
                    more: !0
                }), r.setData({
                    imgLength: r.data.imgUrls.length
                });
            }
        });
    },
    joinReview1: function() {
        wx.navigateTo({
            url: "../reviewArea/reviewArea?aid=" + r.data.aid
        });
    },
    joinReview2: function() {
        wx.navigateTo({
            url: "../reviewArea/reviewArea?aid=" + r.data.aid
        });
    },
    joinImage: function() {
        (r = this).data.showImage || r.setData({
            showImage: !0
        });
    },
    currChange: function(t) {
        r.setData({
            currImage: t.detail.current,
            currIndex: t.detail.current + 1
        });
    },
    showImages: function() {
        (r = this).setData({
            showImage: !1
        });
    },
    giveGood: function() {
        r = this, t.sendRequest({
            url: "?r=wxapp.article.like&utoken=" + a + "&aid=" + r.data.aid,
            method: "GET",
            success: function(e) {
                console.log(e), 8 == r.getBLen(e.data.msg) ? r.setData({
                    isGood: !0
                }) : 12 == r.getBLen(e.data.msg) && r.setData({
                    isGood: !1
                }), t.sendRequest({
                    url: "?r=wxapp.article&utoken=" + a + "&aid=" + r.data.aid,
                    method: "GET",
                    success: function(t) {
                        r.setData({
                            article_likenum: t.data.result.article_likenum,
                            article_report: t.data.result.article_report,
                            avatar: t.data.result.like_person
                        }), r.data.avatar.length > 8 && r.setData({
                            more: !0
                        });
                    }
                });
            }
        });
    },
    getBLen: function(t) {
        return null == t ? 0 : ("string" != typeof t && (t += ""), t.replace(/[^\x00-\xff]/g, "ab").length);
    },
    onShareAppMessage: function(t) {
        return "button" === t.from && console.log(t.target), {
            title: r.data.article_title,
            path: "/pages/consultation/consultationDetail/consultationDetail?aid=" + r.data.aid
        };
    },
    artPhone: function() {
        var t = this;
        wx.makePhoneCall({
            phoneNumber: t.data.numberPhone
        });
    }
});