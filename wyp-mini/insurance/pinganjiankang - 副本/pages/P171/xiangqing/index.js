var t = getApp(), a = require("../../../utils/util.js");

Page({
    data: {
        imgList: {},
        imgurl: [ t.globalData.wm1Url + "/wxresource/P171/img/ckxq_01.jpg", t.globalData.test1Url + "/wxresource/P171/img/ckxq_02.jpg", t.globalData.test1Url + "/wxresource/P171/img/ckxq_03.jpg", t.globalData.test1Url + "/wxresource/P171/img/bxal.jpg" ]
    },
    toLnsg: function() {
        wx.navigateTo({
            url: "../../P160/index/index"
        });
    },
    openPdf: function(r) {
        var e = t.globalData.wm1Url + r.target.dataset.pdfurl;
        a.getStaticPage(e);
    },
    jumpImgUrl: function(t) {
        var r = t.target.dataset, e = r.canclick, g = r.clickurltype, l = r.clickurl;
        "0" != e && a.jumpImgUrl(g, l);
    },
    getAllProductImg: function() {
        var t = this;
        a.getProductImg("P171", "WXXCX", 3).then(function(a) {
            var r = a.data.sort(function(t, a) {
                return t.sort - a.sort;
            });
            t.setData({
                imgList: {
                    bzxqImgList: r
                }
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    onLoad: function() {
        this.getAllProductImg();
    }
});