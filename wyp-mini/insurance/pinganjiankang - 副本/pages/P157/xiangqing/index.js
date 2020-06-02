var a = getApp(), t = require("../../../utils/util.js");

Page({
    data: {
        imgurl: [ a.globalData.wm1Url + "/wxresource/P157/img/bzxq.png", a.globalData.wm1Url + "/wxresource/P157/img/bzxq_02.png" ]
    },
    toEsbplus: function() {
        wx.navigateTo({
            url: "../P156/index/index"
        });
    },
    openPdf: function(e) {
        var r = a.globalData.wm1Url + e.target.dataset.pdfurl;
        t.getStaticPage(r);
    },
    onLoad: function() {}
});