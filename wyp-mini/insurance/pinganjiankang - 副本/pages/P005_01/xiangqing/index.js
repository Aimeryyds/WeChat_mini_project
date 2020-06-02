var t = getApp(), a = require("../../../utils/util.js");

Page({
    data: {
        imgurl: [ t.globalData.test1Url + "/wxresource/P005_01/img/ckxq_01.jpg", t.globalData.test1Url + "/wxresource/P005_01/img/ckxq_02.jpg", t.globalData.test1Url + "/wxresource/P005_01/img/ckxq_03.jpg", t.globalData.test1Url + "/wxresource/P005_01/img/ckxq_04.jpg", t.globalData.test1Url + "/wxresource/P005_01/img/ckxq_05.jpg", t.globalData.test1Url + "/wxresource/P005_01/img/ckxq_06.jpg" ]
    },
    toEsbplus: function() {
        wx.navigateTo({
            url: "../P005_01/index/index"
        });
    },
    openPdf: function(e) {
        var r = t.globalData.baseUrl + e.target.dataset.pdfurl;
        a.getStaticPage(r);
    },
    onLoad: function() {}
});