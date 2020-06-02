var t = getApp(), a = require("../../../utils/util.js");

Page({
    data: {
        imgurl: [ t.globalData.test1Url + "/ehis-hm/wxresource/P137/img/ckxq_01.jpg", t.globalData.test1Url + "/ehis-hm/wxresource/P137/img/ckxq_03.jpg" ]
    },
    toEsbplus: function() {
        wx.navigateTo({
            url: "../P137/index/index"
        });
    },
    openPdf: function(e) {
        var r = t.globalData.baseUrl + e.target.dataset.pdfurl;
        (e.target.dataset.pdfurl.includes("http://") || e.target.dataset.pdfurl.includes("https://")) && (r = e.target.dataset.pdfurl), 
        a.getStaticPage(r);
    },
    onLoad: function() {}
});