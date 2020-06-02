var t = getApp(), a = require("../../../utils/util.js");

Page({
    data: {
        imgurl: [ t.globalData.wm1Url + "/wxresource/P156/img/ckxq.jpg", t.globalData.test1Url + "/wxresource/P156/img/ckxq_02.jpg" ]
    },
    toEsbplus: function() {
        wx.navigateTo({
            url: "../P156/index/index"
        });
    },
    openPdf: function(e) {
        var r = t.globalData.wm1Url + e.target.dataset.pdfurl;
        a.getStaticPage(r);
    },
    onLoad: function() {}
});