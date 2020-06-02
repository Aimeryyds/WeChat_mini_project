var a = getApp(), t = require("../../../utils/util.js");

Page({
    data: {
        imgurl: [ a.globalData.wm1Url + "/wxresource/P160/img/bzjh.png", a.globalData.test1Url + "/wxresource/P156/img/ckxq_02.jpg" ]
    },
    toEsbplus: function() {
        wx.navigateTo({
            url: "../P015/index/index"
        });
    },
    openPdf: function(e) {
        var r = a.globalData.baseUrl + e.target.dataset.pdfurl;
        t.getStaticPage(r);
    },
    onLoad: function() {}
});