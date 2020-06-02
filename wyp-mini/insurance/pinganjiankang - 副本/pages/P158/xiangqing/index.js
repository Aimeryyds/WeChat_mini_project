var t = getApp(), a = require("../../../utils/util.js");

Page({
    data: {
        imgurl: [ t.globalData.test1Url + "/wxresource/P158/img/bzxq.jpg" ]
    },
    toEsbplus: function() {
        wx.navigateTo({
            url: "../P015/index/index"
        });
    },
    openPdf: function(e) {
        var i = t.globalData.wm1Url + e.target.dataset.pdfurl;
        a.getStaticPage(i);
    },
    onLoad: function() {}
});